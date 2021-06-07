const initialState = {};

const allData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA": {
      let workData = action.payload;
      return { ...state, workData };
    }
  }
  return state;
};

export default allData;
