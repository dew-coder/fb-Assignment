import React from 'react';
import ReportIssue from './ReportIssue';
import Sharefeedback from './Sharefeedback';
import Suggestion from './Suggestion';
import Contact from './Contact';

const CardOpened = ({ selectedCard, setCardOpen, setfeedbackOpen, setSelectedCard }) => {
  if (selectedCard === 'reportIssue') {
    return (
      <ReportIssue
        setCardOpen={setCardOpen}
        setfeedbackOpen={setfeedbackOpen}
        setSelectedCard={setSelectedCard}
      />
    );
  }

  if (selectedCard === 'feedback') {
    return (
      <Sharefeedback
        setCardOpen={setCardOpen}
        setfeedbackOpen={setfeedbackOpen}
        setSelectedCard={setSelectedCard}
      />
    );
  }

  if (selectedCard === 'suggestion') {
    return (
      <Suggestion
        setCardOpen={setCardOpen}
        setfeedbackOpen={setfeedbackOpen}
        setSelectedCard={setSelectedCard}
      />
    );
  }

  if (selectedCard === 'contact') {
    return (
      <Contact
        setCardOpen={setCardOpen}
        setfeedbackOpen={setfeedbackOpen}
        setSelectedCard={setSelectedCard}
      />
    );
  }

  return null; // Returning null when no card is selected
};

export default CardOpened;
