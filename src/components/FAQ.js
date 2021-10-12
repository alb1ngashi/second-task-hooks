import React, {useState} from 'react'
import FaqItem from '../../../second-task-3/src/components/FaqItem'
import {AiOutlineUser} from 'react-icons/ai'
import './faq.scss'
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md'
/**
* @author
* @function FAQ
**/ 

const AccordionData = [
        {
            question: 'How does Parkname seperate itself from other domain name parking companies?',
            answer: 'Your domains are a valuable online property.As in any investment,you want the most efficient,easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains?As a proffesional domainer,you will find everything you need through Parkname to generate maximum profits from your domain portfolio'
        },
        {
            question: 'Is Parkname Parking actually free?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            question: 'What do you do?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            question: 'When was Parkname first founded?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
]


export const FAQ = (props) => {

    const [answers, setAnswers] = useState(false)
    const showAnswers = () => {
        setAnswers(!answers)
    }

  return(
    <div className="rows">
                <div className="title" onClick={showAnswers}>
                    <div className='inline'>
                        <div className='icon'>
                            <AiOutlineUser />
                        </div>
                        <div className="block">
                            <h5>About Us</h5>
                            <small>4 articles in this Topic</small>
                        </div>
                        <button className='button'>
                        {answers ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </button>
                    </div>
                </div>
                
                {answers ? <div className="faq">
                        {AccordionData.map((props) => {
                            return(
                                <FaqItem 
                                question={props.question} 
                                answer={props.answer} /> 
                            )
                        })}
                    </div> : null
                }
    </div>
   )

 }

 export default FAQ;