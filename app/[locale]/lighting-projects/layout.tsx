export default function LightingProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-[#020202] min-h-screen relative overflow-hidden">
      <div
        className="absolute -top-200 left-1/2 -translate-x-1/2 pointer-events-none bg-no-repeat bg-center"
        style={{
          width: "2500px",
          height: "2000px",
          backgroundImage: "url(/images/lighting/green-light-bg.svg)",
          backgroundSize: "2500px auto",
        }}
      />
      <div className="w-full max-w-358 mx-auto relative z-10">{children}</div>
    </div>
  )
}
