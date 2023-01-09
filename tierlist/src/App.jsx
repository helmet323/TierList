import React, {useState} from 'react'
import Heroes from "./components/Heroes/Heroes";
import TierContainer from "./components/TierContainer/TierContainer"
import TierListHeader from "./components/TierListHeader/TierListHeader"
import "./app.scss";

const data = [
  { title: "S", items: ["1", "2", "3"] },
  { title: "A", items: ["4", "5"] },
];

function App() {
  const [dataList, setDataList] = useState(data)

  const [tier, setTier] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault()

    dataList.push({title: tier, items: []})

    setTier('')
  };

  return (
    <div className="App">
      <TierListHeader />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type = "text"
            id = "tier"
            name = "tier"
            value = {tier}
            placeholder = "Tier"
            onChange = {(e) => setTier(e.target.value)}></input>
          <button type = "submit"> Add Tier </button>
        </form>
      </div>
      <TierContainer data={dataList} />
      <Heroes />
    </div>
  );
}



export default App;
