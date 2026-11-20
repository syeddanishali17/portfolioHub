// CV-only copy and variant selection. Facts come from src/content; this file only
// curates what fits on one A4 page. Two projects per variant (see SPEC.md §9.3).

export const cvProfile = [
  "Electrical engineer, now doing my MSc in Information and Communication Engineering at Technische Universität Wien. I have worked in a biscuit factory, as a product analyst and on Alibaba’s marketplace. I build Python tools for signals, routing and planning, and test each one against a baseline.",
  "Based in Vienna and open to engineering, data and technical operations roles.",
];

export const cvSubtitle = "Electrical engineer and MSc student at Technische Universität Wien";

export type CvVariant = {
  id: string;
  file: string;
  description: string;
  projectSlugs: string[];
};

export const cvVariants: CvVariant[] = [
  {
    id: "engineering",
    file: "Syed_Danish_Ali_CV.pdf",
    description: "Default. Engineering and technical roles: BioLab ECG + LastMileLab2.",
    projectSlugs: ["biolab-ecg", "lastmilelab"],
  },
  {
    id: "data",
    file: "Syed_Danish_Ali_CV_Data_Operations.pdf",
    description: "Data, analytics and operations roles: DemandPlanningLab + LastMileLab2.",
    projectSlugs: ["demandplanninglab", "lastmilelab"],
  },
];
