$(document).ready(function() {
    // Dropdown on Navbar for small screens
    $('.navbar-nav .nav-link').on('click', function() {
      if ($(window).width() < 768) {
        $(this).parent().siblings().find('.nav-link').removeClass('active');
        $(this).parent().siblings().find('.dropdown-menu').removeClass('show');
        $(this).toggleClass('active');
        $(this).next('.dropdown-menu').toggleClass('show');
      }
    });

    document.querySelectorAll('.nav-link, #navbarnav').forEach(item => {
      item.addEventListener('click', () => {
        const navbarToggler = document.getElementById('navbarToggler');
        if (navbarToggler.classList.contains('show')) {
          navbarToggler.classList.remove('show');
        }
      });
    });
  
    // Smooth Scrolling
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .on('click', function(event) {
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr('tabindex', '-1');
                $target.focus();
              }
            });
          }
        }
      });
  });

  // Contact
  function validateForm() {
    var name = document.getElementById('floatingInput').value;
    var email = document.getElementById('floatingEmail').value;
    var gender = document.getElementById('genderSelect').value;
    var message = document.getElementById('floatingTextarea2').value;
    var errorMessage = "";

    if (name.trim() == '') {
        errorMessage += "Nama lengkap tidak boleh kosong.\n";
    }

    if (email.trim() == '') {
        errorMessage += "Alamat email tidak boleh kosong.\n";
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage += "Alamat email harus valid.\n";
        }
    }

    if (gender == null || gender === "") {
        errorMessage += "Silakan pilih jenis kelamin.\n";
    }

    if (message.trim() == '') {
        errorMessage += "Pesan tidak boleh kosong.\n";
    }

    if (errorMessage !== "") {
        alert(errorMessage);
        return false;
    }

    return true;
}