export default function EnterTask(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        value={props.currentInput}
        onChange={props.onChange}
      ></input>
      <input type="submit" />
    </form>
  );
}
