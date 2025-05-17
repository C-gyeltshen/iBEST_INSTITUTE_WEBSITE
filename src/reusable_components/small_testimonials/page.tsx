import * as React from "react";
import { useState, useEffect } from "react";
import CarouselBG from "../../images/testimonials/carousel_bg.webp";
import CarouselBG2 from "../../images/testimonials/carouselbg2.webp";
import CarouselBG3 from "../../images/testimonials/carouselbg3.webp";
import Image1 from "../../images/testimonials/DR.KP.webp";
import Image2 from "../../images/testimonials/DP.webp";
import Image3 from "../../images/testimonials/PT.webp";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const SmallTestimonials: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const slides = [
        {
            image: CarouselBG,
            overlayImage: Image1,
            name: "Dr. Karma Phuntsho",
            position: "President, Loden Foundation & Shejun",
            description: `<div>“ The Legend of Pemi Tshewang Tashi, a project of the Loden entrepreneur Tharchen and his iBEST team, takes Bhutanese cinematography to a whole new level. Combining creativity and culture, innovation and history, art and entertainment, the film brings one of the most celebrated Bhutanese stories to the big screen in the form of a beautifully crafted animation.”</div>`
        },
        {
            image: CarouselBG2,
            overlayImage: Image2,
            name: "Dasho Paljor",
            position: "Governor, RMA",
            description: `<div>“ I would like to take this opportunity to thank you and your team for partnering with us for BEFIT 2019. Please accept our sincere appreciation for the unwavering support and cooperation received from iBEST team in organizing and making BEFIT 2019 a huge success and in particular, for coming forward to design the promotional animation clip for BEFIT 2019 and for your support in the social media outreach.”</div>`
        },
        {
            image: CarouselBG3,
            overlayImage: Image3,
            name: "Mr Passang Tshering",
            position: "Executive Director, Bhutan Toilet Organization",
            description: `<div>“ Now that the movie [The Legend of Pemi Tshewang Tashi] is in the cinema, it’s out there for everyone to see how much our youths can do, which takes more than just some training opportunity but a tharchenian push. It’s an animation that’s so far, the best ever produced in our country, perhaps the longest and comparable to its cousins across the world. They went for nothing less than excellence.”</div>`
        }
    ];

    const isFirstSlide = currentSlide === 0;
    const isLastSlide = currentSlide === slides.length - 1;

    const previousSlide = () => {
        if (!isFirstSlide) {
            setCurrentSlide((prev) => prev - 1);
        }
    };

    const nextSlide = () => {
        if (!isLastSlide) {
            setCurrentSlide((prev) => prev + 1);
        }
    };

    if (!isClient) {
        return null; // Avoid rendering until we're on the client side
    }

    return (
        <div className="flex justify-center">
            <div className="w-[320px] relative overflow-hidden rounded-3xl sm:hidden">
                {/* Carousel Images with Content Overlay */}
                <div
                    className="flex transition-transform ease-out duration-500"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`
                    }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="relative w-full flex-shrink-0">
                            <img
                                src={slide.image.src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-128 object-cover"
                            />

                            {/* Overlay Image */}
                            {slide.overlayImage && (
                                <img
                                    src={slide.overlayImage.src}
                                    alt="Overlay"
                                    className="absolute z-10 w-28 h-28 rounded-full"
                                    style={{
                                        top: "4%",
                                        left: "2%"
                                    }}
                                />
                            )}

                            {/* Name and Position */}
                            <div className="absolute top-4 ml-32 justify-center">
                                <h3 className="mt-2 font-bold text-white tracking-wide text-lg">
                                    {slide.name}
                                </h3>
                                <p className="mt-2 text-white tracking-wide">
                                    {slide.position}
                                </p>
                            </div>

                            {/* Testimonials */}
                            <div className="absolute top-32 left-4 right-4 text-left mt-4 mb-6 text-white leading-7">
                                <p
                                    className="ml-2"
                                    dangerouslySetInnerHTML={{ __html: slide.description }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="absolute inset-0 flex justify-between items-center px-1 translate-y-2">
                    <button
                        onClick={previousSlide}
                        disabled={isFirstSlide}
                        className={`p-1 rounded-full drop-shadow-2xl 
                            ${isFirstSlide ? "bg-gray-300 opacity-50" : "bg-white opacity-100"}`}
                    >
                        <SlArrowLeft className="" />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={isLastSlide}
                        className={`p-1 rounded-full drop-shadow-2xl 
                            ${isLastSlide ? "bg-gray-300 opacity-50" : "bg-white opacity-100"}`}
                    >
                        <SlArrowRight className="" />
                    </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-0 py-2 flex justify-center gap-4 w-full">
                    {slides.map((_, i) => (
                        <div
                            key={"circle" + i}
                            onClick={() => setCurrentSlide(i)}
                            className={`rounded-full 
                                ${i === currentSlide ? "bg-white" : "bg-slate-400"} 
                                w-4 h-2`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmallTestimonials;
