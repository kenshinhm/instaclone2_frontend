import React, {useState} from 'react';
import useInput from "../../hooks/useInput.js";
import {useMutation} from "react-apollo-hooks";
import AuthPresenter from "./authPresenter.js";
import {LOG_IN} from "./authQueries.js";

const Auth = () => {
    const [action, setAction] = useState("logIn");
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const requestSecret = useMutation(LOG_IN, {
        variables: {email: email.value}
    });

    const onLogin = e => {
        e.preventDefault();
        if (email.value !== "") {
            requestSecret(email.value);
        }
    };

    return (
        <AuthPresenter setAction={setAction}
                       action={action}
                       username={username}
                       firstName={firstName}
                       lastName={lastName}
                       email={email}
                       onLogin={onLogin}/>
    );
};

export default Auth;