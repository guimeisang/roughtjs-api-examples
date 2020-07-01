const rough = window.rough;
const rc = rough.canvas(document.getElementById("canvas"));

//line and rectangle 四边形
rc.rectangle(10, 10, 100, 100, { bowing: 1, stroke: "green", strokeWidth: 3 });
rc.rectangle(140, 10, 100, 100, {
  fill: "rgba(255,0,0,0.2)",
  fillStyle: "solid",
  roughness: 2
});

// 画椭圆
rc.ellipse(480, 50, 150, 80, {
  fill: "blue"
});

// 画圆
rc.circle(480, 150, 80, {
  stroke: "red",
  strokeWidth: 4,
  fill: "rgba(0,255,0,1)",
  fillWeight: 4,
  hachureGap: 6
});

// 画线
rc.linearPath([[0, 0], [10, 10], [30, 60], [40, 80]], {
  roughness: 0.7,
  stroke: "red",
  strokeWidth: 4
});

// 多边形
rc.polygon([[60, 180], [50, 40], [70, 10], [90, 20]]);

rc.polygon([[690, 250], [790, 260], [750, 360], [690, 340]], {
  stroke: "red",
  strokeWidth: 4,
  fill: "rgba(0,0,255,0.2)",
  fillStyle: "solid"
});

rc.polygon([[690, 370], [790, 385], [750, 480], [690, 460]], {
  stroke: "red",
  hachureAngle: 75,
  fill: "rgba(0,0,255,0.6)"
});

// arcs
rc.arc(350, 200, 200, 180, Math.PI, Math.PI * 1.6);

rc.arc(350, 300, 200, 180, Math.PI / 2, Math.PI, true, {
  stroke: "blue",
  strokeWidth: 2,
  fill: "rgba(255,0,255,0.4)"
});

// draw sine curve
let points = [];
for (let i = 0; i < 20; i++) {
  let x = (400 / 20) * i + 10;
  let xdeg = (Math.PI / 100) * x;
  let y = Math.round(Math.sin(xdeg) * 90) + 500;
  points.push([x, y]);
}

rc.curve(points, {
  roughness: 1.2,
  stroke: "red",
  strokeWidth: 3
});

rc.path("M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z", { fill: "black" });
