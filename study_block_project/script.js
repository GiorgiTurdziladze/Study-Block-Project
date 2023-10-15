document.addEventListener("DOMContentLoaded", function () {
  const nextSlideButton = document.getElementById("nextSlide");
  const prevSlideButton = document.getElementById("prevSlide");
  const nextChapterButton = document.getElementById("nextChapter");
  const prevChapterButton = document.getElementById("prevChapter");
  const titles = document.querySelector(".titles");
  const restartButton = document.getElementById("restart");

  const presentation = document.querySelector(".presentation");
  let currSlideIndex = 0;
  let currentChapterIndex = 0;

  update();

  nextChapterButton.addEventListener("click", () => {
    if (currentChapterIndex < presentation.children.length - 1) {
      currentChapterIndex++
      currSlideIndex = 0;
    };
    update();
  });

  prevChapterButton.addEventListener("click", () => {
    if (currentChapterIndex !== 0) {
      currentChapterIndex--
      currSlideIndex = 0;
    };
    update();
  });

  nextSlideButton.addEventListener("click", () => {
    if (currSlideIndex < presentation.children[currentChapterIndex].childElementCount - 1) currSlideIndex++;
    update();
  });

  prevSlideButton.addEventListener("click", () => {
    if (currSlideIndex !== 0) currSlideIndex--;
    update();
  });

  restartButton.addEventListener("click", () => {
    currSlideIndex = 0;
    currentChapterIndex = 0;
    update();
  });

  function update() {
    updateSlide();
    updateSlideButtons();
    updateTitles();
  }

  function updateSlide() {
    debugger
    presentation.style.transform = `translateX(calc(-${presentation.children[currentChapterIndex].offsetLeft}px - ${100 * currSlideIndex}vw))`;
  }

  function updateSlideButtons() {
    debugger
    nextSlideButton.disabled = currSlideIndex === presentation.children[currentChapterIndex].childElementCount - 1;
    prevSlideButton.disabled = currSlideIndex === 0;
    nextChapterButton.disabled = currentChapterIndex === presentation.childElementCount - 1;
    prevChapterButton.disabled = currentChapterIndex === 0;
  }

  function updateTitles() {
    for (let i = 0; i < titles.children.length; i++) {
      titles.children[i].style.display = 'none'
    }
    titles.children[currentChapterIndex].style.display = 'inline-block';
    titles.children[currentChapterIndex].children[0].innerHTML = currSlideIndex + 1;
    debugger
  }
});
