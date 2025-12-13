import React from 'react';

export default function ItinerarySection({ items }) {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-8">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group border-2 border-gold-500 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_0px_rgba(234,179,8,0.6)] rounded-tr-[4rem] rounded-bl-[4rem]">
                                <div className="absolute inset-0 bg-gold-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <span className="inline-block font-sans text-xs tracking-[0.2em] text-gold-400 uppercase mb-4 border-b border-gold-400 pb-2">
                                Day {index}
                            </span>
                            <h3 className="font-serif text-4xl md:text-5xl text-stone-100 mb-2">
                                {item.title}
                            </h3>
                            <p className="font-sans text-sm tracking-wide text-stone-400 uppercase mb-8">
                                {item.location}
                            </p>
                            <p className="font-sans text-base md:text-lg leading-relaxed text-stone-300 max-w-md mx-auto md:mx-0 mb-8">
                                {item.description}
                            </p>

                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block border border-gold-400 text-gold-400 px-8 py-3 font-sans text-xs tracking-widest uppercase hover:bg-gold-400 hover:text-white transition-colors duration-300"
                                >
                                    {item.linkText || "Book Activity"}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
