import React, { useState } from "react";
import Section from "./Section/Section";
import FeedBackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
// import { Component } from "react";

function App () { 
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // };
  
  const[good, setGood] = useState(5);
  const[neutral, setNeutral] = useState(4);
  const[bad, setBad] = useState(2);
  
  const handleGood = () => {
    setGood(prevGood => prevGood + 1)
  };
  
  const handleNeutral = () => {
    setNeutral(prevNeutral => prevNeutral + 1)
  };

  const handleBad = () => {
    setBad(prevBad => prevBad + 1)
  };

  // const handleFeedback = (type) => {
  //   useState((prevState) => {
  //     const prevScore = prevState[type] || 0;
  //     return {
  //       [type]: prevScore + 1,
  //     }
  //   })
  // };

  

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
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
  
  // const options = Object.keys(this.state);
  const options = [];
  console.log(options);
  const total = countTotalFeedback();
  // console.log(total);
  
  return (
      <div>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={options}
            // onLeaveFeedback={handleFeedback} />
        />
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