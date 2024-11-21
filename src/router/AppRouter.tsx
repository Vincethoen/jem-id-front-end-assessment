import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from '../pages/Detail';
import Overview from '../pages/Overview';
import Error from '../pages/Error';

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Overview />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
)

export default AppRouter