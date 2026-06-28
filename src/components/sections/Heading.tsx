import '../../styles/sections/heading.scss';
import SkillsList from '../parts/SkillsList';
import ContactBtn from '../parts/ContactBtn';
import avatarImg from '../../assets/placeholder-avatar.svg';

export default function Heading() {
  return (
    <section className="heading" aria-label="プロフィール">
      {/* Top: Logo + Avatar */}
      <div className="heading__top">
        <p className="heading__logo">
          MIHONA
          <br aria-hidden />
          HIRATA
          <br aria-hidden />
          PORTFOLIO
        </p>
        <div className="heading__avatar">
          <img src={avatarImg} alt="Mihona Hirata" />
        </div>
      </div>

      {/* Middle: Catchphrase + Scroll */}
      <div className="heading__main">
        <div className="heading__copy">
          <p className="heading__heading-ja">
            寄り添って、
            <br />
            つくる。
          </p>
          <p className="heading__subtext">
            {`Webデザイン・コーディング\n設計から実装まで、丁寧につくります。`}
          </p>
        </div>
        <p className="heading__scroll">scroll →</p>
      </div>

      {/* Bottom: Skills + Contact + Works count */}
      <div className="heading__bottom">
        <SkillsList />

        <div className="heading__divider" role="separator" />

        <div className="heading__footer">
          <ContactBtn />
          <div className="heading__works-count">
            <p className="heading__works-number">04</p>
            <p className="heading__works-label">WORKS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
