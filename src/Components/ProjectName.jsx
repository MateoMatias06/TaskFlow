import styles from "./ProjectName.module.css"
import { IconChevronRight, IconPlus, IconFilter2 } from "@tabler/icons-react"

export function ProjectName(){
    return(
        <section className={styles.container}>
            <div className={styles.left}>
                <div className={styles.projects}>
                    <a href="">Projects</a>
                    <IconChevronRight size={"15px"} />
                    <p>Project  Name</p>
                </div>
                <h2>Project Name</h2>
            </div>
            <div className={styles.right} >
                <div className={styles.teamAvatars}>
                    <img src="" alt="Project Owner" />
                    <img src="" alt="team Member" />
                    <img src="" alt="Team Member" />
                    <span>+Nro</span>
                </div>
                <button className={styles.buttonSecondary}><IconFilter2 size={"20"} className={styles.svgPrimary}/>Filter</button>
                <button className={styles.buttonPrimary}><IconPlus size={"20"}/>Add Task</button>
            </div>
            
        </section>
    )
}