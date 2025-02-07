import { Check } from 'lucide-react'

const steps = [
    {
        id: '01',
        name: 'Book Your Date',
        description: 'Fill out our simple inquiry form to check avaliability.'
    },
    {
        id: '02',
        name: 'Choose Your Bounce House',
        description: 'Pick the style that best fits your event and add-ons.'
    },
    {
        id: '03',
        name: 'We Deliver & Set up',
        description: 'Our team handles everything for a stress-free experience.'
    },
    {
        id: '04',
        name: 'Enjoy & Make Memories',
        description: 'Faucibus nec enim leo et.'
    },
    {
        id: '05',
        name: 'We Pack & Clean up',
        description: 'Iusto et officia maiores porro ad non quas.'
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Process() {
    return (

        <div id="features" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <nav aria-label="Progress" className='col-span-3'>
                        <ol role="list" className="overflow-hidden">
                            {steps.map((step, stepIdx) => (
                                <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
                                    <>
                                        {stepIdx !== steps.length - 1 ? (
                                            <div aria-hidden="true" className="absolute top-4 left-6 mt-0.5 -ml-px h-full w-0.5 bg-indigo-600" />
                                        ) : null}
                                        <div className="group relative flex items-start">
                                            <span className="flex h-12 items-center">
                                                <span className="relative z-10 flex size-12 items-center justify-center rounded-full bg-white border-gray-300 border-2">
                                                    <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                                                </span>
                                            </span>
                                            <span className="ml-4 flex min-w-0 flex-col">
                                                <span className="text-sm font-medium">{step.name}</span>
                                                <span className="text-sm text-gray-500">{step.description}</span>
                                            </span>
                                        </div>
                                    </>
                                </li>
                            ))}
                        </ol>
                    </nav>
                    <div className="col-span-2">
                        <h2 className="text-base/7 font-semibold text-indigo-600">Everything you need</h2>
                        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                            All-in-one platform
                        </p>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
                            dolor cupiditate blanditiis ratione.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
