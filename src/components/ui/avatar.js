const Button = ({src, srcSet, size}) => (
  <div>
    <img
      width={size}
      height={size}
      src={src}
      srcSet={srcSet}
      rel='presentation'
      className='Avatar'
      />

    <style jsx>{`
      div {
        display: inline-block;
      }

      .Avatar {
        border-radius: 50%;
      }
    `}</style>
  </div>
)

export default Button
