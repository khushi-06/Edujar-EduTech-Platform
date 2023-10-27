import style from "./Main.Module.css";

const Main = () => {
  return (
    <div>
      <div className="main">
        <div className={`${style.countbox} countbox`}>
          <div className={`${style.box1} box1`}>
            <h1>60K+</h1>
            <h4>Live Courses</h4>
          </div>

          <div className={`${style.box2} box2`}>
            <h1>35+</h1>
            <h4>Category</h4>
          </div>

          <div className={`${style.box3} box3`}>
            {/* <div className={`${style.box3content} box3content`}>
              <img
                className={`${style.img1} img1`}
                src="/images/box3/3 (1).png"
                alt="image1"
              />

              <img
                className={`${style.img2} img2`}
                src="/images/box3/3 (1).svg"
                alt="image1"
              />

              <img
                className={`${style.img1} img1`}
                src="/images/box3/3 (2).png"
                alt="image1"
              />

              <img
                className={`${style.img1} img1`}
                src="/images/box3/3 (3).png"
                alt="image1"
              />
            </div> */}

            <h4>View our 1,602 reviews</h4>
          </div>

          <div className={`${style.box4} box4`}>
            <h1>20K+</h1>
            <h4>Professionals</h4>
          </div>

          <div className={`${style.box5} box5`}>
            <h1>120M+</h1>
            <h4></h4>
          </div>
        </div>
      </div>


    </div>
    
  );
};

export default Main;
