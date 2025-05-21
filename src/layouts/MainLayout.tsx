import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect, useState, useRef } from "react";
import clsx from 'clsx';

const MainLayout = () => {
  const [isSticky, setIsSticky] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsSticky(!entry.isIntersecting);
      });
    }, options);

    if (headerRef.current) {
      observerRef.current.observe(headerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="relative container w-screen max-w-8xl min-w-[300px] shadow-lg bgColor">
        <div ref={headerRef} className="h-0" />
        <div
          className={clsx(
            'fixed w-full top-0 z-50',
            'transition-[background-color,backdrop-filter] duration-300 ease-in-out',
            isSticky 
              ? 'bg-white/95 shadow-md backdrop-blur-md' 
              : 'bg-transparent'
          )}
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'background-color, backdrop-filter'
          }}
        >
          <Header />
        </div>

        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;