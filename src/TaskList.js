export default function TaskList(props) {
  let tasks = props.tasks;
  return (
    <div>
      {tasks.map((task, index) => (
        <p id={index}>{task}</p>
      ))}
    </div>
  );
}
