const SignDescription = () => (
  <div>
    <div className="img--wrap">
      <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/005/084/138/2e66790.jpg" />
    </div>
    <span>We managed to build, launch and succeed with our Pokemon Go map app in just 48 hours of programming.
    <span className="author">Artur Czemiel<span>developer & founder, Aexol</span></span>
    </span>

    <style jsx>{`
      .img--wrap {
        width:48px;
        height:48px;
        border-radius:24px;
        overflow:hidden;
        margin-bottom:24px;
        margin-top:20px;
      }

      .img--wrap img{
        width:48px;
        height:48px;
      }

      span{
        display:block;
        margin:0;
        width:205px;
        height:130px;
        font-family:Roboto;
        font-size:18px;
        line-height:1.44;
        color:#0b0f15;
      }

      .author{
        display:block;
        text-align:left;
        width:auto;
        height:18px;
        opacity:0.8;
        font-family:Roboto;
        font-size:16px;
        line-height:1.12;
        color:#3e434a;
        margin-top:20px;
      }

      .author span{
        display:block;
        text-align:left;
        width:auto;
        height:14px;
        font-family:Roboto;
        font-size:12px;
        font-style:italic;
        color:#8d9299;
        margin-top:5px;
      }
    `}</style>
  </div>
)

export default SignDescription
