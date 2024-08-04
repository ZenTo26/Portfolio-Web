<template>
  <section class="about" id="about">
    <div class="about-image">
      <img src="@/assets/me.png" alt="" />
    </div>

    <div class="about-content">
      <h2 class="heading-about">About <span>Me</span></h2>
      <h3>Web Developer</h3>
      <p>
        Hi! I'm Rathana, a Web Developer based in Cambodia. I have a fourth year
        student at Royal University of Phnom Penh, and I have been passionate
        about coding ever since I was high school.
      </p>

      <a href="#" class="btn-about">Read More</a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");

#about {
  /* height: 100vh; */
  /* margin-top: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.about-image img {
  width: 35vw;
  margin-left: 60px;
  border-radius: 50%;
}
.heading-about {
  font-size: 4.5rem;
}
.about-content {
  color: var(--main-color);
  text-align: left;
  line-height: 1.2;
}
.about-content p {
  font-size: 1.6rem;
  margin: 2rem 0 3rem;
}
.btn-about {
  display: inline-block;
  padding: 10px 16px;
  color: var(--main-color);
  background: blue;
  border-radius: 35px;
  font-size: 20px;
  letter-spacing: 0.1rem;
  box-shadow: 0px 0px 5px 2px var(--box-shadow);
  font-weight: 600;
  cursor: pointer;
}
.btn-about:hover {
  box-shadow: none;
}

/* responsive */

/*mobile phone*/
@media (max-width: 557px) {

#about {
  /* height: 100vh; */
  /* margin-top: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.about-image img {
  display: none;
  width: 35vw;
  margin-left: 60px;
  border-radius: 50%;
}
.heading-about {
  font-size: 3rem;
}
.about-content {
  color: var(--main-color);
  text-align: left;
  line-height: 1.2;
}
.about-content p {
  font-size: 1.7rem;
  margin: 2rem 0 3rem;
}
.btn-about {
  display: inline-block;
  padding: 10px 16px;
  color: var(--main-color);
  background: blue;
  border-radius: 35px;
  font-size: 20px;
  letter-spacing: 0.1rem;
  box-shadow: 0px 0px 5px 2px var(--box-shadow);
  font-weight: 600;
  cursor: pointer;
}
.btn-about:hover {
  box-shadow: none;
}


}
/*ipad*/
@media (min-width: 558px) and (max-width: 991px) {
#about {
  /* height: 100vh; */
  /* margin-top: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.about-image img {
  display: none;
  width: 35vw;
  margin-left: 60px;
  border-radius: 50%;
}
.heading-about {
  font-size: 3rem;
}
.about-content h3{
  font-size: 3.5rem;
}
.about-content {
  color: var(--main-color);
  text-align: left;
  line-height: 1.2;
}
.about-content p {
  font-size: 2rem;
  margin: 2rem 0 3rem;
}
.btn-about {
  display: inline-block;
  padding: 10px 16px;
  color: var(--main-color);
  background: blue;
  border-radius: 35px;
  font-size: 20px;
  letter-spacing: 0.1rem;
  box-shadow: 0px 0px 5px 2px var(--box-shadow);
  font-weight: 600;
  cursor: pointer;
}
.btn-about:hover {
  box-shadow: none;
}

}
/*ipad pro*/
@media (min-width: 992px) and (max-width: 1199px) {

#about {
  /* height: 100vh; */
  /* margin-top: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.about-image img {
  display: none;
  width: 35vw;
  margin-left: 60px;
  border-radius: 50%;
}
.heading {
  font-size: 5rem;
}
.about-content {
  color: var(--main-color);
  text-align: left;
  line-height: 1.2;
}
.about-content p {
  font-size: 2rem;
  margin: 2rem 0 3rem;
}
.btn-about {
  display: inline-block;
  padding: 10px 16px;
  color: var(--main-color);
  background: blue;
  border-radius: 35px;
  font-size: 20px;
  letter-spacing: 0.1rem;
  box-shadow: 0px 0px 5px 2px var(--box-shadow);
  font-weight: 600;
  cursor: pointer;
}
.btn-about:hover {
  box-shadow: none;
}

}
</style>
