import React, { Component, useState } from 'react';
import './request_quote_sidebar.scss'

function RequestQuote(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [course_interested, setCourseInterested] = useState('')
  const [is_sent, setIsSent] = useState(false)


  const handle_submit = e => {
    e.preventDefault()
    fetch('http://127.0.0.1:8000/customers/customer-requested-quote/',{
      method : 'POST',
      body : JSON.stringify({name, email, phone_number, course_interested}), 
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    }).then(() => setIsSent(true))
  }
  
  return (
    <div>
      <div class="request-quote-title">
        <h5>Request course details</h5>
        <h6>Help us reach you ...</h6>
      </div>
      <div class="myform form ">
        <form onSubmit={handle_submit} method="post" name="login">
            <div class="form-group">
              <input type="text" name="name"  class="form-control my-input" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            </div>
            <div class="form-group">
              <input type="email" name="email"  class="form-control my-input" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div class="form-group">
              <input type="number" min="0" name="phone_number" id="phone"  class="form-control my-input" value={phone_number} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone" />
            </div>
            <div class="form-group">
              <input type="number" min="0" name="course_interested" id="phone"  class="form-control my-input" value={course_interested} onChange={e => setCourseInterested(e.target.value)} placeholder="Interested Course" />
          </div>
            <div class="text-center ">
              <button type="submit" class=" btn btn-block send-button tx-tfm">Request Quote</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default RequestQuote;