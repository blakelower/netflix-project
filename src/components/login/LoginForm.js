// import React, { Component } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import FBlogo from "../../images/fb-logo.png";
// import { generateMedia } from 'styled-media-query';

// const regExp = RegExp(
//     /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
//     );

// const initState = {
//   check: true,
//   email: "",
//   password: "",
//   emailError: "",
//   passwordError: ""
// };
// class LoginForm extends Component {
//   state = initState;
//   handleEmailChange = e => {
//     this.setState({
//       email: e.target.value
//     });
//   };
//   handlePasswordChange = e => {
//     this.setState({
//       password: e.target.value
//     });
//   };

  
//   //Validate
//   validate = () => {
//       let inputError = false;
//       const errors = {
//           emailError: '',
//           passwordError: ''
//       }
//       if(this.state.email){
//           inputError = true;
//           errors.emailError= "Please enter a valid email"
//       } else if (!this.state.email.match(regExp)){
//           inputError = true;
//           errors.emailError = (
//               <span style={{color: '#db7302'}}>Your email address must be valid</span>
//           )
//       }
//       if(this.state.password.length < 4){
//           inputError = true;
//           errors.passwordError = "Your Password must contain between 4 and 60 character"
//       }
//       this.setState({
//           ...errors
//       })
//       return inputError;
//   }
//   onSubmit = e => {
//       e.preventDefault()
//       const err = this.validate();
//       if(!err){
//           this.setState(initState);
//       }
//   }

//   //Checkbox
//   handlerCheckbox = e => {
//       this.setState({
//           checked: e.target.checked 
//       })
//   }
//     render() {
//     return (
//       <FormContainer>
//         <div className="form-container">
//           <form>
//             <h1>Sign In</h1>
//             <div className="input-container">
//               <input className={this.state.emailError ? 'input-error input-empty' : 'input-empty'} type="email" 
//               onChange={this.handleEmailChange}
//               value={this.state.email}
//               required />
//               <label>Email or Phone Number</label>
//               <span>{this.state.emailError  }</span>
//             </div>
//             <div className="input-container">
//               <input className={this.state.passwordError ? 'input-error input-empty' : 'input-empty'} type="password" 
//               onChange={this.handlePasswordChange}
//               value={this.state.password}
//               required />
//               <label>Password</label>
//               <span style={{color: '#db7302'}}>{this.state.passwordError}</span>
//             </div>
//             <div className="input-container">
//               <Button type="submit" onClick={e => this.onSubmit(e)}>Sign In</Button>
//             </div>
//             <label className="checkbox-container">
//               Remember Me
//               <input type="checkbox" defaultChecked={this.state.checked} onClick={this.handleCheckboc}/>
//               <span className="checkmark"></span>
//             </label>
//             <Link to="/" className="need-help">
//               Need Help?
//             </Link>
//             <div className="bottom-form">
//               <img src={FBlogo} alt="facebook" />
//               <Link to="/" className="login-fb-text">
//                 Login with Facebook
//               </Link>
//               <br />
//               <br />
//               <span style={{ color: "#999" }}>New to Netflix?</span>
//               <Link to="/" className="sign-up-text">
//                 Sign Up Now
//               </Link>
//             </div>
//           </form>
//         </div>
//       </FormContainer>
//     );
//   }
// }



// export default LoginForm;

// // Media
// const customMedia = generateMedia({
//     tablet: '640px'
//   });
  
