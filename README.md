# daily-schawarma
An asset pipeline to help with front end development at Resmio. It uses webpack under the hood to compile all of our assets.

## The component philosophy ##
Traditionally we have separated our assets by technology instead of by function, but recently this trend is shifting to a more modular approach. With React we already have the HTML of a component defined inside its Javascript code using JSX templates. Webpack also can require CSS files from a Javascript file and scoped to just that file (so no need for long class names to avoid collisions). This allows us to separate our code into small self contained modules, that can be easily maintained.

[Here](http://simonsmith.io/using-webpack-to-build-react-components-and-their-assets/) is a good explanation about how modules work.

## cssnext ##
Our pipeline also detects changes in our css and runs them through the [cssnext](http://cssnext.io/) plugin, this allows us to use future css syntax today, that gets transpiled to something that works in actual browsers, as the browsers evolve we can remove postprocessing rules from the plugin and use the native css in production.

Also rules are relative to a module, and should be written inside the component folder and imported from the react component, we have the option to bundle all the css in one big file instead of having it inlined, if we see performance improvements in doing it.
