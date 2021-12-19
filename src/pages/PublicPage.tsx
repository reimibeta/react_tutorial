import React from 'react';

// function Test(name: string):string {
//     return "name";
// }

interface MyProps {
    readonly id: number,
    name: string,
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
    return <p>Hello, { props.name } from Public Page.</p>; 
}
export default PublicPage;