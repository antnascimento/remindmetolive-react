import React, {PropTypes} from 'react';

const Row = (props) => {
  function getClassName() {
      return "row" +
             (props.someClass ? " " + props.someClass : "") +
             (props.mb ? " mb" + props.mb : "") +
             (props.mbXs ? " mb-xs-" + props.mbXs : "");
  }

  return (
    <div className={getClassName()}>
      {props.children}
    </div>
  );
};

Row.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element
  ]),
  someClass: PropTypes.string,
  mb: PropTypes.number,
  mbXs: PropTypes.number
};

export default Row;
