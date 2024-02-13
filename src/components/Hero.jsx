import React from "react";
import Header from "./Header";

function Hero() {
    return(
        <>
            <section
            className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1551649001-7a2482d98d05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWdyaWN1bHRldXJ8ZW58MHx8MHx8fDA%3D)] bg-cover bg-top bg-no-repeat"
            >
                <Header />
                <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                        <div className=" max-w-xl">
                            <h1 className="text-3xl text-red-50 sm:text-5xl">
                            AgriKAAM est une application de gestion de travailleurs pour les agriculteurs qui permet de facilité la gestion de votre entreprise
                            </h1>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                className="block w-full rounded px-12 bg-green-50 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                href="#"
                                >
                                Commencer maintenant
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
        </>
    )
}
export default Hero