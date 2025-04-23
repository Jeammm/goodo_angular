export class Todo {
  id: number;
  name: string;
  description: string;
  favourite: boolean;
  tags: string[];
  priority: string;
  useTime: boolean;
  dueDate: string;
  timeMode: string;
  repeat: string;
  completed: boolean;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.favourite = false;
    this.tags = [];
    this.priority = 'high';
    this.useTime = true;
    this.dueDate = '';
    this.timeMode = 'all-day';
    this.repeat = 'no-repeat';
    this.completed = false;
  }
}

export const mockTodos: Todo[] = [
  {
    id: 1,
    name: 'Bag shop 3D',
    description: 'Finish modeling and texture for bag',
    favourite: true,
    tags: ['design', '3d'],
    priority: 'High',
    useTime: true,
    dueDate: '2025-04-20T15:00:00',
    timeMode: 'time',
    repeat: 'no-repeat',
    completed: false,
  },
  {
    id: 2,
    name: 'Hw#10 Database',
    description: 'ER diagram and schema normalization',
    favourite: true,
    tags: ['school', 'database'],
    priority: 'Medium',
    useTime: false,
    dueDate: '2025-04-21',
    timeMode: 'allDay',
    repeat: 'no-repeat',
    completed: false,
  },
  {
    id: 3,
    name: 'Project SSD',
    description: 'Integrate backend with UI',
    favourite: false,
    tags: ['school', 'project'],
    priority: 'Low',
    useTime: true,
    dueDate: '2025-04-22T20:00:00',
    timeMode: 'time',
    repeat: 'no-repeat',
    completed: false,
  },
  {
    id: 4,
    name: 'Mockup TODO app GDSC',
    description: 'Finish UI for todo mockup demo',
    favourite: false,
    tags: ['gdsc', 'frontend'],
    priority: 'Medium',
    useTime: false,
    dueDate: '2025-04-23',
    timeMode: 'allDay',
    repeat: 'always',
    completed: true,
  },
  {
    id: 5,
    name: 'Meeting CPSK: byenior',
    description: 'Prepare slides and summary points',
    favourite: false,
    tags: ['cpsk', 'meeting'],
    priority: 'High',
    useTime: true,
    dueDate: '2025-04-24T14:00:00',
    timeMode: 'time',
    repeat: 'once',
    completed: false,
  },
];
