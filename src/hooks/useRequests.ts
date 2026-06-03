import { useQuery } from "@tanstack/react-query";

import { getRequests } from "../api/procurementApi";
import type { ProcurementRequest } from "../types/procurement";

export function useRequests() {
  return useQuery<ProcurementRequest[]>({
    queryKey: ["requests"],
    queryFn: getRequests,
  });
}
