import { IconBug, IconFileCheck } from "@tabler/icons-react";
import styles from "./KanbanCard.module.css";

export function KanbanCard({ task, column }) {
  let icon = null;
  switch (task.type) {
    case "BUG":
      icon = <IconBug />;
      break;
    case "DOC":
      icon = <IconFileCheck />;
      break;
  }
  return (
    <article className={`${styles.article} ${styles[column]}`}>
      <div className={styles.cardHeader}>
        <span className={`${styles.priority} ${styles[task.priority.toLowerCase()]}`}>
          {task.priority}
        </span>
        {icon}
      </div>

      <div className={styles.cardBody}>
        <h3>{task.name}</h3>
      </div>

      <div className={styles.cardFooter}>
        <p>Due: {task.date}</p>
      </div>
    </article>
  );
}
