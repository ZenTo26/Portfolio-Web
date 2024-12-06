<template>
  <section class="project" id="project">
    <h2 class="heading-contact"><span>Our</span> Project</h2>

    <div class="main-card">
      <div class="card">
        <div class="card-img">
          <img src="@/assets/cc-computer.png" alt="" />
        </div>
        <p>
          This website I build for me final project in basic of frontend class. I copy
          template from CC Computer. In this project I have use HTML, CSS, Bootstrap,
          JavaScript and jQuery and responsive on mobile phone, ipad, ipad pro and laptop.
        </p>
        <a :href="ccCompuer" target="_blank" class="btn-project"> View Web Page </a>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="@/assets/angkor-store.png" alt="" />
        </div>
        <p>
          This website I just build for fun and I get requirement from my friend. In this
          project I have use only HTML and CSS and responsive on mobilr phone, ipad and
          laptop.
        </p>
        <a :href="angkorStore" target="_blank" class="btn-project"> View Web Page </a>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="@/assets/business-cam.png" alt="" />
        </div>
        <p>
          This website I was build while I while in basic Fronted Class. In this project I
          have use HTML, CSS and Bootstrap and responsive on mobile phone, ipad, ipad pro
          and laptop.
        </p>
        <a :href="businessCam" target="_blank" class="btn-project"> View Web Page </a>
      </div>
    </div>

    <!-- phone view -->
    <div class="main-card-res">
      <div class="card">
        <div class="card-img">
          <img src="@/assets/cc-computer.png" alt="" />
        </div>
        <p>
          This website I build for me final project in basic of frontend class. I copy
          template from CC Computer. In this project I have use HTML, CSS, Bootstrap,
          JavaScript and jQuery and responsive on mobile phone, ipad, ipad pro and laptop.
        </p>
        <a :href="ccCompuer" target="_blank" class="btn-project"> View Web Page </a>
      </div>
    </div>
    <div class="main-card-res">
      <div class="card">
        <div class="card-img">
          <img src="@/assets/angkor-store.png" alt="" />
        </div>
        <p>
          This website I just build for fun and I get requirement from my friend. In this
          project I have use only HTML and CSS and responsive on mobilr phone, ipad and
          laptop.
        </p>
        <a :href="angkorStore" target="_blank" class="btn-project"> View Web Page </a>
      </div>
    </div>

    <div class="main-card-res">
      <div class="card">
        <div class="card-img">
          <img src="@/assets/business-cam.png" alt="" />
        </div>
        <p>
          This website I was build while I while in basic Fronted Class. In this project I
          have use HTML, CSS and Bootstrap and responsive on mobile phone, ipad, ipad pro
          and laptop.
        </p>
        <a :href="businessCam" target="_blank" class="btn-project"> View Web Page </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ccCompuer: "https://cc-computer.netlify.app/",
      angkorStore: "https://angkor-store-by-rathana.netlify.app/",
      businessCam: "https://rathana2business.netlify.app/",
    };
  },
};
</script>

<style>
.main-card {
  /* background: red; */
  max-width: 70rem;
  height: 28rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
}
.main-card-res {
  display: none;
}
.main-card .card {
  width: 30%;
  height: 90%;
  background: #212121;
  border-radius: 0.8rem;
  box-shadow: 0px 0px 5px 2px var(--box-shadow);
  transition: 0.7s;
  /* overflow: hidden; */
  padding: 1px;
  text-align: center;
  position: relative;
  transition: 2.2s;
}
.main-card .card:hover {
  box-shadow: none;
  transition: 2.2s;
  border: 3px solid var(--secendary-color);
}
.main-card .card-img {
  width: 100%;
  height: 35%;
  background: var(--base-color);
  border-radius: 0.8rem 0.8rem 0 0;
  overflow: hidden;
}
.main-card .card-img img {
  width: 100%;
  height: 100%;
}
.main-card .card p {
  margin-top: 20px;
  color: #ffffff8b;
}

.btn-project {
  display: inline-block;
  padding: 5px 8px;
  color: var(--main-color);
  background: var(--base-color);
  border-radius: 35px;
  font-size: 20px;
  letter-spacing: 0.1rem;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  left: 5rem;
  transition: 2s;
}
.btn-project:hover {
  transition: 2s;
  background: var(--secendary-color);
  box-shadow: 0px 0px 5px 2px var(--thirt-color);
}

