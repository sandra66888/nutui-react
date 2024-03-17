import React from 'react'
import { Rate } from '@nutui/nutui-react'

const Demo12 = () => {
  const handleTouchEnd = (event, val) => {
    console.log(event, val)
  }
  return (
    <>
      <Rate defaultValue={3} touchable onTouchEnd={handleTouchEnd} />
    </>
  )
}
export default Demo12
