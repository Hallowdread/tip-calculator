import "./index.css";
import { useState } from "react";
import { Bill } from "./components/Bill";
import { Service } from "./components/Service";
import { Result } from "./components/Result";
import { ResetBtn } from "./components/ResetBtn";

function App() {
  return (
    <div className="calculator">
      <Calculator />
    </div>
  );
}

function Calculator() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);
  return (
    <>
      <h1 className="title">Tip Calculator</h1>
      {/*  */}
      <Bill value={bill} onChange={(e) => setBill(Number(e.target.value))} />
      <Service
        label="How did you like the service?"
        className="input-group"
        id="user-rating"
        value={service}
        onChange={(e) => setService(Number(e.target.value))}
      />
      <Service
        label="How did your friend like the service?"
        className="input-group"
        id="user-rating"
        value={friendService}
        onChange={(e) => setFriendService(Number(e.target.value))}
      />
      {bill > 0 && (
        <>
          <Result bill={bill} service={service} friendService={friendService} />
          <ResetBtn
            setBill={setBill}
            setFriendService={setFriendService}
            setService={setService}
          />
        </>
      )}
    </>
  );
}

export default App;
