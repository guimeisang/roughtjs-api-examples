const rc = rough.canvas(document.getElementById("canvas"));

//line and rectangle
rc.rectangle(10, 10, 100, 100);
rc.rectangle(140, 10, 100, 100, {
  fill: "rgba(255,0,0,0.2)",
  fillStyle: "solid",
  roughness: 2
});
