import '../../styles/parts/work-card.scss';
import arrowImg from '../../assets/arrow.svg';

interface WorkCardProps {
  number: string;
  imageSrc: string;
  title: string;
  category: string;
  goal: string;
  numberPosition?: 'left' | 'right';
  className?: string;
}

export default function WorkCard({
  number,
  imageSrc,
  title,
  category,
  goal,
  numberPosition = 'right',
  className = '',
}: WorkCardProps) {
  return (
    <div className={`work-card ${className}`}>
      <div className="work-card__image-wrap">
        <img src={imageSrc} alt={title} />
        <span
          className="work-card__number"
          style={numberPosition === 'left' ? { right: 'auto', left: '295.89px', transform: 'translateX(-50%) translateY(100%)' } : { right: '43.89px', transform: 'translateX(50%) translateY(100%)' }}
        >
          {number}
        </span>
      </div>
      <div className="work-card__meta">
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
      </div>
    </div>
  );
}
