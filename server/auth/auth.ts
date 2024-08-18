import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ChulaLogin } from "./auth.module";
import { decode, encode } from "next-auth/jwt";

// ------------ handling NextAuth Configurations ------------
const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: 'CU Login',
            credentials: {
                username: { label: "MCV CU ID", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async function Authorize(credentials) {
                if (!credentials) return null
                const result = await ChulaLogin({ username: credentials.username, password: credentials.password })
                if (result?.success) {
                    console.log(result)
                    return {
                        id: result.id,
                        _token: result.session._token
                    }
                } else {
                    console.log("Not success", result)
                }
                return null
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    jwt: {
        decode: decode,
        encode: encode
    }
}
export default authOptions;