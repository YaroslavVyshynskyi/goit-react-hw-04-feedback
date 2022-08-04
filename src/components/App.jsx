import React from "react";
import Section from "./Section/Section";
import FeedBackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import { Component } from "react";

class App extends Component { 
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  handleFeedback = (type) => {
    this.setState((prevState) => {
      const prevScore = prevState[type] || 0;
      return {
        [type]: prevScore + 1,
      }
    })
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0
    }
    const totalInPercentage = this.state.good / this.countTotalFeedback() * 100;
    return Math.round(totalInPercentage);
  };
  
  render() { 
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback} />
        </Section>  
        <Section title="Statistics">
          {total
            ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage()} />
            : <Notification message="There is no feedback" />}
        </Section> 
      </div>
    );
  };
};

export default App;