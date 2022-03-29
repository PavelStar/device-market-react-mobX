
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import PageWidthState from '../../../store/PageWidthState';
import ArrowIcon from '../../svg/ArrowIcon';
import './FooterNavList.scss'

interface IFooterNavList {
    title?: string | undefined;
    items?: string[] | undefined;
    linkFunction: any;
}

const FooterNavList: React.FC<IFooterNavList> = ({ title, items, linkFunction }) => {

    const { isMobile } = PageWidthState;

    const [isListShown, setIsListShown] = useState(false)
    const [arrow, setArrow] = useState(false)
    const [listWrapHeight, setListWrapHeight] = useState(0)

    const listWrapRef = useRef<HTMLUListElement>(null)



    return (
        <div className='footer-nav-list'>
            <button className='footer-nav-list__title-button' onClick={() => isMobile && setIsListShown(!isListShown)}>
                <h3 className='footer-nav-list__title'>{title}</h3>
                {isMobile &&


                    <span className={isListShown ? 'footer-nav-list__arrow opened' : 'footer-nav-list__arrow opened closed'}><ArrowIcon /></span>
                }
            </button>

            <CSSTransition
                in={isMobile ? isListShown : !isListShown}
                timeout={300}
                mountOnEnter
                unmountOnExit
                onEntering={() => listWrapRef.current && setListWrapHeight(listWrapRef.current.clientHeight)}
                onExiting={() => setListWrapHeight(0)}


                classNames="footer-nav-list__links-list-wrap"
            >
                <div className='footer-nav-list__links-list-wrap' style={{ height: `${isMobile && listWrapHeight}px` }}>
                    <ul className='footer-nav-list__links-list' ref={listWrapRef}>
                        {items && items.map((item) => {
                            return (
                                <li className='footer-nav-list__item'>
                                    <Link to="/category" className='footer-nav-list__item-link' onClick={() => linkFunction(item)}>
                                        {item}
                                    </Link>
                                </li>

                            )
                        })}
                    </ul>
                </div>
            </CSSTransition>

        </div>
    )
}

export default FooterNavList