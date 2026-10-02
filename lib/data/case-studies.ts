export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  industry: string;
  overview: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: string;
  metrics: CaseStudyMetric[];
  testimonial?: CaseStudyTestimonial;
  featuredImage: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    title: "Creator Growth System",
    slug: "creator-growth-system",
    client: "Nexus Lifestyle",
    industry: "Creator Economy",
    overview: "Nexus Lifestyle needed a scalable content architecture to transition from a single-platform creator to an omnipresent media brand.",
    challenge: "The founder was entirely bottlenecked by manual post-production. Producing high-quality long-form content was consuming 40+ hours a week, leaving zero bandwidth for community building or backend monetization.",
    strategy: "We architected a 'One-to-Many' content ecosystem. By shifting to a centralized recording sprint, we could algorithmically fragment core concepts into highly optimized micro-content across all social channels.",
    execution: "Deployed a dedicated video editing pipeline, custom Notion workspaces for script approval, and automated the distribution of 60+ short-form assets per month directly from a single weekly podcast recording.",
    results: "Completely decoupled the founder's time from the content output. The brand achieved massive omni-channel presence, driving unprecedented top-of-funnel awareness to their paid community.",
    metrics: [
      { label: "Content Output", value: "8.5x" },
      { label: "Founder Time Saved", value: "35 hrs/wk" },
      { label: "Community ARR", value: "+$240k" }
    ],
    testimonial: {
      quote: "They didn't just edit my videos; they built an entire media machine around me. I finally have the leverage to focus purely on the creative vision.",
      author: "Alex Mercer",
      role: "Founder, Nexus Lifestyle"
    },
    featuredImage: "/images/case-studies/creator-growth.jpg"
  },
  {
    title: "AI Automation Transformation",
    slug: "ai-automation-transformation",
    client: "Aura B2B",
    industry: "SaaS Operations",
    overview: "Aura B2B was scaling rapidly, but their manual lead qualification and client onboarding systems were fracturing under the volume.",
    challenge: "Their SDRs were spending over 60% of their day manually scraping data and enriching CRM profiles, leading to a massive drop in closing velocity and severe team burnout.",
    strategy: "We designed a bespoke AI-agent architecture integrated directly into their existing HubSpot ecosystem to handle tier-1 qualification and immediate personalized outreach.",
    execution: "Built a customized web-scraping LLM workflow using Make and OpenAI. The system automatically triggered upon form submission, enriched the lead data, drafted hyper-personalized outreach sequences, and routed qualified meetings directly to the AE calendar.",
    results: "Eliminated the entire manual enrichment bottleneck. The sales team shifted exclusively to closing, resulting in a record-breaking quarter for booked revenue.",
    metrics: [
      { label: "Lead Response Time", value: "< 2 mins" },
      { label: "Close Rate", value: "+42%" },
      { label: "Manual Data Entry", value: "0 hrs" }
    ],
    testimonial: {
      quote: "The automation infrastructure feels like we hired an elite operations team that never sleeps. It has completely transformed our revenue engine.",
      author: "Elena Rodriguez",
      role: "VP of Sales, Aura B2B"
    },
    featuredImage: "/images/case-studies/ai-automation.jpg"
  },
  {
    title: "Reels Growth Engine",
    slug: "reels-growth-engine",
    client: "Athletica Core",
    industry: "DTC Apparel",
    overview: "Athletica Core possessed incredible product-market fit but struggled to crack the short-form algorithmic code required for modern DTC scale.",
    challenge: "Despite heavy ad spend, their organic Instagram and TikTok presence was stagnant. Traditional lifestyle shoots were expensive, slow to produce, and failed to capture short-form attention.",
    strategy: "Pivoted entirely from high-production lifestyle photography to a high-volume, lo-fi short-form video strategy engineered specifically for algorithmic retention.",
    execution: "Developed a rapid-testing creative framework. We produced 90 unique UGC-style Reels and TikToks in the first 30 days, utilizing aggressive hook-testing and dynamic typography.",
    results: "Triggered multiple viral vectors, drastically lowering blended CPA and injecting massive, highly-qualified organic traffic directly into their Shopify checkout flow.",
    metrics: [
      { label: "Organic Reach", value: "3.2M+" },
      { label: "Blended ROAS", value: "3.8x" },
      { label: "Follower Growth", value: "+114%" }
    ],
    testimonial: {
      quote: "They understand the algorithm better than anyone I've ever worked with. The volume of attention they manufactured in just three months changed the trajectory of our business.",
      author: "Julian Vance",
      role: "CMO, Athletica Core"
    },
    featuredImage: "/images/case-studies/reels-growth.jpg"
  },
  {
    title: "Authority Building Framework",
    slug: "authority-building-framework",
    client: "Equinox Ventures",
    industry: "Venture Capital",
    overview: "Equinox Ventures wanted to establish their managing partners as definitive thought leaders to attract higher-tier founder deal flow.",
    challenge: "The partners had immense industry knowledge but lacked the time and strategic framework to translate their insights into compelling public content.",
    strategy: "Implemented an executive 'Ghost-Engineering' architecture. We transformed 30-minute monthly strategy calls into a month's worth of elite, cross-platform editorial content.",
    execution: "Executed a highly targeted LinkedIn and X (Twitter) thought leadership sprint. Delivered compelling, data-backed long-form posts, engaging threads, and high-value newsletter issues under the partners' names.",
    results: "Dramatically elevated their public perception, securing inbound meeting requests from tier-1 founders who specifically cited their recent essays as the catalyst.",
    metrics: [
      { label: "Inbound Deal Flow", value: "3x" },
      { label: "Newsletter Subs", value: "15k+" },
      { label: "LinkedIn Impressions", value: "1.5M/mo" }
    ],
    testimonial: {
      quote: "They managed to capture my exact voice and strategic mindset, distributing it at a scale I could never achieve alone. The ROI on deal flow has been staggering.",
      author: "Marcus Thorne",
      role: "Managing Partner, Equinox Ventures"
    },
    featuredImage: "/images/case-studies/authority-building.jpg"
  }
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudiesData;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.find(cs => cs.slug === slug);
}
