$(document).ready(function() {
  //populate project section with 3 most recent github projects (GitHup API)
  $.ajax({
    dataType: "json",
    url: "https://api.github.com/users/cbot83/repos?sort=created",
    success: function(res) {
      $.each(res, function(i, obj) {
        if (i > 2) return;
        let date = new Date(Date.parse(obj.created_at));

        $("#project-list").append(
          `<div class="card mb-3">
            <div class="card-body py-3 px-4">
            <div class="row">
                <div class="col pl-2">
                <div class="img-wrapper">
                    <img
                    src="images/git-code.png"
                    height="100%"
                    class="img-thumbnail fit-image"
                    />
                </div>
                </div>
                <div
                class="card-content pt-2 pl-1 justify-content-center align-self-center mr-4"
                >
                <h5 class="card-title mb-2 font-weight-bold">
                    <a href="${obj.html_url}">${obj.name}</a>
                </h5>
                <p class="card-text mb-1">
                    ${obj.description}
                </p>
                <p class="card-text">
                    <small class="text-muted">Created: ${date.toLocaleString()}</small>
                </p>
                </div>
            </div>
            </div>
        </div>`
        );
      });
    }
  });

  //show contact form on btn/nav click
  $("#show-contact-btn, #show-contact-link").click(function() {
    $(".contact-me").css({ display: "block" });
    if ($(window).width() >= 991.98) {
      $(".contact-me")
        .css({ left: "50%" })
        .animate({ left: "0" }, "slow");
    } else if ($(window).width() < 991.98) {
      $(".contact-me")
        .css({ left: "100%" })
        .animate({ left: "0" }, "slow");
    }
  });

  //hiding contact form
  $("#hide-contact-form").click(function() {
    if ($(window).width() >= 991.98) {
      $(".contact-me")
        .css({ left: "0" })
        .animate({ left: "50%" }, "slow", function() {
          $(this).css({ display: "none" });
        });
    } else if ($(window).width() < 991.98) {
      $(".contact-me")
        .css({ left: "0" })
        .animate({ left: "100%" }, "slow", function() {
          $(this).css({ display: "none" });
        });
    }
  });

  //Nav link smooth-scrolling
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 56
            },
            700
          );
          return false;
        }
      }
    });
});
