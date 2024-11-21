import { DataProvider } from './context/DataContext';
import { FilterProvider } from './context/FilterContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <DataProvider>
      <FilterProvider>
        <AppRouter />
      </FilterProvider>
    </DataProvider>
  );
}

export default App;
