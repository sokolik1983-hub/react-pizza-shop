import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock/index";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {setCategory, setSortBy} from '../redux/actions/filters';
import {fetchPizzas} from "../redux/actions/pizzas";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";



const categoryNames = ['Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',]
const sortItems = [
        {
            name: 'популярности',
            type: 'popular',
            order: 'desc'
        },
        {
            name: 'цене',
            type: 'price',
            order: 'asc'
        },
        {
            name: 'алфавиту',
            type: 'name',
            order: 'asc'
        },
    ];


function Home() {

    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy, order} = useSelector(({filters}) => filters);

    const test = useSelector(({filters}) => filters);


    React.useEffect(() => {
        //Перенести в редакс и подключить redux-thunk
        //Следить за фильтрацией и сортировкой и подставлять параметры в URl из redux
        //Сделать имитацию загрузки пицц (которая есть в css и в PizzaBlock)
            dispatch(fetchPizzas(category, sortBy, order));
    }, [category, sortBy]);


    const onSelectCategories  = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type, order) => {
        dispatch(setSortBy(type, order));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickItem={onSelectCategories}
                    items={categoryNames}
                />
                <SortPopup activeSortType={sortBy}
                           items={sortItems}
                           onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { isLoaded
                    ? items.map(obj => (
                        <PizzaBlock key={obj.id}
                                    {...obj}
                            isLoading={true}
                        />
                    ))
                    : Array(12).fill(0).map((_, index) => (
                        <LoadingBlock key={index} />
                    ))
                }

            </div>
        </div>
    )
}

export default Home;