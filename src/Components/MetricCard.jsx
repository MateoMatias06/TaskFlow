function MetricCard({Icon, name, nro}){
    return(
        <article className="metric-card">
                {Icon}
                <div className="metric-card-info">
                  <p>{name}</p>
                  <h3>{nro}</h3>
                </div>
                <span className="metric-card-change">{nro}% </span>
              </article>
    )
}
export default MetricCard