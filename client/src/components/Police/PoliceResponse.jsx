import React, { useEffect, useState } from "react";

const PoliceResponse = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const url = "http://127.0.0.1:5000/api/data";

    const script = document.createElement('script');

    const callbackFunction = (responseData) => {
      console.log(responseData);
      setData(responseData.message);
      document.body.removeChild(script);
    };

    window.jsonpCallback = callbackFunction;

    const jsonpUrl = `${url}?callback=jsonpCallback`;

    script.src = jsonpUrl;

    document.body.appendChild(script);
    
    return () => {
      delete window.jsonpCallback;
    };
  }, []);

  return (
    <div>
      PoliceResponse
      {data && <p>{data}</p>}
    </div>
  );
};

export default PoliceResponse;
