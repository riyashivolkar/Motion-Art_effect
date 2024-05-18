import leaf from "../assets/motionarteffect-img2.png";

const Hero = () => {
  return (
    <div className=" flex justify-between custom-bg-gray p-3 px-6 items-center">
      <div className=" flex-row flex  text-2xl  items-center text-white  font-sora font-bold ">
        <img src={leaf} height={50} width={50} />
        envato
        <span className="custom-text-color-green font-light ">market</span>
      </div>
      <button className="rounded-md cursor-pointer  h-10   text-lg  custom-bg-green text-white px-7">
        Buy now
      </button>
    </div>
  );
};

export default Hero;
