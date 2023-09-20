const quotes = [];
let nameRef = React.createRef();
let quoteRef = React.createRef();

const clearInputs = () => {
  nameRef.current.value = "";
  quoteRef.current.value = "";
};

// create handleQuote function here
const handleQuote = (quoteRef, nameref, event) => {
  if (event.key === "Enter") {
    quotes.unshift({
      quote: quoteRef.current.value,
      name: nameRef.current.value,
    });
    clearInputs();
    rootElement.render(<App />);
  }
};

const App = () => (
  <div className="App">
    <h2>Quotify</h2>
    <div className="quotes">
      <input type="text" placeholder="Name" ref={nameRef} />
      <input
        type="text"
        placeholder="Quote"
        ref={quoteRef}
        onKeyPress={(event) => handleQuote(quoteRef, nameRef, event)}
      />
      {quotes.map((q, i) => (
        <div key={i}>
          <i>"{q.quote}"</i>
          <b>~ {q.name}</b>
        </div>
      ))}
    </div>
  </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
