# 无良 preact-router 截图插件拦腰截半!

`html2canvas`和`dom-to-image`作为前端截图插件应该算是挺好用的了,在遵信[规范](https://github.com/niklasvh/html2canvas)大部分情况下都不会有 bug 其使用也十分简单

```ts
import html2canvas from "html2canvas";

async function capture(dom: React.Element): string {
  return await html2canvas(dom, { useCors: true });
}
```

```ts
import domToImage from "dom-to-image";

async function capture(dom: React.Element): string {
  return await domToImage.toPng(dom, { useCors: true });
}
```

## 拦路虎 preact-router

当我正和截图插件恩恩爱爱探讨`图片质量`和`图片压缩`的时候, 它来了

![](./capture.png)

## 问题说明

该 bug 只在 ios 部分机型部分 ios 系统出现, 例如 i6 7 8p ios14.x

## 解决办法

[官网](https://html2canvas.hertzen.com/faq)上也有`faq`的描述, 但也只刮风不下雨

官网有提到 ios 分辨率的兼容问题, 并没提出完美的解决方案

另外近千条 issues 我也翻了,并没有很多人有提到这个问题

所以我打消了插件本身的问题

从代码出发找解决思路

代码的雏形

```jsx
import h, { render, Component } from "preact";
import Router from "preact-router";
import html2canvas from "html2canvas";

export const App = () => {
  return (
    <Router>
      <Home path="/"></Home>
      <Route1 path="/r1"></Route1>
      <Route2 path="/r2"></Route2>
      <Failed path="/failed"></Failed>
    </Router>
  );
};

export class Home extends Component {
  handleClick = async () => {
    const element = document.getElementById("capture");
    const dom = await capture(element);
    document.body.append(dom);
  };

  render() {
    return (
      <div id="root" style={styled.root}>
        <div id="capture" style={styled.capture}>
          xxx
        </div>
        <button id="button" style={styled.button} onClick={this.handleClick}>
          captrue
        </button>
      </div>
    );
  }
}

async function capture(dom: React.Element): string {
  return await html2canvas(dom, { useCors: true });
}

render(<App />, document.body);

const styled = {
  root: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  capture: {
    position: "absolute",
  },
  button: {
    position: "absolute",
    bottom: "1em",
  },
};
```

...

经过一个个的`最小闭环`, 终于发现 preact-router 的异常表现.

```jsx
<Router>
  <Home path="/"></Home>
</Router>
```

`上面这段代码并不会导致bug`

```jsx
<Router>
  <Home path="/"></Home>
  <Route1 path="/r1"></Route1>
  <Route2 path="/r2"></Route2>
  <Failed path="/failed"></Failed>
</Router>
```

`这段代码会`

## 解决

```js
const styled = {
  root: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  capture: {
    position: "fixed",
  },
};
```

重点`position: "fixed",`！！！！！！！！
