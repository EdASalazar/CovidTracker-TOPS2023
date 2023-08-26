import React, { useContext } from "react";
import backArrow from "../../../../Images/Button - Back to Step 2.png";
import "../../OptionalQuestions/OptionalQuestions.css";
import { FormContext } from "../../../../Context/FormContext";

export default function OptionalQuestionsInfo({ demoPage, setDemoPage }) {
  const { handleUserSubmit } = useContext(FormContext);

  const handleSkipAndSubmit = (event) => {
    handleUserSubmit(event);
    setDemoPage(10); // Redirects to the desired page
  };

  return (
    <div>
      <div className="optionalArrow">
        <img className="backArrowImg" src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
      </div>
      <div className="questionsDiv">
        <h3 className="question2">
          Optional Questions
        </h3>
        <p
          style={{
            textAlign: "center",
            marginTop: "1rem !important",
            marginBottom: "2rem",
            fontSize: "1.3rem",
          }}
        ><br /><br />
          Help your community by answering the following optional-questions anonymously.
        </p>

        <div className="displayNone">
          <p><strong>Data that is shared here is anonymous</strong> and is not tied to any
            information that identifies you individually.
          </p>
          <p>
            Data collected through MakeMyTestCount is de-identified and sent to HHS Protect, a secure national database that also receives COVID-19 test results from labs and doctors' offices.
          </p>
          <p>
            The data may be shared with <strong>researchers</strong> and <strong>support teams</strong> working on the MakeMyTestCount initiative.
          </p>
          <p>
            Public health teams at the state and local level can also get data from
            MakeMyTestCount and <strong>your response can help officials make important health decisions.</strong>
          </p>
        </div>

        <div className="displayNoneDesktop displayMobile" style={{ textAlign: "left", fontSize: "1.125rem", fontFamily: "Noto Sans" }}>
          <ul>
            <li><strong>Data that is shared here is anonymous</strong> and is not tied to any
              information that identifies you individually.</li> <br />
            <li>Data collected through MakeMyTestCount is de-identified and sent to HHS Protect, a secure national database that also receives COVID-19 test results from labs and doctors' offices.</li><br />
            <li>The data may be shared with <strong>researchers</strong> and <strong>support teams</strong> working on the MakeMyTestCount initiative.</li><br />
            <li>Public health teams at the state and local level can also get data from
              MakeMyTestCount and <strong>your response can help officials make important health decisions.</strong></li>
          </ul>
        </div>

      </div>
      <div className="nextButtonDiv">
        <button className="blueButton" id="optionalQuestionsNextButton" onClick={() => setDemoPage(demoPage + 1)}>Next
        </button>

      </div>
      <div className="skipSubmit" style={{ display: "block", marginBottom: "13rem" }}>
        <span
          style={{ cursor: "pointer", textDecoration: "underline", color: "#0058B7", fontWeight: "500" }}
          onClick={handleSkipAndSubmit}
        >
          Skip & Submit
        </span>
      </div>
      <p onClick={() => setDemoPage(demoPage - 1)} style={{ cursor: 'pointer', fontSize: '20px', color: '#00426b', textDecoration: 'underline' }}>
        Go back
      </p>
    </div>
  );
}
