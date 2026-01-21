export default function NeonGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(20,241,149,0.16),transparent_30%)]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-[pulseGlow_6s_ease-in-out_infinite] bg-[linear-gradient(90deg,rgba(255,153,51,0.12)_0%,rgba(19,136,8,0.12)_100%)] opacity-60" />
        <div className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rotate-6 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(20,241,149,0.12),rgba(58,117,196,0.12),rgba(255,153,51,0.12),rgba(20,241,149,0.12))] blur-3xl opacity-70" />
      </div>
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 rotate-2 opacity-25">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>
    </div>
  )
}
