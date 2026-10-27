<template>
  <aside class="archive-note" aria-label="Архивный проект">
    <span>Архив свадебного сайта</span>
    <span>Сергей и Кристина · 29 июля 2023</span>
  </aside>
</template>

<style scoped>
.archive-note {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 24px;
  padding: 11px 20px;
  color: #ebece8;
  background: #58615e;
  font-family: Georgia, serif;
  font-size: 13px;
  line-height: 1.45;
}
@media (max-width: 600px) {
  .archive-note {
    flex-direction: column;
    gap: 2px;
    padding: 9px 16px;
    font-size: 11px;
  }
}
</style>
