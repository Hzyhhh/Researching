# JS

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
