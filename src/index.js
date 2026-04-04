import './index.css';

const photoSprite = document.querySelector(".responsive-container");
const dataCounter = document.querySelector(".counter");

const shoulderOuter = document.querySelector(".shoulder.outer");
const upperOuterFrontLeg = shoulderOuter.querySelector(".upper-front-leg");
const lowerOuterFrontLeg = shoulderOuter.querySelector(".lower-front-leg");
const outerFrontFoot = shoulderOuter.querySelector(".front-foot");
const outerFrontHoof = shoulderOuter.querySelector(".front-hoof");

const shoulderInner = document.querySelector(".shoulder.inner");
const upperInnerFrontLeg = shoulderInner.querySelector(".upper-front-leg");
const lowerInnerFrontLeg = shoulderInner.querySelector(".lower-front-leg");
const innerFrontFoot = shoulderInner.querySelector(".front-foot");
const innerFrontHoof = shoulderInner.querySelector(".front-hoof");

const hindOuter = document.querySelector(".hind.outer");
const upperOuterRearLeg = hindOuter.querySelector(".upper-rear-leg");
const lowerOuterRearLeg = hindOuter.querySelector(".lower-rear-leg");
const outerRearFoot = hindOuter.querySelector(".rear-foot");
const outerRearHoof = hindOuter.querySelector(".rear-hoof");

const hindInner = document.querySelector(".hind.inner");
const upperInnerRearLeg = hindInner.querySelector(".upper-rear-leg");
const lowerInnerRearLeg = hindInner.querySelector(".lower-rear-leg");
const innerRearFoot = hindInner.querySelector(".rear-foot");
const innerRearHoof = hindInner.querySelector(".rear-hoof");


dataCounter.addEventListener("animationend", () => {
	dataCounter.classList.remove("run");
	photoSprite.classList.remove("run")
	hindOuter.classList.remove("run")
	upperOuterRearLeg.classList.remove("run")
	lowerOuterRearLeg.classList.remove("run")
	outerRearFoot.classList.remove("run")
	outerRearHoof.classList.remove("run")
	shoulderOuter.classList.remove("run")
	upperOuterFrontLeg.classList.remove("run")
	lowerOuterFrontLeg.classList.remove("run")
	outerFrontFoot.classList.remove("run")
	outerFrontHoof.classList.remove("run")
	shoulderInner.classList.remove("run")
	upperInnerFrontLeg.classList.remove("run")
	lowerInnerFrontLeg.classList.remove("run")
	innerFrontFoot.classList.remove("run")
	innerFrontHoof.classList.remove("run")
	hindInner.classList.remove("run")
	upperInnerRearLeg.classList.remove("run")
	lowerInnerRearLeg.classList.remove("run")
	innerRearFoot.classList.remove("run")
	innerRearHoof.classList.remove("run")
	console.log("Animation ended");
	/* trigger a reflow */
	void dataCounter.offsetWidth
	void photoSprite.offsetWidth;
	void hindOuter.offsetWidth;
	void upperOuterRearLeg.offsetWidth;
	void lowerOuterRearLeg.offsetWidth;
	void outerRearFoot.offsetWidth;
	void outerRearHoof.offsetWidth;
	void shoulderOuter.offsetWidth;
	void upperOuterFrontLeg.offsetWidth;
	void lowerOuterFrontLeg.offsetWidth;
	void outerFrontFoot.offsetWidth;
	void outerFrontHoof.offsetWidth;
	void shoulderInner.offsetWidth;
	void upperInnerFrontLeg.offsetWidth;
	void lowerInnerFrontLeg.offsetWidth;
	void innerFrontFoot.offsetWidth;
	void innerFrontHoof.offsetWidth;
	void hindInner.offsetWidth;
	void upperInnerRearLeg.offsetWidth;
	void lowerInnerRearLeg.offsetWidth;
	void innerRearFoot.offsetWidth;
	void innerRearHoof.offsetWidth
	
	requestAnimationFrame(() => {
		console.log("Animation started");
		dataCounter.classList.add("run");
		photoSprite.classList.add("run")
		hindOuter.classList.add("run")
		upperOuterRearLeg.classList.add("run")
		lowerOuterRearLeg.classList.add("run")
		outerRearFoot.classList.add("run")
		outerRearHoof.classList.add("run")
		shoulderOuter.classList.add("run")
		upperOuterFrontLeg.classList.add("run")
		lowerOuterFrontLeg.classList.add("run")
		outerFrontFoot.classList.add("run")
		outerFrontHoof.classList.add("run")
		shoulderInner.classList.add("run")
		upperInnerFrontLeg.classList.add("run")
		lowerInnerFrontLeg.classList.add("run")
		innerFrontFoot.classList.add("run")
		innerFrontHoof.classList.add("run")
		hindInner.classList.add("run")
		upperInnerRearLeg.classList.add("run")
		lowerInnerRearLeg.classList.add("run")
		innerRearFoot.classList.add("run")
		innerRearHoof.classList.add("run")
	});
});

