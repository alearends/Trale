// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase/supabase";

export const useTaskStore = defineStore("Tasks", {
  state: () => ({
    tasks: [],
  }),

  actions: {
    async fetchTasks(boardId) {
      try {
        const { data: tasks, error } = await supabase  //data: tasks
        .from("Tasks")
        .select()
        .eq('board_id', boardId)
        .order("id", { ascending: false });
      this.tasks = tasks;
      return tasks;
      } catch(error) {
        console.log(error)
      }
      
    },
    async createTasks(title, board_id) {
      const { data: taskCreated, error } = await supabase.from("Tasks").insert([
        {
          title: title,
          is_complete: false,
          board_id: board_id
        },
      ]);
      if (error) {
        console.log(error);
      } else {
        this.tasks.push(taskCreated[0]);
      }
    },

    async deleteTasks(board_id, task_id) {
      const { data, error } = await supabase
        .from("Tasks")
        .delete()
        .where({ id_board: board_id })
        .match({ id: task_id });
    },

    async updateTitleTask(title, task_id, board_id) {
      const { data, error } = await supabase
        .from("Tasks")
        .update({ title: title, board_id: board_id })
        .match({ id: task_id });
    },

    async updateIsCompleteTask(is_complete, task_id, board_id) {
      const { data, error } = await supabase
        .from("Tasks")
        .update({ is_complete: is_complete, board_id: board_id, id: task_id })
    },

    async updateTaskPosition(board_id, task_id, new_position) {
    const { data, error } = await supabase
    .from("Tasks")
    .update({ position: new_position })
    .where({ board_id: board_id, id: task_id });
    },
    
  },
});
