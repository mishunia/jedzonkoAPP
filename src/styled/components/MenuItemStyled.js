import styled from 'styled-components'

const MenuItemStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0 0;
`

const MenuItemMediaStyled = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`

const MenuItemMediaPhotoStyled = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const MenuItemLabelsContainerStyled = styled.div`
  position: absolute;
  top: ${props => props.theme.size.gutter_3};
  left: ${props => props.theme.size.gutter_3};

  display: flex;
  flex-direction: column;
`

const MenuItemDateStyled = styled.div`
  width: 100%;
`

const MenuItemTitleStyled = styled.div`
  width: 100%;
`

const MenuItemDescStyled = styled.div`
  width: 100%;
  margin-top: ${props => props.theme.size.gutter_2};
  border-bottom: 1px dotted ${props => props.theme.color.gray};
  padding: ${props => props.theme.size.gutter_3} 0;
`

const MenuItemLabelsStyled = styled.div`
  width: 100%;
  margin: ${props => props.theme.size.gutter_2} 0;
`

const MenuItemPriceStyled = styled.div`
  width: 100%;
  padding: ${props => props.theme.size.gutter_3};
  background-color: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.white};
  text-align: right;
`

const MenuItemActionStyled = styled.div`
  width: 100%;
  margin-top: ${props => props.theme.size.gutter_2};
`

export {
  MenuItemStyled,
  MenuItemMediaStyled,
  MenuItemTitleStyled,
  MenuItemDescStyled,
  MenuItemLabelsStyled,
  MenuItemDateStyled,
  MenuItemPriceStyled,
  MenuItemMediaPhotoStyled,
  MenuItemActionStyled,
  MenuItemLabelsContainerStyled
}
