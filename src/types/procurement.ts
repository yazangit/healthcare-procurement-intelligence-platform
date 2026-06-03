export const ProcurementStatus = {
  Draft: "Draft",
  PendingApproval: "Pending Approval",
  NeedsReview: "Needs Review",
  Approved: "Approved",
  Rejected: "Rejected",
  FulfillmentStarted: "Fulfillment Started",
  Delivered: "Delivered",
} as const;

export type ProcurementStatus =
  (typeof ProcurementStatus)[keyof typeof ProcurementStatus];

export const UrgencyLevel = {
  Low: "Low",
  Medium: "Medium",
  High: "High",
  Critical: "Critical",
} as const;

export type UrgencyLevel =
  (typeof UrgencyLevel)[keyof typeof UrgencyLevel];

export const SupplierType = {
  Manufacturer: "Manufacturer",
  Distributor: "Distributor",
  Wholesaler: "Wholesaler",
} as const;

export type SupplierType =
  (typeof SupplierType)[keyof typeof SupplierType];

export const DataQualityIssueType = {
  DuplicateProductName: "Duplicate Product Name",
  MissingProductCode: "Missing Product Code",
  MissingCertification: "Missing Certification",
  InconsistentUnits: "Inconsistent Units",
  HighPriceVariance: "High Price Variance",
  DeliveryRisk: "Delivery Risk",
} as const;

export type DataQualityIssueType =
  (typeof DataQualityIssueType)[keyof typeof DataQualityIssueType];

export const WorkflowStage = {
  RequestCreated: "Request Created",
  DataStandardized: "Data Standardized",
  DemandBundled: "Demand Bundled",
  SuppliersMatched: "Suppliers Matched",
  OfferSelected: "Offer Selected",
  FulfillmentStarted: "Fulfillment Started",
  Delivered: "Delivered",
} as const;

export type WorkflowStage =
  (typeof WorkflowStage)[keyof typeof WorkflowStage];

export type IssueSeverity = "Low" | "Medium" | "High";

export interface Hospital {
  id: string;
  name: string;
  city: string;
}

export interface DataQualityIssue {
  id: string;
  type: DataQualityIssueType;
  severity: IssueSeverity;
  message: string;
}

export interface ProcurementRequest {
  id: string;
  department: string;
  hospital: Hospital;
  productName: string;
  standardizedProductName: string;
  productCode?: string;
  category: string;
  quantity: number;
  unit: string;
  urgency: UrgencyLevel;
  status: ProcurementStatus;
  estimatedBudget: number;
  createdDate: string;
  notes: string;
  requiredCertifications: string[];
  currentWorkflowStage: WorkflowStage;
  dataQualityIssues: DataQualityIssue[];
}

export interface SupplierOffer {
  id: string;
  requestId: string;
  supplierName: string;
  supplierType: SupplierType;
  unitPrice: number;
  totalPrice: number;
  deliveryDays: number;
  reliabilityScore: number;
  certifications: string[];
  availability: number;
  matchScore: number;
  isRecommended: boolean;
}

export interface VirtualProcurementGroup {
  id: string;
  groupName: string;
  standardizedProductName: string;
  participatingHospitals: Hospital[];
  combinedQuantity: number;
  averageMarketUnitPrice: number;
  bundledUnitPrice: number;
  expectedVolumeDiscountPercentage: number;
  estimatedSavings: number;
  negotiationAdvantage: string;
  relatedRequestIds: string[];
}

export interface ProcurementActivity {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  type: "Request" | "Supplier" | "Approval" | "Bundling" | "Data Quality";
}

export interface AssistantQuestion {
  id: string;
  label: string;
  question: string;
}

export interface AssistantResponse {
  question: string;
  answer: string;
  relatedRequestIds?: string[];
  estimatedImpact?: number;
}
