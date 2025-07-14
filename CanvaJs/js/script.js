window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light1", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: "Services Built Specifically For Your Careers and Business"
	},
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
		dataPoints: [
			{ y: 25, label: "Front-End Dev" },
			{ y: 25, label: "Back-End Dev" },
			{ y: 30, label: "Full-Stack Apps" },
			{ y: 15, label: "UI/UX Design" },
			{ y: 5, label: "SEO & Speed Boost" },
		]
	}]
});
chart.render();

}

