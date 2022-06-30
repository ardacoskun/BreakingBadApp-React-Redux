import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from "react-redux";
import { Error, Loading } from "../components";
import { fetchCharacters } from "../store/characterSlice";

const Home = () => {
  const data = useSelector((state) => state.characters.items);
  const nextPage = useSelector((state) => state.characters.page);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1 className="homeTitle">Characters</h1>

      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => (
          <div key={item.char_id}>
            <img src={item.img} alt={item.name} className="characterImg" />
            <div className="characterName">{item.name}</div>
          </div>
        ))}
      </Masonry>
      <div className="seeMoreContainer">
        {isLoading && <Loading />}
        <button
          className="seeMoreButton"
          onClick={() => dispatch(fetchCharacters(nextPage))}
        >
          See More ({nextPage})
        </button>
      </div>
    </div>
  );
};

export default Home;
