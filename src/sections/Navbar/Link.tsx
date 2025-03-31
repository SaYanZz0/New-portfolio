
import Link from "next/link";
import { LinkType } from "@/types/Link";


export default function ({ link: { link, placeholder } }: { link: LinkType }) {


    return <Link href={link} className="h-fit group">
        <span className="transition-all text-base group font-medium">
            {placeholder}
        </span>
        <div className="h-[3px] w-0 bg-black group group-hover:w-8 transition-all" />
    </Link >
}