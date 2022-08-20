import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

function Faq({question, answer}) {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    function handleOnClick() {
        setExpanded(!isExpanded);
    }
return (
    <div className="faq-container">
        <div className="question-container" {...getToggleProps({onClick: handleOnClick})}>
            <span className="faq-question"> {question} </span>
            <span className="faq-toggle"> {isExpanded ? '-' : '+'} </span>
        </div>

        <div {...getCollapseProps()}>
            <div className="faq-answer">
                {answer}
            </div>
        </div>
    </div>
    );
}

export default Faq