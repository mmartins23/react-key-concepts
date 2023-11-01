## 1. Which "problem" do props solve?

Props in React solve the problem of data sharing and configuration management by allowing the transfer of information from parent components to child components. This promotes component reusability and dynamic UI creation.

***

## 2. How are props passed into components?

Props in React are passed into components by defining them as attributes in the JSX code when rendering a child component within a parent component. The parent specifies the prop values within curly braces, and the child component accesses and uses these props through the `props` object.


***

## 3. How are props consumed inside of a component function?

The props are passed as an argument to your component functions by React - automatically and grouped as an object. Inside the component function, props can therefore be consumed by accepting a "props" parameter (the first parameter of the function).

***

## 4. Which options exist for passing (multiple) props into components?

When passing multiple props, you can either provide mutiple attributes (i.e. many key-value pairs) and / or group prop values together into an object or array and pass that object / array as a single attribute to a component.

Inside the component function, you can also use "object destructuring" to pull prop values out of the received "props" object.

***