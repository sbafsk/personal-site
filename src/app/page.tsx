import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { EducationSection } from './components/sections/EducationSection'
import { LanguagesSection } from './components/sections/LanguagesSection'
import { PhotosSection } from './components/sections/PhotosSection'
import { ContactSection } from './components/sections/ContactSection'
import { CallToActionSection } from './components/sections/CallToActionSection'
import { CVDownloadSection } from './components/sections/CVDownloadSection'
import { Footer } from './components/ui/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <LanguagesSection />
      <PhotosSection />
      <ContactSection />
      <CVDownloadSection />
      <CallToActionSection />
      <Footer />
    </main>
  )
}
