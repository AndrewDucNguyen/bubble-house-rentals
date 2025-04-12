import { Feather, CalendarHeart, Box, ShieldCheck } from 'lucide-react'

const features = [
  {
    name: 'Modern & Stylish Designs',
    description: 'Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.',
    icon: Feather,
  },
  {
    name: 'Safe & Sanitized',
    description: 'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.',
    icon: ShieldCheck,
  },
  {
    name: 'Seamless Setup & Takedown ',
    description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
    icon: Box,
  },
  {
    name: 'Perfect for All Events',
    description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi.',
    icon: CalendarHeart,
  }

]

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">Whimsical Fun</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Step Into a World of Delight
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                A magical bouncy house experience where every jump sparks joy and wonder.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-primary" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="Product screenshot"
              src="./public/assets/images/birthday_party.jpg"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
