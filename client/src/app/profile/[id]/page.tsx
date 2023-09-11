export default function Page({
  params,
}: {
  params: { id : string }
}) {
  return <div>Hello, ID {params.id}!</div>;
}
