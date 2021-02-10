## 怎么判断 JavaScript 的各种类型--回字的六种写法

这个问题的讨论基础是建立在 js 的七种内置类型上的：

```
String
Number
Undefined
Null
Boolean
Symbol
Object
```

在判断类型上，我们有以下几种办法。

```js
typeof
Object.prototype.toString.call()
constructor
instanceof
```

### typeof

对于大多数基本类型，使用`typeof`是比较实用的:
```js
typeof undefined// "undefined"

typeof true	// "boolean"

typeof 1 // "number"

typeof "1"	// "string"

typeof {a: 1} // "object"

typeof Symbol()	 // "symbol"

```

为什么是大多数呢？因为null在这里的结果是出乎意料的

```js
typeof null	// "object"
```

### .toString.call()

使用这种方法无论是判断基本类型还是复杂类型，都是最准确的：

```js
const toString = Object.prototype.toString

toString.call(null)// "[object Null]"

toString.call(undefined)// "[object Undefined]"

toString.call(1)// "[object Number]"

toString.call(true)// "[object Boolean]"

toString.call('1')// "[object String]"

toString.call({a: 1})// "[object Object]"

toString.call([1,2,3])	// "[object Array]"

toString.call(Symbol())// "[object Symbol]"

toString.call(function a() { })// "[object Function]"

toString.call(new Date)// "[object Date]"

toString.call(Math)// [object Math]

```

### constructor

这种方式是判断对象的构造函数:

```js
const a = null;
a.constructor	// 报错：因为 null 是 JS 原型链的起点，没有构造函数；

const b = undefined;
b.constructor	// 报错：它也没有构造函数；

const c = [1, 2, 3];
c.constructor === Array;   // true	数组

const d = 123;
d.constructor === Number;  // true	数字

const e = '123';
e.constructor === String	// true	字符串

const f = {a: 123};
f.constructor === Object;   // true 对象

const g = Symbol()
g.constructor === Symbol	// true 符号

------------------单独出来讲的几个注意事项----------------------

const arr = [1, 2, 3];
arr.constructor === Array	// true 数组 能够很好地区分

const fun = function a() { };
fun.constructor === Function  // true 函数

const date = new Date();
date.constructor === Date;	 // true 日期 

const reg = new RegExp();
reg.constructor === RegExp;	// true 正则 

const math = Math
math.constructor === Math;	// false 不可以像Object.prototype.toString.call()一样区分;

abc.constructor === Object   // true 事实上没有Math这个构造函数，Math的构造函数在 Object上的

```

### instanceof

instanceof 用于检测构造函数的 prototype 属性是否出现在某个实例的原型链上.
>instanceof 可以精准判断引用数据类型 Array，Function，Object，而基本数据类型不能被 instanceof 精准判断，因为它本身不是一个实例对象

```js
2 instanceof Number                   // false

true instanceof Boolean              // false

'str' instanceof String              // false  

Symbol('protein') instanceof Symbol    // false

new Number(2) instanceof Number         // true

[] instanceof Array                   // true

function(){} instanceof Function     // true

{} instanceof Object               // true    
```

### 总结

- typeof运算符适合检测基本数据类型，且返回类型的字符串
- instanceof运算符适合检测引用类型值
- constructor、toString.call()返回对象的类型，可以准确判断数值的类型、少数情况下使用toString.call()判断类型会更精确。