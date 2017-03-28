import React from 'react';

const RadioButton = (props) => {
  const styles = {
    radio: {
      display: 'flex',
      alignItems: 'center',
      padding: 20,
      height: '60px',
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '40px',
      border: '1px solid #ddd',
      color: '#8c8c8c',
      fontFamily: 'Avenir, sans-serif',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      cursor: 'pointer',
      position: 'relative',
      color: '#A6A6A6'
    },
    check: {
      position: 'absolute',
      left: 0
    }
  };

  return (
    <div
      className="radio"
      style={styles.radio}
    >
      <label style={styles.label}>
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
