export default function CommitmentDiagram() {
  return (
    <div className="relative w-full bg-white p-12 mt-[-1px]">
      <div className="relative mx-auto max-w-4xl">
        {/* Top box */}
        <div className="mx-auto mb-0 flex max-w-md justify-center">
          <div className="rounded-full border-2 border-black px-8 py-4 text-center">
            <p className="text-lg font-semibold">To drive economic and social impact through technology.</p>
          </div>
        </div>

        {/* Vertical line */}
        <div className="mx-auto mb-4 h-12 w-0.5 bg-black" />

        {/* Commitment text */}
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold text-[#6E56CF]">COMMITMENT</h2>
        </div>

        {/* Vertical line */}
        <div className="mx-auto mb-0 h-12 w-0.5 bg-black" />

        {/* Bottom section with connecting lines */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute left-1/2 top-0 h-0.5 w-[464px] -translate-x-1/2 bg-black" />

          {/* Boxes container */}
          <div className="flex justify-between gap-8 pt-8">
            {/* Left box with vertical line */}
            <div className="relative flex-1">
              <div className="relative rounded-full border-2 border-black px-8 py-4 text-center">
                <p className="text-lg font-semibold">
                  To support the growth and stability of emerging technology cooperatives.
                </p>
                {/* Vertical line above the box */}
                <div className="absolute left-1/2 top-0 h-8 w-0.5 -translate-x-1/2 -translate-y-full bg-black" />
              </div>
            </div>

            {/* Right box with vertical line */}
            <div className="relative flex-1">
              <div className="relative rounded-full border-2 border-black px-8 py-4 text-center">
                <p className="text-lg font-semibold">To develop technology with a social and political approach.</p>
                {/* Vertical line above the box */}
                <div className="absolute left-1/2 top-0 h-8 w-0.5 -translate-x-1/2 -translate-y-full bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
