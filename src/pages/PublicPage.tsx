import React from 'react';

interface MyProps {
    readonly id: number,
    name: string,
    password?: string,
    who: string,
    object: { a: string, b: string }
}

// const user: UserInterface = {
//     id: 1,
//     name: 'reimi'
// }
// const PublicPage: React.FC<MyProps> = ({name}: MyProps) => {
// const PublicPage = (props: { who: string }) => {
const PublicPage = (props: MyProps) => {
    return <p>Hello, { props.who } from Public Page.</p>; 
}
export default PublicPage;