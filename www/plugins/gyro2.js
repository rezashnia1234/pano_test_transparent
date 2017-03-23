var krpanoplugin = function() {
    function dt(e) {
        return ".yes.on.true.1" [b](("." + e)[m]()) >= 0
    }

    function vt(e) {}

    function mt(e) {
        W && V && W.call(V[e], V)
    }

    function gt() {
        it = 0;
        if (X.mobile || X.tablet)
            if (X.android) {
                var e = ("" + navigator.userAgent)[m]()[b]("ucbrowser") > 0;
                X.chrome || X.firefox ? it = 2 : e && (it = 2)
            } else it = 2;
        if (it > 0) {
            $ == 0 && (it = 1), window[o](it == 1 ? i : u, bt, n);
            var t = V[a] != "" && V[a] != r,
                f = X.desktop ? 500 : t ? 1500 : 3e3;
            setTimeout(yt, f)
        } else rt == n && (rt = s, mt(a))
    }

    function yt() {
        window[t](i, bt, n), window[t](u, bt, n), W && rt == n && (rt = s, mt(a))
    }

    function bt(e) {
        window[t](e.type, bt, n), e.type == i || e.type == u && e[g] && e.rotationRate ? (rt = s, Z = s, mt(A), K && Tt()) : rt == n && (rt = s, mt(a))
    }

    function wt(e) {
        var t = 2;
        switch (("" + e)[m]()) {
            case "0":
            case B:
                t = 0;
                break;
            case "1":
            case x:
                t = 1;
                break;
            case "2":
            case D:
                t = 2;
                break;
            case "3":
            case C:
                t = 3
        }
        Q = t
    }

    function Et() {
        var e = D;
        switch (Q) {
            case 0:
                e = B;
                break;
            case 1:
                e = x;
                break;
            case 2:
                e = D;
                break;
            case 3:
                e = C
        }
        return e
    }

    function St(e) {
        Y = e, e ? (ct = {
            continuousupdates: W[p][f],
            usercontrol: W[h].usercontrol,
            loadwhilemoving: W[w][v],
            hlookat: W[p][y],
            vlookat: W[p][k],
            camroll: W[p][N],
            limitview: W[p][S]
        }, W[p][f] = s, W[w][v] = s, W[p][S] = B, at = W[p][y], X.desktop || (at -= Xt()), _t(), mt(P)) : ct && (W[p][f] = ct[f], W[w][v] = ct[v], W[p][S] = ct[S], W.call("tween(view.camroll,0)"), ct = r, _t(), mt(_))
    }

    function Tt() {
        W && Z && Y == n && (St(s), nt > 0 && (xt = W[d]), it == 1 ? window[o](i, Yt, s) : it == 2 && window[o](u, Qn, s), X[l][c].touch && W[h][L][o](X[l][c][H], Mt, n), W.set("events[__gyro2].keep", s), W.set("events[__gyro2].order", -99), W.set("events[__gyro2].onviewchange", Lt), W.get(c).sortby("order", s))
    }

    function Nt() {
        W && Y && (St(n), W.set("events[__gyro2].name", r), window[t](i, Yt, s), window[t](u, Qn, s), X[l][c].touch && W[h][L][t](X[l][c][H], Mt, n), W[p].haschanged = s)
    }

    function Ct(e) {
        e === undefined ? e = Number.NaN : e = Number(e), isNaN(e) && W.xml && W.xml[p] && (e = Number(W.xml[p][y]), isNaN(e) && (e = 0));
        var t = ut;
        at = at - t + e
    }

    function Lt() {
        var e = W.webVR;
        if (e && e[M]) return;
        if (Y) {
            var t = Xt();
            t != kt && (kt = t, Qt = 5, st = ot - 1), W[p][f] = s;
            var n = [0, 0, 0];
            if (st > ot) {
                var i = r;
                if (J == 0) i = $t.q;
                else if ((J == 4 || J >= 6) && it == 2) i = $t.q, $n(i);
                else if (J <= 3 || J == 5 || it == 1)
                    if (Vt.t > 0 && $t.t > 0) {
                        var o = W[d],
                            u, a, l = 1,
                            c = 1;
                        J == 1 || J == 2 ? u = o - $t.t : (u = o - Vt.t, c = 2, W[w].fps < 59 && (u = o - $t.t, c = 1)), a = $t.t - Vt.t, a > 0 ? (l = u / a, l > c && (l = c), Jt.x = Vt.q.x, Jt.y = Vt.q.y, Jt.z = Vt.q.z, Jt.w = Vt.q.w, qt(Jt, $t.q, l), i = Jt) : i = $t.q
                    }
                if (i) {
                    if (et != 0)
                        if (Qt > 0) Qt--, Kt.x = i.x, Kt.y = i.y, Kt.z = i.z, Kt.w = i.w;
                        else {
                            var v = 1 - et;
                            v == 2 && (v = Math.pow(Math.tan(Math.min(Number(W[p].fov), 90) * ht * .5), 1.5), v /= Math.max(Math.min(Number(W[w].currentfps) / 50, 1), .2), v > 1 && (v = 1)), qt(Kt, i, v), i = Kt
                        }
                    var m = Math.min(Math.abs(lt) / 30, 1);
                    Wt(n, i, G && m < 1 ? T : "YZX");
                    var g = at - n[1] * pt + t,
                        b = lt - n[0] * pt,
                        E = G ? -n[2] * pt : 0;
                    E *= 1 - m, Q == 2 && (lt < -0.1 && b <= -90 ? lt += -90 - b : lt > .1 && b > 90 && (lt += 90 - b)), isNaN(g) && (g = 0), isNaN(b) && (b = 0), isNaN(E) && (E = 0);
                    var S = W.image.hfov;
                    if (S > 0 && S < 10) {
                        S /= 90, g *= S, b *= S;
                        var x = W.image;
                        if (x) {
                            var C = g - (x.flatgyro_h || g),
                                L = b - (x.flatgyro_v || b);
                            x.flatgyro_h = g, x.flatgyro_v = b, g = W[p][y] += C, b = W[p][k] += L
                        }
                    }
                    ut = g;
                    if (xt > 0) {
                        var A = W[d] - xt;
                        if (A < nt * 1e3) {
                            var O = A / (nt * 1e3);
                            O > 1 && (O = 1), O *= O;
                            var _ = new Dt,
                                D = new Dt;
                            Ut(_, W[p][k] * ht, W[p][y] * ht, W[p][N] * ht, T), Ut(D, b * ht, g * ht, E * ht, T), qt(_, D, O);
                            var P = [0, 0, 0];
                            Wt(P, _, T), g = P[1] * pt, b = P[0] * pt, E = P[2] * pt
                        } else xt = 0
                    }
                    W[p][y] = g, W[p][k] = b, W[p][N] = E;
                    if (Q == 2 && Ot == r) {
                        var H = At(i);
                        H = Math.max(Math.min(1, 1 - H), 0), lt *= H, Math.abs(lt) < 1e-5 && (lt = 0)
                    }
                    Ot == r && (ft *= Math.pow(W[h].touchfriction, .92), at += ft);
		//////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////
		// W[p][y] = W[p][y] - 180;
		// console.log("hlookat:" + W[p][y]);
		// console.log("vlookat:" + W[p][k]);
		// console.log("camroll:" + W[p][N]);
		/*
		if(window.sessionStorage.getItem('temp_delta') != null)
		{
			var temp_delta = window.sessionStorage.getItem('temp_delta');
			var temp_compass = window.sessionStorage.getItem('temp_compass');
			if(temp_delta > 10)
			{
				if(temp_compass>180)
					temp_compass = temp_compass - 360;
				W[p][y] = temp_compass;
				console.log("temp_compass :" + temp_compass);
			}
			window.sessionStorage.removeItem("temp_delta");
			window.sessionStorage.removeItem("temp_compass");
			// window.sessionStorage.setItem('compass_used',"yes");
		}
		if (window.cordova && window.sessionStorage.getItem('compass_used') == null)
		{
			if (typeof compassSuccess !== 'undefined' && $.isFunction(compassSuccess)) {
				
			}
			else
			{
				function compassSuccess(heading) {
					console.log("Compass Heading:" + heading.magneticHeading);
					console.log("hlookat:" + W[p][y]);
					var temp_hlook = W[p][y];
					var temp_compass = heading.magneticHeading;
					if(temp_hlook<0)
						temp_hlook = temp_hlook + 360;
					
					var temp_delta = Math.abs(temp_compass - temp_hlook) % 360;
					if(temp_delta > 180)
						temp_delta = 360 - temp_delta;
					console.log("Delta :" + temp_delta);
					
					window.sessionStorage.setItem('temp_delta',temp_delta);
					window.sessionStorage.setItem('temp_compass',temp_compass);
					
					//if(temp_delta > 10)
					//{
					//	if(temp_compass>180)
					//		temp_compass = temp_compass - 360;
					//	W[p][y] = temp_compass;
					//}
				};
				function compassError(error) {};
			}
			navigator.compass.getCurrentHeading(compassSuccess, compassError);
		}
		*/
		//////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////
                }
            }
        }
    }

    function Mt(e) {
        var i = n;
        if (Q == 3) V[M] = n, i = s;
        else if (Q == 0 || W[h].panoControl.isMultiTouch()) i = s;
        else {
            var u = W[d],
                a = W[h].getMousePos(e[q] ? e[q][0] : e);
            a.x /= W.stagescale, a.y /= W.stagescale;
            if (e.type == X[l][c][H]) Ot == r ? (Ot = a, W[h][L][o](X[l][c][F], Mt, s), W[h][L][o](X[l][c][R], Mt, s)) : i = s;
            else if (e.type == X[l][c][R]) i = s;
            else if (e.type == X[l][c][F] && Ot) {
                var f = Ot.x,
                    p = a.x;
                if (W[w].stereo) {
                    var v = W.stagewidth * .5;
                    (f >= v || p >= v) && (f < v || p < v) && (p = f)
                }
                var m = W[I](f, Ot.y, n),
                    g = W[I](p, a.y, n),
                    y = g.x - m.x,
                    b = g.y - m.y;
                y < -180 ? y += 360 : y > 180 && (y -= 360), Math.abs(y) < 120 && Math.abs(b) < 45 && (Ot = a, at -= y, ft = -y, ft < -45 ? ft = -45 : ft > 45 && (ft = 45), Q == 2 && (lt -= b))
            }
        }
        i && (Ot = r, W[h][L][t](X[l][c][F], Mt, s), W[h][L][t](X[l][c][R], Mt, s))
    }

    function _t() {
        st = 0, Vt.t = 0, $t.t = 0, Mr(), Hr = 0, Or = n, Un = r, Qt = 1
    }

    function Dt(e, t, n, r) {
        this.x = e, this.y = t, this.z = n, this.w = r
    }

    function Pt(e) {
        var t = Math[j](e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w);
        t === 0 ? (e.x = e.y = e.z = 0, e.w = 1) : (t = 1 / t, e.x *= t, e.y *= t, e.z *= t, e.w *= t)
    }

    function Ht(e) {
        e.x *= -1, e.y *= -1, e.z *= -1, Pt(e)
    }

    function Bt(e, t) {
        return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
    }

    function jt(e) {
        return Math[j](e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w)
    }

    function Ft(e, t) {
        var n = e.x,
            r = e.y,
            i = e.z,
            s = e.w,
            o = t.x,
            u = t.y,
            a = t.z,
            f = t.w;
        e.x = n * f + s * o + r * a - i * u, e.y = r * f + s * u + i * o - n * a, e.z = i * f + s * a + n * u - r * o, e.w = s * f - n * o - r * u - i * a
    }

    function It(e, t) {
        var n = t.x,
            r = t.y,
            i = t.z,
            s = t.w,
            o = e.x,
            u = e.y,
            a = e.z,
            f = e.w;
        e.x = n * f + s * o + r * a - i * u, e.y = r * f + s * u + i * o - n * a, e.z = i * f + s * a + n * u - r * o, e.w = s * f - n * o - r * u - i * a
    }

    function qt(e, t, n) {
        var r = e.x,
            i = e.y,
            s = e.z,
            o = e.w,
            u = r * t.x + i * t.y + s * t.z + o * t.w;
        u < 0 ? (u = -u, e.x = -t.x, e.y = -t.y, e.z = -t.z, e.w = -t.w) : (e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w);
        if (u >= 1) {
            e.w = o, e.x = r, e.y = i, e.z = s;
            return
        }
        var a = Math.acos(u),
            f = Math[j](1 - u * u);
        if (Math.abs(f) < .001) {
            e.w = .5 * (o + e.w), e.x = .5 * (r + e.x), e.y = .5 * (i + e.y), e.z = .5 * (s + e.z);
            return
        }
        var l = Math.sin((1 - n) * a) / f,
            c = Math.sin(n * a) / f;
        e.w = o * l + e.w * c, e.x = r * l + e.x * c, e.y = i * l + e.y * c, e.z = s * l + e.z * c
    }

    function Rt(e, t, n) {
        var r = n / 2,
            i = Math.sin(r);
        e.x = t.x * i, e.y = t.y * i, e.z = t.z * i, e.w = Math.cos(r)
    }

    function Ut(e, t, n, r, i) {
        var s = Math.cos(t / 2),
            o = Math.cos(n / 2),
            u = Math.cos(r / 2),
            a = Math.sin(t / 2),
            f = Math.sin(n / 2),
            l = Math.sin(r / 2);
        return i === "XYZ" ? (e.x = a * o * u + s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u - a * f * l) : i === T ? (e.x = a * o * u + s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u + a * f * l) : i === "ZXY" ? (e.x = a * o * u - s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u - a * f * l) : i === "ZYX" ? (e.x = a * o * u - s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u + a * f * l) : i === "YZX" ? (e.x = a * o * u + s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u - a * f * l) : i === "XZY" && (e.x = a * o * u - s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u + a * f * l), e
    }

    function zt(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h, p, d;
        i = t.x, s = t.y, o = t.z, u = Math[j](i * i + s * s + o * o), u > 0 && (i /= u, s /= u, o /= u), a = n.x, f = n.y, l = n.z, c = Math[j](a * a + f * f + l * l), c > 0 && (a /= c, f /= c, l /= c), r = i * a + s * f + o * l + 1, r < 1e-6 ? (r = 0, Math.abs(i) > Math.abs(o) ? (h = -s, p = i, d = 0) : (h = 0, p = -o, d = s)) : (h = s * l - o * f, p = o * a - i * l, d = i * f - s * a), e.x = h, e.y = p, e.z = d, e.w = r, Pt(e)
    }

    function Wt(e, t, n) {
        function r(e, t, n) {
            return e < t ? t : e > n ? n : e
        }
        if (!t || isNaN(t.x) || isNaN(t.y) || isNaN(t.z) || isNaN(t.w)) return;
        var i = t.x * t.x,
            s = t.y * t.y,
            o = t.z * t.z,
            u = t.w * t.w;
        if (n === "XYZ") e[0] = Math[E](2 * (t.x * t.w - t.y * t.z), u - i - s + o), e[1] = Math.asin(r(2 * (t.x * t.z + t.y * t.w), -1, 1)), e[2] = Math[E](2 * (t.z * t.w - t.x * t.y), u + i - s - o);
        else if (n === T) e[0] = Math.asin(r(2 * (t.x * t.w - t.y * t.z), -1, 1)), e[1] = Math[E](2 * (t.x * t.z + t.y * t.w), u - i - s + o), e[2] = Math[E](2 * (t.x * t.y + t.z * t.w), u - i + s - o);
        else if (n === "ZXY") e[0] = Math.asin(r(2 * (t.x * t.w + t.y * t.z), -1, 1)), e[1] = Math[E](2 * (t.y * t.w - t.z * t.x), u - i - s + o), e[2] = Math[E](2 * (t.z * t.w - t.x * t.y), u - i + s - o);
        else if (n === "ZYX") e[0] = Math[E](2 * (t.x * t.w + t.z * t.y), u - i - s + o), e[1] = Math.asin(r(2 * (t.y * t.w - t.x * t.z), -1, 1)), e[2] = Math[E](2 * (t.x * t.y + t.z * t.w), u + i - s - o);
        else if (n === "YZX") e[0] = Math[E](2 * (t.x * t.w - t.z * t.y), u - i + s - o), e[1] = Math[E](2 * (t.y * t.w - t.x * t.z), u + i - s - o), e[2] = Math.asin(r(2 * (t.x * t.y + t.z * t.w), -1, 1));
        else {
            if (n !== "XZY") return;
            e[0] = Math[E](2 * (t.x * t.w + t.y * t.z), u - i + s - o), e[1] = Math[E](2 * (t.x * t.z + t.y * t.w), u + i - s - o), e[2] = Math.asin(r(2 * (t.z * t.w - t.x * t.y), -1, 1))
        }
    }

    function Xt() {
        var e = Number.NaN,
            t = screen.width > screen.height,
            n = screen[O] || screen.msOrientation || screen.mozOrientation;
        if (n) {
            n = ("" + n)[m]();
            var r = n[b]("portrait") >= 0,
                i = n[b]("landscape") >= 0,
                s = n[b]("primary") >= 0,
                o = n[b]("secondary") >= 0;
            r && s ? e = 0 : i && s ? e = 90 : i && o ? e = -90 : r && o && (e = 180), !isNaN(e) && !X.mobile && (e -= 90)
        }
        return isNaN(e) && (e = W._have_top_access ? top[O] : window[O]), isNaN(e) && (X.mobile ? e = t ? 90 : 0 : e = t ? 0 : 90), X.tablet && X.firefox && (e += 90), e
    }

    function Yt(e) {
        if (!Y) return;
        var t = W[d],
            n = t - Kn;
        Kn = t;
        var i = Xt() * ht,
            s = e.alpha * ht,
            o = e.beta * ht,
            u = e.gamma * ht;
        Gt === r && (Gt = s), s = s - Gt + Math.PI;
        var a = Math.cos(s),
            f = Math.sin(s),
            l = Math.cos(o),
            c = Math.sin(o),
            h = Math.cos(u),
            p = Math.sin(u);
        s = Math[E](-f * c * h - a * p, f * p - a * c * h), o = -Math.asin(l * h), u = Math[E](l * p, -c) - Math.PI, Vt.q.x = $t.q.x, Vt.q.y = $t.q.y, Vt.q.z = $t.q.z, Vt.q.w = $t.q.w, Vt.t = $t.t;
        var v = $t.q;
        $t.t = t, st++, Ut(v, o, s + i, u - i, T)
    }

    function Zt() {
        this.x = 0, this.y = 0, this.z = 0
    }

    function en(e, t, n, r) {
        e.x = t, e.y = n, e.z = r
    }

    function tn(e, t) {
        e.x = t.x, e.y = t.y, e.z = t.z
    }

    function nn(e) {
        e.x = 0, e.y = 0, e.z = 0
    }

    function rn(e, t, n) {
        t == 0 ? e.x = n : t == 1 ? e.y = n : e.z = n
    }

    function sn(e) {
        return Math[j](e.x * e.x + e.y * e.y + e.z * e.z)
    }

    function on(e) {
        var t = sn(e);
        t > 0 ? un(e, 1 / t) : (e.x = 0, e.y = 0, e.z = 0)
    }

    function un(e, t) {
        e.x *= t, e.y *= t, e.z *= t
    }

    function an(e, t, n) {
        en(n, e.x - t.x, e.y - t.y, e.z - t.z)
    }

    function fn(e, t, n) {
        en(n, e.y * t.z - e.z * t.y, e.z * t.x - e.x * t.z, e.x * t.y - e.y * t.x)
    }

    function ln(e, t) {
        return e.x * t.x + e.y * t.y + e.z * t.z
    }

    function cn() {
        var e;
        return typeof Float64Array != "undefined" ? e = new Float64Array(9) : e = new Array(9), pn(e), e
    }

    function hn(e) {
        e[0] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = 0
    }

    function pn(e) {
        e[0] = e[4] = e[8] = 1, e[1] = e[2] = e[3] = e[5] = e[6] = e[7] = 0
    }

    function dn(e, t) {
        e[0] = e[4] = e[8] = t
    }

    function vn(e, t) {
        e[0] *= t, e[1] *= t, e[2] *= t, e[3] *= t, e[4] *= t, e[5] *= t, e[6] *= t, e[7] *= t, e[8] *= t
    }

    function mn(e, t) {
        var n = e[1],
            r = e[2],
            i = e[5];
        t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = n, t[4] = e[4], t[5] = e[7], t[6] = r, t[7] = i, t[8] = e[8]
    }

    function gn(e, t, n) {
        e[t] = n.x, e[t + 3] = n.y, e[t + 6] = n.z
    }

    function yn(e, t) {
        e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8]
    }

    function bn(e, t) {
        var n = e[0] * (e[4] * e[8] - e[7] * e[5]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
        n != 0 && (n = 1 / n, t[0] = (e[4] * e[8] - e[7] * e[5]) * n, t[1] = -(e[1] * e[8] - e[2] * e[7]) * n, t[2] = (e[1] * e[5] - e[2] * e[4]) * n, t[3] = -(e[3] * e[8] - e[5] * e[6]) * n, t[4] = (e[0] * e[8] - e[2] * e[6]) * n, t[5] = -(e[0] * e[5] - e[3] * e[2]) * n, t[6] = (e[3] * e[7] - e[6] * e[4]) * n, t[7] = -(e[0] * e[7] - e[6] * e[1]) * n, t[8] = (e[0] * e[4] - e[3] * e[1]) * n)
    }

    function wn(e, t) {
        e[0] -= t[0], e[1] -= t[1], e[2] -= t[2], e[3] -= t[3], e[4] -= t[4], e[5] -= t[5], e[6] -= t[6], e[7] -= t[7], e[8] -= t[8]
    }

    function En(e, t) {
        e[0] += t[0], e[1] += t[1], e[2] += t[2], e[3] += t[3], e[4] += t[4], e[5] += t[5], e[6] += t[6], e[7] += t[7], e[8] += t[8]
    }

    function Sn(e, t, n) {
        var r = t[0],
            i = t[1],
            s = t[2],
            o = t[3],
            u = t[4],
            a = t[5],
            f = t[6],
            l = t[7],
            c = t[8],
            h = e[0],
            p = e[1],
            d = e[2];
        n[0] = h * r + p * o + d * f, n[1] = h * i + p * u + d * l, n[2] = h * s + p * a + d * c, h = e[3], p = e[4], d = e[5], n[3] = h * r + p * o + d * f, n[4] = h * i + p * u + d * l, n[5] = h * s + p * a + d * c, h = e[6], p = e[7], d = e[8], n[6] = h * r + p * o + d * f, n[7] = h * i + p * u + d * l, n[8] = h * s + p * a + d * c
    }

    function xn(e, t, n) {
        var r = e[0] * t.x + e[1] * t.y + e[2] * t.z,
            i = e[3] * t.x + e[4] * t.y + e[5] * t.z,
            s = e[6] * t.x + e[7] * t.y + e[8] * t.z;
        n.x = r, n.y = i, n.z = s
    }

    function Tn(e, t, n) {
        n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n[3] = e[3] + t[3], n[4] = e[4] + t[4], n[5] = e[5] + t[5], n[6] = e[6] + t[6], n[7] = e[7] + t[7], n[8] = e[8] + t[8]
    }

    function Dn(e, t, n) {
        fn(e, t, Cn);
        if (sn(Cn) == 0) pn(n);
        else {
            tn(kn, e), tn(Ln, t), on(Cn), on(kn), on(Ln);
            var r = On,
                i = Mn;
            fn(Cn, kn, Nn), r[0] = kn.x, r[1] = kn.y, r[2] = kn.z, r[3] = Cn.x, r[4] = Cn.y, r[5] = Cn.z, r[6] = Nn.x, r[7] = Nn.y, r[8] = Nn.z, fn(Cn, Ln, Nn), i[0] = Ln.x, i[3] = Ln.y, i[6] = Ln.z, i[1] = Cn.x, i[4] = Cn.y, i[7] = Cn.z, i[2] = Nn.x, i[5] = Nn.y, i[8] = Nn.z, Sn(i, r, n)
        }
    }

    function Pn(e, t) {
        var n = ln(e, e),
            r = Math[j](n),
            i, s;
        if (n < 1e-8) i = 1 - 1 / 6 * n, s = .5;
        else if (n < 1e-6) s = .5 - .25 * (1 / 6) * n, i = 1 - n * (1 / 6) * (1 - .05 * n);
        else {
            var o = 1 / r;
            i = Math.sin(r) * o, s = (1 - Math.cos(r)) * o * o
        }
        Bn(e, i, s, t)
    }

    function Bn(e, t, n, r) {
        var i = e.x * e.x,
            s = e.y * e.y,
            o = e.z * e.z;
        r[0] = 1 - n * (s + o), r[4] = 1 - n * (i + o), r[8] = 1 - n * (i + s);
        var u = t * e.z,
            a = n * e.x * e.y;
        r[1] = a - u, r[3] = a + u, u = t * e.y, a = n * e.x * e.z, r[2] = a + u, r[6] = a - u, u = t * e.x, a = n * e.y * e.z, r[5] = a - u, r[7] = a + u
    }

    function jn(e, t, n, r) {
        t *= ht, n *= ht, r *= ht;
        var i = Math.cos(t),
            s = Math.sin(t),
            o = Math.cos(n),
            u = Math.sin(n),
            a = Math.cos(r),
            f = Math.sin(r),
            l = i * u,
            c = s * u;
        e[0] = o * a, e[1] = l * a + i * f, e[2] = -c * a + s * f, e[3] = -o * f, e[4] = -l * f + i * a, e[5] = c * f + s * a, e[6] = u, e[7] = -s * o, e[8] = i * o
    }

    function Fn(e, t) {
        var n = e[0] + e[4] + e[8],
            r;
        n > 0 ? (r = Math[j](1 + n) * 2, t.x = (e[5] - e[7]) / r, t.y = (e[6] - e[2]) / r, t.z = (e[1] - e[3]) / r, t.w = .25 * r) : e[0] > e[4] && e[0] > e[8] ? (r = Math[j](1 + e[0] - e[4] - e[8]) * 2, t.x = .25 * r, t.y = (e[3] + e[1]) / r, t.z = (e[6] + e[2]) / r, t.w = (e[5] - e[7]) / r) : e[4] > e[8] ? (r = Math[j](1 + e[4] - e[0] - e[8]) * 2, t.x = (e[3] + e[1]) / r, t.y = .25 * r, t.z = (e[7] + e[5]) / r, t.w = (e[6] - e[2]) / r) : (r = Math[j](1 + e[8] - e[0] - e[4]) * 2, t.x = (e[6] + e[2]) / r, t.y = (e[7] + e[5]) / r, t.z = .25 * r, t.w = (e[1] - e[3]) / r)
    }

    function $n(e) {
        if (Gn) {
            var t = Xt();
            t != Un && (Un = t, jn(Wn, 0, 0, -t), jn(zn, -90, 0, +t));
            var n;
            if (J <= 1 || J == 3) n = jr();
            else {
                var r = W[d],
                    i = (r - In) / 1e3,
                    s = i;
                J == 2 ? s += 2 / 60 : J == 6 ? s += 1 / 60 : J == 7 && (s += 2 / 60), n = Rr(s)
            }
            Sn(Wn, n, Vn), Sn(Vn, zn, Xn), Fn(Xn, e)
        }
    }

    function Qn(e) {
        if (!Y) return;
        var t = W[d],
            i = t - Kn;
        Kn = t, i > 5e3 && (_t(), i = .16), st++;
        if (st < ot) return;
        Or == n && (Or = s, Mr());
        var o = 0,
            u = 9.81,
            a = 0,
            f = e[g];
        f && (o = f.x, u = f.y, a = f.z, o == r && (o = 0), u == r && (u = 9.81), a == r && (a = 0));
        var l = e.acceleration;
        if (l) {
            var c = l.x,
                h = l.y,
                p = l.z;
            c == r && (c = 0), h == r && (h = 0), p == r && (p = 0), o -= c, u -= h, a -= p
        }
        if (X.ios || X.ie) o *= -1, u *= -1, a *= -1;
        var v = 0,
            m = 0,
            y = 0,
            b = e.rotationRate;
        b && (v = b.alpha, m = b.beta, y = b.gamma, v == r && (v = 0), m == r && (m = 0), y == r && (y = 0));
        if (X.ios || X.firefox || X.ie) {
            v *= ht, m *= ht, y *= ht;
            if (X.ie) {
                var w = v,
                    E = m,
                    S = y;
                v = E, m = S, y = w
            }
        }
        if (tt) {
            var x = Jn(v, m, y, t);
            v = x.rx, m = x.ry, y = x.rz
        }
        en(qn, o, u, a), Pr(qn, i), In = t, en(Rn, v, m, y), Br(Rn, t);
        if (J <= 3 || J == 5) Vt.q.x = $t.q.x, Vt.q.y = $t.q.y, Vt.q.z = $t.q.z, Vt.q.w = $t.q.w, Vt.t = $t.t, $n($t.q), $t.t = t
    }

    function Mr() {
        pn(lr), pn(cr), hn(pr), dn(pr, Cr), hn(hr), dn(hr, 1), hn(gr), dn(gr, kr), hn(vr), hn(dr), hn(mr), nn(ir), nn(nr), nn(tr), nn(rr), nn(er), en(Zn, 0, 0, Lr), Gn = n
    }

    function _r(e, t) {
        xn(e, Zn, tr), Dn(tr, nr, Nr), Hn(Nr, t)
    }

    function Dr() {
        mn(cr, xr), Sn(pr, xr, Tr), Sn(cr, Tr, pr), pn(cr)
    }

    function Pr(e, t) {
        tn(nr, e);
        if (Gn) {
            _r(lr, ir), t < 5 && (t = 5);
            var n = 1e3 / 60 / t,
                r = Ar * n,
                i = 1 / Ar,
                o = sr;
            for (var u = 0; u < 3; u++) nn(o), rn(o, u, i), Pn(o, yr), Sn(yr, lr, br), _r(br, or), an(ir, or, ur), un(ur, r), gn(dr, u, ur);
            mn(dr, wr), Sn(pr, wr, Er), Sn(dr, Er, Sr), Tn(Sr, gr, vr), bn(vr, wr), mn(dr, Er), Sn(Er, wr, Sr), Sn(pr, Sr, mr), xn(mr, ir, er), Sn(mr, dr, wr), pn(Er), wn(Er, wr), Sn(Er, pr, wr), yn(pr, wr), Pn(er, cr), Sn(cr, lr, lr), Dr()
        } else Dn(Zn, nr, lr), Gn = s
    }

    function Br(e, t) {
        if (Hr != 0) {
            var n = (t - Hr) / 1e3;
            n > 1 && (n = 1), tn(rr, e), un(rr, -n), Pn(rr, cr), yn(ar, lr), Sn(cr, lr, ar), yn(lr, ar), Dr(), yn(fr, hr), vn(fr, n * n), En(pr, fr)
        }
        Hr = t, tn(Yn, e)
    }

    function jr() {
        return lr
    }

    function Rr(e) {
        var t = Fr;
        tn(t, Yn), un(t, -e);
        var n = Ir;
        Pn(t, n);
        var r = qr;
        return Sn(n, lr, r), r
    }
    var e = "registerattribute",
        t = "removeEventListener",
        n = !1,
        r = null,
        i = "deviceorientation",
        s = !0,
        o = "addEventListener",
        u = "devicemotion",
        a = "onunavailable",
        f = "continuousupdates",
        l = "browser",
        c = "events",
        h = "control",
        p = "view",
        d = "timertick",
        v = "loadwhilemoving",
        m = "toLowerCase",
        g = "accelerationIncludingGravity",
        y = "hlookat",
        b = "indexOf",
        w = "display",
        E = "atan2",
        S = "limitview",
        x = "horizontaloffset",
        T = "YXZ",
        N = "camroll",
        C = "disablegyro",
        k = "vlookat",
        L = "layer",
        A = "onavailable",
        O = "orientation",
        M = "enabled",
        _ = "ondisable",
        D = "full",
        P = "onenable",
        H = "touchstart",
        B = "off",
        j = "sqrt",
        F = "touchmove",
        I = "screentosphere",
        q = "changedTouches",
        R = "touchend",
        U = this,
        z = document,
        W = r,
        X = r,
        V = r,
        $ = 1,
        J = 1,
        K = n,
        Q = 2,
        G = s,
        Y = n,
        Z = n,
        et = 0,
        tt = n,
        nt = .5,
        rt = n,
        it = 0,
        st = 0,
        ot = 6,
        ut = 0,
        at = 0,
        ft = 0,
        lt = 0,
        ct = r,
        ht = Math.PI / 180,
        pt = 180 / Math.PI;
    U.registerplugin = function(t, n, i) {
        W = t, V = i;
        if (W.version < "1.19" || W.build < "2015-07-09") {
            W.trace(3, "gyro2 plugin - too old krpano version (min. 1.19)");
            return
        }
        X = W.device, V[e](M, K, function(e) {
            K = dt(e), K ? Tt() : Nt()
        }, function() {
            return K
        }), V[e]("sensor", $, function(e) {
            $ = parseInt(e) & 1
        }, function() {
            return $
        }), V[e]("sensor_mode", J, function(e) {
            var t = parseInt(e);
            t >= 0 && t <= 7 && (J = t), st = 0
        }, function() {
            return J
        }), V[e]("touch_mode", "" + Q, wt, Et), V[e](N, G, function(e) {
            G = dt(e)
        }, function() {
            return G
        }), V[e]("friction", "" + et, function(e) {
            et = ("" + e)[m]() == "auto" ? -1 : Math.max(Math.min(Number(e), .99), 0), isNaN(et) && (et = 0), Qt = 1
        }, function() {
            return et == -1 ? "auto" : "" + et
        }), V[e]("autocalibration", tt, function(e) {
            tt = dt(e)
        }, function() {
            return tt
        }), V[e]("softstart", nt, function(e) {
            nt = parseFloat(e), isNaN(nt) && (nt = .5)
        }, function() {
            return nt
        }), V[e]("isavailable", Z, function(e) {}, function() {
            return Z
        }), V[e]("available", Z, function(e) {}, function() {
            return Z
        }), V[e](A, r), V[e](a, r), V[e](P, r), V[e](_, r), V.resetsensor = Ct, gt()
    }, U.unloadplugin = function() {
        window[t](i, bt, n), window[t](u, bt, n), Nt(), V = r, X = r, W = r
    };
    var xt = 0,
        kt = -1,
        At = function() {
            var e = r;
            return function(t) {
                var n = 0;
                return e == r ? e = new Dt(t.x, t.y, t.z, t.w) : (n = Math[j]((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y) + (t.z - e.z) * (t.z - e.z) + (t.w - e.w) * (t.w - e.w)), e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, isNaN(n) && (n = 0)), n
            }
        }(),
        Ot = r,
        Vt = {
            q: new Dt(0, 0, 0, 1),
            t: 0
        },
        $t = {
            q: new Dt(0, 0, 0, 1),
            t: 0
        },
        Jt = new Dt(0, 0, 0, 1),
        Kt = new Dt(0, 0, 0, 1),
        Qt = 1,
        Gt = r,
        Nn = new Zt,
        Cn = new Zt,
        kn = new Zt,
        Ln = new Zt,
        An = new Zt,
        On = cn(),
        Mn = cn(),
        _n = new Zt,
        Hn = function() {
            var e = new Zt;
            return function(t, n) {
                var r = (t[0] + t[4] + t[8] - 1) * .5;
                en(n, (t[7] - t[5]) / 2, (t[2] - t[6]) / 2, (t[3] - t[1]) / 2);
                var i = sn(n);
                if (r > Math.SQRT1_2) i > 0 && un(n, Math.asin(i) / i);
                else if (r > -Math.SQRT1_2) {
                    var s = Math.acos(r);
                    un(n, s / i)
                } else {
                    var s = Math.PI - Math.asin(i),
                        o = t[0] - r,
                        u = t[4] - r,
                        a = t[8] - r,
                        f = e;
                    o * o > u * u && o * o > a * a ? en(f, o, (t[3] + t[1]) / 2, (t[2] + t[6]) / 2) : u * u > a * a ? en(f, (t[3] + t[1]) / 2, u, (t[7] + t[5]) / 2) : en(f, (t[2] + t[6]) / 2, (t[7] + t[5]) / 2, a), ln(f, n) < 0 && un(f, -1), on(f), un(f, s), tn(n, f)
                }
            }
        }(),
        In = 0,
        qn = new Zt,
        Rn = new Zt,
        Un = r,
        zn = cn(),
        Wn = cn(),
        Xn = cn(),
        Vn = cn(),
        Jn = function() {
            var e = {
                    rx: 0,
                    ry: 0,
                    rz: 0
                },
                t = 0,
                n = 0,
                r = 0,
                i = 0,
                s = 0,
                o = 0,
                u = 0,
                a = 0,
                f = 0,
                l = 0,
                c = 1,
                h = 0,
                p = 0,
                d = 0,
                v = .03;
            return function(m, g, y, b) {
                var w = e,
                    E = m - t,
                    S = g - n,
                    x = y - r,
                    T = b - i;
                t = m, n = g, r = y, i = b;
                var N = Math[j](E * E + S * S + x * x);
                if (T > 500) return s = 0, w;
                if (s == 0) return s = T, o = N, w;
                s = s * .95 + .05 * T;
                var C = Math.min(15 * s / 1e3, .5);
                return o = o * (1 - C) + C * N, o < v ? (u++, a += m, f += g, l += y, u > 19 && (h = h * (1 - c) + c * (a / u), p = p * (1 - c) + c * (f / u), d = d * (1 - c) + c * (l / u), c > .5 && (c *= .9), o = 10, v *= .5)) : (u = 1, a = m, f = g, l = y), w.rx = m - h, w.ry = g - p, w.rz = y - d, w
            }
        }(),
        Kn = 0,
        Gn = n,
        Yn = new Zt,
        Zn = new Zt,
        er = new Zt,
        tr = new Zt,
        nr = new Zt,
        rr = new Zt,
        ir = new Zt,
        sr = new Zt,
        or = new Zt,
        ur = new Zt,
        ar = cn(),
        fr = cn(),
        lr = cn(),
        cr = cn(),
        hr = cn(),
        pr = cn(),
        dr = cn(),
        vr = cn(),
        mr = cn(),
        gr = cn(),
        yr = cn(),
        br = cn(),
        wr = cn(),
        Er = cn(),
        Sr = cn(),
        xr = cn(),
        Tr = cn(),
        Nr = cn(),
        Cr = 20,
        kr = .5,
        Lr = 9.81,
        Ar = 1e7,
        Or = n,
        Hr = 0,
        Fr = new Zt,
        Ir = cn(),
        qr = cn()
};