"use client"

export default function ContactHero() {
  return (
    <>
      <style>{`
        .hero {
          position: relative;
          width: 100%;
          height: 400px;
        }
        .hero-image {
          position: absolute;
          inset: 0;
          background-image: url('/placeholder.svg?height=500&width=1000');
          background-size: cover;
          background-position: center;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-title {
          color: white;
          font-size: 3.5rem;
          font-weight: 600;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 768px) {
          .hero {
            height: 300px;
          }
          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <div className="hero">
        <div className="hero-image">{/* This would be replaced with the actual bedroom image */}</div>
        <div className="hero-overlay">
          <h1 className="hero-title">Liên Hệ</h1>
        </div>
      </div>
    </>
  )
}
