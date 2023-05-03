var option_hero_background_twisted_line_color = "#fff"
  , option_hero_background_twisted_fill_color = "#212121"
  , option_hero_background_twisted_bg_color = "#212121"
  , option_hero_background_twisted_scene_opacity = .08
  , option_hero_background_twisted_speed = .005
  , option_hero_background_twisted_x_offset = "0%";
function twistedBackground() {
    var e = document.getElementById("main").appendChild(document.createElement("canvas"))
      , o = e.getContext("2d")
      , t = window.innerWidth
      , i = window.innerHeight
      , n = 1 * Math.min(window.innerWidth, window.innerHeight)
      , r = n > 300 ? 180 : 90
      , a = []
      , s = .3 * n
      , c = Math.round(.1 * r);
    function d() {
        t = window.innerWidth,
        i = window.innerHeight,
        e.width = t,
        e.height = i,
        n = 1 * Math.min(window.innerWidth, window.innerHeight),
        s = .3 * n,
        c = Math.round(.1 * r),
        a = [];
        for (var o = 0; o < r; o++)
            a.push({
                x: window.innerWidth / 2 + Math.sin(o / r * 2 * Math.PI) * (n - s),
                y: window.innerHeight / .9 + Math.cos(o / r * 2 * Math.PI) * (n - s),
                r: o / r * Math.PI
            })
    }
    function l() {
        requestAnimationFrame(l),
        function() {
            for (var e = 0, o = a.length; e < o; e++)
                a[e].r += option_hero_background_twisted_speed
        }(),
        o.clearRect(0, 0, e.width, e.height),
        function() {
            for (var e = a.length, t = e - c, i = e; t < i; t++)
                o.save(),
                o.globalCompositeOperation = "destination-over",
                p(a[t]),
                o.restore();
            o.save(),
            o.globalCompositeOperation = "destination-in",
            p(a[0], !0),
            o.restore();
            for (var t = 0, i = e; t < i; t++)
                o.save(),
                o.globalCompositeOperation = "destination-over",
                p(a[t]),
                o.restore()
        }()
    }
    function p(e, t) {
        size = s + (t ? 10 : 0),
        size2 = size / 2,
        o.translate(e.x, e.y),
        o.rotate(e.r),
        t || (o.strokeStyle = option_hero_background_twisted_line_color,
        o.lineWidth = 1,
        o.strokeRect(-size2, -size2, size, size)),
        o.fillStyle = option_hero_background_twisted_fill_color,
        o.fillRect(-size2, -size2, size, size)
    }
    e.setAttribute("id", "canvas-twisted"),
    $("#canvas-twisted").css("opacity", option_hero_background_twisted_scene_opacity),
    $("#canvas-twisted").css("transform", "rotate(180deg)"),
    $("body").append('<div class="bg-color" style="background-color:' + option_hero_background_twisted_bg_color + '"></div>'),
    window.addEventListener("resize", d),
    function() {
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
    }(),
    d(),
    l()
}
twistedBackground();