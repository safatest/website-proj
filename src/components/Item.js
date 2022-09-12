import React from 'react'
import Button from './Button'
import './Item.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = ({title,desc,backgroundImg, leftBtnText, rightBtnText,leftBtnLink,rightBtnLink, twoButtons, first, underlined}) => {
  return (
    <div className='item' style={{
      backgroundImage: `url(${backgroundImg})`
    }}>
        <div className='item_container'>
            <div className='item_text'>
                <h3>{title}</h3>
                <div className='item_textDesc'>
                    <p>{desc}</p>
                    <a href='/'>{underlined}</a>
                </div>
            </div>
            <div className='item_lowerThird'>
              <div className='item_buttons'>
                <Button imp='primary' text={leftBtnText} link={leftBtnLink}/>
                {twoButtons && (
                  <Button imp='secondary' text={rightBtnText} link={rightBtnLink}/>
                )}
              </div>
              {first && (
                <div className='item_expand'>
                  <ExpandMoreIcon/>
                </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default Item