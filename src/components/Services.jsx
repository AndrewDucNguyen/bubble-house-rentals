import { Fragment } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'


const tabs = [
    {
        name: 'Bounce House',
        features: [
            {
                name: 'White Castle',
                description:
                    'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
                imageSrc: 'src/assets/images/white_castle.jpg',
                imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
            },
            {
                name: 'White Castle',
                description:
                    'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
                imageSrc: 'src/assets/images/white_bounce_house.jpg',
                imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
            },
            {
                name: 'White Castle',
                description:
                    'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
                imageSrc: 'src/assets/images/white_bounce_house_2.jpg',
                imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
            },
            {
                name: 'White Castle',
                description:
                    'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
                imageSrc: 'src/assets/images/white_bounce_house_3.png',
                imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
            },
        ],
    },
    {
        name: 'Balloons',
        features: [
            {
                name: 'Natural wood options',
                description:
                    'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.',
                imageSrc: 'src/assets/images/white_castle_balloons.jpg',
                imageAlt:
                    'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
            },
        ],
    },
    {
        name: 'Accessories',
        features: [
            {
                name: 'Helpful around the home',
                description:
                    "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
                imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-feature-06-detail-03.jpg',
                imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
            },
        ],
    },
    {
        name: 'Others',
        features: [
            {
                name: "Everything you'll need",
                description:
                    'The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.',
                imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-feature-06-detail-04.jpg',
                imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
            },
        ],
    },
]

export default function Services() {
    return (
        <div id="services" className="bg-white">
            <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Services
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Our high-quality inflatable bounce houses, balloons, and accessories are designed with safety and fun in mind. Each product is made from durable, lead-free materials that meet industry safety standards. We ensure proper setup for a secure experience, so all you need to do is enjoy your event without any worries.
                        </p>
                    </div>

                    <TabGroup className="mt-4">
                        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                            <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                                <TabList className="-mb-px flex space-x-10">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            className="border-b-2 border-transparent focus-visible:outline-none py-6 text-sm font-medium whitespace-nowrap text-gray-500 hover:border-gray-300 hover:text-gray-700 data-selected:border-primary data-selected:text-primary"
                                        >
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                        </div>

                        <TabPanels as={Fragment}>
                            {tabs.map((tab) => (
                                <TabPanel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                                    {tab.features.map((feature) => (
                                        <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                                            <div className="mt-6 lg:col-span-5 lg:mt-0">
                                                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                                                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                            </div>
                                            <div className="lg:col-span-7">
                                                <img
                                                    alt={feature.imageAlt}
                                                    src={feature.imageSrc}
                                                    className="aspect-2/1 w-full rounded-lg bg-gray-100 object-cover sm:aspect-3/2"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </TabGroup>
                </div>
            </section>
        </div>
    )
}
