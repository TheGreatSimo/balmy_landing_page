import { Hero } from "@/components";
import { Announcement , Navbar } from "@/components";


export default function Home() {
  return (
    <main>
      <headr>
        <Announcement />
        <Navbar />
      </headr>

      <Hero />

    </main>
  );
}
