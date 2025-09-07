const offerings = [
  {
    title: "Growth & Revenue Acceleration",
    items: [
      "Driving double/triple-digit user and revenue growth across fintech, commerce, and media.",
      "Delivered $10M+ in revenue through data-driven strategies and go-to-market execution.",
    ],
  },
  {
    title: "Go-to-Market (GTM) & Expansion Strategy",
    items: [
      "Expertise in cross-border market entry across SSA, MENA, LATAM, and SEA",
      "Launching new digital products, features, and commerce models that scale globally",
    ],
  },
  {
    title: "Product-Led Growth & Retention",
    items: [
      "Building full-funnel growth systems (awareness → acquisition → engagement → retention)",
      "Leveraging content, affiliate, and engagement strategies to reduce churn and boost LTV",
    ],
  },
  {
    title: "Operational Leadership & Execution",
    items: [
      "Designing OKR systems, dashboards, and QA processes for accountability and speed.",
      "Leading cross-functional and international teams (30+ teams across marketing, product, and performance).",
    ],
  },
  {
    title: "Investor & Partnership Engagement",
    items: [
      "Securing seed funding, contracts, and media coverage via high-impact pitches and stakeholder alignment",
      "Building partnerships with corporates, NGOs, and multinationals to amplify reach.",
    ],
  },
];

// Render into the grid
const servicesGrid = document.getElementById("services-grid");

offerings.forEach((offering) => {
  const card = document.createElement("div");
  card.className =
    "rounded-2xl p-6 bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg";

  const title = document.createElement("h3");
  title.className = "text-lg font-semibold";
  title.textContent = offering.title;

  const ul = document.createElement("ul");
  ul.className = "mt-3 list-disc pl-5 text-gray-200 space-y-1";

  offering.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  card.appendChild(title);
  card.appendChild(ul);
  servicesGrid.appendChild(card);
});

const caseStudies = [
  {
    title: "Pulse Africa – VP, Direct-to-Consumer Products",
    objective:
      "Launch a commerce-driven consumer product in a competitive African market.",
    strategy:
      "Built Pulse Picks, led investor pitches with CEO, introduced real-time OKR tracking.",
    execution:
      "Launched product, pitched investors, implemented OKR dashboards to align execution speed.",
    tools: [
      "OKR tracking",
      "Pitch decks",
      "Media partnerships",
      "Analytics dashboards",
    ],
    results:
      "Secured $100K+ funding (95% approval), gained 15+ media features, improved operational speed by 30%.",
  },
  {
    title: "Grey – Manager, Growth & Global Marketing",
    objective: "Scale fintech adoption across multiple global regions.",
    strategy:
      "Ran targeted campaigns, launched gift card feature, scaled branded podcast.",
    execution:
      "Executed campaigns across LATAM, SEA, and MENA, launched new features, grew user acquisition channels.",
    tools: [
      "Gift cards",
      "Podcast platform",
      "Paid campaigns",
      "Analytics stack",
    ],
    results:
      "233% user growth (300K → 1M); $2.5M+ incremental revenue with $0.90 CPA; retention improved (10K sign-ups in 30 days, churn -15%, engagement +20%).",
  },
  {
    title: "DMTCA – Head, Growth & International Operations",
    objective:
      "Improve client retention and secure enterprise contracts in a crowded market.",
    strategy:
      "Introduced QA systems, streamlined workflows, led 30+ cross-functional teams.",
    execution:
      "Implemented QA frameworks, redesigned workflows, managed global operations with multiple teams.",
    tools: ["QA systems", "Workflow templates", "Project management tools"],
    results:
      "Raised retention 52% → 75% ($2.8M renewals); closed $600K+ tier-1 contracts; improved efficiency +35%, reduced time-to-market -25%.",
  },
  {
    title: "Cerebre – Senior Strategy Partner & Brand Growth Lead",
    objective:
      "Scale revenue and reputation of an agency in competitive sectors.",
    strategy:
      "Expanded into fintech/healthcare, optimized pricing, built performance/influencer partnerships.",
    execution:
      "Opened new verticals, redesigned pricing models, launched influencer campaigns.",
    tools: ["Pricing models", "Influencer partnerships", "Campaign dashboards"],
    results:
      "200% revenue growth in 3 years ($800K+ agency scale); $700K+ contracts (Ecobank, Sanofi, VFD); co-led #StaySafeNigeria (3M+ reach, 75K+ service adoptions, Asian Banker Award).",
  },
  {
    title: "Habgito Nigeria – Social Media & Partnerships Coordinator",
    objective:
      "Build partnerships and drive engagement for agricultural development.",
    strategy:
      "Coordinated partnerships, designed content workflows, optimized paid promotions.",
    execution:
      "Trained farmers, rolled out content systems, optimized ads for low-cost engagement.",
    tools: ["Content workflows", "Paid ad platforms", "Partnerships CRM"],
    results:
      "Trained 100+ farmers across 10 states (+30% yields, $50K grant); engagement +100%; campaign dev time -40%; $0.15 CPE (35% below avg), 500+ leads.",
  },
];

// Render Case Studies
const caseStudiesGrid = document.getElementById("case-studies-grid");

caseStudies.forEach((c) => {
  const card = document.createElement("div");
  card.className =
    "rounded-2xl p-6 bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition";

  const title = document.createElement("h3");
  title.className = "text-lg font-semibold text-gray-900";
  title.textContent = c.title;

  const dl = document.createElement("dl");
  dl.className = "mt-4 space-y-3 text-[15px]";

  const fields = [
    { label: "Objective", value: c.objective, bold: false },
    { label: "Strategy", value: c.strategy, bold: false },
    { label: "Execution", value: c.execution, bold: false },
    { label: "Tools Used", value: c.tools.join(", "), bold: false },
    { label: "Results", value: c.results, bold: true },
  ];

  fields.forEach((field) => {
    const div = document.createElement("div");

    const dt = document.createElement("dt");
    dt.className = "font-medium text-gray-700";
    dt.textContent = field.label;

    const dd = document.createElement("dd");
    dd.className = field.bold ? "text-gray-900 font-medium" : "text-gray-600";
    dd.textContent = field.value;

    div.appendChild(dt);
    div.appendChild(dd);
    dl.appendChild(div);
  });

  card.appendChild(title);
  card.appendChild(dl);
  caseStudiesGrid.appendChild(card);
});
