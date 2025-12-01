"use client";
import { useContext, useEffect, useState } from "react";
// import getUserWishlist from "@/WishLiatActions/getUserWishlist";
import MyCards from "@/_components/MyCards/MyCards";
import { WishlistContext } from "@/Context/WishlistContext";
// import { product } from './../../types/product.t';
export default function Wishlist() {
  // const [wishlistProducts, setWishlistProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

   const {wishlist , loading} = useContext(WishlistContext);

//   useEffect(() => {
//     async function fetchWishlist() {
//       try {
//           const data = await getUserWishlist();
//         console.log("Wishlist from server:", data);
// setWishlistProducts(data?.data || []);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchWishlist();
//   }, []);

  if (loading) {
    return <p className="text-center text-gray-500 my-10">Loading...</p>;
  }

  // if (wishlist.length === 0) {
  //   return(
  //     <div>wishlist is empty</div>
  //   )
  // }

  return (
    <section className="w-[85%] mx-auto py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-5">My Wishlist ❤️</h1>

      {wishlist.length > 0 ? (
        <div className="flex flex-wrap gap-5">
          {wishlist.map((product) => (
            <MyCards key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg text-center">
          No items in your wishlist yet.
        </p>
      )}
    </section>
  );
}