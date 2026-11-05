export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  accentTitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  stats: HeroStat[];
}

export interface ApproachStep {
  num: string;
  title: string;
  desc: string;
}

export interface ApproachContent {
  eyebrow: string;
  headline: string;
  highlightText: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  steps: ApproachStep[];
}

export interface WhyChooseCard {
  num: string;
  title: string;
  desc: string;
  footerText: string;
}

export interface WhyChooseContent {
  eyebrow: string;
  headline: string;
  accent: string;
  description: string;
  posterUrl: string;
  videoUrl: string;
  cards: WhyChooseCard[];
}

export interface ServiceItem {
  id: number;
  title: string;
  desc: string;
}

export interface ServicesContent {
  eyebrow: string;
  headline: string;
  description: string;
  items: ServiceItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  eyebrow: string;
  headline: string;
  description: string;
  mockupImage: string;
  items: FaqItem[];
}

export interface SeoContent {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  businessName: string;
  phone: string;
  email: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
}

export interface ImagesContent {
  logoDark: string;
  logoLight: string;
  approachImage: string;
  whyChoosePoster: string;
  whyChooseVideo: string;
  faqMockup: string;
  ogImage: string;
}

export interface HomepageFullData {
  hero: HeroContent;
  approach: ApproachContent;
  why_choose: WhyChooseContent;
  services_section: ServicesContent;
  faqs: FaqContent;
  seo: SeoContent;
  images: ImagesContent;
}

