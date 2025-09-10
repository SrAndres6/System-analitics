const { ejecutarLog } = require('./logger');
const { iniciarCLI } = require('./cli');
const { iniciarMonitor } = require('./systemMonitor');

function main() {
  // Ejecutar el sistema de logs (práctica 1)
  ejecutarLog();

  // Iniciar monitor del sistema (práctica 3)
  iniciarMonitor();

  // Iniciar CLI para interacción (práctica 2)
  iniciarCLI();
}

main();
