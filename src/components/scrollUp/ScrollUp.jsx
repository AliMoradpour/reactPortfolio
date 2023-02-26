import "./scrollUp.css";

function ScrollUp() {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollUp");
    if (this.scrollY >= 920) scrollUp.classList.add("show_scroll");
    else scrollUp.classList.remove("show_scroll");
  });

  return (
    <a href="#home" className="scrollUp">
      <i className="uil uil-arrow-up scrollUp_icon"></i>
    </a>
  );
}

export default ScrollUp;
