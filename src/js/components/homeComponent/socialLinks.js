import React, { Component } from 'react';

import facebook from '../../../assets/img/icons/facebook.png';
import arrowRight from '../../../assets/img/icons/arrow-right.png';
import gmail from '../../../assets/img/icons/gmail.png';
import twitter from '../../../assets/img/icons/twitter.png';
import linkedin from '../../../assets/img/icons/linkedin.png';
import snapchat from '../../../assets/img/icons/snapchat.png';


class Social extends Component {
    render() {
    
      return (
            <div className="social-block social-links dropdown">
                <div className="arrow-img dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={arrowRight} alt="arrow" />
                </div>
                <ul className="list-unstyled dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                        <a href="https://www.google.com/">
                            <img src={facebook} alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">
                            <img src={gmail} alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">
                            <img src={twitter} alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">
                            <img src={linkedin} alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">
                            <img src={snapchat} alt="facebook" />
                        </a>
                    </li>
                </ul>
        </div>
      );
    }
  }
  
  export default Social;  