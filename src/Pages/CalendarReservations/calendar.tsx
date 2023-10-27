import React, { useState } from 'react';

interface MonthOption {
  value: number;
  label: string;
}

function MonthTable() {
  const [selectedMonth, setSelectedMonth] = useState<number>(1); // Default to January
  const [selectedYear, setSelectedYear] = useState<number>(2023); // Default to a specific year (you can set it to the current year)
  const [daysOfMonth, setDaysOfMonth] = useState<any>(31);
  const [dayNames, setDayNames] = useState<string[]>([]);

  const monthOptions: MonthOption[] = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const generateDayNames = (selectedMonth: number, selectedYear: number) => {
    const firstDayOfMonth = new Date(selectedYear, selectedMonth - 1, 1);
    const dayNames = [];
  
    // Define an array of day names starting with Monday
    const dayNamesArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    let currentDayIndex = firstDayOfMonth.getUTCDay() ; // Adjust for 0-based index starting with Sunday
  
    if (currentDayIndex === -1) {
      currentDayIndex = 6; // Sunday should be at the end of the week
    }
  
    for (let i = 0; i < 7; i++) {
      dayNames.push(dayNamesArray[currentDayIndex]);
      currentDayIndex = (currentDayIndex + 1) % 7;
    }
  
    return dayNames;
  };
  

  const updateMonthTable = () => {
    const daysInSelectedMonth = getDaysInMonth(selectedMonth, selectedYear);
    setDaysOfMonth(daysInSelectedMonth);
    const newDayNames = generateDayNames(selectedMonth, selectedYear);
    setDayNames(newDayNames);
  };

  return (
    <div>
      <h2>Month Table</h2>
      <select value={selectedMonth} onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
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

      {/* Render your table here */}
      <table>
        <thead>
          <tr style={{backgroundColor:"white"}}>
            {Array.from({ length: daysOfMonth }, (_, i) => (
              <th key={i}>{i + 1}</th>
            ))}
          </tr>
          <tr style={{backgroundColor:"white"}}>
            {dayNames.map((dayName, index) => (
              <th key={index}>{dayName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>

      <button onClick={updateMonthTable}>Update Table</button>
    </div>
  );
}

export default MonthTable;
