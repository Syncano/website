const Loader = () => (
  <div>
    <div className='spinner' />

    <style jsx>{`
      .spinner {
        margin: 50px;
        height: 28px;
        width: 28px;
        animation: rotate 0.8s infinite linear;
        border: 3px solid rgba(76, 56, 208, .75);
        border-right-color: transparent;
        border-radius: 50%;
      }

      @keyframes rotate {
        0%    { transform: rotate(0deg); }
        100%  { transform: rotate(360deg); }
      }
    `}</style>
  </div>
)

export default Loader
