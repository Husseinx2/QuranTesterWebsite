import axios from 'axios';

const https = axios.create({
  baseURL: "https://localhost:44350"
});

export default {

  listChapters() {
    return https.get('/chapter/names');
  },
  chapterTest(id) {
    return https.get(`/chapter/test/${id}`);
  },
  hardChapterTest(id){
    return https.get(`/chapter/hardTest/${id}`);
  },
  volumeTest(id) {
    return https.get(`/volume/test/${id}`);
  },
  hardVolumeTest(id){
    return https.get(`/volume/hardTest/${id}`);

  },
  multipleVolumesTest(first, last) {
    return https.get(`/volume/test/${first}/${last}`);
  },
  getVerse(chapter, verse) {
    return https.get(`/chapter/${chapter}/${verse}`);
  },
  chapterNameTest(id) {
    return https.get(`/volume/surahnametest/${id}`);
  }
}