import {Component} from 'react'
import get from 'lodash.get'
import Avatar from '../../../ui/avatar'

const quotes = [
  {
    avatars: ['/static/img/testimonials/halvor-lande.png', '/static/img/testimonials/halvor-lande@2x.png'],
    text: 'We chose to work with Syncano to create MVPs faster, and to increase the speed of experimentation with Fintech.',
    author: 'Halvor Lande',
    meta: 'CDO, DNB ASA'
  },
  {
    avatars: ['/static/img/testimonials/stale-husby.png', '/static/img/testimonials/stale-husby@2x.png'],
    text: 'If Syncano was around at the time we started working on our MVP, it would have saved us a full year to reach product market-fit.',
    author: 'Ståle Husby',
    meta: 'CEO, Relink'
  },
  {
    avatars: ['/static/img/testimonials/artur-czmiel.png', '/static/img/testimonials/artur-czmiel@2x.png'],
    text: 'We managed to build, launch and succeed with our Pokemon Go map app in just 48 hours of programming.',
    author: 'Artur Czemiel',
    meta: 'Developer & Founder, Aexol'
  }
]

class Quotes extends Component {
  state = {
    index: 0,
    rotator: null
  }

  componentDidMount() {
    const rotator = setInterval(this._rotate, 3000)

    this.setState({rotator})
  }

  _goToQuote = (index) => {
    const rotator = setInterval(this._rotate, 3000)

    clearInterval(this.state.rotator)

    this.setState({index, rotator})
  }

  _rotate = () =>{
    const index = (this.state.index + 1) % quotes.length

    this.setState({index})
  }

  componentWillUnmount() {
    clearInterval(this.state.rotator)
  }

  render() {
    const {index} = this.state
    const quote = quotes[index]

    return (
      <div className='Quotes'>
        <div className='Quotes__header'>
          <div className='Quotes__avatars'>
            <Avatar
              src={get(quote, 'avatars.0', )}
              srcSet={`${get(quote, 'avatars.0')} 1x, ${get(quote, 'avatars.1')} 2x`}
            />
          </div>
          <div className='Quotes__dots'>
            <i
              className={`Quotes__dots-item ${index === 0 ? 'is-active' : ''}`}
              onClick={() => this._goToQuote(0)}
              />
            <i
              className={`Quotes__dots-item ${index === 1 ? 'is-active' : ''}`}
              onClick={() => this._goToQuote(1)}
              />
            <i
              className={`Quotes__dots-item ${index === 2 ? 'is-active' : ''}`}
              onClick={() => this._goToQuote(2)}
              />
          </div>
        </div>
        <div className='Quotes__content'>
          {get(quote, 'text')}
        </div>
        <div className='Quotes__footer'>
          <div className='Quotes__footer-avatar'>
            <Avatar
              src={get(quote, 'avatars.0', )}
              srcSet={`${get(quote, 'avatars.0')} 1x, ${get(quote, 'avatars.1')} 2x`}
            />
          </div>
          <div>
            <div className='Quotes__author'>{get(quote, 'author')}</div>
            <div className='Quotes__author-meta'>
              {get(quote, 'meta')}
            </div>
          </div>
        </div>

        <style jsx>{`

          .Quotes__header {
            display: none;
            justify-content: space-between;
            align-items: center;
          }

          .Quotes__dots-item {
            border-radius: 50%;
            border: solid 2px #e5e5e5;
            width: 10px;
            height: 10px;
            display: inline-block;
            margin-left: 5px;
            cursor: pointer;
          }

          .Quotes__dots-item.is-active {
            border-width: 0;
            background-color: #8d9299;
          }

          .Quotes__content {
            font-size: 15px;
            color: #0b0f15;
          }

          .Quotes__footer {
            display: flex;
            align-items: center;
            margin-top: 20px;
          }

          .Quotes__footer-avatar {
            margin-right: 15px;
          }

          .Quotes__author {
            color: rgba(62, 67, 74, .8);
            line-height: 1;
          }

          .Quotes__author-meta {
            font-size: 12px;
            font-style: italic;
            color: #8d9299;
            margin-top: 0;
          }

          @media screen and (min-width: 759px) {
            .Quotes__header {
              display: flex;
            }

            .Quotes__footer-avatar {
              display: none;
            }

            .Quotes__content {
              margin-top: 15px;
            }
          }
        `}</style>
      </div>
    )
  }
}


export default Quotes
