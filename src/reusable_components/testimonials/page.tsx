import * as React from "react";
import { useState, useEffect } from "react";
import CarouselBG from "../../images/testimonials/carousel_bg.webp";
import CarouselBG2 from "../../images/testimonials/carouselbg2.webp";
import CarouselBG3 from "../../images/testimonials/carouselbg3.webp";
import Image1 from "../../images/testimonials/DR.KP.webp";
import Image2 from "../../images/testimonials/DP.webp";
import Image3 from "../../images/testimonials/PT.webp";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Testimonial: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set flag to indicate we're on the client side
    setIsClient(true);
  }, []);

  const slides = [
    { 
      image: CarouselBG, 
      overlayImage: Image1,
      name: "Dr. Karma Phuntsho", 
      position:"President, Loden Foundation & Shejun",
      description: `<div class="">“ The Legend of Pemi Tshewang
      Tashi, a project of the Loden
      entrepreneur Tharchen and his iBEST team, takes Bhutanese cinematography to a whole new level. Combining creativity and culture, innovation and history, art and entertainment, the film brings one of the most celebrated Bhutanese stories to the big screen in the form of a beautifully crafted animation.”</div>`
    },
    { 
      image: CarouselBG2, 
      overlayImage: Image2,
      name: "Dasho Paljor",
      position:"Governor, RMA",
      description: `<div class="">“ I would like to take this opportunity to thank you and your team for partnering with us for BEFIT 2019. Please accept our sincere appreciation for the unwavering support and cooperation received from iBEST team in organizing and making BEFIT 2019 a huge success and in particular, for coming forward to design the promotional animation clip for BEFIT 2019 and for your support in the social media outreach.”</div>`,
    },
    { 
      image: CarouselBG3,
      overlayImage: Image3,
      name: "Mr Passang Tshering",
      position:"Executive Director, Bhutan Toilet Organization",
      description:`<div class="">“ Now that the movie [The Legend of Pemi Tshewang Tashi] is in the cinema, it’s out there for everyone to see how much our youths can do, which takes more than just some training opportunity but a tharchenian push. It’s an animation that’s so far, the best ever produced in our country, perhaps the longest and comparable to its cousins across the world. They went for nothing less than excellence.”</div>`,
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
      <div className="w-full max-w-2xl relative overflow-hidden rounded-6xl"> {/* Increased max width */}
   

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
                className="w-full h-auto object-cover"
                style={{ minWidth: "100%" }}
              />
              
              {slide.overlayImage && (
                <img
                  src={slide.overlayImage.src}
                  alt="Overlay"
                  className="absolute z-10 w-52 h-64" // Increased size for overlay image
                  style={{
                    top: "0%",   
                    right: "0%"  
                  }}
                />
              )}

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center text-white">
                <p
                  className="w-3/5 text-left ml-12 leading-loose" // Adjusted text size
                  dangerouslySetInnerHTML={{ __html: slide.description }}
                />
              </div>

              {/* Name */}
              <div className="absolute bottom-0 right-0 bg-white bg-opacity-50 backdrop-blur w-52 h-40 shadow-inner flex flex-col justify-center items-center p-2"> {/* Adjusted height */}
                <h3 className="mt-4 font-bold text-black tracking-wide text-lg text-center">{slide.name}</h3> {/* Changed text color to black for visibility */}
                <p className="mt-2 text-black tracking-wide text-center">{slide.position}</p> {/* Changed text color to black for visibility */}
              </div>

            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-1 translate-y-2"> {/* Adjusted padding */}
          <button
            onClick={previousSlide}
            disabled={isFirstSlide}
            className={`p-3 rounded-full drop-shadow-2xl 
                        ${isFirstSlide ? "bg-gray-300 opacity-50" : "bg-white opacity-100"}`}
          >
            <SlArrowLeft className="text-lg" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isLastSlide}
            className={`p-3 rounded-full drop-shadow-2xl 
                        ${isLastSlide ? "bg-gray-300 opacity-50" : "bg-white opacity-100"}`}
          >
            <SlArrowRight className="text-lg" />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-0 py-4 flex justify-center gap-4 w-full"> {/* Adjusted gap */}
          {slides.map((_, i) => (
            <div
              key={"circle" + i}
              onClick={() => setCurrentSlide(i)}
              className={`rounded-full 
                ${i === currentSlide ? "bg-white" : "bg-slate-400"} 
                w-4 h-4`} // Adjusted size
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
