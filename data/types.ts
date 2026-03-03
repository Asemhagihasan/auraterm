export interface ServiceItem {
  id: number;
  serviceKey: string;
  serviceTitle: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  mainMethods: string[];
  industries: string[];
  typicalApplications: string[];
  equipmentUsed: string[];
  deliverables: string[];
  imageIdeas: string[];
  seoTitle: string;
  seoDescription: string;
  schemaType: "Service";
  animationHint: string;
}
