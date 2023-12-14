import Sidebar from "../component/Sidebar";
import styles from "./AppLayout.module.css";
import Map from '../component/Map'
function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar/>
            <Map/>
        {/* <p >AppLayout</p>     */}

        </div>
    )
}

export default AppLayout
