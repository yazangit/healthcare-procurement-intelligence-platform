import { useQuery } from "@tanstack/react-query";

import { getProcurementGroups } from "../api/procurementGroupApi";
import type { VirtualProcurementGroup } from "../types/procurement";

export function useProcurementGroups() {
  return useQuery<VirtualProcurementGroup[]>({
    queryKey: ["procurement-groups"],
    queryFn: getProcurementGroups,
  });
}
