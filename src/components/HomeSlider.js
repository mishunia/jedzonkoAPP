import React from 'react'
import ItemsCarousel from 'react-items-carousel'
import range from 'lodash/range'

export default class Test extends React.Component {
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0
    })

    //   setTimeout(() => {
    //     this.setState({
    //       children: createChildren(20)
    //     })
    //   }, 100)
    // }

    // createChildren = n =>
    //   range(n).map(i => (
    //     <div key={i} style={{ height: 200, background: '#333' }}>
    //       {i}
    //     </div>
    //   ))
  }
  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex })

  render() {
    const { activeItemIndex, children } = this.state

    return (
      <ItemsCarousel
        numberOfCards={2}
        freeScrolling={false}
        showSlither={false}
        slidesToScroll={1}
        firstAndLastGutter={false}
        gutter={10}
        enablePlaceholder
        minimumPlaceholderTime={2000}
        numberOfPlaceholderItems={6}
        appShellItem={<PlaceholderComponent />}
        rightChevron={<ChevronRight />}
        leftChevron={<ChevronLeft />}
        chevronWidth={20}
        outsideChevron={true}
        springConfig={{ stiffness: 170, damping: 26 }}
        requestToChangeActive={() => this.setState({ activeItemIndex })}
        activeItemIndex={activeItemIndex}
        activePosition={'left'}
        children={[
          <SlideItem key={0} />,
          <SlideItem key={1} />,
          <SlideItem key={2} />,
          <SlideItem key={3} />,
          <SlideItem key={4} />
        ]}
      />
    )
  }
}
