export function reducer(state, action) {
  switch (action.type) {
    // HANDLING THE OPTION BUTTON CLICK
    case "option":
      return { ...state, isOption: !action.payload };
  }
}
