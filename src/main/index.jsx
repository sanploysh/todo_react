import { useEffect, useState } from "react";
import Form from "../component/Form";
import List from "../component/List";

function App() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    if(todo != '') {
      setList(current => [...current, todo != '' ? {
          id: current.length == 0 ? 1 : current[current.length-1].id + 1,
          description: todo
      } : '']);
    }
  }, [todo]);


  return (
    <div className="container">
      <h2 className="text-center">To-Do</h2>
      <Form setTodo={setTodo} />
      <List todo={list} todoList={setList} item={item} setItem={setItem} key={todo} />
    </div>
  );
}

export default App;
