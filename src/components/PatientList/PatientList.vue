<template>
  <v-container>
    First Name :
    <input
      type="text"
      v-model="firstname"
      @change="change()"
      style="border: solid 1px"
    />
    Last Name :
    <input type="text" v-model="lastname" style="border: solid 1px" />
    <h1>Full Name : {{ getfullname }}</h1>
    <v-data-table
      :headers="headers"
      :items="patientList"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <v-btn
      :key="patient.name"
      v-for="patient in patientList"
      @click="click(patient.name)"
      class="mx-1 my-2"
    >
      {{ patient.name }}
    </v-btn>
  </v-container>
</template>

<script>
export default {
  computed: {
    getfullname: function () {
      return this.firstname + " " + this.lastname;
    },
  },
  methods: {
    change: () => {
      console.log("onchange");
    },
    click: (name) => {
      console.log("clicked : ", name);
    },
  },
  data: () => {
    return {
      firstname: "",
      lastname: "",
      tableName: "Patient list",
      headers: [
        {
          text: "ID",
          value: "id",
        },
        { text: "NAME", value: "name" },
      ],
      patientList: [
        { id: 1, name: "Tibin" },
        { id: 3, name: "Santo" },
        { id: 2, name: "Shane" },
      ],
    };
  },
};
</script>
