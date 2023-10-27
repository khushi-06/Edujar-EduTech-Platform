import style from "./Work.Module.css";

const Work = () => {
  return (
    <div>
       <div className={`${style.content} content`}>

        <div className={`${style.heading3} heading3`}>

        <h2>How Edujar works</h2>  

        <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</h4>

        <img
          className={`${style.img7} img7`}
          src="/images/work/Video.png"
          alt="image1"
        />
        </div>
        <img
          className={`${style.img} img`}
          src="/images/work/bg.png"
          alt="image1"
        />
        </div>
      

    </div>
  )
}

export default Work
