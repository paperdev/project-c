import SampleHeader from "./header"

export default function SampleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SampleHeader>
      {children}
    </SampleHeader>
  )
}
