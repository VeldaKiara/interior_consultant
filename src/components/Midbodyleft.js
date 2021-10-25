import "../assets/styles/Midbodyleft.css";
import photo1 from "../assets/images/photo1.png";
import photo2 from "../assets/images/photo2.png";

const Midbodyleft = () => {
  return (
    <div>
      <div className="image-1">
          <img src={photo1} alt="main"></img>
      </div>
      {/* <div className="image-2">
        <img src={photo2} alt="i"></img>
      </div> */}
      <div className="profile">
            <div class="card bg-black bg-cover">
              <img src={photo2} class="alt"alt="Avatar"></img>
                  <div class="container">
                       <h4 class="txt"> aliza webber</h4> 
                           <h5 class="part"> Interior designer </h5> 
                                 <p> Designed in 2020 by <br/>
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
