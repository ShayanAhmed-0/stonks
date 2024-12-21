'use client'


export default function Home() {
    return (
        <>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1716279083500-04bb3c7576ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold text-red-500 sm:text-5xl">
                            Trade Cryptocurrency

                            <strong className="block font-extrabold text-blue-500"> Securely & Seamlessly </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-purple-400 sm:text-xl/relaxed">
                            Join millions of traders on the most trusted crypto platform. Buy, sell, and manage your
                            assets with confidence.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}