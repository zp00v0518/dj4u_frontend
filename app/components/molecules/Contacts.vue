<template>
  <section class="contact-section">
    <div class="contact-info">
      <div class="question-text text-muted">
        Still have questions?
        <br />
        Contact us
      </div>
      <div class="details">
        <span class="phone-number">+31 65830202833</span>
        <span class="email">dj4u_support@gmail.com</span>
      </div>
    </div>
    <div class="slogan">
      <h2 class="slogan-text">FROM TRACKS TO ATMOSPHERE — INSTANTLY.</h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/abstracts/_variables.scss" as *;

.contact-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 4rem 0;
  margin-top: 4rem;
  border-top: 1px solid var(--border-color);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.question-text {
  font-size: 1rem;
  line-height: 1.5;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: "Martian Mono", monospace;
  color: var(--txt-primary-color);
  font-weight: bold;
}

.slogan-text {
  font-family: "Martian Mono", monospace;
  font-size: 1.5rem;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .contact-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
}
</style>
