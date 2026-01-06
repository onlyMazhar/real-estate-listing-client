import { useEffect, useState } from 'react';
import { MoveRight } from 'lucide-react'; // Added for the button icon
import slide1 from '../assets/home_slide1.jpg';
import slide2 from '../assets/home_slide2.png';
import slide3 from '../assets/home_slide3.png';
import { Link } from 'react-router';

const slides = [
    {
        img: slide1,
        title: "Find Your Dream Estate",
        description: "Explore the most exclusive properties in the city's prime locations."
    },
    {
        img: slide2,
        title: "Modern Living Spaces",
        description: "Discover apartments designed with contemporary elegance and comfort."
    },
    {
        img: slide3,
        title: "Investment Opportunities",
        description: "Secure your future with high-yield commercial and residential properties."
    }
];

const Banner = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
    const nextSlide = () => setCurrent((current + 1) % slides.length);

    return (
        <div className="relative w-full top-16 overflow-hidden">
            {/* Image Wrapper */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <div key={i} className="w-full h-[75vh] shrink-0 relative">
                        <img
                            src={slide.img}
                            alt={`Slide ${i + 1}`}
                            className="w-full h-full object-cover brightness-75"
                        />

                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent"></div>

                        {/* Content Alignment */}
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-10 md:px-20 lg:px-32">
                            <div className="max-w-2xl space-y-5">
                                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl text-white/80 font-medium">
                                    {slide.description}
                                </p>

                                <div className="flex gap-4 pt-4">
                                    <Link to={'/allproperties'}>
                                        <button className="btn btn-primary px-8 font-bold text-secondary">
                                            Browse Now
                                        </button>
                                    </Link>
                                    <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black hidden sm:flex items-center gap-2">
                                        Learn More <MoveRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Prev/Next Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost bg-black/20 text-white hover:bg-primary hover:text-secondary"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost bg-black/20 text-white hover:bg-primary hover:text-secondary"
            >
                ❯
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-3 rounded-full transition-all duration-300 ${current === i ? "bg-primary w-10" : "bg-white/30 w-3"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;