import MainController from './controller/MainController.js';

class App {
  async run() {
    await MainController.getUserVisitDay();
    await MainController.getUserOrderMenu();
    MainController.printResult();
  }
}

export default App;
