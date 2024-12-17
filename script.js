
// ฟังก์ชันสำหรับการเขย่าเซียมซี
function st_random() {
  const shakeSound = new Audio("sound/SFX_Shake_01.mp3"); // ใส่ path ของไฟล์เสียง
  shakeSound.play(); // เล่นเสียง

    // เมื่อเสียงเขย่าจบ ให้เล่นเสียงถัดไป

      // ดีเลย์ 3 วินาที ก่อนเล่นเสียงถัดไป
      setTimeout(function() {
        const nextSound = new Audio("sound/SFX_Result_01.mp3"); // ใส่ path ของไฟล์เสียงถัดไป
        nextSound.play(); // เล่นเสียงถัดไป
      },4900); // ดีเลย์ 3000ms (3 วินาที)


  $("#ss-img").attr("src", "TestPic/seemsee.gif"); // ตั้งค่าให้แสดง gif
  const allowedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24];
  $("#b_start").hide(); // ซ่อนปุ่ม "SHAKE"

  const gifDuration = 3000; // ระยะเวลาของ GIF 3 วินาที

  setTimeout(function () {
    setTimeout(function () {
      const randomIndex = Math.floor(Math.random() * allowedNumbers.length);
      let ssNumber = allowedNumbers[randomIndex];
      ssNumber = ssNumber < 10 ? `0${ssNumber}` : ssNumber;

      const ssimg = `TestPic/SS${ssNumber}.jpg`;
      $("#ss-img").attr("src", ssimg).removeClass("ss-img").addClass("ss-img-large");
      $("#b_continue").show(); // แสดงปุ่ม "Back" หลังเขย่าเสร็จ
    }, 1500); // รอหลัง GIF จบ 1.5 วินาที
  }, gifDuration);
}

// ฟังก์ชันสำหรับไปหน้าข้อมูลติดต่อ
function goContact() {
  $("#katha-section").hide();
  $("#seemsee-section").hide();
  $("#contact-section").show(); // แสดงข้อมูลติดต่อ
  $("#back-add").show(); // แสดงปุ่ม ADD
  $("#b_back").show(); // แสดงปุ่ม "Back"
}

function goBack() {
  // รีเฟรชหน้าเว็บใหม่
  location.reload();
}


// ฟังก์ชันเพื่อซ่อนส่วนคาถาและแสดงส่วนเซียมซีเมื่อกดปุ่ม "ถัดไป"
$("#next-btn").click(function() {
  $("#katha-section").hide(); // ซ่อนส่วนแสดงคาถา
  $("#seemsee-section").show(); // แสดงส่วนแสดงเซียมซี
  $("body").addClass("body-dark"); // เพิ่มคลาสให้พื้นหลังมืด
  $("#b_back").hide(); // ซ่อนปุ่ม "Back" (ในส่วนเซียมซีไม่มี Back)
});


// ตรวจสอบว่าเป็นอุปกรณ์มือถือหรือไม่
function isMobile() {
  return /iPhone|iPod|Android/i.test(window.navigator.userAgent);
}

// ฟังก์ชันตรวจสอบแนวหน้าจอ
function checkOrientation() {
  if (isMobile() && window.innerHeight < window.innerWidth) {
    // ถ้าเป็นมือถือและอยู่ในแนวนอน
    document.body.classList.add('landscape');
  } else {
    // ลบ class "landscape" หากไม่ตรงเงื่อนไข
    document.body.classList.remove('landscape');
  }
}

document.getElementById("back-add").addEventListener("click", function() {
  window.open("https://line.me/R/ti/p/@your-line-id", "_blank");
});

    // เลือกองค์ประกอบต่างๆ
    const playSoundBtn = document.getElementById('play-sound-btn');
    const soundOnIcon = document.getElementById('sound-on-icon');
    const soundOffIcon = document.getElementById('sound-off-icon');
    const backgroundSound = document.getElementById('background-sound');

    // ฟังก์ชันเปิด/ปิดเสียง
    playSoundBtn.addEventListener('click', function() {
      if (backgroundSound.paused) {
        backgroundSound.play(); // เล่นเสียง
        soundOffIcon.style.display = 'none'; // ซ่อนไอคอนเสียงเปิด
        soundOnIcon.style.display = 'inline'; // แสดงไอคอนเสียงปิด
      } else {
        backgroundSound.pause(); // หยุดเสียง
        soundOffIcon.style.display = 'inline'; // แสดงไอคอนเสียงเปิด
        soundOnIcon.style.display = 'none'; // ซ่อนไอคอนเสียงปิด
      }
    });

    // เล่นเสียงอัตโนมัติเมื่อหน้าเว็บโหลด
    window.addEventListener('load', function() {
      backgroundSound.play(); // เริ่มเล่นเสียงพื้นหลัง
      soundOnIcon.style.display = 'none'; // ซ่อนไอคอนเสียงเปิด
      soundOffIcon.style.display = 'inline'; // แสดงไอคอนเสียงปิด
    });

// เรียกใช้งานเมื่อโหลดหน้าและเปลี่ยนขนาดหน้าจอ
window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);
