import style from "./Footer.Module.css";

const Footer = () => {
  return (
    <div>
      <div className={`${style.footer} footer`}>
        <div className={`${style.app} app`}>
          <img
            className={`${style.img8} img8`}
            src="/images/footer/Group (4).png"
            alt="image1"
          />

          <img
            className={`${style.img8} img8`}
            src="/images/footer/Group 512823.png"
            alt="image1"
          />

          <img
            className={`${style.img8} img8`}
            src="/images/footer/Group 512822.png"
            alt="image1"
          />

          <img
            className={`${style.img8} img8`}
            src="/images/footer/Group.png"
            alt="image1"
          />

          <img
            className={`${style.img8} img8`}
            src="/images/footer/Group-1.png"
            alt="image1"
          />
        </div>




        <div className={`${style.navigation} navigation`}>
          <div className={`${style.part1} part1`}>
            <h2>
              Edu<span>jar</span>
            </h2>
          </div>

          <div className={`${style.part2} part2`}>
            <h2>Quick links</h2>
            
          </div>

          <div className={`${style.part3} part3`}>
            <h2>Legal</h2>
            
          </div>

          <div className={`${style.part4} part4`}>
            <h2>Quick links</h2>
        
          </div>
        </div>

        <div className={`${style.navigation} navigation`}>
          <div className={`${style.part1} part1`}>
            <h4>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              ariatur. Excepteur sint occaecat...
            </h4>
            <h4>© 2023 uitaskca - All Rights Reserved</h4>
          </div>

          <div className={`${style.part2} part2`}>

            <h4>Home</h4>
            <h4>Pricing</h4>
            <h4>About us</h4>
            <h4>Service</h4>
            <h4>Blog</h4>
          </div>

          <div className={`${style.part3} part3`}>
            
            <h4>Terms of use</h4>
            <h4> Terms &</h4>
            <h4>conditions</h4>
            <h4> Privacy policy</h4>
            <h4>About  Cookie policy</h4>
          </div>

          <div className={`${style.part4} part4`}>
        
            <h4>Join over 68,000 people getting our emails</h4>

            <h4>Enter Email</h4>
            <hr></hr>

            <h4>We only send interesting and relevant emails.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
