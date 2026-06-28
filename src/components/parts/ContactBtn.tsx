import '../../styles/parts/contact-btn.scss';

interface ContactBtnProps {
  label?: string;
}

export default function ContactBtn({ label = 'CONTACT' }: ContactBtnProps) {
  return (
    <button className="contact-btn" type="button" aria-label={label}>
      <span className="contact-btn__icon" aria-hidden />
      <span className="contact-btn__text">{label}</span>
    </button>
  );
}

export function ViewBtn() {
  return (
    <button className="view-btn" type="button" aria-label="View work" />
  );
}
