import React from 'react';
import Syncano from 'syncano-components';

export default React.createClass({

  getInitialState() {
    return {}
  },

  getPlan() {
    return {
      "options":{"cbx":["5","10","25","50","100","175","250"],"api":["20","40","80","150","350","600","900","1250"]}
      ,"name":"paid-commitment"
      ,"pricing":{"cbx":{"10":{"overage":"0.0002222","included":45000},"25":{"overage":"0.0002174","included":115000},"175":{"overage":"0.000175","included":1000000},"50":{"overage":"0.0002128","included":235000},"5":{"overage":"0.00025","included":20000},"100":{"overage":"0.0002","included":500000},"250":{"overage":"0.0001471","included":1700000}},"api":{"150":{"overage":"0.0000167","included":9000000},"900":{"overage":"0.0000129","included":70000000},"20":{"overage":"0.00002","included":1000000},"600":{"overage":"0.0000143","included":42000000},"40":{"overage":"0.00002","included":2000000},"1250":{"overage":"0.0000125","included":100000000},"350":{"overage":"0.0000152","included":23000000},"80":{"overage":"0.0000178","included":4500000}}}
    }
  },

  getInfo(type) {
    let info = {
      included: 0,
      overage: 0,
      total: 0
    };

    if (!this.getPlan()) {
      return info;
    }

    let pricing = this.getPlan().pricing[type];
    let options = this.getPlan().options[type];
    let sliderValue = this.state[type + 'Selected'];

    if (!sliderValue) {
      info = pricing[Object.keys(pricing)[0]];
      info.total = Object.keys(pricing)[0];
      return info;
    }

    let value = String(parseFloat(sliderValue));

    info = pricing[options[value]];
    info.total = options[value];
    return info;
  },

  getStyles() {
    return {
      main: {
        marginTop: 50,
        fontColor: '#4A4A4A'
      },
      sectionTopic: {
        fontSize: '1.3em'
      },
      table: {
        marginTop: 20
      },
      tableRow: {
        height: 40,
        textAlign: 'left',
        lineHeight: '40px',
        verticalAlign: 'middle'
      },
      tableColumnSummary: {
        height: 40,
        boxShadow: 'inset 0 0 0 1px #fff',
        fontSize: '1.1em',
        fontWeight: 'bold',
        textAlign: 'right',
        background: '#F2F2F2',
        verticalAlign: 'middle',
        lineHeight: '40px'
      },
      sectionTotalSummary: {
        marginTop: 20,
        height: 80,
        fontSize: '1.4em',
        lineHeight: '1.4em',
        background: '#CBEDA5',
        padding: 14
      },
      sectionComment: {
        marginTop: 20,
        fontSize: '0.8em',
        color: '#9B9B9B'
      }
    };
  },

  handleSliderLabelsClick(value, type) {
    let newState = {};

    newState[type + 'Selected'] = value;
    this.setState(newState);
  },

  onSliderChange(type, event, value) {
    let newState = {};

    newState[type + 'Selected'] = value;
    this.setState(newState);
  },

  renderSlider(type) {
    if (!this.getPlan()) {
      return true;
    }
    const defaultValue = 0;
    let options = this.getPlan().options[type];
    let selected = this.state[type + 'Selected'];

    options = options.map((item) => {
      return '$' + item;
    });

    return (
      <Syncano.Slider.Slider
        key={type + 'Slider'}
        ref={type + 'Slider'}
        name={type + 'Slider'}
        value={typeof selected !== 'undefined' ? selected : defaultValue}
        type={type}
        legendItems={options}
        optionClick={this.handleSliderLabelsClick}
        onChange={this.onSliderChange}
      />
    );
  },

  renderSliderSummary(info) {
    return (
      <div>
        <div style={{paddingBottom: 8}}>
          <div style={{paddingBottom: 8}}>{info.included.label}</div>
          <div><strong>{info.included.value}</strong></div>
        </div>
        <div>
          <div style={{paddingBottom: 8}}>{info.overage.label}</div>
          <div><strong>${info.overage.value}</strong></div>
        </div>
      </div>
    );
  },

  render() {
    let styles = this.getStyles();
    let apiInfo = this.getInfo('api');
    let cbxInfo = this.getInfo('cbx');
    let sum = parseInt(apiInfo.total, 10) + parseInt(cbxInfo.total, 10);

    let apiSliderSummary = this.renderSliderSummary(
      {
        included: {
          value: parseInt(apiInfo.included, 10).toLocaleString(),
          label: 'Total API calls'
        },
        overage: {
          value: apiInfo.overage,
          label: 'Overage Unit Price: API Calls'
        }
      }
    );

    let cbxSliderSummary = this.renderSliderSummary(
      {
        included: {
          value: parseInt(cbxInfo.included, 10).toLocaleString(),
          label: 'Total CodeBox runs'
        },
        overage: {
          value: cbxInfo.overage,
          label: 'Overage Unit Price: CodeBox run'
        }
      }
    );

    return (
      <div className="hidden-xs" style={{marginBottom: 80}}>
        <div>
          <div style={{fontSize: '1.5em', lineHeight: '1.5em'}}>Choose your plan</div>
          <div style={{color: '#9B9B9B'}}>move the sliders to choose your plan</div>
        </div>
        <div style={{paddingTop: 34}}>

          <Syncano.Slider.Section
            title="API calls"
            slider={this.renderSlider('api')}
            sliderSummary={apiSliderSummary}/>

          <Syncano.Slider.Section
            style={{paddingTop: 50}}
            title="CodeBox runs"
            slider={this.renderSlider('cbx')}
            sliderSummary={cbxSliderSummary}/>

          <div className="row" style={{marginTop: 40}}>
            <div className="col-sm-8">
              <div style={styles.sectionTopic}>Summary</div>
              <div style={styles.table}>
                <div className="row" style={styles.tableRow}>
                  <div className="col-sm-4">API calls</div>
                  <div className="col-sm-4" style={styles.tableColumnSummary}>
                    {parseInt(apiInfo.included, 10).toLocaleString()}
                  </div>
                  <div className="col-sm-4" style={styles.tableColumnSummary}>${apiInfo.total}/Month</div>
                </div>
                <div className="row" style={styles.tableRow}>
                  <div className="col-sm-4">CodeBox runs</div>
                  <div className="col-sm-4" style={styles.tableColumnSummary}>
                    {parseInt(cbxInfo.included, 10).toLocaleString()}
                  </div>
                  <div className="col-sm-4" style={styles.tableColumnSummary}>${cbxInfo.total}/Month</div>
                </div>
              </div>
            </div>
            <div className="col-sm-4" style={{paddingLeft: 35}}>
              <div style={styles.sectionTopic}>New plan:</div>
              <div style={{marginTop: 20, background: '#CBEDA5'}}>
                <div style={styles.sectionTotalSummary}>
                  <div><strong>${sum}</strong>/month</div>
                  <div>+ overage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
