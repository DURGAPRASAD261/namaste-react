# NPM
-> Not stands for Node Package Manager.
-> It managing the pckages..but it doesn't stands for the Node Package Manager.
-> It's biggest package manager, all the packages are hosted over there.
-> when create react app, it is automatically installed.

# Package.json file
-> It is a configuration of npm.
-> It keeps all the track of packages which are used in our project.

# Bundler file
-> It bundles the app properly, which pushed to the production.
-> webpack, wheat, parcel are types of bundlers.
-> parcel is a one of the best bundler.

# NOTE::
    -> There is a 2 types of dependencies/packages are there:
      1. Dev dependency -> it requires basically for in a development phase. (eg, npm i -D <package-name>)
      2. Normal dependency -> used in production also.
    -> # ** Difference between tilde ( ~ ) and caret ( ^ ) in package.json ** (IMP interview question)
    -> caret ( ^ ) - 

# package-lock.json file
-> Keeps a record of every exact versions of package or dependencies.
-> why it is useful?
-> what is this?

# Difference b/w Package.json Vs package-lock.json *****6
-> ???

# node_modules
-> It containes all the code that we fetch from NPM.
-> It's a kind of DB, contains the actual data of the dependencies / packages.
-> It is a collection of dependencies.
-> Transitive dependencies.....

# npx Vs npm
-> npm - uses to install the packages.
-> npx - uses to execute the packages.

# This CDN links is not a preferable way to bring the react, react DOM into the project. 
  Because, If it is in package json..then it is very easy to maintain the dependencies, packages

# Parcel
-> Creates Dev build, creates local server
-> do's image optimisation
-> HMR - Hot Module Replacement
-> File Watching Algorithm - written in C++
-> Caching - faster builds
-> It do's bundling/minify/optimise the file..files can be compressed.
-> Consisitent Hashing --??
-> It will do code splitiing also.
-> It will do, Differential Bundling --?? (It will give you the ability for different type of older browsers)
-> Tree shaking - It will remove unused codes.
-> It creates, different Dev and prod bundles.

# React.createElement()
-> It accepts 3 - arguments are (tagName, Attributes, contentInsideTags);
-> It creates an Object. When we renders this element to the DOM, It(DOM) converts into the html element.

# JSX 
-> JSX is not a part of the React. Fundamentally both are different.
-> JSX is not a HTML in JS. It is HTML like syntax. (It looks like html, XML)

# Babel 
-> It is a JS compiler. It converts JSX code to react code.
-> It does transpiling the code, even for old browsers understand.
-> JSX => Babel: transpiles it to React.createElement => then, React.createElement gives => JS Object => HTML Element(render)

# React Component
-> 2 Types of components:  Class based components and Functional based components.
-> Class based components - OLD way.
-> Functional component - NEW way.

# React Functional Component
-> Functional components are just a java script functions.
-> Component composition: composing 2 components one in another. like nested components.

# config driven UI
-> Controlling the UI by backend DATA.
-> All the UI driven by config(i.e, api data).
# Cloudinary
-> it is a image CDN..all the images are hosted in Cloudinary CDN.

# Reconciliation Algorith (React Fibre) ******
-> Virtual DOM is a representation of Actual DOM or object.
-> Actual DOM ??
-> Diff Algorithm ?? --> It tries to find the difference btw OLD Virtual DOM and NEW Virtual DOM.
-> why React is so fast? Because, it does efficiant DOM manipulation.
-> HOW? It has Virtual DOM, it has a Diff algorithm. Then what?

# Diff Algorithm ??

# Monolith Architecture
-> 

# Separation of concerns (SoC) 

# state, setState
-> when we call, setState -> it updates state value and it re-renders/ refreshing whole component and re-renders.
-> Whenever state variables update, react triggers a reconciliation cycle (re-renders the component).

# useEffect
-> If no dependency array => It will called on every render.
  useEffect(()=>{});
-> If dependency array is empty [], it will render on initial render (just once).
  useEffect(()=>{}, []);
-> If dependency array => it will render on every time dependency changes.

# useState
-> Never creates useStates out side of the component, inside local functions, inside if/else conditions, inside loops --> creates inconsistent returns.
-> 

# createBrowserRouter, RouterProvider, Link

# 2 Types of Routing in web apps
-> Client side Routing and Server side Routing.
->
