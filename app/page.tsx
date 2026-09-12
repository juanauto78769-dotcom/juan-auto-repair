import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import RecentWork from '@/components/RecentWork';
import MeetJuan from '@/components/MeetJuan';
import Faq from '@/components/Faq';
import BookingSection from '@/components/BookingSection';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';
import MobileBookingBar from '@/components/MobileBookingBar';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <RecentWork />
        <MeetJuan />
        <Faq />
        <BookingSection />
        <Visit />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}
