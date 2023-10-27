import style from "./Categories.Module.css";

const Categories = () => {
  return (
    <div>
      <div className={`${style.heading} heading`}>
            <h4>Explore Top Categories </h4>
            <h2>Click on the categories and explore all courses</h2>
        </div>
        
    <div className={`${style.content} content`}></div>
    
    </div>
  )
}

export default Categories
