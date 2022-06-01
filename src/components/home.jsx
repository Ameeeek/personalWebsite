import pp from "../images/pp.png";
function Home() {
  return (
    <>
      <div className="md:p-64 poppins bg-merah min-h-screen flex flex-row item-center  justify-around">
        <div className="text-left ">
          <h1 className="md:text-xs font-bold  text-white ">
            Selamat datang di welcome!
          </h1>
          <h2 className="font-bold md:text-6xl text-white ">I'm Amek</h2>
          <h3 className="font-light md:w-5/12  text-white md:text-base  ">
            {" "}
            I'm a WebDeveloper that love making stupid shit and put it on the
            internet.
          </h3>
          <button className="btn-98 text-white poppins font-light">
            <a href="#about">Scroll for more</a>
          </button>
        </div>
        <img
          className="w-52 h-52 border-white border-4 rounded-full"
          src={pp}
        />
      </div>
    </>
  );
}
export default Home;
