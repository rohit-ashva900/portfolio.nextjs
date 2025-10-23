export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  shortBio: string;
  social: { github: string; linkedin: string; youtube?: string };
  resumeUrl: string;
};

const profile: Profile = {
  name: "Rohit Ashva",
  role: "Data Engineer",
  location: "India",
  email: "rohit.ashva900@gmail.com",
  shortBio:
    "Data Engineer focused on reliable ETL/ELT, Azure (ADF, Databricks), and search/indexing. I build scalable ingestion and transformation pipelines with strong observability, versioned storage, and clean data contracts.",
  social: {
    github: "https://github.com/rohit-ashva900",
    linkedin: "https://www.linkedin.com/in/rohit-ashva/",
    youtube: "https://www.youtube.com/@MakeLifeLaugh"
  },
  resumeUrl: "/Rohit_Ashva_CV.pdf"
};

export default profile;
