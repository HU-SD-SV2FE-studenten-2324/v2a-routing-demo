import repairService from '../service/RepairService';

class RepairController {

  addRepair(repair) {
    return repairService.addRepair(repair);
  }

  getRepair(id) {
    return repairService.getRepair(id);
  }

  getRepairs() {
    return repairService.getRepairs();
  }

  removeRepair(id) {
    return repairService.removeRepair(id);
  }

  getTotalTodoTime() {
    return new Promise((resolve) => {
      const INIT_REPAIRTIME = 0;
      repairService.getRepairs().then((repairs) => {
        const totalTodoTime = repairs.reduce((total, repair) => total + repair.estimatedTime, INIT_REPAIRTIME);
        resolve(totalTodoTime);
      });
    });
  }
}

const repairController = new RepairController();

export default repairController;