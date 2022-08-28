import './App.css';
import City from './Components/City'
function App(){
  return(
    <div className="App">
      <City city="London" feature="beautiful"/>
      <City city="New York" feature="fantastic"/>
      <City city="Kathmandu" feature="majestic"/>
      <City city="Beijing" feature="marvelous"/>

      {
      /* <p> Hello I am in London. Its a Beautiful.</p>
      <p> Hello I am in New York. Its a fantastic.</p>
      <p> Hello I am in Kathmandu. Its a majistic.</p>
      <p> Hello I am in Beijing. Its a marvelous.</p> */ }

      </div>
  )
}

export default App;
