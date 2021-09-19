import React from 'react'
import './Footer.scss'
import Select from '../Select/Select'
import facebook from '../../assets/img/icon-facebook.png'
import twitter from '../../assets/img/icon-twitter.png'
import instagram from '../../assets/img/icon-instagram.png'
import youtube from '../../assets/img/icon-youtube.png'

const data = [{id: 0, label: "English"}, {id: 1, label: "Türkçe"}];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__nav-bar">
          <ul className="footer__nav">
            <li><a href="javascript:;" title=""> Games</a></li>
            <li><a href="javascript:;" title=""> Membership</a></li>
            <li><a href="javascript:;" title=""> Download</a></li>
          </ul>
          <ul className="footer__nav">
            <li><a href="javascript:;" title=""> Contact Us</a></li>
            <li><a href="javascript:;" title=""> Blog</a></li>
          </ul>
          <ul className="footer__nav">
            <li><a href="javascript:;" title=""> FAQs</a></li>
            <li><a href="javascript:;" title=""> Service Status</a></li>
          </ul>
        </div>

        <div className="footer__right">
          <div className="footer__social-media">
            <h4>Follow Us!</h4>
            <a href="javascript:;" title="Facebook"><img src={facebook} alt="Facebook" /></a>
            <a href="javascript:;" title="Twitter"><img src={twitter} alt="Twitter" /></a>
            <a href="javascript:;" title="Instagram"><img src={instagram} alt="Instagram" /></a>
            <a href="javascript:;" title="Youtube"><img src={youtube} alt="Youtube" /></a>
          </div>
          <div className="footer__language-option">
            <h4>Site Language</h4>
            <Select />
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom--left">
          <a href="javascript:;" title="Terms of Use">Terms of Use</a>
          <a href="javascript:;" title="Privacy Policy">Privacy Policy</a>
          <a href="javascript:;" title="Cookies">Cookies</a>
        </div>
        <p>Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}
export default Footer
