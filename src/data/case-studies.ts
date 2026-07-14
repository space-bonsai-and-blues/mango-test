export type CaseStudy = {
  client: string;
  focus: string;
  summary: string;
  placeholder?: boolean;
};

// Placeholder structure — replace each entry once real case study content
// is ready. Keep `placeholder: true` until then so it reads as "in
// progress," not broken. The homepage shows the first two; the full
// Case studies page shows all of them.
export const caseStudies: CaseStudy[] = [
  {
    client: "Case study one",
    focus: "Systemic thinking",
    summary: "A short description of the engagement, the systemic approach used, and the outcome — once written.",
    placeholder: true,
  },
  {
    client: "Case study two",
    focus: "Social innovation",
    summary: "A short description of the engagement, the systemic approach used, and the outcome — once written.",
    placeholder: true,
  },
];
