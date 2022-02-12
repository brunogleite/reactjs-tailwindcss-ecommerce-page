import "../index.css";
import Slider from "../components/Slider/Slider";
import Info from "../components/Info/Info";


function Content() {
  return (
    <div className=" w-full mx-auto h-screen md:flex md:flex-row md:items-center md:justify-center">
      <Slider /> 
      <Info  />
    </div>
  );
}

export default Content;