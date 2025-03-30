import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { MediaItem } from '@/types/tmdb'
import { FilmIcon, TvIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

type AspectRatio = 'square' | 'poster'

interface ShowcaseCarouselProps {
  title: string
  items?: MediaItem[]
  aspectRatio?: AspectRatio
}

const ShowcaseCarousel = ({
  title,
  items,
  aspectRatio = 'poster',
}: ShowcaseCarouselProps) => {
  if (!items?.length) return null

  return (
    <section>
      <Carousel opts={{ dragFree: true, align: 'start' }}>
        <CarouselHeader title={title} />
        <CarouselContent className="-ml-(--carousel-padding) [--carousel-padding:--spacing(8)]">
          {items.map(item => (
            <MediaCard key={item.id} item={item} aspectRatio={aspectRatio} />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

const CarouselHeader = ({ title }: { title: string }) => (
  <header className="flex items-end justify-between py-2.5 sm:py-5">
    <h2>{title}</h2>
    <div className="space-x-2">
      <CarouselPrevious className="static translate-y-0" />
      <CarouselNext className="static translate-y-0" />
    </div>
  </header>
)

interface MediaPosterProps {
  title: string
  path: string
  aspectRatio: AspectRatio
}

const MediaPoster = ({ title, path, aspectRatio }: MediaPosterProps) => (
  <Image
    src={`https://image.tmdb.org/t/p/original${path}`}
    alt={`${title} poster`}
    width={256}
    height={336}
    className={`h-full max-h-[21rem] rounded-md bg-foreground/50 ${
      aspectRatio === 'poster' ? 'aspect-[2/3]' : 'aspect-square'
    }`}
  />
)

interface MediaCardProps {
  item: MediaItem
  aspectRatio: AspectRatio
}

const MediaCard = ({ item, aspectRatio }: MediaCardProps) => {
  const title = item.media_type === 'movie' ? item.title : item.name
  const date =
    item.media_type === 'movie' ? item.release_date : item.first_air_date

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString()

  return (
    <CarouselItem className="basis-3xs pl-(--carousel-padding)">
      <div className="relative h-full max-h-[21rem]">
        <MediaPoster
          title={title}
          path={item.poster_path}
          aspectRatio={aspectRatio}
        />
        <span className="absolute top-2 left-2 rounded-full bg-background/95 p-0.5">
          {item.media_type === 'movie' ? (
            <>
              <span className="sr-only">Movie</span>
              <FilmIcon className="size-4" aria-hidden="true" />
            </>
          ) : (
            <>
              <span className="sr-only">TV Show</span>
              <TvIcon className="size-4" aria-hidden="true" />
            </>
          )}
        </span>
      </div>
      <h3 className="mt-2 line-clamp-1 font-bold">{title}</h3>
      <p className="text-muted-foreground">{formatDate(date)}</p>
    </CarouselItem>
  )
}

export default ShowcaseCarousel
