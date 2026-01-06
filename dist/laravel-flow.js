var Zr = Array.isArray, Ol = Array.prototype.indexOf, Xr = Array.from, Rl = Object.defineProperty, Dt = Object.getOwnPropertyDescriptor, Cs = Object.getOwnPropertyDescriptors, Ns = Object.prototype, Hl = Array.prototype, Wr = Object.getPrototypeOf, ki = Object.isExtensible;
function Tn(e) {
  return typeof e == "function";
}
const Lt = () => {
};
function Ll(e) {
  return e();
}
function So(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ps() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Ne(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function Jn(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Ee = 2, Wo = 4, qr = 8, Ms = 1 << 24, St = 16, kt = 32, Vt = 64, Gr = 128, tt = 512, Se = 1024, Fe = 2048, ct = 4096, Be = 8192, _t = 16384, qo = 32768, Rt = 65536, Ci = 1 << 17, As = 1 << 18, ln = 1 << 19, Ts = 1 << 20, mt = 1 << 25, Jt = 32768, ko = 1 << 21, Go = 1 << 22, It = 1 << 23, at = /* @__PURE__ */ Symbol("$state"), Ds = /* @__PURE__ */ Symbol("legacy props"), Vl = /* @__PURE__ */ Symbol(""), gn = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Uo(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Bl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Fl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Kl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Yl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Zl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Wl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ql() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ul() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const jl = 1, Jl = 2, Is = 4, Ql = 8, $l = 16, ec = 1, tc = 2, nc = 4, rc = 8, oc = 16, zs = 1, ic = 2, xe = /* @__PURE__ */ Symbol(), sc = "http://www.w3.org/1999/xhtml", ac = "@attach";
function lc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function cc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Os(e) {
  return e === this.v;
}
function Rs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Hs(e) {
  return !Rs(e, this.v);
}
let Pn = !1;
function uc() {
  Pn = !0;
}
const dc = [];
function Ls(e, t = !1, n = !1) {
  return br(e, /* @__PURE__ */ new Map(), "", dc, null, n);
}
function br(e, t, n, r, o = null, i = !1) {
  if (typeof e == "object" && e !== null) {
    var s = t.get(e);
    if (s !== void 0) return s;
    if (e instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(e)
    );
    if (e instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(e)
    );
    if (Zr(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var c = e[l];
        l in e && (a[l] = br(c, t, n, r, null, i));
      }
      return a;
    }
    if (Wr(e) === Ns) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = br(
          // @ts-expect-error
          e[d],
          t,
          n,
          r,
          null,
          i
        );
      return a;
    }
    if (e instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(e)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    e.toJSON == "function" && !i)
      return br(
        /** @type {T & { toJSON(): any } } */
        e.toJSON(),
        t,
        n,
        r,
        // Associate the instance with the toJSON clone
        e
      );
  }
  if (e instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      e
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(e)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      e
    );
  }
}
let ge = null;
function wn(e) {
  ge = e;
}
function jo(e) {
  return (
    /** @type {T} */
    Qo().get(e)
  );
}
function Jo(e, t) {
  return Qo().set(e, t), t;
}
function fc(e) {
  return Qo().has(e);
}
function te(e, t = !1, n) {
  ge = {
    p: ge,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Pn && !t ? { s: null, u: null, $: [] } : null
  };
}
function ne(e) {
  var t = (
    /** @type {ComponentContext} */
    ge
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ta(r);
  }
  return t.i = !0, ge = t.p, /** @type {T} */
  {};
}
function Qn() {
  return !Pn || ge !== null && ge.l === null;
}
function Qo(e) {
  return ge === null && Uo(), ge.c ??= new Map(hc(ge) || void 0);
}
function hc(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let Xt = [];
function Vs() {
  var e = Xt;
  Xt = [], So(e);
}
function cn(e) {
  if (Xt.length === 0 && !Ln) {
    var t = Xt;
    queueMicrotask(() => {
      t === Xt && Vs();
    });
  }
  Xt.push(e);
}
function gc() {
  for (; Xt.length > 0; )
    Vs();
}
function Bs(e) {
  var t = ue;
  if (t === null)
    return se.f |= It, e;
  if ((t.f & qo) === 0) {
    if ((t.f & Gr) === 0)
      throw e;
    t.b.error(e);
  } else
    _n(e, t);
}
function _n(e, t) {
  for (; t !== null; ) {
    if ((t.f & Gr) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const fr = /* @__PURE__ */ new Set();
let de = null, xr = null, We = null, Xe = [], Ur = null, Co = !1, Ln = !1;
class $e {
  committed = !1;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #r = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #l = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #o = /* @__PURE__ */ new Set();
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#r > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    Xe = [], xr = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (xr = this, de = null, Ni(n.render_effects), Ni(n.effects), xr = null, this.#l?.resolve()), We = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(t, n) {
    t.f ^= Se;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (kt | Vt)) !== 0, s = i && (o & Se) !== 0, a = s || (o & Be) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Gr) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Se : (o & Wo) !== 0 ? n.effects.push(r) : or(r) && ((r.f & St) !== 0 && this.#i.add(r), Yn(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var c = r.parent;
      for (r = r.next; r === null && c !== null; )
        c === n.effect && (this.#a(n.effects), this.#a(n.render_effects), n = /** @type {EffectTarget} */
        n.parent), r = c.next, c = c.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(t) {
    for (const n of t)
      (n.f & Fe) !== 0 ? this.#i.add(n) : (n.f & ct) !== 0 && this.#o.add(n), this.#c(n.deps), Ce(n, Se);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & Ee) === 0 || (n.f & Jt) === 0 || (n.f ^= Jt, this.#c(
          /** @type {Derived} */
          n.deps
        ));
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & It) === 0 && (this.current.set(t, t.v), We?.set(t, t.v));
  }
  activate() {
    de = this, this.apply();
  }
  deactivate() {
    de === this && (de = null, We = null);
  }
  flush() {
    if (this.activate(), Xe.length > 0) {
      if (Fs(), de !== null && de !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#t) t(this);
    this.#t.clear();
  }
  #u() {
    if (this.#r === 0) {
      for (const t of this.#e) t();
      this.#e.clear();
    }
    this.#n === 0 && this.#d();
  }
  #d() {
    if (fr.size > 1) {
      this.previous.clear();
      var t = We, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of fr) {
        if (i === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [l, c] of this.current) {
          if (i.current.has(l))
            if (n && c !== i.current.get(l))
              i.current.set(l, c);
            else
              continue;
          s.push(l);
        }
        if (s.length === 0)
          continue;
        const a = [...i.current.keys()].filter((l) => !this.current.has(l));
        if (a.length > 0) {
          var o = Xe;
          Xe = [];
          const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const d of s)
            Ks(d, a, l, c);
          if (Xe.length > 0) {
            de = i, i.apply();
            for (const d of Xe)
              i.#s(d, r);
            i.deactivate();
          }
          Xe = o;
        }
      }
      de = null, We = t;
    }
    this.committed = !0, fr.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#n += 1, t && (this.#r += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#n -= 1, t && (this.#r -= 1), this.revive();
  }
  revive() {
    for (const t of this.#i)
      this.#o.delete(t), Ce(t, Fe), Qt(t);
    for (const t of this.#o)
      Ce(t, ct), Qt(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#e.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#t.add(t);
  }
  settled() {
    return (this.#l ??= Ps()).promise;
  }
  static ensure() {
    if (de === null) {
      const t = de = new $e();
      fr.add(de), Ln || $e.enqueue(() => {
        de === t && t.flush();
      });
    }
    return de;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    cn(t);
  }
  apply() {
  }
}
function vc(e) {
  var t = Ln;
  Ln = !0;
  try {
    for (var n; ; ) {
      if (gc(), Xe.length === 0 && (de?.flush(), Xe.length === 0))
        return Ur = null, /** @type {T} */
        n;
      Fs();
    }
  } finally {
    Ln = t;
  }
}
function Fs() {
  var e = Gt;
  Co = !0;
  var t = null;
  try {
    var n = 0;
    for (Mr(!0); Xe.length > 0; ) {
      var r = $e.ensure();
      if (n++ > 1e3) {
        var o, i;
        pc();
      }
      r.process(Xe), zt.clear();
    }
  } finally {
    Co = !1, Mr(e), Ur = null;
  }
}
function pc() {
  try {
    Zl();
  } catch (e) {
    _n(e, Ur);
  }
}
let vt = null;
function Ni(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (_t | Be)) === 0 && or(r) && (vt = /* @__PURE__ */ new Set(), Yn(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? la(r) : r.fn = null), vt?.size > 0)) {
        zt.clear();
        for (const o of vt) {
          if ((o.f & (_t | Be)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            vt.has(s) && (vt.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (_t | Be)) === 0 && Yn(l);
          }
        }
        vt.clear();
      }
    }
    vt = null;
  }
}
function Ks(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & Ee) !== 0 ? Ks(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Go | St)) !== 0 && (i & Fe) === 0 && Ys(o, t, r) && (Ce(o, Fe), Qt(
        /** @type {Effect} */
        o
      ));
    }
}
function Ys(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & Ee) !== 0 && Ys(
        /** @type {Derived} */
        o,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          o,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Qt(e) {
  for (var t = Ur = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Co && t === ue && (n & St) !== 0 && (n & As) === 0)
      return;
    if ((n & (Vt | kt)) !== 0) {
      if ((n & Se) === 0) return;
      t.f ^= Se;
    }
  }
  Xe.push(t);
}
function Zs(e) {
  let t = 0, n = $t(0), r;
  return () => {
    Fn() && (u(n), nr(() => (t === 0 && (r = Oe(() => e(() => Vn(n)))), t += 1, () => {
      cn(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Vn(n));
      });
    })));
  };
}
var mc = Rt | ln | Gr;
function yc(e, t, n) {
  new wc(e, t, n);
}
class wc {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #i;
  /** @type {Effect | null} */
  #o = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {Effect | null} */
  #a = null;
  /** @type {DocumentFragment | null} */
  #c = null;
  /** @type {TemplateNode | null} */
  #u = null;
  #d = 0;
  #f = 0;
  #g = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #h = null;
  #w = Zs(() => (this.#h = $t(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    ue.b, this.#e = !!this.#r.pending, this.#i = rr(() => {
      ue.b = this;
      {
        var o = this.#m();
        try {
          this.#o = Ie(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#e = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, mc);
  }
  #_() {
    try {
      this.#o = Ie(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #b() {
    const t = this.#r.pending;
    t && (this.#s = Ie(() => t(this.#t)), $e.enqueue(() => {
      var n = this.#m();
      this.#o = this.#v(() => ($e.ensure(), Ie(() => this.#l(n)))), this.#f > 0 ? this.#p() : (qt(
        /** @type {Effect} */
        this.#s,
        () => {
          this.#s = null;
        }
      ), this.#e = !1);
    }));
  }
  #m() {
    var t = this.#t;
    return this.#e && (this.#u = bt(), this.#t.before(this.#u), t = this.#u), t;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#e || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #v(t) {
    var n = ue, r = se, o = ge;
    ut(this.#i), ze(this.#i), wn(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return Bs(i), null;
    } finally {
      ut(n), ze(r), wn(o);
    }
  }
  #p() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#o !== null && (this.#c = document.createDocumentFragment(), this.#c.append(
      /** @type {TemplateNode} */
      this.#u
    ), da(this.#o, this.#c)), this.#s === null && (this.#s = Ie(() => t(this.#t)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #y(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#y(t);
      return;
    }
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#s && qt(this.#s, () => {
      this.#s = null;
    }), this.#c && (this.#t.before(this.#c), this.#c = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#y(t), this.#d += t, this.#h && bn(this.#h, this.#d);
  }
  get_effect_pending() {
    return this.#w(), u(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#g || !n && !r)
      throw t;
    this.#o && (_e(this.#o), this.#o = null), this.#s && (_e(this.#s), this.#s = null), this.#a && (_e(this.#a), this.#a = null);
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        cc();
        return;
      }
      o = !0, i && Ul(), $e.ensure(), this.#d = 0, this.#a !== null && qt(this.#a, () => {
        this.#a = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#v(() => (this.#g = !1, Ie(() => this.#l(this.#t)))), this.#f > 0 ? this.#p() : this.#e = !1;
    };
    var a = se;
    try {
      ze(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      _n(l, this.#i && this.#i.parent);
    } finally {
      ze(a);
    }
    r && cn(() => {
      this.#a = this.#v(() => {
        $e.ensure(), this.#g = !0;
        try {
          return Ie(() => {
            r(
              this.#t,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return _n(
            l,
            /** @type {Effect} */
            this.#i.parent
          ), null;
        } finally {
          this.#g = !1;
        }
      });
    });
  }
}
function Xs(e, t, n, r) {
  const o = Qn() ? $n : $o;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = de, s = (
    /** @type {Effect} */
    ue
  ), a = _c();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ bc(c))).then((c) => {
      a();
      try {
        r([...t.map(o), ...c]);
      } catch (d) {
        (s.f & _t) === 0 && _n(d, s);
      }
      i?.deactivate(), Pr();
    }).catch((c) => {
      _n(c, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Pr();
    }
  }) : l();
}
function _c() {
  var e = ue, t = se, n = ge, r = de;
  return function(i = !0) {
    ut(e), ze(t), wn(n), i && r?.activate();
  };
}
function Pr() {
  ut(null), ze(null), wn(null);
}
// @__NO_SIDE_EFFECTS__
function $n(e) {
  var t = Ee | Fe, n = se !== null && (se.f & Ee) !== 0 ? (
    /** @type {Derived} */
    se
  ) : null;
  return ue !== null && (ue.f |= ln), {
    ctx: ge,
    deps: null,
    effects: null,
    equals: Os,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      xe
    ),
    wv: 0,
    parent: n ?? ue,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function bc(e, t) {
  let n = (
    /** @type {Effect | null} */
    ue
  );
  n === null && Bl();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = $t(
    /** @type {V} */
    xe
  ), s = !se, a = /* @__PURE__ */ new Map();
  return Ic(() => {
    var l = Ps();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        c === de && c.committed && c.deactivate(), Pr();
      });
    } catch (f) {
      l.reject(f), Pr();
    }
    var c = (
      /** @type {Batch} */
      de
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), c.increment(d), a.get(c)?.reject(gn), a.delete(c), a.set(c, l);
    }
    const h = (f, g = void 0) => {
      if (c.activate(), g)
        g !== gn && (i.f |= It, bn(i, g));
      else {
        (i.f & It) !== 0 && (i.f ^= It), bn(i, f);
        for (const [v, _] of a) {
          if (a.delete(v), v === c) break;
          _.reject(gn);
        }
      }
      s && (r.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), ti(() => {
    for (const l of a.values())
      l.reject(gn);
  }), new Promise((l) => {
    function c(d) {
      function h() {
        d === o ? l(i) : c(o);
      }
      d.then(h, h);
    }
    c(o);
  });
}
// @__NO_SIDE_EFFECTS__
function y(e) {
  const t = /* @__PURE__ */ $n(e);
  return fa(t), t;
}
// @__NO_SIDE_EFFECTS__
function $o(e) {
  const t = /* @__PURE__ */ $n(e);
  return t.equals = Hs, t;
}
function Ws(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      _e(
        /** @type {Effect} */
        t[n]
      );
  }
}
function xc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ee) === 0)
      return (t.f & _t) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function ei(e) {
  var t, n = ue;
  ut(xc(e));
  try {
    e.f &= ~Jt, Ws(e), t = pa(e);
  } finally {
    ut(n);
  }
  return t;
}
function qs(e) {
  var t = ei(e);
  if (e.equals(t) || (de?.is_fork || (e.v = t), e.wv = ga()), !un)
    if (We !== null)
      (Fn() || de?.is_fork) && We.set(e, t);
    else {
      var n = (e.f & tt) === 0 ? ct : Se;
      Ce(e, n);
    }
}
let No = /* @__PURE__ */ new Set();
const zt = /* @__PURE__ */ new Map();
let Gs = !1;
function $t(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Os,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  const n = $t(e);
  return fa(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ec(e, t = !1, n = !0) {
  const r = $t(e);
  return t || (r.equals = Hs), Pn && n && ge !== null && ge.l !== null && (ge.l.s ??= []).push(r), r;
}
function O(e, t, n = !1) {
  se !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!st || (se.f & Ci) !== 0) && Qn() && (se.f & (Ee | St | Go | Ci)) !== 0 && !xt?.includes(e) && Gl();
  let r = n ? it(t) : t;
  return bn(e, r);
}
function bn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    un ? zt.set(e, t) : zt.set(e, n), e.v = t;
    var r = $e.ensure();
    r.capture(e, n), (e.f & Ee) !== 0 && ((e.f & Fe) !== 0 && ei(
      /** @type {Derived} */
      e
    ), Ce(e, (e.f & tt) !== 0 ? Se : ct)), e.wv = ga(), Us(e, Fe), Qn() && ue !== null && (ue.f & Se) !== 0 && (ue.f & (kt | Vt)) === 0 && (Ze === null ? Oc([e]) : Ze.push(e)), !r.is_fork && No.size > 0 && !Gs && Sc();
  }
  return t;
}
function Sc() {
  Gs = !1;
  var e = Gt;
  Mr(!0);
  const t = Array.from(No);
  try {
    for (const n of t)
      (n.f & Se) !== 0 && Ce(n, ct), or(n) && Yn(n);
  } finally {
    Mr(e);
  }
  No.clear();
}
function Vn(e) {
  O(e, e.v + 1);
}
function Us(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Qn(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === ue)) {
        var l = (a & Fe) === 0;
        if (l && Ce(s, t), (a & Ee) !== 0) {
          var c = (
            /** @type {Derived} */
            s
          );
          We?.delete(c), (a & Jt) === 0 && (a & tt && (s.f |= Jt), Us(c, ct));
        } else l && ((a & St) !== 0 && vt !== null && vt.add(
          /** @type {Effect} */
          s
        ), Qt(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function it(e) {
  if (typeof e != "object" || e === null || at in e)
    return e;
  const t = Wr(e);
  if (t !== Ns && t !== Hl)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Zr(e), o = /* @__PURE__ */ ie(0), i = Ut, s = (a) => {
    if (Ut === i)
      return a();
    var l = se, c = Ut;
    ze(null), Ti(i);
    var d = a();
    return ze(l), Ti(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ ie(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Wl();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ ie(c.value);
          return n.set(l, h), h;
        }) : O(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ ie(xe));
            n.set(l, d), Vn(o);
          }
        } else
          O(c, xe), Vn(o);
        return !0;
      },
      get(a, l, c) {
        if (l === at)
          return e;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || Dt(a, l)?.writable) && (d = s(() => {
          var g = it(h ? a[l] : xe), v = /* @__PURE__ */ ie(g);
          return v;
        }), n.set(l, d)), d !== void 0) {
          var f = u(d);
          return f === xe ? void 0 : f;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = u(d));
        } else if (c === void 0) {
          var h = n.get(l), f = h?.v;
          if (h !== void 0 && f !== xe)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return c;
      },
      has(a, l) {
        if (l === at)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== xe || Reflect.has(a, l);
        if (c !== void 0 || ue !== null && (!d || Dt(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? it(a[l]) : xe, g = /* @__PURE__ */ ie(f);
            return g;
          }), n.set(l, c));
          var h = u(c);
          if (h === xe)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var h = n.get(l), f = l in a;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var v = n.get(g + "");
            v !== void 0 ? O(v, xe) : g in a && (v = s(() => /* @__PURE__ */ ie(xe)), n.set(g + "", v));
          }
        if (h === void 0)
          (!f || Dt(a, l)?.writable) && (h = s(() => /* @__PURE__ */ ie(void 0)), O(h, it(c)), n.set(l, h));
        else {
          f = h.v !== xe;
          var _ = s(() => it(c));
          O(h, _);
        }
        var p = Reflect.getOwnPropertyDescriptor(a, l);
        if (p?.set && p.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), P = Number(l);
            Number.isInteger(P) && P >= b.v && O(b, P + 1);
          }
          Vn(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== xe;
        });
        for (var [c, d] of n)
          d.v !== xe && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        ql();
      }
    }
  );
}
function Pi(e) {
  try {
    if (e !== null && typeof e == "object" && at in e)
      return e[at];
  } catch {
  }
  return e;
}
function kc(e, t) {
  return Object.is(Pi(e), Pi(t));
}
var De, js, Js, Qs;
function Cc() {
  if (De === void 0) {
    De = window, js = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Js = Dt(t, "firstChild").get, Qs = Dt(t, "nextSibling").get, ki(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ki(n) && (n.__t = void 0);
  }
}
function bt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  return (
    /** @type {TemplateNode | null} */
    Js.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return (
    /** @type {TemplateNode | null} */
    Qs.call(e)
  );
}
function q(e, t) {
  return /* @__PURE__ */ Ve(e);
}
function ae(e, t = !1) {
  {
    var n = /* @__PURE__ */ Ve(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ er(n) : n;
  }
}
function j(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ er(r);
  return r;
}
function Nc(e) {
  e.textContent = "";
}
function $s() {
  return !1;
}
function Pc(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, cn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Mi = !1;
function Mc() {
  Mi || (Mi = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function jr(e) {
  var t = se, n = ue;
  ze(null), ut(null);
  try {
    return e();
  } finally {
    ze(t), ut(n);
  }
}
function Ac(e, t, n, r = n) {
  e.addEventListener(t, () => jr(n));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), r(!0);
  } : e.__on_r = () => r(!0), Mc();
}
function ea(e) {
  ue === null && (se === null && Yl(), Kl()), un && Fl();
}
function Tc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ue(e, t, n) {
  var r = ue;
  r !== null && (r.f & Be) !== 0 && (e |= Be);
  var o = {
    ctx: ge,
    deps: null,
    nodes: null,
    f: e | Fe | tt,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Yn(o), o.f |= qo;
    } catch (a) {
      throw _e(o), a;
    }
  else t !== null && Qt(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & ln) === 0 && (i = i.first, (e & St) !== 0 && (e & Rt) !== 0 && i !== null && (i.f |= Rt)), i !== null && (i.parent = r, r !== null && Tc(i, r), se !== null && (se.f & Ee) !== 0 && (e & Vt) === 0)) {
    var s = (
      /** @type {Derived} */
      se
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Fn() {
  return se !== null && !st;
}
function ti(e) {
  const t = Ue(qr, null, !1);
  return Ce(t, Se), t.teardown = e, t;
}
function Ge(e) {
  ea();
  var t = (
    /** @type {Effect} */
    ue.f
  ), n = !se && (t & kt) !== 0 && (t & qo) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ge
    );
    (r.e ??= []).push(e);
  } else
    return ta(e);
}
function ta(e) {
  return Ue(Wo | Ts, e, !1);
}
function na(e) {
  return ea(), Ue(qr | Ts, e, !0);
}
function ra(e) {
  $e.ensure();
  const t = Ue(Vt | ln, e, !0);
  return () => {
    _e(t);
  };
}
function Dc(e) {
  $e.ensure();
  const t = Ue(Vt | ln, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? qt(t, () => {
      _e(t), r(void 0);
    }) : (_e(t), r(void 0));
  });
}
function tr(e) {
  return Ue(Wo, e, !1);
}
function Ic(e) {
  return Ue(Go | ln, e, !0);
}
function nr(e, t = 0) {
  return Ue(qr | t, e, !0);
}
function ce(e, t = [], n = [], r = []) {
  Xs(r, t, n, (o) => {
    Ue(qr, () => e(...o.map(u)), !0);
  });
}
function rr(e, t = 0) {
  var n = Ue(St | t, e, !0);
  return n;
}
function oa(e, t = 0) {
  var n = Ue(Ms | t, e, !0);
  return n;
}
function Ie(e) {
  return Ue(kt | ln, e, !0);
}
function ia(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = un, r = se;
    Ai(!0), ze(null);
    try {
      t.call(null);
    } finally {
      Ai(n), ze(r);
    }
  }
}
function sa(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && jr(() => {
      o.abort(gn);
    });
    var r = n.next;
    (n.f & Vt) !== 0 ? n.parent = null : _e(n, t), n = r;
  }
}
function zc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & kt) === 0 && _e(t), t = n;
  }
}
function _e(e, t = !0) {
  var n = !1;
  (t || (e.f & As) !== 0) && e.nodes !== null && e.nodes.end !== null && (aa(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), sa(e, t && !n), Ar(e, 0), Ce(e, _t);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  ia(e);
  var o = e.parent;
  o !== null && o.first !== null && la(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function aa(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ er(e);
    e.remove(), e = n;
  }
}
function la(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function qt(e, t, n = !0) {
  var r = [];
  ca(e, r, !0);
  var o = () => {
    n && _e(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var s = () => --i || o();
    for (var a of r)
      a.out(s);
  } else
    o();
}
function ca(e, t, n) {
  if ((e.f & Be) === 0) {
    e.f ^= Be;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var o = e.first; o !== null; ) {
      var i = o.next, s = (o.f & Rt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & kt) !== 0 && (e.f & St) !== 0;
      ca(o, t, s ? n : !1), o = i;
    }
  }
}
function ni(e) {
  ua(e, !0);
}
function ua(e, t) {
  if ((e.f & Be) !== 0) {
    e.f ^= Be, (e.f & Se) === 0 && (Ce(e, Fe), Qt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rt) !== 0 || (n.f & kt) !== 0;
      ua(n, o ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || t) && s.in();
  }
}
function da(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var o = n === r ? null : /* @__PURE__ */ er(n);
      t.append(n), n = o;
    }
}
let Gt = !1;
function Mr(e) {
  Gt = e;
}
let un = !1;
function Ai(e) {
  un = e;
}
let se = null, st = !1;
function ze(e) {
  se = e;
}
let ue = null;
function ut(e) {
  ue = e;
}
let xt = null;
function fa(e) {
  se !== null && (xt === null ? xt = [e] : xt.push(e));
}
let Me = null, Le = 0, Ze = null;
function Oc(e) {
  Ze = e;
}
let ha = 1, Kn = 0, Ut = Kn;
function Ti(e) {
  Ut = e;
}
function ga() {
  return ++ha;
}
function or(e) {
  var t = e.f;
  if ((t & Fe) !== 0)
    return !0;
  if (t & Ee && (e.f &= ~Jt), (t & ct) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (or(
          /** @type {Derived} */
          i
        ) && qs(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & tt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    We === null && Ce(e, Se);
  }
  return !1;
}
function va(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !xt?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Ee) !== 0 ? va(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Ce(i, Fe) : (i.f & Se) !== 0 && Ce(i, ct), Qt(
        /** @type {Effect} */
        i
      ));
    }
}
function pa(e) {
  var t = Me, n = Le, r = Ze, o = se, i = xt, s = ge, a = st, l = Ut, c = e.f;
  Me = /** @type {null | Value[]} */
  null, Le = 0, Ze = null, se = (c & (kt | Vt)) === 0 ? e : null, xt = null, wn(e.ctx), st = !1, Ut = ++Kn, e.ac !== null && (jr(() => {
    e.ac.abort(gn);
  }), e.ac = null);
  try {
    e.f |= ko;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps;
    if (Me !== null) {
      var g;
      if (Ar(e, Le), f !== null && Le > 0)
        for (f.length = Le + Me.length, g = 0; g < Me.length; g++)
          f[Le + g] = Me[g];
      else
        e.deps = f = Me;
      if (Fn() && (e.f & tt) !== 0)
        for (g = Le; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Le < f.length && (Ar(e, Le), f.length = Le);
    if (Qn() && Ze !== null && !st && f !== null && (e.f & (Ee | ct | Fe)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Ze.length; g++)
        va(
          Ze[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Kn++, Ze !== null && (r === null ? r = Ze : r.push(.../** @type {Source[]} */
    Ze))), (e.f & It) !== 0 && (e.f ^= It), h;
  } catch (v) {
    return Bs(v);
  } finally {
    e.f ^= ko, Me = t, Le = n, Ze = r, se = o, xt = i, wn(s), st = a, Ut = l;
  }
}
function Rc(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ol.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Ee) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Me === null || !Me.includes(t)) && (Ce(t, ct), (t.f & tt) !== 0 && (t.f ^= tt, t.f &= ~Jt), Ws(
    /** @type {Derived} **/
    t
  ), Ar(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ar(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Rc(e, n[r]);
}
function Yn(e) {
  var t = e.f;
  if ((t & _t) === 0) {
    Ce(e, Se);
    var n = ue, r = Gt;
    ue = e, Gt = !0;
    try {
      (t & (St | Ms)) !== 0 ? zc(e) : sa(e), ia(e);
      var o = pa(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ha;
      var i;
    } finally {
      Gt = r, ue = n;
    }
  }
}
async function Hc() {
  await Promise.resolve(), vc();
}
function u(e) {
  var t = e.f, n = (t & Ee) !== 0;
  if (se !== null && !st) {
    var r = ue !== null && (ue.f & _t) !== 0;
    if (!r && !xt?.includes(e)) {
      var o = se.deps;
      if ((se.f & ko) !== 0)
        e.rv < Kn && (e.rv = Kn, Me === null && o !== null && o[Le] === e ? Le++ : Me === null ? Me = [e] : Me.includes(e) || Me.push(e));
      else {
        (se.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [se] : i.includes(se) || i.push(se);
      }
    }
  }
  if (un) {
    if (zt.has(e))
      return zt.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & Se) === 0 && s.reactions !== null || ya(s)) && (a = ei(s)), zt.set(s, a), a;
    }
  } else n && (!We?.has(e) || de?.is_fork && !Fn()) && (s = /** @type {Derived} */
  e, or(s) && qs(s), Gt && Fn() && (s.f & tt) === 0 && ma(s));
  if (We?.has(e))
    return We.get(e);
  if ((e.f & It) !== 0)
    throw e.v;
  return e.v;
}
function ma(e) {
  if (e.deps !== null) {
    e.f ^= tt;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & Ee) !== 0 && (t.f & tt) === 0 && ma(
        /** @type {Derived} */
        t
      );
  }
}
function ya(e) {
  if (e.v === xe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (zt.has(t) || (t.f & Ee) !== 0 && ya(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Oe(e) {
  var t = st;
  try {
    return st = !0, e();
  } finally {
    st = t;
  }
}
const Lc = -7169;
function Ce(e, t) {
  e.f = e.f & Lc | t;
}
function Vc(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function wa(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (at in e)
      Po(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && at in n && Po(n);
      }
  }
}
function Po(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Po(e[r], t);
      } catch {
      }
    const n = Wr(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Cs(n);
      for (let o in r) {
        const i = r[o].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
function Bc(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Fc = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Kc(e) {
  return Fc.includes(e);
}
const Yc = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Zc(e) {
  return e = e.toLowerCase(), Yc[e] ?? e;
}
const Xc = ["touchstart", "touchmove"];
function Wc(e) {
  return Xc.includes(e);
}
const _a = /* @__PURE__ */ new Set(), Mo = /* @__PURE__ */ new Set();
function ri(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || zn.call(t, i), !i.cancelBubble)
      return jr(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? cn(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ao(e, t, n, r = {}) {
  var o = ri(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function en(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = ri(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ti(() => {
    t.removeEventListener(e, s, i);
  });
}
function Jr(e) {
  for (var t = 0; t < e.length; t++)
    _a.add(e[t]);
  for (var n of Mo)
    n(e);
}
let Di = null;
function zn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Di = e;
  var s = 0, a = Di === e && e.__root;
  if (a) {
    var l = o.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = o.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Rl(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = se, h = ue;
    ze(null), ut(null);
    try {
      for (var f, g = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var _ = i["__" + r];
          _ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && _.call(i, e);
        } catch (p) {
          f ? g.push(p) : f = p;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (f) {
        for (let p of g)
          queueMicrotask(() => {
            throw p;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ze(d), ut(h);
    }
  }
}
function oi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function tn(e, t) {
  var n = (
    /** @type {Effect} */
    ue
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  var n = (t & zs) !== 0, r = (t & ic) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    o === void 0 && (o = oi(i ? e : "<!>" + e), n || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ Ve(o)));
    var s = (
      /** @type {TemplateNode} */
      r || js ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ve(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      tn(a, l);
    } else
      tn(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function qc(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & zs) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        oi(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ve(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Ve(l); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Ve(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Ve(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ve(c)
      ), h = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      tn(d, h);
    } else
      tn(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function pe(e, t) {
  return /* @__PURE__ */ qc(e, t, "svg");
}
function Gc(e = "") {
  {
    var t = bt(e + "");
    return tn(t, t), t;
  }
}
function ye() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = bt();
  return e.append(t, n), tn(t, n), e;
}
function V(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ae(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Uc(e, t) {
  return jc(e, t);
}
const fn = /* @__PURE__ */ new Map();
function jc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Cc();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var v = Wc(g);
        t.addEventListener(g, zn, { passive: v });
        var _ = fn.get(g);
        _ === void 0 ? (document.addEventListener(g, zn, { passive: v }), fn.set(g, 1)) : fn.set(g, _ + 1);
      }
    }
  };
  l(Xr(_a)), Mo.add(l);
  var c = void 0, d = Dc(() => {
    var h = n ?? t.appendChild(bt());
    return yc(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          te({});
          var g = (
            /** @type {ComponentContext} */
            ge
          );
          g.c = i;
        }
        o && (r.$$events = o), c = e(f, r) || {}, i && ne();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, zn);
        var g = (
          /** @type {number} */
          fn.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, zn), fn.delete(f)) : fn.set(f, g);
      }
      Mo.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Jc.set(c, d), c;
}
let Jc = /* @__PURE__ */ new WeakMap();
class ii {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #e = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #n = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #l = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    this.anchor = t, this.#l = n;
  }
  #i = () => {
    var t = (
      /** @type {Batch} */
      de
    );
    if (this.#e.has(t)) {
      var n = (
        /** @type {Key} */
        this.#e.get(t)
      ), r = this.#t.get(n);
      if (r)
        ni(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (_e(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var c = document.createDocumentFragment();
            da(s, c), c.append(bt()), this.#n.set(i, { effect: s, fragment: c });
          } else
            _e(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), qt(s, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (t) => {
    this.#e.delete(t);
    const n = Array.from(this.#e.values());
    for (const [r, o] of this.#n)
      n.includes(r) || (_e(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      de
    ), o = $s();
    if (n && !this.#t.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = bt();
        i.append(s), this.#n.set(t, {
          effect: Ie(() => n(s)),
          fragment: i
        });
      } else
        this.#t.set(
          t,
          Ie(() => n(this.anchor))
        );
    if (this.#e.set(r, t), o) {
      for (const [a, l] of this.#t)
        a === t ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [a, l] of this.#n)
        a === t ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(this.#i), r.ondiscard(this.#o);
    } else
      this.#i();
  }
}
function le(e, t, n = !1) {
  var r = new ii(e), o = n ? Rt : 0;
  function i(s, a) {
    r.ensure(s, a);
  }
  rr(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Qc(e, t) {
  nr(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function To(e, t) {
  return t;
}
function $c(e, t, n) {
  for (var r = [], o = t.length, i, s = t.length, a = 0; a < o; a++) {
    let h = t[a];
    qt(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Do(Xr(i.done)), f.delete(i), f.size === 0 && (e.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var l = r.length === 0 && n !== null;
    if (l) {
      var c = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        c.parentNode
      );
      Nc(d), d.append(c), e.items.clear();
    }
    Do(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function Do(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    _e(e[n], t);
}
var Ii;
function nn(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = (t & Is) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = c.appendChild(bt());
  }
  var d = null, h = /* @__PURE__ */ $o(() => {
    var b = n();
    return Zr(b) ? b : b == null ? [] : Xr(b);
  }), f, g = !0;
  function v() {
    p.fallback = d, eu(p, f, s, t, r), d !== null && (f.length === 0 ? (d.f & mt) === 0 ? ni(d) : (d.f ^= mt, On(d, null, s)) : qt(d, () => {
      d = null;
    }));
  }
  var _ = rr(() => {
    f = /** @type {V[]} */
    u(h);
    for (var b = f.length, P = /* @__PURE__ */ new Set(), N = (
      /** @type {Batch} */
      de
    ), w = $s(), C = 0; C < b; C += 1) {
      var T = f[C], I = r(T, C), k = g ? null : a.get(I);
      k ? (k.v && bn(k.v, T), k.i && bn(k.i, C), w && N.skipped_effects.delete(k.e)) : (k = tu(
        a,
        g ? s : Ii ??= bt(),
        T,
        I,
        C,
        o,
        t,
        n
      ), g || (k.e.f |= mt), a.set(I, k)), P.add(I);
    }
    if (b === 0 && i && !d && (g ? d = Ie(() => i(s)) : (d = Ie(() => i(Ii ??= bt())), d.f |= mt)), !g)
      if (w) {
        for (const [B, Y] of a)
          P.has(B) || N.skipped_effects.add(Y.e);
        N.oncommit(v), N.ondiscard(() => {
        });
      } else
        v();
    u(h);
  }), p = { effect: _, items: a, outrogroups: null, fallback: d };
  g = !1;
}
function eu(e, t, n, r, o) {
  var i = (r & Ql) !== 0, s = t.length, a = e.items, l = e.effect.first, c, d = null, h, f = [], g = [], v, _, p, b;
  if (i)
    for (b = 0; b < s; b += 1)
      v = t[b], _ = o(v, b), p = /** @type {EachItem} */
      a.get(_).e, (p.f & mt) === 0 && (p.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(p));
  for (b = 0; b < s; b += 1) {
    if (v = t[b], _ = o(v, b), p = /** @type {EachItem} */
    a.get(_).e, e.outrogroups !== null)
      for (const Y of e.outrogroups)
        Y.pending.delete(p), Y.done.delete(p);
    if ((p.f & mt) !== 0)
      if (p.f ^= mt, p === l)
        On(p, null, n);
      else {
        var P = d ? d.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), Pt(e, d, p), Pt(e, p, P), On(p, P, n), d = p, f = [], g = [], l = d.next;
        continue;
      }
    if ((p.f & Be) !== 0 && (ni(p), i && (p.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(p))), p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (f.length < g.length) {
          var N = g[0], w;
          d = N.prev;
          var C = f[0], T = f[f.length - 1];
          for (w = 0; w < f.length; w += 1)
            On(f[w], N, n);
          for (w = 0; w < g.length; w += 1)
            c.delete(g[w]);
          Pt(e, C.prev, T.next), Pt(e, d, C), Pt(e, T, N), l = N, d = T, b -= 1, f = [], g = [];
        } else
          c.delete(p), On(p, l, n), Pt(e, p.prev, p.next), Pt(e, p, d === null ? e.effect.first : d.next), Pt(e, d, p), d = p;
        continue;
      }
      for (f = [], g = []; l !== null && l !== p; )
        (c ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = l.next;
      if (l === null)
        continue;
    }
    (p.f & mt) === 0 && f.push(p), d = p, l = p.next;
  }
  if (e.outrogroups !== null) {
    for (const Y of e.outrogroups)
      Y.pending.size === 0 && (Do(Xr(Y.done)), e.outrogroups?.delete(Y));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var I = [];
    if (c !== void 0)
      for (p of c)
        (p.f & Be) === 0 && I.push(p);
    for (; l !== null; )
      (l.f & Be) === 0 && l !== e.fallback && I.push(l), l = l.next;
    var k = I.length;
    if (k > 0) {
      var B = (r & Is) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < k; b += 1)
          I[b].nodes?.a?.measure();
        for (b = 0; b < k; b += 1)
          I[b].nodes?.a?.fix();
      }
      $c(e, I, B);
    }
  }
  i && cn(() => {
    if (h !== void 0)
      for (p of h)
        p.nodes?.a?.apply();
  });
}
function tu(e, t, n, r, o, i, s, a) {
  var l = (s & jl) !== 0 ? (s & $l) === 0 ? /* @__PURE__ */ Ec(n, !1, !1) : $t(n) : null, c = (s & Jl) !== 0 ? $t(o) : null;
  return {
    v: l,
    i: c,
    e: Ie(() => (i(t, l ?? n, c ?? o, a), () => {
      e.delete(r);
    }))
  };
}
function On(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, o = e.nodes.end, i = t && (t.f & mt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ er(r)
      );
      if (i.before(r), r === o)
        return;
      r = s;
    }
}
function Pt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function ba(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  ce(() => {
    var a = (
      /** @type {Effect} */
      ue
    );
    if (s !== (s = t() ?? "") && (a.nodes !== null && (aa(
      a.nodes.start,
      /** @type {TemplateNode} */
      a.nodes.end
    ), a.nodes = null), s !== "")) {
      var l = s + "";
      n ? l = `<svg>${l}</svg>` : r && (l = `<math>${l}</math>`);
      var c = oi(l);
      if ((n || r) && (c = /** @type {Element} */
      /* @__PURE__ */ Ve(c)), tn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ve(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Ve(c); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Ve(c)
          );
      else
        i.before(c);
    }
  });
}
function He(e, t, ...n) {
  var r = new ii(e);
  rr(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Rt);
}
function Qr(e, t, n) {
  var r = new ii(e);
  rr(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Rt);
}
function Pe(e, t, n) {
  tr(() => {
    var r = Oe(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      nr(() => {
        var s = n();
        wa(s), o && Rs(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function nu(e, t) {
  var n = void 0, r;
  oa(() => {
    n !== (n = t()) && (r && (_e(r), r = null), n && (r = Ie(() => {
      tr(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function xa(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = xa(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ru() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = xa(e)) && (r && (r += " "), r += t);
  return r;
}
function Bt(e) {
  return typeof e == "object" ? ru(e) : e ?? "";
}
const zi = [...` 	
\r\f \v\uFEFF`];
function ou(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || zi.includes(r[s - 1])) && (a === r.length || zi.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Oi(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function co(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function iu(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(co)), o && l.push(...Object.keys(o).map(co));
      var c = 0, d = -1;
      const _ = e.length;
      for (var h = 0; h < _; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === _ - 1) {
            if (d !== -1) {
              var g = co(e.substring(c, d).trim());
              if (!l.includes(g)) {
                f !== ";" && h++;
                var v = e.substring(c, h).trim();
                n += " " + v + ";";
              }
            }
            c = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Oi(r)), o && (n += Oi(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function ke(e, t, n, r, o, i) {
  var s = e.__className;
  if (s !== n || s === void 0) {
    var a = ou(n, r, i);
    a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function uo(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Ke(e, t, n, r) {
  var o = e.__style;
  if (o !== t) {
    var i = iu(t, r);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else r && (Array.isArray(r) ? (uo(e, n?.[0], r[0]), uo(e, n?.[1], r[1], "important")) : uo(e, n, r));
  return r;
}
function Io(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Zr(t))
      return lc();
    for (var r of e.options)
      r.selected = t.includes(Ri(r));
    return;
  }
  for (r of e.options) {
    var o = Ri(r);
    if (kc(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function su(e) {
  var t = new MutationObserver(() => {
    Io(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), ti(() => {
    t.disconnect();
  });
}
function Ri(e) {
  return "__value" in e ? e.__value : e.value;
}
const Mt = /* @__PURE__ */ Symbol("class"), pt = /* @__PURE__ */ Symbol("style"), Ea = /* @__PURE__ */ Symbol("is custom element"), Sa = /* @__PURE__ */ Symbol("is html");
function au(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function U(e, t, n, r) {
  var o = ka(e);
  o[t] !== (o[t] = n) && (t === "loading" && (e[Vl] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ca(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function lu(e, t, n, r, o = !1, i = !1) {
  var s = ka(e), a = s[Ea], l = !s[Sa], c = t || {}, d = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = Bt(n.class) : (r || n[Mt]) && (n.class = null), n[pt] && (n.style ??= null);
  var f = Ca(e);
  for (const w in n) {
    let C = n[w];
    if (d && w === "value" && C == null) {
      e.value = e.__value = "", c[w] = C;
      continue;
    }
    if (w === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      ke(e, g, C, r, t?.[Mt], n[Mt]), c[w] = C, c[Mt] = n[Mt];
      continue;
    }
    if (w === "style") {
      Ke(e, C, t?.[pt], n[pt]), c[w] = C, c[pt] = n[pt];
      continue;
    }
    var v = c[w];
    if (!(C === v && !(C === void 0 && e.hasAttribute(w)))) {
      c[w] = C;
      var _ = w[0] + w[1];
      if (_ !== "$$")
        if (_ === "on") {
          const T = {}, I = "$$" + w;
          let k = w.slice(2);
          var p = Kc(k);
          if (Bc(k) && (k = k.slice(0, -7), T.capture = !0), !p && v) {
            if (C != null) continue;
            e.removeEventListener(k, c[I], T), c[I] = null;
          }
          if (C != null)
            if (p)
              e[`__${k}`] = C, Jr([k]);
            else {
              let B = function(Y) {
                c[w].call(this, Y);
              };
              var N = B;
              c[I] = ri(k, e, B, T);
            }
          else p && (e[`__${k}`] = void 0);
        } else if (w === "style")
          U(e, w, C);
        else if (w === "autofocus")
          Pc(
            /** @type {HTMLElement} */
            e,
            !!C
          );
        else if (!a && (w === "__value" || w === "value" && C != null))
          e.value = e.__value = C;
        else if (w === "selected" && d)
          au(
            /** @type {HTMLOptionElement} */
            e,
            C
          );
        else {
          var b = w;
          l || (b = Zc(b));
          var P = b === "defaultValue" || b === "defaultChecked";
          if (C == null && !a && !P)
            if (s[w] = null, b === "value" || b === "checked") {
              let T = (
                /** @type {HTMLInputElement} */
                e
              );
              const I = t === void 0;
              if (b === "value") {
                let k = T.defaultValue;
                T.removeAttribute(b), T.defaultValue = k, T.value = T.__value = I ? k : null;
              } else {
                let k = T.defaultChecked;
                T.removeAttribute(b), T.defaultChecked = k, T.checked = I ? k : !1;
              }
            } else
              e.removeAttribute(w);
          else P || f.includes(b) && (a || typeof C != "string") ? (e[b] = C, b in s && (s[b] = xe)) : typeof C != "function" && U(e, b, C);
        }
    }
  }
  return c;
}
function Ft(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  Xs(o, n, r, (l) => {
    var c = void 0, d = {}, h = e.nodeName === "SELECT", f = !1;
    if (oa(() => {
      var v = t(...l.map(u)), _ = lu(
        e,
        c,
        v,
        i,
        s,
        a
      );
      f && h && "value" in v && Io(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        v[b] || _e(d[b]);
      for (let b of Object.getOwnPropertySymbols(v)) {
        var p = v[b];
        b.description === ac && (!c || p !== c[b]) && (d[b] && _e(d[b]), d[b] = Ie(() => nu(e, () => p))), _[b] = p;
      }
      c = _;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      tr(() => {
        Io(
          g,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), su(g);
      });
    }
    f = !0;
  });
}
function ka(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Ea]: e.nodeName.includes("-"),
      [Sa]: e.namespaceURI === sc
    }
  );
}
var Hi = /* @__PURE__ */ new Map();
function Ca(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Hi.get(t);
  if (n) return n;
  Hi.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Cs(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Wr(o);
  }
  return n;
}
function cu(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Ac(e, "input", async (o) => {
    var i = o ? e.defaultValue : e.value;
    if (i = fo(e) ? ho(i) : i, n(i), de !== null && r.add(de), await Hc(), i !== (i = t())) {
      var s = e.selectionStart, a = e.selectionEnd, l = e.value.length;
      if (e.value = i ?? "", a !== null) {
        var c = e.value.length;
        s === a && a === l && c > l ? (e.selectionStart = c, e.selectionEnd = c) : (e.selectionStart = s, e.selectionEnd = Math.min(a, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Oe(t) == null && e.value && (n(fo(e) ? ho(e.value) : e.value), de !== null && r.add(de)), nr(() => {
    var o = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        xr ?? de
      );
      if (r.has(i))
        return;
    }
    fo(e) && o === ho(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function fo(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function ho(e) {
  return e === "" ? null : +e;
}
class si {
  /** */
  #e = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #t;
  /** @type {ResizeObserverOptions} */
  #n;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    this.#n = t;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = this.#e.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#e.set(t, r), this.#r().observe(t, this.#n), () => {
      var o = this.#e.get(t);
      o.delete(n), o.size === 0 && (this.#e.delete(t), this.#t.unobserve(t));
    };
  }
  #r() {
    return this.#t ?? (this.#t = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          si.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var uu = /* @__PURE__ */ new si({
  box: "border-box"
});
function Li(e, t, n) {
  var r = uu.observe(e, () => n(e[t]));
  tr(() => (Oe(() => n(e[t])), r));
}
function Vi(e, t) {
  return e === t || e?.[at] === t;
}
function ir(e = {}, t, n, r) {
  return tr(() => {
    var o, i;
    return nr(() => {
      o = i, i = [], Oe(() => {
        e !== n(...i) && (t(e, ...i), o && Vi(n(...o), e) && t(null, ...o));
      });
    }), () => {
      cn(() => {
        i && Vi(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function du(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ge
  ), n = t.l.u;
  if (!n) return;
  let r = () => wa(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ $n(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && na(() => {
    Bi(t, r), So(n.b);
  }), Ge(() => {
    const o = Oe(() => n.m.map(Ll));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ge(() => {
    Bi(t, r), So(n.a);
  });
}
function Bi(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let hr = !1;
function fu(e) {
  var t = hr;
  try {
    return hr = !1, [e(), hr];
  } finally {
    hr = t;
  }
}
const hu = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function Kt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    hu
  );
}
const gu = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Tn(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Tn(o) && (o = o());
      const i = Dt(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Tn(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Dt(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === at || t === Ds) return !1;
    for (let n of e.props)
      if (Tn(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Tn(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function At(...e) {
  return new Proxy({ props: e }, gu);
}
function H(e, t, n, r) {
  var o = !Pn || (n & tc) !== 0, i = (n & rc) !== 0, s = (n & oc) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? Oe(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = at in e || Ds in e;
    d = Dt(e, t)?.set ?? (h && t in e ? (N) => e[t] = N : void 0);
  }
  var f, g = !1;
  i ? [f, g] = fu(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && Xl(), d(f)));
  var v;
  if (o ? v = () => {
    var N = (
      /** @type {V} */
      e[t]
    );
    return N === void 0 ? c() : (l = !0, N);
  } : v = () => {
    var N = (
      /** @type {V} */
      e[t]
    );
    return N !== void 0 && (a = /** @type {V} */
    void 0), N === void 0 ? a : N;
  }, o && (n & nc) === 0)
    return v;
  if (d) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(N, w) {
        return arguments.length > 0 ? ((!o || !w || _ || g) && d(w ? v() : N), N) : v();
      })
    );
  }
  var p = !1, b = ((n & ec) !== 0 ? $n : $o)(() => (p = !1, v()));
  i && u(b);
  var P = (
    /** @type {Effect} */
    ue
  );
  return (
    /** @type {() => V} */
    (function(N, w) {
      if (arguments.length > 0) {
        const C = w ? u(b) : o && i ? it(N) : N;
        return O(b, C), p = !0, a !== void 0 && (a = C), N;
      }
      return un && p || (P.f & _t) !== 0 ? b.v : u(b);
    })
  );
}
function vu(e) {
  ge === null && Uo(), Pn && ge.l !== null ? pu(ge).m.push(e) : Ge(() => {
    const t = Oe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $r(e) {
  ge === null && Uo(), vu(() => () => Oe(e));
}
function pu(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const mu = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(mu);
var yu = { value: () => {
} };
function eo() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Er(n);
}
function Er(e) {
  this._ = e;
}
function wu(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Er.prototype = eo.prototype = {
  constructor: Er,
  on: function(e, t) {
    var n = this._, r = wu(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = _u(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Fi(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Fi(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Er(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
  }
};
function _u(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Fi(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = yu, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var zo = "http://www.w3.org/1999/xhtml";
const Ki = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: zo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function to(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ki.hasOwnProperty(t) ? { space: Ki[t], local: e } : e;
}
function bu(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === zo && t.documentElement.namespaceURI === zo ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function xu(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Na(e) {
  var t = to(e);
  return (t.local ? xu : bu)(t);
}
function Eu() {
}
function ai(e) {
  return e == null ? Eu : function() {
    return this.querySelector(e);
  };
}
function Su(e) {
  typeof e != "function" && (e = ai(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new Ye(r, this._parents);
}
function ku(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Cu() {
  return [];
}
function Pa(e) {
  return e == null ? Cu : function() {
    return this.querySelectorAll(e);
  };
}
function Nu(e) {
  return function() {
    return ku(e.apply(this, arguments));
  };
}
function Pu(e) {
  typeof e == "function" ? e = Nu(e) : e = Pa(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new Ye(r, o);
}
function Ma(e) {
  return function() {
    return this.matches(e);
  };
}
function Aa(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Mu = Array.prototype.find;
function Au(e) {
  return function() {
    return Mu.call(this.children, e);
  };
}
function Tu() {
  return this.firstElementChild;
}
function Du(e) {
  return this.select(e == null ? Tu : Au(typeof e == "function" ? e : Aa(e)));
}
var Iu = Array.prototype.filter;
function zu() {
  return Array.from(this.children);
}
function Ou(e) {
  return function() {
    return Iu.call(this.children, e);
  };
}
function Ru(e) {
  return this.selectAll(e == null ? zu : Ou(typeof e == "function" ? e : Aa(e)));
}
function Hu(e) {
  typeof e != "function" && (e = Ma(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Ye(r, this._parents);
}
function Ta(e) {
  return new Array(e.length);
}
function Lu() {
  return new Ye(this._enter || this._groups.map(Ta), this._parents);
}
function Tr(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Tr.prototype = {
  constructor: Tr,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Vu(e) {
  return function() {
    return e;
  };
}
function Bu(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Tr(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Fu(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new Tr(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function Ku(e) {
  return e.__data__;
}
function Yu(e, t) {
  if (!arguments.length) return Array.from(this, Ku);
  var n = t ? Fu : Bu, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Vu(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], h = o[c], f = h.length, g = Zu(e.call(d, d && d.__data__, c, r)), v = g.length, _ = a[c] = new Array(v), p = s[c] = new Array(v), b = l[c] = new Array(f);
    n(d, h, _, p, b, g, t);
    for (var P = 0, N = 0, w, C; P < v; ++P)
      if (w = _[P]) {
        for (P >= N && (N = P + 1); !(C = p[N]) && ++N < v; ) ;
        w._next = C || null;
      }
  }
  return s = new Ye(s, r), s._enter = a, s._exit = l, s;
}
function Zu(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Xu() {
  return new Ye(this._exit || this._groups.map(Ta), this._parents);
}
function Wu(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function qu(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], h = c.length, f = a[l] = new Array(h), g, v = 0; v < h; ++v)
      (g = c[v] || d[v]) && (f[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ye(a, this._parents);
}
function Gu() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Uu(e) {
  e || (e = ju);
  function t(h, f) {
    return h && f ? e(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new Ye(o, this._parents).order();
}
function ju(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ju() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Qu() {
  return Array.from(this);
}
function $u() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function ed() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function td() {
  return !this.node();
}
function nd(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function rd(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function od(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function id(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function sd(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function ad(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function ld(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function cd(e, t) {
  var n = to(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? od : rd : typeof t == "function" ? n.local ? ld : ad : n.local ? sd : id)(n, t));
}
function Da(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function ud(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function dd(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function fd(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function hd(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? ud : typeof t == "function" ? fd : dd)(e, t, n ?? "")) : xn(this.node(), e);
}
function xn(e, t) {
  return e.style.getPropertyValue(t) || Da(e).getComputedStyle(e, null).getPropertyValue(t);
}
function gd(e) {
  return function() {
    delete this[e];
  };
}
function vd(e, t) {
  return function() {
    this[e] = t;
  };
}
function pd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function md(e, t) {
  return arguments.length > 1 ? this.each((t == null ? gd : typeof t == "function" ? pd : vd)(e, t)) : this.node()[e];
}
function Ia(e) {
  return e.trim().split(/^|\s+/);
}
function li(e) {
  return e.classList || new za(e);
}
function za(e) {
  this._node = e, this._names = Ia(e.getAttribute("class") || "");
}
za.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Oa(e, t) {
  for (var n = li(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Ra(e, t) {
  for (var n = li(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function yd(e) {
  return function() {
    Oa(this, e);
  };
}
function wd(e) {
  return function() {
    Ra(this, e);
  };
}
function _d(e, t) {
  return function() {
    (t.apply(this, arguments) ? Oa : Ra)(this, e);
  };
}
function bd(e, t) {
  var n = Ia(e + "");
  if (arguments.length < 2) {
    for (var r = li(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? _d : t ? yd : wd)(n, t));
}
function xd() {
  this.textContent = "";
}
function Ed(e) {
  return function() {
    this.textContent = e;
  };
}
function Sd(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function kd(e) {
  return arguments.length ? this.each(e == null ? xd : (typeof e == "function" ? Sd : Ed)(e)) : this.node().textContent;
}
function Cd() {
  this.innerHTML = "";
}
function Nd(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Pd(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Md(e) {
  return arguments.length ? this.each(e == null ? Cd : (typeof e == "function" ? Pd : Nd)(e)) : this.node().innerHTML;
}
function Ad() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Td() {
  return this.each(Ad);
}
function Dd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Id() {
  return this.each(Dd);
}
function zd(e) {
  var t = typeof e == "function" ? e : Na(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Od() {
  return null;
}
function Rd(e, t) {
  var n = typeof e == "function" ? e : Na(e), r = t == null ? Od : typeof t == "function" ? t : ai(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Hd() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ld() {
  return this.each(Hd);
}
function Vd() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Bd() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Fd(e) {
  return this.select(e ? Bd : Vd);
}
function Kd(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Yd(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Zd(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Xd(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Wd(e, t, n) {
  return function() {
    var r = this.__on, o, i = Yd(t);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function qd(e, t, n) {
  var r = Zd(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, d; l < c; ++l)
        for (o = 0, d = a[l]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? Wd : Xd, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Ha(e, t, n) {
  var r = Da(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Gd(e, t) {
  return function() {
    return Ha(this, e, t);
  };
}
function Ud(e, t) {
  return function() {
    return Ha(this, e, t.apply(this, arguments));
  };
}
function jd(e, t) {
  return this.each((typeof t == "function" ? Ud : Gd)(e, t));
}
function* Jd() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var La = [null];
function Ye(e, t) {
  this._groups = e, this._parents = t;
}
function sr() {
  return new Ye([[document.documentElement]], La);
}
function Qd() {
  return this;
}
Ye.prototype = sr.prototype = {
  constructor: Ye,
  select: Su,
  selectAll: Pu,
  selectChild: Du,
  selectChildren: Ru,
  filter: Hu,
  data: Yu,
  enter: Lu,
  exit: Xu,
  join: Wu,
  merge: qu,
  selection: Qd,
  order: Gu,
  sort: Uu,
  call: Ju,
  nodes: Qu,
  node: $u,
  size: ed,
  empty: td,
  each: nd,
  attr: cd,
  style: hd,
  property: md,
  classed: bd,
  text: kd,
  html: Md,
  raise: Td,
  lower: Id,
  append: zd,
  insert: Rd,
  remove: Ld,
  clone: Fd,
  datum: Kd,
  on: qd,
  dispatch: jd,
  [Symbol.iterator]: Jd
};
function qe(e) {
  return typeof e == "string" ? new Ye([[document.querySelector(e)]], [document.documentElement]) : new Ye([[e]], La);
}
function $d(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Je(e, t) {
  if (e = $d(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const ef = { passive: !1 }, Zn = { capture: !0, passive: !1 };
function go(e) {
  e.stopImmediatePropagation();
}
function pn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Va(e) {
  var t = e.document.documentElement, n = qe(e).on("dragstart.drag", pn, Zn);
  "onselectstart" in t ? n.on("selectstart.drag", pn, Zn) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ba(e, t) {
  var n = e.document.documentElement, r = qe(e).on("dragstart.drag", null);
  t && (r.on("click.drag", pn, Zn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const gr = (e) => () => e;
function Oo(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: c,
  dispatch: d
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: c, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
Oo.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function tf(e) {
  return !e.ctrlKey && !e.button;
}
function nf() {
  return this.parentNode;
}
function rf(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function of() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function sf() {
  var e = tf, t = nf, n = rf, r = of, o = {}, i = eo("start", "drag", "end"), s = 0, a, l, c, d, h = 0;
  function f(w) {
    w.on("mousedown.drag", g).filter(r).on("touchstart.drag", p).on("touchmove.drag", b, ef).on("touchend.drag touchcancel.drag", P).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(w, C) {
    if (!(d || !e.call(this, w, C))) {
      var T = N(this, t.call(this, w, C), w, C, "mouse");
      T && (qe(w.view).on("mousemove.drag", v, Zn).on("mouseup.drag", _, Zn), Va(w.view), go(w), c = !1, a = w.clientX, l = w.clientY, T("start", w));
    }
  }
  function v(w) {
    if (pn(w), !c) {
      var C = w.clientX - a, T = w.clientY - l;
      c = C * C + T * T > h;
    }
    o.mouse("drag", w);
  }
  function _(w) {
    qe(w.view).on("mousemove.drag mouseup.drag", null), Ba(w.view, c), pn(w), o.mouse("end", w);
  }
  function p(w, C) {
    if (e.call(this, w, C)) {
      var T = w.changedTouches, I = t.call(this, w, C), k = T.length, B, Y;
      for (B = 0; B < k; ++B)
        (Y = N(this, I, w, C, T[B].identifier, T[B])) && (go(w), Y("start", w, T[B]));
    }
  }
  function b(w) {
    var C = w.changedTouches, T = C.length, I, k;
    for (I = 0; I < T; ++I)
      (k = o[C[I].identifier]) && (pn(w), k("drag", w, C[I]));
  }
  function P(w) {
    var C = w.changedTouches, T = C.length, I, k;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), I = 0; I < T; ++I)
      (k = o[C[I].identifier]) && (go(w), k("end", w, C[I]));
  }
  function N(w, C, T, I, k, B) {
    var Y = i.copy(), A = Je(B || T, C), x, M, m;
    if ((m = n.call(w, new Oo("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: k,
      active: s,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), I)) != null)
      return x = m.x - A[0] || 0, M = m.y - A[1] || 0, function S(E, D, R) {
        var z = A, L;
        switch (E) {
          case "start":
            o[k] = S, L = s++;
            break;
          case "end":
            delete o[k], --s;
          // falls through
          case "drag":
            A = Je(R || D, C), L = s;
            break;
        }
        Y.call(
          E,
          w,
          new Oo(E, {
            sourceEvent: D,
            subject: m,
            target: f,
            identifier: k,
            active: L,
            x: A[0] + x,
            y: A[1] + M,
            dx: A[0] - z[0],
            dy: A[1] - z[1],
            dispatch: Y
          }),
          I
        );
      };
  }
  return f.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : gr(!!w), f) : e;
  }, f.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : gr(w), f) : t;
  }, f.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : gr(w), f) : n;
  }, f.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : gr(!!w), f) : r;
  }, f.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? f : w;
  }, f.clickDistance = function(w) {
    return arguments.length ? (h = (w = +w) * w, f) : Math.sqrt(h);
  }, f;
}
function ci(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Fa(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function ar() {
}
var Xn = 0.7, Dr = 1 / Xn, mn = "\\s*([+-]?\\d+)\\s*", Wn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", af = /^#([0-9a-f]{3,8})$/, lf = new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`), cf = new RegExp(`^rgb\\(${lt},${lt},${lt}\\)$`), uf = new RegExp(`^rgba\\(${mn},${mn},${mn},${Wn}\\)$`), df = new RegExp(`^rgba\\(${lt},${lt},${lt},${Wn}\\)$`), ff = new RegExp(`^hsl\\(${Wn},${lt},${lt}\\)$`), hf = new RegExp(`^hsla\\(${Wn},${lt},${lt},${Wn}\\)$`), Yi = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ci(ar, rn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Zi,
  // Deprecated! Use color.formatHex.
  formatHex: Zi,
  formatHex8: gf,
  formatHsl: vf,
  formatRgb: Xi,
  toString: Xi
});
function Zi() {
  return this.rgb().formatHex();
}
function gf() {
  return this.rgb().formatHex8();
}
function vf() {
  return Ka(this).formatHsl();
}
function Xi() {
  return this.rgb().formatRgb();
}
function rn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = af.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Wi(t) : n === 3 ? new Re(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? vr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? vr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = lf.exec(e)) ? new Re(t[1], t[2], t[3], 1) : (t = cf.exec(e)) ? new Re(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = uf.exec(e)) ? vr(t[1], t[2], t[3], t[4]) : (t = df.exec(e)) ? vr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ff.exec(e)) ? Ui(t[1], t[2] / 100, t[3] / 100, 1) : (t = hf.exec(e)) ? Ui(t[1], t[2] / 100, t[3] / 100, t[4]) : Yi.hasOwnProperty(e) ? Wi(Yi[e]) : e === "transparent" ? new Re(NaN, NaN, NaN, 0) : null;
}
function Wi(e) {
  return new Re(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function vr(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Re(e, t, n, r);
}
function pf(e) {
  return e instanceof ar || (e = rn(e)), e ? (e = e.rgb(), new Re(e.r, e.g, e.b, e.opacity)) : new Re();
}
function Ro(e, t, n, r) {
  return arguments.length === 1 ? pf(e) : new Re(e, t, n, r ?? 1);
}
function Re(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ci(Re, Ro, Fa(ar, {
  brighter(e) {
    return e = e == null ? Dr : Math.pow(Dr, e), new Re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new Re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Re(jt(this.r), jt(this.g), jt(this.b), Ir(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: qi,
  // Deprecated! Use color.formatHex.
  formatHex: qi,
  formatHex8: mf,
  formatRgb: Gi,
  toString: Gi
}));
function qi() {
  return `#${Wt(this.r)}${Wt(this.g)}${Wt(this.b)}`;
}
function mf() {
  return `#${Wt(this.r)}${Wt(this.g)}${Wt(this.b)}${Wt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Gi() {
  const e = Ir(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${jt(this.r)}, ${jt(this.g)}, ${jt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ir(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function jt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Wt(e) {
  return e = jt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ui(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Qe(e, t, n, r);
}
function Ka(e) {
  if (e instanceof Qe) return new Qe(e.h, e.s, e.l, e.opacity);
  if (e instanceof ar || (e = rn(e)), !e) return new Qe();
  if (e instanceof Qe) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Qe(s, a, l, e.opacity);
}
function yf(e, t, n, r) {
  return arguments.length === 1 ? Ka(e) : new Qe(e, t, n, r ?? 1);
}
function Qe(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ci(Qe, yf, Fa(ar, {
  brighter(e) {
    return e = e == null ? Dr : Math.pow(Dr, e), new Qe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new Qe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Re(
      vo(e >= 240 ? e - 240 : e + 120, o, r),
      vo(e, o, r),
      vo(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Qe(ji(this.h), pr(this.s), pr(this.l), Ir(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ir(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ji(this.h)}, ${pr(this.s) * 100}%, ${pr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ji(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function pr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function vo(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ui = (e) => () => e;
function wf(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function _f(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function bf(e) {
  return (e = +e) == 1 ? Ya : function(t, n) {
    return n - t ? _f(t, n, e) : ui(isNaN(t) ? n : t);
  };
}
function Ya(e, t) {
  var n = t - e;
  return n ? wf(e, n) : ui(isNaN(e) ? t : e);
}
const zr = (function e(t) {
  var n = bf(t);
  function r(o, i) {
    var s = n((o = Ro(o)).r, (i = Ro(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = Ya(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function xf(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Ef(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Sf(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Bn(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function kf(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function ot(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Cf(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Bn(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Ho = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, po = new RegExp(Ho.source, "g");
function Nf(e) {
  return function() {
    return e;
  };
}
function Pf(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Za(e, t) {
  var n = Ho.lastIndex = po.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Ho.exec(e)) && (o = po.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: ot(r, o) })), n = po.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Pf(l[0].x) : Nf(t) : (t = l.length, function(c) {
    for (var d = 0, h; d < t; ++d) a[(h = l[d]).i] = h.x(c);
    return a.join("");
  });
}
function Bn(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ui(t) : (n === "number" ? ot : n === "string" ? (r = rn(t)) ? (t = r, zr) : Za : t instanceof rn ? zr : t instanceof Date ? kf : Ef(t) ? xf : Array.isArray(t) ? Sf : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Cf : ot)(e, t);
}
var Ji = 180 / Math.PI, Lo = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Xa(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Ji,
    skewX: Math.atan(l) * Ji,
    scaleX: s,
    scaleY: a
  };
}
var mr;
function Mf(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Lo : Xa(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Af(e) {
  return e == null || (mr || (mr = document.createElementNS("http://www.w3.org/2000/svg", "g")), mr.setAttribute("transform", e), !(e = mr.transform.baseVal.consolidate())) ? Lo : (e = e.matrix, Xa(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Wa(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, h, f, g, v) {
    if (c !== h || d !== f) {
      var _ = g.push("translate(", null, t, null, n);
      v.push({ i: _ - 4, x: ot(c, h) }, { i: _ - 2, x: ot(d, f) });
    } else (h || f) && g.push("translate(" + h + t + f + n);
  }
  function s(c, d, h, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: ot(c, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(c, d, h, f) {
    c !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: ot(c, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(c, d, h, f, g, v) {
    if (c !== h || d !== f) {
      var _ = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: _ - 4, x: ot(c, h) }, { i: _ - 2, x: ot(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(c, d) {
    var h = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, h, f), s(c.rotate, d.rotate, h, f), a(c.skewX, d.skewX, h, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, h, f), c = d = null, function(g) {
      for (var v = -1, _ = f.length, p; ++v < _; ) h[(p = f[v]).i] = p.x(g);
      return h.join("");
    };
  };
}
var Tf = Wa(Mf, "px, ", "px)", "deg)"), Df = Wa(Af, ", ", ")", ")"), If = 1e-12;
function Qi(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function zf(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Of(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Sr = (function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], h = s[1], f = s[2], g = d - a, v = h - l, _ = g * g + v * v, p, b;
    if (_ < If)
      b = Math.log(f / c) / t, p = function(I) {
        return [
          a + I * g,
          l + I * v,
          c * Math.exp(t * I * b)
        ];
      };
    else {
      var P = Math.sqrt(_), N = (f * f - c * c + r * _) / (2 * c * n * P), w = (f * f - c * c - r * _) / (2 * f * n * P), C = Math.log(Math.sqrt(N * N + 1) - N), T = Math.log(Math.sqrt(w * w + 1) - w);
      b = (T - C) / t, p = function(I) {
        var k = I * b, B = Qi(C), Y = c / (n * P) * (B * Of(t * k + C) - zf(C));
        return [
          a + Y * g,
          l + Y * v,
          c * B / Qi(t * k + C)
        ];
      };
    }
    return p.duration = b * 1e3 * t / Math.SQRT2, p;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
})(Math.SQRT2, 2, 4);
var En = 0, Rn = 0, Dn = 0, qa = 1e3, Or, Hn, Rr = 0, on = 0, no = 0, qn = typeof performance == "object" && performance.now ? performance : Date, Ga = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function di() {
  return on || (Ga(Rf), on = qn.now() + no);
}
function Rf() {
  on = 0;
}
function Hr() {
  this._call = this._time = this._next = null;
}
Hr.prototype = Ua.prototype = {
  constructor: Hr,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? di() : +n) + (t == null ? 0 : +t), !this._next && Hn !== this && (Hn ? Hn._next = this : Or = this, Hn = this), this._call = e, this._time = n, Vo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Vo());
  }
};
function Ua(e, t, n) {
  var r = new Hr();
  return r.restart(e, t, n), r;
}
function Hf() {
  di(), ++En;
  for (var e = Or, t; e; )
    (t = on - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --En;
}
function $i() {
  on = (Rr = qn.now()) + no, En = Rn = 0;
  try {
    Hf();
  } finally {
    En = 0, Vf(), on = 0;
  }
}
function Lf() {
  var e = qn.now(), t = e - Rr;
  t > qa && (no -= t, Rr = e);
}
function Vf() {
  for (var e, t = Or, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Or = n);
  Hn = e, Vo(r);
}
function Vo(e) {
  if (!En) {
    Rn && (Rn = clearTimeout(Rn));
    var t = e - on;
    t > 24 ? (e < 1 / 0 && (Rn = setTimeout($i, e - qn.now() - no)), Dn && (Dn = clearInterval(Dn))) : (Dn || (Rr = qn.now(), Dn = setInterval(Lf, qa)), En = 1, Ga($i));
  }
}
function es(e, t, n) {
  var r = new Hr();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Bf = eo("start", "end", "cancel", "interrupt"), Ff = [], ja = 0, ts = 1, Bo = 2, kr = 3, ns = 4, Fo = 5, Cr = 6;
function ro(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Kf(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Bf,
    tween: Ff,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: ja
  });
}
function fi(e, t) {
  var n = nt(e, t);
  if (n.state > ja) throw new Error("too late; already scheduled");
  return n;
}
function ft(e, t) {
  var n = nt(e, t);
  if (n.state > kr) throw new Error("too late; already running");
  return n;
}
function nt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Kf(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ua(i, 0, n.time);
  function i(c) {
    n.state = ts, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, h, f, g;
    if (n.state !== ts) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === kr) return es(s);
        g.state === ns ? (g.state = Cr, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Cr, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (es(function() {
      n.state === kr && (n.state = ns, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = Bo, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Bo) {
      for (n.state = kr, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = Fo, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === Fo && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Cr, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function Nr(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Bo && r.state < Fo, r.state = Cr, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Yf(e) {
  return this.each(function() {
    Nr(this, e);
  });
}
function Zf(e, t) {
  var n, r;
  return function() {
    var o = ft(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function Xf(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = ft(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, l = 0, c = o.length; l < c; ++l)
        if (o[l].name === t) {
          o[l] = a;
          break;
        }
      l === c && o.push(a);
    }
    i.tween = o;
  };
}
function Wf(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = nt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Zf : Xf)(n, e, t));
}
function hi(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = ft(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return nt(o, r).value[t];
  };
}
function Ja(e, t) {
  var n;
  return (typeof t == "number" ? ot : t instanceof rn ? zr : (n = rn(t)) ? (t = n, zr) : Za)(e, t);
}
function qf(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Gf(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Uf(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function jf(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Jf(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Qf(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function $f(e, t) {
  var n = to(e), r = n === "transform" ? Df : Ja;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Qf : Jf)(n, r, hi(this, "attr." + e, t)) : t == null ? (n.local ? Gf : qf)(n) : (n.local ? jf : Uf)(n, r, t));
}
function eh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function th(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function nh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && th(e, i)), n;
  }
  return o._value = t, o;
}
function rh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && eh(e, i)), n;
  }
  return o._value = t, o;
}
function oh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = to(e);
  return this.tween(n, (r.local ? nh : rh)(r, t));
}
function ih(e, t) {
  return function() {
    fi(this, e).delay = +t.apply(this, arguments);
  };
}
function sh(e, t) {
  return t = +t, function() {
    fi(this, e).delay = t;
  };
}
function ah(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ih : sh)(t, e)) : nt(this.node(), t).delay;
}
function lh(e, t) {
  return function() {
    ft(this, e).duration = +t.apply(this, arguments);
  };
}
function ch(e, t) {
  return t = +t, function() {
    ft(this, e).duration = t;
  };
}
function uh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? lh : ch)(t, e)) : nt(this.node(), t).duration;
}
function dh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    ft(this, e).ease = t;
  };
}
function fh(e) {
  var t = this._id;
  return arguments.length ? this.each(dh(t, e)) : nt(this.node(), t).ease;
}
function hh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ft(this, e).ease = n;
  };
}
function gh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(hh(this._id, e));
}
function vh(e) {
  typeof e != "function" && (e = Ma(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Et(r, this._parents, this._name, this._id);
}
function ph(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || c[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Et(s, this._parents, this._name, this._id);
}
function mh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function yh(e, t, n) {
  var r, o, i = mh(t) ? fi : ft;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function wh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? nt(this.node(), n).on.on(e) : this.each(yh(n, e, t));
}
function _h(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function bh() {
  return this.on("end.remove", _h(this._id));
}
function xh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ai(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), c[f] = h, ro(c[f], t, n, f, c, nt(d, n)));
  return new Et(i, this._parents, t, n);
}
function Eh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Pa(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, h = 0; h < c; ++h)
      if (d = l[h]) {
        for (var f = e.call(d, d.__data__, h, l), g, v = nt(d, n), _ = 0, p = f.length; _ < p; ++_)
          (g = f[_]) && ro(g, t, n, _, f, v);
        i.push(f), s.push(d);
      }
  return new Et(i, s, t, n);
}
var Sh = sr.prototype.constructor;
function kh() {
  return new Sh(this._groups, this._parents);
}
function Ch(e, t) {
  var n, r, o;
  return function() {
    var i = xn(this, e), s = (this.style.removeProperty(e), xn(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Qa(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Nh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = xn(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Ph(e, t, n) {
  var r, o, i;
  return function() {
    var s = xn(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), xn(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Mh(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = ft(this, e), c = l.on, d = l.value[i] == null ? a || (a = Qa(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function Ah(e, t, n) {
  var r = (e += "") == "transform" ? Tf : Ja;
  return t == null ? this.styleTween(e, Ch(e, r)).on("end.style." + e, Qa(e)) : typeof t == "function" ? this.styleTween(e, Ph(e, r, hi(this, "style." + e, t))).each(Mh(this._id, e)) : this.styleTween(e, Nh(e, r, t), n).on("end.style." + e, null);
}
function Th(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Dh(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Th(e, s, n)), r;
  }
  return i._value = t, i;
}
function Ih(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Dh(e, t, n ?? ""));
}
function zh(e) {
  return function() {
    this.textContent = e;
  };
}
function Oh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Rh(e) {
  return this.tween("text", typeof e == "function" ? Oh(hi(this, "text", e)) : zh(e == null ? "" : e + ""));
}
function Hh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Lh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Hh(o)), t;
  }
  return r._value = e, r;
}
function Vh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Lh(e));
}
function Bh() {
  for (var e = this._name, t = this._id, n = $a(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = nt(l, t);
        ro(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Et(r, this._parents, e, n);
}
function Fh() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = ft(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var Kh = 0;
function Et(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function $a() {
  return ++Kh;
}
var gt = sr.prototype;
Et.prototype = {
  constructor: Et,
  select: xh,
  selectAll: Eh,
  selectChild: gt.selectChild,
  selectChildren: gt.selectChildren,
  filter: vh,
  merge: ph,
  selection: kh,
  transition: Bh,
  call: gt.call,
  nodes: gt.nodes,
  node: gt.node,
  size: gt.size,
  empty: gt.empty,
  each: gt.each,
  on: wh,
  attr: $f,
  attrTween: oh,
  style: Ah,
  styleTween: Ih,
  text: Rh,
  textTween: Vh,
  remove: bh,
  tween: Wf,
  delay: ah,
  duration: uh,
  ease: fh,
  easeVarying: gh,
  end: Fh,
  [Symbol.iterator]: gt[Symbol.iterator]
};
function Yh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Zh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Yh
};
function Xh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Wh(e) {
  var t, n;
  e instanceof Et ? (t = e._id, e = e._name) : (t = $a(), (n = Zh).time = di(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && ro(l, e, t, c, s, n || Xh(l, t));
  return new Et(r, this._parents, e, t);
}
sr.prototype.interrupt = Yf;
sr.prototype.transition = Wh;
const yr = (e) => () => e;
function qh(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function yt(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
yt.prototype = {
  constructor: yt,
  scale: function(e) {
    return e === 1 ? this : new yt(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new yt(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var oo = new yt(1, 0, 0);
el.prototype = yt.prototype;
function el(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return oo;
  return e.__zoom;
}
function mo(e) {
  e.stopImmediatePropagation();
}
function In(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Gh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Uh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function rs() {
  return this.__zoom || oo;
}
function jh(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Jh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Qh(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function tl() {
  var e = Gh, t = Uh, n = Qh, r = jh, o = Jh, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Sr, c = eo("start", "zoom", "end"), d, h, f, g = 500, v = 150, _ = 0, p = 10;
  function b(m) {
    m.property("__zoom", rs).on("wheel.zoom", k, { passive: !1 }).on("mousedown.zoom", B).on("dblclick.zoom", Y).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", x).on("touchend.zoom touchcancel.zoom", M).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(m, S, E, D) {
    var R = m.selection ? m.selection() : m;
    R.property("__zoom", rs), m !== R ? C(m, S, E, D) : R.interrupt().each(function() {
      T(this, arguments).event(D).start().zoom(null, typeof S == "function" ? S.apply(this, arguments) : S).end();
    });
  }, b.scaleBy = function(m, S, E, D) {
    b.scaleTo(m, function() {
      var R = this.__zoom.k, z = typeof S == "function" ? S.apply(this, arguments) : S;
      return R * z;
    }, E, D);
  }, b.scaleTo = function(m, S, E, D) {
    b.transform(m, function() {
      var R = t.apply(this, arguments), z = this.__zoom, L = E == null ? w(R) : typeof E == "function" ? E.apply(this, arguments) : E, F = z.invert(L), X = typeof S == "function" ? S.apply(this, arguments) : S;
      return n(N(P(z, X), L, F), R, s);
    }, E, D);
  }, b.translateBy = function(m, S, E, D) {
    b.transform(m, function() {
      return n(this.__zoom.translate(
        typeof S == "function" ? S.apply(this, arguments) : S,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), s);
    }, null, D);
  }, b.translateTo = function(m, S, E, D, R) {
    b.transform(m, function() {
      var z = t.apply(this, arguments), L = this.__zoom, F = D == null ? w(z) : typeof D == "function" ? D.apply(this, arguments) : D;
      return n(oo.translate(F[0], F[1]).scale(L.k).translate(
        typeof S == "function" ? -S.apply(this, arguments) : -S,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), z, s);
    }, D, R);
  };
  function P(m, S) {
    return S = Math.max(i[0], Math.min(i[1], S)), S === m.k ? m : new yt(S, m.x, m.y);
  }
  function N(m, S, E) {
    var D = S[0] - E[0] * m.k, R = S[1] - E[1] * m.k;
    return D === m.x && R === m.y ? m : new yt(m.k, D, R);
  }
  function w(m) {
    return [(+m[0][0] + +m[1][0]) / 2, (+m[0][1] + +m[1][1]) / 2];
  }
  function C(m, S, E, D) {
    m.on("start.zoom", function() {
      T(this, arguments).event(D).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(D).end();
    }).tween("zoom", function() {
      var R = this, z = arguments, L = T(R, z).event(D), F = t.apply(R, z), X = E == null ? w(F) : typeof E == "function" ? E.apply(R, z) : E, Z = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), K = R.__zoom, Q = typeof S == "function" ? S.apply(R, z) : S, W = l(K.invert(X).concat(Z / K.k), Q.invert(X).concat(Z / Q.k));
      return function(G) {
        if (G === 1) G = Q;
        else {
          var $ = W(G), he = Z / $[2];
          G = new yt(he, X[0] - $[0] * he, X[1] - $[1] * he);
        }
        L.zoom(null, G);
      };
    });
  }
  function T(m, S, E) {
    return !E && m.__zooming || new I(m, S);
  }
  function I(m, S) {
    this.that = m, this.args = S, this.active = 0, this.sourceEvent = null, this.extent = t.apply(m, S), this.taps = 0;
  }
  I.prototype = {
    event: function(m) {
      return m && (this.sourceEvent = m), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(m, S) {
      return this.mouse && m !== "mouse" && (this.mouse[1] = S.invert(this.mouse[0])), this.touch0 && m !== "touch" && (this.touch0[1] = S.invert(this.touch0[0])), this.touch1 && m !== "touch" && (this.touch1[1] = S.invert(this.touch1[0])), this.that.__zoom = S, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(m) {
      var S = qe(this.that).datum();
      c.call(
        m,
        this.that,
        new qh(m, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: c
        }),
        S
      );
    }
  };
  function k(m, ...S) {
    if (!e.apply(this, arguments)) return;
    var E = T(this, S).event(m), D = this.__zoom, R = Math.max(i[0], Math.min(i[1], D.k * Math.pow(2, r.apply(this, arguments)))), z = Je(m);
    if (E.wheel)
      (E.mouse[0][0] !== z[0] || E.mouse[0][1] !== z[1]) && (E.mouse[1] = D.invert(E.mouse[0] = z)), clearTimeout(E.wheel);
    else {
      if (D.k === R) return;
      E.mouse = [z, D.invert(z)], Nr(this), E.start();
    }
    In(m), E.wheel = setTimeout(L, v), E.zoom("mouse", n(N(P(D, R), E.mouse[0], E.mouse[1]), E.extent, s));
    function L() {
      E.wheel = null, E.end();
    }
  }
  function B(m, ...S) {
    if (f || !e.apply(this, arguments)) return;
    var E = m.currentTarget, D = T(this, S, !0).event(m), R = qe(m.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", Z, !0), z = Je(m, E), L = m.clientX, F = m.clientY;
    Va(m.view), mo(m), D.mouse = [z, this.__zoom.invert(z)], Nr(this), D.start();
    function X(K) {
      if (In(K), !D.moved) {
        var Q = K.clientX - L, W = K.clientY - F;
        D.moved = Q * Q + W * W > _;
      }
      D.event(K).zoom("mouse", n(N(D.that.__zoom, D.mouse[0] = Je(K, E), D.mouse[1]), D.extent, s));
    }
    function Z(K) {
      R.on("mousemove.zoom mouseup.zoom", null), Ba(K.view, D.moved), In(K), D.event(K).end();
    }
  }
  function Y(m, ...S) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, D = Je(m.changedTouches ? m.changedTouches[0] : m, this), R = E.invert(D), z = E.k * (m.shiftKey ? 0.5 : 2), L = n(N(P(E, z), D, R), t.apply(this, S), s);
      In(m), a > 0 ? qe(this).transition().duration(a).call(C, L, D, m) : qe(this).call(b.transform, L, D, m);
    }
  }
  function A(m, ...S) {
    if (e.apply(this, arguments)) {
      var E = m.touches, D = E.length, R = T(this, S, m.changedTouches.length === D).event(m), z, L, F, X;
      for (mo(m), L = 0; L < D; ++L)
        F = E[L], X = Je(F, this), X = [X, this.__zoom.invert(X), F.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== X[2] && (R.touch1 = X, R.taps = 0) : (R.touch0 = X, z = !0, R.taps = 1 + !!d);
      d && (d = clearTimeout(d)), z && (R.taps < 2 && (h = X[0], d = setTimeout(function() {
        d = null;
      }, g)), Nr(this), R.start());
    }
  }
  function x(m, ...S) {
    if (this.__zooming) {
      var E = T(this, S).event(m), D = m.changedTouches, R = D.length, z, L, F, X;
      for (In(m), z = 0; z < R; ++z)
        L = D[z], F = Je(L, this), E.touch0 && E.touch0[2] === L.identifier ? E.touch0[0] = F : E.touch1 && E.touch1[2] === L.identifier && (E.touch1[0] = F);
      if (L = E.that.__zoom, E.touch1) {
        var Z = E.touch0[0], K = E.touch0[1], Q = E.touch1[0], W = E.touch1[1], G = (G = Q[0] - Z[0]) * G + (G = Q[1] - Z[1]) * G, $ = ($ = W[0] - K[0]) * $ + ($ = W[1] - K[1]) * $;
        L = P(L, Math.sqrt(G / $)), F = [(Z[0] + Q[0]) / 2, (Z[1] + Q[1]) / 2], X = [(K[0] + W[0]) / 2, (K[1] + W[1]) / 2];
      } else if (E.touch0) F = E.touch0[0], X = E.touch0[1];
      else return;
      E.zoom("touch", n(N(L, F, X), E.extent, s));
    }
  }
  function M(m, ...S) {
    if (this.__zooming) {
      var E = T(this, S).event(m), D = m.changedTouches, R = D.length, z, L;
      for (mo(m), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), z = 0; z < R; ++z)
        L = D[z], E.touch0 && E.touch0[2] === L.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === L.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (L = Je(L, this), Math.hypot(h[0] - L[0], h[1] - L[1]) < p)) {
        var F = qe(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : yr(+m), b) : r;
  }, b.filter = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : yr(!!m), b) : e;
  }, b.touchable = function(m) {
    return arguments.length ? (o = typeof m == "function" ? m : yr(!!m), b) : o;
  }, b.extent = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : yr([[+m[0][0], +m[0][1]], [+m[1][0], +m[1][1]]]), b) : t;
  }, b.scaleExtent = function(m) {
    return arguments.length ? (i[0] = +m[0], i[1] = +m[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(m) {
    return arguments.length ? (s[0][0] = +m[0][0], s[1][0] = +m[1][0], s[0][1] = +m[0][1], s[1][1] = +m[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(m) {
    return arguments.length ? (n = m, b) : n;
  }, b.duration = function(m) {
    return arguments.length ? (a = +m, b) : a;
  }, b.interpolate = function(m) {
    return arguments.length ? (l = m, b) : l;
  }, b.on = function() {
    var m = c.on.apply(c, arguments);
    return m === c ? b : m;
  }, b.clickDistance = function(m) {
    return arguments.length ? (_ = (m = +m) * m, b) : Math.sqrt(_);
  }, b.tapDistance = function(m) {
    return arguments.length ? (p = +m, b) : p;
  }, b;
}
const Gn = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, Ko = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], nl = ["Enter", " ", "Escape"], $h = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var Sn;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Sn || (Sn = {}));
var yn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(yn || (yn = {}));
var Lr;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Lr || (Lr = {}));
const Yo = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var Tt;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Tt || (Tt = {}));
var Vr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Vr || (Vr = {}));
var J;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(J || (J = {}));
const os = {
  [J.Left]: J.Right,
  [J.Right]: J.Left,
  [J.Top]: J.Bottom,
  [J.Bottom]: J.Top
};
function eg(e, t) {
  if (!e && !t)
    return !0;
  if (!e || !t || e.size !== t.size)
    return !1;
  if (!e.size && !t.size)
    return !0;
  for (const n of e.keys())
    if (!t.has(n))
      return !1;
  return !0;
}
function is(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function tg(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const rl = (e) => "id" in e && "source" in e && "target" in e, ng = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), gi = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), lr = (e, t = [0, 0]) => {
  const { width: n, height: r } = Yt(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, rg = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : gi(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Br(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return io(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return so(n);
}, cr = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = io(n, Br(o)), r = !0);
  }), r ? so(n) : { x: 0, y: 0, width: 0, height: 0 };
}, vi = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...dr(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = c;
    if (s && !h || f)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, v = d.height ?? c.height ?? c.initialHeight ?? null, _ = Un(a, Cn(c)), p = (g ?? 0) * (v ?? 0), b = i && _ > 0;
    (!c.internals.handleBounds || b || _ >= p || c.dragging) && l.push(c);
  }
  return l;
}, og = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function ig(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function sg({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = ig(e, s), l = cr(a), c = pi(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function ol({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Gn.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (h = [
        [l, c],
        [l + g, c + v]
      ]);
    }
  else a && Nn(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = Nn(h) ? sn(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Gn.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function ag({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), v = !g && f.parentId && s.find((_) => _.id === f.parentId);
    (g || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), d = og(s, l);
  for (const f of l)
    a.has(f.id) && !d.find((v) => v.id === f.id) && d.push(f);
  if (!o)
    return {
      edges: d,
      nodes: s
    };
  const h = await o({
    nodes: s,
    edges: d
  });
  return typeof h == "boolean" ? h ? { edges: d, nodes: s } : { edges: [], nodes: [] } : h;
}
const kn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), sn = (e = { x: 0, y: 0 }, t, n) => ({
  x: kn(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: kn(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function il(e, t, n) {
  const { width: r, height: o } = Yt(n), { x: i, y: s } = n.internals.positionAbsolute;
  return sn(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const ss = (e, t, n) => e < t ? kn(Math.abs(e - t), 1, t) / t : e > n ? -kn(Math.abs(e - n), 1, t) / t : 0, sl = (e, t, n = 15, r = 40) => {
  const o = ss(e.x, r, t.width - r) * n, i = ss(e.y, r, t.height - r) * n;
  return [o, i];
}, io = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Zo = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), so = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Cn = (e, t = [0, 0]) => {
  const { x: n, y: r } = gi(e) ? e.internals.positionAbsolute : lr(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Br = (e, t = [0, 0]) => {
  const { x: n, y: r } = gi(e) ? e.internals.positionAbsolute : lr(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, al = (e, t) => so(io(Zo(e), Zo(t))), Un = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, as = (e) => wt(e.width) && wt(e.height) && wt(e.x) && wt(e.y), wt = (e) => !isNaN(e) && isFinite(e), lg = (e, t) => {
}, ur = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), dr = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ur(a, s) : a;
}, Fr = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function hn(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function cg(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = hn(e, n), o = hn(e, t);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = hn(e.top ?? e.y ?? 0, n), o = hn(e.bottom ?? e.y ?? 0, n), i = hn(e.left ?? e.x ?? 0, t), s = hn(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function ug(e, t, n, r, o, i) {
  const { x: s, y: a } = Fr(e, [t, n, r]), { x: l, y: c } = Fr({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, h = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const pi = (e, t, n, r, o, i) => {
  const s = cg(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = kn(c, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, v = n / 2 - f * d, _ = ug(e, g, v, d, t, n), p = {
    left: Math.min(_.left - s.left, 0),
    top: Math.min(_.top - s.top, 0),
    right: Math.min(_.right - s.right, 0),
    bottom: Math.min(_.bottom - s.bottom, 0)
  };
  return {
    x: g - p.left + p.right,
    y: v - p.top + p.bottom,
    zoom: d
  };
}, jn = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Nn(e) {
  return e != null && e !== "parent";
}
function Yt(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function ll(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function dg(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function fg(e) {
  return { ...$h, ...e || {} };
}
function yo(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = et(e), a = dr({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? ur(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const cl = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), ul = (e) => e?.getRootNode?.() || window?.document, hg = ["INPUT", "SELECT", "TEXTAREA"];
function dl(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : hg.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const fl = (e) => "clientX" in e, et = (e, t) => {
  const n = fl(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, ls = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const a = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (a.left - n.left) / r,
      y: (a.top - n.top) / r,
      ...cl(s)
    };
  });
};
function gg({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), h = Math.abs(c - t);
  return [l, c, d, h];
}
function wr(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function cs({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case J.Left:
      return [t - wr(t - r, i), n];
    case J.Right:
      return [t + wr(r - t, i), n];
    case J.Top:
      return [t, n - wr(n - o, i)];
    case J.Bottom:
      return [t, n + wr(o - n, i)];
  }
}
function hl({ sourceX: e, sourceY: t, sourcePosition: n = J.Bottom, targetX: r, targetY: o, targetPosition: i = J.Top, curvature: s = 0.25 }) {
  const [a, l] = cs({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = cs({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [h, f, g, v] = gg({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: c,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${l} ${c},${d} ${r},${o}`,
    h,
    f,
    g,
    v
  ];
}
function gl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function vg({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, a = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + a;
}
function pg({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = io(Br(e), Br(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Un(s, so(i)) > 0;
}
const mg = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, yg = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), wg = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || mg;
  let o;
  return rl(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, yg(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function vl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = gl({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const us = {
  [J.Left]: { x: -1, y: 0 },
  [J.Right]: { x: 1, y: 0 },
  [J.Top]: { x: 0, y: -1 },
  [J.Bottom]: { x: 0, y: 1 }
}, _g = ({ source: e, sourcePosition: t = J.Bottom, target: n }) => t === J.Left || t === J.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, ds = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function bg({ source: e, sourcePosition: t = J.Bottom, target: n, targetPosition: r = J.Top, center: o, offset: i, stepPosition: s }) {
  const a = us[t], l = us[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = _g({
    source: c,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let v = [], _, p;
  const b = { x: 0, y: 0 }, P = { x: 0, y: 0 }, [, , N, w] = gl({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (_ = o.x ?? c.x + (d.x - c.x) * s, p = o.y ?? (c.y + d.y) / 2) : (_ = o.x ?? (c.x + d.x) / 2, p = o.y ?? c.y + (d.y - c.y) * s);
    const T = [
      { x: _, y: c.y },
      { x: _, y: d.y }
    ], I = [
      { x: c.x, y: p },
      { x: d.x, y: p }
    ];
    a[f] === g ? v = f === "x" ? T : I : v = f === "x" ? I : T;
  } else {
    const T = [{ x: c.x, y: d.y }], I = [{ x: d.x, y: c.y }];
    if (f === "x" ? v = a.x === g ? I : T : v = a.y === g ? T : I, t === r) {
      const x = Math.abs(e[f] - n[f]);
      if (x <= i) {
        const M = Math.min(i - 1, i - x);
        a[f] === g ? b[f] = (c[f] > e[f] ? -1 : 1) * M : P[f] = (d[f] > n[f] ? -1 : 1) * M;
      }
    }
    if (t !== r) {
      const x = f === "x" ? "y" : "x", M = a[f] === l[x], m = c[x] > d[x], S = c[x] < d[x];
      (a[f] === 1 && (!M && m || M && S) || a[f] !== 1 && (!M && S || M && m)) && (v = f === "x" ? T : I);
    }
    const k = { x: c.x + b.x, y: c.y + b.y }, B = { x: d.x + P.x, y: d.y + P.y }, Y = Math.max(Math.abs(k.x - v[0].x), Math.abs(B.x - v[0].x)), A = Math.max(Math.abs(k.y - v[0].y), Math.abs(B.y - v[0].y));
    Y >= A ? (_ = (k.x + B.x) / 2, p = v[0].y) : (_ = v[0].x, p = (k.y + B.y) / 2);
  }
  return [[
    e,
    { x: c.x + b.x, y: c.y + b.y },
    ...v,
    { x: d.x + P.x, y: d.y + P.y },
    n
  ], _, p, N, w];
}
function xg(e, t, n, r) {
  const o = Math.min(ds(e, t) / 2, ds(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function mi({ sourceX: e, sourceY: t, sourcePosition: n = J.Bottom, targetX: r, targetY: o, targetPosition: i = J.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, v, _] = bg({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [h.reduce((b, P, N) => {
    let w = "";
    return N > 0 && N < h.length - 1 ? w = xg(h[N - 1], P, h[N + 1], s) : w = `${N === 0 ? "M" : "L"}${P.x} ${P.y}`, b += w, b;
  }, ""), f, g, v, _];
}
function fs(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Eg(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!fs(t) || !fs(n))
    return null;
  const r = t.internals.handleBounds || hs(t.handles), o = n.internals.handleBounds || hs(n.handles), i = gs(r?.source ?? [], e.sourceHandle), s = gs(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Sn.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Gn.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || J.Bottom, l = s?.position || J.Top, c = an(t, i, a), d = an(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function hs(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const r of e)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
  return {
    source: t,
    target: n
  };
}
function an(e, t, n = J.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Yt(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case J.Top:
      return { x: o + s / 2, y: i };
    case J.Right:
      return { x: o + s, y: i + a / 2 };
    case J.Bottom:
      return { x: o + s / 2, y: i + a };
    case J.Left:
      return { x: o, y: i + a / 2 };
  }
}
function gs(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Xo(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Sg(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = Xo(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const pl = 1e3, kg = 10, yi = {
  nodeOrigin: [0, 0],
  nodeExtent: Ko,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, Cg = {
  ...yi,
  checkEquality: !0
};
function wi(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Ng(e, t, n) {
  const r = wi(yi, n);
  for (const o of e.values())
    if (o.parentId)
      bi(o, e, t, r);
    else {
      const i = lr(o, r.nodeOrigin), s = Nn(o.extent) ? o.extent : r.nodeExtent, a = sn(i, s, Yt(o));
      o.internals.positionAbsolute = a;
    }
}
function Pg(e, t) {
  if (!e.handles)
    return e.measured ? t?.internals.handleBounds : void 0;
  const n = [], r = [];
  for (const o of e.handles) {
    const i = {
      id: o.id,
      width: o.width ?? 1,
      height: o.height ?? 1,
      nodeId: e.id,
      x: o.x,
      y: o.y,
      position: o.position,
      type: o.type
    };
    o.type === "source" ? n.push(i) : o.type === "target" && r.push(i);
  }
  return {
    source: n,
    target: r
  };
}
function _i(e) {
  return e === "manual";
}
function Mg(e, t, n, r = {}) {
  const o = wi(Cg, r), i = { i: 0 }, s = new Map(t), a = o?.elevateNodesOnSelect && !_i(o.zIndexMode) ? pl : 0;
  let l = e.length > 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = s.get(c.id);
    if (o.checkEquality && c === d?.internals.userNode)
      t.set(c.id, d);
    else {
      const h = lr(c, o.nodeOrigin), f = Nn(c.extent) ? c.extent : o.nodeExtent, g = sn(h, f, Yt(c));
      d = {
        ...o.defaults,
        ...c,
        measured: {
          width: c.measured?.width,
          height: c.measured?.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: Pg(c, d),
          z: ml(c, a, o.zIndexMode),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (l = !1), c.parentId && bi(d, t, n, r, i);
  }
  return l;
}
function Ag(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function bi(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a, zIndexMode: l } = wi(yi, r), c = e.parentId, d = t.get(c);
  if (!d) {
    console.warn(`Parent node ${c} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Ag(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && l === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * kg), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const h = i && !_i(l) ? pl : 0, { x: f, y: g, z: v } = Tg(e, d, s, a, h, l), { positionAbsolute: _ } = e.internals, p = f !== _.x || g !== _.y;
  (p || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: f, y: g } : _,
      z: v
    }
  });
}
function ml(e, t, n) {
  const r = wt(e.zIndex) ? e.zIndex : 0;
  return _i(n) ? r : r + (e.selected ? t : 0);
}
function Tg(e, t, n, r, o, i) {
  const { x: s, y: a } = t.internals.positionAbsolute, l = Yt(e), c = lr(e, n), d = Nn(e.extent) ? sn(c, e.extent, l) : c;
  let h = sn({ x: s + d.x, y: a + d.y }, r, l);
  e.extent === "parent" && (h = il(h, l, t));
  const f = ml(e, o, i), g = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: g >= f ? g + 1 : f
  };
}
function Dg(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Cn(a), c = al(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = Yt(a), h = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), _ = Math.max(d.height, Math.round(s.height)), p = (v - d.width) * h[0], b = (_ - d.height) * h[1];
    (f > 0 || g > 0 || p || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + p,
        y: a.position.y - g + b
      }
    }), n.get(l)?.forEach((P) => {
      e.some((N) => N.id === P.id) || o.push({
        id: P.id,
        type: "position",
        position: {
          x: P.position.x + f,
          y: P.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (f ? h[0] * f - p : 0),
        height: _ + (g ? h[1] * g - b : 0)
      }
    });
  }), o;
}
function Ig(e, t, n, r, o, i, s) {
  const a = r?.querySelector(".xyflow__viewport");
  let l = !1;
  if (!a)
    return { changes: [], updatedInternals: l };
  const c = [], d = window.getComputedStyle(a), { m22: h } = new window.DOMMatrixReadOnly(d.transform), f = [];
  for (const g of e.values()) {
    const v = t.get(g.id);
    if (!v)
      continue;
    if (v.hidden) {
      t.set(v.id, {
        ...v,
        internals: {
          ...v.internals,
          handleBounds: void 0
        }
      }), l = !0;
      continue;
    }
    const _ = cl(g.nodeElement), p = v.measured.width !== _.width || v.measured.height !== _.height;
    if (!!(_.width && _.height && (p || !v.internals.handleBounds || g.force))) {
      const P = g.nodeElement.getBoundingClientRect(), N = Nn(v.extent) ? v.extent : i;
      let { positionAbsolute: w } = v.internals;
      v.parentId && v.extent === "parent" ? w = il(w, _, t.get(v.parentId)) : N && (w = sn(w, N, _));
      const C = {
        ...v,
        measured: _,
        internals: {
          ...v.internals,
          positionAbsolute: w,
          handleBounds: {
            source: ls("source", g.nodeElement, P, h, v.id),
            target: ls("target", g.nodeElement, P, h, v.id)
          }
        }
      };
      t.set(v.id, C), v.parentId && bi(C, t, n, { nodeOrigin: o, zIndexMode: s }), l = !0, p && (c.push({
        id: v.id,
        type: "dimensions",
        dimensions: _
      }), v.expandParent && v.parentId && f.push({
        id: v.id,
        parentId: v.parentId,
        rect: Cn(C, o)
      }));
    }
  }
  if (f.length > 0) {
    const g = Dg(f, t, n, o);
    c.push(...g);
  }
  return { changes: c, updatedInternals: l };
}
async function zg({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), a = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(a);
}
function vs(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const c = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, c.set(n, t));
  }
}
function Og(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    vs("source", l, d, e, o, s), vs("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function yl(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : yl(n, t) : !1;
}
function ps(e, t, n) {
  let r = e;
  do {
    if (r?.matches?.(t))
      return !0;
    if (r === n)
      return !1;
    r = r?.parentElement;
  } while (r);
  return !1;
}
function Rg(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !yl(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const a = e.get(i);
      a && o.set(i, {
        id: i,
        position: a.position || { x: 0, y: 0 },
        distance: {
          x: n.x - a.internals.positionAbsolute.x,
          y: n.y - a.internals.positionAbsolute.y
        },
        extent: a.extent,
        parentId: a.parentId,
        origin: a.origin,
        expandParent: a.expandParent,
        internals: {
          positionAbsolute: a.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: a.measured.width ?? 0,
          height: a.measured.height ?? 0
        }
      });
    }
  return o;
}
function wo({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  const o = [];
  for (const [s, a] of t) {
    const l = n.get(s)?.internals.userNode;
    l && o.push({
      ...l,
      position: a.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = n.get(e)?.internals.userNode;
  return [
    i ? {
      ...i,
      position: t.get(e)?.position || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function Hg({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = ur(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Lg({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, v = !1, _ = null;
  function p({ noDragClassName: P, handleSelector: N, domNode: w, isSelectable: C, nodeId: T, nodeClickDistance: I = 0 }) {
    f = qe(w);
    function k({ x, y: M }) {
      const { nodeLookup: m, nodeExtent: S, snapGrid: E, snapToGrid: D, nodeOrigin: R, onNodeDrag: z, onSelectionDrag: L, onError: F, updateNodePositions: X } = t();
      i = { x, y: M };
      let Z = !1;
      const K = a.size > 1, Q = K && S ? Zo(cr(a)) : null, W = K && D ? Hg({
        dragItems: a,
        snapGrid: E,
        x,
        y: M
      }) : null;
      for (const [G, $] of a) {
        if (!m.has(G))
          continue;
        let he = { x: x - $.distance.x, y: M - $.distance.y };
        D && (he = W ? {
          x: Math.round(he.x + W.x),
          y: Math.round(he.y + W.y)
        } : ur(he, E));
        let be = null;
        if (K && S && !$.extent && Q) {
          const { positionAbsolute: oe } = $.internals, Te = oe.x - Q.x + S[0][0], Ct = oe.x + $.measured.width - Q.x2 + S[1][0], Nt = oe.y - Q.y + S[0][1], ht = oe.y + $.measured.height - Q.y2 + S[1][1];
          be = [
            [Te, Nt],
            [Ct, ht]
          ];
        }
        const { position: re, positionAbsolute: me } = ol({
          nodeId: G,
          nextPosition: he,
          nodeLookup: m,
          nodeExtent: be || S,
          nodeOrigin: R,
          onError: F
        });
        Z = Z || $.position.x !== re.x || $.position.y !== re.y, $.position = re, $.internals.positionAbsolute = me;
      }
      if (v = v || Z, !!Z && (X(a, !0), _ && (r || z || !T && L))) {
        const [G, $] = wo({
          nodeId: T,
          dragItems: a,
          nodeLookup: m
        });
        r?.(_, a, G, $), z?.(_, G, $), T || L?.(_, $);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: x, panBy: M, autoPanSpeed: m, autoPanOnNodeDrag: S } = t();
      if (!S) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, D] = sl(c, d, m);
      (E !== 0 || D !== 0) && (i.x = (i.x ?? 0) - E / x[2], i.y = (i.y ?? 0) - D / x[2], await M({ x: E, y: D }) && k(i)), s = requestAnimationFrame(B);
    }
    function Y(x) {
      const { nodeLookup: M, multiSelectionActive: m, nodesDraggable: S, transform: E, snapGrid: D, snapToGrid: R, selectNodesOnDrag: z, onNodeDragStart: L, onSelectionDragStart: F, unselectNodesAndEdges: X } = t();
      h = !0, (!z || !C) && !m && T && (M.get(T)?.selected || X()), C && z && T && e?.(T);
      const Z = yo(x.sourceEvent, { transform: E, snapGrid: D, snapToGrid: R, containerBounds: d });
      if (i = Z, a = Rg(M, S, Z, T), a.size > 0 && (n || L || !T && F)) {
        const [K, Q] = wo({
          nodeId: T,
          dragItems: a,
          nodeLookup: M
        });
        n?.(x.sourceEvent, a, K, Q), L?.(x.sourceEvent, K, Q), T || F?.(x.sourceEvent, Q);
      }
    }
    const A = sf().clickDistance(I).on("start", (x) => {
      const { domNode: M, nodeDragThreshold: m, transform: S, snapGrid: E, snapToGrid: D } = t();
      d = M?.getBoundingClientRect() || null, g = !1, v = !1, _ = x.sourceEvent, m === 0 && Y(x), i = yo(x.sourceEvent, { transform: S, snapGrid: E, snapToGrid: D, containerBounds: d }), c = et(x.sourceEvent, d);
    }).on("drag", (x) => {
      const { autoPanOnNodeDrag: M, transform: m, snapGrid: S, snapToGrid: E, nodeDragThreshold: D, nodeLookup: R } = t(), z = yo(x.sourceEvent, { transform: m, snapGrid: S, snapToGrid: E, containerBounds: d });
      if (_ = x.sourceEvent, (x.sourceEvent.type === "touchmove" && x.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !R.has(T)) && (g = !0), !g) {
        if (!l && M && h && (l = !0, B()), !h) {
          const L = et(x.sourceEvent, d), F = L.x - c.x, X = L.y - c.y;
          Math.sqrt(F * F + X * X) > D && Y(x);
        }
        (i.x !== z.xSnapped || i.y !== z.ySnapped) && a && h && (c = et(x.sourceEvent, d), k(z));
      }
    }).on("end", (x) => {
      if (!(!h || g) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: M, updateNodePositions: m, onNodeDragStop: S, onSelectionDragStop: E } = t();
        if (v && (m(a, !1), v = !1), o || S || !T && E) {
          const [D, R] = wo({
            nodeId: T,
            dragItems: a,
            nodeLookup: M,
            dragging: !1
          });
          o?.(x.sourceEvent, a, D, R), S?.(x.sourceEvent, D, R), T || E?.(x.sourceEvent, R);
        }
      }
    }).filter((x) => {
      const M = x.target;
      return !x.button && (!P || !ps(M, `.${P}`, w)) && (!N || ps(M, N, w));
    });
    f.call(A);
  }
  function b() {
    f?.on(".drag", null);
  }
  return {
    update: p,
    destroy: b
  };
}
function Vg(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Un(o, Cn(i)) > 0 && r.push(i);
  return r;
}
const Bg = 250;
function Fg(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = Vg(e, n, t + Bg);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: h } = an(a, c, c.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(h - e.y, 2));
      f > t || (f < i ? (o = [{ ...c, x: d, y: h }], i = f) : f === i && o.push({ ...c, x: d, y: h }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const a = r.type === "source" ? "target" : "source";
    return o.find((l) => l.type === a) ?? o[0];
  }
  return o[0];
}
function wl(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...an(s, l, l.position, !0) } : l;
}
function _l(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Kg(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const bl = () => !0;
function Yg(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: v, onConnect: _, onConnectEnd: p, isValidConnection: b = bl, onReconnectEnd: P, updateConnection: N, getTransform: w, getFromHandle: C, autoPanSpeed: T, dragThreshold: I = 1, handleDomNode: k }) {
  const B = ul(e.target);
  let Y = 0, A;
  const { x, y: M } = et(e), m = _l(i, k), S = a?.getBoundingClientRect();
  let E = !1;
  if (!S || !m)
    return;
  const D = wl(o, m, r, l, t);
  if (!D)
    return;
  let R = et(e, S), z = !1, L = null, F = !1, X = null;
  function Z() {
    if (!d || !S)
      return;
    const [re, me] = sl(R, S, T);
    f({ x: re, y: me }), Y = requestAnimationFrame(Z);
  }
  const K = {
    ...D,
    nodeId: o,
    type: m,
    position: D.position
  }, Q = l.get(o);
  let G = {
    inProgress: !0,
    isValid: null,
    from: an(Q, K, J.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: Q,
    to: R,
    toHandle: null,
    toPosition: os[K.position],
    toNode: null,
    pointer: R
  };
  function $() {
    E = !0, N(G), v?.(e, { nodeId: o, handleId: r, handleType: m });
  }
  I === 0 && $();
  function he(re) {
    if (!E) {
      const { x: ht, y: fe } = et(re), we = ht - x, je = fe - M;
      if (!(we * we + je * je > I * I))
        return;
      $();
    }
    if (!C() || !K) {
      be(re);
      return;
    }
    const me = w();
    R = et(re, S), A = Fg(dr(R, me, !1, [1, 1]), n, l, K), z || (Z(), z = !0);
    const oe = xl(re, {
      handle: A,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: B,
      lib: c,
      flowId: h,
      nodeLookup: l
    });
    X = oe.handleDomNode, L = oe.connection, F = Kg(!!A, oe.isValid);
    const Te = l.get(o), Ct = Te ? an(Te, K, J.Left, !0) : G.from, Nt = {
      ...G,
      from: Ct,
      isValid: F,
      to: oe.toHandle && F ? Fr({ x: oe.toHandle.x, y: oe.toHandle.y }, me) : R,
      toHandle: oe.toHandle,
      toPosition: F && oe.toHandle ? oe.toHandle.position : os[K.position],
      toNode: oe.toHandle ? l.get(oe.toHandle.nodeId) : null,
      pointer: R
    };
    N(Nt), G = Nt;
  }
  function be(re) {
    if (!("touches" in re && re.touches.length > 0)) {
      if (E) {
        (A || X) && L && F && _?.(L);
        const { inProgress: me, ...oe } = G, Te = {
          ...oe,
          toPosition: G.toHandle ? G.toPosition : null
        };
        p?.(re, Te), i && P?.(re, Te);
      }
      g(), cancelAnimationFrame(Y), z = !1, F = !1, L = null, X = null, B.removeEventListener("mousemove", he), B.removeEventListener("mouseup", be), B.removeEventListener("touchmove", he), B.removeEventListener("touchend", be);
    }
  }
  B.addEventListener("mousemove", he), B.addEventListener("mouseup", be), B.addEventListener("touchmove", he), B.addEventListener("touchend", be);
}
function xl(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = bl, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = et(e), _ = s.elementFromPoint(g, v), p = _?.classList.contains(`${a}-flow__handle`) ? _ : f, b = {
    handleDomNode: p,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (p) {
    const P = _l(void 0, p), N = p.getAttribute("data-nodeid"), w = p.getAttribute("data-handleid"), C = p.classList.contains("connectable"), T = p.classList.contains("connectableend");
    if (!N || !P)
      return b;
    const I = {
      source: h ? N : r,
      sourceHandle: h ? w : o,
      target: h ? r : N,
      targetHandle: h ? o : w
    };
    b.connection = I;
    const B = C && T && (n === Sn.Strict ? h && P === "source" || !h && P === "target" : N !== r || w !== o);
    b.isValid = B && c(I), b.toHandle = wl(N, P, w, d, n, !0);
  }
  return b;
}
const ms = {
  onPointerDown: Yg,
  isValid: xl
};
function Zg({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = qe(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const v = (N) => {
      if (N.sourceEvent.type !== "wheel" || !t)
        return;
      const w = n(), C = N.sourceEvent.ctrlKey && jn() ? 10 : 1, T = -N.sourceEvent.deltaY * (N.sourceEvent.deltaMode === 1 ? 0.05 : N.sourceEvent.deltaMode ? 1 : 2e-3) * d, I = w[2] * Math.pow(2, T * C);
      t.scaleTo(I);
    };
    let _ = [0, 0];
    const p = (N) => {
      (N.sourceEvent.type === "mousedown" || N.sourceEvent.type === "touchstart") && (_ = [
        N.sourceEvent.clientX ?? N.sourceEvent.touches[0].clientX,
        N.sourceEvent.clientY ?? N.sourceEvent.touches[0].clientY
      ]);
    }, b = (N) => {
      const w = n();
      if (N.sourceEvent.type !== "mousemove" && N.sourceEvent.type !== "touchmove" || !t)
        return;
      const C = [
        N.sourceEvent.clientX ?? N.sourceEvent.touches[0].clientX,
        N.sourceEvent.clientY ?? N.sourceEvent.touches[0].clientY
      ], T = [C[0] - _[0], C[1] - _[1]];
      _ = C;
      const I = r() * Math.max(w[2], Math.log(w[2])) * (g ? -1 : 1), k = {
        x: w[0] - T[0] * I,
        y: w[1] - T[1] * I
      }, B = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: k.x,
        y: k.y,
        zoom: w[2]
      }, B, a);
    }, P = tl().on("start", p).on("zoom", h ? b : null).on("zoom.wheel", f ? v : null);
    o.call(P, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Je
  };
}
const ao = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), _o = ({ x: e, y: t, zoom: n }) => oo.translate(e, t).scale(n), vn = (e, t) => e.target.closest(`.${t}`), El = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Xg = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, bo = (e, t = 0, n = Xg, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Sl = (e) => {
  const t = e.ctrlKey && jn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Wg({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (vn(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const p = Je(d), b = Sl(d), P = h * Math.pow(2, b);
      r.scaleTo(n, P, p, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === yn.Vertical ? 0 : d.deltaX * f, v = o === yn.Horizontal ? 0 : d.deltaY * f;
    !jn() && d.shiftKey && o !== yn.Vertical && (g = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(v / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const _ = ao(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, _), e.panScrollTimeout = setTimeout(() => {
      c?.(d, _), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, _));
  };
}
function qg({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = vn(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Gg({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = ao(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Ug({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && El(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, ao(i.transform));
  };
}
function jg({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && El(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = ao(s.transform);
      e.prevViewport = a, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o?.(s.sourceEvent, a);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function Jg({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c, connectionInProgress: d }) {
  return (h) => {
    const f = e || t, g = n && h.ctrlKey, v = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (vn(h, `${c}-flow__node`) || vn(h, `${c}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !v || vn(h, a) && v || vn(h, l) && (!v || o && v && !e) || !n && h.ctrlKey && v)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !g && v || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const _ = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || v) && _;
  };
}
function Qg({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), h = tl().scaleExtent([t, n]).translateExtent(r), f = qe(e).call(h);
  P({
    x: o.x,
    y: o.y,
    zoom: kn(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), v = f.on("dblclick.zoom");
  h.wheelDelta(Sl);
  function _(A, x) {
    return f ? new Promise((M) => {
      h?.interpolate(x?.interpolate === "linear" ? Bn : Sr).transform(bo(f, x?.duration, x?.ease, () => M(!0)), A);
    }) : Promise.resolve(!1);
  }
  function p({ noWheelClassName: A, noPanClassName: x, onPaneContextMenu: M, userSelectionActive: m, panOnScroll: S, panOnDrag: E, panOnScrollMode: D, panOnScrollSpeed: R, preventScrolling: z, zoomOnPinch: L, zoomOnScroll: F, zoomOnDoubleClick: X, zoomActivationKeyPressed: Z, lib: K, onTransformChange: Q, connectionInProgress: W, paneClickDistance: G, selectionOnDrag: $ }) {
    m && !c.isZoomingOrPanning && b();
    const he = S && !Z && !m;
    h.clickDistance($ ? 1 / 0 : !wt(G) || G < 0 ? 0 : G);
    const be = he ? Wg({
      zoomPanValues: c,
      noWheelClassName: A,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: D,
      panOnScrollSpeed: R,
      zoomOnPinch: L,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : qg({
      noWheelClassName: A,
      preventScrolling: z,
      d3ZoomHandler: g
    });
    if (f.on("wheel.zoom", be, { passive: !1 }), !m) {
      const me = Gg({
        zoomPanValues: c,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", me);
      const oe = Ug({
        zoomPanValues: c,
        panOnDrag: E,
        onPaneContextMenu: !!M,
        onPanZoom: i,
        onTransformChange: Q
      });
      h.on("zoom", oe);
      const Te = jg({
        zoomPanValues: c,
        panOnDrag: E,
        panOnScroll: S,
        onPaneContextMenu: M,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", Te);
    }
    const re = Jg({
      zoomActivationKeyPressed: Z,
      panOnDrag: E,
      zoomOnScroll: F,
      panOnScroll: S,
      zoomOnDoubleClick: X,
      zoomOnPinch: L,
      userSelectionActive: m,
      noPanClassName: x,
      noWheelClassName: A,
      lib: K,
      connectionInProgress: W
    });
    h.filter(re), X ? f.on("dblclick.zoom", v) : f.on("dblclick.zoom", null);
  }
  function b() {
    h.on("zoom", null);
  }
  async function P(A, x, M) {
    const m = _o(A), S = h?.constrain()(m, x, M);
    return S && await _(S), new Promise((E) => E(S));
  }
  async function N(A, x) {
    const M = _o(A);
    return await _(M, x), new Promise((m) => m(M));
  }
  function w(A) {
    if (f) {
      const x = _o(A), M = f.property("__zoom");
      (M.k !== A.zoom || M.x !== A.x || M.y !== A.y) && h?.transform(f, x, null, { sync: !0 });
    }
  }
  function C() {
    const A = f ? el(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: A.x, y: A.y, zoom: A.k };
  }
  function T(A, x) {
    return f ? new Promise((M) => {
      h?.interpolate(x?.interpolate === "linear" ? Bn : Sr).scaleTo(bo(f, x?.duration, x?.ease, () => M(!0)), A);
    }) : Promise.resolve(!1);
  }
  function I(A, x) {
    return f ? new Promise((M) => {
      h?.interpolate(x?.interpolate === "linear" ? Bn : Sr).scaleBy(bo(f, x?.duration, x?.ease, () => M(!0)), A);
    }) : Promise.resolve(!1);
  }
  function k(A) {
    h?.scaleExtent(A);
  }
  function B(A) {
    h?.translateExtent(A);
  }
  function Y(A) {
    const x = !wt(A) || A < 0 ? 0 : A;
    h?.clickDistance(x);
  }
  return {
    update: p,
    destroy: b,
    setViewport: N,
    setViewportConstrained: P,
    getViewport: C,
    scaleTo: T,
    scaleBy: I,
    setScaleExtent: k,
    setTranslateExtent: B,
    syncViewport: w,
    setClickDistance: Y
  };
}
var ys;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(ys || (ys = {}));
function xi() {
  const e = {};
  return [
    (t) => {
      if (t && !fc(e))
        throw new Error(t);
      return jo(e);
    },
    (t) => Jo(e, t)
  ];
}
const [$g, ev] = xi(), [tv, nv] = xi(), [rv, ov] = xi();
var iv = /* @__PURE__ */ ee("<div><!></div>");
function Ht(e, t) {
  te(t, !0);
  let n = H(t, "id", 3, null), r = H(t, "type", 3, "source"), o = H(t, "position", 19, () => J.Top), i = H(t, "isConnectableStart", 3, !0), s = H(t, "isConnectableEnd", 3, !0), a = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "type",
    "position",
    "style",
    "class",
    "isConnectable",
    "isConnectableStart",
    "isConnectableEnd",
    "isValidConnection",
    "onconnect",
    "ondisconnect",
    "children"
  ]);
  const l = $g("Handle must be used within a Custom Node component"), c = tv("Handle must be used within a Custom Node component");
  let d = /* @__PURE__ */ y(() => r() === "target"), h = /* @__PURE__ */ y(() => t.isConnectable !== void 0 ? t.isConnectable : c.value), f = Zt(), g = /* @__PURE__ */ y(() => f.ariaLabelConfig), v = null;
  na(() => {
    if (t.onconnect || t.ondisconnect) {
      f.edges;
      let x = f.connectionLookup.get(`${l}-${r()}${n() ? `-${n()}` : ""}`);
      if (v && !eg(x, v)) {
        const M = x ?? /* @__PURE__ */ new Map();
        is(v, M, t.ondisconnect), is(M, v, t.onconnect);
      }
      v = new Map(x);
    }
  });
  let _ = /* @__PURE__ */ y(() => {
    if (!f.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: x, toHandle: M, isValid: m } = f.connection, S = x && x.nodeId === l && x.type === r() && x.id === n(), E = M && M.nodeId === l && M.type === r() && M.id === n(), D = f.connectionMode === Sn.Strict ? x?.type !== r() : l !== x?.nodeId || n() !== x?.id;
    return [
      !0,
      S,
      E,
      D,
      E && m
    ];
  }), p = /* @__PURE__ */ y(() => Jn(u(_), 5)), b = /* @__PURE__ */ y(() => u(p)[0]), P = /* @__PURE__ */ y(() => u(p)[1]), N = /* @__PURE__ */ y(() => u(p)[2]), w = /* @__PURE__ */ y(() => u(p)[3]), C = /* @__PURE__ */ y(() => u(p)[4]);
  function T(x) {
    const M = f.onbeforeconnect ? f.onbeforeconnect(x) : x;
    M && (f.addEdge(M), f.onconnect?.(x));
  }
  function I(x) {
    const M = fl(x);
    x.currentTarget && (M && x.button === 0 || !M) && ms.onPointerDown(x, {
      handleId: n(),
      nodeId: l,
      isTarget: u(d),
      connectionRadius: f.connectionRadius,
      domNode: f.domNode,
      nodeLookup: f.nodeLookup,
      connectionMode: f.connectionMode,
      lib: "svelte",
      autoPanOnConnect: f.autoPanOnConnect,
      autoPanSpeed: f.autoPanSpeed,
      flowId: f.flowId,
      isValidConnection: t.isValidConnection ?? f.isValidConnection,
      updateConnection: f.updateConnection,
      cancelConnection: f.cancelConnection,
      panBy: f.panBy,
      onConnect: T,
      onConnectStart: (m, S) => {
        f.onconnectstart?.(m, {
          nodeId: S.nodeId,
          handleId: S.handleId,
          handleType: S.handleType
        });
      },
      onConnectEnd: (m, S) => {
        f.onconnectend?.(m, S);
      },
      getTransform: () => [f.viewport.x, f.viewport.y, f.viewport.zoom],
      getFromHandle: () => f.connection.fromHandle,
      dragThreshold: f.connectionDragThreshold,
      handleDomNode: x.currentTarget
    });
  }
  function k(x) {
    if (!l || !f.clickConnectStartHandle && !i())
      return;
    if (!f.clickConnectStartHandle) {
      f.onclickconnectstart?.(x, { nodeId: l, handleId: n(), handleType: r() }), f.clickConnectStartHandle = { nodeId: l, type: r(), id: n() };
      return;
    }
    const M = ul(x.target), m = t.isValidConnection ?? f.isValidConnection, { connectionMode: S, clickConnectStartHandle: E, flowId: D, nodeLookup: R } = f, { connection: z, isValid: L } = ms.isValid(x, {
      handle: { nodeId: l, id: n(), type: r() },
      connectionMode: S,
      fromNodeId: E.nodeId,
      fromHandleId: E.id ?? null,
      fromType: E.type,
      isValidConnection: m,
      flowId: D,
      doc: M,
      lib: "svelte",
      nodeLookup: R
    });
    L && z && T(z);
    const F = structuredClone(Ls(f.connection));
    delete F.inProgress, F.toPosition = F.toHandle ? F.toHandle.position : null, f.onclickconnectend?.(x, F), f.clickConnectStartHandle = null;
  }
  var B = iv(), Y = () => {
  };
  Ft(B, () => ({
    "data-handleid": n(),
    "data-nodeid": l,
    "data-handlepos": o(),
    "data-id": `${f.flowId ?? ""}-${l ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      f.noDragClass,
      f.noPanClass,
      o(),
      t.class
    ],
    onmousedown: I,
    ontouchstart: I,
    onclick: f.clickConnect ? k : void 0,
    onkeypress: Y,
    style: t.style,
    role: "button",
    "aria-label": u(g)["handle.ariaLabel"],
    tabindex: "-1",
    ...a,
    [Mt]: {
      valid: u(C),
      connectingto: u(N),
      connectingfrom: u(P),
      source: !u(d),
      target: u(d),
      connectablestart: i(),
      connectableend: s(),
      connectable: u(h),
      connectionindicator: u(h) && (!u(b) || u(w)) && (u(b) || f.clickConnectStartHandle ? s() : i())
    }
  }));
  var A = q(B);
  He(A, () => t.children ?? Lt), V(e, B), ne();
}
var sv = /* @__PURE__ */ ee("<!> <!>", 1);
function kl(e, t) {
  te(t, !0);
  let n = H(t, "targetPosition", 19, () => J.Top), r = H(t, "sourcePosition", 19, () => J.Bottom);
  var o = sv(), i = ae(o);
  Ht(i, {
    type: "target",
    get position() {
      return n();
    }
  });
  var s = j(i), a = j(s);
  Ht(a, {
    type: "source",
    get position() {
      return r();
    }
  }), ce(() => Ae(s, ` ${t.data?.label ?? ""} `)), V(e, o), ne();
}
var av = /* @__PURE__ */ ee(" <!>", 1);
function lv(e, t) {
  te(t, !0);
  let n = H(t, "data", 19, () => ({ label: "Node" })), r = H(t, "sourcePosition", 19, () => J.Bottom);
  var o = av(), i = ae(o), s = j(i);
  Ht(s, {
    type: "source",
    get position() {
      return r();
    }
  }), ce(() => Ae(i, `${n()?.label ?? ""} `)), V(e, o), ne();
}
var cv = /* @__PURE__ */ ee(" <!>", 1);
function uv(e, t) {
  te(t, !0);
  let n = H(t, "data", 19, () => ({ label: "Node" })), r = H(t, "targetPosition", 19, () => J.Top);
  var o = cv(), i = ae(o), s = j(i);
  Ht(s, {
    type: "target",
    get position() {
      return r();
    }
  }), ce(() => Ae(i, `${n()?.label ?? ""} `)), V(e, o), ne();
}
function dv(e, t) {
}
function xo(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function fv(e, t) {
  const n = /* @__PURE__ */ y(Zt), r = /* @__PURE__ */ y(() => u(n).domNode);
  let o;
  return u(r) ? xo(e, u(r), t) : o = ra(() => {
    Ge(() => {
      xo(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      xo(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function hv() {
  let e = /* @__PURE__ */ ie(typeof window > "u");
  if (u(e)) {
    const t = ra(() => {
      Ge(() => {
        O(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return u(e);
    }
  };
}
const ws = (e) => ng(e), gv = (e) => rl(e);
function dt(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Kr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var vv = /* @__PURE__ */ ee("<div><!></div>");
function pv(e, t) {
  te(t, !0);
  let n = H(t, "x", 3, 0), r = H(t, "y", 3, 0), o = H(t, "selectEdgeOnClick", 3, !1), i = H(t, "transparent", 3, !1), s = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "x",
    "y",
    "width",
    "height",
    "selectEdgeOnClick",
    "transparent",
    "class",
    "children"
  ]);
  const a = Zt(), l = rv("EdgeLabel must be used within a Custom Edge component");
  let c = /* @__PURE__ */ y(() => a.visible.edges.get(l)?.zIndex);
  var d = vv(), h = () => {
    o() && l && a.handleEdgeSelection(l);
  };
  Ft(
    d,
    (g) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: i() },
        t.class
      ],
      tabindex: "-1",
      onclick: h,
      ...s,
      [pt]: g
    }),
    [
      () => ({
        display: hv().value ? "none" : void 0,
        cursor: o() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: dt(t.width),
        height: dt(t.height),
        "z-index": u(c)
      })
    ],
    void 0,
    void 0,
    "svelte-1wg91mu"
  );
  var f = q(d);
  He(f, () => t.children ?? Lt), Pe(d, (g, v) => fv?.(g, v), () => "edge-labels"), V(e, d), ne();
}
var mv = /* @__PURE__ */ pe("<path></path>"), yv = /* @__PURE__ */ pe('<path fill="none"></path><!><!>', 1);
function lo(e, t) {
  let n = H(t, "interactionWidth", 3, 20), r = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "path",
    "label",
    "labelX",
    "labelY",
    "labelStyle",
    "markerStart",
    "markerEnd",
    "style",
    "interactionWidth",
    "class"
  ]);
  var o = yv(), i = ae(o), s = j(i);
  {
    var a = (d) => {
      var h = mv();
      Ft(h, () => ({
        d: t.path,
        "stroke-opacity": 0,
        "stroke-width": n(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...r
      })), V(d, h);
    };
    le(s, (d) => {
      n() > 0 && d(a);
    });
  }
  var l = j(s);
  {
    var c = (d) => {
      pv(d, {
        get x() {
          return t.labelX;
        },
        get y() {
          return t.labelY;
        },
        get style() {
          return t.labelStyle;
        },
        selectEdgeOnClick: !0,
        children: (h, f) => {
          var g = Gc();
          ce(() => Ae(g, t.label)), V(h, g);
        },
        $$slots: { default: !0 }
      });
    };
    le(l, (d) => {
      t.label && d(c);
    });
  }
  ce(() => {
    U(i, "id", t.id), U(i, "d", t.path), ke(i, 0, Bt(["svelte-flow__edge-path", t.class])), U(i, "marker-start", t.markerStart), U(i, "marker-end", t.markerEnd), Ke(i, t.style);
  }), V(e, o);
}
function Cl(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ y(() => hl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    curvature: t.pathOptions?.curvature
  })), r = /* @__PURE__ */ y(() => Jn(u(n), 3)), o = /* @__PURE__ */ y(() => u(r)[0]), i = /* @__PURE__ */ y(() => u(r)[1]), s = /* @__PURE__ */ y(() => u(r)[2]);
  lo(e, {
    get id() {
      return t.id;
    },
    get path() {
      return u(o);
    },
    get labelX() {
      return u(i);
    },
    get labelY() {
      return u(s);
    },
    get label() {
      return t.label;
    },
    get labelStyle() {
      return t.labelStyle;
    },
    get markerStart() {
      return t.markerStart;
    },
    get markerEnd() {
      return t.markerEnd;
    },
    get interactionWidth() {
      return t.interactionWidth;
    },
    get style() {
      return t.style;
    }
  }), ne();
}
function wv(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ y(() => mi({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition
  })), r = /* @__PURE__ */ y(() => Jn(u(n), 3)), o = /* @__PURE__ */ y(() => u(r)[0]), i = /* @__PURE__ */ y(() => u(r)[1]), s = /* @__PURE__ */ y(() => u(r)[2]);
  lo(e, {
    get path() {
      return u(o);
    },
    get labelX() {
      return u(i);
    },
    get labelY() {
      return u(s);
    },
    get label() {
      return t.label;
    },
    get labelStyle() {
      return t.labelStyle;
    },
    get markerStart() {
      return t.markerStart;
    },
    get markerEnd() {
      return t.markerEnd;
    },
    get interactionWidth() {
      return t.interactionWidth;
    },
    get style() {
      return t.style;
    }
  }), ne();
}
function _v(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ y(() => vl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY
  })), r = /* @__PURE__ */ y(() => Jn(u(n), 3)), o = /* @__PURE__ */ y(() => u(r)[0]), i = /* @__PURE__ */ y(() => u(r)[1]), s = /* @__PURE__ */ y(() => u(r)[2]);
  lo(e, {
    get path() {
      return u(o);
    },
    get labelX() {
      return u(i);
    },
    get labelY() {
      return u(s);
    },
    get label() {
      return t.label;
    },
    get labelStyle() {
      return t.labelStyle;
    },
    get markerStart() {
      return t.markerStart;
    },
    get markerEnd() {
      return t.markerEnd;
    },
    get interactionWidth() {
      return t.interactionWidth;
    },
    get style() {
      return t.style;
    }
  }), ne();
}
function bv(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ y(() => mi({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    borderRadius: 0
  })), r = /* @__PURE__ */ y(() => Jn(u(n), 3)), o = /* @__PURE__ */ y(() => u(r)[0]), i = /* @__PURE__ */ y(() => u(r)[1]), s = /* @__PURE__ */ y(() => u(r)[2]);
  lo(e, {
    get path() {
      return u(o);
    },
    get labelX() {
      return u(i);
    },
    get labelY() {
      return u(s);
    },
    get label() {
      return t.label;
    },
    get labelStyle() {
      return t.labelStyle;
    },
    get markerStart() {
      return t.markerStart;
    },
    get markerEnd() {
      return t.markerEnd;
    },
    get interactionWidth() {
      return t.interactionWidth;
    },
    get style() {
      return t.style;
    }
  }), ne();
}
class xv {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#e = t, this.#t = Zs(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const Ev = /\(.+\)/, Sv = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class kv extends xv {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Ev.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Sv.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Ao(o, "change", i)
    );
  }
}
function Cv(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return vi(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function _s(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l, zIndexMode: c } = e, d = /* @__PURE__ */ new Map();
  for (const h of t) {
    const f = r.get(h.source), g = r.get(h.target);
    if (!f || !g)
      continue;
    if (a) {
      const { visibleNodes: p, transform: b, width: P, height: N } = e;
      if (pg({
        sourceNode: f,
        targetNode: g,
        width: P,
        height: N,
        transform: b
      }))
        p.set(f.id, f), p.set(g.id, g);
      else
        continue;
    }
    const v = o.get(h.id);
    if (v && h === v.edge && f == v.sourceNode && g == v.targetNode) {
      d.set(h.id, v);
      continue;
    }
    const _ = Eg({
      id: h.id,
      sourceNode: f,
      targetNode: g,
      sourceHandle: h.sourceHandle || null,
      targetHandle: h.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    _ && d.set(h.id, {
      ...n,
      ...h,
      ..._,
      zIndex: vg({
        selected: h.selected,
        zIndex: h.zIndex ?? n.zIndex,
        sourceNode: f,
        targetNode: g,
        elevateOnSelect: l,
        zIndexMode: c
      }),
      sourceNode: f,
      targetNode: g,
      edge: h
    });
  }
  return d;
}
const Nl = {
  input: lv,
  output: uv,
  default: kl,
  group: dv
}, Pl = {
  straight: _v,
  smoothstep: wv,
  default: Cl,
  step: bv
};
function Nv(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = cr(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return pi(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function Pv(e) {
  class t {
    #e = /* @__PURE__ */ y(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#e);
    }
    set flowId(r) {
      O(this.#e, r);
    }
    #t = /* @__PURE__ */ ie(null);
    get domNode() {
      return u(this.#t);
    }
    set domNode(r) {
      O(this.#t, r);
    }
    #n = /* @__PURE__ */ ie(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      O(this.#n, r);
    }
    #r = /* @__PURE__ */ ie(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      O(this.#r, r);
    }
    #l = /* @__PURE__ */ ie(e.height ?? 0);
    get height() {
      return u(this.#l);
    }
    set height(r) {
      O(this.#l, r);
    }
    #i = /* @__PURE__ */ ie(e.props.zIndexMode ?? "basic");
    get zIndexMode() {
      return u(this.#i);
    }
    set zIndexMode(r) {
      O(this.#i, r);
    }
    #o = /* @__PURE__ */ y(() => {
      const r = Mg(e.nodes, this.nodeLookup, this.parentLookup, {
        nodeExtent: this.nodeExtent,
        nodeOrigin: this.nodeOrigin,
        elevateNodesOnSelect: e.props.elevateNodesOnSelect ?? !0,
        checkEquality: !0,
        zIndexMode: this.zIndexMode
      });
      return this.fitViewQueued && r && (this.fitViewOptions?.duration ? this.resolveFitView() : queueMicrotask(() => {
        this.resolveFitView();
      })), r;
    });
    get nodesInitialized() {
      return u(this.#o);
    }
    set nodesInitialized(r) {
      O(this.#o, r);
    }
    #s = /* @__PURE__ */ y(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#s);
    }
    set viewportInitialized(r) {
      O(this.#s, r);
    }
    #a = /* @__PURE__ */ y(() => (Og(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#a);
    }
    set _edges(r) {
      O(this.#a, r);
    }
    get nodes() {
      return this.nodesInitialized, e.nodes;
    }
    set nodes(r) {
      e.nodes = r;
    }
    get edges() {
      return this._edges;
    }
    set edges(r) {
      e.edges = r;
    }
    _prevSelectedNodes = [];
    _prevSelectedNodeIds = /* @__PURE__ */ new Set();
    #c = /* @__PURE__ */ y(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return u(this.#c);
    }
    set selectedNodes(r) {
      O(this.#c, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ y(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#u);
    }
    set selectedEdges(r) {
      O(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #d = /* @__PURE__ */ y(() => {
      const {
        // We need to access this._nodes to trigger on changes
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        nodes: r,
        _edges: o,
        _prevVisibleEdges: i,
        nodeLookup: s,
        connectionMode: a,
        onerror: l,
        onlyRenderVisibleElements: c,
        defaultEdgeOptions: d,
        zIndexMode: h
      } = this;
      let f, g;
      const v = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        zIndexMode: h,
        onerror: l
      };
      if (c) {
        const { viewport: _, width: p, height: b } = this, P = [_.x, _.y, _.zoom];
        f = Cv(s, P, p, b), g = _s({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: P,
          width: p,
          height: b
        });
      } else
        f = this.nodeLookup, g = _s(v);
      return { nodes: f, edges: g };
    });
    get visible() {
      return u(this.#d);
    }
    set visible(r) {
      O(this.#d, r);
    }
    #f = /* @__PURE__ */ y(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#f);
    }
    set nodesDraggable(r) {
      O(this.#f, r);
    }
    #g = /* @__PURE__ */ y(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#g);
    }
    set nodesConnectable(r) {
      O(this.#g, r);
    }
    #h = /* @__PURE__ */ y(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#h);
    }
    set elementsSelectable(r) {
      O(this.#h, r);
    }
    #w = /* @__PURE__ */ y(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#w);
    }
    set nodesFocusable(r) {
      O(this.#w, r);
    }
    #_ = /* @__PURE__ */ y(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#_);
    }
    set edgesFocusable(r) {
      O(this.#_, r);
    }
    #b = /* @__PURE__ */ y(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#b);
    }
    set disableKeyboardA11y(r) {
      O(this.#b, r);
    }
    #m = /* @__PURE__ */ y(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#m);
    }
    set minZoom(r) {
      O(this.#m, r);
    }
    #v = /* @__PURE__ */ y(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#v);
    }
    set maxZoom(r) {
      O(this.#v, r);
    }
    #p = /* @__PURE__ */ y(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#p);
    }
    set nodeOrigin(r) {
      O(this.#p, r);
    }
    #y = /* @__PURE__ */ y(() => e.props.nodeExtent ?? Ko);
    get nodeExtent() {
      return u(this.#y);
    }
    set nodeExtent(r) {
      O(this.#y, r);
    }
    #x = /* @__PURE__ */ y(() => e.props.translateExtent ?? Ko);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      O(this.#x, r);
    }
    #E = /* @__PURE__ */ y(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#E);
    }
    set defaultEdgeOptions(r) {
      O(this.#E, r);
    }
    #S = /* @__PURE__ */ y(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#S);
    }
    set nodeDragThreshold(r) {
      O(this.#S, r);
    }
    #k = /* @__PURE__ */ y(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      O(this.#k, r);
    }
    #C = /* @__PURE__ */ y(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#C);
    }
    set autoPanOnConnect(r) {
      O(this.#C, r);
    }
    #N = /* @__PURE__ */ y(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#N);
    }
    set autoPanOnNodeFocus(r) {
      O(this.#N, r);
    }
    #P = /* @__PURE__ */ y(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return u(this.#P);
    }
    set autoPanSpeed(r) {
      O(this.#P, r);
    }
    #M = /* @__PURE__ */ y(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#M);
    }
    set connectionDragThreshold(r) {
      O(this.#M, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #A = /* @__PURE__ */ y(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#A);
    }
    set snapGrid(r) {
      O(this.#A, r);
    }
    #T = /* @__PURE__ */ ie(!1);
    get dragging() {
      return u(this.#T);
    }
    set dragging(r) {
      O(this.#T, r);
    }
    #D = /* @__PURE__ */ ie(null);
    get selectionRect() {
      return u(this.#D);
    }
    set selectionRect(r) {
      O(this.#D, r);
    }
    #I = /* @__PURE__ */ ie(!1);
    get selectionKeyPressed() {
      return u(this.#I);
    }
    set selectionKeyPressed(r) {
      O(this.#I, r);
    }
    #z = /* @__PURE__ */ ie(!1);
    get multiselectionKeyPressed() {
      return u(this.#z);
    }
    set multiselectionKeyPressed(r) {
      O(this.#z, r);
    }
    #O = /* @__PURE__ */ ie(!1);
    get deleteKeyPressed() {
      return u(this.#O);
    }
    set deleteKeyPressed(r) {
      O(this.#O, r);
    }
    #R = /* @__PURE__ */ ie(!1);
    get panActivationKeyPressed() {
      return u(this.#R);
    }
    set panActivationKeyPressed(r) {
      O(this.#R, r);
    }
    #H = /* @__PURE__ */ ie(!1);
    get zoomActivationKeyPressed() {
      return u(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      O(this.#H, r);
    }
    #L = /* @__PURE__ */ ie(null);
    get selectionRectMode() {
      return u(this.#L);
    }
    set selectionRectMode(r) {
      O(this.#L, r);
    }
    #V = /* @__PURE__ */ ie("");
    get ariaLiveMessage() {
      return u(this.#V);
    }
    set ariaLiveMessage(r) {
      O(this.#V, r);
    }
    #B = /* @__PURE__ */ y(() => e.props.selectionMode ?? Lr.Partial);
    get selectionMode() {
      return u(this.#B);
    }
    set selectionMode(r) {
      O(this.#B, r);
    }
    #F = /* @__PURE__ */ y(() => ({ ...Nl, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#F);
    }
    set nodeTypes(r) {
      O(this.#F, r);
    }
    #K = /* @__PURE__ */ y(() => ({ ...Pl, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#K);
    }
    set edgeTypes(r) {
      O(this.#K, r);
    }
    #Y = /* @__PURE__ */ y(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#Y);
    }
    set noPanClass(r) {
      O(this.#Y, r);
    }
    #Z = /* @__PURE__ */ y(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#Z);
    }
    set noDragClass(r) {
      O(this.#Z, r);
    }
    #X = /* @__PURE__ */ y(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#X);
    }
    set noWheelClass(r) {
      O(this.#X, r);
    }
    #W = /* @__PURE__ */ y(() => fg(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#W);
    }
    set ariaLabelConfig(r) {
      O(this.#W, r);
    }
    #q = /* @__PURE__ */ ie(Nv(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#q);
    }
    set _viewport(r) {
      O(this.#q, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #G = (
      // _connection is viewport independent and originating from XYHandle
      /* @__PURE__ */ ie(Yo)
    );
    get _connection() {
      return u(this.#G);
    }
    set _connection(r) {
      O(this.#G, r);
    }
    #U = /* @__PURE__ */ y(() => this._connection.inProgress ? {
      ...this._connection,
      to: dr(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#U);
    }
    set connection(r) {
      O(this.#U, r);
    }
    #j = /* @__PURE__ */ y(() => e.props.connectionMode ?? Sn.Strict);
    get connectionMode() {
      return u(this.#j);
    }
    set connectionMode(r) {
      O(this.#j, r);
    }
    #J = /* @__PURE__ */ y(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#J);
    }
    set connectionRadius(r) {
      O(this.#J, r);
    }
    #Q = /* @__PURE__ */ y(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#Q);
    }
    set isValidConnection(r) {
      O(this.#Q, r);
    }
    #$ = /* @__PURE__ */ y(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#$);
    }
    set selectNodesOnDrag(r) {
      O(this.#$, r);
    }
    #ee = /* @__PURE__ */ y(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#ee);
    }
    set defaultMarkerColor(r) {
      O(this.#ee, r);
    }
    #te = /* @__PURE__ */ y(() => Sg(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#te);
    }
    set markers(r) {
      O(this.#te, r);
    }
    #ne = /* @__PURE__ */ y(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#ne);
    }
    set onlyRenderVisibleElements(r) {
      O(this.#ne, r);
    }
    #re = /* @__PURE__ */ y(() => e.props.onflowerror ?? lg);
    get onerror() {
      return u(this.#re);
    }
    set onerror(r) {
      O(this.#re, r);
    }
    #oe = /* @__PURE__ */ y(() => e.props.ondelete);
    get ondelete() {
      return u(this.#oe);
    }
    set ondelete(r) {
      O(this.#oe, r);
    }
    #ie = /* @__PURE__ */ y(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#ie);
    }
    set onbeforedelete(r) {
      O(this.#ie, r);
    }
    #se = /* @__PURE__ */ y(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#se);
    }
    set onbeforeconnect(r) {
      O(this.#se, r);
    }
    #ae = /* @__PURE__ */ y(() => e.props.onconnect);
    get onconnect() {
      return u(this.#ae);
    }
    set onconnect(r) {
      O(this.#ae, r);
    }
    #le = /* @__PURE__ */ y(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#le);
    }
    set onconnectstart(r) {
      O(this.#le, r);
    }
    #ce = /* @__PURE__ */ y(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#ce);
    }
    set onconnectend(r) {
      O(this.#ce, r);
    }
    #ue = /* @__PURE__ */ y(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#ue);
    }
    set onbeforereconnect(r) {
      O(this.#ue, r);
    }
    #de = /* @__PURE__ */ y(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#de);
    }
    set onreconnect(r) {
      O(this.#de, r);
    }
    #fe = /* @__PURE__ */ y(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#fe);
    }
    set onreconnectstart(r) {
      O(this.#fe, r);
    }
    #he = /* @__PURE__ */ y(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#he);
    }
    set onreconnectend(r) {
      O(this.#he, r);
    }
    #ge = /* @__PURE__ */ y(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#ge);
    }
    set clickConnect(r) {
      O(this.#ge, r);
    }
    #ve = /* @__PURE__ */ y(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ve);
    }
    set onclickconnectstart(r) {
      O(this.#ve, r);
    }
    #pe = /* @__PURE__ */ y(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#pe);
    }
    set onclickconnectend(r) {
      O(this.#pe, r);
    }
    #me = /* @__PURE__ */ ie(null);
    get clickConnectStartHandle() {
      return u(this.#me);
    }
    set clickConnectStartHandle(r) {
      O(this.#me, r);
    }
    #ye = /* @__PURE__ */ y(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#ye);
    }
    set onselectiondrag(r) {
      O(this.#ye, r);
    }
    #we = /* @__PURE__ */ y(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#we);
    }
    set onselectiondragstart(r) {
      O(this.#we, r);
    }
    #_e = /* @__PURE__ */ y(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#_e);
    }
    set onselectiondragstop(r) {
      O(this.#_e, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await sg(
        {
          nodes: this.nodeLookup,
          width: this.width,
          height: this.height,
          panZoom: this.panZoom,
          minZoom: this.minZoom,
          maxZoom: this.maxZoom
        },
        this.fitViewOptions
      ), this.fitViewResolver?.resolve(!0), this.fitViewQueued = !1, this.fitViewOptions = void 0, this.fitViewResolver = null);
    };
    _prefersDark = new kv("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ y(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#be);
    }
    set colorMode(r) {
      O(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Yo, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Zt() {
  const e = jo(Yr);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Yr = /* @__PURE__ */ Symbol();
function Ml(e) {
  const t = Pv(e);
  function n(A) {
    t.nodeTypes = {
      ...Nl,
      ...A
    };
  }
  function r(A) {
    t.edgeTypes = {
      ...Pl,
      ...A
    };
  }
  function o(A) {
    t.edges = wg(A, t.edges);
  }
  const i = (A, x = !1) => {
    t.nodes = t.nodes.map((M) => {
      if (t.connection.inProgress && t.connection.fromNode.id === M.id) {
        const S = t.nodeLookup.get(M.id);
        S && (t.connection = {
          ...t.connection,
          from: an(S, t.connection.fromHandle, J.Left, !0)
        });
      }
      const m = A.get(M.id);
      return m ? { ...M, position: m.position, dragging: x } : M;
    });
  };
  function s(A) {
    const { changes: x, updatedInternals: M } = Ig(A, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin, t.nodeExtent, t.zIndexMode);
    if (!M)
      return;
    Ng(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent,
      zIndexMode: t.zIndexMode
    }), t.fitViewQueued && t.resolveFitView();
    const m = /* @__PURE__ */ new Map();
    for (const S of x) {
      const E = t.nodeLookup.get(S.id)?.internals.userNode;
      if (!E)
        continue;
      const D = { ...E };
      switch (S.type) {
        case "dimensions": {
          const R = { ...D.measured, ...S.dimensions };
          S.setAttributes && (D.width = S.dimensions?.width ?? D.width, D.height = S.dimensions?.height ?? D.height), D.measured = R;
          break;
        }
        case "position":
          D.position = S.position ?? D.position;
          break;
      }
      m.set(S.id, D);
    }
    t.nodes = t.nodes.map((S) => m.get(S.id) ?? S);
  }
  function a(A) {
    const x = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = A, t.fitViewResolver = x, t.nodes = [...t.nodes], x.promise;
  }
  async function l(A, x, M) {
    const m = typeof M?.zoom < "u" ? M.zoom : t.maxZoom, S = t.panZoom;
    return S ? (await S.setViewport({
      x: t.width / 2 - A * m,
      y: t.height / 2 - x * m,
      zoom: m
    }, { duration: M?.duration, ease: M?.ease, interpolate: M?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(A, x) {
    const M = t.panZoom;
    return M ? M.scaleBy(A, x) : Promise.resolve(!1);
  }
  function d(A) {
    return c(1.2, A);
  }
  function h(A) {
    return c(1 / 1.2, A);
  }
  function f(A) {
    const x = t.panZoom;
    x && (x.setScaleExtent([A, t.maxZoom]), t.minZoom = A);
  }
  function g(A) {
    const x = t.panZoom;
    x && (x.setScaleExtent([t.minZoom, A]), t.maxZoom = A);
  }
  function v(A) {
    const x = t.panZoom;
    x && (x.setTranslateExtent(A), t.translateExtent = A);
  }
  function _(A, x = null) {
    let M = !1;
    const m = A.map((S) => (x ? x.has(S.id) : !0) && S.selected ? (M = !0, { ...S, selected: !1 }) : S);
    return [M, m];
  }
  function p(A) {
    const x = A?.nodes ? new Set(A.nodes.map((R) => R.id)) : null, [M, m] = _(t.nodes, x);
    M && (t.nodes = m);
    const S = A?.edges ? new Set(A.edges.map((R) => R.id)) : null, [E, D] = _(t.edges, S);
    E && (t.edges = D);
  }
  function b(A) {
    const x = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((M) => {
      const m = A.includes(M.id), S = x && M.selected || m;
      return !!M.selected !== S ? { ...M, selected: S } : M;
    }), x || p({ nodes: [] });
  }
  function P(A) {
    const x = t.multiselectionKeyPressed;
    t.edges = t.edges.map((M) => {
      const m = A.includes(M.id), S = x && M.selected || m;
      return !!M.selected !== S ? { ...M, selected: S } : M;
    }), x || p({ edges: [] });
  }
  function N(A, x, M) {
    const m = t.nodeLookup.get(A);
    if (!m) {
      console.warn("012", Gn.error012(A));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, m.selected ? (x || m.selected && t.multiselectionKeyPressed) && (p({ nodes: [m], edges: [] }), requestAnimationFrame(() => M?.blur())) : b([A]);
  }
  function w(A) {
    const x = t.edgeLookup.get(A);
    if (!x) {
      console.warn("012", Gn.error012(A));
      return;
    }
    (x.selectable || t.elementsSelectable && typeof x.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, x.selected ? x.selected && t.multiselectionKeyPressed && p({ nodes: [], edges: [x] }) : P([A]));
  }
  function C(A, x) {
    const { nodeExtent: M, snapGrid: m, nodeOrigin: S, nodeLookup: E, nodesDraggable: D, onerror: R } = t, z = /* @__PURE__ */ new Map(), L = m?.[0] ?? 5, F = m?.[1] ?? 5, X = A.x * L * x, Z = A.y * F * x;
    for (const K of E.values()) {
      if (!(K.selected && (K.draggable || D && typeof K.draggable > "u")))
        continue;
      let W = {
        x: K.internals.positionAbsolute.x + X,
        y: K.internals.positionAbsolute.y + Z
      };
      m && (W = ur(W, m));
      const { position: G, positionAbsolute: $ } = ol({
        nodeId: K.id,
        nextPosition: W,
        nodeLookup: E,
        nodeExtent: M,
        nodeOrigin: S,
        onError: R
      });
      K.position = G, K.internals.positionAbsolute = $, z.set(K.id, K);
    }
    i(z);
  }
  function T(A) {
    return zg({
      delta: A,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const I = (A) => {
    t._connection = { ...A };
  };
  function k() {
    t._connection = Yo;
  }
  function B() {
    t.resetStoreValues(), p();
  }
  return Object.assign(t, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: h,
    fitView: a,
    setCenter: l,
    setMinZoom: f,
    setMaxZoom: g,
    setTranslateExtent: v,
    unselectNodesAndEdges: p,
    addSelectedNodes: b,
    addSelectedEdges: P,
    handleNodeSelection: N,
    handleEdgeSelection: w,
    moveSelectedNodes: C,
    panBy: T,
    updateConnection: I,
    cancelConnection: k,
    reset: B
  });
}
function Mv(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: c, onDraggingChange: d, onTransformChange: h } = t, f = Qg({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), g = f.getViewport();
  return (o.x !== g.x || o.y !== g.y || o.zoom !== g.zoom) && h([g.x, g.y, g.zoom]), c(f), f.update(t), {
    update(v) {
      f.update(v);
    }
  };
}
var Av = /* @__PURE__ */ ee('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Tv(e, t) {
  te(t, !0);
  let n = H(t, "store", 15), r = /* @__PURE__ */ y(() => n().panActivationKeyPressed || t.panOnDrag), o = /* @__PURE__ */ y(() => n().panActivationKeyPressed || t.panOnScroll);
  const { viewport: i } = n();
  let s = !1;
  Ge(() => {
    !s && n().viewportInitialized && (t.oninit?.(), s = !0);
  });
  var a = Av(), l = q(a);
  He(l, () => t.children), Pe(a, (c, d) => Mv?.(c, d), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: i,
    onDraggingChange: (c) => {
      n(n().dragging = c, !0);
    },
    setPanZoomInstance: (c) => {
      n(n().panZoom = c, !0);
    },
    onPanZoomStart: t.onmovestart,
    onPanZoom: t.onmove,
    onPanZoomEnd: t.onmoveend,
    zoomOnScroll: t.zoomOnScroll,
    zoomOnDoubleClick: t.zoomOnDoubleClick,
    zoomOnPinch: t.zoomOnPinch,
    panOnScroll: u(o),
    panOnDrag: u(r),
    panOnScrollSpeed: t.panOnScrollSpeed,
    panOnScrollMode: t.panOnScrollMode,
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof t.preventScrolling == "boolean" ? t.preventScrolling : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: t.paneClickDistance,
    selectionOnDrag: t.selectionOnDrag,
    onTransformChange: (c) => {
      n(n().viewport = { x: c[0], y: c[1], zoom: c[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), V(e, a), ne();
}
function bs(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function xs(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Es(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Dv = /* @__PURE__ */ ee("<div><!></div>");
function Iv(e, t) {
  te(t, !0);
  let n = H(t, "store", 15), r = H(t, "panOnDrag", 3, !0), o = H(t, "paneClickDistance", 3, 1), i, s = null, a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ y(() => n().panActivationKeyPressed || r()), d = /* @__PURE__ */ y(() => n().selectionKeyPressed || !!n().selectionRect || t.selectionOnDrag && u(c) !== !0), h = /* @__PURE__ */ y(() => n().elementsSelectable && (u(d) || n().selectionRectMode === "user")), f = !1;
  function g(k) {
    if (s = i?.getBoundingClientRect(), !s) return;
    const B = k.target === i, Y = !B && !!k.target.closest(".nokey"), A = t.selectionOnDrag && B || n().selectionKeyPressed;
    if (Y || !u(d) || !A || k.button !== 0 || !k.isPrimary)
      return;
    k.target?.setPointerCapture?.(k.pointerId), f = !1;
    const { x, y: M } = et(k, s);
    n(n().selectionRect = { width: 0, height: 0, startX: x, startY: M, x, y: M }, !0), B || (k.stopPropagation(), k.preventDefault());
  }
  function v(k) {
    if (!u(d) || !s || !n().selectionRect)
      return;
    const B = et(k, s), { startX: Y = 0, startY: A = 0 } = n().selectionRect;
    if (!f) {
      const E = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(B.x - Y, B.y - A) <= E)
        return;
      n().unselectNodesAndEdges(), t.onselectionstart?.(k);
    }
    f = !0;
    const x = {
      ...n().selectionRect,
      x: B.x < Y ? B.x : Y,
      y: B.y < A ? B.y : A,
      width: Math.abs(B.x - Y),
      height: Math.abs(B.y - A)
    }, M = a, m = l;
    a = new Set(vi(
      n().nodeLookup,
      x,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Lr.Partial,
      !0
    ).map((E) => E.id));
    const S = n().defaultEdgeOptions.selectable ?? !0;
    l = /* @__PURE__ */ new Set();
    for (const E of a) {
      const D = n().connectionLookup.get(E);
      if (D)
        for (const { edgeId: R } of D.values()) {
          const z = n().edgeLookup.get(R);
          z && (z.selectable ?? S) && l.add(R);
        }
    }
    Es(M, a) || n(n().nodes = n().nodes.map(xs(a)), !0), Es(m, l) || n(n().edges = n().edges.map(xs(l)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = x, !0);
  }
  function _(k) {
    k.button === 0 && (k.target?.releasePointerCapture?.(k.pointerId), !f && k.target === i && P?.(k), n(n().selectionRect = null, !0), f && n(n().selectionRectMode = a.size > 0 ? "nodes" : null, !0), f && t.onselectionend?.(k));
  }
  const p = (k) => {
    if (Array.isArray(u(c)) && u(c).includes(2)) {
      k.preventDefault();
      return;
    }
    t.onpanecontextmenu?.({ event: k });
  }, b = (k) => {
    f && (k.stopPropagation(), f = !1);
  };
  function P(k) {
    if (f || n().connection.inProgress) {
      f = !1;
      return;
    }
    t.onpaneclick?.({ event: k }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var N = Dv();
  let w;
  var C = /* @__PURE__ */ y(() => u(h) ? void 0 : bs(P, i));
  N.__click = function(...k) {
    u(C)?.apply(this, k);
  }, N.__pointermove = function(...k) {
    (u(h) ? v : void 0)?.apply(this, k);
  }, N.__pointerup = function(...k) {
    (u(h) ? _ : void 0)?.apply(this, k);
  };
  var T = /* @__PURE__ */ y(() => bs(p, i));
  N.__contextmenu = function(...k) {
    u(T)?.apply(this, k);
  };
  var I = q(N);
  He(I, () => t.children), ir(N, (k) => i = k, () => i), ce((k) => w = ke(N, 1, "svelte-flow__pane svelte-flow__container", null, w, k), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(d)
    })
  ]), en(
    "pointerdown",
    N,
    function(...k) {
      (u(h) ? g : void 0)?.apply(this, k);
    },
    !0
  ), en(
    "click",
    N,
    function(...k) {
      (u(h) ? b : void 0)?.apply(this, k);
    },
    !0
  ), V(e, N), ne();
}
Jr(["click", "pointermove", "pointerup", "contextmenu"]);
var zv = /* @__PURE__ */ ee('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Ov(e, t) {
  te(t, !0);
  var n = zv();
  let r;
  var o = q(n);
  He(o, () => t.children), ce(() => r = Ke(n, "", r, {
    transform: `translate(${t.store.viewport.x ?? ""}px, ${t.store.viewport.y ?? ""}px) scale(${t.store.viewport.zoom ?? ""})`
  })), V(e, n), ne();
}
function Al(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Lg({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const { snapGrid: c, viewport: d } = n;
      return {
        nodes: n.nodes,
        nodeLookup: n.nodeLookup,
        edges: n.edges,
        nodeExtent: n.nodeExtent,
        snapGrid: c || [0, 0],
        snapToGrid: !!c,
        nodeOrigin: n.nodeOrigin,
        multiSelectionActive: n.multiselectionKeyPressed,
        domNode: n.domNode,
        transform: [d.x, d.y, d.zoom],
        autoPanOnNodeDrag: n.autoPanOnNodeDrag,
        nodesDraggable: n.nodesDraggable,
        selectNodesOnDrag: n.selectNodesOnDrag,
        nodeDragThreshold: n.nodeDragThreshold,
        unselectNodesAndEdges: n.unselectNodesAndEdges,
        updateNodePositions: n.updateNodePositions,
        onSelectionDrag: n.onselectiondrag,
        onSelectionDragStart: n.onselectiondragstart,
        onSelectionDragStop: n.onselectiondragstop,
        panBy: n.panBy
      };
    }
  });
  function l(c, d) {
    if (d.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: c,
      noDragClassName: d.noDragClass,
      handleSelector: d.handleSelector,
      nodeId: d.nodeId,
      isSelectable: d.isSelectable,
      nodeClickDistance: d.nodeClickDistance
    });
  }
  return l(e, t), {
    update(c) {
      l(e, c);
    },
    destroy() {
      a.destroy();
    }
  };
}
var Rv = /* @__PURE__ */ ee('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>'), Hv = /* @__PURE__ */ ee('<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>', 1);
function Lv(e, t) {
  te(t, !0);
  var n = Hv(), r = ae(n), o = q(r), i = j(r, 2), s = q(i), a = j(i, 2);
  {
    var l = (c) => {
      var d = Rv(), h = q(d);
      ce(() => {
        U(d, "id", `${Vv}-${t.store.flowId}`), Ae(h, t.store.ariaLiveMessage);
      }), V(c, d);
    };
    le(a, (c) => {
      t.store.disableKeyboardA11y || c(l);
    });
  }
  ce(() => {
    U(r, "id", `${Tl}-${t.store.flowId}`), Ae(o, t.store.disableKeyboardA11y ? t.store.ariaLabelConfig["node.a11yDescription.default"] : t.store.ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), U(i, "id", `${Dl}-${t.store.flowId}`), Ae(s, t.store.ariaLabelConfig["edge.a11yDescription.default"]);
  }), V(e, n), ne();
}
const Tl = "svelte-flow__node-desc", Dl = "svelte-flow__edge-desc", Vv = "svelte-flow__aria-live";
var Bv = /* @__PURE__ */ ee("<div><!></div>");
function Fv(e, t) {
  te(t, !0);
  let n = H(t, "store", 15), r = /* @__PURE__ */ y(() => Ne(t.node.data, () => ({}), !0)), o = /* @__PURE__ */ y(() => Ne(t.node.selected, !1)), i = /* @__PURE__ */ y(() => t.node.draggable), s = /* @__PURE__ */ y(() => t.node.selectable), a = /* @__PURE__ */ y(() => Ne(t.node.deletable, !0)), l = /* @__PURE__ */ y(() => t.node.connectable), c = /* @__PURE__ */ y(() => t.node.focusable), d = /* @__PURE__ */ y(() => Ne(t.node.hidden, !1)), h = /* @__PURE__ */ y(() => Ne(t.node.dragging, !1)), f = /* @__PURE__ */ y(() => Ne(t.node.style, "")), g = /* @__PURE__ */ y(() => t.node.class), v = /* @__PURE__ */ y(() => Ne(t.node.type, "default")), _ = /* @__PURE__ */ y(() => t.node.parentId), p = /* @__PURE__ */ y(() => t.node.sourcePosition), b = /* @__PURE__ */ y(() => t.node.targetPosition), P = /* @__PURE__ */ y(() => Ne(t.node.measured, () => ({ width: 0, height: 0 }), !0).width), N = /* @__PURE__ */ y(() => Ne(t.node.measured, () => ({ width: 0, height: 0 }), !0).height), w = /* @__PURE__ */ y(() => t.node.initialWidth), C = /* @__PURE__ */ y(() => t.node.initialHeight), T = /* @__PURE__ */ y(() => t.node.width), I = /* @__PURE__ */ y(() => t.node.height), k = /* @__PURE__ */ y(() => t.node.dragHandle), B = /* @__PURE__ */ y(() => Ne(t.node.internals.z, 0)), Y = /* @__PURE__ */ y(() => t.node.internals.positionAbsolute.x), A = /* @__PURE__ */ y(() => t.node.internals.positionAbsolute.y), x = /* @__PURE__ */ y(() => t.node.internals.userNode), { id: M } = t.node, m = /* @__PURE__ */ y(() => u(i) ?? n().nodesDraggable), S = /* @__PURE__ */ y(() => u(s) ?? n().elementsSelectable), E = /* @__PURE__ */ y(() => u(l) ?? n().nodesConnectable), D = /* @__PURE__ */ y(() => ll(t.node)), R = /* @__PURE__ */ y(() => !!t.node.internals.handleBounds), z = /* @__PURE__ */ y(() => u(D) && u(R)), L = /* @__PURE__ */ y(() => u(c) ?? n().nodesFocusable);
  function F(fe) {
    return n().parentLookup.has(fe);
  }
  let X = /* @__PURE__ */ y(() => F(M)), Z = /* @__PURE__ */ ie(null), K = null, Q = u(v), W = u(p), G = u(b), $ = /* @__PURE__ */ y(() => n().nodeTypes[u(v)] ?? kl), he = /* @__PURE__ */ y(() => n().ariaLabelConfig), be = {
    get value() {
      return u(E);
    }
  };
  ev(M), nv(be);
  let re = /* @__PURE__ */ y(() => {
    const fe = u(P) === void 0 ? u(T) ?? u(w) : u(T), we = u(N) === void 0 ? u(I) ?? u(C) : u(I);
    if (!(fe === void 0 && we === void 0 && u(f) === void 0))
      return `${u(f)};${fe ? `width:${dt(fe)};` : ""}${we ? `height:${dt(we)};` : ""}`;
  });
  Ge(() => {
    (u(v) !== Q || u(p) !== W || u(b) !== G) && u(Z) !== null && requestAnimationFrame(() => {
      u(Z) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[M, { id: M, nodeElement: u(Z), force: !0 }]]));
    }), Q = u(v), W = u(p), G = u(b);
  }), Ge(() => {
    t.resizeObserver && (!u(z) || u(Z) !== K) && (K && t.resizeObserver.unobserve(K), u(Z) && t.resizeObserver.observe(u(Z)), K = u(Z));
  }), $r(() => {
    K && t.resizeObserver?.unobserve(K);
  });
  function me(fe) {
    u(S) && (!n().selectNodesOnDrag || !u(m) || n().nodeDragThreshold > 0) && n().handleNodeSelection(M), t.onnodeclick?.({ node: u(x), event: fe });
  }
  function oe(fe) {
    if (!(dl(fe) || n().disableKeyboardA11y))
      if (nl.includes(fe.key) && u(S)) {
        const we = fe.key === "Escape";
        n().handleNodeSelection(M, we, u(Z));
      } else u(m) && t.node.selected && Object.prototype.hasOwnProperty.call(Kr, fe.key) && (fe.preventDefault(), n(
        n().ariaLiveMessage = u(he)["node.a11yDescription.ariaLiveMessage"]({
          direction: fe.key.replace("Arrow", "").toLowerCase(),
          x: ~~t.node.internals.positionAbsolute.x,
          y: ~~t.node.internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Kr[fe.key], fe.shiftKey ? 4 : 1));
  }
  const Te = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(Z)?.matches(":focus-visible"))
      return;
    const { width: fe, height: we, viewport: je } = n();
    vi(/* @__PURE__ */ new Map([[M, t.node]]), { x: 0, y: 0, width: fe, height: we }, [je.x, je.y, je.zoom], !0).length > 0 || n().setCenter(t.node.position.x + (t.node.measured.width ?? 0) / 2, t.node.position.y + (t.node.measured.height ?? 0) / 2, { zoom: je.zoom });
  };
  var Ct = ye(), Nt = ae(Ct);
  {
    var ht = (fe) => {
      var we = Bv();
      Ft(we, () => ({
        "data-id": M,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${u(v)}`,
          u(g)
        ],
        style: u(re),
        onclick: me,
        onpointerenter: t.onnodepointerenter ? (ve) => t.onnodepointerenter({ node: u(x), event: ve }) : void 0,
        onpointerleave: t.onnodepointerleave ? (ve) => t.onnodepointerleave({ node: u(x), event: ve }) : void 0,
        onpointermove: t.onnodepointermove ? (ve) => t.onnodepointermove({ node: u(x), event: ve }) : void 0,
        oncontextmenu: t.onnodecontextmenu ? (ve) => t.onnodecontextmenu({ node: u(x), event: ve }) : void 0,
        onkeydown: u(L) ? oe : void 0,
        onfocus: u(L) ? Te : void 0,
        tabIndex: u(L) ? 0 : void 0,
        role: t.node.ariaRole ?? (u(L) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Tl}-${n().flowId}`,
        ...t.node.domAttributes,
        [Mt]: {
          dragging: u(h),
          selected: u(o),
          draggable: u(m),
          connectable: u(E),
          selectable: u(S),
          nopan: u(m),
          parent: u(X)
        },
        [pt]: {
          "z-index": u(B),
          transform: `translate(${u(Y) ?? ""}px, ${u(A) ?? ""}px)`,
          visibility: u(D) ? "visible" : "hidden"
        }
      }));
      var je = q(we);
      Qr(je, () => u($), (ve, dn) => {
        dn(ve, {
          get data() {
            return u(r);
          },
          get id() {
            return M;
          },
          get selected() {
            return u(o);
          },
          get selectable() {
            return u(S);
          },
          get deletable() {
            return u(a);
          },
          get sourcePosition() {
            return u(p);
          },
          get targetPosition() {
            return u(b);
          },
          get zIndex() {
            return u(B);
          },
          get dragging() {
            return u(h);
          },
          get draggable() {
            return u(m);
          },
          get dragHandle() {
            return u(k);
          },
          get parentId() {
            return u(_);
          },
          get type() {
            return u(v);
          },
          get isConnectable() {
            return u(E);
          },
          get positionAbsoluteX() {
            return u(Y);
          },
          get positionAbsoluteY() {
            return u(A);
          },
          get width() {
            return u(T);
          },
          get height() {
            return u(I);
          }
        });
      }), Pe(we, (ve, dn) => Al?.(ve, dn), () => ({
        nodeId: M,
        isSelectable: u(S),
        disabled: !u(m),
        handleSelector: u(k),
        noDragClass: n().noDragClass,
        nodeClickDistance: t.nodeClickDistance,
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (ve, dn, Mn, An) => {
          t.onnodedrag?.({ event: ve, targetNode: Mn, nodes: An });
        },
        onDragStart: (ve, dn, Mn, An) => {
          t.onnodedragstart?.({ event: ve, targetNode: Mn, nodes: An });
        },
        onDragStop: (ve, dn, Mn, An) => {
          t.onnodedragstop?.({ event: ve, targetNode: Mn, nodes: An });
        },
        store: n()
      })), ir(we, (ve) => O(Z, ve), () => u(Z)), V(fe, we);
    };
    le(Nt, (fe) => {
      u(d) || fe(ht);
    });
  }
  V(e, Ct), ne();
}
var Kv = /* @__PURE__ */ ee('<div class="svelte-flow__nodes"></div>');
function Yv(e, t) {
  te(t, !0);
  let n = H(t, "store", 15);
  const r = typeof ResizeObserver > "u" ? null : new ResizeObserver((i) => {
    const s = /* @__PURE__ */ new Map();
    i.forEach((a) => {
      const l = a.target.getAttribute("data-id");
      s.set(l, { id: l, nodeElement: a.target, force: !0 });
    }), n().updateNodeInternals(s);
  });
  $r(() => {
    r?.disconnect();
  });
  var o = Kv();
  nn(o, 21, () => n().visible.nodes.values(), (i) => i.id, (i, s) => {
    Fv(i, {
      get node() {
        return u(s);
      },
      get resizeObserver() {
        return r;
      },
      get nodeClickDistance() {
        return t.nodeClickDistance;
      },
      get onnodeclick() {
        return t.onnodeclick;
      },
      get onnodepointerenter() {
        return t.onnodepointerenter;
      },
      get onnodepointermove() {
        return t.onnodepointermove;
      },
      get onnodepointerleave() {
        return t.onnodepointerleave;
      },
      get onnodedrag() {
        return t.onnodedrag;
      },
      get onnodedragstart() {
        return t.onnodedragstart;
      },
      get onnodedragstop() {
        return t.onnodedragstop;
      },
      get onnodecontextmenu() {
        return t.onnodecontextmenu;
      },
      get store() {
        return n();
      },
      set store(a) {
        n(a);
      }
    });
  }), V(e, o), ne();
}
var Zv = /* @__PURE__ */ pe('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Xv(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ y(() => t.edge.id), r = /* @__PURE__ */ y(() => t.edge.source), o = /* @__PURE__ */ y(() => t.edge.target), i = /* @__PURE__ */ y(() => t.edge.sourceX), s = /* @__PURE__ */ y(() => t.edge.sourceY), a = /* @__PURE__ */ y(() => t.edge.targetX), l = /* @__PURE__ */ y(() => t.edge.targetY), c = /* @__PURE__ */ y(() => t.edge.sourcePosition), d = /* @__PURE__ */ y(() => t.edge.targetPosition), h = /* @__PURE__ */ y(() => Ne(t.edge.animated, !1)), f = /* @__PURE__ */ y(() => Ne(t.edge.selected, !1)), g = /* @__PURE__ */ y(() => t.edge.label), v = /* @__PURE__ */ y(() => t.edge.labelStyle), _ = /* @__PURE__ */ y(() => Ne(t.edge.data, () => ({}), !0)), p = /* @__PURE__ */ y(() => t.edge.style), b = /* @__PURE__ */ y(() => t.edge.interactionWidth), P = /* @__PURE__ */ y(() => Ne(t.edge.type, "default")), N = /* @__PURE__ */ y(() => t.edge.sourceHandle), w = /* @__PURE__ */ y(() => t.edge.targetHandle), C = /* @__PURE__ */ y(() => t.edge.markerStart), T = /* @__PURE__ */ y(() => t.edge.markerEnd), I = /* @__PURE__ */ y(() => t.edge.selectable), k = /* @__PURE__ */ y(() => t.edge.focusable), B = /* @__PURE__ */ y(() => Ne(t.edge.deletable, !0)), Y = /* @__PURE__ */ y(() => t.edge.hidden), A = /* @__PURE__ */ y(() => t.edge.zIndex), x = /* @__PURE__ */ y(() => t.edge.class), M = /* @__PURE__ */ y(() => t.edge.ariaLabel);
  ov(u(n));
  let m = null, S = /* @__PURE__ */ y(() => u(I) ?? t.store.elementsSelectable), E = /* @__PURE__ */ y(() => u(k) ?? t.store.edgesFocusable), D = /* @__PURE__ */ y(() => t.store.edgeTypes[u(P)] ?? Cl), R = /* @__PURE__ */ y(() => u(C) ? `url('#${Xo(u(C), t.store.flowId)}')` : void 0), z = /* @__PURE__ */ y(() => u(T) ? `url('#${Xo(u(T), t.store.flowId)}')` : void 0);
  function L(W) {
    const G = t.store.edgeLookup.get(u(n));
    G && (u(S) && t.store.handleEdgeSelection(u(n)), t.onedgeclick?.({ event: W, edge: G }));
  }
  function F(W, G) {
    const $ = t.store.edgeLookup.get(u(n));
    $ && G({ event: W, edge: $ });
  }
  function X(W) {
    if (!t.store.disableKeyboardA11y && nl.includes(W.key) && u(S)) {
      const { unselectNodesAndEdges: G, addSelectedEdges: $ } = t.store;
      W.key === "Escape" ? (m?.blur(), G({ edges: [t.edge] })) : $([u(n)]);
    }
  }
  var Z = ye(), K = ae(Z);
  {
    var Q = (W) => {
      var G = Zv();
      let $;
      var he = q(G);
      Ft(he, () => ({
        class: ["svelte-flow__edge", u(x)],
        "data-id": u(n),
        onclick: L,
        oncontextmenu: t.onedgecontextmenu ? (re) => {
          F(re, t.onedgecontextmenu);
        } : void 0,
        onpointerenter: t.onedgepointerenter ? (re) => {
          F(re, t.onedgepointerenter);
        } : void 0,
        onpointerleave: t.onedgepointerleave ? (re) => {
          F(re, t.onedgepointerleave);
        } : void 0,
        "aria-label": u(M) === null ? void 0 : u(M) ? u(M) : `Edge from ${u(r)} to ${u(o)}`,
        "aria-describedby": u(E) ? `${Dl}-${t.store.flowId}` : void 0,
        role: t.edge.ariaRole ?? (u(E) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: u(E) ? X : void 0,
        tabindex: u(E) ? 0 : void 0,
        ...t.edge.domAttributes,
        [Mt]: {
          animated: u(h),
          selected: u(f),
          selectable: u(S)
        }
      }));
      var be = q(he);
      Qr(be, () => u(D), (re, me) => {
        me(re, {
          get id() {
            return u(n);
          },
          get source() {
            return u(r);
          },
          get target() {
            return u(o);
          },
          get sourceX() {
            return u(i);
          },
          get sourceY() {
            return u(s);
          },
          get targetX() {
            return u(a);
          },
          get targetY() {
            return u(l);
          },
          get sourcePosition() {
            return u(c);
          },
          get targetPosition() {
            return u(d);
          },
          get animated() {
            return u(h);
          },
          get selected() {
            return u(f);
          },
          get label() {
            return u(g);
          },
          get labelStyle() {
            return u(v);
          },
          get data() {
            return u(_);
          },
          get style() {
            return u(p);
          },
          get interactionWidth() {
            return u(b);
          },
          get selectable() {
            return u(S);
          },
          get deletable() {
            return u(B);
          },
          get type() {
            return u(P);
          },
          get sourceHandleId() {
            return u(N);
          },
          get targetHandleId() {
            return u(w);
          },
          get markerStart() {
            return u(R);
          },
          get markerEnd() {
            return u(z);
          }
        });
      }), ir(he, (re) => m = re, () => m), ce(() => $ = Ke(G, "", $, { "z-index": u(A) })), V(W, G);
    };
    le(K, (W) => {
      u(Y) || W(Q);
    });
  }
  V(e, Z), ne();
}
uc();
var Wv = /* @__PURE__ */ pe("<defs></defs>");
function qv(e, t) {
  te(t, !1);
  const n = Zt();
  du();
  var r = Wv();
  nn(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Jv(o, At(() => u(i)));
  }), V(e, r), ne();
}
var Gv = /* @__PURE__ */ pe('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Uv = /* @__PURE__ */ pe('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), jv = /* @__PURE__ */ pe('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Jv(e, t) {
  te(t, !0);
  let n = H(t, "width", 3, 12.5), r = H(t, "height", 3, 12.5), o = H(t, "markerUnits", 3, "strokeWidth"), i = H(t, "orient", 3, "auto-start-reverse"), s = H(t, "color", 3, "none");
  var a = jv(), l = q(a);
  {
    var c = (h) => {
      var f = Gv();
      let g;
      ce(() => {
        U(f, "stroke-width", t.strokeWidth), g = Ke(f, "", g, { stroke: s() });
      }), V(h, f);
    }, d = (h) => {
      var f = ye(), g = ae(f);
      {
        var v = (_) => {
          var p = Uv();
          let b;
          ce(() => {
            U(p, "stroke-width", t.strokeWidth), b = Ke(p, "", b, { stroke: s(), fill: s() });
          }), V(_, p);
        };
        le(
          g,
          (_) => {
            t.type === Vr.ArrowClosed && _(v);
          },
          !0
        );
      }
      V(h, f);
    };
    le(l, (h) => {
      t.type === Vr.Arrow ? h(c) : h(d, !1);
    });
  }
  ce(() => {
    U(a, "id", t.id), U(a, "markerWidth", `${n()}`), U(a, "markerHeight", `${r()}`), U(a, "markerUnits", o()), U(a, "orient", i());
  }), V(e, a), ne();
}
var Qv = /* @__PURE__ */ ee('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function $v(e, t) {
  te(t, !0);
  let n = H(t, "store", 15);
  var r = Qv(), o = q(r), i = q(o);
  qv(i, {});
  var s = j(o, 2);
  nn(s, 17, () => n().visible.edges.values(), (a) => a.id, (a, l) => {
    Xv(a, {
      get edge() {
        return u(l);
      },
      get onedgeclick() {
        return t.onedgeclick;
      },
      get onedgecontextmenu() {
        return t.onedgecontextmenu;
      },
      get onedgepointerenter() {
        return t.onedgepointerenter;
      },
      get onedgepointerleave() {
        return t.onedgepointerleave;
      },
      get store() {
        return n();
      },
      set store(c) {
        n(c);
      }
    });
  }), V(e, r), ne();
}
var e0 = /* @__PURE__ */ ee('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function Il(e, t) {
  te(t, !0);
  let n = H(t, "x", 3, 0), r = H(t, "y", 3, 0), o = H(t, "width", 3, 0), i = H(t, "height", 3, 0), s = H(t, "isVisible", 3, !0);
  var a = ye(), l = ae(a);
  {
    var c = (d) => {
      var h = e0();
      let f;
      ce((g) => f = Ke(h, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : dt(o()),
          height: typeof i() == "string" ? i() : dt(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), V(d, h);
    };
    le(l, (d) => {
      s() && d(c);
    });
  }
  V(e, a), ne();
}
var t0 = /* @__PURE__ */ ee("<div><!></div>");
function n0(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ ie(void 0);
  Ge(() => {
    t.store.disableKeyboardA11y || u(n)?.focus({ preventScroll: !0 });
  });
  let r = /* @__PURE__ */ y(() => {
    if (t.store.selectionRectMode === "nodes") {
      t.store.nodes;
      const d = cr(t.store.nodeLookup, { filter: (h) => !!h.selected });
      if (d.width > 0 && d.height > 0)
        return d;
    }
    return null;
  });
  function o(d) {
    const h = t.store.nodes.filter((f) => f.selected);
    t.onselectioncontextmenu?.({ nodes: h, event: d });
  }
  function i(d) {
    const h = t.store.nodes.filter((f) => f.selected);
    t.onselectionclick?.({ nodes: h, event: d });
  }
  function s(d) {
    Object.prototype.hasOwnProperty.call(Kr, d.key) && (d.preventDefault(), t.store.moveSelectedNodes(Kr[d.key], d.shiftKey ? 4 : 1));
  }
  var a = ye(), l = ae(a);
  {
    var c = (d) => {
      var h = t0();
      h.__contextmenu = o, h.__click = i, h.__keydown = function(...v) {
        (t.store.disableKeyboardA11y ? void 0 : s)?.apply(this, v);
      };
      let f;
      var g = q(h);
      Il(g, { width: "100%", height: "100%", x: 0, y: 0 }), Pe(h, (v, _) => Al?.(v, _), () => ({
        disabled: !1,
        store: t.store,
        onDrag: (v, _, p, b) => {
          t.onnodedrag?.({ event: v, targetNode: null, nodes: b });
        },
        onDragStart: (v, _, p, b) => {
          t.onnodedragstart?.({ event: v, targetNode: null, nodes: b });
        },
        onDragStop: (v, _, p, b) => {
          t.onnodedragstop?.({ event: v, targetNode: null, nodes: b });
        }
      })), ir(h, (v) => O(n, v), () => u(n)), ce(
        (v) => {
          ke(h, 1, Bt(["svelte-flow__selection-wrapper", t.store.noPanClass]), "svelte-sf2y5e"), U(h, "role", t.store.disableKeyboardA11y ? void 0 : "button"), U(h, "tabindex", t.store.disableKeyboardA11y ? void 0 : -1), f = Ke(h, "", f, v);
        },
        [
          () => ({
            width: dt(u(r).width),
            height: dt(u(r).height),
            transform: `translate(${u(r).x ?? ""}px, ${u(r).y ?? ""}px)`
          })
        ]
      ), V(d, h);
    };
    le(l, (d) => {
      t.store.selectionRectMode === "nodes" && u(r) && wt(u(r).x) && wt(u(r).y) && d(c);
    });
  }
  V(e, a), ne();
}
Jr(["contextmenu", "click", "keydown"]);
function r0(e) {
  switch (e) {
    case "ctrl":
      return 8;
    case "shift":
      return 4;
    case "alt":
      return 2;
    case "meta":
      return 1;
  }
}
function rt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], c = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, h, f) => h ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const h = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: g, callback: v, preventDefault: _, enabled: p } = h;
      if (p) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const P = Array.isArray(f) ? f : [f];
          let N = !1;
          for (const w of P)
            if ((Array.isArray(w) ? w : [w]).reduce(
              (T, I) => T | r0(I),
              0
            ) === c) {
              N = !0;
              break;
            }
          if (!N) continue;
        }
        _ && a.preventDefault();
        const b = {
          node: e,
          trigger: h,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), v?.(b);
      }
    }
  }
  let s;
  return n && (s = Ao(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = Ao(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function zl() {
  const e = /* @__PURE__ */ y(Zt), t = (i) => {
    const s = ws(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? dg(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Cn(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = Oe(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && ws(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = Oe(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && gv(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  const o = (i) => u(e).nodeLookup.get(i);
  return {
    zoomIn: u(e).zoomIn,
    zoomOut: u(e).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? u(e).nodes : Ss(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : Ss(u(e).edgeLookup, i),
    setZoom: (i, s) => {
      const a = u(e).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => u(e).viewport.zoom,
    setViewport: async (i, s) => {
      const a = u(e).viewport;
      return u(e).panZoom ? (await u(e).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => Ls(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = pi(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
      return await u(e).panZoom.setViewport(a, {
        duration: s?.duration,
        ease: s?.ease,
        interpolate: s?.interpolate
      }), Promise.resolve(!0);
    },
    /**
     * Partial is defined as "the 2 nodes/areas are intersecting partially".
     * If a is contained in b or b is contained in a, they are both
     * considered fully intersecting.
     */
    getIntersectingNodes: (i, s = !0, a) => {
      const l = as(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((d) => {
        const h = u(e).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = Cn(h), g = Un(f, c);
        return s && g > 0 || g >= f.width * f.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = as(i) ? i : t(i);
      if (!c)
        return !1;
      const d = Un(c, s);
      return a && d > 0 || d >= s.width * s.height || d >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await ag({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = Oe(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = Oe(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), (a.length > 0 || l.length > 0) && u(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: h, y: f } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - f };
      return dr(g, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), h = Fr(i, [s, a, l]);
      return { x: h.x + c, y: h.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...u(e).nodes],
      edges: [...u(e).edges],
      viewport: { ...u(e).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const l = u(e).nodeLookup.get(i)?.internals.userNode;
      if (!l)
        return;
      const c = typeof s == "function" ? s(l) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? c : { ...d.data, ...c }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => rg(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Ss(e, t) {
  const n = [];
  for (const r of t) {
    const o = e.get(r);
    if (o) {
      const i = "internals" in o ? o.internals?.userNode : o;
      n.push(i);
    }
  }
  return n;
}
function o0(e, t) {
  te(t, !0);
  let n = H(t, "store", 15), r = H(t, "selectionKey", 3, "Shift"), o = H(t, "multiSelectionKey", 19, () => jn() ? "Meta" : "Control"), i = H(t, "deleteKey", 3, "Backspace"), s = H(t, "panActivationKey", 3, " "), a = H(t, "zoomActivationKey", 19, () => jn() ? "Meta" : "Control"), { deleteElements: l } = zl();
  function c(_) {
    return _ !== null && typeof _ == "object";
  }
  function d(_) {
    return c(_) ? _.modifier || [] : [];
  }
  function h(_) {
    return _ == null ? "" : c(_) ? _.key : _;
  }
  function f(_, p) {
    return (Array.isArray(_) ? _ : [_]).map((P) => {
      const N = h(P);
      return {
        key: N,
        modifier: d(P),
        enabled: N !== null,
        callback: p
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function v() {
    const _ = n().nodes.filter((b) => b.selected), p = n().edges.filter((b) => b.selected);
    l({ nodes: _, edges: p });
  }
  en("blur", De, g), en("contextmenu", De, g), Pe(De, (_, p) => rt?.(_, p), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Pe(De, (_, p) => rt?.(_, p), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Pe(De, (_, p) => rt?.(_, p), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Pe(De, (_, p) => rt?.(_, p), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Pe(De, (_, p) => rt?.(_, p), () => ({
    trigger: f(i(), (_) => {
      !(_.originalEvent.ctrlKey || _.originalEvent.metaKey || _.originalEvent.shiftKey) && !dl(_.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), Pe(De, (_, p) => rt?.(_, p), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Pe(De, (_, p) => rt?.(_, p), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Pe(De, (_, p) => rt?.(_, p), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Pe(De, (_, p) => rt?.(_, p), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Pe(De, (_, p) => rt?.(_, p), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ne();
}
var i0 = /* @__PURE__ */ pe('<path fill="none" class="svelte-flow__connection-path"></path>'), s0 = /* @__PURE__ */ pe('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function a0(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ y(() => {
    if (!t.store.connection.inProgress)
      return "";
    const s = {
      sourceX: t.store.connection.from.x,
      sourceY: t.store.connection.from.y,
      sourcePosition: t.store.connection.fromPosition,
      targetX: t.store.connection.to.x,
      targetY: t.store.connection.to.y,
      targetPosition: t.store.connection.toPosition
    };
    switch (t.type) {
      case Tt.Bezier: {
        const [a] = hl(s);
        return a;
      }
      case Tt.Straight: {
        const [a] = vl(s);
        return a;
      }
      case Tt.Step:
      case Tt.SmoothStep: {
        const [a] = mi({
          ...s,
          borderRadius: t.type === Tt.Step ? 0 : void 0
        });
        return a;
      }
    }
  });
  var r = ye(), o = ae(r);
  {
    var i = (s) => {
      var a = s0(), l = q(a), c = q(l);
      {
        var d = (f) => {
          var g = ye(), v = ae(g);
          Qr(v, () => t.LineComponent, (_, p) => {
            p(_, {});
          }), V(f, g);
        }, h = (f) => {
          var g = i0();
          ce(() => {
            U(g, "d", u(n)), Ke(g, t.style);
          }), V(f, g);
        };
        le(c, (f) => {
          t.LineComponent ? f(d) : f(h, !1);
        });
      }
      ce(
        (f) => {
          U(a, "width", t.store.width), U(a, "height", t.store.height), Ke(a, t.containerStyle), ke(l, 0, f);
        },
        [
          () => Bt([
            "svelte-flow__connection",
            tg(t.store.connection.isValid)
          ])
        ]
      ), V(s, a);
    };
    le(o, (s) => {
      t.store.connection.inProgress && s(i);
    });
  }
  V(e, r), ne();
}
var l0 = /* @__PURE__ */ ee("<div><!></div>");
function Ei(e, t) {
  te(t, !0);
  let n = H(t, "position", 3, "top-right"), r = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "style",
    "class",
    "children"
  ]), o = /* @__PURE__ */ y(() => `${n()}`.split("-"));
  var i = l0();
  Ft(i, (a) => ({ class: a, style: t.style, ...r }), [
    () => [
      "svelte-flow__panel",
      t.class,
      ...u(o)
    ]
  ]);
  var s = q(i);
  He(s, () => t.children ?? Lt), V(e, i), ne();
}
var c0 = /* @__PURE__ */ ee('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function u0(e, t) {
  te(t, !0);
  let n = H(t, "position", 3, "bottom-right");
  var r = ye(), o = ae(r);
  {
    var i = (s) => {
      Ei(s, {
        get position() {
          return n();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (a, l) => {
          var c = c0();
          V(a, c);
        },
        $$slots: { default: !0 }
      });
    };
    le(o, (s) => {
      t.proOptions?.hideAttribution || s(i);
    });
  }
  V(e, r), ne();
}
var d0 = /* @__PURE__ */ ee("<div><!></div>");
function f0(e, t) {
  te(t, !0);
  let n = H(t, "domNode", 15), r = H(t, "clientWidth", 15), o = H(t, "clientHeight", 15), i = /* @__PURE__ */ y(() => t.rest.class), s = /* @__PURE__ */ y(() => Vc(t.rest, [
    "id",
    "class",
    "nodeTypes",
    "edgeTypes",
    "colorMode",
    "isValidConnection",
    "onmove",
    "onmovestart",
    "onmoveend",
    "onflowerror",
    "ondelete",
    "onbeforedelete",
    "onbeforeconnect",
    "onconnect",
    "onconnectstart",
    "onconnectend",
    "onbeforereconnect",
    "onreconnect",
    "onreconnectstart",
    "onreconnectend",
    "onclickconnectstart",
    "onclickconnectend",
    "oninit",
    "onselectionchange",
    "onselectiondragstart",
    "onselectiondrag",
    "onselectiondragstop",
    "onselectionstart",
    "onselectionend",
    "clickConnect",
    "fitView",
    "fitViewOptions",
    "nodeOrigin",
    "nodeDragThreshold",
    "connectionDragThreshold",
    "minZoom",
    "maxZoom",
    "initialViewport",
    "connectionRadius",
    "connectionMode",
    "selectionMode",
    "selectNodesOnDrag",
    "snapGrid",
    "defaultMarkerColor",
    "translateExtent",
    "nodeExtent",
    "onlyRenderVisibleElements",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "colorModeSSR",
    "defaultEdgeOptions",
    "elevateNodesOnSelect",
    "elevateEdgesOnSelect",
    "nodesDraggable",
    "autoPanOnNodeFocus",
    "nodesConnectable",
    "elementsSelectable",
    "nodesFocusable",
    "edgesFocusable",
    "disableKeyboardA11y",
    "noDragClass",
    "noPanClass",
    "noWheelClass",
    "ariaLabelConfig",
    "autoPanSpeed",
    "panOnScrollSpeed",
    "zIndexMode"
  ]));
  function a(d) {
    d.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), t.rest.onscroll && t.rest.onscroll(d);
  }
  var l = d0();
  Ft(
    l,
    (d) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        u(i),
        t.colorMode
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: a,
      ...u(s),
      [pt]: d
    }),
    [
      () => ({
        width: dt(t.width),
        height: dt(t.height)
      })
    ],
    void 0,
    void 0,
    "svelte-mkap6j"
  );
  var c = q(l);
  He(c, () => t.children ?? Lt), ir(l, (d) => n(d), () => n()), Li(l, "clientHeight", o), Li(l, "clientWidth", r), V(e, l), ne();
}
var h0 = /* @__PURE__ */ ee('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), g0 = /* @__PURE__ */ ee("<!> <!>", 1), v0 = /* @__PURE__ */ ee("<!> <!> <!> <!> <!>", 1);
function p0(e, t) {
  te(t, !0);
  let n = H(t, "paneClickDistance", 3, 1), r = H(t, "nodeClickDistance", 3, 1), o = H(t, "panOnScrollMode", 19, () => yn.Free), i = H(t, "preventScrolling", 3, !0), s = H(t, "zoomOnScroll", 3, !0), a = H(t, "zoomOnDoubleClick", 3, !0), l = H(t, "zoomOnPinch", 3, !0), c = H(t, "panOnScroll", 3, !1), d = H(t, "panOnScrollSpeed", 3, 0.5), h = H(t, "panOnDrag", 3, !0), f = H(t, "selectionOnDrag", 3, !1), g = H(t, "connectionLineType", 19, () => Tt.Bezier), v = H(t, "nodes", 31, () => it([])), _ = H(t, "edges", 31, () => it([])), p = H(t, "viewport", 15, void 0), b = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "width",
    "height",
    "proOptions",
    "selectionKey",
    "deleteKey",
    "panActivationKey",
    "multiSelectionKey",
    "zoomActivationKey",
    "paneClickDistance",
    "nodeClickDistance",
    "onmovestart",
    "onmoveend",
    "onmove",
    "oninit",
    "onnodeclick",
    "onnodecontextmenu",
    "onnodedrag",
    "onnodedragstart",
    "onnodedragstop",
    "onnodepointerenter",
    "onnodepointermove",
    "onnodepointerleave",
    "onselectionclick",
    "onselectioncontextmenu",
    "onselectionstart",
    "onselectionend",
    "onedgeclick",
    "onedgecontextmenu",
    "onedgepointerenter",
    "onedgepointerleave",
    "onpaneclick",
    "onpanecontextmenu",
    "panOnScrollMode",
    "preventScrolling",
    "zoomOnScroll",
    "zoomOnDoubleClick",
    "zoomOnPinch",
    "panOnScroll",
    "panOnScrollSpeed",
    "panOnDrag",
    "selectionOnDrag",
    "connectionLineComponent",
    "connectionLineStyle",
    "connectionLineContainerStyle",
    "connectionLineType",
    "attributionPosition",
    "children",
    "nodes",
    "edges",
    "viewport"
  ]), P = Ml({
    props: b,
    width: t.width,
    height: t.height,
    get nodes() {
      return v();
    },
    set nodes(w) {
      v(w);
    },
    get edges() {
      return _();
    },
    set edges(w) {
      _(w);
    },
    get viewport() {
      return p();
    },
    set viewport(w) {
      p(w);
    }
  });
  const N = jo(Yr);
  N && N.setStore && N.setStore(P), Jo(Yr, {
    provider: !1,
    getStore() {
      return P;
    }
  }), Ge(() => {
    const w = { nodes: P.selectedNodes, edges: P.selectedEdges };
    Oe(() => t.onselectionchange)?.(w);
    for (const C of P.selectionChangeHandlers.values())
      C(w);
  }), $r(() => {
    P.reset();
  }), f0(e, {
    get colorMode() {
      return P.colorMode;
    },
    get width() {
      return t.width;
    },
    get height() {
      return t.height;
    },
    get rest() {
      return b;
    },
    get domNode() {
      return P.domNode;
    },
    set domNode(w) {
      P.domNode = w;
    },
    get clientWidth() {
      return P.width;
    },
    set clientWidth(w) {
      P.width = w;
    },
    get clientHeight() {
      return P.height;
    },
    set clientHeight(w) {
      P.height = w;
    },
    children: (w, C) => {
      var T = v0(), I = ae(T);
      o0(I, {
        get selectionKey() {
          return t.selectionKey;
        },
        get deleteKey() {
          return t.deleteKey;
        },
        get panActivationKey() {
          return t.panActivationKey;
        },
        get multiSelectionKey() {
          return t.multiSelectionKey;
        },
        get zoomActivationKey() {
          return t.zoomActivationKey;
        },
        get store() {
          return P;
        },
        set store(x) {
          P = x;
        }
      });
      var k = j(I, 2);
      Tv(k, {
        get panOnScrollMode() {
          return o();
        },
        get preventScrolling() {
          return i();
        },
        get zoomOnScroll() {
          return s();
        },
        get zoomOnDoubleClick() {
          return a();
        },
        get zoomOnPinch() {
          return l();
        },
        get panOnScroll() {
          return c();
        },
        get panOnScrollSpeed() {
          return d();
        },
        get panOnDrag() {
          return h();
        },
        get paneClickDistance() {
          return n();
        },
        get selectionOnDrag() {
          return f();
        },
        get onmovestart() {
          return t.onmovestart;
        },
        get onmove() {
          return t.onmove;
        },
        get onmoveend() {
          return t.onmoveend;
        },
        get oninit() {
          return t.oninit;
        },
        get store() {
          return P;
        },
        set store(x) {
          P = x;
        },
        children: (x, M) => {
          Iv(x, {
            get onpaneclick() {
              return t.onpaneclick;
            },
            get onpanecontextmenu() {
              return t.onpanecontextmenu;
            },
            get onselectionstart() {
              return t.onselectionstart;
            },
            get onselectionend() {
              return t.onselectionend;
            },
            get panOnDrag() {
              return h();
            },
            get paneClickDistance() {
              return n();
            },
            get selectionOnDrag() {
              return f();
            },
            get store() {
              return P;
            },
            set store(m) {
              P = m;
            },
            children: (m, S) => {
              var E = g0(), D = ae(E);
              Ov(D, {
                get store() {
                  return P;
                },
                set store(z) {
                  P = z;
                },
                children: (z, L) => {
                  var F = h0(), X = j(ae(F), 2);
                  $v(X, {
                    get onedgeclick() {
                      return t.onedgeclick;
                    },
                    get onedgecontextmenu() {
                      return t.onedgecontextmenu;
                    },
                    get onedgepointerenter() {
                      return t.onedgepointerenter;
                    },
                    get onedgepointerleave() {
                      return t.onedgepointerleave;
                    },
                    get store() {
                      return P;
                    },
                    set store(W) {
                      P = W;
                    }
                  });
                  var Z = j(X, 4);
                  a0(Z, {
                    get type() {
                      return g();
                    },
                    get LineComponent() {
                      return t.connectionLineComponent;
                    },
                    get containerStyle() {
                      return t.connectionLineContainerStyle;
                    },
                    get style() {
                      return t.connectionLineStyle;
                    },
                    get store() {
                      return P;
                    },
                    set store(W) {
                      P = W;
                    }
                  });
                  var K = j(Z, 2);
                  Yv(K, {
                    get nodeClickDistance() {
                      return r();
                    },
                    get onnodeclick() {
                      return t.onnodeclick;
                    },
                    get onnodecontextmenu() {
                      return t.onnodecontextmenu;
                    },
                    get onnodepointerenter() {
                      return t.onnodepointerenter;
                    },
                    get onnodepointermove() {
                      return t.onnodepointermove;
                    },
                    get onnodepointerleave() {
                      return t.onnodepointerleave;
                    },
                    get onnodedrag() {
                      return t.onnodedrag;
                    },
                    get onnodedragstart() {
                      return t.onnodedragstart;
                    },
                    get onnodedragstop() {
                      return t.onnodedragstop;
                    },
                    get store() {
                      return P;
                    },
                    set store(W) {
                      P = W;
                    }
                  });
                  var Q = j(K, 2);
                  n0(Q, {
                    get onselectionclick() {
                      return t.onselectionclick;
                    },
                    get onselectioncontextmenu() {
                      return t.onselectioncontextmenu;
                    },
                    get onnodedrag() {
                      return t.onnodedrag;
                    },
                    get onnodedragstart() {
                      return t.onnodedragstart;
                    },
                    get onnodedragstop() {
                      return t.onnodedragstop;
                    },
                    get store() {
                      return P;
                    },
                    set store(W) {
                      P = W;
                    }
                  }), V(z, F);
                },
                $$slots: { default: !0 }
              });
              var R = j(D, 2);
              {
                let z = /* @__PURE__ */ y(() => !!(P.selectionRect && P.selectionRectMode === "user")), L = /* @__PURE__ */ y(() => P.selectionRect?.width), F = /* @__PURE__ */ y(() => P.selectionRect?.height), X = /* @__PURE__ */ y(() => P.selectionRect?.x), Z = /* @__PURE__ */ y(() => P.selectionRect?.y);
                Il(R, {
                  get isVisible() {
                    return u(z);
                  },
                  get width() {
                    return u(L);
                  },
                  get height() {
                    return u(F);
                  },
                  get x() {
                    return u(X);
                  },
                  get y() {
                    return u(Z);
                  }
                });
              }
              V(m, E);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var B = j(k, 2);
      u0(B, {
        get proOptions() {
          return t.proOptions;
        },
        get position() {
          return t.attributionPosition;
        }
      });
      var Y = j(B, 2);
      Lv(Y, {
        get store() {
          return P;
        }
      });
      var A = j(Y, 2);
      He(A, () => t.children ?? Lt), V(w, T);
    },
    $$slots: { default: !0 }
  }), ne();
}
function m0(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ ie(Ml({ props: {}, nodes: [], edges: [] }));
  Jo(Yr, {
    provider: !0,
    getStore() {
      return u(n);
    },
    setStore: (i) => {
      O(n, i);
    }
  }), $r(() => {
    u(n).reset();
  });
  var r = ye(), o = ae(r);
  He(o, () => t.children ?? Lt), V(e, r), ne();
}
var y0 = /* @__PURE__ */ ee("<button><!></button>");
function _r(e, t) {
  let n = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor",
    "onclick",
    "children"
  ]);
  var r = y0();
  Ft(r, () => ({
    type: "button",
    onclick: t.onclick,
    class: ["svelte-flow__controls-button", t.class],
    ...n,
    [pt]: {
      "--xy-controls-button-background-color-props": t.bgColor,
      "--xy-controls-button-background-color-hover-props": t.bgColorHover,
      "--xy-controls-button-color-props": t.color,
      "--xy-controls-button-color-hover-props": t.colorHover,
      "--xy-controls-button-border-color-props": t.borderColor
    }
  }));
  var o = q(r);
  He(o, () => t.children ?? Lt), V(e, r);
}
var w0 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function _0(e) {
  var t = w0();
  V(e, t);
}
var b0 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function x0(e) {
  var t = b0();
  V(e, t);
}
var E0 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function S0(e) {
  var t = E0();
  V(e, t);
}
var k0 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function C0(e) {
  var t = k0();
  V(e, t);
}
var N0 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function P0(e) {
  var t = N0();
  V(e, t);
}
var M0 = /* @__PURE__ */ ee("<!> <!>", 1), A0 = /* @__PURE__ */ ee("<!> <!> <!> <!> <!> <!>", 1);
function T0(e, t) {
  te(t, !0);
  let n = H(t, "position", 3, "bottom-left"), r = H(t, "orientation", 3, "vertical"), o = H(t, "showZoom", 3, !0), i = H(t, "showFitView", 3, !0), s = H(t, "showLock", 3, !0), a = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "orientation",
    "showZoom",
    "showFitView",
    "showLock",
    "style",
    "class",
    "buttonBgColor",
    "buttonBgColorHover",
    "buttonColor",
    "buttonColorHover",
    "buttonBorderColor",
    "fitViewOptions",
    "children",
    "before",
    "after"
  ]), l = /* @__PURE__ */ y(Zt);
  const c = {
    bgColor: t.buttonBgColor,
    bgColorHover: t.buttonBgColorHover,
    color: t.buttonColor,
    colorHover: t.buttonColorHover,
    borderColor: t.buttonBorderColor
  };
  let d = /* @__PURE__ */ y(() => u(l).nodesDraggable || u(l).nodesConnectable || u(l).elementsSelectable), h = /* @__PURE__ */ y(() => u(l).viewport.zoom <= u(l).minZoom), f = /* @__PURE__ */ y(() => u(l).viewport.zoom >= u(l).maxZoom), g = /* @__PURE__ */ y(() => u(l).ariaLabelConfig), v = /* @__PURE__ */ y(() => r() === "horizontal" ? "horizontal" : "vertical");
  const _ = () => {
    u(l).zoomIn();
  }, p = () => {
    u(l).zoomOut();
  }, b = () => {
    u(l).fitView(t.fitViewOptions);
  }, P = () => {
    let N = !u(d);
    u(l).nodesDraggable = N, u(l).nodesConnectable = N, u(l).elementsSelectable = N;
  };
  {
    let N = /* @__PURE__ */ y(() => [
      "svelte-flow__controls",
      u(v),
      t.class
    ]);
    Ei(e, At(
      {
        get class() {
          return u(N);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return u(g)["controls.ariaLabel"];
        },
        get style() {
          return t.style;
        }
      },
      () => a,
      {
        children: (w, C) => {
          var T = A0(), I = ae(T);
          {
            var k = (z) => {
              var L = ye(), F = ae(L);
              He(F, () => t.before), V(z, L);
            };
            le(I, (z) => {
              t.before && z(k);
            });
          }
          var B = j(I, 2);
          {
            var Y = (z) => {
              var L = M0(), F = ae(L);
              _r(F, At(
                {
                  onclick: _,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return u(g)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return u(f);
                  }
                },
                () => c,
                {
                  children: (Z, K) => {
                    _0(Z);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var X = j(F, 2);
              _r(X, At(
                {
                  onclick: p,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return u(g)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return u(h);
                  }
                },
                () => c,
                {
                  children: (Z, K) => {
                    x0(Z);
                  },
                  $$slots: { default: !0 }
                }
              )), V(z, L);
            };
            le(B, (z) => {
              o() && z(Y);
            });
          }
          var A = j(B, 2);
          {
            var x = (z) => {
              _r(z, At(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: b,
                  get title() {
                    return u(g)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.fitView.ariaLabel"];
                  }
                },
                () => c,
                {
                  children: (L, F) => {
                    S0(L);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(A, (z) => {
              i() && z(x);
            });
          }
          var M = j(A, 2);
          {
            var m = (z) => {
              _r(z, At(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: P,
                  get title() {
                    return u(g)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.interactive.ariaLabel"];
                  }
                },
                () => c,
                {
                  children: (L, F) => {
                    var X = ye(), Z = ae(X);
                    {
                      var K = (W) => {
                        P0(W);
                      }, Q = (W) => {
                        C0(W);
                      };
                      le(Z, (W) => {
                        u(d) ? W(K) : W(Q, !1);
                      });
                    }
                    V(L, X);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(M, (z) => {
              s() && z(m);
            });
          }
          var S = j(M, 2);
          {
            var E = (z) => {
              var L = ye(), F = ae(L);
              He(F, () => t.children), V(z, L);
            };
            le(S, (z) => {
              t.children && z(E);
            });
          }
          var D = j(S, 2);
          {
            var R = (z) => {
              var L = ye(), F = ae(L);
              He(F, () => t.after), V(z, L);
            };
            le(D, (z) => {
              t.after && z(R);
            });
          }
          V(w, T);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ne();
}
var Ot;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ot || (Ot = {}));
var D0 = /* @__PURE__ */ pe("<circle></circle>");
function I0(e, t) {
  var n = D0();
  ce(() => {
    U(n, "cx", t.radius), U(n, "cy", t.radius), U(n, "r", t.radius), ke(n, 0, Bt(["svelte-flow__background-pattern", "dots", t.class]));
  }), V(e, n);
}
var z0 = /* @__PURE__ */ pe("<path></path>");
function O0(e, t) {
  te(t, !0);
  var n = z0();
  ce(() => {
    U(n, "stroke-width", t.lineWidth), U(n, "d", `M${t.dimensions[0] / 2} 0 V${t.dimensions[1]} M0 ${t.dimensions[1] / 2} H${t.dimensions[0]}`), ke(n, 0, Bt([
      "svelte-flow__background-pattern",
      t.variant,
      t.class
    ]));
  }), V(e, n), ne();
}
const R0 = {
  [Ot.Dots]: 1,
  [Ot.Lines]: 1,
  [Ot.Cross]: 6
};
var H0 = /* @__PURE__ */ pe('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function L0(e, t) {
  te(t, !0);
  let n = H(t, "variant", 19, () => Ot.Dots), r = H(t, "gap", 3, 20), o = H(t, "lineWidth", 3, 1), i = /* @__PURE__ */ y(Zt), s = /* @__PURE__ */ y(() => n() === Ot.Dots), a = /* @__PURE__ */ y(() => n() === Ot.Cross), l = /* @__PURE__ */ y(() => Array.isArray(r()) ? r() : [r(), r()]), c = /* @__PURE__ */ y(() => `background-pattern-${u(i).flowId}-${t.id ?? ""}`), d = /* @__PURE__ */ y(() => [
    u(l)[0] * u(i).viewport.zoom || 1,
    u(l)[1] * u(i).viewport.zoom || 1
  ]), h = /* @__PURE__ */ y(() => (t.size ?? R0[n()]) * u(i).viewport.zoom), f = /* @__PURE__ */ y(() => u(a) ? [u(h), u(h)] : u(d)), g = /* @__PURE__ */ y(() => u(s) ? [u(h) / 2, u(h) / 2] : [
    u(f)[0] / 2,
    u(f)[1] / 2
  ]);
  var v = H0();
  let _;
  var p = q(v), b = q(p);
  {
    var P = (C) => {
      {
        let T = /* @__PURE__ */ y(() => u(h) / 2);
        I0(C, {
          get radius() {
            return u(T);
          },
          get class() {
            return t.patternClass;
          }
        });
      }
    }, N = (C) => {
      O0(C, {
        get dimensions() {
          return u(f);
        },
        get variant() {
          return n();
        },
        get lineWidth() {
          return o();
        },
        get class() {
          return t.patternClass;
        }
      });
    };
    le(b, (C) => {
      u(s) ? C(P) : C(N, !1);
    });
  }
  var w = j(p);
  ce(() => {
    ke(v, 0, Bt([
      "svelte-flow__background",
      "svelte-flow__container",
      t.class
    ])), _ = Ke(v, "", _, {
      "--xy-background-color-props": t.bgColor,
      "--xy-background-pattern-color-props": t.patternColor
    }), U(p, "id", u(c)), U(p, "x", u(i).viewport.x % u(d)[0]), U(p, "y", u(i).viewport.y % u(d)[1]), U(p, "width", u(d)[0]), U(p, "height", u(d)[1]), U(p, "patternTransform", `translate(-${u(g)[0]},-${u(g)[1]})`), U(w, "fill", `url(#${u(c)})`);
  }), V(e, v), ne();
}
var V0 = /* @__PURE__ */ pe("<rect></rect>");
function B0(e, t) {
  let n = H(t, "borderRadius", 3, 5), r = H(t, "strokeWidth", 3, 2);
  var o = ye(), i = ae(o);
  {
    var s = (l) => {
      const c = /* @__PURE__ */ y(() => t.nodeComponent);
      var d = ye(), h = ae(d);
      Qr(h, () => u(c), (f, g) => {
        g(f, {
          get id() {
            return t.id;
          },
          get x() {
            return t.x;
          },
          get y() {
            return t.y;
          },
          get width() {
            return t.width;
          },
          get height() {
            return t.height;
          },
          get borderRadius() {
            return n();
          },
          get class() {
            return t.class;
          },
          get color() {
            return t.color;
          },
          get shapeRendering() {
            return t.shapeRendering;
          },
          get strokeColor() {
            return t.strokeColor;
          },
          get strokeWidth() {
            return r();
          },
          get selected() {
            return t.selected;
          }
        });
      }), V(l, d);
    }, a = (l) => {
      var c = V0();
      let d, h;
      ce(() => {
        d = ke(c, 0, Bt(["svelte-flow__minimap-node", t.class]), null, d, { selected: t.selected }), U(c, "x", t.x), U(c, "y", t.y), U(c, "rx", n()), U(c, "ry", n()), U(c, "width", t.width), U(c, "height", t.height), U(c, "shape-rendering", t.shapeRendering), h = Ke(c, "", h, {
          fill: t.color,
          stroke: t.strokeColor,
          "stroke-width": r()
        });
      }), V(l, c);
    };
    le(i, (l) => {
      t.nodeComponent ? l(s) : l(a, !1);
    });
  }
  V(e, o);
}
function F0(e, t) {
  const n = Zg({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const { viewport: o } = t.store;
      return [o.x, o.y, o.zoom];
    },
    getViewScale: t.getViewScale
  });
  n.update({
    translateExtent: t.translateExtent,
    width: t.width,
    height: t.height,
    inversePan: t.inversePan,
    zoomStep: t.zoomStep,
    pannable: t.pannable,
    zoomable: t.zoomable
  });
  function r(o) {
    n.update({
      translateExtent: o.translateExtent,
      width: o.width,
      height: o.height,
      inversePan: o.inversePan,
      zoomStep: o.zoomStep,
      pannable: o.pannable,
      zoomable: o.zoomable
    });
  }
  return {
    update: r,
    destroy() {
      n.destroy();
    }
  };
}
const Eo = (e) => e instanceof Function ? e : () => e;
var K0 = /* @__PURE__ */ pe("<title> </title>"), Y0 = /* @__PURE__ */ pe('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Z0 = /* @__PURE__ */ ee('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function X0(e, t) {
  te(t, !0);
  let n = H(t, "position", 3, "bottom-right"), r = H(t, "nodeStrokeColor", 3, "transparent"), o = H(t, "nodeClass", 3, ""), i = H(t, "nodeBorderRadius", 3, 5), s = H(t, "nodeStrokeWidth", 3, 2), a = H(t, "width", 3, 200), l = H(t, "height", 3, 150), c = H(t, "pannable", 3, !0), d = H(t, "zoomable", 3, !0), h = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "ariaLabel",
    "nodeStrokeColor",
    "nodeColor",
    "nodeClass",
    "nodeBorderRadius",
    "nodeStrokeWidth",
    "nodeComponent",
    "bgColor",
    "maskColor",
    "maskStrokeColor",
    "maskStrokeWidth",
    "width",
    "height",
    "pannable",
    "zoomable",
    "inversePan",
    "zoomStep",
    "class"
  ]), f = /* @__PURE__ */ y(Zt), g = /* @__PURE__ */ y(() => u(f).ariaLabelConfig);
  const v = t.nodeColor === void 0 ? void 0 : Eo(t.nodeColor), _ = Eo(r()), p = Eo(o()), b = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let P = /* @__PURE__ */ y(() => `svelte-flow__minimap-desc-${u(f).flowId}`), N = /* @__PURE__ */ y(() => ({
    x: -u(f).viewport.x / u(f).viewport.zoom,
    y: -u(f).viewport.y / u(f).viewport.zoom,
    width: u(f).width / u(f).viewport.zoom,
    height: u(f).height / u(f).viewport.zoom
  })), w = /* @__PURE__ */ y(() => al(cr(u(f).nodeLookup, { filter: (R) => !R.hidden }), u(N))), C = /* @__PURE__ */ y(() => u(w).width / a()), T = /* @__PURE__ */ y(() => u(w).height / l()), I = /* @__PURE__ */ y(() => Math.max(u(C), u(T))), k = /* @__PURE__ */ y(() => u(I) * a()), B = /* @__PURE__ */ y(() => u(I) * l()), Y = /* @__PURE__ */ y(() => 5 * u(I)), A = /* @__PURE__ */ y(() => u(w).x - (u(k) - u(w).width) / 2 - u(Y)), x = /* @__PURE__ */ y(() => u(w).y - (u(B) - u(w).height) / 2 - u(Y)), M = /* @__PURE__ */ y(() => u(k) + u(Y) * 2), m = /* @__PURE__ */ y(() => u(B) + u(Y) * 2);
  const S = () => u(I);
  var E = Z0(), D = ae(E);
  {
    let R = /* @__PURE__ */ y(() => ["svelte-flow__minimap", t.class]);
    Qc(D, () => ({ "--xy-minimap-background-color-props": t.bgColor })), Ei(D.lastChild, At(
      {
        get position() {
          return n();
        },
        get class() {
          return u(R);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => h,
      {
        children: (z, L) => {
          var F = ye(), X = ae(F);
          {
            var Z = (K) => {
              var Q = Y0();
              let W;
              var G = q(Q);
              {
                var $ = (re) => {
                  var me = K0(), oe = q(me);
                  ce(() => {
                    U(me, "id", u(P)), Ae(oe, t.ariaLabel ?? u(g)["minimap.ariaLabel"]);
                  }), V(re, me);
                };
                le(G, (re) => {
                  (t.ariaLabel ?? u(g)["minimap.ariaLabel"]) && re($);
                });
              }
              var he = j(G);
              nn(he, 17, () => u(f).nodes, (re) => re.id, (re, me) => {
                const oe = /* @__PURE__ */ y(() => u(f).nodeLookup.get(u(me).id));
                var Te = ye(), Ct = ae(Te);
                {
                  var Nt = (ht) => {
                    const fe = /* @__PURE__ */ y(() => Yt(u(oe)));
                    {
                      let we = /* @__PURE__ */ y(() => v?.(u(oe))), je = /* @__PURE__ */ y(() => _(u(oe))), ve = /* @__PURE__ */ y(() => p(u(oe)));
                      B0(ht, At(
                        {
                          get id() {
                            return u(oe).id;
                          },
                          get x() {
                            return u(oe).internals.positionAbsolute.x;
                          },
                          get y() {
                            return u(oe).internals.positionAbsolute.y;
                          }
                        },
                        () => u(fe),
                        {
                          get selected() {
                            return u(oe).selected;
                          },
                          get nodeComponent() {
                            return t.nodeComponent;
                          },
                          get color() {
                            return u(we);
                          },
                          get borderRadius() {
                            return i();
                          },
                          get strokeColor() {
                            return u(je);
                          },
                          get strokeWidth() {
                            return s();
                          },
                          get shapeRendering() {
                            return b;
                          },
                          get class() {
                            return u(ve);
                          }
                        }
                      ));
                    }
                  };
                  le(Ct, (ht) => {
                    u(oe) && ll(u(oe)) && !u(oe).hidden && ht(Nt);
                  });
                }
                V(re, Te);
              });
              var be = j(he);
              Pe(Q, (re, me) => F0?.(re, me), () => ({
                store: u(f),
                panZoom: u(f).panZoom,
                getViewScale: S,
                translateExtent: u(f).translateExtent,
                width: u(f).width,
                height: u(f).height,
                inversePan: t.inversePan,
                zoomStep: t.zoomStep,
                pannable: c(),
                zoomable: d()
              })), ce(() => {
                U(Q, "width", a()), U(Q, "height", l()), U(Q, "viewBox", `${u(A) ?? ""} ${u(x) ?? ""} ${u(M) ?? ""} ${u(m) ?? ""}`), U(Q, "aria-labelledby", u(P)), W = Ke(Q, "", W, {
                  "--xy-minimap-mask-background-color-props": t.maskColor,
                  "--xy-minimap-mask-stroke-color-props": t.maskStrokeColor,
                  "--xy-minimap-mask-stroke-width-props": t.maskStrokeWidth ? t.maskStrokeWidth * u(I) : void 0
                }), U(be, "d", `M${u(A) - u(Y)},${u(x) - u(Y)}h${u(M) + u(Y) * 2}v${u(m) + u(Y) * 2}h${-u(M) - u(Y) * 2}z
      M${u(N).x ?? ""},${u(N).y ?? ""}h${u(N).width ?? ""}v${u(N).height ?? ""}h${-u(N).width}z`);
              }), V(K, Q);
            };
            le(X, (K) => {
              u(f).panZoom && K(Z);
            });
          }
          V(z, F);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  V(e, E), ne();
}
var W0 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"></path></svg>'), q0 = /* @__PURE__ */ pe('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 4.5l-7.5 7.5 7.5 7.5m-6-15l-7.5 7.5 7.5 7.5"></path></svg>'), G0 = /* @__PURE__ */ ee('<div><h3 class="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Components</h3> <p class="text-[10px] text-slate-500 mt-1">Drag to build workflow</p></div> <div class="relative"><input type="text" placeholder="Search nodes..." class="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow pl-8"/> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg></div>', 1), U0 = /* @__PURE__ */ ee('<div class="min-w-0"><div class="text-xs font-bold text-slate-800 tracking-tight truncate"> </div> <div class="text-[10px] text-slate-400 mt-0.5 truncate"> </div></div>'), j0 = /* @__PURE__ */ ee('<div draggable="true" role="listitem" aria-roledescription="node blueprint"><div><!></div> <!></div>'), J0 = /* @__PURE__ */ ee('<div class="mt-auto p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl text-white shadow-xl shadow-blue-200/50"><div class="flex items-center gap-2 mb-2"><span class="text-sm">💡</span> <span class="text-[10px] font-bold uppercase tracking-wider">Pro Tip</span></div> <p class="text-[10px] leading-relaxed opacity-90">Connect nodes by clicking and dragging between handles.</p></div>'), Q0 = /* @__PURE__ */ ee('<div><button type="button" class="absolute top-2 right-2 p-1 rounded-md text-slate-400 hover:bg-slate-200 transition-colors z-10"><!></button> <!> <div class="flex flex-col gap-3 w-full" role="list"></div> <!></div>');
function $0(e, t) {
  te(t, !0);
  let n = H(t, "availableComponents", 19, () => ({})), r = /* @__PURE__ */ ie(!1), o = /* @__PURE__ */ ie("");
  function i(w) {
    const C = (w.triggers || []).map((k) => ({
      type: "trigger",
      label: k.name,
      icon: k.icon || "<svg ...>",
      // Use default if null
      description: k.description,
      color: "bg-amber-500",
      data: {
        label: k.name,
        description: k.description,
        identifier: k.identifier
      }
    })), T = (w.actions || []).map((k) => ({
      type: "action",
      label: k.name,
      icon: k.icon || "<svg ...>",
      description: k.description,
      color: "bg-blue-600",
      data: {
        label: k.name,
        description: k.description,
        identifier: k.identifier
      }
    })), I = (w.conditions || []).map((k) => ({
      type: "condition",
      label: k.name,
      icon: k.icon || "<svg ...>",
      description: k.description,
      color: "bg-purple-600",
      data: {
        label: k.name,
        description: k.description,
        identifier: k.identifier
      }
    }));
    return [...C, ...T, ...I];
  }
  let s = /* @__PURE__ */ y(() => i(n())), a = /* @__PURE__ */ y(() => u(s).filter((w) => w.label.toLowerCase().includes(u(o).toLowerCase())));
  function l(w, C, T) {
    w.dataTransfer.setData("application/svelteflow", JSON.stringify({ type: C, data: T })), w.dataTransfer.effectAllowed = "move";
  }
  function c() {
    O(r, !u(r));
  }
  var d = Q0(), h = q(d);
  h.__click = c;
  var f = q(h);
  {
    var g = (w) => {
      var C = W0();
      V(w, C);
    }, v = (w) => {
      var C = q0();
      V(w, C);
    };
    le(f, (w) => {
      u(r) ? w(g) : w(v, !1);
    });
  }
  var _ = j(h, 2);
  {
    var p = (w) => {
      var C = G0(), T = j(ae(C), 2), I = q(T);
      cu(I, () => u(o), (k) => O(o, k)), V(w, C);
    };
    le(_, (w) => {
      u(r) || w(p);
    });
  }
  var b = j(_, 2);
  nn(b, 21, () => u(a), To, (w, C) => {
    var T = j0(), I = q(T), k = q(I);
    ba(k, () => u(C).icon || "<span>?</span>");
    var B = j(I, 2);
    {
      var Y = (A) => {
        var x = U0(), M = q(x), m = q(M), S = j(M, 2), E = q(S);
        ce(() => {
          Ae(m, u(C).label), Ae(E, u(C).description);
        }), V(A, x);
      };
      le(B, (A) => {
        u(r) || A(Y);
      });
    }
    ce(() => {
      ke(T, 1, `group flex items-center ${u(r) ? "justify-center p-2" : "gap-4 p-4"} bg-white border border-slate-200 rounded-xl shadow-sm cursor-grab hover:border-blue-400 hover:shadow-md transition-all active:cursor-grabbing`), U(T, "title", u(C).label), ke(I, 1, `w-10 h-10 ${u(C).color ?? ""} mr-auto p-1.5 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0`);
    }), en("dragstart", T, (A) => l(A, u(C).type, u(C).data)), V(w, T);
  });
  var P = j(b, 2);
  {
    var N = (w) => {
      var C = J0();
      V(w, C);
    };
    le(P, (w) => {
      u(r) || w(N);
    });
  }
  ce(() => {
    ke(d, 1, `${u(r) ? "w-20 px-2 pt-14 pb-5 items-center" : "w-64 p-5"} bg-slate-50 border-r border-slate-200 flex flex-col gap-5 overflow-y-auto transition-all duration-300 relative`), U(h, "title", u(r) ? "Expand Sidebar" : "Collapse Sidebar");
  }), V(e, d), ne();
}
Jr(["click"]);
var ep = /* @__PURE__ */ ee("<!> <!> <!>", 1), tp = /* @__PURE__ */ ee('<div class="flex h-[600px] w-full border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xl"><!> <div class="flex-grow relative h-full" role="presentation"><!></div></div>');
function np(e, t) {
  te(t, !0);
  let n = H(t, "nodes", 31, () => it([])), r = H(t, "edges", 31, () => it([])), o = H(t, "availableComponents", 19, () => ({}));
  const { screenToFlowPosition: i } = zl();
  function s(f) {
    f.preventDefault(), f.dataTransfer.dropEffect = "move";
  }
  function a(f) {
    f.preventDefault();
    const g = f.dataTransfer.getData("application/svelteflow");
    if (!g) return;
    const { type: v, data: _ } = JSON.parse(g), p = i({ x: f.clientX, y: f.clientY }), b = { id: `${v}-${Date.now()}`, type: v, position: p, data: _ };
    n([...n(), b]);
  }
  var l = tp(), c = q(l);
  $0(c, {
    get availableComponents() {
      return o();
    }
  });
  var d = j(c, 2), h = q(d);
  p0(h, {
    get nodeTypes() {
      return t.nodeTypes;
    },
    fitView: !0,
    onnodeclick: ({ event: f, node: g }) => {
      t.onNodeClick && t.onNodeClick(f, g);
    },
    get nodes() {
      return n();
    },
    set nodes(f) {
      n(f);
    },
    get edges() {
      return r();
    },
    set edges(f) {
      r(f);
    },
    children: (f, g) => {
      var v = ep(), _ = ae(v);
      T0(_, {});
      var p = j(_, 2);
      L0(p, { variant: "lines", gap: 20, size: 1, color: "#f1f5f9" });
      var b = j(p, 2);
      X0(b, {}), V(f, v);
    },
    $$slots: { default: !0 }
  }), en("dragover", d, s), en("drop", d, a), V(e, l), ne();
}
var rp = /* @__PURE__ */ ee('<p class="text-[10px] leading-relaxed text-slate-500 mb-2 italic"> </p>'), op = /* @__PURE__ */ ee('<div class="relative w-3 h-3" role="presentation"><!></div>'), ip = /* @__PURE__ */ ee('<div class="relative w-3 h-3" role="presentation"><!></div>'), sp = /* @__PURE__ */ ee('<div class="relative group" role="presentation"><div><div><span class="text-white"><!></span> <span class="text-[10px] font-bold uppercase tracking-wider text-white"> </span></div> <div><!> <div><!></div></div></div> <div class="absolute -left-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div> <div class="absolute -right-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div></div>');
function Si(e, t) {
  te(t, !0);
  let n = H(t, "type", 3, "default"), r = H(t, "inputs", 19, () => []), o = H(t, "outputs", 19, () => []);
  const i = {
    trigger: {
      border: "border-amber-200",
      header: "bg-amber-500",
      bg: "bg-amber-50/50",
      text: "text-amber-900",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>'
    },
    action: {
      border: "border-blue-200",
      header: "bg-blue-600",
      bg: "bg-blue-50/50",
      text: "text-blue-900",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>'
    },
    condition: {
      border: "border-purple-200",
      header: "bg-purple-600",
      bg: "bg-purple-50/50",
      text: "text-purple-900",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>'
    },
    default: {
      border: "border-slate-200",
      header: "bg-slate-600",
      bg: "bg-slate-50/50",
      text: "text-slate-900",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>'
    }
  }, s = /* @__PURE__ */ y(() => i[n()] || i.default);
  var a = sp(), l = q(a), c = q(l), d = q(c), h = q(d);
  ba(h, () => u(s).icon);
  var f = j(d, 2), g = q(f), v = j(c, 2), _ = q(v);
  {
    var p = (C) => {
      var T = rp(), I = q(T);
      ce(() => Ae(I, t.data.description)), V(C, T);
    };
    le(_, (C) => {
      t.data.description && C(p);
    });
  }
  var b = j(_, 2), P = q(b);
  He(P, () => t.children ?? Lt);
  var N = j(l, 2);
  nn(N, 21, r, To, (C, T) => {
    var I = op(), k = q(I);
    Ht(k, {
      type: "target",
      get position() {
        return J.Left;
      },
      get id() {
        return u(T).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
    }), V(C, I);
  });
  var w = j(N, 2);
  nn(w, 21, o, To, (C, T) => {
    var I = ip(), k = q(I);
    Ht(k, {
      type: "source",
      get position() {
        return J.Right;
      },
      get id() {
        return u(T).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
    }), V(C, I);
  }), ce(() => {
    ke(l, 1, `min-w-[180px] max-w-[240px] bg-white rounded-xl shadow-sm border ${u(s).border ?? ""} overflow-hidden transition-all duration-200 ${t.selected ? "ring-2 ring-blue-500 ring-offset-2" : "hover:shadow-md"}`), ke(c, 1, `${u(s).header ?? ""} px-3 py-1.5 flex items-center gap-2`), Ae(g, t.data.label || "Node"), ke(v, 1, `p-3 ${u(s).bg ?? ""}`), ke(b, 1, `text-xs font-medium ${u(s).text ?? ""}`);
  }), V(e, a), ne();
}
var ap = /* @__PURE__ */ ee('<div class="px-2 py-1 bg-amber-100/50 rounded border border-amber-200 text-[10px] break-all font-mono"> </div>');
function lp(e, t) {
  te(t, !0);
  const n = [{ id: "output" }];
  Si(e, {
    get data() {
      return t.data;
    },
    get selected() {
      return t.selected;
    },
    type: "trigger",
    get outputs() {
      return n;
    },
    children: (r, o) => {
      var i = ye(), s = ae(i);
      {
        var a = (l) => {
          var c = ap(), d = q(c);
          ce((h) => Ae(d, h), [() => t.data.event.split("\\").pop()]), V(l, c);
        };
        le(s, (l) => {
          t.data.event && l(a);
        });
      }
      V(r, i);
    },
    $$slots: { default: !0 }
  }), ne();
}
var cp = /* @__PURE__ */ ee('<div class="flex items-center gap-2 px-2 py-1 bg-blue-100/50 rounded border border-blue-200 text-[10px] font-semibold"><span>⚡</span> </div>');
function up(e, t) {
  te(t, !0);
  const n = [{ id: "input" }], r = [{ id: "output" }];
  Si(e, {
    get data() {
      return t.data;
    },
    get selected() {
      return t.selected;
    },
    type: "action",
    get inputs() {
      return n;
    },
    get outputs() {
      return r;
    },
    children: (o, i) => {
      var s = ye(), a = ae(s);
      {
        var l = (c) => {
          var d = cp(), h = j(q(d));
          ce(() => Ae(h, ` ${t.data.action ?? ""}`)), V(c, d);
        };
        le(a, (c) => {
          t.data.action && c(l);
        });
      }
      V(o, s);
    },
    $$slots: { default: !0 }
  }), ne();
}
var dp = /* @__PURE__ */ ee('<div class="px-2 py-1 bg-purple-100/50 rounded border border-purple-200 text-[10px] font-mono mb-6"> </div>'), fp = /* @__PURE__ */ ee('<!> <div class="absolute -right-1.5 top-[60px] flex flex-col gap-6"><div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-emerald-600 mr-2 uppercase">True</span> <!></div> <div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-rose-600 mr-2 uppercase">False</span> <!></div></div>', 1), hp = /* @__PURE__ */ ee('<div class="relative"><!></div>');
function gp(e, t) {
  te(t, !0);
  const n = [{ id: "input" }];
  var r = hp(), o = q(r);
  Si(o, {
    get data() {
      return t.data;
    },
    get selected() {
      return t.selected;
    },
    type: "condition",
    get inputs() {
      return n;
    },
    children: (i, s) => {
      var a = fp(), l = ae(a);
      {
        var c = (_) => {
          var p = dp(), b = q(p);
          ce(() => Ae(b, t.data.condition)), V(_, p);
        };
        le(l, (_) => {
          t.data.condition && _(c);
        });
      }
      var d = j(l, 2), h = q(d), f = j(q(h), 2);
      Ht(f, {
        type: "source",
        get position() {
          return J.Right;
        },
        id: "true",
        class: "!w-3 !h-3 !bg-emerald-500 !border-2 !border-white"
      });
      var g = j(h, 2), v = j(q(g), 2);
      Ht(v, {
        type: "source",
        get position() {
          return J.Right;
        },
        id: "false",
        class: "!w-3 !h-3 !bg-rose-500 !border-2 !border-white"
      }), V(i, a);
    },
    $$slots: { default: !0 }
  }), V(e, r), ne();
}
var vp = /* @__PURE__ */ ee('<div class="flex h-full w-full overflow-hidden"><!></div>');
function pp(e, t) {
  te(t, !0);
  const n = {
    trigger: lp,
    action: up,
    condition: gp
  }, r = [
    {
      id: "trigger-1",
      type: "trigger",
      position: { x: 50, y: 50 },
      data: {
        label: "User Registered",
        identifier: "Xlited\\LaravelFlow\\Nodes\\Triggers\\UserRegistered",
        description: "Triggers when a new user signs up."
      }
    },
    {
      id: "action-1",
      type: "action",
      position: { x: 350, y: 50 },
      data: {
        label: "Send Welcome Email",
        identifier: "Xlited\\LaravelFlow\\Nodes\\Actions\\SendWelcomeEmail",
        description: "Sends a welcome email to the user."
      }
    }
  ], o = [{ id: "edge-1", source: "trigger-1", target: "action-1" }];
  let i = H(t, "nodes", 7), s = H(t, "edges", 7), a = H(t, "availableComponents", 19, () => ({}));
  i().length === 0 && i(r), s().length === 0 && s(o);
  let l = /* @__PURE__ */ ie(i()), c = /* @__PURE__ */ ie(s()), d = /* @__PURE__ */ ie(null);
  function h(g, v) {
    O(d, v.id, !0), console.log(v), window.dispatchEvent(new CustomEvent("open-node-settings", {
      detail: {
        id: v.id,
        identifier: v.data.identifier,
        // Merge label/description with config for the form
        config: {
          label: v.data.label,
          description: v.data.description,
          ...v.data.config || {}
        }
      }
    }));
  }
  let f;
  Ge(() => {
    const g = u(l), v = u(c);
    return t.updateState && (clearTimeout(f), f = setTimeout(
      () => {
        t.updateState({
          nodes: JSON.parse(JSON.stringify(g)),
          edges: JSON.parse(JSON.stringify(v))
        });
      },
      500
    )), () => clearTimeout(f);
  }), Ge(() => {
    const g = (v) => {
      const { id: _, config: p } = v.detail, b = u(l).findIndex((P) => P.id === _);
      if (b !== -1) {
        const { label: P, description: N, ...w } = p, C = { ...u(l)[b] };
        C.data = { ...C.data, label: P, description: N, config: w };
        const T = [...u(l)];
        T[b] = C, O(l, T);
      }
    };
    return window.addEventListener("update-node-config", g), () => {
      window.removeEventListener("update-node-config", g);
    };
  }), m0(e, {
    children: (g, v) => {
      var _ = vp(), p = q(_);
      np(p, {
        get nodeTypes() {
          return n;
        },
        onNodeClick: h,
        get availableComponents() {
          return a();
        },
        get nodes() {
          return u(l);
        },
        set nodes(b) {
          O(l, b);
        },
        get edges() {
          return u(c);
        },
        set edges(b) {
          O(c, b);
        }
      }), V(g, _);
    },
    $$slots: { default: !0 }
  }), ne();
}
const ks = () => {
  window.Alpine.data("flowBuilder", ({ state: e, components: t }) => ({
    state: e,
    components: t,
    init() {
      const n = Array.isArray(this.state?.nodes) ? JSON.parse(JSON.stringify(this.state.nodes)) : [], r = Array.isArray(this.state?.edges) ? JSON.parse(JSON.stringify(this.state.edges)) : [];
      Uc(pp, {
        target: this.$refs.canvas,
        props: {
          nodes: n,
          edges: r,
          availableComponents: this.components,
          updateState: (o) => {
            this.state = o;
          }
        }
      });
    }
  }));
};
window.Alpine ? ks() : document.addEventListener("alpine:init", ks);
