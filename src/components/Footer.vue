<template>
  <footer class="footer">
    <div class="footer-text">
      <p>
        {{ name }} ©<i>2024</i> | <span>{{ phoneNumber }}</span>
      </p>
    </div>
    <div class="footer-iconTop">
      <a href="#home"><i class="fa-solid fa-arrow-up"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "067403565",
      name: "Chantha Rathana",
    };
  },
};
</script>

<style>
.footer {
  background: #212121;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 9%;
  color: var(--main-color);
}
.footer-text {
  font-size: 1.6rem;
}
.footer-iconTop a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  background: blue;
  border-radius: 0.8rem;
  transition: 1s;
}
.footer-iconTop a:hover {
  box-shadow: 0px 0px 5px 2px var(--box-shadow);
}
.footer-iconTop a i {
  font-size: 2.4rem;
  color: #212121;
}
</style>
