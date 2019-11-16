import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [ clothes, setClothes ] = useState({
    mylist: [],
    trends: [],
    originals: [],
    });
    useEffect(() => {
    fetch(API)
        .then((response) => response.json())
        .then((data) => setClothes(data));
    }, []);
  return clothes;
};

export default useInitialState;