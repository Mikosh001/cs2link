const share = document.querySelector("#share");
const label = document.querySelector("#share-label");
const status = document.querySelector("#share-status");
const manual = document.querySelector("#manual-share");
const field = document.querySelector("#share-url");
const siteUrl = document.querySelector('link[rel="canonical"]').href;
let resetLabel;

share.hidden = false;
share.addEventListener("click", async () => {
  clearTimeout(resetLabel);
  try {
    await navigator.clipboard.writeText(siteUrl);
    manual.hidden = true;
    label.textContent = "Сілтеме көшірілді";
    status.textContent = "Сайт сілтемесі көшірілді.";
    resetLabel = setTimeout(() => {
      label.textContent = "Сілтемені көшіру";
      status.textContent = "";
    }, 2600);
  } catch {
    label.textContent = "Сілтемені көшіру";
    field.value = siteUrl;
    manual.hidden = false;
    field.focus();
    field.select();
    status.textContent = "Сілтеме белгіленді. Оны көшіріп ал.";
  }
});
