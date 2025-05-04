export class Todo {
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
  isDone: boolean;
  tag: string[];
  priority: number;
  useDueDate: boolean;
  dueDate: string;
  timeMode: string;
  isRepeating: boolean;

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
    this.isFavorite = false;
    this.isDone = false;
    this.tag = [];
    this.priority = 0;
    this.useDueDate = true;
    this.dueDate = '';
    this.timeMode = 'all-day';
    this.isRepeating = false;
  }
}
