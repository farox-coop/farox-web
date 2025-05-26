interface FilterButtonProps {
  filter: string
  title: string
  isActive: boolean
  setFilterState: (filter: string) => void
}

export default function FilterButton({ filter, title, isActive, setFilterState }: FilterButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-full font-medium text-[18px] laptop:text-xl desktop:text-[27px] px-[18px] py-[6px] border desktop:px-8 desktop:py-3 transition-all duration-300 ease-in-out text-black border-black hover:text-secondary hover:bg-black hover:border-black ${isActive ? "text-secondary bg-black border-black" : "bg-transparent"}`}
      onClick={() => setFilterState(filter)}
    >
      {title}
    </button>
  )
}
