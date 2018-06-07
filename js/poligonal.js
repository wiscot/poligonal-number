$.fn.poligonal = function(n, d)
{
    return this.each(function()
    {
        var ctx = this.getContext('2d');
        if (n > 1 && d > 1) {
            // Calculamos la circunferencia exterior
            var w = 30;
            var a = 2 * Math.PI / n;
            var l = (d - 1) * w;
            var r = l / (2 * Math.sin(a / 2));
            var ap = Math.cos(a / 2) * l;
            var xo = r + 10;
            var yo = r + 10;
            for (i = 2; i <= d; i++) {
                l = (i - 1) * w;
                r = l / (2 * Math.sin(a / 2));
                ap = Math.cos(a / 2) * l;
                ctx.beginPath();
                ctx.arc(xo, yo, r, 0, 360, false);
                ctx.stroke();
                for (j = 0; j < n; j++) {
                    var ja = a * (j - 0.5);
                    var jxo = r * Math.cos(ja);
                    var jyo = r * Math.sin(ja);
                    var jxf = r * Math.cos(ja + a);
                    var jyf = r * Math.sin(ja + a);
                    ctx.beginPath();
                    ctx.moveTo(xo + jxo, yo + jyo);
                    ctx.lineTo(xo + jxf, yo + jyf);
                    ctx.stroke();
                    for (k = 0; k < d; k++) {
                        var kx = jxo + (((jxf + 1 - jxo) / (i - 1)) * k);
                        var ky = jyo + (((jyf + 1 - jyo) / (i - 1)) * k);
                        ctx.beginPath();
                        ctx.arc(xo + kx, yo + ky, w * 0.6 / 2, 2 * Math.PI, false);
                        ctx.fill();
                    }
                }
            }
        }
    });
};
