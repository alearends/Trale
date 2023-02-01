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

    async fetchTasks(boardId) {
      try {
        const { data: tasks, error } = await supabase 
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
        this.tasks.push(taskCreated);
      };
      refreshPage();
    },

    async deleteTask(taskId) {
      const { data, error } = await supabase
        .from("Tasks")
        .delete()
        .eq('task_id', taskId);
      return {data, error}
      if (error) {
        console.log(error);
      } else {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      }
    },

    async updateTitleTask(title, taskId, board_id) {
      const { data, error } = await supabase
        .from("Tasks")
        .update({ title: title, board_id: board_id })
        .eq('task_id', taskId);
    },

    async editTask(title, taskId, created_at, board_id) {
      try {
        const { error } = await supabase
          .from("Tasks")
          .update({
            title: title,
            taskId: taskId,
            created_at: created_at,
            board_id: board_id,
            is_complete: false,
          })
          .eq('task_id', taskId);
      } catch (error) {
        throw error.message;
      }
    },

    // const tareaCreada = ({
    //   title: title,
    //   taskId: taskId,
    //   created_at: created_at,
    //   board_id: board_id,
    //   is_complete: false
    // }),

    async completeTask(taskId) {
      try {
        const { data, error } = await supabase
          .from("Tasks")
          .update({ is_complete: true})
          .eq('task_id', taskId);
          return {data, error}; 
          if (error) {
            throw new Error(error);
          }
          return data;
        } catch (error) {
          console.error(error);
        }
      },

    async updateIsCompleteTask(is_complete, taskId, boardId) {
      const { data, error } = await supabase
        .from("Tasks")
        .update({ is_complete: is_complete})
        .match({board_id: boardId, task_id: taskId })
    },

    async updateTaskPosition(board_id, taskId, new_position) {
    const { data, error } = await supabase
    .from("Tasks")
    .update({ position: new_position })
    .where({board_id: board_id, task_id: taskId })
    },
    
  },
});

function refreshPage(){
  location.reload()
}
