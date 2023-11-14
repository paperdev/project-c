import Header from '@/components/header';
import Body from '@/components/body';

export default function TemplateHome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='paper-default-view'>
        <Header title='Paper Gtihub' />
        <Body>
          {children}
        </Body>
      </div>
    </>
  );
}
