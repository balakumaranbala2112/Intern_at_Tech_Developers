import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        {/* ✅ NEW: Custom Text Container */}
        <div style={styles.tectContainer}>
          <h2 styles={styles.heading}>project Card</h2>
          <p>React App</p>
          <a href='https://developer.mozilla.org/en-US/' target='_blank'>MDN</a>
        </div>
      </main>
    </div>
  );
}

// ✅ Add simple inline styles
const styles = {
  tectContainer: {
    backgroundColor: '#ccc',
    borderRadius: '10px',
    margin: '50px',
    padding: '8px',
  },

  heading: {
    color: 'red',
  }
}

export default App;
