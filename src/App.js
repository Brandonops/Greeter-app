import logo from './logo.svg';
import './App.css';
// import Greeter from './components/Greeter'
import DateComponent from './components/Date'
import Counter from './components/Counter'
import Translator from './components/Translator'


// const names = [
//   "Melanie",
//   "Emma",
//   "Mel B",
//   "Geri",
//   "Victoria"
// ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Translator initialText="Test to see if it works" />
        <div>
          <div className="buttonSection">
          <img src={logo} className="App-logo" alt="logo" /><h2>Chocolate Bars</h2><img src={logo} className="App-logo" alt="logo" />
          </div>
        <Counter  initialCount={10}/>
        </div>
        <div>
          <div className="buttonSection">
          <img src={logo} className="App-logo" alt="logo" /><h2>Blood Drawn</h2><img src={logo} className="App-logo" alt="logo" />
          </div>
        <Counter  initialCount={10}/>
        </div>
        <div>
          <div className="buttonSection">
          <img src={logo} className="App-logo" alt="logo" /><h2>Movies Watched</h2><img src={logo} className="App-logo" alt="logo" />
          </div>
        <Counter  initialCount={10}/>
        </div>
        <div>
          <div className="buttonSection">
          <img src={logo} className="App-logo" alt="logo" /><h2>Speeding Tickets</h2><img src={logo} className="App-logo" alt="logo" />
          </div>
        <Counter  initialCount={10}/>
        </div>
        <div>
          <div className="buttonSection">
          <img src={logo} className="App-logo" alt="logo" /><h2>Money lost last Month</h2><img src={logo} className="App-logo" alt="logo" />
          </div>
        <Counter  initialCount={10}/>
        </div>
        {/* <img src={logo} className="App-logo2" alt="logo" /> */}
        <h1><DateComponent /></h1>
        {/* <h1 className="greeting">Greetings Comrad!</h1>
        <p>
          Welcome to React.js, your life will forever be changed...
        </p> */}
            {/* {
              names.map((name, i) => {
                return <Greeter name={name} key={i} />
              })
            } */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
