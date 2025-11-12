export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Featured Products</h2>
      {children}
      <h2>Featured Products</h2>
    </>
  );
}
