export default () => (
  <div>
    <style jsx global>{`
      .AuthForm {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
      }

      .AuthForm__column .Button + .Button {
        margin-top: 15px;
      }

      .AuthForm__column--quotes {
        margin: -30px -30px 30px -30px;
      }

      .AuthForm__separator {
        border-top: 1px dashed rgba(141, 146, 153, .25);
        width: 100%;
        margin-top: 35px;
        margin-bottom: 34px;
        position: relative;
      }

      .AuthForm__message {
        margin-top: 30px;
        margin-bottom: -20px;
        text-align: center;
        font-size: 14px;
        color: #25b012;
      }

      .AuthForm__separator::after {
        content: 'or';
        position: absolute;
        top: 50%;
        margin-top: -15px;
        margin-left: -10px;
        left: 50%;
        font-size: 16px;
        text-align: center;
        color: rgba(122, 127, 135, .5);
        padding: 3px;
        background-color: #fff;
      }

      .AuthForm__submit {
        margin-top: 15px;
      }

      .AuthForm__footer {
        flex: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 14px;
        line-height: 20px;
        color: #8d9299;
        margin-top: 30px;
      }

      .AuthForm__footer > :only-child {
        margin: auto;
      }

      .AuthForm__footer a {
        font-weight: 500;
        color: #2c59c5;
        text-decoration: none;
        cursor: pointer;
      }

      @media screen and (max-width: 759px) {
        .AuthForm__column {
          flex: 1 0 100%;
        }

        .AuthForm--with-quotes {
          margin-top: -20px;
        }

        .AuthForm__column--quotes {
          background: #f5f5f5;
          margin: -30px -50px 30px -50px;
          padding: 30px 50px;
        }
      }

      @media screen and (min-width: 760px) {
        .AuthForm {
          display: flex;
          margin-top: 50px;
        }

        .AuthForm--quotes {
          flex-wrap: nowrap;
        }

        .AuthForm--with-quotes {
          margin-top: 0;
        }

        .AuthForm__separator {
          border-left: 1px dashed rgba(141, 146, 153, .25);
          border-top: none;
          margin: 0;
          margin-left: 35px;
          margin-right: 34px;
          width: auto;
        }

        .AuthForm__separator::after {
          content: 'or';
          position: absolute;
          margin-left: 0;
          top: 50%;
          margin-top: -15px;
          left: -11px;
          font-size: 16px;
          text-align: center;
          color: rgba(122, 127, 135, .5);
          padding: 3px;
          background-color: #fff;
        }

        .AuthForm__column--buttons {
          width: 220px;
        }

        .AuthForm__column--quotes {
          width: 285px;
          margin: 0;
          padding-right: 50px;
        }

        .AuthForm__column--form {
          flex: 1;
        }

        .AuthForm__footer {
          margin-top: 50px;
        }

        .AuthForm__footer--small-spacing {
          margin-top: 30px;
        }
      }

      @media screen and (max-width: 489px) {
        .AuthForm__column--quotes {
          margin: -30px -30px 30px -30px;
        }
      }
    `}</style>
  </div>
)
