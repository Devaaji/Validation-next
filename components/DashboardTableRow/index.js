import React, { useState } from 'react'
import useAxios from '../../hooks/useAxios';
import useMatchMutate from '../../hooks/matchMutate';

const DahsboardTableRow = (props) => {
    const matchMutate = useMatchMutate();
    const [isLoading, setIsLoading] = useState(false);

    const url = `/users/${props.id}`

    const [, executePostUser] = useAxios(
        { url, method: 'PUT' },
        { manual: true }
    );

    const handleApproved = async () => {
        setIsLoading(true)
        await executePostUser({
            data: {
                isVerified: true
            }
        });
        matchMutate(/\/users/)
        setIsLoading(false)
    }

    const [, executeDeleteUser] = useAxios(
        { url, method: 'DELETE' },
        { manual: true }
    );

    const handleDelete = async () => {
        setIsLoading(true)
        await executeDeleteUser();
        matchMutate(/\/users/)
        setIsLoading(false)
    }

    return (
        <>
            {props.isVerified === true ?
                <button className="btn btn-secondary disabled not-allowed" >Approved</button>
                : <button className="btn btn-success" onClick={handleApproved}>{isLoading ? 'Loading...' : 'Approved'}</button>
            }
            {props.role === "1" ? <button className="btn btn-secondary disabled ms-2">Hapus</button>
                : <button className="btn btn-danger follow ms-2" onClick={handleDelete}>{isLoading ? 'Loading...' : 'Hapus'}</button>
            }
        </>

    )
}

export default DahsboardTableRow