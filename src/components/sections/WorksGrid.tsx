import '../../styles/sections/works-grid.scss';
import '../../styles/parts/work-card.scss';
import { ViewBtn } from '../parts/ContactBtn';
import arrowImg from '../../assets/arrow.svg';
import workImg1 from '../../assets/placeholder-work.svg';
import workImg2 from '../../assets/placeholder-work.svg';
import workImg3 from '../../assets/placeholder-wide.svg';
import workImg4 from '../../assets/placeholder-tall.svg';

interface WorkMeta {
  number: string;
  imageSrc: string;
  title: string;
  category: string;
  goal: string;
}

const works: WorkMeta[] = [
  {
    number: '01',
    imageSrc: workImg1,
    title: 'コーポレートサイト',
    category: 'WEB / UI·UX',
    goal: '求人のお問い合わせを増やす',
  },
  {
    number: '02',
    imageSrc: workImg2,
    title: 'コーポレートサイト',
    category: 'WEB / UI·UX',
    goal: '求人のお問い合わせを増やす',
  },
  {
    number: '03',
    imageSrc: workImg3,
    title: 'コーポレートサイト',
    category: 'WEB / UI·UX',
    goal: '求人のお問い合わせを増やす',
  },
];

function WorkMetaBlock({ title, category, goal }: Pick<WorkMeta, 'title' | 'category' | 'goal'>) {
  return (
    <div className="work-card__info">
      <p className="work-card__title">{title}</p>
      <p className="work-card__category">{category}</p>
      <div className="work-card__goal">
        <div className="work-card__arrow">
          <div className="work-card__arrow-inner">
            <img src={arrowImg} alt="" aria-hidden />
          </div>
        </div>
        <p className="work-card__goal-text">{goal}</p>
      </div>
    </div>
  );
}

export default function WorksGrid() {
  const [work1, work2, work3] = works;

  return (
    <>
      {/* Center 3-card grid */}
      <div className="works-grid" aria-label="制作実績">
        {/* Top row: work1, work2 */}
        <div className="works-grid__row">
          {/* Work 01 */}
          <div className="works-grid__col">
            <div className="work-card__image-wrap" style={{ height: '407px' }}>
              <img src={work1.imageSrc} alt={work1.title} />
              <span
                className="work-card__number"
                style={{ left: '295.89px', transform: 'translateX(-50%) translateY(100%)' }}
              >
                {work1.number}
              </span>
            </div>
            <div className="work-card__meta">
              <WorkMetaBlock title={work1.title} category={work1.category} goal={work1.goal} />
            </div>
          </div>

          {/* Work 02 */}
          <div className="works-grid__col">
            <div className="work-card__image-wrap" style={{ height: '407px' }}>
              <img src={work2.imageSrc} alt={work2.title} />
              <span
                className="work-card__number"
                style={{ right: '43.89px', transform: 'translateX(50%) translateY(100%)' }}
              >
                {work2.number}
              </span>
            </div>
            <div className="work-card__meta">
              <WorkMetaBlock title={work2.title} category={work2.category} goal={work2.goal} />
            </div>
          </div>
        </div>

        {/* Bottom: wide work3 card */}
        <div className="works-grid__wide">
          <img src={work3.imageSrc} alt={work3.title} />
          <span className="work-card__number" style={{ left: '656px' }}>
            {work3.number}
          </span>
          <div className="work-card__meta">
            <WorkMetaBlock title={work3.title} category={work3.category} goal={work3.goal} />
          </div>
        </div>
      </div>

      {/* Right aside: work4 */}
      <aside className="works-aside" aria-label="制作実績 4">
        <div className="works-aside__image-wrap">
          <img src={workImg4} alt="コーポレートサイト" />
        </div>
        <div className="works-aside__meta">
          <WorkMetaBlock
            title="コーポレートサイト"
            category="WEB / UI·UX"
            goal="求人のお問い合わせを増やす"
          />
        </div>
        <div className="works-aside__view-btn">
          <ViewBtn />
        </div>
      </aside>
    </>
  );
}
