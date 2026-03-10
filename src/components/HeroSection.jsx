
import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {

    const handlestart = () => {
      alert ("Start button is clicked.")
    }
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-2xl text-center">
               Read the form data
          </h1>
          <p className="text-center">
           This is Web home page..!!
          </p>
        <div className="hero-image flex justify-center">
          <img
            src="/Images/Form.jpeg"
            alt="Data Reading"
            className="banner-image"
          />
        </div>
          <button type="start"
            onClick={handlestart}
          className=" flex  p-4 mx-auto max-w-sm  items-center gap-x-2 rounded-xl shadow-lg outline border-black text-black">
            Start <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </main>
  );
};
