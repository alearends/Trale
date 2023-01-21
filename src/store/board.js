// /store/board.js

import { defineStore } from "pinia";
import { supabase } from "../supabase/supabase";

export const useBoardStore = defineStore("boards", {
  state: () => ({
    boards: null,
  }),

  actions: {
    async fetchBoards() {
      const { data: boards } = await supabase
        .from("boards")
        .select("*")
        .order("id", { ascending: false });
      this.boards = boards;
    },
    async createBoards(title, user_id, color) {
    try {
      console.log(title, user_id, color)
      const { data, error } = await supabase.from("boards").insert([
        {
          title: title,
          color: color,
          user_id: user_id,
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

// actions: {
//     const addBoard = async (board)=>{
//         try{
//             await db.board.insert({
//                 title: board.title,
//                 color: board.color,
//             });
//             console.log("tablero insertado con exito");
//         }catch(error){
//             console.log(error);
//         }
//     },

// }
