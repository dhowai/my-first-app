import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <Product
        name="Amazon Echo"
        description="Your AI assistant"
        price={59.99}
      />

      <Product
        name="iPhone"
        description="Best Iphone in the Market"
        price={200}
      />

      <Product
        name="Mackbook"
        description="Computer defined best stuff"
        price={2500}
      />
    </div>
  );
}

export default App;
