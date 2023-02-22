import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from './components/home';
import Calculator from './components/calculator';

it('Home page renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Calculator page renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});