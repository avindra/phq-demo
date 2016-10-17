const responses = [];

export default (state = responses, action) => {
  switch(action.type) {
    case 'RESPOND': {
      const r = [ ...state ];
      r[action.id] = action.selection;
      return r;
    }
    default:
      return state;
  }
}