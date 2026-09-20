export interface SlideMetric {
  label: string;
  value: string;
  points?: string[];
  subtext?: string;
  highlight?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  company: 'Koltrast' | 'Flexionics';
  highlights: string[];
}

export interface ThesisPoint {
  title: string;
  badge: string;
  points: string[];
  impact: string;
}

export interface BusinessStream {
  step: string;
  name: string;
  share: string;
  scope: string;
  source: string;
  description: string;
  bullets: string[];
  badge: string;
}

export interface ControlStep {
  num: string;
  stepName: string;
  title: string;
  bullets: string[];
}

export interface ModuleInfo {
  code: string;
  name: string;
  role: string;
  bullets: string[];
  metrics: string;
}

export interface SlideData {
  id: string;
  slideNumber: number;
  category: string;
  title: string;
  subtitle?: string;
  layout: 
    | 'cover' 
    | 'thesis' 
    | 'perimeter' 
    | 'problem' 
    | 'business_model' 
    | 'utansjo_asset' 
    | 'track_record' 
    | 'software_platform' 
    | 'control_loop' 
    | 'unit_economics' 
    | 'team_koltrast' 
    | 'team_flexionics'
    | 'closing';
}

export const deckMetadata = {
  buyer: "Reikna AS",
  buyerLocation: "Stord, Norway",
  buyerTarget: "European Sovereign AI Data Center & Neo-Cloud Group",
  date: "September 2026",
  companyFlexionics: "Flexionics Energy AG",
  companyKoltrast: "Koltrast Energy Solutions AB",
  targetAsset: "Utansjö Site (2 MW Live + 30 MW Expansion Phase 1) & Full Software IP",
};

export const slides: SlideData[] = [
  {
    id: "cover",
    slideNumber: 1,
    category: "Strategic Acquisition",
    title: "European Neo-Cloud Infrastructure",
    subtitle: "Turnkey Nordic Grid-Flexibility Platform & 32 MW Utansjö Industrial Compute Asset",
    layout: "cover",
  },
  {
    id: "buyer-thesis",
    slideNumber: 2,
    category: "Strategic Rationale",
    title: "Why Flexionics + Koltrast for Reikna",
    subtitle: "Bridging sovereign Nordic data center infrastructure with live Swedish power and grid-flexibility IP",
    layout: "thesis",
  },
  {
    id: "deal-perimeter",
    slideNumber: 3,
    category: "Transaction Perimeter",
    title: "Two Complementary Layers: Ground Asset & Tech Platform",
    subtitle: "Koltrast provides the physical Swedish infrastructure; Flexionics provides the software intelligence",
    layout: "perimeter",
  },
  {
    id: "macro-driver",
    slideNumber: 4,
    category: "Market Landscape",
    title: "The AI Power Dilemma & The Flexibility Solution",
    subtitle: "AI clusters need massive power; renewable grids need flexible load. Compute is the infinite virtual battery.",
    layout: "problem",
  },
  {
    id: "business-model",
    slideNumber: 5,
    category: "Revenue Architecture",
    title: "Dual Revenue Streams: Digital Compute & Grid Ancillary Services",
    subtitle: "Hybrid data center model monetizing 24/7 compute baseload and high-margin Swedish grid flexibility",
    layout: "business_model",
  },
  {
    id: "utansjo-asset",
    slideNumber: 6,
    category: "Physical Asset Layer (Koltrast)",
    title: "Utansjö Industrial Compute Hub: 2 MW Live + 30 MW Expansion",
    subtitle: "Direct 120 kV heavy substation interconnect in Swedish bidding zone SE2 with verified industrial zoning",
    layout: "utansjo_asset",
  },
  {
    id: "track-record",
    slideNumber: 7,
    category: "Operational Evidence",
    title: "Proven Track Record: Audited Production Numbers",
    subtitle: "16,530 verified activations across SE1 & SE2, 1.89 billion telemetry records, and $6M+ revenue delivered to date",
    layout: "track_record",
  },
  {
    id: "software-platform",
    slideNumber: 8,
    category: "Software Layer (Flexionics)",
    title: "The Neo-Cloud Operating System: 5 In-House Modules",
    subtitle: "Autonomous edge dispatch, cross-site fleet coordination, and AI reporting without third-party licensing",
    layout: "software_platform",
  },
  {
    id: "control-loop",
    slideNumber: 9,
    category: "Engineering Architecture",
    title: "Closed-Loop Site Control & Real-Time Dispatch",
    subtitle: "10-second activation cycles, local failover resilience, and 0.5% SvK measurement accuracy",
    layout: "control_loop",
  },
  {
    id: "unit-economics",
    slideNumber: 10,
    category: "Financial Profile",
    title: "Asset Unit Economics & Capital Efficiency",
    subtitle: "Low install cost, 18-month payback, and high-margin software scalability",
    layout: "unit_economics",
  },
  {
    id: "team-koltrast",
    slideNumber: 11,
    category: "People & Ground Execution",
    title: "Koltrast: Heavy Infrastructure & Site Engineering",
    subtitle: "Led by Colin Chapple with certified high-voltage electricians and site technicians in Sweden",
    layout: "team_koltrast",
  },
  {
    id: "team-flexionics",
    slideNumber: 12,
    category: "People & Leadership",
    title: "Flexionics: Executive Leadership & Technology Team",
    subtitle: "Tier-one financial market risk architects, energy quant specialists, and production AI builders",
    layout: "team_flexionics",
  },
  {
    id: "closing",
    slideNumber: 13,
    category: "Transaction Summary",
    title: "Strategic Acquisition Summary & Direct Engagement",
    subtitle: "Turnkey Nordic infrastructure platform and proprietary software stack ready for immediate integration",
    layout: "closing",
  },
];

