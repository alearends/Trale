// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase/supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    async fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        this.user = user;
        return user;
      }
    },
    // Hacer sign up (register) - Create a new user
    async signUp(email, password) {
      const { data, error,} = await supabase.auth.signUp({
        email: email,
        password: password,
      });
    },
    // Hacer sign in (login) with email and password
    async signIn(email, password) {
      const {data: {user}, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if (error) throw error;
    if (user) this.user = user;
    },
    // Hacer sign in (login) with phone and password
    async signInWithPhone(phone, password){
      const { data, error } = await supabase.auth.signInWithPassword({
        phone: phone,
        password: password,
      })
    },
    // After receiving a SMS with a OTP.
    async signInWithPhoneAfter(phone, password){
        const { data, error } = await supabase.auth.verifyOtp({
        phone: phone,
        token: token,
      })
    },
    //Sign in with a third-party provider
    async signThirdProvider(provider){
      const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider
      })
    },
    // Hacer log out
    async signOut(){
      const { error } = await supabase.auth.signOut()
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
}
}
)
