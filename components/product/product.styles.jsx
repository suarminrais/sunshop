import styled from "styled-components"

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top:5rem;
  display:grid;
`
export const CardWrapper = styled.div`
    position: relative;
    box-shadow: 0 1px 6px 0 rgba(0,0,0,0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
    width: calc(16.6667%);
    box-sizing: border-box;
    cursor: pointer;
    overflow:hidden;
`  
export const CardTitle = styled.div`
  font-size: 1rem;
  text-align: center;
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
  font-size: 12px;
  font-weight: bold;
  bottom: 6.5rem;
  left: 5px;
`