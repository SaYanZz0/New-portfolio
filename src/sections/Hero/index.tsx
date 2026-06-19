import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../images/HeroImage.jpg"

export default function Hero() {
    return <main className="px-4 py-10 sm:px-20 lg:px-40 max-w-[2000px] m-auto flex flex-col md:flex-row justify-between items-center h-fit md:h-[calc(100dvh-73px)] w-full gap-10">
        <div className="w-full md:w-6/12 space-y-3">
            <h1 className="text-5xl leading-normal font-bold">
                Empowering Ideas Online
            </h1>
            <p>
            Transforming Vision into Innovation: Precision-Crafted Solutions for Your Success
            </p>
            <CTAs />
        </div>
        <div className="w-full md:w-6/12 " >
            <Image
                className="max-w-[100%] sm:max-h-[650px] object-cover rounded grayscale-[50%] click:grayscale-0 sm:hover:grayscale-0 transition-all"
                src={HeroImage}
                alt="hero image"
                height={1000}
                width={1000}
            />
        </div>
    </main>
}


const CTAs = () => {
    return <div className="inline-flex gap-4 flex-wrap">
        <Button asChild>
            <Link href={"#Projects"}>
                Explore My Work
            </Link>
        </Button>
        <Button asChild variant={"outline"}>
            <Link href={"#Contact"}>
                Let's Build Something Amazing
            </Link>
        </Button>
    </div>
}

