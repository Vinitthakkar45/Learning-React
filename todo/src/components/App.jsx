import React, {useState} from "react";

function App() {
  var [todo, settodo] = useState("");
  var [act, setact] = useState([]);

  function handleInput(event){
    const val = event.target.value;
    settodo(val);
  }
  function handleadd(){
    setact(act => [...act, todo]);
  }
  
  return (
  <div className="container">
    <div className="heading">
      <h1>To-Do List</h1>
    </div>
    <div className="form">
      <input type="text" value={todo} onChange={handleInput}/>
      <button onClick={handleadd}>
        <span>Add</span>
      </button>
    </div>
    <div>
      <ul>
        { act.map(item => <li> {item} </li>) }
      </ul>
    </div>
  </div>
  );
}

export default App;
