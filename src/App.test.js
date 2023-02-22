import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from './components/home';
import Calculator from './components/calculator';
import Quote from './components/quote';
import Navbar from './components/navbar';
import NotMatch from './components/notMatch';

it('Home page renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Calculator page renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Is Quotes renders correctly', () => {
  const tree = renderer.create(
    <Quote>
      <blockquote>
        <q className="quote-description">
          Software testing proves the existence of bugs not their absence.
        </q>
        <p className="quote-author">
          &mdash;Anonymous
        </p>
      </blockquote>
    </Quote>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Is NavBar renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Navbar />

    </BrowserRouter>,

  )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<nav
  className="navbar"
>
  <h1
    className="navTitle"
  >
    Math Magicians
  </h1>
  <ul
    className="navItems"
  >
    <li>
      <a
        aria-current="page"
        className="active"
        href="/"
        onClick={[Function]}
      >
        Home
      </a>
    </li>
    <li>
      <a
        className=""
        href="/calculator"
        onClick={[Function]}
      >
        Calculator
      </a>
    </li>
    <li>
      <a
        className=""
        href="/quote"
        onClick={[Function]}
      >
        Quote
      </a>
    </li>
  </ul>
</nav>
`);
});
it('Is NotMatch  renders correctly', () => {
  const tree = renderer.create(
    <NotMatch>
      <p>Test no to match render perfectly </p>
    </NotMatch>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
