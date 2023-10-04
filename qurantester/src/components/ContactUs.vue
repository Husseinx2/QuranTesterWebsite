<template>
  <b-modal id="modal-1" title="Contact Us" @ok="handleOk">
    <b-form>
      <b-form-group
        label="Your Email"
        label-for="email"
      >
        <b-form-input id="email" type="email" v-model="contact.emailAdress" />
      </b-form-group>
      <b-form-group label="Message" label-for="message">
        <b-form-textarea id="message" v-model="contact.message" />
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      contact: {
        emailAdress: "",
        message: "",
      },
    };
  },
  methods: {
    handleOk() {
      if (!this.contact.emailAdress.includes("@")) {
        // add error handling for emails
        console.log("invalid email");
      } else {
        this.sendEmail();
      }
    },
    sendEmail() {
      emailjs
        .send(
          "service_3xtxc1u",
          "template_pg6wo6l",
          {
            from_name: this.contact.emailAdress,
            message: this.contact.message,
          },
          "5sA1GwHaYeymaO3-Y"
        )
        .then(this.confirmationemail());
    },
    confirmationemail() {
      emailjs.send(
        "service_3xtxc1u",
        "template_6m0dngg",
        {
          to_name: this.contact.emailAdress,
        },
        "5sA1GwHaYeymaO3-Y"
      );
    },
  },
};
</script>

<style></style>
