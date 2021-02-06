# Generator 生成器与协程

## 协程

传统的编程语言，早有异步编程的解决方案（其实是多任务的解决方案）。其中有一种叫做”协程”（coroutine），意思是多个线程互相协作，完成异步任务。 
协程有点像函数，又有点像线程。它的运行流程大致如下。

> 第一步，协程A开始执行。 
>
> 第二步，协程A执行到一半，进入暂停，执行权转移到协程B。 
>
> 第三步，（一段时间后）协程B交还执行权。 
>
> 第四步，协程A恢复执行。

## Generator

>Generator 函数是`协程`在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。

它不同于普通函数，是可以暂停执行的，所以函数名之前要加星号，以示区别。整个Generator 函数是封装的异步任务，或者说是异步任务的容器，异步操作需要暂停的地方，都用yield声明。以下是一个简单的Generator 函数与运行过程。

```js
function* gen(x){
    const foo = yield x + 2
    return foo
}

const bar = gen(2)
bar.next() // { value: 4, done: false }
bar.next() // { value: undefined, done: true }
```

可以看到，在Generator 函数运行的过程中是可以中断的，这恰好就是协程的原理。