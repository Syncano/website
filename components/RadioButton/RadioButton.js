import React from 'react';

const RadioButton = (props) => {
  const styles = {
    button: {
      position: 'absolute',
      top: 5,
      right: 10,
      width: 48,
      height: 48,
      padding: 12,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    radio: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      height: '60px',
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '40px',
      border: '1px solid #ddd',
      color: '#8c8c8c',
      boxSizing: 'border-box',
      fontFamily: 'Avenir, sans-serif'
    },
    check: {
      marginLeft: 10,
      marginRight: 40
    }
  };

  return (
    <div
      className="radio"
      style={styles.radio}
    >
      <label>
        <input
          type="radio"
          value={props.title}
          style={styles.check}
          checked={props.checked}
          onChange={props.onChange}
        />
        {props.title}
      </label>
    </div>
  );
};

export default RadioButton;
