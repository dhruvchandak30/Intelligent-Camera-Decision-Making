import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      {typeof data.members === "undefined" ? (
        <p>Checking for any Sharp Objects</p>
      ) : (
        data.members.map((member, i) => <p key={i}>{member}</p>)
      )}
    </div>
  );
};

export default App;
