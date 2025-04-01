interface HeroSectionProps {
  title: string
  subtitle?: string
  description: string
}

const HeroSection = ({ title, subtitle, description }: HeroSectionProps) => {
  return (
    <section className="mx-auto flex h-[13rem] max-w-2xl flex-col justify-center space-y-3 pb-6 text-center lg:h-[30rem]">
      <h1 className="mb-4 flex flex-col font-bold text-2xl text-foreground sm:text-5xl lg:text-7xl ">
        {title} {subtitle && <span className="text-primary">{subtitle}</span>}
      </h1>
      <p className="text-muted-foreground text-sm sm:text-lg lg:text-2xl">
        {description}
      </p>
    </section>
  )
}

export default HeroSection
