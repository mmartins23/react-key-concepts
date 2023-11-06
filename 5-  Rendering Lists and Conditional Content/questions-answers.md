## 1. What is "conditional content"?

Conditional content is content that is only rendered if certain conditions are met. You could, for example, only render a `<p>` if a button was clicked.

***

## 2. Name at least two different ways of rendering JSX elements conditionally.

Here are two different ways to conditionally render JSX elements in React:

1. **Ternary Operator:** You can use a ternary operator to conditionally render elements based on a condition. For example:

```jsx
{isAuthenticated ? <WelcomeMessage /> : <LoginButton />}
```

In this example, if the `isAuthenticated` variable is true, it renders the `WelcomeMessage` component; otherwise, it renders the `LoginButton` component.

2. **Using Logical && Operator:** You can use the logical AND (`&&`) operator to conditionally render elements. For example:

```jsx
{isLoggedIn && <UserProfile />}
```

In this case, if `isLoggedIn` is true, it renders the `UserProfile` component. If `isLoggedIn` is false, nothing is rendered (which is essentially "false" in a logical AND condition).


***

## 3. Which elegant approach can be used to define element tags conditionally?

An elegant approach to define element tags conditionally in React is by using a ternary operator. This allows you to conditionally render different elements based on a condition. Here's an example:

```jsx
{condition ? <ElementA /> : <ElementB />}
```

In this example, if the `condition` is true, it renders `ElementA`; otherwise, it renders `ElementB`. This approach keeps your code clean and easy to read, making it a popular choice for conditional rendering in React components.

***

## 4. What's a potential downside of using only ternary expressions (for conditional content)?

Ternary expressions can sometimes be difficult to read or understand, especially if nested and / or more complex content is handled with them.

***

## 5. How can lists of data be rendered as JSX elements?

You can use `for` loops for populating arrays with JSX elements. JSX is capable of converting an array of JSX elements into multiple sibling JSX elements.
As an alternative to `for` loops, you can use the `map()` method to map an array of any kind of data into an array of JSX elements.

***

## 6. Why should keys be added to rendered list items?

Keys helps React with identifying rendered DOM elements. Keys therefore help React avoid re-rendering unchanged JSX elements unnecessarily.

***

## 7. Give one example each for both a good and a bad key.

Good key: A unique id that is attached to some data (e.g. a user id attached to more user data)

Bad key: A random number that's re-generated frequently.

***