import { z } from 'zod';

export const personalInformationSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().min(1, 'Email is required').email('Email is invalid'),
    number: z.string().min(1, 'Phone number is required')
});

export const eventInformationSchema = z.object({
    itemInterested: z.string(),
    eventDate: z.coerce.date(),
    setupTime: z.string(),
    pickupTime: z.string(),
    street: z.string().min(1, 'Street address is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(2, 'State is required'),
    postal: z.string().min(5, 'Postal is required'),
    eventType: z.string(),
    surfaceType: z.string(),
    powerAvailable: z.string(),
    additionalNotes: z.string(),
    preferredContact: z.string()
})

export const schema = personalInformationSchema.merge(eventInformationSchema);
