import { IconDots } from "@tabler/icons-react";
import { KanbanCard } from "./KanbanCard";
import styles from "./KanbanboardBody.module.css";
export function KanbanboardBody (){
    return(
        <section className={styles.container}>
            <div  className={styles.kanbanColumn}>
                <div className={styles.columnHeader}>
                    <div className={styles.columnTitle} >
                        <span className={styles.todoStatus}></span>
                        <h3>To Do</h3>   
                         
                    </div>
                    <IconDots />
                </div>
                <div className={styles.columnContent}>
                    <KanbanCard task={{priority:"HIGH",name:"Proejece a asd as e ",date:"2025/05",type:"BUG"}} column={"todo"}/>
                </div>
            </div>
            <div className={styles.kanbanColumn}>
                <div className={styles.columnHeader}>
                    <div  className={styles.columnTitle}>
                        <span className={styles.inProgressStatus}></span>
                        <h3>In Progress</h3>   
                         
                    </div>
                    <IconDots />
                </div>
                <div className={styles.columnContent}>
                    <KanbanCard task={{priority:"HIGH",name:"Proejece a asd as e ",date:"2025/05",type:"BUG"}} column={"inProgress"}/>
                </div>
            </div>
            <div className={styles.kanbanColumn}>
                <div className={styles.columnHeader}>
                    <div  className={styles.columnTitle}>
                        <span className={styles.reviewStatus}> </span>
                        <h3>Review</h3>   
                         
                    </div>
                    <IconDots />
                </div>
                <div className={styles.columnContent}>
                    <KanbanCard task={{priority:"HIGH",name:"Proejece a asd as e ",date:"2025/05",type:"BUG"}} column={"review"}/>
                </div>
            </div>
        </section>
    )
}