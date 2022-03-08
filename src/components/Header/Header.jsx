import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Banxico API Visualizer</h1>
      <div>
        by{' '}
        <a href='https://hugomendez.dev' target='_blank'>
          Hugo Méndez
        </a>{' '}
        -{' '}
        <a
          href='https://github.com/Hugomndez/banxico-api-visualizer'
          target='_blank'
        >
          Github Repo
        </a>
      </div>
    </header>
  );
};

export default Header;
