# '冒烟测试'到底冒的是啥

最近跟测试在探讨周璇所谓的'冒烟测试'。该不该将冒烟测试对等于正式测试？冒烟的内容主要是什么？总结成这篇文章仔细探讨一下。

## 建立信心的冒烟测试

> 冒烟测试 (也包括信心测试 、健全性测试)是指初步地进行测试，并以此展示一些简单但足以影响发布软件版本的这一高级别的错误.在 [DevOps](https://zh.wikipedia.org/wiki/DevOps) 范例中，使用 BVT 步骤是持续集成成熟阶段的标志之一.

总结来说：冒烟测试是给到开发者和测试者信心的一个测试阶段。通常在这个阶段里，程序运行还是有非常多小问题的。也就是说，在这个版本里能给到测试和产品一个心理预期。以便他们在这个预期上继续提些反测需求以及建议。

在这个阶段里测试的**重点**在于验证程序运行的主要流程是否通过、是否有隐藏的导致中断测试的行为。因此，在冒烟过程中，一切非导致主要流程的测试用例都是不合格的！例如开发者想测主流程线还少了哪部分逻辑，结果冒烟测试用例写的是哪块的颜色不一致。通常在这种情况下，测试冒烟提的这些缺陷，往往都是不会立即被修复的！原因是在冒烟的这个阶段里，仍然有细微的需求需要实现，并不是说开发者在提交一个冒烟版本出去这个软件就开发完成了。

## 冒烟的目的

开发者提冒烟测试的目的其实很简单：作为开发者有可能只是考虑到站在自己的角度审视这个产品应该是怎么样的，在主流程能跑通的这个阶段里，开发者需要更多人的视角一起审视这个程序 --包括逻辑，交互以及用户体验。以帮助开发者有目的有方向地继续优化交互的代码。在这个关系里，是需要测试人员和产品共同帮助的，冒烟的流程才能合理的进行下去。用一个恰当的词描述的话 --可以叫做**开发协作**。