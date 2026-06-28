import './styles/base.scss';
import './styles/sections/portfolio-top.scss';
import Heading from './components/sections/Heading';
import WorksGrid from './components/sections/WorksGrid';

export default function App() {
  return (
    <main className="portfolio-top">
      <div className="portfolio-top__display">
        <div className="portfolio-top__slide">
          <div className="portfolio-top__inner">
            <Heading />
            <WorksGrid />
          </div>
        </div>
      </div>
    </main>
  );
}
