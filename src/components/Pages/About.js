import { Link, Outlet } from 'react-router-dom';
import { Button } from '../App.styled';
import { BsArrowLeftShort } from 'react-icons/bs';

const About = () => {
  // const { text } = useParams();
  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])
  return (
    <div>
      <p>About section</p>
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
          <Link to="/">
            <Button type="button">
              <BsArrowLeftShort
                style={{
                  width: '25px',
                  height: '25px',
                  display: 'inline-block',
                }}
              />
              Go back
            </Button>
          </Link>
        </li>
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
