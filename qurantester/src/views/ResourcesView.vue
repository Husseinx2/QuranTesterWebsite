<template>
  <div class="resources-container">
    <h1 class="header">Resources</h1>
    <section class="tanzil">
      <h3>Quran Text Source: tanzil.net</h3>
      <p>
        The Quranic text featured on this website is graciously provided by
        tanzil.net, a prominent platform for accessing and studying the Quran.
        Tanzil.net offers an invaluable resource for individuals seeking to
        engage with the Quranic verses, translations, and recitations.<br /><br />
        Tanzil.net stands as a remarkable platform, providing access to a
        variety of translations and recitations of the Quran. Whether you are
        exploring the meanings of the verses or seeking to immerse yourself in
        the recitations, tanzil.net offers a comprehensive experience that aids
        in understanding and appreciating the Quran's profound wisdom. For those
        who wish to delve deeper into the Quranic teachings and reflect upon its
        guidance, tanzil.net emerges as an excellent destination. Their
        user-friendly interface and rich content make it a go-to place for
        anyone who wishes to read, comprehend, and cherish the Quranic
        revelations. We express our sincere gratitude to tanzil.net for their
        dedication in making the Quran accessible to people around the world. To
        explore their vast collection of translations, recitations, and more, we
        encourage you to visit <a href="https://tanzil.net/">tanzil.net</a>.
      </p>
    </section>
    <section class="quranapi">
      <h3>Audio API Acknowledgment: quran.api-docs.io</h3>
      <p>
        We are grateful for the exceptional audio resources made available
        through quran.api, a remarkable API designed for accessing Quranic
        files, allowing us to offer high-quality recitations to our users.
        <br /><br />For those intrigued by the prospect of utilizing their API,
        we encourage you to explore their documentation at
        <a href="https://quran.api-docs.io/v4/">quran.api-docs.io</a> and unlock
        the potential of Quranic audio integration. Incorporating their API has
        been a transformative journey, and we are honored to have such a
        reputable resource enhancing our platform's capabilities.
      </p>
    </section>
    <section class="tarteel">
      <h3>Tarteel AI: Quran Memorization App</h3>
      <p>
        Tarteel AI is a groundbreaking mobile app that utilizes artificial
        intelligence to assist individuals on their journey of memorizing the
        Quran. With its innovative features and user-friendly interface, Tarteel
        AI provides personalized guidance, recitation practice, and progress
        tracking to enhance the memorization experience.<br /><br />
        We highly recommend Tarteel AI to those embarking on the pursuit of
        Quran memorization. Tarteel AI stands as a reliable companion,
        supporting users at every step of their memorization journey. We
        encourage you to explore and download Tarteel AI from the app store.
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  grid-area: header;
  text-align: center;
}

.resources-container {
  min-height: 90vh;
  background: linear-gradient(to bottom, #7ba9e0, #d2deec, #115292);
  display: grid;
  grid-template-columns: 2fr, 1fr;
  gap: 20px;
  grid-template-areas:
    "header header"
    "tanzil quranapi"
    "tarteel .";
}
a {
  color: white;
}
a:hover {
  color: black;
}
.tanzil {
  grid-area: tanzil;
}

.quranapi {
  grid-area: quranapi;
}
.tarteel {
  grid-area: tarteel;
}

@media (max-width: 768px) {
  .resources-container {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "tanzil tanzil"
      "quranapi quranapi"
      "tarteel tarteel";
  }
}
</style>
