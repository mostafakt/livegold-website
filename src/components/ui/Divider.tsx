const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={`max-w-6xl w-full h-0 origin-top-left opacity-40 outline outline-1 outline-offset-[-0.5px] outline-primary ${className}`}
    ></div>
  );
};

export default Divider;
