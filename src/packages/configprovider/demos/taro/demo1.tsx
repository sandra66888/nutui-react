import React from 'react'
import { ConfigProvider, Cell, Rate, Button } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <ConfigProvider>
        <Cell.Group>
          <Cell>
            <Rate defaultValue={3} />
          </Cell>
          <Cell>
            <Button type="primary" size="large">
              提交
            </Button>
          </Cell>
        </Cell.Group>
      </ConfigProvider>
    </>
  )
}

export default Demo1
