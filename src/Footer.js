import './Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer(){
    return(
        <div className="footer">
            <div className="footer-comp">

            <img src="../images/logo.png" alt="" className='footer-img' />

            <div className='sub-footer'>
                <h2>QUICK LINKS</h2>
                <span>About Us</span>
                <span>Consult Doctor</span>
                <span>Products</span>
                <span>Learn</span>
            </div>

            <div className='sub-footer'>
                <h2>CONTACT US</h2>
                <span> <LocalPhoneIcon /> Or <WhatsAppIcon /> </span>
                <span>+91 1234567897</span>
            </div>

            <div className='sub-footer'>
                <h2>SUPPORT</h2>
                <span>Help</span>
                <span>Rate Doctor</span>
            </div>

            <div className='sub-footer'>
                <h2>SOCIAL</h2>
                <span> <FacebookIcon /> Facebook</span>
                <span> <InstagramIcon /> Instagram</span>
                <span> <LinkedInIcon /> Linkedin</span>
            </div>

            </div>

            <span> <CopyrightIcon />2021 TotalHeal pvt Ltd.All rights reserved </span>
        </div>
    )
}

export default Footer;