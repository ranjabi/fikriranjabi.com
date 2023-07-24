import { useEffect, useState } from "react";

const dynamicText = ["Fikri Ranjabi", "Software Engineer", "Comp Sci Student"];

const Hero = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position + 1) % dynamicText.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [position]);

  return (
    <div className="py-0 sm:py-4 md:py-8 mb-4">
      <div className="flex flex-col md:flex-row">
        <div className="text-4xl md:text-5xl font-semibold text-gray-400"
        >
          Hello, I&apos;m
        </div>
            <p className="text-4xl sm:text-5xl text-black ml-0 md:ml-4 mt-2 md:mt-0"
            >
              {dynamicText[0]}
            </p>
      </div>
    </div>
  );
};

export default Hero;
