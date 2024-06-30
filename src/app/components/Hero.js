const Hero = () => {
    return (
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: "url(/tenniscourt.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">10IS</h1>
            <p className="mb-5">
              10IS is a versatile brand catering to the working tennis player. Experience unmatched comfort and performance on the court and in the office.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  