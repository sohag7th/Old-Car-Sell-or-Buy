import React from 'react';
import { toast } from 'react-toastify';

const OrderDeleteModal = ({ deleteModal, setDeleteModal, url, refetch, action }) => {

    const { _id, ProductName, resalePrice, sellerEmail } = deleteModal;

    // console.log(deleteModal)

    const handleAction = event => {
        event.preventDefault();
        setDeleteModal(false);

        

        fetch(`https://old-car-server.vercel.app/${url}/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
             //   console.log(data);
                if (data?.modifiedCount > 0) {
                    toast.info(`Your Car is ${action}.`, { autoClose: 1000 })
                }
                refetch();
             //   console.log(data);
            })


    }
    return (
        <div>
            <input type="checkbox" id="orderDeleteModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box max-w-sm">
                    <div className="card flex-shrink-0 w-full   ">
                        <div className="card-body p-2">
                            <p className='text-left font-semibold text-xl '>{ProductName}</p>
                            <p className='my-4  font-semibold '>Are you sure want to Delete?</p>
                            <div className='flex justify-between'>
                                <label htmlFor="orderDeleteModal" className="btn btn-sm  ">Cancel</label>
                                <button onClick={handleAction} className='btn btn-sm border-0 bg-red-600' >Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderDeleteModal;