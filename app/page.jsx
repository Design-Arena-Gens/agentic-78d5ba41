export default function Page() {
  return (
    <main>
      <div className="scene-wrapper">
        <div className="scene-canvas">
          <div className="scene-title">
            <h1>Sanctuary of Kailash</h1>
            <p>
              A pilgrim finds solace at the sacred summit, resting at the feet of Lord Shiva.
              The stillness of the Himalayas cradles the encounter while snow peaks reflect
              celestial hues.
            </p>
          </div>
          <div className="canvas-elements" aria-hidden>
            <div className="sun" />
            <div className="clouds">
              <div className="cloud" />
              <div className="cloud" />
              <div className="cloud" />
            </div>
            <div className="mountain-range">
              <div className="mountain" />
              <div className="mountain mountain--kailash" />
              <div className="mountain" />
            </div>
            <div className="divine-aura" />
            <div className="shiva-silhouette" />
            <div className="trident">
              <div className="prong" />
            </div>
            <div className="pilgrim" />
            <div className="pilgrim-shadow" />
          </div>
          <div className="scripture-band" aria-hidden>
            <span>ॐ नमः शिवाय</span>
            <span>Mount Kailash · Eternal Harmony</span>
          </div>
        </div>
        <div className="caption">
          <h2>In the Presence of the Auspicious One</h2>
          <p>
            The mystic stillness of Kailash whispers a timeless story of devotion. The seeker
            rests in reverence, cradled by the Himalayas, while the divine aura of Mahadeva
            illuminates the snow-laden throne. Every breath is a mantra, every heartbeat a
            step closer to transcendence.
          </p>
          <div className="signature">— Pilgrim&apos;s Reverie</div>
        </div>
      </div>
    </main>
  );
}
