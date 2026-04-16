import Hero from "@/components/Hero"

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0 z-0 bg-macro-grid bg-grid-mask pointer-events-none" />
      <div className="z-10 w-full flex justify-center items-center">
        <Hero />
      </div>
    </div>
  )
}
