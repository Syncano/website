const SignDescription = () => (
  <div className="SignDescription">
    <img className="SignDescription__img" src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/005/084/138/2e66790.jpg" />
    <span>We managed to build, launch and succeed with our Pokemon Go map app in just 48 hours of programming.
    <span className="SignDescription__author">Artur Czemiel<span>developer & founder, Aexol</span></span>
    </span>

    <style jsx>{`

      .SignDescription{
        margin: 0;
        width: 205px;
        height: 130px;
      }

      .SignDescription__img{
        width: 48px;
        height: 48px;
        width: 48px;
        height: 48px;
        border-radius: 24px;
        overflow: hidden;
        margin-bottom: 24px;
        margin-top: 20px;
        display: block;
      }

      span{
        font-size: 18px;
        line-height: 1.44;
        color: #0b0f15;
      }

      .SignDescription__author{
        height: 18px;
        color: rgba(62,67,74, .8)
        font-size: 16px;
        text-align: left;
        line-height: 1.12;
        color: #3e434a;
        margin-top: 20px;
      }

      .SignDescription__author span{
        display: block;
        width: auto;
        height: 14px;
        font-size: 12px;
        font-style: italic;
        color: #8d9299;
        margin-top: 5px;
      }

      @media screen and (max-width: 500px) {
        span{
          font-size: 14px;
          width:80%;
        }
        .SignDescription__img {
          float: right;
        }
      }
    `}</style>
  </div>
)

export default SignDescription
