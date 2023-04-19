import d from './UserBar.module.scss';

export const UserBar = () => {

    return (
        <div className={d.btnBox}>
            <button className={d.btnLogout}>
                Log out
            </button>
        </div>
    )
}