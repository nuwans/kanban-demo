
import {  iBoard, iCreateBoard } from '../interfaces/board';
import { ApiService } from '../shared/services/apiService';

class BoardService extends ApiService {
  route: string;
  constructor() {
    super();
    this.route = '/boards';
  }

  getBoards = () => {
    return this.get(`${this.route}`);
  };
  addBoard = (board: iCreateBoard) => {
    return this.post(`${this.route}/`, board);
  };
  editBoard = (board: iBoard) => {
    return this.put(`${this.route}/`, board);
  };
  deletBoard = (id: number) => {
    return this.delete(`${this.route}/`, {id});
  };
}
export default new BoardService();
