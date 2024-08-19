import { ReactNode } from 'react';

export default function AfterLoginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      After Login 레이아웃
      {children}
    </div>
  );
}
