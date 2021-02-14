import styled from "styled-components"

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top:5rem;
  display:grid;
  grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(30vh,1fr));
  justify-items:center;
`
export const CardWrapper = styled.div`
    position: relative;
    font-size:.86rem;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: calc(95%);
    box-sizing: border-box;
    cursor: pointer;
    overflow:hidden;
    margin-bottom: 1rem;
`  
export const CardTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: darkgreen;
  margin-bottom: 0;
  margin: .5rem 0;
`
export const Addition = styled.div`
  position: absolute;
  background: #26BF3D;
  padding: 0.2rem;
  border-radius: 5px;
  color: white;
  bottom: 6.5rem;
  left: 5px;
  font-size: 0.71rem;
  font-weight: bold;
`

export const CardDesc = styled.div`
  padding: .6rem;
  font-size: .862rem;
`
export const LocalStore = styled.p`
  color : rgba(0,0,0,0.5);
  margin: .2rem 0;
`
export const RateCount = styled(LocalStore)`
  display:inline;
`
export const Price = styled.p`
  font-weight:bold;
  color:orange;
`
export const GridContainer = styled.div`
  display:grid;
  padding-top:5rem;
`