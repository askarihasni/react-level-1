import { useState } from "react";
import ProductCard from "./components/ProductCard";

export default function App() {
  const [cart, setCart] = useState({});

  const addItem = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const removeItem = (id) =>
    setCart((c) => {
      const next = { ...c };
      delete next[id];
      return next;
    });

  const kitCount = Object.values(cart).reduce((sum, q) => sum + q, 0);

  return (
    <div className="bg-[#14140f] [background-image:radial-gradient(circle_at_1px_1px,rgba(242,237,225,0.035)_1px,transparent_0)] [background-size:3px_3px] min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-[#3a3729] pb-8">
          <div>
            <p className="font-['IBM_Plex_Mono'] text-xs text-[#c9a227] tracking-[0.2em] uppercase mb-3">
              Est. for field work
            </p>
            <h1 className="font-['Fraunces'] text-5xl sm:text-6xl text-[#f2ede1] italic">
              Aperture Index
            </h1>
            <p className="font-['Archivo'] text-[#a39c88] mt-3 max-w-md text-sm">
              Analog cameras, lenses, and film — catalogued the way a technician
              would, not the way a shop window would.
            </p>
          </div>

          <div className="bg-[#1e1d16] border border-[#3a3729] rounded-sm px-5 py-4 min-w-[180px]">
            <p className="font-['IBM_Plex_Mono'] text-[11px] text-[#a39c88] uppercase tracking-wide">
              Your kit
            </p>
            <p className="font-['Fraunces'] text-4xl text-[#f2ede1] mt-1">
              {kitCount}
            </p>
          </div>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <ProductCard
            name="The Rolleiflex Standard"
            price={428}
            description="A twin-lens medium format body with a waist-level finder. Heavy, deliberate, and built to outlast the person using it."
            specs={{ aperture: "f/3.5", focal: "75mm", weight: "1.02kg" }}
            icon="tlr"
            quantity={cart[1] || 0}
            onAdd={() => addItem(1)}
            onRemove={() => removeItem(1)}
          />

          <ProductCard
            name="Contax Field Model"
            price={610}
            description="A rangefinder built for reportage. Fast to focus, quiet shutter, small enough to disappear into a coat pocket."
            specs={{ aperture: "f/2.0", focal: "40mm", weight: "0.58kg" }}
            icon="rangefinder"
            quantity={cart[2] || 0}
            onAdd={() => addItem(2)}
            onRemove={() => removeItem(2)}
          />

          <ProductCard
            name="The Instant One"
            price={89}
            description="Fixed focus, fixed aperture, one job: point it and pull the print. Integral film ejects in under a second."
            specs={{ aperture: "f/8 fixed", focal: "38mm", weight: "0.42kg" }}
            icon="instant"
            quantity={cart[3] || 0}
            onAdd={() => addItem(3)}
            onRemove={() => removeItem(3)}
          />

          <ProductCard
            name="50mm Standard Prime"
            price={245}
            description="The lens most photographers reach for first. Close to how the eye actually sees, and forgiving wide open."
            specs={{ aperture: "f/1.8", focal: "50mm", weight: "0.19kg" }}
            icon="lens"
            quantity={cart[4] || 0}
            onAdd={() => addItem(4)}
            onRemove={() => removeItem(4)}
          />

          <ProductCard
            name="28mm Wide-Field"
            price={310}
            description="Room to breathe. Built for interiors, street corners, and anywhere the subject won't back up for you."
            specs={{ aperture: "f/2.8", focal: "28mm", weight: "0.24kg" }}
            icon="lens"
            quantity={cart[5] || 0}
            onAdd={() => addItem(5)}
            onRemove={() => removeItem(5)}
          />

          <ProductCard
            name="35mm Black & White, 24exp"
            price={9}
            description="A classic panchromatic stock with deep blacks and a fine grain that holds up printed large."
            specs={{ aperture: "ISO 400", focal: "24 exp.", weight: "35mm" }}
            icon="film"
            quantity={cart[6] || 0}
            onAdd={() => addItem(6)}
            onRemove={() => removeItem(6)}
          />

          <ProductCard
            name="Waxed Canvas Strap"
            price={38}
            description="Cotton canvas, hand-waxed, with a brass slide. Softens with wear instead of fraying."
            specs={{ aperture: "—", focal: "120cm", weight: "0.08kg" }}
            icon="strap"
            quantity={cart[7] || 0}
            onAdd={() => addItem(7)}
            onRemove={() => removeItem(7)}
          />

          <ProductCard
            name="Leather Half-Case"
            price={54}
            description="A base of vegetable-tanned leather that guards the body without covering the controls."
            specs={{ aperture: "—", focal: "Universal", weight: "0.15kg" }}
            icon="case"
            quantity={cart[8] || 0}
            onAdd={() => addItem(8)}
            onRemove={() => removeItem(8)}
          />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-[#3a3729] font-['IBM_Plex_Mono'] text-[11px] text-[#a39c88] flex justify-between">
          <span>8 items catalogued</span>
          <span>Aperture Index — field edition</span>
        </footer>
      </div>
    </div>
  );
}
