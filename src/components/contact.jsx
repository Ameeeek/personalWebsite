function Contact() {
  return (
    <>
      <div
        id="contact"
        className="bg-merah text-center min-h-screen flex flex-col item-center justify-center text-white poppins font-semibold"
      >
        <blockquote class="md:text-3xl">
          <span>need a </span>
          <span class="before:block before:absolute before:-inset-1  before:-skew-y-3 before:bg-white relative inline-block">
            <span class="relative merah"> website? </span>
          </span>
          <span> or a friend to share your </span>
          <span class="before:block before:absolute before:-inset-1  before:-skew-y-3 before:bg-white relative inline-block">
            <span class="relative merah"> stupid </span>
          </span>
          <span> idea and puts it on the internet?</span>
        </blockquote>
        <p className="md:py-4 md:text-2xl">then let's get in touch!</p>
        <div  className="Links grid place-items-center py-4 ">
          <a data-aos="fade-up" data-aos-duration="1000" href="#" data-aos-delay="100" className="py-2 link">instagram</a>
          <a data-aos="fade-up" data-aos-duration="1000" href="#"  data-aos-delay="150" className="py-2 link">twitter</a>
          <a data-aos="fade-up" data-aos-duration="1000" href="#" data-aos-delay="200"  className="py-2 link">discord</a>
        </div>
      </div>
    </>
  );
}
export default Contact;
