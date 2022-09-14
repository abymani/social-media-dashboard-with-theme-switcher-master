
const toggleSwitch = document.querySelector(".toggle");
const root = document.querySelector(":root");

toggleSwitch.addEventListener('click', (e)=> {
    if(e.currentTarget.checked == true){
        // dark theme
        root.style.setProperty("--clr-background-top", "hsl(232, 19%, 15%)");
        root.style.setProperty("--clr-background", "hsl(230, 17%, 14%)");
        root.style.setProperty("--clr-blue-card-BG","var(--Dark-Desaturated-Blue-Card-BG)");
        root.style.setProperty("--clr-blue-text","var(--Desaturated-Blue-Text)");
        root.style.setProperty("--clr-text","var(--White-Text)");
        root.style.setProperty("--clr-active","hsl(230, 21%, 29%)");
    }
    
    if(e.currentTarget.checked == false){
        // light theme
        root.style.setProperty("--clr-background-top", "var(--Very-Pale-Blue-Top-BG-Pattern)");
        root.style.setProperty("--clr-background", "var(--White-BG)");
        root.style.setProperty("--clr-blue-card-BG","var(--Light-Grayish-Blue-Card-BG)");
        root.style.setProperty("--clr-blue-text","var(--Dark-Grayish-Blue-Text)");
        root.style.setProperty("--clr-text","var(--Very-Dark-Blue-Text)");     
        root.style.setProperty("--clr-active","hsl(227, 22%, 84%)");
    }
});