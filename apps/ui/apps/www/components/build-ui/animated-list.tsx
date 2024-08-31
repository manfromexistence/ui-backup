import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function SimpleList() {
  let [todos, setTodos] = useState([
    { id: 3, text: "Todo 3" },
    { id: 2, text: "Todo 2" },
    { id: 1, text: "Todo 1" },
  ]);

  function addTodo() {
    let newId = Math.max(...todos.map((t) => t.id)) + 1;
    setTodos([{ id: newId, text: `Todo ${newId}` }, ...todos]);
  }

  function removeTodo(todo: { id: any; text?: string; }) {
    setTodos((todos) => todos.filter((t) => t.id !== todo.id));
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      <ul>
        <AnimatePresence initial={false}>
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              style={{ overflow: "hidden" }}
            >
              <button onClick={() => removeTodo(todo)}>{todo.text}</button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

// 1
// function ListWithCorrection() {
//     // ...
  
//     return (
//       <ul>
//         <AnimatePresence initial={false}>
//           {todos.map((todo) => (
//             <motion.div
//               key={todo.id}
//               initial={{ height: 0 }}
//               animate={{ height: "auto" }}
//               exit={{
//                 height: 0,
//                 y: -53 * countSelectedTodosAfter(todos, selectedTodos, todo),
//                 zIndex: groupSelectedTodos(todos, selectedTodos)
//                   .reverse()
//                   .findIndex((group) => group.includes(todo)),
//               }}
//               style={{ overflow: "hidden", zIndex: 1000 }}
//             >
//               <button onClick={() => removeTodo(todo)}>{todo.text}</button>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </ul>
//     );
//   }
  
//   function countSelectedTodosAfter(
//     todos: Todo[],
//     selectedTodos: Todo[],
//     todo: Todo,
//   ) {
//     const startIndex = todos.indexOf(todo);
  
//     if (startIndex === -1 || !selectedTodos.includes(todo)) {
//       return 0;
//     }
  
//     let consecutiveCount = 0;
  
//     for (let i = startIndex + 1; i < todos.length; i++) {
//       if (selectedTodos.includes(todos[i])) {
//         consecutiveCount++;
//       } else {
//         break;
//       }
//     }
  
//     return consecutiveCount;
//   }
  
//   function groupSelectedTodos(todos: Todo[], selectedTodos: Todo[]) {
//     const todoGroups = [];
//     let currentGroup = [];
  
//     for (let i = 0; i < todos.length; i++) {
//       const todo = todos[i];
  
//       if (selectedTodos.includes(todo)) {
//         currentGroup.push(todo);
//       } else if (currentGroup.length > 0) {
//         // If we encounter a non-selected message and there is an active group,
//         // push the current group to the result and reset it.
//         todoGroups.push(currentGroup);
//         currentGroup = [];
//       }
//     }
  
//     // Check if there's a group remaining after the loop.
//     if (currentGroup.length > 0) {
//       todoGroups.push(currentGroup);
//     }
  
//     return todoGroups;
//   }
  
// 2
// function ListWithCorrectionAndStyling() {
//     // ...
  
//     return (
//       <ul>
//         <AnimatePresence initial={false}>
//           {todos.map((todo) => (
//             <motion.div
//               initial={{ height: 0 }}
//               animate={{ height: "auto" }}
//               exit={{
//                 height: 0,
//                 y: -53 * countSelectedTodosAfter(todos, selectedTodos, todo),
//                 zIndex: groupSelectedTodos(todos, selectedTodos)
//                   .reverse()
//                   .findIndex((group) => group.includes(todo)),
//               }}
//               key={todo.id}
//               style={{ overflow: "hidden", zIndex: 1000 }}
//             >
//               <button
//                 onClick={() => toggleTodo(todo)}
//                 className={`border-b-[1px]
//                   ${
//                     selectedTodos.includes(todo)
//                       ? "bg-blue-500"
//                       : "hover:bg-gray-500/50"
//                   }
//                   ${
//                     countSelectedTodosAfter(todos, selectedTodos, todo) === 0
//                       ? "rounded-b border-transparent"
//                       : "border-white/10"
//                   }
//                   ${
//                     countSelectedTodosBefore(todos, selectedTodos, todo) === 0
//                       ? "rounded-t"
//                       : ""
//                   }
//                 `}
//               >
//                 <p>{todo.text}</p>
//               </button>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </ul>
//     );
//   }
  
//   function countSelectedTodosBefore(
//     todos: Todo[],
//     selectedTodos: Todo[],
//     todo: Todo
//   ) {
//     const endIndex = todos.indexOf(todo);
  
//     if (endIndex === -1 || !selectedTodos.includes(todo)) {
//       return 0;
//     }
  
//     let consecutiveCount = 0;
  
//     for (let i = endIndex - 1; i >= 0; i--) {
//       if (selectedTodos.includes(todos[i])) {
//         consecutiveCount++;
//       } else {
//         break;
//       }
//     }
  
//     return consecutiveCount;
//   }
  