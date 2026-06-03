export const UserRole = {
  Admin: "Admin",
  ProcurementManager: "Procurement Manager",
  HospitalUser: "Hospital User",
  SupplierManager: "Supplier Manager",
} as const;

export type UserRole =
  (typeof UserRole)[keyof typeof UserRole];

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization: string;
}
