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
- Handles task data, status updates, deletion, filtering, sorting, and user-added tasks.
- Composes the `TaskFilter`, `TaskList`, and optional `AddTaskForm` components.

### TaskList.tsx
- Renders a list of task items using the `TaskItem` component.
- Applies conditional rendering to handle cases where no tasks are available.
- Includes sorting functionality and passes event handlers to control task order and movement.

### TaskItem.tsx
- Displays individual task details such as title, description, status, priority, and due date.
- Provides functionality to change a task's status, delete the task, or move it up/down in the list.
- Applies visual indicators and styling based on task properties.

### TaskFilter.tsx
- Provides dropdown selectors to filter tasks by status and priority.
- Triggers callbacks to inform the parent component of selected filters.

### AddTaskForm.tsx (Optional Feature)
- Provides input fields and a submit button for adding new tasks.
- Controlled component that lifts state to the `App.tsx` level on submit.

### types/index.ts
- Contains all shared TypeScript types and interfaces.
- Ensures type-safe component props and state structures.

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
- Component-driven architecture for reusability and clarity
- Responsive layout and accessibility-aware practices

---

## One Step Further (Optional Enhancements)

The following advanced features were added for extended practice:

- Sort tasks by due date using a dedicated button in the `TaskList` component.
- Add new tasks dynamically via a controlled form component.
- Reorder tasks using "Move Up" and "Move Down" buttons within each task card.

---

## Built With

- React
- TypeScript
- Vite
- Netlify (for deployment)

---

## License

This project was completed for educational purposes as part of Lab 9.3.