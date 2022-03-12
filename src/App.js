import './App.css';
import Header from './Header';
import EnterTask from './EnterTask';
import TaskList from './TaskList';
import { useState } from 'react';

function App() {
  let [currentTasks, setCurrentTasks] = useState([]);
  let [currentInput, setCurrentInput] = useState('');

  let handleChange = (event) => {
    let value = event.target.value;
    setCurrentInput(value);
  };

  let handleSubmit = (event) => {
    console.log('Submitting...', currentInput, currentTasks);
    event.preventDefault();
    setCurrentTasks((last) => [currentInput, ...last]);
  };

  return (
    <>
      <Header />
      <EnterTask
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={currentInput}
      />
      <TaskList tasks={currentTasks} />
    </>
  );
}

export default App;
