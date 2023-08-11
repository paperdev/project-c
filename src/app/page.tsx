import Template from './components/template';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className='flex flex-row'>
      <div>
        <Navbar>
        </Navbar>
      </div>      
      <div className='mx-auto'>
        <Template>
        </Template>
      </div>
    </div>
  )
}
