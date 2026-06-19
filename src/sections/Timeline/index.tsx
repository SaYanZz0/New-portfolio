"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function () {
  const data = [
    {
      orientation: "left",
      title: "Data Consultant",
      company: "AVISIA",
      link: "https://www.avisia.fr/",
      description:
        "Contributed to the design and maintenance of scalable data pipelines for a banking client. Developed and optimized data workflows using Python and SQL to process, transform, and integrate financial and customer data, ensuring data quality and reliability for analytics and business operations.",
      mounth: "MAR",
      year: 2026,
    },
        {
      title: "Research Intern",
      company: "LIRIS laboratory",
      link: "https://liris.cnrs.fr/",
      description:
        "In this internship, I will focus on the dynamic construction of social communities by leveraging machine learning algorithms. The objective is to develop models that can automatically detect, form, and evolve communities within a social network based on user interactions, behaviors, and shared interests.",
      mounth: "Mar - Aug",
      orientation: "right",
      year: 2025,
    },
    {
      title: "Data Engineer / BI Intern",
      company: "NATIXIS",
      link: "https://www.interepargne.natixis.com/",
      description:
        "Collected, integrated, and transformed data from CRM and ERP systems through ETL processes. Designed and implemented a Data Warehouse using SQL Server and Power BI, and developed interactive dashboards to support data-driven decision-making and business reporting.",
      mounth: "Jun - Sep",
      orientation: "left",
      year: 2024,
    },
    {
      title: "Software ingenieur",
      company: "FINOUTSOURCE",
      link: "https://www.finoutsource.dz/en_AU",
      mounth: "Jun - Sep",
      description:
        "in this internship we are developing a finance app called FinSaver using Flutter and Node.js/Express.js designed to help users track their expenses and set savings goals for specific purposes",
      orientation: "right",
      year: 2023,
    },
  ];

  const Bubble = ({
    event: { orientation, mounth, year, title, description, company, link },
    index,
  }: {
    event: any;
    index: any;
  }) => {
    const boxRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: boxRef,
      offset: ["1 1", "2.5 1"],
    });
    const opacityAnimationBubble = useTransform(
      scrollYProgress,
      [0, 0.4, 0.7, 0.9],
      [0, 0, 1, 1]
    );
    const opacityAnimationTitle = useTransform(
      scrollYProgress,
      [0, 0.4, 0.75, 0.9],
      [0, 0, 0.7, 1]
    );
    const opacityAnimationSub = useTransform(
      scrollYProgress,
      [0, 0.4, 0.8, 0.9],
      [0, 0, 0.7, 1]
    );

    return (
      <motion.div
        ref={boxRef}
        style={{
          opacity: opacityAnimationBubble,
        }}
        className={cn(
          orientation === "right",
          "flex flex-col items-center sm:grid grid-cols-9 grid-rows-1 gap-4 sm:gap-20 md:gap-6 mt-12 sm:mt-0"
        )}
      >
        <div className="h-full col-start-5 col-span-1 row-start-1 flex flex-col items-center justify-end">
          {index != 0 && (
            <div
              className={cn(
                "w-1 h-[calc(100%-5rem)] hidden sm:block bg-primary"
              )}
            />
          )}
          <div className="h-20 text-xs aspect-square  bg-primary rounded-full text-white flex flex-col items-center justify-center gap-1">
            <div className="opacity-1 flex flex-col items-center justify-center gap-1">
              <span>{mounth}</span>
              <span className="font-bold">{year}</span>
            </div>
          </div>
        </div>
        <div
          className={cn(
            orientation === "left"
              ? "col-start-6 col-span-4 row-span-1"
              : "col-start-1 col-span-4 row-span-1",
            "w-full flex flex-col gap-6 items-center sm:items-end justify-center z-10 sm:mt-12"
          )}
        >
          <div
            className={cn(
              orientation === "left"
                ? "text-center sm:text-start"
                : "text-center sm:text-end"
            )}
          >
            <motion.div
              style={{
                opacity: opacityAnimationTitle,
              }}
            >
              <h5 className="text-slate-800 text-base font-bold">
                {title}{" "}
                {company && (
                  <Link href={link} legacyBehavior>
                    <a
                      target="_blank"
                      className="hover:underline transition-all"
                    >
                      {`@${company}`}
                    </a>
                  </Link>
                )}
              </h5>
            </motion.div>
            <motion.div
              className="opacity-1"
              style={{
                opacity: opacityAnimationSub,
              }}
            >
              <p className="text-slate-500 text-base ">{description} </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };
  return (
    <>
      <div className="h-fit flex flex-col items-center justify-center f px-4 sm:px-20 lg:px-40 max-w-[2000px] space-y-5 m-auto">
        <div id="Timeline" className="text-center space-y-4 py-5">
          <h3 className="font-bold text-4xl">Journey Through Innovation</h3>
          <p>
            Unveiling the Evolution of My Creative Odyssey in Web and Mobile
            Development
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="">
            {data.map((event, index) => {
              return (
                <>
                  <Bubble event={event} index={index} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
