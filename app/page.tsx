import HeroSection from '@/components/hero-section'
import ShowcaseCarousel from '@/components/showcase-carousel'
import { getTheatres } from '@/data/movies'
import { getPopularMonth } from '@/data/populars'
import { getTrending } from '@/data/trending'

export default async function Home() {
  const [trendings, popular, theatres] = await Promise.all([
    getTrending(),
    getPopularMonth(),
    getTheatres(),
  ])

  return (
    <div className="mx-auto ">
      <HeroSection
        title="Bem-vindo ao"
        subtitle="Moviebase"
        description="Descubra filmes e séries de diversos gêneros, de clássicos atemporais a
          lançamentos imperdíveis. Uma experiência completa e prática para quem
          ama cinema e séries."
      />
      {/* On Theatres */}
      <ShowcaseCarousel
        items={theatres}
        title="No Cinema"
        aspectRatio="poster"
      />
      {/* Trendings */}
      <ShowcaseCarousel
        items={trendings}
        title="Destaques"
        aspectRatio="poster"
      />
      {/* Popular */}
      <ShowcaseCarousel
        items={popular}
        title="Popular do mês"
        aspectRatio="poster"
      />
    </div>
  )
}
