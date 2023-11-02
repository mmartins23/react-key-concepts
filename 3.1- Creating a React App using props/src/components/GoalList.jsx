import GoalItem from "./GoalItem.jsx";

export default function GoalList() {
  return (
    <ul>
      <GoalItem
        title={"Teach React in a highly-understandable way"}
        description={
          "I want to ensure, that you get the most out of this book and you learn all about React!"
        }
      />
      <GoalItem
        title={"Allow you to practice what you learned"}
        description={
          "Reading and learning is fun and helpful but you only master a topic,if you really work with it! That's why I want to prepare many exercises that allow you to practice what you learned."
        }
      />
      <GoalItem
        title={"Motivate you to continue learning"}
        description={
          " As a developer, learning never ends. I want to ensure that you enjoy learning and you're motivated to dive into advanced (React) resources after finishing this book. Maybe my complete React video course?"
        }
      />
    </ul>
  );
}
