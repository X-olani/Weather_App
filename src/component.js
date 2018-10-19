import { connect } from "react-redux";
import { App } from "./App";
import { getProvince } from "./store";
const mapStateToProps = state => ({
  Provinces: state.Provinces,
  selectedProvince: state.selectedProvince,
  opening: state.Opening,
  displayBlock: state.displayBlock
});
const mapDispatchToProps = Dispatch => {
  const getSelectedProvince = args => Dispatch(getProvince(args));
  return {
    getSelectedProvince: getSelectedProvince
  };
};

export const Component = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
