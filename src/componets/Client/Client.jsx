import style from "./Client.Module.css";

const Client = () => {
  return (
    <div>

      <div className={`${style.main1} main1`}>
     

      {/* <div className={`${style.main2} main2`}>
            <h2>What our client’s say</h2>
            <h4>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</h4>
            <h3>Adrian Smith</h3>
      </div> */}

      <img
        className={`${style.img9} img9`}
        src="/images/client-bg.png"
        alt="image1"
      />
      
      </div>

    </div>
  )
}

export default Client
