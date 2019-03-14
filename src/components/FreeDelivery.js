import React from 'react'
import styled from 'styled-components'

const ProgressBarStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10px;
  background-color: green;
  margin: ${props => props.theme.size.gutter_3} 0;
`

const ProgressBarStateStyled = styled.div`
  background-color: red;
  height: 100%;
  transition: 1s ease;
`

const FreeDelivery = ({ total, freeDelivery }) => {
  const progressBarPart = Math.floor((total * 100) / freeDelivery) + '%'
  let progressBarWidth = {
    width: progressBarPart
  }
  return (
    <ProgressBarStyled>
      <ProgressBarStateStyled style={progressBarWidth} />
    </ProgressBarStyled>
  )
}

export default FreeDelivery

{
  /* <div class="progress-bar"><div class="progress-bar__item"></div></div>

<div data-val="42"></div>

.progress-bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: green;
}

.progress-bar__item {
  background-color: red;
  height: 100%;
}

const dataVal = document.querySelector('[data-val]')
const x = dataVal.getAttribute('data-val')
console.log(`data val to ${x}`)


const barItem = document.querySelector('.progress-bar__item')


barItem.style.width = `${x}%`; */
}
