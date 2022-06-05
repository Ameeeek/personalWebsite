import proyek1 from "../images/projects1.png";
import proyek2 from "../images/projects2.png";
import proyek3 from "../images/projects3.png";
import proyek4 from "../images/projects4.png";
import "tw-elements";
function Project() {
  return (
    <>
      <div className="bg-merah text-center poppins font-bold text-white">
        <h1 className="md:text-2xl">Projects</h1>
        <div className="grid grid-cols-2 ">
          <div className="card">
              <img
                className="md:w-8/12 md:h-8/12 hover:opacity-40 ease-in-out duration-150 "
                src={proyek1}
              />
            <div className="card-content absolute opacity-0 hover:opacity-100 ease-in-out duration-300  my-24">
              <div className="text-left">
                <p className="md:w-60 md:h-44">
                  Jumping mincemeat inc. is a landing page for clothing brand targeted for middle class customers
                </p>
              </div>
              <div class="flex  flex-wrap justify-center space-x-2">
                <span class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-bold poppins text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  Dummy Projects
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              className="md:w-8/12 md:h-8/12  hover:opacity-40 ease-in-out duration-150 "
              src={proyek2}
            />
          </div>
          <div className="card">
            <img
              className="md:w-8/12 md:h-8/12  hover:opacity-40 ease-in-out duration-150 "
              src={proyek3}
            />
          </div>
          <div className="card">
            <img
              className="md:w-8/12 md:h-8/12  hover:opacity-40 ease-in-out duration-150 "
              src={proyek4}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;
