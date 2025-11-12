"use client";

import { usePathname } from "next/navigation";

export default function ReviewNotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h1>Review Not Found</h1>
      <h3>Product ID: {productId}</h3>
      <h3>Review ID: {reviewId}</h3>
      <p>Sorry, the review you are looking for does not exist.</p>
    </div>
  );
}
