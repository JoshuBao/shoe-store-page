const Hero2 = () => {
    return (
      <div className="diff aspect-[16/9] relative overflow-hidden">
        <div className="diff-item-1 absolute inset-0 w-1/2">
          <img alt="daisy" src="shoe.png" className="w-full h-full object-cover" />
        </div>
        <div className="diff-item-2 absolute inset-0 w-1/2 right-0">
          <img alt="daisy" src="shoeSample.png" className="w-full h-full object-cover" />
        </div>
        <div className="diff-resizer absolute inset-0 w-1/2 bg-opacity-50 cursor-col-resize"></div>
      </div>
    );
  };
  
  export default Hero2;
  