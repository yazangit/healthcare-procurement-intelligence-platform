import { apiClient } from "../lib/apiClient";
import type { ProcurementRequest } from "../types/procurement";

export async function getRequests(): Promise<ProcurementRequest[]> {
  const response = await apiClient.get("/requests");

  return response.data.data;
}
