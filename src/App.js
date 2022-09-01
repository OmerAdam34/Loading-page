import "./styles.css";
import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 15000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <ClimbingBoxLoader size={60} color={"#123123"} loading={loading} />
      ) : (
        <header>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </header>
      )}
    </div>
  );
}
