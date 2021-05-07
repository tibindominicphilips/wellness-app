<template>
  <v-container class="loginbackground" fluid>
      <div class="py-13">
      </div>
      <div class="d-flex flex-column justify-space-between align-center py-15 mb-15 mt-4">
          <v-img src="../../assets/images/logo.svg" ></v-img>
      </div>
      <div id="appTitle" class="align-center d-flex flex-column justify-space-between pt-15 ">
        <h1 class="white--text font-weight-light">{{ appName }}</h1> 
      </div>

      <div class="second py-15">
        <v-form name="login-form" class="pt-login-form d-flex flex-column justify-space-between align-center" v-model="isValid">
          <v-text-field :rules="inputRules" 
            type="username"
            id="username"
            label="User Name"
            solo
            class="form-input">
          </v-text-field>
          
          <v-text-field 
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
            @click:append="showPassword = !showPassword"  :rules="inputRulesp"
            id="username"
            label="Password" 
            solo
            class="form-input">
          </v-text-field>
          <v-btn depressed dark color="#1c2d66" large  :disabled="!isValid">
            Log In
          </v-btn>              
        </v-form>
      </div>

      <div class="copyright px-15 mx-15">
       
             <footer>
              <p class="white--text">
                {{ footer }}
              </p>
            </footer>     
      </div>
    </v-container>
  
</template>

<script>
export default {
  data: () => ({
        isValid: false,
        footer: "Copyrights and all other proprietary rights in any software and related documentation (“Software”) made available to you rest exclusively with Philips or its licensors. No title or ownership in the Software is conferred to you. Use of the Software is subject to the end user license conditions as are available on request." ,
        appName: "WELLNESS APPLICATION",
        showPassword: false,
        inputRules: [
            v => !!v || 'Name is required',
            // v => (v && v.length >= 6) || 'Name must be greater than 5 characters',
        ],
        inputRulesp: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 3) || 'Password must be greater than 3 characters',
        ]
    }),
  computed: {
    
  },
   methods: {
       
    },
  
};
</script>

<style scoped>
    .column {
      float: right;
      width: 50%;
    }
    .loginbackground{
      background-color: #1474a4;
      background-image: radial-gradient(rgba(255,255,255,.3),rgba(255,255,255,0));
    }
    .v-text-field {
      width: 25%;
    }
    .v-btn{
      width: 25%;
    }
    .copyright{
      text-align: center;
    }
    .form-input >>> .error--text {
      color: #ffb640 !important;
    }


</style>

