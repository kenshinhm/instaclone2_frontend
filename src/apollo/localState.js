export const defaults = {
    isLoggedIn: localStorage.getItem("instaclone2-token") !== null
};

export const resolvers = {
    Mutation: {
        logUserIn: (_, {token}, {cache}) => {
            localStorage.setItem("instaclone2-token", token);
            cache.writeData({
                data: {
                    isLoggedIn: true
                }
            });
        },
        logUserOut: (_, __, {cache}) => {
            localStorage.removeItem("instaclone2-token");
            window.location.reload();
        },
    }
};
