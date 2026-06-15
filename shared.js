const config = window.PLANETE_MOA_CONFIG || {};

document.querySelectorAll("[data-facebook]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!config.facebookUrl) {
      event.preventDefault();
      window.alert("Facebook link is not configured yet.");
      return;
    }
    link.href = config.facebookUrl;
  });
});

document.querySelectorAll("[data-email]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!config.email) {
      event.preventDefault();
      window.alert("Email is not configured yet.");
      return;
    }
    link.href = `mailto:${config.email}`;
  });
});

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});
