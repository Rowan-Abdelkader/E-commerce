import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { product } from './../../types/product.t';


const MyCards = ({ product }:{ product : product }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
		
      <div className="inner">
        <Card>
			<Link href={`/proudectDetails/${product.id}`}>
          <CardHeader>
            <Image width={300} height={200} src={product.imageCover} alt={product.title} />
          </CardHeader>
          <CardContent>
            <p className="font-bold text-fuchsia-700">
              {product.category.name}
            </p>
            <p className="line-clamp-1">{product.title}</p>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full">
              <p>{product.price} EGP</p>
              <p>
                {product.ratingsAverage}{" "}
                <i className="fa-solid fa-star text-yellow-400"></i>
              </p>
            </div>
          </CardFooter>
		  </Link>

		  <div className='flex justify-center mt-4'>
			<Button className="w-[80%] bg-green-500" variant="default">+ Add</Button>
			</div>
			
        </Card>
      </div>
    </div>
  );
};

export default MyCards;
