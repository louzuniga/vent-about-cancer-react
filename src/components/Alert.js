import React from 'react';
import PropTypes from 'prop-types';
// interact a component with redux need to use connect
import { connect } from 'react-redux';

// desturcture alert and passing in alerts, checking that it's not null and not blank then map through alerts and applying styling
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    // when mapping out in JSX needs to have a unique key
    // styling is using template literal and inserting alertType then has styling in CSS
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = { alerts: PropTypes.array.isRequired };

// map redux state to a prop in this component for access, which is this case will be the array of alerts from ./reducer/alert.js
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
