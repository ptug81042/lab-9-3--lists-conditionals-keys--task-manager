# Task Manager App – Lab 9.3

This is a Task Manager application built using React and TypeScript with Vite. It demonstrates the use of lists, keys, and conditional rendering in a structured component-based architecture.

---

## Live Demo

View the deployed project here:  
https://golden-pithivier-5277c1.netlify.app/

---

## Project Structure and Component Overview

### App.tsx
- The main component that manages the overall application state.  
- Handles task data, status updates, deletion, filtering, sorting, and task movement logic.  
- Composes the `TaskFilter`, `TaskList`, and `AddTaskForm` components.

### TaskList.tsx
- Renders a list of task items using the `TaskItem` component.  
- Applies conditional rendering to handle cases where no tasks are available.  
- Supports sorting tasks by due date.

### TaskItem.tsx
- Displays individual task details such as title, description, status, priority, and due date.  
- Provides functionality to change a task's status, delete it, and move it up or down in the list.  
- Applies visual indicators and styling based on task properties.

### TaskFilter.tsx
- Provides dropdown selectors to filter tasks by status and priority.  
- Triggers callbacks to inform the parent component of selected filters.

### AddTaskForm.tsx
- A controlled form component for adding new tasks.  
- Collects task details including title, description, status, priority, and due date.

### types/index.ts
- Contains all shared TypeScript types and interfaces.  
- Ensures type-safe component props and state structures.

---

## Visual Indicators and Styling

- **Status-based Styling:**  
  Each task displays a colored left border indicating its status:  
  - **Pending:** Orange border (`#f39c12`) — indicates tasks that are waiting to be started.  
  - **In Progress:** Blue border (`#3498db`) — shows tasks currently being worked on.  
  - **Completed:** Green border (`#2ecc71`) — marks tasks that are finished; these tasks also have reduced opacity and strikethrough text to visually signify completion.

- **Priority Indicators:**  
  Tasks have colored badges and background shading to reflect priority levels:  
  - **Low Priority:** Green badge and soft green background (`#4caf50`, `#e8f5e9`) — implies less urgent tasks that can be addressed later.  
  - **Medium Priority:** Orange badge and light orange background (`#ff9800`, `#fff3e0`) — indicates tasks that require attention but are not critical.  
  - **High Priority:** Red badge and light red background (`#f44336`, `#ffebee`) — highlights urgent tasks needing immediate focus.

- **Interactivity:**  
  Hovering over a task item increases shadow and highlights the border to improve visual focus. Active states provide tactile feedback with subtle color changes.

- **Buttons:**  
  Action buttons (Move Up, Move Down, Delete) change background colors on hover and active states for usability.

These visual cues improve user experience by making task status and priority immediately recognizable and enhancing the interface’s responsiveness.

---

## Reflection Questions

**1. How did you ensure unique keys for your list items?**  
Each task uses a unique `id` string as the key when rendered inside the `TaskList` component. This ensures predictable rendering behavior and allows React to manage list updates efficiently.

**2. What considerations did you make when implementing the filtering functionality?**  
Filtering logic was implemented in a type-safe way using defined union types. Empty string values are converted to `undefined` before filtering. This approach ensures both user flexibility and consistency with the type system.

**3. How did you handle state updates for task status changes?**  
Status updates are handled by passing a callback (`onStatusChange`) from `App.tsx` to each `TaskItem`. When invoked, the task list is updated immutably using the `.map()` function, and the updated list is stored in state.

**4. What challenges did you face when implementing conditional rendering?**  
Ensuring clear fallback behavior (e.g., displaying "No tasks to display") required careful condition checks. Additionally, styling task cards based on dynamic properties like status and priority involved structuring CSS and JSX to be both readable and reusable.

---

## Features

- Fully typed with TypeScript for reliable component interaction  
- Status and priority-based task filtering  
- Visual styling and layout based on task properties  
- Sorting tasks by due date  
- Adding new tasks with a form  
- Moving tasks up and down the list  
- Component-driven architecture for reusability and clarity  
- Responsive layout and accessibility-aware practices

---

## Built With

- React  
- TypeScript  
- Vite  
- Netlify (for deployment)

---

## License

This project was completed for educational purposes as part of Lab 9.