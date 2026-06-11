import React from "react";

interface SlideLayoutProps {
  children: React.ReactNode;
  bgImage?: string;
  darkOverlay?: boolean;
  className?: string;
}

export function SlideLayout({ children, bgImage, darkOverlay = true, className = "" }: SlideLayoutProps) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        background: bgImage ? undefined : "linear-gradient(135deg, #0a0f2e 0%, #0d1b4b 50%, #0a0f2e 100%)",
      }}
    >
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      {bgImage && darkOverlay && (
        <div className="absolute inset-0" style={{ background: "rgba(5,10,35,0.82)" }} />
      )}
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(100,160,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(100,160,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

export function GoldAccent({ className = "" }: { className?: string }) {
  return <div className={`bg-amber-400 ${className}`} />;
}

export function SlideNumber({ num, total }: { num: number; total: number }) {
  return (
    <div className="absolute bottom-4 right-6 text-blue-400 opacity-60 text-sm font-mono">
      {num} / {total}
    </div>
  );
}

export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-400 border border-amber-400 border-opacity-50 rounded mb-4">
      {children}
    </span>
  );
}

export function FlowArrow() {
  return <span className="text-amber-400 font-bold mx-2">→</span>;
}

interface HighlightCardProps {
  icon: string;
  title: string;
  desc: string;
}

export function HighlightCard({ icon, title, desc }: HighlightCardProps) {
  return (
    <div className="rounded-lg p-4 border border-blue-700 border-opacity-50"
      style={{ background: "rgba(15,30,80,0.7)" }}>
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-amber-400 font-bold text-sm mb-1">{title}</div>
      <div className="text-blue-200 text-xs leading-relaxed">{desc}</div>
    </div>
  );
}

export function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-amber-400 border-opacity-50 ${className}`}
      style={{ background: "rgba(30,20,5,0.5)" }}>
      <div className="text-amber-400 text-3xl mb-2">🎮</div>
      <div className="text-amber-400 text-xs text-center opacity-70 px-2">{label}</div>
    </div>
  );
}
