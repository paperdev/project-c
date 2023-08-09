import Template from './components/template';
import Navbar from './components/navbar';
import { Sidebar } from 'react-feather';

export default function Home() {
  return (
    <div className="mx-auto sm:flex">
      <Navbar>
      </Navbar>
      <div className="mx-auto md:max-w-2xl sm:flex">
        <Template>
        </Template>
      </div>
    </div>
  )
}
