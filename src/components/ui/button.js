const Button = ({
  children,
  primary, secondary, outline, github, google, facebook, full,
  ...props
}) => (
  <button
    className={`
      Button
      ${primary ? 'Button--primary' : ''}
      ${secondary ? 'Button--secondary' : ''}
      ${outline ? 'Button--outline' : ''}
      ${github ? 'Button--github' : ''}
      ${google ? 'Button--google' : ''}
      ${facebook ? 'Button--facebook' : ''}
      ${full ? 'Button--full' : ''}
    `}
    {...props}>
    {children}
    <style jsx>{`
      .Button {
        display: inline-block;
        border-radius: 6px;
        border: 0;
        color: #fff;
        padding: 14px 28px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 500;
        transition-property: transform, box-shadow;
        transition-duration: .25s;
      }

      .Button:hover {
        box-shadow: ;
      }

      .Button:focus {
        outline: 0;
      }

      .Button--full {
        width: 100%;
      }

      .Button--primary {
        background-color: #e51148;
        box-shadow:
          0 5px 25px 0 rgba(229, 16, 71, 0.33),
          inset 0 0 100px 0 rgba(255, 255, 255, 0),
          inset 0 0 3px 0 rgba(255, 255, 255, 0.5);
      }

      .Button--primary:hover,
      .Button--primary:focus {
        transform: scale(1.1);
        box-shadow:
          0 10px 35px 0 rgba(229, 16, 71, .33),
          inset 0 0 100px 0 rgba(255, 255, 255, 0.2),
          inset 0 0 3px 0 rgba(255, 255, 255, 0.5);
      }

      .Button--primary:active {
        transform: scale(.99);
        box-shadow:
          0 0px 25px 0 rgba(229, 16, 71, .33),
          inset 0 0 100px 0 rgba(255, 255, 255, 0.2),
          inset 0 0 3px 0 rgba(255, 255, 255, 0.5);
      }

      .Button--secondary {
        background-color: #3871d0;
        box-shadow:
          0 5px 25px 0 rgba(56, 113, 208, 0.33),
          inset 0 0 100px 0 rgba(255, 255, 255, 0),
          inset 0 0 3px 0 rgba(255, 255, 255, 0.5);
      }

      .Button--secondary:hover,
      .Button--secondary:focus {
        box-shadow:
          0 5px 25px 0 rgba(56, 113, 208, 0.33),
          inset 0 0 100px 0 rgba(255, 255, 255, 0.2),
          inset 0 0 3px 0 rgba(255, 255, 255, 0.5);
      }

      .Button--secondary:active {
        box-shadow:
          0 5px 25px 0 rgba(56, 113, 208, 0.33),
          inset 0 0 100px 0 rgba(0, 0, 0, 0.07),
          inset 0 0 3px 0 rgba(255, 255, 255, 0.5);
      }

      .Button--github {
        background-color: rgba(64, 120, 192, 0.15);
        color: #4078c0;
      }

      .Button--google {
        background-color: rgba(221, 75, 56, 0.15);
        color: #dd4b39;
      }

      .Button--facebook {
        background-color: rgba(59, 88, 152, 0.15);
        color: #3b5998;
      }

      .Button--github:hover,
      .Button--github:focus,
      .Button--google:hover,
      .Button--google:focus,
      .Button--facebook:hover,
      .Button--facebook:focus {
        box-shadow: inset 0 0 100px 0 rgba(255, 255, 255, 0.5);
      }

      .Button--github:active,
      .Button--google:active,
      .Button--facebook:active {
        transform: scale(.99);
        box-shadow: inset 0 0 100px 0 rgba(0, 0, 0, 0.07);
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
