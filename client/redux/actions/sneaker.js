export const getAll = "getAll";
export const add = "add";

export const getAllSneakers = (sneakers) => {
  return {
    type: getAll,
    payload: sneakers,
  };
};

export const fetchAll = () => {
  return (dispatch) => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3000/sneakers");
        const sneakers = await res.json();
        dispatch(getAllSneakers(sneakers));
        console.log(sneakers);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };
};

export const addSneaker = (sneaker) => {
  return {
    type: add,
    payload: sneaker,
  };
};

export const addSneakerToFB = (sneaker) => {
  return (dispatch) => {
    const addData = async () => {
      try {
        const res = await fetch("http://localhost:3000/sneakers/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sneaker),
        });
        const data = await res.json();
        dispatch(addSneaker(data));
      } catch (error) {
        console.log(error);
      }
    };
    addData();
  };
}
