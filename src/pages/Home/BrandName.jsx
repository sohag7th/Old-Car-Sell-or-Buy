import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading';
import BrandCard from './BrandCard';

const BrandName = () => {
    const { data: brands, isLoading } = useQuery('brandinfo', () => fetch(`https://old-car-server.vercel.app/brand`).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='max-w-screen-xl mx-auto bg-slate-100 my-20 p-8 rounded-md'>
            <h1 className='text-4xl p-4'>Which Brands Do You Want To Buy?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-screen-xl justify-items-center  mt-10'>
                {

                    brands?.length > 0 &&
                    brands.map(brand => <BrandCard
                        key={brand._id}
                        brand={brand}
                    ></BrandCard>)
                }
            </div>
        </div>
    );
};

export default BrandName;


// https://i.postimg.cc/fLPSyCPF/01.png
// https://i.postimg.cc/7ZNVhvnW/02.png
// https://i.postimg.cc/bvC90QM0/03.png
// https://i.postimg.cc/ZKpjkvBZ/04.png
// https://i.postimg.cc/P5HydfYD/05.png
// https://i.postimg.cc/XXSZcJ4k/06.png
// https://i.postimg.cc/HWJB2hTr/07.png
// https://i.postimg.cc/fbTv0HHT/08.png