//   //Form Container
//   const FormContainer = styled.div`
//     display: grid;
//     justify-content: center;
//     position: relative;
//     z-index: 5;
//     ${customMedia.lessThan('tablet')`
//       border-bottom: 0.9px solid #999;
//   `}
//     .form-container {
//       background: rgba(0, 0, 0, 0.8);
//       position: relative;
//       width: 28.125rem;
//       height: 41.25rem;
//       padding: 4rem;
//       ${customMedia.lessThan('tablet')`
//         padding: 0.6rem;
//         height:35rem;
//       `}
//     }
//     h1 {
//       color: #fff;
//       margin: 0 0.8rem;
//     }
//     .input-container {
//       display: grid;
//       grid-template-columns: 1fr;
//       margin-top: 1.2rem;
//     }
//     .checkbox-container {
//       margin-left: 0.75rem;
//       padding-left: 1.875rem;
//       color: #8a8a8a;
//       position: relative;
//       font-size: 0.9rem;
//       cursor: pointer;
//     }
//     .checkbox-container input {
//       display: none;
//     }
//     .checkbox-container .checkmark {
//       display: inline-block;
//       background: #454545;
//       width: 1.1rem;
//       height: 1.1rem;
//       left: 0;
//       top: 0;
//       border-radius: 0.1rem;
//       position: absolute;
//     }
//     .checkbox-container input:checked + .checkmark:after {
//       content: '';
//       position: absolute;
//       height: 0.25rem;
//       width: 0.625rem;
//       border-left: 2px solid #000;
//       border-bottom: 2px solid #000;
//       top: 25%;
//       left: 21%;
//       transform: rotate(-45deg);
//     }
//     .need-help {
//       text-decoration: none;
//       color: #828282;
//       margin-left: 6.6rem;
//       font-size: 0.9rem;
//       &:hover {
//         text-decoration: underline;
//       }
//       ${customMedia.lessThan('tablet')`
//         margin-left: 13rem;
//       `}
//     }
//     .input-empty {
//       color: #fff;
//       background: #333333;
//       border: 0;
//       border-radius: 0.25rem;
//       height: 3rem;
//       padding: 0.9rem 1.25rem 0;
//     }
//     .input-error {
//       border-bottom: 1px solid #db7302;
//     }
//     input:focus {
//       outline: none;
//     }
//     input:focus ~ label {
//       top: 0.4375rem;
//       font-size: 0.7rem;
//     }
//     .input-error-message {
//       color: orange;
//       font-size: 0.9rem;
//     }
//     form div {
//       position: relative;
//     }
//     form div label {
//       position: absolute;
//       top: 0.625rem;
//       left: 1.25rem;
//       pointer-events: none;
//       color: #8a8a8a;
//       font-size: 1rem;
//       transition: transform 150ms ease-out, font-size 150ms ease-out;
//     }
//     .bottom-form img {
//       width: 1.5625rem;
//       margin: 0.625rem 0.625rem -0.4375rem 0;
//     }
//     .sign-up-text {
//       font-size: 1.1rem;
//       color: #fff;
//       &:hover {
//         text-decoration: underline;
//       }
//     }
//     .login-fb-text {
//       color: #828282;
//       font-size: 0.9rem;
//     }
//     .bottom-form span {
//       color: #8a8a8a;
//       font-size: 1.1rem;
//     }
//     .bottom-form {
//       position: absolute;
//       bottom: 0;
//       margin-bottom: 4rem;
//     }
//   `;
  
//   // Button
//   const Button = styled.button`
//     color: #fff;
//     background: rgba(229, 9, 20);
//     border: none;
//     outline: none;
//     padding: 0.8rem 1.3rem;
//     border-radius: 0.125rem;
//     font-size: 1rem;
//     text-align: center;
//     box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
//     transition: opacity 0.2s ease-in;
//     cursor: pointer;
//     text-decoration: none;
//     margin: 1rem 0;
//     &:hover {
//       opacity: 0.9;
//     }
//   `;


import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FBlogo from "../../images/fb-logo.png";
import history from '../login/history';
import movies from '../movies';
import { generateMedia } from 'styled-media-query';

const regExp = RegExp(
    /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
    );

const initState = {
  check: true,
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
};
class LoginForm extends Component {
  state = initState;
  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  }; 
  
  //Validate
  validate = () => {
      let inputError = false;
      const errors = {
          emailError: '',
          passwordError: ''
      }
      if(this.state.email){
          inputError = true;
          errors.emailError= "Please enter a valid email"
      } else if (!this.state.email.match(regExp)){
          inputError = true;
          errors.emailError = (
              <span style={{color: '#db7302'}}>Your email address must be valid</span>
          )
      }
      if(this.state.password.length < 4){
          inputError = true;
          errors.passwordError = "Your Password must contain between 4 and 60 character"
      }
      this.setState({
          ...errors
      })
      return inputError;
  }
  onSubmit = e => {
      e.preventDefault()
      const err = this.validate();
      if(!err){
          this.setState(initState);
      }
  }

  //Checkbox
  handlerCheckbox = e => {
      this.setState({
          checked: e.target.checked 
      })
  }


    render() {
    return (
      <FormContainer>
        <div className="form-container">
          <form>
            <h1>Sign In</h1>
            <div className="input-container">
              <input className={this.state.emailError ? 'input-error input-empty' : 'input-empty'} type="email" 
              onChange={this.handleEmailChange}
              value={this.state.email}
              required />
              <label>Email or Phone Number</label>
              <span>{this.state.emailError  }</span>
            </div>
            <div className="input-container">
              <input className={this.state.passwordError ? 'input-error input-empty' : 'input-empty'} type="password" 
              onChange={this.handlePasswordChange}
              value={this.state.password}
              required />
              <label>Password</label>
              <span style={{color: '#db7302'}}>{this.state.passwordError}</span>
            </div>
            <div className="input-container">
              <Button type="submit" onClick={() => history.push('/movies')}>Sign In</Button>
            </div>
            <label className="checkbox-container">
              Remember Me
              <input type="checkbox" defaultChecked={this.state.checked} onClick={this.handleCheckboc}/>
              <span className="checkmark"></span>
            </label>
            <Link to="/" className="need-help">
              Need Help?
            </Link>
            <div className="bottom-form">
              <img src={FBlogo} alt="facebook" />
              <Link to="/" className="login-fb-text">
                Login with Facebook
              </Link>
              <br />
              <br />
              <span style={{ color: "#999" }}>New to Netflix?</span>
              <Link to="/register" className="sign-up-text">
                Sign Up Now
              </Link>
            </div>
          </form>
        </div>
      </FormContainer>
    );
  }
}

