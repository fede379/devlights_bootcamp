export function LandingSection({ children, background }) {
  return (
    <section className={`LandingContainer LandingContainer-${background}`}>
      {children}
    </section>
  );
}