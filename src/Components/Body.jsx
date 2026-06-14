import { useState } from "react";
import MetricCard from "./MetricCard"
import ProjectCard from "./ProjectCard";
import TaskCard from "./TaskCard";

import RecentProjects from "../Data/recentProjects_data.json"
import DueSoonTasks from "../Data/dueSoon_data.json"


import {
  IconClipboardText,
  IconBug,
  IconRocket,
  IconFilter2
} from "@tabler/icons-react";

function Body(){

    const [showAllProjects, setShowAllProjects] = useState(false);
    const visibleProjects = showAllProjects? RecentProjects.recentProjects : RecentProjects.recentProjects.slice(0,2);

    function onClickProject () {
    setShowAllProjects(!showAllProjects)
    }

    const [showAllTasks, setShowAllTasks] = useState(false);
    const visibleTasks = showAllTasks? DueSoonTasks : DueSoonTasks.slice(0, 4);

    function onClickTask () {
        setShowAllTasks(!showAllTasks)
    }

    const [showChart, setShowChart] = useState(false);
    const chart30 = showChart? "last 3 months" : "last 30 days" ;

    function onChangeChart () {
    setShowChart(!showChart)
    }

    return (
        <main>
          <section className="hero-section">
            <header>
              <h1>Welcome back, Mateo!</h1>
              <p>
                You have NRO tasks due today across NRO active projects. Your
                current sprint performance is up by NRO% compared to last week.
              </p>
              <div>
                  <button className="button-primary">View My Queue</button>
              <button className="button-secondary">Sprint Report</button>
              </div>
              
            </header>
          </section>
          <section className="metrics-section">
            <div className="dashboard-metrics">
              <MetricCard name={"Total Tasks"} nro={50} Icon={<IconClipboardText size={24}/>}/>
              <MetricCard name={"Pending Bugs"} nro={4} Icon={<IconBug size={24}/>}/>
              <MetricCard name={"In Progress"} nro={10} Icon={<IconRocket size={24}/>}/>
            </div>
          </section>
          <section className="projects-tasks-section">
            <div className="recent-projects">
                <div className="title">
                <h2>Recent Projects</h2>
                <button className="project-list" onClick={onClickProject}>{showAllProjects? "Show less": "See Full list"}</button>
               </div>
            <div className="project-cards">
                {visibleProjects.map(project => (
                    <ProjectCard key={project.id} project={project}/>
                ))
                }
                
            </div>
            </div>
            <div className="due-tasks-container">
                <div className="due-header">
              <h2>Due Soon</h2>
              <button>
                <IconFilter2 />
              </button>
            </div>
              <div className="due-tasks">
                {visibleTasks.map(task => (
                    <TaskCard key={task.id} task={task} expanded={showAllTasks}/>
                ))
                }
                {
                    showAllTasks? <button className="full-list" onClick={onClickTask}>Show Less</button>: <button className="full-list" onClick={onClickTask}>See Full List</button>
                }
                    
              </div>
            </div>
          </section>
          <section className="chart-section">
            <div className="chart-header">
            <div>
                <h2>Task Completion Trends</h2>
            <p>Visualizing team throughput over the {chart30}</p>
            </div>            
            <select name="" id="select-chart" onChange={onChangeChart}>
              <option value="Last 30 days">Last 30 days</option>
              <option value="Last 3 months">Last 3 months</option>
            </select>
            </div>
            <div className="chart-container">
                Chart Coming soon
            </div>
          </section>
        </main>
    )
}
export default Body;