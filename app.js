const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const headline = document.querySelector(".headline");
const tl = new TimelineMax();

ScrollReveal().reveal("nav", {
  reset: false,
  interval: 16,
  duration: 2000
});

ScrollReveal().reveal(
  ".aboutMe, #aboutMe, .arrow, .welcomeText, .education, #education, .myProjects, #myProjects, .apprenticeship, .row, #contact, .project_right, .project_left, #project_1, .project, .project2, .project3, #project_2, #project_3, #project_4, #project_5, .logoContainer, .linksContainer, .grid-container, #skills, .text-center, #project_6, .parcours, #goals, #myTasks, .container-logo, .omnicarDescription",
  {
    reset: false,
    interval: 16,
    duration: 2000
  }
);

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { y: "-100%" },
    { y: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(
    headline,
    0.5,
    { opacity: 0, x: 30, y: 0 },
    { opacity: 1, x: 0, y: -70 },
    "-=0.5"
  );

/**
 * Smooth scrolling to page anchor on click
 **/

$(function() {
  $("a[href*='#aboutMe']:not([href='aboutMe'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});

$(function() {
  $("a[href*='#education']:not([href='education'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});

$(function() {
  $("a[href*='#job']:not([href='job'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});

$(function() {
  $("a[href*='#contact']:not([href='contact'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});

$(function() {
  $("a[href*='#project_1']:not([href='project_1'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});

$(function() {
  $("a[href*='#project_2']:not([href='project_2'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});

$(function() {
  $("a[href*='#project_3']:not([href='project_3'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});

$(function() {
  $("a[href*='#project_4']:not([href='project_4'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});

$(function() {
  $("a[href*='#project_5']:not([href='project_5'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});


$(function() {
  $("a[href*='#project_6]:not([href='project_6'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});


$(function() {
  $("a[href*='#project_7]:not([href='project_7'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});


$(function() {
  $("a[href*='#project_8]:not([href='project_8'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});


$(function() {
  $("a[href*='#project_9]:not([href='project_9'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});

$(function() {
  $("a[href*='#goals']:not([href='goals'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});

$(function() {
  $("a[href*='#myTasks']:not([href='myTasks'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({ scrollTop: anchor.offset().top }, 1500);
      }
    }
  });
});
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img3.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img4.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img5.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img6.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};