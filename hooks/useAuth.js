import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useRemoteProfile from "./remote/useRemoteProfile";
import redirect from 'nextjs-redirect'

const useAuth = () => {
    const router = useRouter();

    const { data } = useRemoteProfile();


    // if(typeof window !== "undefined" ) {
    //     if(data) {
    //         router.push("/");
    //     }
    // }
    // return null;

    useEffect(() => {
        if (data)
            router.push('/');
    }, [data]);
}

export default useAuth