import Router from '~components/Router';
import LocationContext from '~context/LocationContext';
import useLocation from '~hooks/useLocation';

const App = () => {
  const { location, setLocation } = useLocation();

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <Router />
    </LocationContext.Provider>
  );
};
export default App;
