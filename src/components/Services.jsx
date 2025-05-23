import whiteCastle from '../assets/images/white_castle.jpg';
import whiteBounceHouseSlide from '../assets/images/white_bounce_house_slide.jpg';
import squareBounceHouse from '../assets/images/square_bounce_house.jpg';
import classicBounceHouse from '../assets/images/classic_bounce_house.png'

const bounceHouses = [
    {
        name: 'White Castle',
        description:
            'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
        imageSrc: whiteCastle,
        imageAlt: 'Elegant white castle bounce house with turrets and decorative details, perfect for royal-themed parties',
    },
    {
        name: 'White Bounce House w/ Slide',
        description:
            'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
        imageSrc: whiteBounceHouseSlide,
        imageAlt: 'Modern white bounce house with attached slide, combining bouncing fun with sliding excitement',
    },
    {
        name: 'Square Bounce House',
        description:
            'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
        imageSrc: squareBounceHouse,
        imageAlt: 'Classic square bounce house with spacious interior, perfect for group play and parties',
    },
    {
        name: 'Classic Bounce House',
        description:
            'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
        imageSrc: classicBounceHouse,
        imageAlt: 'Traditional bounce house with colorful design, ideal for birthday parties and celebrations',
    }
]

export default function Services() {
    return (
        <div id="services" className="bg-white">
            <section className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
                                                src={bounceHouse.imageSrc}
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
