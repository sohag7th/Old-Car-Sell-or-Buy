import React from 'react';
import { toast } from 'react-toastify';

const ConfirmationModal = ({ openModal, setOpenModal, refetch, action }) => {

    const { _id, carName, resalePrice, sellerEmail } = openModal;


    const handleAction = event => {
        event.preventDefault();
        setOpenModal(false);

        let fetchMethod = {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ advertised: 'Yes' })
        };
        if (action === "Delete") {

            fetchMethod = {
                method: 'Delete',
            };

        }

        const url = `http://localhost:5000/category/${_id}`;
        // console.log(url);

        fetch(url, fetchMethod)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.modifiedCount > 0) {
                    toast.info(`Your Car is ${action}.`, { autoClose: 1000 })
                }
                refetch();
                console.log(data);
            })
        // toast.success('Congratulation! Your Car is Booked.', { autoClose: 1000 })


    }
    return (
        <div>
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box max-w-sm">
                    <div className="card flex-shrink-0 w-full   ">
                        <div className="card-body p-2">
                            <p className='text-left font-semibold text-xl '>{carName}</p>
                            <p className='my-4'>Are you sure want to {action}?</p>
                            <div className='flex justify-between'>
                                <label htmlFor="confirmationModal" className="btn btn-sm  ">Cancel</label>
                                <button onClick={handleAction} className='btn btn-sm bg-red-600' >{action}</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ConfirmationModal;