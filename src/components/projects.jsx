import proyek1 from '../images/projects1.png'
function Project() {
  return (
    <>
      <div className="bg-merah text-center poppins font-bold text-white">
        <h1 className="md:text-2xl">Projects</h1>
        <div className="container">
            <img src={proyek1}/>
        </div>
      </div>
    </>
  );
}
export default Project;
