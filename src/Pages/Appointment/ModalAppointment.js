import React from 'react';
import { format } from 'date-fns';


const ModalAppointment = ({ treatment, date }) => {
    const { title, slot } = treatment;

    const handleModal = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const date = event.target.date.value;
        console.log(slot, date);
    }
    // FUNC_MODAL_3 -- receives the service data in treatment and destructure
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">You are going to make appointment for -
                        <span className='text-red-500'>{title}</span></h3>

                    {/* modal form */}
                    <form onSubmit={handleModal} action="" className='grid gap-2 mx-auto '>
                        <input name='date' type="text" disabled value={format(date, "PPP")}
                            className="input input-bordered input-md max-w-xs" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select Slot</option>
                            {
                                slot.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-md  max-w-xs" />
                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered input-md  max-w-xs" />
                        <input name='number' type="number" placeholder="Contact number" className="input input-bordered input-md  max-w-xs" />
                        <input type="submit" value="submit" placeholder="Type here" className="btn mx-auto btn-primary w-40 max-w-xs" />
                    </form>

                </div>
            </div>


        </div>
    );
};

export default ModalAppointment;