import proyek1 from "../images/projects1.png";
import proyek2 from "../images/projects2.png";
import proyek3 from "../images/projects3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import proyek4 from "../images/projects4.png";
import "tw-elements";
function Project() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="bg-merah  text-center poppins font-bold text-white">
        <h1 data-aos="fade-up" data-aos-duration="1000" className="md:text-2xl">Projects</h1>
        <div className="grid p-8 grid-cols-1 md:grid-cols-2 place-items-center space-y-5">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="card relative md:w-8/12"
          >
            <img className="block md:w-full  h-auto" src={proyek1} />
            <div className="absolute overlay bottom-0 left-0 right-0 overflow-hidden w-full h-0 ease-in-out duration-300 bg-gradient-to-t from-black">
              <div className="min-h-screen flex flex-col  md:justify-center place-items-center">
              <p className="text-center mt-32 mr-32 text-white md:-mt-64 md:mr-64 before:content-['']  before:block before:w-auto before:bg-red-500 before:h-1">quoteGenerator</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="card relative md:w-8/12"
          >
            <img className="block md:w-full  h-auto" src={proyek2} />
            <div className="absolute overlay bottom-0 left-0 right-0 overflow-hidden w-full h-0 ease-in-out duration-300 bg-gradient-to-t from-black">
              <div className="min-h-screen flex flex-col  md:justify-center place-items-center">
              <p className="text-center mt-32 mr-32 text-white md:-mt-64 md:mr-64 before:content-['']  before:block before:w-auto before:bg-red-500 before:h-1">enourag-er</p>
              </div>
            </div>
          </div><div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="card relative md:w-8/12"
          >
            <img className="block md:w-full  h-auto" src={proyek3} />
            <div className="absolute overlay bottom-0 left-0 right-0 overflow-hidden w-full h-0 ease-in-out duration-300 bg-gradient-to-t from-black">
              <div className="min-h-screen flex flex-col  md:justify-center place-items-center">
              <p className="text-center mt-32 mr-32 text-white md:-mt-64 md:mr-64 before:content-['']  before:block before:w-auto before:bg-red-500 before:h-1">dadJokingHazard</p>
              </div>
            </div>
          </div><div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="card relative md:w-8/12"
          >
            <img className="block md:w-full  h-auto" src={proyek4} />
            <div className="absolute overlay bottom-0 left-0 right-0 overflow-hidden w-full h-0 ease-in-out duration-300 bg-gradient-to-t from-black">
              <div className="min-h-screen flex flex-col  md:justify-center place-items-center">
              <p className="text-center mt-32 mr-32 text-white md:-mt-64 md:mr-64 before:content-['']  before:block before:w-auto before:bg-red-500 before:h-1">countryQuiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;
