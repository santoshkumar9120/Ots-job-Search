import React from 'react'
import "./Event.css"
function Event() {
  return (
    <div>
     <div className="container">
        <div className="item-container">
            <div className="img-container">
                <img src="img1.jpg" alt="Event image"/>
            </div>

            <div className="body-container">
                <div className="overlay"></div>

                <div className="event-info">
                    <p className="title">Bubbe's Book Club</p>
                    <div className="separator"></div>
                    <p className="info">Bellmore, NY</p>
                    <p className="price">Free</p>

                    <div className="additional-info">
                        <p className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            Grand Central Terminal
                        </p>
                        <p className="info">
                            <i className="far fa-calendar-alt"></i>
                            Sat, Sep 19, 10:00 AM EDT
                        </p>

                        <p className="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening <span>more...</span>
                        </p>
                    </div>
                </div>
                <button className="action">Book it</button>
            </div>
        </div>

        <div className="item-container">
            <div className="img-container">
                <img src="img2.jpg" alt="Event image"/>
            </div>

            <div className="body-container">
                <div className="overlay"></div>

                <div className="event-info">
                    <p className="title">The Overstory</p>
                    <div className="separator"></div>
                    <p className="info">New York, NY</p>
                    <p className="price">29$</p>

                    <div className="additional-info">
                        <p className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            245 W 52nd St, New York
                        </p>
                        <p className="info">
                            <i className="far fa-calendar-alt"></i>
                            Sat, Sep 19, 10:00 AM EDT
                        </p>

                        <p className="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening <span>more...</span>
                        </p>
                    </div>
                </div>
                <button className="action">Book it</button>
            </div>
        </div>

        <div className="item-container">
            <div className="img-container">
                <img src="img3.jpg" alt="Event image"/>
            </div>

            <div className="body-container">
                <div className="overlay"></div>

                <div className="event-info">
                    <p className="title">The NY Festival</p>
                    <div className="separator"></div>
                    <p className="info">New York, NY</p>
                    <p className="price">70$</p>

                    <div className="additional-info">
                        <p className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            245 W 52nd St, New York
                        </p>
                        <p className="info">
                            <i className="far fa-calendar-alt"></i>
                            Sat, Sep 19, 10:00 AM EDT
                        </p>

                        <p className="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening <span>more...</span>
                        </p>
                    </div>
                </div>
                <button className="action">Book it</button>
            </div>
        </div>

        <div className="item-container">
            <div className="img-container">
                <img src="img4.jpg" alt="Event image"/>
            </div>

            <div className="body-container">
                <div className="overlay"></div>

                <div className="event-info">
                    <p className="title">Tech Bubble Conf</p>
                    <div className="separator"></div>
                    <p className="info">New York, NY</p>
                    <p className="price">35$</p>

                    <div className="additional-info">
                        <p className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            245 W 52nd St, New York
                        </p>
                        <p className="info">
                            <i className="far fa-calendar-alt"></i>
                            Sat, Sep 19, 10:00 AM EDT
                        </p>

                        <p className="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and we would love you
                            to share yours with us! We meet one Sunday evening <span>more...</span>
                        </p>
                    </div>
                </div>
                <button className="action">Book it</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Event
