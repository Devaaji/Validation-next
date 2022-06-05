import React, { useMemo } from 'react'
import useSWR from 'swr';

const useRemoteProfile = () => {
    const email = typeof window !== 'undefined' ? localStorage.getItem('user') : null

    const fetcher = (url) => fetch(url).then((res) => res.json());

    const uri = email ? `https://api-validation-depdep.herokuapp.com/api/auth/me?email=${email}` : null;
    const { data, error, ...other } = useSWR(
        uri,
        fetcher
    );

    const newData = useMemo(
        () =>
            data
                ? { ...data, data: data?.data }
                : data,
        [data]
    );

    return { data: newData, error, ...other };
}

export default useRemoteProfile;