import style from "./Faq.module.css";

const Faq = () => {
  return (
    <div>
<div className={`${style.main} main`}>

<div className={`${style.left} left`}>
        <h2>Frequently Asked Questions</h2>
        <h1>Any Questions? Find here.</h1>
    <button>
        <h6>Send Message</h6>
    </button>
      </div>

      <div className={`${style.right} right`}>
        <h2>Can Conversix sync my data to my CRM?</h2>
        <h4>Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.</h4>
        <hr></hr>

        <h2>How much data will I receive?</h2>
        <hr></hr>

        <h2>How much data will I receive?</h2>
        <hr></hr>

        <h2>How accurate is my data?</h2>
        <hr></hr>

       

        
      </div>

</div>
    </div>
  )
}

export default Faq
