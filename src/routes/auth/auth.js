import React, {useState} from 'react';
import {Link, StateChanger, Container, Form,} from "./authStyle.js";
import Input from "../../component/input/input.js";
import Button from "../../component/button/button.js";
import useInput from "../../hooks/useInput.js";

const Auth = () => {
    const [action, setAction] = useState("logIn");
    const username = useInput("");
    const password = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");

    return (
        <Container>
            <Form>
                {action === "logIn" ?
                    <form>
                        <Input placeholder={"Username"} {...username}/>
                        <Input placeholder={"Password"} {...password} type='password'/>
                        <Button text={"Log in"}/>
                    </form>
                    :
                    <form>
                        <Input placeholder={"First name"} {...firstName}/>
                        <Input placeholder={"Last name"} {...lastName}/>
                        <Input placeholder={"Email"} {...email} type='email'/>
                        <Input placeholder={"Username"} {...username}/>
                        <Input placeholder={"Password"} {...password} type='password'/>
                        <Button text={"Sign up"}/>
                    </form>}
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