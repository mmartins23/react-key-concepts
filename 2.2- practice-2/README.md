# Activity 2.2: Creating a React App to Log Your Goals for This Book

In this activity, you'll create a new React project to track your learning progress and main goals for a book. You'll organize your goals using multiple components. Each goal will be represented by a separate component, and all these goal components will be grouped together into another component that lists all your main goals. Additionally, you can include an extra header component that contains the main title for the webpage.

## Steps to Complete

Follow these steps to complete this activity:

1. **Create a New React Project**: Start by creating a new React project using the `create-react-app` command:

   ```bash
   npx create-react-app learning-progress
   ```

2. **Create a Components Folder**: Inside your new project, create a folder named `components`. This folder will hold multiple component files.

3. **Create Individual Goal Components**:
   - Inside the `components` folder, create individual component files for each of your learning goals. For instance, you can create files like `FirstGoal.js`, `SecondGoal.js`, `ThirdGoal.js`, and so on.
   - In each individual goal component file, define and export a component function (e.g., `FirstGoal`, `SecondGoal`, `ThirdGoal`) to represent different goals. These functions should return JSX code containing the goal text and a fitting HTML structure.

4. **Create List of Goals Component**: In the `components` folder, define a component named `GoalList`. This component will group all your individual goal components together and list your main goals.

5. **Create Page Header Component**: In the `components` folder, create another component named `Header`. This component will contain the main title for the webpage.

6. **Import and Output Individual Goal Components**: Within the `GoalList` component, import the individual goal components (e.g., `FirstGoal`, `SecondGoal`, `ThirdGoal`) and include them in the `GoalList` component's JSX structure.

7. **Import and Output GoalList and Header Components**: In the root `App` component, import the `GoalList` and `Header` components. Replace the existing JSX code in the `App` component with the usage of these components to render your goals page.

With these steps, you'll have a React application that effectively displays and organizes your main learning goals. Your goals are represented by individual components and grouped into a list, along with a header for the webpage title. This structured approach makes it easy to manage and present your goals as you continue your learning journey.