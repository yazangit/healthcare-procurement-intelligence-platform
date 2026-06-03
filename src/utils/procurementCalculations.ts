import { ProcurementStatus } from "../types/procurement";
import type {
  ProcurementRequest,
  SupplierOffer,
  VirtualProcurementGroup,
} from "../types/procurement";

export function calculateTotalEstimatedSavings(
  suppliers: SupplierOffer[],
  groups: VirtualProcurementGroup[]
): number {
  const supplierSavings = suppliers
    .filter((supplier) => supplier.isRecommended)
    .reduce((total, supplier) => total + supplier.totalPrice * 0.08, 0);

  const bundlingSavings = groups.reduce(
    (total, group) => total + group.estimatedSavings,
    0
  );

  return Math.round(supplierSavings + bundlingSavings);
}

export function countPendingApprovals(
  requests: ProcurementRequest[]
): number {
  return requests.filter(
    (request) =>
      request.status === ProcurementStatus.PendingApproval
  ).length;
}

export function countDelayedDeliveries(
  suppliers: SupplierOffer[]
): number {
  return suppliers.filter(
    (supplier) => supplier.deliveryDays > 10
  ).length;
}

export function countMatchedSuppliers(
  suppliers: SupplierOffer[]
): number {
  return suppliers.length;
}
