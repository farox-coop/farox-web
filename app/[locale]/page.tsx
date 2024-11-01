'use client';
import { useState, useEffect } from 'react';
import CardsSection from '@/components/UI/CardsSection/CardsSection';
import Construction from '@/components/Layout/Construction/Construction';
import ContactSection from '@/components/Layout/ContactSection/ContactSection';
import HomeSection from '@/components/Layout/HomeSection/HomeSection';
import AboutSection from '@/components/Layout/AboutSection/AboutSection';
import XSVG from '@/components/SVG/XSVG';
import Header from '@/components/Layout/Header/Header';
import IntroModal from '@/components/Features/IntroModal/IntroModal';

export default function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [imageViewed, setImageViewed] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); // Controls the fade-out animation

  useEffect(() => {
    const hasViewedImage = localStorage.getItem('hasViewedImage');

    if (!hasViewedImage) {
      setModalOpen(true); // Show modal if not viewed

      // Start fade-out after 3 seconds
      const timer = setTimeout(() => {
        setIsFadingOut(true); // Start fade-out
      }, 3000);

      // After 3.5 seconds, close the modal and save to localStorage
      const closeTimer = setTimeout(() => {
        setModalOpen(false);
        localStorage.setItem('hasViewedImage', 'true');
        setImageViewed(true); // Update state to prevent re-rendering
      }, 3500);

      // Clean up timers on unmount
      return () => {
        clearTimeout(timer);
        clearTimeout(closeTimer);
      };
    } else {
      setImageViewed(true); // If viewed, mark as such
    }
  }, []);

  // Render the modal if not viewed and not fading out
  if (isModalOpen && !imageViewed && !isFadingOut) {
    return (
      <div
        className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-[2000ms] ease-in-out ${
          isFadingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <IntroModal />
      </div>
    );
  } else if (imageViewed && !isModalOpen) {
    // Render the main content if the modal is closed or fading out
    return (
      <main
        className="flex justify-center items-center w-full h-full bg-cover bg-no-repeat bg-center px-8"
        style={{ backgroundImage: "url('/assets/1920.webp')" }}
      >
        <section className="flex flex-col w-full max-w-[1920px]">
          <Header />
          <HomeSection />
          <Construction />
          <CardsSection />
          <section className="flex justify-center items-center w-full my-40 sm:my-64">
            <div className="size-[73px]">
              <XSVG />
            </div>
          </section>
          <AboutSection />
          <ContactSection />
        </section>
      </main>
    );
  }
}
