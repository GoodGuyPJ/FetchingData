import React, { useState, useEffect } from "react";
import axios from "axios";

const CatFacts = () => {
  const [fact, setFact] = useState("");

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = async () => {
    try {
      const response = await axios.get(
        "https://catfact.ninja/fact"
      );
      setFact(response.data.fact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>{fact}</p>
      <button onClick={fetchFact}>Refresh</button>
    </div>
  );
};

export default CatFacts;
