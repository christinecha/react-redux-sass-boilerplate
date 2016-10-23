React/Redux/SaSS/Webpack
=====

A super bare-bones boilerplate for this super common setup. No server-side code.

Includes:
- React
  - A root component (App) and a sample child component
- Redux
  - Basic reducer/action/container setup for one simple method (changing the 'theme')
- SaSS
  - Using `.scss` instead of `.sass` for easier transfer in case you want to use vanilla CSS or LESS instead
- Webpack
  - Using `babel-loader` for Javascript with ES6 and React presets
  - Using `style-loader`, `css-loader`, and `sass-loader` for CSS (looks for `.scss` files)

Get Started
------

```
$ git clone https://github.com/christinecha/react-redux-sass-boilerplate.git
$ npm install
$ npm start
$ open https://localhost:8080/webpack-dev-server/
```

Enjoy!
