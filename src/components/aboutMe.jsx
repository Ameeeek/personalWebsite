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
        className="bg-merah min-h-screen text-center p-24 flex flex-col item-center  justify-center"
      >
        <div className="poppins   text-white"
        data-aos="fade-up"
        data-aos-duration="1000">
          <h1 className="md:text-2xl font-bold uppercase">about me 🤔</h1>
          <p className="md:text-base">
            I started web debelopment since the end of 2021 <br></br> and i
            really love learning new technology along everyday <br></br> to be
            honest i'm not the best, but i'm trying my best in every single
            project that i'm working on
          </p>
          <h3 className="md:mt-12 font-bold md:text-xl">
            let's see some of my projects that i've been working on 👇
          </h3>
        </div>
      </div>
    </>
  );
}
export default About;
