import { ProjectType } from "@/types/Project";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import Apartment from "@/images/apartement.png";
import Aichatbot from "@/images/ai trends chatbot.png";
import apartmentAnalytics from "@/images/apartment.png";
import Sales from "@/images/Sales.png";
import Churn from "@/images/churn prediction.png";
import Patent  from "@/images/patent.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  let Projects: Array<ProjectType> = [
    {
      image: apartmentAnalytics,
      title: "Big Data Real-Time Apartment Analytics with Kappa Architecture",
      description:
        "Real-time data pipeline using Kappa Architecture for analyzing apartment listings. Implements streaming data processing with Apache Kafka, Spark, and ClickHouse. Features include real-time visualizations with FastAPI/React, materialized views for optimized queries, and HDFS data lake for storing apartment descriptions. Handles high-velocity data ingestion and provides interactive dashboards for market analysis",
      linkFigma: null,
      linkArticle: null,
      linkPreview: null,
      linkGithub: "https://github.com/SaYanZz0/Aprtement-data-analytics",
      technologies: ["Python", "React" , "Docker" , "Kafka"],
      tags: ["Big Data", "Real-Time Analytics", "Data Engineering"],
    },
    {
      image: Churn ,
      title: "MLOps Pipeline for Telecom Customer Churn Prediction",
      description:
        "End-to-end MLOps pipeline for customer churn prediction in telecommunications. Implemented real-time model monitoring in production using Evidently, Prometheus, and Grafana. Automated MLOps orchestration (retraining, evaluation, deployment) with MLflow and Airflow from customer data stored in Amazon RDS. Model deployed to production on Amazon S3, containerized with Docker, and deployed on an EC2 instance. Built a CI/CD pipeline to automate and secure the deployment of the application to EC2 instance.",
      linkFigma: null,
      linkGithub:
        "https://github.com/SaYanZz0/Churn-prediction",
      technologies: ["Python", "Airflow" , "MLFlow" , "Docker"],
      tags: ["MLOps", "Data Engineering", "Personal project"],
    },
        {
      image: Aichatbot ,
      title: "Designing a Big Data Architecture for an AI Trend Chatbot Based on RAG – Azure",
      description:
        "End-to-end automated data pipeline that extracts daily news on AI trends. Leveraged Azure tools to orchestrate, process, and manage data ingestion, ensuring reliable and up-to-date content for the chatbot application.",
      linkFigma: null,
      linkGithub: "https://github.com/SaYanZz0/AI-Trend-Chatbot",
      technologies: ["Python", "Databricks" , "Azure"],
      tags: ["Chatbot", "Data Engineering" , "RAG"],
    },
    {
      image: Patent,
      title: "Patent Analysis Project",
      description:
        "Big data initiative focused on analyzing patent statistics in agriculture. Leveraged PySpark, MongoDB Atlas, PostgreSQL, and Power BI. Collected data from various sources including EPO APIs to aid stakeholders in assessing scientific competencies.",
      linkFigma: null,
      linkGithub:"https://github.com/SaYanZz0/Patent-analysis",
      technologies: ["Python", "Docker", "Spark" , "PostgresSQL", "Power BI"],
      tags: ["Data analysis", "AI" , "Data Engineering"],
    },
    {
      image: Apartment,
      title:
        "Apartment Price Prediction",
      description:
        "Real estate price prediction app featuring hybrid regression. Includes web scraping, EDA, and model optimization using StackingRegressor. Deployed as a web application with Flask, HTML, CSS, and JS.",
      linkGithub: "https://github.com/SaYanZz0/Apartement-Price-prediction",
      technologies: ["Javascript", "Python", "Excel"],
      tags: ["Data Analysis", "ML" , "Web scraping"],
    },
    {
      image: Sales,
      title: "MLOps Pipeline for Telecom Customer Churn Prediction",
      description:
        "End-to-end MLOps pipeline for customer churn prediction in telecommunications. Implemented real-time model monitoring in production using Evidently, Prometheus, and Grafana. Automated MLOps orchestration (retraining, evaluation, deployment) with MLflow and Airflow from customer data stored in Amazon RDS. Model deployed to production on Amazon S3, containerized with Docker, and deployed on an EC2 instance. Built a CI/CD pipeline to automate and secure the deployment of the application to EC2 instance.",
      linkArticle: null,
      linkFigma: null,
      linkPreview:
        "https://colab.research.google.com/drive/1yTF8Yzzn3jtSFVm8NQJQ8qkTGG98G25a#scrollTo=653W5Abck9mf",
      linkGithub: null,
      technologies: ["Python", "fbProphet"],
      tags: ["Data Analysis", "Ai", "Prediction"],
    },
  ];

  return (
    <>
      <main
        className="px-4 sm:px-20 lg:px-40 max-w-[2000px] m-auto"
        id="Projects"
      >
        <Header />
        <div className=" flex flex-col items-center justify-center gap-10">
          {Projects.map((project: ProjectType) => {
            return (
              <>
                <ProjectCard project={project} />
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}
