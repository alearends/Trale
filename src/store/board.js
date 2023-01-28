// /store/board.js

import { defineStore } from "pinia";
import { supabase } from "../supabase/supabase";
import IntoNavBar from "../components/IntoNavBar.vue";
import Board from "../components/Board.vue";
import Priority from "../components/Priority.vue";
import {useTaskStore} from '../store/task';
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";


export const useBoardStore = defineStore("Boards", {
  state: () => ({
    boards: null,
  }),

  actions: {
    async fetchBoards() {
      const user = JSON.parse(localStorage.getItem('sb-zqkqjcqftuoytgobwdrh-auth-token'))
      const user_id = user.user.id
      const { data: boards } = await supabase
        .from("Boards")
        .select()
        .eq('user_id', user_id)
        .order("id", { ascending: false });
      this.boards = boards;
      return boards;
    },

    async createBoards(title, user_id, color) {
    try {
      console.log(title, user_id, color);
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
        .from("Boards")
        .delete()
        .eq( {id: board_id}  )
      //   .catch(e => console.error(e));
      return {data, error};
    },

    async updateTitleBoard(title, board_id) {
      const { data, error } = await supabase
        .from("Boards")
        .update({ title: title })
        .match({ id: board_id}).catch(e => console.error(e));
      return {data, error};
    },

    async updateIsCompleteBoard(is_complete, board_id) {
      const { data, error } = await supabase
        .from("Boards")
        .update({ is_complete: is_complete })
        .match({ id: board_id}).catch(e => console.error(e));
      return {data, error};
    },

    async updateColorBoard(color, board_id) {
      const { data, error } = await supabase
        .from("Boards")
        .update({ color: color })
        .match({ id: board_id }).catch(e => console.error(e));
      return {data, error};
    },

    async getBoard(board_id) {
      const { data, error } = await supabase
        .from("Tasks")
        .select("*")
        .eq( "board_id", board_id  );
      return {data, error};
    }
  },
});



