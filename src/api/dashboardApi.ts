import { apiClient } from "../lib/apiClient";

export interface DashboardMetrics {
  totalRequests: number;
  pendingApprovals: number;
  estimatedSavings: number;
  matchedSuppliers: number;
  delayedDeliveries: number;
  virtualGroups: number;
}

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  const response = await apiClient.get(
    "/dashboard-metrics"
  );

  return response.data.data;
}
