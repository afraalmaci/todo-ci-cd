import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;