import React, { Component } from 'react';

export default class VLibras extends Component {
  widgetSrc;
  scriptSrc;
  script;

  constructor(props) {
    super(props);
    this.widgetSrc = 'https://vlibras.gov.br/app';
    this.scriptSrc = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  }

  init() {
    this.script = document.createElement('script');
    this.script.src = this.scriptSrc;
    this.script.async = true;
    this.script.onload = () => {
      new window.VLibras.Widget(this.widgetSrc);
      if (this.props.forceOnload) {
        window.onload();
      }
    };
    document.head.appendChild(this.script);
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    );
  }
}
