import { Link, Outlet } from 'react-router-dom';

const AboutText = () => {
  // const { text } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <>
      <h1>Text Details</h1>
      <ul>
        <li>
          <Link to="text1">Fist one</Link>
        </li>
        <li>
          <Link to="text2">Second one</Link>
        </li>
      </ul>
      {/*рендерить те, що ми передаємо в посиланнях,  ОБОВ'ЯЗКОВИЙ ПАРАМЕТР*/}
      <Outlet />
    </>
  );
};

export default AboutText;
