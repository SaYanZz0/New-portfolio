
import { Button } from "@/components/ui/button";
import Form from "./Form";
import FormHeader from "./FormHeader";


export default function Contact() {

    return <main id="Contact" className="flex flex-col text-center sm:text-start sm:flex-row items-center justify-between w-full px-4 py-4 sm:px-20 lg:px-40 max-w-[2000px] m-auto bg-primary text-white">
        <FormHeader />
        <Button variant={"outline"} className="text-primary" >
            <a href="mailto:k_ferhati@estin.dz">
                Get in touch now
            </a>
        </Button>
        {/* <main className="px-4 py-10 sm:px-20 lg:px-40 max-w-[2000px] m-auto">
            <Form />
        </main> */}
    </main>
}
