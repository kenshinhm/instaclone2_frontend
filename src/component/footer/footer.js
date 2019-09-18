import React from "react";
import {Copyright, Link, List, ListItem, Container} from "./footerStyle.js";

export const Footer = () => (
    <Container>
        <List>
            <ListItem><Link href="#">about us</Link></ListItem>
            <ListItem><Link href="#">support</Link></ListItem>
            <ListItem><Link href="#">press</Link></ListItem>
            <ListItem><Link href="#">api</Link></ListItem>
            <ListItem><Link href="#">jobs</Link></ListItem>
            <ListItem><Link href="#">privacy</Link></ListItem>
            <ListItem><Link href="#">terms</Link></ListItem>
            <ListItem><Link href="#">directory</Link></ListItem>
            <ListItem><Link href="#">profiles</Link></ListItem>
            <ListItem><Link href="#">hashtags</Link></ListItem>
            <ListItem><Link href="#">language</Link></ListItem>
        </List>
        <Copyright>Instaclone {new Date().getFullYear()} &copy;</Copyright>
    </Container>
);
