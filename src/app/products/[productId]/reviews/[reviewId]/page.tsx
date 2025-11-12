import { notFound } from "next/navigation";
export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  //   const productId = (await params).productId;
  //   const reviewId = (await params).reviewId;

  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 5) {
    notFound();
  }

  return (
    <>
      <h1>Nested Dynamic Route</h1>
      <h2>
        Review{reviewId} for product{productId}
      </h2>
    </>
  );
}