/* ── Content Data per Slide ── */

export const thesisPoints: ThesisPoint[] = [
  {
    title: "Immediate Swedish Power (Years Ahead of Greenfield)",
    badge: "Immediate Time-to-Market",
    points: [
      "Compresses Reikna's operational timeline by 2+ years ahead of greenfield data center builds.",
      "Utansjö provides 2 MW active operating compute today plus a shovel-ready 30 MW Phase 1 expansion.",
      "Located in SE2, Europe's lowest-cost 100% fossil-free hydro and wind power bidding zone.",
    ],
    impact: "Secures live Swedish power while NDC Husnes (50-150 MW) is developed for 2028",
  },
  {
    title: "Proprietary Neo-Cloud Operating System",
    badge: "100% In-House Software IP",
    points: [
      "Turns fluctuating AI GPU power draws into an automated grid-stabilization cash flow asset.",
      "100% proprietary software stack (Iceberg, Harbour, Compass, Polaris) owned with zero third-party licensing.",
      "Proven architecture ready to orchestrate multi-hundred MW fleets across Norway and Sweden.",
    ],
    impact: "Provides the complete software brain for Reikna's European sovereign AI cloud",
  },
  {
    title: "Turnkey High-Voltage Engineering Team",
    badge: "Operational Team Included",
    points: [
      "Led by Colin Chapple (25+ years directing major industrial power projects across Europe and Africa).",
      "Certified Swedish high-voltage electricians and site technicians already active on the ground.",
      "Direct technical liaison with regional grid operators (E.ON) and transmission operator (SvK).",
    ],
    impact: "Immediate physical execution capability in Scandinavia with zero recruitment delay",
  },
  {
    title: "Downside Revenue Cushion for AI GPU Clusters",
    badge: "Downside Protection",
    points: [
      "Earns steady hourly capacity payments from Svenska kraftnät even during GPU cluster idle time or maintenance.",
      "Monetizes negative Nordic power price spikes while hedging operational electricity costs.",
      "Stacks digital compute revenues with grid ancillary payouts to protect GPU payback economics.",
    ],
    impact: "Protects Neo-Cloud margins against power price volatility and cluster utilization dips",
  },
];

