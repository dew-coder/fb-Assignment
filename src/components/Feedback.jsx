
import React, { useState, useEffect } from "react";
import Image from "next/image";

const openoptions = "/images/openoptions.png";
const close = "/images/close.png";
const filter2 = "/images/filter2.png";
const contact = "/images/contact.png";
const suggestion = "/images/suggestion.png";
const feedback = "/images/feedback.png";
const issue = "/images/report-issue.png";


import ReportIssue from "./Cards/ReportIssue";
import Sharefeedback from "./Cards/Sharefeedback";
import CardOpened from "./Cards/CardOpened";

const Feedback = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      const isMobileView = window.innerWidth < 600;
      setIsMobile(isMobileView);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  const toggleFeedback = () => {
    setSelectedCard("");
    setFeedbackOpen(!feedbackOpen);
    setCardOpen(false);
  };

  const reportIssueToggle = () => {
    setSelectedCard("reportIssue");
    setCardOpen(true);
  };
  const feedbackToggle = () => {
    setSelectedCard("feedback");
    setCardOpen(true);
  };
  const suggestionToggle = () => {
    setSelectedCard("suggestion");
    setCardOpen(true);
  };
  const contactToggle = () => {
    setSelectedCard("contact");
    setCardOpen(true);
  };

  return (
    <>
      {feedbackOpen && <div className="overlay"></div>}
      <div className="feedback">
        <div className="input-cards">
          <CardOpened
            selectedCard={selectedCard}
            cardOpen={cardOpen}
            setCardOpen={setCardOpen}
            setFeedbackOpen={setFeedbackOpen}
            setSelectedCard={setSelectedCard}
          />
        </div>

        <div className={cardOpen ? "cardisopen" : "cardisclosed"}>
          <div
            className={`feedbackmenu ${cardOpen ? "flex-row-reverse" : ""} ${
              feedbackOpen ? "expanded" : ""
            }`}
          >
            <div className="feedback-button-expand">
              <div
                className={
                  cardOpen ? "hide-feedback-button-desc" : "feedback-button-desc"
                }
              >
                Report an Issue
              </div>
              <div
                className={selectedCard === "reportIssue" ? "button-wrapper" : ""}
              >
                <div className="feedback-buttons" onClick={reportIssueToggle}>
                  <Image src={issue} alt="issue" width={20} height={20} />
                </div>
              </div>
            </div>
            <div className="feedback-button-expand">
              <div
                className={`${
                  cardOpen ? "hide-feedback-button-desc" : "feedback-button-desc"
                }`}
              >
                Share Feedback
              </div>
              <div className={selectedCard === "feedback" ? "button-wrapper" : ""}>
                <div className="feedback-buttons" onClick={feedbackToggle}>
                  <Image src={feedback} alt="feedback" width={20} height={20} />
                </div>
              </div>
            </div>
            <div className="feedback-button-expand">
              <div
                className={
                  cardOpen ? "hide-feedback-button-desc" : "feedback-button-desc"
                }
              >
                Give Suggestion
              </div>
              <div
                className={
                  selectedCard === "suggestion" ? "button-wrapper" : ""
                }
              >
                <div className="feedback-buttons" onClick={suggestionToggle}>
                  <Image src={suggestion} alt="suggestion" width={20} height={20} />
                </div>
              </div>
            </div>
            <div className="feedback-button-expand">
              <div
                className={
                  cardOpen ? "hide-feedback-button-desc" : "feedback-button-desc"
                }
              >
                Contact Us
              </div>
              <div className={selectedCard === "contact" ? "button-wrapper" : ""}>
                <div className="feedback-buttons" onClick={contactToggle}>
                  <Image src={contact} alt="contact" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>

          <div
            className="open-options feedback-buttons"
            onClick={toggleFeedback}
          >
            <Image 
              src={feedbackOpen ? (close) : (isMobile ? filter2 : openoptions)} 
              alt="toggle feedback"
              width={24}
              height={20}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;