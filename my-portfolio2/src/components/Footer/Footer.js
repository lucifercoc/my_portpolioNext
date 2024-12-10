import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Footer/Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <p className='text-center'>
            Developed
             {/* <FontAwesomeIcon className='' icon={faHeart} size="sm" />  */}
            by Toymur Rahman
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
