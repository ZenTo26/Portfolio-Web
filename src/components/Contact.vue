<template>
  <section class="contact" id="contact">
    <h2 class="heading-contact">Contact <span>Me!</span></h2>

    <form ref="form" @submit.prevent="sendMail">
  
        <input v-model="fullName" type="text" placeholder="Full Name" required />
        <input v-model="email" type="email" placeholder="Email Address" required />
        <input v-model="mobileNumber" type="tel" placeholder="Mobile Number" required />
        <input v-model="subject" type="text" placeholder="Email Subject" required />
  
      <textarea
        v-model="message"
        cols="30"
        rows="10"
        placeholder="Your Message"
        required
      ></textarea>

      <button type="submit" class="btn-contact">Send Message</button>
    </form>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      fullName: "",
      email: "",
      mobileNumber: "",
      subject: "",
      message: "",
    };
  },

  methods: {
    sendMail() {
      const templateParams = {
        fullName: this.fullName,
        email: this.email,
        mobileNumber: this.mobileNumber,
        subject: this.subject,
        message: this.message,
      };

      emailjs
        .send("service_kdca2t5", "template_x1x5j97", templateParams, "zN9dRXwU9M2ZVk65i")
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Mail has been sent ✅");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Failed to send mail. 😑");
          }
        );
    },
  },
};
</script>

<style>
.heading-contact {
  text-align: center;
  color: var(--main-color);
  font-size: 4.5rem;
}
.contact h2 {
  margin-bottom: 1rem;
}
.contact form {
  max-width: 70rem;
  margin: 1rem auto;
  text-align: center;
  margin-bottom: 3rem;
}
/* .contact form .input-box {
  display: flex;
  justify-content: space-between;
  width: 90%;
} */
.contact form input{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  font-size: 1.6rem;
  color: var(--main-color);
  background: #212121;
  border-radius: 0.8rem;
  margin: 0.7rem 0;
  border: none;
}
.contact form textarea {
  width: 100%;
  padding: 1.5rem;
  font-size: 1.6rem;
  color: var(--main-color);
  background: #212121;
  border-radius: 0.8rem;
  margin: 0.7rem 0;
  border: none;
}
.contact form .input-box input {
  width: 49%;
}

.contact form textarea {
  resize: none;
  height: 170px;
}

.btn-contact {
  display: inline-block;
  padding: 10px 16px;
  color: var(--main-color);
  background: var(--base-color);
  border: none;
  border-radius: 10px;  
  font-size: 26px;
  letter-spacing: 0.1rem;
  box-shadow: 0px 0px 5px 2px var(--main-color);
  font-weight: 600;
  cursor: pointer;
  transition: 2s;
}

.btn-contact:hover {
  transition: 2s;
  box-shadow: none;
  background-color: #212121;
  color: var(--box-shadow);
  box-shadow: 0px 0px 5px 2px var(--box-shadow);

}

/* responsive */

/*mobile phone*/
@media (max-width: 557px) {
  .heading-contact {
    text-align: center;
    color: var(--main-color);
    font-size: 2.4rem;
  }
  .contact h2 {
    margin-bottom: 3rem;
  }
  .contact form {
    max-width: 70rem;
    margin: 1rem auto;
    text-align: center;
    margin-bottom: 3rem;
  }
  .contact form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .contact form  input,
  .contact form textarea {
    width: 100%;
    padding: 1.5rem;
    font-size: 1rem;
    color: var(--main-color);
    background: #212121;
    border-radius: 0.8rem;
    margin: 0.7rem 0;
  }
  .contact form  input {
    width: 100%;
  }
  .contact form textarea {
    resize: none;
    height: 200px;
  }
  .btn-contact {
    display: inline-block;
    padding: 10px 16px;
    color: var(--main-color);
    background: var(--base-color);
    border-radius: 35px;
    font-size: 20px;
    letter-spacing: 0.1rem;
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
    font-weight: 600;
    cursor: pointer;
  }

  .btn-contact:hover {
    box-shadow: none;
  }
}
</style>
v
