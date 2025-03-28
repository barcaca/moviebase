import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface ShowcaseCarouselProps {
  title: string
  item?: {
    name: string
    age: number
  }
  aspectRatio?: 'square' | 'poster'
}

const ShowcaseCarousel = ({
  title,
  item,
  aspectRatio,
}: ShowcaseCarouselProps) => {
  return (
    <section>
      <Carousel opts={{ dragFree: true, align: 'start' }}>
        <header className="flex items-end justify-between py-2.5 sm:py-5">
          <h2>{title}</h2>
          <div className="space-x-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </header>
        <CarouselContent className="-ml-(--carousel-padding) [--carousel-padding:--spacing(8)]">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="basis-3xs pl-(--carousel-padding) "
            >
              <div
                className='max-h-[25rem] rounded-md bg-foreground/50 data-[aspect-ratio="poster"]:aspect-[2/3] data-[aspect-ratio="square"]:aspect-square'
                data-aspect-ratio={aspectRatio}
              />
              <h3 className="mt-2 font-bold">Título do filme</h3>
              <p className="text-muted-foreground">Ano</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default ShowcaseCarousel
