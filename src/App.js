import AddTodo from './component/AddTodo';
import Todos from './component/Todos';

import './App.css';

function App() {
  return (
    <div className='App'>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;