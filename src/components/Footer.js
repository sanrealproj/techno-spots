import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons" />
        <p>
          &copy;{new Date().getFullYear()} TheDigitalSpecs.com. All rights
          reserved. About | Contact | Affiliate Disclosure| Privacy Policy |
          Terms & Conditions As an Amazon Associate TheDigitalSpecs earn from
          qualifying purchases. TheDigitalSpecs.com is an affiliate program
          designed to provide a means for sites to earn advertising fees by
          advertising and linking to Amazon.com or other Affiliated Link.
          TheDigitalSpecs is reader-supported. When you buy through links on our
          site, we may earn an affiliate commission
        </p>
      </div>
    </footer>
  )
}

export default Footer
