import style from "./Info.module.scss";

export const Info = () => {
    return <div className={style.infoContainer}>
        <div className={style.accumulated}>
            <p className={style.title}>After 4 years 1 month</p>
            <ul className={style.list}>
                <li className={style.item}>
                    <p className={style.text}>Accumulated, %:</p>
                    <p className={style.num}>28%</p>
                </li>
                <li className={style.item}>
                    <p className={style.text}>Accumulated, UAH:</p>
                    <p className={style.num}>60 000 &#8372;</p>
                </li>
                <li className={style.item}>
                    <p className={style.text}>Add This:</p>
                    <p className={style.num}>22 sq.m</p>
                </li>
            </ul>

            <p className={style.barTitle}>22 out of 60 sq.m accumulated</p>
            <div className={style.bar}>
                <div className={style.barFill}></div>
            </div>
        </div>

        <div className={style.image}>
            <p>image</p>
        </div>

        <div className={style.accRemain}>
            <p className={style.accTitle}>To add more <span className={style.accSpan}>1 sq.m</span> for planning, it remains to accumulate</p>
            <p className={style.accNum}>14 000 &#8372;</p>

            <div className={style.svgContainer}>
                <p>svg</p>
            </div>
        </div>

    </div>
}