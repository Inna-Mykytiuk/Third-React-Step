import { Link, useParams, Outlet } from 'react-router-dom';

const About = () => {
  const { text } = useParams();
  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])
  return (
    <div>
      <p>{text}</p>
      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum.
      </p>
      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum.
      </p>
      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum.
      </p>
      <ul>
        <li>
          <Link to="text1">Fist one</Link>
        </li>
        <li>
          <Link to="text2">Second one</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default About;
