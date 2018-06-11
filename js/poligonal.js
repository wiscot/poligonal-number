$.fn.poligonal = function(n, d)
{
    return this.each(function()
    {
        var colors = [ "#ff5733", "#ffbd33", "#dbff33", "#75ff33", "#33ff57", "#33ffbd" ];
        var ctx = this.getContext('2d');
        var bounds = this.getBoundingClientRect();
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, bounds.width, bounds.height);
        if (n > 1 && d > 1) {
            // Calculamos la circunferencia exterior
            var w = 25;
            var pr = w * 0.75;
            var pi2 = 2 * Math.PI;
            var pi34 = (Math.PI / 2) + (Math.PI / n);
            var a = pi2 / n;
            var l0 = (d - 1) * w;
            var r0 = l0 / (2 * Math.sin(a / 2));
            var ap = Math.cos(a / 2) * l0;
            var xo0 = r0 * Math.cos(pi34) + r0 + 10;
            var yo0 = r0 * Math.sin(pi34) + r0 + 10;
            for (i = d; i > 0; i--) {
                c = colors[(i - 1) % colors.length];
                l = (i - 1) * w;
                r = l / (2 * Math.sin(a / 2));
                var xo = xo0 - (r * Math.cos(pi34));
                var yo = yo0 - (r * Math.sin(pi34));
                ap = Math.cos(a / 2) * l;
                for (j = 0; j < n; j++) {
                    var ja = (a * j) + pi34;
                    var jxo = r * Math.cos(ja);
                    var jyo = r * Math.sin(ja);
                    var jxf = r * Math.cos(ja + a);
                    var jyf = r * Math.sin(ja + a);
                    for (k = 0; k < i - 1; k++) {
                        var kx = jxo + (((jxf + 1 - jxo) / (i - 1)) * k);
                        var ky = jyo + (((jyf + 1 - jyo) / (i - 1)) * k);
                        ctx.fillStyle = (j === 0 && k === 0 ? colors[0] : c);
                        ctx.beginPath();
                        ctx.arc(xo + kx, yo + ky, pr / 2, 2 * pi2, false);
                        ctx.fill();
                    }
                }
            }
        }
    });
};
