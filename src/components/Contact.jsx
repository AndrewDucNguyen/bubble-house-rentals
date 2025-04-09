'use client'

import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { personalInformationSchema, schema } from '../lib/schema'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendContactEmail } from '../services/emailService'

const Contact = () => {
    const [currentStep, setCurrentStep] = useState(0)

    const { register, getValues, handleSubmit, reset, setError, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            itemsInterested: [],
            eventDate: new Date(),
            setupTime: "",
            pickupTime: "",
            street: "",
            city: "",
            state: "",
            postal: "",
            eventType: "birthday",
            surfaceType: "grass",
            powerAvailable: "no",
            petStatus: "no",
            eventLocation: "outdoor",
            preferredContact: "text",
            additionalNotes: ""
        },
        resolver: zodResolver(currentStep === 0 ? personalInformationSchema : schema)
    });

    const steps = [
        {
            id: 'Step 1',
            name: 'Personal Information',
        },
        {
            id: 'Step 2',
            name: 'Event Information',
        },
        {
            id: 'Step 3',
            name: 'Preview Information',
        }
    ]

    const previous = () => {
        setCurrentStep(currentStep - 1);
    }

    const next = () => {
        setCurrentStep(currentStep + 1);
    }

    const onSubmit = async (data) => {
        try {
            await sendContactEmail(data);
            toast.success('Form submitted successfully! We will contact you soon.');
            reset();
            setCurrentStep(0);
        } catch (error) {
            console.error('Error:', error);
            toast.error(error.message || 'An error occurred while submitting the form');
            setError("root", {
                message: error.message || "There was an error submitting the form"
            });
        }
    }

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 py-12">
                                <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                                <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                    <div className="sm:col-span-3">
                                        <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-900 ">
                                            First Name <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                {...register('firstName', {
                                                    required: true
                                                })}
                                                type="text"
                                                aria-required='true'
                                                placeholder='First Name'
                                                autoComplete="given-name"
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            />
                                            {errors.firstName && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.firstName.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-900">
                                            Last Name <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                aria-required='true'
                                                {...register('lastName', {
                                                    required: true
                                                })}
                                                placeholder='Last Name'
                                                type="text"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            />
                                            {errors.lastName && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.lastName.message}</div>
                                            )}
                                        </div>
                                    </div>


                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                            Email Address <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                aria-required='true'
                                                {...register('email', {
                                                    required: true
                                                })}
                                                placeholder='info@thebubblehouserentals.com'
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            />
                                            {errors.email && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.email.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="number" className="block text-sm/6 font-semibold text-gray-900">
                                            Phone Number <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                {...register('number', {
                                                    required: true
                                                })}
                                                type="text"
                                                placeholder='(555) 555-5555'
                                                autoComplete="number"
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            />
                                            {errors.number && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.number.message}</div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                );
            case 1:
                return (
                    <>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 py-12">
                                <h2 className="text-base/7 font-semibold text-gray-900">Event Information</h2>
                                <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                    {/* Street */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="street" className="block text-sm/6 font-semibold text-gray-900">
                                            Street <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                {...register('street', {
                                                    required: true
                                                })}
                                                type="text"
                                                autoComplete="address-level1"
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            />
                                            {errors.street && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.street.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* City */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="city" className="block text-sm/6 font-semibold text-gray-900">
                                            City <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                {...register('city', {
                                                    required: true
                                                })}
                                                type="text"
                                                autoComplete="city"
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            />
                                            {errors.city && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.city.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* State */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="state" className="block text-sm/6 font-semibold text-gray-900">
                                            State <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                {...register('state', {
                                                    required: true
                                                })}
                                                type="text"
                                                autoComplete="state"
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            />
                                            {errors.state && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.state.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Zip Code */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm/6 font-semibold text-gray-900">
                                            ZIP Code <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                {...register('postal', {
                                                    required: true
                                                })}
                                                type="text"
                                                autoComplete="postal-code"
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            />
                                            {errors.postal && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.postal.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Item interested in - multi-select checkbox */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="itemsInterested" className="block text-sm/6 font-semibold text-gray-900">
                                            Items Interested In <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2 space-y-2">
                                            <div className="flex items-center">
                                                <input
                                                    {...register('itemsInterested')}
                                                    type="checkbox"
                                                    value="White Castle"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label className="ml-2 block text-base text-gray-900">
                                                    White Castle
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    {...register('itemsInterested')}
                                                    type="checkbox"
                                                    value="White Bounce House w/ Slide"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label className="ml-2 block text-base text-gray-900">
                                                    White Bounce House w/ Slide
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    {...register('itemsInterested')}
                                                    type="checkbox"
                                                    value="Square Bonuce House"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label className="ml-2 block text-base text-gray-900">
                                                    Square Bonuce House
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    {...register('itemsInterested')}
                                                    type="checkbox"
                                                    value="Classic Bounce House"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label className="ml-2 block text-base text-gray-900">
                                                    Classic Bounce House
                                                </label>
                                            </div>
                                        </div>
                                        {errors.itemsInterested && (
                                            <div className="text-red-500 mt-1 sm:text-sm/6">{errors.itemsInterested.message}</div>
                                        )}
                                    </div>

                                    {/* event date */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="eventDate" className="block text-sm/6 font-semibold text-gray-900">
                                            Event Date <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                aria-required='true'
                                                {...register('eventDate', {
                                                    required: true,
                                                    valueAsDate: true
                                                })}
                                                type="date"
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            />
                                            {errors.eventDate && (
                                                <div className="text-red-500 mt-1">{errors.eventDate.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* event type - dropdown */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="eventType" className="block text-sm/6 font-semibold text-gray-900">
                                            Event Type <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                {...register('eventType', {
                                                    required: true
                                                })}
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            >
                                                <option value="birthday">Birthday</option>
                                                <option value="wedding">Wedding</option>
                                                <option value="party">Party</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {errors.eventType && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.eventType.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* surface type - dropdown*/}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="surfaceType" className="block text-sm/6 font-semibold text-gray-900">
                                            Surface Type <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                {...register('surfaceType', {
                                                    required: true
                                                })}
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            >
                                                <option value="grass">Grass</option>
                                                <option value="hard floor">Hard floor</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {errors.surfaceType && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.surfaceType.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* power available */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="powerAvailable" className="block text-sm/6 font-semibold text-gray-900">
                                            Power Available <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                {...register('powerAvailable', {
                                                    required: true
                                                })}
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            >
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                            {errors.powerAvailable && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.powerAvailable.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* pets */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="petStatus" className="block text-sm/6 font-semibold text-gray-900">
                                            Do you have pets? <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                {...register('petStatus', {
                                                    required: true
                                                })}
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            >
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                            {errors.petStatus && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.petStatus.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* indoor/outdoor */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="eventLocation" className="block text-sm/6 font-semibold text-gray-900">
                                            Event Location <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                {...register('eventLocation', {
                                                    required: true
                                                })}
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            >
                                                <option value="indoor">Indoor</option>
                                                <option value="outdoor">Outdoor</option>
                                            </select>
                                            {errors.eventLocation && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.eventLocation.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Setup time */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="setupTime" className="block text-sm/6 font-semibold text-gray-900">
                                            Setup Time <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                aria-required='true'
                                                {...register('setupTime', {
                                                    required: true
                                                })}
                                                type="time"
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            />
                                            {errors.setupTime && (
                                                <div className="text-red-500 mt-1">{errors.setupTime.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Pickup time */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="pickupTime" className="block text-sm/6 font-semibold text-gray-900">
                                            Pickup Time <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                aria-required='true'
                                                {...register('pickupTime', {
                                                    required: true
                                                })}
                                                type="time"
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            />
                                            {errors.pickupTime && (
                                                <div className="text-red-500 mt-1">{errors.pickupTime.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* preferred contact - dropdown*/}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="preferredContact" className="block text-sm/6 font-semibold text-gray-900">
                                            Preferred Contact <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                {...register('preferredContact', {
                                                    required: true
                                                })}
                                                className="block w-full rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            >
                                                <option value="text">Text</option>
                                                <option value="call">Call</option>
                                                <option value="email">Email</option>
                                            </select>
                                            {errors.preferredContact && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.preferredContact.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* additional note */}
                                    <div className="sm:col-span-6">
                                        <label htmlFor="additionalNotes" className="block text-sm/6 font-semibold text-gray-900">
                                            Additional Notes
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                {...register('additionalNotes',
                                                )}
                                                className="block w-full min-h-24 rounded-md bg-white shadow-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                                            >
                                            </textarea>
                                            {errors.additionalNotes && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.additionalNotes.message}</div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                )
            case 2:
                return (
                    <>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 py-12">
                                <h2 className="text-base/7 font-semibold text-gray-900">Preview Information</h2>
                                <p className="mt-1 text-sm/6 text-gray-600">Please preview your information before submitting.</p>

                                <div className="flex flex-row gap-y-4 sm:flex-col mt-10">
                                    <div className='flex flex-col sm:flex-row'>
                                        <div className='w-full sm:w-1/2'>
                                            <h3 className="font-semibold mb-5">Personal Information</h3>
                                            <p><span className='font-semibold'>Name:</span> {getValues('firstName')} {getValues('lastName')}</p>
                                            <p><span className='font-semibold'>Email:</span> {getValues('email')}</p>
                                            <p><span className='font-semibold'>Phone:</span> {getValues('number')}</p>
                                        </div>


                                    </div>

                                    <div className="sm:col-span-2 mt-4">
                                        <h3 className="font-semibold mb-5">Event Information</h3>
                                        <p><span className='font-semibold'>Event Date:</span> {getValues('eventDate')?.toLocaleDateString()}</p>
                                        <p><span className='font-semibold'>Setup Time:</span> {getValues('setupTime')}</p>
                                        <p><span className='font-semibold'>Pickup Time:</span> {getValues('pickupTime')}</p>
                                        <p><span className='font-semibold'>Items Interested:</span> {getValues('itemsInterested')?.join(', ')}</p>
                                        <p><span className='font-semibold'>Surface Type:</span> {getValues('surfaceType')}</p>
                                        <p><span className='font-semibold'>Event Type:</span> {getValues('eventType')}</p>
                                        <p><span className='font-semibold'>Power Availability:</span> {getValues('powerAvailable')}</p>
                                        <p><span className='font-semibold'>Event Location:</span> {getValues('eventLocation')}</p>
                                        <p><span className='font-semibold'>Pets:</span> {getValues('petStatus')}</p>
                                        <p><span className='font-semibold'>Preferred Contact:</span> {getValues('preferredContact')}</p>
                                    </div>
                                    <div className='w-full sm:w-1/2'>
                                        <h3 className="font-semibold">Address:</h3>
                                        <p>{getValues('street')}</p>
                                        <p>{getValues('city')}, {getValues('state')} {getValues('postal')}</p>
                                    </div>

                                    <div>
                                        <h3 className='font-semibold'>Additional Notes:</h3>
                                        <p>{getValues('additionalNotes') || 'N/A'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
        }
    }

    return (

        <div id="contact" className="isolate px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center pb-10">
                <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Contact Us</h2>
            </div>
            <div className='flex bg-primaryLightest px-6 py-12 rounded-lg w-full sm:mx-auto max-w-7xl'>
                <form onSubmit={handleSubmit(onSubmit)} method="post" className='flex flex-col w-full mx-auto my-16 max-w-4xl sm:my-20' noValidate>
                    <nav aria-label="Progress">
                        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
                            {steps.map((step, index) => (
                                <li key={step.name} className="md:flex-1">
                                    {currentStep > index ? (
                                        <div
                                            className="group flex flex-col border-l-4 border-secondaryDark py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                                        >
                                            <span className="text-sm font-medium text-secondaryDark">{step.id}</span>
                                            <span className="text-sm font-medium">{step.name}</span>
                                        </div>
                                    ) : currentStep === index ? (
                                        <div
                                            className="flex flex-col border-l-4 border-secondary py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                                        >
                                            <span className="text-sm font-medium text-secondaryDark">{step.id}</span>
                                            <span className="text-sm font-medium">{step.name}</span>
                                        </div>
                                    ) : (
                                        <div
                                            className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                                        >
                                            <span className="text-sm font-medium text-gray-500">{step.id}</span>
                                            <span className="text-sm font-medium">{step.name}</span>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>

                    {renderStep()}

                    <div className='flex items-center justify-center gap-x-6 mt-12'>

                        {currentStep > 0 && (
                            <button
                                type="button"
                                onClick={previous}
                                className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-secondaryLight"
                            >
                                Previous
                            </button>
                        )}
                        {currentStep < 2 && (
                            <button
                                type="button"
                                onClick={handleSubmit(next)}
                                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-primaryLight"
                            >
                                Next
                            </button>
                        )}

                        {currentStep === 2 && (
                            <button
                                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-primaryLight"
                                disabled={isSubmitting}
                                type="submit"
                                onClick={handleSubmit(onSubmit)}
                            >
                                {isSubmitting ? "Loading..." : "Submit"}
                            </button>
                        )}
                    </div>

                    {errors.root && <div className='text-red-500 mt-1'>{errors.root.message}</div>}
                </form >

            </div >
        </div>
    )
}

export default Contact