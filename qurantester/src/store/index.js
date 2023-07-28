import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    amountCorrect: 0,
    userCorrect: false,
    test: {
      question: {
        text: "أَأَنتُمْ أَنزَلْتُمُوهُ مِنَ الْمُزْنِ أَمْ نَحْنُ الْمُنزِلُونَ",
        verseNumber: 69,
        surahNumber: 56,
        audioUrl: "https://verses.quran.com/Minshawi/Murattal/mp3/056069.mp3",
      },
      multipleChoice: [
        "لَوْ نَشَاءُ جَعَلْنَاهُ أُجَاجًا فَلَوْلَا تَشْكُرُونَ",
        "ثُلَّةٌ مِّنَ الْأَوَّلِينَ",
        "أَوَآبَاؤُنَا الْأَوَّلُونَ ",
      ],
      answer: {
        text: "لَوْ نَشَاءُ جَعَلْنَاهُ أُجَاجًا فَلَوْلَا تَشْكُرُونَ",
        verseNumber: 70,
        surahNumber: 56,
        audioUrl: "https://verses.quran.com/Minshawi/Murattal/mp3/056070.mp3",
      },
    },
  },
  getters: {
  },
  mutations: {
    CHECK_ANSWER(state, payload) {
      if (state.test.answer.text == payload) {
        state.userCorrect = true;
        console.log(state.userCorrect == true)
        state.amountCorrect ++;
      }
      else {
        state.userCorrect =false;
      }

    },
    GENERATE_TEST(state){
      if (state.amountCorrect < 10) {
      state.test = {
        question: {
            text: "جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا",
            verseNumber: 36,
            surahNumber: 78,
            audioUrl: "https://verses.quran.com/Minshawi/Murattal/mp3/078036.mp3"
        },
        multipleChoice: [
            "إِنَّ يَوْمَ الْفَصْلِ كَانَ مِيقَاتًا ",
            "رَّبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الرَّحْمَـٰنِ ۖ لَا يَمْلِكُونَ مِنْهُ خِطَابًا",
            "كَلَّا سَيَعْلَمُونَ"
        ],
        answer: {
            text: "رَّبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الرَّحْمَـٰنِ ۖ لَا يَمْلِكُونَ مِنْهُ خِطَابًا",
            verseNumber: 37,
            surahNumber: 78,
            audioUrl: "https://verses.quran.com/Minshawi/Murattal/mp3/078037.mp3"
        }
      
    } }
    else {
      state.test = {}
      state.test.question = ""
      
      
    }
    state.userCorrect = false;
    }

  },
  actions: {
  },
  modules: {
  }
})
