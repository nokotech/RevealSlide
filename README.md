# Quick start reveal.js

## clone reveal.js
* `git clone https://github.com/hakimel/reveal.js.git`

## fix reveal.js/index.html 
~~~
<div class="reveal">
    <div class="slides">
        <section data-markdown="1.md" data-separator="^---$" data-separator-vertical="===$" data-notes="^Note:" data-charset="utf-8"></section>
    </div>
</div>
~~~

## setup node
* `npm --prefix ./reveal.js install ./reveal.js`
* `npm start --prefix ./reveal.js`

## copy slide.md
* `cp slide.md reveal.js/1.md`

## watch slide.md
* `npm run watch`