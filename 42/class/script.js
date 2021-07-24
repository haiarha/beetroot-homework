// Счетчик
const Counter = {
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increment() {
      this.counter++;
    },

    decrement() {
      this.counter--;
    },
  },
};

const vm = Vue.createApp(Counter).mount("#counter");

// MOCK
const correctLogins = {
  test: {
    firstName: "John",
    lastName: "Smith",
    password: "123123",
  },
  admin: {
    firstName: "Chuck",
    lastName: "Norris",
    password: "admin",
  },
};

// Форма
const Form = {
  data() {
    return {
      login: "",
      password: "",

      isPasswordShown: false, 

      loggedIn: false,

      userData: null
    };
  },

  computed: {
    fullName() {
      if (this.userData === null) return ''

      return this.userData.firstName + ' '
       + this.userData.lastName
    }
  },

  methods: {
    toggleShowPassword() {
      this.isPasswordShown = !this.isPasswordShown
    },

    submit(e) {
      console.log(111, e)

      const userData = correctLogins[this.login]

      if (!userData || userData.password !== this.password) {
        alert("Логин или пароль неверный!");
        return;
      }

      this.loggedIn = true;
      this.login = "";
      this.password = "";

      this.userData = userData
    },

    logout() {
      this.loggedIn = false;
    },
  },
};

const vmForm = Vue.createApp(Form).mount("#form");
