<template>
  <div class="section">
    <h1 class="aboutHeader">About Quran Tester</h1>
    <section class="about">
      <p>
        QuranTester offers an all-inclusive and user-focused answer for learning
        and memorizing the Quran. It employs technology to cater to users aiming
        to enhance and strengthen their memorization skills. No need to worry
        about teacher availability; our platform supports your Quranic journey!
      </p>
    </section>
    <h1 class="misionHeader">Our Mission</h1>
    <section class="mission">
      <p>
        Our goal is to offer a distinct platform that allows individuals to
        begin a transformative process of improving their memory skills and
        enriching their relationship with the Quran. Join us today to
        continuously grow toward becoming a skilled Hafidh/Hafidha!
      </p>
    </section>
    <h1 class="benefitsHeader">
      What Are Some Benefits Of Reading And Memorizng The Quran?
    </h1>
    <section class="benefits">
      <ul>
        <li>
          <p>
            <i>
              The Prophet (ﷺ) said: "It shall be said - meaning to the one who
              memorized the Qur'an - 'Recite, and rise up, recite (melodiously)
              as you would recite in the world. For indeed your rank shall be at
              the last Ayah you recited.'"
            </i>
            <br />
            <b> <span>(Jami` at-Tirmidhi 2914)</span></b>
          </p>
        </li>
        <li>
          <p>
            <i>
              The Prophet (ﷺ) said: "If anyone recites the Qur'an and acts
              according to its content, on the Day of Judgement his parents will
              be given to wear a crown whose light is better than the light of
              the sun in the dwellings of this world if it were among you. So
              what do you think of him who acts according to this ?"
            </i>
            <br />
            <b> <span>(Sunan Abi Dawud 1453)</span></b>
          </p>
        </li>
      </ul>
    </section>
    <h1 class="Reminder">Message From Us</h1>
    <section class="support">
      <ul>
        <li>
          <p>
            We ask that you be patient with us as this website is still not
            fully complete. If there are any problems with the website or if you
            have any feedback you can contact us by clicking
            <b-button id="toggle" v-b-modal.modal-1 size="sm" variant="primary"
              >HERE</b-button
            >
          </p>
        </li>
        <li>
          <p>
            We also ask that you keep all the people who worked on this
            website in your du'a
          </p>
        </li>
      </ul>
    </section>
    <contact-us id="modal-1" />
  </div>
</template>

<script>
import ContactUs from './ContactUs.vue';
export default {
  components:{ContactUs},
};
</script>

<style scoped>
.section {
  min-height: 100vh;
  display: grid;
  grid-template: 1fr 1fr;
  grid-template-areas:
    "aboutHeader missionHeader "
    "about mission"
    "benefitsHeader benefitsHeader"
    "benefits benefits"
    "supportHeader supportHeader"
    "support support";
  background: linear-gradient(to bottom, #7ba9e0, #d2deec, #115292);
}
h1,
h2,
h3,
h4,
h5 {
  position: relative;
  margin-left: 15px;
}
.about {
  grid-area: about;
  margin-left: 10px;
  margin-right: 10px;
}
.mission {
  grid-area: mission;
  margin-right: 20px;
  margin-left: 10px;
}
.missionHeader {
  grid-area: missionHeader;
}
.aboutHeader {
  grid-area: aboutHeader;
}
.benefitsHeader {
  grid-area: benefitsHeader;
}
.benefits {
  grid-area: benefits;
}

.support {
  grid-area: support;
  margin-bottom: 45px;
}
.support p {
  color: rgb(19, 20, 1);
  position: relative;
  margin-left: 15px;
}
.Reminder {
  grid-area: supportHeader;
}
span {
  font-size: 0.7rem;
}
.toggle {
  color: white;
}
</style>
