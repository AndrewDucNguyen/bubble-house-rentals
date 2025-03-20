const CTA = () => {
    return (
        <div className="bg-primaryLightest">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Ready for a Bouncing Adventure?
                </h2>
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
                    <a
                        href="#contact"
                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-primaryLight"
                    >
                        Book Now
                    </a>
                    <a href="#features" className="rounded-md bg-[#0B0B09]/5 px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-[#0B0B09]/10">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default CTA