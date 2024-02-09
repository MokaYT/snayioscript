const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);
window.onMobile = isMobile();

console.log(`I am on ${isMobile() ? "mobile" : "PC"}`);



function setupUI() {
    var style = document.createElement('style');
    style.type = 'text/css';
    var css = `
        #modmenubtn {
    z-index: 21;
    top: 30vh;
    width: 10vh;
    height: 10vh;
    border-style: none;
    background: url('https://imgur.com/QygCc3e.png');
    background-size: 10vh 10vh;
    background-repeat: no-repeat;
    position: fixed;
    right: 6vh;
    opacity: 1
}

#modmenuclosebtn {
    z-index: 21;
    top: 30.6vh;
    width: 6vmin;
    height: 6vmin;
    border-style: none;
    background: url('https://imgur.com/x9VGklK.png');
    background-size: 6vmin;
    background-repeat: no-repeat;
    position: fixed;
    right: 28.4vh
}

#modmenu {
    z-index: 20;
    top: 30vh;
    width: 30vmin;
    height: 40vmin;
    border-radius: 10px;
    border-style: solid;
    border-color: white;
    background-color: rgba(0,0,0,.6);
    position: absolute;
    right: 5vh
}

#modmenu input {
    width: 85%
}

#modmenutitle {
    font-size: 2.5vmin;
    margin: 0;
    position: relative;
    display: block;
    height: 3vmin;
    text-align: center;
    color: #fff;
    z-index: -1
}

.modmenusubtitle {
    font-size: 2.4vmin;
    position: relative;
    display: block;
    width: 100%;
    height: 2vmin;
    text-align: center;
    color: #fff;
}

#modmenu input {
    position: relative;
    display: block;
    color: green;
    height: 1vmin;
    margin-top: 2vmin;
    margin-bottom: 2vmin;
    border-radius: 1vmin
}

.modmenuvalue {
    position: relative;
    display: block;
    color: #fff;
    width: 9%;
    padding-left: 0.2vmin;
    padding-top: 1.9vmin;
    font-size: 2.3vmin;
    line-height: 1vmin
}

#play-btn {
    background-image: url("https://imgur.com/5CVgh9Z.png")
    background-color: black;
    background-repeat: no-repeat;
    background-size: 90px;
}

#spectate-btn {
    background-image: url("https://imgur.com/9uVyMAA.png")
    background-color: black;
    background-repeat: no-repeat;
    background-size: 90px;
}

#settings-btn {
    background-image: url("https://imgur.com/khD251j.png")
    background-color: black;
    background-repeat: no-repeat;
    background-size: 90px;
}

#login {
    width: 280px
}

#login form span {
    background-color: #313030;
    border-radius: 23px 0 0 23px;
    color: #ffffff;
    display: block;
    float: left;
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 50px
}

#login form input {
    height: 50px
}

#login form input[type=email],input[type=password],input[type=text] {
    background-color: #b5b2b2;
    border-radius: 0 23px 23px 0;
    color: #ffffff;
    margin-bottom: 1em;
    padding: 0 16px;
    width: 230px
}

#login form input[type=submit] {
    background-color: #3d3d3d;
    border-radius: 3px;
    -moz-border-radius: 23px;
    -webkit-border-radius: 23px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
    width: 280px
}

#login form input[type=submit]:hover {
    background-color: #000000
}

#chatBtn {
    opacity: 1;
    background: url('https://imgur.com/Mpw92hq.png');
    width: 3vmax;
    height: 3vmax;
    background-size: 100% 100%;
    border-style: none
}

#emojiBtn {
    opacity: 1;
    color: #fff;
    background: url('https://imgur.com/ElrkASM.png');
    width: 3vmax;
    height: 3vmax;
    background-size: 100% 100%;
    border-style: none
}

#chat_textbox {
    margin: 0;
    padding: 1vmin 3vmax;
    border-radius: 3vmax;
    transition: all .5s ease-in-out;
    background: rgb(145 145 148 / 50%);
    border: 0;
    color: #fff;
    text-indent: 2vmin;
    font-family: ubuntu;
    width: 25vmin
}

#chat_textbox:focus {
    background: rgb(71 70 70 / 50%)
}

#leaveBtn {
    opacity: 1;
    left: 1vmin;
    background: url('https://imgur.com/uPAWVDq.png');
    background-repeat: no-repeat;
}

#leaderboard {
    padding-left: 3vmin;
    padding-right: 3vmin;
    padding-bottom: 3vmin;
    width: 25vmin;
    height: 30vmin;
    margin: 0;
    overflow: hidden;
    font-family: sans-serif;
    font-weight: 700;
    position: absolute;
    top: 1vh;
    right: 5vmin;
    z-index: 1;
    color: #eee;
    background-image: url('https://imgur.com/6X7gjhu.png');
    background-repeat: no-repeat;
    background-size: 100% 100%
}

#lead-btn {
    background: url('https://imgur.com/35RVcRC.png');
    right: 5vmin
}

    `;
document.head.appendChild(style);
	var modmenu = document.getElementById('modmenu');
	var modmenutitle = document.createElement('div');
	modmenutitle.id = 'modmenutitle';
	modmenutitle.textContent = 'Extras😉';
	var buttonsContainer = document.createElement('div');
	buttonsContainer.classList.add('buttons');
	modmenu.appendChild(modmenutitle);
	modmenu.appendChild(document.createElement("br"));
	modmenu.appendChild(document.createElement("br"));
	modmenu.appendChild(document.createElement("br"));
	modmenu.appendChild(buttonsContainer);

    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}

	const menuTitle = document.querySelector("#title");
