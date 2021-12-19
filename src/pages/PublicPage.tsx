import React from 'react';

interface UserInterface {
    readonly id: number,
    name: string,
    password?: string
}

// const user: UserInterface = {
//     id: 1,
//     name: 'reimi'
// }
// const PublicPage: React.FC<UserInterface> = ({name}: UserInterface) => {
const PublicPage = (props: { who: string }) => {
    return <p>Hello, { props.who } from Public Page.</p>; 
}
export default PublicPage;