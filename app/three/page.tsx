"use client";

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover scale-110 animate-slow-zoom"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black/90" />
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 film-grain pointer-events-none" />

      {/* Accent glow */}
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      {/* Floating particles */}
      <div className="particles" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Spada"
          className="mb-10 w-48 sm:w-64 md:w-80 animate-fade-in-up drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        />

        {/* Headline */}
        <h1 className="text-3xl font-semibold tracking-[0.35em] sm:text-4xl md:text-5xl">
          COMING SOON
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-xl text-sm uppercase tracking-widest text-white/70 sm:text-base">
          Strength. Precision. Legacy.
        </p>

        {/* Divider */}
        <div className="mt-14 h-px w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Footer */}
        <p className="mt-6 text-xs tracking-widest text-white/40">
          © {new Date().getFullYear()} SPADA
        </p>
      </div>
    </main>
  );
}
