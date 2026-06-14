import { IconMessage, IconBell, IconSearch } from "@tabler/icons-react";

import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.mainHeader}>
          <div>
            <form action="search" className={styles.searchContainer}>
              <IconSearch />
              <input
                type="text"
                placeholder="Search tasks, projects, or team members..."
              />
            </form>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.headerActions}>
              <button className={styles.iconButton}><IconMessage size={"24"}/></button>
              <button className={styles.iconButton}><IconBell size={"24"} /></button>
            </div>
            <div className={styles.userProfile}>
                <div className={styles.userInfo}>
              <h3>Username</h3>
              <p>Role</p>
              </div>
              <img src="" alt="User profile avatar" className={styles.avatar} />
            </div>
          </div>
        </header>
    )
}
export default Header;