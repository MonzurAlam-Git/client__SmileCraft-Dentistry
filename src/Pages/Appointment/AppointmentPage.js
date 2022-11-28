import { format } from 'date-fns';
import React, { useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import BannerAppointment from './Banner_Appointment';

const AppointmentPage = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div >
            <BannerAppointment date={date} setDate={setDate}></BannerAppointment>

            <AvailableAppointment date={date} ></AvailableAppointment>
        </div>
    );
};

export default AppointmentPage;