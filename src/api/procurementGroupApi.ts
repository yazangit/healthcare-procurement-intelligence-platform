import type { VirtualProcurementGroup } from "../types/procurement";

export async function getProcurementGroups(): Promise<
  VirtualProcurementGroup[]
> {
  const response = await fetch(
    "http://localhost:3001/api/procurement-groups"
  );

  if (!response.ok) {
    throw new Error("Failed to load procurement groups");
  }

  const data = await response.json();

  return data.data as VirtualProcurementGroup[];
}
