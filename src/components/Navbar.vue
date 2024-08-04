<template>
  <div class="navbar">
    <a href="#" class="logo">+▢X</a>

    <div class="menu-icon"><i class="fa-solid fa-bars"></i></div>

    <div class="menu">
      <a href="#home" class="active">HOME</a>
      <a href="#about">About</a>
      <a href="#project">Project</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dosis&display=swap");

.navbar {
  width: 100%;
  /* height: 80px; */
  box-shadow: 0px 10px 10px -9px rgba(34, 26, 128, 1);
  background: linear-gradient(to bottom right, #141e30, #243b55);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 20px;
}
.logo {
  cursor: default;
  font-size: 40px;
  color: #fff;
  font-weight: 600;
  margin-left: 20px;
}
.menu-icon{
  display: none;
}
.menu {
  margin-right: 150px;
  font-size: 20px;
  font-family: "Dosis", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.menu a {
  margin-left: 4rem;
  color: var(--main-color);
  transition: 0.8s;
  font-weight: 400;
}
.menu a:hover {
  color: blue;
  margin-left: 4rem;
  text-shadow: 0px 1px 13px rgba(23, 0, 255, 0.51);
  transition: 0.8s;
}

/*mobile phone*/
@media (max-width: 557px) {
.navbar {
  width: 100%;
  /* height: 80px; */
  box-shadow: 0px 10px 10px -9px rgba(34, 26, 128, 1);
  background: linear-gradient(to bottom right, #141e30, #243b55);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 20px;
}
.logo {
  cursor: default;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin-left: 10px;
}
.menu {
  display: none;
}
.menu-icon{
  display: block;
  color: #fff;
}

}
/*ipad*/
@media (min-width: 558px) and (max-width: 991px) {
.navbar {
  width: 100%;
  /* height: 80px; */
  box-shadow: 0px 10px 10px -9px rgba(34, 26, 128, 1);
  background: linear-gradient(to bottom right, #141e30, #243b55);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 20px;
}
.logo {
  cursor: default;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin-left: 10px;
}
.menu {
  display: block;
}
.menu-icon{
  display: none;
  color: #fff;
}
}
/*ipad pro*/
@media (min-width: 992px) and (max-width: 1199px) {
.navbar {
  width: 100%;
  /* height: 80px; */
  box-shadow: 0px 10px 10px -9px rgba(34, 26, 128, 1);
  background: linear-gradient(to bottom right, #141e30, #243b55);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding: 20px;
}
.logo {
  cursor: default;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin-left: 10px;
}

.menu {
  display: block;
  margin-right: 0px;
  font-size: 20px;
  font-family: "Dosis", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.menu-icon{
  display: none;
  color: #fff;
}

}
</style>
