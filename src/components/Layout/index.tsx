import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="flex flex-col h-screen box-border mx-auto min-w-[360px] max-w-[500px]">
      <main className="overflow-auto grow min-h-0 w-full">
        <Outlet />
      </main>
    </div>
  );
}
