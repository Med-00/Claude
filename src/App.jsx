import Footer from './components/layout/Footer.jsx';
import Header from './components/layout/Header.jsx';
import MobileActionBar from './components/layout/MobileActionBar.jsx';

import About from './components/sections/About.jsx';
import AppPromotion from './components/sections/AppPromotion.jsx';
import AppointmentBooking from './components/sections/AppointmentBooking.jsx';
import Blog from './components/sections/Blog.jsx';
import EmergencySupport from './components/sections/EmergencySupport.jsx';
import Hero from './components/sections/Hero.jsx';
import InsurancePartners from './components/sections/InsurancePartners.jsx';
import Newsletter from './components/sections/Newsletter.jsx';
import PatientStories from './components/sections/PatientStories.jsx';
import Pricing from './components/sections/Pricing.jsx';
import Services from './components/sections/Services.jsx';
import Specialists from './components/sections/Specialists.jsx';
import Statistics from './components/sections/Statistics.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import WhyChooseUs from './components/sections/WhyChooseUs.jsx';

/**
 * Meridian Health — landing page.
 *
 * One page, one vertical scroll, navbar to footer. Sections run sequentially in
 * document order; nothing is split into parallel columns.
 *
 * The reference image's left/right composition is expressed *inside* sections
 * — the hero's copy beside its portrait, the about band's text beside its
 * image — not as a division of the page itself.
 *
 * Each section owns its full-bleed background so the coloured bands (navy
 * appointment, emerald statistics, navy app promo, emerald newsletter) run edge
 * to edge and punctuate the white sections between them. Horizontal content
 * width is set once, by `.band` in index.css, so every section aligns to the
 * same measure.
 */
export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div id="top" />

      <Header />

      <main id="main">
        <Hero />
        <AppointmentBooking />
        <Services />
        <About />
        <Specialists />
        <Statistics />
        <WhyChooseUs />
        <Pricing />
        <PatientStories />
        <Testimonials />
        <EmergencySupport />
        <Blog />
        <AppPromotion />
        <InsurancePartners />
        <Newsletter />
      </main>

      <Footer />

      <MobileActionBar />
    </>
  );
}
