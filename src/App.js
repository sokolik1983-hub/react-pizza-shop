import React from "react";
import {Route} from "react-router-dom";
import {Header} from "./components";
import { Home , Cart } from "./pages";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import store from "./redux/store";
import axios from "axios";
import {setPizzas} from "./redux/actions/pizzas";



function App() {
    const  dispatch =  useDispatch();


    React.useEffect(() => {
        //Перенести в редакс и подключить redux-thunk
        //Следить за фильтрацией и сортировкой и подставлять параметры в URl из redux
        //Сделать имитацию загрузки пицц (которая есть в css и в PizzaBlock)
        axios.get('http://localhost:3001/pizzas')
            .then(({data}) => {
                dispatch(setPizzas(data));
            });
    }, []);
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path="/" component={Home}  />
                <Route exact path='/cart' component={Cart} />
            </div>
        </div>
    )
}



export default App;