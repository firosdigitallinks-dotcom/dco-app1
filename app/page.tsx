import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { getSiteData } from "../db/site";
import { withBasePath } from "../lib/base-path";
import { whatsappLink } from "../lib/links";
import { buildPageMetadata } from "../lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildPageMetadata({
    settings: data.setting,
    fallbackTitle: "Cleaning Equipment Suppliers in Oman | Diamond Capital Oasis",
    fallbackDescription:
      "Diamond Capital Oasis, a division of Hygiene Links, supplies a comprehensive range of cleaning equipment, chemicals, dispensers, garbage bins, bags and tissue products for businesses across Oman.",
    canonicalPath: "/",
  });
}

const productCategories = [
  {
    title: "Mop Buckets and Cleaning Equipment",
    description: "Mops, wringers, buckets and cleaning accessories.",
  },
  {
    title: "Garbage Bins",
    description: "Indoor, outdoor and waste segregation bins.",
  },
  {
    title: "Tissue Products",
    description: "Maxi rolls, toilet rolls, facial tissues and paper towels.",
  },
  {
    title: "Cleaning Chemicals",
    description: "Cleaning solutions for floors, washrooms and surfaces.",
  },
  {
    title: "Soap and Sanitizer Dispensers",
    description: "Essential washroom hygiene solutions.",
  },
  {
    title: "Garbage Bags",
    description: "Durable and biodegradable waste collection bags.",
  },
  {
    title: "Floor Cleaning Equipment",
    description: "Professional floor maintenance tools.",
  },
  {
    title: "Window Cleaning Equipment",
    description: "Squeegees, washers and accessories.",
  },
  {
    title: "Air Freshener Dispensers",
    description: "Products for fresh indoor environments.",
  },
  {
    title: "Housekeeping Supplies",
    description: "Essential products for hotels and commercial facilities.",
  },
];

const featuredProducts = [
  {
    name: "Maxi Roll Auto-Cut Dispenser",
    image: "/imported-products/auto-cut-maxi-roll-dispenser.jpg",
  },
  {
    name: "Double Mop Bucket",
    image: "/imported-products/mop-bucket-double.png",
  },
  {
    name: "OXO Biodegradable Garbage Bags",
    image: "/imported-products/oxo-biodegradable-garbage-bag.jpg",
  },
  {
    name: "Hand Sanitizer",
    image: "/imported-products/hand-sanitizer-gel.png",
  },
  {
    name: "Soap Dispenser",
    image: "/imported-products/soap-dispenser-steel.png",
  },
  {
    name: "Professional Window Squeegee",
    image: "/imported-products/stainless-steel-squeegee.png",
  },
  {
    name: "Waste Segregation Bins",
    image: "/imported-products/ashtray-bins.png",
  },
  {
    name: "Air Freshener Dispenser",
    image: "/imported-products/air-freshener-dispenser-hi-care.jpg",
  },
];

const industries = [
  {
    name: "Hotels and Resorts",
    description: "Housekeeping supplies, tissue products and dispensers.",
  },
  {
    name: "Hospitals and Clinics",
    description: "Disinfectants, hygiene products and waste bins.",
  },
  {
    name: "Corporate Offices",
    description: "Cleaning materials, tissues and washroom supplies.",
  },
  {
    name: "Schools",
    description: "Floor-cleaning equipment and hygiene essentials.",
  },
  {
    name: "Factories and Warehouses",
    description: "Industrial cleaning equipment and waste management products.",
  },
  {
    name: "Cleaning Contractors",
    description: "Professional janitorial supplies and cleaning tools.",
  },
  {
    name: "Restaurants and Retail",
    description: "Surface cleaners, garbage bags and tissue products.",
  },
];

const whyChooseUs = [
  {
    title: "Complete Product Range",
    description:
      "Cleaning equipment, chemicals, tissue products and washroom essentials under one roof.",
  },
  {
    title: "Wide Product Selection",
    description:
      "Solutions for commercial and industrial cleaning requirements.",
  },
  {
    title: "Bulk Supply",
    description:
      "Cleaning supplies for hotels, hospitals, factories and other businesses.",
  },
  {
    title: "17 Locations Across Oman",
    description: "Serving customers across multiple regions.",
  },
  {
    title: "Industry-Focused Solutions",
    description:
      "Products for housekeeping, hygiene and facility maintenance.",
  },
  {
    title: "Customer Support",
    description: "Assistance with product enquiries and quotations.",
  },
];

