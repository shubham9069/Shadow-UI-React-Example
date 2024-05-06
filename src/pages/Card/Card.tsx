import React from "react";
import styles from "./Card.module.scss";
import { ShadowCard,  ShadowCardOption, ShadowChartMetaData, ShadowChart } from "shadow-ui-react";

const Card = () => {
  const cardOption: ShadowCardOption = {
    isDragable: true,
    showAction: true,
    title: "Across divisions improvements",
  };

  const tieredMenuItem: any[] = [
    {
      label: "Home",
      url: "/",
      icon: "pi pi-home",
      className: "danger",
    },
    {
      label: "Boards",
      url: "/boards",
      icon: "pi pi-th-large",
      useTemplate: true,
    },
  ];

  const tieredMenuSelectEvent = (event: any, index?: any) => {
    alert(JSON.stringify(event) + index);
  };

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const createColumnChart = () => {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 4; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 3}`,
        y: getRandomNumber(0, 1000),
      });
    }

    const chartData: ShadowChartMetaData = {
      updateFlag: true,
      chart: {
        type: "column",
      },
      title: {
        text: "",
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
        type: "category",
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
          name: "Amount",
          allowPointSelect: true,
          data,
        },
        {
          name: "Sales",
          allowPointSelect: true,
          data,
        },
      ],
    };

    return chartData;
  };

  const eastDivisionCardOption: ShadowCardOption = {
    isDragable: true,
    showAction: true,
    title: "East Division Improvements",
    shadowTag: { type: "info", label: "East Division Recommendations", icon: "pi pi-th-large", isPill: true },
  };

  const westDivisionCardOption: ShadowCardOption = {
    isDragable: true,
    showAction: true,
    title: "West Division Improvements",
    shadowTag: { type: "info", label: "West Division Recommendations", icon: "pi pi-th-large", isPill: true },
  };

  const northDivisionCardOption: ShadowCardOption = {
    isDragable: true,
    showAction: true,
    title: "North Division Improvements",
    shadowTag: { type: "info", label: "North Division Recommendations", icon: "pi pi-th-large", isPill: true },
  };

  const southDivisionCardOption: ShadowCardOption = {
    isDragable: true,
    showAction: true,
    title: "South Division Improvements",
    shadowTag: { type: "info", label: "South Division Recommendations", icon: "pi pi-th-large", isPill: true },
  };

  const barChartData: ShadowChartMetaData = createColumnChart();

  const onClickTag = (event: any) => {
    console.log(event);
  };

  return (
    <>
      <div className={styles["grid"]}>
        <div className={styles["col-12"]}>
          <ShadowCard cardOption={cardOption} menuItem={tieredMenuItem} onSelect={tieredMenuSelectEvent} onClickTag={onClickTag}>
            <p>
              <i className={"shadow-icon shadow-insights-fill"}></i>
              Company Growth Potential: Actions identified predicted to generate incremental <b>$140MM</b> in sales and <b>30MM</b> in profit
            </p>
            <br></br>
            <ShadowChart shadowChartMetaData={barChartData} displayGridLines={true}></ShadowChart>
          </ShadowCard>
        </div>
        <div className={styles["col-6"]}>
          <ShadowCard cardOption={eastDivisionCardOption} menuItem={tieredMenuItem} onClickTag={onClickTag}>
            In the East division, there's potential for an incremental <b>$61 million</b> in sales and <b>$15 million</b> in profit. More than half of
            this potential lies in improving promotional strategies.
          </ShadowCard>
        </div>
        <div className={styles["col-6"]}>
          <ShadowCard cardOption={westDivisionCardOption} menuItem={tieredMenuItem} onClickTag={onClickTag}>
            In the West division, there's a potential increase of <b>$49 million</b> in sales and <b>$8 million</b> in profit. The Fresh department
            represents 60% of this improvment.
          </ShadowCard>
        </div>

        <div className={styles["col-6"]}>
          <ShadowCard cardOption={northDivisionCardOption} menuItem={tieredMenuItem} onClickTag={onClickTag}>
            In the North division, there's a chance to boost sales by <b>$18 million</b> and profit by <b>$4 million</b>. General Mills products
            contribute to 40% of this potential growth.
          </ShadowCard>
        </div>
        <div className={styles["col-6"]}>
          <ShadowCard cardOption={southDivisionCardOption} menuItem={tieredMenuItem} onClickTag={onClickTag}>
            In the South division, there's identified improvements for an incremental <b>$22 million</b> in sales and
            <b>$3 million</b> in profit. Assortment optimization represents a significant 35% of this potential
          </ShadowCard>
        </div>
      </div>
    </>
  );
};

export default Card;
