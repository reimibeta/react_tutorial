// import React, { Component } from "react";
// import { reduxForm, Field } from "redux-form";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import * as actions from '../actions/index.action';

// class PublicPage extends Component {

//     onSubmit = (formProps: any) => {
//         // console.log(this.props);
//         // const navigate = useNavigate();
//         // this.props.navigate('/feature');
//         // const { history } = this.props;
//         this.props.signup(formProps, () => {
            
//         });
//     }

//     render() {
//         const { handleSubmit } = this.props;
//         return (
//             <form onSubmit={handleSubmit(this.onSubmit)}>
//                 <fieldset>
//                     <label>Username</label>
//                     <Field 
//                         name="username"
//                         type="text"
//                         component="input"
//                         autoComplete="none"
//                     />
//                 </fieldset>
//                 {/* <div>
//                     {this.props.errorMessage}
//                 </div> */}
//                 <button>Sign Up!</button>
//             </form>
//         );
//     }
// }

// function mapStateToProps(state: any){
//     // console.log("STATE", state.auth);
//     return { errorMessage: state.auth.errorMessage };
// }

// // export default PublicPage;
// export default compose(
//     connect(mapStateToProps, actions), //state
//     reduxForm({ form: 'signup' })
// )(PublicPage);