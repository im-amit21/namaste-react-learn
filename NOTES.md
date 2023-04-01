# Inception

## What is Emmet ?

    Emmet is a free add-on for text editor that allows us to enter shortcuts which expanded into full pieces of code for writing HTML and CSS.

## Difference between a Library and Framework.

    `Library`:
        - It is a collection of packages/code which used to perform the specific task.
        - When user uses the library, the user has its all control.
            e.g In react we can use it only for single div, rest can be code separately.

    `Framework`:
        - Framework is a basic flow and architecture of an application.
        - Framework has its all control on codebase.

## What is CDN? Why do we use it ?

    - A Content Delivery Network (CDN) is a collection of servers in locations all over the world that provide the fast delievery of Internet Content.
    - Its helps companies to deliver the content through a network of servers in secure and efficient way.
    - We can use it to improve the user experience, enhancing security and to increse speed.
    - React libararies are hosted here.

## Why is React known as React ?

    - React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data
    - It was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
    - It create complex, intractive use interfaces by breaking them into smaller resuseable components.
    - Facebook - 2011 | Official Release - 2013

## What is crossorigin in script tag.

    - The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
    - To load the resources from another server CORS used to request the resource (domain)
    - <script crossorigin="other server" />

## What is differnece between React and ReactDOM

    - React is a Javascript library for building the user interfaces. (Core React Algorithm.)
    - ReactDOM is also a JS library which allows React to intract with DOM. (To modify the DOM)

## What is difference between react.development.js and react.production.js files via CDN?

    - `react.development.js` :
        - Its the state of application used by the developers for devlopement reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.


    - `react.production.js`:
        - Its the state of application used by the client which will have the minified and builded version, which is more faster than developement

## What is async and defer ?

    - `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.

    ```sh
    <script src="..." async></script>
    ```

    `Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.

    ```sh
    <script src="..." defer></script>
    ```
