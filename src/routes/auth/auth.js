import React, {useState} from 'react';
import {Link, StateChanger, Container, Form,} from "./authStyle.js";
import Input from "../../component/input/input.js";
import Button from "../../component/button/button.js";

const LoginForm = () => (
    <form>
        <Input placeholder={"Username"}/>
        <Input placeholder={"Password"}/>
        <Button text={"Log in"}/>
    </form>
);

const SignupForm = () => (
    <form>
        <Input placeholder={"First name"}/>
        <Input placeholder={"Last name"}/>
        <Input placeholder={"Email"}/>
        <Input placeholder={"Username"}/>
        <Input placeholder={"Password"}/>
        <Button text={"Sign up"}/>
    </form>
);

const Auth = () => {
    const [action, setAction] = useState("logIn");

    return (
        <Container>
            <Form>
                {action === "logIn" ? <LoginForm/> : <SignupForm/>}
            </Form>
            <StateChanger>
                {action === "logIn" ?
                    <>
                        Don't have an account?{" "}
                        <Link onClick={() => setAction("signUp")}>
                            Sign up
                        </Link>
                    </>
                    :
                    <>
                        Have an account?{" "}
                        <Link onClick={() => setAction("logIn")}>
                            Log in
                        </Link>
                    </>
                }
            </StateChanger>
        </Container>
    );
};

export default Auth;