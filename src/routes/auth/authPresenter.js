import {Container, Form, Link, StateChanger} from "./authStyle.js";
import Input from "../../component/input/input.js";
import Button from "../../component/button/button.js";
import React from "react";

const AuthPresenter =
    ({action, username, firstName, lastName, email, setAction, onLogin}) => (
        <Container>
            <Form>
                {action === "logIn" ?
                    <form onSubmit={onLogin}>
                        <Input placeholder="Email" {...email} type='email'/>
                        <Button text={"Log in"}/>
                    </form>
                    :
                    <form onSubmit={onLogin}>
                        <Input placeholder={"First name"} {...firstName}/>
                        <Input placeholder={"Last name"} {...lastName}/>
                        <Input placeholder={"Email"} {...email} type='email'/>
                        <Input placeholder={"Username"} {...username}/>
                        <Button text={"Sign up"}/>
                    </form>}
            </Form>
            <StateChanger>
                {action === "logIn" ?
                    <>
                        Don't have an account?{" "}
                        <Link onClick={() => setAction("signUp")}>Sign up</Link>
                    </>
                    :
                    <>
                        Have an account?{" "}
                        <Link onClick={() => setAction("logIn")}>Log in</Link>
                    </>
                }
            </StateChanger>
        </Container>
    );

export default AuthPresenter;
