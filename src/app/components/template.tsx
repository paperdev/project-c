import ComponentProfile from './profile';
import ComponentTag from './tag';
import ComponentSummary from './summary';
import ComponentHistory from './history';

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>
        <ComponentProfile>
        </ComponentProfile>
      </div>
      <div>
        <ComponentTag>
        </ComponentTag>
      </div>
      <div>
        <ComponentSummary>
        </ComponentSummary>
      </div>
      <div>
        <ComponentHistory>
        </ComponentHistory>
      </div>
    </div>
  )
}