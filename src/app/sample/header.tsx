import Link from "next/link";
import { Home as HomeIcon } from 'react-feather';


export default function SampleHeader({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <header>
      <Link href='/'>
        <HomeIcon>
        </HomeIcon>
      </Link>
    </header>
  )
}