import React from 'react';

function MatchCard() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="title">INBOX</h1>
        </div>
        <div className="block"></div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-256x256">
                <img
                  className="is-rounded"
                  src="https://bulma.io/assets/images/placeholders/256x256.png"
                  alt="User avatar"
                  
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p style={{ fontSize: '1.3em' }}>
                  <strong>Joe Mama</strong> <small></small>
                  <br />
                  Bachelor of Computer Science (Year 1)
                </p>
                <p>
                  <strong>Units:</strong>
                  <br />
                  FIT1047 &nbsp;&nbsp;&nbsp;&nbsp; FIT1053
                  <br />
                  FIT1057 &nbsp;&nbsp;&nbsp;&nbsp; FIT1058
                  <br />
                  <br />
                  <strong>Availability:</strong>
                  <br />
                  Monday: 2:00pm - 4:00pm
                  <br />
                  Tuesday: 11:00am - 12:00pm, 2:00pm - 3:00pm
                  <br />
                  Friday: 12:00pm - 2:00pm
                </p>
              </div>
            </div>
          </article>
          <p style={{ fontSize: '1.1em' }}>
            <strong>Bio:</strong> My name's Joe and I like to take long walks on the beach and I am a wanker
          </p>
        </div>
      </section>
    </div>
  );
}

export default MatchCard;
