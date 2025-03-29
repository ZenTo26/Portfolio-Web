<template>
  <section class="project" id="project">
    <h2 class="heading-contact"><span>Our</span> Project</h2>

    <div class="main-card">
      <div v-for="(project, index) in projects" :key="index" class="card">
        <div class="card-img">
          <img :src="project.image" alt="" />
        </div>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="btn-project">View Web Page</a>
      </div>
    </div>
  </section>
</template>

<script>
import ccComputer from "@/assets/cc-computer.png";
import angkorStore from "@/assets/angkor-store.png";
import yoogicare from "@/assets/yogi-care.png";
import ycnature from "@/assets/yc-nature.png";

export default {
  data() {
    return {
      projects: [
        {
          image: ccComputer,
          description:
            "This website I built for my final project in basic frontend class. I copied the template from CC Computer. In this project, I used HTML, CSS, Bootstrap, JavaScript, and jQuery. It's responsive on mobile, iPad, and laptop.",
          link: "https://cc-computer.netlify.app",
        },
        {
          image: angkorStore,
          description:
            "This website I built for fun and I got the requirement from my friend. I used only HTML and CSS, and it's responsive on mobile, iPad, and laptop.",
          link: "https://angkor-store-by-rathana.netlify.app",
        },
        {
          image: yoogicare,
          description:
            "This website I build for my work when I was a staff as a Web Design. I used wordpress with Divi Theme and some plugin as woocommerce",
          link: "http://yogicare-cambodia.com/",
        },
        {
          image: ycnature,
          description:
            "This website I build for my work when I was a staff as a Web Design. I used wordpress with Divi Theme and some plugin",
          link: "https://ycnature.com/",
        },
      ],
    };
  },
};
</script>

<style>
.main-card {
  max-width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem auto;
}

.main-card .card {
  width: 30%;
  height: 350px;
  background: #212121;
  border-radius: 0.8rem;
  box-shadow: 0px 0px 5px 2px var(--box-shadow);
  text-align: center;
  padding: 1rem;
  position: relative;
  transition: 0.5s;
}

.main-card .card:hover {
  box-shadow: none;
  border: 3px solid var(--base-color);
}

.main-card .card-img {
  width: 100%;
  height: auto;
  background: var(--base-color);
  border-radius: 0.8rem 0.8rem 0 0;
  overflow: hidden;
}

.main-card .card-img img {
  width: 100%;
  height: auto;
}

.main-card .card p {
  margin-top: 15px;
  color: #ffffff8b;
}

.btn-project {
  display: inline-block;
  padding: 5px 10px;
  color: var(--main-color);
  background: var(--base-color);
  border-radius: 35px;
  font-size: 16px;
  letter-spacing: 0.1rem;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.5s;
}

.btn-project:hover {
  background: var(--box-shadow);
  box-shadow: 0px 0px 5px 2px var(--base-color);
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .main-card {
    flex-direction: column;
    align-items: center;
  }
  .main-card .card {
    width: 80%;
    height: 450px;
  }
}

@media (max-width: 768px) {
  .main-card .card {
    width: 90%;
    height: 380px;
  }
}
</style>
