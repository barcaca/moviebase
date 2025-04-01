import HeroSection from '@/components/hero-section'
import ShowcaseCarousel from '@/components/showcase-carousel'
import {
  getAiringToday,
  getPopularTvSeries,
  getTopTvSeries,
  getUpcomingTvSeries,
} from '@/data/tvseries'

export default async function TvSeriesPage() {
  const [airing, popular, upcoming, top] = await Promise.all([
    getAiringToday(),
    getPopularTvSeries(),
    getUpcomingTvSeries(),
    getTopTvSeries(),
  ])
  return (
    <div className="mx-auto">
      <HeroSection
        title="Séries para maratonar"
        description="Das sagas mais longas aos sucessos do momento - tudo para você assistir sem parar."
      />
      <ShowcaseCarousel items={airing} title="Agora" aspectRatio="poster" />
      <ShowcaseCarousel
        items={popular}
        title="Populares"
        aspectRatio="poster"
      />
      <ShowcaseCarousel items={upcoming} title="No ar" aspectRatio="poster" />
      <ShowcaseCarousel items={top} title="Top 20" aspectRatio="poster" />
    </div>
  )
}
