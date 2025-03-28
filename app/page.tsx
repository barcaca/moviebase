import HeroSection from '@/components/hero-section'
import ShowcaseCarousel from '@/components/showcase-carousel'

export default function Home() {
  return (
    <div className="mx-auto ">
      <HeroSection
        title="Bem-vindo ao"
        subtitle="Moviebase"
        description="Descubra filmes e séries de diversos gêneros, de clássicos atemporais a
          lançamentos imperdíveis. Uma experiência completa e prática para quem
          ama cinema e séries."
      />

      <ShowcaseCarousel title="Destaques" aspectRatio="poster" />
      <ShowcaseCarousel title="Novidades" aspectRatio="square" />
      <ShowcaseCarousel title="Popular" aspectRatio="poster" />
      <ShowcaseCarousel title="Recomendados" aspectRatio="square" />

      <footer>{/* Footer */}</footer>
    </div>
  )
}
