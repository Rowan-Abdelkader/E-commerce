"use server"
import { getMyToken } from "@/utilities/token";
export async function getUserWishlist(){

  const token = await getMyToken();

 if (!token) { 
	throw new Error('Login First')
}
<<<<<<< HEAD
  const response = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
        headers: {
            token: token as string
        }
      });
const data = await response.json()	
if (!response.ok)
  {
=======
  const response = await fetch ("https://ecommerce.routemisr.com/api/v1/wishlist", {
    headers: {
      token: token
    }
  });
const data = await response.json()	
if (!response.ok) {
>>>>>>> 2f5214098546bdb9e1e299307cc9aff62d26a148
	throw new Error ('Failed to fetch wishlist')
}
return data
};

