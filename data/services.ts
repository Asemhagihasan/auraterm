import { ServiceItem } from "./types";

export const services: ServiceItem[] = [
  {
    id: 1,
    serviceKey: "helium_leak_test",
    serviceTitle: "Helium Leak Testing",
    slug: "helium-leak-testing",
    shortDescription:
      "High-precision helium based leak detection for critical industrial systems.",
    longDescription:
      "Helium leak testing is a highly sensitive method used to detect micro-leaks in pressurized and vacuum systems by introducing helium gas and measuring its presence with specialized detectors. It is ideal for safety-critical and high-integrity installations.",
    mainMethods: [
      "Helium spray method",
      "Helium vacuum method",
      "Bombing test method",
    ],
    industries: [
      "Energy",
      "Oil & Gas",
      "Chemical plants",
      "Automotive",
      "Aerospace",
      "Manufacturing",
    ],
    typicalApplications: [
      "Pressure vessels",
      "Heat exchangers",
      "Pipelines",
      "Valves",
      "Vacuum chambers",
    ],
    equipmentUsed: [
      "Helium mass spectrometer leak detector",
      "Calibrated test ports",
      "Helium cylinders",
    ],
    deliverables: [
      "Test report",
      "Detected leak locations",
      "Repair recommendations",
    ],
    imageIdeas: [
      "Technician performing helium spray test on industrial piping",
      "Handheld helium detector close-up",
    ],
    seoTitle:
      "Helium Leak Testing Services – High Precision Industrial Leak Detection",
    seoDescription:
      "Professional helium leak testing for industrial and vacuum systems. High sensitivity detection, certified reporting and fast on-site service.",
    schemaType: "Service",
    animationHint: "fade-up + stagger cards",
  },

  {
    id: 2,
    serviceKey: "vacuum_leak_test",
    serviceTitle: "Vacuum Leak Testing",
    slug: "vacuum-leak-testing",
    shortDescription:
      "Detection and verification of leaks in vacuum and low-pressure systems.",
    longDescription:
      "Vacuum leak testing verifies the tightness of vacuum systems and detects leaks that reduce system performance, product quality and energy efficiency. Tests are performed using pressure decay and tracer gas techniques.",
    mainMethods: ["Pressure decay test", "Vacuum rise test", "Tracer gas test"],
    industries: [
      "Semiconductor",
      "Energy",
      "Chemical",
      "Food processing",
      "Research laboratories",
    ],
    typicalApplications: [
      "Vacuum lines",
      "Chambers",
      "Pumps",
      "Furnaces",
      "Packaging systems",
    ],
    equipmentUsed: [
      "Vacuum pumps",
      "Vacuum gauges",
      "Data loggers",
      "Leak detectors",
    ],
    deliverables: ["Vacuum integrity report", "Leak map", "Acceptance results"],
    imageIdeas: ["Vacuum chamber test setup", "Digital vacuum gauge close-up"],
    seoTitle: "Vacuum Leak Testing for Industrial Systems",
    seoDescription:
      "Accurate vacuum leak testing and system integrity verification for industrial and laboratory installations.",
    schemaType: "Service",
    animationHint: "fade-in + subtle scale",
  },

  {
    id: 3,
    serviceKey: "thermal_leak_test",
    serviceTitle: "Thermal / Infrared Leak Detection",
    slug: "thermal-infrared-leak-detection",
    shortDescription:
      "Non-contact leak and anomaly detection using thermal imaging.",
    longDescription:
      "Thermal leak testing uses infrared cameras to visualize temperature anomalies caused by air, gas or fluid leakage and insulation defects, enabling fast inspection without stopping production.",
    mainMethods: ["Infrared thermography", "Surface temperature analysis"],
    industries: ["Energy", "Utilities", "Building systems", "Process industry"],
    typicalApplications: [
      "Steam lines",
      "Hot water systems",
      "Compressed air systems",
      "Insulation faults",
    ],
    equipmentUsed: ["Infrared thermal camera", "Thermal analysis software"],
    deliverables: [
      "Thermographic report",
      "Annotated images",
      "Fault classification",
    ],
    imageIdeas: [
      "Infrared camera inspecting pipeline",
      "Thermal image overlay on equipment",
    ],
    seoTitle: "Thermal Leak Detection with Infrared Cameras",
    seoDescription:
      "Fast and non-invasive thermal leak detection and energy loss analysis using certified infrared inspections.",
    schemaType: "Service",
    animationHint: "reveal + image parallax",
  },

  {
    id: 4,
    serviceKey: "compressed_air_gas_leak",
    serviceTitle: "Compressed Air & Gas Leak Detection",
    slug: "compressed-air-gas-leak-detection",
    shortDescription:
      "Detection of air and industrial gas leaks to reduce energy losses.",
    longDescription:
      "Acoustic and sensor-based leak detection methods are used to locate compressed air and industrial gas leaks, improving efficiency, reliability and operational safety.",
    mainMethods: [
      "Ultrasonic acoustic detection",
      "Sensor scanning",
      "Verification test",
    ],
    industries: [
      "Manufacturing",
      "Automotive",
      "Food & beverage",
      "Logistics",
      "Production facilities",
    ],
    typicalApplications: [
      "Air lines",
      "Gas distribution networks",
      "Valves",
      "Connectors",
    ],
    equipmentUsed: [
      "Ultrasonic leak detector",
      "Flow meters",
      "Handheld scanners",
    ],
    deliverables: ["Leak list", "Cost-loss estimation", "Repair plan"],
    imageIdeas: [
      "Ultrasonic leak detector in factory",
      "Operator scanning pipes",
    ],
    seoTitle: "Compressed Air and Gas Leak Detection Services",
    seoDescription:
      "Industrial compressed air and gas leak detection to reduce energy waste and improve system reliability.",
    schemaType: "Service",
    animationHint: "slide-in from side",
  },

  {
    id: 5,
    serviceKey: "borescope_inspection",
    serviceTitle: "Borescope Visual Inspection",
    slug: "borescope-visual-inspection",
    shortDescription:
      "Internal visual inspection of inaccessible components using borescope cameras.",
    longDescription:
      "Borescope inspection allows direct visual assessment of internal surfaces of pipes, machinery and equipment without dismantling, supporting preventive maintenance and failure analysis.",
    mainMethods: [
      "Flexible borescope inspection",
      "Video recording",
      "Defect marking",
    ],
    industries: [
      "Power plants",
      "Aviation",
      "Manufacturing",
      "Petrochemical",
      "Maintenance services",
    ],
    typicalApplications: [
      "Turbines",
      "Engines",
      "Piping",
      "Tanks",
      "Mechanical assemblies",
    ],
    equipmentUsed: [
      "Industrial video borescope",
      "Lighting probes",
      "Recording units",
    ],
    deliverables: [
      "Inspection report",
      "Defect images",
      "Maintenance recommendations",
    ],
    imageIdeas: ["Borescope camera entering pipe", "Live inspection screen"],
    seoTitle: "Industrial Borescope Inspection Services",
    seoDescription:
      "High-resolution internal visual inspection for pipes and machinery without disassembly.",
    schemaType: "Service",
    animationHint: "zoom-in on media",
  },

  {
    id: 6,
    serviceKey: "high_pressure_cleaning",
    serviceTitle: "High Pressure Water Jet Cleaning",
    slug: "high-pressure-water-jet-cleaning",
    shortDescription:
      "Industrial cleaning using high-pressure water jet systems.",
    longDescription:
      "High pressure water jet cleaning removes deposits, scale and contamination from industrial equipment, piping and surfaces without chemicals, ensuring operational efficiency and safety.",
    mainMethods: [
      "Ultra-high pressure jetting",
      "Surface preparation",
      "Internal pipe cleaning",
    ],
    industries: [
      "Energy",
      "Petrochemical",
      "Manufacturing",
      "Marine",
      "Infrastructure",
    ],
    typicalApplications: [
      "Heat exchangers",
      "Tanks",
      "Pipelines",
      "Industrial surfaces",
    ],
    equipmentUsed: [
      "High pressure pump units",
      "Jetting lances",
      "Rotary nozzles",
    ],
    deliverables: [
      "Cleaning report",
      "Before/after images",
      "Compliance record",
    ],
    imageIdeas: [
      "High pressure jet cleaning pipe interior",
      "Operator with protective suit",
    ],
    seoTitle: "High Pressure Industrial Water Jet Cleaning",
    seoDescription:
      "Professional high-pressure water jet cleaning for industrial equipment and pipelines.",
    schemaType: "Service",
    animationHint: "fade-up + background motion",
  },
];

/** Find a service by its slug. Returns undefined if not found. */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

/** Get all valid slugs (for generateStaticParams). */
export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
