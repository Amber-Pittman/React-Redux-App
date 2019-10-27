import React, {useEffect} from 'react';
import './App.css';

import { connect } from "react-redux";
import { getActivity } from "./actions/actions";

//import components
import Activity from "./components/Activity";
import ActivityButton from "./components/ActivityButton;"

function App(props) {

  useEffect(() => {
    props.getActivity();
  }, [])

  const handleClick = e => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <h1>Bored? Try this: </h1>
      <Activity activity={props.activity} handleClick={handleClick} />
      <div className="activity-button">
        <ActivityButton />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    activity: state.activity,  // from reducer's initial state
    isActivityLoading: state.isLoading, // from reducer's initial state
    activityError: state.error // from reducer's initial state
  };
}

const mapDispatchToProps = {
  getActivity // from the import
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
