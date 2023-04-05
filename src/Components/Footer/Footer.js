import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Categories</span>
        <Link className="link link-hover">Digital Marketing</Link>
        <Link className="link link-hover">Graphics & Design</Link>
        <Link className="link link-hover">Writing & Translation</Link>
        <Link className="link link-hover">Video & Animation</Link>
        <Link className="link link-hover">Music & Audio</Link>
        <Link className="link link-hover">Programming & Tech</Link>
        <Link className="link link-hover">Data</Link>
        <Link className="link link-hover">Business</Link>
        <Link className="link link-hover">LifeStyle</Link>
        <Link className="link link-hover">Photography</Link>
        <Link className="link link-hover">Sitemap</Link>
      </div>
      <div>
        <span className="footer-title">About</span>
        <Link className="link link-hover">Careers</Link>
        <Link className="link link-hover">Press & News</Link>
        <Link className="link link-hover">Partnerships</Link>
        <Link className="link link-hover">Privacy Policy</Link>
        <Link className="link link-hover">Terms of Service</Link>
        <Link className="link link-hover">Intellectual Property Claims</Link>
        <Link className="link link-hover">Investor Relations</Link>
      </div>
      <div>
        <span className="footer-title">Support</span>
        <Link className="link link-hover">Help & Support</Link>
        <Link className="link link-hover">Trust & Safety</Link>
        <Link className="link link-hover">Selling on Devhive</Link>
        <Link className="link link-hover">Buying on Devhive</Link>
      </div>
      <div>
        <span className="footer-title">Community</span>
        <Link className="link link-hover">Customer Success Stories</Link>
        <Link className="link link-hover">Community Hub</Link>
        <Link className="link link-hover">Forum </Link>
        <Link className="link link-hover">Events </Link>
        <Link className="link link-hover">Blog </Link>
        <Link className="link link-hover">Influencers</Link>
        <Link className="link link-hover">Affiliates</Link>
        <Link className="link link-hover">Podcast</Link>
        <Link className="link link-hover">Invite a Friend</Link>
        <Link className="link link-hover">Become a Seller</Link>
        <Link className="link link-hover">Community Standards</Link>
      </div>
      <div>
        <span className="footer-title">More From Devhive</span>
        <Link className="link link-hover">Devhive Business</Link>
        <Link className="link link-hover">Devhive Pro</Link>
        <Link className="link link-hover">Devhive Logo Maker</Link>
        <Link className="link link-hover">Devhive Guides</Link>
        <Link className="link link-hover">Get Inspired</Link>
        <Link className="link link-hover">Devhive Select</Link>
        <Link className="link link-hover">ClearVoice</Link>
        <Link className="link link-hover">Devhive Workspace</Link>
        <Link className="link link-hover">Learn</Link>
        <Link className="link link-hover">Working Not Working</Link>
      </div>
    </footer>
  );
};

export default Footer;