const howWeWork = [
  {
    step: "Step 1",
    title: "Choose Your Products",
    description:
      "Explore our product categories and identify your requirements.",
  },
  {
    step: "Step 2",
    title: "Send an Enquiry",
    description:
      "Share product names, quantities and your location through our website, WhatsApp or phone.",
  },
  {
    step: "Step 3",
    title: "Get a Quote",
    description: "Receive pricing and order details from our team.",
  },
  {
    step: "Step 4",
    title: "Arrange Delivery",
    description:
      "Confirm your order and coordinate delivery to your location.",
  },
];

const locations = [
  {
    region: "Muscat",
    places: "Ruwi, Ghala, Misfa, Al Amarat, Mabela and Seeb.",
  },
  {
    region: "Al Batinah",
    places: "Barka, Musannah, Rustaq, Saham and Sohar.",
  },
  {
    region: "Interior and North",
    places: "Ibri, Musandam, Nizwa, Samail, Ibra and Sur.",
  },
];

const faqs = [
  {
    question: "1. Which areas in Oman does Diamond Capital Oasis serve?",
    answer:
      "We serve 17 locations across Oman, including Muscat, Al Batinah, Dakhiliyah and Sharqiyah. Contact our team to enquire about supplies in your area.",
  },
  {
    question: "2. Do you supply cleaning products in bulk?",
    answer:
      "Businesses can enquire about bulk cleaning supplies for hotels, hospitals, offices, factories and other commercial facilities.",
  },
  {
    question: "3. Are you a cleaning products manufacturer or supplier?",
    answer:
      "Diamond Capital Oasis offers a range of cleaning products and equipment. Contact our team to confirm specific manufacturing capabilities and product details.",
  },
  {
    question: "4. How can I request a quotation?",
    answer:
      "You can contact us through our website enquiry form, WhatsApp or phone. Share your product requirements and quantities to receive a quotation.",
  },
  {
    question: "5. Do you offer eco-friendly or biodegradable products?",
    answer:
      "Our product range includes OXO biodegradable garbage bags. Contact our team to enquire about available eco-friendly cleaning and waste management products.",
  },
];

