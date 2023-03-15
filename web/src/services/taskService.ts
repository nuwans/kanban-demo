
import { iCreateTask, iTask } from '../interfaces/tasks';
import { ApiService } from '../shared/services/apiService';

class TaskService extends ApiService {
  route: string;
  constructor() {
    super();
    this.route = '/tasks';
  }

  
  createTask = (task: iCreateTask) => {
    return this.post(`${this.route}/`, task);
  };
  updateTask = (task: iTask) => {
    return this.put(`${this.route}/`, task);
  };
  editSubTask = (task: Partial<iTask>) => {
    return this.put(`${this.route}/subtask`, task);
  };
  editColumn = (task: Partial<iTask>) => {
    return this.put(`${this.route}/column`, task);
  };
  deleteTask = (task: iTask) => {
    return this.delete(`${this.route}/`, {id:task.id});
  };
}
export default new TaskService();
