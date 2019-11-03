import ApolloClient from "apollo-boost";
import {defaults, resolvers} from "./localState.js";

const Client = new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://instaclone2-yjh.herokuapp.com/",
    clientState: {
        defaults,
        resolvers
    },
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

export default Client;