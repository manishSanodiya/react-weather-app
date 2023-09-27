import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading } from 'react-accessible-accordion'

const Forcast = ({data}) => {
  return (
    <>
     <label className="title">Daily</label>
    <Accordion allowZeroExpanded>
        {data.list.splice(0,7).map((item,idx)=>
          (  <AccordionItem key={idx}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className='daily-item'>
                            <img alt='weather' className='icon-small' src={`icon/${item.weather[0].icon}.png`} />
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
            </AccordionItem>)
        )}


    </Accordion>
    
    </>
  )
}

export default Forcast