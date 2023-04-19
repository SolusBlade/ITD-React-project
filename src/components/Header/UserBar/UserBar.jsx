import Icon from 'components/Icon/Icon';
import d from './UserBar.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectorName } from 'redux/auth/authSelectors';
import { logOutUser } from 'redux/auth/authOperations';

export const UserBar = () => {
    const name = useSelector(selectorName);
    const location = useLocation();
    const dispatch = useDispatch();

    return (
        // <div className={d.headerUserInfo}>
            <div className={d.btnBox}>
                <button className={d.btnStat}>
                    <NavLink
                        state={location}
                        to='/statistics'
                    >
                        <Icon name={'icon-diagram'} width={'12'} height={'12'} className={'icon-diagram'} />
                    </NavLink>
                </button>
                <button className={d.btnUser}>
                    {name[0].toUpperCase()}
                </button>
                <button onClick={() => {dispatch(logOutUser())}} className={d.btnLogout}>
                    Log out
                    <Icon name={'icon-log-out'} width={'17'} height={'17'} className={'icon-log-out'} />
                </button>
            </div>
        // </div>
    )
}