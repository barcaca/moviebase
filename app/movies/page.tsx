import HeroSection from '@/components/hero-section'
import ShowcaseCarousel from '@/components/showcase-carousel'
import {
  getPopularMovies,
  getTheatres,
  getTopMovies,
  getUpcomingMovies,
} from '@/data/movies'

export default async function MoviesPage() {
  const [theatres, popular, upcoming, top] = await Promise.all([
    getTheatres(),
    getPopularMovies(),
    getUpcomingMovies(),
    getTopMovies(),
  ])
  return (
    <div className="mx-auto">
      <HeroSection
        title="O mundo dos filmes"
        description="Explore o universo do cinema: dos clássicos cult aos lançamentos mais aguardados.  
    Tudo sobre seus filmes favoritos, com curadoria para verdadeiros amantes da sétima arte."
      />
      <ShowcaseCarousel
        items={theatres}
        title="No Cinema"
        aspectRatio="poster"
      />
      <ShowcaseCarousel
        items={popular}
        title="Populares"
        aspectRatio="poster"
      />
      <ShowcaseCarousel
        items={upcoming}
        title="Em Breve"
        aspectRatio="poster"
      />
      <ShowcaseCarousel items={top} title="Top 20" aspectRatio="poster" />
    </div>
  )
}
