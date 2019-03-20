// Higher Order Component - A component(HOC) that renders another component


import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Info text: {props.text}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  console.log(WrappedComponent);
  return (props) => (
    <div>
      <p>This is private info. Please don't share</p>
      <WrappedComponent {...props} />
    </div>
  )
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthaticated ?
         <WrappedComponent {...props}/> 
         : 
         <p>Please login to view the info</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthaticated={true} text="There are the details" />, document.getElementById('app'));