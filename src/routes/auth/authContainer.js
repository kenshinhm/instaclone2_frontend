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
    const secret = useInput("");

    const [requestSecretMutation] = useMutation(LOG_IN, {
        variables: {email: email.value}
    });

    const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
        variables: {
            email: email.value,
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    });

    const onSubmit = async e => {
        e.preventDefault();
        if (action === "logIn") {
            if (email.value !== "") {
                try {
                    const {data: {requestSecret}} = await requestSecretMutation();
                    if (!requestSecret) {
                        toast.error("You dont have an account yet, create one");
                        setTimeout(() => setAction("signUp"), 3000);
                    } else {
                        toast.success("Check your inbox for your login secret");
                        setAction("confirm");
                    }
                } catch (e) {
                    console.log(e);
                    toast.error("Can't request secret, try again");
                }
            } else {
                toast.error("Email is required");
            }
        } else if (action === "signUp") {
            if (email.value !== "" &&
                username.value !== "" &&
                firstName.value !== "" &&
                lastName.value !== "") {
                try {
                    const {data: {createAccount}} = await createAccountMutation();
                    if (!createAccount) {
                        toast.error("Can't create account");
                    } else {
                        toast.success("Account created! Log In now");
                        setTimeout(() => setAction("logIn"), 3000);
                    }
                } catch (e) {
                    toast.error(e.message);
                }
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
                       secret={secret}
                       onSubmit={onSubmit}/>
    );
};

export default Auth;