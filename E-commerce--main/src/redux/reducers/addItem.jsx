const addItem = [];

const addItems = (state = addItem, action) => {
    switch (action.type) {
      case 'ADDITEM': return [
        ...state, action.payload
      ]
        break;
      case 'DEL_ITEM':
        return state = state.filter((x) => {
          return x.id !== action.payload.old;
          });
        break;
      default: return state;
      break;
    }
  };
  export default addItems;