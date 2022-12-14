import React, {memo, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchProductCategories, getCategoriesState} from "../../store/product/categorySlice";
//@ts-ignore
import classes from '../styles/Categories.module.scss'
//const classes = require('../styles/Categories.module.scss')

export interface ICategoryProps{
    handleCategory:(category:string)=>void
}

const Categories = memo(({handleCategory}:ICategoryProps) => {

    const category = useAppSelector(getCategoriesState)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchProductCategories())
    },[dispatch])

    return (

        <div className={classes.categoryBlock}>
            <div className={classes.title}>
                Категории
            </div>
            <ul className={classes.categories}>
                {
                    category.categories.map(category=>
                        <li
                            onClick={()=>handleCategory(category)}
                            key={category}
                        >{category}
                        </li>
                    )
                }
            </ul>
        </div>
    );
});

export default Categories;