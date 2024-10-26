import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        register:builder.mutation({
            query:(data) => ({
                url:`${USERS_URL}/register`,
                method:'POST',
                body:data
            })
        })
    })
});

export const {
    useRegisterMutation

} = userApiSlice;