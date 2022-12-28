import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ModalAppointment from './ModalAppointment';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div >
            <h1 className='text-xl text-center text-cyan-600 mt-5 font-bold font-mono'>Available Appointment on -- <span className='font-bold text-red-500'>{format(date, "PPP")}</span> </h1>
            <div className='px-28 grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {/* FUNC_MODAL_0 : every service sending a state var named setTreatment to store the respective service value on service conmponent*/}
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <ModalAppointment date={date} treatment={treatment} setTreatment={setTreatment}></ModalAppointment>}
            {/* FUNC_MODAL_2 : if treatment has truthy value -- ModalAppointment will execute with treatment value inside it as SetTreatment which is complete service data */}
        </div>
    );
};

export default AvailableAppointment;