import React, { Component } from 'react';
import './FooterComponent.css';

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFooterVisible: true,
    };

    this.toggleFooter = this.toggleFooter.bind(this);
  }

  toggleFooter() {
    this.setState((prevState) => ({
      isFooterVisible: !prevState.isFooterVisible,
    }));
  }

  render() {
    const { isFooterVisible } = this.state;

    return (
      <div>
        {isFooterVisible && (
          <footer className="footer">
            <span className="text-white">
              <strong>Irsyad Aflaha Shobirin</strong>
            </span>

            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="mailto:shobirin354j@gmail.com">
                Email
              </a>
            </div>
          </footer>
        )}

        <button className="toggle-btn" onClick={this.toggleFooter}>
          {isFooterVisible ? 'Hide Footer' : 'Show Footer'}
        </button>
      </div>
    );
  }
}

export default FooterComponent;
