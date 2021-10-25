import "../assets/styles/Midbodyleft.css";
import photo1 from "../assets/images/photo1.png";
import photo2 from "../assets/images/photo2.png";

const Midbodyleft = () => {
  return (
    <div>
      <div className="image-1">
          <img src={photo1} alt="main"></img>
      </div>
      <div className="profile">
            <div className="card bg-black bg-cover">
              <img src={photo2} className="alt"alt="Avatar"></img>
                  <div className="container">
                       <h4 className="txt font-sans "> aliza webber</h4> 
                           <h5 className="part font-sans"> Interior designer </h5> 
                                 <p className="p fonts-serif"> Designed in 2020 by <br/>
                                        Aliza Webber </p>
          
                  </div>
              </div>
        <div>
      </div>
    </div>
    </div>
  );
};
export default Midbodyleft;
