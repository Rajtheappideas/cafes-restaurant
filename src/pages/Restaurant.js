import React from 'react'
import started_img7 from '../assets/images/started_img7.jpg'
import started_img5 from '../assets/images/started_img5.jpg'
import started_img6 from '../assets/images/started_img6.jpg'
import category_bg from '../assets/images/category_bg.jpg'
import menu_logo from '../assets/images/menu_logo.png'
import reservation5 from '../assets/images/reservation5.jpg'
import reservation6 from '../assets/images/reservation6.jpg'
import testimonials_bg2 from '../assets/images/testimonials_bg2.jpeg'
import video_bg from '../assets/images/video_bg.jpg'
import cta_bg from '../assets/images/cta_bg.jpg'




const Restaurant = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Section Started Slider */}
        <section className="section kf-started-slider">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="kf-started-item">
                  <div
                    className="slide js-parallax"
                    style={{ backgroundImage: `url(${started_img7})` }}
                  />
                  <div className="container">
                    <div className="description">
                      <div className="subtitles">Welcome to the Kaffen</div>
                      <h2 className="name text-anim-1" data-splitting="chars">
                        Reserve Your <br />
                        Table Today
                      </h2>
                      <div className="kf-bts">
                        <a href="menu-restaurant.html" className="kf-btn">
                          <span>explore more</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                        <a href="reservation.html" className="kf-btn dark-btn">
                          <span>get delivery</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="kf-started-item">
                  <div
                    className="slide js-parallax"
                    style={{ backgroundImage: `url(${started_img5})` }}
                  />
                  <div className="container">
                    <div className="description">
                      <div className="subtitles">Welcome to the Kaffen</div>
                      <h2 className="name text-anim-1" data-splitting="chars">
                        Explore The <br />
                        Lobsters
                      </h2>
                      <div className="kf-bts">
                        <a href="menu-restaurant.html" className="kf-btn">
                          <span>explore more</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                        <a href="reservation.html" className="kf-btn dark-btn">
                          <span>get delivery</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="kf-started-item">
                  <div
                    className="slide js-parallax"
                    style={{ backgroundImage: `url(${started_img6})` }}
                  />
                  <div className="container">
                    <div className="description">
                      <div className="subtitles">Welcome to the Kaffen</div>
                      <h2 className="name text-anim-1" data-splitting="chars">
                        Premium <br />
                        Meat Kaffen
                      </h2>
                      <div className="kf-bts">
                        <a href="menu-restaurant.html" className="kf-btn">
                          <span>explore more</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                        <a href="reservation.html" className="kf-btn dark-btn">
                          <span>get delivery</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </section>
        {/* Section Category */}
        <section
          className="section kf-category"
          style={{ backgroundImage: `url(${category_bg})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-category-items"
                  data-animate="active"
                >
                  <div className="kf-category-item">
                    <div className="image kf-image-hover">
                      <a href="menu-restaurant.html">
                        <img src={require("../assets/images/category1.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Chiken Roll</h5>
                    </div>
                  </div>
                  <div className="kf-category-item">
                    <div className="image kf-image-hover">
                      <a href="menu-restaurant.html">
                        <img src={require("../assets/images/category2.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Salad Bowl</h5>
                    </div>
                  </div>
                  <div className="kf-category-item">
                    <div className="image kf-image-hover">
                      <a href="menu-restaurant.html">
                        <img src={require("../assets/images/category3.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Lobsters</h5>
                    </div>
                  </div>
                  <div className="kf-category-item">
                    <div className="image kf-image-hover">
                      <a href="menu-restaurant.html">
                        <img src={require("../assets/images/ins_gal1.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Italian Burger</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
                <div className="kf-titles">
                  <div
                    className="kf-subtitle"
                    data-animate="active"
                  >
                    Popular Categories
                  </div>
                  <h3
                    className="kf-title"
                    data-animate="active"
                  >
                    Choose Your Best Food <br />
                    From Categories
                  </h3>
                </div>
                <div
                  className="kf-text"
                  data-animate="active"
                >
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error accusantium
                    doloremque laudantium, totam rem aperiam eaque ipsa quae
                    abillo inventore veritatis quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas
                    sit aspernatur aut odit aut fugit sed quia con
                  </p>
                </div>
                <a
                  href="menu-restaurant.html"
                  className="kf-btn"
                  data-animate="active"
                >
                  <span>explore more Category</span>
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section Menu */}
        <section className="section kf-menu-classic section-bg">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                Choose Best Menus
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Kaffen Popular Foods Menu
              </h3>
            </div>
            <div
              className="kf-menu-items"
              style={{ backgroundImage: `url(${menu_logo})` }}
            >
              <div className="row">
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="kf-menu-item"
                    data-animate="active"
                  >
                    <div>
                      <h5 className="name">Chicken</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="kf-menu-item"
                    data-animate="active"
                  >
                    <div>
                      <h5 className="name">Salad Bowl</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$199</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="kf-menu-item"
                    data-animate="active"
                  >
                    <div>
                      <h5 className="name">Barista Pouring Syrup</h5>
                      <div className="subname">
                        2/3 espresso, 1/3 streamed milk
                      </div>
                      <div className="price">$3.5</div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="kf-menu-item"
                    data-animate="active"
                  >
                    <div>
                      <h5 className="name">Smoothie</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$55.9</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="kf-menu-item"
                    data-animate="active"
                  >
                    <div>
                      <h5 className="name">Gin Trifles</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$37.5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="kf-menu-item"
                    data-animate="active"
                  >
                    <div>
                      <h5 className="name">Quesadillas</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="kf-menu-item"
                    data-animate="active"
                  >
                    <div>
                      <h5 className="name">Italian Burger</h5>
                      <div className="subname">
                        Tomatoes, sausage, ground, onions, cheese
                      </div>
                      <div className="price">$12.8</div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="kf-menu-item"
                    data-animate="active"
                  >
                    <div>
                      <h5 className="name">Chicken Burger</h5>
                      <div className="subname">
                        Ground chicken breast, mustard, paprika
                      </div>
                      <div className="price">$17.5</div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="kf-menu-item"
                    data-animate="active"
                  >
                    <div>
                      <h5 className="name">Sea Fish</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$79.0</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="kf-menu-item"
                    data-animate="active"
                  >
                    <div>
                      <h5 className="name">Okonomiyaki</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$99.9</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="kf-menu-item"
                    data-animate="active"
                  >
                    <div>
                      <h5 className="name">Benedict</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$68.5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="kf-menu-item"
                    data-animate="active"
                  >
                    <div>
                      <h5 className="name">Milk Cream</h5>
                      <div className="subname">
                        2/3 espresso, 1/3 streamed milk
                      </div>
                      <div className="price">$7.5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Team */}
        <section className="section kf-team kf-section-transparent">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                Experience Team Member
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Meet Our Professional Chefs
              </h3>
            </div>
            <div className="kf-team-items row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item"
                  data-animate="active"
                  style={{ backgroundColor: '#090c0f' }}
                >
                  <div className="desc">
                    <h5 className="name">Anthony J. Bowman</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team1.jpg")} alt="" />
                    <div className="info">
                      <div className="label">bowmankf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item"
                  data-animate="active"
                  style={{ backgroundColor: '#090c0f' }}
                >
                  <div className="desc">
                    <h5 className="name">Kenny V. Gonzalez</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team2.jpg")} alt="" />
                    <div className="info">
                      <div className="label">gonzalezkf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item"
                  data-animate="active"
                  style={{ backgroundColor: '#090c0f' }}
                >
                  <div className="desc">
                    <h5 className="name">Joseph M. Lawrence</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team3.jpg")} alt="" />
                    <div className="info">
                      <div className="label">lawrencekf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item"
                  data-animate="active"
                  style={{ backgroundColor: '#090c0f' }}
                >
                  <div className="desc">
                    <h5 className="name">Charles K. Smith</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team4.jpg")} alt="" />
                    <div className="info">
                      <div className="label">smithkf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Reservation */}
        <section className="section kf-reservation kf-section-no-margin">
          <div className="container">
            <div
              className="kf-reservation-form"
              data-animate="active"
            >
              <div
                className="image-left"
                style={{ backgroundImage: `url(${reservation5})` }}
              />
              <div
                className="image-right"
                style={{ backgroundImage: `url(${reservation6})` }}
              />
              <div className="kf-titles align-center">
                <div className="kf-subtitle">Booking Table</div>
                <h3 className="kf-title">Make Your Reservation</h3>
              </div>
              <form id="rform" method="post">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="kf-field">
                      <input type="text" name="name" placeholder="Full Name" />
                      <i className="far fa-user" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="kf-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                      <i className="fas fa-at" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="kf-field">
                      <input type="tel" name="tel" placeholder="Phone Number" />
                      <i className="fas fa-mobile-alt" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="kf-field">
                      <select name="persons">
                        <option>1 Person</option>
                        <option>2 Persons</option>
                        <option>3 Persons</option>
                        <option>4 Persons</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="kf-field">
                      <input type="date" name="date" />
                      <i className="far fa-calendar-alt" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="kf-field">
                      <input type="text" name="time" placeholder="Time" />
                      <i className="far fa-clock" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="kf-bts">
                      <a
                        href="#"
                        className="kf-btn"
                        onclick="$('#rform').submit(); return false;"
                      >
                        <span>booking table</span>
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              <div className="alert-success" style={{ display: 'none' }}>
                <p>Thanks, your message is sent successfully.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Section About-2 */}
        <section
          className="section kf-about-2"
          style={{ backgroundImage: `url(${category_bg})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
                <div className="kf-titles">
                  <div
                    className="kf-subtitle"
                    data-animate="active"
                  >
                    About Kaffen
                  </div>
                  <h3
                    className="kf-title"
                    data-animate="active"
                  >
                    Have Nice &amp; Enjoyable <br />
                    Time With Our Foods
                  </h3>
                </div>
                <div
                  className="kf-text"
                  data-animate="active"
                >
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptate
                    accusantium doloremque laudantium, totam rem aperiam eaque
                    ipsa quae abillo inventore veritatis
                  </p>
                </div>
                <div className="kf-choose-list">
                  <ul>
                    <li
                      className=""
                      data-animate="active"
                    >
                      <div className="icon">
                        <img src={require("../assets/images/choose_icon2.png")} alt="" />
                      </div>
                      <div className="desc">
                        <h5 className="name">100% ISO Certification</h5>
                        <div className="subname">
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptate accusantium doloremque
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <a
                  href="about.html"
                  className="kf-btn"
                  data-animate="active"
                >
                  <span>explore more us</span>
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1 align-self-center">
                <div className="kf-services-items-2 row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div
                      className="kf-services-item-2"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/service_icon1.png")} alt="" />
                      </div>
                      <div className="desc">
                        <h5 className="name">Birthday Cakes</h5>
                        <div className="subname">Sed ut perspiciatis unde</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div
                      className="kf-services-item-2"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/service_icon2.png")} alt="" />
                      </div>
                      <div className="desc">
                        <h5 className="name">Fresh Foods</h5>
                        <div className="subname">Sed ut perspiciatis unde</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div
                      className="kf-services-item-2"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/service_icon3.png")} alt="" />
                      </div>
                      <div className="desc">
                        <h5 className="name">Skills Chefs</h5>
                        <div className="subname">Sed ut perspiciatis unde</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div
                      className="kf-services-item-2"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/service_icon4.png")} alt="" />
                      </div>
                      <div className="desc">
                        <h5 className="name">Organic Juice</h5>
                        <div className="subname">Sed ut perspiciatis unde</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Testimonials Carousel */}
        <section
          className="section kf-testimonials kf-testimonials-2 section-bg"
          style={{ backgroundImage: `url(${testimonials_bg2})` }}
        >
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                Customer Feedback
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                What Our Clients Say
              </h3>
            </div>
            <div className="kf-testimonials-carousel">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div
                      className="slide-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev1.jpg")} alt="" />
                      </div>
                      <div className="desc">
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="text">
                          Sed ut perspiciatis unde omnis natus error luptatem
                          accusantium doloremque laudantium totam remriam eaque
                          quae abillo
                        </div>
                        <h5 className="name">
                          Frederick S. France <em>Web Deigner</em>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="slide-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev2.jpg")} alt="" />
                      </div>
                      <div className="desc">
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="text">
                          Sed ut perspiciatis unde omnis natus error luptatem
                          accusantium doloremque laudantium totam remriam eaque
                          quae abillo
                        </div>
                        <h5 className="name">
                          James M. London <em>Lawyer</em>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="slide-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev3.jpg")} alt="" />
                      </div>
                      <div className="desc">
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="kf-text">
                          Sed ut perspiciatis unde omnis natus error luptatem
                          accusantium doloremque laudantium totam remriam eaque
                          quae abillo
                        </div>
                        <h5 className="name">
                          Olivia D. New York <em>Dentist</em>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="slide-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev1.jpg")} alt="" />
                      </div>
                      <div className="desc">
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="kf-text">
                          Sed ut perspiciatis unde omnis natus error luptatem
                          accusantium doloremque laudantium totam remriam eaque
                          quae abillo
                        </div>
                        <h5 className="name">
                          Frederick S. France <em>Web Deigner</em>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="slide-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev2.jpg")} alt="" />
                      </div>
                      <div className="desc">
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="kf-text">
                          Sed ut perspiciatis unde omnis natus error luptatem
                          accusantium doloremque laudantium totam remriam eaque
                          quae abillo
                        </div>
                        <h5 className="name">
                          James M. London <em>Lawyer</em>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="slide-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev3.jpg")} alt="" />
                      </div>
                      <div className="desc">
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="kf-text">
                          Sed ut perspiciatis unde omnis natus error luptatem
                          accusantium doloremque laudantium totam remriam eaque
                          quae abillo
                        </div>
                        <h5 className="name">
                          Olivia D. New York <em>Dentist</em>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </section>
        {/* Section Video */}
        <div className="section kf-video kf-video-full">
          <div
            className="kf-video-item kf-parallax"
            style={{ backgroundImage: `url(${video_bg})` }}
          >
            <iframe
              className="js-video-iframe"
              data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
            />
            <div className="play">
              <i className="fas fa-play" />
            </div>
          </div>
        </div>
        {/* Section Numbers-2 */}
        <section className="section kf-numbers-2 section-bg">
          <div className="container">
            <div className="kf-numbers-items-2 row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-gem" />
                  </div>
                  <div className="num">256+</div>
                  <div className="desc">
                    <h5 className="name">Premium Clients</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-user-tie" />
                  </div>
                  <div className="num">36+</div>
                  <div className="desc">
                    <h5 className="name">Professional Chefs</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-trophy" />
                  </div>
                  <div className="num">753+</div>
                  <div className="desc">
                    <h5 className="name">Winning Awards</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="lar la-grin-stars" />
                  </div>
                  <div className="num">100+</div>
                  <div className="desc">
                    <h5 className="name">5 Star Reviews</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section CTA */}
        <section
          className="section kf-cta kf-parallax"
          style={{ backgroundImage: `url(${cta_bg})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div className="kf-titles">
                  <div
                    className="kf-subtitle"
                    data-animate="active"
                  >
                    Need a Table On Coffee House
                  </div>
                  <h3
                    className="kf-title"
                    data-animate="active"
                  >
                    Booking Table For Your &amp; Family Members
                  </h3>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
                <a
                  href="reservation.html"
                  className="kf-btn"
                  data-animate="active"
                >
                  <span>booking table</span>
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section Latest Blog */}
        <section className="section kf-latest-blog section-bg">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                Get Every Single Update
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Read Some Latest Blog &amp; News
              </h3>
            </div>
            <div className="kf-blog-grid-items row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div
                  className="kf-blog-grid-item"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="blog-single.html">
                      <img src={require("../assets/images/latest_blog1.jpg")} alt="" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">
                      SWR React Hooks With Next Increm Ental Static Regeneration
                    </h5>
                    <div className="kf-date">
                      <i className="far fa-calendar-alt" />
                      25 Sep 2021
                    </div>
                    <div className="kf-comm">
                      <i className="far fa-comments" />
                      Comments (7)
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div
                  className="kf-blog-grid-item"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="blog-single.html">
                      <img src={require("../assets/images/latest_blog2.jpg")} alt="" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">
                      Decisions For Building Flexible Components DevTools
                      Browser
                    </h5>
                    <div className="kf-date">
                      <i className="far fa-calendar-alt" />
                      25 Sep 2021
                    </div>
                    <div className="kf-comm">
                      <i className="far fa-comments" />
                      Comments (7)
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div
                  className="kf-blog-grid-item"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="blog-single.html">
                      <img src={require("../assets/images/latest_blog3.jpg")} alt="" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">
                      SWR React Hooks With Next Increm Ental Static Regeneration
                    </h5>
                    <div className="kf-date">
                      <i className="far fa-calendar-alt" />
                      25 Sep 2021
                    </div>
                    <div className="kf-comm">
                      <i className="far fa-comments" />
                      Comments (7)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="align-center">
              <a
                href="blog-grid.html"
                className="kf-btn"
                data-animate="active"
              >
                <span>view all</span>
                <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </section>
        {/* Section Insta Carousel */}
        <div
          className="section kf-insta-carousel"
          data-animate="active"
        >
          <div className="container">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal1.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal2.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal3.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal4.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal5.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal6.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal1.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal2.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal3.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal4.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal5.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal6.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Brands */}
        <div className="section kf-brands">
          <div className="container">
            <div className="kf-brands-items row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand1.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand2.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand3.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand4.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand5.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand6.png")} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurant
