import HomeImg from "../Images/HomeImg.png";
import { Link } from "react-router-dom";

function Home(props) {
    return(
      <>
    <div className="home-page" style={{ height: '50rem' }} >
      <img src={HomeImg} alt="HomeImg" style={{ height: '30rem' }}/>  
      <h1 className="home-h1">Took an at-home test?</h1>
      <Link to="/SiteDemo">
        <button className="blueButton">REPORT YOUR RESULTS</button>
      </Link>
    </div>
    <section>
      <div className="home-p">
          <p>
          Securely report your over-the-counter test result to 
          <br />public health teams, whether it's negative or positive.
          </p>
      </div>
    </section>
    <div className="home-p2">
      <h2 className="h2">Your anonymous test result 
      <br />matters.</h2>
      <p className="p2">At-home tests are the future of diagnosing
        <br /> disease. Reporting your result — whether
        <br />
    negative or positive — helps your nation learn how to use those test results
        <br />  
    effectively.</p>
    </div>

      </>
)}

export default Home;