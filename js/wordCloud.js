am4core.ready(function() {
  // Themes begin
  //   am4core.useTheme(am4themes_material);
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
      count: "170"
    },
    {
      tag: "Typescript",
      count: "150"
    },
    {
      tag: "React JS",
      count: "91"
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
      tag: "Mongo DB",
      count: "60"
    },
    {
      tag: "Firebase",
      count: "110"
    },
    {
      tag: "Git",
      count: "127"
    },
    {
      tag: "postgresql",
      count: "70"
    },
    {
      tag: "Express JS",
      count: "50"
    },
    {
      tag: "Stencil JS",
      count: "50"
    },
    {
      tag: "GraphQL",
      count: "150"
    },
    {
      tag: "CSS in JS",
      count: "150"
    },
    {
      tag: "Final Cut Pro",
      count: "100"
    },
    {
      tag: "Figma",
      count: "150"
    },
    {
      tag: "UX Design",
      count: "130"
    },
    {
      tag: "Photoshop",
      count: "50"
    },
    {
      tag: "Semantic UI",
      count: "50"
    },
    {
      tag: "jQuery",
      count: "50"
    }
  ];

  series.dataFields.word = "tag";
  series.dataFields.value = "count";

  series.heatRules.push({
    target: series.labels.template,
    property: "fill",
    min: am4core.color("#e2e2e2"),
    max: am4core.color("#bdd8ef"),
    dataField: "value"
  });
});
