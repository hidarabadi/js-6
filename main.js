const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");

btn1.addEventListener("click", function () {
    div1.classList.add("block");
    div1.classList.remove("hidden");
    div2.classList.add("hidden");
    div2.classList.remove("block");
    div3.classList.add("hidden");
    div3.classList.remove("block");

    btn1.classList.add(" bg-[#ffffff]")
    btn1.classList.remove(" bg-[#B6C9F0]")


});

btn2.addEventListener("click", function () {
    div2.classList.add("block");
    div2.classList.remove("hidden");
    div1.classList.add("hidden");
    div1.classList.remove("block");
    div3.classList.add("hidden");
    div3.classList.remove("block");

    btn2.classList.add(" bg-[#ffffff]")
    btn2.classList.remove(" bg-[#B6C9F0]")
});

btn3.addEventListener("click", function () {
    div3.classList.add("block");
    div3.classList.remove("hidden");
    div2.classList.add("hidden");
    div2.classList.remove("block");
    div1.classList.add("hidden");
    div1.classList.remove("block");

    btn3.classList.add(" bg-[#ffffff]")
    btn3.classList.remove(" bg-[#B6C9F0]")
});
