import './App.css';
import Handlecomplete from './hooks/Handlecompelete';
import Body from './pages/Body';
import Todoapp from './pages/Todoapp'

function App() {
  return (
    <div className="App">    
     <Body/>
     {/* <Handlecomplete/> */}
     <Todoapp/>
    </div>
  );
}

export default App;
