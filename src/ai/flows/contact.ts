'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import type {ContactFormData} from '@/components/ContactForm';
import {ContactFormSchema} from '@/components/ContactForm';


export async function saveContactMessage(
  data: ContactFormData
): Promise<{success: boolean}> {
  return await saveContactMessageFlow(data);
}

const saveContactMessageFlow = ai.defineFlow(
  {
    name: 'saveContactMessageFlow',
    inputSchema: ContactFormSchema,
    outputSchema: z.object({success: z.boolean()}),
  },
  async (data) => {
    // For now, we'll just log the data to the server console.
    // In a real application, you would save this to a database (e.g., Firestore).
    console.log('New contact form submission:', data);
    
    // In the future, you could add code here to:
    // 1. Save to a Firestore database.
    // 2. Send an email notification.
    // 3. Add the contact to a CRM.

    return {success: true};
  }
);
