
import './App.css';
import Card from './component/card';
import data from './data/data.json';


function App() {
  console.log(data);
  return (
    <div className="App">
      {data.map((item)=>{
        return(<Card name= {item.name} superpowers = {item.superpowers} info = {item.info} url = {item.url} />)
      })}

    </div>
  );
}

export default App;
