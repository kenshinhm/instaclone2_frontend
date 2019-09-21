import React, {useState} from 'react';
import useInput from "../../hooks/useInput.js";
import {useMutation} from "react-apollo-hooks";
import AuthPresenter from "./authPresenter.js";
import {CREATE_ACCOUNT, LOG_IN} from "./authQueries.js";
import {toast} from "react-toastify";

const Auth = () => {
    const [action, setAction] = useState("logIn");
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const requestSecret = useMutation(LOG_IN, {
        update: (_, {data}) => {
            const {requestSecret} = data;
            if (!requestSecret) {
                toast.error("You do not have an account yet, create one");
                setTimeout(() => setAction("signUp"), 3000);
            }
        },
        variables: {email: email.value}
    });

    const createAccount = useMutation(CREATE_ACCOUNT, {
        variables: {
            email: email.value,
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    });

    const onSubmit = e => {
        e.preventDefault();
        if (action === "logIn") {
            if (email.value !== "") {
                requestSecret();
            } else {
                toast.error("Email is required");
            }
        } else if (action === "signUp") {
            if (email.value !== "" &&
                username.value !== "" &&
                firstName.value !== "" &&
                lastName.value !== "") {
                createAccount();
            } else {
                toast.error("All field are required");
            }
        }
    };

    return (
        <AuthPresenter setAction={setAction}
                       action={action}
                       username={username}
                       firstName={firstName}
                       lastName={lastName}
                       email={email}
                       onSubmit={onSubmit}/>
    );
};

export default Auth;