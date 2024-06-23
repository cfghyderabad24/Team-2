import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AuthContext } from './AuthContext';

const Home = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  // Sample images for the slideshow
  const images = [
    "https://static01.nyt.com/images/2019/06/13/books/00Russo-ShortStories-Easy-Readers/00Russo-ShortStories-Easy-Readers-videoSixteenByNineJumbo1600.jpg",
    "https://img.huffingtonpost.com/asset/5d03788e250000a013e889df.jpeg?ops=1200_630",
    "https://images.careerindia.com/img/2021/09/86176or3qb0ns-15995389161-1631083087.jpg"
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">RTR</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link to="/books" className="nav-link">Books</Link>
              </li>
              <li className="nav-item">
                <Link to="/stud" className="nav-link">Students</Link>
              </li>
              <li className="nav-item">
                <Link to="/checkin" className="nav-link">CheckIn</Link>
              </li>
              <li className="nav-item">
                <Link to="/checkout" className="nav-link">CheckOut</Link>
              </li>
            </>
          )}
        </ul>
        <div className="navbar-login">
          {isLoggedIn ? (
            <button className="logout-button" onClick={logout}>Logout</button>
          ) : (
            <Link to="/login" className="login-button">Login</Link>
          )}
        </div>
      </nav>

      <div className="content">
        <h1>Welcome to Room To Read</h1>
       
        <Slider {...settings} className="slideshow">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
