# BEM Flexbox Grid

This is a lightweight library for creating a grid layout using CSS flexbox and BEM methodology. 

### So what are your key benefits using this library?

* Simple and easy to learn structure
* Lightweight (minified and autoprefixed less than 7 kilobytes)
* Configurable Sass variables (class names, responsive gutters and amount of columns)
* Breakpoint is separated by a question mark in the modifier for readability reasons

Not much is needed to create a simple grid: A grid container and the individual columns are enough. We can specify the column's width individually with a modifier from 1 to 12. The width can also be set dependent on a breakpoint. To do this, simply append the breakpoint with a question mark

```html
<div class="grid">
    <div class="grid__column grid__column--6?medium">
        <div>Content for column 1</div>
    </div>
    <div class="grid__column grid__column--6?medium">
        <div>Content for column 2</div>
    </div>
</div>
```



## Grid modifieres

There are some modifieres for the column alignment:\
Horizontally: `--start`,` --center`, `--end`\
Vertically: `--top`, `--middle`, `--bottom`

```html
<div class="grid grid--start grid--top">
    <div class="grid__column grid__column--3">
        <div>Very long, long long, long long, long long, long long, long long, long column</div>
    </div>
    <div class="grid__column grid__column--3">
        <div>Column</div>
    </div>
</div>
<div class="grid grid--center grid--middle">
    <div class="grid__column grid__column--3">
        <div>Very long, long long, long long, long long, long long, long long, long column</div>
    </div>
    <div class="grid__column grid__column--3">
        <div>Column</div>
    </div>
</div>
<div class="grid grid--end grid--bottom">
    <div class="grid__column grid__column--3">
        <div>Very long, long long, long long, long long, long long, long long, long column</div>
    </div>
    <div class="grid__column grid__column--3">
        <div>Column</div>
    </div>
</div>
```
---
Made with &#10084; in Bielefeld
