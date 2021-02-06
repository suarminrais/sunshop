import React from 'react';
import {IconWrapper} from '../navbar/navbar.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar	} from '@fortawesome/free-solid-svg-icons'
import { Addition, CardWrapper,CardDesc, CardTitle, LocalStore, Price,RateCount} from './product.styles';

const Card =({img, title, price, loc, rating, addition}) => {
  let Ratings = [];
  const Rating = ()=>{
    for(let i = 0; i < rating; i++){
      Ratings.push(       
          <FontAwesomeIcon icon={faStar} color="orange"/>
        )      
      }
  };
  Rating();
  
  return (
    <>
      <CardWrapper>
        <img src={img} alt=""/>
        {addition && <Addition>{addition}</Addition>}
        <CardDesc>
          <CardTitle>{title}</CardTitle>
          <Price>Rp {price}</Price>
          <LocalStore>{loc}</LocalStore>
          <IconWrapper star flex noMargin>
              {Ratings}<RateCount>{` (${rating})`}</RateCount>
          </IconWrapper>
        </CardDesc>
      </CardWrapper>

    </>
  )
}

export default Card;