/* responsive */

/*mobile phone*/
@media (max-width: 557px) {
  .main-card {
    display: none;
  }

  .main-card-res {
    display: block;
  }
  .main-card-res {
    max-width: 90%;
    height: 30rem;
    margin-top: 20px;
    margin-left: 5%;
  }
  .main-card-res .card {
    width: 100%;
    height: 90%;
    background: #212121;
    border-radius: 0.8rem;
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
    transition: 0.7s;
    /* overflow: hidden; */
    padding: 1px;
    text-align: center;
    position: relative;
  }
  .main-card-res .card:hover {
    box-shadow: none;
    transition: 1s;
    border: 2px solid var(--box-shadow);
  }
  .main-card-res .card-img {
    width: 100%;
    height: 35%;
    background: bluve;
    border-radius: 0.8rem 0.8rem 0 0;
    overflow: hidden;
  }
  .main-card-res .card-img img {
    width: 100%;
    height: 100%;
  }
  .main-card-res .card p {
    margin-top: 20px;
    color: #ffffff8b;
  }

  .btn-project {
    display: inline-block;
    padding: 5px 8px;
    color: var(--main-color);
    background: var(--base-color);
    border-radius: 35px;
    font-size: 20px;
    letter-spacing: 0.1rem;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    bottom: 2rem;
    left: 6rem;
  }
  .btn-project:hover {
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
  }
}
/*ipad*/
@media (min-width: 558px) and (max-width: 991px) {
  .main-card {
    display: none;
  }
  .main-card-res {
    display: block;
  }
  .main-card-res {
    max-width: 90%;
    height: 35rem;
    margin-top: 20px;
    margin-left: 5%;
  }
  .main-card-res .card {
    width: 100%;
    height: 90%;
    background: #212121;
    border-radius: 0.8rem;
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
    transition: 0.7s;
    /* overflow: hidden; */
    padding: 1px;
    text-align: center;
    position: relative;
  }
  .main-card-res .card:hover {
    box-shadow: none;
    transition: 1s;
    border: 2px solid var(--box-shadow);
  }
  .main-card-res .card-img {
    width: 100%;
    height: 45%;
    background: var(--base-color);
    border-radius: 0.8rem 0.8rem 0 0;
    overflow: hidden;
  }
  .main-card-res .card-img img {
    width: 100%;
    height: 100%;
  }
  .main-card-res .card p {
    margin-top: 20px;
    font-size: 25px;
    color: #ffffff8b;
  }

  .btn-project {
    display: inline-block;
    padding: 5px 8px;
    color: var(--main-color);
    background: var(--base-color);
    border-radius: 35px;
    font-size: 20px;
    letter-spacing: 0.1rem;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    bottom: 2rem;
    right: 4rem;
  }
  .btn-project:hover {
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
  }
}
/*ipad pro*/
@media (min-width: 992px) and (max-width: 1199px) {
  .main-card {
    display: none;
  }
  .main-card-res {
    display: block;
  }
  .main-card-res {
    max-width: 90%;
    height: 35rem;
    margin-top: 20px;
    margin-left: 5%;
  }
  .main-card-res .card {
    width: 100%;
    height: 90%;
    background: #212121;
    border-radius: 0.8rem;
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
    transition: 0.7s;
    /* overflow: hidden; */
    padding: 1px;
    text-align: center;
    position: relative;
  }
  .main-card-res .card:hover {
    box-shadow: none;
    transition: 1s;
    border: 2px solid var(--box-shadow);
  }
  .main-card-res .card-img {
    width: 100%;
    height: 45%;
    background: var(--base-color);
    border-radius: 0.8rem 0.8rem 0 0;
    overflow: hidden;
  }
  .main-card-res .card-img img {
    width: 100%;
    height: 100%;
  }
  .main-card-res .card p {
    margin-top: 20px;
    color: #ffffff8b;
    font-size: 25px;
  }

  .btn-project {
    display: inline-block;
    padding: 5px 8px;
    color: var(--main-color);
    background: var(--base-color);
    border-radius: 35px;
    font-size: 20px;
    letter-spacing: 0.1rem;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    bottom: 2rem;
    right: 4rem;
  }
  .btn-project:hover {
    box-shadow: 0px 0px 5px 2px var(--box-shadow);
  }
}
</style>
