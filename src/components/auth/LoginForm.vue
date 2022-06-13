<template>
  <!-- <pre>{{ auth.test.join(",") }}</pre> -->
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box" @submit.prevent="handleLogin">
              <div class="field">
                <label for="" class="label">Username</label>
                <div class="control has-icons-left">
                  <input
                    type="text"
                    placeholder="e.g. username1"
                    class="input"
                    v-model="username"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    class="input"
                    v-model="password"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div class="field">
                <button class="button is-success">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapState(["auth"]),
  },

  methods: {
    ...mapActions("auth", ["loginUser"]),
    async handleLogin() {
      const res = await this.loginUser({
        username: this.username,
        password: this.password,
      });
      if (res.status === 200) {
        this.$router.push({ name: "home" });
      }
    },
  },
  mounted() {
    // this.registerUser({username: 'iamuser', password: 'this my pass', email: "email@gmail.com"});
  },
};
</script>

<style>
</style>