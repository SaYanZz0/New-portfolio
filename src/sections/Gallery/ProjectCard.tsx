"use client"


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectType } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
export default function ({ project }: { project: ProjectType }) {
    const boxRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: boxRef,
        offset: ["0.5 1", "2.4 1"]
    })

    const opacityAnimation = useTransform(scrollYProgress, [0, 0.4, 0.7, 0.9], [0, 1, 1, 1])
    const yPositionAnimation = useTransform(scrollYProgress, [0, 0.4, 0.7, 0.9], [200, 0, 0, 0])
    const scaleAnimation = useTransform(scrollYProgress, [0, 0.4, 0.7, 0.9], [0.9, 1, 1, 1])

    return (
      <motion.div
        style={{
          opacity: opacityAnimation,
          y: yPositionAnimation,
          scale: scaleAnimation,
        }}
        ref={boxRef}
        className="flex flex-col xl:flex-row items-center justify-between w-full lg:h-fit gap-4 lg:gap-10 bg-white"
      >
        <div className="w-full xl:w-6/12  max-h-[600px]">
          <Image
            src={project.image}
            height={1000}
            width={1000}
            alt="Project thumbnail"
            className="object-cover h-full"
          />
        </div>
        <div className="w-full xl:w-6/12 flex flex-col items-center justify-start h-full text-center gap-4 p-6">
          <div className="inline-flex gap-2 flex-wrap">
            {project.tags.map((tag: string) => (
              <Badge>{tag}</Badge>
            ))}
          </div>
          <h4 className="text-2xl font-bold">{project.title}</h4>
          <p>{project.description}</p>
          <div className="inline-flex gap-4 flex-wrap">
            {project.technologies?.map?.((tech) => (
              <span className="font-medium">{tech}</span>
            ))}
          </div>
          <div className="inline-flex gap-4 flex-wrap">
            {project.linkPreview != null && (
              <Button>
                <Link href={project.linkPreview} legacyBehavior>
                  <a target="_blank">Live preview</a>
                </Link>
              </Button>
            )}
            {project.linkArticle != null && (
              <Button>
                <Link href={project.linkArticle} legacyBehavior>
                  <a target="_blank">View description</a>
                </Link>
              </Button>
            )}
            {project.linkFigma != null && (
              <Button>
                <Link href={project.linkFigma} legacyBehavior>
                  <a target="_blank">View design</a>
                </Link>
              </Button>
            )}
            {project.linkGithub != null && (
              <Button variant={"outline"}>
                <Link href={project.linkGithub} legacyBehavior>
                  <a target="_blank">View code</a>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    );
}