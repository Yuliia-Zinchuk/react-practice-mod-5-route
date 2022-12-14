import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
//import { fetchCountry } from 'utils/fetchApi/fetchCountry';
export const CountriesList = ({ countries }) => {
  // console.log(fetchCountry(countries('u'));
  const location = useLocation();
  return (
    <ul>
      {countries.map(({ id, flag, country }) => (
        <li key={id}>
          <Link to={`country/${id}`} state={{ from: location }}>
            <img src={flag} alt={country} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
