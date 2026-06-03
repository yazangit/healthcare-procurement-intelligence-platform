import { useQuery } from "@tanstack/react-query";

import {
  getDashboardMetrics,
  type DashboardMetrics,
} from "../api/dashboardApi";

export function useDashboardMetrics() {
  return useQuery<DashboardMetrics>({
    queryKey: ["dashboard-metrics"],
    queryFn: getDashboardMetrics,
  });
}
