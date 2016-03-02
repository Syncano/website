import React from 'react';
import Radium from 'radium';
import Header from './Header';

const styles = {
  hero: {
    headline: {
      color: 'rgba(77, 89, 102, 0.5)',
      textTransform: 'uppercase',
      fontSize: 10,
      fontWeight: 700,
      lineHeight: '13px',
      paddingTop: 80,
      marginBottom: 45
    },
    link: {
      color: '#4d5966',
      fontSize: 22,
      fontWeight: 500,
      lineHeight: '29px',
      marginBottom: 29
    }
  },
  main: {
    container: {
      padding: '120px 0',
      backgroundColor: '#f8f9f9'
    },
    section: {
      marginBottom: 60,
      overflow: 'hidden'
    },
    headline: {
      color: '#1d2228',
      fontSize: 36,
      fontWeight: 700,
      lineHeight: '48px',
      marginBottom: 40
    },
    subheadline: {
      color: '#4d5966',
      fontSize: 18,
      fontWeight: 700,
      lineHeight: '24px',
      marginBottom: 24
    },
    text: {
      color: '#4d5966',
      fontSize: 16,
      lineHeight: '24px'
    }
  },
  cta: {
    container: {
      padding: '100px 0',
      background: '#0070d3'
    },
    button: {
      display: 'block',
      margin: '0 auto',
      width: 260,
      height: 54,
      backgroundColor: '#ffcc01',
      borderRadius: 4,
      padding: '17px 20px',
      color: '#1d2228',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '20px',
      textAlign: 'center'
    }
  },
  footer: {
    container: {
      padding: '120px 0',
      background: '#1d2228'
    },
    copyright: {
      opacity: 0.7,
      color: '#b8c0c9',
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '16px'
    },
    headline: {
      opacity: 0.7,
      color: '#b8c0c9',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: '21px',
      textTransform: 'uppercase'
    },
    link: {
      color: '#b8c0c9',
      fontSize: 14,
      lineHeight: '35px'
    }
  },
  socialIcons: {
    container: {
      display: 'flex',
      marginLeft: -16
    },
    link: {
      fontSize: 18,
      color: '#b8c0c9',
      width: 48,
      height: 48,
      textAlign: 'center',
      lineHeight: '48px'
    },
    icon: {
      border: 0,
      padding: 0,
      margin: 0,
      color: '#b8c0c9',
      ':hover': {
        background: 'transparent'
      }
    }
  }
};

