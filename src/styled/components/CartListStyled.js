import styled from 'styled-components'

const CartListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`

const CartListItemStyled = styled.li`
  display: flex;
  width: 100%;
  padding: ${props => props.theme.size.gutter_3};
  border-bottom: 1px dashed ${props => props.theme.color.lightGray};
`

const CartListItemMediaStyled = styled.div`
  color: black;
  width: 20%;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`

const CartListItemContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  width: 80%;
`
const CartListItemContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: black;
`
const CartListItemContentItemStyled = styled.div`
  width: 80%;
  color: black;
`
const CartListItemContentItemAltStyled = styled.div`
  width: 20%;
`

const CartListItemActionStyled = styled.div`
  color: black;
  margin-left: ${props => props.theme.size.gutter};
`

export {
  CartListStyled,
  CartListItemStyled,
  CartListItemMediaStyled,
  CartListItemContentStyled,
  CartListItemActionStyled,
  CartListItemContainerStyled,
  CartListItemContentItemStyled,
  CartListItemContentItemAltStyled
}
