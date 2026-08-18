export default function LightingProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-[#020202] min-h-screen relative overflow-hidden">
      <div
        className="absolute -top-100 laptop:-top-150 desktop:-top-150 left-1/2 -translate-x-1/2 pointer-events-none bg-no-repeat bg-center"
        style={{
          width: "2000px",
          height: "1600px",
          backgroundImage: "url(/images/lighting/green-light-bg.svg)",
          backgroundSize: "2000px auto",
        }}
      />
      <div className="w-full max-w-358 mx-auto relative z-10">{children}</div>
    </div>
  )
}
