const intialState = {
  data: [],
};

const reducer = (state = intialState, actions) => {
  switch (actions.type) {
    case "FETCH":
      state.data = [];
      return {
        ...state,
        data: state.data.concat(actions.value),
      };
    case "INSERT":
    case "UPDATE":
    case "DELETE":
      return {
        ...state,
        state: actions.value,
      };
  }
  return state;
};
export default reducer;
