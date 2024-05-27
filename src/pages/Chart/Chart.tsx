import React, { useState } from 'react'
import { ShadowButton, ShadowCard, ShadowChart, ShadowChartMetaData, ShadowTrellisChart, TrellisChartMetaData } from "shadow-ui-react";
import { cindeChartData } from '../../utils/dummyData';
import { bubbleChartData, dummyAreaChartData, dummyTrellisChartData } from '../../utils/chartData';
import CodeEditor from '../../layout/CodeEditor/CodeEditor';

const value = `import React, { useState } from 'react'
import { ShadowCard, ShadowChart, ShadowChartMetaData, ShadowTrellisChart, TrellisChartMetaData } from "shadow-ui-react";
import { cindeChartData } from '../../utils/dummyData';
import { bubbleChartData, dummyAreaChartData, dummyTrellisChartData } from '../../utils/chartData';

const Chart = () => {
  const trellisChartData: TrellisChartMetaData = dummyTrellisChartData;
  const CindeChartData: ShadowChartMetaData = cindeChartData;
  const BubbleChartData: ShadowChartMetaData = bubbleChartData;

  const [ChartData, setChartData] = useState(dummyAreaChartData);

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const createColumnChart = () => {
    const date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: date.getDate()/date.getMonth() + 1,
        y: getRandomNumber(1000, 10000),
      });
    }
    const chartData: ShadowChartMetaData = {
      updateFlag: true,
      chart: {
        type: 'column',
      },
      title: {
        text: 'Column Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        min: 0,
        title: undefined,
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: <div>Date: {point.key}</div>,
        pointFormat: <div>{series.name}: {point.y}</div>,
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          name: 'Amount',
          allowPointSelect: true,
          data,
        },
        {
          name: 'Sales',
          allowPointSelect: true,
          data,
        },
      ],
    };

    return chartData;
  }

  const createPieChart = () => {
    const date = new Date();
    const data: any[] = [];
    for (let i = 0; i < 5; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: date.getDate()/date.getMonth() + 1,
        y: getRandomNumber(0, 1000),
      });
    }
    const chartData: ShadowChartMetaData = {
      updateFlag: false,
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Pie Chart',
      },
      tooltip: {
        headerFormat: <span class="mb-2">Date: {point.key}</span><br>,
        pointFormat: <span>Amount: {point.y}</span>,
        useHTML: true,
      },
      series: [
        {
          name: null,
          innerSize: '50%',
          data,
        },
      ],
    };

    return chartData;
  }

  const BarChartData: ShadowChartMetaData = createColumnChart();
  const PieChartData: ShadowChartMetaData = createPieChart();

  const updateChart = () => {
    console.log('clicked')
    const date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push([
        date.getDate()/date.getMonth() + 1,
        getRandomNumber(0, 1000),
      ]);
    }

    setChartData({
      updateFlag: true,
      chart: {
        type: 'line',
      },
      title: {
        text: 'Line Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        title: {
          text: null,
        },
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: <div>Date: {point.key}</div>,
        pointFormat: <div>{series.name}: {point.y}</div>,
        shared: true,
        useHTML: true,
      },
      series: [
        {
          name: 'Amount',
          data,
        },
      ],
    })


    setInterval(() => {
      for (let i = 0; i < 10; i++) {
        date.setDate(new Date().getDate() + i);
        data.push([
          date.getDate()}/date.getMonth() + 1,
          getRandomNumber(0, 1000),
        ]);
      }
      ChartData.series = [
        {
          name: 'Amount',
          data,
        },
      ];
      ChartData.updateFlag = true;
      setChartData(ChartData)
    }, 1500);
  }



  return (
    <div style={{ display: 'flex', flexDirection: "column", gap: "10px", padding: "20px" }}>
      {/* <ShadowButton label="update chart" onButtonClick={() => { updateChart() }}></ShadowButton> */}
      <ShadowCard>
        <ShadowTrellisChart chartMetaData={trellisChartData}></ShadowTrellisChart>
        {/* <ShadowTrellisChart chartMetaData={trellisChartData}></ShadowTrellisChart> */}
      </ShadowCard>
      <ShadowCard>
        <ShadowChart shadowChartMetaData={CindeChartData} displayGridLines={true}></ShadowChart>
      </ShadowCard>
      <ShadowCard>
        <ShadowChart shadowChartMetaData={ChartData} displayGridLines={true}></ShadowChart>
      </ShadowCard>
      <ShadowCard>
        <ShadowChart shadowChartMetaData={BarChartData} displayGridLines={true}></ShadowChart>
      </ShadowCard>
      <ShadowCard>
        <ShadowChart shadowChartMetaData={PieChartData} displayGridLines={true}></ShadowChart>
      </ShadowCard>
      <ShadowCard>
        <ShadowChart shadowChartMetaData={BubbleChartData}></ShadowChart>
      </ShadowCard>
    </div>
  )
}

export default Chart;
`
const Chart = () => {
  const trellisChartData: TrellisChartMetaData = dummyTrellisChartData;
  const CindeChartData: ShadowChartMetaData = cindeChartData;
  const BubbleChartData: ShadowChartMetaData = bubbleChartData;

  const [ChartData, setChartData] = useState(dummyAreaChartData);

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const createColumnChart = () => {
    const date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: getRandomNumber(1000, 10000),
      });
    }
    const chartData: ShadowChartMetaData = {
      updateFlag: true,
      chart: {
        type: 'column',
      },
      title: {
        text: 'Column Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        min: 0,
        title: undefined,
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          name: 'Amount',
          allowPointSelect: true,
          data,
        },
        {
          name: 'Sales',
          allowPointSelect: true,
          data,
        },
      ],
    };

    return chartData;
  }

  const createPieChart = () => {
    const date = new Date();
    const data: any[] = [];
    for (let i = 0; i < 5; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: getRandomNumber(0, 1000),
      });
    }
    const chartData: ShadowChartMetaData = {
      updateFlag: false,
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Pie Chart',
      },
      tooltip: {
        headerFormat: `<span class="mb-2">Date: {point.key}</span><br>`,
        pointFormat: '<span>Amount: {point.y}</span>',
        useHTML: true,
      },
      series: [
        {
          name: null,
          innerSize: '50%',
          data,
        },
      ],
    };

    return chartData;
  }

  const BarChartData: ShadowChartMetaData = createColumnChart();
  const PieChartData: ShadowChartMetaData = createPieChart();

  const updateChart = () => {
    console.log('clicked')
    const date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push([
        `${date.getDate()}/${date.getMonth() + 1}`,
        getRandomNumber(0, 1000),
      ]);
    }

    setChartData({
      updateFlag: true,
      chart: {
        type: 'line',
      },
      title: {
        text: 'Line Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        title: {
          text: null,
        },
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      series: [
        {
          name: 'Amount',
          data,
        },
      ],
    })


    setInterval(() => {
      for (let i = 0; i < 10; i++) {
        date.setDate(new Date().getDate() + i);
        data.push([
          `${date.getDate()}/${date.getMonth() + 1}`,
          getRandomNumber(0, 1000),
        ]);
      }
      ChartData.series = [
        {
          name: 'Amount',
          data,
        },
      ];
      ChartData.updateFlag = true;
      setChartData(ChartData)
    }, 1500);
  }



  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
        }}
      >
        {/* <ShadowButton label="update chart" onButtonClick={() => { updateChart() }}></ShadowButton> */}
        <ShadowCard>
          <ShadowTrellisChart
            chartMetaData={trellisChartData}
          ></ShadowTrellisChart>
          {/* <ShadowTrellisChart chartMetaData={trellisChartData}></ShadowTrellisChart> */}
        </ShadowCard>
        <ShadowCard>
          <ShadowChart
            shadowChartMetaData={CindeChartData}
            displayGridLines={true}
          ></ShadowChart>
        </ShadowCard>
        <ShadowCard>
          <ShadowChart
            shadowChartMetaData={ChartData}
            displayGridLines={true}
          ></ShadowChart>
        </ShadowCard>
        <ShadowCard>
          <ShadowChart
            shadowChartMetaData={BarChartData}
            displayGridLines={true}
          ></ShadowChart>
        </ShadowCard>
        <ShadowCard>
          <ShadowChart
            shadowChartMetaData={PieChartData}
            displayGridLines={true}
          ></ShadowChart>
        </ShadowCard>
        <ShadowCard>
          <ShadowChart shadowChartMetaData={BubbleChartData}></ShadowChart>
        </ShadowCard>
      </div>
      <div style={{ padding: "0 2rem " }}>
        <h4>Chart Data Download File </h4>
        <ShadowButton
          icon="pi pi-download"
          loading={false}
          label="Download "
          buttonType="primary"
          size="sm"
          buttonActionStyle="brand"
          onButtonClick={() =>
            window.open(
              "https://drive.google.com/uc?export=download&id=1Jhf8hUNQOAFsqOJrd0JgqKMphl0-P5Tp",
              "_blank"
            )
          }
        />
      </div>
      <CodeEditor componentToString={value} />
    </>
  );
}

export default Chart