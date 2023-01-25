// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase/supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),

  actions: {
    async fetchTasks(boardId) {
      try {
        const { data, error } = await supabase  //data: tasks
        .from("Tasks")
        .select()
        .eq('board_id', boardId)
        .order("id", { ascending: false });
      this.tasks = data;
      } catch(error) {
        console.log(error)
      }
      
    },
    async createTasks(title, is_complete, user_id, board_id) {
      const { data, error } = await supabase.from("tasks").insert([
        {
          title: title,
          is_complete: is_complete,
          user_id: user_id,
          board_id: board_id
        },
      ]);
    },
    async deleteTasks(board_id, task_id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .where({ board_id: board_id })
        .match({ id: task_id });
    },
    async updateTitleTask(title, task_id, board_id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: title, board_id: board_id })
        .match({ id: task_id });
    },
    async updateIsCompleteTask(is_complete, task_id, board_id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_complete: is_complete, board_id: board_id, id: task_id })
    },
    async updateTaskPosition(board_id, task_id, new_position) {
    const { data, error } = await supabase
    .from("tasks")
    .update({ position: new_position })
    .where({ board_id: board_id, id: task_id });
    },
  },
});
