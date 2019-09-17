export const defaults = {
    isLoggedIn: localStorage.getItem("token") !== null
};

export const resolvers = {
    Mutation: {
        logIn: (_, {token}, {cache}) => {
            localStorage.setItem("token", token);
            cache.writeData({
                data: {
                    isLoggedIn: true
                }
            });
        },
        logOut: (_, __, {cache}) => {
            localStorage.removeItem("token");
            window.location.reload();
        },
    }
};
