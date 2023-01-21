// /store/board.js

import { defineStore } from "pinia";
import { supabase } from "../supabase/supabase";


export const useBoardStore = defineStore("boards", {
  state: () => ({
    boards: null,
  }),

  actions: {
    async fetchBoards() {
      // if (!auth.currentUser) {
      //   throw new Error("Usuario no autenticado");
      // }
      const { data: boards } = await supabase
        .from("boards")
        .select("*")
        .where({user_id: auth.currentUser.id})
        .order("id", { ascending: false });
      this.boards = boards;
    },
    async createBoards(title, user_id, color) {
    try {
      // if (!auth.currentUser) {
      //   throw new Error("Usuario no autenticado");
      // }
      console.log(title, user_id, color)
      const { data, error } = await supabase.from("Boards").insert([
        {
          title,
          color,
          user_id
        },
      ]);
      if(error) throw error
      console.log(data)
    } catch(error) {
      console.log(error)
    }
    },
    async deleteBoards(board_id) {
      const { data, error } = await supabase
        .from("boards")
        .delete()
        .match({ id: board_id }).catch(e => console.error(e));
      return {data, error};
    },
    async updateTitleBoard(title, board_id) {
      const { data, error } = await supabase
        .from("boards")
        .update({ title: title })
        .match({ id: board_id }).catch(e => console.error(e));
      return {data, error};
    },
    async updateIsCompleteBoard(is_complete, board_id) {
      const { data, error } = await supabase
        .from("boards")
        .update({ is_complete: is_complete })
        .match({ id: board_id }).catch(e => console.error(e));
      return {data, error};
    },
    async updateColorBoard(color, board_id) {
      const { data, error } = await supabase
        .from("boards")
        .update({ color: color })
        .match({ id: board_id }).catch(e => console.error(e));
      return {data, error};
    },
    async getBoard(board_id) {
      const { data, error } = await supabase
        .from("boards")
        .select("*")
        .match({ id: board_id }).catch(e => console.error(e));
      return {data, error};
    }
  },
});


