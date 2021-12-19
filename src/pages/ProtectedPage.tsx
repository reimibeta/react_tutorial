import { FunctionComponent } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/index.action';

interface MyProps {
    who: string, 
    user: any,
    setUser: any
}

const ProtectedPage: React.FC<MyProps>  = ({user, who}) => {
    // const { auth } = state;
    // console.log("Props", props);
    // props.setUser("real");
    return <h1>Protected Page {user} from {who}</h1>
}

function mapStateToProps(state: any){
    console.log("STATE", state);
    return { 
        errorMessage: state.auth.errorMessage,
        user: state.auth.authenticated
    };
}


export default connect(mapStateToProps, actions)(ProtectedPage);