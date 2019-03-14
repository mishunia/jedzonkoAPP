import styled from 'styled-components'

const ProductCartContainerStyled = styled.div`
  height: 100%;
  width: 100%;
`

const ProductCartWrapperStyled = styled.div`
  background-color: ${props => props.theme.color.white};
  height: 600px;
  width: 700px;
  margin-left: 300px;
`

const ProductCartInnerStyled = styled.div`
  display: flex;
  align-items: center;
  height: 700px;

  margin-top: 100px;

  /* background-color: ${props => props.theme.color.primary}; */
  background-image: linear-gradient(to right top, #dd2021, #de2727, #de1d2c, #df2332, #df1837);
`
const ProductCartStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
// Media
const ProductCartMediaStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  left: -80px;
  width: 100%;
  max-width: 290px;
  height: 80%;
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.theme.color.white};
  border-radius: ${props => props.theme.size.gutter};
  transition: 0.5 ease;
`
const ProductCartMediaPhotoStyled = styled.div`
  display: flex;
  align-items: center;
  height: 85%;

  img {
    max-width: 100%;
    width: auto;
  }
`
const ProductCartMediaNavStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 15%;
  background-color: ${props => props.theme.color.white};
  padding: ${props => props.theme.size.gutter_2}
    ${props => props.theme.size.gutter};
  border-top: 1px solid ${props => props.theme.color.primary};
`
// Photo nav
const ProductCartPhotoNavStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  width: 100%;
`

const ProductCartPhotoNavItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.size.gutter_3};
  list-style: none;
  width: 50px;
  height: 50px;
  border: 1px solid ${props => props.theme.color.primary};
  margin-right: ${props => props.theme.size.gutter_3};
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    border-width: 2px;
  }
  img {
    max-width: 100%;
    width: auto;
  }
`

// Content

const ProductCartContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.size.gutter}
    ${props => props.theme.size.gutter} ${props => props.theme.size.gutter}
    ${props => props.theme.size.gutter_3};
  width: 100%;
  height: 100%;
`

const ProductCartContentHeadStyled = styled.div`
  padding: ${props => props.theme.size.gutter_2} 0;
  margin-bottom: ${props => props.theme.size.gutter_3};
`

const ProductCartContentPriceStyled = styled.div`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontsize.xl};
  font-weight: ${props => props.theme.weight.bold};
  background-color: ${props => props.theme.color.primary};
  padding: ${props => props.theme.size.gutter_2};
  margin-bottom: 50px;
`

const ProductCartContentDescStyled = styled.div`
  border-top: 1px dashed ${props => props.theme.color.primary};
  border-bottom: 1px dashed ${props => props.theme.color.primary};
  padding: ${props => props.theme.size.gutter} 0;
`
const ProductCartContentLabelsStyled = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.size.gutter};
  * {
    margin-right: ${props => props.theme.size.gutter_2};
  }
`
const ProductCartContentOptionsStyled = styled.div``

const ProductCartContentActionStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 20px;
`

export {
  ProductCartStyled,
  ProductCartContainerStyled,
  ProductCartWrapperStyled,
  ProductCartInnerStyled,
  ProductCartMediaStyled,
  ProductCartMediaPhotoStyled,
  ProductCartMediaNavStyled,
  ProductCartPhotoNavStyled,
  ProductCartPhotoNavItemStyled,
  ProductCartContentStyled,
  ProductCartContentHeadStyled,
  ProductCartContentPriceStyled,
  ProductCartContentDescStyled,
  ProductCartContentLabelsStyled,
  ProductCartContentOptionsStyled,
  ProductCartContentActionStyled
}
