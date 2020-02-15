export default function navigation(state = { isHome: true }, action) {
  switch (action.type) {
    case 'TOGGLE_HOME':
      return { ...state, isHome: true };
    case 'TOGGLE_CART':
      return { ...state, isHome: false };
    default:
      return state;
  }
}
