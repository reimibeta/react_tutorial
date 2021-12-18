import { FunctionComponent } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/index.action';

const ProtectedPage  = (props: { 
    who: string, 
    user: any,
    setUser: any
}) => {
    // const { auth } = state;
    console.log("Props", props);
    // props.setUser("real");
    return <h1>Protected Page {props.user} from {props.who}</h1>
}

function mapStateToProps(state: any){
    console.log("STATE", state);
    return { 
        errorMessage: state.auth.errorMessage,
        user: state.auth.authenticated
    };
}


export default connect(mapStateToProps, actions)(ProtectedPage);