import React from 'react'
import "./Job.css"

function Job() {
  return (
    <div>
   <header className="hero-section">
      <nav className="nav-bar">
        <h2 className="logo">JJO</h2>
        <div className="nav-items">
          <a href="#">Discounts</a>
          <a href="#">About us</a>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
          <button>Login</button>
        </div>
      </nav>
      <div className="hero-text-section">
        <h1>Juniors Make IT Work</h1>
        <p>Hire and Invest in highly skilled juniors now!</p>
        <button>Post Offer Now</button>
      </div>
    </header>
    <div className="job-offers">
      <h1>Newest Job Offers </h1>
      <a href="#">View all job offers</a>
    </div>
    <section className="jobs-section">
      <div className="job">
        <div className="job-title">
          <h2>Reactjs Developer</h2>
          <p>1 hours ago</p>
        </div>
        <div className="job-location">
          <h4>PickSaaS</h4>
          <p>London,UK</p>
        </div>
        <div className="job-description">
          <p
            >I am looking for a Java Developer.<br />
            Project for public sector location.NewYork<br />
            (during the pandemic remote work)<br />
            $ upto PLN 550 net / MD B2B</p
          >
        </div>
      </div>
      <div className="job">
        <div className="job-title">
          <h2>Junior Java Developer</h2>
          <p>2 hours ago</p>
        </div>
        <div className="job-location">
          <h4>PickSaaS</h4>
          <p>NewYork,USA</p>
        </div>
        <div className="job-description">
          <p
            >I am looking for a Java Developer.<br />
            Project for public sector location.NewYork<br />
            (during the pandemic remote work)<br />
            $ upto PLN 550 net / MD B2B</p
          >
        </div>
      </div>
      <div className="job">
        <div className="job-title">
          <h2>Javascript Developer</h2>
          <p>5 hours ago</p>
        </div>
        <div className="job-location">
          <h4>PickSaaS</h4>
          <p>NewYork,USA</p>
        </div>
        <div className="job-description">
          <p
            >I am looking for a Java Developer.<br />
            Project for public sector location.NewYork<br />
            (during the pandemic remote work)<br />
            $ upto PLN 550 net / MD B2B</p
          >
        </div>
      </div>
    </section>
    <section className="feature-companies">
      <h1>Featured Companies</h1>
      <div className="companies-container">
        <div className="company">
          <div className="icon-container">
            <img src="icon-briefcase.png" alt="" />
          </div>
          <h2>GrandParade</h2>
        </div>
        <div className="company">
          <div className="icon-container">
            <img src="icon-briefcase.png" alt="" />
          </div>
          <h2>GrandParade</h2>
        </div>
        <div className="company">
          <div className="icon-container">
            <img src="icon-briefcase.png" alt="" />
          </div>
          <h2>GrandParade</h2>
        </div>
        <div className="company">
          <div className="icon-container">
            <img src="icon-briefcase.png" alt="" />
          </div>
          <h2>GrandParade</h2>
        </div>
        <div className="company">
          <div className="icon-container">
            <img src="icon-briefcase.png" alt="" />
          </div>
          <h2>GrandParade</h2>
        </div>
        <div className="company">
          <div className="icon-container">
            <img src="icon-briefcase.png" alt="" />
          </div>
          <h2>GrandParade</h2>
        </div>
        <div className="company">
          <div className="icon-container">
            <img src="icon-briefcase.png" alt="" />
          </div>
          <h2>GrandParade</h2>
        </div>
        <div className="company">
          <div className="icon-container">
            <img src="icon-briefcase.png" alt="" />
          </div>
          <h2>GrandParade</h2>
        </div>
        <div className="company">
          <div className="icon-container">
            <img src="icon-briefcase.png" alt="" />
          </div>
          <h2>GrandParade</h2>
        </div>
      </div>
    </section>
    <section className="clt-section">
      <div className="clt-text-section">
        <h1>Recieve New Job Offers.</h1>
        <p
          >Want to know as soon as a new job offer is posted on our<br />
          website?Subscribe to our weekly job offer digest.</p
        >
        <div className="email-container">
          <input type="email" placeholder="Enter email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
    <footer className="footer-container">
      <a href="#">Job offers</a>
      <a href="#">Companies</a>
      <a href="#">Discounts</a>
      <a href="#">About us</a>
      <a href="#">Juniors</a>
      <a href="#">FAQ</a>
      <a href="#">Blog</a>
      <a href="#">Terms</a>
      <a href="#">Privacy Policy</a>
    </footer>
    </div>
  )
}

export default Job
