export default function MovingString() {
  return (
    <div className="overflow-hidden w-full bg-black">
      <div className="marquee inline-flex items-center">
        {/* First set */}
        <img
          src="/Developer.png"
          alt="Moving String"
          className="h-16 sm:h-20 w-auto object-contain"
        />
        <img
          src="/Developer.png"
          alt="Moving String"
          className="h-16 sm:h-20 w-auto object-contain"
        />
        <img
          src="/Developer.png"
          alt="Moving String"
          className="h-16 sm:h-20 w-auto object-contain"
        />

        {/* Duplicate set */}
        <img
          src="/Developer.png"
          alt="Moving String"
          className="h-16 sm:h-20 w-auto object-contain"
        />
        <img
          src="/Developer.png"
          alt="Moving String"
          className="h-16 sm:h-20 w-auto object-contain"
        />
        <img
          src="/Developer.png"
          alt="Moving String"
          className="h-16 sm:h-20 w-auto object-contain"
        />
      </div>
    </div>
  );
}
