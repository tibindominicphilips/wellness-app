<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <div class="d-flex align-center">
        <span class="text-center">My Fitness App</span>
      </div>
      <v-spacer></v-spacer>
      <span>{{ loggedInUserName }}</span>
    </v-app-bar>

    <v-main>
      <PatientList />
    </v-main>
  </v-app>
</template>
<script src="./AppJS.js">
</script>
