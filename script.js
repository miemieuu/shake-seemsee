let shakeSound, nextSound; 
// ฟังก์ชันสำหรับการเขย่าเซียมซี
function st_random() {
  if (!backgroundSound.paused) {
    // สร้างเสียงเขย่า
    shakeSound = new Audio("sound/SFX_Shake_01.mp3");
    shakeSound.play(); // เล่นเสียงเขย่า

    // ดีเลย์เสียงถัดไป
    setTimeout(function() {
      nextSound = new Audio("sound/SFX_Result_01.mp3");
      nextSound.play(); // เล่นเสียงผลลัพธ์
    }, 4900);
  }


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




document.getElementById("back-add").addEventListener("click", function() {
  window.open("https://line.me/R/ti/p/@your-line-id", "_blank");
});

    // ฟังก์ชันเปิด/ปิดเสียงพื้นหลัง
const playSoundBtn = document.getElementById('play-sound-btn');
const soundOnIcon = document.getElementById('sound-on-icon');
const soundOffIcon = document.getElementById('sound-off-icon');
const backgroundSound = document.getElementById('background-sound');

playSoundBtn.addEventListener('click', function() {
  if (backgroundSound.paused) {
    backgroundSound.play(); // เล่นเสียงพื้นหลัง
    soundOffIcon.style.display = 'none';
    soundOnIcon.style.display = 'inline';
  } else {
    backgroundSound.pause(); // ปิดเสียงพื้นหลัง
    soundOffIcon.style.display = 'inline';
    soundOnIcon.style.display = 'none';

    // หยุดเสียงเขย่าและเสียงผลลัพธ์ทั้งหมด
    if (shakeSound) shakeSound.pause();
    if (nextSound) nextSound.pause();
  }
});


