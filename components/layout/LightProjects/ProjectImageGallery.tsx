"use client"
import Image from "next/image"

interface ProjectImageGalleryProps {
  images: string | string[] | undefined
  title: string
}

const ROW_SIZE = 3
const BORDER_GRADIENT = "linear-gradient(to right, #F1F1F1 0%, #28FFE3 100%)"

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = []
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size))
  }
  return rows
}

function GalleryImageBox({
  src,
  alt,
  sizes,
  className,
  priority,
}: {
  src: string
  alt: string
  sizes: string
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`relative border border-solid ${className ?? ""}`} style={{ borderImage: `${BORDER_GRADIENT} 1` }}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-center" />
    </div>
  )
}

export default function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const list = (Array.isArray(images) ? images : images ? [images] : []).filter(Boolean)

  if (list.length === 0) {
    return null
  }

  const seen = new Map<string, number>()
  const keys = list.map((src) => {
    const occurrence = seen.get(src) ?? 0
    seen.set(src, occurrence + 1)
    return `${src}#${occurrence}`
  })

  const rows = chunk(list, ROW_SIZE)
  let imageIndex = 0

  return (
    <div className="flex flex-col w-full max-w-7xl gap-12">
      {rows.map((row) => {
        const startIndex = imageIndex
        imageIndex += row.length
        const isFirstRow = startIndex === 0

        return (
          <div key={keys[startIndex]} className="w-full">
            {row.length === 1 ? (
              <GalleryImageBox
                src={row[0]}
                alt={`${title} ${startIndex + 1}`}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="w-full h-70 laptop:h-93.5"
                priority={isFirstRow}
              />
            ) : row.length === 2 ? (
              <div className="flex flex-col gap-6 laptop:flex-row laptop:gap-10 laptop:justify-center w-full">
                {row.map((img, i) => (
                  <GalleryImageBox
                    key={keys[startIndex + i]}
                    src={img}
                    alt={`${title} ${startIndex + i + 1}`}
                    sizes="(max-width: 768px) 100vw, 525px"
                    className="w-full laptop:w-131.25 h-70 laptop:h-93.5"
                    priority={isFirstRow}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-6 laptop:flex-row w-full">
                {row.map((img, i) => (
                  <GalleryImageBox
                    key={keys[startIndex + i]}
                    src={img}
                    alt={`${title} ${startIndex + i + 1}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 410px"
                    className="w-full laptop:flex-1 h-70 laptop:h-93.5"
                    priority={isFirstRow}
                  />
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
