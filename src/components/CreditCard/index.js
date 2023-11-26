import {useState} from 'react'

import {
  MainContainer,
  LeftContainer,
  RightContainer,
  Heading,
  Card,
  CardDetailsContainer,
  Number,
  HolderNameHeading,
  Name,
  PaymentCard,
  PaymentHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const onChangeCardNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeCardName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <LeftContainer>
        <Heading>CREDIT CARD</Heading>
        <Card data-testid="creditCard">
          <CardDetailsContainer>
            <Number>{number}</Number>
            <HolderNameHeading>CARDHOLDER NAME</HolderNameHeading>
            <Name>{name}</Name>
          </CardDetailsContainer>
        </Card>
      </LeftContainer>
      <RightContainer>
        <PaymentCard>
          <PaymentHeading>Payment Method</PaymentHeading>
          <Input
            placeholder="Card Number"
            type="text"
            value={number}
            onChange={onChangeCardNumber}
          />
          <Input
            placeholder="Cardholder Name"
            type="text"
            value={name}
            onChange={onChangeCardName}
          />
        </PaymentCard>
      </RightContainer>
    </MainContainer>
  )
}

export default CreditCard
