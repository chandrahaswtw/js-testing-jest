const assetTypeNames = {
  reviewRequirement: "review requirement",
  page: "page",
  visualization: "visualization",
  listing: "listing",
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class CircularLinkedList {
  constructor(initialID, updatedPage) {
    this.head = null;
    this.tail = null;
    this.currentNode = null;
    this.initialID = initialID;
    this.updatedPage = updatedPage;
  }

  appendData(data) {
    const newNode = new Node(data);

    // Set the current ID for the first time.
    if (!this.currentNode && this.getID(data).assetId === this.initialID) {
      this.currentNode = newNode;
    }

    if (!this.head) {
      // Addind data for the first time
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.tail.next = this.head;
    this.head.prev = this.tail;
  }

  goNext() {
    this.currentNode = this.currentNode.next;
  }

  goPrev() {
    this.currentNode = this.currentNode.prev;
  }

  getCurrentNodeData() {
    return this.getID(this.currentNode.data);
  }

  getID(data) {
    let assetId;
    let assetName;
    switch (this.updatedPage) {
      case assetTypeNames.page:
        assetId = data?.assetId;
        assetName = data?.name || data?.original?.assetId;
        break;
      case assetTypeNames.reviewRequirement:
        assetId = data?.rrId;
        assetName = data?.name;
        break;
      case assetTypeNames.visualization:
        assetId = data?.assetId;
        assetName = data?.label;
        break;
      case assetTypeNames.listing:
        assetId = data?.listingId;
        assetName = data?.name;
        break;
      default:
        break;
    }
    return { assetId, assetName };
  }
}

let currentDisplayedRows = [
  {
    id: "0",
    index: 0,
    original: {
      name: "Check baseline data in case of rescreening",
      role: "Medical Reviewer - Viewer",
      rrId: "3c7ffd7a-9b8a-4dab-9b95-2d087ad8f65b",
      timing: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      critical: "true",
      isLatest: true,
      priority: "",
      queryText: "Some default query text (TBD in B1 Release)",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      completion: "",
      reviewable: "yes",
      targetedQC: "50",
      attachments: null,
      catalogName: "Check baseline data in case of rescreening",
      description: "",
      reviewMethods: null,
      catalogVersion: "1",
      targetedReview: "60",
      triggerListing: "",
      studyExistsFlag: "false",
      library_level: {
        compound: null,
        diseaseArea: null,
        therapeuticArea: null,
      },
    },
    depth: 0,
    _valuesCache: {
      name: "Check baseline data in case of rescreening",
      role: "Medical Reviewer - Viewer",
      description: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      catalogVersion: "1",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      queryText: "Some default query text (TBD in B1 Release)",
      reviewMethods: "",
    },
    _uniqueValuesCache: {},
    subRows: [],
    columnFilters: {},
    columnFiltersMeta: {},
    _groupingValuesCache: {},
  },
  {
    id: "1",
    index: 1,
    original: {
      name: "Central Lab Sample Compliance",
      role: "Data Manager - CDM",
      rrId: "83dd503e-6b5f-469e-8479-c0f736205a24",
      timing: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      critical: "true",
      isLatest: true,
      priority: "",
      queryText: "Some default query text (TBD in B1 Release)",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      completion: "",
      reviewable: "yes",
      targetedQC: "50",
      attachments: null,
      catalogName: "Central Lab Sample Compliance",
      description: "",
      reviewMethods: null,
      catalogVersion: "1",
      targetedReview: "60",
      triggerListing: "",
      studyExistsFlag: "false",
      library_level: {
        compound: null,
        diseaseArea: null,
        therapeuticArea: null,
      },
    },
    depth: 0,
    _valuesCache: {
      name: "Central Lab Sample Compliance",
      role: "Data Manager - CDM",
      description: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      catalogVersion: "1",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      queryText: "Some default query text (TBD in B1 Release)",
      reviewMethods: "",
    },
    _uniqueValuesCache: {},
    subRows: [],
    columnFilters: {},
    columnFiltersMeta: {},
    _groupingValuesCache: {},
  },
  {
    id: "2",
    index: 2,
    original: {
      name: "Local Lab Sample Compliance",
      role: "Data Manager - Guest",
      rrId: "9b419dc4-42b7-42bd-8b62-8d06e2df263a",
      timing: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      critical: "true",
      isLatest: true,
      priority: "",
      queryText: "Some default query text (TBD in B1 Release)",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      completion: "",
      reviewable: "yes",
      targetedQC: "50",
      attachments: null,
      catalogName: "Local Lab Sample Compliance",
      description: "",
      reviewMethods: null,
      catalogVersion: "1",
      targetedReview: "60",
      triggerListing: "",
      studyExistsFlag: "false",
      library_level: {
        compound: null,
        diseaseArea: null,
        therapeuticArea: null,
      },
    },
    depth: 0,
    _valuesCache: {
      name: "Local Lab Sample Compliance",
      role: "Data Manager - Guest",
      description: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      catalogVersion: "1",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      queryText: "Some default query text (TBD in B1 Release)",
      reviewMethods: "",
    },
    _uniqueValuesCache: {},
    subRows: [],
    columnFilters: {},
    columnFiltersMeta: {},
    _groupingValuesCache: {},
  },
  {
    id: "3",
    index: 3,
    original: {
      name: "Check baseline data in case of rescreening (Next Task Create Date)",
      role: "Medical Reviewer - Medical Reviewer",
      rrId: "9f27c308-53c4-4f20-afc4-ef34b96c4c9b",
      timing: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      critical: "true",
      isLatest: true,
      priority: "",
      queryText: "Some default query text (TBD in B1 Release)",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      completion: "",
      reviewable: "yes",
      targetedQC: "50",
      attachments: null,
      catalogName:
        "Check baseline data in case of rescreening (Next Task Create Date)",
      description: "",
      reviewMethods: null,
      catalogVersion: "1",
      targetedReview: "60",
      triggerListing: "",
      studyExistsFlag: "false",
      library_level: {
        compound: null,
        diseaseArea: null,
        therapeuticArea: null,
      },
    },
    depth: 0,
    _valuesCache: {
      name: "Check baseline data in case of rescreening (Next Task Create Date)",
      role: "Medical Reviewer - Medical Reviewer",
      description: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      catalogVersion: "1",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      queryText: "Some default query text (TBD in B1 Release)",
      reviewMethods: "",
    },
    _uniqueValuesCache: {},
    subRows: [],
    columnFilters: {},
    columnFiltersMeta: {},
    _groupingValuesCache: {},
  },
  {
    id: "4",
    index: 4,
    original: {
      name: "Lab Outliers",
      role: "Central Monitor - CMM",
      rrId: "99de495e-648b-4587-9e54-7a7e737fe06b",
      timing: "",
      category: "Analytical Assessments",
      subCategory: "Safety",
      critical: "true",
      isLatest: true,
      priority: "",
      queryText: "Some default query text (TBD in B1 Release)",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      completion: "",
      reviewable: "yes",
      targetedQC: "50",
      attachments: null,
      catalogName: "Lab Outliers",
      description: "",
      reviewMethods: null,
      catalogVersion: "1",
      targetedReview: "60",
      triggerListing: "",
      studyExistsFlag: "false",
      library_level: {
        compound: null,
        diseaseArea: null,
        therapeuticArea: null,
      },
    },
    depth: 0,
    _valuesCache: {
      name: "Lab Outliers",
      role: "Central Monitor - CMM",
      description: "",
      category: "Analytical Assessments",
      subCategory: "Safety",
      catalogVersion: "1",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      queryText: "Some default query text (TBD in B1 Release)",
      reviewMethods: "",
    },
    _uniqueValuesCache: {},
    subRows: [],
    columnFilters: {},
    columnFiltersMeta: {},
    _groupingValuesCache: {},
  },
  {
    id: "5",
    index: 5,
    original: {
      name: "AE summary",
      role: "Data Manager - Guest",
      rrId: "ea8d56ec-980e-4a73-88e1-68a8ae8fc0de",
      timing: "",
      category: "Analytical Assessments",
      subCategory: "",
      critical: "true",
      isLatest: true,
      priority: "",
      queryText: "Some default query text (TBD in B1 Release)",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      completion: "",
      reviewable: "yes",
      targetedQC: "50",
      attachments: null,
      catalogName: "AE summary",
      description: "",
      reviewMethods: null,
      catalogVersion: "1",
      targetedReview: "60",
      triggerListing: "",
      studyExistsFlag: "false",
      library_level: {
        compound: null,
        diseaseArea: null,
        therapeuticArea: null,
      },
    },
    depth: 0,
    _valuesCache: {
      name: "AE summary",
      role: "Data Manager - Guest",
      description: "",
      category: "Analytical Assessments",
      subCategory: "",
      catalogVersion: "1",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      queryText: "Some default query text (TBD in B1 Release)",
      reviewMethods: "",
    },
    _uniqueValuesCache: {},
    subRows: [],
    columnFilters: {},
    columnFiltersMeta: {},
    _groupingValuesCache: {},
  },
  {
    id: "6",
    index: 6,
    original: {
      name: "Procedure Compliance",
      role: "Data Manager - DM Reviewer",
      rrId: "928866a3-2f9c-46ba-afa2-2f74cfa39a57",
      timing: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      critical: "true",
      isLatest: true,
      priority: "",
      queryText: "Some default query text (TBD in B1 Release)",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      completion: "",
      reviewable: "yes",
      targetedQC: "50",
      attachments: null,
      catalogName: "Procedure Compliance",
      description: "",
      reviewMethods: null,
      catalogVersion: "1",
      targetedReview: "60",
      triggerListing: "",
      studyExistsFlag: "false",
      library_level: {
        compound: null,
        diseaseArea: null,
        therapeuticArea: null,
      },
    },
    depth: 0,
    _valuesCache: {
      name: "Procedure Compliance",
      role: "Data Manager - DM Reviewer",
      description: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      catalogVersion: "1",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      queryText: "Some default query text (TBD in B1 Release)",
      reviewMethods: "",
    },
    _uniqueValuesCache: {},
    subRows: [],
    columnFilters: {},
    columnFiltersMeta: {},
    _groupingValuesCache: {},
  },
  {
    id: "7",
    index: 7,
    original: {
      name: "Site Profile Tool Assessment",
      role: "Data Manager - DM Reviewer",
      rrId: "4fa37f95-4787-4c88-a340-6f8e267fc649",
      timing: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      critical: "true",
      isLatest: true,
      priority: "",
      queryText: "Some default query text (TBD in B1 Release)",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      completion: "",
      reviewable: "yes",
      targetedQC: "50",
      attachments: null,
      catalogName: "Site Profile Tool Assessment",
      description: "",
      reviewMethods: null,
      catalogVersion: "1",
      targetedReview: "60",
      triggerListing: "",
      studyExistsFlag: "false",
      library_level: {
        compound: null,
        diseaseArea: null,
        therapeuticArea: null,
      },
    },
    depth: 0,
    _valuesCache: {
      name: "Site Profile Tool Assessment",
      role: "Data Manager - DM Reviewer",
      description: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      catalogVersion: "1",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      queryText: "Some default query text (TBD in B1 Release)",
      reviewMethods: "",
    },
    _uniqueValuesCache: {},
    subRows: [],
    columnFilters: {},
    columnFiltersMeta: {},
    _groupingValuesCache: {},
  },
  {
    id: "8",
    index: 8,
    original: {
      name: "Lab Normal Range Outliers",
      role: "Admin - Clinical Programmer",
      rrId: "d57f5807-acce-44c3-9dca-f65273bd44a8",
      timing: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      critical: "true",
      isLatest: true,
      priority: "",
      queryText: "Some default query text (TBD in B1 Release)",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      completion: "",
      reviewable: "yes",
      targetedQC: "50",
      attachments: [
        { url: "www.google.com", name: "Test" },
        { url: "www.gmail.com", name: "Test1" },
      ],
      catalogName: "Lab Normal Range Outliers",
      description: "",
      reviewMethods: null,
      catalogVersion: "1",
      targetedReview: "60",
      triggerListing: "",
      studyExistsFlag: "false",
      library_level: {
        compound: null,
        diseaseArea: null,
        therapeuticArea: null,
      },
    },
    depth: 0,
    _valuesCache: {
      name: "Lab Normal Range Outliers",
      role: "Admin - Clinical Programmer",
      description: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      catalogVersion: "1",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      queryText: "Some default query text (TBD in B1 Release)",
      reviewMethods: "",
    },
    _uniqueValuesCache: {},
    subRows: [],
    columnFilters: {},
    columnFiltersMeta: {},
    _groupingValuesCache: {},
  },
  {
    id: "9",
    index: 9,
    original: {
      name: "Check baseline data",
      role: "",
      rrId: "c8fb404e-f26d-4783-94a0-b2ff9411d99f",
      timing: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      critical: "true",
      isLatest: true,
      priority: "",
      queryText: "Some default query text (TBD in B1 Release)",
      guidance:
        "require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      completion: "",
      reviewable: "yes",
      targetedQC: "50",
      attachments: null,
      catalogName: "Check baseline data",
      description: "",
      reviewMethods: null,
      catalogVersion: "4",
      targetedReview: "60",
      triggerListing: "",
      studyExistsFlag: "false",
      library_level: {
        compound: [],
        diseaseArea: ["Glutamate"],
        therapeuticArea: ["Immunology"],
      },
    },
    depth: 0,
    _valuesCache: {
      name: "Check baseline data",
      role: "",
      description: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      catalogVersion: "4",
      guidance:
        "require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      queryText: "Some default query text (TBD in B1 Release)",
      reviewMethods: "",
    },
    _uniqueValuesCache: {},
    subRows: [],
    columnFilters: {},
    columnFiltersMeta: {},
    _groupingValuesCache: {},
  },
];

const LinkedList = new CircularLinkedList(
  "9f27c308-53c4-4f20-afc4-ef34b96c4c9b",
  assetTypeNames.reviewRequirement
);
for (let row of currentDisplayedRows) {
  LinkedList.appendData(row.original);
}
LinkedList.goNext();
console.log(LinkedList.getCurrentNodeData());
LinkedList.goPrev();
console.log(LinkedList.getCurrentNodeData());

let currentDisplayedRowsMock = [
  {
    id: "0",
    index: 0,
    original: {
      name: "Check baseline data in case of rescreening",
      role: "Medical Reviewer - Viewer",
      rrId: "3c7ffd7a-9b8a-4dab-9b95-2d087ad8f65b",
      timing: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      critical: "true",
      isLatest: true,
      priority: "",
      queryText: "Some default query text (TBD in B1 Release)",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      completion: "",
      reviewable: "yes",
      targetedQC: "50",
      attachments: null,
      catalogName: "Check baseline data in case of rescreening",
      description: "",
      reviewMethods: null,
      catalogVersion: "1",
      targetedReview: "60",
      triggerListing: "",
      studyExistsFlag: "false",
      library_level: {
        compound: null,
        diseaseArea: null,
        therapeuticArea: null,
      },
    },
    depth: 0,
    _valuesCache: {
      name: "Check baseline data in case of rescreening",
      role: "Medical Reviewer - Viewer",
      description: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      catalogVersion: "1",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      queryText: "Some default query text (TBD in B1 Release)",
      reviewMethods: "",
    },
    _uniqueValuesCache: {},
    subRows: [],
    columnFilters: {},
    columnFiltersMeta: {},
    _groupingValuesCache: {},
  },
  {
    id: "1",
    index: 1,
    original: {
      name: "Central Lab Sample Compliance",
      role: "Data Manager - CDM",
      rrId: "83dd503e-6b5f-469e-8479-c0f736205a24",
      timing: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      critical: "true",
      isLatest: true,
      priority: "",
      queryText: "Some default query text (TBD in B1 Release)",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      completion: "",
      reviewable: "yes",
      targetedQC: "50",
      attachments: null,
      catalogName: "Central Lab Sample Compliance",
      description: "",
      reviewMethods: null,
      catalogVersion: "1",
      targetedReview: "60",
      triggerListing: "",
      studyExistsFlag: "false",
      library_level: {
        compound: null,
        diseaseArea: null,
        therapeuticArea: null,
      },
    },
    depth: 0,
    _valuesCache: {
      name: "Central Lab Sample Compliance",
      role: "Data Manager - CDM",
      description: "",
      category: "Analytical Assessments",
      subCategory: "Site Profile Tool [SPT]",
      catalogVersion: "1",
      guidance:
        "Complete review all high risk sites to confirm true positives and require further insights and/or intervention.\n\nFor each true requiring additional follow-up determine the underlying component(s) and KRI(s) that drove site to being an outlier.\n\nIf the site confirmation as a true positive cooinsides with 3 consecutive weeks of meeting the threshold indicating high risk for  potential issues ensure the site is considered for a site mitigation plan.\n\nFor each of the above confirmed cases eusure the appropriate inquiry, centralized finding, and or mitigation plan is created.",
      queryText: "Some default query text (TBD in B1 Release)",
      reviewMethods: "",
    },
    _uniqueValuesCache: {},
    subRows: [],
    columnFilters: {},
    columnFiltersMeta: {},
    _groupingValuesCache: {},
  },
];
