const Input = ({full, white, clearable, handleClear, ...props}) => (
  <div
    className={`
      Input
      ${full ? 'Input--full' : ''}
      ${white ? 'Input--white' : ''}
    `}>
    <input {...props} />

    {clearable && props.value && (
      <span className="Input__clear fa fa-times" onClick={handleClear} />
    )}
    <style jsx>{`
      div {
        display: inline-block;
        position: relative;
      }

      input {
        border-radius: 4px;
        background-color: #f5f5f5;
        box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        border: solid 1px #e5e5e5;
        padding: 14px 15px;
        width: 100%;
        transition: border-color .25s, box-shadow .25s;
      }

      input:focus {
        outline: none;
        border-color: #3871d0;
        box-shadow: 0 0 0 3px rgba(56, 113, 208, 0.15);
      }

      .Input__clear {
        position: absolute;
        top: 50%;
        line-height: 20px;
        font-size: 14px;
        margin-top: -10px;
        right: 16px;
        cursor: pointer;
        color: #999;
      }

      .Input--full {
        width: 100%;
      }

      .Input--white input {
        background-color: #fff;
      }
    `}</style>
  </div>
)

export default Input