export default LoginForm;

// Media
const customMedia = generateMedia({
    tablet: '640px'
  });
  
  //Form Container
  const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;
    ${customMedia.lessThan('tablet')`
      border-bottom: 0.9px solid #999;
  `}
    .form-container {
      background: rgba(0, 0, 0, 0.8);
      position: relative;
      width: 28.125rem;
      height: 41.25rem;
      padding: 4rem;
      ${customMedia.lessThan('tablet')`
        padding: 0.6rem;
        height:35rem;
      `}
    }
    h1 {
      color: #fff;
      margin: 0 0.8rem;
    }
    .input-container {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 1.2rem;
    }
    .checkbox-container {
      margin-left: 0.75rem;
      padding-left: 1.875rem;
      color: #8a8a8a;
      position: relative;
      font-size: 0.9rem;
      cursor: pointer;
    }
    .checkbox-container input {
      display: none;
    }
    .checkbox-container .checkmark {
      display: inline-block;
      background: #454545;
      width: 1.1rem;
      height: 1.1rem;
      left: 0;
      top: 0;
      border-radius: 0.1rem;
      position: absolute;
    }
    .checkbox-container input:checked + .checkmark:after {
      content: '';
      position: absolute;
      height: 0.25rem;
      width: 0.625rem;
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      top: 25%;
      left: 21%;
      transform: rotate(-45deg);
    }
    .need-help {
      text-decoration: none;
      color: #828282;
      margin-left: 6.6rem;
      font-size: 0.9rem;
      &:hover {
        text-decoration: underline;
      }
      ${customMedia.lessThan('tablet')`
        margin-left: 13rem;
      `}
    }
    .input-empty {
      color: #fff;
      background: #333333;
      border: 0;
      border-radius: 0.25rem;
      height: 3rem;
      padding: 0.9rem 1.25rem 0;
    }
    .input-error {
      border-bottom: 1px solid #db7302;
    }
    input:focus {
      outline: none;
    }
    input:focus ~ label {
      top: 0.4375rem;
      font-size: 0.7rem;
    }
    .input-error-message {
      color: orange;
      font-size: 0.9rem;
    }
    form div {
      position: relative;
    }
    form div label {
      position: absolute;
      top: 0.625rem;
      left: 1.25rem;
      pointer-events: none;
      color: #8a8a8a;
      font-size: 1rem;
      transition: transform 150ms ease-out, font-size 150ms ease-out;
    }
    .bottom-form img {
      width: 1.5625rem;
      margin: 0.625rem 0.625rem -0.4375rem 0;
    }
    .sign-up-text {
      font-size: 1.1rem;
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }
    .login-fb-text {
      color: #828282;
      font-size: 0.9rem;
    }
    .bottom-form span {
      color: #8a8a8a;
      font-size: 1.1rem;
    }
    .bottom-form {
      position: absolute;
      bottom: 0;
      margin-bottom: 4rem;
    }
  `;
  
  // Button
  const Button = styled.button`
    color: #fff;
    background: rgba(229, 9, 20);
    border: none;
    outline: none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transition: opacity 0.2s ease-in;
    cursor: pointer;
    text-decoration: none;
    margin: 1rem 0;
    &:hover {
      opacity: 0.9;
    }
  `;
