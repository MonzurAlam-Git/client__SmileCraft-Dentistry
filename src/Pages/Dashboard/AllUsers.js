import userEvent from '@testing-library/user-event';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserInfo from './UserInfo';

const AllUsers = () => {
    const { data, isLoading, refetch } = useQuery('users', () => fetch(`https://server-doctors-portal.vercel.app/users`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            {
                                data.map((user, index) =>
                                    <UserInfo key={user._id} user={user} index={index} refetch={refetch}></UserInfo>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default AllUsers;