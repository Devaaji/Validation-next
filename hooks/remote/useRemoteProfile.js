import { useMemo } from 'react'
import useSWR from 'swr';
import useUserStore from '../../store/useUserStore';

const useRemoteProfile = () => {
    const email = useUserStore((state) => state.email);

    const fetcher = (url) => fetch(url).then((res) => res.json());

    const uri = email ? `https://api-validation-depdep.herokuapp.com/api/auth/me?email=${email}` : false;
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