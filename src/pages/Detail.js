import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components";

const Detail = () => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_URL}/characters/${characterId}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [characterId]);

  return (
    <div>
      {loading && <Loading />}
      {char && (
        <div>
          <h1>{char.name}</h1>
          <img src={char.img} alt={char.name} style={{ width: "50%" }} />
          <h3>Birthday: {char.birthday}</h3>
          {char.occupation.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          <h3>Status: {char.status}</h3>
          <h3>Portrayed: {char.portrayed}</h3>
        </div>
      )}
    </div>
  );
};

export default Detail;
