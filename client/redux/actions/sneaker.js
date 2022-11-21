export const getAll = "getAll";
export const add = "add";
export const update = "update";
export const getDetail = "getDetail";

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
};

export const updateSneaker = (sneaker) => {
  return {
    type: update,
    payload: sneaker,
  };
};

export const updateSneakerToFB = (sneaker) => {
  return (dispatch) => {
    const updateData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/sneakers/update/${sneaker.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(sneaker),
          }
        );
        const data = await res.json();
        dispatch(updateSneaker(data));
      } catch (error) {
        console.log(error);
      }
    };
    updateData();
  };
};

export const getSneakerDetail = (sneaker) => {
  return {
    type: getDetail,
    payload: sneaker,
  };
};

export const getSneakerDetailFromFB = (id) => {
  return (dispatch) => {
    const addData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/sneakers/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        dispatch(getSneakerDetail(data));
      } catch (error) {
        console.log(error);
      }
    };
    addData();
  };
};
