import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from './components/home';
import Calculator from './components/calculator';
import Quote from './components/quote';
import Navbar from './components/navbar';
import NotMatch from './components/notMatch';
import operate from './logic/Operate.js';
import calculate from './logic/Calculate.js';

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
  const tree = renderer
    .create(
      <Quote>
        <blockquote>
          <q className="quote-description">
            Software testing proves the existence of bugs not their absence.
          </q>
          <p className="quote-author">&mdash;Anonymous</p>
        </blockquote>
      </Quote>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Is NavBar renders correctly', () => {
  const tree = renderer
    .create(
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
  const tree = renderer
    .create(
      <NotMatch>
        <p>Test no to match render perfectly </p>
      </NotMatch>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Tests on operate.js arithmetic operations ', () => {
  test('Test multiply 2 * 5 to get 10', () => {
    const product = operate(2, 5, 'x');
    expect(product).toBe('10');
  });

  test('Test subtract 90 - 40 to get 50', () => {
    const subtraction = operate(90, 40, '-');
    expect(subtraction).toBe('50');
  });

  test('Test Add 100 + 30 to get 130', () => {
    const Addition = operate(100, 30, '+');
    expect(Addition).toBe('130');
  });

  test('Test divide 20 ÷ 2 to get 10', () => {
    const division = operate(20, 2, '÷');
    expect(division).toEqual('10');
  });

  test('Test remainder 25 % 2 to get 3', () => {
    const modulo = operate(25, 2, '%');
    expect(modulo).toEqual('1');
  });
});

// CALCULATE TEST
describe('calculate', () => {
  test('AC button resets all values', () => {
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const newState = calculate(initialState, 'AC');
    expect(newState).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('number button updates next value', () => {
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const newState = calculate(initialState, '4');
    expect(newState).toEqual({
      total: '5',
      next: '34',
      operation: '+',
    });
  });
  test('operation button updates operation', () => {
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const newState = calculate(initialState, 'x');
    expect(newState).toEqual({
      total: '8',
      next: null,
      operation: 'x',
    });
  });
  test('decimal point button updates next value', () => {
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const newState = calculate(initialState, '.');
    expect(newState).toEqual({
      total: '5',
      next: '3.',
      operation: '+',
    });
  });
  test('equals button updates total value', () => {
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const newState = calculate(initialState, '=');
    expect(newState).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });
  test('negative button changes next value to negative', () => {
    const initialState = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const newState = calculate(initialState, '+/-');
    expect(newState).toEqual({
      total: '5',
      next: '-3',
      operation: '+',
    });
  });
});
