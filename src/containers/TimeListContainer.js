import { connect } from "react-redux";

//child component
import TimeList from "../components/TimeList";

//redux actions

const mapStateToProps = (state) => ({
  recorded_times: state.tracked_times,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TimeList);
