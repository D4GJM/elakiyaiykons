import React from "react";
import "./about.css";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import myImage from "./mainlogo.png";
import myImage1 from "../assets/img/portfolio/iykons.jpg";

export default function ContactPage() {
  return (
    <div class="body">
      <section id="topbar" class="fixed-top d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">info@iykons.com</a>
            </i>
            <i class="bi bi-phone d-flex align-items-center ms-4">
              <span>+442035982904</span>
            </i>
          </div>
          <div class="social-links d-none d-md-flex">
            <a href="#" class="twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="linkedin">
              <i class="bi bi-linkedin"></i>
            </a>
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
              <li>
                <a class="nav-link scrollto" href="#services">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto " href="">
                  About
                </a>
              </li>

              <li class="dropdown">
                <a href="#">
                  <span>Services</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Technology & Innovation</a>
                  </li>

                  <li>
                    <a href="#">Accounting & Finance</a>
                  </li>
                  <li>
                    <a href="#">Digital Marketing & Branding</a>
                  </li>
                  <li>
                    <a href="#">Business & Personal Finance</a>
                  </li>
                  <li>
                    <a href="#">Business Support & Consultancy</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Products</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">IYCONNECT</a>
                  </li>

                  <li>
                    <a href="#">IYPAY</a>
                  </li>
                  <li>
                    <a href="#">IYCLOCK</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="#team">
                  Blogs
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/page-one">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <main id="main">
        <div class="breadcrumbs d-flex align-items-center">
          <div
            class="container position-relative d-flex flex-column align-items-center"
            data-aos="fade"
          >
            <h2>About</h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>About</li>
            </ol>
          </div>
        </div>
        <section id="about" class="about mt-5">
          <div class="container" data-aos="fade-up">
            <div class="row position-relative">
              <div class="col-lg-7 about-img"></div>

              <div class="col-lg-7">
                <div class="our-story">
                  <h4>ABOUT US</h4>
                  <h3>OUR STORY:</h3>
                  <p>
                    Our excellent team of specialists can help you and your
                    business with your financial, IT, and business support
                    needs. Our mission is to meet the needs of SMEs from under
                    one roof. We relish the challenges of finding the best
                    solutions for you and thrive on making our clients happy. To
                    find out more about our services, please do not hesitate to
                    contact us online or at your nearest local office. We are
                    based in
                  </p>
                  <ul>
                    <li>
                      <i class="bi bi-check-circle"></i>{" "}
                      <span>Chessington, Greater London, United Kingdom</span>
                    </li>
                    <li>
                      <i class="bi bi-check-circle"></i>{" "}
                      <span>Chennai, Tamil Nadu, India</span>
                    </li>
                    <li>
                      <i class="bi bi-check-circle"></i>{" "}
                      <span>Sydney, Australia</span>
                    </li>
                  </ul>
                  <p>
                    IYKONS is an ACCA-accredited chartered accountancy firm. We
                    undertake all aspects of Accountancy and Tax work. Contact
                    IYKONS to find out about other bespoke solutions we offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="row mt-5 hi">
          <div class="d-md-flex post-entry-2 half">
            <a href="#" class="me-4 thumbnail">
              <img src={myImage1} alt="" class="img-fluid" />
            </a>
            <div class="ps-md-5 mt-4 mt-md-0">
              <h2 class="pt-5 display-4">Company History</h2>

              <p>
                Jey Founded IYKONS in 2008 after observing a significant gap in
                the SME market for a one-stop solution for striving business
                people. IYKONS organisation and the team were designed to
                address any challenge a business person throws. We will solve it
                or find a way to solve it within the customer’s timeframe.
                Hundreds of IYKONS customers are out there to prove our
                problem-solving history.
              </p>
              <p>
                IYKONS manages 500+ portfolios in various sectors, from
                not-for-profit to aeronautical industries.
              </p>
              <p>What Makes Us the Best Choice?</p>
              <ul class="list">
                <li>
                  {" "}
                  <span>Cost-effective fixed fee services.</span>
                </li>
                <li>
                  {" "}
                  <span>Wide range of industry expertise</span>
                </li>
                <li>
                  {" "}
                  <span>Fully accredited and regulated.</span>
                </li>
                <li>
                  <span>
                    Follow strict regulatory standards to safeguard our clients
                    from possible legal actions.
                  </span>
                </li>
                <li>
                  {" "}
                  <span>Focused on customer needs and on-time delivery.</span>
                </li>
                <li>
                  {" "}
                  <span>
                    Personalised services with laser-focused attention to every
                    client.
                  </span>
                </li>
                <li>
                  {" "}
                  <span>IYKONS – Outsourcing to excellence.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section id="testimonials" class="testimonials section-bg mt-5 mb-5">
          <div class="container" data-aos="fade-up">
            <div class="section-header pt-5">
              <h1>IYKONS – Give Back</h1>
              <h2>
                “We make a living by what we get, but we make a life by what we
                give.” Winston Churchill.
              </h2>
              <p>
                At IYKONS, we believe in giving back to the community; this
                makes our work truly meaningful. IYKONS colleagues volunteer
                their valuable time to empower local charities and encourage
                communities to set up charitable entities every year. In
                addition, IYKONS staff members dedicate a significant amount of
                weekly time to help empower community organisations by helping
                them with legal, compliance and financial aspects. At the same
                time, IYKONS group of companies contribute thousands of pounds a
                year to established charities here and around the developing
                world through our charitable arm, Atchaya Foundation.
              </p>
            </div>
          </div>
        </section>
      </main>

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
                    14, Elm Road, Chessington, Surrey, <br />
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
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Blogs</a>
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
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Accounting & Finance</a>
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
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Business Support & Consultancy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Subscribe to Our Website</p>
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
  );
}
