import { useEffect, useState } from 'react';
import Container from './Container';

// ✅ Import your image files directly
import slide1 from '../assets/home_slide1.jpg';
import slide2 from '../assets/home_slide2.png';
import slide3 from '../assets/home_slide3.png';

const slides = [slide1, slide2, slide3];

const Banner = () => {
    const [current, setCurrent] = useState(0);

    // Auto change slide every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
    const nextSlide = () => setCurrent((current + 1) % slides.length);

    return (
        <Container>
            <div className="relative  w-full overflow-hidden r shadow-2xl ">
                {/* Image Wrapper */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((src, i) => (
                        <div key={i} className="w-full shrink-0 relative">
                            <img
                                src={src}
                                alt={`Slide ${i + 1}`}
                                className="w-full h-[60vh] md:h-[80vh] object-cover brightness-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    ))}
                </div>

                {/* Prev/Next Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
                >
                    ❯
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 w-2 rounded-full transition-all ${current === i ? "bg-white w-4" : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Banner;
