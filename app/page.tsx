import HeroSection from '@/components/hero-section'
import ShowcaseCarousel from '@/components/showcase-carousel'
import { getPopularMonth } from '@/data/populars'
import { getTheatres } from '@/data/theatres'
import { getTrending } from '@/data/trending'

export default async function Home() {
  const trendings = await getTrending()
  const popular = await getPopularMonth()
  const theatres = await getTheatres()

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
      <ShowcaseCarousel title="Recomendados" aspectRatio="square" />
    </div>
  )
}
