// layout.tsx
'use client'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { NextAuthProvider } from "../providers";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

          
          <GoogleOAuthProvider clientId="377869314621-7mu6efqci9ki98qmega0m2nqdt0ji15h.apps.googleusercontent.com">
            {children}
            </GoogleOAuthProvider>
      </body>
    </html>
  );
}