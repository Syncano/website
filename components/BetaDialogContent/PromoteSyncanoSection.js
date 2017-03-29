import React, { PropTypes } from 'react';
import axios from 'axios';

import logo from '../../images/features/syncano-logo.svg';
import SocialButton from '../SocialButton';
import RadioButton from '../RadioButton';

const PromoteSyncanoSection = React.createClass({

  componentWillMount() {
    const { utm_source, utm_medium } = this.context.location.query;

    if (utm_source === 'beta_email_confirmation') {
      this.setState({
        step: 1,
        inviterEmail: utm_medium
      });
    }
    if (utm_medium === 'email_referral') {
      this.setState({
        inviterEmail: utm_source
      });
    }
  },

  getInitialState() {
    return {
      step: 0,
      errors: {
        emails: null
      }
    };
  },

  onFormSubmit(event) {
    event.preventDefault();

    const { emails = '', step, devEmail, devType, inviterEmail } = this.state;
    const { utm_source } = this.context.location.query;

    const emailsToTrack = [
      [devEmail],
      emails.match(/([^, ]+)/g)
    ];

    if (!emailsToTrack[step]) return true;

    return emailsToTrack[step].forEach((email, index, arr) => {
      const emailRegex = new RegExp("^[a-z][a-zA-Z0-9_.+]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$", 'g');
      const isValidEmail = emailRegex.test(email);

      if (!isValidEmail) {
        arr.length = 0;
        return this.setState({
          errors: {
            emails: `${email} doesn't look like a valid email address.`
          }
        });
      } else {
        this.addIntercomLead({ email,
          customAttributes: { 
            devType,
            beta_inviter_email: (devType ? '' : devEmail) || (utm_source ? inviterEmail : '')
          }
        });

        this.setState({
          emails: '',
          devType: '',
          step: step + 1
        });
      }
      return true;
    });
  },

  getStyles() {
    const { errors, devEmail, emails, devType } = this.state;
    const isWrongEmail = errors.emails;

    return {
      ribbonBackground: {
        zIndex: 1,
        width: 125,
        height: 30,
        backgroundColor: 'red',
        transform: 'rotate(-45deg)',
        position: 'absolute',
        top: 15,
        left: -30,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        letterSpacing: 1
      },
      root: {
        fontSize: 20,
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-around',
        height: '100%'
      },
      flexColumn: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'
      },
      logo: {
        width: '80%',
        marginTop: 40,
        marginBottom: 20
      },
      ascendTag: {
        letterSpacing: 2,
        fontWeight: 700,
        color: '#000'
      },
      cta: {
        lineHeight: '25px',
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      },
      ctaText: {
        paddingBottom: 30,
        fontSize: 18,
        color: '#9b9b9b',
        textAlign: 'center'
      },
      ctaButtons: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: '20px 0'
      },
      buttonContainer: {
        width: '100%',
        margin: '5px 0',
        borderRadius: 5,
        overflow: 'hidden',
        fontSize: 20,
        textTransform: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: (devEmail && devType) ? 'pointer' : 'default',
        fontFamily: 'Avenir, sans-serif',
        fontWeight: 500
      },
      inviteButton: {
        border: '10px',
        boxSizing: 'border-box',
        display: 'inline-block',
        fontFamily: 'Avenir, sans-serif',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        cursor: 'pointer',
        textDecoration: 'none',
        margin: '10px 0px 0px',
        padding: '0px',
        outline: 'none',
        fontSize: '16px',
        fontWeight: 'inherit',
        transform: 'translate(0px, 0px)',
        height: '36px',
        lineHeight: '36px',
        minWidth: '88px',
        color: 'rgb(33, 150, 243)',
        borderRadius: '2px',
        userSelect: 'none',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        textAlign: 'center',
        cursor: 'pointer'
      },
      formInfo: {
        fontSize: 14,
        color: '#9b9b9b',
        textAlign: 'center',
        marginTop: 10
      },
      form: {
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        margin: '10px 0'
      },
      formInput: {
        borderRadius: 5,
        backgroundColor: isWrongEmail ? '#FFF2F4' : '#F5F5F5',
        flex: 2,
        border: isWrongEmail ? '2px solid #C14A58' : '2px solid #E2E2E2',
        fontSize: 18
      },
      formButton: {
        backgroundColor: (devEmail || emails) ? '#1976d2' : '#ddd',
        fontFamily: 'Avenir, sans-serif',
        borderRadius: '5px',
        minWidth: '88px',
        flex: 1,
        margin: 0,
        color: '#fff'
      },
      applyForBetaForm: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      },
      applyForBetaButton: {
        fontFamily: 'Avenir, sans-serif',
        backgroundColor: (devEmail && devType) ? '#1976d2' : '#ddd',
        height: 50,
        marginTop: 10,
        color: '#fff'
      },
      applyForBetaInput: {
        backgroundColor: isWrongEmail ? '#FFF2F4' : '#f2f2f2',
        letterSpacing: 1,
        paddingLeft: '5%',
        height: 50,
        color: '#000'
      },
      errors: {
        fontSize: 14,
        color: 'red',
        marginTop: 10
      },
      emailVerify: {
        fontSize: 20,
        color: '#39e600',
        position: 'relative',
        textAlign: 'center',
        width: '100%'
      },
      thankYou: {
        fontSize: '1.2em',
        paddingBottom: 15,
        color: '#000'
      }
    };
  },

  handleShareButtonClick(socialType) {
    const homeUrl = 'https://syncano.io';
    const message = 'I just signed up to get early access to the next version of Syncano! ' +
      'Check it out on www.syncano.io';
    const url = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${homeUrl}&quote=${message}`,
      twitter: `https://twitter.com/intent/tweet?text=${message}&via=syncano`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${homeUrl}&text=${message}`
    };

    window.open(url[socialType], 'pop', 'width=600, height=400');
    window.analytics.track('Beta referral sent', {
      social: socialType
    });
  },

  addIntercomLead({ email, customAttributes = {} }) {
    axios.post('https://intercom-socket.syncano.space/intercom/add_lead/', {
      environment: APP_CONFIG.env === 'production' ? 'prod' : '',
      email,
      custom_attributes: customAttributes
    });
  },


  handleDevOptionChange(devType) {
    this.setState({
      devType
    });
  },

  handleEmailsChange(event) {
    const { errors } = this.state;

    delete errors.emails;

    this.setState({
      emails: event.target.value,
      errors
    });
  },

  handleDevEmailChange(event) {
    const { errors } = this.state;

    delete errors.emails;

    this.setState({
      devEmail: event.target.value,
      errors
    });
  },

  renderBetaRibbon() {
    const styles = this.getStyles();

    return (
      <div style={styles.ribbonBackground}>
        Beta
      </div>
    );
  },

  renderSocialButtons() {
    const styles = this.getStyles();

    return (
      <div style={styles.ctaButtons}>
        <SocialButton
          style={{ ...styles.buttonContainer, backgroundColor: '#EBEEF4', color: '#3B5998' }}
          onClick={() => this.handleShareButtonClick('facebook')}
        >
          Share on Facebook
        </SocialButton>
        <SocialButton
          style={{ ...styles.buttonContainer, backgroundColor: '#E8F5FD', color: '#1DA1F2' }}
          onClick={() => this.handleShareButtonClick('twitter')}
        >
          Tweet the link
        </SocialButton>
        <SocialButton
          style={{ ...styles.buttonContainer, backgroundColor: '#E5F1F7', color: '#0077B5' }}
          onClick={() => this.handleShareButtonClick('linkedin')}
        >
          Share on LinkedIn
        </SocialButton>
      </div>
    );
  },

  renderDevOptionButtons() {
    const styles = this.getStyles();
    const { devType } = this.state;

    return (
      <form style={styles.ctaButtons} required>
        <RadioButton
          title="I'm a Product Developer"
          onChange={() => this.handleDevOptionChange('product')}
          checked={devType === 'product'}

        />
        <RadioButton
          title="I'm a Software Developer"
          onChange={() => this.handleDevOptionChange('software')}
          checked={devType === 'software'}
        />
      </form>
    );
  },

  renderPromoteSection() {
    const styles = this.getStyles();
    const { emails, errors, alreadyInvited } = this.state;
    const emailConfirm = location.search.includes('?utm_source=beta_email_confirmation&utm_campaign=beta_ascend&utm_name=beta_ascend');

    return (
      <div>
        <section 
          className="promote-cta" 
          style={styles.cta}
        >
          {!alreadyInvited && !emailConfirm &&
            <div style={styles.emailVerify}>
              {"We've sent you a verification email."}
            </div>
          }
          {emailConfirm && !alreadyInvited && 
            <div style={styles.emailVerify}>
              Email confirmed.
            </div>
          }
          <p style={styles.ctaText}>
            Want to get to the top of the list?
            <br />
            Share Syncano with your friends!
          </p>
          {this.renderSocialButtons()}
        </section>
        <div style={styles.formInfo}>or send invites via email (separate with commas)</div>
        <form
          onSubmit={this.onFormSubmit}
          style={styles.form}
        >
          <input
            name="emails"
            placeholder="Enter email addresses"
            style={{ ...styles.formInput, marginRight: 10, paddingLeft: '5%' }}
            onChange={this.handleEmailsChange}
          />
          <button
            disabled={!emails || errors.emails}
            style={{ ...styles.buttonContainer, ...styles.formButton }}
            onClick={this.onFormSubmit}
          >
            Send
          </button>
        </form>
        <div style={styles.errors}>{this.state.errors.emails}</div>
      </div>
    );
  },

  renderDevOptionSection() {
    const styles = this.getStyles();
    const { devEmail, devType } = this.state;

    return (
      <div>
        <section style={styles.cta}>
          <p style={styles.ctaText}>
            Register below to get on the list
            <br />
            for early beta access.
          </p>
          {this.renderDevOptionButtons()}
        </section>
        <form
          onSubmit={this.onFormSubmit}
          style={{ ...styles.devForm, ...styles.applyForBetaForm }}
        >
          <input
            name="devEmail"
            placeholder="Email address"
            style={{ ...styles.formInput, ...styles.formButton, ...styles.applyForBetaInput }}
            onChange={this.handleDevEmailChange}
          />
          <div style={styles.errors}>{this.state.errors.emails}</div>
          <button
            disabled={!devEmail || !devType}
            style={{ ...styles.buttonContainer, ...styles.formButton, ...styles.applyForBetaButton }}
            onClick={this.onFormSubmit}
          >
            Apply for beta
          </button>
        </form>
      </div>
    );
  },

  renderThanksSection() {
    const styles = this.getStyles();
    const { step } = this.state;

    return (
      <div style={styles.flexColumn}>
        <h5 style={styles.thankYou}>Thank You!</h5>
        <p style={styles.ctaText}>
          {"We'll get back to you very soon!"}
        </p>
        <SocialButton
          style={{ ...styles.inviteButton }}
          onClick={() => this.setState({ step: step - 1, alreadyInvited: true })}
        >
        INVITE MORE PEOPLE
        </SocialButton>
      </div>
    );
  },

  render() {
    const styles = this.getStyles();
    const { step } = this.state;

    const renderStep = [
      () => this.renderDevOptionSection(),
      () => this.renderPromoteSection(),
      () => this.renderThanksSection()
    ];

    return (
      <div style={styles.root}>
        {this.renderBetaRibbon()}
        <header style={styles.flexColumn}>
          <div>Get ready for</div>
          <img
            alt={'Syncano Logo'}
            src={logo}
            className="logo-black"
            style={styles.logo}
          />
          <div style={styles.ascendTag}>
            ASCEND
          </div>
        </header>
        {renderStep[step]()}
      </div>
    );
  }
});


PromoteSyncanoSection.contextTypes = {
  location: PropTypes.object
}

export default PromoteSyncanoSection;
