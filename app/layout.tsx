// app/layout.tsx
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}  {/* Renders the child page or sub-layout */}
      </body>
    </html>
  );
}
