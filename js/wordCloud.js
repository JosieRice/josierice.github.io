var root = am5.Root.new("chartdiv");

var sourceText = "one two one three";

var series = root.container.children.push(
  am5wc.WordCloud.new(root, {
    randomness: 0.15,
  })
);

series.labels.template.setAll({
  fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
  fill: am5.color("#ffffff"),
});

series.data.setAll([
  { category: "React", value: 100 },
  { category: "TypeScript", value: 100 },
  { category: "JavaScript", value: 90 },
  { category: "Webpack", value: 70 },
  { category: "CSS 3", value: 70 },
  { category: "HTML 5", value: 80 },
  { category: "Node JS", value: 40 },
  { category: "Git", value: 70 },
  { category: "Firebase", value: 80 },
  { category: "GraphQL", value: 50 },
  { category: "CSS in JS", value: 90 },
  { category: "Figma", value: 65 },
  { category: "PHP", value: 40 },
]);
