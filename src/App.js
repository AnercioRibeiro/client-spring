import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Home from "./Home";
import StudentsView from './components/student/StudentsView';

function App() {
  return (
    <div className="App">
      <h2>Welcome to our front end</h2>
      <Home />
      <StudentsView/>
    </div>
  );
}

export default App;
