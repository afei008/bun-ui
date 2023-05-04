---
lang: zh-CN
title: bun-ui
description: 一个简单的css样式库
---

<!-- @format -->

## 颜色（Color）

<iframe-load src="/color.html" height="100" />

## 栅格（Grid）

### 默认

不指定 `b-col-*` 时将均分，就是普通的 `flex: 1;` 属性

<iframe-load src="/grid/grid.html" height="50" />

@[code{6-} html](@/public/grid/grid.html)

### 12 格

默认为 12 格栅格系统

<iframe-load src="/grid/grid-12.html" height="50" />

@[code{6-} html](@/public/grid/grid-12.html)

### 10 格

为了适应更多情况，添加了 10 格栅格

<iframe-load src="/grid/grid-10.html" height="50" />

@[code{6-} html](@/public/grid/grid-10.html)

### 间隔

不指定 `b-col-*` 时，可以使用 `g-*` 指定间隔。`*` 的取值范围为 4 的倍数，最大为 40

<iframe-load src="/grid/grid-gap.html" height="50" />

@[code{6-} html](@/public/grid/grid-gap.html)

指定 `b-col-*` 时

-   如果使用负边距，得在外层再包裹一层，偏离了本栅格的初衷，因此不采用
-   使用 `CSS` 根据子元素个数动态计算每一项的宽度，会导致代码中多了很多代码，如有需要自行计算

### 嵌套

嵌套使用

<iframe-load src="/grid/grid-nest.html" height="50" />

@[code{6-} html](@/public/grid/grid-nest.html)

### 偏移

使用 `offset-*` 指定偏移

<iframe-load src="/grid/grid-offset.html" height="50" />

@[code{6-} html](@/public/grid/grid-offset.html)

## 按钮(Button)

### 常规

常规按钮

<iframe-load src="/button/button.html" height="70" />

@[code{6-9} html](@/public/button/button.html)

### 镂空

镂空按钮

<iframe-load src="/button/button-plain.html" height="70" />

@[code{6-8} html](@/public/button/button-plain.html)

### 圆角

圆角按钮

<iframe-load src="/button/button-round.html" height="120" />

@[code{6-14} html](@/public/button/button-round.html)

### 文本

文本按钮

<iframe-load src="/button/button-text.html" height="70" />

@[code{6-9} html](@/public/button/button-text.html)

### 禁用

禁用按钮

<iframe-load src="/button/button-disabled.html" height="180" />

@[code{6-19} html](@/public/button/button-disabled.html)

### 按钮组

一组按钮

<iframe-load src="/button/button-group.html" height="120" />

@[code{6-17} html](@/public/button/button-group.html)

### 垂直按钮组

垂直排列的一组按钮

<iframe-load src="/button/button-group-vertical.html" height="170" />

@[code{6-17} html](@/public/button/button-group-vertical.html)

## 表单（Form）

### 常规

常规表单

<iframe-load src="/form/form.html" height="240" />

@[code{6-15} html](@/public/form/form.html)

### 标签位置

更改标签位置为左边

<iframe-load src="/form/form-label.html" height="180" />

@[code{6-15} html](@/public/form/form-label.html)

### 选框

单选框与多选框的样式

<iframe-load src="/form/form-radio.html" height="150" />

@[code{6-25} html](@/public/form/form-radio.html)

### 行内选框

位于同一行的选框

<iframe-load src="/form/form-radio-inline.html" height="70" />

@[code{6-21} html](@/public/form/form-radio-inline.html)

### 下拉框

下拉框
<iframe-load src="/form/form-select.html" height="260" />

@[code{6-26} html](@/public/form/form-select.html)

### 行内表单

所有表单项位于一行
<iframe-load src="/form/form-inline.html" height="150" />

@[code{6-24} html](@/public/form/form-inline.html)

### 禁用

禁用表单
<iframe-load src="/form/form-disabled.html" height="90" />

@[code{6-26} html](@/public/form/form-disabled.html)
