import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions';

const Greeting = ({ message, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  message: state.greeting.message
});

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
