
const imageUpload = imageUrl => {

    const formData = new FormData();
        formData.append('image', imageUrl);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imagestorageKey}`;

        return fetch(url, {
            method: 'POST',
            body: formData
        })

}

export default imageUpload;


// import  { useEffect, useState } from 'react';

// const useToken = userobj => {
//     const [token, setToken] = useState('');
//     const { user, name, email, status} = userobj;
//     console.log(userobj);
   

//     useEffect(()=>{
//         const userEmail = user?.email;
//         const currentUser = {name, email, status};
//         if(userEmail){
//             fetch(`http://localhost:5000/user/${userEmail}`,{
//                 method: 'PUT',
//                 headers: {
//                     'content-type': 'application/json',
//                 },
//                 body: JSON.stringify(currentUser)
//             })
//             .then(res => res.json())
//             .then(data => {
//                 const accessToken = data.token;
//                 localStorage.setItem('accessToken', accessToken)
//                 setToken(accessToken)
//                 console.log('Data iinside useToken', data);
//             })
//         }
//     },[name, email, status, user?.email]);

//     return [token];
// };

// export default useToken;