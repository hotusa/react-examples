import React, {lazy, Suspense} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'


const Home = lazy(() => import('./components/Home'))
const Examples = lazy(() => import('./components/Examples'))

export default function App() {


    return (
        <BrowserRouter>
            <Suspense fallback={""}>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/examples"} component={Examples}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
