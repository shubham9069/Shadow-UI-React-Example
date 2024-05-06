import { TrellisChartMetaData } from "shadow-ui-react";

export const dummyAreaChartData: any = {
  updateFlag: false,
  chart: {
    type: 'area',
  },
  series: [
    {
      name: 'Tokyo',
      data: [
        7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
      ],
    },
    {
      name: 'New York',
      data: [
        -0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5,
      ],
    },
    {
      name: 'Berlin',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
    },
    {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
    },
  ],
  title: {
    text: 'Monthly Average Temperature',
  },
  subtitle: {
    text: 'Source: WorldClimate.com',
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    title: {
      text: 'Temperature °C',
    },
  },
  tooltip: {
    valueSuffix: ' °C',
  },
  legend: {
    align: 'left',
    verticalAlign: 'bottom',
    layout: 'horizontal',
  },
};

export const cindeChartData: any = {
  updateFlag: false,
  chart: {
    type: 'area',
  },
  series: [
    {
      name: '$ Net Sales TY',
      data: [
        [1655577000000, 5450668180.58],
        [1657996200000, 5385992958.91],
        [1660415400000, 5439009785.18],
        [1662834600000, 5143088255.65],
        [1665253800000, 5440741417.91],
        [1667673000000, 5739518478.61],
        [1670092200000, 5575064169.94],
        [1672511400000, 5312106427.37],
        [1674930600000, 5935021784.63],
        [1677349800000, 5276704995.46],
        [1679769000000, 5595221717.09],
        [1682188200000, 5565843613.6],
        [1684607400000, 5471191962.81],
      ],
    },
    {
      name: '$ Net Sales LY',
      data: [
        [1655577000000, 4450668180.58],
        [1657996200000, 4385992958.91],
        [1660415400000, 4439009785.18],
        [1662834600000, 4143088255.65],
        [1665253800000, 3440741417.91],
        [1667673000000, 4739518478.61],
        [1670092200000, 3575064169.94],
        [1672511400000, 4312106427.37],
        [1674930600000, 4935021784.63],
        [1677349800000, 6276704995.46],
        [1679769000000, 3595221717.09],
        [1682188200000, 6565843613.6],
        [1684607400000, 5071191962.81],
      ],
    },
    {
      name: '$ Net Sales Change',
      data: [
        [1655577000000, 6450668180.58],
        [1657996200000, 3385992958.91],
        [1660415400000, 4439009785.18],
        [1662834600000, 1143088255.65],
        [1665253800000, 3440741417.91],
        [1667673000000, 6739518478.61],
        [1670092200000, 5575064169.94],
        [1672511400000, 1312106427.37],
        [1674930600000, 4935021784.63],
        [1677349800000, 4276704995.46],
        [1679769000000, 4595221717.09],
        [1682188200000, 6565843613.6],
        [1684607400000, 7471191962.81],
      ],
    },
  ],
  title: {
    text: 'Sales Trend',
  },
  xAxis: {
    type: 'datetime',
  },
};

export const dummyLineChartData: any = {
  updateFlag: true,
  chart: {
    type: 'area',
  },
  series: [
    {
      name: 'Delhi',
      data: [
        7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
      ],
    },
  ],
  title: {
    text: 'Monthly Average Temperature',
  },
  subtitle: {
    text: 'Source: WorldClimate.com',
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    title: {
      text: 'Temperature °C',
    },
  },
  tooltip: {
    valueSuffix: ' °C',
  },
  legend: {
    align: 'left',
    verticalAlign: 'bottom',
    layout: 'horizontal',
  },
};

