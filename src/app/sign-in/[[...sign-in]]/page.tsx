"use client";

import { DesktopNav } from "@/home/nav/desktop";
import { MobileNav } from "@/home/nav/mobile";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <>
      <div className="flex-1 overflow-auto">
        <>
          <DesktopNav />
          <MobileNav />
          {/* Main Content Area */}
        </>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background/80 px-4 dark:from-slate-900 dark:to-slate-800">
        <div className="backdrop-blur-lg border border-border bg-white/80 dark:bg-transparent shadow-xl rounded-2xl p-8 w-full max-w-md">
          {" "}
          <div className="text-center mb-6 space-y-1">
            <h1 className="text-3xl font-bold text-primary">Welcome</h1>
            <p className="text-muted-foreground text-sm">
              Sign in to your account
            </p>
          </div>
          <SignIn
            appearance={{
              theme: "simple",
            }}
            afterSignInUrl="/"
            afterSignUpUrl="/"
          />
        </div>
      </div>
    </>
  );
}
