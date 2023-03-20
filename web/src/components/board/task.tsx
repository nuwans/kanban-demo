import { useDrag } from "react-dnd";
import { iTask } from "../../interfaces/tasks";
import {
  TaskCard,
  TaskName,
  TaskSubHeader,
} from "./styledComponent";
interface Props {
  task: iTask;
  openTask:(task:iTask)=>void
 
}
const TaskElement = ({ task,openTask }: Props) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type:'task',
      item: task,
      end(item, monitor) {
        const dropResult = monitor.getDropResult()
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [task],
  )
  const {subTasks=[],title,id}=task
  return (
    <TaskCard
    ref={drag}
    onClick={()=>{openTask(task)}}
    >
      <TaskName>{title}</TaskName>
      <TaskSubHeader>
        {subTasks?.filter((st) => !st.status).length} of{" "}
        {subTasks?.length} subtasks
      </TaskSubHeader>
    </TaskCard>
  );
};
export default TaskElement;
