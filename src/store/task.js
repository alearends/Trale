// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase/supabase";

export const useTaskStore = defineStore("Tasks", {
  state: () => ({
    tasks: [],
  }),

  actions: {
    async getTaskId(title, $event) {
      const response = await supabase
      .from('Tasks')
      .select('id')
      .filter({ title: title });
      console.log(response);
      const { rows } = response;
      if (rows.length > 0) {
        return rows[0].id;
      } else {
        return null;
      }
    },

// const { rows } = await supabase.from('tasks').select('id').where({ task_name: 'My Task' });
// const taskId = rows[0].id;

    async fetchTasks(boardId) {
      try {
        const { data: tasks, error } = await supabase  //data: tasks
        .from("Tasks")
        .select()
        .eq('board_id', boardId)
        .order("task_id", { ascending: false });
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
          board_id: board_id,
        },
      ]);
      if (error) {
        console.log(error);
      } else {
        // this.tasks.push(taskCreated[0]);
        this.tasks.push(taskCreated);
      };
      refreshPage();
    },

    async deleteTask(taskId) {
      if (!taskId) {
        console.log("Task ID is not provided");
        return;
    }
      const { error } = await supabase
        .from("Tasks")
        .delete()
        .eq('task_id', taskId);
      if (error) {
        console.log(error);
      } else {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      }
    },

    async updateTitleTask(title, task_id, board_id) {
      const { data, error } = await supabase
        .from("Tasks")
        .update({ title: title, board_id: board_id })
        .match({ id: task_id });
    },

    async editTask(title, task_id, created_at, board_id) {
      try {
        const { error } = await supabase
          .from("tasks")
          .update({
            title: title,
            task_id: task_id,
            created_at: created_at,
            board_id: board_id,
            is_complete: false,
          })
          .match({ task_id: task_id });
      } catch (error) {
        throw error.message;
      }
    },

    async completeTask(id) {
      try {
        const { error } = await supabase
          .from("tasks")
          .update({ is_complete: true, completed_at: new Date() })
          .eq("task_id", task_id);
      } catch (error) {}
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

function refreshPage(){
  location.reload()
}
