---
title: "Tilt Effect Using Tilt.js."
path: blog/Tilt Effect Using Tilt.js.
tags: [javascript, html,css, tiltjs]
date: 2021-09-28
excerpt: Blogging and writing about tech stacks is always been my thing. I like to experiment with different technologies and write my views on them. Web technologies has always been my passion. Check my blog for codebits on various web technologies.
---


First of all what is tilt js it's a tiny requestAnimationFrame powered **60+fps** lightweight parallax hover tilt effect for jQuery. you don't need jQuery or any css to create this thing it's very easy to create.

Tilt js has a lot of methods to create different type of tilt effects

## Install Tilt js

```bash
# Using  yarn
yarn add tilt.js
```

```bash
# Install yarn
npm install -g yarn
```


Let's head over to coding section...

## Step 1 - Add HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tilt Effect using tilt js</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- Let's create a div box -->
    <div class="flex-container">
      <a
        data-tilt
        data-tilt-glare="true"
        data-tilt-transition="true"
        data-tilt-scale="1.1"
        class="c-logo"
        href=" "
        title="Tilt.js demo "
      >
        <span>PrituDev</span>
      </a>
      <!-- Import tilt js -->

      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/130527/vanilla-tilt.min.js"></script>
    </div>
  </body>
</html>
```

Next let's create our box better and add tilt effect using css only no javascript needed...

## Step 2 - Add css

```css
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700');
* {
  box-sizing: border-box;
}
body {
  font-family: 'Fira Sans';
  background: #e7e7e7;
  margin-top: 5%;
}
.flex-container,
.c-logo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
}
.c-logo {
  width: 300px;
  height: 300px;
  background-color: #7e56ff;
  background-image: linear-gradient(
    150deg,
    #5a00ff 0%,
    #ff1ff7 100%,
    #ff1ff7 100%
  );
  box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
  color: white;
  text-decoration: none;
  font-size: 4em;
  font-weight: 300;
  transform-style: preserve-3d;
  transform: perspective(500px);
  box-shadow: 0 20px 70px -10px rgba(0, 0, 0, 0.7), 0 50px 100px 0 rgba(0, 0, 0, 0.2);
}
.c-logo > span {
  display: block;
  transform: translateZ(50px) scale(0.6);
  text-shadow: -2px -1px 2px rgba(150, 150, 150, 1);
}
.c-logo:hover:after {
  transform: translateZ(-100px);
}
```

You don't need to write javascript we can just do it using css transform property only, and yeah you are done wasn't that very easy? comment now!.

<p align="center">

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0078kp928zrg6rou0r0u.png)

</p>