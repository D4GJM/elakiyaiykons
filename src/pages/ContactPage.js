import React from 'react'
import './ContactPage.css';
import '../assets/vendor/animate.css/animate.min.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/remixicon/remixicon.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import myImage from './mainlogo.png';
export default function ContactPage() {
  return (
    
    <div class="body">
  
  
  

  
  <section id="topbar" class="fixed-top d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">info@iykons.com</a></i>
        <i class="bi bi-phone d-flex align-items-center ms-4"><span>+442035982904</span></i>
      </div>
      <div class="social-links d-none d-md-flex">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </section>

  
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
      <img src={myImage} alt="My Image" />
       
        
       
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          
          <li><a class="nav-link scrollto" href="#services">Home</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">About</a></li>
          
          <li class="dropdown"><a href="#"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Technology & Innovation</a></li>
              
              
              <li><a href="#">Accounting & Finance</a></li>
              <li><a href="#">Digital Marketing & Branding</a></li>
              <li><a href="#">Business & Personal Finance</a></li>
              <li><a href="#">Business Support & Consultancy</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Products</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">IYCONNECT</a></li>
              
              
              <li><a href="#">IYPAY</a></li>
              <li><a href="#">IYCLOCK</a></li>
              
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#team">Blogs</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  

  <main id="main">

    
 

    <section class="inner-page">
      <div class="container">
        
      </div>
    </section>


  </main>
 
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-map"></i>
              <h3>Our Address</h3>
              <p>14, Elm Road, Chessington, Surrey, KT9 1AW, United Kingdom.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>info@iykons.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>+442035982904</p>
            </div>
          </div>
        </div>

        <div className="row gy-4 mt-1">
          <div className="col-lg-6">
            <iframe
               src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=14,%20Elm%20Road,%20Chessington,%20Surrey,%20KT9%201AW,%20United%20Kingdom.+(IYKONS)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              frameBorder="0"
              style={{ border: 0, width: '100%', height: '384px' }}
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row gy-4">
                <div className="col-lg-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  

  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
            <h2>IYKONS</h2>
              <p>
              14, Elm Road, Chessington, Surrey,  <br />
              KT9 1AW, United Kingdom.
                <br />
                <br />
                <strong>Phone:</strong> +442035982904
                <br />
                <strong>Email:</strong> info@iykons.com
                <br />
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram" />
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Products</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Blogs</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
            <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Technology & Innovation</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Accounting & Finance</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Digital Marketing & Branding</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Business & Personal Finance</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Business Support & Consultancy</a>
              </li>
             
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
            Subscribe to Our Website
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>2022</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mybiz-free-business-bootstrap-theme/ */}
        Designed by <a href="https://iykons.com/">IYKONS</a>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  <a
    href="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  
</div>

  )
};
