<template>
  <section class="home" id="home">
    <div class="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Chantha Rathana</h1>
      <h3>
        And I'm a <span class="running-text">{{ displayTexts }} |</span>
      </h3>

      <div class="social-media">
        <a :href="facebookLink" target="_blank">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a :href="instagramLink" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a :href="xLink" target="_blank">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a :href="telegramLink" target="_blank">
          <i class="fa-brands fa-telegram"></i>
        </a>
      </div>
      <a href="#" class="btn" @click.prevent="downloadCV">Download CV</a>
    </div>

    <div class="home-image">
      <img src="@/assets/my-dark.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mySkills: "Web Developer",
      displayTexts: "",
      index: 0,
      typingSpeed: 200,
      deleting: false,

      facebookLink: "https://www.facebook.com/tox15",
      instagramLink: "https://www.instagram.com/rathana_chantha/",
      xLink: "https://x.com/rathana002",
      telegramLink: "https://t.me/rathana_chantha",
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      if (this.deleting) {
        this.deleteText();
      } else {
        if (this.index < this.mySkills.length) {
          this.displayTexts += this.mySkills.charAt(this.index);
          this.index++;
          setTimeout(this.startTyping, this.typingSpeed);
        } else {
          setTimeout(() => {
            this.deleting = true;
            this.startTyping();
          }, 1000);
        }
      }
    },
    deleteText() {
      if (this.index > 0) {
        this.displayTexts = this.displayTexts.slice(0, -1);
        this.index--;
        setTimeout(this.startTyping, this.typingSpeed);
      } else {
        this.deleting = false;
        this.startTyping();
      }
    },
    // downloadCV

    downloadCV() {
      const cvFilePath = "../src/assets/_Resume.pdf";

      const link = document.createElement("a");
      link.href = cvFilePath;
      link.download = "chantha_rathana.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");

section {
  min-height: 100vh;
  padding: 7rem 9% 4rem;
  /* max-width: 100%; */
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-color);
}

.home-content {
  line-height: 70px;
}

h3 {
  font-size: 45px;
  font-weight: 700;
}
h3:nth-of-type(2) {
  margin-bottom: 30px;
}
span {
  color: blue;
}
.home-content h1 {
  font-size: 70px;
}
.home-image {
  width: 30vw;
  height: 500px;
  margin-left: 60px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0px 0px 21px 0px var(--box-shadow);
  transition: 1s;
}
.home-image:hover {
  transition: 1s;
  box-shadow: none;
  border: 2px solid var(--box-shadow);
}
.home-image img {
  width: 100%;
  height: 100%;
}

.social-media a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: 2px solid blue;
  border-radius: 50%;
  font-size: 30px;
  color: blue;
  margin: 45px 22px 15px 0;
  transition: 0.5s;
}
.social-media a:hover {
  background: blue;
  color: var(--main-color);
  box-shadow: 0px 0px 5px 2px var(--box-shadow);
}

.btn {
  display: inline-block;
  padding: 0.5px 12px;
  color: var(--main-color);
  background: blue;
  border-radius: 35px;
  font-size: 20px;
  letter-spacing: 0.1rem;
  box-shadow: 0px 0px 5px 2px var(--box-shadow);
  font-weight: 600;
  cursor: pointer;
}
.btn:hover {
  box-shadow: none;
}

/* responsive */

/*mobile phone*/
@media (max-width: 557px) {
  section {
    min-height: 100vh;
    padding: 7rem 9% 4rem;
    /* max-width: 100%; */
  }

  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main-color);
  }

  .home-content {
    line-height: 70px;
  }

  h3 {
    font-size: 40px;
    font-weight: 700;
  }
  h3:nth-of-type(2) {
    font-size: 25px;
  }
  span {
    color: blue;
  }
  .home-content h1 {
    font-size: 60px;
  }
  .home-image {
    display: none;
  }
  .social-media a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: 2px solid blue;
    border-radius: 50%;
    font-size: 30px;
    color: blue;
    margin: 1px 22px 15px 0;
    transition: 0.5s;
  }
  .social-media a:hover {
    background: blue;
    color: var(--main-color);
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
  }

  .btn {
    display: inline-block;
    padding: 0.5px 12px;
    color: var(--main-color);
    background: blue;
    border-radius: 35px;
    font-size: 20px;
    letter-spacing: 0.1rem;
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
    font-weight: 600;
    cursor: pointer;
  }
  .btn:hover {
    box-shadow: none;
  }
}
/*ipad*/
@media (min-width: 558px) and (max-width: 991px) {
  section {
    min-height: 100vh;
    padding: 7rem 9% 4rem;
    /* max-width: 100%; */
  }

  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main-color);
  }

  .home-content {
    line-height: 70px;
  }

  h3 {
    font-size: 70px;
    font-weight: 700;
  }
  h3:nth-of-type(2) {
    font-size: 50px;
  }
  span {
    color: blue;
  }
  .home-content h1 {
    font-size: 80px;
  }
  .home-image {
    display: none;
  }
  .social-media a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background: transparent;
    border: 2px solid blue;
    border-radius: 50%;
    font-size: 50px;
    color: blue;
    margin: 1px 22px 15px 0;
    transition: 0.5s;
  }
  .social-media a:hover {
    background: blue;
    color: var(--main-color);
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
  }

  .btn {
    display: inline-block;
    padding: 0.5px 12px;
    margin-top: 10px;
    color: var(--main-color);
    background: blue;
    border-radius: 35px;
    font-size: 20px;
    letter-spacing: 0.1rem;
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
    font-weight: 600;
    cursor: pointer;
  }
  .btn:hover {
    box-shadow: none;
  }
}
/*ipad pro*/
@media (min-width: 992px) and (max-width: 1199px) {
  section {
    min-height: 100vh;
    padding: 7rem 9% 4rem;
    /* max-width: 100%; */
  }

  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main-color);
  }

  .home-content {
    line-height: 70px;
  }

  h3 {
    font-size: 50px;
    font-weight: 700;
  }
  h3:nth-of-type(2) {
    font-size: 40px;
  }
  span {
    color: blue;
  }
  .home-content h1 {
    font-size: 60px;
  }
  .home-image {
    display: block;
    height: 320px;
  }
  .social-media a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background: transparent;
    border: 2px solid blue;
    border-radius: 50%;
    font-size: 50px;
    color: blue;
    margin: 1px 22px 15px 0;
    transition: 0.5s;
  }
  .social-media a:hover {
    background: blue;
    color: var(--main-color);
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
  }

  .btn {
    display: inline-block;
    padding: 0.5px 12px;
    margin-top: 10px;
    color: var(--main-color);
    background: blue;
    border-radius: 35px;
    font-size: 20px;
    letter-spacing: 0.1rem;
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
    font-weight: 600;
    cursor: pointer;
  }
  .btn:hover {
    box-shadow: none;
  }
}
</style>
