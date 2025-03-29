export const StyleContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-6 md:mt-10 sm:px-6 lg:px-8'>
      {children}
    </div>
  );
};

export default StyleContainer;
