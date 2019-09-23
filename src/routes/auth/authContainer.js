import React, {useState} from 'react';
import useInput from "../../hooks/useInput.js";
import {useMutation} from "react-apollo-hooks";
import AuthPresenter from "./authPresenter.js";
import {CREATE_ACCOUNT, LOG_IN, CONFIRM_SECRET, LOCAL_LOG_IN} from "./authQuery.js";
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

    const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
        variables: {
            email: email.value,
            secret: secret.value
        }
    });
    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

    const onSubmit = async e => {
        e.preventDefault();
        if (action === "logIn") {
            if (email.value !== "") {
                try {
                    const {data: {requestSecret}} = await requestSecretMutation();
                    if (!requestSecret) {
                        toast.error("You dont have an account yet, create one");
                        setTimeout(() => setAction("signUp"), 2000);
                    } else {
                        toast.success("Check your inbox for your login secret");
                        setAction("confirm");
                    }
                } catch (e) {
                    toast.error(e.message);
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
                        setTimeout(() => setAction("logIn"), 2000);
                    }
                } catch (e) {
                    toast.error(e.message);
                }
            } else {
                toast.error("All field are required");
            }
        } else if (action === "confirm") {
            if (secret.value !== "") {
                try {
                    const {data: {confirmSecret: token}} = await confirmSecretMutation();
                    if (token !== "" && token !== undefined) {
                        await localLogInMutation({variables: {token}});
                    }
                } catch {
                    toast.error("Can't confirm secret, check again");
                }
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