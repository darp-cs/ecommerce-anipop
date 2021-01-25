import {BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AniPops from './containers/AniPops/AniPops'

function app (){
  
  return(

     <BrowserRouter>
      <Layout>
        <AniPops/>
      </Layout>
    </BrowserRouter>

  );

}

export default app;
