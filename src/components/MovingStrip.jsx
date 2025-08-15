export default function MovingString() {
  return (
    <div className="overflow-hidden w-full bg-black">
      <div className="marquee">
        {/* First set - fill full screen width */}
        <img src="/Developer.png" alt="Moving String" className="h-20 flex-shrink-0" />
        <img src="/Developer.png" alt="Moving String" className="h-20 flex-shrink-0" />
        <img src="/Developer.png" alt="Moving String" className="h-20 flex-shrink-0" />
        
        {/* Duplicate set for seamless loop */}
        <img src="/Developer.png" alt="Moving String" className="h-20 flex-shrink-0" />
        <img src="/Developer.png" alt="Moving String" className="h-20 flex-shrink-0" />
        <img src="/Developer.png" alt="Moving String" className="h-20 flex-shrink-0" />
      </div>
    </div>
  );
}
