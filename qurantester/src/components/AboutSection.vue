<template>
  <div class="section">
     <h1 class="aboutHeader">About Quran Tester</h1>
    <section class="about">
      <p>

        The Quran is a profound source of wisdom, guidance, and spiritual
        nourishment. Our mission is to provide a unique platform that enables
        users to embark on a transformative journey of strengthening their
        memorization skills and deepening their connection with the Quran.
      </p>
      <p>
        QuranTester represents a comprehensive and user-centric solution for
        Quran memorization and study, utilizing the power of Technology to
        provide a seamless and engaging experience for users seeking to deepen
        their memorization skills, love and connection with the Quranic text.
      </p>
    </section>
    <h1 class="misionHeader">Our Mission</h1>
    <section class="mission">
      <p>
        Our mission is to rebuild the lost connection with the Quran and empower
        individuals in their pursuit of Quranic memorization. We understand the
        challenges of finding a qualified teacher available at all times, and we
        strive to remove the barriers hindering progress in this sacred journey.
        Through our innovative Quran Tester page, we provide a comprehensive
        solution to enhance your memorization skills. Our platform offers a
        diverse range of tests designed to cater to your individual needs,
        whether you are a beginner or an advanced memorizer. With us, you no
        longer have to worry about the absence of a teacher, as our website is
        here to guide and support you throughout your Quranic learning journey.
        Embrace this transformative experience with us, and let the Quran flow
        through your heart as you strengthen your connection with its divine
        words. Together, we embark on a path of continuous growth, enabling you
        to become a proficient Hafidth or Hafidtha.
      </p>
    </section>
    <h1 class="benefitsHeader">
      What Are the Benefits Of Reading And Memorizng The Quran?
    </h1>
    <section class="benefits">
      <ul>
        <li>
          <p>
            <b>
              The Prophet (ﷺ) said: "It shall be said - meaning to the one who
              memorized the Qur'an - 'Recite, and rise up, recite (melodiously)
              as you would recite in the world. For indeed your rank shall be at
              the last Ayah you recited.'"
            </b>
          </p>
          <span>(Jami` at-Tirmidhi 2914)</span>
        </li>
        <li>
          <p>
            <b>
              The Prophet (ﷺ) said: "If anyone recites the Qur'an and acts
              according to its content, on the Day of Judgement his parents will
              be given to wear a crown whose light is better than the light of
              the sun in the dwellings of this world if it were among you. So
              what do you think of him who acts according to this ?"
            </b>
          </p>
          <span>(Sunan Abi Dawud 1453)</span>
        </li>
      </ul>

      <b
        ><h3>
          The Benefits of memorizing the quran are so much that we would have
          trouble fitting it all in one page. We ask allah to make us among
          those who are companions of the Quran.
        </h3></b
      >
    </section>
    <h1 class="Reminder">Message From Us</h1>
    <section class="support">
      <h3>
        This website and the software that supports it is far from finished and
        we are making upgrades to it everyday.
      </h3>
      <p>
        We ask that you be patient as this website is still not fully complete.
        If there are any problems with the website or you have any feedback you
        can contact us through
        <a href="https://www.linkedin.com/in/hussein210/">LinkedIn</a>
      </p>

      <h3>Misc</h3>
      <p>
        We ask that you to keep all the people who worked on this website in
        your du'a
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

div {
  display: grid;
  grid-template: 1fr 1fr;
  grid-template-areas:
    "aboutHeader missionHeader "
    "about mission"
    "benefitsHeader benefitsHeader"
    "benefits benefits"
    "supportHeader supportHeader"
    "support support";
    background-color: rgb(128, 213, 247);
    
}
h1,h2,h3,h4,h5{
  position: relative;
  left:15px
}
.about {
  grid-area: about;
  margin: 15px;
}
.mission {
  grid-area: mission;
    margin: 15px;

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
.benefits p {
  font-family: Times New Roman, Times, serif;
}
.support {
  grid-area: support;

}
.support p {
  position: relative;
  left:30px
}
.supportHeader {
  grid-area: supportHeader;
}
.about p,
.mission p {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
span {
  color: cadetblue;
}
</style>