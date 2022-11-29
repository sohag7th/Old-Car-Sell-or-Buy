import React from 'react';

const MyBuyerRow = ({ buyer, refetch, index, setDeleteProduct }) => {
    return (
        <tr>

        <th>{index + 1}</th>
        <th>{buyer.BuyerEmail}</th>
        <th>{buyer.BuyerName}</th>
        <th>{buyer.BuyerLocation}</th>
        <th>{buyer.BuyerPhone}</th>
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

export default MyBuyerRow;