import styles from './CategoryTitle.module.scss'
const CategoryTitle = ({name}) => {
    return <div className={styles.CategoryTitle}>{name}</div>
}

export default CategoryTitle