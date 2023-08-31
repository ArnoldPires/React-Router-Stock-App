import './about.css';

export default function About() {
  return (
    <div className="about">
        <h2>Presenting the Stonks Guy 📈: Our resident financial wizard.</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/01Wpsc5-jxw" // Corrected embed URL
          title="YouTube Video"
          allow="autoplay; encrypted-media"
          allowFullScreen>
        </iframe>
        <div className='aboutText'>
          <p>The guru of meme stock mastery with a grin that defies both gravity and logic.</p>
          <p>A meme stock virtuoso, he's turned pixelated stonks into pixelated mansions, all while sipping on his trusty digital coffee. </p>
          <p>When he's not outfoxing market trends, he's imparting the wisdom of compound interests to squirrels or hosting bingo nights for the titans of Wall Street.</p>
          <p>His motto? "Buy low, sell high, and always carry an umbrella in a stock market storm!"</p>
          <p>Whether stocks are soaring, plummeting, or doing the cha-cha, Stonks Guy's here to remind us that sometimes, all you need to do is stonk it till you make it! 🚀📈</p>
        </div>
    </div>
  );
}
