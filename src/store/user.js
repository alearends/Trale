// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase/supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      if (user) {
        // se agregó esta condición por si acaso no existe un user. Originalmente, linea 14 era "this.user = user;" luego saltaba directo a linea 17 actual (aa).
        this.user = user;
      }
    },
    // Hacer sign up (register)
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) {this.user = user; console.log("se hizo petición a supabase")}
    },
    // Hacer sign in (login)
    async signIn(email, password){
      const {user, error} = await supabase.auth.signIn({
        email: email,
        password: password,
    });
    if (error) throw error;
    if (user) this.user = user;
    console.log("iniciando", error, user) // para verificar funcionamiento (aa).
    },
    // Hacer log out
    async signOut(){
      const {user} = await supabase.auth.signOut();
    },
  },

  persist: {
    //se sacó Persist de actions (aa).
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
