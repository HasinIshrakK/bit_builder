export default function Contacts() {

    return (
        <div className="py-10">
            {/* Header */}
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold g-linear-to-r text-purple-400">
                    Team Contact Info
                </h1>
                <p className="mt-2 text-gray-400">
                    Meet our awesome team and connect with them.
                </p>
            </div>
            {/* Membar cards */}
            <div className="items-center flex justify-center">
                <div className="grid gap-3 md:gap-0 grid-cols-1">
                    <div className="flex justify-center items-center gap-2 md:-ml-32">
                        <div className="w-24 md:w-40 h-24 md:h-40 overflow-hidden [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]">
                            <img src="https://avatars.githubusercontent.com/u/88761193?v=4"
                                alt="Profile Pic" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-purple-900 rounded-2xl p-4">
                            <h1 className="text-2xl">Ahmed Abrar Zayad</h1>
                            <p>
                                Email: ahmedabrarzayad@gmail.com
                            </p>
                        </div>
                    </div> <div className="flex justify-center items-center gap-2 md:-mr-32 md:-mt-10 text-right">
                        <div className="bg-purple-900 rounded-2xl p-4">
                            <h1 className="text-2xl">Mahfuzur Rahman</h1>
                            <p>
                                Email: ripon301252@gmail.com
                            </p>
                        </div>
                        <div className="w-24 md:w-40 h-24 md:h-40 overflow-hidden [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]">
                            <img src="https://avatars.githubusercontent.com/u/93132951?v=4"
                                alt="Profile Pic" className="w-full h-full object-cover" />
                        </div>
                    </div>  <div className="flex justify-center items-center gap-2 md:-ml-32 md:-mt-10">
                        <div className="w-24 md:w-40 h-24 md:h-40 overflow-hidden [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]">
                            <img src="/image.jpg"
                                alt="Profile Pic" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-purple-900 rounded-2xl p-4">
                            <h1 className="text-2xl">Amina Akther Asha</h1>
                            <p>
                                Email: ashaamina91@gmail.com
                            </p>
                        </div>
                    </div>  <div className="flex justify-center items-center gap-2 md:-mr-32 md:-mt-10 text-right">
                        <div className="bg-purple-900 rounded-2xl p-4">
                            <h1 className="text-2xl">Faisal</h1>
                            <p>
                                Email: itsfaisalhossen@gmail.com
                            </p>
                        </div>
                        <div className="w-24 md:w-40 h-24 md:h-40 overflow-hidden [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]">
                            <img src="https://avatars.githubusercontent.com/u/108367521?v=4"
                                alt="Profile Pic" className="w-full h-full object-cover" />
                        </div>
                    </div>  <div className="flex justify-center items-center gap-2 md:-ml-32 md:-mt-10">
                        <div className="w-24 md:w-40 h-24 md:h-40 overflow-hidden [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]">
                            <img src="https://avatars.githubusercontent.com/u/218386621?v=4"
                                alt="Profile Pic" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-purple-900 rounded-2xl p-4">
                            <h1 className="text-2xl">Tahmid Ahmed</h1>
                            <p>
                                Email: tahmid7282@gmail.com
                            </p>
                        </div>
                    </div>  <div className="flex justify-center items-center gap-2 md:-mr-32 md:-mt-10 text-right">
                        <div className="bg-purple-900 rounded-2xl p-4">
                            <h1 className="text-2xl">MD. HASIN ISHRAK KHAN</h1>
                            <p>
                                Email: hasinishrakk@gmail.com
                            </p>
                        </div>
                        <div className="w-24 md:w-40 h-24 md:h-40 overflow-hidden [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]">
                            <img src="https://avatars.githubusercontent.com/u/219306826?v=4"
                                alt="Profile Pic" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}