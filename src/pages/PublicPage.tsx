import React from 'react';
import { connect } from 'react-redux';

// function Test(name: string):string {
//     return "name";
// }

interface MyProps {
    readonly id: number,
    user: string, // from redux
    password?: string,
    object?: { a: string, b: string },
    // test: Test
}

// const user: UserInterface = {
//     id: 1,
//     name: 'reimi'
// }
// const PublicPage: React.FC<MyProps> = ({name}: MyProps) => {
// const PublicPage = (props: { who: string }) => {
const PublicPage = (props: MyProps) => {
    return <p>Hello, { props.user } from Public Page.</p>; 
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.authenticated
    }
}
export default connect(mapStateToProps)(PublicPage);