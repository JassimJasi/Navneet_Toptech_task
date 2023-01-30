import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // https://jsonplaceholder.typicode.com/users
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      setData(data.data);
    });
  }, []);
  console.log(data);

  return (
    <ul>
      {data.map((dat, key) => (
        <div key={key}>
          <li>
            {dat?.name} - {dat?.email}
          </li>
        </div>
      ))}
    </ul>
  );
}

export default App;
