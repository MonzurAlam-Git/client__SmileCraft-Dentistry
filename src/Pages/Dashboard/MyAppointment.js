import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
    const [user] = useAuthState(auth)
    const { data, isLoading } = useQuery(['bookingData', user], () => {
        return fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then(res => res.json())
    })
    console.log(data);

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1> My Appointment {data.length} </h1>
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