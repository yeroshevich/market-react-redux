import React, {useEffect, useState} from 'react';
//@ts-ignore
import classes from '../styles/Header.module.scss'
import {Link} from "react-router-dom";
import SmallCart from "../Products/SmallCart";
import {useAppSelector} from "../../app/hooks";
import {getUserState} from "../../store/user/userSlice";

const Header = () => {
    const [logOutVisible,setLogOutVisible]=useState(false)
    const userState = useAppSelector(getUserState)
    const showLogOut = ()=>setLogOutVisible(prev=>!prev)
    const closeLogOut = ()=>setLogOutVisible(false)

    useEffect(()=>{
        document.addEventListener('click',(event)=>{
            //@ts-ignore
            if(event.target.id ==='root')
                closeLogOut()
        })
    },[])
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to={"/"}>logo</Link>
            </div>
            <div>
                <ul className={classes.list}>
                    <li>
                        <Link
                            to={"/"}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/"}>
                            О нас
                        </Link>
                    </li>

                        {
                                userState.user.username
                                &&
                            <li>
                                <SmallCart/>
                            </li>
                        }
                    {
                        userState.user.username
                        ? <li className={classes.userFunc}
                              onClick={showLogOut}

                            >
                                <div>
                                    <Link to={"/"}>{userState.user.email}</Link>
                                </div>
                                <ul
                                    className={classes.innerList + " "+((logOutVisible)?classes.visibleList:classes.hiddenList)}>
                                    <li>
                                        <div>
                                            <Link to={"/32"}>
                                                Профиль
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Link to={"/32"}>
                                                Выйти
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            :<li>
                                <Link
                                    to={"/auth"}>
                                    Авторизация
                                </Link>
                            </li>
                    }
                </ul>
            </div>
        </header>
    );
};

export default Header;