export const barChartData: any = {
  updateFlag: false,

  chart: {
    type: 'area',
  },

  series: [
    {
      name: '$ Net Sales TY',

      data: [
        [
          1660329000000,

          5450668180.58,
        ],

        [
          1665167400000,

          5385992958.91,
        ],

        [
          1653071400000,

          5439009785.18,
        ],

        [
          1648233000000,

          5143088255.65,
        ],

        [
          1667586600000,

          5440741417.91,
        ],

        [
          1670005800000,

          5739518478.61,
        ],

        [
          1677263400000,

          5575064169.94,
        ],

        [
          1674844200000,

          5312106427.37,
        ],

        [
          1672425000000,

          5935021784.63,
        ],

        [
          1650652200000,

          5276704995.46,
        ],

        [
          1657909800000,

          5595221717.09,
        ],

        [
          1655490600000,

          5565843613.6,
        ],

        [
          1662748200000,

          5471191962.81,
        ],
      ],
    },

    {
      name: '$ Net Sales LY',

      data: [
        [
          1660329000000,

          4999367634.24,
        ],

        [
          1665167400000,

          4979338915.99,
        ],

        [
          1653071400000,

          4970506644.86,
        ],

        [
          1648233000000,

          4672737146.28,
        ],

        [
          1667586600000,

          5015954618.83,
        ],

        [
          1670005800000,

          5271394606.7,
        ],

        [
          1677263400000,

          5263219392.32,
        ],

        [
          1674844200000,

          5156101999.63,
        ],

        [
          1672425000000,

          5520206771.71,
        ],

        [
          1650652200000,

          4826541332.88,
        ],

        [
          1657909800000,

          5098542978.33,
        ],

        [
          1655490600000,

          5089339377.09,
        ],

        [
          1662748200000,

          5065339614.05,
        ],
      ],
    },

    {
      name: '$ Net Sales Change',

      data: [
        [
          1660329000000,

          451300546.34,
        ],

        [
          1665167400000,

          406654042.92,
        ],

        [
          1653071400000,

          468503140.32,
        ],

        [
          1648233000000,

          470351109.37,
        ],

        [
          1667586600000,

          424786799.08,
        ],

        [
          1670005800000,

          468123871.91,
        ],

        [
          1677263400000,

          311844777.62,
        ],

        [
          1674844200000,

          156004427.74,
        ],

        [
          1672425000000,

          414815012.92,
        ],

        [
          1650652200000,

          450163662.58,
        ],

        [
          1657909800000,

          496678738.76,
        ],

        [
          1655490600000,

          476504236.51,
        ],

        [
          1662748200000,

          405852348.76,
        ],
      ],
    },

    {
      name: '$ Net Sales Change %',

      data: [
        [
          1660329000000,

          9.027153,
        ],

        [
          1665167400000,

          8.166828,
        ],

        [
          1653071400000,

          9.425662,
        ],

        [
          1648233000000,

          10.065859,
        ],

        [
          1667586600000,

          8.468713,
        ],

        [
          1670005800000,

          8.880456,
        ],

        [
          1677263400000,

          5.924982,
        ],

        [
          1674844200000,

          3.025627,
        ],

        [
          1672425000000,

          7.514483,
        ],

        [
          1650652200000,

          9.326837,
        ],

        [
          1657909800000,

          9.741582,
        ],

        [
          1655490600000,

          9.362792,
        ],

        [
          1662748200000,

          8.012342,
        ],
      ],
    },
  ],

  title: {
    text: 'Sales Trend',
  },

  xAxis: {
    type: 'datetime',
  },

  tooltip: {
    valueSuffix: '',
  },
};

export const bubbleChartData: any = {
  updateFlag: false,
  chart: {
    type: 'bubble',
  },
  plotOptions: {
    series: {
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }
},
  series: [{
    data: [
        { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
        { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
        { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
        { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
        { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
        { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
        { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
        { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
        { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
        { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
        { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
        { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
        { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
        { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
        { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
    ]}],
    tooltip: {
      useHTML: true,
      headerFormat: '<table>',
      pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
          '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
          '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
          '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
      footerFormat: '</table>',
      followPointer: true
  },
  title: {
    text: 'Daily sugar intake',
  },
  xAxis: {
    labels: {
      format: '{value} gr'
  },
  },
};

export const dummyTrellisChartData: TrellisChartMetaData = {chartData:[{name: 'Sales', series: [-0.002, 1.2, 2, 50]},
{name: 'Units', series: [-0.7, -0.9, 3, 1.1]}], yAxisLabels: ['Promotions', 'On Shelf Availability', 'Assortment', 'Price'],
 xAxisTitle: 'YoY Change', suffix: '%', showDataLabels: true, showGridLines: true};
