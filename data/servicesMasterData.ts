// data/servicesMasterData.ts
// Comprehensive Master Registry for all 12 Parent Categories and Sub-services

export interface SubServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string;
  heroDesc: string;
  deliverables: string[];
  specs?: string[];
  faqs?: Array<{ q: string; a: string }>;
}

export interface ParentCategoryItem {
  slug: string;
  title: string;
  shortTitle: string;
  categoryGroup: 'web-development' | 'digital-marketing' | 'creative-media' | 'business-solutions';
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  eyebrow: string;
  tagline: string;
  heroSub: string;
  color: string;
  iconName: string;
  stats: Array<{ number: string; label: string; desc: string }>;
  subservices: SubServiceItem[];
  outcomes: Array<{ title: string; desc: string; fix: string }>;
  roadmap: Array<{ month: string; phase: string; focus: string; highlight: string; milestones: string[] }>;
  faqs: Array<{ q: string; a: string }>;
}

export const servicesMasterData: ParentCategoryItem[] = [
  // 1. Digital Marketing
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing Services',
    shortTitle: 'Digital Marketing',
    categoryGroup: 'digital-marketing',
    metaTitle: 'Digital Marketing Agency in Mangalore | Data-Driven Growth - Zaviroq',
    metaDesc: 'Zaviroq is the premier digital marketing agency in Mangalore. We engineer performance marketing, content strategy, and qualified lead generation across Karnataka & the GCC.',
    keywords: [
      'digital marketing agency in mangalore',
      'digital marketing company in mangalore',
      'best digital marketing services mangalore',
      'online marketing company mangalore',
      'lead generation agency mangalore'
    ],
    eyebrow: '#1 ROI-DRIVEN PAID ADVERTISING AGENCY IN MANGALORE',
    tagline: 'Maximize Return on Ad Spend with Precision PPC & Conversion Funnels.',
    heroSub: 'Most PPC agencies in Mangalore run automated campaigns that waste ad spend on broad-match terms and negative search clicks. At Zaviroq, we engineer high-converting paid search and social campaigns that drive verified sales, not vanity clicks.',
    color: '#8b5cf6',
    iconName: 'Megaphone',
    stats: [
      { number: '4.8x', label: 'Average ROAS', desc: 'Achieved across Google Search and Performance Max campaigns.' },
      { number: '₹12Cr+', label: 'Ad Spend Managed', desc: 'Managed across Indian, UAE, and international search markets.' },
      { number: '-38%', label: 'CPA Reduction', desc: 'Average cost-per-acquisition decrease achieved in the first 60 days.' },
      { number: '99.4%', label: 'Tracking Accuracy', desc: 'Server-side conversion API tracking for accurate attribution.' }
    ],
    outcomes: [
      { title: 'Stop Wasting Ad Budgets on Unqualified Clicks', desc: 'Target only buyers who have active purchase intent in your service territory.', fix: 'Search Intent Funnels & Multi-Stage Audience Retargeting' },
      { title: 'Automate Lead Follow-Up & Sales Conversions', desc: 'Prevent leads from falling through the cracks when your sales team is busy.', fix: 'Automated CRM Pipelines & Omnichannel Nurturing Sequences' },
      { title: 'Establish Undisputed Regional Authority', desc: 'Outposition local competitors with thought leadership and premium content.', fix: 'Authority Content Publishing & Digital PR Mentions' },
      { title: 'Scale Client Acquisition into the Gulf', desc: 'Expand your customer base into Dubai, Riyadh, and Qatar seamlessly.', fix: 'Bilingual GCC Campaign Architecture & High-Performing Landing Pages' }
    ],
    roadmap: [
      { month: 'Month 01', phase: 'Audit & Funnel Architecture', focus: 'Tracking Fixes & Customer Profiling', highlight: 'Full Funnel Diagnosis', milestones: ['Audit current analytics, conversion tracking, and pixel health', 'Identify primary high-value buyer personas in Mangalore and Karnataka', 'Map out multi-touch conversion funnels from cold click to closed customer', 'Deploy optimized landing pages with sub-second mobile loading speeds'] },
      { month: 'Month 02', phase: 'Campaign Launch & Content Velocity', focus: 'Multi-Channel Acquisition & Testing', highlight: 'Targeted Lead Generation', milestones: ['Launch intent-targeted search campaigns and high-retention social creatives', 'Publish authoritative topical guides and localized case study assets', 'A/B test ad copy, headlines, and click-to-call conversion elements', 'Implement automated email follow-up sequences for immediate lead response'] },
      { month: 'Month 03', phase: 'Optimization & Revenue Scaling', focus: 'ROAS Maximization & Market Domination', highlight: 'Predictable Pipeline Growth', milestones: ['Scale budget into top-performing audience segments and high-converting channels', 'Refine cost-per-acquisition (CPA) targets based on actual sales closing rates', 'Activate customer review velocity flywheels to strengthen brand credibility', 'Conduct bi-weekly executive growth reviews with your dedicated strategist'] }
    ],
    faqs: [
      { q: 'What makes Zaviroq the best digital marketing agency in Mangalore?', a: 'Zaviroq stands apart from traditional Mangalore agencies by focusing strictly on commercial revenue and verified leads, not just likes and impressions. We combine technical expertise, conversion-led strategy, premium creative, and data-driven optimisation to deliver measurable business growth.' },
      { q: 'How quickly can we see results from a digital marketing campaign?', a: 'Paid search and targeted advertising campaigns typically begin generating qualified inbound inquiries within the first 7 to 14 days of launch. Organic content marketing and reputation building compound over 60 to 90 days to establish sustainable, non-paid customer acquisition.' },
      { q: 'Which digital marketing channels work best for Mangalore businesses?', a: 'The ideal channel mix depends on your industry. Local clinics, real estate builders, and service firms achieve immediate ROI through Google Search Ads and Local Maps optimization. B2B exporters and technology companies thrive on LinkedIn marketing and thought-leadership SEO, while retail brands excel with Instagram reels and Meta performance ads.' }
    ],
    subservices: [
      {
        slug: 'content-marketing',
        title: 'Content Marketing',
        shortDesc: 'Authoritative, research-backed content that establishes industry leadership and ranks on Google.',
        metaTitle: 'Content Marketing Agency in Mangalore | Authority Content - Zaviroq',
        metaDesc: 'Publish authoritative content that ranks on Google and converts readers into buyers. Zaviroq crafts research-driven content strategies in Mangalore.',
        keywords: 'content marketing mangalore, content writing agency mangalore, b2b content marketing',
        heroDesc: 'Stop publishing generic blog posts that nobody reads. We engineer research-backed content assets, industry case studies, and thought-leadership articles that answer the exact commercial questions your prospects are asking on Google.',
        deliverables: ['Topical Authority Content Strategy', 'SEO-Optimized Long-Form Articles', 'Whitepapers & Executive Briefs', 'Case Studies & Success Proof', 'Multi-Channel Content Repurposing']
      },
      {
        slug: 'lead-generation',
        title: 'Lead Generation',
        shortDesc: 'Predictable B2B and B2C inbound sales pipelines with verified contact data.',
        metaTitle: 'B2B & B2C Lead Generation Agency in Mangalore - Zaviroq',
        metaDesc: 'Generate qualified inbound sales inquiries on demand. Zaviroq builds high-converting lead funnels for businesses in Mangalore & Karnataka.',
        keywords: 'lead generation agency mangalore, b2b lead generation karnataka, inbound leads mangalore',
        heroDesc: 'Fill your sales pipeline with verified decision-makers who need your services. We design high-converting lead magnets, landing pages, and multi-stage qualification funnels that deliver ready-to-buy inquiries directly to your team.',
        deliverables: ['Target Account Identification', 'High-Converting Landing Pages', 'Lead Magnet Creation & Funnels', 'Automated Lead Qualification Filters', 'Real-Time CRM Sync & Alerts']
      },
      {
        slug: 'digital-strategy',
        title: 'Digital Strategy',
        shortDesc: 'Comprehensive, data-backed commercial roadmaps designed for market domination.',
        metaTitle: 'Digital Strategy & Consulting in Mangalore - Zaviroq',
        metaDesc: 'Build a defensible competitive advantage. Zaviroq develops comprehensive digital marketing strategies for ambitious brands in Mangalore.',
        keywords: 'digital strategy consultant mangalore, digital marketing strategy karnataka',
        heroDesc: 'A winning marketing campaign begins with a disciplined strategic blueprint. We analyze competitor weaknesses, customer search journeys, and pricing leverage to build a step-by-step roadmap for sustained market leadership.',
        deliverables: ['Competitor Reverse-Engineering', 'Customer Journey Mapping', 'Multi-Channel Budget Allocation', 'Tech Stack & Tracking Audits', 'Quarterly Growth Milestones']
      },
      {
        slug: 'marketing-automation',
        title: 'Marketing Automation',
        shortDesc: 'Automated CRM workflows and personalized drip funnels that nurture leads 24/7.',
        metaTitle: 'Marketing Automation Agency in Mangalore - Zaviroq',
        metaDesc: 'Automate your customer follow-up and sales workflows. Zaviroq integrates HubSpot, Zoho, and custom CRM automations in Mangalore.',
        keywords: 'marketing automation mangalore, crm automation karnataka, email marketing workflows',
        heroDesc: 'Never let a prospective client wait for a response. We configure automated email and WhatsApp sequences that immediately engage inquiries, answer common questions, and schedule consultations automatically.',
        deliverables: ['CRM Setup & Workflow Configuration', 'Multi-Stage Email Drip Campaigns', 'Instant WhatsApp API Auto-Responders', 'Lead Scoring & Priority Routing', 'Conversion Tracking Dashboard']
      },
      {
        slug: 'online-reputation-management',
        title: 'Online Reputation Management',
        shortDesc: 'Proactive review generation and brand sentiment protection across Google and industry portals.',
        metaTitle: 'Online Reputation Management (ORM) in Mangalore - Zaviroq',
        metaDesc: 'Protect your brand name on Google. Zaviroq eliminates negative search results and automates 5-star Google review collection in Mangalore.',
        keywords: 'orm agency mangalore, online reputation management karnataka, google review management',
        heroDesc: 'Your online reputation determines whether prospects call you or your rival. We deploy automated review acquisition tools, monitor brand mentions across the web, and build authoritative content assets that push down negative results.',
        deliverables: ['Google Review Generation System', 'Brand Mention Monitoring & Alerts', 'Negative Search Result Suppression', 'Crisis Response & Sentiment Repair', 'Executive Profile Reputation Shield']
      }
    ]
  },

  // 2. Search Engine Optimization (SEO)
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortTitle: 'SEO Services',
    categoryGroup: 'digital-marketing',
    metaTitle: 'Best SEO Agency in Mangalore | SEO Company & Services - Zaviroq',
    metaDesc: 'Need to rank #1 on Google in Mangalore? Zaviroq is the premier SEO company in Mangalore delivering verified Google Maps 3-Pack rankings, technical audits, and organic lead growth across Karnataka.',
    keywords: [
      'seo agency in mangalore',
      'best seo company in mangalore',
      'seo services in mangalore',
      'search engine optimization company in mangalore',
      'local seo services mangalore'
    ],
    eyebrow: '#1 RATED SEO COMPANY IN MANGALORE & COASTAL KARNATAKA',
    tagline: 'Dominate Google Search and Get More Calls, Walk-Ins & Real Revenue.',
    heroSub: 'Most businesses in Mangalore lose high-intent local customers every single day simply because their competitors occupy the top 3 spots on Google Maps and Page 1 search. At Zaviroq, we do not sell vanity impressions or generic automated audit PDFs. We eliminate technical website bottlenecks, align your pages with exact local search intent across Mangalore and Karnataka, and build verified domain authority that converts searches into paying clients.',
    color: '#7b61ff',
    iconName: 'Search',
    stats: [
      { number: '10+ Years', label: 'Search Experience', desc: 'Hands-on search engine optimization across competitive local and national industries.' },
      { number: '360+', label: 'Websites Ranked', desc: 'Audited, restructured, and scaled to top Google spots without algorithm penalty drops.' },
      { number: '100+', label: 'Active Brands', desc: 'Trusted by healthcare clinics, builders, educational institutions, and exporters in Mangalore.' },
      { number: '10,000+', label: 'Page 1 Keywords', desc: 'High-intent commercial terms captured across Google Search and Google Maps.' }
    ],
    outcomes: [
      { title: 'Capture Inbound Phone Calls & Walk-Ins in Mangalore', desc: 'Rank in the Google Maps 3-Pack for local commercial searches.', fix: 'Local Geo-Grid Optimization & Review Flywheel' },
      { title: 'Outrank Entrenched Local Competitors on Commercial Terms', desc: 'Reverse-engineer competitor backlink profiles and topical gaps.', fix: 'Topical Entity Authority & Backlink Gap Cannibalization' },
      { title: 'Recover Traffic Lost to Google Algorithm Updates', desc: 'Perform forensic technical audits to clean up penalty risks.', fix: '150-Point Technical Crawl, Disavow File Audit & Schema Alignment' },
      { title: 'Capture Lucrative Inquiries from the Gulf', desc: 'Expand your reach into Dubai, Abu Dhabi, and Riyadh.', fix: 'Multi-Region Hreflang Architecture & Gulf Search Intent' }
    ],
    roadmap: [
      { month: 'Month 01', phase: 'Technical Foundation', focus: 'Crawl Roadblocks & Google Maps Audit', highlight: '150-Point Technical Cleanup', milestones: ['Run 150-point technical crawl to uncover 404s, redirect chains, and canonical issues', 'Benchmark Core Web Vitals and deploy server-level speed optimizations', 'Audit and standardize Google Business Profile citations across 60+ directories', 'Define primary high-intent commercial keywords across Mangalore pin codes'] },
      { month: 'Month 02', phase: 'On-Page Overhaul', focus: 'Topical Clusters & Local Landing Pages', highlight: 'Entity & Schema Architecture', milestones: ['Rewrite Title tags and Meta descriptions for maximum click-through rates', 'Deploy localized landing pages for Mangalore, Hampankatta, Kadri, and Udupi', 'Implement comprehensive Schema.org JSON-LD structured data', 'Restructure internal links to funnel PageRank authority to commercial pages'] },
      { month: 'Month 03', phase: 'Authority Scale', focus: 'Digital PR & Review Flywheel', highlight: 'Maps 3-Pack Elevation', milestones: ['Execute targeted white-hat editorial outreach on authoritative industry websites', 'Activate automated customer review collection flywheel safely', 'Audit and refine user conversion funnels and click-to-call CTAs', 'Review bi-weekly ranking movements across desktop, mobile, and Google Maps'] }
    ],
    faqs: [
      { q: 'What makes Zaviroq the best SEO agency in Mangalore?', a: 'Zaviroq differs from traditional Mangalore agencies by prioritizing technical performance and verified commercial revenue over hollow keyword counts. We engineer sub-second Core Web Vitals, clean up duplicate NAP citations, implement rich Schema.org microdata, and build genuine editorial backlinks.' },
      { q: 'How quickly can a Mangalore business expect to rank on Google Page 1 and Maps?', a: 'Local Google Maps 3-Pack rankings and localized search queries in Mangalore typically begin showing measurable movement within 30 to 60 days following citation cleanup and profile optimization. State-wide or national terms take 3 to 6 months of disciplined technical and content work.' },
      { q: 'Why is the Google Maps 3-Pack so critical for businesses in Mangalore?', a: 'Over 68% of mobile searchers in Mangalore click on one of the top 3 listings in the Google Maps Pack before ever scrolling down to traditional links. Ranking in the Maps 3-Pack provides direct Call, Directions, and Website buttons, driving immediate patient bookings and store visits.' }
    ],
    subservices: [
      {
        slug: 'on-page-seo',
        title: 'On-Page SEO',
        shortDesc: 'Semantic entity optimization and topical clustering designed for Google NLP and AI Overviews.',
        metaTitle: 'On-Page SEO Services in Mangalore | Semantic SEO - Zaviroq',
        metaDesc: 'Optimize your web pages for search intent and Google NLP algorithms. Zaviroq structures high-ranking on-page SEO in Mangalore.',
        keywords: 'on page seo mangalore, semantic seo karnataka, keyword intent optimization',
        heroDesc: 'Modern search algorithms do not match keywords; they evaluate semantic entities and topical authority. We structure your headings, metadata, internal links, and body copy to satisfy search intent completely.',
        deliverables: ['Intent-Mapped Content Architecture', 'CTR-Engineered Meta Titles & Descriptions', 'Semantic Heading Structure (H1-H4)', 'Internal Link Equity Distribution', 'Image Optimization & Alt Schema']
      },
      {
        slug: 'off-page-seo',
        title: 'Off-Page SEO',
        shortDesc: 'Editorial digital PR and high-authority backlinks that build defensible domain rating.',
        metaTitle: 'Off-Page SEO & Link Building in Mangalore - Zaviroq',
        metaDesc: 'Earn authoritative backlinks from legitimate industry publications. Zaviroq executes 100% white-hat off-page SEO in Mangalore.',
        keywords: 'off page seo mangalore, link building agency mangalore, digital pr karnataka',
        heroDesc: 'Backlinks remain one of Google’s top ranking factors, but spam links will ruin your domain. We secure contextual placements on real, high-DR industry portals and regional news publications.',
        deliverables: ['Competitor Backlink Gap Analysis', '100% White-Hat Editorial Outreach', 'Unlinked Brand Mention Reclamation', 'Regional Business Citation Audits', 'Transparent Monthly Link Ledger']
      },
      {
        slug: 'technical-seo',
        title: 'Technical SEO',
        shortDesc: 'Sub-second Core Web Vitals, clean crawl budgets, and Schema.org JSON-LD microdata.',
        metaTitle: 'Technical SEO Agency in Mangalore | Core Web Vitals - Zaviroq',
        metaDesc: 'Fix crawl errors, speed bottlenecks, and indexation issues. Zaviroq delivers enterprise technical SEO in Mangalore.',
        keywords: 'technical seo mangalore, core web vitals optimization, schema markup agency',
        heroDesc: 'If Googlebot encounters render-blocking scripts, broken redirect chains, or failing Core Web Vitals, your rankings will suffer. We resolve all technical friction so search crawlers index your pages effortlessly.',
        deliverables: ['Core Web Vitals Remediation (LCP, INP, CLS)', 'Advanced Schema.org Microdata', 'XML Sitemap & Robots.txt Directives', 'Canonicalization & Redirect Chain Cleanup', 'Mobile-First Rendering Audit']
      },
      {
        slug: 'local-seo',
        title: 'Local SEO',
        shortDesc: 'Google Maps 3-Pack domination and pin-code geo-grid tracking across Coastal Karnataka.',
        metaTitle: 'Local SEO Services in Mangalore | Google Maps 3-Pack - Zaviroq',
        metaDesc: 'Rank in Google Maps top 3 in Mangalore, Udupi & Surathkal. Zaviroq optimizes Google Business Profiles and local citations.',
        keywords: 'local seo mangalore, google maps 3 pack mangalore, google business profile optimization',
        heroDesc: 'Win the customers searching for your services within a 15-kilometer radius. We optimize your Google Business Profile, fix NAP discrepancies across 60+ directories, and accelerate review velocity.',
        deliverables: ['Google Business Profile Deep Audit', 'NAP Consistency Synchronization', 'Local Geo-Targeted Landing Pages', 'Automated Customer Review Flywheel', 'Pin-Code Level Geo-Grid Tracking']
      },
      {
        slug: 'ecommerce-seo',
        title: 'E-commerce SEO',
        shortDesc: 'Faceted navigation optimization, product rich snippets, and transactional keyword ranking.',
        metaTitle: 'E-Commerce SEO Services in Mangalore - Zaviroq',
        metaDesc: 'Scale organic sales for your online store. Zaviroq optimizes Shopify and WooCommerce stores to rank on Google in Mangalore.',
        keywords: 'ecommerce seo mangalore, shopify seo karnataka, woocommerce search optimization',
        heroDesc: 'Turn your product catalog into a 24/7 revenue driver. We solve faceted navigation index bloat, configure Product and Offer schema, and optimize collection pages for transactional search queries.',
        deliverables: ['Faceted Filter URL Control', 'Product & Offer Schema Markup', 'Transactional Category Optimization', 'Google Merchant Center Organic Feed', 'Cart Abandonment CRO Audit']
      },
      {
        slug: 'seo-audit',
        title: 'SEO Audit',
        shortDesc: 'Comprehensive 150-point technical, on-page, and competitive search gap analysis.',
        metaTitle: '150-Point Technical SEO Audit in Mangalore - Zaviroq',
        metaDesc: 'Discover what is holding your website back from Google Page 1. Request a 150-point forensic SEO audit from Zaviroq in Mangalore.',
        keywords: 'seo audit mangalore, website seo analysis karnataka, technical seo checkup',
        heroDesc: 'Gain complete clarity on why your website is not ranking. Our senior technical team runs a forensic 150-point crawl covering indexation, speed, backlink toxicities, and competitor content gaps.',
        deliverables: ['150-Point Technical Crawl Report', 'Search Console Anomaly Diagnostics', 'Competitor Keyword Opportunity Matrix', 'Backlink Toxicity & Disavow Review', 'Prioritized Actionable Roadmap']
      },
      {
        slug: 'keyword-research',
        title: 'Keyword Research',
        shortDesc: 'Commercial intent mapping and competitor gap identification across regional and national search.',
        metaTitle: 'Commercial Keyword Research in Mangalore - Zaviroq',
        metaDesc: 'Target keywords that generate revenue, not vanity traffic. Zaviroq maps high-intent search queries in Mangalore & Karnataka.',
        keywords: 'keyword research mangalore, commercial search queries, competitor keyword gap',
        heroDesc: 'Targeting the wrong search terms guarantees zero ROI. We identify high-intent commercial and transactional queries used by serious buyers ready to purchase your products and services.',
        deliverables: ['Search Intent Classification', 'Cost-Per-Click Valuation Data', 'Competitor Keyword Gap Identification', 'Long-Tail Localized Keyword Lists', 'Keyword-to-URL Mapping Architecture']
      },
      {
        slug: 'link-building',
        title: 'Link Building',
        shortDesc: 'Editorial digital PR outreach and high-authority contextual links with zero spam.',
        metaTitle: 'White-Hat Link Building Agency in Mangalore - Zaviroq',
        metaDesc: 'Build domain authority with verified editorial backlinks. Zaviroq executes ethical, high-DR link building in Mangalore.',
        keywords: 'link building agency mangalore, guest post outreach karnataka, white hat backlinks',
        heroDesc: 'Build lasting search authority without risking Google algorithm penalties. We secure genuine editorial placements, trade association links, and regional news citations on verified websites.',
        deliverables: ['100% White-Hat Outreach Strategy', 'High-DR Industry Website Placements', 'Broken Backlink Reclamation', 'Digital PR & News Feature Pitches', 'Itemized Live URL Reporting Ledger']
      }
    ]
  },

  // 3. Google Ads & Paid Advertising
  {
    slug: 'paid-advertising',
    title: 'Google Ads & Paid Advertising',
    shortTitle: 'Paid Advertising',
    categoryGroup: 'digital-marketing',
    metaTitle: 'Google Ads & Paid Advertising Agency in Mangalore | High-ROI PPC - Zaviroq',
    metaDesc: 'Stop burning ad budgets on junk clicks. Zaviroq manages profitable Google Ads, Meta Ads, and YouTube campaigns for businesses in Mangalore, Bangalore & Dubai.',
    keywords: [
      'google ads agency in mangalore',
      'ppc company in mangalore',
      'paid advertising agency mangalore',
      'meta ads agency mangalore',
      'performance marketing mangalore'
    ],
    eyebrow: '#1 ROI-DRIVEN PAID ADVERTISING AGENCY IN MANGALORE',
    tagline: 'Maximize Return on Ad Spend with Precision PPC & Conversion Funnels.',
    heroSub: 'Most PPC agencies in Mangalore run automated Smart campaigns that waste ad spend on broad-match terms and negative search clicks. At Zaviroq, we engineer high-converting paid search and social campaigns. We build dedicated landing pages, structure granular negative keyword lists, test compelling ad copy, and optimize bids against verified sales revenue rather than vanity click counts.',
    color: '#3b82f6',
    iconName: 'TrendingUp',
    stats: [
      { number: '4.8x', label: 'Average ROAS', desc: 'Achieved across Google Search and Performance Max campaigns.' },
      { number: '₹12Cr+', label: 'Ad Spend Managed', desc: 'Managed across Indian, UAE, and international search markets.' },
      { number: '-38%', label: 'CPA Reduction', desc: 'Average cost-per-acquisition decrease achieved in the first 60 days.' },
      { number: '99.4%', label: 'Tracking Accuracy', desc: 'Server-side conversion API tracking for accurate attribution.' }
    ],
    outcomes: [
      { title: 'Eliminate Wasted Budget on Irrelevant Search Queries', desc: 'Exclude tire-kickers and low-intent searches with rigorous negative keyword lists.', fix: 'Exact-Match Search Intent Silos & Negative Keyword Filters' },
      { title: 'Lower Your Cost Per Acquisition (CPA)', desc: 'Pair targeted ads with dedicated sub-second mobile landing pages.', fix: 'Landing Page CRO & Multi-Variant Copy Testing' },
      { title: 'Re-Engage High-Value Abandoned Visitors', desc: 'Bring back prospects who viewed your pricing but did not convert.', fix: 'Dynamic Cross-Platform Retargeting Campaigns' },
      { title: 'Scale Lead Volume into Gulf Markets', desc: 'Run targeted campaigns reaching high-net-worth clients in Dubai and Riyadh.', fix: 'GCC Geo-Targeting & Multi-Currency Ad Structuring' }
    ],
    roadmap: [
      { month: 'Month 01', phase: 'Tracking & Campaign Build', focus: 'Account Restructuring & Negative Keyword Matrix', highlight: 'Conversion Infrastructure', milestones: ['Install Google Tag Manager and Server-Side Conversion API', 'Perform deep competitor keyword bid and ad copy research', 'Build single-theme ad groups with exact and phrase match intent', 'Deploy dedicated sub-second mobile landing pages'] },
      { month: 'Month 02', phase: 'A/B Testing & Bid Optimization', focus: 'Quality Score & CPA Reduction', highlight: 'Efficiency Optimization', milestones: ['A/B test responsive search ads, extensions, and callouts', 'Refine negative keyword lists based on actual search term reports', 'Optimize Quality Scores to reduce average Cost-Per-Click (CPC)', 'Launch remarketing campaigns targeting cart and page abandoners'] },
      { month: 'Month 03', phase: 'Scaling & Multi-Channel Expansion', focus: 'Performance Max & Budget Acceleration', highlight: 'ROAS Maximization', milestones: ['Expand into Performance Max and YouTube in-stream ad funnels', 'Scale budget into top-converting audience segments and locations', 'Implement automated bid strategies tied to revenue value', 'Conduct executive bi-weekly performance attribution reviews'] }
    ],
    faqs: [
      { q: 'Why do most Google Ads campaigns fail for Mangalore businesses?', a: 'Most campaigns fail because agencies rely on Google’s default automated settings, broad match keywords, and send traffic to a generic homepage. Zaviroq eliminates wasted spend by using tightly themed ad groups, aggressive negative keyword lists, and custom landing pages designed specifically to convert clicks into calls.' },
      { q: 'What monthly ad budget do we need to start?', a: 'We typically recommend a minimum ad spend of ₹25,000 to ₹50,000 per month for local Mangalore campaigns to gather sufficient data and generate consistent leads. State-wide and GCC campaigns scale according to target market competition.' },
      { q: 'Do you track actual phone calls and leads or just clicks?', a: 'We implement server-side conversion tracking, dynamic call tracking, and form submission analytics so you see the exact keyword, ad, and campaign that produced each phone call or consultation inquiry.' }
    ],
    subservices: [
      {
        slug: 'google-ads',
        title: 'Google Ads',
        shortDesc: 'High-intent search ads, Performance Max campaigns, and local call-only ads.',
        metaTitle: 'Google Ads Agency in Mangalore | Certified PPC - Zaviroq',
        metaDesc: 'Generate immediate inbound sales with Google Search Ads. Zaviroq manages high-ROI Google Ads campaigns in Mangalore.',
        keywords: 'google ads agency mangalore, google adwords company karnataka, ppc agency mangalore',
        heroDesc: 'Capture prospects at the exact moment they search for your services. We build high-converting search campaigns, local call ads, and Performance Max funnels designed to deliver immediate phone calls and leads.',
        deliverables: ['Search Campaign Structuring', 'Negative Keyword Lists', 'Quality Score Optimization', 'Responsive Search Ad Copywriting', 'Call & Lead Conversion Tracking']
      },
      {
        slug: 'meta-ads',
        title: 'Meta Ads',
        shortDesc: 'Targeted Facebook and Instagram conversion campaigns with high-impact visual creatives.',
        metaTitle: 'Meta Ads Agency in Mangalore | Facebook & Instagram PPC - Zaviroq',
        metaDesc: 'Scale your business with Facebook & Instagram ads. Zaviroq builds high-converting Meta advertising campaigns in Mangalore.',
        keywords: 'meta ads agency mangalore, facebook ads company karnataka, instagram advertising mangalore',
        heroDesc: 'Reach your ideal demographic where they spend their attention. We create thumb-stopping ad visuals, test persuasive copywriting, and deploy lookalike audiences that turn social scrolling into completed sales.',
        deliverables: ['Meta Pixel & Conversion API Setup', 'Custom & Lookalike Audiences', 'High-Converting Ad Creatives', 'A/B Testing of Hooks & Copy', 'Full-Funnel Retargeting Architecture']
      },
      {
        slug: 'youtube-advertising',
        title: 'YouTube Advertising',
        shortDesc: 'Engaging in-stream and in-feed video ads reaching targeted audiences across Karnataka & GCC.',
        metaTitle: 'YouTube Advertising Agency in Mangalore - Zaviroq',
        metaDesc: 'Engage video viewers with high-impact YouTube video ads. Zaviroq produces and manages YouTube ad campaigns in Mangalore.',
        keywords: 'youtube ads agency mangalore, video advertising karnataka, in stream ads',
        heroDesc: 'Leverage the world’s second-largest search engine. We script, produce, and target in-stream video ads that build immediate brand credibility and drive direct response conversions.',
        deliverables: ['Video Ad Scripting & Hook Strategy', 'Audience & Placement Targeting', 'In-Stream & Bumper Ad Management', 'Remarketing Video Sequences', 'View-Through Conversion Analytics']
      },
      {
        slug: 'ppc-management',
        title: 'PPC Management',
        shortDesc: 'Full-service pay-per-click management across Google, Bing, Meta, and LinkedIn.',
        metaTitle: 'Full-Service PPC Management in Mangalore - Zaviroq',
        metaDesc: 'Maximize return on ad spend with full-service PPC management. Zaviroq manages multi-channel advertising in Mangalore.',
        keywords: 'ppc management mangalore, pay per click agency karnataka, multi channel advertising',
        heroDesc: 'Continuous optimization is what separates profitable ad campaigns from money pits. We monitor search terms daily, adjust bids, eliminate underperforming ads, and maximize your return on ad spend.',
        deliverables: ['Daily Bid & Budget Management', 'Search Term Waste Elimination', 'Landing Page A/B Testing', 'Cross-Channel Attribution Modeling', 'Bi-Weekly Strategy Review Calls']
      },
      {
        slug: 'remarketing',
        title: 'Remarketing',
        shortDesc: 'Re-engage cart abandoners and past website visitors across Google, Instagram, and web display.',
        metaTitle: 'Remarketing & Retargeting Agency in Mangalore - Zaviroq',
        metaDesc: 'Bring back lost website visitors and recover abandoned carts. Zaviroq deploys multi-touch remarketing in Mangalore.',
        keywords: 'remarketing agency mangalore, retargeting ads karnataka, cart abandonment recovery',
        heroDesc: 'Over 96% of first-time website visitors leave without taking action. We implement multi-touch retargeting campaigns that display timely, tailored offers to bring them back to complete their purchase.',
        deliverables: ['Cross-Platform Audience Segmentation', 'Dynamic Product Retargeting', 'Custom Cart Abandonment Offers', 'Frequency Cap Protection', 'Sequential Storytelling Ad Sequences']
      },
      {
        slug: 'performance-marketing',
        title: 'Performance Marketing',
        shortDesc: 'Full-funnel acquisition strategies focused strictly on cost-per-acquisition (CPA) and ROAS.',
        metaTitle: 'Performance Marketing Agency in Mangalore - Zaviroq',
        metaDesc: 'Scale your business with accountable performance marketing. Zaviroq optimizes for revenue, CPA, and ROAS in Mangalore.',
        keywords: 'performance marketing mangalore, roas optimization karnataka, growth marketing agency',
        heroDesc: 'For businesses ready to scale aggressively. We coordinate paid search, paid social, CRO, and automated CRM nurture flows into an integrated engine focused entirely on bottom-line profitability.',
        deliverables: ['Full-Funnel Acquisition Strategy', 'Unit Economics & CPA Modeling', 'Creative Production & Testing Matrix', 'Server-Side Attribution Architecture', 'Executive Growth Dashboards']
      }
    ]
  },

  // 4. Social Media Marketing
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortTitle: 'Social Media',
    categoryGroup: 'digital-marketing',
    metaTitle: 'Social Media Marketing Agency in Mangalore | Brand Growth & SMM - Zaviroq',
    metaDesc: 'Turn social media followers into paying clients. Zaviroq manages Instagram, LinkedIn, and Facebook marketing campaigns with creative content & viral reels.',
    keywords: [
      'social media marketing agency in mangalore',
      'smm agency in mangalore',
      'social media management mangalore',
      'instagram marketing company mangalore',
      'reels creation agency mangalore'
    ],
    eyebrow: '#1 CREATIVE SOCIAL MEDIA AGENCY IN MANGALORE',
    tagline: 'Build an Unforgettable Social Presence That Drives Client Inquiries.',
    heroSub: 'Posting random Canva graphics with generic hashtags will never grow your business. At Zaviroq, we produce high-retention short-form video reels, custom carousel guides, and community-building social media campaigns. We position your brand as an authentic authority across Instagram, LinkedIn, and Facebook to generate consistent inquiries and loyal brand advocates.',
    color: '#ec4899',
    iconName: 'Instagram',
    stats: [
      { number: '15M+', label: 'Reels Views', desc: 'Organic video views generated across client social media channels.' },
      { number: '180+', label: 'Monthly Creatives', desc: 'High-production visual and short-form assets delivered every month.' },
      { number: '3.4x', label: 'Engagement Rate', desc: 'Average engagement increase compared to traditional agency benchmarks.' },
      { number: '100%', label: 'Human-Crafted', desc: 'Custom tailored brand storytelling with zero generic AI graphic templates.' }
    ],
    outcomes: [
      { title: 'Overcome Low Social Media Engagement & Reach', desc: 'Create video reels and carousels structured around strong hooks.', fix: 'High-Retention Video Editing & Carousel Storytelling' },
      { title: 'Turn Followers into Paying Customers', desc: 'Incorporate clear commercial calls to action and direct message funnels.', fix: 'Social Inbound Funnels & Bio Lead Capture Architecture' },
      { title: 'Build Corporate Authority on LinkedIn', desc: 'Establish founders and executives as recognized industry leaders.', fix: 'Executive Ghostwriting & B2B Thought Leadership' },
      { title: 'Maintain Consistent, High-Quality Posting', desc: 'Never scramble for content ideas with a planned monthly content calendar.', fix: 'Content Calendar Planning & Batch Production Workflows' }
    ],
    roadmap: [
      { month: 'Month 01', phase: 'Brand Voice & Content Blueprint', focus: 'Visual Identity & Competitive Audit', highlight: 'Content Architecture', milestones: ['Audit existing social profiles, audience demographics, and top competitors', 'Define brand visual guidelines, color themes, and editorial tone of voice', 'Plan the first 30-day content calendar with hook-first short-form video concepts', 'Optimize bio copy, highlights, and direct inquiry link trees'] },
      { month: 'Month 02', phase: 'Production & Community Building', focus: 'Reels Publishing & Audience Engagement', highlight: 'Viral Video Execution', milestones: ['Film and edit high-retention Instagram reels with custom subtitles and sound design', 'Publish educational carousel graphics establishing industry expertise', 'Implement daily active community engagement and direct message responses', 'Run targeted follower boost and engagement campaigns'] },
      { month: 'Month 03', phase: 'Conversion Funnels & Scale', focus: 'Inbound Lead Generation & Collaborations', highlight: 'Monetization & Lead Flow', milestones: ['Deploy direct message automation funnels to qualify inbound inquiries', 'Coordinate regional influencer collaborations and brand partnerships', 'Analyze top-performing post formats and scale high-engagement themes', 'Deliver monthly analytical reports covering reach, engagement, and leads'] }
    ],
    faqs: [
      { q: 'How often will you post on our social media profiles?', a: 'We typically publish 15 to 20 high-production assets per month, including 8 to 12 short-form video reels, multi-slide educational carousels, and single-image announcements. Quality and retention matter far more than posting generic daily filler.' },
      { q: 'Do you shoot the videos or do we provide footage?', a: 'For clients in Mangalore and Coastal Karnataka, we can coordinate on-site video shoots. We also provide clear shooting scripts and shot lists so your team can record simple smartphone footage that our editors turn into high-production viral reels.' },
      { q: 'Can social media marketing actually generate sales for local businesses?', a: 'Yes. By showcasing patient transformations, real estate walkthroughs, behind-the-scenes facility tours, and client testimonials, our social campaigns build trust that directly triggers inbound WhatsApp messages and phone calls.' }
    ],
    subservices: [
      {
        slug: 'social-media-management',
        title: 'Social Media Management',
        shortDesc: 'Full-service profile management, daily posting, caption writing, and community engagement.',
        metaTitle: 'Social Media Management in Mangalore - Zaviroq',
        metaDesc: 'Professional social media management in Mangalore. Zaviroq plans, creates, and publishes content that grows your brand.',
        keywords: 'social media management mangalore, smm agency karnataka, social media manager',
        heroDesc: 'Hand over the daily stress of social media. We research topics, craft compelling captions, design visual assets, schedule posts, and actively respond to comments and direct messages.',
        deliverables: ['Monthly Content Calendar', 'Custom Visual & Video Publishing', 'Daily Community Management', 'Hashtag & Keyword Research', 'Monthly Growth Analytics']
      },
      {
        slug: 'social-media-strategy',
        title: 'Social Media Strategy',
        shortDesc: 'Comprehensive audience research, platform selection, and organic growth blueprints.',
        metaTitle: 'Social Media Strategy & Consulting in Mangalore - Zaviroq',
        metaDesc: 'Build a winning social media strategy. Zaviroq defines content pillars and audience acquisition plans in Mangalore.',
        keywords: 'social media strategy mangalore, brand growth strategy karnataka',
        heroDesc: 'Posting without a strategy wastes valuable time. We determine which platforms your buyers actually use, identify content pillars that resonate, and create a roadmap for defensible brand positioning.',
        deliverables: ['Platform & Audience Analysis', 'Core Content Pillars Definition', 'Competitor Content Breakdown', 'Visual Identity Style Guide', 'Quarterly Growth Milestones']
      },
      {
        slug: 'social-media-content',
        title: 'Social Media Content',
        shortDesc: 'Custom carousels, infographics, and graphic design tailored to your brand identity.',
        metaTitle: 'Social Media Content Creation in Mangalore - Zaviroq',
        metaDesc: 'Custom social media graphics, carousels, and visual assets designed to stop the scroll. Created by Zaviroq in Mangalore.',
        keywords: 'social media content creation mangalore, carousel design karnataka, visual branding',
        heroDesc: 'Capture attention in crowded feeds. Our design team creates high-resolution visual graphics, educational carousels, and branded announcement cards that establish immediate authority.',
        deliverables: ['Multi-Slide Educational Carousels', 'Custom Infographic Assets', 'Promotional Announcement Cards', 'Template Design in Figma', 'Exported in Optimal Formats']
      },
      {
        slug: 'instagram-marketing',
        title: 'Instagram Marketing',
        shortDesc: 'Instagram profile optimization, stories strategy, reels growth, and DM lead funnels.',
        metaTitle: 'Instagram Marketing Agency in Mangalore - Zaviroq',
        metaDesc: 'Grow your Instagram followers and turn them into customers. Zaviroq manages high-converting Instagram accounts in Mangalore.',
        keywords: 'instagram marketing agency mangalore, instagram growth karnataka, instagram lead generation',
        heroDesc: 'Turn Instagram into your strongest customer acquisition platform. We optimize your bio, publish high-retention video reels, manage interactive stories, and set up automated DM response funnels.',
        deliverables: ['Profile & Bio Conversion Audit', 'High-Retention Reels Publishing', 'Daily Interactive Story Prompts', 'DM Lead Generation Automation', 'Influencer Collaboration Outreach']
      },
      {
        slug: 'reels-creation',
        title: 'Reels Creation & Production',
        shortDesc: 'Viral short-form video editing with animated captions, sound design, and hook-first pacing.',
        metaTitle: 'Instagram Reels Creation Agency in Mangalore - Zaviroq',
        metaDesc: 'High-retention Instagram reels and short-form video editing. Zaviroq scripts and edits viral video content in Mangalore.',
        keywords: 'reels creation mangalore, short form video editing karnataka, viral reels agency',
        heroDesc: 'Short-form video is the single most effective way to gain organic reach today. We write compelling 3-second hooks, cut fast-paced edits, add animated subtitles, and add sound effects that hold viewers.',
        deliverables: ['Hook & Script Development', 'Fast-Paced Video Cutting', 'Custom Dynamic Subtitles', 'Sound Design & Trending Audio', 'Vertical Formats for Reels & Shorts']
      },
      {
        slug: 'social-media-advertising',
        title: 'Social Media Advertising',
        shortDesc: 'Paid social acquisition funnels on Instagram, Facebook, and LinkedIn for lead generation.',
        metaTitle: 'Paid Social Media Advertising in Mangalore - Zaviroq',
        metaDesc: 'Amplify your reach with paid social ads. Zaviroq manages conversion-focused social media advertising in Mangalore.',
        keywords: 'social media advertising mangalore, paid social karnataka, instagram sponsored ads',
        heroDesc: 'Accelerate your social growth with paid amplification. We target lookalike audiences, test multiple video and graphic creatives, and build retargeting funnels that turn social users into buyers.',
        deliverables: ['Ad Creative Concept & Design', 'Audience Segmentation & Targeting', 'Budget Pacing & Bid Testing', 'Lead Form & Landing Page Funnels', 'Detailed ROI Reporting']
      }
    ]
  },

  // 5. Website Design
  {
    slug: 'website-design',
    title: 'Website Design & UI/UX',
    shortTitle: 'Website Design',
    categoryGroup: 'web-development',
    metaTitle: 'Website Design Company in Mangalore | UI/UX & Responsive Web Design - Zaviroq',
    metaDesc: 'Custom UI/UX and conversion-first website design in Mangalore. We craft mobile-responsive, elegant websites that build immediate brand authority.',
    keywords: [
      'website design company in mangalore',
      'web designers in mangalore',
      'ui ux design agency mangalore',
      'responsive website design mangalore',
      'corporate website design karnataka'
    ],
    eyebrow: '#1 AWARD-WINNING WEB DESIGN AGENCY IN MANGALORE',
    tagline: 'Modern, Conversion-First Web Design That Elevates Your Brand.',
    heroSub: 'Your website is the single most critical asset in your digital presence. When prospective clients visit, they decide within 5 seconds whether you look like an established industry leader or a second-tier amateur. At Zaviroq, we design bespoke, modern websites built on human psychology, intuitive UI/UX navigation, and conversion optimization to ensure your brand stands out in Mangalore and global markets.',
    color: '#06b6d4',
    iconName: 'Layout',
    stats: [
      { number: '100%', label: 'Bespoke Design', desc: 'Custom crafted in Figma with zero cookie-cutter templates.' },
      { number: '< 2.0s', label: 'Load Target', desc: 'Engineered for sub-second visual rendering and zero layout shift.' },
      { number: '280+', label: 'Websites Designed', desc: 'Crafted for corporate, medical, real estate, and retail leaders.' },
      { number: '+45%', label: 'Conversion Lift', desc: 'Average conversion rate increase following a Zaviroq redesign.' }
    ],
    outcomes: [
      { title: 'Modernize an Outdated, Embarrassing Web Presence', desc: 'Replace obsolete designs with sleek typography, glassmorphism, and responsive layouts.', fix: 'Custom Figma Design Systems & Responsive Grid Layouts' },
      { title: 'Increase Conversion Rates on Mobile Devices', desc: 'Ensure mobile searchers can read, navigate, and contact your team effortlessly.', fix: 'Mobile-First UI/UX & Finger-Friendly Tap Targets' },
      { title: 'Establish Undeniable Premium Brand Credibility', desc: 'Look like an industry leader that can command higher prices and premium contracts.', fix: 'Corporate Brand Consistency & Bespoke Visual Identity' },
      { title: 'Reduce High Bounce Rates', desc: 'Keep visitors engaged with compelling visual hierarchy and intuitive user flows.', fix: 'Intuitive Navigation Silos & Conversion-Engineered Page Flows' }
    ],
    roadmap: [
      { month: 'Phase 01', phase: 'Discovery & Wireframing', focus: 'Brand Architecture & User Journey Mapping', highlight: 'UX Blueprint', milestones: ['Analyze current website performance, analytics, and competitor design gaps', 'Define site architecture, primary user personas, and conversion goals', 'Create low-fidelity wireframes mapping out page hierarchy and content flow', 'Establish design moodboards, typography rules, and color palettes in Figma'] },
      { month: 'Phase 02', phase: 'High-Fidelity UI Design', focus: 'Bespoke Visual Crafting in Figma', highlight: 'Visual Design System', milestones: ['Design high-fidelity desktop and mobile mockups for all key pages', 'Craft custom graphic artwork, 3D elements, and interactive component states', 'Design interactive prototypes for client feedback and stakeholder review', 'Finalize design token system covering buttons, cards, forms, and navigation'] },
      { month: 'Phase 03', phase: 'Design Handoff & Quality Assurance', focus: 'Asset Optimization & Developer Alignment', highlight: 'Production Readiness', milestones: ['Export responsive vector SVGs, compressed AVIF images, and typography specs', 'Coordinate responsive breakpoints (mobile, tablet, desktop, ultra-wide)', 'Review frontend staging build against original design pixel-by-pixel', 'Deliver complete design system assets and style guide documentation'] }
    ],
    faqs: [
      { q: 'Do you use pre-made website templates or custom designs?', a: 'Every single website designed by Zaviroq is custom-crafted from scratch in Figma based on your brand identity, target buyers, and conversion goals. We never use cheap pre-made WordPress or ThemeForest templates that look identical to competitor sites.' },
      { q: 'Will the website design look great on all mobile phones?', a: 'Yes. We design with a mobile-first philosophy. Over 70% of web traffic in Mangalore comes from mobile devices, so we ensure touch targets, typography, navigation drawers, and images are perfectly optimized for smartphones and tablets.' },
      { q: 'Can you redesign our existing website without losing our current Google rankings?', a: 'Yes. We conduct a thorough URL and SEO audit before redesigning. We map all existing URLs, ensure strict 301 redirects for any altered paths, preserve header hierarchies, and ensure your organic Google rankings are protected and elevated.' }
    ],
    subservices: [
      {
        slug: 'ui-ux-design',
        title: 'UI/UX Design',
        shortDesc: 'User-centered interface and experience design that makes web navigation intuitive and enjoyable.',
        metaTitle: 'UI/UX Design Agency in Mangalore | Figma Product Design - Zaviroq',
        metaDesc: 'Bespoke UI/UX design crafted in Figma. Zaviroq designs intuitive, conversion-focused user interfaces in Mangalore.',
        keywords: 'ui ux design mangalore, figma design agency karnataka, user experience design',
        heroDesc: 'Beautiful design means nothing if visitors cannot find what they need. We combine cognitive psychology and user testing to craft intuitive interfaces that guide prospects smoothly toward booking or purchasing.',
        deliverables: ['User Persona & Journey Mapping', 'Interactive Figma Prototypes', 'Design System & Component Library', 'Micro-Interactions & Hover States', 'Comprehensive Usability Testing']
      },
      {
        slug: 'landing-page-design',
        title: 'Landing Page Design',
        shortDesc: 'High-converting dedicated landing pages engineered to maximize paid ad ROI and lead generation.',
        metaTitle: 'Landing Page Design Agency in Mangalore - Zaviroq',
        metaDesc: 'Convert paid ad clicks into paying clients. Zaviroq designs high-converting landing pages in Mangalore.',
        keywords: 'landing page design mangalore, ppc landing pages karnataka, conversion landing page',
        heroDesc: 'Sending paid traffic to a general homepage wastes ad spend. We design dedicated, distraction-free landing pages with compelling value propositions, trust badges, and prominent calls to action.',
        deliverables: ['Distraction-Free Layout Architecture', 'High-Converting Above-the-Fold Hero', 'Social Proof & Testimonial Styling', 'Click-to-Call & Fast Form Elements', 'Sub-Second Visual Loading Design']
      },
      {
        slug: 'corporate-website-design',
        title: 'Corporate Website Design',
        shortDesc: 'Prestigious corporate web design for enterprises, institutions, and professional firms.',
        metaTitle: 'Corporate Website Design in Mangalore - Zaviroq',
        metaDesc: 'Establish enterprise authority with corporate website design. Zaviroq designs prestigious company websites in Mangalore.',
        keywords: 'corporate website design mangalore, enterprise web design karnataka, company website',
        heroDesc: 'Win the trust of enterprise clients, investors, and procurement directors. We craft sophisticated corporate websites featuring executive leadership pages, investor relations, and detailed service portals.',
        deliverables: ['Executive Brand Positioning', 'Multi-Level Service Hierarchy', 'Investor & Career Portal Layouts', 'Enterprise Compliance & Security Styling', 'Bespoke Corporate Typography & Palettes']
      },
      {
        slug: 'ecommerce-website-design',
        title: 'E-commerce Website Design',
        shortDesc: 'Visually stunning online store design engineered to minimize cart abandonment.',
        metaTitle: 'E-Commerce Website Design in Mangalore - Zaviroq',
        metaDesc: 'Design an online store that turns browsers into buyers. Zaviroq crafts conversion-first e-commerce designs in Mangalore.',
        keywords: 'ecommerce web design mangalore, online store design karnataka, shopify ui ux',
        heroDesc: 'E-commerce success hinges on visual appeal and checkout clarity. We design product cards that pop, intuitive collection filters, and frictionless checkout flows that keep shoppers moving to purchase.',
        deliverables: ['Product Detail Page (PDP) Layouts', 'Faceted Collection Filter Design', 'Sticky Add-to-Cart & Buy Now Buttons', 'Frictionless Checkout UX Flow', 'Trust Seals & Secure Payment Badges']
      },
      {
        slug: 'website-redesign',
        title: 'Website Redesign',
        shortDesc: 'Transform outdated, slow websites into modern, high-converting digital powerhouses.',
        metaTitle: 'Website Redesign Services in Mangalore - Zaviroq',
        metaDesc: 'Modernize your outdated website without losing Google rankings. Zaviroq executes complete website redesigns in Mangalore.',
        keywords: 'website redesign mangalore, revamp website karnataka, modern web redesign',
        heroDesc: 'If your website looks like it was built in 2014, prospective clients are leaving for competitors. We modernize your visual identity, accelerate load times, and restructure layouts while preserving existing rankings.',
        deliverables: ['Current Website Audit & SEO Map', 'Modernized Visual Architecture', 'Mobile Responsiveness Overhaul', '301 Redirect Mapping & Rank Protection', 'Conversion Funnel Optimization']
      }
    ]
  },

  // 6. Website Development
  {
    slug: 'website-development',
    title: 'Website Development',
    shortTitle: 'Web Development',
    categoryGroup: 'web-development',
    metaTitle: 'Web Development Company in Mangalore | Custom & Full-Stack Websites - Zaviroq',
    metaDesc: 'High-performance web development in Mangalore using Next.js, React, and WordPress. Sub-second load speeds, bulletproof security, and scalable architectures.',
    keywords: [
      'web development company in mangalore',
      'website developers in mangalore',
      'nextjs development agency mangalore',
      'wordpress development mangalore',
      'custom web development karnataka'
    ],
    eyebrow: '#1 FULL-STACK WEB DEVELOPMENT COMPANY IN MANGALORE',
    tagline: 'Clean Code, Sub-Second Speed, and Future-Proof Web Architecture.',
    heroSub: 'A slow, buggy website costs you money every single day. Bloated WordPress themes and poorly coded plugins drag down performance, fail Google Core Web Vitals, and create security vulnerabilities. At Zaviroq, our software engineers build high-performance web applications and corporate websites using Next.js, React, TypeScript, and hardened WordPress setups. We engineer platforms that load in milliseconds and scale without breaking.',
    color: '#3b82f6',
    iconName: 'Code',
    stats: [
      { number: '100/100', label: 'PageSpeed Target', desc: 'Achieved on Google Core Web Vitals testing for Next.js builds.' },
      { number: '< 800ms', label: 'Server Response', desc: 'Sub-second response times backed by modern CDN architectures.' },
      { number: '320+', label: 'Websites Built', desc: 'Clean, modular, enterprise-grade web solutions deployed globally.' },
      { number: '99.9%', label: 'Uptime Reliability', desc: 'Zero unmonitored crashes and bulletproof security protocols.' }
    ],
    outcomes: [
      { title: 'Eliminate Frustrating Website Slowdowns', desc: 'Achieve sub-second load times that satisfy Google and visitors.', fix: 'Next.js Server-Side Rendering & Global Edge CDN Caching' },
      { title: 'Protect Your Site from Security Exploits & Malware', desc: 'Deploy hardened security headers and enterprise firewalls.', fix: 'Automated Vulnerability Patching & SSL Architecture' },
      { title: 'Scale Seamlessly During Traffic Spikes', desc: 'Handle thousands of concurrent visitors without server crashes.', fix: 'Serverless Auto-Scaling & Headless Architecture' },
      { title: 'Take Full Ownership of Your Codebase', desc: 'Receive clean, modular TypeScript code with complete documentation.', fix: 'Modern Git Version Control & Zero Vendor Lock-In' }
    ],
    roadmap: [
      { month: 'Sprint 01', phase: 'Architecture & Environment Setup', focus: 'Database Modeling & Tech Stack Alignment', highlight: 'Foundation Setup', milestones: ['Configure development staging server, CI/CD pipeline, and Git repository', 'Establish database schema and API endpoints for dynamic features', 'Set up Next.js / TypeScript structure with optimized build tooling', 'Configure security headers, CORS policies, and environment variables'] },
      { month: 'Sprint 02', phase: 'Frontend & Backend Integration', focus: 'Pixel-Perfect Component Development', highlight: 'Core Development', milestones: ['Build responsive frontend components matching approved Figma designs', 'Integrate headless CMS or custom administration dashboards', 'Implement sub-second server-side rendering (SSR) and dynamic routes', 'Configure contact form handling, email notifications, and CRM webhooks'] },
      { month: 'Sprint 03', phase: 'Testing, Security & Production Launch', focus: 'Core Web Vitals & Production Deployment', highlight: 'Live Deployment', milestones: ['Run cross-browser and cross-device responsive quality assurance tests', 'Benchmark and pass 100/100 Google Core Web Vitals performance checks', 'Configure DNS routing, SSL certificates, and 301 redirect mappings', 'Conduct client training and handover comprehensive code documentation'] }
    ],
    faqs: [
      { q: 'Which technology stack do you recommend for our website?', a: 'For corporate websites, high-traffic portals, and web applications, we recommend Next.js and React with TypeScript for sub-second speeds, top-tier SEO, and modern security. For businesses that need simple in-house blog editing, we build custom, lightweight WordPress themes without bloated visual builder plugins.' },
      { q: 'Will our team be able to edit content after the site is launched?', a: 'Yes. We configure intuitive admin dashboards and content management systems so your team can easily update text, upload images, publish new blog articles, and manage leads without writing a single line of code.' },
      { q: 'Do you provide ongoing website maintenance and security support?', a: 'Yes. We offer comprehensive ongoing maintenance packages that cover regular software updates, automated daily cloud backups, uptime monitoring, malware scanning, and technical troubleshooting.' }
    ],
    subservices: [
      {
        slug: 'custom-website-development',
        title: 'Custom Website Development',
        shortDesc: 'Bespoke full-stack web solutions engineered for unique business logic and high performance.',
        metaTitle: 'Custom Website Development in Mangalore - Zaviroq',
        metaDesc: 'Engineered for your exact business requirements. Zaviroq builds custom full-stack websites in Mangalore.',
        keywords: 'custom website development mangalore, full stack web development karnataka',
        heroDesc: 'When off-the-shelf templates cannot accommodate your business model. We engineer tailored full-stack web solutions with custom databases, API integrations, and secure user portals.',
        deliverables: ['Custom Database Schema Design', 'Tailored Backend API Development', 'Modern Responsive Frontend Code', 'Interactive Client Portals', 'Complete Source Code Handover']
      },
      {
        slug: 'wordpress-development',
        title: 'WordPress Development',
        shortDesc: 'Fast, secure, custom WordPress themes built without bloated page builders.',
        metaTitle: 'Custom WordPress Development in Mangalore - Zaviroq',
        metaDesc: 'Fast, secure WordPress websites without slow plugins. Zaviroq builds custom WordPress themes in Mangalore.',
        keywords: 'wordpress development mangalore, custom wordpress theme karnataka, secure wordpress agency',
        heroDesc: 'WordPress powers 40% of the web, but heavy themes make it slow and vulnerable. We develop custom, lightweight WordPress themes that load instantly and are easy for your team to edit.',
        deliverables: ['Custom Block-Based Theme Coding', 'Zero Bloated Page-Builder Plugins', 'Hardened Security & Malware Defense', 'Automated Daily Cloud Backups', 'Intuitive Admin Editing Interface']
      },
      {
        slug: 'react-development',
        title: 'React.js Development',
        shortDesc: 'Dynamic, component-driven user interfaces built with React and TypeScript.',
        metaTitle: 'React.js Web Development Agency in Mangalore - Zaviroq',
        metaDesc: 'Build fast, interactive web applications with React.js. Zaviroq engineers scalable React solutions in Mangalore.',
        keywords: 'react development mangalore, reactjs developer karnataka, frontend web development',
        heroDesc: 'Build responsive, app-like web experiences. We utilize React’s component architecture to create fast, interactive interfaces that deliver seamless navigation across all device screens.',
        deliverables: ['Modular Component Architecture', 'Clean TypeScript Codebase', 'State Management Integration (Redux/Zustand)', 'API Data Fetching & Caching', 'Cross-Platform Browser Testing']
      },
      {
        slug: 'nextjs-development',
        title: 'Next.js Development',
        shortDesc: 'Enterprise-grade Server-Side Rendered (SSR) web applications optimized for speed and SEO.',
        metaTitle: 'Next.js Development Company in Mangalore - Zaviroq',
        metaDesc: 'Sub-second speed and unmatched Google SEO. Zaviroq builds enterprise Next.js applications in Mangalore.',
        keywords: 'nextjs development mangalore, nextjs agency karnataka, server side rendering seo',
        heroDesc: 'Next.js is the gold standard for high-performance websites today. We leverage Server-Side Rendering (SSR) and Static Site Generation (SSG) to deliver sub-second speeds and flawless Google indexation.',
        deliverables: ['Server-Side Rendered Architecture', 'Static Site Generation (SSG)', 'Automated Image Optimization', '100/100 Core Web Vitals Scores', 'Edge CDN Deployment on Vercel/AWS']
      },
      {
        slug: 'web-application-development',
        title: 'Web Application Development',
        shortDesc: 'Custom SaaS platforms, client portals, and cloud-based business web software.',
        metaTitle: 'Custom Web Application Development in Mangalore - Zaviroq',
        metaDesc: 'Build scalable cloud web applications and SaaS platforms. Zaviroq develops custom web apps in Mangalore.',
        keywords: 'web application development mangalore, saas development karnataka, cloud software agency',
        heroDesc: 'Turn complex workflows into streamlined cloud applications. We build multi-tenant SaaS platforms, customer dashboards, and internal business tools with robust security and scalable architectures.',
        deliverables: ['Multi-Tenant User Authentication', 'Role-Based Access Control (RBAC)', 'RESTful & GraphQL API Integration', 'Payment & Subscription Billing', 'Comprehensive Quality Assurance']
      },
      {
        slug: 'website-maintenance',
        title: 'Website Maintenance & Support',
        shortDesc: 'Proactive 24/7 security monitoring, daily backups, speed optimizations, and bug fixes.',
        metaTitle: 'Website Maintenance & Support Services in Mangalore - Zaviroq',
        metaDesc: 'Keep your website secure, fast, and updated 24/7. Zaviroq provides ongoing website maintenance in Mangalore.',
        keywords: 'website maintenance mangalore, web support karnataka, website security management',
        heroDesc: 'Protect your digital investment. Our maintenance plans ensure your software stays updated, security patches are applied immediately, and any technical glitch is resolved before visitors notice.',
        deliverables: ['24/7 Uptime & Health Monitoring', 'Automated Daily Cloud Backups', 'Security Scanning & Vulnerability Fixes', 'CMS Core & Plugin Updates', 'Dedicated Developer Support Hours']
      },
      {
        slug: 'website-performance-optimization',
        title: 'Website Performance Optimization',
        shortDesc: 'Audit and accelerate slow websites to pass Google Core Web Vitals with flying colors.',
        metaTitle: 'Website Speed & Core Web Vitals Optimization in Mangalore - Zaviroq',
        metaDesc: 'Speed up your slow website to load in under a second. Zaviroq optimizes Core Web Vitals in Mangalore.',
        keywords: 'speed up website mangalore, core web vitals optimization karnataka, page speed agency',
        heroDesc: 'Every second of load delay slashes conversions by 7%. We compress bloated code, optimize database queries, defer render-blocking scripts, and configure edge caching to make your site fly.',
        deliverables: ['Comprehensive Speed Profiling Audit', 'Render-Blocking Script Elimination', 'Database Query Optimization', 'Next-Gen Image Format Conversion', 'Sub-Second Page Load Guarantee']
      }
    ]
  },

  // 7. E-commerce Development
  {
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    shortTitle: 'E-commerce',
    categoryGroup: 'web-development',
    metaTitle: 'E-commerce Website Development in Mangalore | Shopify & Custom Stores - Zaviroq',
    metaDesc: 'Build scalable online stores with frictionless checkout. Zaviroq develops custom Shopify, WooCommerce, and headless e-commerce platforms in Mangalore.',
    keywords: [
      'ecommerce development company in mangalore',
      'shopify developers in mangalore',
      'woocommerce agency mangalore',
      'online store development karnataka',
      'custom ecommerce website mangalore'
    ],
    eyebrow: '#1 E-COMMERCE DEVELOPMENT COMPANY IN MANGALORE',
    tagline: 'High-Converting Online Stores Engineered to Scale Sales Velocity.',
    heroSub: 'Building a profitable e-commerce brand requires far more than listing products online. If your store has confusing navigation, slow category loading, or a clunky checkout process, shoppers will abandon their carts. At Zaviroq, we engineer high-performance online stores on Shopify, WooCommerce, and custom headless platforms designed for frictionless checkout, high average order value (AOV), and seamless payment gateway integrations.',
    color: '#10b981',
    iconName: 'ShoppingCart',
    stats: [
      { number: '₹40Cr+', label: 'E-com Volume', desc: 'Processed across client e-commerce stores globally.' },
      { number: '< 1.8s', label: 'Checkout Load', desc: 'Optimized checkout flows reducing cart abandonment.' },
      { number: '99.98%', label: 'Payment Success', desc: 'Reliable Razorpay, Stripe, and GCC gateway integrations.' },
      { number: '+32%', label: 'AOV Increase', desc: 'Average order value boost achieved through smart upsells.' }
    ],
    outcomes: [
      { title: 'Reduce Painful Cart Abandonment Rates', desc: 'Implement one-click checkouts, local payment options, and trust seals.', fix: 'Streamlined One-Page Checkout & Payment Gateway Architecture' },
      { title: 'Manage Thousands of SKUs Without Slowdowns', desc: 'Deploy database caching and faceted collection filtering that loads instantly.', fix: 'Scalable Inventory Architecture & Cloud CDN Caching' },
      { title: 'Automate Order Sync with Shipping & Inventory ERPs', desc: 'Eliminate manual data entry and shipping label generation errors.', fix: 'Shiprocket, Delhivery & ERP API Integration' },
      { title: 'Sell Across India and the Middle East', desc: 'Accept payments in INR, AED, and SAR with localized currency switchers.', fix: 'Multi-Currency & Regional Shipping Gateways' }
    ],
    roadmap: [
      { month: 'Sprint 01', phase: 'Product Architecture & Platform Choice', focus: 'SKU Modeling & Payment Gateways', highlight: 'Store Foundation', milestones: ['Determine optimal platform (Shopify Plus, WooCommerce, or Custom Headless)', 'Structure product categories, attributes, and inventory taxonomy', 'Configure domestic and international payment gateways (Razorpay, Stripe, COD)', 'Map out shipping zones, weight rules, and logistics integrations'] },
      { month: 'Sprint 02', phase: 'Theme Customization & UX Engineering', focus: 'Product Page Optimization & Mobile UX', highlight: 'Conversion Architecture', milestones: ['Build custom responsive e-commerce theme matching brand guidelines', 'Design high-converting Product Detail Pages with clear trust indicators', 'Configure automated abandoned cart emails and WhatsApp recovery flows', 'Implement smart cross-sell and post-purchase upsell mechanisms'] },
      { month: 'Sprint 03', phase: 'End-to-End Testing & Store Launch', focus: 'Payment Verification & Launch Campaign', highlight: 'Live Launch', milestones: ['Conduct end-to-end sandbox and live transaction testing across all payment methods', 'Verify mobile checkout usability and field auto-fill functionality', 'Connect Google Merchant Center, Meta Catalog, and Google Analytics 4 e-com tracking', 'Provide comprehensive staff training on order fulfillment and refund processing'] }
    ],
    faqs: [
      { q: 'Should we choose Shopify or WooCommerce for our online store?', a: 'For businesses that want a reliable, hosted platform with minimal technical maintenance, Shopify is the gold standard. For brands that require deep custom integrations, zero monthly platform transaction fees, or complete database control, WooCommerce is an exceptional, flexible alternative.' },
      { q: 'Which payment gateways do you integrate for Indian and GCC stores?', a: 'For Indian businesses, we integrate Razorpay, Cashfree, PayU, and PhonePe with support for UPI, Net Banking, credit cards, and Cash on Delivery (COD). For Gulf clients, we integrate Stripe, Telr, PayTabs, and Checkout.com.' },
      { q: 'Can you migrate our existing store from another platform without losing data?', a: 'Yes. We perform secure e-commerce migrations, transferring your entire customer database, order history, product catalog, and images while maintaining strict 301 redirects to protect existing Google rankings.' }
    ],
    subservices: [
      {
        slug: 'shopify-development',
        title: 'Shopify Store Development',
        shortDesc: 'Custom Shopify and Shopify Plus themes engineered for fast checkout and high conversions.',
        metaTitle: 'Shopify Development Agency in Mangalore - Zaviroq',
        metaDesc: 'Build a profitable Shopify store. Zaviroq designs and develops custom Shopify stores in Mangalore.',
        keywords: 'shopify development mangalore, shopify agency karnataka, shopify plus developers',
        heroDesc: 'Scale your D2C brand on the world’s leading commerce platform. We build custom Liquid themes, configure private apps, and optimize your store for lightning-fast mobile checkouts.',
        deliverables: ['Custom Shopify Liquid Theme Coding', 'App Setup & Optimization', 'Payment & Shipping Integration', 'Conversion-Optimized Checkout Flow', 'Speed & Mobile Performance Tuning']
      },
      {
        slug: 'woocommerce-development',
        title: 'WooCommerce Development',
        shortDesc: 'Tailored WordPress e-commerce solutions with zero recurring platform transaction fees.',
        metaTitle: 'WooCommerce Development Company in Mangalore - Zaviroq',
        metaDesc: 'Custom WooCommerce online stores with complete ownership. Zaviroq develops WooCommerce stores in Mangalore.',
        keywords: 'woocommerce development mangalore, wordpress ecommerce karnataka, custom woocommerce agency',
        heroDesc: 'Take 100% control over your data and store functionality. We build secure, modular WooCommerce platforms tailored to complex product configurators, wholesale pricing, and subscription billing.',
        deliverables: ['Custom WooCommerce Theme Development', 'Zero Bloated Plugin Configurations', 'Custom Checkout & Cart Modifications', 'B2B Wholesale & Retail Rules', 'Security & Payment Gateway Setup']
      },
      {
        slug: 'custom-ecommerce',
        title: 'Custom Headless E-commerce',
        shortDesc: 'Next.js and headless e-commerce architectures for ultra-fast, multi-brand global marketplaces.',
        metaTitle: 'Custom Headless E-Commerce Development in Mangalore - Zaviroq',
        metaDesc: 'Sub-second headless e-commerce built with Next.js. Zaviroq engineers enterprise stores in Mangalore.',
        keywords: 'custom ecommerce mangalore, headless commerce karnataka, nextjs ecommerce agency',
        heroDesc: 'For enterprise brands that demand sub-second speed across millions of pageviews. We separate the Next.js frontend from the backend commerce engine to deliver unmatched performance.',
        deliverables: ['Headless Next.js Frontend Architecture', 'GraphQL & REST API Integration', 'Multi-Warehouse Inventory Sync', 'Multi-Currency & International Routing', 'Enterprise Performance Testing']
      },
      {
        slug: 'payment-gateway-integration',
        title: 'Payment Gateway Integration',
        shortDesc: 'Secure integration of Razorpay, Stripe, Cashfree, and international payment processors.',
        metaTitle: 'Payment Gateway Integration Services in Mangalore - Zaviroq',
        metaDesc: 'Seamless payment processing for online stores. Zaviroq integrates Razorpay, Stripe, and UPI in Mangalore.',
        keywords: 'payment gateway integration mangalore, razorpay integration karnataka, stripe setup agency',
        heroDesc: 'Friction at checkout kills sales. We integrate reliable, secure payment gateways supporting UPI, credit cards, EMI options, and international currencies with automated fraud screening.',
        deliverables: ['Razorpay, Stripe & Cashfree Integration', 'UPI One-Click & QR Code Payments', 'Multi-Currency Checkout Support', 'Automated Webhook & Order Verification', 'PCI-DSS Compliance Alignment']
      }
    ]
  },

  // 8. Branding & Graphic Design
  {
    slug: 'branding',
    title: 'Branding & Graphic Design',
    shortTitle: 'Branding & Design',
    categoryGroup: 'creative-media',
    metaTitle: 'Branding & Graphic Design Agency in Mangalore | Identity & Logo - Zaviroq',
    metaDesc: 'Stand out in crowded markets. Zaviroq crafts memorable logos, comprehensive brand identity guidelines, company profiles, and premium packaging in Mangalore.',
    keywords: [
      'branding agency in mangalore',
      'graphic design company in mangalore',
      'logo design services mangalore',
      'corporate identity design karnataka',
      'packaging design mangalore'
    ],
    eyebrow: '#1 STRATEGIC BRANDING AGENCY IN MANGALORE',
    tagline: 'Memorable Brand Identities That Command Immediate Respect.',
    heroSub: 'In competitive markets, the business with the strongest brand wins. If your company looks generic, prospective clients will negotiate your prices down and treat you like a commodity. At Zaviroq, we develop complete brand identities: memorable vector logos, cohesive color systems, executive stationery, company profile books, and retail packaging designed to establish unquestioned authority.',
    color: '#f59e0b',
    iconName: 'PenTool',
    stats: [
      { number: '100%', label: 'Vector Originality', desc: 'Every logo and brand mark is crafted from scratch with full trademark ownership.' },
      { number: '240+', label: 'Brands Identity Built', desc: 'Crafted for corporate, industrial, healthcare, and luxury brands.' },
      { number: 'Complete', label: 'Brand Guidelines', desc: 'Comprehensive PDF style manuals delivered with every identity project.' },
      { number: 'Print & Digital', label: 'Production Ready', desc: 'Delivered in all formats: CMYK for print and RGB for digital displays.' }
    ],
    outcomes: [
      { title: 'Stop Competing on Price as an Undifferentiated Commodity', desc: 'A premium visual identity enables you to charge higher prices with confidence.', fix: 'Strategic Brand Positioning & High-End Visual Systems' },
      { title: 'Win Lucrative Corporate Contracts & Tenders', desc: 'Present your capabilities with an executive corporate profile book that impresses.', fix: 'Corporate Profile Books & Pitch Deck Design' },
      { title: 'Maintain Consistent Visuals Across All Touchpoints', desc: 'Never worry about inconsistent colors, stretched logos, or mismatched fonts.', fix: 'Complete Brand Identity Manuals & Style Guides' },
      { title: 'Stand Out on Physical Retail Shelves', desc: 'Capture customer attention in stores with retail packaging designed to sell.', fix: 'Custom Packaging, Label & Box Architecture' }
    ],
    roadmap: [
      { month: 'Phase 01', phase: 'Brand Discovery & Archetype Strategy', focus: 'Market Positioning & Competitive Audit', highlight: 'Strategic Foundation', milestones: ['Conduct stakeholder brand interviews and target audience profiling', 'Audit competitor visual identities to uncover differentiation opportunities', 'Define brand archetype, core messaging pillars, and emotional tone', 'Deliver curated moodboards exploring typography and color directions'] },
      { month: 'Phase 02', phase: 'Logo Design & Visual Exploration', focus: 'Vector Crafting & Identity Iteration', highlight: 'Logo Concepting', milestones: ['Present 3 distinct, thoughtfully developed logo design directions', 'Test logos across real-world mockups: storefronts, cards, digital screens', 'Refine chosen concept based on direct feedback to perfection', 'Establish primary and secondary brand color codes (PANTONE, CMYK, HEX)'] },
      { month: 'Phase 03', phase: 'Collateral Design & Brand Book Delivery', focus: 'Stationery, Profiles & Asset Delivery', highlight: 'Complete Brand System', milestones: ['Design corporate stationery: business cards, letterheads, and envelopes', 'Craft company profile brochure, presentation decks, and social templates', 'Compile comprehensive Brand Identity Guidelines manual', 'Deliver organized asset package with all vector and print-ready files'] }
    ],
    faqs: [
      { q: 'What do we receive at the end of a branding project?', a: 'You receive complete trademark ownership and an organized digital archive containing your logo in all vector formats (AI, EPS, SVG, PDF) and high-resolution digital formats (PNG, JPG). You also receive corporate stationery files, social media profile kits, and a comprehensive Brand Guidelines manual.' },
      { q: 'How many logo design concepts do you present?', a: 'We typically develop and present 3 distinct, strategic logo concepts. Each direction is presented with real-world mockups so you can see how the identity lives on business cards, signage, apparel, and digital screens.' },
      { q: 'Can you design physical brochures, packaging, and business cards for print?', a: 'Yes. Our design team has extensive prepress experience. We prepare all files with proper bleed, crop marks, and CMYK color profiles, ensuring your physical collateral prints exactly as envisioned.' }
    ],
    subservices: [
      {
        slug: 'logo-design',
        title: 'Custom Logo Design',
        shortDesc: 'Bespoke, timeless vector logo design crafted with full copyright ownership.',
        metaTitle: 'Custom Logo Design Company in Mangalore - Zaviroq',
        metaDesc: 'Memorable, professional vector logo design. Zaviroq creates custom brand marks in Mangalore.',
        keywords: 'logo design mangalore, custom logo designer karnataka, corporate logo design',
        heroDesc: 'Your logo is the foundation of your public identity. We design distinctive, timeless vector marks that communicate your brand values instantly across business cards, building signage, and mobile screens.',
        deliverables: ['3 Distinct Strategic Logo Concepts', '100% Original Vector Artwork', 'Full Copyright Ownership Transfer', 'Complete File Formats (AI, EPS, SVG, PNG)', 'Monochrome & Reversed Variations']
      },
      {
        slug: 'brand-identity',
        title: 'Brand Identity Guidelines',
        shortDesc: 'Comprehensive visual identity manuals defining colors, typography, and logo usage rules.',
        metaTitle: 'Brand Identity Design Agency in Mangalore - Zaviroq',
        metaDesc: 'Complete corporate brand identity systems. Zaviroq crafts comprehensive brand guidelines in Mangalore.',
        keywords: 'brand identity agency mangalore, corporate identity karnataka, brand style guide',
        heroDesc: 'Ensure your brand looks consistent across every department and vendor. We compile an exhaustive Brand Style Guide documenting typography rules, color formulas, and spatial requirements.',
        deliverables: ['Comprehensive Brand Guidelines PDF', 'PANTONE, CMYK & HEX Color Palettes', 'Typography Pairings & Hierarchy Rules', 'Iconography & Graphic Element Specs', 'Dos and Don’ts Usage Guidelines']
      },
      {
        slug: 'graphic-design',
        title: 'Graphic Design',
        shortDesc: 'High-impact marketing collateral, digital banners, flyers, and event signage.',
        metaTitle: 'Graphic Design Services in Mangalore - Zaviroq',
        metaDesc: 'Professional graphic design for digital and print. Zaviroq designs high-impact collateral in Mangalore.',
        keywords: 'graphic design services mangalore, creative design karnataka, marketing collateral',
        heroDesc: 'Communicate your message with clarity and flair. Our graphic designers produce eye-catching marketing collateral, trade show backdrops, sales sheets, and digital promotional graphics.',
        deliverables: ['Promotional Banners & Posters', 'Trade Show Displays & Event Signage', 'Digital Advertising Creatives', 'Sales Sheets & Product Flyers', 'Print-Ready High-Res Formats']
      },
      {
        slug: 'social-media-design',
        title: 'Social Media Design',
        shortDesc: 'Custom social media profile kits, template packages, and branded carousel layouts.',
        metaTitle: 'Social Media Branding & Graphic Design in Mangalore - Zaviroq',
        metaDesc: 'Cohesive social media visuals that elevate your brand. Zaviroq designs social templates in Mangalore.',
        keywords: 'social media design mangalore, instagram template design karnataka, branded graphics',
        heroDesc: 'Stop using disjointed templates. We design cohesive visual branding packages for Instagram, LinkedIn, and Facebook, including profile avatars, banner covers, and editable carousel templates.',
        deliverables: ['Profile Avatars & Banner Covers', 'Editable Figma/Canva Post Templates', 'Story Highlight Cover Icons', 'Carousel Slide Layout Systems', 'Consistent Brand Palette Application']
      },
      {
        slug: 'company-profile-design',
        title: 'Company Profile Design',
        shortDesc: 'Prestigious corporate profile brochures and investor pitch decks that win high-value deals.',
        metaTitle: 'Company Profile & Brochure Design in Mangalore - Zaviroq',
        metaDesc: 'Win corporate contracts with prestigious profile brochures. Zaviroq designs company profiles in Mangalore.',
        keywords: 'company profile design mangalore, corporate brochure karnataka, pitch deck agency',
        heroDesc: 'When bidding for enterprise tenders or meeting investors, your profile document speaks for you. We design elegant, multi-page corporate profile books that showcase your capabilities with authority.',
        deliverables: ['Multi-Page Corporate Brochure Design', 'Custom Executive Layouts & Tables', 'Interactive Digital PDF with Clickable Links', 'High-Res Print-Ready CMYK Files', 'Infographic Visuals for Milestones']
      },
      {
        slug: 'business-card-design',
        title: 'Business Card & Stationery',
        shortDesc: 'Luxury business cards, executive letterheads, envelopes, and corporate folders.',
        metaTitle: 'Business Card & Stationery Design in Mangalore - Zaviroq',
        metaDesc: 'Make a lasting impression with luxury business cards and corporate stationery from Zaviroq in Mangalore.',
        keywords: 'business card design mangalore, corporate stationery karnataka, executive letterhead',
        heroDesc: 'Handing over a flimsy, template card devalues your brand. We design luxury business cards with spot UV, foil stamping, and embossed specs, paired with matching corporate letterheads and envelopes.',
        deliverables: ['Luxury Business Card Artwork', 'Corporate Letterhead in Word & PDF', 'Formal Envelopes (DL, C4, C5)', 'Document Presentation Folders', 'Precise Print & Paper Specifications']
      },
      {
        slug: 'packaging-design',
        title: 'Packaging & Label Design',
        shortDesc: 'Retail packaging boxes, product labels, and pouch designs that stand out on retail shelves.',
        metaTitle: 'Packaging & Product Label Design in Mangalore - Zaviroq',
        metaDesc: 'Stand out on retail shelves with custom packaging design. Zaviroq designs product boxes and labels in Mangalore.',
        keywords: 'packaging design mangalore, product label design karnataka, box design agency',
        heroDesc: 'Great packaging turns casual shoppers into buyers. We engineer precise dielines, eye-catching box graphics, regulatory label layouts, and realistic 3D bottle and pouch mockups.',
        deliverables: ['Custom Dieline Layout & Structural Design', 'Product Label & Ingredient Panel Design', 'Realistic 3D Product Renders', 'Prepress Print Files with Bleed & Spot UV', 'Multi-SKU Packaging Extensions']
      }
    ]
  },

  // 9. Video Editing & Production
  {
    slug: 'video-production',
    title: 'Video Editing & Production',
    shortTitle: 'Video Production',
    categoryGroup: 'creative-media',
    metaTitle: 'Video Production & Editing Agency in Mangalore | Reels & Ads - Zaviroq',
    metaDesc: 'Professional video editing, corporate brand films, and viral Instagram reels. Zaviroq produces high-retention video content that drives sales in Mangalore.',
    keywords: [
      'video editing agency in mangalore',
      'video production company mangalore',
      'corporate video production karnataka',
      'commercial ad video mangalore',
      'reels editing agency mangalore'
    ],
    eyebrow: '#1 HIGH-RETENTION VIDEO AGENCY IN MANGALORE',
    tagline: 'Cinematic Storytelling & Fast-Paced Video That Captures Attention.',
    heroSub: 'Video is the most powerful communication medium on the internet today, but boring, slow-paced videos get skipped instantly. At Zaviroq, our post-production studio cuts fast-paced Instagram reels, cinematic corporate films, product commercials, and customer testimonial stories designed with hook-first editing, dynamic sound design, and custom motion graphics.',
    color: '#ef4444',
    iconName: 'Video',
    stats: [
      { number: '1,200+', label: 'Videos Edited', desc: 'Commercial reels, corporate films, and product launch videos completed.' },
      { number: '4K UHD', label: 'Master Quality', desc: 'Color-graded and mastered in cinema-grade 4K resolution.' },
      { number: '78%', label: 'Retention Target', desc: 'Paced editing designed to maintain viewer attention past the 15-second mark.' },
      { number: '48-72h', label: 'Fast Turnaround', desc: 'Rapid post-production workflows for short-form social content.' }
    ],
    outcomes: [
      { title: 'Stop Viewers from Swiping Away in the First 3 Seconds', desc: 'Engineer visual pattern interrupts and compelling text hooks.', fix: 'Hook-First Video Pacing & Motion Graphic Overlays' },
      { title: 'Showcase Modern Facilities & Clinical Capabilities', desc: 'Give prospective clients an immersive tour of your operations.', fix: 'Cinematic Corporate Brand Films & 4K Aerial Videography' },
      { title: 'Turn Complex Products into Clear Video Demos', desc: 'Explain software features and physical products visually.', fix: 'Product Demo Videos & Motion Graphic Walkthroughs' },
      { title: 'Scale Video Ad Creative Output on Meta & YouTube', desc: 'Produce multiple hook variations to lower your cost per acquisition.', fix: 'Modular Video Ad Variations & Split-Testing Packages' }
    ],
    roadmap: [
      { month: 'Phase 01', phase: 'Pre-Production & Scripting', focus: 'Storyboarding & Shot Planning', highlight: 'Creative Concept', milestones: ['Develop video concepts, hook frameworks, and narrative structures', 'Write conversational, compelling scripts with visual cue notes', 'Provide detailed equipment and lighting shot checklists for recording', 'Review brand visual guidelines, color profiles, and audio preferences'] },
      { month: 'Phase 02', phase: 'Assembly & Fast-Paced Cutting', focus: 'Rough Cut & Narrative Flow', highlight: 'Pacing & Structure', milestones: ['Import raw 4K footage and assemble high-retention rough cuts', 'Trim dead air, pauses, and filler words to maintain engaging velocity', 'Add dynamic zoom cuts, angle switches, and B-roll cutaway footage', 'Share initial draft for client timing review and revision notes'] },
      { month: 'Phase 03', phase: 'Sound Design, Color & Final Master', focus: 'Color Grading & Subtitle Animation', highlight: 'Master Delivery', milestones: ['Apply cinema-grade color grading and skin-tone correction', 'Build immersive sound design with custom foley, risers, and music', 'Animate dynamic kinetic subtitles with highlighted keyword styling', 'Export final master files formatted for Instagram, YouTube, and Web'] }
    ],
    faqs: [
      { q: 'What types of video content do you produce?', a: 'We specialize in short-form social videos (Instagram Reels, YouTube Shorts), corporate overview films, customer testimonial interviews, product demonstration videos, and paid video ad creatives.' },
      { q: 'How do we send raw video footage to your editing team?', a: 'You can upload raw footage directly to our secure Google Drive or Dropbox folders. Our team organizes the assets, cleans up audio, and delivers polished drafts with timecoded review links.' },
      { q: 'Can you add dynamic animated subtitles and sound effects to our reels?', a: 'Yes. Every short-form video edit includes custom animated subtitles, kinetic text highlights, sound effects, and color grading to ensure high viewer retention even when watched on mute.' }
    ],
    subservices: [
      {
        slug: 'video-editing',
        title: 'Commercial Video Editing',
        shortDesc: 'Professional post-production, multi-cam cutting, sound design, and color grading.',
        metaTitle: 'Commercial Video Editing Services in Mangalore - Zaviroq',
        metaDesc: 'Professional video editing for corporate and commercial brands. Zaviroq delivers high-end post-production in Mangalore.',
        keywords: 'video editing services mangalore, post production karnataka, video editor mangalore',
        heroDesc: 'Turn raw footage into engaging stories. We trim dead air, cut between angles, add cinematic B-roll, clean up background noise, and color-grade footage to cinema-grade standards.',
        deliverables: ['Multi-Camera Editing & Assembly', 'Audio Cleanup & Noise Removal', 'Color Correction & Cinematic Grading', 'Dynamic Music & Foley Sound Design', 'Multi-Format Export (16:9, 9:16, 1:1)']
      },
      {
        slug: 'reels-creation',
        title: 'Reels & Shorts Editing',
        shortDesc: 'Viral short-form video edits with dynamic subtitles, zoom cuts, and sound effects.',
        metaTitle: 'Viral Reels & Shorts Video Editing in Mangalore - Zaviroq',
        metaDesc: 'High-retention video editing for Instagram Reels & YouTube Shorts. Edited by Zaviroq in Mangalore.',
        keywords: 'reels editing mangalore, youtube shorts editor karnataka, viral short video editing',
        heroDesc: 'Win the battle for attention on mobile feeds. We craft fast-paced video edits with 3-second hook text, animated captions, B-roll overlays, and sound cues that keep viewers watching to the end.',
        deliverables: ['Hook-First Video Pacing', 'Animated Kinetic Subtitles', 'Sound Effects & Trend Audio Sync', 'Visual B-Roll & Meme Cutaways', 'Optimized for Instagram & YouTube Shorts']
      },
      {
        slug: 'promotional-videos',
        title: 'Promotional Ad Videos',
        shortDesc: 'Direct-response commercial video ads crafted to drive immediate sales and conversions.',
        metaTitle: 'Promotional Video Ads Production in Mangalore - Zaviroq',
        metaDesc: 'High-converting video ads for Meta and YouTube. Zaviroq produces promotional commercial videos in Mangalore.',
        keywords: 'promotional video mangalore, commercial video ads karnataka, product promo video',
        heroDesc: 'Sell your products and services with high-converting video ads. We script and cut persuasive direct-response ads designed specifically for Meta Ads and YouTube advertising funnels.',
        deliverables: ['Direct Response Video Scripting', 'Multiple Hook Variations for Testing', 'Call-to-Action Screen Overlays', 'Licensed Background Music Tracks', 'Optimized for Paid Social & Search Ads']
      },
      {
        slug: 'corporate-videos',
        title: 'Corporate Brand Films',
        shortDesc: 'Prestigious corporate overview films, executive interviews, and facility showcases.',
        metaTitle: 'Corporate Video Production in Mangalore - Zaviroq',
        metaDesc: 'Showcase your corporate capabilities with cinematic brand films from Zaviroq in Mangalore.',
        keywords: 'corporate video production mangalore, company profile video karnataka, facility tour video',
        heroDesc: 'Impress institutional buyers, investors, and recruits. We edit prestigious corporate profile films that highlight your infrastructure, company culture, leadership team, and engineering capabilities.',
        deliverables: ['Executive Interview Framing', 'Facility & Infrastructure Showcase', 'Motion Graphic Milestone Timelines', 'Cinematic Narration & Voiceover Sync', 'Master Delivery for Websites & Events']
      },
      {
        slug: 'brand-videos',
        title: 'Brand Story Videos',
        shortDesc: 'Emotional, narrative-driven brand films that connect deeply with prospective customers.',
        metaTitle: 'Brand Story & Narrative Video Production in Mangalore - Zaviroq',
        metaDesc: 'Tell your brand story with cinematic emotional power. Zaviroq crafts brand films in Mangalore.',
        keywords: 'brand story video mangalore, narrative brand film karnataka, brand commercial video',
        heroDesc: 'People do not buy what you do; they buy why you do it. We craft emotionally resonant brand films that tell your founder journey, core mission, and community impact with cinematic beauty.',
        deliverables: ['Founder Journey Narrative Scripting', 'Cinematic Soundscapes & Scoring', 'High-Emotion Story Arc Pacing', 'Custom Color Mood Grading', 'Teaser Cuts for Social Media Amplification']
      }
    ]
  },

  // 10. Email Marketing
  {
    slug: 'email-marketing',
    title: 'Email Marketing',
    shortTitle: 'Email Marketing',
    categoryGroup: 'digital-marketing',
    metaTitle: 'Email Marketing Agency in Mangalore | Drip Campaigns & Newsletters - Zaviroq',
    metaDesc: 'Turn email subscribers into repeat buyers. Zaviroq designs automated drip sequences, e-commerce flows, and high-converting newsletters in Mangalore.',
    keywords: [
      'email marketing agency in mangalore',
      'email automation company mangalore',
      'klaviyo agency karnataka',
      'newsletter marketing mangalore',
      'b2b cold email outreach'
    ],
    eyebrow: '#1 EMAIL AUTOMATION & RETENTION AGENCY IN MANGALORE',
    tagline: 'High-Converting Email Workflows That Drive Predictable Repeat Revenue.',
    heroSub: 'Email marketing continues to generate the highest return on investment of any digital channel—delivering an average of ₹38 for every ₹1 spent. Yet most businesses send sporadic, boring promotional blasts that end up in the spam tab. At Zaviroq, we design automated lifecycle flows, abandoned cart recovery sequences, and engaging weekly editorial newsletters that keep your brand top-of-mind and drive repeat orders.',
    color: '#6366f1',
    iconName: 'Mail',
    stats: [
      { number: '38x', label: 'Average ROI', desc: 'Return on investment generated through automated email lifecycle flows.' },
      { number: '42.6%', label: 'Open Rate Target', desc: 'Average open rate achieved with CTR-tested subject lines.' },
      { number: '99.2%', label: 'Deliverability', desc: 'Strict SPF, DKIM, DMARC, and sender domain reputation protection.' },
      { number: '24/7', label: 'Automated Revenue', desc: 'Drip sequences working continuously in the background.' }
    ],
    outcomes: [
      { title: 'Recover Abandoned Carts and Incomplete Form Submissions', desc: 'Trigger timely automated reminders that recover up to 22% of lost sales.', fix: 'Automated Klaviyo & Mailchimp Abandonment Workflows' },
      { title: 'Nurture Leads Who Are Not Yet Ready to Buy', desc: 'Educate prospects over 30 days until they are ready to schedule a call.', fix: 'Multi-Step Educational Drip Sequences' },
      { title: 'Keep Your Business Out of the Dreaded Spam Folder', desc: 'Configure bulletproof domain authentication and list cleaning.', fix: 'SPF, DKIM, DMARC Setup & List Scrubbing Protocols' },
      { title: 'Generate Predictable B2B Sales Inquiries', desc: 'Reach corporate procurement directors with personalized cold emails.', fix: 'Targeted B2B Cold Outreach & Verified Lead Data' }
    ],
    roadmap: [
      { month: 'Month 01', phase: 'Deliverability & Domain Authentication', focus: 'SPF, DKIM & Core Flow Setup', highlight: 'Inbox Deliverability', milestones: ['Configure SPF, DKIM, DMARC, and custom sending domain records', 'Audit and clean existing email lists to remove inactive and invalid addresses', 'Design responsive, branded email templates tested across Outlook and Gmail', 'Build the fundamental Welcome and Abandoned Cart automated flows'] },
      { month: 'Month 02', phase: 'Lifecycle Automation & Segmentation', focus: 'Drip Sequences & Customer Scoring', highlight: 'Automated Sequences', milestones: ['Build multi-stage educational drip campaigns for new inquiries', 'Segment audience by purchase history, location, and engagement recency', 'A/B test subject lines, preview text, and send time optimization', 'Launch regular value-first weekly or bi-weekly newsletters'] },
      { month: 'Month 03', phase: 'Advanced Personalization & Scaling', focus: 'VIP Flows & Win-Back Automations', highlight: 'Repeat Revenue Growth', milestones: ['Deploy post-purchase cross-sell and customer win-back sequences', 'Implement dynamic product recommendations and behavioral triggers', 'Monitor sender reputation scores and spam complaint rates', 'Deliver monthly revenue attribution and cohort retention reports'] }
    ],
    faqs: [
      { q: 'Which email marketing platforms do you work with?', a: 'We specialize in Klaviyo for e-commerce brands, Mailchimp and Brevo (Sendinblue) for service businesses, and HubSpot or ActiveCampaign for complex B2B sales automation pipelines.' },
      { q: 'How do you ensure our emails land in the primary inbox instead of spam?', a: 'We implement strict technical domain authentication (SPF, DKIM, DMARC, MX), maintain proper text-to-image ratios, monitor sender reputation, and clean your list regularly to eliminate dead or unengaged contacts.' },
      { q: 'Can email marketing generate sales for local service businesses?', a: 'Yes. For clinics, builders, and service firms, regular automated emails educate prospects on your capabilities, share client success stories, and make booking consultations effortless.' }
    ],
    subservices: [
      {
        slug: 'newsletter-campaigns',
        title: 'Newsletter Campaigns',
        shortDesc: 'Engaging weekly and monthly editorial newsletters that keep your brand top-of-mind.',
        metaTitle: 'Email Newsletter Marketing in Mangalore - Zaviroq',
        metaDesc: 'Keep clients engaged with regular newsletters. Zaviroq writes and designs branded email newsletters in Mangalore.',
        keywords: 'newsletter marketing mangalore, email campaigns karnataka, branded newsletters',
        heroDesc: 'Stay in front of your customer base consistently. We research relevant industry insights, write engaging copy, design responsive layouts, and schedule broadcasts that achieve high open rates.',
        deliverables: ['Custom Editorial Copywriting', 'Responsive Mobile-First Templates', 'Subject Line A/B Testing Matrix', 'List Segmentation & Scheduling', 'Open & Click-Through Analytics']
      },
      {
        slug: 'drip-sequences',
        title: 'Automated Drip Sequences',
        shortDesc: 'Multi-stage automated onboarding and nurturing email sequences triggered by user actions.',
        metaTitle: 'Automated Email Drip Sequences in Mangalore - Zaviroq',
        metaDesc: 'Nurture leads automatically with email drip campaigns. Zaviroq builds automated sales sequences in Mangalore.',
        keywords: 'email drip campaigns mangalore, automated email sequences karnataka, lead nurturing email',
        heroDesc: 'Nurture new leads while you sleep. We map out psychological email sequences that welcome new subscribers, answer their key concerns, demonstrate proof, and invite them to take action.',
        deliverables: ['Welcome Sequence Architecture', 'Educational Nurturing Workflows', 'Time-Delayed Trigger Rules', 'Conditional Branching Logic', 'Conversion Goal Tracking']
      },
      {
        slug: 'ecommerce-email-flows',
        title: 'E-commerce Email Flows',
        shortDesc: 'Klaviyo automated flows for abandoned cart recovery, browse abandonment, and customer win-backs.',
        metaTitle: 'E-Commerce Email Marketing (Klaviyo) in Mangalore - Zaviroq',
        metaDesc: 'Recover abandoned carts and drive repeat sales with Klaviyo. Zaviroq manages e-commerce email flows in Mangalore.',
        keywords: 'ecommerce email marketing mangalore, klaviyo agency karnataka, cart abandonment recovery',
        heroDesc: 'Automated email flows account for up to 30% of total revenue in thriving e-commerce stores. We build high-converting cart recovery, browse abandonment, and VIP customer reward sequences.',
        deliverables: ['Abandoned Cart Recovery Flows', 'Browse Abandonment Triggers', 'Post-Purchase Thank You & Upsells', 'Customer Win-Back Re-engagement', 'Dynamic Product Recommendation Blocks']
      },
      {
        slug: 'b2b-cold-email',
        title: 'B2B Cold Email Outreach',
        shortDesc: 'Targeted, personalized B2B cold email campaigns reaching verified corporate decision-makers.',
        metaTitle: 'B2B Cold Email Lead Generation in Mangalore - Zaviroq',
        metaDesc: 'Reach corporate buyers directly. Zaviroq executes targeted B2B cold email outreach in Mangalore.',
        keywords: 'b2b cold email mangalore, outbound lead generation karnataka, corporate email outreach',
        heroDesc: 'Connect directly with managing directors, CEOs, and procurement heads. We source verified business email addresses, set up dedicated secondary domains, and craft personalized outreach emails that start conversations.',
        deliverables: ['Dedicated Secondary Domain Setup', 'DKIM, SPF & DMARC Warming', 'Verified Decision-Maker Prospect Lists', 'Personalized Multi-Touch Copywriting', 'Spam-Free High Deliverability Setup']
      }
    ]
  },

  // 11. AI Automation
  {
    slug: 'ai-automation',
    title: 'AI Automation & Workflows',
    shortTitle: 'AI Automation',
    categoryGroup: 'business-solutions',
    metaTitle: 'AI Automation & Workflow Solutions in Mangalore | Business AI - Zaviroq',
    metaDesc: 'Cut operational overhead with intelligent automation. Zaviroq deploys custom AI chatbots, automated content engines, and streamlined business workflows in Mangalore.',
    keywords: [
      'ai automation agency in mangalore',
      'business process automation karnataka',
      'ai chatbot development mangalore',
      'workflow automation agency',
      'ai consulting for business mangalore'
    ],
    eyebrow: '#1 CUTTING-EDGE AI AUTOMATION AGENCY IN MANGALORE',
    tagline: 'Automate Repetitive Business Workflows with Practical AI Engineering.',
    heroSub: 'AI is no longer a futuristic concept—it is a massive competitive advantage right now. Businesses in Mangalore that automate manual data entry, customer support inquiries, and content operations operate with significantly lower overhead and faster response times. At Zaviroq, we engineer practical business AI: intelligent customer support chatbots, automated SEO publishing pipelines, and custom API workflows that save hours of human labor every week.',
    color: '#8b5cf6',
    iconName: 'Cpu',
    stats: [
      { number: '10x', label: 'Speed Multiplier', desc: 'Accelerate routine business workflows and data processing.' },
      { number: '24/7/365', label: 'Instant Responses', desc: 'AI customer support chatbots answering inquiries in seconds.' },
      { number: '-60%', label: 'Labor Hours Saved', desc: 'Manual data entry and repetitive admin tasks eliminated.' },
      { number: '100%', label: 'Tailored to You', desc: 'Trained on your private business data, documents, and product catalog.' }
    ],
    outcomes: [
      { title: 'Never Miss an Inbound Inquiry After Business Hours', desc: 'Deploy an AI chatbot that answers customer questions and captures contact details 24/7.', fix: 'Custom Trained AI Support & Lead Qualification Chatbots' },
      { title: 'Eliminate Tedious Manual Data Transfer Between Apps', desc: 'Connect your website, CRM, invoicing software, and WhatsApp automatically.', fix: 'Zapier, Make & Custom Webhook API Automations' },
      { title: 'Scale Search Content Publishing 10x Faster', desc: 'Generate researched, structured draft content aligned with your editorial standards.', fix: 'Automated AI Content Generation & Review Pipelines' },
      { title: 'Extract Insights from Internal Business Documents', desc: 'Query internal PDFs, contracts, and inventory spreadsheets using natural language.', fix: 'Private Retrieval-Augmented Generation (RAG) Document Engines' }
    ],
    roadmap: [
      { month: 'Sprint 01', phase: 'Workflow Audit & Feasibility Assessment', focus: 'Process Bottlenecks & Tool Identification', highlight: 'Automation Roadmap', milestones: ['Map manual operational bottlenecks across sales, support, and administration', 'Identify repetitive data entry tasks suitable for automation', 'Determine optimal AI models (OpenAI, Anthropic, open-source LLMs)', 'Establish security and private data handling protocols'] },
      { month: 'Sprint 02', phase: 'Bot Training & API Pipeline Build', focus: 'Knowledge Base Setup & Webhook Wiring', highlight: 'AI Integration', milestones: ['Ingest business FAQs, product manuals, and pricing data into vector databases', 'Build and test conversational AI agent with strict guardrails against hallucinations', 'Configure API webhooks connecting forms, CRM, and communication tools', 'Test edge cases, complex customer queries, and escalation triggers'] },
      { month: 'Sprint 03', phase: 'Deployment, Testing & Staff Training', focus: 'Live Launch & Performance Fine-Tuning', highlight: 'Live Automation', milestones: ['Embed AI chatbot on website and WhatsApp Business API', 'Monitor live conversations and fine-tune response accuracy', 'Train your staff on managing automated workflows and reviewing outputs', 'Deliver operational documentation and monthly maintenance plan'] }
    ],
    faqs: [
      { q: 'Will an AI chatbot give inaccurate or hallucinated answers to our customers?', a: 'No. We build customized Retrieval-Augmented Generation (RAG) systems with strict guardrails. The AI agent is trained exclusively on your approved business documentation, pricing sheets, and policies. If asked a question outside its approved knowledge, it gracefully routes the conversation to a human team member.' },
      { q: 'Can you integrate AI automation with our existing CRM and WhatsApp?', a: 'Yes. We connect AI workflows directly into WhatsApp Business API, HubSpot, Zoho, Google Sheets, Slack, and custom databases using webhooks and automation tools like Make and Zapier.' },
      { q: 'Is our private business data secure when using AI automation?', a: 'Yes. We implement enterprise data privacy standards. We use private API endpoints with zero data retention policies for model training, ensuring your proprietary customer data and internal documents remain completely confidential.' }
    ],
    subservices: [
      {
        slug: 'ai-blog-automation',
        title: 'AI Content & Blog Automation',
        shortDesc: 'Automated topic research, outline generation, and publishing pipelines for search domination.',
        metaTitle: 'AI Blog & Content Automation in Mangalore - Zaviroq',
        metaDesc: 'Scale content production with AI automation pipelines. Zaviroq builds automated publishing engines in Mangalore.',
        keywords: 'ai blog automation mangalore, automated content generation karnataka, ai seo writing',
        heroDesc: 'Scale your content output without hiring dozens of writers. We build custom content generation pipelines that scrape keyword data, draft structured articles, and queue drafts for human editorial review.',
        deliverables: ['Automated Keyword & Topic Scraping', 'Structured Draft Generation with Citations', 'Brand Voice & Style Tone Matching', 'Automated CMS Staging in WordPress/Next.js', 'Human-in-the-Loop Editorial Workflows']
      },
      {
        slug: 'business-process-automation',
        title: 'Business Process Automation',
        shortDesc: 'Streamline repetitive administrative, invoicing, and customer onboarding tasks automatically.',
        metaTitle: 'Business Process Automation in Mangalore - Zaviroq',
        metaDesc: 'Eliminate manual paperwork and data entry. Zaviroq develops business process automation in Mangalore.',
        keywords: 'business process automation mangalore, bpa karnataka, workflow automation agency',
        heroDesc: 'Free your team from soul-crushing repetitive tasks. We automate customer onboarding, contract generation, invoice reminders, and cross-department data synchronization.',
        deliverables: ['Process Bottleneck Identification', 'Automated Document & Invoice Generation', 'Cross-Platform Data Synchronization', 'Notification & Alert Automation', 'Error Handling & Audit Logging']
      },
      {
        slug: 'ai-chatbot-development',
        title: 'Custom AI Chatbot Development',
        shortDesc: 'Intelligent AI customer service and lead capture bots trained on your private business data.',
        metaTitle: 'Custom AI Chatbot Development in Mangalore - Zaviroq',
        metaDesc: 'Deploy intelligent AI chatbots on your website and WhatsApp. Zaviroq builds custom AI bots in Mangalore.',
        keywords: 'ai chatbot development mangalore, whatsapp ai bot karnataka, custom customer service bot',
        heroDesc: 'Provide instant, accurate customer support at any hour of the night. We build intelligent chatbots trained on your product manuals, pricing, and FAQs that qualify leads and book appointments.',
        deliverables: ['Trained on Private Business Documentation', 'Zero Hallucination Guardrails', 'Website & WhatsApp API Integration', 'Lead Qualification & Contact Capture', 'Seamless Human Handoff Triggers']
      },
      {
        slug: 'workflow-automation',
        title: 'Workflow Automation (Zapier & Make)',
        shortDesc: 'Connect your website, CRM, email, and billing software into seamless auto-running pipelines.',
        metaTitle: 'Workflow Automation Services in Mangalore - Zaviroq',
        metaDesc: 'Connect your software stack seamlessly. Zaviroq builds Zapier and Make automation pipelines in Mangalore.',
        keywords: 'workflow automation mangalore, zapier consultant karnataka, make com automation',
        heroDesc: 'Eliminate the friction between your disconnected business apps. We build robust multi-step workflows connecting your website forms, Google Sheets, WhatsApp, CRM, and accounting software.',
        deliverables: ['Custom Make (Integromat) & Zapier Scenarios', 'Webhook & REST API Architecture', 'Automated Lead Routing to Sales Reps', 'Data Formatting & Error Recovery Logic', 'Comprehensive System Documentation']
      }
    ]
  },

  // 12. Business Software Solutions
  {
    slug: 'business-software',
    title: 'Business Software Solutions',
    shortTitle: 'Business Software',
    categoryGroup: 'business-solutions',
    metaTitle: 'Custom Business Software & ERP Development in Mangalore - Zaviroq',
    metaDesc: 'Replace messy spreadsheets with custom software. Zaviroq builds tailored Hotel ERPs, client portals, and real-time business management dashboards in Mangalore.',
    keywords: [
      'business software development mangalore',
      'custom erp development mangalore',
      'hotel erp software karnataka',
      'business dashboard development',
      'enterprise software company mangalore'
    ],
    eyebrow: '#1 CUSTOM ENTERPRISE SOFTWARE DEVELOPMENT IN MANGALORE',
    tagline: 'Tailored Business Software Built to Run Your Operations Flawlessly.',
    heroSub: 'Off-the-shelf business software is either overly bloated with features you do not need, or too rigid to match your real-world operational workflows. Messy Excel spreadsheets lead to lost inventory, billing discrepancies, and wasted staff hours. At Zaviroq, we engineer custom business software: specialized Hotel & Resort ERP systems, real-time KPI dashboards, and secure internal management portals tailored precisely to how your business runs.',
    color: '#0ea5e9',
    iconName: 'Layers',
    stats: [
      { number: '100%', label: 'Tailored Fit', desc: 'Built around your exact operational workflows with zero unused bloat.' },
      { number: 'Zero', label: 'Per-User Fees', desc: 'Complete software ownership without punitive monthly per-seat licensing.' },
      { number: 'Real-Time', label: 'Data Visibility', desc: 'Live operational KPIs and executive reports accessible from any device.' },
      { number: 'Bank-Grade', label: 'Data Security', desc: 'Encrypted databases, role-based access control, and automated cloud backups.' }
    ],
    outcomes: [
      { title: 'Eliminate Error-Prone Spreadsheets and Manual Paperwork', desc: 'Centralize reservations, inventory, billing, and staff tasks in one unified system.', fix: 'Custom Centralized Cloud ERP Architecture' },
      { title: 'Gain Real-Time Visibility into Business Revenue & Operations', desc: 'Monitor daily sales, occupancy rates, and cash flow from your smartphone.', fix: 'Executive Business KPI Dashboards & Analytics' },
      { title: 'Eliminate Expensive Monthly Per-User Software Subscriptions', desc: 'Own your software asset outright without paying monthly SaaS taxes forever.', fix: 'Bespoke Software Ownership with Complete Source Code' },
      { title: 'Streamline Hotel & Resort Guest Management in Coastal Karnataka', desc: 'Automate front desk check-in, room inventory, housekeeping, and restaurant POS.', fix: 'Specialized Hotel & Resort ERP Platform' }
    ],
    roadmap: [
      { month: 'Sprint 01', phase: 'Operational Analysis & Architecture', focus: 'Workflow Mapping & Database Design', highlight: 'System Blueprint', milestones: ['Shadow internal staff and document real-world operational workflows', 'Design relational database schemas (PostgreSQL / MySQL)', 'Map role-based permissions (Admin, Manager, Staff, Front Desk)', 'Deliver interactive wireframes for all key software screens'] },
      { month: 'Sprint 02', phase: 'Core Module Engineering', focus: 'CRUD Operations & Role-Based Auth', highlight: 'Core Development', milestones: ['Develop secure backend APIs and role-based authentication', 'Build responsive frontend dashboards using React and modern CSS', 'Implement core operational modules (inventory, booking, billing, invoicing)', 'Configure audit trails and user activity logging'] },
      { month: 'Sprint 03', phase: 'Integration, Testing & Staff Training', focus: 'Data Migration & On-Site Deployment', highlight: 'Production Go-Live', milestones: ['Migrate existing historical data from Excel spreadsheets and legacy systems', 'Conduct stress-testing and security vulnerability penetration tests', 'Conduct hands-on staff training workshops for operational teams', 'Deploy to secure cloud infrastructure with automated backup schedules'] }
    ],
    faqs: [
      { q: 'Why should our business build custom software instead of buying existing SaaS?', a: 'Generic commercial software forces your team to adapt your operations to their rigid system, and charges exorbitant recurring monthly fees for every user. Custom software is engineered around your exact workflows, integrates with your existing tools, and becomes a valuable proprietary business asset that you own outright with zero recurring per-user fees.' },
      { q: 'Can our staff access the business software securely from mobile phones and tablets?', a: 'Yes. All our business software and ERP solutions are fully responsive cloud web applications. Managers and executives can monitor dashboards, approve invoices, and check reports securely from smartphones, tablets, and desktop computers.' },
      { q: 'What happens if we need new features added as our business grows?', a: 'Because we build on clean, modular, modern architectures (Next.js, Node.js, PostgreSQL), adding new modules, reports, or third-party integrations as your business scales is straightforward and cost-effective.' }
    ],
    subservices: [
      {
        slug: 'hotel-erp-system',
        title: 'Hotel & Resort ERP Systems',
        shortDesc: 'Comprehensive cloud software for reservations, front desk, housekeeping, and restaurant POS.',
        metaTitle: 'Hotel & Resort ERP Software Development in Mangalore - Zaviroq',
        metaDesc: 'Streamline hotel and resort management in Coastal Karnataka. Zaviroq builds custom Hotel ERPs in Mangalore.',
        keywords: 'hotel erp software mangalore, resort management system karnataka, hospitality erp software',
        heroDesc: 'Designed specifically for the thriving hospitality industry in Mangalore and Coastal Karnataka. We build all-in-one hotel software managing direct bookings, front desk check-in, housekeeping, and restaurant billing.',
        deliverables: ['Real-Time Room Inventory & Booking Engine', 'Front Desk Check-In & Guest ID Verification', 'Housekeeping & Maintenance Task Tracking', 'Restaurant & Bar Point-of-Sale (POS) Sync', 'Night Audit & Financial Reporting Engine']
      },
      {
        slug: 'custom-business-software',
        title: 'Custom Business Software',
        shortDesc: 'Bespoke internal management platforms tailored to your company’s unique operational model.',
        metaTitle: 'Custom Business Software Development in Mangalore - Zaviroq',
        metaDesc: 'Replace messy spreadsheets with tailored software. Zaviroq develops custom business software in Mangalore.',
        keywords: 'custom business software mangalore, enterprise software development karnataka',
        heroDesc: 'Build software that fits your business like a glove. We develop custom internal systems managing inventory tracking, client job cards, billing workflows, and cross-team task delegation.',
        deliverables: ['Tailored Operational Workflow Modules', 'Role-Based Permissions & Staff Access', 'Automated PDF Invoicing & Quotations', 'Complete Audit Logging & History', 'Cloud Database with Automated Backups']
      },
      {
        slug: 'business-dashboard-development',
        title: 'Business Dashboard Development',
        shortDesc: 'Executive real-time KPI dashboards consolidating sales, operations, and financial metrics.',
        metaTitle: 'Executive Business Dashboard Development in Mangalore - Zaviroq',
        metaDesc: 'Monitor your business in real time. Zaviroq develops custom KPI dashboards and analytics in Mangalore.',
        keywords: 'business dashboard development mangalore, kpi analytics dashboard karnataka',
        heroDesc: 'Gain total clarity on your company’s health. We build real-time executive dashboards that pull data from your CRM, billing, and web analytics to display revenue, customer acquisition, and operational metrics.',
        deliverables: ['Real-Time Visual Metric Charts', 'Sales Pipeline & Cash Flow Tracking', 'Multi-Source Data Aggregation', 'Mobile-Responsive Executive Views', 'Automated Daily/Weekly Digest Emails']
      }
    ]
  }
];

// Helper functions for easy lookup
export function getAllParentCategories(): ParentCategoryItem[] {
  return servicesMasterData;
}

export function getParentCategoryBySlug(slug: string): ParentCategoryItem | undefined {
  return servicesMasterData.find((c) => c.slug === slug);
}

export function getSubServiceBySlug(parentSlug: string, subSlug: string): { parent: ParentCategoryItem; subservice: SubServiceItem } | undefined {
  const parent = getParentCategoryBySlug(parentSlug);
  if (!parent) return undefined;
  const subservice = parent.subservices.find((s) => s.slug === subSlug);
  if (!subservice) return undefined;
  return { parent, subservice };
}