export default async function Home() {
  const data = await getSiteData();
  const { setting } = data;
  const whatsapp = setting.whatsapp ?? "971505689879";

  return (
    <>
      <SiteHeader settings={setting} />
      <main>
        {/* Section 1 – Hero Section */}
        <section className="hero hero--dco" id="hero">
          <div className="hero-orb hero-orb--one" />
          <div className="hero-orb hero-orb--two" />
          <div className="shell hero__inner">
            <div className="hero__copy">
              <p className="eyebrow">
                <span />
                Diamond Capital Oasis · Division of Hygiene Links
              </p>
              <h1>Cleaning Equipment Suppliers in Oman</h1>
              <p className="hero__lead">
                Diamond Capital Oasis, a division of Hygiene Links, supplies a
                comprehensive range of cleaning equipment, chemicals,
                dispensers, garbage bins, bags and tissue products for
                businesses across Oman.
              </p>
              <div className="hero__actions">
                <a
                  className="button button--primary button--large"
                  href={withBasePath("/#product-categories")}
                >
                  Explore Our Products <span>↗</span>
                </a>
                <a
                  className="button button--whatsapp button--large"
                  href={whatsappLink(whatsapp, { product: "Cleaning Equipment in Oman" })}
                >
                  <WhatsAppIcon />
                  Enquire on WhatsApp
                </a>
              </div>
              <div className="hero__proof">
                <div className="avatar-stack" aria-hidden="true">
                  <span>FM</span>
                  <span>HC</span>
                  <span>HO</span>
                </div>
                <p>
                  <strong>Trusted by professional teams</strong>
                  <span>Facilities · Healthcare · Hospitality</span>
                </p>
              </div>
            </div>

            <div className="hero-showcase" aria-label="Featured Diamond Capital Oasis products">
              <div className="showcase-grid" />
              <div className="showcase-label">
                <span>REGIONAL CATALOG</span>
                <strong>{setting.catalog_claim ?? "500+"}</strong>
                <small>PRODUCTS</small>
              </div>
              <div className="showcase-products">
                <article className="showcase-product showcase-product--cleaner">
                  <span className="showcase-product__tag">IN-HOUSE FORMULA</span>
                  <img
                    src={withBasePath("/products/floor-cleaner.jpg")}
                    alt="Floor and bathroom cleaner"
                    width="197"
                    height="334"
                  />
                  <div>
                    <span>Cleaning chemicals</span>
                    <strong>Facility care</strong>
                  </div>
                </article>
                <article className="showcase-product showcase-product--tissue">
                  <img
                    src={withBasePath("/products/maxi-roll.png")}
                    alt="Maxi paper roll"
                    width="104"
                    height="147"
                  />
                  <div>
                    <span>Manufactured</span>
                    <strong>Tissue & paper</strong>
                  </div>
                </article>
                <article className="showcase-product showcase-product--can">
                  <img
                    src={withBasePath("/products/jerry-can.jpg")}
                    alt="Plastic jerry can"
                    width="130"
                    height="125"
                  />
                  <div>
                    <span>Custom options</span>
                    <strong>Jerry cans</strong>
                  </div>
                </article>
                <article className="showcase-product showcase-product--bags">
                  <img
                    src={withBasePath("/imported-products/garbage-bag-transparent.png")}
                    alt="Professional garbage bags"
                    width="146"
                    height="148"
                  />
                  <div>
                    <span>Commercial essentials</span>
                    <strong>Garbage bags</strong>
                  </div>
                </article>
                <article className="showcase-product showcase-product--dispenser">
                  <img
                    src={withBasePath("/imported-products/soap-dispenser-steel.png")}
                    alt="Stainless steel soap dispenser"
                    width="104"
                    height="149"
                  />
                  <div>
                    <span>Washroom care</span>
                    <strong>Dispensers</strong>
                  </div>
                </article>
              </div>
              <div className="showcase-since">
                <img
                  src={withBasePath("/brand/dco-mark.png")}
                  alt="Diamond Capital Oasis mark"
                  width="48"
                  height="48"
                />
                <span>
                  Established
                  <strong>Since 2006</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 – About Us */}
        <section className="section section--about-dco" id="about-us">
          <div className="shell">
            <div className="about-dco__card">
              <div className="about-dco__content">
                <p className="eyebrow">About Us</p>
                <h2>Your Trusted Cleaning Material Supplier in Oman</h2>
                <div className="about-dco__text">
                  <p>
                    Diamond Capital Oasis provides quality cleaning products and
                    equipment for commercial, industrial and institutional
                    requirements. As a Cleaning Material Supplier in Oman, we
                    offer a wide selection of janitorial supplies, cleaning
                    chemicals, washroom products and housekeeping essentials.
                  </p>
                  <p>
                    Our product range includes mops, buckets, cleaning trolleys,
                    garbage bags, waste bins, tissue products and dispensers.
                    From hotels and hospitals to offices and industrial
                    facilities, we support businesses with essential cleaning
                    and hygiene supplies.
                  </p>
                  <p>
                    Serving 17 locations across Oman, we aim to make cleaning and
                    housekeeping products accessible to businesses across
                    different regions.
                  </p>
                </div>
                <div className="about-dco__action">
                  <a className="button button--primary" href={withBasePath("/catalog.html")}>
                    Explore Our Products <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 – Product Categories */}
        <section className="section section--mist" id="product-categories">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Product Categories</p>
              <h2>Cleaning Products and Equipment We Supply</h2>
              <p>
                Explore our range of professional cleaning and hygiene essentials.
              </p>
            </div>
            <div className="dco-category-grid">
              {productCategories.map((category) => (
                <a
                  key={category.title}
                  href={withBasePath("/catalog.html")}
                  className="dco-category-item"
                >
                  <div className="dco-category-item__body">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                  <span className="dco-category-item__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 – Featured Products */}
        <section className="section" id="featured-products">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Featured Products</p>
              <h2>Our Popular Products</h2>
              <p>
                Discover essential products for everyday commercial cleaning and
                hygiene requirements.
              </p>
            </div>
            <div className="dco-product-grid">
              {featuredProducts.map((product) => (
                <article key={product.name} className="dco-product-card">
                  <div className="dco-product-card__image-wrap">
                    <img
                      src={withBasePath(product.image)}
                      alt={product.name}
                      width={300}
                      height={300}
                      loading="lazy"
                    />
                  </div>
                  <div className="dco-product-card__body">
                    <h3>{product.name}</h3>
                    <div className="dco-product-card__action">
                      <a
                        className="button button--outline button--small"
                        href={withBasePath("/contact.html")}
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="dco-section-action">
              <a
                className="button button--primary button--large"
                href={withBasePath("/contact.html")}
              >
                Enquire Now <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 5 – Industries We Serve */}
        <section className="section section--mist" id="industries">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Industries We Serve</p>
              <h2>Cleaning Solutions for Every Industry</h2>
              <p>
                We supply commercial cleaning products and housekeeping
                essentials to businesses across various sectors.
              </p>
            </div>
            <div className="industry-grid">
              {industries.map((industry, index) => (
                <div key={industry.name} className="dco-industry-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{industry.name}</h3>
                    <p>{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 – Why Choose Us? */}
        <section className="section" id="why-choose-us">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Why Choose Us?</p>
              <h2>Why Businesses in Oman Choose Diamond Capital Oasis</h2>
            </div>
            <div className="dco-why-grid">
              {whyChooseUs.map((item, index) => (
                <article key={item.title} className="dco-why-card">
                  <span className="dco-why-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="dco-why-card__body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7 – How We Work */}
        <section className="section section--mist" id="how-we-work">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">How We Work</p>
              <h2>How to Order Cleaning Supplies from Us</h2>
              <p>
                Getting the right cleaning products for your business is simple.
              </p>
            </div>
            <div className="dco-steps-grid">
              {howWeWork.map((step) => (
                <div key={step.step} className="dco-step-card">
                  <span className="dco-step-card__badge">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
            <div className="dco-section-action">
              <a
                className="button button--primary button--large"
                href={withBasePath("/contact.html")}
              >
                Start Your Enquiry <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 8 – Locations We Serve */}
        <section className="section" id="locations">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Locations We Serve</p>
              <h2>Cleaning Equipment Suppliers Across Oman</h2>
              <p>
                Diamond Capital Oasis supplies cleaning equipment, chemicals and
                housekeeping products across 17 locations in Oman. Explore our
                location pages to find relevant products and enquire about
                supplies in your area.
              </p>
            </div>
            <div className="dco-locations-grid">
              {locations.map((loc) => (
                <div key={loc.region} className="dco-location-card">
                  <div className="dco-location-card__header">
                    <span
                      className="dco-location-card__pin"
                      aria-hidden="true"
                    >
                      📍
                    </span>
                    <h3>{loc.region}</h3>
                  </div>
                  <p>{loc.places}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9 – Frequently Asked Questions */}
        <section className="section section--mist" id="faq">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Frequently Asked Questions</p>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="faq-item" open={index === 0}>
                  <summary className="faq-item__question">
                    <div className="faq-item__header">
                      <span className="faq-item__tag">FAQ {index + 1}</span>
                      <h3 className="faq-item__title">{faq.question}</h3>
                    </div>
                    <span className="faq-item__toggle" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="faq-item__answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10 – Final CTA */}
        <section className="section" id="quote">
          <div className="shell">
            <div className="dco-final-cta-card">
              <div className="dco-final-cta-content">
                <p className="eyebrow">Final CTA</p>
                <h2>Get a Quote for Your Business</h2>
                <p>
                  Looking for reliable cleaning equipment suppliers in Oman?
                  Contact Diamond Capital Oasis for cleaning equipment,
                  chemicals and housekeeping essentials. Share your requirements
                  and request a quotation today.
                </p>
                <div className="dco-final-cta-actions">
                  <a
                    className="button button--primary button--large"
                    href={withBasePath("/contact.html")}
                  >
                    Request a Quote <span>↗</span>
                  </a>
                  <a
                    className="button button--whatsapp button--large"
                    href={whatsappLink(whatsapp, { product: "Cleaning Equipment in Oman" })}
                  >
                    <WhatsAppIcon />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter settings={setting} />
    </>
  );
}
