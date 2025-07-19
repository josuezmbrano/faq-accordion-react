import Star from '../assets/icon-star.svg'

export default function Header() {
  return (
    <header className='header-container'>
      <img src={Star} alt="Icon Star" />
      <h1>FAQS</h1>
    </header>
  );
}
