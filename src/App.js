import { useRef, useState } from "react";
import "./App.module.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Daryl");
  const [lastName, setLastName] = useState("Howai");

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>

        <form>
          <input placeholder="first name" ref={firstNameRef} />
          <input placeholder="last name" ref={lastNameRef} />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default App;

// // import stlyes from "./App.module.css";
// import { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = (e) => {
//     e.preventDefault();
//     setTodos([...todos, input]);
//     setInput("");
//   };

//   return (
//     <div className="app">
//       <h1>Welcome to my todo list</h1>
//       {/* <h2 className={stlyes.error}>An error occured</h2> */}
//       <form>
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           type="text"
//         />
//         <button type="submit" onClick={addTodo}>
//           Add todo
//         </button>
//       </form>

//       <h2>List of Todos</h2>
//       {todos.map((todo) => (
//         <p>{todo}</p>
//       ))}
//     </div>
//   );
// }

// export default App;
