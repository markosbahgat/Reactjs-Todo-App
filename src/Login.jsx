import React from 'react';



class LoginForm extends React.Component {
    render() { 
        return <div className="text-white">
            {this.props.users.map(user => {
                return (<ul key={user.firstvalue}>
                    <li>{user.firstvalue}</li>
                </ul>);
            })}
        </div>;
    }
}
 
export default LoginForm;