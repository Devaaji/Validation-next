import React from 'react'
import useAxios from '../../hooks/useAxios';
import useMatchMutate from '../../hooks/matchMutate';

const DahsboardTableRow = (props) => {
    const matchMutate = useMatchMutate()

    const url = `/users/${props.id}`

    const [, executePostUser] = useAxios(
        { url, method: 'PUT' },
        { manual: true }
    );

    const handleApproved = async () => {
        await executePostUser({
            data: {
                isVerified: true
            }
        });
        matchMutate(/\/users/)
    }

    const [, executeDeleteUser] = useAxios(
        { url, method: 'DELETE' },
        { manual: true }
    );

    const handleDelete = async () => {
        await executeDeleteUser();
        matchMutate(/\/users/)
    }

    return (
        <>
            {props.isVerified === true ?
                <button className="btn btn-secondary disabled not-allowed" >Approved</button>
                : <button className="btn btn-success" onClick={handleApproved}>Approved</button>}
            {props.role === "1" ? <button className="btn btn-secondary disabled ms-2">Hapus</button> : <button className="btn btn-danger follow ms-2" onClick={handleDelete}>Hapus</button> }
        </>

    )
}

export default DahsboardTableRow