import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import users from "../../../../data/users";

export const options = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    label: "Your username goes here!"
                },
                password: {
                    label: "Password",
                    type: "text"
                }
            },
            async authorize(credentials) {

                const user = users.find(user =>
                    user.username === credentials.username
                );

                if (credentials?.username === user.username && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }

        })
    ]
}