Object.assign(menuTitle.style, {
  position: "absolute",
  top: "-10%",
  width: "50vh",
  height: "50vh",
  zIndex: "7",
});
menuTitle.src = "https://i.imgur.com/hwTdZHP.png";




["seasons", "store", "gallery"].forEach(section => {
    document.querySelector(`#${section}-body`).style.backgroundColor = "black";
    document.querySelector(`#${section}-header`).style.backgroundColor = "black";
});
document.querySelector("#gallery-content").style.background = "black";


	["gallery", "settings"].forEach(section => {
    document.querySelector(`#${section}-body`).style.backgroundImage = "linear-gradient(to bottom, black, white, black)";
});

["Settings-common", "settings-header", "Settings-quality", "Settings-input", "keys"].forEach(elemID => {
    const elem = document.querySelector(`#${elemID}`);
    elem.style.backgroundColor = "#ffffff";
    elem.style.borderRadius = "25px";
});



function setupModMenu() {
	function createModBtn(id, def, ls, btnName) {
		const newBtn = document.createElement("button");
		newBtn.setAttribute("id", id);
		document.querySelector(".buttons").append(newBtn);
		const newBtnOutput = document.createElement("output");
		newBtnOutput.style.color = "white";
		newBtnOutput.setAttribute("id", id + "OutputValue");
		newBtn.append(newBtnOutput);
		const newBtnValueOn = document.createTextNode(btnName + ": On");
		const newBtnValueOff = document.createTextNode(btnName + ": Off");
		if (def == "off") {
			if (localStorage.getItem(ls)) {
				newBtn.setAttribute("class", "on");
				newBtnOutput.append(newBtnValueOn);
				newBtn.style.filter = "brightness(100%)";
			} else {
				newBtnOutput.append(newBtnValueOff);
				newBtn.style.filter = "brightness(70%)";
			}
		} else {
			if (def == "on") {
				if (localStorage.getItem(ls)) {
					newBtnOutput.append(newBtnValueOff);
					newBtn.style.filter = "brightness(70%)";
				} else {
					newBtn.setAttribute("class", "on");
					newBtnOutput.append(newBtnValueOn);
					newBtn.style.filter = "brightness(100%)";
				}
			}
		}
		newBtn.onclick = () => {
			if (id == "soundEffectsBtn") {
				soundEffects();
			}
			if (def == "off") {
				if (document.querySelector("button#" + id + ".on")) {
					localStorage.removeItem(ls);
					newBtn.style.filter = "";
					newBtn.removeAttribute("class");
					newBtn.style.filter = "brightness(70%)";
					newBtnOutput.firstChild.remove();
					newBtnOutput.append(newBtnValueOff);
				} else {
					if (!document.querySelector("button#" + id + ".on")) {
						localStorage.setItem(ls, "true");
						newBtn.removeAttribute("class");
						newBtn.setAttribute("class", "on");
						newBtnOutput.firstChild.remove();
						newBtn.style.filter = "brightness(100%)";
						newBtnOutput.append(newBtnValueOn);
					}
				}
			} else {
				if (def == "on") {
					if (document.querySelector("button#" + id + ".on")) {
						localStorage.setItem(ls, "true");
						newBtnOutput.firstChild.remove();
						newBtnOutput.append(newBtnValueOff);
						newBtn.style.filter = "";
						newBtn.style.filter = "brightness(70%)";
						newBtn.removeAttribute("class");
					} else {
						if (!document.querySelector("button#" + id + ".on")) {
							localStorage.removeItem(ls);
							newBtnOutput.firstChild.remove();
							newBtnOutput.append(newBtnValueOn);
							newBtn.style.filter = "brightness(100%)";
							newBtn.setAttribute("class", "on");
						}
					}
				}
			}
		}
		newBtn.style.borderRadius = "5px";
		newBtn.style.padding = "10px";
		newBtn.style.transition = "all 1s ease";
		newBtnOutput.style.transition = "all 2s ease";
		return newBtn;
	}
	const spamLastEmoteBtn = createModBtn("spamLastEmoteBtn", "off", "spamLastEmoteOn", "Recent Emoji");
	const spamEmojiBtn = createModBtn("spamEmojiBtn", "off", "spamEmojisOn", "All Emojis");
	const respawnButton = createModBtn("respawnButton", "on", "respawnBtnOff", "AutoRespawn");
	document.querySelector(".buttons").append(document.querySelector("#modmenu").querySelector(".button-81"));
	document.querySelector("#modmenu").querySelector(".button-81").style.padding = "10px";
	document.querySelector("#modmenu").querySelector(".button-81").style.background = "gray";
}

var emojiInterval = setInterval(() => {
	var emoteCards = document.querySelectorAll(".react-horizontal-scrolling-menu--item");
	for (let i = 0; i < emoteCards.length; i++) {
		emoteCards[i].addEventListener("click", (click) => {
			if (click) {
				localStorage.setItem("lastEmote", emoteCards[i].outerHTML.split("\"")[3]);
			}
		})
	}
	if (document.querySelector("button#spamLastEmoteBtn.on")) {
		document.querySelector("div[data-key='" + localStorage.getItem("lastEmote") + "']").firstChild.firstChild.click();
	}
	var emojiIndex;
	var emojis = document.querySelectorAll(".card");
	if (document.querySelector("button#spamEmojiBtn.on")) {
		emojiIndex = randomIntFromInterval(0, emojis.length - 1);
		emojis[emojiIndex].firstChild.click();
	}
}, 800);

setupUI();
