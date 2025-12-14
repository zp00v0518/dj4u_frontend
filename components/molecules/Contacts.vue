<template>
  <section class="contact-section">
    <div class="contact-info">
      <div class="question-text">
        Still have questions?
        <br />
        Contact us
      </div>
      <div class="details">
        <span class="phone-number">+31 65830202833</span>
        <span class="email">dj4u_support@gmail.com</span>
      </div>
    </div>
    <h2 class="slogan-text">FROM TRACKS TO ATMOSPHERE — INSTANTLY.</h2>
  </section>
</template>

<style lang="scss" scoped>
.contact-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 36px;

  @media (orientation: portrait) and (max-width: 768px) {
    flex-direction: column;
    align-items: start;

    .contact-info {
      margin-bottom: 150px;
    }

    .slogan-text {
      font-size: 26px;
    }
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 53px;
}

.question-text {
  font-weight: 500;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.slogan-text {
  font-family: "Martian Mono", monospace;
  font-size: rem(30px);
  margin: 0;
}
</style>
