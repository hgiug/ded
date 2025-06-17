export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to NextSkill AI</h1>
        <p className="text-xl mb-6">Learn any skill with personalized AI-powered lessons daily.</p>
        <a href="/form" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg">
          Get Started
        </a>
      </div>
    </main>
  );
}
