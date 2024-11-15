const ctx = document.getElementById('socialMediaChart').getContext('2d');

// Dados atualizados para o gráfico
const data = {
  labels: ['Facebook', 'YouTube', 'WhatsApp', 'Instagram', 'TikTok'],
  datasets: [{
    label: 'Usuários (em bilhões)',
    data: [2.96, 2.74, 2.24, 2.0, 1.05],
    backgroundColor: [
      '#9c27b0',
      '#ba68c8',
      '#ce93d8',
      '#d1c4e9',
      '#ab47bc'
    ],
    borderColor: '#4a0072',
    borderWidth: 1
  }]
};

// Configurações do gráfico
const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Renderiza o gráfico
new Chart(ctx, config);
