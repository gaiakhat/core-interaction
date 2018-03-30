function pageScroll() {
        window.scrollBy(0,50); // horizontal and vertical scroll increments
        scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
}

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}
//^^^Nothing


scrollmenu2.addEventListener("load", myScript);
