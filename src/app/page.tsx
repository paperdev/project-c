import ComponentIntro from './components/intro';
import ComponentHistory from './components/history';

export default function Home() {
  return (
    <div>
      <div>
        <ComponentIntro>
        </ComponentIntro>
      </div>
      <div>
        <ComponentHistory>
        </ComponentHistory>
      </div>
    </div>
  )
}
