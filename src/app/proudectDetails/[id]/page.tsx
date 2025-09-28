import React from 'react'
import singleApi from '@/apis/singleApi';
import { Button } from "@/components/ui/button";
import Image from 'next/image';	

const productDetails = async ({ params}: { params: { id: string } }) => {
	const {id} = await  params;
	const data = await singleApi(id);
	console.log(data);

	return (
<div className='px-5 w-[80%] mx-auto py-10 flex items-center justify-center flex-col md:flex-row'>
<div className='w-full md:w-1/3'>
	<Image src={data.imageCover} alt={data.title} width={500} height={400} className='w-full mb-10' />
</div>
<div  className='w-full md:w-2/3 ps-10'>
<h2 className='text-4xl font-medium'>{data.title}</h2>
<p className='pt-5'>{data.description}</p>
<p className='py-5'>{data.category.name}</p>
   <div className="flex justify-between w-full">
              <p>{data.price} EGP</p>
              <p>
                {data.ratingsAverage}{" "}
                <i className="fa-solid fa-star text-yellow-400"></i>
              </p>
            </div>
			<div className='flex justify-center mt-10'>
			<Button className="w-[80%] bg-green-500" variant="default">+ Add</Button>
			</div>
</div>
</div>
  )
}

export default productDetails