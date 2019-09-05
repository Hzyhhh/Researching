# 专题分享 -- CSS Grid

css的flex将容器变为一维布局, 意思是所有块级元素在父级容器设置为``display: flex``时, 都可以让其变为想要的轴线排列布局。而``display: grid``以及其他grid属性的出现, 则是将页面样式带入了二维布局中。Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。

## grid 基本概念

> **容器和项目**

采用网格布局的区域叫做'容器'(container), 在container上设置**display: grid**就能使用网格布局。而在容器内的元素我们称为'项目'(item), 在css grid里, 处理item的css属性有很多, 这些属性也足够使得grid网格布局更强大。

> **行和列**

容器里水平方向的项目称作行(row), 垂直方向的项目称作列(column)

> **单元格**

每一个item项目称作一个单元格, 单元格里可放不同元素, 元素在不同单元格里的不同样式组成了容器的不同布局

> **网格线**

划分网格的线，称为'网格线'（grid line）。水平网格线划分出行，垂直网格线划分出列。正常情况下，n行有n + 1根水平网格线，m列有m + 1根垂直网格线，比如三行就有四根水平网格线。

## grid 家族属性介绍

### grid container 属性介绍

- **display: grid**
- display: inline-grid
- **grid-template-rows**
- **grid-template-columns**
- **grid-template-area**

- grid-row-gap 属性，
- grid-column-gap 属性，
- grid-gap 属性

- row line: 行线
- column line: 列线
- track: 网格轨道，即行线和行线，或列线和列线之间所形成的区域，用来摆放子元素
- gap:  网格间距，行线和行线，或列线和列线之间所形成的不可利用的区域，用来分隔元素
- cell: 网格单元格，由行线和列线所分隔出来的区域，用来摆放子元素
- area: 网格区域，由单个或多个网格单元格组成，用来摆放子元素

### grid item 属性介绍

## 实例讲解

- grid布局对比
- 实现同一个效果css对比 

## 兼容性

https://codepen.io/hzyhhh/pen/QWLajvr