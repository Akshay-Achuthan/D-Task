<template>
  <div>
    <b-card>
      <div class="container-main">
        <div class="image-container">
          <img class="logo-sbi" src="../Assets/logo-sbi.png" alt="" />

          <img class="logo-mercury" src="../Assets/logo-mercury.png" alt="" />
        </div>

        <ValidationObserver v-slot="{ handleSubmit }">
          <form class="form-main" @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              name="UserID"
              rules="required|alpha"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <img class="icon" src="../Assets/icon-user.svg" alt="" />
                <input
                  type="text"
                  placeholder="USER_ID"
                  class="form-control"
                  v-model="formdata.name"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Password"
              rules="required|max:15|min:6"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <img class="icon" src="../Assets/icon-lock.svg" alt="" />
                <input
                  type="password"
                  placeholder="PASSWORD"
                  class="form-control"
                  v-model="formdata.password"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="Domain"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <img class="icon" src="../Assets/icon-domain.svg" alt="" />
                <v-select
                  class="v-input__control"
                  placeholder="DOMAIN"
                  name="domain"
                  v-model="formdata.domain"
                  :options="['Domain1', 'Domain2', 'Domain3']"
                ></v-select>

                <span class="error-message">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <ValidationProvider
              name="captcha"
              type="text"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <img class="icon" src="../Assets/icon-captcha.svg" alt="" />
                <input
                  placeholder="CAPTCHA"
                  class="form-control"
                  v-model="formdata.captcha"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <div class="form-group">
              <img
                class="icon login-icon"
                src="../Assets/icon-arrow.svg"
                alt=""
              />
              <button class="btn btn-primary" @click="onSubmit">Login</button>
            </div>

            <div class="link-container">
              <p>APM_ID:<span style="color: red">Trea_Tran_627</span></p>
              <a href="#">Help ?</a>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </b-card>

    <div class="text-container">
      <p>
        NOTE: This Software is the property of SBI and used by the personnel
        authorised by the Bank for specific purposes only. Any unauthorised use
        is strictly prohibited and subject to appropriate action. All the
        activities of the users are recorded by the System.
      </p>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  components: {
    vSelect,
  },
  data() {
    return {
      formdata: {
        name: "",
        password: "",
        domain: "",
        captcha: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.formdata);
    },
  },
};
</script>

<style>
.card {
  width: 43.6rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 2px 5px 10px gray;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-main {
  width: 30rem;
  margin: 1rem 0;
  margin: 1rem auto;
  position: relative;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
}

.logo-sbi {
  width: 80px;
  height: 45.19px;
}

.logo-mercury {
  width: 112px;
  height: 33px;
  background-size: cover;
}

.form-main {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.icon {
  position: absolute;
  top: 16%;
  left: 4%;
  z-index: 999;
}

.form-control {
  height: 4.5rem;
  font-size: 1.6rem;
  padding-left: 5rem;
  border-color: #280070;
}

.error-message {
  color: red;
  padding-top: 0.2rem;
  font-size: 1.2rem;
}

.vs__dropdown-toggle {
  font-size: 1.6rem;
}

.vs--searchable .vs__dropdown-toggle {
  cursor: text;
  height: 4.5rem;
  padding-left: 4.2rem;
  border-color: #280070;
}

.vs__search,
.vs__search:focus {
  font-size: 1.6rem;
  color: gray;
}

.btn {
  font-size: 1.6rem;
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem 0;
  position: relative;
}

.login-icon {
  position: absolute;
  top: 35%;
  left: 35%;
}

.link-container {
  display: flex;
  justify-content: space-between;
}

.text-container {
  position: absolute;
  text-align: center;
  left: 50%;
  bottom: 5%;
  width: 50rem;
  transform: translate(-50%);
}

input:invalid {
  border-color: red;
}
</style>
