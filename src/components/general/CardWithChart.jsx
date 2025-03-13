import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import Chart from "react-apexcharts";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const CardWithLineChart = () => {
    const {isDarkMode} = useThemeContext()
    const {t} = useTranslation()
  const chartOptions = {
    chart: {
      id: "line-chart",
      toolbar: {
        show: false,
      },
      offsetX: 0,
      background: `${isDarkMode?"#1C252E":""}`, 
    },
    xaxis: {
      categories: [`${t('feb')}`, "Feb", "Mar", "Apr"],
    //   show: false, // Hide x-axis
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },

      tooltip: {
        enabled: false,
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      show: false, // Hide y-axis
    },
    title: {
      text: "",
      align: "left",
      style: {
        fontSize: "10px",
        fontWeight: "bold",
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels on the line
    },
    grid: {
      show: false, // Hide grid lines
    },
    stroke: {
      curve: "smooth", // Smooth curve for the line
      width: 1.5,

    },
    tooltip: {
      enabled: true, // Enable tooltips
      shared: true, // Show shared tooltips
      intersect: false, // Show tooltips for all points, not just the nearest
    },
    theme: {
        mode: `${isDarkMode?"dark":""}` // Enable dark mode
      }
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [30, 40, 35, 50],
    },
  ];
  const styles = {
    card: {
    
      margin: "20px",
      maxWidth: "150px",
      
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    title: {
      margin:0,
    },
    chartContainer: {
      position: 'relative', // Position relative for the overlay
    },
    overlay:{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      height: '50px', // Adjust height as needed
      backgroundColor: `${isDarkMode?"#1C252E":"white"}`, // White overlay to hide the x-axis
      zIndex: 100 // Ensure overlay is on top
    }
  };

  return (
    <div style={styles.card}>      <div style={styles.chartContainer}>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="line"
          width="115"
          height="115"
        />
        <div style={styles.overlay} /> 
      </div>
    </div>
  );
};





export default CardWithLineChart;
