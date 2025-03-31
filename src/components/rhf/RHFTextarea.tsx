
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
export default function ({ form, name, placeholder, label }: { form: any, name: string, label: string, placeholder: string }) {
    return <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <FormItem className="w-full">
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Textarea placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
}