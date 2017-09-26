import React from 'react'

const InputList = ({children, errors = {}}) => {
  const errorKeys = Object.keys(errors)
  const matchedErrors = React.Children.map(children, input => input.props.name)
  const unmatchedErors = errorKeys.filter(err => matchedErrors.indexOf(err) < 0)

  return (
    <div>
      {React.Children.map(children, input => (
        <div className='InputWrap' key={input.props.name}>
          {input}

          {errors[input.props.name] && (
            <div className='InputWrap__error'>{errors[input.props.name]}</div>
          )}
        </div>
      ))}

      {unmatchedErors.map(err => (
        <div className='InputWrap__error' key={err}>{errors[err]}</div>
      ))}

      <style jsx>{`
        .InputWrap + .InputWrap {
          margin-top: 15px;
        }

        .InputWrap__error {
          font-size: 14px;
          color: red;
          margin-top: 7px;
        }
      `}</style>
    </div>
  )
}

export default InputList
