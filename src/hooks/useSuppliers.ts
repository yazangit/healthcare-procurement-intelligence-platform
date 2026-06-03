import { useQuery } from "@tanstack/react-query";

import {
  getSuppliers,
  getSuppliersByRequestId,
  type DirectManufacturerOpportunity,
  getDirectManufacturerOpportunities,
} from "../api/supplierApi";
import type { SupplierOffer } from "../types/procurement";

export function useSuppliers() {
  return useQuery<SupplierOffer[]>({
    queryKey: ["suppliers"],
    queryFn: getSuppliers,
  });
}

export function useSuppliersByRequestId(requestId: string | undefined) {
  return useQuery<SupplierOffer[]>({
    queryKey: ["suppliers", requestId],
    queryFn: () => getSuppliersByRequestId(requestId ?? ""),
    enabled: Boolean(requestId),
  });
}

export function useDirectManufacturerOpportunities() {
  return useQuery<DirectManufacturerOpportunity[]>({
    queryKey: ["direct-manufacturer-opportunities"],
    queryFn: getDirectManufacturerOpportunities,
  });
}
