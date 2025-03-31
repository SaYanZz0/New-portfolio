import { ProjectType } from "@/types/Project";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import TahsilImage from "@/images/Tahsil.png";
import MedicalProject from "@/images/Medical.png";
import WebScraping from "@/images/Web scraping Ai Agent.png";
import CustomerSupport from "@/images/Customer support Ai Agent.png";
import AiAnalyst from "@/images/Ai Data analyst.png";
import Sales from "@/images/Sales.png";
import Operations from "@/images/Operations departement.png";
import Manufacturing from "@/images/manufacturing departement.png";

export default function () {
  let Projects: Array<ProjectType> = [
    {
      image: CustomerSupport,
      title: "Customer support Ai Agent",
      description:
        "Streamlit app implements an AI-powered customer support agent for synthetic data generated using GPT-4o.",
      linkFigma: null,
      linkArticle: null,
      linkPreview: null,
      linkGithub: "https://github.com/SaYanZz0/Ai-Customer-support-agent",
      technologies: ["Python", "OpenAi"],
      tags: ["Customer support", "AI Agent", "Personal project"],
    },
    {
      image: Sales,
      title: "Predict future daily sales based on data features",
      description:
        "For companies to become competitive and skyrocket their growth, they need to leverage Al/ML to develop predictive models to forecast sales in the future,In this project, i worked as a data scientist with data from 1115 stores to predict future sales",
      linkArticle: null,
      linkFigma: null,
      linkPreview:
        "https://colab.research.google.com/drive/1yTF8Yzzn3jtSFVm8NQJQ8qkTGG98G25a#scrollTo=653W5Abck9mf",
      linkGithub: null,
      technologies: ["Python", "fbProphet"],
      tags: ["Data Analysis", "Ai", "Prediction"],
    },
    {
      image: Operations,
      title: "detect and classify chest disease",
      description:
        "using collected extensive X-Ray chest data,i developed a model that could detect and classify the diseases in less than 1 minute.",
      linkFigma: null,
      linkPreview:
        "https://colab.research.google.com/drive/1Evs_0tF2uenTA5nsqVdhjx3c5r_AYhcE/",
      linkArticle: null,
      linkGithub: null,
      technologies: ["Python", "CNN"],
      tags: ["Data Analysis", "Ai", "Prediction"],
    },
    {
      image: WebScraping,
      title: "Web Scraping AI Agent",
      description:
        "Streamlit app allows you to scrape a website using OpenAI API and the scrapegraphai library",
      linkFigma: null,
      linkArticle: null,
      linkPreview: null,
      linkGithub: "https://github.com/SaYanZz0/Web-scraping-Ai-Agent",
      technologies: ["Python", "OpenAi"],
      tags: ["Web Scraping", "AI Agent", "Personal project"],
    },
    {
      image: MedicalProject,
      title:
        "Medical appointement app redefines health management, delivering a top-tier user experience for iOS and Android.",
      description:
        "a digital platform designed to streamline the process of scheduling, managing, and tracking healthcare appointments. It allows patients to book consultations with doctors, specialists, or healthcare providers.",
      linkFigma:
        "https://www.figma.com/design/eGlc2caEoLhz4Tx3jFz7n3/Medical-Health-Mobile-App-Dermatology-App-Ui-Kit-Doctor-Mobile-App-(Community)?node-id=0-1&p=f&t=UWQUResiEWr2wcAL-0",
      linkArticle: null,
      linkPreview: null,
      linkGithub: null,
      technologies: ["Flutter", "Nodejs", "MongoDB"],
      tags: ["Mobile app", "Personal project"],
    },
    {
      image: Manufacturing,
      title: "detect and localize defects found in Steel manufacturing",
      description:
        "Detecting defects would help in improving the quality of manufacturing as well as in reducing the waste due to production defects.Using 12600 images that contain 4 types of defects",
      linkFigma: null,
      linkPreview:
        "https://colab.research.google.com/drive/1etEOZBgD8fgXf5qqZuNPr3MzErBkD4xG?usp=sharing#scrollTo=tjIiJdM4u1IE",
      linkArticle: null,
      linkGithub: null,
      technologies: ["Python", "ResUnet", "Deep Learning"],
      tags: ["Data analysis", "AI"],
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