export const perimeterData = {
  koltrast: {
    title: "Koltrast Energy Solutions AB",
    subtitle: "100% Swedish Operating Subsidiary · Ground Asset Layer",
    points: [
      {
        title: "Utansjö Active Compute Facility",
        desc: "2.0 MW operational hybrid data center connected at 20 kV in Swedish bidding area SE2.",
      },
      {
        title: "30 MW Shovel-Ready Phase 1 Expansion",
        desc: "Heavy 120 kV industrial substation feed with secured land agreements and zoning.",
      },
      {
        title: "Physical Site Control & Maritime Access",
        desc: "Long-term industrial land rights with deep-water port access for heavy modular logistics.",
      },
      {
        title: "Grid Operator Relationships",
        desc: "Established operational interconnections with regional utility E.ON and national grid SvK.",
      },
      {
        title: "High-Voltage Engineering Leadership",
        desc: "Led by Colin Chapple (25+ years heavy capital project execution across power and mining).",
      },
      {
        title: "Certified Swedish On-Ground Crew",
        desc: "Licensed high-voltage electricians and technicians managing switchgear and cooling 24/7.",
      },
    ],
  },
  flexionics: {
    title: "Flexionics Energy AG",
    subtitle: "Swiss Parent Entity · Technology & Flexibility Layer",
    points: [
      {
        title: "100% Proprietary Software IP",
        desc: "Fully in-house codebase with zero third-party software licensing dependencies or royalties.",
      },
      {
        title: "Iceberg Edge Autonomous Controller",
        desc: "10-second closed-loop control with embedded SQLite and disk-backed Parquet failover.",
      },
      {
        title: "Harbour Cross-Site Fleet Manager",
        desc: "Centralized cloud operations pane, live capacity tracking, and settlement audit trails.",
      },
      {
        title: "Compass Governed Analytics Engine",
        desc: "Server-validated reporting engine generating automated TSO reconciliation packs (57ms P95).",
      },
      {
        title: "Polaris Version-Locked Release Pipeline",
        desc: "Automated deployment engine with live state attestation and rollback (342 releases/month).",
      },
      {
        title: "Svenska kraftnät Market Prequalifications",
        desc: "Active regulatory certifications for Fast Frequency Reserve (FFR) and mFRR Up+Down.",
      },
    ],
  },
};

export const problemCards = [
  {
    stat: "3–7 Yrs",
    category: "Transmission Interconnection",
    label: "Grid Connection Queues",
    bullets: [
      "European data center developers face 3–7 year waiting queues for high-voltage grid connections.",
      "AI cluster expansion is bottlenecked by power availability rather than GPU silicon delivery.",
      "Utansjö eliminates this delay with secured 120 kV heavy substation capacity on the Swedish national grid.",
    ],
  },
  {
    stat: "679 Hrs",
    category: "Nordic Energy Pricing",
    label: "Negative Price Hours (SE2)",
    bullets: [
      "Rapid Nordic wind buildout generated 679 hours of zero or negative electricity prices in SE2 in 2025.",
      "Inflexible data centers suffer margin compression or curtailment during volatile price regimes.",
      "Flexible compute turns negative pricing into pure profit, consuming cheap power when paid to do so.",
    ],
  },
  {
    stat: "0 Fade",
    category: "Storage Economics",
    label: "Infinite Virtual Battery",
    bullets: [
      "Battery storage (BESS) costs €200k–€500k/MWh, maxes out at 4 hours, and suffers cycle degradation.",
      "Flexible compute modulates load across infinite duration with zero chemical cell wear.",
      "Servers generate 24/7 digital compute cash flow while simultaneously functioning as a virtual grid battery.",
    ],
  },
];

