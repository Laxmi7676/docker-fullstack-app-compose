import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setData(data.now));
  }, []);

  return (
    <div>
      <h1>Docker Full Stack App</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
