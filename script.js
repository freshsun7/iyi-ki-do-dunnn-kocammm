const scenes = Array.from(document.querySelectorAll('.scene'));
const sceneOrder = ['intro', 'envelope', 'letter', 'countdown', 'gallery', 'memory', 'finale'];
let currentIndex = 0;

const letterText = document.getElementById('letterText');
const letterTextInner = document.getElementById('letterTextInner');
const endingText = document.getElementById('endingText');
const envelope = document.getElementById('envelope');
const confettiLayer = document.getElementById('confettiLayer');
const letterCard = document.querySelector('.letter-card');
const modal = document.getElementById('photoModal');
const galleryHeartBtn = document.getElementById('galleryHeartBtn');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('photoModalClose');
let letterStarted = false;

const letterMessage = `23. yaş günün kutlu olsun bebeğim. Benden uzakta geçirdiğin ilk ve umarım tek doğum günün bu... Geçen yıl da tam anlamıyla yanında olamamıştım ama bu yıl yanında olmayı o kadar çok isterdim ki. Sana sarılıp doğum gününü ilk ben kutlamak, yüzünü görmek, o güzel gülüşünü izlemek isterdim ama şimdilik bunu sana küçük bir sürprizle hissettirmeye çalışıyorum.

Kocamla yaşıt olduğum sadece 3 ay var. Yazmaya nereden başlayacağımı gerçekten bilmiyorum çünkü seninle geçen bu koca bir yılı birkaç paragrafa sığdırmak çok zor. Ama şunu biliyorum ömrümdeki en güzel yıllardan biri seninle geçti. Birlikte o kadar çok şey yaşadık ki... İyi günlerimiz oldu, kötü günlerimiz oldu, stresli zamanlarımız oldu, yorulduğumuz günler oldu, çok heyecanlandığımız anlar oldu, kahkahalar attığımız zamanlar oldu... Ama dönüp baktığımda hiçbirini değiştirmek istemem çünkü hepsinde sen vardın bebeğim.

Seni tanımak, seni bilmek, seni sevmek ve en önemlisi biz olabilmek bana dünyanın en güzel hislerinden birini yaşatıyor. Bazen durup senin bir olaya nasıl tepki vereceğini tahmin edebilmek beni çok ama çok mutlu ediyor. Seni bu kadar iyi tanıyor olmak bana kendimi çok şanslı hissettiriyor. Arada minik ufak tefek kavgalarımız da oluyor. Bence kavgalarımız bile eğlenceli çünkü ne olursa olsun günün sonunda yine birbirimize dönüyoruz. İşte en sevdiğim şey de bu. Her şeye rağmen hep biz olabiliyoruz.

Seni düşündüğümde aklıma ilk gelen şey hep gülüşün oluyor. Sana bunu kaç kere söyledim bilmiyorum ama bir kez daha söyleyeceğim. Gülüşüne gerçekten aşığımm kocam. Dünyanın en güzel gülüşü. Ne zaman gülsen benim de istemsizce yüzüm gülüyor. Bazen seni izlerken kendi kendime düşünüyorum... İyi ki o gece sana reels atmışım çünkü küçücük görünen o hareket, benim hayatımdaki en güzel başlangıçlardan biri olmuş. İyi ki benimle konuşmuşsun, iyi ki hayatıma girmişsin ve en önemlisi iyi ki benim olmuşsun kocam.

Bugün benim kocam 23 yaşına giriyor. Bu yeni yaşın sana önce sağlık getirsin, sonra huzur getirsin, sonra hayalini kurduğun her şeyi tek tek gerçekleştirebileceğin fırsatlar getirsin. Yaptığın işlerden keyif aldığın, kendini geliştirdiğin, mutlu olduğun ve her gün biraz daha gurur duyduğun bir yıl olsun. Ve bol para getirsin tabii çünkü ben huzuru, mutluluğu, kaosu ve en önemlisi beni sonsuz zorbalayabilmeni de getiriyorum hem de hepsi ücretsiz. Böyle bir hizmeti başka yerde bulamazsın kocam.

Seninle birlikte büyümek hayatımın en özel şansı. Geleceği düşünürken yanında kendimi hayal etmek, kurduğumuz hayaller, ettiğimiz sohbetler bunların hepsi bana evim gibi hissettiriyor. Hayat bazen istediğimiz gibi gitmeyebilir. Yorulabiliriz, üzülebiliriz, hatta bazen birbirimize kızabiliriz ama ben şunu biliyorum bütün bunların sonunda yine elini tutmak istediğim kişi sensin çünkü benim en güvenli yerim hep sen oldun biricik kocam.

Birlikte daha kutlayacağımız o kadar çok doğum günü var ki. İnşallah bir sonrakilerde mumlarını birlikte üfleriz, pastanı birlikte yeriz, gece sarılarak uyuruz ve artık uzakta kelimesini hiç kullanmak zorunda kalmayız. Seni tarif etmeye kelimeler yetmiyor. Ama şunu çok rahat söyleyebilirim bebeğim: İyi ki doğmuşsun. İyi ki benim sevgilim olmuşsun. İyi ki benim en yakın arkadaşım olmuşsun. İyi ki hayatıma gelmişsin. Ve her şeyden önemlisi... İyi ki benim kocamsın.

Seni bugün dünden daha çok seviyorum. Yarın ise bugünden daha çok seveceğim. Nice yaşlara bebeğim... İyi ki doğdun. Seni çok ama çok seviyorum. ❤️`;

