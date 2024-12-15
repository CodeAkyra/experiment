import Navbar from "./compontents/navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="underline">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
