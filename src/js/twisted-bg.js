const option_hero_background_twisted_line_color = "#fff";
const option_hero_background_twisted_fill_color = "#212121"
const option_hero_background_twisted_bg_color = "#212121"
const option_hero_background_twisted_scene_opacity = .08
const option_hero_background_twisted_speed = .005
const option_hero_background_twisted_x_offset = "0%";
function twistedBackground() {
    let canvas = document.querySelector(".main").appendChild(document.createElement("canvas"))
    let context = canvas.getContext("2d")
    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight
    let n = 1 * Math.min(windowWidth, windowHeight)
    let r = n > 300 ? 180 : 90
    let a = []
    let s = .3 * n
    let c = Math.round(.1 * r);
    function d() {
      let windowWidth = window.innerWidth
      let windowHeight= window.innerHeight
      canvas.width = windowWidth
      canvas.height = windowHeight
        n = 1 * Math.min(window.innerWidth, window.innerHeight),
        s = .3 * n,
        c = Math.round(.1 * r),
        a = [];
        for (let i = 0; i < r; i++){
          a.push({
            x: window.innerWidth / 2 + Math.sin(i / r * 2 * Math.PI) * (n - s),
            y: window.innerHeight / .9 + Math.cos(i / r * 2 * Math.PI) * (n - s),
            r: i / r * Math.PI
          })
        }
    }
    function l() {
        requestAnimationFrame(l),
        (function() {
            for (let i = 0; i < a.length; i++){
              a[i].r += option_hero_background_twisted_speed
            }
        })()
        context.clearRect(0, 0, canvas.width, canvas.height),
        (function() {
            for (let e = a.length, t = a.length - c, i = e; t < i; t++){
              context.save(),
              context.globalCompositeOperation = "destination-over",
              p(a[t]),
              context.restore();
            }
            context.save(),
            context.globalCompositeOperation = "destination-in",
            p(a[0], !0),
            context.restore();
            for (var t = 0, i = a.length; t < i; t++){
              context.save(),
              context.globalCompositeOperation = "destination-over",
              p(a[t]),
              context.restore()
            }
        })()
    }
    function p(e, t) {
        let size = s + (t ? 10 : 0)
        let size2 = size / 2
        context.translate(e.x, e.y)
        context.rotate(e.r)
        t || (context.strokeStyle = option_hero_background_twisted_line_color,
        context.lineWidth = 1,
        context.strokeRect(-size2, -size2, size, size))
        context.fillStyle = option_hero_background_twisted_fill_color
        context.fillRect(-size2, -size2, size, size)
    }
    canvas.setAttribute("id", "canvas-twisted"),
    canvas.style.opacity = option_hero_background_twisted_scene_opacity;
    canvas.style.transform = 'rotate(180deg)'
    document.body.insertAdjacentHTML('beforeend',`<div class="bg-color" style="background-color: ${option_hero_background_twisted_bg_color}"></div>`)
    // $("#canvas-twisted").css("opacity", option_hero_background_twisted_scene_opacity),
    // $("#canvas-twisted").css("transform", "rotate(180deg)"),
    // $("body").append('<div class="bg-color" style="background-color:' + option_hero_background_twisted_bg_color + '"></div>'),
    window.addEventListener("resize", d),
    (function() {
        for (var e = 0, o = ["ms", "moz", "webkit", "o"], t = 0; t < o.length && !window.requestAnimationFrame; ++t)
            window.requestAnimationFrame = window[o[t] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[o[t] + "CancelAnimationFrame"] || window[o[t] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(o, t) {
            var i = (new Date).getTime()
              , n = Math.max(0, 16 - (i - e))
              , r = window.setTimeout(function() {
                o(i + n)
            }, n);
            return e = i + n,
            r
        }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        }
        )
    })()
    d()
    l()
}
twistedBackground();