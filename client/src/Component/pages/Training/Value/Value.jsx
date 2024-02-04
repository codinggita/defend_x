import React, { useState } from 'react'
import './Value.css'
import v1 from '../images/v1.png'
import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
import {
  Accordion, 
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import {MdOutlineArrowDropDown} from 'react-icons/md';

import 'react-accessible-accordion/dist/fancy-example.css'

const valueData =[
  {
    icon: <HiShieldCheck />,
    heading: "WHAT ARE YOUR TERMS AND CONDITIONS ",
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quia possimus totam numquam atque distinctio error dolor cupiditate veritatis, nihil ducimus ea aut perferendis. Saepe sed aperiam non similique earum."
  },
  {
    icon: <MdCancel />,
    heading: "HOW CAN I REACTIVATE MY MEMBERSHIP",
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quia possimus totam numquam atque distinctio error dolor cupiditate veritatis, nihil ducimus ea aut perferendis. Saepe sed aperiam non similique earum."
  },
  {
    icon: <MdAnalytics />,
    heading: "HOW TO APPLY TO THE COURSES",
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quia possimus totam numquam atque distinctio error dolor cupiditate veritatis, nihil ducimus ea aut perferendis. Saepe sed aperiam non similique earum."
  },

]

const Value = () => {
  return (
    <value className="v-wrapper">
      <div className="v-container">
        <div className="v-left">
          <div className="image-container">
            <img src={v1} alt="" />
          </div>
        </div>

        <div className= "v-right">
          <span className='v-1'>F.A.Q</span>
          <br/>
          <span className='v-2'>FREQUENTLY ASKED QUESTIONS</span>
          <br />
          <span className='v-3'>
            WE ARE ALWAYS READY FOR YOU BY PROVIDING THE BEST COURSES FOR YOU
          </span>

          <Accordion className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}>
            {valueData.map((item, i) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const[className, setClassName] = useState(null)
                return(
                  <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className='accordionButton'>
                      <AccordionItemState>
                        {({expanded}) => 
                        expanded 
                        ? setClassName("expanded")
                        : setClassName("collapsed")
                        }
                      </AccordionItemState>



                        <div className="accord">{item.icon}</div>
                        <span className='primary-text'>
                          {item.heading}
                        </span>
                        <div className='accord'>
                          <MdOutlineArrowDropDown size={20}/>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondary-text">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })
            }

          </Accordion>

        </div>
      </div>
    </value>
  )
}

export default Value