import React from 'react';
import { toast } from 'react-toastify';

const PaymentModal = ({ openModal, setOpenModal, refetch, action }) => {

    const { _id, carName, ProductPrice, ProductId, categotyName } = openModal;
    console.log(openModal);


    const handlePayment = event => {
        event.preventDefault();
        // setOpenModal(false);
        const inputAmoint = parseInt(event.target.payment.value);
        const productPrict = parseInt(ProductPrice)
        if (inputAmoint !== productPrict) {
            toast.info(`Please Enter Correct Amount.`, { autoClose: 1000 })
        }
        else {
            setOpenModal(false);
            const productUpdate = {
                ProductId,
            }
            //   console.log("productUpdate", productUpdate);
            fetch(`https://old-car-server.vercel.app/payment/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    //    'authorization': `Bearer ${localStorage.getItem('life-advice')}`
                },
                body: JSON.stringify(productUpdate)
            })
                .then(res => res.json())
                .then(data => {
                    //   console.log(data);
                    if (data?.modifiedCount > 0) {
                        toast.info('Congratulation! Your Car is Booked.', { autoClose: 1000 })

                        //   console.log(categotyName);

                        //  product quantity decrement 
                        fetch(`https://old-car-server.vercel.app/brand/${categotyName}`, {
                            method: 'PATCH',
                            headers: {
                                'content-type': 'application/json',
                                //    'authorization': `Bearer ${localStorage.getItem('life-advice')}`
                            },
                            body: JSON.stringify({ action: "decrement" })
                        })
                            .then(res => res.json())
                            .then(data => {

                                //   console.log(data);
                            })
                    }
                    refetch();
                    //   console.log(data);
                })

        }


    }
    return (
        <div>
            <input type="checkbox" id="paymentModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box max-w-sm">
                    <div className="card flex-shrink-0 w-full   ">
                        <div className="card-body p-2">
                            <p className='text-left font-semibold text-xl '>{carName}</p>
                            <p className='my-4 font-medium'>Please Enter Amount ${ProductPrice}</p>
                            <form onSubmit={handlePayment} className="form-control">

                                <input type="number" name='payment' className="input mb-3 border-2 border-black" />


                                <div className='flex justify-between items-center mt-6'>
                                    <label htmlFor="paymentModal" className="btn btn-sm  ">Cancel</label>
                                    <input type="submit" value="Confirm Payment" className='btn btn-sm border-0 bg-green-600 ' />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PaymentModal;