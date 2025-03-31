
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
export default function ({ form, name, placeholder, label }: { form: any, name: string, label: string, placeholder: string }) {


    return <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <FormItem className="w-full">
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
}