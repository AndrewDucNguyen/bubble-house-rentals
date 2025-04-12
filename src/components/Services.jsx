

const bounceHouses = [
    {
        name: 'White Castle',
        description:
            'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
        imagepublic: 'public/assets/images/white_castle.jpg',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
    },
    {
        name: 'White Bounce House w/ Slide',
        description:
            'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
        imagepublic: 'public/assets/images/white_bounce_house_slide.jpg',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
    },
    {
        name: 'Square Bounce House',
        description:
            'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
        imagepublic: 'public/assets/images/square_bounce_house.jpg',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
    },
    {
        name: 'Classic Bounce House',
        description:
            'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
        imagepublic: 'public/assets/images/class_bounce_house.png',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
    }
]

export default function Services() {
    return (
        <div id="services" className="bg-white">
            <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Bounce With Blessings
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Our high-quality inflatable bounce houses are designed with safety and fun in mind. Each product is made from durable, lead-free materials that meet industry safety standards. We ensure proper setup for a secure experience, so all you need to do is enjoy your event without any worries.
                        </p>
                    </div>

                    <div className="mt-4">

                        <div>
                            {bounceHouses.map((bounceHouse) => (
                                <div key={bounceHouse.name} className="space-y-16 pt-10 lg:pt-16">
                                    <div key={bounceHouse.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                                        <div className="mt-6 lg:col-span-5 lg:mt-0">
                                            <h3 className="text-lg font-medium text-gray-900">{bounceHouse.name}</h3>
                                            <p className="mt-2 text-sm text-gray-500">{bounceHouse.description}</p>
                                        </div>
                                        <div className="lg:col-span-7">
                                            <img
                                                alt={bounceHouse.imageAlt}
                                                src={bounceHouse.imagepublic}
                                                className="aspect-2/1 w-full rounded-lg bg-gray-100 object-cover sm:aspect-3/2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
