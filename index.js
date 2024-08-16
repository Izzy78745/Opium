



function eruda() {
    (function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.append(script); script.onload = function () { eruda.init(); } })();
}


function openLink() {
    var linkUrl = "https://economics.k12biography.com/shuttle-uv/hvtrs8%2F-wuw%2Cgmoelg.aoo%2Fue%60hr%3Fjl%3Fel%26kcvx%3F2%24sc%3DZ%26tef%3D2ajUIEuiW_R2%3A9%2FCJAzUfLPAKHcqtNfYSPSgH"; // Replace with your file name
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    var iframe = document.createElement("iframe");
    iframe.src = linkUrl;
    overlay.appendChild(iframe);
    document.body.appendChild(overlay);
    overlay.style.display = "block";

    // Create Eruda button and append it to the overlay
    var erudaButton = document.createElement("button");
    erudaButton.textContent = "Eruda";
    erudaButton.onclick = eruda;
    erudaButton.style.position = "absolute";
    erudaButton.style.bottom = "10px";
    erudaButton.style.right = "10px";
    erudaButton.style.zIndex = "1000";
    erudaButton.classList.add("black"); // Add the "black" class
    overlay.appendChild(erudaButton);
}

function abtblank() {
    const url = location.href;
    const width = window.innerWidth;
    const height = window.innerHeight;

    let inFrame;

    try {
    inFrame = window !== top;
    } catch (e) {
    inFrame = true;
    }

    if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = window.open("about:blank", `width=${width},height=${height}`);

    if (!popup || popup.closed) {
        alert("Allow popups and redirects to hide this from showing up in your history.");
    } else {
        const doc = popup.document;
        const iframe = doc.createElement("iframe");
        const style = iframe.style;
        const link = doc.createElement("link");


        iframe.src = url;
        style.position = "fixed";
        style.top = style.bottom = style.left = style.right = 0;
        style.border = style.outline = "none";
        style.width = style.height = "100%";

        doc.head.appendChild(link);
        doc.body.appendChild(iframe);
        window.location.replace("https://classroom.google.com");
    }
    }
}
