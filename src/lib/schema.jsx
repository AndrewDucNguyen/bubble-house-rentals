import { z } from 'zod';

export const personalInformationSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().min(1, 'Email is required').email('Email is invalid'),
    number: z.string().min(1, 'Phone number is required')
});

export const eventInformationSchema = z.object({
    itemsInterested: z.array(z.string()).min(1, 'Please select at least one item'),
    eventDate: z.coerce.date({
        required_error: 'Event date is required',
        invalid_type_error: 'Please select a valid date'
    }),
    setupTime: z.string().min(1, 'Setup time is required'),
    pickupTime: z.string().min(1, 'Pickup time is required'),
    street: z.string().min(1, 'Street is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(2, 'State is required'),
    postal: z.string().min(5, 'ZIP code is required'),
    eventType: z.string().min(1, 'Event type is required'),
    surfaceType: z.string().min(1, 'Surface type is required'),
    powerAvailable: z.string().min(1, 'Power availability is required'),
    petStatus: z.string().min(1, 'Pet information is required'),
    eventLocation: z.string().min(1, 'Event location is required'),
    preferredContact: z.string().min(1, 'Preferred contact method is required'),
    additionalNotes: z.string().optional()
})

export const schema = personalInformationSchema.merge(eventInformationSchema);
