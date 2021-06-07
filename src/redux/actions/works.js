import axios from "axios";

export const setLoaded = (bool) => ({
  type: "SET_LOADED",
  payload: bool,
});

export const getData = () => (dispatch) => {
  axios.get(`http://localhost:4000/allprojects`).then(({ data }) => {
    dispatch(setData(data));
  });
};

export const setData = (data) => ({
  type: "SET_DATA",
  payload: data,
});
