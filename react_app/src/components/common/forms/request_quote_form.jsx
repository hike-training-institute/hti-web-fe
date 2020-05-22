import React, { Component, useState } from 'react';
import axios from 'axios'

// class RequestHeaderForm extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       name : '',
//       email: '',
//       phone_number: '',
//       course_interested: ''
//     }
//   }

//   changeHandler = (e) =>{
//     this.setState({[e.target.name] : e.target.value})
//   }

//   submitHandler = (e) => {
//     e.preventDefault()
//     console.log(this.state)
//     axios.post('http://127.0.0.1:8000/customers/customer-requested-quote/', this.state)
//       .then(response => {console.log(response)})
//       .catch(error => {console.log(error)})
//   } 

//   render() {
//     const {name, email, phone_number, course_interested} = this.state
//     return (
//       <div class="container">
//        <div class="col-md-6 mx-auto text-center">
//          <div class="header-title">
//              <h3 class="wv-heading--title">
//                Request your course details
//              </h3>
//              <h5 class="wv-heading--subtitle">
//                Help us reach you ...
//              </h5>
//          </div>
//        </div>
//        <div class="row">
//          <div class="col-md-4 mx-auto">
//              <div class="myform form ">
//                <form onSubmit={this.submitHandler} method="post" name="login">
//                    <div class="form-group">
//                      <input type="text" name="name"  class="form-control my-input" id="name" value={name} placeholder="Name" onChange={this.changeHandler} />
//                    </div>
//                    <div class="form-group">
//                      <input type="email" name="email"  class="form-control my-input" id="email" value={email} placeholder="Email" onChange={this.changeHandler} />
//                    </div>
//                    <div class="form-group">
//                      <input type="number" min="0" name="phone_number" id="phone"  class="form-control my-input" value={phone_number} placeholder="Phone" onChange={this.changeHandler} />
//                    </div>
//                    <div class="form-group">
//                      <input type="number" min="0" name="course_interested" id="phone"  class="form-control my-input" value={course_interested} placeholder="Interested Course" onChange={this.changeHandler} />
//                  </div>
//                    <div class="text-center ">
//                      <button type="submit" class=" btn btn-block send-button tx-tfm">Request Quote</button>
//                    </div>
//                </form>
//              </div>
//          </div>
//        </div>
//      </div>
//     );
//   }
// }

// export default RequestHeaderForm;

function RequestHeaderForm(props) {

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

  const form = <div class="container">
      <div class="col-md-6 mx-auto text-center">
        <div class="header-title">
            <h3 class="wv-heading--title">
              Request your course details
            </h3>
            <h5 class="wv-heading--subtitle">
              Help us reach you ...
            </h5>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mx-auto">
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
      </div>
    </div>

    const thankYouMessage = <p>Thank you for your input!</p>

  return is_sent ? thankYouMessage: form ;
}

export default RequestHeaderForm;