export const businessModelStreams: BusinessStream[] = [
  {
    step: "01",
    name: "Digital Computing Revenue",
    share: "43% of Total",
    scope: "Owned Hybrid Assets",
    source: "HPC / AI Workloads & Hashrate",
    description: "The facility runs compute workloads 24/7 as baseline continuous cash flow during normal grid standby.",
    bullets: [
      "Continuous baseline cash flow from high-performance compute and hashrate.",
      "During normal grid conditions, servers remain 100% loaded and continuously monetized.",
      "Capitalizes on Sweden SE2's fossil-free power mix to maximize compute profit margins.",
      "Software adjusts power consumption within seconds without job corruption or hardware damage.",
    ],
    badge: "24/7 Digital Baseload",
  },
  {
    step: "02",
    name: "Grid Ancillary Services",
    share: "57% of Total",
    scope: "Svenska kraftnät (TSO)",
    source: "Capacity Reservations + Real Activations",
    description: "Monetizes flexibility in Swedish reserve markets (mFRR, FCR, FFR) with dual-component revenue.",
    bullets: [
      "Hourly Capacity Payments: Paid hourly simply for standing by and committing flexible MW.",
      "Energy Activation Payments: Paid premium prices when SvK activates real-time modulation.",
      "Audited Grid Record: 229.5 GWh capacity committed; 26.6 GWh delivered via 16,530 activations across SE1 & SE2 (9,477 in SE1 · 7,053 in SE2).",
      "Market-Beating Yield: Ancillary revenue exceeded compute in peak months ($712k in June 2025 peak).",
    ],
    badge: "Dual Market Monetization",
  },
  {
    step: "03",
    name: "Flexibility Business Service (FBS)",
    share: "Scalable Client Model",
    scope: "External Client Services",
    source: "Third-Party Data Centers & Wind Parks",
    description: "Software-defined flexibility management for external asset owners without Flexionics CapEx.",
    bullets: [
      "External operators connect facilities to Iceberg and Harbour with zero hardware CapEx for Flexionics.",
      "Flexionics automates daily TSO bidding, compliance, and settlements for a performance revenue-share fee.",
      "Imbalance Management: Protects wind farm revenues during negative price regimes and price cannibalization.",
      "High-Margin Scalability: Easily deployable across hundreds of megawatts of external infrastructure.",
    ],
    badge: "Zero-CapEx Software Cut",
  },
];

export const utansjoSiteData = {
  activeSite: {
    title: "Operational Facility (Utansjö Active)",
    capacity: "2.0 MW Active Capacity",
    voltage: "20 kV Regional Interconnection",
    bullets: [
      "Direct 20 kV regional grid interconnection supplying 2 MW continuous power.",
      "Fully prequalified with Svenska kraftnät: FFR (1.1 MW) and mFRR Up+Down certified.",
      "High-density compute server fleet actively operational and generating dual revenue.",
      "Modular containerized architecture with ambient coastal air cooling.",
      "Proven operational facility functioning as the Nordic engineering testbed.",
    ],
    status: "Live Generating Revenue",
  },
  expansionSite: {
    title: "Phase 1 Expansion (Utansjö 30 MW)",
    capacity: "30.0 MW Planned Expansion",
    voltage: "120 kV Heavy Industrial Substation",
    bullets: [
      "Direct on-site access to existing 120 kV heavy industrial substation.",
      "Shovel-ready expansion tailored for high-density AI clusters and Neo-Cloud servers.",
      "Advanced hybrid cooling utilizing ambient coastal Scandinavian air temperatures.",
      "Secured heavy industrial zoning with adjacent maritime port and deep-water access.",
      "Ready for immediate capital deployment to compress Reikna's growth timeline.",
    ],
    status: "Shovel-Ready Development",
  },
  locationDetails: [
    { label: "Bidding Area", value: "Sweden SE2 (Västernorrland)" },
    { label: "Power Mix", value: "100% Fossil-Free Hydro & Wind" },
    { label: "Site Zoning", value: "Heavy Industrial with Port Access" },
    { label: "Total Site Potential", value: "32.0 MW Combined Capacity" },
  ],
};

