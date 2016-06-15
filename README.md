# Hexo Autotag

[![Linux Build][travis-image]][travis-url]
[![NPM version][npm-v-image]][npm-url]
[![NPM Downloads][npm-dm-image]][npm-url]
[![Test Coverage][coveralls-image]][coveralls-url]


A simple way to store application configuration

## Installation
```sh
npm install hexo-autotag --save
```

--------------------------------------------------------------------------------

## Usage
```markdown
---
title: Test Hexo Autotag
tag: Hexo
---

Plz check this tag: {% autotag Hexo %} or {% autotag NodeJS %} if they exist

```

--------------------------------------------------------------------------------

## License
Copyright (c)  2016 [Alexander Krivoshhekov](http://github.com/SuperPaintman)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[npm-url]: https://www.npmjs.com/package/hexo-autotag
[npm-v-image]: https://img.shields.io/npm/v/hexo-autotag.svg
[npm-dm-image]: https://img.shields.io/npm/dm/hexo-autotag.svg
[travis-image]: https://img.shields.io/travis/SuperPaintman/hexo-autotag/master.svg?label=linux
[travis-url]: https://travis-ci.org/SuperPaintman/hexo-autotag
[coveralls-image]: https://img.shields.io/coveralls/SuperPaintman/hexo-autotag/master.svg
[coveralls-url]: https://coveralls.io/r/SuperPaintman/hexo-autotag?branch=master
