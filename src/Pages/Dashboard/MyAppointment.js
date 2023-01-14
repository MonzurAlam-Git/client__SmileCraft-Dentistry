import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate('');
    const [signOut, loading_signOut, error_signOut] = useSignOut(auth);

    const { data, isLoading } = useQuery(['bookingData', user], () => {
        return fetch(`http://localhost:5000/bookings?email=${user.email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
                return res.json()
            })
    })


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center font-semibold text-red-600'> Total Appointment {data.length} </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            data.map((service, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{service.email}</td>
                                    <td>{service.serviceName}</td>
                                    <td>{service.date}</td>
                                    <td>{service.slot}</td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;