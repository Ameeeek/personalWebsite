import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        id="about"
        className="bg-merah min-h-screen text-center p-2 md:p-24 flex flex-col item-center  justify-center"
      >
        <div className="poppins flex flex-col place-items-center  text-white"
        >
          <h1 data-aos="fade-up" data-aos-duration="1000" className="md:text-2xl py-4 font-bold uppercase">about me 🤔</h1>
          <p data-aos="fade-up" data-aos-duration="1500" className="text-sm md:w-8/12 md:text-lg">
            I started web debelopment since the end of 2021 and i
            really love learning new technology along everyday. To be
            honest i'm not the best, but i'm trying my best in every single
            project that i'm working on to satisfy my client needs 
          </p>
          {/* <h3 data-aos="fade-up" data-aos-duration="1800" className="md:mt-12 font-bold md:text-xl">
            let's see some of my projects that i've been working on 👇
          </h3> */}
        </div>
      </div>
    </>
  );
}
export default About;
