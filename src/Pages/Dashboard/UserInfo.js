import React from 'react';

import { toast } from 'react-toastify';

const UserInfo = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`,
            {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
        ).then(res => {
            if (res.status === 403) {
                toast.error('Failed! You Dont have permission to make admin')
            }
            return res.json()
        })

            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made as an Admin');
                }
            })
    }

    // axios.put(url[, data[, config]])

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-sm">Make Admin</button>}
            </td>
            <td><button className="btn btn-square bg-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            </td>
        </tr>
    );
};

export default UserInfo;