const CTA = () => {
    return (
        <div className="bg-[#e4b1b1]">
            <div className="flex items-center flex-col mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <h2 className="text-center max-w-2xl text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                    Make Your Event Unforgettable!
                </h2>
                <p className="mt-6 text-center text-lg/8 max-w-2xl font-semibold tracking-tight text-balance text-white">
                    At The Bubble House Rentals, we believe every celebration deserves a touch of elegance and a whole lot of fun.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-[#a38f8b] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Get started
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-white">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default CTA