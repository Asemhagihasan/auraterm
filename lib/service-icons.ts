import {
  Atom,
  Gauge,
  Thermometer,
  Wind,
  Eye,
  Droplets,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps service keys to their Lucide icon.
 * Keeps icon choice centralised — change once, updates everywhere.
 */
export const serviceIconMap: Record<string, LucideIcon> = {
  helium_leak_test: Atom,
  vacuum_leak_test: Gauge,
  thermal_leak_test: Thermometer,
  compressed_air_gas_leak: Wind,
  borescope_inspection: Eye,
  high_pressure_cleaning: Droplets,
  default: Wrench,
};
