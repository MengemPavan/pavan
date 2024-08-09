import './index.css';

function Footer() {
  return (
    <div className="footer">
          <div className='footer-details-container'> 
            <div className='footer-details-container-1'>
                  <h1>ASHISHCARE</h1>
                  <p>Leading the Way in MedicalExecellence, Trusted Care</p>
              </div>
              <div className='footer-details-container-2'>
                  <p>Important Links</p>
                  <div className='footer-details'>
                  <p>Appointment</p>
                  <p>Doctors</p>
                  <p>About Us</p>
                  <p>Services</p>
                </div>
              </div>
              <div className='footer-details-container-2'>
                  <p>Contact Us</p>
                    <div className='footer-details'>
                      <p>Call: (237) 681-812-255</p>
                      <p>Email: info@ashishcare.com</p>
                      <p>Address: 123 Main Street, Adilabad</p>
                       <p>India</p>
                    </div>
              </div>
              <div className='footer-details-container-2'>
                  <p>Newsletter</p>
                  <button>Subscribe</button>
            </div>
          </div>
          <hr className='hr' /> 
          <div className='footer-copyright'>
              <p>© 2024 Ashicare All Rights Reserved by PNTEC-LTD</p>
          </div>
            
    </div>
  );
}

export default Footer;