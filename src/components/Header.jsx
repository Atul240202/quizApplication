import logoImg from '../assets/quiz-logo.png';

function Header() {
  return (
    <header>
      <img className='block mx-auto' src={logoImg} alt='Quiz Logo' />
      <h1 className='text-center'>React Quiz</h1>
    </header>
  )
}

export default Header