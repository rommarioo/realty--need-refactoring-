import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import QuizStore from './store/QuizStore';
import App from './App';
import ManagerStore from './store/ManagerStore';
import RoomStore from './store/RoomStore';
import AreaStore from './store/AreaStore'
import ClientStore from './store/ClientStore';

import { DataProvider } from './DataContext';
import BuyReqStore from './store/BuyReqStore';
import ProviderStore from './store/ProviderStore';

export const Context = createContext(null)



ReactDOM.render(
  <DataProvider>
    <Context.Provider value= {{
      quiz: new QuizStore(),
      client: new ClientStore(),
      manager: new ManagerStore(),
      areastore: new AreaStore(),
      roomstore: new RoomStore(),
      buyreq: new BuyReqStore(),
      provider: new ProviderStore(),

      


    }}>
          <App /> 
    </Context.Provider>,
  </DataProvider>,
    
    
  
  document.getElementById('root')
);

