import React from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Message Successfully", { autoClose: 1000 })
    }
    return (
        <div className='my-12 pt-12 pb-1 text-black bg-slate-100  max-w-screen-xl mx-auto px-10'>

            <h5 className="w-80 mx-auto text-3xl  border-t-2 border-black font-bold  pt-4  text-center ">
                Contact
            </h5>

            <form onSubmit={handleSubmit} className="my-12">
                <div className="grid grid-cols-3  gap-10">
                    <div>
                        <p className='pb-1'>Name</p>
                        <input type="text" className='w-full border-0 border-b border-gray-600 h-7 bg-slate-100 hover:border-2 focus:ring-0  hover:border-black focus:border-black' required/>
                    </div>
                    <div>
                        <p className='pb-1'>Email</p>
                        <input type="email" className='w-full border-0 border-b border-gray-600 h-7 bg-slate-100 hover:border-2 focus:ring-0  hover:border-black focus:border-black ' required/>
                    </div>
                    <div >
                        <p className='pb-1'>Phone</p>
                        <input type="number" className='w-full border-0 border-b border-gray-600 h-7 bg-slate-100 hover:border-2 focus:ring-0  hover:border-black focus:border-black' />
                    </div>
                </div>


                <div className='mx-auto mt-6'>
                    <p className='pb-1'>Message</p>
                    <textarea type="text" className='w-full border-0 border-b border-gray-600 h-16 bg-slate-100 focus:ring-0 hover:border-2 hover:border-black focus:border-black' />
                </div>


                <div className='flex justify-end mt-6'>
                <input type="submit" value="Submit" className=' w-80 text-white p-2 bg-slate-500 font-bold text-lg  rounded-md '/>
                    
                </div>



            </form>


        </div>
    );
};

export default Contact;