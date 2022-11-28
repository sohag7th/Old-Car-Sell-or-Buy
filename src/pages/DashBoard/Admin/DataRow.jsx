import React from 'react';
import { toast } from 'react-toastify';

const DataRow  = ({ seller, refetch, index, setDeleteProduct }) => {

    


    // const { email, role } = seller;
    const makeAdmin = () => {
        // fetch(`https://vercel-deploy-tools-server.vercel.app/user/admin/${user.email}`, {
        //     method: 'PUT',
        //     headers: {
        //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        //     }
        // })
        //     .then(res => {
        //         if (res.status === 403) {
        //             toast.error('Failed to make an error')
        //         }
        //         return res.json()
        //     })
        //     .then(data => {
        //         if (data?.result?.modifiedCount > 0) {
        //             toast.success('Make admin')
        //             refetch()
        //         }
        //         console.log(data)

        //     })
    }
    return (
        <tr>

        <th>{index + 1}</th>
        <th>{seller.name}</th>
        <th>{seller.email}</th>
        <th>{seller.status}</th>
        {/* <td>{email}</td>
        {
            role !== "admin" ?
                <td> <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button></td>
                :

                <td> <button  className='btn btn-xs btn-info'>Admin</button></td>
        }


        <td><label onClick={() => setDeleteProduct(user)} htmlFor="delete-confirm-modal" className="btn btn-xs  btn-error">Remove User</label></td> */}
        
    </tr>
    );
};

export default DataRow;