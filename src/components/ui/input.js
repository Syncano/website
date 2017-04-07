const Input = ({full, ...props}) => (
  <div
    className={`
      Input
      ${full ? 'Input--full' : ''}
    `}>
    <input {...props} />
    <style jsx>{`
      div {
        display: inline-block;
      }

      input {
        border-radius: 4px;
        background-color: #f5f5f5;
        box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        border: solid 1px #e5e5e5;
        padding: 13px 15px;
        width: 100%;
        transition: border-color .25s, box-shadow .25s;
      }

      input:focus {
        outline: none;
        border-color: #3871d0;
        box-shadow: 0 0 0 3px rgba(56, 113, 208, 0.15);
      }

      .Input--full {
        width: 100%;
      }
    `}</style>
  </div>
)

export default Input
