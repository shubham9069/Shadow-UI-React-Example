import styles from "./Calendar.module.scss";
import { ShadowCalendar } from "shadow-ui-react";

const Calendar = () => {
  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = month === 0 ? 11 : month - 1;
  let prevYear = prevMonth === 11 ? year - 1 : year;
  let nextMonth = month === 11 ? 0 : month + 1;
  let nextYear = nextMonth === 0 ? year + 1 : year;

  let minDate = new Date();

  minDate.setMonth(prevMonth);
  minDate.setFullYear(prevYear);

  let maxDate = new Date();

  maxDate.setMonth(nextMonth);
  maxDate.setFullYear(nextYear);
  const onDateSelect=(date:any)=>{
    console.log('on Date Select Event', date);
  }

  return (
    <div className={styles["container"]}>
      <p className={styles["section-header-container"]}>
        <span className={styles["section-header"]}>Calendar different types</span>{" "}
        <span className={styles["section-desc"]}>(Check console after clicking any button to view the object)</span>
      </p>
      <div className={styles["section-main"]}>

      <div style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
        <h4>Calendar Basic</h4>
      <ShadowCalendar showIcon={false} onChange={onDateSelect} />
      </div>

      <div style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
        <h4>Calendar with icon</h4>
        <ShadowCalendar onChange={onDateSelect} showWeek={true} type="date" dateFormat="dd/mm/y" inline={false} disabledDays={[0, 6]} />
      </div>

      <div style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
        <h4>Calendar without weeks</h4>
        <ShadowCalendar onChange={onDateSelect} type="date" dateFormat="dd/mm/y" inline={false} disabledDays={[0, 6]} />
      </div>

      <div style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
        <h4>Calendar min and max date</h4>
        <ShadowCalendar minDate={minDate} maxDate={maxDate} type="date" dateFormat="dd/mm/y" inline={false} disabledDays={[0, 6]} onChange={onDateSelect} />
      </div>
      
      <div style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
        <h4>Calendar with multiple</h4>
        <ShadowCalendar minDate={minDate} maxDate={maxDate} onChange={onDateSelect} selectionMode='multiple' />
      </div>
      
      <div style={{display: "flex", flexDirection: "column", gap: "0.25rem"}}>
        <h4>calendar with range</h4>
        <ShadowCalendar minDate={minDate} maxDate={maxDate} onChange={onDateSelect} selectionMode='range' />
      </div>
      
      {/* <h4>calendar with button bar</h4>
      <ShadowCalendar minDate={minDate} maxDate={maxDate} onChange={onDateSelect} selectionMode='range' /> */}
      
      {/* <h4>calendar with touch UI</h4>
      <ShadowCalendar type="date" onChange={onDateSelect} /> */}
      
      {/* <h4>calendar with time only</h4>
      <ShadowCalendar type="time" onChange={onDateSelect} /> */}
      
      {/* <h4>calendar with time format</h4>
      <ShadowCalendar onChange={onDateSelect} /> */}
      
      {/* <h4>calendar with month</h4>
      <ShadowCalendar  type="month"  onChange={onDateSelect} /> */}
      
      {/* <h4>calendar with year</h4>
      <ShadowCalendar type="year" onChange={onDateSelect} /> */}
   
      
      </div>
    </div>
  );
};

export default Calendar;
