import React from "react";
import {Route} from "react-router-dom";
import {Header} from "./components";
import { Home , Cart } from "./pages";
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import store from "./redux/store";
import axios from "axios";
import {setPizzas} from "./redux/actions/pizzas";



function App({ items }) {
    const  dispatch =  useDispatch();
    const hranilistse = useSelector(state => state);
    console.log(hranilistse)
    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => {
                dispatch(setPizzas(data.pizzas));
            });
    }, []);
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path="/" render={() => <Home items={items} />} />
                <Route exact path='/cart' component={Cart} />
            </div>
        </div>
    )
}



export default App;