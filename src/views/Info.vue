<template>
  <div class="info">
    <!-- <button class="btn info__back" @click="goBack">
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 1L1 5.68393L5.81607 10.5" stroke="#111719" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button> -->
    <div class="info__banner">
      <img src="@/assets/images/info_banner.png" alt="">
      <div class="logo">
        <img src="@/assets/images/info_logo.svg" alt="">
      </div>
    </div>

    <h3 class="title">Colectivo</h3>
    <span class="adress">ул. Халилова, 12/3, Каспийск</span>
    <a href="tel:+1234567890" class="phone">+7 (988) 293-92-22</a>
    <div class="description">
      Банальные, но неопровержимые выводы, а также интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть обнародованы. Сложно сказать, почему активно развивающиеся страны третьего мира, инициированные исключительно синтетически, ассоциативно распределены по отраслям.
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  methods: {
    goBack() {
      history.back()
    }
  }
}
</script>