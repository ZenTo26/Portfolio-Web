<template>
  <section class="project" id="project">
    <h2 class="heading-contact"><span>Our</span> Project</h2>

    <div class="slideshow-card">
      <transition name="fade-slide" mode="out-in">
        <div class="card" :key="projects[currentIndex].link">
          <div class="card-img">
            <img :src="projects[currentIndex].image" alt="Project Image" />
          </div>
          <p class="desc">{{ projects[currentIndex].description }}</p>
          <a :href="projects[currentIndex].link" target="_blank" class="btn-project">
            View Web Page
          </a>
        </div>
      </transition>

      <div class="slideshow-controls">
        <button @click="prevSlide" class="nav-btn">⟵ Prev</button>
        <div class="dots">
          <span
            v-for="(proj, i) in projects"
            :key="i"
            class="dot"
            :class="{ active: i === currentIndex }"
            @click="currentIndex = i"
          ></span>
        </div>
        <button @click="nextSlide" class="nav-btn">Next ⟶</button>
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
      currentIndex: 0,
      projects: [
        {
          image: ccComputer,
          description: "HTML + CSS + Bootstrap+ JavaScript + JQuery",
          link: "https://cc-computer.netlify.app",
        },
        {
          image: angkorStore,
          description: "HTML + CSS + JavaScript",
          link: "https://angkor-store-by-rathana.netlify.app",
        },
        {
          image: yoogicare,
          description: "WordPress + Divi",
          link: "http://yogicare-cambodia.com/",
        },
        {
          image: ycnature,
          description: "WordPress + Divi",
          link: "https://ycnature.com/",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    },
  },
};
</script>

<style>

.slideshow-card {
  max-width: 800px;
  margin: auto;
  text-align: center;
  position: relative;
  background: #2121212f;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 25px var(--base-color);
}

.card {
  position: relative;
  background: #2121219c;
  border-radius: 1.2rem;
  box-shadow: 0 10px 20px rgba(100, 100, 111, 0.2);
  padding: 1.5rem;
  transition: all 0.4s ease;
  
}



.card-img img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.desc {
  margin: 1rem 0;
  color: orange;
  text-shadow: 1px 0px 9px #ffffff;
  font-size: 1rem;
  line-height: 1.5;
}

.btn-project {
  display: inline-block;
  background: linear-gradient(135deg, var(--base-color), #f56f22);
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 12px var(--base-color);
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-project:hover {
  transform: translateY(-3px);
  background: #ddd;
  color: #333;
}

.slideshow-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  gap: 1rem;
}

.nav-btn {
  background: #f0f0f0;
  color: #333;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.nav-btn:hover {
  background: #ddd;
}

.dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  background: #bbb;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: var(--base-color);
}

/* Slide transition animation */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}


</style>