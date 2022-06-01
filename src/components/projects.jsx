import proyek1 from "../images/projects1.png";
import proyek2 from '../images/projects2.png'
import "tw-elements";
function Project() {
  return (
    <>
      <div className="bg-merah text-center poppins font-bold text-white">
        <h1 className="md:text-2xl">Projects</h1>
          <div className="grid grid-cols-2 place-items-center">
            <img className="md:w-8/12 md:h-8/12 " src={proyek1}/>
            <img className="md:w-8/12 md:h-8/12 " src={proyek2}/>
          </div>
      </div>
    </>
  );
}
export default Project;
