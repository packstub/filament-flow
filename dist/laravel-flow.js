var $r = Array.isArray, Xl = Array.prototype.indexOf, eo = Array.from, Wl = Object.defineProperty, Ot = Object.getOwnPropertyDescriptor, Rs = Object.getOwnPropertyDescriptors, Ls = Object.prototype, ql = Array.prototype, to = Object.getPrototypeOf, zi = Object.isExtensible;
function pn(e) {
  return typeof e == "function";
}
const Be = () => {
};
function Gl(e) {
  return e();
}
function Do(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Hs() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Me(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function nr(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Se = 2, ti = 4, no = 8, Vs = 1 << 24, vt = 16, Tt = 32, Ft = 64, ro = 128, nt = 512, Ne = 1024, Ye = 2048, ft = 4096, Ke = 8192, Ct = 16384, oo = 32768, Mt = 65536, Oi = 1 << 17, Bs = 1 << 18, un = 1 << 19, Fs = 1 << 20, kt = 1 << 25, en = 32768, Io = 1 << 21, ni = 1 << 22, Rt = 1 << 23, ut = /* @__PURE__ */ Symbol("$state"), Ks = /* @__PURE__ */ Symbol("legacy props"), Ul = /* @__PURE__ */ Symbol(""), mn = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function ri(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function jl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Jl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ql() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function $l(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ec() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function tc(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function nc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function rc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function oc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ic() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const sc = 1, ac = 2, Ys = 4, lc = 8, cc = 16, uc = 1, dc = 2, fc = 4, hc = 8, gc = 16, vc = 1, pc = 2, mc = 4, Zs = 1, yc = 2, ke = /* @__PURE__ */ Symbol(), wc = "http://www.w3.org/1999/xhtml", _c = "@attach";
function bc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function xc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Xs(e) {
  return e === this.v;
}
function Ws(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function qs(e) {
  return !Ws(e, this.v);
}
let Tn = !1;
function kc() {
  Tn = !0;
}
const Ec = [];
function Gs(e, t = !1, n = !1) {
  return Nr(e, /* @__PURE__ */ new Map(), "", Ec, null, n);
}
function Nr(e, t, n, r, o = null, i = !1) {
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
    if ($r(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = Nr(u, t, n, r, null, i));
      }
      return a;
    }
    if (to(e) === Ls) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Nr(
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
      return Nr(
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
let ve = null;
function xn(e) {
  ve = e;
}
function oi(e) {
  return (
    /** @type {T} */
    si().get(e)
  );
}
function ii(e, t) {
  return si().set(e, t), t;
}
function Sc(e) {
  return si().has(e);
}
function ne(e, t = !1, n) {
  ve = {
    p: ve,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Tn && !t ? { s: null, u: null, $: [] } : null
  };
}
function re(e) {
  var t = (
    /** @type {ComponentContext} */
    ve
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      da(r);
  }
  return t.i = !0, ve = t.p, /** @type {T} */
  {};
}
function rr() {
  return !Tn || ve !== null && ve.l === null;
}
function si(e) {
  return ve === null && ri(), ve.c ??= new Map(Cc(ve) || void 0);
}
function Cc(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let Gt = [];
function Us() {
  var e = Gt;
  Gt = [], Do(e);
}
function Kt(e) {
  if (Gt.length === 0 && !Yn) {
    var t = Gt;
    queueMicrotask(() => {
      t === Gt && Us();
    });
  }
  Gt.push(e);
}
function Nc() {
  for (; Gt.length > 0; )
    Us();
}
function js(e) {
  var t = de;
  if (t === null)
    return ue.f |= Rt, e;
  if ((t.f & oo) === 0) {
    if ((t.f & ro) === 0)
      throw e;
    t.b.error(e);
  } else
    kn(e, t);
}
function kn(e, t) {
  for (; t !== null; ) {
    if ((t.f & ro) !== 0)
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
const vr = /* @__PURE__ */ new Set();
let fe = null, Pr = null, qe = null, We = [], io = null, zo = !1, Yn = !1;
class et {
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
    We = [], Pr = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (Pr = this, fe = null, Ri(n.render_effects), Ri(n.effects), Pr = null, this.#l?.resolve()), qe = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(t, n) {
    t.f ^= Ne;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Tt | Ft)) !== 0, s = i && (o & Ne) !== 0, a = s || (o & Ke) !== 0 || this.skipped_effects.has(r);
      if ((r.f & ro) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Ne : (o & ti) !== 0 ? n.effects.push(r) : lr(r) && ((r.f & vt) !== 0 && this.#i.add(r), Gn(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var u = r.parent;
      for (r = r.next; r === null && u !== null; )
        u === n.effect && (this.#a(n.effects), this.#a(n.render_effects), n = /** @type {EffectTarget} */
        n.parent), r = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(t) {
    for (const n of t)
      (n.f & Ye) !== 0 ? this.#i.add(n) : (n.f & ft) !== 0 && this.#o.add(n), this.#c(n.deps), Pe(n, Ne);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & Se) === 0 || (n.f & en) === 0 || (n.f ^= en, this.#c(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Rt) === 0 && (this.current.set(t, t.v), qe?.set(t, t.v));
  }
  activate() {
    fe = this, this.apply();
  }
  deactivate() {
    fe === this && (fe = null, qe = null);
  }
  flush() {
    if (this.activate(), We.length > 0) {
      if (Js(), fe !== null && fe !== this)
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
    if (vr.size > 1) {
      this.previous.clear();
      var t = qe, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of vr) {
        if (i === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [l, u] of this.current) {
          if (i.current.has(l))
            if (n && u !== i.current.get(l))
              i.current.set(l, u);
            else
              continue;
          s.push(l);
        }
        if (s.length === 0)
          continue;
        const a = [...i.current.keys()].filter((l) => !this.current.has(l));
        if (a.length > 0) {
          var o = We;
          We = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Qs(d, a, l, u);
          if (We.length > 0) {
            fe = i, i.apply();
            for (const d of We)
              i.#s(d, r);
            i.deactivate();
          }
          We = o;
        }
      }
      fe = null, qe = t;
    }
    this.committed = !0, vr.delete(this);
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
      this.#o.delete(t), Pe(t, Ye), tn(t);
    for (const t of this.#o)
      Pe(t, ft), tn(t);
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
    return (this.#l ??= Hs()).promise;
  }
  static ensure() {
    if (fe === null) {
      const t = fe = new et();
      vr.add(fe), Yn || et.enqueue(() => {
        fe === t && t.flush();
      });
    }
    return fe;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Kt(t);
  }
  apply() {
  }
}
function Pc(e) {
  var t = Yn;
  Yn = !0;
  try {
    for (var n; ; ) {
      if (Nc(), We.length === 0 && (fe?.flush(), We.length === 0))
        return io = null, /** @type {T} */
        n;
      Js();
    }
  } finally {
    Yn = t;
  }
}
function Js() {
  var e = Jt;
  zo = !0;
  var t = null;
  try {
    var n = 0;
    for (Rr(!0); We.length > 0; ) {
      var r = et.ensure();
      if (n++ > 1e3) {
        var o, i;
        Mc();
      }
      r.process(We), Lt.clear();
    }
  } finally {
    zo = !1, Rr(e), io = null;
  }
}
function Mc() {
  try {
    ec();
  } catch (e) {
    kn(e, io);
  }
}
let wt = null;
function Ri(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Ct | Ke)) === 0 && lr(r) && (wt = /* @__PURE__ */ new Set(), Gn(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? ya(r) : r.fn = null), wt?.size > 0)) {
        Lt.clear();
        for (const o of wt) {
          if ((o.f & (Ct | Ke)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            wt.has(s) && (wt.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Ct | Ke)) === 0 && Gn(l);
          }
        }
        wt.clear();
      }
    }
    wt = null;
  }
}
function Qs(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & Se) !== 0 ? Qs(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (ni | vt)) !== 0 && (i & Ye) === 0 && $s(o, t, r) && (Pe(o, Ye), tn(
        /** @type {Effect} */
        o
      ));
    }
}
function $s(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & Se) !== 0 && $s(
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
function tn(e) {
  for (var t = io = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (zo && t === de && (n & vt) !== 0 && (n & Bs) === 0)
      return;
    if ((n & (Ft | Tt)) !== 0) {
      if ((n & Ne) === 0) return;
      t.f ^= Ne;
    }
  }
  We.push(t);
}
function ea(e) {
  let t = 0, n = nn(0), r;
  return () => {
    Wn() && (c(n), sr(() => (t === 0 && (r = Ee(() => e(() => Zn(n)))), t += 1, () => {
      Kt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Zn(n));
      });
    })));
  };
}
var Ac = Mt | un | ro;
function Tc(e, t, n) {
  new Dc(e, t, n);
}
class Dc {
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
  #w = ea(() => (this.#h = nn(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    de.b, this.#e = !!this.#r.pending, this.#i = ar(() => {
      de.b = this;
      {
        var o = this.#m();
        try {
          this.#o = ze(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#e = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, Ac);
  }
  #_() {
    try {
      this.#o = ze(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #b() {
    const t = this.#r.pending;
    t && (this.#s = ze(() => t(this.#t)), et.enqueue(() => {
      var n = this.#m();
      this.#o = this.#v(() => (et.ensure(), ze(() => this.#l(n)))), this.#f > 0 ? this.#p() : (jt(
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
    return this.#e && (this.#u = Nt(), this.#t.before(this.#u), t = this.#u), t;
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
    var n = de, r = ue, o = ve;
    ht(this.#i), Oe(this.#i), xn(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return js(i), null;
    } finally {
      ht(n), Oe(r), xn(o);
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
    ), ba(this.#o, this.#c)), this.#s === null && (this.#s = ze(() => t(this.#t)));
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
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#s && jt(this.#s, () => {
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
    this.#y(t), this.#d += t, this.#h && En(this.#h, this.#d);
  }
  get_effect_pending() {
    return this.#w(), c(
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
    this.#o && (xe(this.#o), this.#o = null), this.#s && (xe(this.#s), this.#s = null), this.#a && (xe(this.#a), this.#a = null);
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        xc();
        return;
      }
      o = !0, i && ic(), et.ensure(), this.#d = 0, this.#a !== null && jt(this.#a, () => {
        this.#a = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#v(() => (this.#g = !1, ze(() => this.#l(this.#t)))), this.#f > 0 ? this.#p() : this.#e = !1;
    };
    var a = ue;
    try {
      Oe(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      kn(l, this.#i && this.#i.parent);
    } finally {
      Oe(a);
    }
    r && Kt(() => {
      this.#a = this.#v(() => {
        et.ensure(), this.#g = !0;
        try {
          return ze(() => {
            r(
              this.#t,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return kn(
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
function ta(e, t, n, r) {
  const o = rr() ? or : ai;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = fe, s = (
    /** @type {Effect} */
    de
  ), a = Ic();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ zc(u))).then((u) => {
      a();
      try {
        r([...t.map(o), ...u]);
      } catch (d) {
        (s.f & Ct) === 0 && kn(d, s);
      }
      i?.deactivate(), Or();
    }).catch((u) => {
      kn(u, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Or();
    }
  }) : l();
}
function Ic() {
  var e = de, t = ue, n = ve, r = fe;
  return function(i = !0) {
    ht(e), Oe(t), xn(n), i && r?.activate();
  };
}
function Or() {
  ht(null), Oe(null), xn(null);
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  var t = Se | Ye, n = ue !== null && (ue.f & Se) !== 0 ? (
    /** @type {Derived} */
    ue
  ) : null;
  return de !== null && (de.f |= un), {
    ctx: ve,
    deps: null,
    effects: null,
    equals: Xs,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ke
    ),
    wv: 0,
    parent: n ?? de,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function zc(e, t) {
  let n = (
    /** @type {Effect | null} */
    de
  );
  n === null && jl();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = nn(
    /** @type {V} */
    ke
  ), s = !ue, a = /* @__PURE__ */ new Map();
  return Wc(() => {
    var l = Hs();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === fe && u.committed && u.deactivate(), Or();
      });
    } catch (f) {
      l.reject(f), Or();
    }
    var u = (
      /** @type {Batch} */
      fe
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(mn), a.delete(u), a.set(u, l);
    }
    const h = (f, g = void 0) => {
      if (u.activate(), g)
        g !== mn && (i.f |= Rt, En(i, g));
      else {
        (i.f & Rt) !== 0 && (i.f ^= Rt), En(i, f);
        for (const [v, m] of a) {
          if (a.delete(v), v === u) break;
          m.reject(mn);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), ci(() => {
    for (const l of a.values())
      l.reject(mn);
  }), new Promise((l) => {
    function u(d) {
      function h() {
        d === o ? l(i) : u(o);
      }
      d.then(h, h);
    }
    u(o);
  });
}
// @__NO_SIDE_EFFECTS__
function w(e) {
  const t = /* @__PURE__ */ or(e);
  return xa(t), t;
}
// @__NO_SIDE_EFFECTS__
function ai(e) {
  const t = /* @__PURE__ */ or(e);
  return t.equals = qs, t;
}
function na(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      xe(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Oc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Se) === 0)
      return (t.f & Ct) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function li(e) {
  var t, n = de;
  ht(Oc(e));
  try {
    e.f &= ~en, na(e), t = Ca(e);
  } finally {
    ht(n);
  }
  return t;
}
function ra(e) {
  var t = li(e);
  if (e.equals(t) || (fe?.is_fork || (e.v = t), e.wv = Ea()), !dn)
    if (qe !== null)
      (Wn() || fe?.is_fork) && qe.set(e, t);
    else {
      var n = (e.f & nt) === 0 ? ft : Ne;
      Pe(e, n);
    }
}
let Oo = /* @__PURE__ */ new Set();
const Lt = /* @__PURE__ */ new Map();
let oa = !1;
function nn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Xs,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function oe(e, t) {
  const n = nn(e);
  return xa(n), n;
}
// @__NO_SIDE_EFFECTS__
function Rc(e, t = !1, n = !0) {
  const r = nn(e);
  return t || (r.equals = qs), Tn && n && ve !== null && ve.l !== null && (ve.l.s ??= []).push(r), r;
}
function z(e, t, n = !1) {
  ue !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ct || (ue.f & Oi) !== 0) && rr() && (ue.f & (Se | vt | ni | Oi)) !== 0 && !Pt?.includes(e) && oc();
  let r = n ? lt(t) : t;
  return En(e, r);
}
function En(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    dn ? Lt.set(e, t) : Lt.set(e, n), e.v = t;
    var r = et.ensure();
    r.capture(e, n), (e.f & Se) !== 0 && ((e.f & Ye) !== 0 && li(
      /** @type {Derived} */
      e
    ), Pe(e, (e.f & nt) !== 0 ? Ne : ft)), e.wv = Ea(), ia(e, Ye), rr() && de !== null && (de.f & Ne) !== 0 && (de.f & (Tt | Ft)) === 0 && (Xe === null ? Gc([e]) : Xe.push(e)), !r.is_fork && Oo.size > 0 && !oa && Lc();
  }
  return t;
}
function Lc() {
  oa = !1;
  var e = Jt;
  Rr(!0);
  const t = Array.from(Oo);
  try {
    for (const n of t)
      (n.f & Ne) !== 0 && Pe(n, ft), lr(n) && Gn(n);
  } finally {
    Rr(e);
  }
  Oo.clear();
}
function Zn(e) {
  z(e, e.v + 1);
}
function ia(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = rr(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === de)) {
        var l = (a & Ye) === 0;
        if (l && Pe(s, t), (a & Se) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          qe?.delete(u), (a & en) === 0 && (a & nt && (s.f |= en), ia(u, ft));
        } else l && ((a & vt) !== 0 && wt !== null && wt.add(
          /** @type {Effect} */
          s
        ), tn(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function lt(e) {
  if (typeof e != "object" || e === null || ut in e)
    return e;
  const t = to(e);
  if (t !== Ls && t !== ql)
    return e;
  var n = /* @__PURE__ */ new Map(), r = $r(e), o = /* @__PURE__ */ oe(0), i = Qt, s = (a) => {
    if (Qt === i)
      return a();
    var l = ue, u = Qt;
    Oe(null), Bi(i);
    var d = a();
    return Oe(l), Bi(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ oe(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && nc();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ oe(u.value);
          return n.set(l, h), h;
        }) : z(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ oe(ke));
            n.set(l, d), Zn(o);
          }
        } else
          z(u, ke), Zn(o);
        return !0;
      },
      get(a, l, u) {
        if (l === ut)
          return e;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || Ot(a, l)?.writable) && (d = s(() => {
          var g = lt(h ? a[l] : ke), v = /* @__PURE__ */ oe(g);
          return v;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === ke ? void 0 : f;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var h = n.get(l), f = h?.v;
          if (h !== void 0 && f !== ke)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(a, l) {
        if (l === ut)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== ke || Reflect.has(a, l);
        if (u !== void 0 || de !== null && (!d || Ot(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? lt(a[l]) : ke, g = /* @__PURE__ */ oe(f);
            return g;
          }), n.set(l, u));
          var h = c(u);
          if (h === ke)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var h = n.get(l), f = l in a;
        if (r && l === "length")
          for (var g = u; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var v = n.get(g + "");
            v !== void 0 ? z(v, ke) : g in a && (v = s(() => /* @__PURE__ */ oe(ke)), n.set(g + "", v));
          }
        if (h === void 0)
          (!f || Ot(a, l)?.writable) && (h = s(() => /* @__PURE__ */ oe(void 0)), z(h, lt(u)), n.set(l, h));
        else {
          f = h.v !== ke;
          var m = s(() => lt(u));
          z(h, m);
        }
        var y = Reflect.getOwnPropertyDescriptor(a, l);
        if (y?.set && y.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= _.v && z(_, E + 1);
          }
          Zn(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== ke;
        });
        for (var [u, d] of n)
          d.v !== ke && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        rc();
      }
    }
  );
}
function Li(e) {
  try {
    if (e !== null && typeof e == "object" && ut in e)
      return e[ut];
  } catch {
  }
  return e;
}
function Hc(e, t) {
  return Object.is(Li(e), Li(t));
}
var Ie, sa, aa, la;
function Vc() {
  if (Ie === void 0) {
    Ie = window, sa = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    aa = Ot(t, "firstChild").get, la = Ot(t, "nextSibling").get, zi(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), zi(n) && (n.__t = void 0);
  }
}
function Nt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return (
    /** @type {TemplateNode | null} */
    aa.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function ir(e) {
  return (
    /** @type {TemplateNode | null} */
    la.call(e)
  );
}
function q(e, t) {
  return /* @__PURE__ */ Fe(e);
}
function ae(e, t = !1) {
  {
    var n = /* @__PURE__ */ Fe(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ir(n) : n;
  }
}
function j(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ ir(r);
  return r;
}
function Bc(e) {
  e.textContent = "";
}
function ca() {
  return !1;
}
function Fc(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Kt(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Hi = !1;
function Kc() {
  Hi || (Hi = !0, document.addEventListener(
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
function Dn(e) {
  var t = ue, n = de;
  Oe(null), ht(null);
  try {
    return e();
  } finally {
    Oe(t), ht(n);
  }
}
function Yc(e, t, n, r = n) {
  e.addEventListener(t, () => Dn(n));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), r(!0);
  } : e.__on_r = () => r(!0), Kc();
}
function ua(e) {
  de === null && (ue === null && $l(), Ql()), dn && Jl();
}
function Zc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function je(e, t, n) {
  var r = de;
  r !== null && (r.f & Ke) !== 0 && (e |= Ke);
  var o = {
    ctx: ve,
    deps: null,
    nodes: null,
    f: e | Ye | nt,
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
      Gn(o), o.f |= oo;
    } catch (a) {
      throw xe(o), a;
    }
  else t !== null && tn(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & un) === 0 && (i = i.first, (e & vt) !== 0 && (e & Mt) !== 0 && i !== null && (i.f |= Mt)), i !== null && (i.parent = r, r !== null && Zc(i, r), ue !== null && (ue.f & Se) !== 0 && (e & Ft) === 0)) {
    var s = (
      /** @type {Derived} */
      ue
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Wn() {
  return ue !== null && !ct;
}
function ci(e) {
  const t = je(no, null, !1);
  return Pe(t, Ne), t.teardown = e, t;
}
function Ue(e) {
  ua();
  var t = (
    /** @type {Effect} */
    de.f
  ), n = !ue && (t & Tt) !== 0 && (t & oo) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ve
    );
    (r.e ??= []).push(e);
  } else
    return da(e);
}
function da(e) {
  return je(ti | Fs, e, !1);
}
function fa(e) {
  return ua(), je(no | Fs, e, !0);
}
function ha(e) {
  et.ensure();
  const t = je(Ft | un, e, !0);
  return () => {
    xe(t);
  };
}
function Xc(e) {
  et.ensure();
  const t = je(Ft | un, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? jt(t, () => {
      xe(t), r(void 0);
    }) : (xe(t), r(void 0));
  });
}
function In(e) {
  return je(ti, e, !1);
}
function Wc(e) {
  return je(ni | un, e, !0);
}
function sr(e, t = 0) {
  return je(no | t, e, !0);
}
function ce(e, t = [], n = [], r = []) {
  ta(r, t, n, (o) => {
    je(no, () => e(...o.map(c)), !0);
  });
}
function ar(e, t = 0) {
  var n = je(vt | t, e, !0);
  return n;
}
function ga(e, t = 0) {
  var n = je(Vs | t, e, !0);
  return n;
}
function ze(e) {
  return je(Tt | un, e, !0);
}
function va(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = dn, r = ue;
    Vi(!0), Oe(null);
    try {
      t.call(null);
    } finally {
      Vi(n), Oe(r);
    }
  }
}
function pa(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Dn(() => {
      o.abort(mn);
    });
    var r = n.next;
    (n.f & Ft) !== 0 ? n.parent = null : xe(n, t), n = r;
  }
}
function qc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Tt) === 0 && xe(t), t = n;
  }
}
function xe(e, t = !0) {
  var n = !1;
  (t || (e.f & Bs) !== 0) && e.nodes !== null && e.nodes.end !== null && (ma(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), pa(e, t && !n), Lr(e, 0), Pe(e, Ct);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  va(e);
  var o = e.parent;
  o !== null && o.first !== null && ya(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function ma(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ ir(e);
    e.remove(), e = n;
  }
}
function ya(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function jt(e, t, n = !0) {
  var r = [];
  wa(e, r, !0);
  var o = () => {
    n && xe(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var s = () => --i || o();
    for (var a of r)
      a.out(s);
  } else
    o();
}
function wa(e, t, n) {
  if ((e.f & Ke) === 0) {
    e.f ^= Ke;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var o = e.first; o !== null; ) {
      var i = o.next, s = (o.f & Mt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & Tt) !== 0 && (e.f & vt) !== 0;
      wa(o, t, s ? n : !1), o = i;
    }
  }
}
function ui(e) {
  _a(e, !0);
}
function _a(e, t) {
  if ((e.f & Ke) !== 0) {
    e.f ^= Ke, (e.f & Ne) === 0 && (Pe(e, Ye), tn(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Mt) !== 0 || (n.f & Tt) !== 0;
      _a(n, o ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || t) && s.in();
  }
}
function ba(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var o = n === r ? null : /* @__PURE__ */ ir(n);
      t.append(n), n = o;
    }
}
let Jt = !1;
function Rr(e) {
  Jt = e;
}
let dn = !1;
function Vi(e) {
  dn = e;
}
let ue = null, ct = !1;
function Oe(e) {
  ue = e;
}
let de = null;
function ht(e) {
  de = e;
}
let Pt = null;
function xa(e) {
  ue !== null && (Pt === null ? Pt = [e] : Pt.push(e));
}
let Te = null, Ve = 0, Xe = null;
function Gc(e) {
  Xe = e;
}
let ka = 1, qn = 0, Qt = qn;
function Bi(e) {
  Qt = e;
}
function Ea() {
  return ++ka;
}
function lr(e) {
  var t = e.f;
  if ((t & Ye) !== 0)
    return !0;
  if (t & Se && (e.f &= ~en), (t & ft) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (lr(
          /** @type {Derived} */
          i
        ) && ra(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & nt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    qe === null && Pe(e, Ne);
  }
  return !1;
}
function Sa(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Pt?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Se) !== 0 ? Sa(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Pe(i, Ye) : (i.f & Ne) !== 0 && Pe(i, ft), tn(
        /** @type {Effect} */
        i
      ));
    }
}
function Ca(e) {
  var t = Te, n = Ve, r = Xe, o = ue, i = Pt, s = ve, a = ct, l = Qt, u = e.f;
  Te = /** @type {null | Value[]} */
  null, Ve = 0, Xe = null, ue = (u & (Tt | Ft)) === 0 ? e : null, Pt = null, xn(e.ctx), ct = !1, Qt = ++qn, e.ac !== null && (Dn(() => {
    e.ac.abort(mn);
  }), e.ac = null);
  try {
    e.f |= Io;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps;
    if (Te !== null) {
      var g;
      if (Lr(e, Ve), f !== null && Ve > 0)
        for (f.length = Ve + Te.length, g = 0; g < Te.length; g++)
          f[Ve + g] = Te[g];
      else
        e.deps = f = Te;
      if (Wn() && (e.f & nt) !== 0)
        for (g = Ve; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Ve < f.length && (Lr(e, Ve), f.length = Ve);
    if (rr() && Xe !== null && !ct && f !== null && (e.f & (Se | ft | Ye)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Xe.length; g++)
        Sa(
          Xe[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (qn++, Xe !== null && (r === null ? r = Xe : r.push(.../** @type {Source[]} */
    Xe))), (e.f & Rt) !== 0 && (e.f ^= Rt), h;
  } catch (v) {
    return js(v);
  } finally {
    e.f ^= Io, Te = t, Ve = n, Xe = r, ue = o, Pt = i, xn(s), ct = a, Qt = l;
  }
}
function Uc(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Xl.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Se) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Te === null || !Te.includes(t)) && (Pe(t, ft), (t.f & nt) !== 0 && (t.f ^= nt, t.f &= ~en), na(
    /** @type {Derived} **/
    t
  ), Lr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Lr(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Uc(e, n[r]);
}
function Gn(e) {
  var t = e.f;
  if ((t & Ct) === 0) {
    Pe(e, Ne);
    var n = de, r = Jt;
    de = e, Jt = !0;
    try {
      (t & (vt | Vs)) !== 0 ? qc(e) : pa(e), va(e);
      var o = Ca(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ka;
      var i;
    } finally {
      Jt = r, de = n;
    }
  }
}
async function jc() {
  await Promise.resolve(), Pc();
}
function c(e) {
  var t = e.f, n = (t & Se) !== 0;
  if (ue !== null && !ct) {
    var r = de !== null && (de.f & Ct) !== 0;
    if (!r && !Pt?.includes(e)) {
      var o = ue.deps;
      if ((ue.f & Io) !== 0)
        e.rv < qn && (e.rv = qn, Te === null && o !== null && o[Ve] === e ? Ve++ : Te === null ? Te = [e] : Te.includes(e) || Te.push(e));
      else {
        (ue.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [ue] : i.includes(ue) || i.push(ue);
      }
    }
  }
  if (dn) {
    if (Lt.has(e))
      return Lt.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & Ne) === 0 && s.reactions !== null || Pa(s)) && (a = li(s)), Lt.set(s, a), a;
    }
  } else n && (!qe?.has(e) || fe?.is_fork && !Wn()) && (s = /** @type {Derived} */
  e, lr(s) && ra(s), Jt && Wn() && (s.f & nt) === 0 && Na(s));
  if (qe?.has(e))
    return qe.get(e);
  if ((e.f & Rt) !== 0)
    throw e.v;
  return e.v;
}
function Na(e) {
  if (e.deps !== null) {
    e.f ^= nt;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & Se) !== 0 && (t.f & nt) === 0 && Na(
        /** @type {Derived} */
        t
      );
  }
}
function Pa(e) {
  if (e.v === ke) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Lt.has(t) || (t.f & Se) !== 0 && Pa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ee(e) {
  var t = ct;
  try {
    return ct = !0, e();
  } finally {
    ct = t;
  }
}
const Jc = -7169;
function Pe(e, t) {
  e.f = e.f & Jc | t;
}
function Qc(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function Ma(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ut in e)
      Ro(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ut in n && Ro(n);
      }
  }
}
function Ro(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ro(e[r], t);
      } catch {
      }
    const n = to(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Rs(n);
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
function $c(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const eu = [
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
function tu(e) {
  return eu.includes(e);
}
const nu = {
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
function ru(e) {
  return e = e.toLowerCase(), nu[e] ?? e;
}
const ou = ["touchstart", "touchmove"];
function iu(e) {
  return ou.includes(e);
}
const Aa = /* @__PURE__ */ new Set(), Lo = /* @__PURE__ */ new Set();
function di(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Vn.call(t, i), !i.cancelBubble)
      return Dn(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Kt(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ho(e, t, n, r = {}) {
  var o = di(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function rn(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = di(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ci(() => {
    t.removeEventListener(e, s, i);
  });
}
function fn(e) {
  for (var t = 0; t < e.length; t++)
    Aa.add(e[t]);
  for (var n of Lo)
    n(e);
}
let Fi = null;
function Vn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Fi = e;
  var s = 0, a = Fi === e && e.__root;
  if (a) {
    var l = o.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = o.indexOf(t);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Wl(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = ue, h = de;
    Oe(null), ht(null);
    try {
      for (var f, g = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var m = i["__" + r];
          m != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && m.call(i, e);
        } catch (y) {
          f ? g.push(y) : f = y;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (f) {
        for (let y of g)
          queueMicrotask(() => {
            throw y;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Oe(d), ht(h);
    }
  }
}
function fi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function on(e, t) {
  var n = (
    /** @type {Effect} */
    de
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  var n = (t & Zs) !== 0, r = (t & yc) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    o === void 0 && (o = fi(i ? e : "<!>" + e), n || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ Fe(o)));
    var s = (
      /** @type {TemplateNode} */
      r || sa ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Fe(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      on(a, l);
    } else
      on(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function su(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Zs) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        fi(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Fe(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Fe(l); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Fe(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Fe(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Fe(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      on(d, h);
    } else
      on(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function _e(e, t) {
  return /* @__PURE__ */ su(e, t, "svg");
}
function Mr(e = "") {
  {
    var t = Nt(e + "");
    return on(t, t), t;
  }
}
function ye() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Nt();
  return e.append(t, n), on(t, n), e;
}
function V(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Vo = !0;
function we(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function au(e, t) {
  return lu(e, t);
}
const gn = /* @__PURE__ */ new Map();
function lu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Vc();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var v = iu(g);
        t.addEventListener(g, Vn, { passive: v });
        var m = gn.get(g);
        m === void 0 ? (document.addEventListener(g, Vn, { passive: v }), gn.set(g, 1)) : gn.set(g, m + 1);
      }
    }
  };
  l(eo(Aa)), Lo.add(l);
  var u = void 0, d = Xc(() => {
    var h = n ?? t.appendChild(Nt());
    return Tc(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          ne({});
          var g = (
            /** @type {ComponentContext} */
            ve
          );
          g.c = i;
        }
        o && (r.$$events = o), Vo = s, u = e(f, r) || {}, Vo = !0, i && re();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, Vn);
        var g = (
          /** @type {number} */
          gn.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Vn), gn.delete(f)) : gn.set(f, g);
      }
      Lo.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return cu.set(u, d), u;
}
let cu = /* @__PURE__ */ new WeakMap();
class hi {
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
      fe
    );
    if (this.#e.has(t)) {
      var n = (
        /** @type {Key} */
        this.#e.get(t)
      ), r = this.#t.get(n);
      if (r)
        ui(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (xe(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var u = document.createDocumentFragment();
            ba(s, u), u.append(Nt()), this.#n.set(i, { effect: s, fragment: u });
          } else
            xe(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), jt(s, a, !1)) : a();
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
      n.includes(r) || (xe(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      fe
    ), o = ca();
    if (n && !this.#t.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = Nt();
        i.append(s), this.#n.set(t, {
          effect: ze(() => n(s)),
          fragment: i
        });
      } else
        this.#t.set(
          t,
          ze(() => n(this.anchor))
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
function se(e, t, n = !1) {
  var r = new hi(e), o = n ? Mt : 0;
  function i(s, a) {
    r.ensure(s, a);
  }
  ar(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function uu(e, t) {
  sr(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Hr(e, t) {
  return t;
}
function du(e, t, n) {
  for (var r = [], o = t.length, i, s = t.length, a = 0; a < o; a++) {
    let h = t[a];
    jt(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Bo(eo(i.done)), f.delete(i), f.size === 0 && (e.outrogroups = null);
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
      var u = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      Bc(d), d.append(u), e.items.clear();
    }
    Bo(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function Bo(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    xe(e[n], t);
}
var Ki;
function Vt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = (t & Ys) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = u.appendChild(Nt());
  }
  var d = null, h = /* @__PURE__ */ ai(() => {
    var _ = n();
    return $r(_) ? _ : _ == null ? [] : eo(_);
  }), f, g = !0;
  function v() {
    y.fallback = d, fu(y, f, s, t, r), d !== null && (f.length === 0 ? (d.f & kt) === 0 ? ui(d) : (d.f ^= kt, Bn(d, null, s)) : jt(d, () => {
      d = null;
    }));
  }
  var m = ar(() => {
    f = /** @type {V[]} */
    c(h);
    for (var _ = f.length, E = /* @__PURE__ */ new Set(), C = (
      /** @type {Batch} */
      fe
    ), x = ca(), A = 0; A < _; A += 1) {
      var P = f[A], I = r(P, A), M = g ? null : a.get(I);
      M ? (M.v && En(M.v, P), M.i && En(M.i, A), x && C.skipped_effects.delete(M.e)) : (M = hu(
        a,
        g ? s : Ki ??= Nt(),
        P,
        I,
        A,
        o,
        t,
        n
      ), g || (M.e.f |= kt), a.set(I, M)), E.add(I);
    }
    if (_ === 0 && i && !d && (g ? d = ze(() => i(s)) : (d = ze(() => i(Ki ??= Nt())), d.f |= kt)), !g)
      if (x) {
        for (const [H, Y] of a)
          E.has(H) || C.skipped_effects.add(Y.e);
        C.oncommit(v), C.ondiscard(() => {
        });
      } else
        v();
    c(h);
  }), y = { effect: m, items: a, outrogroups: null, fallback: d };
  g = !1;
}
function fu(e, t, n, r, o) {
  var i = (r & lc) !== 0, s = t.length, a = e.items, l = e.effect.first, u, d = null, h, f = [], g = [], v, m, y, _;
  if (i)
    for (_ = 0; _ < s; _ += 1)
      v = t[_], m = o(v, _), y = /** @type {EachItem} */
      a.get(m).e, (y.f & kt) === 0 && (y.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(y));
  for (_ = 0; _ < s; _ += 1) {
    if (v = t[_], m = o(v, _), y = /** @type {EachItem} */
    a.get(m).e, e.outrogroups !== null)
      for (const Y of e.outrogroups)
        Y.pending.delete(y), Y.done.delete(y);
    if ((y.f & kt) !== 0)
      if (y.f ^= kt, y === l)
        Bn(y, null, n);
      else {
        var E = d ? d.next : l;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), Dt(e, d, y), Dt(e, y, E), Bn(y, E, n), d = y, f = [], g = [], l = d.next;
        continue;
      }
    if ((y.f & Ke) !== 0 && (ui(y), i && (y.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(y))), y !== l) {
      if (u !== void 0 && u.has(y)) {
        if (f.length < g.length) {
          var C = g[0], x;
          d = C.prev;
          var A = f[0], P = f[f.length - 1];
          for (x = 0; x < f.length; x += 1)
            Bn(f[x], C, n);
          for (x = 0; x < g.length; x += 1)
            u.delete(g[x]);
          Dt(e, A.prev, P.next), Dt(e, d, A), Dt(e, P, C), l = C, d = P, _ -= 1, f = [], g = [];
        } else
          u.delete(y), Bn(y, l, n), Dt(e, y.prev, y.next), Dt(e, y, d === null ? e.effect.first : d.next), Dt(e, d, y), d = y;
        continue;
      }
      for (f = [], g = []; l !== null && l !== y; )
        (u ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = l.next;
      if (l === null)
        continue;
    }
    (y.f & kt) === 0 && f.push(y), d = y, l = y.next;
  }
  if (e.outrogroups !== null) {
    for (const Y of e.outrogroups)
      Y.pending.size === 0 && (Bo(eo(Y.done)), e.outrogroups?.delete(Y));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var I = [];
    if (u !== void 0)
      for (y of u)
        (y.f & Ke) === 0 && I.push(y);
    for (; l !== null; )
      (l.f & Ke) === 0 && l !== e.fallback && I.push(l), l = l.next;
    var M = I.length;
    if (M > 0) {
      var H = (r & Ys) !== 0 && s === 0 ? n : null;
      if (i) {
        for (_ = 0; _ < M; _ += 1)
          I[_].nodes?.a?.measure();
        for (_ = 0; _ < M; _ += 1)
          I[_].nodes?.a?.fix();
      }
      du(e, I, H);
    }
  }
  i && Kt(() => {
    if (h !== void 0)
      for (y of h)
        y.nodes?.a?.apply();
  });
}
function hu(e, t, n, r, o, i, s, a) {
  var l = (s & sc) !== 0 ? (s & cc) === 0 ? /* @__PURE__ */ Rc(n, !1, !1) : nn(n) : null, u = (s & ac) !== 0 ? nn(o) : null;
  return {
    v: l,
    i: u,
    e: ze(() => (i(t, l ?? n, u ?? o, a), () => {
      e.delete(r);
    }))
  };
}
function Bn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, o = e.nodes.end, i = t && (t.f & kt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ir(r)
      );
      if (i.before(r), r === o)
        return;
      r = s;
    }
}
function Dt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ta(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  ce(() => {
    var a = (
      /** @type {Effect} */
      de
    );
    if (s !== (s = t() ?? "") && (a.nodes !== null && (ma(
      a.nodes.start,
      /** @type {TemplateNode} */
      a.nodes.end
    ), a.nodes = null), s !== "")) {
      var l = s + "";
      n ? l = `<svg>${l}</svg>` : r && (l = `<math>${l}</math>`);
      var u = fi(l);
      if ((n || r) && (u = /** @type {Element} */
      /* @__PURE__ */ Fe(u)), on(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Fe(u),
        /** @type {TemplateNode} */
        u.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Fe(u); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Fe(u)
          );
      else
        i.before(u);
    }
  });
}
function Le(e, t, ...n) {
  var r = new hi(e);
  ar(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Mt);
}
function so(e, t, n) {
  var r = new hi(e);
  ar(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Mt);
}
const gu = () => performance.now(), _t = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => gu(),
  tasks: /* @__PURE__ */ new Set()
};
function Da() {
  const e = _t.now();
  _t.tasks.forEach((t) => {
    t.c(e) || (_t.tasks.delete(t), t.f());
  }), _t.tasks.size !== 0 && _t.tick(Da);
}
function vu(e) {
  let t;
  return _t.tasks.size === 0 && _t.tick(Da), {
    promise: new Promise((n) => {
      _t.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      _t.tasks.delete(t);
    }
  };
}
function pr(e, t) {
  Dn(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function pu(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Yi(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [o, i] = r.split(":");
    if (!o || i === void 0) break;
    const s = pu(o.trim());
    t[s] = i.trim();
  }
  return t;
}
const mu = (e) => e;
function mr(e, t, n, r) {
  var o = (e & vc) !== 0, i = (e & pc) !== 0, s = o && i, a = (e & mc) !== 0, l = s ? "both" : o ? "in" : "out", u, d = t.inert, h = t.style.overflow, f, g;
  function v() {
    return Dn(() => u ??= n()(t, r?.() ?? /** @type {P} */
    {}, {
      direction: l
    }));
  }
  var m = {
    is_global: a,
    in() {
      if (t.inert = d, !o) {
        g?.abort(), g?.reset?.();
        return;
      }
      i || f?.abort(), pr(t, "introstart"), f = Fo(t, v(), g, 1, () => {
        pr(t, "introend"), f?.abort(), f = u = void 0, t.style.overflow = h;
      });
    },
    out(C) {
      if (!i) {
        C?.(), u = void 0;
        return;
      }
      t.inert = !0, pr(t, "outrostart"), g = Fo(t, v(), f, 0, () => {
        pr(t, "outroend"), C?.();
      });
    },
    stop: () => {
      f?.abort(), g?.abort();
    }
  }, y = (
    /** @type {Effect & { nodes: EffectNodes }} */
    de
  );
  if ((y.nodes.t ??= []).push(m), o && Vo) {
    var _ = a;
    if (!_) {
      for (var E = (
        /** @type {Effect | null} */
        y.parent
      ); E && (E.f & Mt) !== 0; )
        for (; (E = E.parent) && (E.f & vt) === 0; )
          ;
      _ = !E || (E.f & oo) !== 0;
    }
    _ && In(() => {
      Ee(() => m.in());
    });
  }
}
function Fo(e, t, n, r, o) {
  var i = r === 1;
  if (pn(t)) {
    var s, a = !1;
    return Kt(() => {
      if (!a) {
        var y = t({ direction: i ? "in" : "out" });
        s = Fo(e, y, n, r, o);
      }
    }), {
      abort: () => {
        a = !0, s?.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (n?.deactivate(), !t?.duration)
    return o(), {
      abort: Be,
      deactivate: Be,
      reset: Be,
      t: () => r
    };
  const { delay: l = 0, css: u, tick: d, easing: h = mu } = t;
  var f = [];
  if (i && n === void 0 && (d && d(0, 1), u)) {
    var g = Yi(u(0, 1));
    f.push(g, g);
  }
  var v = () => 1 - r, m = e.animate(f, { duration: l, fill: "forwards" });
  return m.onfinish = () => {
    m.cancel();
    var y = n?.t() ?? 1 - r;
    n?.abort();
    var _ = r - y, E = (
      /** @type {number} */
      t.duration * Math.abs(_)
    ), C = [];
    if (E > 0) {
      var x = !1;
      if (u)
        for (var A = Math.ceil(E / 16.666666666666668), P = 0; P <= A; P += 1) {
          var I = y + _ * h(P / A), M = Yi(u(I, 1 - I));
          C.push(M), x ||= M.overflow === "hidden";
        }
      x && (e.style.overflow = "hidden"), v = () => {
        var H = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          m.currentTime
        );
        return y + _ * h(H / E);
      }, d && vu(() => {
        if (m.playState !== "running") return !1;
        var H = v();
        return d(H, 1 - H), !0;
      });
    }
    m = e.animate(C, { duration: E, fill: "forwards" }), m.onfinish = () => {
      v = () => r, d?.(r, 1 - r), o();
    };
  }, {
    abort: () => {
      m && (m.cancel(), m.effect = null, m.onfinish = Be);
    },
    deactivate: () => {
      o = Be;
    },
    reset: () => {
      r === 0 && d?.(1, 0);
    },
    t: () => v()
  };
}
function Ae(e, t, n) {
  In(() => {
    var r = Ee(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      sr(() => {
        var s = n();
        Ma(s), o && Ws(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function yu(e, t) {
  var n = void 0, r;
  ga(() => {
    n !== (n = t()) && (r && (xe(r), r = null), n && (r = ze(() => {
      In(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Ia(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ia(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function wu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ia(e)) && (r && (r += " "), r += t);
  return r;
}
function Yt(e) {
  return typeof e == "object" ? wu(e) : e ?? "";
}
const Zi = [...` 	
\r\f \v\uFEFF`];
function _u(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Zi.includes(r[s - 1])) && (a === r.length || Zi.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Xi(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function yo(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function bu(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(yo)), o && l.push(...Object.keys(o).map(yo));
      var u = 0, d = -1;
      const m = e.length;
      for (var h = 0; h < m; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === m - 1) {
            if (d !== -1) {
              var g = yo(e.substring(u, d).trim());
              if (!l.includes(g)) {
                f !== ";" && h++;
                var v = e.substring(u, h).trim();
                n += " " + v + ";";
              }
            }
            u = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Xi(r)), o && (n += Xi(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function De(e, t, n, r, o, i) {
  var s = e.__className;
  if (s !== n || s === void 0) {
    var a = _u(n, r, i);
    a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function wo(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function He(e, t, n, r) {
  var o = e.__style;
  if (o !== t) {
    var i = bu(t, r);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else r && (Array.isArray(r) ? (wo(e, n?.[0], r[0]), wo(e, n?.[1], r[1], "important")) : wo(e, n, r));
  return r;
}
function Ko(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!$r(t))
      return bc();
    for (var r of e.options)
      r.selected = t.includes(Wi(r));
    return;
  }
  for (r of e.options) {
    var o = Wi(r);
    if (Hc(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function xu(e) {
  var t = new MutationObserver(() => {
    Ko(e, e.__value);
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
  }), ci(() => {
    t.disconnect();
  });
}
function Wi(e) {
  return "__value" in e ? e.__value : e.value;
}
const It = /* @__PURE__ */ Symbol("class"), bt = /* @__PURE__ */ Symbol("style"), za = /* @__PURE__ */ Symbol("is custom element"), Oa = /* @__PURE__ */ Symbol("is html");
function ku(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ee(e, t, n, r) {
  var o = Ra(e);
  o[t] !== (o[t] = n) && (t === "loading" && (e[Ul] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && La(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Eu(e, t, n, r, o = !1, i = !1) {
  var s = Ra(e), a = s[za], l = !s[Oa], u = t || {}, d = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = Yt(n.class) : (r || n[It]) && (n.class = null), n[bt] && (n.style ??= null);
  var f = La(e);
  for (const x in n) {
    let A = n[x];
    if (d && x === "value" && A == null) {
      e.value = e.__value = "", u[x] = A;
      continue;
    }
    if (x === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      De(e, g, A, r, t?.[It], n[It]), u[x] = A, u[It] = n[It];
      continue;
    }
    if (x === "style") {
      He(e, A, t?.[bt], n[bt]), u[x] = A, u[bt] = n[bt];
      continue;
    }
    var v = u[x];
    if (!(A === v && !(A === void 0 && e.hasAttribute(x)))) {
      u[x] = A;
      var m = x[0] + x[1];
      if (m !== "$$")
        if (m === "on") {
          const P = {}, I = "$$" + x;
          let M = x.slice(2);
          var y = tu(M);
          if ($c(M) && (M = M.slice(0, -7), P.capture = !0), !y && v) {
            if (A != null) continue;
            e.removeEventListener(M, u[I], P), u[I] = null;
          }
          if (A != null)
            if (y)
              e[`__${M}`] = A, fn([M]);
            else {
              let H = function(Y) {
                u[x].call(this, Y);
              };
              var C = H;
              u[I] = di(M, e, H, P);
            }
          else y && (e[`__${M}`] = void 0);
        } else if (x === "style")
          ee(e, x, A);
        else if (x === "autofocus")
          Fc(
            /** @type {HTMLElement} */
            e,
            !!A
          );
        else if (!a && (x === "__value" || x === "value" && A != null))
          e.value = e.__value = A;
        else if (x === "selected" && d)
          ku(
            /** @type {HTMLOptionElement} */
            e,
            A
          );
        else {
          var _ = x;
          l || (_ = ru(_));
          var E = _ === "defaultValue" || _ === "defaultChecked";
          if (A == null && !a && !E)
            if (s[x] = null, _ === "value" || _ === "checked") {
              let P = (
                /** @type {HTMLInputElement} */
                e
              );
              const I = t === void 0;
              if (_ === "value") {
                let M = P.defaultValue;
                P.removeAttribute(_), P.defaultValue = M, P.value = P.__value = I ? M : null;
              } else {
                let M = P.defaultChecked;
                P.removeAttribute(_), P.defaultChecked = M, P.checked = I ? M : !1;
              }
            } else
              e.removeAttribute(x);
          else E || f.includes(_) && (a || typeof A != "string") ? (e[_] = A, _ in s && (s[_] = ke)) : typeof A != "function" && ee(e, _, A);
        }
    }
  }
  return u;
}
function Zt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  ta(o, n, r, (l) => {
    var u = void 0, d = {}, h = e.nodeName === "SELECT", f = !1;
    if (ga(() => {
      var v = t(...l.map(c)), m = Eu(
        e,
        u,
        v,
        i,
        s,
        a
      );
      f && h && "value" in v && Ko(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let _ of Object.getOwnPropertySymbols(d))
        v[_] || xe(d[_]);
      for (let _ of Object.getOwnPropertySymbols(v)) {
        var y = v[_];
        _.description === _c && (!u || y !== u[_]) && (d[_] && xe(d[_]), d[_] = ze(() => yu(e, () => y))), m[_] = y;
      }
      u = m;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      In(() => {
        Ko(
          g,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), xu(g);
      });
    }
    f = !0;
  });
}
function Ra(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [za]: e.nodeName.includes("-"),
      [Oa]: e.namespaceURI === wc
    }
  );
}
var qi = /* @__PURE__ */ new Map();
function La(e) {
  var t = e.getAttribute("is") || e.nodeName, n = qi.get(t);
  if (n) return n;
  qi.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Rs(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = to(o);
  }
  return n;
}
function Su(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Yc(e, "input", async (o) => {
    var i = o ? e.defaultValue : e.value;
    if (i = _o(e) ? bo(i) : i, n(i), fe !== null && r.add(fe), await jc(), i !== (i = t())) {
      var s = e.selectionStart, a = e.selectionEnd, l = e.value.length;
      if (e.value = i ?? "", a !== null) {
        var u = e.value.length;
        s === a && a === l && u > l ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = s, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ee(t) == null && e.value && (n(_o(e) ? bo(e.value) : e.value), fe !== null && r.add(fe)), sr(() => {
    var o = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Pr ?? fe
      );
      if (r.has(i))
        return;
    }
    _o(e) && o === bo(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function _o(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function bo(e) {
  return e === "" ? null : +e;
}
class gi {
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
          gi.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Cu = /* @__PURE__ */ new gi({
  box: "border-box"
});
function Vr(e, t, n) {
  var r = Cu.observe(e, () => n(e[t]));
  In(() => (Ee(() => n(e[t])), r));
}
function Gi(e, t) {
  return e === t || e?.[ut] === t;
}
function zn(e = {}, t, n, r) {
  return In(() => {
    var o, i;
    return sr(() => {
      o = i, i = [], Ee(() => {
        e !== n(...i) && (t(e, ...i), o && Gi(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Kt(() => {
        i && Gi(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Nu(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ve
  ), n = t.l.u;
  if (!n) return;
  let r = () => Ma(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ or(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && fa(() => {
    Ui(t, r), Do(n.b);
  }), Ue(() => {
    const o = Ee(() => n.m.map(Gl));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ue(() => {
    Ui(t, r), Do(n.a);
  });
}
function Ui(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let yr = !1;
function Pu(e) {
  var t = yr;
  try {
    return yr = !1, [e(), yr];
  } finally {
    yr = t;
  }
}
const Mu = {
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
function Xt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Mu
  );
}
const Au = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (pn(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      pn(o) && (o = o());
      const i = Ot(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (pn(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Ot(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === ut || t === Ks) return !1;
    for (let n of e.props)
      if (pn(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (pn(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function xt(...e) {
  return new Proxy({ props: e }, Au);
}
function B(e, t, n, r) {
  var o = !Tn || (n & dc) !== 0, i = (n & hc) !== 0, s = (n & gc) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? Ee(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = ut in e || Ks in e;
    d = Ot(e, t)?.set ?? (h && t in e ? (C) => e[t] = C : void 0);
  }
  var f, g = !1;
  i ? [f, g] = Pu(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && tc(), d(f)));
  var v;
  if (o ? v = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C === void 0 ? u() : (l = !0, C);
  } : v = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C !== void 0 && (a = /** @type {V} */
    void 0), C === void 0 ? a : C;
  }, o && (n & fc) === 0)
    return v;
  if (d) {
    var m = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(C, x) {
        return arguments.length > 0 ? ((!o || !x || m || g) && d(x ? v() : C), C) : v();
      })
    );
  }
  var y = !1, _ = ((n & uc) !== 0 ? or : ai)(() => (y = !1, v()));
  i && c(_);
  var E = (
    /** @type {Effect} */
    de
  );
  return (
    /** @type {() => V} */
    (function(C, x) {
      if (arguments.length > 0) {
        const A = x ? c(_) : o && i ? lt(C) : C;
        return z(_, A), y = !0, a !== void 0 && (a = A), C;
      }
      return dn && y || (E.f & Ct) !== 0 ? _.v : c(_);
    })
  );
}
function Tu(e) {
  ve === null && ri(), Tn && ve.l !== null ? Du(ve).m.push(e) : Ue(() => {
    const t = Ee(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ao(e) {
  ve === null && ri(), Tu(() => () => Ee(e));
}
function Du(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const Iu = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Iu);
var zu = { value: () => {
} };
function lo() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Ar(n);
}
function Ar(e) {
  this._ = e;
}
function Ou(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Ar.prototype = lo.prototype = {
  constructor: Ar,
  on: function(e, t) {
    var n = this._, r = Ou(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Ru(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = ji(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = ji(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Ar(e);
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
function Ru(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function ji(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = zu, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Yo = "http://www.w3.org/1999/xhtml";
const Ji = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Yo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function co(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ji.hasOwnProperty(t) ? { space: Ji[t], local: e } : e;
}
function Lu(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Yo && t.documentElement.namespaceURI === Yo ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Hu(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ha(e) {
  var t = co(e);
  return (t.local ? Hu : Lu)(t);
}
function Vu() {
}
function vi(e) {
  return e == null ? Vu : function() {
    return this.querySelector(e);
  };
}
function Bu(e) {
  typeof e != "function" && (e = vi(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Ze(r, this._parents);
}
function Fu(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ku() {
  return [];
}
function Va(e) {
  return e == null ? Ku : function() {
    return this.querySelectorAll(e);
  };
}
function Yu(e) {
  return function() {
    return Fu(e.apply(this, arguments));
  };
}
function Zu(e) {
  typeof e == "function" ? e = Yu(e) : e = Va(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Ze(r, o);
}
function Ba(e) {
  return function() {
    return this.matches(e);
  };
}
function Fa(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Xu = Array.prototype.find;
function Wu(e) {
  return function() {
    return Xu.call(this.children, e);
  };
}
function qu() {
  return this.firstElementChild;
}
function Gu(e) {
  return this.select(e == null ? qu : Wu(typeof e == "function" ? e : Fa(e)));
}
var Uu = Array.prototype.filter;
function ju() {
  return Array.from(this.children);
}
function Ju(e) {
  return function() {
    return Uu.call(this.children, e);
  };
}
function Qu(e) {
  return this.selectAll(e == null ? ju : Ju(typeof e == "function" ? e : Fa(e)));
}
function $u(e) {
  typeof e != "function" && (e = Ba(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ze(r, this._parents);
}
function Ka(e) {
  return new Array(e.length);
}
function ed() {
  return new Ze(this._enter || this._groups.map(Ka), this._parents);
}
function Br(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Br.prototype = {
  constructor: Br,
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
function td(e) {
  return function() {
    return e;
  };
}
function nd(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Br(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function rd(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new Br(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function od(e) {
  return e.__data__;
}
function id(e, t) {
  if (!arguments.length) return Array.from(this, od);
  var n = t ? rd : nd, r = this._parents, o = this._groups;
  typeof e != "function" && (e = td(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], f = h.length, g = sd(e.call(d, d && d.__data__, u, r)), v = g.length, m = a[u] = new Array(v), y = s[u] = new Array(v), _ = l[u] = new Array(f);
    n(d, h, m, y, _, g, t);
    for (var E = 0, C = 0, x, A; E < v; ++E)
      if (x = m[E]) {
        for (E >= C && (C = E + 1); !(A = y[C]) && ++C < v; ) ;
        x._next = A || null;
      }
  }
  return s = new Ze(s, r), s._enter = a, s._exit = l, s;
}
function sd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ad() {
  return new Ze(this._exit || this._groups.map(Ka), this._parents);
}
function ld(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function cd(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], h = u.length, f = a[l] = new Array(h), g, v = 0; v < h; ++v)
      (g = u[v] || d[v]) && (f[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ze(a, this._parents);
}
function ud() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function dd(e) {
  e || (e = fd);
  function t(h, f) {
    return h && f ? e(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Ze(o, this._parents).order();
}
function fd(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function hd() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function gd() {
  return Array.from(this);
}
function vd() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function pd() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function md() {
  return !this.node();
}
function yd(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function wd(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function _d(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function bd(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function xd(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function kd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Ed(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Sd(e, t) {
  var n = co(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? _d : wd : typeof t == "function" ? n.local ? Ed : kd : n.local ? xd : bd)(n, t));
}
function Ya(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Cd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Nd(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Pd(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Md(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Cd : typeof t == "function" ? Pd : Nd)(e, t, n ?? "")) : Sn(this.node(), e);
}
function Sn(e, t) {
  return e.style.getPropertyValue(t) || Ya(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Ad(e) {
  return function() {
    delete this[e];
  };
}
function Td(e, t) {
  return function() {
    this[e] = t;
  };
}
function Dd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Id(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Ad : typeof t == "function" ? Dd : Td)(e, t)) : this.node()[e];
}
function Za(e) {
  return e.trim().split(/^|\s+/);
}
function pi(e) {
  return e.classList || new Xa(e);
}
function Xa(e) {
  this._node = e, this._names = Za(e.getAttribute("class") || "");
}
Xa.prototype = {
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
function Wa(e, t) {
  for (var n = pi(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function qa(e, t) {
  for (var n = pi(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function zd(e) {
  return function() {
    Wa(this, e);
  };
}
function Od(e) {
  return function() {
    qa(this, e);
  };
}
function Rd(e, t) {
  return function() {
    (t.apply(this, arguments) ? Wa : qa)(this, e);
  };
}
function Ld(e, t) {
  var n = Za(e + "");
  if (arguments.length < 2) {
    for (var r = pi(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Rd : t ? zd : Od)(n, t));
}
function Hd() {
  this.textContent = "";
}
function Vd(e) {
  return function() {
    this.textContent = e;
  };
}
function Bd(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Fd(e) {
  return arguments.length ? this.each(e == null ? Hd : (typeof e == "function" ? Bd : Vd)(e)) : this.node().textContent;
}
function Kd() {
  this.innerHTML = "";
}
function Yd(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Zd(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Xd(e) {
  return arguments.length ? this.each(e == null ? Kd : (typeof e == "function" ? Zd : Yd)(e)) : this.node().innerHTML;
}
function Wd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function qd() {
  return this.each(Wd);
}
function Gd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ud() {
  return this.each(Gd);
}
function jd(e) {
  var t = typeof e == "function" ? e : Ha(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Jd() {
  return null;
}
function Qd(e, t) {
  var n = typeof e == "function" ? e : Ha(e), r = t == null ? Jd : typeof t == "function" ? t : vi(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function $d() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function ef() {
  return this.each($d);
}
function tf() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function nf() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function rf(e) {
  return this.select(e ? nf : tf);
}
function of(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function sf(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function af(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function lf(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function cf(e, t, n) {
  return function() {
    var r = this.__on, o, i = sf(t);
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
function uf(e, t, n) {
  var r = af(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, u = a.length, d; l < u; ++l)
        for (o = 0, d = a[l]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? cf : lf, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Ga(e, t, n) {
  var r = Ya(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function df(e, t) {
  return function() {
    return Ga(this, e, t);
  };
}
function ff(e, t) {
  return function() {
    return Ga(this, e, t.apply(this, arguments));
  };
}
function hf(e, t) {
  return this.each((typeof t == "function" ? ff : df)(e, t));
}
function* gf() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Ua = [null];
function Ze(e, t) {
  this._groups = e, this._parents = t;
}
function cr() {
  return new Ze([[document.documentElement]], Ua);
}
function vf() {
  return this;
}
Ze.prototype = cr.prototype = {
  constructor: Ze,
  select: Bu,
  selectAll: Zu,
  selectChild: Gu,
  selectChildren: Qu,
  filter: $u,
  data: id,
  enter: ed,
  exit: ad,
  join: ld,
  merge: cd,
  selection: vf,
  order: ud,
  sort: dd,
  call: hd,
  nodes: gd,
  node: vd,
  size: pd,
  empty: md,
  each: yd,
  attr: Sd,
  style: Md,
  property: Id,
  classed: Ld,
  text: Fd,
  html: Xd,
  raise: qd,
  lower: Ud,
  append: jd,
  insert: Qd,
  remove: ef,
  clone: rf,
  datum: of,
  on: uf,
  dispatch: hf,
  [Symbol.iterator]: gf
};
function Ge(e) {
  return typeof e == "string" ? new Ze([[document.querySelector(e)]], [document.documentElement]) : new Ze([[e]], Ua);
}
function pf(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Qe(e, t) {
  if (e = pf(e), t === void 0 && (t = e.currentTarget), t) {
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
const mf = { passive: !1 }, Un = { capture: !0, passive: !1 };
function xo(e) {
  e.stopImmediatePropagation();
}
function wn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function ja(e) {
  var t = e.document.documentElement, n = Ge(e).on("dragstart.drag", wn, Un);
  "onselectstart" in t ? n.on("selectstart.drag", wn, Un) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ja(e, t) {
  var n = e.document.documentElement, r = Ge(e).on("dragstart.drag", null);
  t && (r.on("click.drag", wn, Un), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const wr = (e) => () => e;
function Zo(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: u,
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
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
Zo.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function yf(e) {
  return !e.ctrlKey && !e.button;
}
function wf() {
  return this.parentNode;
}
function _f(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function bf() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function xf() {
  var e = yf, t = wf, n = _f, r = bf, o = {}, i = lo("start", "drag", "end"), s = 0, a, l, u, d, h = 0;
  function f(x) {
    x.on("mousedown.drag", g).filter(r).on("touchstart.drag", y).on("touchmove.drag", _, mf).on("touchend.drag touchcancel.drag", E).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(x, A) {
    if (!(d || !e.call(this, x, A))) {
      var P = C(this, t.call(this, x, A), x, A, "mouse");
      P && (Ge(x.view).on("mousemove.drag", v, Un).on("mouseup.drag", m, Un), ja(x.view), xo(x), u = !1, a = x.clientX, l = x.clientY, P("start", x));
    }
  }
  function v(x) {
    if (wn(x), !u) {
      var A = x.clientX - a, P = x.clientY - l;
      u = A * A + P * P > h;
    }
    o.mouse("drag", x);
  }
  function m(x) {
    Ge(x.view).on("mousemove.drag mouseup.drag", null), Ja(x.view, u), wn(x), o.mouse("end", x);
  }
  function y(x, A) {
    if (e.call(this, x, A)) {
      var P = x.changedTouches, I = t.call(this, x, A), M = P.length, H, Y;
      for (H = 0; H < M; ++H)
        (Y = C(this, I, x, A, P[H].identifier, P[H])) && (xo(x), Y("start", x, P[H]));
    }
  }
  function _(x) {
    var A = x.changedTouches, P = A.length, I, M;
    for (I = 0; I < P; ++I)
      (M = o[A[I].identifier]) && (wn(x), M("drag", x, A[I]));
  }
  function E(x) {
    var A = x.changedTouches, P = A.length, I, M;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), I = 0; I < P; ++I)
      (M = o[A[I].identifier]) && (xo(x), M("end", x, A[I]));
  }
  function C(x, A, P, I, M, H) {
    var Y = i.copy(), T = Qe(H || P, A), b, N, p;
    if ((p = n.call(x, new Zo("beforestart", {
      sourceEvent: P,
      target: f,
      identifier: M,
      active: s,
      x: T[0],
      y: T[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), I)) != null)
      return b = p.x - T[0] || 0, N = p.y - T[1] || 0, function k(S, D, R) {
        var O = T, F;
        switch (S) {
          case "start":
            o[M] = k, F = s++;
            break;
          case "end":
            delete o[M], --s;
          // falls through
          case "drag":
            T = Qe(R || D, A), F = s;
            break;
        }
        Y.call(
          S,
          x,
          new Zo(S, {
            sourceEvent: D,
            subject: p,
            target: f,
            identifier: M,
            active: F,
            x: T[0] + b,
            y: T[1] + N,
            dx: T[0] - O[0],
            dy: T[1] - O[1],
            dispatch: Y
          }),
          I
        );
      };
  }
  return f.filter = function(x) {
    return arguments.length ? (e = typeof x == "function" ? x : wr(!!x), f) : e;
  }, f.container = function(x) {
    return arguments.length ? (t = typeof x == "function" ? x : wr(x), f) : t;
  }, f.subject = function(x) {
    return arguments.length ? (n = typeof x == "function" ? x : wr(x), f) : n;
  }, f.touchable = function(x) {
    return arguments.length ? (r = typeof x == "function" ? x : wr(!!x), f) : r;
  }, f.on = function() {
    var x = i.on.apply(i, arguments);
    return x === i ? f : x;
  }, f.clickDistance = function(x) {
    return arguments.length ? (h = (x = +x) * x, f) : Math.sqrt(h);
  }, f;
}
function mi(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Qa(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function ur() {
}
var jn = 0.7, Fr = 1 / jn, _n = "\\s*([+-]?\\d+)\\s*", Jn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", dt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", kf = /^#([0-9a-f]{3,8})$/, Ef = new RegExp(`^rgb\\(${_n},${_n},${_n}\\)$`), Sf = new RegExp(`^rgb\\(${dt},${dt},${dt}\\)$`), Cf = new RegExp(`^rgba\\(${_n},${_n},${_n},${Jn}\\)$`), Nf = new RegExp(`^rgba\\(${dt},${dt},${dt},${Jn}\\)$`), Pf = new RegExp(`^hsl\\(${Jn},${dt},${dt}\\)$`), Mf = new RegExp(`^hsla\\(${Jn},${dt},${dt},${Jn}\\)$`), Qi = {
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
mi(ur, sn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: $i,
  // Deprecated! Use color.formatHex.
  formatHex: $i,
  formatHex8: Af,
  formatHsl: Tf,
  formatRgb: es,
  toString: es
});
function $i() {
  return this.rgb().formatHex();
}
function Af() {
  return this.rgb().formatHex8();
}
function Tf() {
  return $a(this).formatHsl();
}
function es() {
  return this.rgb().formatRgb();
}
function sn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = kf.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ts(t) : n === 3 ? new Re(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? _r(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? _r(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ef.exec(e)) ? new Re(t[1], t[2], t[3], 1) : (t = Sf.exec(e)) ? new Re(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Cf.exec(e)) ? _r(t[1], t[2], t[3], t[4]) : (t = Nf.exec(e)) ? _r(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Pf.exec(e)) ? os(t[1], t[2] / 100, t[3] / 100, 1) : (t = Mf.exec(e)) ? os(t[1], t[2] / 100, t[3] / 100, t[4]) : Qi.hasOwnProperty(e) ? ts(Qi[e]) : e === "transparent" ? new Re(NaN, NaN, NaN, 0) : null;
}
function ts(e) {
  return new Re(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function _r(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Re(e, t, n, r);
}
function Df(e) {
  return e instanceof ur || (e = sn(e)), e ? (e = e.rgb(), new Re(e.r, e.g, e.b, e.opacity)) : new Re();
}
function Xo(e, t, n, r) {
  return arguments.length === 1 ? Df(e) : new Re(e, t, n, r ?? 1);
}
function Re(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
mi(Re, Xo, Qa(ur, {
  brighter(e) {
    return e = e == null ? Fr : Math.pow(Fr, e), new Re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? jn : Math.pow(jn, e), new Re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Re($t(this.r), $t(this.g), $t(this.b), Kr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ns,
  // Deprecated! Use color.formatHex.
  formatHex: ns,
  formatHex8: If,
  formatRgb: rs,
  toString: rs
}));
function ns() {
  return `#${Ut(this.r)}${Ut(this.g)}${Ut(this.b)}`;
}
function If() {
  return `#${Ut(this.r)}${Ut(this.g)}${Ut(this.b)}${Ut((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rs() {
  const e = Kr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${$t(this.r)}, ${$t(this.g)}, ${$t(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Kr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function $t(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ut(e) {
  return e = $t(e), (e < 16 ? "0" : "") + e.toString(16);
}
function os(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new $e(e, t, n, r);
}
function $a(e) {
  if (e instanceof $e) return new $e(e.h, e.s, e.l, e.opacity);
  if (e instanceof ur || (e = sn(e)), !e) return new $e();
  if (e instanceof $e) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new $e(s, a, l, e.opacity);
}
function zf(e, t, n, r) {
  return arguments.length === 1 ? $a(e) : new $e(e, t, n, r ?? 1);
}
function $e(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
mi($e, zf, Qa(ur, {
  brighter(e) {
    return e = e == null ? Fr : Math.pow(Fr, e), new $e(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? jn : Math.pow(jn, e), new $e(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Re(
      ko(e >= 240 ? e - 240 : e + 120, o, r),
      ko(e, o, r),
      ko(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new $e(is(this.h), br(this.s), br(this.l), Kr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Kr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${is(this.h)}, ${br(this.s) * 100}%, ${br(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function is(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function br(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ko(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const yi = (e) => () => e;
function Of(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Rf(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Lf(e) {
  return (e = +e) == 1 ? el : function(t, n) {
    return n - t ? Rf(t, n, e) : yi(isNaN(t) ? n : t);
  };
}
function el(e, t) {
  var n = t - e;
  return n ? Of(e, n) : yi(isNaN(e) ? t : e);
}
const Yr = (function e(t) {
  var n = Lf(t);
  function r(o, i) {
    var s = n((o = Xo(o)).r, (i = Xo(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = el(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function Hf(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Vf(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Bf(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Xn(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Ff(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function at(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Kf(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Xn(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Wo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Eo = new RegExp(Wo.source, "g");
function Yf(e) {
  return function() {
    return e;
  };
}
function Zf(e) {
  return function(t) {
    return e(t) + "";
  };
}
function tl(e, t) {
  var n = Wo.lastIndex = Eo.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Wo.exec(e)) && (o = Eo.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: at(r, o) })), n = Eo.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Zf(l[0].x) : Yf(t) : (t = l.length, function(u) {
    for (var d = 0, h; d < t; ++d) a[(h = l[d]).i] = h.x(u);
    return a.join("");
  });
}
function Xn(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? yi(t) : (n === "number" ? at : n === "string" ? (r = sn(t)) ? (t = r, Yr) : tl : t instanceof sn ? Yr : t instanceof Date ? Ff : Vf(t) ? Hf : Array.isArray(t) ? Bf : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Kf : at)(e, t);
}
var ss = 180 / Math.PI, qo = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function nl(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * ss,
    skewX: Math.atan(l) * ss,
    scaleX: s,
    scaleY: a
  };
}
var xr;
function Xf(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? qo : nl(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Wf(e) {
  return e == null || (xr || (xr = document.createElementNS("http://www.w3.org/2000/svg", "g")), xr.setAttribute("transform", e), !(e = xr.transform.baseVal.consolidate())) ? qo : (e = e.matrix, nl(e.a, e.b, e.c, e.d, e.e, e.f));
}
function rl(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, h, f, g, v) {
    if (u !== h || d !== f) {
      var m = g.push("translate(", null, t, null, n);
      v.push({ i: m - 4, x: at(u, h) }, { i: m - 2, x: at(d, f) });
    } else (h || f) && g.push("translate(" + h + t + f + n);
  }
  function s(u, d, h, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: at(u, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(u, d, h, f) {
    u !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: at(u, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(u, d, h, f, g, v) {
    if (u !== h || d !== f) {
      var m = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: m - 4, x: at(u, h) }, { i: m - 2, x: at(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(u, d) {
    var h = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, h, f), s(u.rotate, d.rotate, h, f), a(u.skewX, d.skewX, h, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, h, f), u = d = null, function(g) {
      for (var v = -1, m = f.length, y; ++v < m; ) h[(y = f[v]).i] = y.x(g);
      return h.join("");
    };
  };
}
var qf = rl(Xf, "px, ", "px)", "deg)"), Gf = rl(Wf, ", ", ")", ")"), Uf = 1e-12;
function as(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function jf(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Jf(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Tr = (function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], h = s[1], f = s[2], g = d - a, v = h - l, m = g * g + v * v, y, _;
    if (m < Uf)
      _ = Math.log(f / u) / t, y = function(I) {
        return [
          a + I * g,
          l + I * v,
          u * Math.exp(t * I * _)
        ];
      };
    else {
      var E = Math.sqrt(m), C = (f * f - u * u + r * m) / (2 * u * n * E), x = (f * f - u * u - r * m) / (2 * f * n * E), A = Math.log(Math.sqrt(C * C + 1) - C), P = Math.log(Math.sqrt(x * x + 1) - x);
      _ = (P - A) / t, y = function(I) {
        var M = I * _, H = as(A), Y = u / (n * E) * (H * Jf(t * M + A) - jf(A));
        return [
          a + Y * g,
          l + Y * v,
          u * H / as(t * M + A)
        ];
      };
    }
    return y.duration = _ * 1e3 * t / Math.SQRT2, y;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
})(Math.SQRT2, 2, 4);
var Cn = 0, Fn = 0, Ln = 0, ol = 1e3, Zr, Kn, Xr = 0, an = 0, uo = 0, Qn = typeof performance == "object" && performance.now ? performance : Date, il = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function wi() {
  return an || (il(Qf), an = Qn.now() + uo);
}
function Qf() {
  an = 0;
}
function Wr() {
  this._call = this._time = this._next = null;
}
Wr.prototype = sl.prototype = {
  constructor: Wr,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? wi() : +n) + (t == null ? 0 : +t), !this._next && Kn !== this && (Kn ? Kn._next = this : Zr = this, Kn = this), this._call = e, this._time = n, Go();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Go());
  }
};
function sl(e, t, n) {
  var r = new Wr();
  return r.restart(e, t, n), r;
}
function $f() {
  wi(), ++Cn;
  for (var e = Zr, t; e; )
    (t = an - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Cn;
}
function ls() {
  an = (Xr = Qn.now()) + uo, Cn = Fn = 0;
  try {
    $f();
  } finally {
    Cn = 0, th(), an = 0;
  }
}
function eh() {
  var e = Qn.now(), t = e - Xr;
  t > ol && (uo -= t, Xr = e);
}
function th() {
  for (var e, t = Zr, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Zr = n);
  Kn = e, Go(r);
}
function Go(e) {
  if (!Cn) {
    Fn && (Fn = clearTimeout(Fn));
    var t = e - an;
    t > 24 ? (e < 1 / 0 && (Fn = setTimeout(ls, e - Qn.now() - uo)), Ln && (Ln = clearInterval(Ln))) : (Ln || (Xr = Qn.now(), Ln = setInterval(eh, ol)), Cn = 1, il(ls));
  }
}
function cs(e, t, n) {
  var r = new Wr();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var nh = lo("start", "end", "cancel", "interrupt"), rh = [], al = 0, us = 1, Uo = 2, Dr = 3, ds = 4, jo = 5, Ir = 6;
function fo(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  oh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: nh,
    tween: rh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: al
  });
}
function _i(e, t) {
  var n = rt(e, t);
  if (n.state > al) throw new Error("too late; already scheduled");
  return n;
}
function pt(e, t) {
  var n = rt(e, t);
  if (n.state > Dr) throw new Error("too late; already running");
  return n;
}
function rt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function oh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = sl(i, 0, n.time);
  function i(u) {
    n.state = us, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, h, f, g;
    if (n.state !== us) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Dr) return cs(s);
        g.state === ds ? (g.state = Ir, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Ir, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (cs(function() {
      n.state === Dr && (n.state = ds, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Uo, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Uo) {
      for (n.state = Dr, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = jo, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === jo && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Ir, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function zr(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Uo && r.state < jo, r.state = Ir, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function ih(e) {
  return this.each(function() {
    zr(this, e);
  });
}
function sh(e, t) {
  var n, r;
  return function() {
    var o = pt(this, e), i = o.tween;
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
function ah(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = pt(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
          o[l] = a;
          break;
        }
      l === u && o.push(a);
    }
    i.tween = o;
  };
}
function lh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = rt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? sh : ah)(n, e, t));
}
function bi(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = pt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return rt(o, r).value[t];
  };
}
function ll(e, t) {
  var n;
  return (typeof t == "number" ? at : t instanceof sn ? Yr : (n = sn(t)) ? (t = n, Yr) : tl)(e, t);
}
function ch(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function uh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function dh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function fh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function hh(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function gh(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function vh(e, t) {
  var n = co(e), r = n === "transform" ? Gf : ll;
  return this.attrTween(e, typeof t == "function" ? (n.local ? gh : hh)(n, r, bi(this, "attr." + e, t)) : t == null ? (n.local ? uh : ch)(n) : (n.local ? fh : dh)(n, r, t));
}
function ph(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function mh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function yh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && mh(e, i)), n;
  }
  return o._value = t, o;
}
function wh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && ph(e, i)), n;
  }
  return o._value = t, o;
}
function _h(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = co(e);
  return this.tween(n, (r.local ? yh : wh)(r, t));
}
function bh(e, t) {
  return function() {
    _i(this, e).delay = +t.apply(this, arguments);
  };
}
function xh(e, t) {
  return t = +t, function() {
    _i(this, e).delay = t;
  };
}
function kh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? bh : xh)(t, e)) : rt(this.node(), t).delay;
}
function Eh(e, t) {
  return function() {
    pt(this, e).duration = +t.apply(this, arguments);
  };
}
function Sh(e, t) {
  return t = +t, function() {
    pt(this, e).duration = t;
  };
}
function Ch(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Eh : Sh)(t, e)) : rt(this.node(), t).duration;
}
function Nh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    pt(this, e).ease = t;
  };
}
function Ph(e) {
  var t = this._id;
  return arguments.length ? this.each(Nh(t, e)) : rt(this.node(), t).ease;
}
function Mh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    pt(this, e).ease = n;
  };
}
function Ah(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Mh(this._id, e));
}
function Th(e) {
  typeof e != "function" && (e = Ba(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new At(r, this._parents, this._name, this._id);
}
function Dh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || u[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new At(s, this._parents, this._name, this._id);
}
function Ih(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function zh(e, t, n) {
  var r, o, i = Ih(t) ? _i : pt;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Oh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? rt(this.node(), n).on.on(e) : this.each(zh(n, e, t));
}
function Rh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Lh() {
  return this.on("end.remove", Rh(this._id));
}
function Hh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = vi(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[f] = h, fo(u[f], t, n, f, u, rt(d, n)));
  return new At(i, this._parents, t, n);
}
function Vh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Va(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, h = 0; h < u; ++h)
      if (d = l[h]) {
        for (var f = e.call(d, d.__data__, h, l), g, v = rt(d, n), m = 0, y = f.length; m < y; ++m)
          (g = f[m]) && fo(g, t, n, m, f, v);
        i.push(f), s.push(d);
      }
  return new At(i, s, t, n);
}
var Bh = cr.prototype.constructor;
function Fh() {
  return new Bh(this._groups, this._parents);
}
function Kh(e, t) {
  var n, r, o;
  return function() {
    var i = Sn(this, e), s = (this.style.removeProperty(e), Sn(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function cl(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Yh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Sn(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Zh(e, t, n) {
  var r, o, i;
  return function() {
    var s = Sn(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Sn(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Xh(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = pt(this, e), u = l.on, d = l.value[i] == null ? a || (a = cl(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Wh(e, t, n) {
  var r = (e += "") == "transform" ? qf : ll;
  return t == null ? this.styleTween(e, Kh(e, r)).on("end.style." + e, cl(e)) : typeof t == "function" ? this.styleTween(e, Zh(e, r, bi(this, "style." + e, t))).each(Xh(this._id, e)) : this.styleTween(e, Yh(e, r, t), n).on("end.style." + e, null);
}
function qh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Gh(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && qh(e, s, n)), r;
  }
  return i._value = t, i;
}
function Uh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Gh(e, t, n ?? ""));
}
function jh(e) {
  return function() {
    this.textContent = e;
  };
}
function Jh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Qh(e) {
  return this.tween("text", typeof e == "function" ? Jh(bi(this, "text", e)) : jh(e == null ? "" : e + ""));
}
function $h(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function eg(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && $h(o)), t;
  }
  return r._value = e, r;
}
function tg(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, eg(e));
}
function ng() {
  for (var e = this._name, t = this._id, n = ul(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = rt(l, t);
        fo(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new At(r, this._parents, e, n);
}
function rg() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = pt(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var og = 0;
function At(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ul() {
  return ++og;
}
var yt = cr.prototype;
At.prototype = {
  constructor: At,
  select: Hh,
  selectAll: Vh,
  selectChild: yt.selectChild,
  selectChildren: yt.selectChildren,
  filter: Th,
  merge: Dh,
  selection: Fh,
  transition: ng,
  call: yt.call,
  nodes: yt.nodes,
  node: yt.node,
  size: yt.size,
  empty: yt.empty,
  each: yt.each,
  on: Oh,
  attr: vh,
  attrTween: _h,
  style: Wh,
  styleTween: Uh,
  text: Qh,
  textTween: tg,
  remove: Lh,
  tween: lh,
  delay: kh,
  duration: Ch,
  ease: Ph,
  easeVarying: Ah,
  end: rg,
  [Symbol.iterator]: yt[Symbol.iterator]
};
function ig(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var sg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ig
};
function ag(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function lg(e) {
  var t, n;
  e instanceof At ? (t = e._id, e = e._name) : (t = ul(), (n = sg).time = wi(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && fo(l, e, t, u, s, n || ag(l, t));
  return new At(r, this._parents, e, t);
}
cr.prototype.interrupt = ih;
cr.prototype.transition = lg;
const kr = (e) => () => e;
function cg(e, {
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
function Et(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Et.prototype = {
  constructor: Et,
  scale: function(e) {
    return e === 1 ? this : new Et(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Et(this.k, this.x + this.k * e, this.y + this.k * t);
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
var ho = new Et(1, 0, 0);
dl.prototype = Et.prototype;
function dl(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ho;
  return e.__zoom;
}
function So(e) {
  e.stopImmediatePropagation();
}
function Hn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function ug(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function dg() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function fs() {
  return this.__zoom || ho;
}
function fg(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function hg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function gg(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function fl() {
  var e = ug, t = dg, n = gg, r = fg, o = hg, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Tr, u = lo("start", "zoom", "end"), d, h, f, g = 500, v = 150, m = 0, y = 10;
  function _(p) {
    p.property("__zoom", fs).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", Y).filter(o).on("touchstart.zoom", T).on("touchmove.zoom", b).on("touchend.zoom touchcancel.zoom", N).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(p, k, S, D) {
    var R = p.selection ? p.selection() : p;
    R.property("__zoom", fs), p !== R ? A(p, k, S, D) : R.interrupt().each(function() {
      P(this, arguments).event(D).start().zoom(null, typeof k == "function" ? k.apply(this, arguments) : k).end();
    });
  }, _.scaleBy = function(p, k, S, D) {
    _.scaleTo(p, function() {
      var R = this.__zoom.k, O = typeof k == "function" ? k.apply(this, arguments) : k;
      return R * O;
    }, S, D);
  }, _.scaleTo = function(p, k, S, D) {
    _.transform(p, function() {
      var R = t.apply(this, arguments), O = this.__zoom, F = S == null ? x(R) : typeof S == "function" ? S.apply(this, arguments) : S, L = O.invert(F), Z = typeof k == "function" ? k.apply(this, arguments) : k;
      return n(C(E(O, Z), F, L), R, s);
    }, S, D);
  }, _.translateBy = function(p, k, S, D) {
    _.transform(p, function() {
      return n(this.__zoom.translate(
        typeof k == "function" ? k.apply(this, arguments) : k,
        typeof S == "function" ? S.apply(this, arguments) : S
      ), t.apply(this, arguments), s);
    }, null, D);
  }, _.translateTo = function(p, k, S, D, R) {
    _.transform(p, function() {
      var O = t.apply(this, arguments), F = this.__zoom, L = D == null ? x(O) : typeof D == "function" ? D.apply(this, arguments) : D;
      return n(ho.translate(L[0], L[1]).scale(F.k).translate(
        typeof k == "function" ? -k.apply(this, arguments) : -k,
        typeof S == "function" ? -S.apply(this, arguments) : -S
      ), O, s);
    }, D, R);
  };
  function E(p, k) {
    return k = Math.max(i[0], Math.min(i[1], k)), k === p.k ? p : new Et(k, p.x, p.y);
  }
  function C(p, k, S) {
    var D = k[0] - S[0] * p.k, R = k[1] - S[1] * p.k;
    return D === p.x && R === p.y ? p : new Et(p.k, D, R);
  }
  function x(p) {
    return [(+p[0][0] + +p[1][0]) / 2, (+p[0][1] + +p[1][1]) / 2];
  }
  function A(p, k, S, D) {
    p.on("start.zoom", function() {
      P(this, arguments).event(D).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(D).end();
    }).tween("zoom", function() {
      var R = this, O = arguments, F = P(R, O).event(D), L = t.apply(R, O), Z = S == null ? x(L) : typeof S == "function" ? S.apply(R, O) : S, G = Math.max(L[1][0] - L[0][0], L[1][1] - L[0][1]), K = R.__zoom, J = typeof k == "function" ? k.apply(R, O) : k, X = l(K.invert(Z).concat(G / K.k), J.invert(Z).concat(G / J.k));
      return function(W) {
        if (W === 1) W = J;
        else {
          var U = X(W), le = G / U[2];
          W = new Et(le, Z[0] - U[0] * le, Z[1] - U[1] * le);
        }
        F.zoom(null, W);
      };
    });
  }
  function P(p, k, S) {
    return !S && p.__zooming || new I(p, k);
  }
  function I(p, k) {
    this.that = p, this.args = k, this.active = 0, this.sourceEvent = null, this.extent = t.apply(p, k), this.taps = 0;
  }
  I.prototype = {
    event: function(p) {
      return p && (this.sourceEvent = p), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(p, k) {
      return this.mouse && p !== "mouse" && (this.mouse[1] = k.invert(this.mouse[0])), this.touch0 && p !== "touch" && (this.touch0[1] = k.invert(this.touch0[0])), this.touch1 && p !== "touch" && (this.touch1[1] = k.invert(this.touch1[0])), this.that.__zoom = k, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(p) {
      var k = Ge(this.that).datum();
      u.call(
        p,
        this.that,
        new cg(p, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: u
        }),
        k
      );
    }
  };
  function M(p, ...k) {
    if (!e.apply(this, arguments)) return;
    var S = P(this, k).event(p), D = this.__zoom, R = Math.max(i[0], Math.min(i[1], D.k * Math.pow(2, r.apply(this, arguments)))), O = Qe(p);
    if (S.wheel)
      (S.mouse[0][0] !== O[0] || S.mouse[0][1] !== O[1]) && (S.mouse[1] = D.invert(S.mouse[0] = O)), clearTimeout(S.wheel);
    else {
      if (D.k === R) return;
      S.mouse = [O, D.invert(O)], zr(this), S.start();
    }
    Hn(p), S.wheel = setTimeout(F, v), S.zoom("mouse", n(C(E(D, R), S.mouse[0], S.mouse[1]), S.extent, s));
    function F() {
      S.wheel = null, S.end();
    }
  }
  function H(p, ...k) {
    if (f || !e.apply(this, arguments)) return;
    var S = p.currentTarget, D = P(this, k, !0).event(p), R = Ge(p.view).on("mousemove.zoom", Z, !0).on("mouseup.zoom", G, !0), O = Qe(p, S), F = p.clientX, L = p.clientY;
    ja(p.view), So(p), D.mouse = [O, this.__zoom.invert(O)], zr(this), D.start();
    function Z(K) {
      if (Hn(K), !D.moved) {
        var J = K.clientX - F, X = K.clientY - L;
        D.moved = J * J + X * X > m;
      }
      D.event(K).zoom("mouse", n(C(D.that.__zoom, D.mouse[0] = Qe(K, S), D.mouse[1]), D.extent, s));
    }
    function G(K) {
      R.on("mousemove.zoom mouseup.zoom", null), Ja(K.view, D.moved), Hn(K), D.event(K).end();
    }
  }
  function Y(p, ...k) {
    if (e.apply(this, arguments)) {
      var S = this.__zoom, D = Qe(p.changedTouches ? p.changedTouches[0] : p, this), R = S.invert(D), O = S.k * (p.shiftKey ? 0.5 : 2), F = n(C(E(S, O), D, R), t.apply(this, k), s);
      Hn(p), a > 0 ? Ge(this).transition().duration(a).call(A, F, D, p) : Ge(this).call(_.transform, F, D, p);
    }
  }
  function T(p, ...k) {
    if (e.apply(this, arguments)) {
      var S = p.touches, D = S.length, R = P(this, k, p.changedTouches.length === D).event(p), O, F, L, Z;
      for (So(p), F = 0; F < D; ++F)
        L = S[F], Z = Qe(L, this), Z = [Z, this.__zoom.invert(Z), L.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== Z[2] && (R.touch1 = Z, R.taps = 0) : (R.touch0 = Z, O = !0, R.taps = 1 + !!d);
      d && (d = clearTimeout(d)), O && (R.taps < 2 && (h = Z[0], d = setTimeout(function() {
        d = null;
      }, g)), zr(this), R.start());
    }
  }
  function b(p, ...k) {
    if (this.__zooming) {
      var S = P(this, k).event(p), D = p.changedTouches, R = D.length, O, F, L, Z;
      for (Hn(p), O = 0; O < R; ++O)
        F = D[O], L = Qe(F, this), S.touch0 && S.touch0[2] === F.identifier ? S.touch0[0] = L : S.touch1 && S.touch1[2] === F.identifier && (S.touch1[0] = L);
      if (F = S.that.__zoom, S.touch1) {
        var G = S.touch0[0], K = S.touch0[1], J = S.touch1[0], X = S.touch1[1], W = (W = J[0] - G[0]) * W + (W = J[1] - G[1]) * W, U = (U = X[0] - K[0]) * U + (U = X[1] - K[1]) * U;
        F = E(F, Math.sqrt(W / U)), L = [(G[0] + J[0]) / 2, (G[1] + J[1]) / 2], Z = [(K[0] + X[0]) / 2, (K[1] + X[1]) / 2];
      } else if (S.touch0) L = S.touch0[0], Z = S.touch0[1];
      else return;
      S.zoom("touch", n(C(F, L, Z), S.extent, s));
    }
  }
  function N(p, ...k) {
    if (this.__zooming) {
      var S = P(this, k).event(p), D = p.changedTouches, R = D.length, O, F;
      for (So(p), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), O = 0; O < R; ++O)
        F = D[O], S.touch0 && S.touch0[2] === F.identifier ? delete S.touch0 : S.touch1 && S.touch1[2] === F.identifier && delete S.touch1;
      if (S.touch1 && !S.touch0 && (S.touch0 = S.touch1, delete S.touch1), S.touch0) S.touch0[1] = this.__zoom.invert(S.touch0[0]);
      else if (S.end(), S.taps === 2 && (F = Qe(F, this), Math.hypot(h[0] - F[0], h[1] - F[1]) < y)) {
        var L = Ge(this).on("dblclick.zoom");
        L && L.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : kr(+p), _) : r;
  }, _.filter = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : kr(!!p), _) : e;
  }, _.touchable = function(p) {
    return arguments.length ? (o = typeof p == "function" ? p : kr(!!p), _) : o;
  }, _.extent = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : kr([[+p[0][0], +p[0][1]], [+p[1][0], +p[1][1]]]), _) : t;
  }, _.scaleExtent = function(p) {
    return arguments.length ? (i[0] = +p[0], i[1] = +p[1], _) : [i[0], i[1]];
  }, _.translateExtent = function(p) {
    return arguments.length ? (s[0][0] = +p[0][0], s[1][0] = +p[1][0], s[0][1] = +p[0][1], s[1][1] = +p[1][1], _) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, _.constrain = function(p) {
    return arguments.length ? (n = p, _) : n;
  }, _.duration = function(p) {
    return arguments.length ? (a = +p, _) : a;
  }, _.interpolate = function(p) {
    return arguments.length ? (l = p, _) : l;
  }, _.on = function() {
    var p = u.on.apply(u, arguments);
    return p === u ? _ : p;
  }, _.clickDistance = function(p) {
    return arguments.length ? (m = (p = +p) * p, _) : Math.sqrt(m);
  }, _.tapDistance = function(p) {
    return arguments.length ? (y = +p, _) : y;
  }, _;
}
const $n = {
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
}, Jo = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], hl = ["Enter", " ", "Escape"], vg = {
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
var Nn;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Nn || (Nn = {}));
var bn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(bn || (bn = {}));
var qr;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(qr || (qr = {}));
const Qo = {
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
var zt;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(zt || (zt = {}));
var Gr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Gr || (Gr = {}));
var $;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})($ || ($ = {}));
const hs = {
  [$.Left]: $.Right,
  [$.Right]: $.Left,
  [$.Top]: $.Bottom,
  [$.Bottom]: $.Top
};
function pg(e, t) {
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
function gs(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function mg(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const gl = (e) => "id" in e && "source" in e && "target" in e, yg = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), xi = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), dr = (e, t = [0, 0]) => {
  const { width: n, height: r } = Wt(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, wg = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : xi(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Ur(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return go(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return vo(n);
}, fr = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = go(n, Ur(o)), r = !0);
  }), r ? vo(n) : { x: 0, y: 0, width: 0, height: 0 };
}, ki = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...gr(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = u;
    if (s && !h || f)
      continue;
    const g = d.width ?? u.width ?? u.initialWidth ?? null, v = d.height ?? u.height ?? u.initialHeight ?? null, m = er(a, Mn(u)), y = (g ?? 0) * (v ?? 0), _ = i && m > 0;
    (!u.internals.handleBounds || _ || m >= y || u.dragging) && l.push(u);
  }
  return l;
}, _g = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function bg(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function xg({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = bg(e, s), l = fr(a), u = Ei(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function vl({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", $n.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (h = [
        [l, u],
        [l + g, u + v]
      ]);
    }
  else a && An(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = An(h) ? ln(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", $n.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function kg({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), v = !g && f.parentId && s.find((m) => m.id === f.parentId);
    (g || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), d = _g(s, l);
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
const Pn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), ln = (e = { x: 0, y: 0 }, t, n) => ({
  x: Pn(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Pn(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function pl(e, t, n) {
  const { width: r, height: o } = Wt(n), { x: i, y: s } = n.internals.positionAbsolute;
  return ln(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const vs = (e, t, n) => e < t ? Pn(Math.abs(e - t), 1, t) / t : e > n ? -Pn(Math.abs(e - n), 1, t) / t : 0, ml = (e, t, n = 15, r = 40) => {
  const o = vs(e.x, r, t.width - r) * n, i = vs(e.y, r, t.height - r) * n;
  return [o, i];
}, go = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), $o = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), vo = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Mn = (e, t = [0, 0]) => {
  const { x: n, y: r } = xi(e) ? e.internals.positionAbsolute : dr(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Ur = (e, t = [0, 0]) => {
  const { x: n, y: r } = xi(e) ? e.internals.positionAbsolute : dr(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, yl = (e, t) => vo(go($o(e), $o(t))), er = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, ps = (e) => St(e.width) && St(e.height) && St(e.x) && St(e.y), St = (e) => !isNaN(e) && isFinite(e), Eg = (e, t) => {
}, hr = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), gr = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? hr(a, s) : a;
}, jr = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function vn(e, t) {
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
function Sg(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = vn(e, n), o = vn(e, t);
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
    const r = vn(e.top ?? e.y ?? 0, n), o = vn(e.bottom ?? e.y ?? 0, n), i = vn(e.left ?? e.x ?? 0, t), s = vn(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Cg(e, t, n, r, o, i) {
  const { x: s, y: a } = jr(e, [t, n, r]), { x: l, y: u } = jr({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const Ei = (e, t, n, r, o, i) => {
  const s = Sg(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Pn(u, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, v = n / 2 - f * d, m = Cg(e, g, v, d, t, n), y = {
    left: Math.min(m.left - s.left, 0),
    top: Math.min(m.top - s.top, 0),
    right: Math.min(m.right - s.right, 0),
    bottom: Math.min(m.bottom - s.bottom, 0)
  };
  return {
    x: g - y.left + y.right,
    y: v - y.top + y.bottom,
    zoom: d
  };
}, tr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function An(e) {
  return e != null && e !== "parent";
}
function Wt(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function wl(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Ng(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Pg(e) {
  return { ...vg, ...e || {} };
}
function Co(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = tt(e), a = gr({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? hr(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const _l = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), bl = (e) => e?.getRootNode?.() || window?.document, Mg = ["INPUT", "SELECT", "TEXTAREA"];
function xl(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Mg.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const kl = (e) => "clientX" in e, tt = (e, t) => {
  const n = kl(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, ms = (e, t, n, r, o) => {
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
      ..._l(s)
    };
  });
};
function Ag({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), h = Math.abs(u - t);
  return [l, u, d, h];
}
function Er(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function ys({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case $.Left:
      return [t - Er(t - r, i), n];
    case $.Right:
      return [t + Er(r - t, i), n];
    case $.Top:
      return [t, n - Er(n - o, i)];
    case $.Bottom:
      return [t, n + Er(o - n, i)];
  }
}
function El({ sourceX: e, sourceY: t, sourcePosition: n = $.Bottom, targetX: r, targetY: o, targetPosition: i = $.Top, curvature: s = 0.25 }) {
  const [a, l] = ys({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = ys({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [h, f, g, v] = Ag({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${l} ${u},${d} ${r},${o}`,
    h,
    f,
    g,
    v
  ];
}
function Sl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Tg({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, a = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + a;
}
function Dg({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = go(Ur(e), Ur(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return er(s, vo(i)) > 0;
}
const Ig = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, zg = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Og = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || Ig;
  let o;
  return gl(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, zg(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function Cl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Sl({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const ws = {
  [$.Left]: { x: -1, y: 0 },
  [$.Right]: { x: 1, y: 0 },
  [$.Top]: { x: 0, y: -1 },
  [$.Bottom]: { x: 0, y: 1 }
}, Rg = ({ source: e, sourcePosition: t = $.Bottom, target: n }) => t === $.Left || t === $.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, _s = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Lg({ source: e, sourcePosition: t = $.Bottom, target: n, targetPosition: r = $.Top, center: o, offset: i, stepPosition: s }) {
  const a = ws[t], l = ws[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = Rg({
    source: u,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let v = [], m, y;
  const _ = { x: 0, y: 0 }, E = { x: 0, y: 0 }, [, , C, x] = Sl({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (m = o.x ?? u.x + (d.x - u.x) * s, y = o.y ?? (u.y + d.y) / 2) : (m = o.x ?? (u.x + d.x) / 2, y = o.y ?? u.y + (d.y - u.y) * s);
    const P = [
      { x: m, y: u.y },
      { x: m, y: d.y }
    ], I = [
      { x: u.x, y },
      { x: d.x, y }
    ];
    a[f] === g ? v = f === "x" ? P : I : v = f === "x" ? I : P;
  } else {
    const P = [{ x: u.x, y: d.y }], I = [{ x: d.x, y: u.y }];
    if (f === "x" ? v = a.x === g ? I : P : v = a.y === g ? P : I, t === r) {
      const b = Math.abs(e[f] - n[f]);
      if (b <= i) {
        const N = Math.min(i - 1, i - b);
        a[f] === g ? _[f] = (u[f] > e[f] ? -1 : 1) * N : E[f] = (d[f] > n[f] ? -1 : 1) * N;
      }
    }
    if (t !== r) {
      const b = f === "x" ? "y" : "x", N = a[f] === l[b], p = u[b] > d[b], k = u[b] < d[b];
      (a[f] === 1 && (!N && p || N && k) || a[f] !== 1 && (!N && k || N && p)) && (v = f === "x" ? P : I);
    }
    const M = { x: u.x + _.x, y: u.y + _.y }, H = { x: d.x + E.x, y: d.y + E.y }, Y = Math.max(Math.abs(M.x - v[0].x), Math.abs(H.x - v[0].x)), T = Math.max(Math.abs(M.y - v[0].y), Math.abs(H.y - v[0].y));
    Y >= T ? (m = (M.x + H.x) / 2, y = v[0].y) : (m = v[0].x, y = (M.y + H.y) / 2);
  }
  return [[
    e,
    { x: u.x + _.x, y: u.y + _.y },
    ...v,
    { x: d.x + E.x, y: d.y + E.y },
    n
  ], m, y, C, x];
}
function Hg(e, t, n, r) {
  const o = Math.min(_s(e, t) / 2, _s(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Si({ sourceX: e, sourceY: t, sourcePosition: n = $.Bottom, targetX: r, targetY: o, targetPosition: i = $.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, v, m] = Lg({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [h.reduce((_, E, C) => {
    let x = "";
    return C > 0 && C < h.length - 1 ? x = Hg(h[C - 1], E, h[C + 1], s) : x = `${C === 0 ? "M" : "L"}${E.x} ${E.y}`, _ += x, _;
  }, ""), f, g, v, m];
}
function bs(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Vg(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!bs(t) || !bs(n))
    return null;
  const r = t.internals.handleBounds || xs(t.handles), o = n.internals.handleBounds || xs(n.handles), i = ks(r?.source ?? [], e.sourceHandle), s = ks(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Nn.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", $n.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || $.Bottom, l = s?.position || $.Top, u = cn(t, i, a), d = cn(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function xs(e) {
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
function cn(e, t, n = $.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Wt(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case $.Top:
      return { x: o + s / 2, y: i };
    case $.Right:
      return { x: o + s, y: i + a / 2 };
    case $.Bottom:
      return { x: o + s / 2, y: i + a };
    case $.Left:
      return { x: o, y: i + a / 2 };
  }
}
function ks(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function ei(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Bg(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = ei(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const Nl = 1e3, Fg = 10, Ci = {
  nodeOrigin: [0, 0],
  nodeExtent: Jo,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, Kg = {
  ...Ci,
  checkEquality: !0
};
function Ni(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Yg(e, t, n) {
  const r = Ni(Ci, n);
  for (const o of e.values())
    if (o.parentId)
      Mi(o, e, t, r);
    else {
      const i = dr(o, r.nodeOrigin), s = An(o.extent) ? o.extent : r.nodeExtent, a = ln(i, s, Wt(o));
      o.internals.positionAbsolute = a;
    }
}
function Zg(e, t) {
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
function Pi(e) {
  return e === "manual";
}
function Xg(e, t, n, r = {}) {
  const o = Ni(Kg, r), i = { i: 0 }, s = new Map(t), a = o?.elevateNodesOnSelect && !Pi(o.zIndexMode) ? Nl : 0;
  let l = e.length > 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = s.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const h = dr(u, o.nodeOrigin), f = An(u.extent) ? u.extent : o.nodeExtent, g = ln(h, f, Wt(u));
      d = {
        ...o.defaults,
        ...u,
        measured: {
          width: u.measured?.width,
          height: u.measured?.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: Zg(u, d),
          z: Pl(u, a, o.zIndexMode),
          userNode: u
        }
      }, t.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (l = !1), u.parentId && Mi(d, t, n, r, i);
  }
  return l;
}
function Wg(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Mi(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a, zIndexMode: l } = Ni(Ci, r), u = e.parentId, d = t.get(u);
  if (!d) {
    console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Wg(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && l === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * Fg), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const h = i && !Pi(l) ? Nl : 0, { x: f, y: g, z: v } = qg(e, d, s, a, h, l), { positionAbsolute: m } = e.internals, y = f !== m.x || g !== m.y;
  (y || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: f, y: g } : m,
      z: v
    }
  });
}
function Pl(e, t, n) {
  const r = St(e.zIndex) ? e.zIndex : 0;
  return Pi(n) ? r : r + (e.selected ? t : 0);
}
function qg(e, t, n, r, o, i) {
  const { x: s, y: a } = t.internals.positionAbsolute, l = Wt(e), u = dr(e, n), d = An(e.extent) ? ln(u, e.extent, l) : u;
  let h = ln({ x: s + d.x, y: a + d.y }, r, l);
  e.extent === "parent" && (h = pl(h, l, t));
  const f = Pl(e, o, i), g = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: g >= f ? g + 1 : f
  };
}
function Gg(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Mn(a), u = yl(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Wt(a), h = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), m = Math.max(d.height, Math.round(s.height)), y = (v - d.width) * h[0], _ = (m - d.height) * h[1];
    (f > 0 || g > 0 || y || _) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + y,
        y: a.position.y - g + _
      }
    }), n.get(l)?.forEach((E) => {
      e.some((C) => C.id === E.id) || o.push({
        id: E.id,
        type: "position",
        position: {
          x: E.position.x + f,
          y: E.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (f ? h[0] * f - y : 0),
        height: m + (g ? h[1] * g - _ : 0)
      }
    });
  }), o;
}
function Ug(e, t, n, r, o, i, s) {
  const a = r?.querySelector(".xyflow__viewport");
  let l = !1;
  if (!a)
    return { changes: [], updatedInternals: l };
  const u = [], d = window.getComputedStyle(a), { m22: h } = new window.DOMMatrixReadOnly(d.transform), f = [];
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
    const m = _l(g.nodeElement), y = v.measured.width !== m.width || v.measured.height !== m.height;
    if (!!(m.width && m.height && (y || !v.internals.handleBounds || g.force))) {
      const E = g.nodeElement.getBoundingClientRect(), C = An(v.extent) ? v.extent : i;
      let { positionAbsolute: x } = v.internals;
      v.parentId && v.extent === "parent" ? x = pl(x, m, t.get(v.parentId)) : C && (x = ln(x, C, m));
      const A = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: x,
          handleBounds: {
            source: ms("source", g.nodeElement, E, h, v.id),
            target: ms("target", g.nodeElement, E, h, v.id)
          }
        }
      };
      t.set(v.id, A), v.parentId && Mi(A, t, n, { nodeOrigin: o, zIndexMode: s }), l = !0, y && (u.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && f.push({
        id: v.id,
        parentId: v.parentId,
        rect: Mn(A, o)
      }));
    }
  }
  if (f.length > 0) {
    const g = Gg(f, t, n, o);
    u.push(...g);
  }
  return { changes: u, updatedInternals: l };
}
async function jg({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Es(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, t));
  }
}
function Jg(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Es("source", l, d, e, o, s), Es("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function Ml(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Ml(n, t) : !1;
}
function Ss(e, t, n) {
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
function Qg(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Ml(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function No({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function $g({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = hr(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function ev({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, v = !1, m = null;
  function y({ noDragClassName: E, handleSelector: C, domNode: x, isSelectable: A, nodeId: P, nodeClickDistance: I = 0 }) {
    f = Ge(x);
    function M({ x: b, y: N }) {
      const { nodeLookup: p, nodeExtent: k, snapGrid: S, snapToGrid: D, nodeOrigin: R, onNodeDrag: O, onSelectionDrag: F, onError: L, updateNodePositions: Z } = t();
      i = { x: b, y: N };
      let G = !1;
      const K = a.size > 1, J = K && k ? $o(fr(a)) : null, X = K && D ? $g({
        dragItems: a,
        snapGrid: S,
        x: b,
        y: N
      }) : null;
      for (const [W, U] of a) {
        if (!p.has(W))
          continue;
        let le = { x: b - U.distance.x, y: N - U.distance.y };
        D && (le = X ? {
          x: Math.round(le.x + X.x),
          y: Math.round(le.y + X.y)
        } : hr(le, S));
        let me = null;
        if (K && k && !U.extent && J) {
          const { positionAbsolute: ie } = U.internals, Ce = ie.x - J.x + k[0][0], ot = ie.x + U.measured.width - J.x2 + k[1][0], it = ie.y - J.y + k[0][1], mt = ie.y + U.measured.height - J.y2 + k[1][1];
          me = [
            [Ce, it],
            [ot, mt]
          ];
        }
        const { position: te, positionAbsolute: ge } = vl({
          nodeId: W,
          nextPosition: le,
          nodeLookup: p,
          nodeExtent: me || k,
          nodeOrigin: R,
          onError: L
        });
        G = G || U.position.x !== te.x || U.position.y !== te.y, U.position = te, U.internals.positionAbsolute = ge;
      }
      if (v = v || G, !!G && (Z(a, !0), m && (r || O || !P && F))) {
        const [W, U] = No({
          nodeId: P,
          dragItems: a,
          nodeLookup: p
        });
        r?.(m, a, W, U), O?.(m, W, U), P || F?.(m, U);
      }
    }
    async function H() {
      if (!d)
        return;
      const { transform: b, panBy: N, autoPanSpeed: p, autoPanOnNodeDrag: k } = t();
      if (!k) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, D] = ml(u, d, p);
      (S !== 0 || D !== 0) && (i.x = (i.x ?? 0) - S / b[2], i.y = (i.y ?? 0) - D / b[2], await N({ x: S, y: D }) && M(i)), s = requestAnimationFrame(H);
    }
    function Y(b) {
      const { nodeLookup: N, multiSelectionActive: p, nodesDraggable: k, transform: S, snapGrid: D, snapToGrid: R, selectNodesOnDrag: O, onNodeDragStart: F, onSelectionDragStart: L, unselectNodesAndEdges: Z } = t();
      h = !0, (!O || !A) && !p && P && (N.get(P)?.selected || Z()), A && O && P && e?.(P);
      const G = Co(b.sourceEvent, { transform: S, snapGrid: D, snapToGrid: R, containerBounds: d });
      if (i = G, a = Qg(N, k, G, P), a.size > 0 && (n || F || !P && L)) {
        const [K, J] = No({
          nodeId: P,
          dragItems: a,
          nodeLookup: N
        });
        n?.(b.sourceEvent, a, K, J), F?.(b.sourceEvent, K, J), P || L?.(b.sourceEvent, J);
      }
    }
    const T = xf().clickDistance(I).on("start", (b) => {
      const { domNode: N, nodeDragThreshold: p, transform: k, snapGrid: S, snapToGrid: D } = t();
      d = N?.getBoundingClientRect() || null, g = !1, v = !1, m = b.sourceEvent, p === 0 && Y(b), i = Co(b.sourceEvent, { transform: k, snapGrid: S, snapToGrid: D, containerBounds: d }), u = tt(b.sourceEvent, d);
    }).on("drag", (b) => {
      const { autoPanOnNodeDrag: N, transform: p, snapGrid: k, snapToGrid: S, nodeDragThreshold: D, nodeLookup: R } = t(), O = Co(b.sourceEvent, { transform: p, snapGrid: k, snapToGrid: S, containerBounds: d });
      if (m = b.sourceEvent, (b.sourceEvent.type === "touchmove" && b.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      P && !R.has(P)) && (g = !0), !g) {
        if (!l && N && h && (l = !0, H()), !h) {
          const F = tt(b.sourceEvent, d), L = F.x - u.x, Z = F.y - u.y;
          Math.sqrt(L * L + Z * Z) > D && Y(b);
        }
        (i.x !== O.xSnapped || i.y !== O.ySnapped) && a && h && (u = tt(b.sourceEvent, d), M(O));
      }
    }).on("end", (b) => {
      if (!(!h || g) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: N, updateNodePositions: p, onNodeDragStop: k, onSelectionDragStop: S } = t();
        if (v && (p(a, !1), v = !1), o || k || !P && S) {
          const [D, R] = No({
            nodeId: P,
            dragItems: a,
            nodeLookup: N,
            dragging: !1
          });
          o?.(b.sourceEvent, a, D, R), k?.(b.sourceEvent, D, R), P || S?.(b.sourceEvent, R);
        }
      }
    }).filter((b) => {
      const N = b.target;
      return !b.button && (!E || !Ss(N, `.${E}`, x)) && (!C || Ss(N, C, x));
    });
    f.call(T);
  }
  function _() {
    f?.on(".drag", null);
  }
  return {
    update: y,
    destroy: _
  };
}
function tv(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    er(o, Mn(i)) > 0 && r.push(i);
  return r;
}
const nv = 250;
function rv(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = tv(e, n, t + nv);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: h } = cn(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(h - e.y, 2));
      f > t || (f < i ? (o = [{ ...u, x: d, y: h }], i = f) : f === i && o.push({ ...u, x: d, y: h }));
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
function Al(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...cn(s, l, l.position, !0) } : l;
}
function Tl(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function ov(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Dl = () => !0;
function iv(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: v, onConnect: m, onConnectEnd: y, isValidConnection: _ = Dl, onReconnectEnd: E, updateConnection: C, getTransform: x, getFromHandle: A, autoPanSpeed: P, dragThreshold: I = 1, handleDomNode: M }) {
  const H = bl(e.target);
  let Y = 0, T;
  const { x: b, y: N } = tt(e), p = Tl(i, M), k = a?.getBoundingClientRect();
  let S = !1;
  if (!k || !p)
    return;
  const D = Al(o, p, r, l, t);
  if (!D)
    return;
  let R = tt(e, k), O = !1, F = null, L = !1, Z = null;
  function G() {
    if (!d || !k)
      return;
    const [te, ge] = ml(R, k, P);
    f({ x: te, y: ge }), Y = requestAnimationFrame(G);
  }
  const K = {
    ...D,
    nodeId: o,
    type: p,
    position: D.position
  }, J = l.get(o);
  let W = {
    inProgress: !0,
    isValid: null,
    from: cn(J, K, $.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: J,
    to: R,
    toHandle: null,
    toPosition: hs[K.position],
    toNode: null,
    pointer: R
  };
  function U() {
    S = !0, C(W), v?.(e, { nodeId: o, handleId: r, handleType: p });
  }
  I === 0 && U();
  function le(te) {
    if (!S) {
      const { x: mt, y: he } = tt(te), be = mt - b, Je = he - N;
      if (!(be * be + Je * Je > I * I))
        return;
      U();
    }
    if (!A() || !K) {
      me(te);
      return;
    }
    const ge = x();
    R = tt(te, k), T = rv(gr(R, ge, !1, [1, 1]), n, l, K), O || (G(), O = !0);
    const ie = Il(te, {
      handle: T,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: _,
      doc: H,
      lib: u,
      flowId: h,
      nodeLookup: l
    });
    Z = ie.handleDomNode, F = ie.connection, L = ov(!!T, ie.isValid);
    const Ce = l.get(o), ot = Ce ? cn(Ce, K, $.Left, !0) : W.from, it = {
      ...W,
      from: ot,
      isValid: L,
      to: ie.toHandle && L ? jr({ x: ie.toHandle.x, y: ie.toHandle.y }, ge) : R,
      toHandle: ie.toHandle,
      toPosition: L && ie.toHandle ? ie.toHandle.position : hs[K.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null,
      pointer: R
    };
    C(it), W = it;
  }
  function me(te) {
    if (!("touches" in te && te.touches.length > 0)) {
      if (S) {
        (T || Z) && F && L && m?.(F);
        const { inProgress: ge, ...ie } = W, Ce = {
          ...ie,
          toPosition: W.toHandle ? W.toPosition : null
        };
        y?.(te, Ce), i && E?.(te, Ce);
      }
      g(), cancelAnimationFrame(Y), O = !1, L = !1, F = null, Z = null, H.removeEventListener("mousemove", le), H.removeEventListener("mouseup", me), H.removeEventListener("touchmove", le), H.removeEventListener("touchend", me);
    }
  }
  H.addEventListener("mousemove", le), H.addEventListener("mouseup", me), H.addEventListener("touchmove", le), H.addEventListener("touchend", me);
}
function Il(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Dl, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = tt(e), m = s.elementFromPoint(g, v), y = m?.classList.contains(`${a}-flow__handle`) ? m : f, _ = {
    handleDomNode: y,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (y) {
    const E = Tl(void 0, y), C = y.getAttribute("data-nodeid"), x = y.getAttribute("data-handleid"), A = y.classList.contains("connectable"), P = y.classList.contains("connectableend");
    if (!C || !E)
      return _;
    const I = {
      source: h ? C : r,
      sourceHandle: h ? x : o,
      target: h ? r : C,
      targetHandle: h ? o : x
    };
    _.connection = I;
    const H = A && P && (n === Nn.Strict ? h && E === "source" || !h && E === "target" : C !== r || x !== o);
    _.isValid = H && u(I), _.toHandle = Al(C, E, x, d, n, !0);
  }
  return _;
}
const Cs = {
  onPointerDown: iv,
  isValid: Il
};
function sv({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ge(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const v = (C) => {
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const x = n(), A = C.sourceEvent.ctrlKey && tr() ? 10 : 1, P = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * d, I = x[2] * Math.pow(2, P * A);
      t.scaleTo(I);
    };
    let m = [0, 0];
    const y = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (m = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, _ = (C) => {
      const x = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const A = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], P = [A[0] - m[0], A[1] - m[1]];
      m = A;
      const I = r() * Math.max(x[2], Math.log(x[2])) * (g ? -1 : 1), M = {
        x: x[0] - P[0] * I,
        y: x[1] - P[1] * I
      }, H = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: x[2]
      }, H, a);
    }, E = fl().on("start", y).on("zoom", h ? _ : null).on("zoom.wheel", f ? v : null);
    o.call(E, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Qe
  };
}
const po = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Po = ({ x: e, y: t, zoom: n }) => ho.translate(e, t).scale(n), yn = (e, t) => e.target.closest(`.${t}`), zl = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), av = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Mo = (e, t = 0, n = av, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Ol = (e) => {
  const t = e.ctrlKey && tr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function lv({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (yn(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const y = Qe(d), _ = Ol(d), E = h * Math.pow(2, _);
      r.scaleTo(n, E, y, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === bn.Vertical ? 0 : d.deltaX * f, v = o === bn.Horizontal ? 0 : d.deltaY * f;
    !tr() && d.shiftKey && o !== bn.Vertical && (g = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(v / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const m = po(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, m), e.panScrollTimeout = setTimeout(() => {
      u?.(d, m), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, m));
  };
}
function cv({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = yn(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function uv({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = po(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function dv({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && zl(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, po(i.transform));
  };
}
function fv({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && zl(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = po(s.transform);
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
function hv({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (h) => {
    const f = e || t, g = n && h.ctrlKey, v = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (yn(h, `${u}-flow__node`) || yn(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !v || yn(h, a) && v || yn(h, l) && (!v || o && v && !e) || !n && h.ctrlKey && v)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !g && v || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const m = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || v) && m;
  };
}
function gv({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), h = fl().scaleExtent([t, n]).translateExtent(r), f = Ge(e).call(h);
  E({
    x: o.x,
    y: o.y,
    zoom: Pn(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), v = f.on("dblclick.zoom");
  h.wheelDelta(Ol);
  function m(T, b) {
    return f ? new Promise((N) => {
      h?.interpolate(b?.interpolate === "linear" ? Xn : Tr).transform(Mo(f, b?.duration, b?.ease, () => N(!0)), T);
    }) : Promise.resolve(!1);
  }
  function y({ noWheelClassName: T, noPanClassName: b, onPaneContextMenu: N, userSelectionActive: p, panOnScroll: k, panOnDrag: S, panOnScrollMode: D, panOnScrollSpeed: R, preventScrolling: O, zoomOnPinch: F, zoomOnScroll: L, zoomOnDoubleClick: Z, zoomActivationKeyPressed: G, lib: K, onTransformChange: J, connectionInProgress: X, paneClickDistance: W, selectionOnDrag: U }) {
    p && !u.isZoomingOrPanning && _();
    const le = k && !G && !p;
    h.clickDistance(U ? 1 / 0 : !St(W) || W < 0 ? 0 : W);
    const me = le ? lv({
      zoomPanValues: u,
      noWheelClassName: T,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: D,
      panOnScrollSpeed: R,
      zoomOnPinch: F,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : cv({
      noWheelClassName: T,
      preventScrolling: O,
      d3ZoomHandler: g
    });
    if (f.on("wheel.zoom", me, { passive: !1 }), !p) {
      const ge = uv({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", ge);
      const ie = dv({
        zoomPanValues: u,
        panOnDrag: S,
        onPaneContextMenu: !!N,
        onPanZoom: i,
        onTransformChange: J
      });
      h.on("zoom", ie);
      const Ce = fv({
        zoomPanValues: u,
        panOnDrag: S,
        panOnScroll: k,
        onPaneContextMenu: N,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", Ce);
    }
    const te = hv({
      zoomActivationKeyPressed: G,
      panOnDrag: S,
      zoomOnScroll: L,
      panOnScroll: k,
      zoomOnDoubleClick: Z,
      zoomOnPinch: F,
      userSelectionActive: p,
      noPanClassName: b,
      noWheelClassName: T,
      lib: K,
      connectionInProgress: X
    });
    h.filter(te), Z ? f.on("dblclick.zoom", v) : f.on("dblclick.zoom", null);
  }
  function _() {
    h.on("zoom", null);
  }
  async function E(T, b, N) {
    const p = Po(T), k = h?.constrain()(p, b, N);
    return k && await m(k), new Promise((S) => S(k));
  }
  async function C(T, b) {
    const N = Po(T);
    return await m(N, b), new Promise((p) => p(N));
  }
  function x(T) {
    if (f) {
      const b = Po(T), N = f.property("__zoom");
      (N.k !== T.zoom || N.x !== T.x || N.y !== T.y) && h?.transform(f, b, null, { sync: !0 });
    }
  }
  function A() {
    const T = f ? dl(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: T.x, y: T.y, zoom: T.k };
  }
  function P(T, b) {
    return f ? new Promise((N) => {
      h?.interpolate(b?.interpolate === "linear" ? Xn : Tr).scaleTo(Mo(f, b?.duration, b?.ease, () => N(!0)), T);
    }) : Promise.resolve(!1);
  }
  function I(T, b) {
    return f ? new Promise((N) => {
      h?.interpolate(b?.interpolate === "linear" ? Xn : Tr).scaleBy(Mo(f, b?.duration, b?.ease, () => N(!0)), T);
    }) : Promise.resolve(!1);
  }
  function M(T) {
    h?.scaleExtent(T);
  }
  function H(T) {
    h?.translateExtent(T);
  }
  function Y(T) {
    const b = !St(T) || T < 0 ? 0 : T;
    h?.clickDistance(b);
  }
  return {
    update: y,
    destroy: _,
    setViewport: C,
    setViewportConstrained: E,
    getViewport: A,
    scaleTo: P,
    scaleBy: I,
    setScaleExtent: M,
    setTranslateExtent: H,
    syncViewport: x,
    setClickDistance: Y
  };
}
var Ns;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ns || (Ns = {}));
function Ai() {
  const e = {};
  return [
    (t) => {
      if (t && !Sc(e))
        throw new Error(t);
      return oi(e);
    },
    (t) => ii(e, t)
  ];
}
const [vv, pv] = Ai(), [mv, yv] = Ai(), [wv, _v] = Ai();
var bv = /* @__PURE__ */ Q("<div><!></div>");
function Bt(e, t) {
  ne(t, !0);
  let n = B(t, "id", 3, null), r = B(t, "type", 3, "source"), o = B(t, "position", 19, () => $.Top), i = B(t, "isConnectableStart", 3, !0), s = B(t, "isConnectableEnd", 3, !0), a = /* @__PURE__ */ Xt(t, [
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
  const l = vv("Handle must be used within a Custom Node component"), u = mv("Handle must be used within a Custom Node component");
  let d = /* @__PURE__ */ w(() => r() === "target"), h = /* @__PURE__ */ w(() => t.isConnectable !== void 0 ? t.isConnectable : u.value), f = qt(), g = /* @__PURE__ */ w(() => f.ariaLabelConfig), v = null;
  fa(() => {
    if (t.onconnect || t.ondisconnect) {
      f.edges;
      let b = f.connectionLookup.get(`${l}-${r()}${n() ? `-${n()}` : ""}`);
      if (v && !pg(b, v)) {
        const N = b ?? /* @__PURE__ */ new Map();
        gs(v, N, t.ondisconnect), gs(N, v, t.onconnect);
      }
      v = new Map(b);
    }
  });
  let m = /* @__PURE__ */ w(() => {
    if (!f.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: b, toHandle: N, isValid: p } = f.connection, k = b && b.nodeId === l && b.type === r() && b.id === n(), S = N && N.nodeId === l && N.type === r() && N.id === n(), D = f.connectionMode === Nn.Strict ? b?.type !== r() : l !== b?.nodeId || n() !== b?.id;
    return [
      !0,
      k,
      S,
      D,
      S && p
    ];
  }), y = /* @__PURE__ */ w(() => nr(c(m), 5)), _ = /* @__PURE__ */ w(() => c(y)[0]), E = /* @__PURE__ */ w(() => c(y)[1]), C = /* @__PURE__ */ w(() => c(y)[2]), x = /* @__PURE__ */ w(() => c(y)[3]), A = /* @__PURE__ */ w(() => c(y)[4]);
  function P(b) {
    const N = f.onbeforeconnect ? f.onbeforeconnect(b) : b;
    N && (f.addEdge(N), f.onconnect?.(b));
  }
  function I(b) {
    const N = kl(b);
    b.currentTarget && (N && b.button === 0 || !N) && Cs.onPointerDown(b, {
      handleId: n(),
      nodeId: l,
      isTarget: c(d),
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
      onConnect: P,
      onConnectStart: (p, k) => {
        f.onconnectstart?.(p, {
          nodeId: k.nodeId,
          handleId: k.handleId,
          handleType: k.handleType
        });
      },
      onConnectEnd: (p, k) => {
        f.onconnectend?.(p, k);
      },
      getTransform: () => [f.viewport.x, f.viewport.y, f.viewport.zoom],
      getFromHandle: () => f.connection.fromHandle,
      dragThreshold: f.connectionDragThreshold,
      handleDomNode: b.currentTarget
    });
  }
  function M(b) {
    if (!l || !f.clickConnectStartHandle && !i())
      return;
    if (!f.clickConnectStartHandle) {
      f.onclickconnectstart?.(b, { nodeId: l, handleId: n(), handleType: r() }), f.clickConnectStartHandle = { nodeId: l, type: r(), id: n() };
      return;
    }
    const N = bl(b.target), p = t.isValidConnection ?? f.isValidConnection, { connectionMode: k, clickConnectStartHandle: S, flowId: D, nodeLookup: R } = f, { connection: O, isValid: F } = Cs.isValid(b, {
      handle: { nodeId: l, id: n(), type: r() },
      connectionMode: k,
      fromNodeId: S.nodeId,
      fromHandleId: S.id ?? null,
      fromType: S.type,
      isValidConnection: p,
      flowId: D,
      doc: N,
      lib: "svelte",
      nodeLookup: R
    });
    F && O && P(O);
    const L = structuredClone(Gs(f.connection));
    delete L.inProgress, L.toPosition = L.toHandle ? L.toHandle.position : null, f.onclickconnectend?.(b, L), f.clickConnectStartHandle = null;
  }
  var H = bv(), Y = () => {
  };
  Zt(H, () => ({
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
    onclick: f.clickConnect ? M : void 0,
    onkeypress: Y,
    style: t.style,
    role: "button",
    "aria-label": c(g)["handle.ariaLabel"],
    tabindex: "-1",
    ...a,
    [It]: {
      valid: c(A),
      connectingto: c(C),
      connectingfrom: c(E),
      source: !c(d),
      target: c(d),
      connectablestart: i(),
      connectableend: s(),
      connectable: c(h),
      connectionindicator: c(h) && (!c(_) || c(x)) && (c(_) || f.clickConnectStartHandle ? s() : i())
    }
  }));
  var T = q(H);
  Le(T, () => t.children ?? Be), V(e, H), re();
}
var xv = /* @__PURE__ */ Q("<!> <!>", 1);
function Rl(e, t) {
  ne(t, !0);
  let n = B(t, "targetPosition", 19, () => $.Top), r = B(t, "sourcePosition", 19, () => $.Bottom);
  var o = xv(), i = ae(o);
  Bt(i, {
    type: "target",
    get position() {
      return n();
    }
  });
  var s = j(i), a = j(s);
  Bt(a, {
    type: "source",
    get position() {
      return r();
    }
  }), ce(() => we(s, ` ${t.data?.label ?? ""} `)), V(e, o), re();
}
var kv = /* @__PURE__ */ Q(" <!>", 1);
function Ev(e, t) {
  ne(t, !0);
  let n = B(t, "data", 19, () => ({ label: "Node" })), r = B(t, "sourcePosition", 19, () => $.Bottom);
  var o = kv(), i = ae(o), s = j(i);
  Bt(s, {
    type: "source",
    get position() {
      return r();
    }
  }), ce(() => we(i, `${n()?.label ?? ""} `)), V(e, o), re();
}
var Sv = /* @__PURE__ */ Q(" <!>", 1);
function Cv(e, t) {
  ne(t, !0);
  let n = B(t, "data", 19, () => ({ label: "Node" })), r = B(t, "targetPosition", 19, () => $.Top);
  var o = Sv(), i = ae(o), s = j(i);
  Bt(s, {
    type: "target",
    get position() {
      return r();
    }
  }), ce(() => we(i, `${n()?.label ?? ""} `)), V(e, o), re();
}
function Nv(e, t) {
}
function Ao(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Pv(e, t) {
  const n = /* @__PURE__ */ w(qt), r = /* @__PURE__ */ w(() => c(n).domNode);
  let o;
  return c(r) ? Ao(e, c(r), t) : o = ha(() => {
    Ue(() => {
      Ao(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      Ao(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Mv() {
  let e = /* @__PURE__ */ oe(typeof window > "u");
  if (c(e)) {
    const t = ha(() => {
      Ue(() => {
        z(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const Ps = (e) => yg(e), Av = (e) => gl(e);
function gt(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Jr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var Tv = /* @__PURE__ */ Q("<div><!></div>");
function Dv(e, t) {
  ne(t, !0);
  let n = B(t, "x", 3, 0), r = B(t, "y", 3, 0), o = B(t, "selectEdgeOnClick", 3, !1), i = B(t, "transparent", 3, !1), s = /* @__PURE__ */ Xt(t, [
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
  const a = qt(), l = wv("EdgeLabel must be used within a Custom Edge component");
  let u = /* @__PURE__ */ w(() => a.visible.edges.get(l)?.zIndex);
  var d = Tv(), h = () => {
    o() && l && a.handleEdgeSelection(l);
  };
  Zt(
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
      [bt]: g
    }),
    [
      () => ({
        display: Mv().value ? "none" : void 0,
        cursor: o() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: gt(t.width),
        height: gt(t.height),
        "z-index": c(u)
      })
    ],
    void 0,
    void 0,
    "svelte-1wg91mu"
  );
  var f = q(d);
  Le(f, () => t.children ?? Be), Ae(d, (g, v) => Pv?.(g, v), () => "edge-labels"), V(e, d), re();
}
var Iv = /* @__PURE__ */ _e("<path></path>"), zv = /* @__PURE__ */ _e('<path fill="none"></path><!><!>', 1);
function mo(e, t) {
  let n = B(t, "interactionWidth", 3, 20), r = /* @__PURE__ */ Xt(t, [
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
  var o = zv(), i = ae(o), s = j(i);
  {
    var a = (d) => {
      var h = Iv();
      Zt(h, () => ({
        d: t.path,
        "stroke-opacity": 0,
        "stroke-width": n(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...r
      })), V(d, h);
    };
    se(s, (d) => {
      n() > 0 && d(a);
    });
  }
  var l = j(s);
  {
    var u = (d) => {
      Dv(d, {
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
          var g = Mr();
          ce(() => we(g, t.label)), V(h, g);
        },
        $$slots: { default: !0 }
      });
    };
    se(l, (d) => {
      t.label && d(u);
    });
  }
  ce(() => {
    ee(i, "id", t.id), ee(i, "d", t.path), De(i, 0, Yt(["svelte-flow__edge-path", t.class])), ee(i, "marker-start", t.markerStart), ee(i, "marker-end", t.markerEnd), He(i, t.style);
  }), V(e, o);
}
function Ll(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ w(() => El({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    curvature: t.pathOptions?.curvature
  })), r = /* @__PURE__ */ w(() => nr(c(n), 3)), o = /* @__PURE__ */ w(() => c(r)[0]), i = /* @__PURE__ */ w(() => c(r)[1]), s = /* @__PURE__ */ w(() => c(r)[2]);
  mo(e, {
    get id() {
      return t.id;
    },
    get path() {
      return c(o);
    },
    get labelX() {
      return c(i);
    },
    get labelY() {
      return c(s);
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
  }), re();
}
function Ov(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ w(() => Si({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition
  })), r = /* @__PURE__ */ w(() => nr(c(n), 3)), o = /* @__PURE__ */ w(() => c(r)[0]), i = /* @__PURE__ */ w(() => c(r)[1]), s = /* @__PURE__ */ w(() => c(r)[2]);
  mo(e, {
    get path() {
      return c(o);
    },
    get labelX() {
      return c(i);
    },
    get labelY() {
      return c(s);
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
  }), re();
}
function Rv(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ w(() => Cl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY
  })), r = /* @__PURE__ */ w(() => nr(c(n), 3)), o = /* @__PURE__ */ w(() => c(r)[0]), i = /* @__PURE__ */ w(() => c(r)[1]), s = /* @__PURE__ */ w(() => c(r)[2]);
  mo(e, {
    get path() {
      return c(o);
    },
    get labelX() {
      return c(i);
    },
    get labelY() {
      return c(s);
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
  }), re();
}
function Lv(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ w(() => Si({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    borderRadius: 0
  })), r = /* @__PURE__ */ w(() => nr(c(n), 3)), o = /* @__PURE__ */ w(() => c(r)[0]), i = /* @__PURE__ */ w(() => c(r)[1]), s = /* @__PURE__ */ w(() => c(r)[2]);
  mo(e, {
    get path() {
      return c(o);
    },
    get labelX() {
      return c(i);
    },
    get labelY() {
      return c(s);
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
  }), re();
}
class Hv {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#e = t, this.#t = ea(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const Vv = /\(.+\)/, Bv = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Fv extends Hv {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Vv.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Bv.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Ho(o, "change", i)
    );
  }
}
function Kv(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return ki(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Ms(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l, zIndexMode: u } = e, d = /* @__PURE__ */ new Map();
  for (const h of t) {
    const f = r.get(h.source), g = r.get(h.target);
    if (!f || !g)
      continue;
    if (a) {
      const { visibleNodes: y, transform: _, width: E, height: C } = e;
      if (Dg({
        sourceNode: f,
        targetNode: g,
        width: E,
        height: C,
        transform: _
      }))
        y.set(f.id, f), y.set(g.id, g);
      else
        continue;
    }
    const v = o.get(h.id);
    if (v && h === v.edge && f == v.sourceNode && g == v.targetNode) {
      d.set(h.id, v);
      continue;
    }
    const m = Vg({
      id: h.id,
      sourceNode: f,
      targetNode: g,
      sourceHandle: h.sourceHandle || null,
      targetHandle: h.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    m && d.set(h.id, {
      ...n,
      ...h,
      ...m,
      zIndex: Tg({
        selected: h.selected,
        zIndex: h.zIndex ?? n.zIndex,
        sourceNode: f,
        targetNode: g,
        elevateOnSelect: l,
        zIndexMode: u
      }),
      sourceNode: f,
      targetNode: g,
      edge: h
    });
  }
  return d;
}
const Hl = {
  input: Ev,
  output: Cv,
  default: Rl,
  group: Nv
}, Vl = {
  straight: Rv,
  smoothstep: Ov,
  default: Ll,
  step: Lv
};
function Yv(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = fr(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Ei(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function Zv(e) {
  class t {
    #e = /* @__PURE__ */ w(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#e);
    }
    set flowId(r) {
      z(this.#e, r);
    }
    #t = /* @__PURE__ */ oe(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      z(this.#t, r);
    }
    #n = /* @__PURE__ */ oe(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      z(this.#n, r);
    }
    #r = /* @__PURE__ */ oe(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      z(this.#r, r);
    }
    #l = /* @__PURE__ */ oe(e.height ?? 0);
    get height() {
      return c(this.#l);
    }
    set height(r) {
      z(this.#l, r);
    }
    #i = /* @__PURE__ */ oe(e.props.zIndexMode ?? "basic");
    get zIndexMode() {
      return c(this.#i);
    }
    set zIndexMode(r) {
      z(this.#i, r);
    }
    #o = /* @__PURE__ */ w(() => {
      const r = Xg(e.nodes, this.nodeLookup, this.parentLookup, {
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
      return c(this.#o);
    }
    set nodesInitialized(r) {
      z(this.#o, r);
    }
    #s = /* @__PURE__ */ w(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#s);
    }
    set viewportInitialized(r) {
      z(this.#s, r);
    }
    #a = /* @__PURE__ */ w(() => (Jg(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#a);
    }
    set _edges(r) {
      z(this.#a, r);
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
    #c = /* @__PURE__ */ w(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#c);
    }
    set selectedNodes(r) {
      z(this.#c, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ w(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#u);
    }
    set selectedEdges(r) {
      z(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #d = /* @__PURE__ */ w(() => {
      const {
        // We need to access this._nodes to trigger on changes
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        nodes: r,
        _edges: o,
        _prevVisibleEdges: i,
        nodeLookup: s,
        connectionMode: a,
        onerror: l,
        onlyRenderVisibleElements: u,
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
      if (u) {
        const { viewport: m, width: y, height: _ } = this, E = [m.x, m.y, m.zoom];
        f = Kv(s, E, y, _), g = Ms({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: E,
          width: y,
          height: _
        });
      } else
        f = this.nodeLookup, g = Ms(v);
      return { nodes: f, edges: g };
    });
    get visible() {
      return c(this.#d);
    }
    set visible(r) {
      z(this.#d, r);
    }
    #f = /* @__PURE__ */ w(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#f);
    }
    set nodesDraggable(r) {
      z(this.#f, r);
    }
    #g = /* @__PURE__ */ w(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#g);
    }
    set nodesConnectable(r) {
      z(this.#g, r);
    }
    #h = /* @__PURE__ */ w(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#h);
    }
    set elementsSelectable(r) {
      z(this.#h, r);
    }
    #w = /* @__PURE__ */ w(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#w);
    }
    set nodesFocusable(r) {
      z(this.#w, r);
    }
    #_ = /* @__PURE__ */ w(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#_);
    }
    set edgesFocusable(r) {
      z(this.#_, r);
    }
    #b = /* @__PURE__ */ w(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#b);
    }
    set disableKeyboardA11y(r) {
      z(this.#b, r);
    }
    #m = /* @__PURE__ */ w(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#m);
    }
    set minZoom(r) {
      z(this.#m, r);
    }
    #v = /* @__PURE__ */ w(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#v);
    }
    set maxZoom(r) {
      z(this.#v, r);
    }
    #p = /* @__PURE__ */ w(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#p);
    }
    set nodeOrigin(r) {
      z(this.#p, r);
    }
    #y = /* @__PURE__ */ w(() => e.props.nodeExtent ?? Jo);
    get nodeExtent() {
      return c(this.#y);
    }
    set nodeExtent(r) {
      z(this.#y, r);
    }
    #x = /* @__PURE__ */ w(() => e.props.translateExtent ?? Jo);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      z(this.#x, r);
    }
    #k = /* @__PURE__ */ w(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#k);
    }
    set defaultEdgeOptions(r) {
      z(this.#k, r);
    }
    #E = /* @__PURE__ */ w(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#E);
    }
    set nodeDragThreshold(r) {
      z(this.#E, r);
    }
    #S = /* @__PURE__ */ w(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#S);
    }
    set autoPanOnNodeDrag(r) {
      z(this.#S, r);
    }
    #C = /* @__PURE__ */ w(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#C);
    }
    set autoPanOnConnect(r) {
      z(this.#C, r);
    }
    #N = /* @__PURE__ */ w(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#N);
    }
    set autoPanOnNodeFocus(r) {
      z(this.#N, r);
    }
    #P = /* @__PURE__ */ w(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#P);
    }
    set autoPanSpeed(r) {
      z(this.#P, r);
    }
    #M = /* @__PURE__ */ w(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#M);
    }
    set connectionDragThreshold(r) {
      z(this.#M, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #A = /* @__PURE__ */ w(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#A);
    }
    set snapGrid(r) {
      z(this.#A, r);
    }
    #T = /* @__PURE__ */ oe(!1);
    get dragging() {
      return c(this.#T);
    }
    set dragging(r) {
      z(this.#T, r);
    }
    #D = /* @__PURE__ */ oe(null);
    get selectionRect() {
      return c(this.#D);
    }
    set selectionRect(r) {
      z(this.#D, r);
    }
    #I = /* @__PURE__ */ oe(!1);
    get selectionKeyPressed() {
      return c(this.#I);
    }
    set selectionKeyPressed(r) {
      z(this.#I, r);
    }
    #z = /* @__PURE__ */ oe(!1);
    get multiselectionKeyPressed() {
      return c(this.#z);
    }
    set multiselectionKeyPressed(r) {
      z(this.#z, r);
    }
    #O = /* @__PURE__ */ oe(!1);
    get deleteKeyPressed() {
      return c(this.#O);
    }
    set deleteKeyPressed(r) {
      z(this.#O, r);
    }
    #R = /* @__PURE__ */ oe(!1);
    get panActivationKeyPressed() {
      return c(this.#R);
    }
    set panActivationKeyPressed(r) {
      z(this.#R, r);
    }
    #L = /* @__PURE__ */ oe(!1);
    get zoomActivationKeyPressed() {
      return c(this.#L);
    }
    set zoomActivationKeyPressed(r) {
      z(this.#L, r);
    }
    #H = /* @__PURE__ */ oe(null);
    get selectionRectMode() {
      return c(this.#H);
    }
    set selectionRectMode(r) {
      z(this.#H, r);
    }
    #V = /* @__PURE__ */ oe("");
    get ariaLiveMessage() {
      return c(this.#V);
    }
    set ariaLiveMessage(r) {
      z(this.#V, r);
    }
    #B = /* @__PURE__ */ w(() => e.props.selectionMode ?? qr.Partial);
    get selectionMode() {
      return c(this.#B);
    }
    set selectionMode(r) {
      z(this.#B, r);
    }
    #F = /* @__PURE__ */ w(() => ({ ...Hl, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#F);
    }
    set nodeTypes(r) {
      z(this.#F, r);
    }
    #K = /* @__PURE__ */ w(() => ({ ...Vl, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#K);
    }
    set edgeTypes(r) {
      z(this.#K, r);
    }
    #Y = /* @__PURE__ */ w(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#Y);
    }
    set noPanClass(r) {
      z(this.#Y, r);
    }
    #Z = /* @__PURE__ */ w(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#Z);
    }
    set noDragClass(r) {
      z(this.#Z, r);
    }
    #X = /* @__PURE__ */ w(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#X);
    }
    set noWheelClass(r) {
      z(this.#X, r);
    }
    #W = /* @__PURE__ */ w(() => Pg(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#W);
    }
    set ariaLabelConfig(r) {
      z(this.#W, r);
    }
    #q = /* @__PURE__ */ oe(Yv(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#q);
    }
    set _viewport(r) {
      z(this.#q, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #G = (
      // _connection is viewport independent and originating from XYHandle
      /* @__PURE__ */ oe(Qo)
    );
    get _connection() {
      return c(this.#G);
    }
    set _connection(r) {
      z(this.#G, r);
    }
    #U = /* @__PURE__ */ w(() => this._connection.inProgress ? {
      ...this._connection,
      to: gr(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#U);
    }
    set connection(r) {
      z(this.#U, r);
    }
    #j = /* @__PURE__ */ w(() => e.props.connectionMode ?? Nn.Strict);
    get connectionMode() {
      return c(this.#j);
    }
    set connectionMode(r) {
      z(this.#j, r);
    }
    #J = /* @__PURE__ */ w(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#J);
    }
    set connectionRadius(r) {
      z(this.#J, r);
    }
    #Q = /* @__PURE__ */ w(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#Q);
    }
    set isValidConnection(r) {
      z(this.#Q, r);
    }
    #$ = /* @__PURE__ */ w(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#$);
    }
    set selectNodesOnDrag(r) {
      z(this.#$, r);
    }
    #ee = /* @__PURE__ */ w(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#ee);
    }
    set defaultMarkerColor(r) {
      z(this.#ee, r);
    }
    #te = /* @__PURE__ */ w(() => Bg(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#te);
    }
    set markers(r) {
      z(this.#te, r);
    }
    #ne = /* @__PURE__ */ w(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#ne);
    }
    set onlyRenderVisibleElements(r) {
      z(this.#ne, r);
    }
    #re = /* @__PURE__ */ w(() => e.props.onflowerror ?? Eg);
    get onerror() {
      return c(this.#re);
    }
    set onerror(r) {
      z(this.#re, r);
    }
    #oe = /* @__PURE__ */ w(() => e.props.ondelete);
    get ondelete() {
      return c(this.#oe);
    }
    set ondelete(r) {
      z(this.#oe, r);
    }
    #ie = /* @__PURE__ */ w(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#ie);
    }
    set onbeforedelete(r) {
      z(this.#ie, r);
    }
    #se = /* @__PURE__ */ w(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#se);
    }
    set onbeforeconnect(r) {
      z(this.#se, r);
    }
    #ae = /* @__PURE__ */ w(() => e.props.onconnect);
    get onconnect() {
      return c(this.#ae);
    }
    set onconnect(r) {
      z(this.#ae, r);
    }
    #le = /* @__PURE__ */ w(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#le);
    }
    set onconnectstart(r) {
      z(this.#le, r);
    }
    #ce = /* @__PURE__ */ w(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#ce);
    }
    set onconnectend(r) {
      z(this.#ce, r);
    }
    #ue = /* @__PURE__ */ w(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      z(this.#ue, r);
    }
    #de = /* @__PURE__ */ w(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#de);
    }
    set onreconnect(r) {
      z(this.#de, r);
    }
    #fe = /* @__PURE__ */ w(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#fe);
    }
    set onreconnectstart(r) {
      z(this.#fe, r);
    }
    #he = /* @__PURE__ */ w(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#he);
    }
    set onreconnectend(r) {
      z(this.#he, r);
    }
    #ge = /* @__PURE__ */ w(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#ge);
    }
    set clickConnect(r) {
      z(this.#ge, r);
    }
    #ve = /* @__PURE__ */ w(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#ve);
    }
    set onclickconnectstart(r) {
      z(this.#ve, r);
    }
    #pe = /* @__PURE__ */ w(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#pe);
    }
    set onclickconnectend(r) {
      z(this.#pe, r);
    }
    #me = /* @__PURE__ */ oe(null);
    get clickConnectStartHandle() {
      return c(this.#me);
    }
    set clickConnectStartHandle(r) {
      z(this.#me, r);
    }
    #ye = /* @__PURE__ */ w(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#ye);
    }
    set onselectiondrag(r) {
      z(this.#ye, r);
    }
    #we = /* @__PURE__ */ w(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#we);
    }
    set onselectiondragstart(r) {
      z(this.#we, r);
    }
    #_e = /* @__PURE__ */ w(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#_e);
    }
    set onselectiondragstop(r) {
      z(this.#_e, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await xg(
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
    _prefersDark = new Fv("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ w(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      z(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Qo, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function qt() {
  const e = oi(Qr);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Qr = /* @__PURE__ */ Symbol();
function Bl(e) {
  const t = Zv(e);
  function n(T) {
    t.nodeTypes = {
      ...Hl,
      ...T
    };
  }
  function r(T) {
    t.edgeTypes = {
      ...Vl,
      ...T
    };
  }
  function o(T) {
    t.edges = Og(T, t.edges);
  }
  const i = (T, b = !1) => {
    t.nodes = t.nodes.map((N) => {
      if (t.connection.inProgress && t.connection.fromNode.id === N.id) {
        const k = t.nodeLookup.get(N.id);
        k && (t.connection = {
          ...t.connection,
          from: cn(k, t.connection.fromHandle, $.Left, !0)
        });
      }
      const p = T.get(N.id);
      return p ? { ...N, position: p.position, dragging: b } : N;
    });
  };
  function s(T) {
    const { changes: b, updatedInternals: N } = Ug(T, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin, t.nodeExtent, t.zIndexMode);
    if (!N)
      return;
    Yg(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent,
      zIndexMode: t.zIndexMode
    }), t.fitViewQueued && t.resolveFitView();
    const p = /* @__PURE__ */ new Map();
    for (const k of b) {
      const S = t.nodeLookup.get(k.id)?.internals.userNode;
      if (!S)
        continue;
      const D = { ...S };
      switch (k.type) {
        case "dimensions": {
          const R = { ...D.measured, ...k.dimensions };
          k.setAttributes && (D.width = k.dimensions?.width ?? D.width, D.height = k.dimensions?.height ?? D.height), D.measured = R;
          break;
        }
        case "position":
          D.position = k.position ?? D.position;
          break;
      }
      p.set(k.id, D);
    }
    t.nodes = t.nodes.map((k) => p.get(k.id) ?? k);
  }
  function a(T) {
    const b = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = T, t.fitViewResolver = b, t.nodes = [...t.nodes], b.promise;
  }
  async function l(T, b, N) {
    const p = typeof N?.zoom < "u" ? N.zoom : t.maxZoom, k = t.panZoom;
    return k ? (await k.setViewport({
      x: t.width / 2 - T * p,
      y: t.height / 2 - b * p,
      zoom: p
    }, { duration: N?.duration, ease: N?.ease, interpolate: N?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(T, b) {
    const N = t.panZoom;
    return N ? N.scaleBy(T, b) : Promise.resolve(!1);
  }
  function d(T) {
    return u(1.2, T);
  }
  function h(T) {
    return u(1 / 1.2, T);
  }
  function f(T) {
    const b = t.panZoom;
    b && (b.setScaleExtent([T, t.maxZoom]), t.minZoom = T);
  }
  function g(T) {
    const b = t.panZoom;
    b && (b.setScaleExtent([t.minZoom, T]), t.maxZoom = T);
  }
  function v(T) {
    const b = t.panZoom;
    b && (b.setTranslateExtent(T), t.translateExtent = T);
  }
  function m(T, b = null) {
    let N = !1;
    const p = T.map((k) => (b ? b.has(k.id) : !0) && k.selected ? (N = !0, { ...k, selected: !1 }) : k);
    return [N, p];
  }
  function y(T) {
    const b = T?.nodes ? new Set(T.nodes.map((R) => R.id)) : null, [N, p] = m(t.nodes, b);
    N && (t.nodes = p);
    const k = T?.edges ? new Set(T.edges.map((R) => R.id)) : null, [S, D] = m(t.edges, k);
    S && (t.edges = D);
  }
  function _(T) {
    const b = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((N) => {
      const p = T.includes(N.id), k = b && N.selected || p;
      return !!N.selected !== k ? { ...N, selected: k } : N;
    }), b || y({ nodes: [] });
  }
  function E(T) {
    const b = t.multiselectionKeyPressed;
    t.edges = t.edges.map((N) => {
      const p = T.includes(N.id), k = b && N.selected || p;
      return !!N.selected !== k ? { ...N, selected: k } : N;
    }), b || y({ edges: [] });
  }
  function C(T, b, N) {
    const p = t.nodeLookup.get(T);
    if (!p) {
      console.warn("012", $n.error012(T));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, p.selected ? (b || p.selected && t.multiselectionKeyPressed) && (y({ nodes: [p], edges: [] }), requestAnimationFrame(() => N?.blur())) : _([T]);
  }
  function x(T) {
    const b = t.edgeLookup.get(T);
    if (!b) {
      console.warn("012", $n.error012(T));
      return;
    }
    (b.selectable || t.elementsSelectable && typeof b.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, b.selected ? b.selected && t.multiselectionKeyPressed && y({ nodes: [], edges: [b] }) : E([T]));
  }
  function A(T, b) {
    const { nodeExtent: N, snapGrid: p, nodeOrigin: k, nodeLookup: S, nodesDraggable: D, onerror: R } = t, O = /* @__PURE__ */ new Map(), F = p?.[0] ?? 5, L = p?.[1] ?? 5, Z = T.x * F * b, G = T.y * L * b;
    for (const K of S.values()) {
      if (!(K.selected && (K.draggable || D && typeof K.draggable > "u")))
        continue;
      let X = {
        x: K.internals.positionAbsolute.x + Z,
        y: K.internals.positionAbsolute.y + G
      };
      p && (X = hr(X, p));
      const { position: W, positionAbsolute: U } = vl({
        nodeId: K.id,
        nextPosition: X,
        nodeLookup: S,
        nodeExtent: N,
        nodeOrigin: k,
        onError: R
      });
      K.position = W, K.internals.positionAbsolute = U, O.set(K.id, K);
    }
    i(O);
  }
  function P(T) {
    return jg({
      delta: T,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const I = (T) => {
    t._connection = { ...T };
  };
  function M() {
    t._connection = Qo;
  }
  function H() {
    t.resetStoreValues(), y();
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
    unselectNodesAndEdges: y,
    addSelectedNodes: _,
    addSelectedEdges: E,
    handleNodeSelection: C,
    handleEdgeSelection: x,
    moveSelectedNodes: A,
    panBy: P,
    updateConnection: I,
    cancelConnection: M,
    reset: H
  });
}
function Xv(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: h } = t, f = gv({
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
  return (o.x !== g.x || o.y !== g.y || o.zoom !== g.zoom) && h([g.x, g.y, g.zoom]), u(f), f.update(t), {
    update(v) {
      f.update(v);
    }
  };
}
var Wv = /* @__PURE__ */ Q('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function qv(e, t) {
  ne(t, !0);
  let n = B(t, "store", 15), r = /* @__PURE__ */ w(() => n().panActivationKeyPressed || t.panOnDrag), o = /* @__PURE__ */ w(() => n().panActivationKeyPressed || t.panOnScroll);
  const { viewport: i } = n();
  let s = !1;
  Ue(() => {
    !s && n().viewportInitialized && (t.oninit?.(), s = !0);
  });
  var a = Wv(), l = q(a);
  Le(l, () => t.children), Ae(a, (u, d) => Xv?.(u, d), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: i,
    onDraggingChange: (u) => {
      n(n().dragging = u, !0);
    },
    setPanZoomInstance: (u) => {
      n(n().panZoom = u, !0);
    },
    onPanZoomStart: t.onmovestart,
    onPanZoom: t.onmove,
    onPanZoomEnd: t.onmoveend,
    zoomOnScroll: t.zoomOnScroll,
    zoomOnDoubleClick: t.zoomOnDoubleClick,
    zoomOnPinch: t.zoomOnPinch,
    panOnScroll: c(o),
    panOnDrag: c(r),
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
    onTransformChange: (u) => {
      n(n().viewport = { x: u[0], y: u[1], zoom: u[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), V(e, a), re();
}
function As(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Ts(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Ds(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Gv = /* @__PURE__ */ Q("<div><!></div>");
function Uv(e, t) {
  ne(t, !0);
  let n = B(t, "store", 15), r = B(t, "panOnDrag", 3, !0), o = B(t, "paneClickDistance", 3, 1), i, s = null, a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ w(() => n().panActivationKeyPressed || r()), d = /* @__PURE__ */ w(() => n().selectionKeyPressed || !!n().selectionRect || t.selectionOnDrag && c(u) !== !0), h = /* @__PURE__ */ w(() => n().elementsSelectable && (c(d) || n().selectionRectMode === "user")), f = !1;
  function g(M) {
    if (s = i?.getBoundingClientRect(), !s) return;
    const H = M.target === i, Y = !H && !!M.target.closest(".nokey"), T = t.selectionOnDrag && H || n().selectionKeyPressed;
    if (Y || !c(d) || !T || M.button !== 0 || !M.isPrimary)
      return;
    M.target?.setPointerCapture?.(M.pointerId), f = !1;
    const { x: b, y: N } = tt(M, s);
    n(n().selectionRect = { width: 0, height: 0, startX: b, startY: N, x: b, y: N }, !0), H || (M.stopPropagation(), M.preventDefault());
  }
  function v(M) {
    if (!c(d) || !s || !n().selectionRect)
      return;
    const H = tt(M, s), { startX: Y = 0, startY: T = 0 } = n().selectionRect;
    if (!f) {
      const S = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(H.x - Y, H.y - T) <= S)
        return;
      n().unselectNodesAndEdges(), t.onselectionstart?.(M);
    }
    f = !0;
    const b = {
      ...n().selectionRect,
      x: H.x < Y ? H.x : Y,
      y: H.y < T ? H.y : T,
      width: Math.abs(H.x - Y),
      height: Math.abs(H.y - T)
    }, N = a, p = l;
    a = new Set(ki(
      n().nodeLookup,
      b,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === qr.Partial,
      !0
    ).map((S) => S.id));
    const k = n().defaultEdgeOptions.selectable ?? !0;
    l = /* @__PURE__ */ new Set();
    for (const S of a) {
      const D = n().connectionLookup.get(S);
      if (D)
        for (const { edgeId: R } of D.values()) {
          const O = n().edgeLookup.get(R);
          O && (O.selectable ?? k) && l.add(R);
        }
    }
    Ds(N, a) || n(n().nodes = n().nodes.map(Ts(a)), !0), Ds(p, l) || n(n().edges = n().edges.map(Ts(l)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = b, !0);
  }
  function m(M) {
    M.button === 0 && (M.target?.releasePointerCapture?.(M.pointerId), !f && M.target === i && E?.(M), n(n().selectionRect = null, !0), f && n(n().selectionRectMode = a.size > 0 ? "nodes" : null, !0), f && t.onselectionend?.(M));
  }
  const y = (M) => {
    if (Array.isArray(c(u)) && c(u).includes(2)) {
      M.preventDefault();
      return;
    }
    t.onpanecontextmenu?.({ event: M });
  }, _ = (M) => {
    f && (M.stopPropagation(), f = !1);
  };
  function E(M) {
    if (f || n().connection.inProgress) {
      f = !1;
      return;
    }
    t.onpaneclick?.({ event: M }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var C = Gv();
  let x;
  var A = /* @__PURE__ */ w(() => c(h) ? void 0 : As(E, i));
  C.__click = function(...M) {
    c(A)?.apply(this, M);
  }, C.__pointermove = function(...M) {
    (c(h) ? v : void 0)?.apply(this, M);
  }, C.__pointerup = function(...M) {
    (c(h) ? m : void 0)?.apply(this, M);
  };
  var P = /* @__PURE__ */ w(() => As(y, i));
  C.__contextmenu = function(...M) {
    c(P)?.apply(this, M);
  };
  var I = q(C);
  Le(I, () => t.children), zn(C, (M) => i = M, () => i), ce((M) => x = De(C, 1, "svelte-flow__pane svelte-flow__container", null, x, M), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(d)
    })
  ]), rn(
    "pointerdown",
    C,
    function(...M) {
      (c(h) ? g : void 0)?.apply(this, M);
    },
    !0
  ), rn(
    "click",
    C,
    function(...M) {
      (c(h) ? _ : void 0)?.apply(this, M);
    },
    !0
  ), V(e, C), re();
}
fn(["click", "pointermove", "pointerup", "contextmenu"]);
var jv = /* @__PURE__ */ Q('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Jv(e, t) {
  ne(t, !0);
  var n = jv();
  let r;
  var o = q(n);
  Le(o, () => t.children), ce(() => r = He(n, "", r, {
    transform: `translate(${t.store.viewport.x ?? ""}px, ${t.store.viewport.y ?? ""}px) scale(${t.store.viewport.zoom ?? ""})`
  })), V(e, n), re();
}
function Fl(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = ev({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const { snapGrid: u, viewport: d } = n;
      return {
        nodes: n.nodes,
        nodeLookup: n.nodeLookup,
        edges: n.edges,
        nodeExtent: n.nodeExtent,
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
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
  function l(u, d) {
    if (d.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: u,
      noDragClassName: d.noDragClass,
      handleSelector: d.handleSelector,
      nodeId: d.nodeId,
      isSelectable: d.isSelectable,
      nodeClickDistance: d.nodeClickDistance
    });
  }
  return l(e, t), {
    update(u) {
      l(e, u);
    },
    destroy() {
      a.destroy();
    }
  };
}
var Qv = /* @__PURE__ */ Q('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>'), $v = /* @__PURE__ */ Q('<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>', 1);
function e0(e, t) {
  ne(t, !0);
  var n = $v(), r = ae(n), o = q(r), i = j(r, 2), s = q(i), a = j(i, 2);
  {
    var l = (u) => {
      var d = Qv(), h = q(d);
      ce(() => {
        ee(d, "id", `${t0}-${t.store.flowId}`), we(h, t.store.ariaLiveMessage);
      }), V(u, d);
    };
    se(a, (u) => {
      t.store.disableKeyboardA11y || u(l);
    });
  }
  ce(() => {
    ee(r, "id", `${Kl}-${t.store.flowId}`), we(o, t.store.disableKeyboardA11y ? t.store.ariaLabelConfig["node.a11yDescription.default"] : t.store.ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), ee(i, "id", `${Yl}-${t.store.flowId}`), we(s, t.store.ariaLabelConfig["edge.a11yDescription.default"]);
  }), V(e, n), re();
}
const Kl = "svelte-flow__node-desc", Yl = "svelte-flow__edge-desc", t0 = "svelte-flow__aria-live";
var n0 = /* @__PURE__ */ Q("<div><!></div>");
function r0(e, t) {
  ne(t, !0);
  let n = B(t, "store", 15), r = /* @__PURE__ */ w(() => Me(t.node.data, () => ({}), !0)), o = /* @__PURE__ */ w(() => Me(t.node.selected, !1)), i = /* @__PURE__ */ w(() => t.node.draggable), s = /* @__PURE__ */ w(() => t.node.selectable), a = /* @__PURE__ */ w(() => Me(t.node.deletable, !0)), l = /* @__PURE__ */ w(() => t.node.connectable), u = /* @__PURE__ */ w(() => t.node.focusable), d = /* @__PURE__ */ w(() => Me(t.node.hidden, !1)), h = /* @__PURE__ */ w(() => Me(t.node.dragging, !1)), f = /* @__PURE__ */ w(() => Me(t.node.style, "")), g = /* @__PURE__ */ w(() => t.node.class), v = /* @__PURE__ */ w(() => Me(t.node.type, "default")), m = /* @__PURE__ */ w(() => t.node.parentId), y = /* @__PURE__ */ w(() => t.node.sourcePosition), _ = /* @__PURE__ */ w(() => t.node.targetPosition), E = /* @__PURE__ */ w(() => Me(t.node.measured, () => ({ width: 0, height: 0 }), !0).width), C = /* @__PURE__ */ w(() => Me(t.node.measured, () => ({ width: 0, height: 0 }), !0).height), x = /* @__PURE__ */ w(() => t.node.initialWidth), A = /* @__PURE__ */ w(() => t.node.initialHeight), P = /* @__PURE__ */ w(() => t.node.width), I = /* @__PURE__ */ w(() => t.node.height), M = /* @__PURE__ */ w(() => t.node.dragHandle), H = /* @__PURE__ */ w(() => Me(t.node.internals.z, 0)), Y = /* @__PURE__ */ w(() => t.node.internals.positionAbsolute.x), T = /* @__PURE__ */ w(() => t.node.internals.positionAbsolute.y), b = /* @__PURE__ */ w(() => t.node.internals.userNode), { id: N } = t.node, p = /* @__PURE__ */ w(() => c(i) ?? n().nodesDraggable), k = /* @__PURE__ */ w(() => c(s) ?? n().elementsSelectable), S = /* @__PURE__ */ w(() => c(l) ?? n().nodesConnectable), D = /* @__PURE__ */ w(() => wl(t.node)), R = /* @__PURE__ */ w(() => !!t.node.internals.handleBounds), O = /* @__PURE__ */ w(() => c(D) && c(R)), F = /* @__PURE__ */ w(() => c(u) ?? n().nodesFocusable);
  function L(he) {
    return n().parentLookup.has(he);
  }
  let Z = /* @__PURE__ */ w(() => L(N)), G = /* @__PURE__ */ oe(null), K = null, J = c(v), X = c(y), W = c(_), U = /* @__PURE__ */ w(() => n().nodeTypes[c(v)] ?? Rl), le = /* @__PURE__ */ w(() => n().ariaLabelConfig), me = {
    get value() {
      return c(S);
    }
  };
  pv(N), yv(me);
  let te = /* @__PURE__ */ w(() => {
    const he = c(E) === void 0 ? c(P) ?? c(x) : c(P), be = c(C) === void 0 ? c(I) ?? c(A) : c(I);
    if (!(he === void 0 && be === void 0 && c(f) === void 0))
      return `${c(f)};${he ? `width:${gt(he)};` : ""}${be ? `height:${gt(be)};` : ""}`;
  });
  Ue(() => {
    (c(v) !== J || c(y) !== X || c(_) !== W) && c(G) !== null && requestAnimationFrame(() => {
      c(G) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[N, { id: N, nodeElement: c(G), force: !0 }]]));
    }), J = c(v), X = c(y), W = c(_);
  }), Ue(() => {
    t.resizeObserver && (!c(O) || c(G) !== K) && (K && t.resizeObserver.unobserve(K), c(G) && t.resizeObserver.observe(c(G)), K = c(G));
  }), ao(() => {
    K && t.resizeObserver?.unobserve(K);
  });
  function ge(he) {
    c(k) && (!n().selectNodesOnDrag || !c(p) || n().nodeDragThreshold > 0) && n().handleNodeSelection(N), t.onnodeclick?.({ node: c(b), event: he });
  }
  function ie(he) {
    if (!(xl(he) || n().disableKeyboardA11y))
      if (hl.includes(he.key) && c(k)) {
        const be = he.key === "Escape";
        n().handleNodeSelection(N, be, c(G));
      } else c(p) && t.node.selected && Object.prototype.hasOwnProperty.call(Jr, he.key) && (he.preventDefault(), n(
        n().ariaLiveMessage = c(le)["node.a11yDescription.ariaLiveMessage"]({
          direction: he.key.replace("Arrow", "").toLowerCase(),
          x: ~~t.node.internals.positionAbsolute.x,
          y: ~~t.node.internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Jr[he.key], he.shiftKey ? 4 : 1));
  }
  const Ce = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(G)?.matches(":focus-visible"))
      return;
    const { width: he, height: be, viewport: Je } = n();
    ki(/* @__PURE__ */ new Map([[N, t.node]]), { x: 0, y: 0, width: he, height: be }, [Je.x, Je.y, Je.zoom], !0).length > 0 || n().setCenter(t.node.position.x + (t.node.measured.width ?? 0) / 2, t.node.position.y + (t.node.measured.height ?? 0) / 2, { zoom: Je.zoom });
  };
  var ot = ye(), it = ae(ot);
  {
    var mt = (he) => {
      var be = n0();
      Zt(be, () => ({
        "data-id": N,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(v)}`,
          c(g)
        ],
        style: c(te),
        onclick: ge,
        onpointerenter: t.onnodepointerenter ? (pe) => t.onnodepointerenter({ node: c(b), event: pe }) : void 0,
        onpointerleave: t.onnodepointerleave ? (pe) => t.onnodepointerleave({ node: c(b), event: pe }) : void 0,
        onpointermove: t.onnodepointermove ? (pe) => t.onnodepointermove({ node: c(b), event: pe }) : void 0,
        oncontextmenu: t.onnodecontextmenu ? (pe) => t.onnodecontextmenu({ node: c(b), event: pe }) : void 0,
        onkeydown: c(F) ? ie : void 0,
        onfocus: c(F) ? Ce : void 0,
        tabIndex: c(F) ? 0 : void 0,
        role: t.node.ariaRole ?? (c(F) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Kl}-${n().flowId}`,
        ...t.node.domAttributes,
        [It]: {
          dragging: c(h),
          selected: c(o),
          draggable: c(p),
          connectable: c(S),
          selectable: c(k),
          nopan: c(p),
          parent: c(Z)
        },
        [bt]: {
          "z-index": c(H),
          transform: `translate(${c(Y) ?? ""}px, ${c(T) ?? ""}px)`,
          visibility: c(D) ? "visible" : "hidden"
        }
      }));
      var Je = q(be);
      so(Je, () => c(U), (pe, hn) => {
        hn(pe, {
          get data() {
            return c(r);
          },
          get id() {
            return N;
          },
          get selected() {
            return c(o);
          },
          get selectable() {
            return c(k);
          },
          get deletable() {
            return c(a);
          },
          get sourcePosition() {
            return c(y);
          },
          get targetPosition() {
            return c(_);
          },
          get zIndex() {
            return c(H);
          },
          get dragging() {
            return c(h);
          },
          get draggable() {
            return c(p);
          },
          get dragHandle() {
            return c(M);
          },
          get parentId() {
            return c(m);
          },
          get type() {
            return c(v);
          },
          get isConnectable() {
            return c(S);
          },
          get positionAbsoluteX() {
            return c(Y);
          },
          get positionAbsoluteY() {
            return c(T);
          },
          get width() {
            return c(P);
          },
          get height() {
            return c(I);
          }
        });
      }), Ae(be, (pe, hn) => Fl?.(pe, hn), () => ({
        nodeId: N,
        isSelectable: c(k),
        disabled: !c(p),
        handleSelector: c(M),
        noDragClass: n().noDragClass,
        nodeClickDistance: t.nodeClickDistance,
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (pe, hn, On, Rn) => {
          t.onnodedrag?.({ event: pe, targetNode: On, nodes: Rn });
        },
        onDragStart: (pe, hn, On, Rn) => {
          t.onnodedragstart?.({ event: pe, targetNode: On, nodes: Rn });
        },
        onDragStop: (pe, hn, On, Rn) => {
          t.onnodedragstop?.({ event: pe, targetNode: On, nodes: Rn });
        },
        store: n()
      })), zn(be, (pe) => z(G, pe), () => c(G)), V(he, be);
    };
    se(it, (he) => {
      c(d) || he(mt);
    });
  }
  V(e, ot), re();
}
var o0 = /* @__PURE__ */ Q('<div class="svelte-flow__nodes"></div>');
function i0(e, t) {
  ne(t, !0);
  let n = B(t, "store", 15);
  const r = typeof ResizeObserver > "u" ? null : new ResizeObserver((i) => {
    const s = /* @__PURE__ */ new Map();
    i.forEach((a) => {
      const l = a.target.getAttribute("data-id");
      s.set(l, { id: l, nodeElement: a.target, force: !0 });
    }), n().updateNodeInternals(s);
  });
  ao(() => {
    r?.disconnect();
  });
  var o = o0();
  Vt(o, 21, () => n().visible.nodes.values(), (i) => i.id, (i, s) => {
    r0(i, {
      get node() {
        return c(s);
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
  }), V(e, o), re();
}
var s0 = /* @__PURE__ */ _e('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function a0(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ w(() => t.edge.id), r = /* @__PURE__ */ w(() => t.edge.source), o = /* @__PURE__ */ w(() => t.edge.target), i = /* @__PURE__ */ w(() => t.edge.sourceX), s = /* @__PURE__ */ w(() => t.edge.sourceY), a = /* @__PURE__ */ w(() => t.edge.targetX), l = /* @__PURE__ */ w(() => t.edge.targetY), u = /* @__PURE__ */ w(() => t.edge.sourcePosition), d = /* @__PURE__ */ w(() => t.edge.targetPosition), h = /* @__PURE__ */ w(() => Me(t.edge.animated, !1)), f = /* @__PURE__ */ w(() => Me(t.edge.selected, !1)), g = /* @__PURE__ */ w(() => t.edge.label), v = /* @__PURE__ */ w(() => t.edge.labelStyle), m = /* @__PURE__ */ w(() => Me(t.edge.data, () => ({}), !0)), y = /* @__PURE__ */ w(() => t.edge.style), _ = /* @__PURE__ */ w(() => t.edge.interactionWidth), E = /* @__PURE__ */ w(() => Me(t.edge.type, "default")), C = /* @__PURE__ */ w(() => t.edge.sourceHandle), x = /* @__PURE__ */ w(() => t.edge.targetHandle), A = /* @__PURE__ */ w(() => t.edge.markerStart), P = /* @__PURE__ */ w(() => t.edge.markerEnd), I = /* @__PURE__ */ w(() => t.edge.selectable), M = /* @__PURE__ */ w(() => t.edge.focusable), H = /* @__PURE__ */ w(() => Me(t.edge.deletable, !0)), Y = /* @__PURE__ */ w(() => t.edge.hidden), T = /* @__PURE__ */ w(() => t.edge.zIndex), b = /* @__PURE__ */ w(() => t.edge.class), N = /* @__PURE__ */ w(() => t.edge.ariaLabel);
  _v(c(n));
  let p = null, k = /* @__PURE__ */ w(() => c(I) ?? t.store.elementsSelectable), S = /* @__PURE__ */ w(() => c(M) ?? t.store.edgesFocusable), D = /* @__PURE__ */ w(() => t.store.edgeTypes[c(E)] ?? Ll), R = /* @__PURE__ */ w(() => c(A) ? `url('#${ei(c(A), t.store.flowId)}')` : void 0), O = /* @__PURE__ */ w(() => c(P) ? `url('#${ei(c(P), t.store.flowId)}')` : void 0);
  function F(X) {
    const W = t.store.edgeLookup.get(c(n));
    W && (c(k) && t.store.handleEdgeSelection(c(n)), t.onedgeclick?.({ event: X, edge: W }));
  }
  function L(X, W) {
    const U = t.store.edgeLookup.get(c(n));
    U && W({ event: X, edge: U });
  }
  function Z(X) {
    if (!t.store.disableKeyboardA11y && hl.includes(X.key) && c(k)) {
      const { unselectNodesAndEdges: W, addSelectedEdges: U } = t.store;
      X.key === "Escape" ? (p?.blur(), W({ edges: [t.edge] })) : U([c(n)]);
    }
  }
  var G = ye(), K = ae(G);
  {
    var J = (X) => {
      var W = s0();
      let U;
      var le = q(W);
      Zt(le, () => ({
        class: ["svelte-flow__edge", c(b)],
        "data-id": c(n),
        onclick: F,
        oncontextmenu: t.onedgecontextmenu ? (te) => {
          L(te, t.onedgecontextmenu);
        } : void 0,
        onpointerenter: t.onedgepointerenter ? (te) => {
          L(te, t.onedgepointerenter);
        } : void 0,
        onpointerleave: t.onedgepointerleave ? (te) => {
          L(te, t.onedgepointerleave);
        } : void 0,
        "aria-label": c(N) === null ? void 0 : c(N) ? c(N) : `Edge from ${c(r)} to ${c(o)}`,
        "aria-describedby": c(S) ? `${Yl}-${t.store.flowId}` : void 0,
        role: t.edge.ariaRole ?? (c(S) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(S) ? Z : void 0,
        tabindex: c(S) ? 0 : void 0,
        ...t.edge.domAttributes,
        [It]: {
          animated: c(h),
          selected: c(f),
          selectable: c(k)
        }
      }));
      var me = q(le);
      so(me, () => c(D), (te, ge) => {
        ge(te, {
          get id() {
            return c(n);
          },
          get source() {
            return c(r);
          },
          get target() {
            return c(o);
          },
          get sourceX() {
            return c(i);
          },
          get sourceY() {
            return c(s);
          },
          get targetX() {
            return c(a);
          },
          get targetY() {
            return c(l);
          },
          get sourcePosition() {
            return c(u);
          },
          get targetPosition() {
            return c(d);
          },
          get animated() {
            return c(h);
          },
          get selected() {
            return c(f);
          },
          get label() {
            return c(g);
          },
          get labelStyle() {
            return c(v);
          },
          get data() {
            return c(m);
          },
          get style() {
            return c(y);
          },
          get interactionWidth() {
            return c(_);
          },
          get selectable() {
            return c(k);
          },
          get deletable() {
            return c(H);
          },
          get type() {
            return c(E);
          },
          get sourceHandleId() {
            return c(C);
          },
          get targetHandleId() {
            return c(x);
          },
          get markerStart() {
            return c(R);
          },
          get markerEnd() {
            return c(O);
          }
        });
      }), zn(le, (te) => p = te, () => p), ce(() => U = He(W, "", U, { "z-index": c(T) })), V(X, W);
    };
    se(K, (X) => {
      c(Y) || X(J);
    });
  }
  V(e, G), re();
}
kc();
var l0 = /* @__PURE__ */ _e("<defs></defs>");
function c0(e, t) {
  ne(t, !1);
  const n = qt();
  Nu();
  var r = l0();
  Vt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    h0(o, xt(() => c(i)));
  }), V(e, r), re();
}
var u0 = /* @__PURE__ */ _e('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), d0 = /* @__PURE__ */ _e('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), f0 = /* @__PURE__ */ _e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function h0(e, t) {
  ne(t, !0);
  let n = B(t, "width", 3, 12.5), r = B(t, "height", 3, 12.5), o = B(t, "markerUnits", 3, "strokeWidth"), i = B(t, "orient", 3, "auto-start-reverse"), s = B(t, "color", 3, "none");
  var a = f0(), l = q(a);
  {
    var u = (h) => {
      var f = u0();
      let g;
      ce(() => {
        ee(f, "stroke-width", t.strokeWidth), g = He(f, "", g, { stroke: s() });
      }), V(h, f);
    }, d = (h) => {
      var f = ye(), g = ae(f);
      {
        var v = (m) => {
          var y = d0();
          let _;
          ce(() => {
            ee(y, "stroke-width", t.strokeWidth), _ = He(y, "", _, { stroke: s(), fill: s() });
          }), V(m, y);
        };
        se(
          g,
          (m) => {
            t.type === Gr.ArrowClosed && m(v);
          },
          !0
        );
      }
      V(h, f);
    };
    se(l, (h) => {
      t.type === Gr.Arrow ? h(u) : h(d, !1);
    });
  }
  ce(() => {
    ee(a, "id", t.id), ee(a, "markerWidth", `${n()}`), ee(a, "markerHeight", `${r()}`), ee(a, "markerUnits", o()), ee(a, "orient", i());
  }), V(e, a), re();
}
var g0 = /* @__PURE__ */ Q('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function v0(e, t) {
  ne(t, !0);
  let n = B(t, "store", 15);
  var r = g0(), o = q(r), i = q(o);
  c0(i, {});
  var s = j(o, 2);
  Vt(s, 17, () => n().visible.edges.values(), (a) => a.id, (a, l) => {
    a0(a, {
      get edge() {
        return c(l);
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
      set store(u) {
        n(u);
      }
    });
  }), V(e, r), re();
}
var p0 = /* @__PURE__ */ Q('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function Zl(e, t) {
  ne(t, !0);
  let n = B(t, "x", 3, 0), r = B(t, "y", 3, 0), o = B(t, "width", 3, 0), i = B(t, "height", 3, 0), s = B(t, "isVisible", 3, !0);
  var a = ye(), l = ae(a);
  {
    var u = (d) => {
      var h = p0();
      let f;
      ce((g) => f = He(h, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : gt(o()),
          height: typeof i() == "string" ? i() : gt(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), V(d, h);
    };
    se(l, (d) => {
      s() && d(u);
    });
  }
  V(e, a), re();
}
var m0 = /* @__PURE__ */ Q("<div><!></div>");
function y0(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ oe(void 0);
  Ue(() => {
    t.store.disableKeyboardA11y || c(n)?.focus({ preventScroll: !0 });
  });
  let r = /* @__PURE__ */ w(() => {
    if (t.store.selectionRectMode === "nodes") {
      t.store.nodes;
      const d = fr(t.store.nodeLookup, { filter: (h) => !!h.selected });
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
    Object.prototype.hasOwnProperty.call(Jr, d.key) && (d.preventDefault(), t.store.moveSelectedNodes(Jr[d.key], d.shiftKey ? 4 : 1));
  }
  var a = ye(), l = ae(a);
  {
    var u = (d) => {
      var h = m0();
      h.__contextmenu = o, h.__click = i, h.__keydown = function(...v) {
        (t.store.disableKeyboardA11y ? void 0 : s)?.apply(this, v);
      };
      let f;
      var g = q(h);
      Zl(g, { width: "100%", height: "100%", x: 0, y: 0 }), Ae(h, (v, m) => Fl?.(v, m), () => ({
        disabled: !1,
        store: t.store,
        onDrag: (v, m, y, _) => {
          t.onnodedrag?.({ event: v, targetNode: null, nodes: _ });
        },
        onDragStart: (v, m, y, _) => {
          t.onnodedragstart?.({ event: v, targetNode: null, nodes: _ });
        },
        onDragStop: (v, m, y, _) => {
          t.onnodedragstop?.({ event: v, targetNode: null, nodes: _ });
        }
      })), zn(h, (v) => z(n, v), () => c(n)), ce(
        (v) => {
          De(h, 1, Yt(["svelte-flow__selection-wrapper", t.store.noPanClass]), "svelte-sf2y5e"), ee(h, "role", t.store.disableKeyboardA11y ? void 0 : "button"), ee(h, "tabindex", t.store.disableKeyboardA11y ? void 0 : -1), f = He(h, "", f, v);
        },
        [
          () => ({
            width: gt(c(r).width),
            height: gt(c(r).height),
            transform: `translate(${c(r).x ?? ""}px, ${c(r).y ?? ""}px)`
          })
        ]
      ), V(d, h);
    };
    se(l, (d) => {
      t.store.selectionRectMode === "nodes" && c(r) && St(c(r).x) && St(c(r).y) && d(u);
    });
  }
  V(e, a), re();
}
fn(["contextmenu", "click", "keydown"]);
function w0(e) {
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
function st(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, h, f) => h ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const h = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: g, callback: v, preventDefault: m, enabled: y } = h;
      if (y) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const E = Array.isArray(f) ? f : [f];
          let C = !1;
          for (const x of E)
            if ((Array.isArray(x) ? x : [x]).reduce(
              (P, I) => P | w0(I),
              0
            ) === u) {
              C = !0;
              break;
            }
          if (!C) continue;
        }
        m && a.preventDefault();
        const _ = {
          node: e,
          trigger: h,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: _ })), v?.(_);
      }
    }
  }
  let s;
  return n && (s = Ho(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = Ho(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function Ti() {
  const e = /* @__PURE__ */ w(qt), t = (i) => {
    const s = Ps(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? Ng(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Mn(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = Ee(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Ps(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = Ee(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && Av(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  const o = (i) => c(e).nodeLookup.get(i);
  return {
    zoomIn: c(e).zoomIn,
    zoomOut: c(e).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? c(e).nodes : Is(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : Is(c(e).edgeLookup, i),
    setZoom: (i, s) => {
      const a = c(e).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => c(e).viewport.zoom,
    setViewport: async (i, s) => {
      const a = c(e).viewport;
      return c(e).panZoom ? (await c(e).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => Gs(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = Ei(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
      return await c(e).panZoom.setViewport(a, {
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
      const l = ps(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const h = c(e).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = Mn(h), g = er(f, u);
        return s && g > 0 || g >= f.width * f.height || g >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const u = ps(i) ? i : t(i);
      if (!u)
        return !1;
      const d = er(u, s);
      return a && d > 0 || d >= s.width * s.height || d >= u.width * u.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await kg({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = Ee(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = Ee(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: h, y: f } = c(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - f };
      return gr(g, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), h = jr(i, [s, a, l]);
      return { x: h.x + u, y: h.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...c(e).nodes],
      edges: [...c(e).edges],
      viewport: { ...c(e).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const l = c(e).nodeLookup.get(i)?.internals.userNode;
      if (!l)
        return;
      const u = typeof s == "function" ? s(l) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? u : { ...d.data, ...u }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => wg(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Is(e, t) {
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
function _0(e, t) {
  ne(t, !0);
  let n = B(t, "store", 15), r = B(t, "selectionKey", 3, "Shift"), o = B(t, "multiSelectionKey", 19, () => tr() ? "Meta" : "Control"), i = B(t, "deleteKey", 3, "Backspace"), s = B(t, "panActivationKey", 3, " "), a = B(t, "zoomActivationKey", 19, () => tr() ? "Meta" : "Control"), { deleteElements: l } = Ti();
  function u(m) {
    return m !== null && typeof m == "object";
  }
  function d(m) {
    return u(m) ? m.modifier || [] : [];
  }
  function h(m) {
    return m == null ? "" : u(m) ? m.key : m;
  }
  function f(m, y) {
    return (Array.isArray(m) ? m : [m]).map((E) => {
      const C = h(E);
      return {
        key: C,
        modifier: d(E),
        enabled: C !== null,
        callback: y
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function v() {
    const m = n().nodes.filter((_) => _.selected), y = n().edges.filter((_) => _.selected);
    l({ nodes: m, edges: y });
  }
  rn("blur", Ie, g), rn("contextmenu", Ie, g), Ae(Ie, (m, y) => st?.(m, y), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Ae(Ie, (m, y) => st?.(m, y), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ae(Ie, (m, y) => st?.(m, y), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Ae(Ie, (m, y) => st?.(m, y), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ae(Ie, (m, y) => st?.(m, y), () => ({
    trigger: f(i(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !xl(m.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), Ae(Ie, (m, y) => st?.(m, y), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Ae(Ie, (m, y) => st?.(m, y), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ae(Ie, (m, y) => st?.(m, y), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Ae(Ie, (m, y) => st?.(m, y), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ae(Ie, (m, y) => st?.(m, y), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), re();
}
var b0 = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__connection-path"></path>'), x0 = /* @__PURE__ */ _e('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function k0(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ w(() => {
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
      case zt.Bezier: {
        const [a] = El(s);
        return a;
      }
      case zt.Straight: {
        const [a] = Cl(s);
        return a;
      }
      case zt.Step:
      case zt.SmoothStep: {
        const [a] = Si({
          ...s,
          borderRadius: t.type === zt.Step ? 0 : void 0
        });
        return a;
      }
    }
  });
  var r = ye(), o = ae(r);
  {
    var i = (s) => {
      var a = x0(), l = q(a), u = q(l);
      {
        var d = (f) => {
          var g = ye(), v = ae(g);
          so(v, () => t.LineComponent, (m, y) => {
            y(m, {});
          }), V(f, g);
        }, h = (f) => {
          var g = b0();
          ce(() => {
            ee(g, "d", c(n)), He(g, t.style);
          }), V(f, g);
        };
        se(u, (f) => {
          t.LineComponent ? f(d) : f(h, !1);
        });
      }
      ce(
        (f) => {
          ee(a, "width", t.store.width), ee(a, "height", t.store.height), He(a, t.containerStyle), De(l, 0, f);
        },
        [
          () => Yt([
            "svelte-flow__connection",
            mg(t.store.connection.isValid)
          ])
        ]
      ), V(s, a);
    };
    se(o, (s) => {
      t.store.connection.inProgress && s(i);
    });
  }
  V(e, r), re();
}
var E0 = /* @__PURE__ */ Q("<div><!></div>");
function Di(e, t) {
  ne(t, !0);
  let n = B(t, "position", 3, "top-right"), r = /* @__PURE__ */ Xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "style",
    "class",
    "children"
  ]), o = /* @__PURE__ */ w(() => `${n()}`.split("-"));
  var i = E0();
  Zt(i, (a) => ({ class: a, style: t.style, ...r }), [
    () => [
      "svelte-flow__panel",
      t.class,
      ...c(o)
    ]
  ]);
  var s = q(i);
  Le(s, () => t.children ?? Be), V(e, i), re();
}
var S0 = /* @__PURE__ */ Q('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function C0(e, t) {
  ne(t, !0);
  let n = B(t, "position", 3, "bottom-right");
  var r = ye(), o = ae(r);
  {
    var i = (s) => {
      Di(s, {
        get position() {
          return n();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (a, l) => {
          var u = S0();
          V(a, u);
        },
        $$slots: { default: !0 }
      });
    };
    se(o, (s) => {
      t.proOptions?.hideAttribution || s(i);
    });
  }
  V(e, r), re();
}
var N0 = /* @__PURE__ */ Q("<div><!></div>");
function P0(e, t) {
  ne(t, !0);
  let n = B(t, "domNode", 15), r = B(t, "clientWidth", 15), o = B(t, "clientHeight", 15), i = /* @__PURE__ */ w(() => t.rest.class), s = /* @__PURE__ */ w(() => Qc(t.rest, [
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
  var l = N0();
  Zt(
    l,
    (d) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        c(i),
        t.colorMode
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: a,
      ...c(s),
      [bt]: d
    }),
    [
      () => ({
        width: gt(t.width),
        height: gt(t.height)
      })
    ],
    void 0,
    void 0,
    "svelte-mkap6j"
  );
  var u = q(l);
  Le(u, () => t.children ?? Be), zn(l, (d) => n(d), () => n()), Vr(l, "clientHeight", o), Vr(l, "clientWidth", r), V(e, l), re();
}
var M0 = /* @__PURE__ */ Q('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), A0 = /* @__PURE__ */ Q("<!> <!>", 1), T0 = /* @__PURE__ */ Q("<!> <!> <!> <!> <!>", 1);
function D0(e, t) {
  ne(t, !0);
  let n = B(t, "paneClickDistance", 3, 1), r = B(t, "nodeClickDistance", 3, 1), o = B(t, "panOnScrollMode", 19, () => bn.Free), i = B(t, "preventScrolling", 3, !0), s = B(t, "zoomOnScroll", 3, !0), a = B(t, "zoomOnDoubleClick", 3, !0), l = B(t, "zoomOnPinch", 3, !0), u = B(t, "panOnScroll", 3, !1), d = B(t, "panOnScrollSpeed", 3, 0.5), h = B(t, "panOnDrag", 3, !0), f = B(t, "selectionOnDrag", 3, !1), g = B(t, "connectionLineType", 19, () => zt.Bezier), v = B(t, "nodes", 31, () => lt([])), m = B(t, "edges", 31, () => lt([])), y = B(t, "viewport", 15, void 0), _ = /* @__PURE__ */ Xt(t, [
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
  ]), E = Bl({
    props: _,
    width: t.width,
    height: t.height,
    get nodes() {
      return v();
    },
    set nodes(x) {
      v(x);
    },
    get edges() {
      return m();
    },
    set edges(x) {
      m(x);
    },
    get viewport() {
      return y();
    },
    set viewport(x) {
      y(x);
    }
  });
  const C = oi(Qr);
  C && C.setStore && C.setStore(E), ii(Qr, {
    provider: !1,
    getStore() {
      return E;
    }
  }), Ue(() => {
    const x = { nodes: E.selectedNodes, edges: E.selectedEdges };
    Ee(() => t.onselectionchange)?.(x);
    for (const A of E.selectionChangeHandlers.values())
      A(x);
  }), ao(() => {
    E.reset();
  }), P0(e, {
    get colorMode() {
      return E.colorMode;
    },
    get width() {
      return t.width;
    },
    get height() {
      return t.height;
    },
    get rest() {
      return _;
    },
    get domNode() {
      return E.domNode;
    },
    set domNode(x) {
      E.domNode = x;
    },
    get clientWidth() {
      return E.width;
    },
    set clientWidth(x) {
      E.width = x;
    },
    get clientHeight() {
      return E.height;
    },
    set clientHeight(x) {
      E.height = x;
    },
    children: (x, A) => {
      var P = T0(), I = ae(P);
      _0(I, {
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
          return E;
        },
        set store(b) {
          E = b;
        }
      });
      var M = j(I, 2);
      qv(M, {
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
          return u();
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
          return E;
        },
        set store(b) {
          E = b;
        },
        children: (b, N) => {
          Uv(b, {
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
              return E;
            },
            set store(p) {
              E = p;
            },
            children: (p, k) => {
              var S = A0(), D = ae(S);
              Jv(D, {
                get store() {
                  return E;
                },
                set store(O) {
                  E = O;
                },
                children: (O, F) => {
                  var L = M0(), Z = j(ae(L), 2);
                  v0(Z, {
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
                      return E;
                    },
                    set store(X) {
                      E = X;
                    }
                  });
                  var G = j(Z, 4);
                  k0(G, {
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
                      return E;
                    },
                    set store(X) {
                      E = X;
                    }
                  });
                  var K = j(G, 2);
                  i0(K, {
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
                      return E;
                    },
                    set store(X) {
                      E = X;
                    }
                  });
                  var J = j(K, 2);
                  y0(J, {
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
                      return E;
                    },
                    set store(X) {
                      E = X;
                    }
                  }), V(O, L);
                },
                $$slots: { default: !0 }
              });
              var R = j(D, 2);
              {
                let O = /* @__PURE__ */ w(() => !!(E.selectionRect && E.selectionRectMode === "user")), F = /* @__PURE__ */ w(() => E.selectionRect?.width), L = /* @__PURE__ */ w(() => E.selectionRect?.height), Z = /* @__PURE__ */ w(() => E.selectionRect?.x), G = /* @__PURE__ */ w(() => E.selectionRect?.y);
                Zl(R, {
                  get isVisible() {
                    return c(O);
                  },
                  get width() {
                    return c(F);
                  },
                  get height() {
                    return c(L);
                  },
                  get x() {
                    return c(Z);
                  },
                  get y() {
                    return c(G);
                  }
                });
              }
              V(p, S);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var H = j(M, 2);
      C0(H, {
        get proOptions() {
          return t.proOptions;
        },
        get position() {
          return t.attributionPosition;
        }
      });
      var Y = j(H, 2);
      e0(Y, {
        get store() {
          return E;
        }
      });
      var T = j(Y, 2);
      Le(T, () => t.children ?? Be), V(x, P);
    },
    $$slots: { default: !0 }
  }), re();
}
function I0(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ oe(Bl({ props: {}, nodes: [], edges: [] }));
  ii(Qr, {
    provider: !0,
    getStore() {
      return c(n);
    },
    setStore: (i) => {
      z(n, i);
    }
  }), ao(() => {
    c(n).reset();
  });
  var r = ye(), o = ae(r);
  Le(o, () => t.children ?? Be), V(e, r), re();
}
var z0 = /* @__PURE__ */ Q("<button><!></button>");
function Sr(e, t) {
  let n = /* @__PURE__ */ Xt(t, [
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
  var r = z0();
  Zt(r, () => ({
    type: "button",
    onclick: t.onclick,
    class: ["svelte-flow__controls-button", t.class],
    ...n,
    [bt]: {
      "--xy-controls-button-background-color-props": t.bgColor,
      "--xy-controls-button-background-color-hover-props": t.bgColorHover,
      "--xy-controls-button-color-props": t.color,
      "--xy-controls-button-color-hover-props": t.colorHover,
      "--xy-controls-button-border-color-props": t.borderColor
    }
  }));
  var o = q(r);
  Le(o, () => t.children ?? Be), V(e, r);
}
var O0 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function R0(e) {
  var t = O0();
  V(e, t);
}
var L0 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function H0(e) {
  var t = L0();
  V(e, t);
}
var V0 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function B0(e) {
  var t = V0();
  V(e, t);
}
var F0 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function K0(e) {
  var t = F0();
  V(e, t);
}
var Y0 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Z0(e) {
  var t = Y0();
  V(e, t);
}
var X0 = /* @__PURE__ */ Q("<!> <!>", 1), W0 = /* @__PURE__ */ Q("<!> <!> <!> <!> <!> <!>", 1);
function q0(e, t) {
  ne(t, !0);
  let n = B(t, "position", 3, "bottom-left"), r = B(t, "orientation", 3, "vertical"), o = B(t, "showZoom", 3, !0), i = B(t, "showFitView", 3, !0), s = B(t, "showLock", 3, !0), a = /* @__PURE__ */ Xt(t, [
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
  ]), l = /* @__PURE__ */ w(qt);
  const u = {
    bgColor: t.buttonBgColor,
    bgColorHover: t.buttonBgColorHover,
    color: t.buttonColor,
    colorHover: t.buttonColorHover,
    borderColor: t.buttonBorderColor
  };
  let d = /* @__PURE__ */ w(() => c(l).nodesDraggable || c(l).nodesConnectable || c(l).elementsSelectable), h = /* @__PURE__ */ w(() => c(l).viewport.zoom <= c(l).minZoom), f = /* @__PURE__ */ w(() => c(l).viewport.zoom >= c(l).maxZoom), g = /* @__PURE__ */ w(() => c(l).ariaLabelConfig), v = /* @__PURE__ */ w(() => r() === "horizontal" ? "horizontal" : "vertical");
  const m = () => {
    c(l).zoomIn();
  }, y = () => {
    c(l).zoomOut();
  }, _ = () => {
    c(l).fitView(t.fitViewOptions);
  }, E = () => {
    let C = !c(d);
    c(l).nodesDraggable = C, c(l).nodesConnectable = C, c(l).elementsSelectable = C;
  };
  {
    let C = /* @__PURE__ */ w(() => [
      "svelte-flow__controls",
      c(v),
      t.class
    ]);
    Di(e, xt(
      {
        get class() {
          return c(C);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(g)["controls.ariaLabel"];
        },
        get style() {
          return t.style;
        }
      },
      () => a,
      {
        children: (x, A) => {
          var P = W0(), I = ae(P);
          {
            var M = (O) => {
              var F = ye(), L = ae(F);
              Le(L, () => t.before), V(O, F);
            };
            se(I, (O) => {
              t.before && O(M);
            });
          }
          var H = j(I, 2);
          {
            var Y = (O) => {
              var F = X0(), L = ae(F);
              Sr(L, xt(
                {
                  onclick: m,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(g)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(g)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(f);
                  }
                },
                () => u,
                {
                  children: (G, K) => {
                    R0(G);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var Z = j(L, 2);
              Sr(Z, xt(
                {
                  onclick: y,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(g)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(g)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(h);
                  }
                },
                () => u,
                {
                  children: (G, K) => {
                    H0(G);
                  },
                  $$slots: { default: !0 }
                }
              )), V(O, F);
            };
            se(H, (O) => {
              o() && O(Y);
            });
          }
          var T = j(H, 2);
          {
            var b = (O) => {
              Sr(O, xt(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: _,
                  get title() {
                    return c(g)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(g)["controls.fitView.ariaLabel"];
                  }
                },
                () => u,
                {
                  children: (F, L) => {
                    B0(F);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(T, (O) => {
              i() && O(b);
            });
          }
          var N = j(T, 2);
          {
            var p = (O) => {
              Sr(O, xt(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: E,
                  get title() {
                    return c(g)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(g)["controls.interactive.ariaLabel"];
                  }
                },
                () => u,
                {
                  children: (F, L) => {
                    var Z = ye(), G = ae(Z);
                    {
                      var K = (X) => {
                        Z0(X);
                      }, J = (X) => {
                        K0(X);
                      };
                      se(G, (X) => {
                        c(d) ? X(K) : X(J, !1);
                      });
                    }
                    V(F, Z);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(N, (O) => {
              s() && O(p);
            });
          }
          var k = j(N, 2);
          {
            var S = (O) => {
              var F = ye(), L = ae(F);
              Le(L, () => t.children), V(O, F);
            };
            se(k, (O) => {
              t.children && O(S);
            });
          }
          var D = j(k, 2);
          {
            var R = (O) => {
              var F = ye(), L = ae(F);
              Le(L, () => t.after), V(O, F);
            };
            se(D, (O) => {
              t.after && O(R);
            });
          }
          V(x, P);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  re();
}
var Ht;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ht || (Ht = {}));
var G0 = /* @__PURE__ */ _e("<circle></circle>");
function U0(e, t) {
  var n = G0();
  ce(() => {
    ee(n, "cx", t.radius), ee(n, "cy", t.radius), ee(n, "r", t.radius), De(n, 0, Yt(["svelte-flow__background-pattern", "dots", t.class]));
  }), V(e, n);
}
var j0 = /* @__PURE__ */ _e("<path></path>");
function J0(e, t) {
  ne(t, !0);
  var n = j0();
  ce(() => {
    ee(n, "stroke-width", t.lineWidth), ee(n, "d", `M${t.dimensions[0] / 2} 0 V${t.dimensions[1]} M0 ${t.dimensions[1] / 2} H${t.dimensions[0]}`), De(n, 0, Yt([
      "svelte-flow__background-pattern",
      t.variant,
      t.class
    ]));
  }), V(e, n), re();
}
const Q0 = {
  [Ht.Dots]: 1,
  [Ht.Lines]: 1,
  [Ht.Cross]: 6
};
var $0 = /* @__PURE__ */ _e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function ep(e, t) {
  ne(t, !0);
  let n = B(t, "variant", 19, () => Ht.Dots), r = B(t, "gap", 3, 20), o = B(t, "lineWidth", 3, 1), i = /* @__PURE__ */ w(qt), s = /* @__PURE__ */ w(() => n() === Ht.Dots), a = /* @__PURE__ */ w(() => n() === Ht.Cross), l = /* @__PURE__ */ w(() => Array.isArray(r()) ? r() : [r(), r()]), u = /* @__PURE__ */ w(() => `background-pattern-${c(i).flowId}-${t.id ?? ""}`), d = /* @__PURE__ */ w(() => [
    c(l)[0] * c(i).viewport.zoom || 1,
    c(l)[1] * c(i).viewport.zoom || 1
  ]), h = /* @__PURE__ */ w(() => (t.size ?? Q0[n()]) * c(i).viewport.zoom), f = /* @__PURE__ */ w(() => c(a) ? [c(h), c(h)] : c(d)), g = /* @__PURE__ */ w(() => c(s) ? [c(h) / 2, c(h) / 2] : [
    c(f)[0] / 2,
    c(f)[1] / 2
  ]);
  var v = $0();
  let m;
  var y = q(v), _ = q(y);
  {
    var E = (A) => {
      {
        let P = /* @__PURE__ */ w(() => c(h) / 2);
        U0(A, {
          get radius() {
            return c(P);
          },
          get class() {
            return t.patternClass;
          }
        });
      }
    }, C = (A) => {
      J0(A, {
        get dimensions() {
          return c(f);
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
    se(_, (A) => {
      c(s) ? A(E) : A(C, !1);
    });
  }
  var x = j(y);
  ce(() => {
    De(v, 0, Yt([
      "svelte-flow__background",
      "svelte-flow__container",
      t.class
    ])), m = He(v, "", m, {
      "--xy-background-color-props": t.bgColor,
      "--xy-background-pattern-color-props": t.patternColor
    }), ee(y, "id", c(u)), ee(y, "x", c(i).viewport.x % c(d)[0]), ee(y, "y", c(i).viewport.y % c(d)[1]), ee(y, "width", c(d)[0]), ee(y, "height", c(d)[1]), ee(y, "patternTransform", `translate(-${c(g)[0]},-${c(g)[1]})`), ee(x, "fill", `url(#${c(u)})`);
  }), V(e, v), re();
}
var tp = /* @__PURE__ */ _e("<rect></rect>");
function np(e, t) {
  let n = B(t, "borderRadius", 3, 5), r = B(t, "strokeWidth", 3, 2);
  var o = ye(), i = ae(o);
  {
    var s = (l) => {
      const u = /* @__PURE__ */ w(() => t.nodeComponent);
      var d = ye(), h = ae(d);
      so(h, () => c(u), (f, g) => {
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
      var u = tp();
      let d, h;
      ce(() => {
        d = De(u, 0, Yt(["svelte-flow__minimap-node", t.class]), null, d, { selected: t.selected }), ee(u, "x", t.x), ee(u, "y", t.y), ee(u, "rx", n()), ee(u, "ry", n()), ee(u, "width", t.width), ee(u, "height", t.height), ee(u, "shape-rendering", t.shapeRendering), h = He(u, "", h, {
          fill: t.color,
          stroke: t.strokeColor,
          "stroke-width": r()
        });
      }), V(l, u);
    };
    se(i, (l) => {
      t.nodeComponent ? l(s) : l(a, !1);
    });
  }
  V(e, o);
}
function rp(e, t) {
  const n = sv({
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
const To = (e) => e instanceof Function ? e : () => e;
var op = /* @__PURE__ */ _e("<title> </title>"), ip = /* @__PURE__ */ _e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), sp = /* @__PURE__ */ Q('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function ap(e, t) {
  ne(t, !0);
  let n = B(t, "position", 3, "bottom-right"), r = B(t, "nodeStrokeColor", 3, "transparent"), o = B(t, "nodeClass", 3, ""), i = B(t, "nodeBorderRadius", 3, 5), s = B(t, "nodeStrokeWidth", 3, 2), a = B(t, "width", 3, 200), l = B(t, "height", 3, 150), u = B(t, "pannable", 3, !0), d = B(t, "zoomable", 3, !0), h = /* @__PURE__ */ Xt(t, [
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
  ]), f = /* @__PURE__ */ w(qt), g = /* @__PURE__ */ w(() => c(f).ariaLabelConfig);
  const v = t.nodeColor === void 0 ? void 0 : To(t.nodeColor), m = To(r()), y = To(o()), _ = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let E = /* @__PURE__ */ w(() => `svelte-flow__minimap-desc-${c(f).flowId}`), C = /* @__PURE__ */ w(() => ({
    x: -c(f).viewport.x / c(f).viewport.zoom,
    y: -c(f).viewport.y / c(f).viewport.zoom,
    width: c(f).width / c(f).viewport.zoom,
    height: c(f).height / c(f).viewport.zoom
  })), x = /* @__PURE__ */ w(() => yl(fr(c(f).nodeLookup, { filter: (R) => !R.hidden }), c(C))), A = /* @__PURE__ */ w(() => c(x).width / a()), P = /* @__PURE__ */ w(() => c(x).height / l()), I = /* @__PURE__ */ w(() => Math.max(c(A), c(P))), M = /* @__PURE__ */ w(() => c(I) * a()), H = /* @__PURE__ */ w(() => c(I) * l()), Y = /* @__PURE__ */ w(() => 5 * c(I)), T = /* @__PURE__ */ w(() => c(x).x - (c(M) - c(x).width) / 2 - c(Y)), b = /* @__PURE__ */ w(() => c(x).y - (c(H) - c(x).height) / 2 - c(Y)), N = /* @__PURE__ */ w(() => c(M) + c(Y) * 2), p = /* @__PURE__ */ w(() => c(H) + c(Y) * 2);
  const k = () => c(I);
  var S = sp(), D = ae(S);
  {
    let R = /* @__PURE__ */ w(() => ["svelte-flow__minimap", t.class]);
    uu(D, () => ({ "--xy-minimap-background-color-props": t.bgColor })), Di(D.lastChild, xt(
      {
        get position() {
          return n();
        },
        get class() {
          return c(R);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => h,
      {
        children: (O, F) => {
          var L = ye(), Z = ae(L);
          {
            var G = (K) => {
              var J = ip();
              let X;
              var W = q(J);
              {
                var U = (te) => {
                  var ge = op(), ie = q(ge);
                  ce(() => {
                    ee(ge, "id", c(E)), we(ie, t.ariaLabel ?? c(g)["minimap.ariaLabel"]);
                  }), V(te, ge);
                };
                se(W, (te) => {
                  (t.ariaLabel ?? c(g)["minimap.ariaLabel"]) && te(U);
                });
              }
              var le = j(W);
              Vt(le, 17, () => c(f).nodes, (te) => te.id, (te, ge) => {
                const ie = /* @__PURE__ */ w(() => c(f).nodeLookup.get(c(ge).id));
                var Ce = ye(), ot = ae(Ce);
                {
                  var it = (mt) => {
                    const he = /* @__PURE__ */ w(() => Wt(c(ie)));
                    {
                      let be = /* @__PURE__ */ w(() => v?.(c(ie))), Je = /* @__PURE__ */ w(() => m(c(ie))), pe = /* @__PURE__ */ w(() => y(c(ie)));
                      np(mt, xt(
                        {
                          get id() {
                            return c(ie).id;
                          },
                          get x() {
                            return c(ie).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(ie).internals.positionAbsolute.y;
                          }
                        },
                        () => c(he),
                        {
                          get selected() {
                            return c(ie).selected;
                          },
                          get nodeComponent() {
                            return t.nodeComponent;
                          },
                          get color() {
                            return c(be);
                          },
                          get borderRadius() {
                            return i();
                          },
                          get strokeColor() {
                            return c(Je);
                          },
                          get strokeWidth() {
                            return s();
                          },
                          get shapeRendering() {
                            return _;
                          },
                          get class() {
                            return c(pe);
                          }
                        }
                      ));
                    }
                  };
                  se(ot, (mt) => {
                    c(ie) && wl(c(ie)) && !c(ie).hidden && mt(it);
                  });
                }
                V(te, Ce);
              });
              var me = j(le);
              Ae(J, (te, ge) => rp?.(te, ge), () => ({
                store: c(f),
                panZoom: c(f).panZoom,
                getViewScale: k,
                translateExtent: c(f).translateExtent,
                width: c(f).width,
                height: c(f).height,
                inversePan: t.inversePan,
                zoomStep: t.zoomStep,
                pannable: u(),
                zoomable: d()
              })), ce(() => {
                ee(J, "width", a()), ee(J, "height", l()), ee(J, "viewBox", `${c(T) ?? ""} ${c(b) ?? ""} ${c(N) ?? ""} ${c(p) ?? ""}`), ee(J, "aria-labelledby", c(E)), X = He(J, "", X, {
                  "--xy-minimap-mask-background-color-props": t.maskColor,
                  "--xy-minimap-mask-stroke-color-props": t.maskStrokeColor,
                  "--xy-minimap-mask-stroke-width-props": t.maskStrokeWidth ? t.maskStrokeWidth * c(I) : void 0
                }), ee(me, "d", `M${c(T) - c(Y)},${c(b) - c(Y)}h${c(N) + c(Y) * 2}v${c(p) + c(Y) * 2}h${-c(N) - c(Y) * 2}z
      M${c(C).x ?? ""},${c(C).y ?? ""}h${c(C).width ?? ""}v${c(C).height ?? ""}h${-c(C).width}z`);
              }), V(K, J);
            };
            se(Z, (K) => {
              c(f).panZoom && K(G);
            });
          }
          V(O, L);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  V(e, S), re();
}
function lp(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function zs(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
function Cr(e, { delay: t = 0, duration: n = 400, easing: r = lp, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(e), l = +a.opacity, u = a.transform === "none" ? "" : a.transform, d = l * (1 - s), [h, f] = zs(o), [g, v] = zs(i);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (m, y) => `
			transform: ${u} translate(${(1 - m) * h}${f}, ${(1 - m) * g}${v});
			opacity: ${l - d * y}`
  };
}
var cp = /* @__PURE__ */ Q('<button type="button" title="Go back" class="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg></button>'), up = /* @__PURE__ */ Q('<button type="button" class="group flex items-center gap-4 p-3 bg-white border border-slate-100 rounded-xl shadow-sm cursor-grab hover:border-blue-400 hover:shadow-md transition-all active:cursor-grabbing text-left w-full" draggable="true"><div><!></div> <div class="min-w-0 flex-grow"><div class="text-xs font-bold text-slate-800 tracking-tight truncate"> </div> <div class="text-[10px] text-slate-400 mt-0.5 truncate"> </div></div></button>'), dp = /* @__PURE__ */ Q('<div class="text-center py-10"><p class="text-sm text-slate-400"> </p></div>'), fp = /* @__PURE__ */ Q('<div class="flex flex-col gap-3"><!> <!></div>'), hp = /* @__PURE__ */ Q('<button type="button" class="group relative flex flex-col gap-1 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-400 hover:shadow-md transition-all w-full text-left overflow-hidden"><div class="flex items-center gap-3 mb-1"><div> </div> <span class="text-sm font-bold text-slate-800"> </span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 ml-auto text-slate-300 group-hover:text-blue-500 transition-colors"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg></div> <p class="text-[11px] text-slate-500 leading-relaxed"> </p></button>'), gp = /* @__PURE__ */ Q('<div class="flex flex-col gap-3"></div>'), vp = /* @__PURE__ */ Q('<div class="absolute top-4 right-4 bottom-4 w-80 bg-white/95 backdrop-blur-xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 z-40 rounded-2xl shadow-2xl p-0 animate-in slide-in-from-right-10"><div class="p-5 border-b border-slate-100 bg-white/50 backdrop-blur-sm sticky top-0 z-10"><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2"><!> <div><h3 class="text-xs font-black text-slate-400 uppercase tracking-[0.2em]"><!></h3></div></div> <button type="button" title="Close" class="p-2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="relative"><input type="text" placeholder="Search nodes..." class="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all pl-9 bg-slate-50/50"/> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 absolute left-3 top-3 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg></div></div> <div class="flex-grow overflow-y-auto p-5 relative"><!></div></div>');
function pp(e, t) {
  ne(t, !0);
  let n = B(t, "availableComponents", 19, () => ({})), r = B(t, "isOpen", 15, !1), o = /* @__PURE__ */ oe(""), i = /* @__PURE__ */ oe(null);
  const s = [
    {
      id: "triggers",
      label: "Triggers",
      icon: "⚡️",
      color: "bg-amber-500",
      description: "Events that start your workflow"
    },
    {
      id: "actions",
      label: "Actions",
      icon: "🚀",
      color: "bg-blue-600",
      description: "Operations your workflow performs"
    },
    {
      id: "conditions",
      label: "Conditions",
      icon: "⚖️",
      color: "bg-purple-600",
      description: "Logic to branch your workflow"
    }
  ];
  function a(E) {
    const C = (E.triggers || []).map((P) => ({
      category: "triggers",
      type: "trigger",
      label: P.name,
      icon: P.icon,
      description: P.description,
      color: "bg-amber-500",
      data: {
        label: P.name,
        description: P.description,
        identifier: P.identifier
      }
    })), x = (E.actions || []).map((P) => ({
      category: "actions",
      type: "action",
      label: P.name,
      icon: P.icon,
      description: P.description,
      color: "bg-blue-600",
      data: {
        label: P.name,
        description: P.description,
        identifier: P.identifier
      }
    })), A = (E.conditions || []).map((P) => ({
      category: "conditions",
      type: "condition",
      label: P.name,
      icon: P.icon,
      description: P.description,
      color: "bg-purple-600",
      data: {
        label: P.name,
        description: P.description,
        identifier: P.identifier
      }
    }));
    return [...C, ...x, ...A];
  }
  let l = /* @__PURE__ */ w(() => a(n())), u = /* @__PURE__ */ w(() => c(o) ? c(l).filter((E) => E.label.toLowerCase().includes(c(o).toLowerCase())) : c(i) ? c(l).filter((E) => E.category === c(i)) : []);
  function d(E, C, x) {
    E.dataTransfer.setData("application/svelteflow", JSON.stringify({ type: C, data: x })), E.dataTransfer.effectAllowed = "move";
  }
  function h(E) {
    t.onSelectNode && (t.onSelectNode(E.type, E.data), r(!1));
  }
  function f() {
    r(!1), z(o, ""), z(i, null);
  }
  function g() {
    z(i, null);
  }
  function v(E) {
    z(i, E, !0);
  }
  var m = ye(), y = ae(m);
  {
    var _ = (E) => {
      var C = vp(), x = q(C), A = q(x), P = q(A), I = q(P);
      {
        var M = (L) => {
          var Z = cp();
          Z.__click = g, V(L, Z);
        };
        se(I, (L) => {
          c(i) && !c(o) && L(M);
        });
      }
      var H = j(I, 2), Y = q(H), T = q(Y);
      {
        var b = (L) => {
          var Z = Mr("Search Results");
          V(L, Z);
        }, N = (L) => {
          var Z = ye(), G = ae(Z);
          {
            var K = (X) => {
              var W = Mr();
              ce((U) => we(W, U), [
                () => s.find((U) => U.id === c(i))?.label
              ]), V(X, W);
            }, J = (X) => {
              var W = Mr("Components");
              V(X, W);
            };
            se(
              G,
              (X) => {
                c(i) ? X(K) : X(J, !1);
              },
              !0
            );
          }
          V(L, Z);
        };
        se(T, (L) => {
          c(o) ? L(b) : L(N, !1);
        });
      }
      var p = j(P, 2);
      p.__click = f;
      var k = j(A, 2), S = q(k), D = j(x, 2), R = q(D);
      {
        var O = (L) => {
          var Z = fp(), G = q(Z);
          Vt(G, 17, () => c(u), Hr, (X, W) => {
            var U = up();
            U.__click = () => h(c(W));
            var le = q(U), me = q(le);
            Ta(me, () => c(W).icon || "<span>?</span>");
            var te = j(le, 2), ge = q(te), ie = q(ge), Ce = j(ge, 2), ot = q(Ce);
            ce(() => {
              De(le, 1, `w-10 h-10 ${c(W).color ?? ""} p-2 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0`), we(ie, c(W).label), we(ot, c(W).description);
            }), rn("dragstart", U, (it) => d(it, c(W).type, c(W).data)), V(X, U);
          });
          var K = j(G, 2);
          {
            var J = (X) => {
              var W = dp(), U = q(W), le = q(U);
              ce(() => we(le, `No nodes found matching "${c(o) ?? ""}"`)), V(X, W);
            };
            se(K, (X) => {
              c(u).length === 0 && X(J);
            });
          }
          mr(1, Z, () => Cr, () => ({ x: 20, duration: 300, delay: 150 })), mr(2, Z, () => Cr, () => ({ x: -20, duration: 200 })), V(L, Z);
        }, F = (L) => {
          var Z = gp();
          Vt(Z, 21, () => s, Hr, (G, K) => {
            var J = hp();
            J.__click = () => v(c(K).id);
            var X = q(J), W = q(X), U = q(W), le = j(W, 2), me = q(le), te = j(X, 2), ge = q(te);
            ce(() => {
              De(W, 1, `w-8 h-8 ${c(K).color ?? ""} rounded-lg flex items-center justify-center text-white text-sm`), we(U, c(K).icon), we(me, c(K).label), we(ge, c(K).description);
            }), V(G, J);
          }), mr(1, Z, () => Cr, () => ({ x: -20, duration: 300, delay: 150 })), mr(2, Z, () => Cr, () => ({ x: 20, duration: 200 })), V(L, Z);
        };
        se(R, (L) => {
          c(o) || c(i) ? L(O) : L(F, !1);
        });
      }
      Su(S, () => c(o), (L) => z(o, L)), V(E, C);
    };
    se(y, (E) => {
      r() && E(_);
    });
  }
  V(e, m), re();
}
fn(["click"]);
var mp = /* @__PURE__ */ Q('<button type="button" class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path></svg> Rename Node</button> <button type="button" class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"></path></svg> Duplicate Node</button> <div class="h-px bg-slate-100 my-1"></div> <button type="button" class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg> Delete Node</button>', 1), yp = /* @__PURE__ */ Q('<button type="button" class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> Add Node</button>'), wp = /* @__PURE__ */ Q('<div class="absolute z-50 min-w-[160px] bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl shadow-2xl py-1 animate-in fade-in zoom-in duration-200"><!></div>');
function _p(e, t) {
  ne(t, !0);
  let n = B(t, "type", 3, "canvas");
  const { getNodes: r, setNodes: o, deleteElements: i } = Ti();
  function s() {
    t.onRenameNode && t.onRenameNode(t.id), t.onclick();
  }
  function a() {
    i({ nodes: [{ id: t.id }] }), t.onclick();
  }
  function l() {
    t.onAddNode && t.onAddNode(), t.onclick();
  }
  function u() {
    const v = r(), m = v.find((y) => y.id === t.id);
    if (m) {
      const y = {
        ...m,
        id: `${m.type}-${Date.now()}`,
        position: { x: m.position.x + 20, y: m.position.y + 20 },
        selected: !1
      };
      o([...v, y]);
    }
    t.onclick();
  }
  var d = wp();
  d.__click = (v) => v.stopPropagation();
  var h = q(d);
  {
    var f = (v) => {
      var m = mp(), y = ae(m);
      y.__click = s;
      var _ = j(y, 2);
      _.__click = u;
      var E = j(_, 4);
      E.__click = a, V(v, m);
    }, g = (v) => {
      var m = yp();
      m.__click = l, V(v, m);
    };
    se(h, (v) => {
      n() === "node" ? v(f) : v(g, !1);
    });
  }
  ce(() => He(d, `top: ${t.top ?? ""}px; left: ${t.left ?? ""}px; right: ${t.right ?? ""}px; bottom: ${t.bottom ?? ""}px;`)), V(e, d), re();
}
fn(["click"]);
var bp = /* @__PURE__ */ Q("<!> <!> <!>", 1), xp = /* @__PURE__ */ Q('<div class="relative h-[600px] w-full border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xl"><div class="absolute inset-0" role="presentation"><!> <!></div> <!> <button type="button" class="absolute top-4 right-4 p-3 bg-white border border-slate-200 rounded-xl shadow-lg text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all z-10 group" title="Add Node"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 group-hover:scale-110 transition-transform"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg></button></div>');
function kp(e, t) {
  ne(t, !0);
  let n = B(t, "nodes", 31, () => lt([])), r = B(t, "edges", 31, () => lt([])), o = B(t, "availableComponents", 19, () => ({}));
  const { screenToFlowPosition: i, setNodes: s } = Ti();
  let a = /* @__PURE__ */ oe(void 0), l = /* @__PURE__ */ oe(null), u = /* @__PURE__ */ oe(!1), d = /* @__PURE__ */ oe(0), h = /* @__PURE__ */ oe(0), f = /* @__PURE__ */ oe(null);
  function g(b) {
    b.preventDefault(), b.dataTransfer.dropEffect = "move";
  }
  function v(b) {
    b.preventDefault();
    const N = b.dataTransfer.getData("application/svelteflow");
    if (!N) return;
    const { type: p, data: k } = JSON.parse(N), S = i({ x: b.clientX, y: b.clientY }), D = { id: `${p}-${Date.now()}`, type: p, position: S, data: k };
    n([...n(), D]);
  }
  function m({ event: b, node: N }) {
    b.preventDefault();
    const p = c(a).getBoundingClientRect(), k = b.clientX - p.left, S = b.clientY - p.top;
    z(
      l,
      {
        id: N.id,
        type: "node",
        top: S < c(h) - 200 ? S : void 0,
        left: k < c(d) - 200 ? k : void 0,
        right: k >= c(d) - 200 ? c(d) - k : void 0,
        bottom: S >= c(h) - 200 ? c(h) - S : void 0
      },
      !0
    );
  }
  function y({ event: b }) {
    b.preventDefault();
    const N = c(a).getBoundingClientRect(), p = b.clientX - N.left, k = b.clientY - N.top;
    z(
      l,
      {
        id: "canvas",
        type: "canvas",
        top: k < c(h) - 200 ? k : void 0,
        left: p < c(d) - 200 ? p : void 0,
        right: p >= c(d) - 200 ? c(d) - p : void 0,
        bottom: k >= c(h) - 200 ? c(h) - k : void 0
      },
      !0
    );
  }
  function _() {
    z(l, null);
  }
  function E() {
    c(l) ? z(
      f,
      {
        x: c(l).left ?? c(d) - c(l).right,
        y: c(l).top ?? c(h) - c(l).bottom
      },
      !0
    ) : z(f, null), z(u, !0);
  }
  function C(b, N) {
    let p;
    if (c(f))
      p = i(c(f));
    else {
      const S = { x: c(d) / 2, y: c(h) / 2 };
      p = i(S);
      const D = 50;
      let R = 0;
      for (; n().some((O) => Math.abs(O.position.x - (p.x + R)) < D && Math.abs(O.position.y - (p.y + R)) < D); )
        R += 40;
      p.x += R, p.y += R;
    }
    const k = { id: `${b}-${Date.now()}`, type: b, position: p, data: N };
    n([...n(), k]);
  }
  function x(b) {
    const N = n().find((p) => p.id === b);
    if (N) {
      const p = window.prompt("Enter new node name:", N.data.label);
      p !== null && s(n().map((k) => k.id === b ? { ...k, data: { ...k.data, label: p } } : k));
    }
  }
  var A = xp(), P = q(A), I = q(P);
  D0(I, {
    get nodeTypes() {
      return t.nodeTypes;
    },
    fitView: !0,
    onnodeclick: ({ event: b, node: N }) => {
      t.onNodeClick && t.onNodeClick(b, N), _();
    },
    onnodecontextmenu: m,
    onpanecontextmenu: y,
    onpaneclick: _,
    get nodes() {
      return n();
    },
    set nodes(b) {
      n(b);
    },
    get edges() {
      return r();
    },
    set edges(b) {
      r(b);
    },
    children: (b, N) => {
      var p = bp(), k = ae(p);
      q0(k, {});
      var S = j(k, 2);
      ep(S, { variant: "lines", gap: 20, size: 1, color: "#f1f5f9" });
      var D = j(S, 2);
      ap(D, {}), V(b, p);
    },
    $$slots: { default: !0 }
  });
  var M = j(I, 2);
  {
    var H = (b) => {
      _p(b, xt(() => c(l), {
        onclick: _,
        onAddNode: E,
        onRenameNode: x
      }));
    };
    se(M, (b) => {
      c(l) && b(H);
    });
  }
  var Y = j(P, 2);
  pp(Y, {
    get availableComponents() {
      return o();
    },
    onSelectNode: C,
    get isOpen() {
      return c(u);
    },
    set isOpen(b) {
      z(u, b, !0);
    }
  });
  var T = j(Y, 2);
  T.__click = () => {
    z(f, null), z(u, !0);
  }, zn(A, (b) => z(a, b), () => c(a)), rn("dragover", P, g), rn("drop", P, v), Vr(A, "clientWidth", (b) => z(d, b)), Vr(A, "clientHeight", (b) => z(h, b)), V(e, A), re();
}
fn(["click"]);
var Ep = /* @__PURE__ */ Q('<p class="text-[10px] leading-relaxed text-slate-500 mb-2 italic"> </p>'), Sp = /* @__PURE__ */ Q('<div class="relative w-3 h-3" role="presentation"><!></div>'), Cp = /* @__PURE__ */ Q('<div class="relative w-3 h-3" role="presentation"><!></div>'), Np = /* @__PURE__ */ Q('<div class="relative group" role="presentation"><div><div><span class="text-white"><!></span> <span class="text-[10px] font-bold uppercase tracking-wider text-white flex-1"> </span> <button type="button" class="text-white/70 hover:text-white hover:bg-white/20 rounded p-0.5 transition-all opacity-0 group-hover:opacity-100" title="Edit Settings"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg></button></div> <div><!> <div><!></div></div></div> <div class="absolute -left-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div> <div class="absolute -right-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div></div>');
function Ii(e, t) {
  ne(t, !0);
  let n = B(t, "type", 3, "default"), r = B(t, "inputs", 19, () => []), o = B(t, "outputs", 19, () => []);
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
  }, s = /* @__PURE__ */ w(() => i[n()] || i.default);
  function a(I) {
    I.stopPropagation(), window.dispatchEvent(new CustomEvent("open-node-settings", {
      detail: {
        id: t.id,
        identifier: t.data.identifier,
        config: {
          label: t.data.label,
          description: t.data.description,
          ...t.data.config || {}
        }
      }
    }));
  }
  var l = Np(), u = q(l), d = q(u), h = q(d), f = q(h);
  Ta(f, () => c(s).icon);
  var g = j(h, 2), v = q(g), m = j(g, 2);
  m.__click = a;
  var y = j(d, 2), _ = q(y);
  {
    var E = (I) => {
      var M = Ep(), H = q(M);
      ce(() => we(H, t.data.description)), V(I, M);
    };
    se(_, (I) => {
      t.data.description && I(E);
    });
  }
  var C = j(_, 2), x = q(C);
  Le(x, () => t.children ?? Be);
  var A = j(u, 2);
  Vt(A, 21, r, Hr, (I, M) => {
    var H = Sp(), Y = q(H);
    Bt(Y, {
      type: "target",
      get position() {
        return $.Left;
      },
      get id() {
        return c(M).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
    }), V(I, H);
  });
  var P = j(A, 2);
  Vt(P, 21, o, Hr, (I, M) => {
    var H = Cp(), Y = q(H);
    Bt(Y, {
      type: "source",
      get position() {
        return $.Right;
      },
      get id() {
        return c(M).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
    }), V(I, H);
  }), ce(() => {
    De(u, 1, `min-w-[180px] max-w-[240px] bg-white rounded-xl shadow-sm border ${c(s).border ?? ""} overflow-hidden transition-all duration-200 ${t.selected ? "ring-2 ring-blue-500 ring-offset-2" : "hover:shadow-md"}`), De(d, 1, `${c(s).header ?? ""} px-3 py-1.5 flex items-center gap-2`), we(v, t.data.label || "Node"), De(y, 1, `p-3 ${c(s).bg ?? ""}`), De(C, 1, `text-xs font-medium ${c(s).text ?? ""}`);
  }), V(e, l), re();
}
fn(["click"]);
var Pp = /* @__PURE__ */ Q('<div class="px-2 py-1 bg-amber-100/50 rounded border border-amber-200 text-[10px] break-all font-mono"> </div>');
function Mp(e, t) {
  ne(t, !0);
  const n = [{ id: "output" }];
  Ii(e, {
    get id() {
      return t.id;
    },
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
          var u = Pp(), d = q(u);
          ce((h) => we(d, h), [() => t.data.event.split("\\").pop()]), V(l, u);
        };
        se(s, (l) => {
          t.data.event && l(a);
        });
      }
      V(r, i);
    },
    $$slots: { default: !0 }
  }), re();
}
var Ap = /* @__PURE__ */ Q('<div class="flex items-center gap-2 px-2 py-1 bg-blue-100/50 rounded border border-blue-200 text-[10px] font-semibold"><span>⚡</span> </div>');
function Tp(e, t) {
  ne(t, !0);
  const n = [{ id: "input" }], r = [{ id: "output" }];
  Ii(e, {
    get id() {
      return t.id;
    },
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
        var l = (u) => {
          var d = Ap(), h = j(q(d));
          ce(() => we(h, ` ${t.data.action ?? ""}`)), V(u, d);
        };
        se(a, (u) => {
          t.data.action && u(l);
        });
      }
      V(o, s);
    },
    $$slots: { default: !0 }
  }), re();
}
var Dp = /* @__PURE__ */ Q('<div class="px-2 py-1 bg-purple-100/50 rounded border border-purple-200 text-[10px] font-mono mb-6"> </div>'), Ip = /* @__PURE__ */ Q('<!> <div class="absolute -right-1.5 top-[60px] flex flex-col gap-6"><div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-emerald-600 mr-2 uppercase">True</span> <!></div> <div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-rose-600 mr-2 uppercase">False</span> <!></div></div>', 1), zp = /* @__PURE__ */ Q('<div class="relative"><!></div>');
function Op(e, t) {
  ne(t, !0);
  const n = [{ id: "input" }];
  var r = zp(), o = q(r);
  Ii(o, {
    get id() {
      return t.id;
    },
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
      var a = Ip(), l = ae(a);
      {
        var u = (m) => {
          var y = Dp(), _ = q(y);
          ce(() => we(_, t.data.condition)), V(m, y);
        };
        se(l, (m) => {
          t.data.condition && m(u);
        });
      }
      var d = j(l, 2), h = q(d), f = j(q(h), 2);
      Bt(f, {
        type: "source",
        get position() {
          return $.Right;
        },
        id: "true",
        class: "!w-3 !h-3 !bg-emerald-500 !border-2 !border-white"
      });
      var g = j(h, 2), v = j(q(g), 2);
      Bt(v, {
        type: "source",
        get position() {
          return $.Right;
        },
        id: "false",
        class: "!w-3 !h-3 !bg-rose-500 !border-2 !border-white"
      }), V(i, a);
    },
    $$slots: { default: !0 }
  }), V(e, r), re();
}
var Rp = /* @__PURE__ */ Q('<div class="flex h-full w-full overflow-hidden"><!></div>');
function Lp(e, t) {
  ne(t, !0);
  const n = {
    trigger: Mp,
    action: Tp,
    condition: Op
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
        identifier: "Xlited\\LaravelFlow\\Nodes\\Actions\\SendEmail",
        description: "Sends a welcome email to the user.",
        config: {
          to: "{{model.email}}",
          subject: "Welcome to our platform",
          body: `Hi {{model.name}}!
Thank you for signing up!`
        }
      }
    }
  ], o = [{ id: "edge-1", source: "trigger-1", target: "action-1" }];
  let i = B(t, "nodes", 19, () => []), s = B(t, "edges", 19, () => []), a = B(t, "availableComponents", 19, () => ({})), l = /* @__PURE__ */ oe(Ee(() => i().length > 0 ? i() : r)), u = /* @__PURE__ */ oe(Ee(() => s().length > 0 ? s() : o)), d = /* @__PURE__ */ oe(null);
  function h(g, v) {
    z(d, v.id, !0);
  }
  let f;
  Ue(() => {
    const g = c(l), v = c(u);
    return t.updateState && (clearTimeout(f), f = setTimeout(
      () => {
        t.updateState({
          nodes: JSON.parse(JSON.stringify(g)),
          edges: JSON.parse(JSON.stringify(v))
        });
      },
      500
    )), () => clearTimeout(f);
  }), Ue(() => {
    const g = (v) => {
      const { id: m, config: y } = v.detail, _ = c(l).findIndex((E) => E.id === m);
      if (_ !== -1) {
        const { label: E, description: C, ...x } = y, A = { ...c(l)[_] };
        A.data = { ...A.data, label: E, description: C, config: x };
        const P = [...c(l)];
        P[_] = A, z(l, P);
      }
    };
    return window.addEventListener("update-node-config", g), () => {
      window.removeEventListener("update-node-config", g);
    };
  }), I0(e, {
    children: (g, v) => {
      var m = Rp(), y = q(m);
      kp(y, {
        get nodeTypes() {
          return n;
        },
        onNodeClick: h,
        get availableComponents() {
          return a();
        },
        get nodes() {
          return c(l);
        },
        set nodes(_) {
          z(l, _);
        },
        get edges() {
          return c(u);
        },
        set edges(_) {
          z(u, _);
        }
      }), V(g, m);
    },
    $$slots: { default: !0 }
  }), re();
}
const Os = () => {
  window.Alpine.data("flowBuilder", ({ state: e, components: t }) => ({
    state: e,
    components: t,
    init() {
      const n = Array.isArray(this.state?.nodes) ? JSON.parse(JSON.stringify(this.state.nodes)) : [], r = Array.isArray(this.state?.edges) ? JSON.parse(JSON.stringify(this.state.edges)) : [];
      au(Lp, {
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
window.Alpine ? Os() : document.addEventListener("alpine:init", Os);
