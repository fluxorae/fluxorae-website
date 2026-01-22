import styles from './Container.module.css'

export default function Container({ children, className = '', compact = false }) {
  const classes = [styles.container]
  if (compact) classes.push(styles.compact)
  if (className) classes.push(className)

  return <div className={classes.join(' ')}>{children}</div>
}
