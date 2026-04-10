import { signOut } from "../lib/supabase";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-brand-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-brand-900">Dashboard</h1>
          <button
            onClick={() => signOut()}
            className="text-sm text-brand-600 hover:text-brand-800 transition-colors"
          >
            Sign out
          </button>
        </header>
        <p className="text-brand-700">Welcome! Start building here.</p>
      </div>
    </div>
  );
}
