## 1. With which language are styles for React components defined?

You can use CSS, no special language or React-specific approach has to be used.

***

## 2. Which important difference, compared to projects without React, has to be kept in mind when it comes to assigning classes to elements?

CSS classes are normally assigned to elements via the `class` attribute. When working with JSX, that becomes `className`!

***

## 3. How can styles be assigned dynamically and conditionally?

Just as any value can be set or assigned dynamically / conditionally. You can set the `style` or `className` props to both hard-coded / static and dynamic or conditional values (by using single curly braces).

***

## 4. What does "scoping" mean in the context of styling?

"Scoping" refers to the restriction of styles to a specific component. If styles would be scoped to a component, they could not clash with similar styles assigned elsewhere. This matters when working with CSS class names. Since CSS, by default, is global, duplicate class names, defined in different places, would clash and overwrite each other. If styles were scoped to a component, they would not do that. Out of the box, styles aren't scoped though.


***

## 5. How could styles be scoped to components? Briefly explain at least one concept that helps with scoping

One concept that helps with scoping styles to components in React is CSS Modules. CSS Modules are a technique that allows you to scope styles to a specific component, preventing style leakage and conflicts across different parts of your application.

Here's how CSS Modules work:

1. **File-based Scoping:** Each CSS Module is associated with a single component or file. The class names defined within the module are unique to that component or file.

2. **Local Class Names:** In your component's JavaScript or JSX file, you import the styles from the CSS Module. The imported styles are typically stored as an object, and class names are accessed as properties of this object.

3. **Automatic Scoping:** When you use a class name from the CSS Module in your component's JSX, React ensures that it only applies the styles defined within the associated module to the elements in your component.

Here's an example of using CSS Modules for scoping styles:

```jsx
// MyComponent.js
import React from 'react';
import styles from './MyComponent.module.css';

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>This is a scoped component.</p>
    </div>
  );
};

export default MyComponent;
```

```css
/* MyComponent.module.css */
.container {
  background-color: lightgray;
  padding: 10px;
}

.text {
  color: blue;
}
```

In this example, the styles from the `MyComponent.module.css` file are scoped to the `MyComponent` component, preventing any style conflicts with other components in your application.