window.addEventListener("scroll", function(e) {
  navbarFixed();
  relativeIntro();
  translateCloserLook();
  scrollMagic();
  fixedGallery();
  changeImageGallery();
  moveCamera();
  fixedVideo();
  zoomVideo();
});

function navbarFixed() {
  const height = document.getElementsByClassName("navbar-container")[0]
    .clientHeight;
  if (
    this.document.getElementsByClassName("sticky-overview")[0] &&
    window.scrollY < height
  ) {
    this.document
      .getElementsByClassName("overview-container")[0]
      .classList.remove("sticky-overview");
    this.document.getElementById("jelly-smooth").style.display = "none";
  }

  if (
    window.scrollY >= height &&
    !this.document.getElementsByClassName("sticky-overview")[0]
  ) {
    this.document
      .getElementsByClassName("overview-container")[0]
      .classList.add("sticky-overview");
    this.document.getElementById("jelly-smooth").style.display = "block";
  }
}

function relativeIntro() {
  const bottom = document
    .getElementsByClassName("iphone-image-container")[0]
    .getBoundingClientRect().bottom;
  const height = document.getElementsByClassName("navbar-container")[0]
    .clientHeight;
  if (bottom < 0) {
    document.getElementById("iphone-intro").classList.add("iphone-intro-2");
    document.getElementById("iphone-intro").classList.remove("iphone-intro");
  }
  if (bottom > 0) {
    document.getElementById("iphone-intro").classList.add("iphone-intro");
    document.getElementById("iphone-intro").classList.remove("iphone-intro-2");
  }
}

function moveCamera() {
  const container = document.getElementsByClassName("iphone-lens-container")[0];
  const top = container.getBoundingClientRect().top;
  const bottom = container.getBoundingClientRect().bottom;
  if (top > -1000 && top < 1000) {
    // for (let i = 0; i <= 2; i++) {
    //   document.getElementsByClassName("len")[
    //     i
    //   ].style.transform = `matrix(${0.9 +
    //     ((top + 1000) * 0.09) / 2000}, ${(0.5 * top) / 1000}, ${(-0.5 * top) /
    //     1000},${0.9 + ((top + 1000) * 0.09) / 2000}, 0, 0)`;
    // }
    document.getElementsByClassName(
      "len-block-1"
    )[0].style.transform = `matrix(${0.96 +
      ((top + 1000) * 0.03) / 2000}, ${(0.3 * top) / 1000}, ${(-0.3 * top) /
      1000},${0.96 + ((top + 1000) * 0.03) / 2000}, 0, 0)`;
    document.getElementsByClassName(
      "len-block-2"
    )[0].style.transform = `matrix(${0.96 +
      ((top + 1000) * 0.03) / 2000}, ${(0.3 * top) / 1000}, ${(-0.3 * top) /
      1000},${0.96 + ((top + 1000) * 0.03) / 2000}, 0, 0)`;
  }
}

function translateCloserLook() {
  const top = this.document
    .getElementsByClassName("closer-look-container")[0]
    .getBoundingClientRect().top;
  if (top <= 1600 && top > 0) {
    this.document.getElementsByClassName(
      "closer-look-container"
    )[0].style.transform = `translateY(${-top * 0.5}px)`;
    this.document.getElementsByClassName(
      "closer-look-container"
    )[0].style.opacity = `${1 / Math.sqrt(Math.sqrt(Math.sqrt(top)))}`;
  }
  if (top > 1600) {
    this.document.getElementsByClassName(
      "closer-look-container"
    )[0].style.transform = `translateY(${-800}px)`;
    this.document.getElementsByClassName(
      "closer-look-container"
    )[0].style.opacity = "0";
  }
  if (top <= 0) {
    this.document.getElementsByClassName(
      "closer-look-container"
    )[0].style.transform = `translateY(${0}px)`;
    this.document.getElementsByClassName(
      "closer-look-container"
    )[0].style.opacity = "1";
  }
}

function scrollMagic() {
  const element = document.getElementById("scroll-magic-1");
  const nextElement = document.getElementsByClassName("fov-container")[0];
  if (element.getBoundingClientRect().top < 100) {
    document
      .getElementById("section-invisible-block")
      .classList.add("display-invisible-block");
    // const image= document
    // .getElementsByClassName("section-image-container")[0];
    // image.style.position = "fixed";
    // image.style.top = "100px";
    // image.style.left = `${995}px`;
    document
      .getElementsByClassName("section-content-container")[0]
      .classList.add("scroll-magic-sticky");
  }
  if (nextElement.getBoundingClientRect().top >= window.innerHeight) {
    document
      .getElementById("section-invisible-block")
      .classList.remove("display-invisible-block");
    document
      .getElementsByClassName("section-content-container")[0]
      .classList.remove("scroll-magic-sticky");
  }
}

function fixedGallery() {
  const container = document.getElementsByClassName("fov-container")[0];
  const element = document.getElementsByClassName("special-fov-block")[0];
  const introBottom = document
    .getElementsByClassName("fov-intro")[0]
    .getBoundingClientRect().bottom;
  if (introBottom < 200) {
    element.style.position = "fixed";
    element.style.top = "200px";
  } else {
    element.style.position = "";
  }
}

function changeImageGallery() {
  const telephoto = document.getElementsByClassName("telephoto")[0];
  const wide = document.getElementsByClassName("wide")[0];
  const ultraWide = document.getElementsByClassName("ultra-wide")[0];

  const telephotoBar = document.getElementById("telephoto");
  const wideBar = document.getElementById("wide");
  const ultraWideBar = document.getElementById("ultra-wide");
  if (window.pageYOffset < 6050 + 600) {
    telephoto.style.opacity = 1;
    wide.style.opacity = 0;
    ultraWide.style.opacity = 0;

    telephotoBar.classList.add("fov-bar-item-active");
    wideBar.classList.remove("fov-bar-item-active");
    ultraWideBar.classList.remove("fov-bar-item-active");
  }
  if (window.pageYOffset > 6650 && window.pageYOffset < 7250) {
    telephoto.style.opacity = 0;
    wide.style.opacity = 1;
    ultraWide.style.opacity = 0;

    telephotoBar.classList.remove("fov-bar-item-active");
    wideBar.classList.add("fov-bar-item-active");
    ultraWideBar.classList.remove("fov-bar-item-active");
  }
  if (window.pageYOffset > 7250) {
    telephoto.style.opacity = 0;
    wide.style.opacity = 0;
    ultraWide.style.opacity = 1;

    telephotoBar.classList.remove("fov-bar-item-active");
    wideBar.classList.remove("fov-bar-item-active");
    ultraWideBar.classList.add("fov-bar-item-active");
  }
}

function fixedVideo() {
  const container = document.getElementsByClassName("video-4k-container")[0];
  const top = container.getBoundingClientRect().top;
  const element = document.getElementsByClassName("video-container")[0];
  if (top < 100) {
    element.classList.add("fixed-video");
  }
}

function zoomVideo() {
  const element = document.getElementsByClassName("video-container")[0];
  if (window.pageYOffset > 8900 && window.pageYOffset < 10000) {
    element.style.width = `${-window.pageYOffset / 22 + 504}%`;
    console.log(`${-window.pageYOffset / 22 + 504}%`);
  }
  if (window.pageYOffset < 8900) {
    element.classList.remove("fixed-video");
  }
}
