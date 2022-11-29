import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/UserContext';
import Loading from './Loading';

const BookingModal = ({ openModal, setOpenModal, refetch }) => {
    const { user, loadingUser } = useContext(AuthContext);
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const { _id, carName,  resalePrice, sellerEmail, image } = openModal;
    // console.log(openModal);

    if (loadingUser) {
        return <Loading></Loading>
    }

    const handleForm = event => {
        event.preventDefault();
        setOpenModal(false);

        const orderinfo = {
            BuyerEmail: user.email,
            BuyerName: user.displayName,
            BuyerPhone: event.target.phone.value,
            BuyerLocation: event.target.location.value,
            ProductId: _id,
            ProductPrice: resalePrice,
            ProductSellerEmail: sellerEmail,
            ProductName: carName,
            image,
            payment: ""
        }
        console.log(orderinfo);

        fetch(`http://localhost:5000/order/add`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(orderinfo)
        })
            .then(res => res.json())
            .then(data => {

                toast.info('Congratulation! Your Car is Booked.', { autoClose: 1000 })

                

                refetch();
                console.log(data);
            })
       

    }

    return (
        <div>
            <input type="checkbox" id="modalBooking" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="modalBooking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card flex-shrink-0 w-full  ">
                        <div className="card-body p-2">
                            <p className='text-left font-semibold text-xl mb-12'>{carName}</p>

                            <form onSubmit={handleForm} className="form-control">

                                <input type="text" name='name' value={user.displayName} className="input mb-3 bg-info" readOnly />
                                <input type="text" name='email' value={user.email} className="input mb-3 bg-info" readOnly />
                                <input type="text" name='date' value={resalePrice} className="input  mb-3 bg-info" readOnly />
                                <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered mb-3" required />
                                <input type="text" name='location' placeholder="Meeting Location" className="input input-bordered mb-3" required />

                                <input type="submit" value="Submit" className='btn mt-6' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;