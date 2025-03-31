import Link from "next/link";
import { ReactElement } from "react";
import { Button } from "@/components/ui/button";


export default function ({ icon, link, variant }: { icon: ReactElement, link: string, variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined }) {


    return <Button variant={variant}>
        <Link href={link} legacyBehavior>
            <a target="_blank">
                {icon}
            </a>
        </Link>
    </Button>
}