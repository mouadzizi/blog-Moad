import './SideBar.css'
import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import image from '../../Images/cover.jpg'

export default function Sidebar() {
    
    var [count, setCount] = useState(0);
    useEffect(()=> {
        setTimeout(()=> {
            setCount(count++)
            setCount(count++)
        }, 1000)
    }, [count]);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src={image}
                    alt="tt"
                />
                <p>
                    Hey my name is moad and this site is just for fun to learn ReactJS, if you know how to deal with react native then it just some details you need to learn nothing more.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Counter for no Reason</span>
                <h2> {count}</h2>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Life">
                            Life
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Sport">
                            Sport
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Style">
                            Style
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Tech">
                            Tech
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Cinema">
                            Cinema
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}
