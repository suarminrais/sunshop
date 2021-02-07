import React from 'react';
import {IconWrapper} from '../navbar/navbar.styles'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar	} from '@fortawesome/free-solid-svg-icons'
import { 
  Addition,
  CardWrapper,
  CardDesc, 
  CardTitle, 
  LocalStore, 
  Price,
  RateCount
} from './product.styles';

const Card =({img, title, price, loc, rating, addition}) => {
  let Ratings = [];
  const Rating = ()=>{
    for(let i = 0; i < rating; i++){
      Ratings.push(       
          <FontAwesomeIcon key={rating} icon={faStar} color="orange"/>
        )      
      }
  };
  Rating();
  
  return (
    <>
      <CardWrapper>
        <Image src={img} alt={img} width="100%" height="auto"/>
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
