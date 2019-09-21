import {Container, Form, Link, StateChanger} from "./authStyle.js";
import Input from "../../component/input/input.js";
import Button from "../../component/button/button.js";
import React from "react";

const AuthPresenter =
    ({
        action, username, firstName, lastName,
        email, setAction, onSubmit, secret
    }) => (
        <Container>
            <Form>
                {action === "logIn" && (
                    <form onSubmit={onSubmit}>
                        <Input placeholder="Email" {...email} type='email'/>
                        <Button text={"Log in"}/>
                    </form>
                )}
                {action === "signUp" && (
                    <form onSubmit={onSubmit}>
                        <Input placeholder={"First name"} {...firstName}/>
                        <Input placeholder={"Last name"} {...lastName}/>
                        <Input placeholder={"Email"} {...email} type='email'/>
                        <Input placeholder={"Username"} {...username}/>
                        <Button text={"Sign up"}/>
                    </form>
                )}
                {action === "confirm" && (
                    <form onSubmit={onSubmit}>
                        <Input placeholder="Paste your secret" required {...secret} />
                        <Button text={"Confirm"}/>
                    </form>
                )}
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
