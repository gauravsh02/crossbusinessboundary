"use client";

import React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
// import { FormDescription, FormLabel} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react"


import { sendEnquiryEmail } from "@/app/actions/sendmail";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/ );

const FormSchema = z.object({
  name: z.string().min(2, { message: "At least 2 characters." }),
  email: z.string().min(1, {message: "This field has to be filled."}),
  mobile: z.string().regex(phoneRegex, 'Invalid Number!')
});

export function EnquiryForm({ enquiryType }: { enquiryType: string }) {

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: ""
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    
    setIsLoading(true);

    const result = await sendEnquiryEmail({...data, enquiryType: enquiryType});
    
    if(result?.error) {
      setIsLoading(false);
      toast.error("Something went wrong");
    } else {
      form.reset({name:"", email:"", mobile:""})
      setIsLoading(false);
      toast.success("Registered");
    }
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
    // toast(JSON.stringify(data));
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="input-group flex p-2 mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input className="form-control border-gray-500 focus:border-teal-500 rounded-none rounded-tl-lg rounded-bl-lg" placeholder="Name" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input className="form-control border-gray-500 focus:border-teal-500 rounded-none" placeholder="Email" type="email" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Username</FormLabel> */}
              <FormControl>
                <Input className="form-control border-gray-500 focus:border-teal-500 rounded-none rounded-tr-lg rounded-br-lg" placeholder="Mobile" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="ml-2 cursor-pointer border-1 border-solid border-gray-500 focus:border-teal-500" disabled={isLoading}>{isLoading? <Loader2 className="animate-spin"/> : ""} Submit</Button>
      </form>
    </Form>
  )
}