type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <main className='px-3 lg:'>{children}</main>
    </>
  );
};

export default DashboardLayout;
