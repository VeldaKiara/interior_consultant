import "../assets/styles/Midbodyleft.css";
import photo1 from "../assets/images/photo1.png";
import photo2 from "../assets/images/photo2.png";

const Midbodyleft = () => {
  return (
    <div>
      <div className="image-1">
        <img src={photo1} alt="main"></img>
      </div>
      <div className="image-2">
        <img src={photo2} alt="i"></img>
      </div>
    </div>
  );
};
export default Midbodyleft;
