'use client'

import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

import { useForm } from 'react-hook-form'
import { personalInformationSchema, schema } from '../lib/schema'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'



const Contact = () => {
    const [currentStep, setCurrentStep] = useState(0)

    const { register, getValues, handleSubmit, reset, setError, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            itemInterested: "",
            eventDate: new Date(),
            setupTime: "",
            pickupTime: "",
            street: "",
            city: "",
            state: "",
            postal: "",
            eventType: "",
            surfaceType: "",
            powerAvailable: "",
            preferredContact: "",
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
            name: 'Preview',
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
            const response = await fetch('/api/sendContact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Failed to submit form")
            }

            toast.success('Successful!');
            reset();
            setStep(0);
        } catch (error) {
            toast.warn('Error...');
            console.log('Error:', errors);
            setError("root", {
                message: "There was an error..."
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
                        <div>
                            <div>
                                <h2 className="text-base/7 font-semibold text-gray-900">Event Information</h2>
                                <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                    <div className="sm:col-span-2">
                                        <label htmlFor="city" className="block text-sm/6 font-semibold text-gray-900">
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
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                            {errors.city && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.city.message}</div>
                                            )}
                                        </div>
                                    </div>

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
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                            {errors.state && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.state.message}</div>
                                            )}
                                        </div>
                                    </div>

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
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                            {errors.postal && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.postal.message}</div>
                                            )}
                                        </div>
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
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                            {errors.eventDate && (
                                                <div className="text-red-500 mt-1">{errors.eventDate.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* event type - dropdown */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="eventType" className="block text-sm/6 font-semibold text-gray-900">
                                            Event Type <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                {...register('eventType', {
                                                    required: true
                                                })}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm/6"
                                            >
                                                <option>Birthday</option>
                                                <option>Wedding</option>
                                                <option>Party</option>
                                                <option>Other</option>
                                            </select>
                                            {errors.eventType && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.eventType.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* surface type - dropdown*/}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="surfaceType" className="block text-sm/6 font-semibold text-gray-900">
                                            Surface Type <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                {...register('surfaceType', {
                                                    required: true
                                                })}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm/6"
                                            >
                                                <option>Grass</option>
                                                <option>Hard floor</option>
                                                <option>other</option>
                                            </select>
                                            {errors.surfaceType && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.surfaceType.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Item interested in - checkbox*/}

                                    {/* power available - dropdown */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="powerAvailable" className="block text-sm/6 font-semibold text-gray-900">
                                            Power Available <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                {...register('powerAvailable', {
                                                    required: true
                                                })}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm/6"
                                            >
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                            {errors.powerAvailable && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.powerAvailable.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Setup time - time?*/}
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
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
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
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                            {errors.pickupTime && (
                                                <div className="text-red-500 mt-1">{errors.pickupTime.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* preferred contact - dropdown*/}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="preferredCotnact" className="block text-sm/6 font-semibold text-gray-900">
                                            Preferred Contact <em className='text-red-500' aria-required='true'>*</em>
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                {...register('preferredCotnact', {
                                                    required: true
                                                })}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm/6"
                                            >
                                                <option>Text</option>
                                                <option>Call</option>
                                                <option>Email</option>
                                            </select>
                                            {errors.preferredCotnact && (
                                                <div className="text-red-500 mt-1 sm:text-sm/6">{errors.preferredCotnact.message}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* additional note */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="additionalNotes" className="block text-sm/6 font-semibold text-gray-900">
                                            Additional Notes
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                {...register('additionalNotes',
                                                )}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm/6"
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
        }
    }

    return (

        //         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        //             <div>
        //                 <label htmlFor="first-name" className="block text-sm/6 font-semibold">
        //                     First name
        //                 </label>
        //                 <div className="mt-2.5">
        //                     <input
        //                         id="first-name"
        //                         name="first-name"
        //                         type="text"
        //                         autoComplete="given-name"
        //                         className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
        //                     />
        //                 </div>
        //             </div>
        //             <div>
        //                 <label htmlFor="last-name" className="block text-sm/6 font-semibold">
        //                     Last name
        //                 </label>
        //                 <div className="mt-2.5">
        //                     <input
        //                         id="last-name"
        //                         name="last-name"
        //                         type="text"
        //                         autoComplete="family-name"
        //                         className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
        //                     />
        //                 </div>
        //             </div>
        //             <div className="sm:col-span-2">
        //                 <label htmlFor="company" className="block text-sm/6 font-semibold">
        //                     Company
        //                 </label>
        //                 <div className="mt-2.5">
        //                     <input
        //                         id="company"
        //                         name="company"
        //                         type="text"
        //                         autoComplete="organization"
        //                         className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
        //                     />
        //                 </div>
        //             </div>
        //             <div className="sm:col-span-2">
        //                 <label htmlFor="email" className="block text-sm/6 font-semibold">
        //                     Email
        //                 </label>
        //                 <div className="mt-2.5">
        //                     <input
        //                         id="email"
        //                         name="email"
        //                         type="email"
        //                         autoComplete="email"
        //                         className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
        //                     />
        //                 </div>
        //             </div>
        //             <div className="sm:col-span-2">
        //                 <label htmlFor="phone-number" className="block text-sm/6 font-semibold">
        //                     Phone number
        //                 </label>
        //                 <div className="mt-2.5">
        //                     <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-black">
        //                         <div className="grid shrink-0 grid-cols-1 focus-within:relative">
        //                             <select
        //                                 id="country"
        //                                 name="country"
        //                                 autoComplete="country"
        //                                 aria-label="Country"
        //                                 className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 sm:text-sm/6"
        //                             >
        //                                 <option>US</option>
        //                                 <option>CA</option>
        //                                 <option>EU</option>
        //                             </select>
        //                             <ChevronDown
        //                                 aria-hidden="true"
        //                                 className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        //                             />
        //                         </div>
        //                         <input
        //                             id="phone-number"
        //                             name="phone-number"
        //                             type="text"
        //                             placeholder="123-456-7890"
        //                             className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
        //                         />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="sm:col-span-2">
        //                 <label htmlFor="message" className="block text-sm/6 font-semibold">
        //                     Message
        //                 </label>
        //                 <div className="mt-2.5">
        //                     <textarea
        //                         id="message"
        //                         name="message"
        //                         rows={4}
        //                         className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
        //                         defaultValue={''}
        //                     />
        //                 </div>
        //             </div>
        //             <Field className="flex gap-x-4 sm:col-span-2">
        //                 <div className="flex h-6 items-center">
        //                     <Switch
        //                         checked={agreed}
        //                         onChange={setAgreed}
        //                         className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black data-checked:bg-black"
        //                     >
        //                         <span className="sr-only">Agree to policies</span>
        //                         <span
        //                             aria-hidden="true"
        //                             className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
        //                         />
        //                     </Switch>
        //                 </div>
        //                 <Label className="text-sm/6 text-gray-600">
        //                     By selecting this, you agree to our{' '}
        //                     <a href="#" className="font-semibold text-black">
        //                         privacy&nbsp;policy
        //                     </a>
        //                     .
        //                 </Label>
        //             </Field>
        //         </div>
        //         <div className="mt-10">
        //             <button
        //                 type="submit"
        //                 className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold  shadow-xs hover:bg-primaryLight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        //             >
        //                 Let's talk
        //             </button>
        //         </div>
        //     </form>
        // </div>
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

                    <div className='flex items-center justify-center gap-x-6'>

                        {currentStep > 0 && (
                            <button
                                type="button"
                                onClick={previous}
                                className='rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-200'
                            >
                                Previous
                            </button>
                        )}
                        {currentStep < 2 && (
                            <button
                                type="button"
                                onClick={handleSubmit(next)}
                                className='rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                            >
                                Next
                            </button>
                        )}

                        {currentStep === 2 && (
                            <button
                                className='rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                                disabled={isSubmitting}
                                type="submit"
                                onClick={handleSubmit(onSubmit)}
                            >
                                {isSubmitting ? "Loading..." : "Submit"}
                            </button>
                        )}
                    </div>

                    {errors.root && <div className='text-red-500 mt-1'>errors.root.message</div>}
                </form >

            </div >
        </div>
    )
}


export default Contact