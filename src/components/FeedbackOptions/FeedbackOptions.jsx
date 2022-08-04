import React from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

const FeedBackOptions = ({options, onLeaveFeedback}) => {

    return (
        <div className={css.feedback_options}>
            {options.map((option) => {
                return (
                    <button key={option} type="button" className={css.options_btn}
                        onClick={() => onLeaveFeedback(option)}>{option}</button>
                )
            })}
        </div>
    );
};

FeedBackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;