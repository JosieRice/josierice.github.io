am4core.ready(function() {
  // Themes begin
  // am4core.useTheme(am4themes_material);
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
  chart.fontFamily = "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif";
  var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
  series.randomness = 0.1;
  series.rotationThreshold = 0.5;

  series.data = [
    {
      tag: "Javascript",
      count: "150"
    },
    {
      tag: "Typescript",
      count: "180"
    },
    {
      tag: "Webpack",
      count: "90"
    },
    {
      tag: "React",
      count: "150"
    },
    {
      tag: "CSS 3",
      count: "111"
    },
    {
      tag: "HTML 5",
      count: "129"
    },
    {
      tag: "Node JS",
      count: "80"
    },
    {
      tag: "JSON",
      count: "90"
    },
    {
      tag: "Firebase",
      count: "110"
    },
    {
      tag: "Git",
      count: "115"
    },
    {
      tag: "GraphQL",
      count: "80"
    },
    {
      tag: "CSS in JS",
      count: "150"
    },
    {
      tag: "Final Cut Pro",
      count: "80"
    },
    {
      tag: "Figma",
      count: "120"
    },
    {
      tag: "UX Design",
      count: "130"
    },
    {
      tag: "Photoshop",
      count: "50"
    },
  ];

  series.dataFields.word = "tag";
  series.dataFields.value = "count";

  series.labels.paddingTop = 5;

//   // Configure labels
// series.labels.template.setAll({
//   paddingTop: 5,
//   paddingBottom: 5,
//   paddingLeft: 5,
//   paddingRight: 5,
//   // fontFamily: "Courier New"
// });

  series.heatRules.push({
    target: series.labels.template,
    property: "fill",
    min: am4core.color("#e2e2e2"),
    max: am4core.color("#bdd8ef"),
    dataField: "value"
  });
});
