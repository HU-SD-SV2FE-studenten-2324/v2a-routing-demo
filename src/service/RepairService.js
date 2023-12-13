const KEY = 'repairs';

class RepairService {
  constructor() {
    // Initialize the repairs array in localStorage
    const repairs = JSON.parse(window.localStorage.getItem(KEY)) || [];
    if (repairs.length === 0) {
      window.localStorage.setItem(KEY, JSON.stringify(repairs));
    }

    // find the highest repair id to use as the next id
    this.nextId = 0;
    repairs.forEach((repair) => {
      if (repair.id >= this.nextId) {
        this.nextId = repair.id + 1;
      }
    });
  }

  addRepair(repair) {
    return new Promise((resolve, reject) => {
      let repairs = JSON.parse(window.localStorage.getItem(KEY)) || [];
      // assign an id to the repair
      repair.id = this.nextId;
      repairs = [...repairs, repair];
      window.localStorage.setItem(KEY, JSON.stringify(repairs));

      // increment the next id
      this.nextId+=1;

      resolve(repairs);
    });
  }

  getRepair(id) {
    return new Promise((resolve, reject) => {
      const repairs = JSON.parse(window.localStorage.getItem(KEY)) || [];
      const repair = repairs.find((repair) => repair.id === id);
      resolve(repair);
    });
  }

  getRepairs() {
    return new Promise((resolve) => {
      const repairs = JSON.parse(window.localStorage.getItem(KEY)) || [];
      resolve(repairs);
    });
  }

  removeRepair(id) {
    return new Promise((resolve, reject) => {
      let repairs = JSON.parse(window.localStorage.getItem(KEY)) || [];
      repairs = repairs.filter((repair) => repair.id !== id);
      window.localStorage.setItem(KEY, JSON.stringify(repairs));
      resolve(repairs);
    });
  }
}

const repairService = new RepairService();
export default repairService;