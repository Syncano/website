import md5 from 'md5'

const GRAVATAR_URL = 'https://gravatar.com/avatar/'

const Avatar = ({src, srcSet, size, email}) => {
  const gravatar = src || `${GRAVATAR_URL}${md5(email)}?s=${size}&d=mm`

  return (
    <div>
      <img
        width={size}
        height={size}
        src={src || gravatar}
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
}

export default Avatar
