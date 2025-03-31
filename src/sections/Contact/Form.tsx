"use client"

import RHFInput from "@/components/rhf/RHFInput"
import RHFTextarea from "@/components/rhf/RHFTextarea"
import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { object, string } from "yup"
import { useToast } from "@/components/ui/use-toast"


export default function () {
    const { toast } = useToast()
    const contactFormSchema = object({
        email: string().email().required("Please enter a vaild email"),
        subject: string().required("Please enter a subject"),
        content: string().required("Please enter a vaild content")
    })
    const form = useForm({
        resolver: yupResolver(contactFormSchema)
    })

    const onSubmit = async (data: {
        email: string;
        subject: string;
        content: string;
    }) => {
        try {
            toast({
                title: "Message received",
                description: "we will get to you ASAP",
            })
        } catch {
            toast({
                title: "There was an error",
                description: "Please try later",
                variant: "destructive"
            })

        }
    }
    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" md:px-40 flex flex-col items-center justify-center gap-0 w-full">

            <RHFInput
                form={form}
                label="Subject"
                name="subject"
                placeholder="Subject"
            />
            <RHFInput
                form={form}
                label="Email"
                name="email"
                placeholder="example@example.com"
            />
            <RHFTextarea
                form={form}
                label="Message"
                name="content"
                placeholder="I want to ..."
            />
            <Button type="submit" className="py-5 px-6 mt-2" loading={form.formState.isSubmitting}>Send message</Button>
        </form>
    </Form>
}