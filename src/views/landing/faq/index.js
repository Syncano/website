import Testimonials from './testimonials'

const FAQ = () => (
  <div>
    <Testimonials />

    <div className='faq-list'>
      <div className='faq'>
        <h4 className='faq-title'>How is Syncano different from Heroku?</h4>
        <p className='faq-content'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
      </div>
      <div className='faq'>
        <h4 className='faq-title'>How does Syncano scale with my app?</h4>
        <p className='faq-content'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
      </div>
      <div className='faq'>
        <h4 className='faq-title'>Can I cancel my subscription any time?</h4>
        <p className='faq-content'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
      </div>
      <div className='faq'>
        <h4 className='faq-title'>What payment options do you offer?</h4>
        <p className='faq-content'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
      </div>
      <div className='faq'>
        <h4 className='faq-title'>What if I use up all my account limits?</h4>
        <p className='faq-content'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
      </div>
      <div className='faq'>
        <h4 className='faq-title'>What if 30 days of trial is not enough?</h4>
        <p className='faq-content'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
      </div>
    </div>

    <div className='cta'>
      <a href=''>See complete FAQ</a>, <a href=''>ask your own question</a>, <a href=''>read the docs</a> or <a href=''>join our Slack channel</a> to get instant answers.
    </div>
  </div>
)

export default FAQ
