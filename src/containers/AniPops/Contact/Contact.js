import React, {Component} from 'react'
import classes from './Contact.module.css'

class Contact extends Component{

    submitHandler = () => {
        let name = document.forms["form"]["firstname"].value;
        if (name === "") {
          alert("Name must be filled out");
          return false;
        }
        let lastname = document.forms["form"]["lastname"].value;
        if (lastname === "") {
          alert("Last Name must be filled out");
          return false;
        }
        let email = document.forms["form"]["email"].value;
        if (email === "") {
          alert("Email must be filled out");
          return false;
        }
        let phone = document.forms["form"]["phone"].value;
        if (phone ==="") {
          alert("Phone must be filled out");
          return false;
        }
      }
    render(){


        return (

            <div className= {classes.FormContainer}>
          <form name="form" onSubmit = {this.submitHandler}>
            <div id="contact-heading">
              <h1>Contact Us</h1>
              <h2>What would you like to see showcased next?</h2>
            </div>
            <div id="contact-box">
              <div></div>
              <div className={classes.Contact}>
                <label>
                  First Name <br />
                  <input type="text" name="firstname" placeholder="First Name" />
                </label>
              </div>
              <div className= {classes.Contact}>
                <label>
                  Last Name <br />
                  <input type="text" name="lastname" placeholder="Last Name" />
                </label>
              </div>
              <div className={classes.Contact}>
                <label>
                  Email <br />
                  <input type="email" name="email" placeholder="Email" />
                </label>
              </div>
              <div className={classes.Contact}>
                <label>
                  Phone Number <br />
                  <input type="text" name="phone" placeholder="Phone Number" />
                </label>
              </div>
              <div className={classes.Contact}>
                <label
                >Comments <br />
                  <textarea placeholder="Comments..."></textarea>
                </label>
              </div>
              <div>
                <input type="submit" />
              </div>
            </div>
          </form>
        </div>
        );
    }
}

export default Contact;