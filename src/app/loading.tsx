export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-50">
      <div className="flex items-center space-x-2">
        <div className="h-6 w-6 animate-bounce rounded-full bg-amber-400"></div>
        <div className="animation-delay-200 h-6 w-6 animate-bounce rounded-full bg-zinc-950"></div>
        <div className="animation-delay-400 h-6 w-6 animate-bounce rounded-full bg-amber-400"></div>
      </div>
      <p className="mt-2 text-lg text-zinc-950">Loading...</p>
    </div>
  );
}
