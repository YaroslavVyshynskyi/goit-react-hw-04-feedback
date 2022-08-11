import React, { useState } from "react";
import Section from "./Section/Section";
import FeedBackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleGood = () => {
    setGood(prevGood => prevGood + 1)
  };
  
  const handleNeutral = () => {
    setNeutral(prevNeutral => prevNeutral + 1)
  };

  const handleBad = () => {
    setBad(prevBad => prevBad + 1)
  };

  const handleFeedback = (type) => {
    switch (type) {
      case "good": handleGood();
        break;
      case "neutral": handleNeutral();
        break;
      case "bad": handleBad();
        break
      default: return
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0
    }
    const totalInPercentage = good / countTotalFeedback() * 100;
    return Math.round(totalInPercentage);
  };
  
  const options = Object.keys({ good, neutral, bad });
  
  const total = countTotalFeedback();
  
  return (
      <div>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={handleFeedback} />
        </Section>  
        <Section title="Statistics">
          {total
            ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={countPositiveFeedbackPercentage()} />
            : <Notification message="There is no feedback" />}
        </Section> 
      </div>
    );
  };


export default App;