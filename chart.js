const chartSelection = document.querySelector('#select-chart');

chartSelection.addEventListener("change", function() {
    const text = document.querySelector('.chart-text');
    text.textContent = chartSelection.value;
});