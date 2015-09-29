$(document).load(function() {
  a('[data-ride="carousel"]').each(function() {
    var c = a(this);
    b.call(c, c.data())
  })
});

$(document).load(function() {
  a('[data-spy="scroll"]').each(function() {
    var b = a(this);
    c.call(b, b.data())
  })
});

$(document).load(function() {
  a('[data-spy="affix"]').each(function() {
    var c = a(this),
      d = c.data();
    d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
  })
});

$(document).load(k = r.handle = function(a) {
  return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
});

$(".sampleCarousel").keydown(e = function() {
  return a.apply(b || this, c.concat(d.call(arguments)))
}

k = r.handle = function(a) {
  return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
});

$(".sampleCarousel").mouseout(e = function() {
  return a.apply(b || this, c.concat(d.call(arguments)))
}

k = r.handle = function(a) {
  return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
});

$(".sampleCarousel").mouseover(e = function() {
  return a.apply(b || this, c.concat(d.call(arguments)))
}

k = r.handle = function(a) {
  return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
});

$("li").click(var e = function(c) {
  var d, e = a(this),
    f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
  if (f.hasClass("carousel")) {
    var g = a.extend({}, f.data(), e.data()),
      h = e.attr("data-slide-to");
    h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
  }
});

$(".left").click(var e = function(c) {
  var d, e = a(this),
    f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
  if (f.hasClass("carousel")) {
    var g = a.extend({}, f.data(), e.data()),
      h = e.attr("data-slide-to");
    h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
  }
});

$(".right").click(var e = function(c) {
  var d, e = a(this),
    f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
  if (f.hasClass("carousel")) {
    var g = a.extend({}, f.data(), e.data()),
      h = e.attr("data-slide-to");
    h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
  }
});
