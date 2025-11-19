/*
スライドメニュー
================================================ */
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
    event.preventDefault(); // デフォルトのリンク動作を止める

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
