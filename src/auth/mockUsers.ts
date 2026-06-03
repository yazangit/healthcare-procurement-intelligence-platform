import { UserRole, type AuthUser } from "./authTypes";

export const mockUsers: AuthUser[] = [
  {
    id: "USER-001",
    name: "Yazan Al Hussein",
    email: "yazan.procurement@sanovio-demo.com",
    role: UserRole.Admin,
    organization: "SANOVIO Demo",
  },
  {
    id: "USER-002",
    name: "Anna Weber",
    email: "anna.weber@hospital-demo.com",
    role: UserRole.ProcurementManager,
    organization: "Augsburg Central Hospital",
  },
  {
    id: "USER-003",
    name: "Dr. Lukas Schneider",
    email: "lukas.schneider@clinic-demo.com",
    role: UserRole.HospitalUser,
    organization: "Munich West Clinic",
  },
  {
    id: "USER-004",
    name: "Maria Fischer",
    email: "maria.fischer@supplier-demo.com",
    role: UserRole.SupplierManager,
    organization: "MediGlove Manufacturing GmbH",
  },
];