export default Radium(() => (
  <div className="documentation-page">
    <Header/>
    <div>
      <div className="container">
        <div class="row">
          <div className="col-md-7">
            <div style={styles.hero.headline}>
              TABLE OF CONTENT
            </div>
            <div style={styles.hero.link}>
              Client-side environment
            </div>
            <div style={styles.hero.link}>
              Libraries and Frameworks
            </div>
            <div style={styles.hero.link}>
              Custom App API
            </div>
            <div style={styles.hero.link}>
              Sockets
            </div>
            <div style={styles.hero.link}>
              Core Services
            </div>
            <div style={styles.hero.link}>
              Infrastructure
            </div>
          </div>
          <div className="col-md-5">
            <img src={require('./hero-image.png')} />
          </div>
        </div>
      </div>
    </div>
    <div style={styles.main.container}>
      <div className="container">
        <div style={styles.main.section}>
          <div style={styles.main.headline}>
            Sockets
          </div>
          <div className="row" style={styles.main.section}>
            <div className="col-md-3 col-lg-2">
              <img src={require('./image1.png')} />
            </div>
            <div className="col-md-9 col-lg-10">
              <div style={styles.main.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique,
                lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </div>
              <br/>
              <br/>
              <div style={styles.main.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, diam a consectetur congue, orci
                orci tincidunt risus, in mattis ipsum justo at ipsum. Donec luctus bibendum dictum. Donec sollicitudin
                lorem eget iaculis dapibus. Vivamus lectus ipsum, sodales sed luctus feugiat, dictum et est.
              </div>
            </div>
          </div>
          <div className="row" style={styles.main.section}>
            <div className="col-md-3 col-lg-2">
              <img src={require('./image2.png')} />
            </div>
            <div className="col-md-9 col-lg-10">
              <div style={styles.main.subheadline}>
                Push notifications Socket
              </div>
              <div style={styles.main.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique,
                lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </div>
            </div>
          </div>
          <div className="row" style={styles.main.section}>
            <div className="col-md-3 col-lg-2">
              <img src={require('./image3.png')} />
            </div>
            <div className="col-md-9 col-lg-10">
              <div style={styles.main.subheadline}>
                Scripts Socket
              </div>
              <div style={styles.main.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique,
                lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={styles.main.headline}>
            Sockets
          </div>
          <div className="row" style={styles.main.section}>
            <div className="col-md-3 col-lg-2">
              <img src={require('./image1.png')} />
            </div>
            <div className="col-md-9 col-lg-10">
              <div style={styles.main.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique,
                lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </div>
              <br/>
              <br/>
              <div style={styles.main.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, diam a consectetur congue, orci
                orci tincidunt risus, in mattis ipsum justo at ipsum. Donec luctus bibendum dictum. Donec sollicitudin
                lorem eget iaculis dapibus. Vivamus lectus ipsum, sodales sed luctus feugiat, dictum et est.
              </div>
            </div>
          </div>
          <div className="row" style={styles.main.section}>
            <div className="col-md-3 col-lg-2">
              <img src={require('./image2.png')} />
            </div>
            <div className="col-md-9 col-lg-10">
              <div style={styles.main.subheadline}>
                Push notifications Socket
              </div>
              <div style={styles.main.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique,
                lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </div>
            </div>
          </div>
          <div className="row" style={styles.main.section}>
            <div className="col-md-3 col-lg-2">
              <img src={require('./image3.png')} />
            </div>
            <div className="col-md-9 col-lg-10">
              <div style={styles.main.subheadline}>
                Scripts Socket
              </div>
              <div style={styles.main.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique,
                lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={styles.cta.container}>
      <a href="#" style={styles.cta.button}>
        START BUILDING FOR FREE
      </a>
    </div>
    <div style={styles.footer.container}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={require('./syncano-footer.svg')} />
            <div style={styles.footer.copyright}>© 2016 Syncano. All Rights Reserved.</div>
          </div>
          <div className="col-md-2">
            <div style={styles.footer.headline}>
              Company
            </div>
            <div style={styles.footer.link}>
              About Us
            </div>
            <div style={styles.footer.link}>
              Career
            </div>
            <div style={styles.footer.link}>
              Contact Us
            </div>
            <div style={styles.footer.link}>
              Terms and Legal
            </div>
          </div>
          <div className="col-md-2">
            <div style={styles.footer.headline}>
              Resources
            </div>
            <div style={styles.footer.link}>
              Blog
            </div>
            <div style={styles.footer.link}>
              Docs
            </div>
            <div style={styles.footer.link}>
              Plans & Pricing
            </div>
            <div style={styles.footer.link}>
              Solutions
            </div>
          </div>
          <div className="col-md-2">
            <div style={styles.footer.headline}>
              More
            </div>
            <div style={styles.footer.link}>
              Support
            </div>
            <div style={styles.footer.link}>
              Tutorials
            </div>
            <div style={styles.footer.link}>
              Libraries
            </div>
          </div>
          <div className="col-md-3">
            <div style={styles.footer.headline}>
              Syncano in social media
              <div style={styles.socialIcons.container}>
                <a href="#" style={styles.socialIcons.link}>
                  <i key="twitter" className="fa fa-twitter" style={styles.socialIcons.icon}></i>
                </a>
                <a href="#" style={styles.socialIcons.link}>
                  <i key="facebook" className="fa fa-facebook" style={styles.socialIcons.icon}></i>
                </a>
                <a href="#" style={styles.socialIcons.link}>
                  <i key="github" className="fa fa-github-alt" style={styles.socialIcons.icon}></i>
                </a>
                <a href="#" style={styles.socialIcons.link}>
                  <i key="linkedin" className="fa fa-linkedin" style={styles.socialIcons.icon}></i>
                </a>
                <a href="#" style={styles.socialIcons.link}>
                  <i key="dribbble" className="fa fa-dribbble" style={styles.socialIcons.icon}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));
