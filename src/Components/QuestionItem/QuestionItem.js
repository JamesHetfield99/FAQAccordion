import {useState} from "react";

import "./questionItem.css";
import iconPlus from "../../Assets/images/icon-plus.svg"
import iconMinus from "../../Assets/images/icon-minus.svg"

const QuestionItem = ({ questionObject }) => {
  const [showAnswer,setShowAnswer] = useState(false)

  const toggleAnswer = () => {
    setShowAnswer(prev => !prev)
  }

  return (
    <div className="question-container">
        <div className="question">
          <span>
            {questionObject["question"]}
          </span>
          <img src={showAnswer ? iconMinus :iconPlus} onClick={toggleAnswer} alt="not loaded" />
        </div>
        {showAnswer &&
          <div className="answer">
            <p>
              {questionObject["answer"]}
            </p>
          </div>
        }
    </div>
  )
}

export default QuestionItem
