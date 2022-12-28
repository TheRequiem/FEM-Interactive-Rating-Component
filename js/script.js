const rating = document.querySelectorAll('input[name="rating"]');
const output = document.getElementById("rating_text");
const btn = document.getElementById("btn");
const ty = document.getElementById("thank_you");

btn.addEventListener("click", () => {
    let selected;
    for (const x of rating) {
        if (x.checked) {
            selected = x.value;  
            break;
        }
    }
    output.innerHTML = selected ? selected : "none";
    ty.classList.remove("hide");
})