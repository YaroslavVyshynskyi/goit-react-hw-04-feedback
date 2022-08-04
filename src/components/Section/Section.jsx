import React from "react";
import PropTypes from "prop-types";
import css from "./Section.module.css";

const Section = ({ title, children }) => {
    return (
        <section className={css.counter__section}>
            <p className={css.section_title}>{title}</p>
            {children}
        </section>    
    );    
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Section;