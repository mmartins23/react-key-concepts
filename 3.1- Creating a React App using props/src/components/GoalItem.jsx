export default function GoalItem({title, description}) {
  return (
    <li>
    <article>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </article>
  </li>
  )
}