const endingLines = [
  'Eğer bu satırı okuyorsan, demek ki sonuna kadar geldin.',
  'Tıpkı benim de hayatımın sonuna kadar senin yanında olmak istediğim gibi...',
  'Seni seçtim.',
  'Bugün de...',
  'Yarın da...',
  'Her zaman...'
];

function showScene(name) {
  scenes.forEach((scene) => scene.classList.toggle('active', scene.dataset.scene === name));
}

function nextScene() {
  if (currentIndex < sceneOrder.length - 1) {
    currentIndex += 1;
    showScene(sceneOrder[currentIndex]);
  }
}

function startSequence() {
  showScene('intro');
  setTimeout(() => {
    showScene('envelope');
  }, 2800);
}

function typeLetter() {
  if (letterStarted) return;
  letterStarted = true;
  const letterCard = document.querySelector('.letter-card');
  letterCard.classList.add('opened');
  let index = 0;
  const speed = 28;
  letterTextInner.textContent = '';
  const typing = setInterval(() => {
    letterTextInner.textContent += letterMessage[index];
    index += 1;
    if (index >= letterMessage.length) {
      clearInterval(typing);
      const finished = document.createElement('p');
      finished.className = 'letter-finished';
      finished.textContent = '💌 Mektup tamamlandı.';
      letterText.parentElement.appendChild(finished);
      setTimeout(() => {
        showScene('countdown');
        startCountdown();
        setTimeout(() => {
          showScene('gallery');
          setTimeout(() => {
            showScene('memory');
            setTimeout(() => {
              showScene('finale');
              runFinale();
            }, 2600);
          }, 2600);
        }, 2600);
      }, 2200);
    }
  }, speed);
}

function startCountdown() {
  const target = new Date('2025-04-03T00:00:00+03:00').getTime();
  const update = () => {
    const now = Date.now();
    const diff = now - target;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  };

  update();
  setInterval(update, 1000);
}

function runFinale() {
  const heart = document.getElementById('finalHeart');
  confettiLayer.classList.remove('burst');
  void confettiLayer.offsetWidth;
  confettiLayer.classList.add('burst');
  const fullText = [
    'Eğer bu satırı okuyorsan... demek ki sonuna kadar geldin.',
    'Tıpkı benim de hayatımın sonuna kadar senin yanında olmak istediğim gibi...',
    'Seni seçtim.',
    'Bugün de...',
    'Yarın da...',
    'Her zaman...'
  ];

  heart.textContent = '❤️';
  let lineIndex = 0;
  const interval = setInterval(() => {
    endingText.textContent = fullText[lineIndex] || 'İyi ki doğdun kocam. ❤️';
    lineIndex += 1;
    if (lineIndex > fullText.length) {
      clearInterval(interval);
      setTimeout(() => {
        endingText.innerHTML = '<strong>❤️ Sonsuza Kadar Sen ❤️</strong>';
      }, 1800);
    }
  }, 1800);
}

function loadYoutubePlayer() {
  if (!youtubeIframe) return;
  youtubeIframe.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}`;
}

function setupPhotoModal() {
  const images = document.querySelectorAll('.gallery-grid img');
  images.forEach((img) => {
    img.addEventListener('click', () => {
      modalImage.src = img.dataset.full;
      modal.setAttribute('aria-hidden', 'false');
      modal.classList.add('open');
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

envelope.addEventListener('click', () => {
  if (envelope.classList.contains('opened')) return;
  envelope.classList.add('opened');
  confettiLayer.classList.add('burst');
  setTimeout(() => {
    showScene('letter');
    typeLetter();
  }, 900);
});

function setupHeartNavigation() {
  if (!galleryHeartBtn) return;
  galleryHeartBtn.addEventListener('click', () => {
    showScene('memory');
  });
}

window.addEventListener('load', () => {
  startSequence();
  setupPhotoModal();
  setupHeartNavigation();
});
