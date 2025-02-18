# Badge

## Intro

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

## Install

```tsx
import { Badge } from '@nutui/nutui-react';
```

## Demo

### Basic usage

:::demo

```tsx
import React from "react";
import { Badge, Avatar, Cell } from '@nutui/nutui-react';
import { User } from '@nutui/icons-react';

const App = () => {
  return (
    <Cell>
      <Badge value={8}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={76}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value="NEW">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge dot>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### Max Size

:::demo

```tsx
import React from "react";
import { Badge, Avatar, Cell } from '@nutui/nutui-react';
import { User } from '@nutui/icons-react';

const App = () => {
  return (
    <Cell>
      <Badge value={200} max={9}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={200} max={20}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={200} max={99}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### Custom Color

:::demo

```tsx
import React from "react";
import { Badge, Avatar, Cell } from '@nutui/nutui-react';
import { User } from '@nutui/icons-react';

const App = () => {
  return (
    <Cell>
      <Badge
        value={8}
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        value={76}
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        value="NEW"
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        dot
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### Custom context

:::demo

```tsx
import React from "react";
import { Badge, Avatar, Cell } from '@nutui/nutui-react';
import { User, Checklist, Link as LinkIcon, Download } from '@nutui/icons-react';

const App = () => {
  return (
    <Cell>
      <Badge
        value={<Checklist color="#fff"  />}
        className="test"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={<LinkIcon color="#fff"  />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={<Download color="#fff"  />}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### Custom CSS

:::demo

```tsx
import React from "react";
import { Badge, Avatar, ConfigProvider, Cell } from '@nutui/nutui-react';
import { User } from '@nutui/icons-react';

const customTheme = {
  nutuiBadgeBorderRadius: '12px 12px 12px 0',
}

const customTheme2 = {
  nutuiBadgeDotWidth: '14px',
  nutuiBadgeDotHeight: '14px',
  nutuiBadgeBorder: '2px solid #fff',
}

const App = () => {
  return (
    <Cell>
      <ConfigProvider theme={customTheme}>
        <Badge value="NEW">
          <Avatar icon={<User />} shape="square" />
        </Badge>
      </ConfigProvider>

      <ConfigProvider theme={customTheme2}>
        <Badge dot top="2" right="8">
          <Avatar icon={<User />} shape="square" />
        </Badge>
      </ConfigProvider>
    </Cell>
  )
}
export default App;
```

:::

### Custom Position

:::demo

```tsx
import React from "react";
import { Badge, Avatar, Cell } from '@nutui/nutui-react';
import { User } from '@nutui/icons-react';

const App = () => {
  return (
    <Cell>
      <Badge value={8} top="5" right="5">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value={76} top="10" right="10">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge value="NEW">
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### Display Alone

:::demo

```tsx
import React from "react";
import { Badge,Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell style={{height: '100px'}}>
      <Badge value={8}> </Badge>
      <Badge value={76}> </Badge>
      <Badge value="NEW"> </Badge>
    </Cell>
  )
}
export default App;
```

:::

### Fill Mode

:::demo

```tsx
import React from "react";
import { User } from '@nutui/icons-react';
import { Avatar, Badge, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Badge style={{ marginInlineEnd: '40px' }} value={8} color="green">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value={76}
        fill="outline"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value="NEW"
        color="blue"
        fill="outline"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

## Badge

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | value to show, eg number、charctor and custom content | `ReactNode` | `-` |
| max | when value is number, it's the max size | `number` | `99` |
| dot | Is dotted, When `value` is a custom content, dot does not take effect | `boolean` | `false` |
| top | Up and down offset, support unit setting, can be set to: "0" or 0, etc. | `string` \| `number` | `"0"` |
| right | Left and right offset, support unit setting, can be set to: "5" or 5, etc. | `string` \| `number` | `"5"` |
| color | background color,the default value is the theme primary color | `string` | `-` |
| fill | Fill Mode | `solid` \| `outline` | `solid` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-badge-height | badge height | `14px` |
| \--nutui-badge-background-color | badge background color | `linear-gradient(135deg, $color-primary 0%, $color-primary-stop-2 100%))` |
| \--nutui-badge-color | badge content color | `#fff` |
| \--nutui-badge-font-size | badge content font size | `$font-size-small` |
| \--nutui-badge-border | badge border | `0px solid $color-primary-text` |
| \--nutui-badge-border-radius | badge border-radius | `14px` |
| \--nutui-badge-min-width | badge min-width | `5px` |
| \--nutui-badge-padding | badge padding value | `0 5px` |
| \--nutui-badge-icon-padding | when badge is icon,badge padding | `2px` |
| \--nutui-badge-icon-size | when badge is icon,badge size | `12px` |
| \--nutui-badge-content-transform | badge content transform | `translateY(-50%) translateX(100%)` |
| \--nutui-badge-z-index | when badge is icon, badge z-index | `1` |
| \--nutui-badge-dot-width | when badge is dot, the dot width,height and border radius | `7px` |