export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold tracking-tight">SolveLang</h1>
        <p className="mt-6 text-lg text-gray-600">
          A readable, workflow-focused programming language for automation, APIs, files, and AI-native scripting.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="/landing"
            className="rounded-xl bg-black px-6 py-3 text-white"
          >
            View Landing Page
          </a>
          <a
            href="https://github.com/saiidz/solvelang"
            className="rounded-xl border px-6 py-3"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