export const defaultHomepageData: HomepageFullData = {
  hero: {
    eyebrow: "DIGITAL MARKETING AGENCY IN MANGALORE",
    title: "Modern Marketing",
    accentTitle: "Real Results.",
    description: "As a premier digital marketing agency in Mangalore, we design custom websites, optimize organic Google rankings, and run high-ROI ad campaigns that scale local businesses across Karnataka and the GCC.",
    primaryCtaText: "Start Your Project",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Our Services",
    secondaryCtaLink: "/services",
    stats: [
      { value: 360, suffix: "+", label: "Projects Delivered" },
      { value: 50, suffix: "+", label: "Happy Clients" },
      { value: 3, suffix: "x", label: "Average Growth" },
      { value: 100, suffix: "%", label: "Results Focused" }
    ]
  },
  approach: {
    eyebrow: "OUR APPROACH",
    headline: "Strategy First.",
    highlightText: "Mangalore Businesses.",
    description: "As an experienced SEO company and website development company in Mangalore, we combine search strategy, modern UI/UX design, and ROI-focused ad campaigns tailored to local market dynamics.",
    ctaText: "Let's Build Together",
    ctaLink: "/contact",
    image: "/OUR-APPROACH.avif",
    steps: [
      {
        num: "01",
        title: "UNDERSTAND",
        desc: "We learn about your business, audience, market and goals to find the right opportunities."
      },
      {
        num: "02",
        title: "STRATEGIZE",
        desc: "We create a tailored roadmap that aligns with your specific growth and revenue targets."
      },
      {
        num: "03",
        title: "CREATE",
        desc: "Our design, development and marketing teams bring ideas to life with precision and speed."
      },
      {
        num: "04",
        title: "GROW",
        desc: "We analyze data, measure KPIs, optimize conversions, and scale your brand in Mangalore."
      }
    ]
  },
  why_choose: {
    eyebrow: "WHY",
    headline: "Why Choose",
    accent: "ZAVIROQ?",
    description: "We combine strategy, creativity, and technology to help businesses grow — no matter where you are. With a fully remote team, we deliver high-quality solutions at a more affordable cost, without compromising on excellence.",
    posterUrl: "/assets/images/why-img.avif",
    videoUrl: "/assets/images/zaviroq-videos.mp4",
    cards: [
      {
        num: "01",
        title: "Remote-First Advantage",
        desc: "Our fully remote setup helps us stay efficient and cost-effective — so you get premium solutions at affordable prices.",
        footerText: "MORE VALUE, LESS OVERHEAD"
      },
      {
        num: "02",
        title: "Expert Team",
        desc: "Work with a skilled team of designers, developers, and marketers who are experts in their fields and passionate about your success.",
        footerText: "SPECIALISTS YOU CAN TRUST"
      },
      {
        num: "03",
        title: "Always Here for You",
        desc: "Time zone is not a barrier. Our team is available whenever you need support, updates, or guidance.",
        footerText: "REAL SUPPORT. ANYTIME."
      },
      {
        num: "04",
        title: "Focused on Your Growth",
        desc: "We don't just deliver services — we become your growth partner, aligned with your long-term goals and success.",
        footerText: "YOUR GROWTH OUR PRIORITY"
      }
    ]
  },
  services_section: {
    eyebrow: "OUR SERVICES",
    headline: "What We Do",
    description: "High-performing digital marketing and technology solutions engineered for growth.",
    items: [
      { id: 1, title: "Website Design", desc: "High-performing, custom websites built for your brand." },
      { id: 2, title: "SEO", desc: "Get found. Get traffic. Get results." },
      { id: 3, title: "Graphic Design", desc: "Creative designs that make an impact." },
      { id: 4, title: "Advertising", desc: "Targeted ads that drive real growth." },
      { id: 5, title: "Web Development", desc: "Scalable solutions with modern technologies." },
      { id: 6, title: "Social Media Management", desc: "Build your brand. Engage your audience." },
      { id: 7, title: "Consultation", desc: "Get expert guidance for your digital growth." }
    ]
  },
  faqs: {
    eyebrow: "FAQ",
    headline: "Got Questions? We've Got Answers.",
    description: "Everything you need to know about working with Zaviroq. Still have a question? We're just a message away.",
    mockupImage: "/assets/images/faq-mockup.png",
    items: [
      {
        question: "What services does Zaviroq offer?",
        answer: "We offer website design, SEO, graphic design, and advertising solutions to help businesses build a strong digital presence and grow online."
      },
      {
        question: "How does your remote working model work?",
        answer: "We operate entirely online, collaborating via advanced project management tools and video conferencing to deliver seamless global service."
      },
      {
        question: "Why are your services affordable?",
        answer: "By maintaining a distributed remote team and minimizing corporate overhead, we pass on those cost savings directly to our clients without compromising quality."
      },
      {
        question: "How long does it take to complete a website?",
        answer: "Most custom corporate websites take 4 to 8 weeks depending on complexity, features, and the speed of feedback cycles."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer comprehensive maintenance and retainer packages to ensure your digital assets remain secure and up-to-date."
      },
      {
        question: "Can I request custom services?",
        answer: "Absolutely. We specialize in custom-tailored solutions engineered specifically for your unique business architecture."
      },
      {
        question: "How can I get started?",
        answer: "Simply reach out via our contact form or book a free consultation call. We'll audit your current setup and propose a strategic roadmap."
      }
    ]
  },
  seo: {
    title: "Digital Marketing Agency in Mangalore | Zaviroq",
    description: "Zaviroq helps businesses grow with SEO, Google Ads, social media marketing, and web development in Mangalore, India, the UAE, and Saudi Arabia.",
    keywords: "digital marketing agency mangalore, seo company mangalore, web design mangalore, google ads mangalore",
    canonicalUrl: "https://www.zaviroq.com/",
    ogTitle: "Zaviroq - Digital Marketing Agency in Mangalore",
    ogDescription: "High-performing digital marketing, website development, SEO, and paid media engineered for GCC and Indian brands.",
    ogImage: "/og-image.png",
    businessName: "Zaviroq - Digital Marketing Agency in Mangalore",
    phone: "+917483830582",
    email: "info@zaviroq.com",
    addressLocality: "Mangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN"
  },
  images: {
    logoDark: "/logo.svg",
    logoLight: "/zaviroq-logo-white.png",
    approachImage: "/OUR-APPROACH.avif",
    whyChoosePoster: "/assets/images/why-img.avif",
    whyChooseVideo: "/assets/images/zaviroq-videos.mp4",
    faqMockup: "/assets/images/faq-mockup.png",
    ogImage: "/og-image.png"
  }
};
