import React from 'react';
import {IconWrapper} from '../navbar/navbar.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar	} from '@fortawesome/free-solid-svg-icons'
import { Addition, CardWrapper } from './product.styles';

const Card =({img, title, price, loc, rating, addition}) => {
  let Ratings = [];
  const Rating = ()=>{
    for(let i = 0; i < rating; i++){
      Ratings.push(
        <IconWrapper>
          <FontAwesomeIcon icon={faStar} size="xs"/>
        </IconWrapper>
        )      
      }
  };
  Rating();
  return (
    <>
      <CardWrapper>
      <img src={img} alt=""/>
      <h2>{title}</h2>
      <p>Rp {price}</p>
      <p>{loc}</p>
      <div style={{display:"flex", color:"orange"}}>{Ratings}</div>
      {addition && <Addition>{addition}</Addition>}
      </CardWrapper>
    </>
  )
}

export default Card;
