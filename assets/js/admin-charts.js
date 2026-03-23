/**
 * WheelsShare - Admin ECharts Initialization
 * Inisialisasi grafik menggunakan data dari data.js
 */

document.addEventListener('DOMContentLoaded', () => {
  // Hanya jalankan jika ada elemen chart dan data tersedia
  if (typeof echarts === 'undefined' || typeof WS_DATA === 'undefined') return;

  const revenueChartEl = document.getElementById('revenueChart');
  const typeChartEl = document.getElementById('typeChart');

  // --- 1. Line Chart: Trend GMV Bulanan (2023) ---
  if (revenueChartEl) {
    const revenueChart = echarts.init(revenueChartEl);
    
    const optionRevenue = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          let val = params[0].value;
          // Format ke juta rupiah
          return `${params[0].name}<br/>GMV: Rp ${val.toLocaleString('id-ID')}`;
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: WS_DATA.analytics.dauMonths,
        axisLine: { lineStyle: { color: '#E2E8F0' } },
        axisLabel: { color: '#64748B' }
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: '#64748B',
          formatter: (value) => {
            return value / 1000000 + 'Jt';
          }
        },
        splitLine: { lineStyle: { color: '#F1F5F9', type: 'dashed' } }
      },
      series: [
        {
          name: 'GMV',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: { color: '#10B981' }, // emerald-500
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(16, 185, 129, 0.4)' },
              { offset: 1, color: 'rgba(16, 185, 129, 0.0)' }
            ])
          },
          lineStyle: { width: 3 },
          data: WS_DATA.analytics.gmv2023
        }
      ]
    };
    revenueChart.setOption(optionRevenue);
    
    // Resize chart on window resize
    window.addEventListener('resize', () => revenueChart.resize());
  }

  // --- 2. Donut Chart: Distribusi Tipe Mobil ---
  if (typeChartEl) {
    const typeChart = echarts.init(typeChartEl);
    
    const optionType = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}%'
      },
      legend: {
        bottom: '5%',
        left: 'center',
        textStyle: { color: '#64748B' }
      },
      color: ['#3B82F6', '#10B981', '#F59E0B', '#6366F1'],
      series: [
        {
          name: 'Tipe Mobil',
          type: 'pie',
          radius: ['45%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
          },
          labelLine: {
            show: false
          },
          data: WS_DATA.analytics.carTypes
        }
      ]
    };
    typeChart.setOption(optionType);
    
    window.addEventListener('resize', () => typeChart.resize());
  }
});
