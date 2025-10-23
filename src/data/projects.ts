export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  image?: string;
  links?: { demo?: string; repo?: string };
};

const projects: Project[] = [
  {
    slug: "azure-dynamic-etl",
    title: "Dynamic ETL Pipeline on Azure",
    summary:
      "ADF-orchestrated Databricks jobs processing 800K+ NYC Taxi rows via Bronze/Silver/Gold layers (Delta Lake + Parquet). Parameterized ingestion, schema validation, and idempotent writes.",
    tags: ["Azure Data Factory", "Databricks", "Delta Lake", "Parquet", "Python", "ETL"],
    image: "/projects/azure-dynamic-etl.png",
    links: { repo: "https://github.com/rohit-ashva900/Dynamic_ETL_Pipeline_Project_with_Azure" }
  },
  {
    slug: "airflow-aws-etl",
    title: "Python Data Pipelines on AWS with Airflow",
    summary:
      "Apache Airflow DAGs on EC2 to extract/transform/load datasets into Amazon S3. Retries, parametrization, and clear logging cut end-to-end time ~40%.",
    tags: ["Airflow", "AWS EC2", "Amazon S3", "Python", "Automation"],
    image: "/projects/airflow-aws.png",
    links: { repo: "https://github.com/rohit-ashva900/weather_data_airflow_etl" }
  },
  {
    slug: "legal-docs-search",
    title: "Legal Docs → Search (OCR + Indexing)",
    summary:
      "End-to-end pipeline for U.S. state legal documents: OCR + normalization → Azure Blob → Elasticsearch & Pinecone for fast retrieval. Deterministic naming & hierarchical metadata.",
    tags: ["Python", "OCR", "Azure", "Pinecone", "Elasticsearch"],
    image: "/projects/legis-search.png"
  }
];

export default projects;
