import style from "./Herosection.module.css";

const Herosection = () => {
  return (
    <div className={`${style.hero} hero`}>
      <div className={`${style.image1} image1`}>
        <img
          className={`${style.img1} img1`}
          src="/images/1 (2).png"
          alt="image"
        />
        <img
          className={`${style.img2} img2`}
          src="/images/1 (1).png"
          alt="image"
        />
      </div>

      <div className={`${style.maincontent} main  content`}>
        <div className={`${style.content} content`}>
          <h3>
            Learn with us anywhere with the best <span>experts</span>
          </h3>
          <h2>We collaborate with 275+ leading universities and companies</h2>
        </div>

        <div className={`${style.input} input`}>
          <h2>Want do you want to learn?</h2>
          <div className={`${style.button} button`}>
            <h2>Explore</h2>
          </div>
        </div>
      </div>

      <div className="image2">
        <img
          className={`${style.img3} img3`}
          src="/images/2(1).png"
          alt="image"
        />

        <img
          className={`${style.img4} img4`}
          src="/images/2 (2).png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Herosection;
