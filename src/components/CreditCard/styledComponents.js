// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 50vw;
  height: 100vh;
  background-color: #3b4b69;
`
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 50vw;
  height: 100vh;
  background-color: #ffffff;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 40px;
  font-family: 'Roboto';
  justify-self: flex-start;
  font-weight: 700;
  padding: 8px;
  border-bottom: 3px solid #ffd773;
`
export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 250px;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
`
export const CardDetailsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 400px;
  height: 160px;
`
export const Number = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 700;
`
export const HolderNameHeading = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 200;
  margin-bottom: 0px;
`
export const Name = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
`
export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 400px;
  box-shadow: 0px 0px 10px 0px;
  border-radius: 10px;
`
export const PaymentHeading = styled.h1`
  color: #3b4b69;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 700;
  margin-bottom: 40px;
`

export const Input = styled.input`
  width: 300px;
  padding: 8px;
  margin-bottom: 10px;
  outline: none;
`
