import React from "react";
// (auth) for to organize routes without affecting the URL or Route Group
// this will auto set when visit localhost:3000/sign-in or localhost:3000/sign-up

// { children }: { children: React.ReactNode } this is using typescript
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};

export default layout;