export const trackRecordMetrics: SlideMetric[] = [
  {
    label: "Registered Fleet Capacity",
    value: "14 MW",
    points: [
      "12 MW proving ground in Boden + 2 MW live facility at Utansjö",
      "Fully metered and registered with Swedish transmission authorities",
    ],
    highlight: true,
  },
  {
    label: "Audited mFRR Activations",
    value: "16,530",
    points: [
      "16,530 stored activation records across SE1 & SE2",
      "9,477 activations in Sweden SE1 · 7,053 activations in Sweden SE2 verified in SvK logs",
    ],
  },
  {
    label: "Core Telemetry Data Points",
    value: "1.89B",
    points: [
      "8.24M measurements captured daily across sub-second power meters",
      "Full local SQLite audit ledger preserved across every activation",
    ],
  },
  {
    label: "Ancillary Revenue Share",
    value: "57%",
    points: [
      "> $6M total revenue generated (Apr 2025 – Jan 2026)",
      "Grid flexibility revenue exceeded compute earnings in peak months",
    ],
  },
  {
    label: "Production Deployments",
    value: "342",
    points: [
      "Zero-downtime updates delivered in the last 30 days via Polaris",
      "SHA-256 state attestation across cloud and edge controllers",
    ],
  },
  {
    label: "Alert Delivery Reliability",
    value: "100%",
    points: [
      "1,103 automated incident alerts dispatched with zero delivery failures",
      "Immediate operational notification via Northwatch monitoring service",
    ],
  },
];

export const softwareModules: ModuleInfo[] = [
  {
    code: "01",
    name: "Iceberg Edge",
    role: "On-Site Autonomous Controller",
    bullets: [
      "Runs a 10-second closed-loop control cycle directly at each site.",
      "Embedded SQLite state store and disk-backed Parquet outbox preserve execution during cloud outages.",
      "Modulates server power draws dynamically while respecting hardware temperatures and cooldowns.",
    ],
    metrics: "10-Second Control Cycle · SQLite Local Failover",
  },
  {
    code: "02",
    name: "Harbour",
    role: "Cross-Site Fleet Operations",
    bullets: [
      "Centralized cloud operations layer providing single-pane-of-glass visibility across all sites.",
      "Tracks live capacity commitments, automated market bid status, and fleet telemetry.",
      "Maintains exportable regulatory audit trails for seamless transmission system settlement.",
    ],
    metrics: "Multi-Site Fleet Orchestration · Audit Ledger",
  },
  {
    code: "03",
    name: "Compass",
    role: "Governed Reporting & Analytics",
    bullets: [
      "Server-validated, read-only analytics engine over approved operational views.",
      "Generates scheduled automated Excel reporting packs covering power, activations, and finances.",
      "Deterministic data pipeline with sub-100ms API response latency (P95 57ms).",
    ],
    metrics: "P95 57ms Latency · Deterministic TSO Audit Packs",
  },
  {
    code: "04",
    name: "Northwatch",
    role: "Incident Evidence & Monitoring",
    bullets: [
      "Rule-based monitoring service tracking API health, power meter telemetry, and container states.",
      "Features confirmed-outage alerting with repeat-alert suppression to eliminate notification fatigue.",
      "Automatically compiles structured incident evidence timelines for regulatory audits.",
    ],
    metrics: "100% Notification Delivery · Audit Incident Timelines",
  },
  {
    code: "05",
    name: "Polaris",
    role: "Release & Deployment Engine",
    bullets: [
      "Version-locked release pipeline for cloud services and remote edge site controllers.",
      "Performs automated preflight health checks and cryptographic state attestation before rollout.",
      "Supports automated instant rollback to preserve continuous high-availability operations.",
    ],
    metrics: "342 Releases / Month · Cryptographic Attestation",
  },
];

export const controlLoopSteps: ControlStep[] = [
  {
    num: "1",
    stepName: "Signal Ingestion",
    title: "Direct SFTP Ingestion",
    bullets: [
      "Activation instructions arrive directly at site controllers over secure SFTP.",
      "Dispatched instructions are saved locally in the edge SQLite queue before execution.",
      "Operates autonomously without reliance on continuous public internet connectivity.",
    ],
  },
  {
    num: "2",
    stepName: "Target Evaluation",
    title: "10-Second MW Target Loop",
    bullets: [
      "Controller compares requested target MW against live site power every 10 seconds.",
      "Calculates the exact megawatt power adjustment required across the server fleet.",
      "Evaluates grid frequency deviation and responds according to SvK market parameters.",
    ],
  },
  {
    num: "3",
    stepName: "Load Modulation",
    title: "Server Fleet Scoring",
    bullets: [
      "Algorithms evaluate real-time telemetry to throttle or wake specific hardware units.",
      "Protects hardware longevity by honoring thermal thresholds and cooldown periods.",
      "Achieves target megawatt adjustment smoothly without sudden electrical voltage spikes.",
    ],
  },
  {
    num: "4",
    stepName: "Accuracy Verification",
    title: "0.5% Power Measurement",
    bullets: [
      "18 live industrial power meters sample continuously at sub-second intervals.",
      "Provides closed-loop verification satisfying Svenska kraftnät active-power accuracy.",
      "Telemetry is archived to local Parquet files for definitive regulatory settlement reconciliation.",
    ],
  },
];

