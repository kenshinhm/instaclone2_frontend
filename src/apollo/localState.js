export const defaults = {
    isLoggedIn: localStorage.getItem("token") !== null
};

export const resolvers = {
    Mutation: {
        logUserIn: (_, {token}, {cache}) => {
            localStorage.setItem("token", token);
            cache.writeData({
                data: {
                    isLoggedIn: true
                }
            });
        },
        logUserOut: (_, __, {cache}) => {
            localStorage.removeItem("token");
            window.location = "/";
        },
    }
};
