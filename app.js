import { createServer } from "node:http";
import fs from "node:fs";
import path from "node:path";
import next from "next";

function log(msg) {
  try {
    fs.appendFileSync("debug.log", `[${new Date().toISOString()}] ${msg}\n`);
  } catch {}
}

log("app.js booting...");

// Automatically load production environment variables if present
if (typeof process.loadEnvFile === "function") {
  for (const file of [".env.production", ".env"]) {
    if (fs.existsSync(file)) {
      try {
        process.loadEnvFile(file);
      } catch {}
    }
  }
}

// Ensure .next/server/preview-props.json exists for Next.js 16.4+ runtimes
try {
  const previewPropsPath = path.join(process.cwd(), ".next", "server", "preview-props.json");
  if (!fs.existsSync(previewPropsPath)) {
    let preview = {
      previewModeId: "d2b17d38e11ea143735d84d1113bcfa2",
      previewModeSigningKey: "aaeeb54893fefb590f94e29d8b7b10c0afcb48608abc0efbde41a010345dc3ac",
      previewModeEncryptionKey: "75395ec3ea58c31d38d5d77d7618b46c57168031bd09932f03e89fcf456db419",
    };
    const prerenderPath = path.join(process.cwd(), ".next", "prerender-manifest.json");
    if (fs.existsSync(prerenderPath)) {
      try {
        const pm = JSON.parse(fs.readFileSync(prerenderPath, "utf8"));
        if (pm.preview) preview = pm.preview;
      } catch {}
    }
    fs.mkdirSync(path.dirname(previewPropsPath), { recursive: true });
    fs.writeFileSync(previewPropsPath, JSON.stringify(preview, null, 2));
    log("Created missing preview-props.json manifest");
  }
} catch (e) {
  log(`Failed to create preview-props.json: ${e}`);
}

const rawPort = process.env.PORT;
const isNumericPort = rawPort && !isNaN(Number(rawPort));
const port = isNumericPort ? Number(rawPort) : 3000;
const hostname = process.env.HOST || "0.0.0.0";
const basePath = (
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : (process.env.BASE_PATH !== undefined ? process.env.BASE_PATH : "")
).replace(/\/$/, "");

const dev = false;
const application = next({ dev, hostname, port });
const handle = application.getRequestHandler();

let isReady = false;
let startupError = null;

const server = createServer((req, res) => {
  if (req.url && (req.url.endsWith("/__status") || req.url === "/__status")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify(
        {
          status: "online",
          version: "dco-app-v2-production",
          timestamp: new Date().toISOString(),
          basePath,
          node: process.version,
          isReady,
          startupError: startupError ? startupError.message : null,
        },
        null,
        2,
      ),
    );
    return;
  }

  if (startupError) {
    res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
    res.end(
      `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:40px;background:#fff5f5;color:#900"><h2>Application Startup Error</h2><pre style="background:#fff;padding:20px;border:1px solid #fcc;border-radius:6px;overflow:auto">${startupError?.stack || startupError}</pre></body></html>`,
    );
    return;
  }

  if (!isReady) {
    res.writeHead(503, {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "2",
    });
    res.end(
      `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:40px;text-align:center"><h2>Application Starting Up...</h2><p>Please refresh in a few seconds.</p></body></html>`,
    );
    return;
  }

  if (basePath && req.url && !req.url.startsWith(basePath)) {
    req.url = `${basePath}${req.url === "/" ? "" : req.url}`;
  }

  handle(req, res);
});

if (typeof globalThis.PhusionPassenger !== "undefined") {
  server.listen("passenger", () => {
    log("Listening on Phusion Passenger");
  });
} else if (rawPort && !isNumericPort) {
  server.listen(rawPort, () => {
    log(`Listening on socket: ${rawPort}`);
  });
} else {
  server.listen(port, hostname, () => {
    log(`Listening on ${hostname}:${port}`);
  });
}

log("Calling application.prepare()...");
application
  .prepare()
  .then(() => {
    isReady = true;
    log("Next.js prepared successfully! Ready for requests.");
  })
  .catch((err) => {
    startupError = err;
    log(`Startup error: ${err?.stack || err}`);
  });
