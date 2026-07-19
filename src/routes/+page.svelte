<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const wrapper = document.querySelector("#hero-wrapper");
          const smokeHoles = document.querySelector("#logo-smoke-holes");
          const layers = {
            starsBack: document.querySelector("[data-parallax='starsBack']"),
            starsMid: document.querySelector("[data-parallax='starsMid']"),
            starsFront: document.querySelector("[data-parallax='starsFront']"),
            planets: document.querySelector("[data-parallax='planets']"),
            widener: document.querySelector("[data-parallax='widener']"),
            about: document.querySelector("[data-parallax='about']"),
            aboutTitle: document.querySelector("[data-parallax='aboutTitle']"),
            aboutApply: document.querySelector(".about-apply"),
            logo: document.querySelector("[data-parallax='logo']"),
            missionMonitor: document.querySelector(".mission-monitor"),
            machineLeft: document.querySelector(".about-machine-left"),
            machineRight: document.querySelector(".about-machine-right"),
            satelliteRig: document.querySelector("[data-parallax='satelliteRig']"),
            trackArms: document.querySelectorAll("[data-track-float]"),
            johnHarvard: document.querySelector("[data-parallax='johnHarvard']"),
            craterLeft: document.querySelector("[data-parallax='craterLeft']"),
            craterRight: document.querySelector("[data-parallax='craterRight']")
          };
    
          const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
          const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
          const STARFIELD = {
            width: 1440,
            height: 900,
            tileRows: 3,
            layers: {
              background: {
                selector: ".stars-back",
                groupName: "stars-background",
                count: 520,
                radiusMin: 0.45,
                radiusMax: 1.05,
                opacityMin: 0.12,
                opacityMax: 0.38,
                colors: ["#FFFFFF", "#DDF7FF", "#BFEAFF", "#A8DFFF"]
              },
              midground: {
                selector: ".stars-mid",
                groupName: "stars-midground",
                count: 320,
                radiusMin: 0.8,
                radiusMax: 1.7,
                opacityMin: 0.22,
                opacityMax: 0.58,
                colors: ["#FFFFFF", "#EAFBFF", "#BFEAFF", "#7AD7FF"]
              },
              foreground: {
                selector: ".stars-front",
                groupName: "stars-foreground",
                count: 200,
                radiusMin: 1.4,
                radiusMax: 3.1,
                opacityMin: 0.45,
                opacityMax: 0.9,
                colors: ["#FFFFFF", "#F6FDFF", "#CFF5FF", "#9BEAFF"]
              }
            }
          };
    
          // Tune these values first when adjusting the scroll zoom/parallax feel.
          const HERO_MOTION = {
            desktop: {
              logoScale: 0.22,
              widenerOpenLiftVh: 0,
              widenerReleaseLiftVh: 118,
              widenerOpenScale: 0.035,
              widenerReleaseScale: 0.02,
              craterOpenPushVw: 20,
              craterReleasePushVw: 62,
              widenerExitStartAtOpeningProgress: 0.27,
              widenerExitTravelVh: 1.04
            },
            mobile: {
              logoScale: 0.5,
              craterOpenPushVw: 58,
              craterReleasePushVw: 86
            },
            stars: {
              backOpenPx: -18,
              backReleasePx: -18,
              backThroughPx: -76,
              midOpenPx: -72,
              midReleasePx: -56,
              midThroughPx: -164,
              frontOpenPx: -138,
              frontReleasePx: -92,
              frontThroughPx: -246
            },
            timing: {
              openingTravelVh: 4.1,
              aboutStartAtOpeningProgress: 0.35,
              aboutTravelVh: 1.4,
              contentScrollStartAtAboutProgress: 0.6,
              aboutOpacityTravelVh: 0.24,
              logoSmokeStartAtOpeningProgress: 0.25,
              logoSmokeTravelVh: 0.48
            }
          };
    
          const LOGO_SMOKE = {
            width: 1728,
            height: 742,
            count: 132,
            minRadius: 54,
            maxRadius: 138,
            ySquashMin: 0.62,
            ySquashMax: 1.18,
            maxDelay: 0.12
          };
    
          const IDLE_FLOAT = {
            logo: { y: 5.5, x: 1.6, seconds: 5.9, phase: 0.4 },
            widener: { y: 3.2, x: 0.8, seconds: 8.4, phase: 1.9 },
            monitor: { y: 22.5, x: 3.6, rotate: 0.66, seconds: 7.2, phase: 3.1 },
            aboutApply: { y: 8, x: 2.2, rotate: 0.42, seconds: 6.6, phase: 5.3 },
            machineLeft: { y: 23, x: 5, rotate: 0.95, seconds: 7.1, phase: 4.4 },
            machineRight: { y: 23, x: 5, rotate: 0.95, seconds: 7.1, phase: 4.4 },
            satelliteRig: { y: 14, x: 4.2, rotate: 0.58, seconds: 7.8, phase: 2.6 },
            johnHarvard: { y: 18, x: 6.5, rotate: 1.15, seconds: 7.9, phase: 1.4 },
            craterLeft: { y: 4.8, x: 1.4, seconds: 8.1, phase: 4.1 },
            craterRight: { y: 4.2, x: 1.2, seconds: 7.4, phase: 0.9 },
            starsBack: { x: 0.7, y: 1.1, seconds: 12.5, phase: 1.1 },
            starsMid: { x: 1.4, y: 2.0, seconds: 10.3, phase: 4.7 },
            starsFront: { x: 2.2, y: 3.0, seconds: 8.7, phase: 2.2 },
            planets: { x: 5.8, y: 8.4, seconds: 11.2, phase: 0.8 }
          };
    
          const TRACK_ARM_FLOAT = {
            sustainability: { y: 6.2, x: 1.6, rotate: 0.78, seconds: 5.9, phase: 0.2 },
            cyber: { y: 5.8, x: 2.1, rotate: 0.68, seconds: 6.8, phase: 2.1 },
            fintech: { y: 5.4, x: 2.0, rotate: 0.7, seconds: 6.4, phase: 4.4 },
            hardware: { y: 6.7, x: 1.8, rotate: 0.74, seconds: 7.2, phase: 3.3 },
            health: { y: 6.0, x: 1.9, rotate: 0.66, seconds: 6.1, phase: 5.1 }
          };
    
          let ticking = false;
          let smokeSpots = [];
          const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    
          function bobble(config, timeSeconds) {
            const cycle = (timeSeconds / config.seconds) * Math.PI * 2 + config.phase;
            return {
              x: Math.sin(cycle * 0.83) * (config.x || 0),
              y: Math.sin(cycle) * (config.y || 0),
              rotate: Math.sin(cycle * 0.71) * (config.rotate || 0)
            };
          }
    
          function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
          }
    
          function springOut(t) {
            const c1 = 1.10158;
            const c3 = c1 + 1;
            return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
          }
    
          function easeInOutBackSoft(t) {
            const c1 = 0.76;
            const c2 = c1 * 1.525;
            return t < 0.5
              ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
              : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
          }
    
          function inverseEase(t) {
            return t < 0.5
              ? Math.cbrt(t / 4)
              : 1 - Math.cbrt((1 - t) / 4);
          }
    
          function random(min, max) {
            return Math.random() * (max - min) + min;
          }
    
          function pick(array) {
            return array[Math.floor(Math.random() * array.length)];
          }
    
          function makeStars(config) {
            const tileHeight = STARFIELD.height * STARFIELD.tileRows;
            let output = `<g id="${config.groupName}">\n`;
    
            for (let i = 0; i < config.count * STARFIELD.tileRows; i++) {
              const x = random(0, STARFIELD.width);
              const y = random(0, tileHeight);
              const rx = random(config.radiusMin, config.radiusMax);
              const ry = rx * random(0.75, 1.25);
              const opacity = random(config.opacityMin, config.opacityMax);
              const fill = pick(config.colors);
    
              output += `  <ellipse cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" rx="${rx.toFixed(2)}" ry="${ry.toFixed(2)}" fill="${fill}" opacity="${opacity.toFixed(2)}" />\n`;
            }
    
            output += "</g>\n";
            return output;
          }
    
          function wrapStarSvg(content) {
            const tileHeight = STARFIELD.height * STARFIELD.tileRows;
            return `<svg xmlns="http://www.w3.org/2000/svg" width="${STARFIELD.width}" height="${tileHeight}" viewBox="0 0 ${STARFIELD.width} ${tileHeight}">\n${content}</svg>`;
          }
    
          function createStarfieldUrl(config) {
            const svg = wrapStarSvg(makeStars(config));
            const encoded = encodeURIComponent(svg)
              .replace(/'/g, "%27")
              .replace(/"/g, "%22");
    
            return `url("data:image/svg+xml,${encoded}")`;
          }
    
          function generateStarfields() {
            Object.values(STARFIELD.layers).forEach((config) => {
              const backgroundImage = createStarfieldUrl(config);
              document.querySelectorAll(config.selector).forEach((element) => {
                element.style.backgroundImage = backgroundImage;
                element.style.backgroundSize = `${STARFIELD.width}px ${STARFIELD.height * STARFIELD.tileRows}px`;
              });
            });
          }
    
          function makeSmokeSpots() {
            smokeSpots = [];
            smokeHoles.innerHTML = "";
    
            for (let i = 0; i < LOGO_SMOKE.count; i++) {
              const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
              const spot = {
                element: ellipse,
                x: random(-80, LOGO_SMOKE.width + 80),
                y: random(-70, LOGO_SMOKE.height + 70),
                maxRx: random(LOGO_SMOKE.minRadius, LOGO_SMOKE.maxRadius),
                ySquash: random(LOGO_SMOKE.ySquashMin, LOGO_SMOKE.ySquashMax),
                delay: random(0, LOGO_SMOKE.maxDelay)
              };
    
              ellipse.setAttribute("cx", spot.x.toFixed(1));
              ellipse.setAttribute("cy", spot.y.toFixed(1));
              ellipse.setAttribute("rx", "0");
              ellipse.setAttribute("ry", "0");
              ellipse.setAttribute("fill", "black");
              smokeHoles.appendChild(ellipse);
              smokeSpots.push(spot);
            }
          }
    
          function updateSmokeMask(progress) {
            smokeSpots.forEach((spot) => {
              const localProgress = clamp((progress - spot.delay) / (1 - spot.delay), 0, 1);
              const eased = ease(localProgress);
              const rx = spot.maxRx * eased;
              const ry = rx * spot.ySquash;
    
              spot.element.setAttribute("rx", rx.toFixed(1));
              spot.element.setAttribute("ry", ry.toFixed(1));
            });
          }
    
          function updateHero() {
            ticking = false;
            const timeSeconds = performance.now() / 1000;
            const rect = wrapper.getBoundingClientRect();
            const scrollInScene = clamp(-rect.top, 0, wrapper.offsetHeight - window.innerHeight);
            const animationTravel = window.innerHeight * HERO_MOTION.timing.openingTravelVh;
            const raw = clamp(scrollInScene / animationTravel, 0, 1);
            const p = ease(raw);
            const isMobile = window.matchMedia("(max-width: 900px)").matches;
    
            if (isMobile) {
              layers.logo.style.transform = "translate(-50%, -50%)";
              layers.logo.style.opacity = "1";
              layers.about.style.transform = "none";
              layers.about.style.opacity = "1";
              layers.widener.style.transform = "translateX(50%)";
              layers.starsBack.style.transform = "none";
              layers.starsMid.style.transform = "none";
              layers.starsFront.style.transform = "none";
              updateSmokeMask(0);
              return;
            }
    
            const motion = isMobile ? { ...HERO_MOTION.desktop, ...HERO_MOTION.mobile } : HERO_MOTION.desktop;
            const smokeProgress = clamp(
              (scrollInScene - animationTravel * HERO_MOTION.timing.logoSmokeStartAtOpeningProgress) /
                (window.innerHeight * HERO_MOTION.timing.logoSmokeTravelVh),
              0,
              1
            );
            const widenerExitRaw = clamp(
              (scrollInScene - animationTravel * motion.widenerExitStartAtOpeningProgress) /
                (window.innerHeight * motion.widenerExitTravelVh),
              0,
              1
            );
            const widenerExit = easeInOutBackSoft(widenerExitRaw);
            const aboutRaw = clamp(
              (scrollInScene - animationTravel * HERO_MOTION.timing.aboutStartAtOpeningProgress) /
                (window.innerHeight * HERO_MOTION.timing.aboutTravelVh),
              0,
              1
            );
            const aboutReveal = springOut(aboutRaw);
            const aboutOpacityRaw = clamp(
              (scrollInScene - animationTravel * HERO_MOTION.timing.aboutStartAtOpeningProgress) /
                (window.innerHeight * HERO_MOTION.timing.aboutOpacityTravelVh),
              0,
              1
            );
            const aboutOpacity = easeOutCubic(aboutOpacityRaw);
            const contentTravelPx = Math.max(0, layers.about.scrollHeight - window.innerHeight);
            const aboutStartScroll = animationTravel * HERO_MOTION.timing.aboutStartAtOpeningProgress;
            const aboutTravelPx = window.innerHeight * HERO_MOTION.timing.aboutTravelVh;
            const contentScrollStart =
              aboutStartScroll + aboutTravelPx * HERO_MOTION.timing.contentScrollStartAtAboutProgress;
            const contentScrollRaw = clamp(
              (scrollInScene - contentScrollStart) /
                Math.max(window.innerHeight, wrapper.offsetHeight - window.innerHeight - contentScrollStart),
              0,
              1
            );
            const contentScroll = ease(contentScrollRaw);
            const contentParallax = contentScrollRaw;
    
            const logoScale = 1 + p * motion.logoScale;
            const finalSmokeFade = ease(clamp((smokeProgress - 0.78) / 0.22, 0, 1));
            const logoFloat = bobble(IDLE_FLOAT.logo, timeSeconds);
            const widenerFloat = bobble(IDLE_FLOAT.widener, timeSeconds);
            const monitorFloat = bobble(IDLE_FLOAT.monitor, timeSeconds);
            const aboutApplyFloat = bobble(IDLE_FLOAT.aboutApply, timeSeconds);
            const machineLeftFloat = bobble(IDLE_FLOAT.machineLeft, timeSeconds);
            const machineRightFloat = bobble(IDLE_FLOAT.machineRight, timeSeconds);
            const satelliteFloat = bobble(IDLE_FLOAT.satelliteRig, timeSeconds);
            const johnFloat = bobble(IDLE_FLOAT.johnHarvard, timeSeconds);
            const craterLeftFloat = bobble(IDLE_FLOAT.craterLeft, timeSeconds);
            const craterRightFloat = bobble(IDLE_FLOAT.craterRight, timeSeconds);
            const starsBackFloat = bobble(IDLE_FLOAT.starsBack, timeSeconds);
            const starsMidFloat = bobble(IDLE_FLOAT.starsMid, timeSeconds);
            const starsFrontFloat = bobble(IDLE_FLOAT.starsFront, timeSeconds);
            const planetsFloat = bobble(IDLE_FLOAT.planets, timeSeconds);
    
            layers.logo.style.transform = `translate(calc(-50% + ${logoFloat.x.toFixed(2)}px), calc(-42% + ${logoFloat.y.toFixed(2)}px)) scale(${logoScale})`;
            layers.logo.style.opacity = (1 - finalSmokeFade).toFixed(3);
            layers.about.style.transform = `translateY(${(-contentScroll * contentTravelPx).toFixed(2)}px)`;
            layers.about.style.opacity = aboutOpacity.toFixed(3);
            updateSmokeMask(smokeProgress);
    
            layers.widener.style.transform = `translateX(calc(50% + ${widenerFloat.x.toFixed(2)}px)) translateY(calc(${p * motion.widenerOpenLiftVh + widenerExit * motion.widenerReleaseLiftVh}vh + ${widenerFloat.y.toFixed(2)}px)) scale(${1 + p * motion.widenerOpenScale + widenerExit * motion.widenerReleaseScale})`;
            layers.starsBack.style.transform = `translate3d(${starsBackFloat.x.toFixed(2)}px, ${contentParallax * HERO_MOTION.stars.backThroughPx + starsBackFloat.y}px, 0)`;
            layers.starsMid.style.transform = `translate3d(${starsMidFloat.x.toFixed(2)}px, ${contentParallax * HERO_MOTION.stars.midThroughPx + starsMidFloat.y}px, 0)`;
            layers.starsFront.style.transform = `translate3d(${starsFrontFloat.x.toFixed(2)}px, ${contentParallax * HERO_MOTION.stars.frontThroughPx + starsFrontFloat.y}px, 0)`;
            layers.planets.style.transform = `translate3d(${planetsFloat.x.toFixed(2)}px, ${(-contentParallax * 820 + planetsFloat.y).toFixed(2)}px, 0)`;
    
            layers.missionMonitor.style.transform = `translate(calc(-50% + ${monitorFloat.x.toFixed(2)}px), calc(-50% + ${((1 - aboutReveal) * 42).toFixed(2)}vh + ${monitorFloat.y.toFixed(2)}px)) rotate(${monitorFloat.rotate.toFixed(3)}deg)`;
            layers.aboutTitle.style.transform = `translate(-50%, calc(${((1 - aboutReveal) * 32).toFixed(2)}vh))`;
            layers.aboutApply.style.transform = `translate(calc(-50% + ${aboutApplyFloat.x.toFixed(2)}px), calc(${((1 - aboutReveal) * 34).toFixed(2)}vh + ${aboutApplyFloat.y.toFixed(2)}px)) rotate(var(--apply-hover-rotate)) scale(var(--apply-hover-scale))`;
            layers.machineLeft.style.transform = `translate(calc(${((1 - aboutReveal) * -74).toFixed(2)}vw + ${machineLeftFloat.x.toFixed(2)}px), calc(-38% + ${machineLeftFloat.y.toFixed(2)}px)) rotate(${machineLeftFloat.rotate.toFixed(3)}deg)`;
            layers.machineRight.style.transform = `translate(calc(${((1 - aboutReveal) * 74).toFixed(2)}vw + ${-machineRightFloat.x.toFixed(2)}px), calc(-38% + ${machineRightFloat.y.toFixed(2)}px)) rotate(${(-machineRightFloat.rotate).toFixed(3)}deg)`;
            layers.satelliteRig.style.transform = `translate3d(${satelliteFloat.x.toFixed(2)}px, ${satelliteFloat.y.toFixed(2)}px, 0) rotate(${satelliteFloat.rotate.toFixed(3)}deg)`;
            layers.johnHarvard.style.transform = `translate3d(${johnFloat.x.toFixed(2)}px, ${johnFloat.y.toFixed(2)}px, 0) rotate(${johnFloat.rotate.toFixed(3)}deg)`;
            if (!prefersReducedMotion.matches) {
              layers.trackArms.forEach((arm) => {
                const config = TRACK_ARM_FLOAT[arm.dataset.trackFloat];
                const armFloat = bobble(config, timeSeconds);
                arm.style.transform = `translate3d(${armFloat.x.toFixed(2)}px, ${armFloat.y.toFixed(2)}px, 0) rotate(${armFloat.rotate.toFixed(3)}deg)`;
              });
            }
    
            layers.craterLeft.style.transform = `translate3d(calc(${-p * motion.craterOpenPushVw - widenerExit * motion.craterReleasePushVw}vw + ${craterLeftFloat.x.toFixed(2)}px), ${(-widenerFloat.y + craterLeftFloat.y).toFixed(2)}px, 0) scaleX(-1)`;
            layers.craterRight.style.transform = `translate3d(calc(${p * motion.craterOpenPushVw + widenerExit * motion.craterReleasePushVw}vw + ${craterRightFloat.x.toFixed(2)}px), ${(-widenerFloat.y + craterRightFloat.y).toFixed(2)}px, 0)`;
    
            if (!prefersReducedMotion.matches) {
              requestTick();
            }
          }
    
          function requestTick() {
            if (!ticking) {
              ticking = true;
              requestAnimationFrame(updateHero);
            }
          }

          function refreshAfterContentToggle() {
            requestTick();
            requestAnimationFrame(() => {
              requestTick();
              requestAnimationFrame(requestTick);
            });
          }
    
          function scrollToSceneSection(section) {
            if (window.matchMedia("(max-width: 900px)").matches) {
              section.scrollIntoView({ behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
              return;
            }
    
            const animationTravel = window.innerHeight * HERO_MOTION.timing.openingTravelVh;
            const aboutStartScroll = animationTravel * HERO_MOTION.timing.aboutStartAtOpeningProgress;
            const aboutTravelPx = window.innerHeight * HERO_MOTION.timing.aboutTravelVh;
            const contentScrollStart =
              aboutStartScroll + aboutTravelPx * HERO_MOTION.timing.contentScrollStartAtAboutProgress;
            const contentTravelPx = Math.max(0, layers.about.scrollHeight - window.innerHeight);
            const sceneTravelPx = Math.max(
              window.innerHeight,
              wrapper.offsetHeight - window.innerHeight - contentScrollStart
            );
            const sectionProgress = contentTravelPx > 0 ? clamp(section.offsetTop / contentTravelPx, 0, 1) : 0;
            const wrapperTop = window.scrollY + wrapper.getBoundingClientRect().top;
            const targetY = wrapperTop + contentScrollStart + inverseEase(sectionProgress) * sceneTravelPx;
    
            window.scrollTo({
              top: targetY,
              behavior: prefersReducedMotion.matches ? "auto" : "smooth"
            });
          }
    
          document.querySelectorAll(".site-nav a[href^='#']").forEach((link) => {
            link.addEventListener("click", (event) => {
              const href = link.getAttribute("href");
    
              if (!href || href === "#") {
                event.preventDefault();
                return;
              }
    
              const target = document.querySelector(href);
    
              if (!target || !layers.about.contains(target)) {
                return;
              }
    
              event.preventDefault();
              scrollToSceneSection(target);
              history.replaceState(null, "", href);
            });
          });

          const faqDetails = document.querySelectorAll(".faq-item");
          faqDetails.forEach((details) => {
            details.addEventListener("toggle", refreshAfterContentToggle);
          });
    
          window.addEventListener("scroll", requestTick, { passive: true });
          window.addEventListener("resize", requestTick);
          generateStarfields();
          makeSmokeSpots();
          updateHero();
    
          return () => {
            faqDetails.forEach((details) => {
              details.removeEventListener("toggle", refreshAfterContentToggle);
            });
            window.removeEventListener("scroll", requestTick);
            window.removeEventListener("resize", requestTick);
          };
  });
</script>

<svelte:head>
  <title>HackHarvard 2026</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400;900&display=swap" rel="stylesheet" />
</svelte:head>

<main>
      <section id="hero-wrapper" aria-label="HackHarvard moon landing hero">
        <div id="hero-sticky">
          <div class="hero-layer star-field stars-back" data-parallax="starsBack"></div>
          <div class="hero-layer star-field stars-mid" data-parallax="starsMid"></div>
          <div class="hero-layer star-field stars-front" data-parallax="starsFront"></div>
          <div class="hero-layer planet-midground" data-parallax="planets" aria-hidden="true">
            <img class="planet-edge planet-earth" src="/newsite/assets/planetbackgrounds/earth.png" alt="" draggable="false" />
            <img class="planet-edge planet-jupiter" src="/newsite/assets/planetbackgrounds/jupiter.png" alt="" draggable="false" />
            <img class="planet-edge planet-neptune" src="/newsite/assets/planetbackgrounds/neptune.png" alt="" draggable="false" />
            <img class="planet-edge planet-venus" src="/newsite/assets/planetbackgrounds/venus.png" alt="" draggable="false" />
          </div>

          <section class="scroll-content" id="about" data-parallax="about">
            <div class="content-inner">
              <section class="about-section" aria-labelledby="about-title">
                <div class="about-scene">
                  <h2 class="section-title about-title" id="about-title" data-parallax="aboutTitle">About</h2>

                  <div class="about-machine about-machine-left">
                    <img src="/newsite/assets/about-left-buttons.png" alt="" draggable="false" />
                    <!-- <div class="machine-stat machine-stat-top">
                      <strong>30</strong>
                      <span>Universities</span>
                    </div>
                    <div class="machine-stat machine-stat-bottom">
                      <strong>12</strong>
                      <span>Countries</span>
                    </div> -->
                  </div>

                  <article class="mission-monitor">
                    <img class="mission-frame" src="/newsite/assets/about-panel.png" alt="" draggable="false" />
                    <img class="mission-astronaut-top" src="/newsite/assets/about-astronaut-top.png" alt="" draggable="false" />
                    <img class="mission-astronaut-photo" src="/newsite/assets/about-astronaut-photo.png" alt="" draggable="false" />
                    <div class="mission-text">
                      <p>
                        HackHarvard is a 36-hour undergraduate hackathon hosted at Harvard University.
                        Every year, over 500 students from around the world come to our campus to build,
                        learn, and create.
                      </p>

                      <p class="mission-note">
                        Note HackHarvard cannot provide overnight accommodations this year.
                      </p>
                    </div>
                  </article>

                  <a class="about-apply" href="https://portal.hackharvard.io" aria-label="Apply now">
                    <img class="about-apply-default" src="/newsite/assets/applynowfinal/applynow.png" alt="" draggable="false" />
                    <img class="about-apply-hover" src="/newsite/assets/applynowfinal/applynow_hover 1.png" alt="" draggable="false" />
                  </a>

                  <div class="about-machine about-machine-right">
                    <img src="/newsite/assets/about-right-buttons.png" alt="" draggable="false" />
                    <!-- <div class="machine-stat machine-stat-top">
                      <strong>500</strong>
                      <span>Students</span>
                    </div>
                    <div class="machine-stat machine-stat-bottom">
                      <strong>36</strong>
                      <span>Hours</span>
                    </div> -->
                  </div>
                </div>
              </section>

              <section class="tracks-section" id="tracks" aria-labelledby="tracks-title">
                <div class="tracks-scene">
                  <h2 class="section-title" id="tracks-title">Tracks</h2>

                  <div class="satellite-rig" data-parallax="satelliteRig" aria-label="HackHarvard tracks">
                    <div class="track-asset track-sustainability" data-track-float="sustainability">
                      <img src="/newsite/assets/satelitetracks/sustainability.png" alt="Save The Earth, Sustainability" draggable="false" />
                    </div>
                    <div class="track-asset track-cyber" data-track-float="cyber">
                      <img src="/newsite/assets/satelitetracks/cyber.png" alt="(De)-Cipher, Cybersecurity" draggable="false" />
                    </div>
                    <div class="track-asset track-fintech" data-track-float="fintech">
                      <img src="/newsite/assets/satelitetracks/Fintech.png" alt="Mooney Moves, Fintech" draggable="false" />
                    </div>
                    <div class="track-asset track-hardware" data-track-float="hardware">
                      <img src="/newsite/assets/satelitetracks/Hardware.png" alt="Hardware for Good, Hardware" draggable="false" />
                    </div>
                    <div class="track-asset track-health" data-track-float="health">
                      <img src="/newsite/assets/satelitetracks/Health.png" alt="Code for Care, healthcare" draggable="false" />
                    </div>
                    <div class="track-asset track-satellite">
                      <img src="/newsite/assets/satelitetracks/satellite.png" alt="" draggable="false" />
                    </div>
                  </div>
                </div>
              </section>

              <section class="sponsors-section" id="sponsors" aria-labelledby="sponsors-title">
                <div class="sponsors-scene">
                  <h2 class="section-title sponsors-title" id="sponsors-title">Sponsors</h2>
                  <p class="sponsors-coming-soon">Coming Soon!</p>
                </div>
              </section>

              <section class="faq-section" id="faq" aria-labelledby="faq-title">
                <div class="faq-scene">
                  <div class="faq-copy">
                    <h2 class="section-title faq-title" id="faq-title">FAQ</h2>
                    <div class="faq-list">
                      <details class="faq-item">
                        <summary><span class="faq-star"></span><span>What is a hackathon?</span><span class="faq-chevron"></span></summary>
                        <p class="faq-answer">A weekend-long building sprint where students team up to make software, hardware, art, tools, and experiments from scratch.</p>
                      </details>
                      <details class="faq-item">
                        <summary><span class="faq-star"></span><span>Who can come?</span><span class="faq-chevron"></span></summary>
                        <p class="faq-answer">HackHarvard is open to undergraduate students. Teams can include students from different schools and experience levels.</p>
                      </details>
                      <details class="faq-item">
                        <summary><span class="faq-star"></span><span>What does it cost?</span><span class="faq-chevron"></span></summary>
                        <p class="faq-answer">The event is free for accepted hackers, including meals, workshops, mentorship, and event programming.</p>
                      </details>
                      <details class="faq-item">
                        <summary><span class="faq-star"></span><span>Where can I stay?</span><span class="faq-chevron"></span></summary>
                        <p class="faq-answer">Participants are responsible for arranging their own accommodations for the duration of HackHarvard. While we are not able to offer housing this year, we encourage attendees to explore nearby hotels, hostels, or short-term rentals.</p>
                      </details>
                      <details class="faq-item">
                        <summary><span class="faq-star"></span><span>Is financial aid available?</span><span class="faq-chevron"></span></summary>
                        <p class="faq-answer">Information about financial aid at a later date. We will send out information to eligible participants with details about availability, requirements, and how to apply.</p>
                      </details>
                      <details class="faq-item">
                        <summary><span class="faq-star"></span><span>What if I do not have a team?</span><span class="faq-chevron"></span></summary>
                        <p class="faq-answer">You can form a team at the event. There will be time and space to meet other hackers before building begins.</p>
                      </details>
                    </div>
                  </div>

                  <div class="john-harvard" data-parallax="johnHarvard">
                    <img src="/newsite/assets/satelitetracks/johnharvardastronaut.png" alt="" draggable="false" />
                  </div>
                </div>
              </section>

              <footer class="moon-footer" aria-label="HackHarvard footer">
                <img src="/newsite/assets/footernice.png" alt="" draggable="false" />
              </footer>
            </div>
          </section>

          <div class="hero-layer widener-layer" data-parallax="widener">
            <img src="/newsite/assets/widener-moon.png" alt="" draggable="false" />
          </div>

          <nav class="site-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#tracks">Tracks</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#faq">FAQ</a>
            <div class="nav-international" id="global">
              <a class="nav-international-toggle" href="#global" aria-haspopup="true">Global</a>
              <div class="nav-international-menu" aria-label="Global links">
                <a href="/china">China</a>
                <a href="/india">India</a>
                <a href="/vietnam">Vietnam</a>
              </div>
            </div>
            <a class="nav-apply-button" href="https://portal.hackharvard.io">Apply</a>
          </nav>

          <div class="logo-lockup" data-parallax="logo">
            <svg class="logo-art" viewBox="0 0 1728 742" role="img" aria-label="HackHarvard">
              <defs>
                <filter id="logo-smoke-blur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" />
                </filter>
                <mask id="logo-smoke-mask" maskUnits="userSpaceOnUse">
                  <rect width="1728" height="742" fill="white" />
                  <g id="logo-smoke-holes" filter="url(#logo-smoke-blur)"></g>
                </mask>
              </defs>
              <image href="/newsite/assets/logo-stuff-with-date.png" width="1728" height="742" preserveAspectRatio="xMidYMid meet" mask="url(#logo-smoke-mask)" />
            </svg>
          </div>

          <div class="hero-layer craters" aria-hidden="true">
            <div class="crater crater-left" data-parallax="craterLeft">
              <img src="/newsite/assets/moon-crater.png" alt="" draggable="false" />
            </div>
            <div class="crater crater-right" data-parallax="craterRight">
              <img src="/newsite/assets/moon-crater.png" alt="" draggable="false" />
            </div>
          </div>
        </div>
      </section>
    </main>

<style>

      :global(:root) {
        --crimson: #e20029;
        --night: #05021b;
        --midnight: #09072f;
        --ice: #edf7ff;
        --muted: #aeb9c7;
      }

      * {
        box-sizing: border-box;
      }

      :global(html) {
        scroll-behavior: smooth;
        background: var(--night);
      }

      :global(body) {
        margin: 0;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        color: white;
        background: var(--night);
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      #hero-wrapper {
        position: relative;
        min-height: 650vh;
      }

      #hero-sticky {
        position: sticky;
        top: 0;
        height: 100vh;
        min-height: 640px;
        overflow: hidden;
        background:
          radial-gradient(circle at 52% 42%, rgba(28, 30, 88, 0.5), transparent 42%),
          linear-gradient(180deg, #06031c 0%, #0b0938 53%, #182848 100%);
        isolation: isolate;
      }

      .hero-layer {
        position: absolute;
        inset: 0;
        pointer-events: none;
        will-change: transform, opacity;
      }

      .star-field {
        inset: -120vh -6vw;
        z-index: 0;
        opacity: 0.95;
        background-position: center top;
        background-repeat: repeat;
        background-size: 1440px 2700px;
      }

      .planet-midground {
        inset: -45vh -14vw -270vh;
        z-index: 1;
        overflow: visible;
        opacity: 0.8;
        will-change: transform;
      }

      .planet-edge {
        position: absolute;
        display: block;
        height: auto;
        user-select: none;
        mix-blend-mode: screen;
        filter: drop-shadow(0 18px 26px rgba(0, 0, 0, 0.38));
      }

      .planet-earth {
        left: -4vw;
        top: 12vh;
        width: clamp(420px, 48vw, 900px);
      }

      .planet-jupiter {
        right: -3vw;
        top: 66vh;
        width: clamp(390px, 44vw, 820px);
      }

      .planet-neptune {
        left: -5vw;
        top: 138vh;
        width: clamp(440px, 50vw, 940px);
      }

      .planet-venus {
        right: -4vw;
        top: 170vh;
        width: clamp(410px, 46vw, 860px);
      }

      .stars-back {
        opacity: 0.38;
      }

      .stars-mid {
        opacity: 0.68;
      }

      .stars-front {
        opacity: 0.82;
      }

      .widener-layer {
        inset: auto 50% -3vh auto;
        width: 106vw;
        aspect-ratio: 2752 / 1536;
        transform: translateX(50%);
        transform-origin: 50% 80%;
        z-index: 3;
      }

      .widener-layer img,
      .crater img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        user-select: none;
      }

      .logo-lockup {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 6;
        width: min(45vw, 864px);
        min-width: 520px;
        transform: translate(-50%, -42%);
        transform-origin: 50% 54%;
        will-change: transform, opacity;
        text-align: center;
        pointer-events: none;
      }

      .logo-art {
        display: block;
        width: 100%;
        height: auto;
        overflow: visible;
        filter: drop-shadow(9px 9px 7px rgba(0, 0, 0, 0.52));
      }

      .craters {
        inset: auto 0 -16vh;
        height: clamp(210px, 36vh, 390px);
        z-index: 8;
        overflow: visible;
      }

      .crater {
        position: absolute;
        bottom: -2vw;
        width: min(60vw, 920px);
        aspect-ratio: 1376 / 768;
        will-change: transform;
      }

      .crater-left {
        left: -22vw;
        transform: scaleX(-1);
      }

      .crater-right {
        right: -22vw;
      }

      .site-nav {
        position: absolute;
        inset: 0 0 auto;
        z-index: 12;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: clamp(1.25rem, 2.6vw, 3.125rem);
        padding: 2rem clamp(1.5rem, 3.1vw, 3rem);
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
      }

      .site-nav a {
        opacity: 0.96;
        transition: color 160ms ease, opacity 160ms ease;
      }

      .site-nav a:hover {
        color: #aee9ff;
      }

      .nav-international {
        position: relative;
        z-index: 30;
      }

      .nav-international-toggle {
        --global-pill-x: 1.25rem;
        --global-pill-y: 0.8rem;
        display: inline-flex;
        position: relative;
        z-index: 0;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #fff;
        opacity: 0.96;
        transition: color 160ms ease, opacity 160ms ease;
      }

      .nav-international-toggle::before {
        content: "";
        position: absolute;
        inset: calc(-1 * var(--global-pill-y)) calc(-1 * var(--global-pill-x));
        z-index: -1;
        border-radius: 999px;
        background: #c8102e;
        opacity: 0;
        transition: opacity 160ms ease;
      }

      .nav-international:hover .nav-international-toggle,
      .nav-international:focus-within .nav-international-toggle {
        color: #fff;
      }

      .nav-international:hover .nav-international-toggle::before,
      .nav-international:focus-within .nav-international-toggle::before {
        opacity: 1;
      }

      .nav-international-menu {
        position: absolute;
        top: calc(100% + 0.45rem);
        left: 0;
        z-index: 40;
        display: grid;
        min-width: 210px;
        padding: 0.65rem;
        border-radius: 22px;
        background: #c8102e;
        box-shadow: 0 16px 20px rgba(0, 0, 0, 0.22);
        opacity: 0;
        pointer-events: none;
        transform: translateY(-6px);
        transition: opacity 160ms ease, transform 160ms ease;
      }

      .nav-international:hover .nav-international-menu,
      .nav-international:focus-within .nav-international-menu {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }

      .nav-international-menu a {
        display: block;
        padding: 0.75rem 0.9rem;
        border-radius: 14px;
        color: #fff;
        white-space: nowrap;
        text-shadow: none;
      }

      .nav-international-menu a:hover,
      .nav-international-menu a:focus-visible {
        background: rgba(255, 255, 255, 0.16);
        color: #fff;
      }

      .nav-apply-button {
        display: inline-flex;
        position: relative;
        z-index: 1;
        align-items: center;
        justify-content: center;
        min-width: 112px;
        min-height: 49px;
        padding: 0 1.15rem;
        border-radius: 999px;
        background: #c8102e;
        box-shadow: 0 10px 8px rgba(0, 0, 0, 0.1), 0 4px 3px rgba(0, 0, 0, 0.1);
      }

      .scroll-content {
        position: absolute;
        inset: 0;
        z-index: 2;
        padding: 0;
        pointer-events: none;
        transform: translateY(100vh);
        will-change: transform, opacity;
      }

      .content-inner {
        width: 100%;
        margin: 0 auto;
        pointer-events: auto;
      }

      h2,
      p {
        margin: 0;
        letter-spacing: 0;
      }

      .about-section {
        position: relative;
        min-height: 100vh;
        display: grid;
        place-items: center;
        overflow: hidden;
      }

      .about-scene {
        position: relative;
        width: min(80%, 1920px);
        min-height: 100vh;
        aspect-ratio: 16 / 9;
      }

      .about-machine {
        position: absolute;
        top: 54.5%;
        width: clamp(104px, 13vw, 250px);
        transform: translateY(-38%);
        filter: drop-shadow(-14px 18px 5px rgba(0, 0, 0, 0.45));
        z-index: 2;
        transform-style: preserve-3d;
      }

      .about-machine img,
      .mission-frame {
        display: block;
        width: 100%;
        height: auto;
        user-select: none;
      }

      .about-machine-left {
        left: clamp(1rem, 4vw, 230px);
      }

      .about-machine-right {
        right: clamp(1rem, 4vw, 230px);
      }

      .mission-monitor {
        position: absolute;
        left: 50%;
        top: 51%;
        width: min(42vw, 680px);
        min-width: 520px;
        transform: translate(-50%, -50%);
        filter: drop-shadow(-20px 20px 5px rgba(0, 0, 0, 0.8));
        z-index: 3;
      }

      .about-apply {
        --apply-hover-rotate: -1.25deg;
        --apply-hover-scale: 1;
        position: absolute;
        left: 50%;
        top: 82%;
        z-index: 5;
        display: block;
        width: clamp(240px, 21.1vw, 405px);
        aspect-ratio: 1712 / 956;
        transform: translateX(-50%) rotate(var(--apply-hover-rotate)) scale(var(--apply-hover-scale));
        transform-origin: 50% 55%;
        filter: drop-shadow(-10px 14px 5px rgba(0, 0, 0, 0.45));
        pointer-events: auto;
        transition: filter 160ms ease;
        will-change: transform;
      }

      .about-apply img {
        position: absolute;
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        user-select: none;
        transition: opacity 160ms ease;
      }

      .about-apply-hover {
        opacity: 0;
      }

      .about-apply:hover,
      .about-apply:focus-visible {
        --apply-hover-rotate: 2deg;
        --apply-hover-scale: 1.055;
      }

      .about-apply:hover .about-apply-hover,
      .about-apply:focus-visible .about-apply-hover {
        opacity: 1;
      }

      .about-apply:hover .about-apply-default,
      .about-apply:focus-visible .about-apply-default {
        opacity: 0;
      }

      .mission-astronaut-top {
        position: absolute;
        left: 14.2%;
        top: -10%;
        width: 12.75%;
        height: auto;
        z-index: 4;
      }

      .mission-astronaut-photo {
        position: absolute;
        right: 5.2%;
        bottom: 8.7%;
        width: 12.35%;
        height: auto;
        transform: scaleX(-1);
        z-index: 4;
      }

      .mission-text {
        position: absolute;
        left: 16.4%;
        top: 26.8%;
        width: 61.5%;
        color: #050505;
        z-index: 5;
        font-family: "Londrina Solid", Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        font-weight: 300;
      }

      .mission-text p {
        font-size: clamp(1.55rem, 1.85vw, 2.2rem);
        font-weight: 300;
        line-height: 1.1;
      }

      .mission-text .mission-note {
        margin-top: 1.15rem;
        font-size: clamp(1rem, 1.08vw, 1.3rem);
        font-style: italic;
        line-height: 1.15;
        opacity: 0.82;
      }

      .section-title {
        position: absolute;
        left: 50%;
        top: 8.4%;
        z-index: 4;
        transform: translateX(-50%);
        font-family: "Londrina Solid", Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        font-size: clamp(4.6rem, 7.1vw, 8.875rem);
        line-height: 1;
        font-weight: 900;
        letter-spacing: 0;
        color: #f4f4f4;
        text-shadow:
          0 4px 0 rgba(0, 0, 0, 0.3),
          0 12px 18px rgba(0, 0, 0, 0.34);
      }

      .about-title {
        will-change: transform;
      }

      .moon-footer {
        position: relative;
        line-height: 0;
        margin-top: -6vh;
        overflow: visible;
        background: transparent;
        z-index: 6;
      }

      .moon-footer img {
        display: block;
        width: 100%;
        height: auto;
        object-fit: contain;
        object-position: bottom center;
        filter: drop-shadow(0 -18px 18px rgba(0, 0, 0, 0.42));
        user-select: none;
      }

      .tracks-section {
        position: relative;
        min-height: 82vh;
        margin-top: clamp(8rem, 24vh, 20rem);
        display: grid;
        place-items: center;
        overflow: hidden;
      }

      .tracks-scene {
        position: relative;
        width: min(80%, 1920px);
        aspect-ratio: 16 / 9;
        min-height: 82vh;
      }

      .satellite-rig {
        position: absolute;
        inset: 0;
        z-index: 3;
        transform-origin: 49% 63%;
        will-change: transform;
        pointer-events: none;
      }

      .track-asset {
        position: absolute;
        display: block;
        height: auto;
        user-select: none;
        will-change: transform;
      }

      .track-sustainability,
      .track-hardware,
      .track-health {
        transform-origin: 50% 100%;
      }

      .track-cyber {
        transform-origin: 100% 64%;
      }

      .track-fintech {
        transform-origin: 0 64%;
      }

      .track-asset img {
        display: block;
        width: 100%;
        height: auto;
        user-select: none;
      }

      .track-sustainability {
        left: 39.95%;
        top: 28.96%;
        width: 17.09%;
      }

      .track-cyber {
        left: 23.44%;
        top: 43.33%;
        width: 23.59%;
      }

      .track-fintech {
        left: 51.67%;
        top: 44.63%;
        width: 23.12%;
      }

      .track-hardware {
        left: 27.66%;
        top: 66.35%;
        width: 20.49%;
      }

      .track-health {
        left: 48.31%;
        top: 66.36%;
        width: 21.7%;
      }

      .track-satellite {
        left: 40.72%;
        top: 48.72%;
        width: 15.8%;
        z-index: 2;
        filter: drop-shadow(-10px 14px 5px rgba(0, 0, 0, 0.42));
      }

      .sponsors-section {
        position: relative;
        min-height: 82vh;
        margin-top: clamp(8rem, 24vh, 20rem);
        display: grid;
        place-items: center;
        overflow: hidden;
      }

      .sponsors-scene {
        position: relative;
        display: grid;
        place-items: center;
        width: min(82vw, 1600px);
        min-height: 82vh;
        padding: clamp(3rem, 6vh, 4.75rem) 0 clamp(1.5rem, 3vh, 2.5rem);
      }

      .sponsors-title {
        position: relative;
        left: auto;
        top: auto;
        margin-bottom: clamp(1.75rem, 4vh, 3rem);
        transform: none;
        text-align: center;
      }

      .sponsors-coming-soon {
        display: grid;
        place-items: center;
        width: min(86%, 1120px);
        min-height: clamp(260px, 20vw, 420px);
        color: #f4f4f4;
        font-family: "Londrina Solid", Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        font-size: clamp(3.7rem, 5.68vw, 7.1rem);
        font-style: italic;
        font-weight: 900;
        line-height: 1;
        text-align: center;
        text-shadow:
          0 4px 0 rgba(0, 0, 0, 0.3),
          0 12px 18px rgba(0, 0, 0, 0.34);
      }

      .faq-section {
        position: relative;
        min-height: 82vh;
        margin-top: clamp(8rem, 24vh, 20rem);
        display: grid;
        place-items: center;
        overflow: hidden;
      }

      .faq-scene {
        position: relative;
        display: grid;
        grid-template-columns: minmax(0, 0.88fr) minmax(280px, 0.56fr);
        align-items: center;
        gap: clamp(2rem, 5vw, 6rem);
        width: min(70vw, 1320px);
        min-height: 82vh;
        padding: clamp(3rem, 6vh, 4.75rem) clamp(3rem, 6vh, 4.75rem) clamp(1.5rem, 3vh, 2.5rem);
      }

      .faq-copy {
        align-self: center;
      }

      .faq-title {
        position: relative;
        left: auto;
        top: auto;
        margin-bottom: clamp(1.35rem, 3vh, 2.25rem);
        transform: none;
        text-align: left;
      }

      .faq-list {
        display: grid;
        gap: 0;
        width: min(90%, 540px);
        padding: 1.1rem 1.35rem;
        border: 2px solid rgba(52, 35, 23, 0.26);
        border-radius: 34px;
        background: #F3F2DF;
        box-shadow: 10px 12px 0 rgba(14, 10, 6, 0.22);
      }

      .faq-item {
        border-bottom: 2px solid rgba(58, 38, 24, 0.26);
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        overflow: hidden;
      }

      .faq-item:last-child {
        border-bottom: 0;
      }

      .faq-item summary {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 0.85rem;
        min-height: 68px;
        padding: 0.95rem 0.75rem;
        cursor: pointer;
        list-style: none;
        color: #20130c;
        font-family: "Londrina Solid", Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        font-size: clamp(1.75rem, 2.3vw, 2.35rem);
        font-weight: 300;
        line-height: 1.06;
        letter-spacing: 0;
      }

      .faq-item summary::-webkit-details-marker {
        display: none;
      }

      .faq-star {
        width: 1.5rem;
        height: 1.5rem;
        color: #2b1a10;
        font-size: 1.5rem;
        line-height: 1;
      }

      .faq-star::before {
        content: "*";
      }

      .faq-chevron {
        width: 1rem;
        height: 1rem;
        border-right: 3px solid currentColor;
        border-bottom: 3px solid currentColor;
        transform: rotate(45deg) translateY(-2px);
        transition: transform 180ms ease;
      }

      .faq-item[open] .faq-chevron {
        transform: rotate(225deg) translateY(-2px);
      }

      .faq-answer {
        padding: 0 1rem 1.35rem 3.1rem;
        color: #2b1a10;
        font-family: "Londrina Solid", Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        font-size: clamp(1.3rem, 1.58vw, 1.75rem);
        font-weight: 300;
        line-height: 1.45;
      }

      .john-harvard {
        justify-self: center;
        width: min(31vw, 470px);
        min-width: 260px;
        filter: drop-shadow(-18px 20px 8px rgba(0, 0, 0, 0.52));
        will-change: transform;
      }

      .john-harvard img {
        display: block;
        width: 75%;
        height: auto;
        border-radius: 8px;
        user-select: none;
      }

      @media (max-width: 900px) {
        #hero-wrapper {
          min-height: auto;
        }

        #hero-sticky {
          position: relative;
          height: auto;
          min-height: auto;
          overflow: visible;
          padding: 0;
        }

        .site-nav {
          display: none;
        }

        .planet-midground {
          display: block;
          inset: 0 0 auto;
          height: 100vh;
          opacity: 0.85;
        }

        .planet-earth {
          display: none;
        }

        .planet-jupiter,
        .planet-neptune,
        .planet-venus {
          display: none;
        }

        .widener-layer {
          position: fixed;
          inset: auto 50% -2vh auto;
          display: block;
          width: 142vw;
          min-width: 0;
          transform: translateX(50%) !important;
          opacity: 0.78;
          z-index: 1;
        }

        .logo-lockup {
          position: absolute;
          left: 50%;
          top: 50vh;
          width: min(68vw, 300px);
          min-width: 0;
          margin: 0;
          transform: translate(-50%, -50%) !important;
          opacity: 1 !important;
        }

        .star-field {
          position: fixed;
          inset: -10vh -8vw;
        }

        .craters,
        .crater,
        .about-machine,
        .mission-astronaut-top,
        .mission-astronaut-photo,
        .john-harvard {
          display: none;
        }

        .scroll-content {
          position: relative;
          inset: auto;
          z-index: 2;
          padding-top: clamp(30rem, 100vh, 60rem);
          transform: none !important;
          opacity: 1 !important;
          pointer-events: auto;
        }

        .content-inner {
          display: grid;
          gap: clamp(1.35rem, 5vh, 2.5rem);
        }

        .about-section {
          min-height: auto;
          padding: 0 1rem;
          overflow: visible;
        }

        .about-scene {
          display: grid;
          place-items: center;
          width: min(90vw, 620px);
          min-height: auto;
          aspect-ratio: auto;
        }

        .mission-monitor {
          position: relative;
          left: auto;
          top: auto;
          width: min(85vw, 520px);
          min-width: 0;
          padding: 0;
          transform: none !important;
          filter: drop-shadow(-10px 12px 5px rgba(0, 0, 0, 0.55));
          z-index: 1;
        }

        .mission-frame {
          display: block;
        }

        .mission-text {
          position: absolute;
          left: 16.4%;
          top: 24.5%;
          width: 61.5%;
          color: #050505;
          text-align: left;
          text-shadow: none;
        }

        .mission-text p {
          font-size: clamp(0.98rem, 4.2vw, 1.45rem);
          line-height: 1.08;
        }

        .mission-text .mission-note {
          margin-top: 0.45rem;
          font-size: clamp(0.7rem, 3vw, 0.95rem);
        }

        .about-apply {
          position: relative;
          left: auto;
          top: auto;
          display: block;
          width: min(50vw, 220px);
          margin: -0.25rem auto 0;
          transform: none !important;
          filter: drop-shadow(-8px 10px 4px rgba(0, 0, 0, 0.42));
          z-index: 3;
        }

        .tracks-section,
        .sponsors-section,
        .faq-section {
          min-height: auto;
          margin-top: 0;
          padding: 0.9rem 1rem;
          overflow: visible;
        }

        .tracks-scene,
        .sponsors-scene,
        .faq-scene {
          min-height: auto;
        }

        .tracks-section {
          overflow: hidden;
        }

        .tracks-scene {
          display: grid;
          place-items: center;
          width: min(100%, 640px);
          aspect-ratio: 16 / 9;
        }

        .satellite-rig {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          transform: none !important;
          will-change: auto;
        }

        .track-asset {
          will-change: auto;
          transform: none !important;
        }

        .sponsors-scene {
          width: min(92vw, 760px);
        }

        .sponsors-coming-soon {
          width: min(88vw, 620px);
          min-height: clamp(120px, 32vw, 220px);
          font-size: clamp(3rem, 12vw, 4.6rem);
        }

        .section-title {
          position: relative;
          left: auto;
          top: auto;
          margin-bottom: 1rem;
          transform: none !important;
          font-size: clamp(3.75rem, 15vw, 5.8rem);
          text-align: center;
        }

        .faq-scene {
          grid-template-columns: 1fr;
          gap: 1rem;
          width: min(90vw, 680px);
          padding: 0;
        }

        .faq-title {
          font-size: clamp(3.7rem, 15vw, 5.4rem);
        }

        .faq-list {
          width: 100%;
          padding: 0.65rem 0.9rem;
          border-radius: 22px;
        }

        .faq-item summary {
          min-height: 52px;
          padding: 0.75rem 0.4rem;
          font-size: clamp(1.25rem, 5.5vw, 1.65rem);
        }

        .faq-answer {
          padding: 0 0.6rem 1rem 2.35rem;
          font-size: clamp(1rem, 4.5vw, 1.25rem);
        }

        .moon-footer {
          margin-top: 0;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        :global(html) {
          scroll-behavior: auto;
        }

        .hero-layer,
        .planet-midground,
        .logo-lockup,
        .about-apply,
        .crater,
        .satellite-rig,
        .track-asset,
        .john-harvard {
          transform: none;
          will-change: auto;
        }

        .widener-layer {
          transform: translateX(50%);
        }

        .logo-lockup {
          transform: translate(-50%, -42%);
        }

        .crater-left {
          transform: scaleX(-1);
        }

        .scroll-content {
          transform: translateY(0);
        }
      }
    
</style>
