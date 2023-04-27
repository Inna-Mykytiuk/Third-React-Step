import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useRef } from 'react';

const DogDetails = () => {
  const { dogId } = useParams();
  const location = useLocation();
  //створюємо змінну, якщо локація на яку ми хочемо перейти не визначена, то переходимо на сторінку /dogs. Передаємо цю змінну пропсом в Link
  const backlinkLocationRef = useRef(location.state?.from ?? '/dogs');
  // console.log(location);
  // console.log(backlinkLocationRef);

  return (
    <>
      <Link to={backlinkLocationRef.current}>Go back</Link>{' '}
      {/* виправлено помилку з дочірнім елементом */}
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