/*
function restartAnimation() {
  counter.classList.remove("run-animation");
  
  // The magic: trigger a reflow
  void counter.offsetWidth; 
  
  counter.classList.add("run-animation");
}
*/
/* Toggle Animations */
const runPauseToggle = document.getElementById("runPauseButton");

runPauseToggle.addEventListener("click", () => {
	if (runPauseToggle.classList.contains("fa-pause")) {
		runPauseToggle.classList.remove("fa-pause");
		runPauseToggle.classList.add("fa-play");
	} else {
		runPauseToggle.classList.remove("fa-play");
		runPauseToggle.classList.add("fa-pause");
	}

	const animations = document.querySelectorAll("[data-animation]");
	animations.forEach((animation) => {
		const running = animation.style.animationPlayState || "running";
		animation.style.animationPlayState =
			running === "running" ? "paused" : "running";
	});
});










/*
const namename = document.querySelector('.tail-pivot.run')
const namename = document.querySelector('.tail.run')
const namename = document.querySelector('.neck-pivot.run')
const namename = document.querySelector('.neck.run')
const namename = document.querySelector('.head.run')

const namename = document.querySelector('.hind.inner.run')
const namename = document.querySelector('.hind.inner.upper-rear-leg.run')
const namename = document.querySelector('.hind.inner.upper-rear-leg.lower-rear-leg.run')
const namename = document.querySelector('.hind.inner.upper-rear-leg.lower-rear-leg.rear-foot.run')
const namename = document.querySelector('.hind.inner.upper-rear-leg.lower-rear-leg.rear-foot.rear-hoof.run')
const namename = document.querySelector('.hind.outer.run')
const namename = document.querySelector('.hind.outer.upper-rear-leg.run')
const namename = document.querySelector('.hind.outer.upper-rear-leg.lower-rear-leg.run')
const namename = document.querySelector('.hind.outer.upper-rear-leg.lower-rear-leg.rear-foot.run')
const namename = document.querySelector('.hind.outer.upper-rear-leg.lower-rear-leg.rear-foot.rear-hoof.run')

const namename = document.querySelector('.shoulder.outer..run')
const namename = document.querySelector('.shoulder.outer.upper-front-leg.run')
const namename = document.querySelector('.shoulder.outer.upper-front-leg.lower-front-leg.run')
const namename = document.querySelector('.shoulder.outer.upper-front-leg.lower-front-leg.front-foot.run')
const namename = document.querySelector('.shoulder.outer.upper-front-leg.lower-front-leg.front-foot.front-hoof.run')

const namename = document.querySelector('.shoulder.inner.run')
const namename = document.querySelector('.shoulder.inner.upper-front-leg.run')
const namename = document.querySelector('.shoulder.inner.upper-front-leg.lower-front-leg.run')
const namename = document.querySelector('.shoulder.inner.upper-front-leg.lower-front-leg.front-foot.run')
const namename = document.querySelector('.shoulder.inner.upper-front-leg.lower-front-leg.front-foot.front-hoof.run')
*/