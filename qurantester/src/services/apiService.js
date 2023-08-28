import axios from 'axios';

const https = axios.create({
  baseURL: "https://husseinsapi-4262268d4241.herokuapp.com/"
});

export default {

  listChapters() {
    return https.get('/chapter/names');
  },
  chapterTest(id) {
    return https.get(`/chapter/test/${id}`);
  },
  hardChapterTest(id) {
    return https.get(`/chapter/hardTest/${id}`);
  },
  volumeTest(id) {
    return https.get(`/volume/test/${id}`);
  },
  hardVolumeTest(id) {
    return https.get(`/volume/hardTest/${id}`);

  },
  multipleVolumesTest(first, last) {
    return https.get(`/volume/test/${first}/${last}`);
  },
  multipleVolumeHardTest(first, last) {
    return https.get(`/volume/hardtest/${first}/${last}`);

  },
  getVerse(chapter, verse) {
    return https.get(`/chapter/${chapter}/${verse}`);
  },
  NameTest(id) {
    return https.get(`/volume/surahnametest/${id}`);
  },
  multipleNameTest(first,last) {
  return https.get(`/volume/surahnametest/${first}/${last}`);
  }
}