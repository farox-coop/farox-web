export default function LightingProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-[#020202] min-h-screen">
      <div className="w-full max-w-[1432px] mx-auto">{children}</div>
    </div>
  )
}
