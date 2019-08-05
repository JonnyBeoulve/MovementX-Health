import React from 'react'

/* This is a contact component that can be used to display contact information on any page. */
const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
            <p>
              1234 Somewhere Road #5432
              <br />
              Portland, OR 97035
              <br />
              United States of America
            </p>
          </div>
        </section>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <p>info@movement-x.com</p>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
