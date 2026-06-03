import { apiClient } from "../lib/apiClient";
import type { SupplierOffer } from "../types/procurement";

export interface DirectManufacturerOpportunity {
  requestId: string;
  manufacturerName: string;
  manufacturerTotalPrice: number;
  cheapestAlternativeName: string;
  cheapestAlternativeTotalPrice: number;
  estimatedSavings: number;
  savingsPercentage: number;
}

export async function getSuppliers(): Promise<SupplierOffer[]> {
  const response = await apiClient.get("/suppliers");
  return response.data.data as SupplierOffer[];
}

export async function getSuppliersByRequestId(
  requestId: string
): Promise<SupplierOffer[]> {
  const response = await apiClient.get(
    `/requests/${requestId}/suppliers`
  );

  return response.data.data as SupplierOffer[];
}

export async function getDirectManufacturerOpportunities(): Promise<
  DirectManufacturerOpportunity[]
> {
  const response = await apiClient.get(
    "/supplier-intelligence/direct-manufacturer-opportunities"
  );

  return response.data.data as DirectManufacturerOpportunity[];
}
