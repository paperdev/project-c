import ComponentChatInput from '@/components/(chat)/chatInput';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex flex-col h-full'>
        <div className='flex-1' id='chatBottomDiv'>
          {children}
        </div>

        <ComponentChatInput />
      </div>
    </>
  );
}
