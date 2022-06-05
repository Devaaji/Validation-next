import { useMemo } from 'react'
import useSWR from 'swr';

const useRemoteAllUsers = () => {

    const fetcher = (url) => fetch(url).then((res) => res.json());

    const uri = `https://api-validation-depdep.herokuapp.com/api/users/`
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

export default useRemoteAllUsers;