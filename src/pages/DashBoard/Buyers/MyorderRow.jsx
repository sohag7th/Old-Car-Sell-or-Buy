import React from 'react';

const MyorderRow = ({order, index, children}) => {
    // console.log(order)
    return (
        <tr>

        <th>{index + 1}</th>
        <th><img src={order.image}  alt="" className='h-32 w-32'/></th>
        <th>{order.ProductName}</th>
        <th>{order.ProductPrice}</th>
        <th>{order.ProductSellerEmail}</th>
        {children}
        
        
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

export default MyorderRow;