export default function ProductCard({ name, price, description, specs, icon, quantity, onAdd, onRemove }) {
  // Simple check to match icons conceptually
  const renderIcon = () => {
    switch (icon) {
      case "tlr": return "📷";
      case "rangefinder": return "📷";
      case "instant": return "📸";
      case "lens": return "🔍";
      case "film": return "🎞️";
      default: return "📦";
    }
  };

  return (
    <div className="bg-[#1e1d16] border border-[#3a3729] rounded-sm p-6 flex flex-col justify-between">
      <div>
        {/* Top bar with icon and action button */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-[#a39c88] text-lg">{renderIcon()}</span>
          
          {quantity === 0 ? (
            <button 
              onClick={onAdd}
              className="w-8 h-8 rounded-full border border-[#3a3729] flex items-center justify-center text-[#a39c88] hover:text-[#f2ede1] hover:border-[#c9a227] transition-all cursor-pointer font-['IBM_Plex_Mono'] text-sm"
            >
              +
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-[#26241a] border border-[#3a3729] rounded-sm px-2 py-1 font-['IBM_Plex_Mono'] text-xs text-[#f2ede1]">
              <button onClick={onRemove} className="text-[#a39c88] hover:text-red-400 px-1 cursor-pointer">-</button>
              <span className="text-[#c9a227] px-1">{quantity}</span>
              <button onClick={onAdd} className="text-[#a39c88] hover:text-[#f2ede1] px-1 cursor-pointer">+</button>
            </div>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="font-['Archivo'] text-lg font-medium text-[#a39c88] mb-2">
          {name}
        </h3>
        <p className="font-['Archivo'] text-sm text-[#a39c88] leading-relaxed mb-6 min-h-[64px]">
          {description}
        </p>

        {/* Technical Grid Divider */}
        <div className="border-t border-[#3a3729] my-4"></div>

        {/* Specs Metadata Grid */}
        <div className="grid grid-cols-3 gap-2 font-['IBM_Plex_Mono'] text-[10px] tracking-wider uppercase mb-6">
          <div>
            <span className="block text-[#a39c88] mb-1 font-semibold">Aperture</span>
            <span className="block text-[#a39c88] lowercase">{specs.aperture}</span>
          </div>
          <div>
            <span className="block text-[#a39c88] mb-1 font-semibold">Focal</span>
            <span className="block text-[#a39c88] lowercase">{specs.focal}</span>
          </div>
          <div>
            <span className="block text-[#a39c88] mb-1 font-semibold">Weight</span>
            <span className="block text-[#a39c88] lowercase">{specs.weight}</span>
          </div>
        </div>
      </div>

      {/* Pricing Display */}
      <div className="font-['Archivo'] text-xl text-[#a39c88] font-medium tracking-tight">
        ${price}
      </div>
    </div>
  );
}