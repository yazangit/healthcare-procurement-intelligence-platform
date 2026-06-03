import type { VirtualProcurementGroup } from "../types/procurement";

export const mockProcurementGroups: VirtualProcurementGroup[] = [
  {
    id: "GROUP-001",
    groupName: "Nitrile Gloves Purchasing Consortium",
    standardizedProductName:
      "Nitrile Surgical Gloves, Medium, Blue",

    participatingHospitals: [
      {
        id: "HOSP-001",
        name: "Augsburg Central Hospital",
        city: "Augsburg",
      },
      {
        id: "HOSP-003",
        name: "St. Anna Hospital",
        city: "Augsburg",
      },
      {
        id: "HOSP-005",
        name: "HeartCare Clinic Munich",
        city: "Munich",
      },
    ],

    combinedQuantity: 30000,

    averageMarketUnitPrice: 0.34,

    bundledUnitPrice: 0.26,

    expectedVolumeDiscountPercentage: 23.5,

    estimatedSavings: 2400,

    negotiationAdvantage:
      "High purchasing leverage due to aggregated regional demand.",

    relatedRequestIds: [
      "REQ-1001",
      "REQ-1005",
    ],
  },

  {
    id: "GROUP-002",
    groupName: "Sterile Consumables Bundle",

    standardizedProductName:
      "Sterile Syringes, 10 ml",

    participatingHospitals: [
      {
        id: "HOSP-001",
        name: "Augsburg Central Hospital",
        city: "Augsburg",
      },
      {
        id: "HOSP-002",
        name: "Munich West Clinic",
        city: "Munich",
      },
      {
        id: "HOSP-004",
        name: "Bavaria Diagnostic Center",
        city: "Munich",
      },
    ],

    combinedQuantity: 18000,

    averageMarketUnitPrice: 0.31,

    bundledUnitPrice: 0.24,

    expectedVolumeDiscountPercentage: 22.6,

    estimatedSavings: 1260,

    negotiationAdvantage:
      "Improved bargaining position through pooled demand.",

    relatedRequestIds: [
      "REQ-1003",
    ],
  },

  {
    id: "GROUP-003",
    groupName: "Protective Equipment Network",

    standardizedProductName:
      "FFP2 Surgical Masks",

    participatingHospitals: [
      {
        id: "HOSP-002",
        name: "Munich West Clinic",
        city: "Munich",
      },
      {
        id: "HOSP-006",
        name: "South Bavaria Medical Center",
        city: "Rosenheim",
      },
    ],

    combinedQuantity: 45000,

    averageMarketUnitPrice: 0.31,

    bundledUnitPrice: 0.23,

    expectedVolumeDiscountPercentage: 25.8,

    estimatedSavings: 3600,

    negotiationAdvantage:
      "Large-scale procurement suitable for direct manufacturer contracts.",

    relatedRequestIds: [
      "REQ-1006",
    ],
  },
];
