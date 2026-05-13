import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/dashboard/HeroSection';
import { TechStrip } from '@/components/dashboard/TechStrip';
import { AboutSection } from '@/components/dashboard/AboutSection';
import { FeaturedProjects } from '@/components/dashboard/FeaturedProjects';
import { GithubActivity } from '@/components/dashboard/GithubActivity';
import { ContactFooter } from '@/components/dashboard/ContactFooter';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full min-h-screen">
        <HeroSection />
        <TechStrip />
        <AboutSection />
        <FeaturedProjects />
        <GithubActivity />
        <ContactFooter />
      </main>
    </>
  );
}
