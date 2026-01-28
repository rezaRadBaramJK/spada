export default function ComingSoon() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient + vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
      <div className="absolute inset-0 shadow-[inset_0_0_200px_80px_rgba(0,0,0,0.9)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Spada"
          className="mb-10 w-48 sm:w-64 md:w-80 animate-fade-in-up"
        />

        {/* Headline */}
        <h1 className="text-3xl font-semibold tracking-[0.35em] sm:text-4xl md:text-5xl">
          COMING SOON
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-xl text-sm uppercase tracking-widest text-white/70 sm:text-base">
          Something powerful is being forged. Stay tuned.
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
