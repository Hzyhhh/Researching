# JS

**实现一个new？**

```js
/**
 * new 的实现分为四个步骤
 * 1. 函数内创建一个新的对象
 * 2. 将新对象的原型链接到传入的构造函数原型上
 * 3. 将新对象作为this和arguments传到构造函数的入参中
 * 4.返回步骤3产生的对象或this
 */
function fakeNew(){
  // 1. 创建一个新对象
  // 或者 Object.create()
  const obj = {}

  // 将构造函数shift出来
  const constructor = [].shift.apply(arguments)
  // 2.将新对象的原型链接到构造函数的原型上
  obj.__proto__ = constructor.prototype

  // 3.将新对象作为this和arguments传到构造函数的入参中
  const res = constructor.apply(obj, arguments)

  // 返回
  // 注意：如果构造函数返回基本类型值，则不影响，还是返回 this
  return typeof res === 'object' ? res : obj
}

```

**说一说你对 this 的理解，箭头函数解决了什么问题？**

this 表现

```js
/**
 * 🔴case 1: 全局作用域下的函数
 */
function foo() {
  console.log(this);
}

foo(); // globalThis
new foo(); // foo{}

/**
 * 🔴case 2: 对象方法
 */
var bar = {
  name: "hello",
  printName: function () {
    console.log(this.name);
  },
};

bar.printName(); // hello
const _print = bar.printName;
_print(); // undefined

/**
 * 🔴 case 3: bind,call,apply
 */
const _foo = foo.bind({ a: 1 });
_foo(); // {a: 1}

/**
 * 🔴case 4: 嵌套函数
 */
function baz() {
  console.log("outer this:", this);
  function inner() {
    console.log("inner this:", this);
  }

  inner();
}

baz.call({ a: 1 }); // outer this: {a: 1}
// inner this: globalThis
```
- Case 1:  函数常规调用 this 指向 globalThis，使用 new 调用时指向刚创建的对象
- Case 2: 以对象成员的形式调用时，this 指向所在的对象。但是非成员访问符调用时还是指向 globalThis
- Case 3： 可以通过 bind 显式指定 this
- Case 4：嵌套函数调用，this 指向 globalThis

分析：
---

**回调地狱**

你有没见过这样的函数：

```js
function A() {
  let res;
  canvas.toBlob((res) => {
    const params = res;
    fetchxxx("method", params, (res) => {
      // xxx……
      res = res;
    });
  });
}
```

这种通过不断在回调函数里调用下一个函数的操作在 es5 里面很常见。

如何解决：

`async/await`:

```js
async function fetchBlob() {
  const res = await new Promise((res, rej) => {
    canvas.toBlob((blob) => {
      res(blob);
    });
  });

  return res;
}

async function getFromMethod(blob) {
  return await new Promise((res, rej) => {
    fetchxxx("method", blob, (result) => {
      if (result) {
        res(result);
      } else {
        rej();
      }
    });
  });
}

const blob = await fetchBlob();
const res = await getFromMethod(blob);
```

可以看到，通过封装了两个`async/await`异步函数完美的解决了地狱回调的问题。

同时，还能获取到异步函数的状态机返回状态`pending`。

根据这个状态进行`loading`以及`try/catch`操作

---

**根据数字生成对应数组**

例：

```js
7 => [0,1,2,3,4,5,6]
```

方法一(推荐)：

```ts
function numToArr(num: number) {
  return [...new Array(num).keys()];
}
```

方法二：

```ts
function numToArr(num: number) {
  const target: number = [];
  for (let i = 0; i < num; i++) {
    target.push(i);
  }
  return target;
}
```

---

**模拟实现 Object.freeze**

**Object.freeze**：

`Object.freeze` 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。

用法：

```ts
const obj = {
  name: "yd",
  info: {
    address: "beijing",
  },
};
const freezeObj = Object.freeze(obj);
freezeObj.name = "new name";
console.log(freezeObj.name); // 仍然是yd
// 严格模式会报错
("use strict");
freezeObj.name = "new name"; // TypeError
//Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'

// 但是info 是没有被冻结的
freezeObj.info.newName = "ydshenzhen";
console.log(freezeObj.info.newName); // ydshenzhen
```

参考实现：

```ts
function myFreeze(obj) {
  // 判断参数是否为Object类型
  if (obj instanceof Object) {
    // 1;
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        Object.defineProperty(obj, key, {
          writable: false, // 设置只读
        });
        Object.seal(obj); // 封闭对象
      }
    }
    // 2;
    Object.keys(obj).forEach((i) => {
      if (obj[i]) {
        Object.defineProperty(obj, i, {
          writable: false,
        });
        Object.seal(obj); // 封闭对象
      }
    });
  }
  return obj;
}
```

---

**js 实现一个策略模式**

**策略模式**：

`定义一组算法，将每个算法都封装起来，并且使他们之间可以互换`

优点：

`策略模式利用组合、委托等技术和思想，可以避免很多 if 条件语句`

`策略模式提供了开放-封闭原则，使代码更容易理解和拓展`

```ts
/**
 * 模拟年终奖等级评定
 */

function getCalculateBounce(level:"A"|"B"|"C"|"D",salary:number){
    switch(level){
    case 'A':
        return salary * 1.5
        break
    case 'B':
        ...
    }
}
```

```ts
/**
 * 策略模式重构
 *
 */

class A {
  calculate(salary) {
    return salary * 1.5;
  }
}
class B {
  calculate(salary) {
    return salary * 1.3;
  }
}
class C {
  calculate(salary) {
    return salary * 1.1;
  }
}
class D {
  calculate(salary) {
    return salary * 1;
  }
}

class Salary {
  construct() {
    this.salary = null;
    this.level = null;
  }

  setSalary(s) {
    this.salary = s;
  }

  setLevel(level) {
    this.level = level;
  }

  getBounce() {
    return this.level.calculate(this.salary);
  }
}

const memberA = new Salary();
memberA.setSalary(1000);
memberA.setLevel(new A());
console.log(memberA.getBounce());
memberA.setLevel(new B());
console.log(memberA.getBounce());
```
