const API_URL = 'http://localhost:3000/api/resultados';
const tablaBody = document.querySelector('#tabla-resultados tbody');
const mensaje = document.getElementById('mensaje');
const fechaFiltro = document.getElementById('fechaFiltro');
const ctx = document.getElementById('graficoPosicion').getContext('2d');
const themeToggle = document.getElementById('theme-toggle');
const btnGrafico = document.getElementById('btn-grafico');

let grafico;

// Cargar datos desde API
async function cargarDatos(fecha = "") {
  try {
    mensaje.textContent = "Cargando datos...";
    tablaBody.innerHTML = "";

    let url = API_URL;
    if (fecha) url = `${API_URL}/${fecha}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.length === 0) {
      mensaje.textContent = "No hay datos para mostrar.";
      if (grafico) grafico.destroy();
      return;
    }

    mensaje.textContent = "";

    data.forEach((r, i) => {
      const tr = document.createElement('tr');
      tr.style.opacity = 0;
      tr.innerHTML = `
        <td>${r.id}</td>
        <td>${new Date(r.fecha).toLocaleString()}</td>
        <td>${r.posicion_mm}</td>
        <td>${r.estabilidad}</td>
      `;
      tablaBody.appendChild(tr);
      setTimeout(() => {
        tr.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        tr.style.opacity = 1;
        tr.style.transform = "translateY(0)";
      }, i * 100);
    });

    const labels = data.map(r => new Date(r.fecha).toLocaleTimeString());
    const posiciones = data.map(r => r.posicion_mm);

    if (grafico) grafico.destroy();

    grafico = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Posición (mm)',
          data: posiciones,
          borderColor: 'rgba(13, 110, 253, 1)',
          backgroundColor: 'rgba(13, 110, 253, 0.2)',
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true } },
        animation: { duration: 1000, easing: 'easeInOutQuart' },
        scales: {
          x: { title: { display: true, text: 'Hora' } },
          y: { title: { display: true, text: 'Posición (mm)' } }
        }
      }
    });

  } catch (err) {
    console.error("Error al cargar datos:", err);
    mensaje.textContent = "Error al cargar los datos. Revisa la consola.";
  }
}

// Filtro por fecha
fechaFiltro.addEventListener('change', e => {
  if (e.target.value) cargarDatos(e.target.value);
  else cargarDatos();
});

// Modo oscuro
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Scroll al gráfico
btnGrafico.addEventListener('click', () => {
  document.getElementById('seccion-grafico').scrollIntoView({ behavior: 'smooth' });
});

// Cargar preferencia de tema y datos
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = "☀️";
  }
  cargarDatos();
});
