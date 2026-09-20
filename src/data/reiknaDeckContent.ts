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
    | 'flexionics_business'
    | 'perimeter' 
    | 'problem' 
    | 'business_model' 
    | 'assets_portfolio'
    | 'infrastructure_sites'
    | 'utansjo_asset' 
    | 'track_record' 
    | 'software_platform' 
    | 'control_loop' 
    | 'unit_economics' 
    | 'team_koltrast' 
    | 'team_flexionics'
    | 'team_joint'
    | 'closing';
}

export const deckMetadata = {
  buyer: "Reikna AS",
  buyerLocation: "Stord, Norway",
  buyerTarget: "European Sovereign AI Data Center & Neo-Cloud Group",
  date: "September 2026",
  companyFlexionics: "Flexionics Energy AG",
  companyKoltrast: "Koltrast Energy Solutions AB",
  targetAsset: "14 MW Live Operating Infrastructure (Boden & Utansjö) + 30 MW Expansion & Full Software IP",
};

export const slides: SlideData[] = [
  {
    id: "cover",
    slideNumber: 1,
    category: "Strategic Acquisition",
    title: "European Neo-Cloud Infrastructure",
    subtitle: "Turnkey Nordic Grid-Flexibility Platform & 14 MW Operating Infrastructure (Boden & Utansjö) + 30 MW Expansion",
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
    id: "flexionics-business",
    slideNumber: 3,
    category: "Corporate Overview",
    title: "The Flexionics Business: What We Do & How We Do It",
    subtitle: "Full-stack hybrid data centre and grid-flexibility operator bridging industrial compute with renewable power systems",
    layout: "flexionics_business",
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
    id: "assets-portfolio",
    slideNumber: 6,
    category: "Asset Portfolio",
    title: "Tangible & Intangible Asset Portfolio: Flexionics & Koltrast",
    subtitle: "Verified balance of 14 MW operating infrastructure, 18 modular containers, 5,384 server fleet, and proprietary software IP",
    layout: "assets_portfolio",
  },
  {
    id: "infrastructure-sites",
    slideNumber: 7,
    category: "Physical Infrastructure (Koltrast)",
    title: "Operational Infrastructure Sites: Boden & Utansjö",
    subtitle: "14 MW active capacity across 18 containers plus 30 MW shovel-ready industrial expansion on the Swedish national grid",
    layout: "infrastructure_sites",
  },
  {
    id: "track-record",
    slideNumber: 8,
    category: "Operational Evidence",
    title: "Proven Track Record: Audited Production Numbers",
    subtitle: "16,530 verified activations across SE1 & SE2, 1.89 billion telemetry records, and $6M+ revenue delivered to date",
    layout: "track_record",
  },
  {
    id: "software-platform",
    slideNumber: 9,
    category: "Software Layer (Flexionics)",
    title: "The Neo-Cloud Operating System: 5 In-House Modules",
    subtitle: "Autonomous edge dispatch, cross-site fleet coordination, and AI reporting without third-party licensing",
    layout: "software_platform",
  },
  {
    id: "control-loop",
    slideNumber: 10,
    category: "Engineering Architecture",
    title: "Closed-Loop Site Control & Real-Time Dispatch",
    subtitle: "10-second activation cycles, local failover resilience, and 0.5% SvK measurement accuracy",
    layout: "control_loop",
  },
  {
    id: "unit-economics",
    slideNumber: 11,
    category: "Financial Profile",
    title: "Asset Unit Economics & Capital Efficiency",
    subtitle: "Low install cost, 18-month payback, and high-margin software scalability",
    layout: "unit_economics",
  },
  {
    id: "team-joint",
    slideNumber: 12,
    category: "People & Leadership",
    title: "Joint Leadership & Engineering Team: Flexionics & Koltrast",
    subtitle: "Tier-1 financial market risk architects, AI & software engineers, and certified Swedish high-voltage engineering operators",
    layout: "team_joint",
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
      "Secures 14 MW active operating compute today across Boden (12 MW) & Utansjö (2 MW), plus a shovel-ready 30 MW Phase 1 expansion at Utansjö.",
      "Located in SE1 & SE2, Europe's lowest-cost 100% fossil-free hydro and wind power bidding zones.",
    ],
    impact: "Secures 14 MW live Swedish power today while NDC Husnes (50-150 MW) is developed for 2028",
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

export interface BusinessPillar {
  badge: string;
  sub: string;
  title: string;
  desc: string;
  bullets: string[];
}

export interface PipelineStep {
  step: string;
  title: string;
  desc: string;
  detail: string;
}

export const flexionicsBusinessData = {
  pillars: [
    {
      badge: "Physical Infrastructure",
      sub: "Owned & Operated Sites",
      title: "Hybrid Data Centre Operations",
      desc: "We own and operate containerised high-density data centres in Sweden across Boden and Utansjö, running continuous 24/7 compute workloads on 100% fossil-free Swedish grid power.",
      bullets: [
        "14 MW active operating capacity across 18 modular container units in Boden (12 MW) and Utansjö (2 MW).",
        "5,384 server miners deployed, managed, and monitored with secure site controls and direct grid interconnects.",
        "Operating history in Sweden since 2018 with on-ground electrical and cooling maintenance teams.",
      ],
    },
    {
      badge: "Energy Services",
      sub: "Grid Balancing Engine",
      title: "Flexibility Business Service",
      desc: "We turn high-density compute loads into sub-second virtual batteries for Svenska kraftnät, monetizing frequency containment and reserve capacity without computational data loss.",
      bullets: [
        "Dual monetization engine: continuous 24/7 compute baseline + high-margin grid ancillary capacity and activation payments.",
        "Sub-second load modulation (<0.7s) delivers rapid grid support without hardware damage or thermal lag.",
        "Full-stack operator model: We manage the entire lifecycle from TSO qualification to daily bidding and settlement.",
      ],
    },
    {
      badge: "Proprietary Software",
      sub: "Zero Third-Party Royalties",
      title: "100% In-House Software IP",
      desc: "We design, build, and operate proprietary edge-to-cloud control systems (Steering, Fleet Management, Reporting, Monitoring & Deployment) with zero third-party software licensing.",
      bullets: [
        "Iceberg Edge Controller: Autonomous on-site execution with local SQLite/Parquet failover.",
        "Harbour Fleet Management: Cross-site single-pane-of-glass monitoring and live capacity orchestration.",
        "Prompt Reporting & Polaris Pipelines: Automated compliance audit packs and zero-downtime releases.",
      ],
    },
  ],
  pipeline: [
    {
      step: "01",
      title: "Connect",
      desc: "14 MW Live Infrastructure",
      detail: "18 modular containers across Boden & Utansjö on the Swedish grid.",
    },
    {
      step: "02",
      title: "Qualify",
      desc: "TSO Market Certification",
      detail: "In-house Svenska kraftnät pre-qualification across FCR-D, mFRR, and FFR.",
    },
    {
      step: "03",
      title: "Dispatch",
      desc: "Sub-Second Edge Control",
      detail: "Sub-second load modulation (<0.7s) via custom on-site firmware.",
    },
    {
      step: "04",
      title: "Monetize",
      desc: "Dual Revenue Settlement",
      detail: "Continuous compute cash flow stacked with high-margin grid payments.",
    },
  ],
};

export const perimeterData = flexionicsBusinessData;

export const problemCards = [
  {
    stat: "0 Wait",
    category: "Transmission Interconnection",
    label: "Eliminating Grid Queues",
    bullets: [
      "Traditional European data center developments face multi-year waiting queues for high-voltage grid connections.",
      "AI cluster expansion is severely bottlenecked by power access rather than server hardware availability.",
      "Boden (12 MW) and Utansjö (2 MW) eliminate this waiting period with 14 MW active live capacity on the Swedish national grid.",
    ],
  },
  {
    stat: "Volatile",
    category: "Nordic Energy Dynamics",
    label: "Power Price Volatility & Surpluses",
    bullets: [
      "Surging Nordic hydro and wind generation creates frequent regional power surpluses and negative spot electricity pricing.",
      "Inflexible traditional data centers cannot dynamically adjust power draw during volatile price swings.",
      "Flexible compute dynamically absorbs surplus energy, stabilizing the regional grid while monetizing low-cost energy.",
    ],
  },
  {
    stat: "0 Fade",
    category: "Flexibility Economics",
    label: "Compute vs. Chemical Storage",
    bullets: [
      "Battery storage (BESS) costs €200k–€500k/MWh, has fixed energy duration, and degrades with every cycle.",
      "Flexible compute modulates load across infinite duration with zero cycle wear or chemical degradation.",
      "Generates continuous baseline compute revenues while simultaneously earning high-value grid reserve payments.",
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

export const assetPortfolioData = {
  tangible: {
    title: "Tangible Physical Assets",
    subtitle: "Koltrast Operating Infrastructure · Sweden",
    items: [
      {
        title: "14 MW Live Power Capacity",
        highlight: "Boden: 12 MW · Utansjö: 2 MW",
        bullets: [
          "Directly connected to the Swedish national grid (SE1 & SE2).",
          "Powered by 100% fossil-free regional hydro and wind generation.",
        ],
      },
      {
        title: "18 Modular Data Centre Containers",
        highlight: "Boden: 14 Units · Utansjö: 4 Units",
        bullets: [
          "Integrated airflow, power distribution, and climate systems.",
          "Rapid modular architecture for scalable field deployment.",
        ],
      },
      {
        title: "5,384 Deployed Server Fleet",
        highlight: "Boden: 4,405 · Utansjö: 979 Units",
        bullets: [
          "High-density server fleet operational 24/7 across Swedish facilities.",
          "Integrated with edge telemetry for dynamic power load modulation.",
        ],
      },
      {
        title: "Industrial Campuses & Real Estate",
        highlight: "Boden: 2,700 m² · Utansjö: 100 Ha",
        bullets: [
          "Boden: 2,700 m² secure fenced facility with repair workshop.",
          "Utansjö: 100-hectare coastal campus with port + 30 MW expansion.",
        ],
      },
    ],
  },
  intangible: {
    title: "Intangible Assets & Software IP",
    subtitle: "Flexionics Software & Accreditations · Swiss IP",
    items: [
      {
        title: "100% In-House Software IP Suite",
        highlight: "Zero Third-Party Dependencies",
        bullets: [
          "Proprietary Iceberg, Harbour, Compass, Northwatch, and Polaris.",
          "Full source code transfer with zero software royalties or license fees.",
        ],
      },
      {
        title: "Chip-Level Control Firmware",
        highlight: "Sub-Second (<0.7s) Load Ramping",
        bullets: [
          "Direct hardware-level control enabling sub-second power shedding.",
          "Protects hardware longevity without computational data loss.",
        ],
      },
      {
        title: "Verified Svenska kraftnät Pre-Qualifications",
        highlight: "Pure Response Times: FFR <1s · FCR-D 30s · mFRR 5–15m",
        bullets: [
          "Active: FCR-D (30s) and mFRR (5–15 min) pre-qualified & live.",
          "Fast Frequency: FFR (<1s) qualified; FCR-N & aFRR in qualification testing.",
        ],
      },
      {
        title: "Commercial & Utility Settlement Frameworks",
        highlight: "BRP / BSP Settlement Protocols",
        bullets: [
          "Established operational power purchase and netting utility agreements.",
          "Automated audit reconciliation producing SvK-compliant settlement packages.",
        ],
      },
    ],
  },
  summaryMetrics: [
    { label: "Live Power", value: "14 MW" },
    { label: "Containers", value: "18 Units" },
    { label: "Server Fleet", value: "5,384 Units" },
    { label: "Active Sites", value: "Boden & Utansjö" },
    { label: "Planned Expansion", value: "30 MW (Utansjö)" },
    { label: "Software IP", value: "100% In-House" },
  ],
};

export const infrastructureSitesData = {
  sites: [
    {
      id: "boden",
      name: "Boden Hybrid Data Centre",
      status: "Operational",
      badgeColor: "emerald",
      capacity: "12 MW Active Capacity",
      zone: "Sweden SE1 (Norrbotten)",
      bullets: [
        "14 modular containers housing 4,405 servers running 24/7 compute.",
        "Operational hybrid data centre active since 2018 with proven track record.",
        "Swedish National Grid connection powered by 100% fossil-free hydro & wind.",
        "Ambient air cooling, dedicated repair workshop, and secure perimeter.",
        "Pre-qualified and actively generating grid revenue in FCR-D and mFRR.",
      ],
      specs: [
        { label: "Active Power", value: "12 MW" },
        { label: "Containers", value: "14 Units" },
        { label: "Deployed Servers", value: "4,405" },
        { label: "Grid Programs", value: "FCR-D, mFRR" },
      ],
    },
    {
      id: "utansjo",
      name: "Utansjö Hybrid Data Centre",
      status: "Operational",
      badgeColor: "emerald",
      capacity: "2 MW Active Capacity",
      zone: "Sweden SE2 (Västernorrland)",
      bullets: [
        "4 modular containers housing 979 servers delivering balancing & compute.",
        "Located on a 100-hectare industrial campus on the Härnösand coastline.",
        "Swedish National Grid connection in SE2, Europe's lowest-cost bidding zone.",
        "Deep-water maritime port access for heavy infrastructure delivery.",
        "Pre-qualified and actively participating in mFRR and FFR markets.",
      ],
      specs: [
        { label: "Active Power", value: "2 MW" },
        { label: "Containers", value: "4 Units" },
        { label: "Deployed Servers", value: "979" },
        { label: "Grid Programs", value: "mFRR, FFR" },
      ],
    },
    {
      id: "utansjo-expansion",
      name: "Utansjö Expansion Phase 1",
      status: "Shovel-Ready",
      badgeColor: "purple",
      capacity: "30 MW Planned Expansion",
      zone: "Sweden SE2 (Västernorrland)",
      bullets: [
        "Direct connection into heavy industrial substation with secured zoning rights.",
        "Fully permitted industrial zone ready for high-density Neo-Cloud AI loads.",
        "Advanced hybrid cooling leveraging ambient Scandinavian climate.",
        "Compresses deployment timeline by 2+ years ahead of greenfield data centres.",
        "Long-term site expansion potential scaling up to 150 MW on the campus.",
      ],
      specs: [
        { label: "Planned Power", value: "30 MW" },
        { label: "Grid Interface", value: "Heavy Substation" },
        { label: "Site Area", value: "100 Hectares" },
        { label: "Site Scalability", value: "Up to 150 MW" },
      ],
    },
  ],
};

export const utansjoSiteData = {
  activeSite: {
    title: "Operational Facility (Utansjö Active)",
    capacity: "2.0 MW Active Capacity",
    voltage: "Regional Grid Connection",
    bullets: [
      "Direct Swedish National Grid interconnection supplying 2 MW continuous power.",
      "Fully prequalified with Svenska kraftnät: FFR and mFRR certified.",
      "High-density compute server fleet actively operational and generating dual revenue.",
      "Modular containerized architecture with ambient coastal air cooling.",
      "Proven operational facility functioning as the Nordic engineering testbed.",
    ],
    status: "Live Generating Revenue",
  },
  expansionSite: {
    title: "Phase 1 Expansion (Utansjö 30 MW)",
    capacity: "30.0 MW Planned Expansion",
    voltage: "Heavy Industrial Substation",
    bullets: [
      "Direct on-site access to existing heavy industrial substation.",
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
    metrics: "342 Releases · Cryptographic Attestation",
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

export const jointTeamData = {
  flexionics: [
    {
      name: "Bipin Patel",
      initials: "BP",
      role: "CEO & Founder",
      badge: "Ex-CRO HKEX • Deutsche Bank",
      company: "Flexionics" as const,
      highlights: [
        "Ex-Chief Risk Officer at HKEX Group overseeing systemic market risk.",
        "Senior risk architect at Deutsche Bank and London Clearing House.",
      ],
    },
    {
      name: "Amy Shuai",
      initials: "AS",
      role: "Chief Financial Officer",
      badge: "UBS • Deutsche Bank • RBS",
      company: "Flexionics" as const,
      highlights: [
        "25+ years in global investment banking and M&A transaction structuring.",
        "Former senior leadership roles at UBS, Deutsche Bank, and RBS.",
      ],
    },
    {
      name: "Appointed CTO",
      initials: "CTO",
      role: "Chief Technology Officer",
      badge: "Tier-1 Bank AI/ML Head",
      company: "Flexionics" as const,
      highlights: [
        "Former Head of AI/ML at Tier-1 Global Investment Bank.",
        "Architect of real-time distributed execution and decision engines.",
      ],
    },
    {
      name: "Giridhar Gandi",
      initials: "GG",
      role: "Head of Flexibility",
      badge: "Siemens Energy • VPP Specialist",
      company: "Flexionics" as const,
      highlights: [
        "Former power systems engineer at Siemens Energy (VPPs & grid stability).",
        "Architect of automated bidding algorithms and SvK pre-qualification.",
      ],
    },
    {
      name: "Umang Thakkar",
      initials: "UT",
      role: "Head of AI & Automation",
      badge: "Iceberg Edge & Harbour Lead",
      company: "Flexionics" as const,
      highlights: [
        "Lead architect of Iceberg Edge & Harbour orchestration systems.",
        "AI product builder with 14+ deployed production platforms.",
      ],
    },
  ],
  koltrast: [
    {
      name: "Colin Chapple",
      initials: "CC",
      role: "Chief Engineer & Ops Director",
      badge: "25+ Yrs Power Infrastructure",
      company: "Koltrast" as const,
      highlights: [
        "25+ years directing industrial power projects and substations.",
        "Directs physical site engineering and Utansjö 30 MW expansion.",
      ],
    },
    {
      name: "Joel Roden",
      initials: "JR",
      role: "Senior HV Electrician",
      badge: "Certified Swedish HV Specialist",
      company: "Koltrast" as const,
      highlights: [
        "Certified Swedish high-voltage electrical specialist.",
        "Oversees daily switchgear, transformers, and electrical safety.",
      ],
    },
    {
      name: "Craig Taylor",
      initials: "CT",
      role: "Site Operations & Network Lead",
      badge: "Edge Telecom & Container Ops",
      company: "Koltrast" as const,
      highlights: [
        "Manages multi-carrier network links, failover gateways, and cooling.",
        "Directs modular container installations and physical reliability.",
      ],
    },
    {
      name: "Oskar Tullberg",
      initials: "OT",
      role: "Systems & Hardware Tech",
      badge: "Server Diagnostics & Racks",
      company: "Koltrast" as const,
      highlights: [
        "Maintains on-site edge hardware, server racks, and PDUs.",
        "Executes scheduled diagnostic routines and continuous benchmarking.",
      ],
    },
    {
      name: "Vedran Klaic",
      initials: "VK",
      role: "Systems & Hardware Tech",
      badge: "Field Maintenance & Telemetry",
      company: "Koltrast" as const,
      highlights: [
        "Conducts routine field inspections and physical equipment upkeep.",
        "Monitors environmental telemetry and equipment reliability.",
      ],
    },
  ],
};

export const transactionSummary = {
  acquirer: "Reikna AS (Stord, Norway)",
  targetEntities: "Flexionics Energy AG (Swiss Parent) & Koltrast Energy Solutions AB (Swedish Subsidiary)",
  coreAssets: [
    {
      title: "Physical Ground Layer (Koltrast)",
      bullets: [
        "14 MW live operating hybrid data centre capacity across Boden (12 MW) & Utansjö (2 MW).",
        "18 modular containers housing 5,384 server miners across both Swedish facilities.",
        "Shovel-ready 30 MW Phase 1 industrial expansion at Utansjö with heavy industrial substation access.",
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
