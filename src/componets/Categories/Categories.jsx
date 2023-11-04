import style from "./Categories.Module.css";

const Categories = () => {
  return (
    <div>
      <div className={`${style.heading} heading`}>
        <h4>Explore Top Categories </h4>
        <h2>Click on the categories and explore all courses</h2>
      </div>

      <div className={`${style.content} content`}> 
      <img
        className={`${style.img} img`}
        src="/images/content-bg.png"
        alt="image1"
      />
       

       <div className={`${style.slider} slider`}>

        <div className={`${style.box} box`}>

        </div>

        <div className={`${style.box} box`}>

        </div>

        <div className={`${style.box} box`}>

        </div>

        <div className={`${style.box} box`}>

        </div>

        <div className={`${style.box} box`}>

        </div>

        <div className={`${style.box} box`}>

        </div>
       </div>
    </div>
    </div>
  );
};

export default Categories;
