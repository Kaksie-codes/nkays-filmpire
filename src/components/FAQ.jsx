import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const FAQ = ({question, answer_top, answer_bottom}) => {
    const [toggleFAQ, setToggleFAQ] = useState(false);
  return (
    <div className={`faq ${toggleFAQ && 'active'}`} onClick={() => {setToggleFAQ(!toggleFAQ)}}>
        <h3 className="question">
            {question} 
            <FaPlus className="icon"/>
        </h3>
        <h3 className="answer">
              {answer_top}      
            <br/>
            <br/>                    
              {answer_bottom}      
        </h3>
    </div>
  )
}

export default FAQ;