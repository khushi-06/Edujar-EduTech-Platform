import style from "./Courses.Module.css";

const Courses = () => {
  return (
    <div>
      <div className={`${style.heading1} heading1`}>
        <h1>Popular Courses</h1>
        <h4>
          Let’s join our best classes with our famous instructor and institutes
        </h4>

        <img
        className={`${style.img0} img0`}
        src="/images/Courses/Frame.png"
        alt="image1"
      />

<div className={`${style.expand} expand1`}> 
      <div className={`${style.expand} expand`}>  
      <img
        className={`${style.img3} img3`}
        src="/images/Courses/Expand_left.png"
        alt="image1"
      />
      </div>

      <div className={`${style.expand} expand`}>
      <img
        className={`${style.img3} img3`}
        src="/images/Courses/Expand_left (1).png"
        alt="image1"
      />
      </div>

      </div>
      </div>


      <div className={`${style.mainsection} mainsection`}>
        <div className={`${style.card} card`}>

        </div>

        <div className={`${style.card} card`}>
            
        </div>

        <div className={`${style.card} card`}>
            
        </div>
      </div>

      <div className={`${style.mainsection} mainsection`}>
        <div className={`${style.card} card`}>

        </div>

        <div className={`${style.card} card`}>
            
        </div>

        <div className={`${style.card} card`}>
            
        </div>
      </div>

      <div className={`${style.explore} explore`}>

      <img
        className={`${style.img4} img4`}
        src="/images/Courses/Ellipse 118.png"
        alt="image1"
      />

      <div className={`${style.button} button`}>
        <h2>Explore Courses</h2>
      </div>

      <img
        className={`${style.img5} img5`}
        src="/images/Courses/Star 7.png"
        alt="image1"
      />

      </div>
    </div>
  );
};

export default Courses;
