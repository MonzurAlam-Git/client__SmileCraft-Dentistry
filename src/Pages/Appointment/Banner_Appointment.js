
import chair from "../../../src/assets/images/chair.png"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const BannerAppointment = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <img alt='' src={chair} className="max-w-sm rounded-lg shadow-2xl" />

                {/* Calendar   */}
                <div className='mr-5'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default BannerAppointment;