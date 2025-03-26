import { Navbar } from '@/components/navbar/Navbar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen'>
      <Navbar />
      {children}
    </div>
  );
}
