import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={css.statistics}>
            <ul className={css.statistics_list}>
                <li className={css.statistics_item}>
                    <span className={css.item_text}>Good:</span>
                    <span className={css.item_value}>{good}</span>
                </li>
                <li className={css.statistics_item}>
                    <span className={css.item_text}>Neutral:</span>
                    <span className={css.item_value}>{neutral}</span>
                </li>
                <li className={css.statistics_item}>
                    <span className={css.item_text}>Bad:</span>
                    <span className={css.item_value}>{bad}</span>
                </li>
                <li className={css.statistics_item}>
                    <span className={css.item_text}>Total:</span>
                    <span className={css.item_value}>{total}</span>
                </li>
                <li className={css.statistics_item}>
                    <span className={css.item_text}>Positive feedback:</span>
                    <span className={css.item_value}>{positivePercentage}%</span>
                </li>
            </ul>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};

export default Statistics;