"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { saveContactMessage } from "@/ai/flows/contact";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export const ContactFormSchema = z.object({
  name: z.string().describe('The full name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person.'),
  location: z.string().optional().describe('The location of the person.'),
  message: z.string().describe('The message content.'),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
  setIsSubmitting(true);
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxyDKhVvGYx6TNZL1FYMk4Rik0mh7s9GUAIwi_uV_gT495-y5RLs6_MdrcCMdvRLF7K/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you shortly.",
      });
      form.reset();
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem sending your message. Please try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="City, Country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us how we can help you grow..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg" disabled={isSubmitting}>
           {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
