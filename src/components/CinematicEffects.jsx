function CinematicEffects() {
  return (
    <>
      <div className="scroll-progress"></div>

      <div className="site-film-grain"></div>

      <div className="gold-particles">
        {[...Array(45)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </>
  );
}

export default CinematicEffects;