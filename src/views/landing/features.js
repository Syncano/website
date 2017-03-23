const Features = () => (
  <div>
    <h2 className='title'>Meet Syncano</h2>
    <p className='subtitle'>
      A complete solution for faster software development
    </p>

    <div className='grid'>
      <div>
        <p>
          Syncano is a platform where you solve problems quickly by reusing and reconfiguring pieces of existing code.
        </p>
        <p>
          You can continuously deliver, rapidly experiment and test your product with the real users until you get the market approval. Once your product hits off, it will scale unlimitedly with no extra effort on Syncano's infrastructure.
        </p>
      </div>
      <div>
        <a className='feature'>
          <h4 className='feature-title'>Syncano Registry</h4>
          <p className='feature-description'>
            Assemble your project from reusable, existing components and backend blueprints created by the community.
          </p>
        </a>
        <a className='feature'>
          <h4 className='feature-title'>Automation SDK</h4>
          <p className='feature-description'>
            Automatically build and sync your project into the cloud.
          </p>
        </a>
        <a className='feature'>
          <h4 className='feature-title'>Cloud OS</h4>
          <p className='feature-description'>
            Scale unlimitedly and pay only for what you really use.
          </p>
        </a>
        <a className='feature'>
          <h4 className='feature-title'>Community</h4>
          <p className='feature-description'>
            Reach the community to build missing project pieces at massive scale.
          </p>
        </a>
      </div>
    </div>
  </div>
)

export default Features
