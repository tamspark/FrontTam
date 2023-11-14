import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import "./calendar.css";

interface MonthOption {
  value: number;
  label: string;
}

function MonthTable() {
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [selectedYear, setSelectedYear] = useState<number>(2023); // Default to a specific year (you can set it to the current year)
  const [daysOfMonth, setDaysOfMonth] = useState<any>(31);
  const [dayNames, setDayNames] = useState<string[]>([]);
  const [apartmentData, setApartmentData] = useState<any[]>([]);

  //   const [apiResponse, setApiResponse] = useState<any>(null);
  const makeApiRequest = () => {
    const apiUrl = `http://192.168.10.210:8080/TAM/1/reservations/calendar`;

    axios
      .get(apiUrl, {
        params: {
          fromDate: firstDate,
          toDate: lastDate,
        },
      })
      .then((response: { data: any }) => {
        setApartmentData(response.data);
        console.log(response);
        console.log(apartmentData);
      })
      .catch((error) => {
        console.error("API Request Error:", error);
      });
  };

  const monthOptions: MonthOption[] = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const generateDayNames = useCallback(
    (selectedMonth: number, selectedYear: number) => {
      const firstDayOfMonth = new Date(selectedYear, selectedMonth - 1, 1);
      const dayNames = [];

      const dayNamesArray = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

      let currentDayIndex = firstDayOfMonth.getDay();

      for (let i = 1; i <= daysOfMonth; i++) {
        dayNames.push(dayNamesArray[currentDayIndex]);
        currentDayIndex = (currentDayIndex + 1) % 7;
      }

      return dayNames;
    },
    [daysOfMonth]
  );

  useEffect(() => {
    const daysInSelectedMonth = getDaysInMonth(selectedMonth, selectedYear);
    setDaysOfMonth(daysInSelectedMonth);

    const newDayNames = generateDayNames(selectedMonth, selectedYear);
    setDayNames(newDayNames);
  }, [generateDayNames, selectedMonth, selectedYear]);

  useEffect(() => {
    makeApiRequest();
  }, [selectedMonth, selectedYear, daysOfMonth]);

  function startDate(selectedMonth: number, selectedYear: number) {
    const formattedMonth = selectedMonth.toString().padStart(2, "0");
    return `${selectedYear}-${formattedMonth}-01`;
  }

  function endDate(selectedMonth: number, selectedYear: number) {
    const formattedMonth = selectedMonth.toString().padStart(2, "0");
    return `${selectedYear}-${formattedMonth}-${daysOfMonth}`;
  }

  const firstDate = startDate(selectedMonth, selectedYear);
  console.log("Selected Date:", firstDate);
  const lastDate = endDate(selectedMonth, selectedYear);
  console.log("Selected Date:", lastDate);
  return (
    <div>
      <h2>Month Table</h2>

      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
      >
        {monthOptions.map((month: MonthOption) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={selectedYear}
        onChange={(e) => setSelectedYear(parseInt(e.target.value))}
      />
      <button onClick={makeApiRequest}>Update Table</button>

      <table className="table-container">
        <thead className="table-header">
          <tr>
            <td></td>
            {Array.from({ length: daysOfMonth }, (_, i) => (
              <th className="table-header"  key={i}>
                {i + 1}
              </th>
            ))}
          </tr>
          <tr>
            <td></td>
            {dayNames.map((dayName, index) => (
              <th key={index}>{dayName}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {apartmentData.map((apartment) => (
            <tr key={apartment.apartmentId}>
              <td>{apartment.apartmentName}</td>
              {Array.from({ length: daysOfMonth }, (_, i) => {
                const reservation = apartment.reservations.find(
                  (reservation: { allBookedDates: string[] }) =>
                    reservation.allBookedDates.includes(
                      `${selectedYear}-${selectedMonth
                        .toString()
                        .padStart(2, "0")}-${i + 1}`
                    )
                );
                return (
                  <td
                    style={{
                      border: "1px solid",
                      padding: "10px",
                      backgroundColor: reservation
                        ? reservation.blocked_booking
                          ? "rgb(197 194 194)"
                          : "rgb(164 203 221)"
                        : "white",
                    }}
                    key={i}
                  >
                    {reservation?.blocked_booking ? (
                      <span style={{ color: "red" }}>X</span>
                    ) : null}
                    {reservation && !reservation?.blocked_booking && (
                      <span style={{ color: "green" }}>✔</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MonthTable;
