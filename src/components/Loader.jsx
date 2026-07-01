import logo from "../assets/logo.png";

function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-glow"></div>

      <div className="shutter">
        {[...Array(8)].map((_, index) => (
          <span key={index}></span> 
        ))}
      </div>

      <img src={logo} loading="eager"
decoding="async" alt="SP Edits" className="loader-logo" />

      <h1>SP EDITS</h1>
      <p>Photography • Films • Creative Storytelling</p>

      <div className="loader-line">
        <span></span>
      </div>
    </div>
  );
}

export default Loader;