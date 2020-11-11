import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

// No react tudo é um componete, inclusive as rotas
export default function Routes() {
  return (
    <BrowserRouter>
      {/* Tem que ficar por volta de tudo */}
      <Switch>
        {/* Garante que só uma rota é chamada por vez. O router dom permite
        mostrar ao mesmo tempo */}
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
