import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../store/characterSlice";

const Home = () => {
  const data = useSelector((state) => state.characters.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1>Characters</h1>
      {data.map((item) => (
        <div key={item.char_id}>
          <img src={item.img} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;
