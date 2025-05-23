import heroImage from '../assets/images/hero.png'

const Hero = () => {
    return (
        <div className="relative max-w-7xl mx-auto">
            <div
                aria-hidden="true"
                className="absolute inset-0 w-full h-full rounded-2xl -z-10 overflow-hidden blur-xs bg-[#0B0B09]/30 bg-blend-overlay bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56 relative z-10">
                <div className="text-center px-6 lg:px-0">
                    <h1 className="text-5xl font-bold tracking-wide text-white sm:text-7xl">
                        Where Fun Meets Elegance
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-white max-w-4xl mx-auto">
                        At The Bubble House Rentals, we offer modern white castle bouncy houses that bring a touch of class and endless joy to your celebrations.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#contact"
                            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-primaryLight"
                        >
                            Book Now
                        </a>
                        <a href="#features" className="rounded-md bg-white/20 px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:bg-white/10 text-white">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero