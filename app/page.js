import { Announcement , Header , Hero } from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <header>
        <Announcement />
      </header>

      <Header headline={"Introduce Your Child to the World of Music"} subheadline={"Unlock Their Potential with Our Tongue Drum"} /> 
      <Hero />

    </main>
  );
}
