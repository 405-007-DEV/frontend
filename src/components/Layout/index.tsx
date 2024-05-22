import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="flex flex-col h-screen box-border">
      <main className="overflow-auto grow min-h-0 px-20">
        <Outlet />
      </main>
    </div>
  );
}
