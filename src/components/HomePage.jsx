import { ArrowRight, Cpu, Eye, Hand, MessageSquare, Power, ShieldCheck, Video } from 'lucide-react';

function StatusPill({ label, value, active }) {
    return (
        <div className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm border ${active ? 'border-green-400/50 bg-green-400/10 text-green-100' : 'border-white/10 bg-white/5 text-white/70'}`}>
            <span className="font-semibold">{label}:</span>
            <span className="font-mono">{value}</span>
        </div>
    );
}

export default function HomePage({
    onLaunch,
    status,
    isConnected,
    socketConnected,
    isAuthenticated,
    isVideoOn,
    isMuted,
    kasaDeviceCount
}) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white">
            <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col gap-16">
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/30" />
                        <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Welcome to</p>
                            <h1 className="text-2xl font-semibold tracking-tight">A.D.A Control Center</h1>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <StatusPill label="Socket" value={socketConnected ? 'Online' : 'Offline'} active={socketConnected} />
                        <StatusPill label="Link" value={isConnected ? 'Paired' : 'Idle'} active={isConnected} />
                        <StatusPill label="Auth" value={isAuthenticated ? 'Ready' : 'Locked'} active={isAuthenticated} />
                    </div>
                </header>

                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs tracking-wide text-white/70 border border-white/10">
                            <ShieldCheck className="w-4 h-4 text-emerald-300" />
                            <span>Local-first automation · Live vision · Secure prompts</span>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
                                Your AI-driven operations hub with voice, vision, and device control.
                            </h2>
                            <p className="text-lg text-white/70 leading-relaxed">
                                Spin up A.D.A when you&apos;re ready to collaborate. Review statuses, preview connected modules,
                                and launch directly into the live workspace without configuring anything else.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button
                                type="button"
                                onClick={onLaunch}
                                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 px-6 py-3 font-semibold text-black shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02]"
                            >
                                Launch Control Center
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
                                <Power className="w-5 h-5 text-emerald-300" />
                                <div>
                                    <p className="text-sm font-semibold">Live Status</p>
                                    <p className="text-xs text-white/60">{status}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <Video className="w-5 h-5 text-cyan-300" />
                                <div>
                                    <p className="text-sm font-semibold">Vision</p>
                                    <p className="text-xs text-white/60">{isVideoOn ? 'Camera ready' : 'Video idle'}</p>
                                </div>
                            </div>
                            <div className="rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 border border-white/10 p-4">
                                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Hand Tracking</p>
                                <p className="text-lg font-semibold flex items-center gap-2 text-white">
                                    <Hand className="w-5 h-5 text-emerald-300" />
                                    Gesture control {isVideoOn ? 'is primed' : 'awaiting video' }
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <MessageSquare className="w-5 h-5 text-emerald-300" />
                                <div>
                                    <p className="text-sm font-semibold">Conversations</p>
                                    <p className="text-xs text-white/60">Mic {isMuted ? 'muted' : 'open'}, chat synced</p>
                                </div>
                            </div>
                            <div className="flex-1 rounded-xl bg-gradient-to-br from-emerald-500/15 to-cyan-500/5 border border-white/10 p-4">
                                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Modular Tools</p>
                                <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                                    <li>{kasaDeviceCount} Kasa devices discovered</li>
                                    <li>Real-time chat & confirmation loop</li>
                                    <li>CAD, Browser, and Printer panes</li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 sm:col-span-2 flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <Cpu className="w-5 h-5 text-indigo-300" />
                                <div>
                                    <p className="text-sm font-semibold">Operational Snapshot</p>
                                    <p className="text-xs text-white/60">Live services wired into the assistant stack</p>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-4 gap-3 text-sm">
                                <StatusPill label="Backend" value={socketConnected ? 'Connected' : 'Waiting'} active={socketConnected} />
                                <StatusPill label="Actions" value={isConnected ? 'Enabled' : 'Standby'} active={isConnected} />
                                <StatusPill label="Vision" value={isVideoOn ? 'Streaming' : 'Off'} active={isVideoOn} />
                                <StatusPill label="Security" value={isAuthenticated ? 'Clear' : 'Locked'} active={isAuthenticated} />
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed">
                                When you launch, A.D.A will reconnect to the socket backend, spin up camera processing, and open your modular windows.
                                You can always return here to review readiness before powering up.
                            </p>
                            <div className="flex items-center gap-3 text-xs text-white/50">
                                <Eye className="w-4 h-4" />
                                <span>Built with React · Tailwind · Electron · Live vision pipelines</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
