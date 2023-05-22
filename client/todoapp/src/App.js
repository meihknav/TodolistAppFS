import './App.scss';
import { publicRoutes } from './components/routes';
import {Routes,Route} from 'react-router-dom'
// import * as httpRequest from './api/httpRequest';


function App() {
    return (
    <Routes>
                      {publicRoutes.map((route, index) => {
                          const Page = route.component;
                          return (
                              <Route
                                  key={index}
                                  path={route.path}
                                  element={
                                      <Page />
                                  }
                              />
                          );
                      })}
      </Routes>
    )

    

}

export default App;