export const unitEconomicsData = [
  {
    label: "Modular Installation Cost",
    value: "~$450k / MW",
    bullets: [
      "Turnkey modular containerized compute infrastructure with integrated switchgear.",
      "Substantially lower capital intensity compared to traditional €7M–€10M/MW hyperscale data centers.",
    ],
  },
  {
    label: "Annual Gross Operating Profit",
    value: "~$310k / MW",
    bullets: [
      "Stacked revenue combining continuous compute baseload with premium grid ancillary payments.",
      "High operational margins driven by low-cost fossil-free Nordic power and software automation.",
    ],
  },
  {
    label: "Asset Payback Horizon",
    value: "~18 Months",
    bullets: [
      "Rapid capital recovery de-risks initial infrastructure investment for the acquirer.",
      "Enables continuous reinvestment of cash flow into Phase 1 30 MW expansion phases.",
    ],
  },
  {
    label: "Projected Phase 1 IRR",
    value: ">50%",
    bullets: [
      "Exceptional risk-adjusted yield compared to single-purpose digital computing facilities.",
      "Downside protection guaranteed by contracted Swedish grid stability reserve payments.",
    ],
  },
];

export const koltrastTeam: TeamMember[] = [
  {
    name: "Colin Chapple",
    role: "Chief Engineer & Operations Director",
    company: "Koltrast",
    highlights: [
      "25+ years directing heavy industrial power infrastructure, substation engineering, and mining projects.",
      "Directs physical site design, high-voltage grid connections, and the 30 MW expansion at Utansjö.",
      "Former senior engineering leadership across Europe and Africa (Bateman Engineering, Avmin Ltd).",
    ],
  },
  {
    name: "Joel Roden",
    role: "Senior High-Voltage Electrician",
    company: "Koltrast",
    highlights: [
      "Certified Swedish high-voltage electrical specialist with extensive substation maintenance experience.",
      "Directs transformer, switchgear, and medium-voltage infrastructure operations at Utansjö.",
      "Ensures continuous electrical safety compliance and preventative field maintenance across facilities.",
    ],
  },
  {
    name: "Craig Taylor",
    role: "Site Operations & Network Lead",
    company: "Koltrast",
    highlights: [
      "Manages on-site network architecture, redundant multi-carrier communications links, and failover gateways.",
      "Oversees daily facility reliability, modular container installations, and thermal cooling management.",
      "Direct operational bridge between Swedish field engineering and central technical leadership.",
    ],
  },
  {
    name: "Oskar Tullberg",
    role: "Systems & Hardware Technician",
    company: "Koltrast",
    highlights: [
      "Maintains on-site edge controller hardware, server racks, and power distribution units.",
      "Executes scheduled hardware diagnostic routines, equipment inspections, and system benchmarking.",
      "Supports power infrastructure and physical equipment maintenance across active facilities.",
    ],
  },
  {
    name: "Vedran Klaic",
    role: "Systems & Hardware Technician",
    company: "Koltrast",
    highlights: [
      "Conducts routine field inspections, physical hardware servicing, and facility upkeep.",
      "Monitors environmental sensors, emergency power cutoffs, and equipment reliability on the ground.",
      "Collaborates with Oskar on hardware diagnostics, power unit servicing, and preventative maintenance.",
    ],
  },
];

