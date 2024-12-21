'use client'


export default function Home() {
    return (
        <>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1635236198091-33d5aa8466cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-4xl font-extrabold text-green-400 sm:text-5xl">
                            Your Gateway to Crypto Trading

                            <strong className="block font-extrabold text-yellow-500"> Real-Time & Secure </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-gray-300 sm:text-xl/relaxed">
                            Trade, monitor, and manage your crypto portfolio with cutting-edge tools. Experience low fees, fast transactions, and top-notch security.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
                            <a
                                href="/features"
                                className="block w-full rounded bg-yellow-500 px-12 py-3 text-sm font-medium text-black shadow hover:bg-yellow-600 focus:outline-none focus:ring active:bg-yellow-400 sm:w-auto"
                            >
                                Explore Features
                            </a>

                            <a
                                href="/signup"
                                className="block w-full rounded bg-green-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-600 focus:outline-none focus:ring active:bg-green-400 sm:w-auto"
                            >
                                Sign Up Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}