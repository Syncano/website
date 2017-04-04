const Button = ({children, ...props}) => (
  <button className={
    `
      Button
      ${'primary' in props && 'Button--primary'}
      ${'outline' in props && 'Button--outline'}
    `
  }>
    {children}
    <style jsx>{`
      .Button {
        display: inline-block;
        border-radius: 6px;
        border: 0;
        color: #fff;
        padding: 15px 28px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 500;
      }

      .Button:hover {
        box-shadow: ;
      }

      .Button:focus {
        outline: 0;
      }

      .Button--primary {
        background-color: #e51148;
        box-shadow:
          0 5px 25px 0 rgba(229, 16, 71, 0.33),
          inset 0 0 3px 0 rgba(255, 255, 255, 0.5);
      }

      .Button--primary:hover {
        box-shadow:
          0 5px 25px 0 rgba(229, 16, 71, 0.33),
          inset 0 0 100px 0 rgba(255, 255, 255, 0.2),
          inset 0 0 3px 0 rgba(255, 255, 255, 0.5);
      }

      .Button--outline {
        background: none;
        border-radius: 8px;
        padding: 12px 28px;
        border: solid 2px rgba(141, 146, 153, 0.5);
        color: rgba(141, 146, 153, 0.5);
      }

      .Button--outline:hover {
        color: rgba(141, 146, 153, 1);
      }
    `}</style>
  </button>
)

export default Button