export const flexionicsTeam: TeamMember[] = [
  {
    name: "Bipin Patel",
    role: "CEO & Founder",
    company: "Flexionics",
    highlights: [
      "Former Chief Risk Officer at HKEX Group (Hong Kong Stock Exchange) overseeing systemic risk.",
      "Senior risk management architect at Deutsche Bank and London Clearing House.",
      "Architect of algorithmic trading models, energy quant systems, and power market volatility strategies.",
    ],
  },
  {
    name: "Amy Shuai",
    role: "Chief Financial Officer",
    company: "Flexionics",
    highlights: [
      "25+ years in global investment banking, corporate finance, and transaction structuring.",
      "Former financial leadership roles at UBS, Deutsche Bank, and Royal Bank of Scotland (RBS).",
      "Directs institutional governance, corporate capitalization, and bilateral M&A transaction management.",
    ],
  },
  {
    name: "Appointed — Announcement Pending",
    role: "Chief Technology Officer",
    company: "Flexionics",
    highlights: [
      "Former Head of AI/ML at a Tier-1 Global Investment Bank with deep quant systems expertise.",
      "Architect of high-frequency execution pipelines and real-time distributed decision engines.",
      "Directs overarching software engineering strategy and autonomous platform scalability.",
    ],
  },
  {
    name: "Giridhar Gandi",
    role: "Head of Flexibility",
    company: "Flexionics",
    highlights: [
      "Former power systems engineer at Siemens Energy specializing in grid stability and virtual power plants.",
      "Specialist in Svenska kraftnät prequalification, Nordic reserve markets (mFRR, FCR, FFR), and VPPs.",
      "Designed the operational bidding algorithms for Swedish transmission system compliance.",
    ],
  },
  {
    name: "Umang Thakkar",
    role: "Head of AI & Automation",
    company: "Flexionics",
    highlights: [
      "Key technical contributor to the Iceberg Edge and Harbour platforms, focusing on core system orchestration and software workflows.",
      "Engineered multi-agent automation pipelines and intelligent systems bridging edge infrastructure to central control.",
      "AI Product Builder with 14+ deployed production systems, specializing in resilient, scalable software architectures.",
    ],
  },
];

export const transactionSummary = {
  acquirer: "Reikna AS (Stord, Norway)",
  targetEntities: "Flexionics Energy AG (Swiss Parent) & Koltrast Energy Solutions AB (Swedish Subsidiary)",
  coreAssets: [
    {
      title: "Physical Ground Layer (Koltrast)",
      bullets: [
        "Utansjö 2 MW live operating compute facility connected at 20 kV in Sweden SE2.",
        "Shovel-ready 30 MW Phase 1 industrial expansion with heavy 120 kV substation access.",
        "Secured long-term industrial land rights with maritime deep-water port access.",
      ],
    },
    {
      title: "Proprietary Software IP Platform (Flexionics)",
      bullets: [
        "100% in-house software suite (Iceberg, Harbour, Compass, Northwatch, Polaris).",
        "Active Svenska kraftnät market prequalifications for Fast Frequency Reserve (FFR) and mFRR.",
        "Zero external software licensing fees; complete unencumbered codebase transfer.",
      ],
    },
    {
      title: "Turnkey Scandinavian Engineering Team",
      bullets: [
        "Led by Colin Chapple (Chief Engineer & Operations Director; 25+ yrs heavy capital projects).",
        "Certified Swedish high-voltage electricians and on-ground site operations staff.",
      ],
    },
  ],
  strategicFit: [
    {
      title: "2+ Years Time-to-Market Acceleration",
      desc: "Delivers immediate operating Swedish power while Reikna's greenfield NDC Husnes (50–150 MW) is developed for 2028.",
    },
    {
      title: "Immediate Day-One Cash Flow",
      desc: "Generates continuous dual revenue combining 24/7 compute baseload with high-margin Svenska kraftnät grid ancillary payments.",
    },
    {
      title: "Neo-Cloud Grid-Flexibility Operating System",
      desc: "Provides the autonomous software brain to monetize power flexibility across Reikna's entire 300 MW Nordic data center pipeline.",
    },
  ],
  contacts: [
    { name: "Bipin Patel", title: "Chief Executive Officer", company: "Flexionics Energy AG" },
    { name: "Amy Shuai", title: "Chief Financial Officer", company: "Flexionics Energy AG" },
  ],
};
