import "../index.css";
import Slider from "../components/Slider/Slider";
import Info from "../components/Info/Info";


function Content() {
  return (
    <div className="flex flex-col  md:flex-row h-screen items-center justify-center border-2 border-green-500">
        <Slider />
        <Info />
    </div>
  );
}

export default Content;