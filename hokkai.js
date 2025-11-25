/*ロード画面風*/
window.addEventListener("load", () => {
  const loader = document.getElementById("loading-screen");
  setTimeout(() => {
    loader.style.display = "none";
  }, 4500);
});

/*ヘッダ写真*/
document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelectorAll("header .header-img");
  let index = 0;

  setInterval(() => {
    image[index].classList.remove("active");

    index = (index + 1) % image.length;

    image[index].classList.add("active");
  }, 4000);
});

/*スライドメニュー*/
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

// メニューを開く
menuOpen.addEventListener('click', () => {
  //cobsole.log('メニューを開く');
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
  // リンクをひとつずつ順に表示
  menuItems.forEach((menuItem, index) => {
  //cnsole.log('${index}番目のリスト');
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 2400,
        delay: 300 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
});
// 各リンクをクリックしたときの処理
const menuLinks = document.querySelectorAll('#menu-panel a');

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {

    const targetId = link.getAttribute('href'); // 例: "#about"
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // スムーズにスクロール
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }

    // メニューを閉じるアニメーション
    menuPanel.animate({translate: [0, '100vw']}, menuOptions);
    menuItems.forEach((menuItem) => {
      menuItem.animate({opacity: [1, 0]}, menuOptions);
    });
  });
});

//文字のアニメーション
const paragraphs = document.querySelectorAll('.anime');

const options = {
  root: null,
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

paragraphs.forEach(paragraphs => {
  observer.observe(paragraphs);
});

//cm部分
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.cm');
  let current = 0;
  const cmPanel = document.getElementById('cm-panel');
  const cmClose = document.getElementById('cm-close');
  const cmOpen = document.getElementById('cm-open');

  //初期：表示ボタン隠す
  cmOpen.classList.add('hiddden');

  //5.5秒後にcm表示
  setTimeout(() => {
    cmPanel.classList.remove('hidden');
    cmOpen.classList.add('hidden');
  }, 5500);

  //画面切り替え
  function showNextImage() {
    images[current].classList.remove('active')
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }
  setInterval(showNextImage, 3000);

  //閉じるボタン
　cmClose.addEventListener('click', () => {
    cmPanel.classList.add('hidden');
    cmOpen.classList.remove('hidden');
  });

  //表示ボタン
  cmOpen.addEventListener('click', () => {
    cmPanel.classList.remove('hidden');
    cmOpen.classList.add('hidden');
  });

  //初期常態：表示ボタン隠す
  cmOpen.classList.add('hidden');
});

//警告（偽）部分1
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.wr1');
  let current = 0;
  const wrPanel1 = document.getElementById('wr-panel1');
  const wrClose1 = document.getElementById('wr-close1');
  const container = document.querySelector('.photo-scroll-wrapper');

  //6.5秒後にcm表示
  setTimeout(() => {
    wrPanel1.classList.remove('hidden');
  }, 6500);

  //画面切り替え
  function showNextImage() {
    images[current].classList.remove('active')
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }
  setInterval(showNextImage, 500);

  //閉じるボタン
　wrClose1.addEventListener('click', () => {
    wrPanel1.classList.add('hidden');
    container.classList.add('hidden');
  });
});


//警告（偽）部分2
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.wr2');
  let current = 0;
  const wrPanel2 = document.getElementById('wr-panel2');
  const wrClose2 = document.getElementById('wr-close2');

  //6.8秒後にcm表示
  setTimeout(() => {
    wrPanel2.classList.remove('hidden');
  }, 6800);

  //閉じるボタン
　wrClose2.addEventListener('click', () => {
    wrPanel2.classList.add('hidden');
  });

});

//警告（偽）部3
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.wr3');
  let current = 0;
  const wrPanel3 = document.getElementById('wr-panel3');
  const wrClose3 = document.getElementById('wr-close3');

  //6.9秒後にcm表示
  setTimeout(() => {
    wrPanel3.classList.remove('hidden');
  }, 6900);

  //閉じるボタン
　wrClose3.addEventListener('click', () => {
    wrPanel3.classList.add('hidden');
  });
});

const container = document.querySelector('.photo-scroll');
const images = ['1009.jpg', '1010.jpg', '1011.jpg', '1012.jpg', '1013.jpg']

images.forEach(src => {
  const img = document.createElement('img');
  img.src = `images/${src}`;
  container.appendChild(img);
});






