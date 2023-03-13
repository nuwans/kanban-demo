

export interface iCreateTask {
  title: string;
  id:number,
  boardId:number,
  description?:string
  status:boolean, //completed
  columnId?:number,
  parentId?:number;
  subTasks?:iCreateTask[]

}


export interface iTask {
  title: string;
  id:number,
  description?:string;
  boardId:number,
  status:boolean,
  parentId?:number
  columnId:number,
  subTasks?:iTask[]

}

