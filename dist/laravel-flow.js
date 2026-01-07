var so = Array.isArray, $l = Array.prototype.indexOf, ao = Array.from, ec = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, Fs = Object.getOwnPropertyDescriptors, Ks = Object.prototype, tc = Array.prototype, lo = Object.getPrototypeOf, Hi = Object.isExtensible;
function wn(e) {
  return typeof e == "function";
}
const Ye = () => {
};
function nc(e) {
  return e();
}
function Bo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ys() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Ae(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function On(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Ne = 2, li = 4, co = 8, Xs = 1 << 24, kt = 16, Rt = 32, qt = 64, uo = 128, ct = 512, Pe = 1024, We = 2048, _t = 4096, Ze = 8192, Tt = 16384, fo = 32768, wt = 65536, Vi = 1 << 17, Zs = 1 << 18, gn = 1 << 19, Ws = 1 << 20, Mt = 1 << 25, an = 32768, Fo = 1 << 21, ci = 1 << 22, Ft = 1 << 23, pt = /* @__PURE__ */ Symbol("$state"), qs = /* @__PURE__ */ Symbol("legacy props"), rc = /* @__PURE__ */ Symbol(""), bn = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function ui(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function oc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ic(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function sc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ac(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function lc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function cc(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function uc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function dc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function fc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function hc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const gc = 1, vc = 2, Gs = 4, pc = 8, mc = 16, yc = 1, _c = 2, Us = 4, wc = 8, bc = 16, xc = 1, kc = 2, Ec = 4, js = 1, Sc = 2, Ce = /* @__PURE__ */ Symbol(), Cc = "http://www.w3.org/1999/xhtml", Nc = "http://www.w3.org/2000/svg", Pc = "@attach";
function Mc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ac() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Js(e) {
  return e === this.v;
}
function Qs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function $s(e) {
  return !Qs(e, this.v);
}
let Rn = !1;
function zc() {
  Rn = !0;
}
const Tc = [];
function ea(e, t = !1, n = !1) {
  return Ir(e, /* @__PURE__ */ new Map(), "", Tc, null, n);
}
function Ir(e, t, n, r, o = null, i = !1) {
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
    if (so(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = Ir(u, t, n, r, null, i));
      }
      return a;
    }
    if (lo(e) === Ks) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Ir(
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
      return Ir(
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
let me = null;
function Cn(e) {
  me = e;
}
function di(e) {
  return (
    /** @type {T} */
    hi().get(e)
  );
}
function fi(e, t) {
  return hi().set(e, t), t;
}
function Dc(e) {
  return hi().has(e);
}
function oe(e, t = !1, n) {
  me = {
    p: me,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Rn && !t ? { s: null, u: null, $: [] } : null
  };
}
function ie(e) {
  var t = (
    /** @type {ComponentContext} */
    me
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ma(r);
  }
  return t.i = !0, me = t.p, /** @type {T} */
  {};
}
function cr() {
  return !Rn || me !== null && me.l === null;
}
function hi(e) {
  return me === null && ui(), me.c ??= new Map(Ic(me) || void 0);
}
function Ic(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let en = [];
function ta() {
  var e = en;
  en = [], Bo(e);
}
function Gt(e) {
  if (en.length === 0 && !Un) {
    var t = en;
    queueMicrotask(() => {
      t === en && ta();
    });
  }
  en.push(e);
}
function Oc() {
  for (; en.length > 0; )
    ta();
}
function na(e) {
  var t = ce;
  if (t === null)
    return de.f |= Ft, e;
  if ((t.f & fo) === 0) {
    if ((t.f & uo) === 0)
      throw e;
    t.b.error(e);
  } else
    Nn(e, t);
}
function Nn(e, t) {
  for (; t !== null; ) {
    if ((t.f & uo) !== 0)
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
const br = /* @__PURE__ */ new Set();
let ve = null, Or = null, $e = null, Qe = [], ho = null, Ko = !1, Un = !1;
class at {
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
    Qe = [], Or = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (Or = this, ve = null, Bi(n.render_effects), Bi(n.effects), Or = null, this.#l?.resolve()), $e = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(t, n) {
    t.f ^= Pe;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Rt | qt)) !== 0, s = i && (o & Pe) !== 0, a = s || (o & Ze) !== 0 || this.skipped_effects.has(r);
      if ((r.f & uo) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Pe : (o & li) !== 0 ? n.effects.push(r) : hr(r) && ((r.f & kt) !== 0 && this.#i.add(r), er(r));
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
      (n.f & We) !== 0 ? this.#i.add(n) : (n.f & _t) !== 0 && this.#o.add(n), this.#c(n.deps), Me(n, Pe);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & Ne) === 0 || (n.f & an) === 0 || (n.f ^= an, this.#c(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Ft) === 0 && (this.current.set(t, t.v), $e?.set(t, t.v));
  }
  activate() {
    ve = this, this.apply();
  }
  deactivate() {
    ve === this && (ve = null, $e = null);
  }
  flush() {
    if (this.activate(), Qe.length > 0) {
      if (ra(), ve !== null && ve !== this)
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
    if (br.size > 1) {
      this.previous.clear();
      var t = $e, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of br) {
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
          var o = Qe;
          Qe = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            oa(d, a, l, u);
          if (Qe.length > 0) {
            ve = i, i.apply();
            for (const d of Qe)
              i.#s(d, r);
            i.deactivate();
          }
          Qe = o;
        }
      }
      ve = null, $e = t;
    }
    this.committed = !0, br.delete(this);
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
      this.#o.delete(t), Me(t, We), ln(t);
    for (const t of this.#o)
      Me(t, _t), ln(t);
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
    return (this.#l ??= Ys()).promise;
  }
  static ensure() {
    if (ve === null) {
      const t = ve = new at();
      br.add(ve), Un || at.enqueue(() => {
        ve === t && t.flush();
      });
    }
    return ve;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Gt(t);
  }
  apply() {
  }
}
function Rc(e) {
  var t = Un;
  Un = !0;
  try {
    for (var n; ; ) {
      if (Oc(), Qe.length === 0 && (ve?.flush(), Qe.length === 0))
        return ho = null, /** @type {T} */
        n;
      ra();
    }
  } finally {
    Un = t;
  }
}
function ra() {
  var e = rn;
  Ko = !0;
  var t = null;
  try {
    var n = 0;
    for (Yr(!0); Qe.length > 0; ) {
      var r = at.ensure();
      if (n++ > 1e3) {
        var o, i;
        Lc();
      }
      r.process(Qe), Kt.clear();
    }
  } finally {
    Ko = !1, Yr(e), ho = null;
  }
}
function Lc() {
  try {
    lc();
  } catch (e) {
    Nn(e, ho);
  }
}
let Ct = null;
function Bi(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Tt | Ze)) === 0 && hr(r) && (Ct = /* @__PURE__ */ new Set(), er(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? Ea(r) : r.fn = null), Ct?.size > 0)) {
        Kt.clear();
        for (const o of Ct) {
          if ((o.f & (Tt | Ze)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Ct.has(s) && (Ct.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (Tt | Ze)) === 0 && er(l);
          }
        }
        Ct.clear();
      }
    }
    Ct = null;
  }
}
function oa(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & Ne) !== 0 ? oa(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (ci | kt)) !== 0 && (i & We) === 0 && ia(o, t, r) && (Me(o, We), ln(
        /** @type {Effect} */
        o
      ));
    }
}
function ia(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & Ne) !== 0 && ia(
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
function ln(e) {
  for (var t = ho = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Ko && t === ce && (n & kt) !== 0 && (n & Zs) === 0)
      return;
    if ((n & (qt | Rt)) !== 0) {
      if ((n & Pe) === 0) return;
      t.f ^= Pe;
    }
  }
  Qe.push(t);
}
function sa(e) {
  let t = 0, n = Xt(0), r;
  return () => {
    Qn() && (c(n), fr(() => (t === 0 && (r = ke(() => e(() => jn(n)))), t += 1, () => {
      Gt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, jn(n));
      });
    })));
  };
}
var Hc = wt | gn | uo;
function Vc(e, t, n) {
  new Bc(e, t, n);
}
class Bc {
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
  #_ = sa(() => (this.#h = Xt(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    ce.b, this.#e = !!this.#r.pending, this.#i = Vn(() => {
      ce.b = this;
      {
        var o = this.#m();
        try {
          this.#o = Oe(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#e = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, Hc);
  }
  #w() {
    try {
      this.#o = Oe(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #b() {
    const t = this.#r.pending;
    t && (this.#s = Oe(() => t(this.#t)), at.enqueue(() => {
      var n = this.#m();
      this.#o = this.#v(() => (at.ensure(), Oe(() => this.#l(n)))), this.#f > 0 ? this.#p() : (nn(
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
    return this.#e && (this.#u = mt(), this.#t.before(this.#u), t = this.#u), t;
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
    var n = ce, r = de, o = me;
    tt(this.#i), Re(this.#i), Cn(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return na(i), null;
    } finally {
      tt(n), Re(r), Cn(o);
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
    ), Na(this.#o, this.#c)), this.#s === null && (this.#s = Oe(() => t(this.#t)));
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
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#s && nn(this.#s, () => {
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
    this.#y(t), this.#d += t, this.#h && Pn(this.#h, this.#d);
  }
  get_effect_pending() {
    return this.#_(), c(
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
    this.#o && (Se(this.#o), this.#o = null), this.#s && (Se(this.#s), this.#s = null), this.#a && (Se(this.#a), this.#a = null);
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Ac();
        return;
      }
      o = !0, i && hc(), at.ensure(), this.#d = 0, this.#a !== null && nn(this.#a, () => {
        this.#a = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#v(() => (this.#g = !1, Oe(() => this.#l(this.#t)))), this.#f > 0 ? this.#p() : this.#e = !1;
    };
    var a = de;
    try {
      Re(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Nn(l, this.#i && this.#i.parent);
    } finally {
      Re(a);
    }
    r && Gt(() => {
      this.#a = this.#v(() => {
        at.ensure(), this.#g = !0;
        try {
          return Oe(() => {
            r(
              this.#t,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Nn(
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
function aa(e, t, n, r) {
  const o = cr() ? ur : gi;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = ve, s = (
    /** @type {Effect} */
    ce
  ), a = Fc();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ Kc(u))).then((u) => {
      a();
      try {
        r([...t.map(o), ...u]);
      } catch (d) {
        (s.f & Tt) === 0 && Nn(d, s);
      }
      i?.deactivate(), Kr();
    }).catch((u) => {
      Nn(u, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Kr();
    }
  }) : l();
}
function Fc() {
  var e = ce, t = de, n = me, r = ve;
  return function(i = !0) {
    tt(e), Re(t), Cn(n), i && r?.activate();
  };
}
function Kr() {
  tt(null), Re(null), Cn(null);
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
  var t = Ne | We, n = de !== null && (de.f & Ne) !== 0 ? (
    /** @type {Derived} */
    de
  ) : null;
  return ce !== null && (ce.f |= gn), {
    ctx: me,
    deps: null,
    effects: null,
    equals: Js,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ce
    ),
    wv: 0,
    parent: n ?? ce,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Kc(e, t) {
  let n = (
    /** @type {Effect | null} */
    ce
  );
  n === null && oc();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Xt(
    /** @type {V} */
    Ce
  ), s = !de, a = /* @__PURE__ */ new Map();
  return eu(() => {
    var l = Ys();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === ve && u.committed && u.deactivate(), Kr();
      });
    } catch (f) {
      l.reject(f), Kr();
    }
    var u = (
      /** @type {Batch} */
      ve
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(bn), a.delete(u), a.set(u, l);
    }
    const h = (f, g = void 0) => {
      if (u.activate(), g)
        g !== bn && (i.f |= Ft, Pn(i, g));
      else {
        (i.f & Ft) !== 0 && (i.f ^= Ft), Pn(i, f);
        for (const [v, p] of a) {
          if (a.delete(v), v === u) break;
          p.reject(bn);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), go(() => {
    for (const l of a.values())
      l.reject(bn);
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
function _(e) {
  const t = /* @__PURE__ */ ur(e);
  return Pa(t), t;
}
// @__NO_SIDE_EFFECTS__
function gi(e) {
  const t = /* @__PURE__ */ ur(e);
  return t.equals = $s, t;
}
function la(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Se(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Yc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ne) === 0)
      return (t.f & Tt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function vi(e) {
  var t, n = ce;
  tt(Yc(e));
  try {
    e.f &= ~an, la(e), t = Ta(e);
  } finally {
    tt(n);
  }
  return t;
}
function ca(e) {
  var t = vi(e);
  if (e.equals(t) || (ve?.is_fork || (e.v = t), e.wv = Aa()), !vn)
    if ($e !== null)
      (Qn() || ve?.is_fork) && $e.set(e, t);
    else {
      var n = (e.f & ct) === 0 ? _t : Pe;
      Me(e, n);
    }
}
let Yo = /* @__PURE__ */ new Set();
const Kt = /* @__PURE__ */ new Map();
let ua = !1;
function Xt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Js,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function se(e, t) {
  const n = Xt(e);
  return Pa(n), n;
}
// @__NO_SIDE_EFFECTS__
function Xc(e, t = !1, n = !0) {
  const r = Xt(e);
  return t || (r.equals = $s), Rn && n && me !== null && me.l !== null && (me.l.s ??= []).push(r), r;
}
function R(e, t, n = !1) {
  de !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!vt || (de.f & Vi) !== 0) && cr() && (de.f & (Ne | kt | ci | Vi)) !== 0 && !Dt?.includes(e) && fc();
  let r = n ? gt(t) : t;
  return Pn(e, r);
}
function Pn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    vn ? Kt.set(e, t) : Kt.set(e, n), e.v = t;
    var r = at.ensure();
    r.capture(e, n), (e.f & Ne) !== 0 && ((e.f & We) !== 0 && vi(
      /** @type {Derived} */
      e
    ), Me(e, (e.f & ct) !== 0 ? Pe : _t)), e.wv = Aa(), da(e, We), cr() && ce !== null && (ce.f & Pe) !== 0 && (ce.f & (Rt | qt)) === 0 && (Je === null ? nu([e]) : Je.push(e)), !r.is_fork && Yo.size > 0 && !ua && Zc();
  }
  return t;
}
function Zc() {
  ua = !1;
  var e = rn;
  Yr(!0);
  const t = Array.from(Yo);
  try {
    for (const n of t)
      (n.f & Pe) !== 0 && Me(n, _t), hr(n) && er(n);
  } finally {
    Yr(e);
  }
  Yo.clear();
}
function Fi(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return R(e, n), r;
}
function jn(e) {
  R(e, e.v + 1);
}
function da(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = cr(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === ce)) {
        var l = (a & We) === 0;
        if (l && Me(s, t), (a & Ne) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          $e?.delete(u), (a & an) === 0 && (a & ct && (s.f |= an), da(u, _t));
        } else l && ((a & kt) !== 0 && Ct !== null && Ct.add(
          /** @type {Effect} */
          s
        ), ln(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function gt(e) {
  if (typeof e != "object" || e === null || pt in e)
    return e;
  const t = lo(e);
  if (t !== Ks && t !== tc)
    return e;
  var n = /* @__PURE__ */ new Map(), r = so(e), o = /* @__PURE__ */ se(0), i = on, s = (a) => {
    if (on === i)
      return a();
    var l = de, u = on;
    Re(null), Zi(i);
    var d = a();
    return Re(l), Zi(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ se(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && uc();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ se(u.value);
          return n.set(l, h), h;
        }) : R(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ se(Ce));
            n.set(l, d), jn(o);
          }
        } else
          R(u, Ce), jn(o);
        return !0;
      },
      get(a, l, u) {
        if (l === pt)
          return e;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || Bt(a, l)?.writable) && (d = s(() => {
          var g = gt(h ? a[l] : Ce), v = /* @__PURE__ */ se(g);
          return v;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === Ce ? void 0 : f;
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
          if (h !== void 0 && f !== Ce)
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
        if (l === pt)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Ce || Reflect.has(a, l);
        if (u !== void 0 || ce !== null && (!d || Bt(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? gt(a[l]) : Ce, g = /* @__PURE__ */ se(f);
            return g;
          }), n.set(l, u));
          var h = c(u);
          if (h === Ce)
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
            v !== void 0 ? R(v, Ce) : g in a && (v = s(() => /* @__PURE__ */ se(Ce)), n.set(g + "", v));
          }
        if (h === void 0)
          (!f || Bt(a, l)?.writable) && (h = s(() => /* @__PURE__ */ se(void 0)), R(h, gt(u)), n.set(l, h));
        else {
          f = h.v !== Ce;
          var p = s(() => gt(u));
          R(h, p);
        }
        var m = Reflect.getOwnPropertyDescriptor(a, l);
        if (m?.set && m.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= w.v && R(w, x + 1);
          }
          jn(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Ce;
        });
        for (var [u, d] of n)
          d.v !== Ce && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        dc();
      }
    }
  );
}
function Ki(e) {
  try {
    if (e !== null && typeof e == "object" && pt in e)
      return e[pt];
  } catch {
  }
  return e;
}
function Wc(e, t) {
  return Object.is(Ki(e), Ki(t));
}
var Ie, fa, ha, ga;
function qc() {
  if (Ie === void 0) {
    Ie = window, fa = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ha = Bt(t, "firstChild").get, ga = Bt(t, "nextSibling").get, Hi(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Hi(n) && (n.__t = void 0);
  }
}
function mt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  return (
    /** @type {TemplateNode | null} */
    ha.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function dr(e) {
  return (
    /** @type {TemplateNode | null} */
    ga.call(e)
  );
}
function Z(e, t) {
  return /* @__PURE__ */ Xe(e);
}
function $(e, t = !1) {
  {
    var n = /* @__PURE__ */ Xe(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ dr(n) : n;
  }
}
function j(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ dr(r);
  return r;
}
function Gc(e) {
  e.textContent = "";
}
function va() {
  return !1;
}
function Uc(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Gt(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Yi = !1;
function jc() {
  Yi || (Yi = !0, document.addEventListener(
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
function Ln(e) {
  var t = de, n = ce;
  Re(null), tt(null);
  try {
    return e();
  } finally {
    Re(t), tt(n);
  }
}
function Jc(e, t, n, r = n) {
  e.addEventListener(t, () => Ln(n));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), r(!0);
  } : e.__on_r = () => r(!0), jc();
}
function pa(e) {
  ce === null && (de === null && ac(), sc()), vn && ic();
}
function Qc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function nt(e, t, n) {
  var r = ce;
  r !== null && (r.f & Ze) !== 0 && (e |= Ze);
  var o = {
    ctx: me,
    deps: null,
    nodes: null,
    f: e | We | ct,
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
      er(o), o.f |= fo;
    } catch (a) {
      throw Se(o), a;
    }
  else t !== null && ln(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & gn) === 0 && (i = i.first, (e & kt) !== 0 && (e & wt) !== 0 && i !== null && (i.f |= wt)), i !== null && (i.parent = r, r !== null && Qc(i, r), de !== null && (de.f & Ne) !== 0 && (e & qt) === 0)) {
    var s = (
      /** @type {Derived} */
      de
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Qn() {
  return de !== null && !vt;
}
function go(e) {
  const t = nt(co, null, !1);
  return Me(t, Pe), t.teardown = e, t;
}
function Ve(e) {
  pa();
  var t = (
    /** @type {Effect} */
    ce.f
  ), n = !de && (t & Rt) !== 0 && (t & fo) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      me
    );
    (r.e ??= []).push(e);
  } else
    return ma(e);
}
function ma(e) {
  return nt(li | Ws, e, !1);
}
function ya(e) {
  return pa(), nt(co | Ws, e, !0);
}
function _a(e) {
  at.ensure();
  const t = nt(qt | gn, e, !0);
  return () => {
    Se(t);
  };
}
function $c(e) {
  at.ensure();
  const t = nt(qt | gn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? nn(t, () => {
      Se(t), r(void 0);
    }) : (Se(t), r(void 0));
  });
}
function Hn(e) {
  return nt(li, e, !1);
}
function eu(e) {
  return nt(ci | gn, e, !0);
}
function fr(e, t = 0) {
  return nt(co | t, e, !0);
}
function ue(e, t = [], n = [], r = []) {
  aa(r, t, n, (o) => {
    nt(co, () => e(...o.map(c)), !0);
  });
}
function Vn(e, t = 0) {
  var n = nt(kt | t, e, !0);
  return n;
}
function wa(e, t = 0) {
  var n = nt(Xs | t, e, !0);
  return n;
}
function Oe(e) {
  return nt(Rt | gn, e, !0);
}
function ba(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = vn, r = de;
    Xi(!0), Re(null);
    try {
      t.call(null);
    } finally {
      Xi(n), Re(r);
    }
  }
}
function xa(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Ln(() => {
      o.abort(bn);
    });
    var r = n.next;
    (n.f & qt) !== 0 ? n.parent = null : Se(n, t), n = r;
  }
}
function tu(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Rt) === 0 && Se(t), t = n;
  }
}
function Se(e, t = !0) {
  var n = !1;
  (t || (e.f & Zs) !== 0) && e.nodes !== null && e.nodes.end !== null && (ka(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), xa(e, t && !n), Xr(e, 0), Me(e, Tt);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  ba(e);
  var o = e.parent;
  o !== null && o.first !== null && Ea(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function ka(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ dr(e);
    e.remove(), e = n;
  }
}
function Ea(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function nn(e, t, n = !0) {
  var r = [];
  Sa(e, r, !0);
  var o = () => {
    n && Se(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var s = () => --i || o();
    for (var a of r)
      a.out(s);
  } else
    o();
}
function Sa(e, t, n) {
  if ((e.f & Ze) === 0) {
    e.f ^= Ze;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var o = e.first; o !== null; ) {
      var i = o.next, s = (o.f & wt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & Rt) !== 0 && (e.f & kt) !== 0;
      Sa(o, t, s ? n : !1), o = i;
    }
  }
}
function pi(e) {
  Ca(e, !0);
}
function Ca(e, t) {
  if ((e.f & Ze) !== 0) {
    e.f ^= Ze, (e.f & Pe) === 0 && (Me(e, We), ln(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & wt) !== 0 || (n.f & Rt) !== 0;
      Ca(n, o ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || t) && s.in();
  }
}
function Na(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var o = n === r ? null : /* @__PURE__ */ dr(n);
      t.append(n), n = o;
    }
}
let rn = !1;
function Yr(e) {
  rn = e;
}
let vn = !1;
function Xi(e) {
  vn = e;
}
let de = null, vt = !1;
function Re(e) {
  de = e;
}
let ce = null;
function tt(e) {
  ce = e;
}
let Dt = null;
function Pa(e) {
  de !== null && (Dt === null ? Dt = [e] : Dt.push(e));
}
let Te = null, Ke = 0, Je = null;
function nu(e) {
  Je = e;
}
let Ma = 1, $n = 0, on = $n;
function Zi(e) {
  on = e;
}
function Aa() {
  return ++Ma;
}
function hr(e) {
  var t = e.f;
  if ((t & We) !== 0)
    return !0;
  if (t & Ne && (e.f &= ~an), (t & _t) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (hr(
          /** @type {Derived} */
          i
        ) && ca(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & ct) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    $e === null && Me(e, Pe);
  }
  return !1;
}
function za(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Dt?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Ne) !== 0 ? za(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Me(i, We) : (i.f & Pe) !== 0 && Me(i, _t), ln(
        /** @type {Effect} */
        i
      ));
    }
}
function Ta(e) {
  var t = Te, n = Ke, r = Je, o = de, i = Dt, s = me, a = vt, l = on, u = e.f;
  Te = /** @type {null | Value[]} */
  null, Ke = 0, Je = null, de = (u & (Rt | qt)) === 0 ? e : null, Dt = null, Cn(e.ctx), vt = !1, on = ++$n, e.ac !== null && (Ln(() => {
    e.ac.abort(bn);
  }), e.ac = null);
  try {
    e.f |= Fo;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps;
    if (Te !== null) {
      var g;
      if (Xr(e, Ke), f !== null && Ke > 0)
        for (f.length = Ke + Te.length, g = 0; g < Te.length; g++)
          f[Ke + g] = Te[g];
      else
        e.deps = f = Te;
      if (Qn() && (e.f & ct) !== 0)
        for (g = Ke; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Ke < f.length && (Xr(e, Ke), f.length = Ke);
    if (cr() && Je !== null && !vt && f !== null && (e.f & (Ne | _t | We)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Je.length; g++)
        za(
          Je[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && ($n++, Je !== null && (r === null ? r = Je : r.push(.../** @type {Source[]} */
    Je))), (e.f & Ft) !== 0 && (e.f ^= Ft), h;
  } catch (v) {
    return na(v);
  } finally {
    e.f ^= Fo, Te = t, Ke = n, Je = r, de = o, Dt = i, Cn(s), vt = a, on = l;
  }
}
function ru(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = $l.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Ne) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Te === null || !Te.includes(t)) && (Me(t, _t), (t.f & ct) !== 0 && (t.f ^= ct, t.f &= ~an), la(
    /** @type {Derived} **/
    t
  ), Xr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Xr(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ru(e, n[r]);
}
function er(e) {
  var t = e.f;
  if ((t & Tt) === 0) {
    Me(e, Pe);
    var n = ce, r = rn;
    ce = e, rn = !0;
    try {
      (t & (kt | Xs)) !== 0 ? tu(e) : xa(e), ba(e);
      var o = Ta(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Ma;
      var i;
    } finally {
      rn = r, ce = n;
    }
  }
}
async function ou() {
  await Promise.resolve(), Rc();
}
function c(e) {
  var t = e.f, n = (t & Ne) !== 0;
  if (de !== null && !vt) {
    var r = ce !== null && (ce.f & Tt) !== 0;
    if (!r && !Dt?.includes(e)) {
      var o = de.deps;
      if ((de.f & Fo) !== 0)
        e.rv < $n && (e.rv = $n, Te === null && o !== null && o[Ke] === e ? Ke++ : Te === null ? Te = [e] : Te.includes(e) || Te.push(e));
      else {
        (de.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [de] : i.includes(de) || i.push(de);
      }
    }
  }
  if (vn) {
    if (Kt.has(e))
      return Kt.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & Pe) === 0 && s.reactions !== null || Ia(s)) && (a = vi(s)), Kt.set(s, a), a;
    }
  } else n && (!$e?.has(e) || ve?.is_fork && !Qn()) && (s = /** @type {Derived} */
  e, hr(s) && ca(s), rn && Qn() && (s.f & ct) === 0 && Da(s));
  if ($e?.has(e))
    return $e.get(e);
  if ((e.f & Ft) !== 0)
    throw e.v;
  return e.v;
}
function Da(e) {
  if (e.deps !== null) {
    e.f ^= ct;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & Ne) !== 0 && (t.f & ct) === 0 && Da(
        /** @type {Derived} */
        t
      );
  }
}
function Ia(e) {
  if (e.v === Ce) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Kt.has(t) || (t.f & Ne) !== 0 && Ia(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ke(e) {
  var t = vt;
  try {
    return vt = !0, e();
  } finally {
    vt = t;
  }
}
const iu = -7169;
function Me(e, t) {
  e.f = e.f & iu | t;
}
function su(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function $t(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (pt in e)
      Xo(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && pt in n && Xo(n);
      }
  }
}
function Xo(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Xo(e[r], t);
      } catch {
      }
    const n = lo(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Fs(n);
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
function au(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const lu = [
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
function cu(e) {
  return lu.includes(e);
}
const uu = {
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
function du(e) {
  return e = e.toLowerCase(), uu[e] ?? e;
}
const fu = ["touchstart", "touchmove"];
function hu(e) {
  return fu.includes(e);
}
const Oa = /* @__PURE__ */ new Set(), Zo = /* @__PURE__ */ new Set();
function mi(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Zn.call(t, i), !i.cancelBubble)
      return Ln(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Gt(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Wo(e, t, n, r = {}) {
  var o = mi(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function cn(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = mi(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && go(() => {
    t.removeEventListener(e, s, i);
  });
}
function pn(e) {
  for (var t = 0; t < e.length; t++)
    Oa.add(e[t]);
  for (var n of Zo)
    n(e);
}
let Wi = null;
function Zn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Wi = e;
  var s = 0, a = Wi === e && e.__root;
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
    ec(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = de, h = ce;
    Re(null), tt(null);
    try {
      for (var f, g = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var p = i["__" + r];
          p != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && p.call(i, e);
        } catch (m) {
          f ? g.push(m) : f = m;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (f) {
        for (let m of g)
          queueMicrotask(() => {
            throw m;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Re(d), tt(h);
    }
  }
}
function yi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Zt(e, t) {
  var n = (
    /** @type {Effect} */
    ce
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  var n = (t & js) !== 0, r = (t & Sc) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    o === void 0 && (o = yi(i ? e : "<!>" + e), n || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ Xe(o)));
    var s = (
      /** @type {TemplateNode} */
      r || fa ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xe(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Zt(a, l);
    } else
      Zt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function gu(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & js) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        yi(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Xe(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Xe(l); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Xe(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Xe(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xe(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Zt(d, h);
    } else
      Zt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function _e(e, t) {
  return /* @__PURE__ */ gu(e, t, "svg");
}
function Rr(e = "") {
  {
    var t = mt(e + "");
    return Zt(t, t), t;
  }
}
function fe() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = mt();
  return e.append(t, n), Zt(t, n), e;
}
function H(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Zr = !0;
function xr(e) {
  Zr = e;
}
function xe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function vu(e, t) {
  return pu(e, t);
}
const yn = /* @__PURE__ */ new Map();
function pu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  qc();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var v = hu(g);
        t.addEventListener(g, Zn, { passive: v });
        var p = yn.get(g);
        p === void 0 ? (document.addEventListener(g, Zn, { passive: v }), yn.set(g, 1)) : yn.set(g, p + 1);
      }
    }
  };
  l(ao(Oa)), Zo.add(l);
  var u = void 0, d = $c(() => {
    var h = n ?? t.appendChild(mt());
    return Vc(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          oe({});
          var g = (
            /** @type {ComponentContext} */
            me
          );
          g.c = i;
        }
        o && (r.$$events = o), Zr = s, u = e(f, r) || {}, Zr = !0, i && ie();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, Zn);
        var g = (
          /** @type {number} */
          yn.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Zn), yn.delete(f)) : yn.set(f, g);
      }
      Zo.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return mu.set(u, d), u;
}
let mu = /* @__PURE__ */ new WeakMap();
class vo {
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
      ve
    );
    if (this.#e.has(t)) {
      var n = (
        /** @type {Key} */
        this.#e.get(t)
      ), r = this.#t.get(n);
      if (r)
        pi(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (Se(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var u = document.createDocumentFragment();
            Na(s, u), u.append(mt()), this.#n.set(i, { effect: s, fragment: u });
          } else
            Se(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), nn(s, a, !1)) : a();
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
      n.includes(r) || (Se(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      ve
    ), o = va();
    if (n && !this.#t.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = mt();
        i.append(s), this.#n.set(t, {
          effect: Oe(() => n(s)),
          fragment: i
        });
      } else
        this.#t.set(
          t,
          Oe(() => n(this.anchor))
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
  var r = new vo(e), o = n ? wt : 0;
  function i(s, a) {
    r.ensure(s, a);
  }
  Vn(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function yu(e, t) {
  fr(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function tr(e, t) {
  return t;
}
function _u(e, t, n) {
  for (var r = [], o = t.length, i, s = t.length, a = 0; a < o; a++) {
    let h = t[a];
    nn(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            qo(ao(i.done)), f.delete(i), f.size === 0 && (e.outrogroups = null);
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
      Gc(d), d.append(u), e.items.clear();
    }
    qo(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function qo(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Se(e[n], t);
}
var qi;
function It(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = (t & Gs) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = u.appendChild(mt());
  }
  var d = null, h = /* @__PURE__ */ gi(() => {
    var w = n();
    return so(w) ? w : w == null ? [] : ao(w);
  }), f, g = !0;
  function v() {
    m.fallback = d, wu(m, f, s, t, r), d !== null && (f.length === 0 ? (d.f & Mt) === 0 ? pi(d) : (d.f ^= Mt, Wn(d, null, s)) : nn(d, () => {
      d = null;
    }));
  }
  var p = Vn(() => {
    f = /** @type {V[]} */
    c(h);
    for (var w = f.length, x = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      ve
    ), b = va(), T = 0; T < w; T += 1) {
      var P = f[T], L = r(P, T), A = g ? null : a.get(L);
      A ? (A.v && Pn(A.v, P), A.i && Pn(A.i, T), b && E.skipped_effects.delete(A.e)) : (A = bu(
        a,
        g ? s : qi ??= mt(),
        P,
        L,
        T,
        o,
        t,
        n
      ), g || (A.e.f |= Mt), a.set(L, A)), x.add(L);
    }
    if (w === 0 && i && !d && (g ? d = Oe(() => i(s)) : (d = Oe(() => i(qi ??= mt())), d.f |= Mt)), !g)
      if (b) {
        for (const [B, W] of a)
          x.has(B) || E.skipped_effects.add(W.e);
        E.oncommit(v), E.ondiscard(() => {
        });
      } else
        v();
    c(h);
  }), m = { effect: p, items: a, outrogroups: null, fallback: d };
  g = !1;
}
function wu(e, t, n, r, o) {
  var i = (r & pc) !== 0, s = t.length, a = e.items, l = e.effect.first, u, d = null, h, f = [], g = [], v, p, m, w;
  if (i)
    for (w = 0; w < s; w += 1)
      v = t[w], p = o(v, w), m = /** @type {EachItem} */
      a.get(p).e, (m.f & Mt) === 0 && (m.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(m));
  for (w = 0; w < s; w += 1) {
    if (v = t[w], p = o(v, w), m = /** @type {EachItem} */
    a.get(p).e, e.outrogroups !== null)
      for (const W of e.outrogroups)
        W.pending.delete(m), W.done.delete(m);
    if ((m.f & Mt) !== 0)
      if (m.f ^= Mt, m === l)
        Wn(m, null, n);
      else {
        var x = d ? d.next : l;
        m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), Lt(e, d, m), Lt(e, m, x), Wn(m, x, n), d = m, f = [], g = [], l = d.next;
        continue;
      }
    if ((m.f & Ze) !== 0 && (pi(m), i && (m.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(m))), m !== l) {
      if (u !== void 0 && u.has(m)) {
        if (f.length < g.length) {
          var E = g[0], b;
          d = E.prev;
          var T = f[0], P = f[f.length - 1];
          for (b = 0; b < f.length; b += 1)
            Wn(f[b], E, n);
          for (b = 0; b < g.length; b += 1)
            u.delete(g[b]);
          Lt(e, T.prev, P.next), Lt(e, d, T), Lt(e, P, E), l = E, d = P, w -= 1, f = [], g = [];
        } else
          u.delete(m), Wn(m, l, n), Lt(e, m.prev, m.next), Lt(e, m, d === null ? e.effect.first : d.next), Lt(e, d, m), d = m;
        continue;
      }
      for (f = [], g = []; l !== null && l !== m; )
        (u ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = l.next;
      if (l === null)
        continue;
    }
    (m.f & Mt) === 0 && f.push(m), d = m, l = m.next;
  }
  if (e.outrogroups !== null) {
    for (const W of e.outrogroups)
      W.pending.size === 0 && (qo(ao(W.done)), e.outrogroups?.delete(W));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || u !== void 0) {
    var L = [];
    if (u !== void 0)
      for (m of u)
        (m.f & Ze) === 0 && L.push(m);
    for (; l !== null; )
      (l.f & Ze) === 0 && l !== e.fallback && L.push(l), l = l.next;
    var A = L.length;
    if (A > 0) {
      var B = (r & Gs) !== 0 && s === 0 ? n : null;
      if (i) {
        for (w = 0; w < A; w += 1)
          L[w].nodes?.a?.measure();
        for (w = 0; w < A; w += 1)
          L[w].nodes?.a?.fix();
      }
      _u(e, L, B);
    }
  }
  i && Gt(() => {
    if (h !== void 0)
      for (m of h)
        m.nodes?.a?.apply();
  });
}
function bu(e, t, n, r, o, i, s, a) {
  var l = (s & gc) !== 0 ? (s & mc) === 0 ? /* @__PURE__ */ Xc(n, !1, !1) : Xt(n) : null, u = (s & vc) !== 0 ? Xt(o) : null;
  return {
    v: l,
    i: u,
    e: Oe(() => (i(t, l ?? n, u ?? o, a), () => {
      e.delete(r);
    }))
  };
}
function Wn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, o = e.nodes.end, i = t && (t.f & Mt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ dr(r)
      );
      if (i.before(r), r === o)
        return;
      r = s;
    }
}
function Lt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ra(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  ue(() => {
    var a = (
      /** @type {Effect} */
      ce
    );
    if (s !== (s = t() ?? "") && (a.nodes !== null && (ka(
      a.nodes.start,
      /** @type {TemplateNode} */
      a.nodes.end
    ), a.nodes = null), s !== "")) {
      var l = s + "";
      n ? l = `<svg>${l}</svg>` : r && (l = `<math>${l}</math>`);
      var u = yi(l);
      if ((n || r) && (u = /** @type {Element} */
      /* @__PURE__ */ Xe(u)), Zt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xe(u),
        /** @type {TemplateNode} */
        u.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Xe(u); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Xe(u)
          );
      else
        i.before(u);
    }
  });
}
function rt(e, t, n, r, o) {
  var i = t.$$slots?.[n], s = !1;
  i === !0 && (i = t.children, s = !0), i === void 0 || i(e, s ? () => r : r);
}
function He(e, t, ...n) {
  var r = new vo(e);
  Vn(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, wt);
}
function gr(e, t, n) {
  var r = new vo(e);
  Vn(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, wt);
}
const xu = () => performance.now(), Nt = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => xu(),
  tasks: /* @__PURE__ */ new Set()
};
function La() {
  const e = Nt.now();
  Nt.tasks.forEach((t) => {
    t.c(e) || (Nt.tasks.delete(t), t.f());
  }), Nt.tasks.size !== 0 && Nt.tick(La);
}
function ku(e) {
  let t;
  return Nt.tasks.size === 0 && Nt.tick(La), {
    promise: new Promise((n) => {
      Nt.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      Nt.tasks.delete(t);
    }
  };
}
function kr(e, t) {
  Ln(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function Eu(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Gi(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [o, i] = r.split(":");
    if (!o || i === void 0) break;
    const s = Eu(o.trim());
    t[s] = i.trim();
  }
  return t;
}
const Su = (e) => e;
function Er(e, t, n, r) {
  var o = (e & xc) !== 0, i = (e & kc) !== 0, s = o && i, a = (e & Ec) !== 0, l = s ? "both" : o ? "in" : "out", u, d = t.inert, h = t.style.overflow, f, g;
  function v() {
    return Ln(() => u ??= n()(t, r?.() ?? /** @type {P} */
    {}, {
      direction: l
    }));
  }
  var p = {
    is_global: a,
    in() {
      if (t.inert = d, !o) {
        g?.abort(), g?.reset?.();
        return;
      }
      i || f?.abort(), kr(t, "introstart"), f = Go(t, v(), g, 1, () => {
        kr(t, "introend"), f?.abort(), f = u = void 0, t.style.overflow = h;
      });
    },
    out(E) {
      if (!i) {
        E?.(), u = void 0;
        return;
      }
      t.inert = !0, kr(t, "outrostart"), g = Go(t, v(), f, 0, () => {
        kr(t, "outroend"), E?.();
      });
    },
    stop: () => {
      f?.abort(), g?.abort();
    }
  }, m = (
    /** @type {Effect & { nodes: EffectNodes }} */
    ce
  );
  if ((m.nodes.t ??= []).push(p), o && Zr) {
    var w = a;
    if (!w) {
      for (var x = (
        /** @type {Effect | null} */
        m.parent
      ); x && (x.f & wt) !== 0; )
        for (; (x = x.parent) && (x.f & kt) === 0; )
          ;
      w = !x || (x.f & fo) !== 0;
    }
    w && Hn(() => {
      ke(() => p.in());
    });
  }
}
function Go(e, t, n, r, o) {
  var i = r === 1;
  if (wn(t)) {
    var s, a = !1;
    return Gt(() => {
      if (!a) {
        var m = t({ direction: i ? "in" : "out" });
        s = Go(e, m, n, r, o);
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
      abort: Ye,
      deactivate: Ye,
      reset: Ye,
      t: () => r
    };
  const { delay: l = 0, css: u, tick: d, easing: h = Su } = t;
  var f = [];
  if (i && n === void 0 && (d && d(0, 1), u)) {
    var g = Gi(u(0, 1));
    f.push(g, g);
  }
  var v = () => 1 - r, p = e.animate(f, { duration: l, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var m = n?.t() ?? 1 - r;
    n?.abort();
    var w = r - m, x = (
      /** @type {number} */
      t.duration * Math.abs(w)
    ), E = [];
    if (x > 0) {
      var b = !1;
      if (u)
        for (var T = Math.ceil(x / 16.666666666666668), P = 0; P <= T; P += 1) {
          var L = m + w * h(P / T), A = Gi(u(L, 1 - L));
          E.push(A), b ||= A.overflow === "hidden";
        }
      b && (e.style.overflow = "hidden"), v = () => {
        var B = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return m + w * h(B / x);
      }, d && ku(() => {
        if (p.playState !== "running") return !1;
        var B = v();
        return d(B, 1 - B), !0;
      });
    }
    p = e.animate(E, { duration: x, fill: "forwards" }), p.onfinish = () => {
      v = () => r, d?.(r, 1 - r), o();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = Ye);
    },
    deactivate: () => {
      o = Ye;
    },
    reset: () => {
      r === 0 && d?.(1, 0);
    },
    t: () => v()
  };
}
function Cu(e, t, n, r, o, i) {
  var s = null, a = (
    /** @type {TemplateNode} */
    e
  ), l = new vo(a, !1);
  Vn(() => {
    const u = t() || null;
    var d = Nc;
    if (u === null) {
      l.ensure(null, null), xr(!0);
      return;
    }
    return l.ensure(u, (h) => {
      if (u) {
        if (s = document.createElementNS(d, u), Zt(s, s), r) {
          var f = s.appendChild(mt());
          r(s, f);
        }
        ce.nodes.end = s, h.before(s);
      }
    }), xr(!0), () => {
      u && xr(!1);
    };
  }, wt), go(() => {
    xr(!0);
  });
}
function ze(e, t, n) {
  Hn(() => {
    var r = ke(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      fr(() => {
        var s = n();
        $t(s), o && Qs(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Nu(e, t) {
  var n = void 0, r;
  wa(() => {
    n !== (n = t()) && (r && (Se(r), r = null), n && (r = Oe(() => {
      Hn(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Ha(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ha(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Pu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ha(e)) && (r && (r += " "), r += t);
  return r;
}
function Ut(e) {
  return typeof e == "object" ? Pu(e) : e ?? "";
}
const Ui = [...` 	
\r\f \v\uFEFF`];
function Mu(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Ui.includes(r[s - 1])) && (a === r.length || Ui.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function ji(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Co(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Au(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Co)), o && l.push(...Object.keys(o).map(Co));
      var u = 0, d = -1;
      const p = e.length;
      for (var h = 0; h < p; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === p - 1) {
            if (d !== -1) {
              var g = Co(e.substring(u, d).trim());
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
    return r && (n += ji(r)), o && (n += ji(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function De(e, t, n, r, o, i) {
  var s = e.__className;
  if (s !== n || s === void 0) {
    var a = Mu(n, r, i);
    a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function No(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Be(e, t, n, r) {
  var o = e.__style;
  if (o !== t) {
    var i = Au(t, r);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else r && (Array.isArray(r) ? (No(e, n?.[0], r[0]), No(e, n?.[1], r[1], "important")) : No(e, n, r));
  return r;
}
function Uo(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!so(t))
      return Mc();
    for (var r of e.options)
      r.selected = t.includes(Ji(r));
    return;
  }
  for (r of e.options) {
    var o = Ji(r);
    if (Wc(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function zu(e) {
  var t = new MutationObserver(() => {
    Uo(e, e.__value);
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
  }), go(() => {
    t.disconnect();
  });
}
function Ji(e) {
  return "__value" in e ? e.__value : e.value;
}
const Ht = /* @__PURE__ */ Symbol("class"), Pt = /* @__PURE__ */ Symbol("style"), Va = /* @__PURE__ */ Symbol("is custom element"), Ba = /* @__PURE__ */ Symbol("is html");
function Tu(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function re(e, t, n, r) {
  var o = Fa(e);
  o[t] !== (o[t] = n) && (t === "loading" && (e[rc] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ka(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Du(e, t, n, r, o = !1, i = !1) {
  var s = Fa(e), a = s[Va], l = !s[Ba], u = t || {}, d = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = Ut(n.class) : (r || n[Ht]) && (n.class = null), n[Pt] && (n.style ??= null);
  var f = Ka(e);
  for (const b in n) {
    let T = n[b];
    if (d && b === "value" && T == null) {
      e.value = e.__value = "", u[b] = T;
      continue;
    }
    if (b === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      De(e, g, T, r, t?.[Ht], n[Ht]), u[b] = T, u[Ht] = n[Ht];
      continue;
    }
    if (b === "style") {
      Be(e, T, t?.[Pt], n[Pt]), u[b] = T, u[Pt] = n[Pt];
      continue;
    }
    var v = u[b];
    if (!(T === v && !(T === void 0 && e.hasAttribute(b)))) {
      u[b] = T;
      var p = b[0] + b[1];
      if (p !== "$$")
        if (p === "on") {
          const P = {}, L = "$$" + b;
          let A = b.slice(2);
          var m = cu(A);
          if (au(A) && (A = A.slice(0, -7), P.capture = !0), !m && v) {
            if (T != null) continue;
            e.removeEventListener(A, u[L], P), u[L] = null;
          }
          if (T != null)
            if (m)
              e[`__${A}`] = T, pn([A]);
            else {
              let B = function(W) {
                u[b].call(this, W);
              };
              var E = B;
              u[L] = mi(A, e, B, P);
            }
          else m && (e[`__${A}`] = void 0);
        } else if (b === "style")
          re(e, b, T);
        else if (b === "autofocus")
          Uc(
            /** @type {HTMLElement} */
            e,
            !!T
          );
        else if (!a && (b === "__value" || b === "value" && T != null))
          e.value = e.__value = T;
        else if (b === "selected" && d)
          Tu(
            /** @type {HTMLOptionElement} */
            e,
            T
          );
        else {
          var w = b;
          l || (w = du(w));
          var x = w === "defaultValue" || w === "defaultChecked";
          if (T == null && !a && !x)
            if (s[b] = null, w === "value" || w === "checked") {
              let P = (
                /** @type {HTMLInputElement} */
                e
              );
              const L = t === void 0;
              if (w === "value") {
                let A = P.defaultValue;
                P.removeAttribute(w), P.defaultValue = A, P.value = P.__value = L ? A : null;
              } else {
                let A = P.defaultChecked;
                P.removeAttribute(w), P.defaultChecked = A, P.checked = L ? A : !1;
              }
            } else
              e.removeAttribute(b);
          else x || f.includes(w) && (a || typeof T != "string") ? (e[w] = T, w in s && (s[w] = Ce)) : typeof T != "function" && re(e, w, T);
        }
    }
  }
  return u;
}
function bt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  aa(o, n, r, (l) => {
    var u = void 0, d = {}, h = e.nodeName === "SELECT", f = !1;
    if (wa(() => {
      var v = t(...l.map(c)), p = Du(
        e,
        u,
        v,
        i,
        s,
        a
      );
      f && h && "value" in v && Uo(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let w of Object.getOwnPropertySymbols(d))
        v[w] || Se(d[w]);
      for (let w of Object.getOwnPropertySymbols(v)) {
        var m = v[w];
        w.description === Pc && (!u || m !== u[w]) && (d[w] && Se(d[w]), d[w] = Oe(() => Nu(e, () => m))), p[w] = m;
      }
      u = p;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      Hn(() => {
        Uo(
          g,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), zu(g);
      });
    }
    f = !0;
  });
}
function Fa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Va]: e.nodeName.includes("-"),
      [Ba]: e.namespaceURI === Cc
    }
  );
}
var Qi = /* @__PURE__ */ new Map();
function Ka(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Qi.get(t);
  if (n) return n;
  Qi.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Fs(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = lo(o);
  }
  return n;
}
function Iu(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Jc(e, "input", async (o) => {
    var i = o ? e.defaultValue : e.value;
    if (i = Po(e) ? Mo(i) : i, n(i), ve !== null && r.add(ve), await ou(), i !== (i = t())) {
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
  ke(t) == null && e.value && (n(Po(e) ? Mo(e.value) : e.value), ve !== null && r.add(ve)), fr(() => {
    var o = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Or ?? ve
      );
      if (r.has(i))
        return;
    }
    Po(e) && o === Mo(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function Po(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Mo(e) {
  return e === "" ? null : +e;
}
class _i {
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
          _i.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Ou = /* @__PURE__ */ new _i({
  box: "border-box"
});
function Wr(e, t, n) {
  var r = Ou.observe(e, () => n(e[t]));
  Hn(() => (ke(() => n(e[t])), r));
}
function $i(e, t) {
  return e === t || e?.[pt] === t;
}
function Bn(e = {}, t, n, r) {
  return Hn(() => {
    var o, i;
    return fr(() => {
      o = i, i = [], ke(() => {
        e !== n(...i) && (t(e, ...i), o && $i(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Gt(() => {
        i && $i(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ya(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    me
  ), n = t.l.u;
  if (!n) return;
  let r = () => $t(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ ur(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && ya(() => {
    es(t, r), Bo(n.b);
  }), Ve(() => {
    const o = ke(() => n.m.map(nc));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ve(() => {
    es(t, r), Bo(n.a);
  });
}
function es(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let Sr = !1;
function Ru(e) {
  var t = Sr;
  try {
    return Sr = !1, [e(), Sr];
  } finally {
    Sr = t;
  }
}
const Lu = {
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
function jt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Lu
  );
}
const Hu = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = ce;
      try {
        tt(e.parent_effect), e.special[t] = V(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Us
        );
      } finally {
        tt(r);
      }
    }
    return e.special[t](n), Fi(e.version), !0;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  deleteProperty(e, t) {
    return e.exclude.includes(t) || (e.exclude.push(t), Fi(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function qe(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Xt(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        ce
      )
    },
    Hu
  );
}
const Vu = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (wn(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      wn(o) && (o = o());
      const i = Bt(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (wn(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Bt(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === pt || t === qs) return !1;
    for (let n of e.props)
      if (wn(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (wn(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function we(...e) {
  return new Proxy({ props: e }, Vu);
}
function V(e, t, n, r) {
  var o = !Rn || (n & _c) !== 0, i = (n & wc) !== 0, s = (n & bc) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? ke(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = pt in e || qs in e;
    d = Bt(e, t)?.set ?? (h && t in e ? (E) => e[t] = E : void 0);
  }
  var f, g = !1;
  i ? [f, g] = Ru(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && cc(), d(f)));
  var v;
  if (o ? v = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? u() : (l = !0, E);
  } : v = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E !== void 0 && (a = /** @type {V} */
    void 0), E === void 0 ? a : E;
  }, o && (n & Us) === 0)
    return v;
  if (d) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(E, b) {
        return arguments.length > 0 ? ((!o || !b || p || g) && d(b ? v() : E), E) : v();
      })
    );
  }
  var m = !1, w = ((n & yc) !== 0 ? ur : gi)(() => (m = !1, v()));
  i && c(w);
  var x = (
    /** @type {Effect} */
    ce
  );
  return (
    /** @type {() => V} */
    (function(E, b) {
      if (arguments.length > 0) {
        const T = b ? c(w) : o && i ? gt(E) : E;
        return R(w, T), m = !0, a !== void 0 && (a = T), E;
      }
      return vn && m || (x.f & Tt) !== 0 ? w.v : c(w);
    })
  );
}
function Bu(e) {
  me === null && ui(), Rn && me.l !== null ? Fu(me).m.push(e) : Ve(() => {
    const t = ke(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function po(e) {
  me === null && ui(), Bu(() => () => ke(e));
}
function Fu(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const Ku = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Ku);
var Yu = { value: () => {
} };
function mo() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Lr(n);
}
function Lr(e) {
  this._ = e;
}
function Xu(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Lr.prototype = mo.prototype = {
  constructor: Lr,
  on: function(e, t) {
    var n = this._, r = Xu(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Zu(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = ts(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = ts(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Lr(e);
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
function Zu(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function ts(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Yu, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var jo = "http://www.w3.org/1999/xhtml";
const ns = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: jo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function yo(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ns.hasOwnProperty(t) ? { space: ns[t], local: e } : e;
}
function Wu(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === jo && t.documentElement.namespaceURI === jo ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function qu(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Xa(e) {
  var t = yo(e);
  return (t.local ? qu : Wu)(t);
}
function Gu() {
}
function wi(e) {
  return e == null ? Gu : function() {
    return this.querySelector(e);
  };
}
function Uu(e) {
  typeof e != "function" && (e = wi(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Ge(r, this._parents);
}
function ju(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ju() {
  return [];
}
function Za(e) {
  return e == null ? Ju : function() {
    return this.querySelectorAll(e);
  };
}
function Qu(e) {
  return function() {
    return ju(e.apply(this, arguments));
  };
}
function $u(e) {
  typeof e == "function" ? e = Qu(e) : e = Za(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Ge(r, o);
}
function Wa(e) {
  return function() {
    return this.matches(e);
  };
}
function qa(e) {
  return function(t) {
    return t.matches(e);
  };
}
var ed = Array.prototype.find;
function td(e) {
  return function() {
    return ed.call(this.children, e);
  };
}
function nd() {
  return this.firstElementChild;
}
function rd(e) {
  return this.select(e == null ? nd : td(typeof e == "function" ? e : qa(e)));
}
var od = Array.prototype.filter;
function id() {
  return Array.from(this.children);
}
function sd(e) {
  return function() {
    return od.call(this.children, e);
  };
}
function ad(e) {
  return this.selectAll(e == null ? id : sd(typeof e == "function" ? e : qa(e)));
}
function ld(e) {
  typeof e != "function" && (e = Wa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ge(r, this._parents);
}
function Ga(e) {
  return new Array(e.length);
}
function cd() {
  return new Ge(this._enter || this._groups.map(Ga), this._parents);
}
function qr(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
qr.prototype = {
  constructor: qr,
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
function ud(e) {
  return function() {
    return e;
  };
}
function dd(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new qr(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function fd(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new qr(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function hd(e) {
  return e.__data__;
}
function gd(e, t) {
  if (!arguments.length) return Array.from(this, hd);
  var n = t ? fd : dd, r = this._parents, o = this._groups;
  typeof e != "function" && (e = ud(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], f = h.length, g = vd(e.call(d, d && d.__data__, u, r)), v = g.length, p = a[u] = new Array(v), m = s[u] = new Array(v), w = l[u] = new Array(f);
    n(d, h, p, m, w, g, t);
    for (var x = 0, E = 0, b, T; x < v; ++x)
      if (b = p[x]) {
        for (x >= E && (E = x + 1); !(T = m[E]) && ++E < v; ) ;
        b._next = T || null;
      }
  }
  return s = new Ge(s, r), s._enter = a, s._exit = l, s;
}
function vd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function pd() {
  return new Ge(this._exit || this._groups.map(Ga), this._parents);
}
function md(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function yd(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], h = u.length, f = a[l] = new Array(h), g, v = 0; v < h; ++v)
      (g = u[v] || d[v]) && (f[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ge(a, this._parents);
}
function _d() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function wd(e) {
  e || (e = bd);
  function t(h, f) {
    return h && f ? e(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Ge(o, this._parents).order();
}
function bd(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function xd() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function kd() {
  return Array.from(this);
}
function Ed() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Sd() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Cd() {
  return !this.node();
}
function Nd(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Pd(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Md(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ad(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function zd(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Td(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Dd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Id(e, t) {
  var n = yo(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Md : Pd : typeof t == "function" ? n.local ? Dd : Td : n.local ? zd : Ad)(n, t));
}
function Ua(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Od(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Rd(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Ld(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Hd(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Od : typeof t == "function" ? Ld : Rd)(e, t, n ?? "")) : Mn(this.node(), e);
}
function Mn(e, t) {
  return e.style.getPropertyValue(t) || Ua(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Vd(e) {
  return function() {
    delete this[e];
  };
}
function Bd(e, t) {
  return function() {
    this[e] = t;
  };
}
function Fd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Kd(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Vd : typeof t == "function" ? Fd : Bd)(e, t)) : this.node()[e];
}
function ja(e) {
  return e.trim().split(/^|\s+/);
}
function bi(e) {
  return e.classList || new Ja(e);
}
function Ja(e) {
  this._node = e, this._names = ja(e.getAttribute("class") || "");
}
Ja.prototype = {
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
function Qa(e, t) {
  for (var n = bi(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function $a(e, t) {
  for (var n = bi(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Yd(e) {
  return function() {
    Qa(this, e);
  };
}
function Xd(e) {
  return function() {
    $a(this, e);
  };
}
function Zd(e, t) {
  return function() {
    (t.apply(this, arguments) ? Qa : $a)(this, e);
  };
}
function Wd(e, t) {
  var n = ja(e + "");
  if (arguments.length < 2) {
    for (var r = bi(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Zd : t ? Yd : Xd)(n, t));
}
function qd() {
  this.textContent = "";
}
function Gd(e) {
  return function() {
    this.textContent = e;
  };
}
function Ud(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function jd(e) {
  return arguments.length ? this.each(e == null ? qd : (typeof e == "function" ? Ud : Gd)(e)) : this.node().textContent;
}
function Jd() {
  this.innerHTML = "";
}
function Qd(e) {
  return function() {
    this.innerHTML = e;
  };
}
function $d(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function ef(e) {
  return arguments.length ? this.each(e == null ? Jd : (typeof e == "function" ? $d : Qd)(e)) : this.node().innerHTML;
}
function tf() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function nf() {
  return this.each(tf);
}
function rf() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function of() {
  return this.each(rf);
}
function sf(e) {
  var t = typeof e == "function" ? e : Xa(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function af() {
  return null;
}
function lf(e, t) {
  var n = typeof e == "function" ? e : Xa(e), r = t == null ? af : typeof t == "function" ? t : wi(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function cf() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function uf() {
  return this.each(cf);
}
function df() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ff() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function hf(e) {
  return this.select(e ? ff : df);
}
function gf(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function vf(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function pf(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function mf(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function yf(e, t, n) {
  return function() {
    var r = this.__on, o, i = vf(t);
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
function _f(e, t, n) {
  var r = pf(e + ""), o, i = r.length, s;
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
  for (a = t ? yf : mf, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function el(e, t, n) {
  var r = Ua(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function wf(e, t) {
  return function() {
    return el(this, e, t);
  };
}
function bf(e, t) {
  return function() {
    return el(this, e, t.apply(this, arguments));
  };
}
function xf(e, t) {
  return this.each((typeof t == "function" ? bf : wf)(e, t));
}
function* kf() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var tl = [null];
function Ge(e, t) {
  this._groups = e, this._parents = t;
}
function vr() {
  return new Ge([[document.documentElement]], tl);
}
function Ef() {
  return this;
}
Ge.prototype = vr.prototype = {
  constructor: Ge,
  select: Uu,
  selectAll: $u,
  selectChild: rd,
  selectChildren: ad,
  filter: ld,
  data: gd,
  enter: cd,
  exit: pd,
  join: md,
  merge: yd,
  selection: Ef,
  order: _d,
  sort: wd,
  call: xd,
  nodes: kd,
  node: Ed,
  size: Sd,
  empty: Cd,
  each: Nd,
  attr: Id,
  style: Hd,
  property: Kd,
  classed: Wd,
  text: jd,
  html: ef,
  raise: nf,
  lower: of,
  append: sf,
  insert: lf,
  remove: uf,
  clone: hf,
  datum: gf,
  on: _f,
  dispatch: xf,
  [Symbol.iterator]: kf
};
function et(e) {
  return typeof e == "string" ? new Ge([[document.querySelector(e)]], [document.documentElement]) : new Ge([[e]], tl);
}
function Sf(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function it(e, t) {
  if (e = Sf(e), t === void 0 && (t = e.currentTarget), t) {
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
const Cf = { passive: !1 }, nr = { capture: !0, passive: !1 };
function Ao(e) {
  e.stopImmediatePropagation();
}
function kn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function nl(e) {
  var t = e.document.documentElement, n = et(e).on("dragstart.drag", kn, nr);
  "onselectstart" in t ? n.on("selectstart.drag", kn, nr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function rl(e, t) {
  var n = e.document.documentElement, r = et(e).on("dragstart.drag", null);
  t && (r.on("click.drag", kn, nr), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Cr = (e) => () => e;
function Jo(e, {
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
Jo.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Nf(e) {
  return !e.ctrlKey && !e.button;
}
function Pf() {
  return this.parentNode;
}
function Mf(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Af() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function zf() {
  var e = Nf, t = Pf, n = Mf, r = Af, o = {}, i = mo("start", "drag", "end"), s = 0, a, l, u, d, h = 0;
  function f(b) {
    b.on("mousedown.drag", g).filter(r).on("touchstart.drag", m).on("touchmove.drag", w, Cf).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(b, T) {
    if (!(d || !e.call(this, b, T))) {
      var P = E(this, t.call(this, b, T), b, T, "mouse");
      P && (et(b.view).on("mousemove.drag", v, nr).on("mouseup.drag", p, nr), nl(b.view), Ao(b), u = !1, a = b.clientX, l = b.clientY, P("start", b));
    }
  }
  function v(b) {
    if (kn(b), !u) {
      var T = b.clientX - a, P = b.clientY - l;
      u = T * T + P * P > h;
    }
    o.mouse("drag", b);
  }
  function p(b) {
    et(b.view).on("mousemove.drag mouseup.drag", null), rl(b.view, u), kn(b), o.mouse("end", b);
  }
  function m(b, T) {
    if (e.call(this, b, T)) {
      var P = b.changedTouches, L = t.call(this, b, T), A = P.length, B, W;
      for (B = 0; B < A; ++B)
        (W = E(this, L, b, T, P[B].identifier, P[B])) && (Ao(b), W("start", b, P[B]));
    }
  }
  function w(b) {
    var T = b.changedTouches, P = T.length, L, A;
    for (L = 0; L < P; ++L)
      (A = o[T[L].identifier]) && (kn(b), A("drag", b, T[L]));
  }
  function x(b) {
    var T = b.changedTouches, P = T.length, L, A;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), L = 0; L < P; ++L)
      (A = o[T[L].identifier]) && (Ao(b), A("end", b, T[L]));
  }
  function E(b, T, P, L, A, B) {
    var W = i.copy(), z = it(B || P, T), k, M, y;
    if ((y = n.call(b, new Jo("beforestart", {
      sourceEvent: P,
      target: f,
      identifier: A,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: W
    }), L)) != null)
      return k = y.x - z[0] || 0, M = y.y - z[1] || 0, function C(S, D, F) {
        var N = z, O;
        switch (S) {
          case "start":
            o[A] = C, O = s++;
            break;
          case "end":
            delete o[A], --s;
          // falls through
          case "drag":
            z = it(F || D, T), O = s;
            break;
        }
        W.call(
          S,
          b,
          new Jo(S, {
            sourceEvent: D,
            subject: y,
            target: f,
            identifier: A,
            active: O,
            x: z[0] + k,
            y: z[1] + M,
            dx: z[0] - N[0],
            dy: z[1] - N[1],
            dispatch: W
          }),
          L
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Cr(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Cr(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : Cr(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : Cr(!!b), f) : r;
  }, f.on = function() {
    var b = i.on.apply(i, arguments);
    return b === i ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (h = (b = +b) * b, f) : Math.sqrt(h);
  }, f;
}
function xi(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ol(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function pr() {
}
var rr = 0.7, Gr = 1 / rr, En = "\\s*([+-]?\\d+)\\s*", or = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Tf = /^#([0-9a-f]{3,8})$/, Df = new RegExp(`^rgb\\(${En},${En},${En}\\)$`), If = new RegExp(`^rgb\\(${yt},${yt},${yt}\\)$`), Of = new RegExp(`^rgba\\(${En},${En},${En},${or}\\)$`), Rf = new RegExp(`^rgba\\(${yt},${yt},${yt},${or}\\)$`), Lf = new RegExp(`^hsl\\(${or},${yt},${yt}\\)$`), Hf = new RegExp(`^hsla\\(${or},${yt},${yt},${or}\\)$`), rs = {
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
xi(pr, un, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: os,
  // Deprecated! Use color.formatHex.
  formatHex: os,
  formatHex8: Vf,
  formatHsl: Bf,
  formatRgb: is,
  toString: is
});
function os() {
  return this.rgb().formatHex();
}
function Vf() {
  return this.rgb().formatHex8();
}
function Bf() {
  return il(this).formatHsl();
}
function is() {
  return this.rgb().formatRgb();
}
function un(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Tf.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ss(t) : n === 3 ? new Le(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Nr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Nr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Df.exec(e)) ? new Le(t[1], t[2], t[3], 1) : (t = If.exec(e)) ? new Le(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Of.exec(e)) ? Nr(t[1], t[2], t[3], t[4]) : (t = Rf.exec(e)) ? Nr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Lf.exec(e)) ? cs(t[1], t[2] / 100, t[3] / 100, 1) : (t = Hf.exec(e)) ? cs(t[1], t[2] / 100, t[3] / 100, t[4]) : rs.hasOwnProperty(e) ? ss(rs[e]) : e === "transparent" ? new Le(NaN, NaN, NaN, 0) : null;
}
function ss(e) {
  return new Le(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Nr(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Le(e, t, n, r);
}
function Ff(e) {
  return e instanceof pr || (e = un(e)), e ? (e = e.rgb(), new Le(e.r, e.g, e.b, e.opacity)) : new Le();
}
function Qo(e, t, n, r) {
  return arguments.length === 1 ? Ff(e) : new Le(e, t, n, r ?? 1);
}
function Le(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
xi(Le, Qo, ol(pr, {
  brighter(e) {
    return e = e == null ? Gr : Math.pow(Gr, e), new Le(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? rr : Math.pow(rr, e), new Le(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Le(sn(this.r), sn(this.g), sn(this.b), Ur(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: as,
  // Deprecated! Use color.formatHex.
  formatHex: as,
  formatHex8: Kf,
  formatRgb: ls,
  toString: ls
}));
function as() {
  return `#${tn(this.r)}${tn(this.g)}${tn(this.b)}`;
}
function Kf() {
  return `#${tn(this.r)}${tn(this.g)}${tn(this.b)}${tn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ls() {
  const e = Ur(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${sn(this.r)}, ${sn(this.g)}, ${sn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ur(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function sn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function tn(e) {
  return e = sn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function cs(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new st(e, t, n, r);
}
function il(e) {
  if (e instanceof st) return new st(e.h, e.s, e.l, e.opacity);
  if (e instanceof pr || (e = un(e)), !e) return new st();
  if (e instanceof st) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new st(s, a, l, e.opacity);
}
function Yf(e, t, n, r) {
  return arguments.length === 1 ? il(e) : new st(e, t, n, r ?? 1);
}
function st(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
xi(st, Yf, ol(pr, {
  brighter(e) {
    return e = e == null ? Gr : Math.pow(Gr, e), new st(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? rr : Math.pow(rr, e), new st(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Le(
      zo(e >= 240 ? e - 240 : e + 120, o, r),
      zo(e, o, r),
      zo(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new st(us(this.h), Pr(this.s), Pr(this.l), Ur(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ur(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${us(this.h)}, ${Pr(this.s) * 100}%, ${Pr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function us(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Pr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function zo(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ki = (e) => () => e;
function Xf(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Zf(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Wf(e) {
  return (e = +e) == 1 ? sl : function(t, n) {
    return n - t ? Zf(t, n, e) : ki(isNaN(t) ? n : t);
  };
}
function sl(e, t) {
  var n = t - e;
  return n ? Xf(e, n) : ki(isNaN(e) ? t : e);
}
const jr = (function e(t) {
  var n = Wf(t);
  function r(o, i) {
    var s = n((o = Qo(o)).r, (i = Qo(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = sl(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function qf(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Gf(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Uf(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Jn(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function jf(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function ht(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Jf(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Jn(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var $o = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, To = new RegExp($o.source, "g");
function Qf(e) {
  return function() {
    return e;
  };
}
function $f(e) {
  return function(t) {
    return e(t) + "";
  };
}
function al(e, t) {
  var n = $o.lastIndex = To.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = $o.exec(e)) && (o = To.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: ht(r, o) })), n = To.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? $f(l[0].x) : Qf(t) : (t = l.length, function(u) {
    for (var d = 0, h; d < t; ++d) a[(h = l[d]).i] = h.x(u);
    return a.join("");
  });
}
function Jn(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ki(t) : (n === "number" ? ht : n === "string" ? (r = un(t)) ? (t = r, jr) : al : t instanceof un ? jr : t instanceof Date ? jf : Gf(t) ? qf : Array.isArray(t) ? Uf : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Jf : ht)(e, t);
}
var ds = 180 / Math.PI, ei = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ll(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * ds,
    skewX: Math.atan(l) * ds,
    scaleX: s,
    scaleY: a
  };
}
var Mr;
function eh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ei : ll(t.a, t.b, t.c, t.d, t.e, t.f);
}
function th(e) {
  return e == null || (Mr || (Mr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Mr.setAttribute("transform", e), !(e = Mr.transform.baseVal.consolidate())) ? ei : (e = e.matrix, ll(e.a, e.b, e.c, e.d, e.e, e.f));
}
function cl(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, h, f, g, v) {
    if (u !== h || d !== f) {
      var p = g.push("translate(", null, t, null, n);
      v.push({ i: p - 4, x: ht(u, h) }, { i: p - 2, x: ht(d, f) });
    } else (h || f) && g.push("translate(" + h + t + f + n);
  }
  function s(u, d, h, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: ht(u, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(u, d, h, f) {
    u !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: ht(u, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(u, d, h, f, g, v) {
    if (u !== h || d !== f) {
      var p = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: p - 4, x: ht(u, h) }, { i: p - 2, x: ht(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(u, d) {
    var h = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, h, f), s(u.rotate, d.rotate, h, f), a(u.skewX, d.skewX, h, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, h, f), u = d = null, function(g) {
      for (var v = -1, p = f.length, m; ++v < p; ) h[(m = f[v]).i] = m.x(g);
      return h.join("");
    };
  };
}
var nh = cl(eh, "px, ", "px)", "deg)"), rh = cl(th, ", ", ")", ")"), oh = 1e-12;
function fs(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function ih(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function sh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Hr = (function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], h = s[1], f = s[2], g = d - a, v = h - l, p = g * g + v * v, m, w;
    if (p < oh)
      w = Math.log(f / u) / t, m = function(L) {
        return [
          a + L * g,
          l + L * v,
          u * Math.exp(t * L * w)
        ];
      };
    else {
      var x = Math.sqrt(p), E = (f * f - u * u + r * p) / (2 * u * n * x), b = (f * f - u * u - r * p) / (2 * f * n * x), T = Math.log(Math.sqrt(E * E + 1) - E), P = Math.log(Math.sqrt(b * b + 1) - b);
      w = (P - T) / t, m = function(L) {
        var A = L * w, B = fs(T), W = u / (n * x) * (B * sh(t * A + T) - ih(T));
        return [
          a + W * g,
          l + W * v,
          u * B / fs(t * A + T)
        ];
      };
    }
    return m.duration = w * 1e3 * t / Math.SQRT2, m;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
})(Math.SQRT2, 2, 4);
var An = 0, qn = 0, Yn = 0, ul = 1e3, Jr, Gn, Qr = 0, dn = 0, _o = 0, ir = typeof performance == "object" && performance.now ? performance : Date, dl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ei() {
  return dn || (dl(ah), dn = ir.now() + _o);
}
function ah() {
  dn = 0;
}
function $r() {
  this._call = this._time = this._next = null;
}
$r.prototype = fl.prototype = {
  constructor: $r,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ei() : +n) + (t == null ? 0 : +t), !this._next && Gn !== this && (Gn ? Gn._next = this : Jr = this, Gn = this), this._call = e, this._time = n, ti();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ti());
  }
};
function fl(e, t, n) {
  var r = new $r();
  return r.restart(e, t, n), r;
}
function lh() {
  Ei(), ++An;
  for (var e = Jr, t; e; )
    (t = dn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --An;
}
function hs() {
  dn = (Qr = ir.now()) + _o, An = qn = 0;
  try {
    lh();
  } finally {
    An = 0, uh(), dn = 0;
  }
}
function ch() {
  var e = ir.now(), t = e - Qr;
  t > ul && (_o -= t, Qr = e);
}
function uh() {
  for (var e, t = Jr, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Jr = n);
  Gn = e, ti(r);
}
function ti(e) {
  if (!An) {
    qn && (qn = clearTimeout(qn));
    var t = e - dn;
    t > 24 ? (e < 1 / 0 && (qn = setTimeout(hs, e - ir.now() - _o)), Yn && (Yn = clearInterval(Yn))) : (Yn || (Qr = ir.now(), Yn = setInterval(ch, ul)), An = 1, dl(hs));
  }
}
function gs(e, t, n) {
  var r = new $r();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var dh = mo("start", "end", "cancel", "interrupt"), fh = [], hl = 0, vs = 1, ni = 2, Vr = 3, ps = 4, ri = 5, Br = 6;
function wo(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  hh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: dh,
    tween: fh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: hl
  });
}
function Si(e, t) {
  var n = ut(e, t);
  if (n.state > hl) throw new Error("too late; already scheduled");
  return n;
}
function Et(e, t) {
  var n = ut(e, t);
  if (n.state > Vr) throw new Error("too late; already running");
  return n;
}
function ut(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function hh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = fl(i, 0, n.time);
  function i(u) {
    n.state = vs, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, h, f, g;
    if (n.state !== vs) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Vr) return gs(s);
        g.state === ps ? (g.state = Br, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Br, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (gs(function() {
      n.state === Vr && (n.state = ps, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = ni, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ni) {
      for (n.state = Vr, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = ri, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === ri && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Br, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Fr(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > ni && r.state < ri, r.state = Br, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function gh(e) {
  return this.each(function() {
    Fr(this, e);
  });
}
function vh(e, t) {
  var n, r;
  return function() {
    var o = Et(this, e), i = o.tween;
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
function ph(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Et(this, e), s = i.tween;
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
function mh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = ut(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? vh : ph)(n, e, t));
}
function Ci(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Et(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return ut(o, r).value[t];
  };
}
function gl(e, t) {
  var n;
  return (typeof t == "number" ? ht : t instanceof un ? jr : (n = un(t)) ? (t = n, jr) : al)(e, t);
}
function yh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function _h(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function wh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function bh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function xh(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function kh(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Eh(e, t) {
  var n = yo(e), r = n === "transform" ? rh : gl;
  return this.attrTween(e, typeof t == "function" ? (n.local ? kh : xh)(n, r, Ci(this, "attr." + e, t)) : t == null ? (n.local ? _h : yh)(n) : (n.local ? bh : wh)(n, r, t));
}
function Sh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Ch(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Nh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Ch(e, i)), n;
  }
  return o._value = t, o;
}
function Ph(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Sh(e, i)), n;
  }
  return o._value = t, o;
}
function Mh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = yo(e);
  return this.tween(n, (r.local ? Nh : Ph)(r, t));
}
function Ah(e, t) {
  return function() {
    Si(this, e).delay = +t.apply(this, arguments);
  };
}
function zh(e, t) {
  return t = +t, function() {
    Si(this, e).delay = t;
  };
}
function Th(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ah : zh)(t, e)) : ut(this.node(), t).delay;
}
function Dh(e, t) {
  return function() {
    Et(this, e).duration = +t.apply(this, arguments);
  };
}
function Ih(e, t) {
  return t = +t, function() {
    Et(this, e).duration = t;
  };
}
function Oh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Dh : Ih)(t, e)) : ut(this.node(), t).duration;
}
function Rh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Et(this, e).ease = t;
  };
}
function Lh(e) {
  var t = this._id;
  return arguments.length ? this.each(Rh(t, e)) : ut(this.node(), t).ease;
}
function Hh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Et(this, e).ease = n;
  };
}
function Vh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Hh(this._id, e));
}
function Bh(e) {
  typeof e != "function" && (e = Wa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ot(r, this._parents, this._name, this._id);
}
function Fh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || u[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Ot(s, this._parents, this._name, this._id);
}
function Kh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Yh(e, t, n) {
  var r, o, i = Kh(t) ? Si : Et;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Xh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? ut(this.node(), n).on.on(e) : this.each(Yh(n, e, t));
}
function Zh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Wh() {
  return this.on("end.remove", Zh(this._id));
}
function qh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = wi(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[f] = h, wo(u[f], t, n, f, u, ut(d, n)));
  return new Ot(i, this._parents, t, n);
}
function Gh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Za(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, h = 0; h < u; ++h)
      if (d = l[h]) {
        for (var f = e.call(d, d.__data__, h, l), g, v = ut(d, n), p = 0, m = f.length; p < m; ++p)
          (g = f[p]) && wo(g, t, n, p, f, v);
        i.push(f), s.push(d);
      }
  return new Ot(i, s, t, n);
}
var Uh = vr.prototype.constructor;
function jh() {
  return new Uh(this._groups, this._parents);
}
function Jh(e, t) {
  var n, r, o;
  return function() {
    var i = Mn(this, e), s = (this.style.removeProperty(e), Mn(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function vl(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Qh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Mn(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function $h(e, t, n) {
  var r, o, i;
  return function() {
    var s = Mn(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Mn(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function eg(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Et(this, e), u = l.on, d = l.value[i] == null ? a || (a = vl(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function tg(e, t, n) {
  var r = (e += "") == "transform" ? nh : gl;
  return t == null ? this.styleTween(e, Jh(e, r)).on("end.style." + e, vl(e)) : typeof t == "function" ? this.styleTween(e, $h(e, r, Ci(this, "style." + e, t))).each(eg(this._id, e)) : this.styleTween(e, Qh(e, r, t), n).on("end.style." + e, null);
}
function ng(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function rg(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && ng(e, s, n)), r;
  }
  return i._value = t, i;
}
function og(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, rg(e, t, n ?? ""));
}
function ig(e) {
  return function() {
    this.textContent = e;
  };
}
function sg(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function ag(e) {
  return this.tween("text", typeof e == "function" ? sg(Ci(this, "text", e)) : ig(e == null ? "" : e + ""));
}
function lg(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function cg(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && lg(o)), t;
  }
  return r._value = e, r;
}
function ug(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, cg(e));
}
function dg() {
  for (var e = this._name, t = this._id, n = pl(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = ut(l, t);
        wo(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Ot(r, this._parents, e, n);
}
function fg() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Et(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var hg = 0;
function Ot(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function pl() {
  return ++hg;
}
var St = vr.prototype;
Ot.prototype = {
  constructor: Ot,
  select: qh,
  selectAll: Gh,
  selectChild: St.selectChild,
  selectChildren: St.selectChildren,
  filter: Bh,
  merge: Fh,
  selection: jh,
  transition: dg,
  call: St.call,
  nodes: St.nodes,
  node: St.node,
  size: St.size,
  empty: St.empty,
  each: St.each,
  on: Xh,
  attr: Eh,
  attrTween: Mh,
  style: tg,
  styleTween: og,
  text: ag,
  textTween: ug,
  remove: Wh,
  tween: mh,
  delay: Th,
  duration: Oh,
  ease: Lh,
  easeVarying: Vh,
  end: fg,
  [Symbol.iterator]: St[Symbol.iterator]
};
function gg(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var vg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: gg
};
function pg(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function mg(e) {
  var t, n;
  e instanceof Ot ? (t = e._id, e = e._name) : (t = pl(), (n = vg).time = Ei(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && wo(l, e, t, u, s, n || pg(l, t));
  return new Ot(r, this._parents, e, t);
}
vr.prototype.interrupt = gh;
vr.prototype.transition = mg;
const Ar = (e) => () => e;
function yg(e, {
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
function At(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
At.prototype = {
  constructor: At,
  scale: function(e) {
    return e === 1 ? this : new At(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new At(this.k, this.x + this.k * e, this.y + this.k * t);
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
var bo = new At(1, 0, 0);
ml.prototype = At.prototype;
function ml(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return bo;
  return e.__zoom;
}
function Do(e) {
  e.stopImmediatePropagation();
}
function Xn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function _g(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function wg() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function ms() {
  return this.__zoom || bo;
}
function bg(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function xg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function kg(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function yl() {
  var e = _g, t = wg, n = kg, r = bg, o = xg, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Hr, u = mo("start", "zoom", "end"), d, h, f, g = 500, v = 150, p = 0, m = 10;
  function w(y) {
    y.property("__zoom", ms).on("wheel.zoom", A, { passive: !1 }).on("mousedown.zoom", B).on("dblclick.zoom", W).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", M).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(y, C, S, D) {
    var F = y.selection ? y.selection() : y;
    F.property("__zoom", ms), y !== F ? T(y, C, S, D) : F.interrupt().each(function() {
      P(this, arguments).event(D).start().zoom(null, typeof C == "function" ? C.apply(this, arguments) : C).end();
    });
  }, w.scaleBy = function(y, C, S, D) {
    w.scaleTo(y, function() {
      var F = this.__zoom.k, N = typeof C == "function" ? C.apply(this, arguments) : C;
      return F * N;
    }, S, D);
  }, w.scaleTo = function(y, C, S, D) {
    w.transform(y, function() {
      var F = t.apply(this, arguments), N = this.__zoom, O = S == null ? b(F) : typeof S == "function" ? S.apply(this, arguments) : S, I = N.invert(O), X = typeof C == "function" ? C.apply(this, arguments) : C;
      return n(E(x(N, X), O, I), F, s);
    }, S, D);
  }, w.translateBy = function(y, C, S, D) {
    w.transform(y, function() {
      return n(this.__zoom.translate(
        typeof C == "function" ? C.apply(this, arguments) : C,
        typeof S == "function" ? S.apply(this, arguments) : S
      ), t.apply(this, arguments), s);
    }, null, D);
  }, w.translateTo = function(y, C, S, D, F) {
    w.transform(y, function() {
      var N = t.apply(this, arguments), O = this.__zoom, I = D == null ? b(N) : typeof D == "function" ? D.apply(this, arguments) : D;
      return n(bo.translate(I[0], I[1]).scale(O.k).translate(
        typeof C == "function" ? -C.apply(this, arguments) : -C,
        typeof S == "function" ? -S.apply(this, arguments) : -S
      ), N, s);
    }, D, F);
  };
  function x(y, C) {
    return C = Math.max(i[0], Math.min(i[1], C)), C === y.k ? y : new At(C, y.x, y.y);
  }
  function E(y, C, S) {
    var D = C[0] - S[0] * y.k, F = C[1] - S[1] * y.k;
    return D === y.x && F === y.y ? y : new At(y.k, D, F);
  }
  function b(y) {
    return [(+y[0][0] + +y[1][0]) / 2, (+y[0][1] + +y[1][1]) / 2];
  }
  function T(y, C, S, D) {
    y.on("start.zoom", function() {
      P(this, arguments).event(D).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(D).end();
    }).tween("zoom", function() {
      var F = this, N = arguments, O = P(F, N).event(D), I = t.apply(F, N), X = S == null ? b(I) : typeof S == "function" ? S.apply(F, N) : S, Y = Math.max(I[1][0] - I[0][0], I[1][1] - I[0][1]), K = F.__zoom, G = typeof C == "function" ? C.apply(F, N) : C, q = l(K.invert(X).concat(Y / K.k), G.invert(X).concat(Y / G.k));
      return function(J) {
        if (J === 1) J = G;
        else {
          var U = q(J), te = Y / U[2];
          J = new At(te, X[0] - U[0] * te, X[1] - U[1] * te);
        }
        O.zoom(null, J);
      };
    });
  }
  function P(y, C, S) {
    return !S && y.__zooming || new L(y, C);
  }
  function L(y, C) {
    this.that = y, this.args = C, this.active = 0, this.sourceEvent = null, this.extent = t.apply(y, C), this.taps = 0;
  }
  L.prototype = {
    event: function(y) {
      return y && (this.sourceEvent = y), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(y, C) {
      return this.mouse && y !== "mouse" && (this.mouse[1] = C.invert(this.mouse[0])), this.touch0 && y !== "touch" && (this.touch0[1] = C.invert(this.touch0[0])), this.touch1 && y !== "touch" && (this.touch1[1] = C.invert(this.touch1[0])), this.that.__zoom = C, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(y) {
      var C = et(this.that).datum();
      u.call(
        y,
        this.that,
        new yg(y, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: u
        }),
        C
      );
    }
  };
  function A(y, ...C) {
    if (!e.apply(this, arguments)) return;
    var S = P(this, C).event(y), D = this.__zoom, F = Math.max(i[0], Math.min(i[1], D.k * Math.pow(2, r.apply(this, arguments)))), N = it(y);
    if (S.wheel)
      (S.mouse[0][0] !== N[0] || S.mouse[0][1] !== N[1]) && (S.mouse[1] = D.invert(S.mouse[0] = N)), clearTimeout(S.wheel);
    else {
      if (D.k === F) return;
      S.mouse = [N, D.invert(N)], Fr(this), S.start();
    }
    Xn(y), S.wheel = setTimeout(O, v), S.zoom("mouse", n(E(x(D, F), S.mouse[0], S.mouse[1]), S.extent, s));
    function O() {
      S.wheel = null, S.end();
    }
  }
  function B(y, ...C) {
    if (f || !e.apply(this, arguments)) return;
    var S = y.currentTarget, D = P(this, C, !0).event(y), F = et(y.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", Y, !0), N = it(y, S), O = y.clientX, I = y.clientY;
    nl(y.view), Do(y), D.mouse = [N, this.__zoom.invert(N)], Fr(this), D.start();
    function X(K) {
      if (Xn(K), !D.moved) {
        var G = K.clientX - O, q = K.clientY - I;
        D.moved = G * G + q * q > p;
      }
      D.event(K).zoom("mouse", n(E(D.that.__zoom, D.mouse[0] = it(K, S), D.mouse[1]), D.extent, s));
    }
    function Y(K) {
      F.on("mousemove.zoom mouseup.zoom", null), rl(K.view, D.moved), Xn(K), D.event(K).end();
    }
  }
  function W(y, ...C) {
    if (e.apply(this, arguments)) {
      var S = this.__zoom, D = it(y.changedTouches ? y.changedTouches[0] : y, this), F = S.invert(D), N = S.k * (y.shiftKey ? 0.5 : 2), O = n(E(x(S, N), D, F), t.apply(this, C), s);
      Xn(y), a > 0 ? et(this).transition().duration(a).call(T, O, D, y) : et(this).call(w.transform, O, D, y);
    }
  }
  function z(y, ...C) {
    if (e.apply(this, arguments)) {
      var S = y.touches, D = S.length, F = P(this, C, y.changedTouches.length === D).event(y), N, O, I, X;
      for (Do(y), O = 0; O < D; ++O)
        I = S[O], X = it(I, this), X = [X, this.__zoom.invert(X), I.identifier], F.touch0 ? !F.touch1 && F.touch0[2] !== X[2] && (F.touch1 = X, F.taps = 0) : (F.touch0 = X, N = !0, F.taps = 1 + !!d);
      d && (d = clearTimeout(d)), N && (F.taps < 2 && (h = X[0], d = setTimeout(function() {
        d = null;
      }, g)), Fr(this), F.start());
    }
  }
  function k(y, ...C) {
    if (this.__zooming) {
      var S = P(this, C).event(y), D = y.changedTouches, F = D.length, N, O, I, X;
      for (Xn(y), N = 0; N < F; ++N)
        O = D[N], I = it(O, this), S.touch0 && S.touch0[2] === O.identifier ? S.touch0[0] = I : S.touch1 && S.touch1[2] === O.identifier && (S.touch1[0] = I);
      if (O = S.that.__zoom, S.touch1) {
        var Y = S.touch0[0], K = S.touch0[1], G = S.touch1[0], q = S.touch1[1], J = (J = G[0] - Y[0]) * J + (J = G[1] - Y[1]) * J, U = (U = q[0] - K[0]) * U + (U = q[1] - K[1]) * U;
        O = x(O, Math.sqrt(J / U)), I = [(Y[0] + G[0]) / 2, (Y[1] + G[1]) / 2], X = [(K[0] + q[0]) / 2, (K[1] + q[1]) / 2];
      } else if (S.touch0) I = S.touch0[0], X = S.touch0[1];
      else return;
      S.zoom("touch", n(E(O, I, X), S.extent, s));
    }
  }
  function M(y, ...C) {
    if (this.__zooming) {
      var S = P(this, C).event(y), D = y.changedTouches, F = D.length, N, O;
      for (Do(y), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), N = 0; N < F; ++N)
        O = D[N], S.touch0 && S.touch0[2] === O.identifier ? delete S.touch0 : S.touch1 && S.touch1[2] === O.identifier && delete S.touch1;
      if (S.touch1 && !S.touch0 && (S.touch0 = S.touch1, delete S.touch1), S.touch0) S.touch0[1] = this.__zoom.invert(S.touch0[0]);
      else if (S.end(), S.taps === 2 && (O = it(O, this), Math.hypot(h[0] - O[0], h[1] - O[1]) < m)) {
        var I = et(this).on("dblclick.zoom");
        I && I.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Ar(+y), w) : r;
  }, w.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Ar(!!y), w) : e;
  }, w.touchable = function(y) {
    return arguments.length ? (o = typeof y == "function" ? y : Ar(!!y), w) : o;
  }, w.extent = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Ar([[+y[0][0], +y[0][1]], [+y[1][0], +y[1][1]]]), w) : t;
  }, w.scaleExtent = function(y) {
    return arguments.length ? (i[0] = +y[0], i[1] = +y[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(y) {
    return arguments.length ? (s[0][0] = +y[0][0], s[1][0] = +y[1][0], s[0][1] = +y[0][1], s[1][1] = +y[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(y) {
    return arguments.length ? (n = y, w) : n;
  }, w.duration = function(y) {
    return arguments.length ? (a = +y, w) : a;
  }, w.interpolate = function(y) {
    return arguments.length ? (l = y, w) : l;
  }, w.on = function() {
    var y = u.on.apply(u, arguments);
    return y === u ? w : y;
  }, w.clickDistance = function(y) {
    return arguments.length ? (p = (y = +y) * y, w) : Math.sqrt(p);
  }, w.tapDistance = function(y) {
    return arguments.length ? (m = +y, w) : m;
  }, w;
}
const sr = {
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
}, oi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], _l = ["Enter", " ", "Escape"], Eg = {
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
var zn;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(zn || (zn = {}));
var Sn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Sn || (Sn = {}));
var eo;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(eo || (eo = {}));
const ii = {
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
var Vt;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Vt || (Vt = {}));
var to;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(to || (to = {}));
var ne;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ne || (ne = {}));
const ys = {
  [ne.Left]: ne.Right,
  [ne.Right]: ne.Left,
  [ne.Top]: ne.Bottom,
  [ne.Bottom]: ne.Top
};
function Sg(e, t) {
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
function _s(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Cg(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const wl = (e) => "id" in e && "source" in e && "target" in e, Ng = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Ni = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), mr = (e, t = [0, 0]) => {
  const { width: n, height: r } = Jt(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Pg = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Ni(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? no(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return xo(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ko(n);
}, yr = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = xo(n, no(o)), r = !0);
  }), r ? ko(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Pi = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...wr(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = u;
    if (s && !h || f)
      continue;
    const g = d.width ?? u.width ?? u.initialWidth ?? null, v = d.height ?? u.height ?? u.initialHeight ?? null, p = ar(a, Dn(u)), m = (g ?? 0) * (v ?? 0), w = i && p > 0;
    (!u.internals.handleBounds || w || p >= m || u.dragging) && l.push(u);
  }
  return l;
}, Mg = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Ag(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function zg({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Ag(e, s), l = yr(a), u = Mi(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function bl({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", sr.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (h = [
        [l, u],
        [l + g, u + v]
      ]);
    }
  else a && In(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = In(h) ? fn(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", sr.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function Tg({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), v = !g && f.parentId && s.find((p) => p.id === f.parentId);
    (g || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), d = Mg(s, l);
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
const Tn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), fn = (e = { x: 0, y: 0 }, t, n) => ({
  x: Tn(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Tn(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function xl(e, t, n) {
  const { width: r, height: o } = Jt(n), { x: i, y: s } = n.internals.positionAbsolute;
  return fn(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const ws = (e, t, n) => e < t ? Tn(Math.abs(e - t), 1, t) / t : e > n ? -Tn(Math.abs(e - n), 1, t) / t : 0, kl = (e, t, n = 15, r = 40) => {
  const o = ws(e.x, r, t.width - r) * n, i = ws(e.y, r, t.height - r) * n;
  return [o, i];
}, xo = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), si = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), ko = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Dn = (e, t = [0, 0]) => {
  const { x: n, y: r } = Ni(e) ? e.internals.positionAbsolute : mr(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, no = (e, t = [0, 0]) => {
  const { x: n, y: r } = Ni(e) ? e.internals.positionAbsolute : mr(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, El = (e, t) => ko(xo(si(e), si(t))), ar = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, bs = (e) => zt(e.width) && zt(e.height) && zt(e.x) && zt(e.y), zt = (e) => !isNaN(e) && isFinite(e), Dg = (e, t) => {
}, _r = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), wr = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? _r(a, s) : a;
}, ro = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function _n(e, t) {
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
function Ig(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = _n(e, n), o = _n(e, t);
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
    const r = _n(e.top ?? e.y ?? 0, n), o = _n(e.bottom ?? e.y ?? 0, n), i = _n(e.left ?? e.x ?? 0, t), s = _n(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Og(e, t, n, r, o, i) {
  const { x: s, y: a } = ro(e, [t, n, r]), { x: l, y: u } = ro({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const Mi = (e, t, n, r, o, i) => {
  const s = Ig(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Tn(u, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, v = n / 2 - f * d, p = Og(e, g, v, d, t, n), m = {
    left: Math.min(p.left - s.left, 0),
    top: Math.min(p.top - s.top, 0),
    right: Math.min(p.right - s.right, 0),
    bottom: Math.min(p.bottom - s.bottom, 0)
  };
  return {
    x: g - m.left + m.right,
    y: v - m.top + m.bottom,
    zoom: d
  };
}, lr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function In(e) {
  return e != null && e !== "parent";
}
function Jt(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Sl(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Rg(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Lg(e) {
  return { ...Eg, ...e || {} };
}
function Io(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = lt(e), a = wr({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? _r(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Cl = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Nl = (e) => e?.getRootNode?.() || window?.document, Hg = ["INPUT", "SELECT", "TEXTAREA"];
function Pl(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Hg.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Ml = (e) => "clientX" in e, lt = (e, t) => {
  const n = Ml(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, xs = (e, t, n, r, o) => {
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
      ...Cl(s)
    };
  });
};
function Vg({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), h = Math.abs(u - t);
  return [l, u, d, h];
}
function zr(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function ks({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ne.Left:
      return [t - zr(t - r, i), n];
    case ne.Right:
      return [t + zr(r - t, i), n];
    case ne.Top:
      return [t, n - zr(n - o, i)];
    case ne.Bottom:
      return [t, n + zr(o - n, i)];
  }
}
function Al({ sourceX: e, sourceY: t, sourcePosition: n = ne.Bottom, targetX: r, targetY: o, targetPosition: i = ne.Top, curvature: s = 0.25 }) {
  const [a, l] = ks({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = ks({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [h, f, g, v] = Vg({
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
function zl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Bg({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, a = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + a;
}
function Fg({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = xo(no(e), no(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return ar(s, ko(i)) > 0;
}
const Kg = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Yg = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Xg = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || Kg;
  let o;
  return wl(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, Yg(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function Tl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = zl({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Es = {
  [ne.Left]: { x: -1, y: 0 },
  [ne.Right]: { x: 1, y: 0 },
  [ne.Top]: { x: 0, y: -1 },
  [ne.Bottom]: { x: 0, y: 1 }
}, Zg = ({ source: e, sourcePosition: t = ne.Bottom, target: n }) => t === ne.Left || t === ne.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ss = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Wg({ source: e, sourcePosition: t = ne.Bottom, target: n, targetPosition: r = ne.Top, center: o, offset: i, stepPosition: s }) {
  const a = Es[t], l = Es[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = Zg({
    source: u,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let v = [], p, m;
  const w = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , E, b] = zl({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (p = o.x ?? u.x + (d.x - u.x) * s, m = o.y ?? (u.y + d.y) / 2) : (p = o.x ?? (u.x + d.x) / 2, m = o.y ?? u.y + (d.y - u.y) * s);
    const P = [
      { x: p, y: u.y },
      { x: p, y: d.y }
    ], L = [
      { x: u.x, y: m },
      { x: d.x, y: m }
    ];
    a[f] === g ? v = f === "x" ? P : L : v = f === "x" ? L : P;
  } else {
    const P = [{ x: u.x, y: d.y }], L = [{ x: d.x, y: u.y }];
    if (f === "x" ? v = a.x === g ? L : P : v = a.y === g ? P : L, t === r) {
      const k = Math.abs(e[f] - n[f]);
      if (k <= i) {
        const M = Math.min(i - 1, i - k);
        a[f] === g ? w[f] = (u[f] > e[f] ? -1 : 1) * M : x[f] = (d[f] > n[f] ? -1 : 1) * M;
      }
    }
    if (t !== r) {
      const k = f === "x" ? "y" : "x", M = a[f] === l[k], y = u[k] > d[k], C = u[k] < d[k];
      (a[f] === 1 && (!M && y || M && C) || a[f] !== 1 && (!M && C || M && y)) && (v = f === "x" ? P : L);
    }
    const A = { x: u.x + w.x, y: u.y + w.y }, B = { x: d.x + x.x, y: d.y + x.y }, W = Math.max(Math.abs(A.x - v[0].x), Math.abs(B.x - v[0].x)), z = Math.max(Math.abs(A.y - v[0].y), Math.abs(B.y - v[0].y));
    W >= z ? (p = (A.x + B.x) / 2, m = v[0].y) : (p = v[0].x, m = (A.y + B.y) / 2);
  }
  return [[
    e,
    { x: u.x + w.x, y: u.y + w.y },
    ...v,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], p, m, E, b];
}
function qg(e, t, n, r) {
  const o = Math.min(Ss(e, t) / 2, Ss(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Ai({ sourceX: e, sourceY: t, sourcePosition: n = ne.Bottom, targetX: r, targetY: o, targetPosition: i = ne.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, v, p] = Wg({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [h.reduce((w, x, E) => {
    let b = "";
    return E > 0 && E < h.length - 1 ? b = qg(h[E - 1], x, h[E + 1], s) : b = `${E === 0 ? "M" : "L"}${x.x} ${x.y}`, w += b, w;
  }, ""), f, g, v, p];
}
function Cs(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Gg(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Cs(t) || !Cs(n))
    return null;
  const r = t.internals.handleBounds || Ns(t.handles), o = n.internals.handleBounds || Ns(n.handles), i = Ps(r?.source ?? [], e.sourceHandle), s = Ps(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === zn.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", sr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || ne.Bottom, l = s?.position || ne.Top, u = hn(t, i, a), d = hn(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Ns(e) {
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
function hn(e, t, n = ne.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Jt(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case ne.Top:
      return { x: o + s / 2, y: i };
    case ne.Right:
      return { x: o + s, y: i + a / 2 };
    case ne.Bottom:
      return { x: o + s / 2, y: i + a };
    case ne.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Ps(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function ai(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Ug(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = ai(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const Dl = 1e3, jg = 10, zi = {
  nodeOrigin: [0, 0],
  nodeExtent: oi,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, Jg = {
  ...zi,
  checkEquality: !0
};
function Ti(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Qg(e, t, n) {
  const r = Ti(zi, n);
  for (const o of e.values())
    if (o.parentId)
      Ii(o, e, t, r);
    else {
      const i = mr(o, r.nodeOrigin), s = In(o.extent) ? o.extent : r.nodeExtent, a = fn(i, s, Jt(o));
      o.internals.positionAbsolute = a;
    }
}
function $g(e, t) {
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
function Di(e) {
  return e === "manual";
}
function e0(e, t, n, r = {}) {
  const o = Ti(Jg, r), i = { i: 0 }, s = new Map(t), a = o?.elevateNodesOnSelect && !Di(o.zIndexMode) ? Dl : 0;
  let l = e.length > 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = s.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const h = mr(u, o.nodeOrigin), f = In(u.extent) ? u.extent : o.nodeExtent, g = fn(h, f, Jt(u));
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
          handleBounds: $g(u, d),
          z: Il(u, a, o.zIndexMode),
          userNode: u
        }
      }, t.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (l = !1), u.parentId && Ii(d, t, n, r, i);
  }
  return l;
}
function t0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ii(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a, zIndexMode: l } = Ti(zi, r), u = e.parentId, d = t.get(u);
  if (!d) {
    console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  t0(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && l === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * jg), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const h = i && !Di(l) ? Dl : 0, { x: f, y: g, z: v } = n0(e, d, s, a, h, l), { positionAbsolute: p } = e.internals, m = f !== p.x || g !== p.y;
  (m || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: m ? { x: f, y: g } : p,
      z: v
    }
  });
}
function Il(e, t, n) {
  const r = zt(e.zIndex) ? e.zIndex : 0;
  return Di(n) ? r : r + (e.selected ? t : 0);
}
function n0(e, t, n, r, o, i) {
  const { x: s, y: a } = t.internals.positionAbsolute, l = Jt(e), u = mr(e, n), d = In(e.extent) ? fn(u, e.extent, l) : u;
  let h = fn({ x: s + d.x, y: a + d.y }, r, l);
  e.extent === "parent" && (h = xl(h, l, t));
  const f = Il(e, o, i), g = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: g >= f ? g + 1 : f
  };
}
function r0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Dn(a), u = El(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Jt(a), h = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), p = Math.max(d.height, Math.round(s.height)), m = (v - d.width) * h[0], w = (p - d.height) * h[1];
    (f > 0 || g > 0 || m || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + m,
        y: a.position.y - g + w
      }
    }), n.get(l)?.forEach((x) => {
      e.some((E) => E.id === x.id) || o.push({
        id: x.id,
        type: "position",
        position: {
          x: x.position.x + f,
          y: x.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (f ? h[0] * f - m : 0),
        height: p + (g ? h[1] * g - w : 0)
      }
    });
  }), o;
}
function o0(e, t, n, r, o, i, s) {
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
    const p = Cl(g.nodeElement), m = v.measured.width !== p.width || v.measured.height !== p.height;
    if (!!(p.width && p.height && (m || !v.internals.handleBounds || g.force))) {
      const x = g.nodeElement.getBoundingClientRect(), E = In(v.extent) ? v.extent : i;
      let { positionAbsolute: b } = v.internals;
      v.parentId && v.extent === "parent" ? b = xl(b, p, t.get(v.parentId)) : E && (b = fn(b, E, p));
      const T = {
        ...v,
        measured: p,
        internals: {
          ...v.internals,
          positionAbsolute: b,
          handleBounds: {
            source: xs("source", g.nodeElement, x, h, v.id),
            target: xs("target", g.nodeElement, x, h, v.id)
          }
        }
      };
      t.set(v.id, T), v.parentId && Ii(T, t, n, { nodeOrigin: o, zIndexMode: s }), l = !0, m && (u.push({
        id: v.id,
        type: "dimensions",
        dimensions: p
      }), v.expandParent && v.parentId && f.push({
        id: v.id,
        parentId: v.parentId,
        rect: Dn(T, o)
      }));
    }
  }
  if (f.length > 0) {
    const g = r0(f, t, n, o);
    u.push(...g);
  }
  return { changes: u, updatedInternals: l };
}
async function i0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Ms(e, t, n, r, o, i) {
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
function s0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Ms("source", l, d, e, o, s), Ms("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function Ol(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Ol(n, t) : !1;
}
function As(e, t, n) {
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
function a0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Ol(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Oo({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function l0({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = _r(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function c0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, v = !1, p = null;
  function m({ noDragClassName: x, handleSelector: E, domNode: b, isSelectable: T, nodeId: P, nodeClickDistance: L = 0 }) {
    f = et(b);
    function A({ x: k, y: M }) {
      const { nodeLookup: y, nodeExtent: C, snapGrid: S, snapToGrid: D, nodeOrigin: F, onNodeDrag: N, onSelectionDrag: O, onError: I, updateNodePositions: X } = t();
      i = { x: k, y: M };
      let Y = !1;
      const K = a.size > 1, G = K && C ? si(yr(a)) : null, q = K && D ? l0({
        dragItems: a,
        snapGrid: S,
        x: k,
        y: M
      }) : null;
      for (const [J, U] of a) {
        if (!y.has(J))
          continue;
        let te = { x: k - U.distance.x, y: M - U.distance.y };
        D && (te = q ? {
          x: Math.round(te.x + q.x),
          y: Math.round(te.y + q.y)
        } : _r(te, S));
        let he = null;
        if (K && C && !U.extent && G) {
          const { positionAbsolute: ae } = U.internals, be = ae.x - G.x + C[0][0], Ue = ae.x + U.measured.width - G.x2 + C[1][0], je = ae.y - G.y + C[0][1], Fe = ae.y + U.measured.height - G.y2 + C[1][1];
          he = [
            [be, je],
            [Ue, Fe]
          ];
        }
        const { position: Q, positionAbsolute: pe } = bl({
          nodeId: J,
          nextPosition: te,
          nodeLookup: y,
          nodeExtent: he || C,
          nodeOrigin: F,
          onError: I
        });
        Y = Y || U.position.x !== Q.x || U.position.y !== Q.y, U.position = Q, U.internals.positionAbsolute = pe;
      }
      if (v = v || Y, !!Y && (X(a, !0), p && (r || N || !P && O))) {
        const [J, U] = Oo({
          nodeId: P,
          dragItems: a,
          nodeLookup: y
        });
        r?.(p, a, J, U), N?.(p, J, U), P || O?.(p, U);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: k, panBy: M, autoPanSpeed: y, autoPanOnNodeDrag: C } = t();
      if (!C) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, D] = kl(u, d, y);
      (S !== 0 || D !== 0) && (i.x = (i.x ?? 0) - S / k[2], i.y = (i.y ?? 0) - D / k[2], await M({ x: S, y: D }) && A(i)), s = requestAnimationFrame(B);
    }
    function W(k) {
      const { nodeLookup: M, multiSelectionActive: y, nodesDraggable: C, transform: S, snapGrid: D, snapToGrid: F, selectNodesOnDrag: N, onNodeDragStart: O, onSelectionDragStart: I, unselectNodesAndEdges: X } = t();
      h = !0, (!N || !T) && !y && P && (M.get(P)?.selected || X()), T && N && P && e?.(P);
      const Y = Io(k.sourceEvent, { transform: S, snapGrid: D, snapToGrid: F, containerBounds: d });
      if (i = Y, a = a0(M, C, Y, P), a.size > 0 && (n || O || !P && I)) {
        const [K, G] = Oo({
          nodeId: P,
          dragItems: a,
          nodeLookup: M
        });
        n?.(k.sourceEvent, a, K, G), O?.(k.sourceEvent, K, G), P || I?.(k.sourceEvent, G);
      }
    }
    const z = zf().clickDistance(L).on("start", (k) => {
      const { domNode: M, nodeDragThreshold: y, transform: C, snapGrid: S, snapToGrid: D } = t();
      d = M?.getBoundingClientRect() || null, g = !1, v = !1, p = k.sourceEvent, y === 0 && W(k), i = Io(k.sourceEvent, { transform: C, snapGrid: S, snapToGrid: D, containerBounds: d }), u = lt(k.sourceEvent, d);
    }).on("drag", (k) => {
      const { autoPanOnNodeDrag: M, transform: y, snapGrid: C, snapToGrid: S, nodeDragThreshold: D, nodeLookup: F } = t(), N = Io(k.sourceEvent, { transform: y, snapGrid: C, snapToGrid: S, containerBounds: d });
      if (p = k.sourceEvent, (k.sourceEvent.type === "touchmove" && k.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      P && !F.has(P)) && (g = !0), !g) {
        if (!l && M && h && (l = !0, B()), !h) {
          const O = lt(k.sourceEvent, d), I = O.x - u.x, X = O.y - u.y;
          Math.sqrt(I * I + X * X) > D && W(k);
        }
        (i.x !== N.xSnapped || i.y !== N.ySnapped) && a && h && (u = lt(k.sourceEvent, d), A(N));
      }
    }).on("end", (k) => {
      if (!(!h || g) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: M, updateNodePositions: y, onNodeDragStop: C, onSelectionDragStop: S } = t();
        if (v && (y(a, !1), v = !1), o || C || !P && S) {
          const [D, F] = Oo({
            nodeId: P,
            dragItems: a,
            nodeLookup: M,
            dragging: !1
          });
          o?.(k.sourceEvent, a, D, F), C?.(k.sourceEvent, D, F), P || S?.(k.sourceEvent, F);
        }
      }
    }).filter((k) => {
      const M = k.target;
      return !k.button && (!x || !As(M, `.${x}`, b)) && (!E || As(M, E, b));
    });
    f.call(z);
  }
  function w() {
    f?.on(".drag", null);
  }
  return {
    update: m,
    destroy: w
  };
}
function u0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    ar(o, Dn(i)) > 0 && r.push(i);
  return r;
}
const d0 = 250;
function f0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = u0(e, n, t + d0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: h } = hn(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(h - e.y, 2));
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
function Rl(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...hn(s, l, l.position, !0) } : l;
}
function Ll(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function h0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Hl = () => !0;
function g0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: v, onConnect: p, onConnectEnd: m, isValidConnection: w = Hl, onReconnectEnd: x, updateConnection: E, getTransform: b, getFromHandle: T, autoPanSpeed: P, dragThreshold: L = 1, handleDomNode: A }) {
  const B = Nl(e.target);
  let W = 0, z;
  const { x: k, y: M } = lt(e), y = Ll(i, A), C = a?.getBoundingClientRect();
  let S = !1;
  if (!C || !y)
    return;
  const D = Rl(o, y, r, l, t);
  if (!D)
    return;
  let F = lt(e, C), N = !1, O = null, I = !1, X = null;
  function Y() {
    if (!d || !C)
      return;
    const [Q, pe] = kl(F, C, P);
    f({ x: Q, y: pe }), W = requestAnimationFrame(Y);
  }
  const K = {
    ...D,
    nodeId: o,
    type: y,
    position: D.position
  }, G = l.get(o);
  let J = {
    inProgress: !0,
    isValid: null,
    from: hn(G, K, ne.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: G,
    to: F,
    toHandle: null,
    toPosition: ys[K.position],
    toNode: null,
    pointer: F
  };
  function U() {
    S = !0, E(J), v?.(e, { nodeId: o, handleId: r, handleType: y });
  }
  L === 0 && U();
  function te(Q) {
    if (!S) {
      const { x: Fe, y: ge } = lt(Q), Ee = Fe - k, ot = ge - M;
      if (!(Ee * Ee + ot * ot > L * L))
        return;
      U();
    }
    if (!T() || !K) {
      he(Q);
      return;
    }
    const pe = b();
    F = lt(Q, C), z = f0(wr(F, pe, !1, [1, 1]), n, l, K), N || (Y(), N = !0);
    const ae = Vl(Q, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: B,
      lib: u,
      flowId: h,
      nodeLookup: l
    });
    X = ae.handleDomNode, O = ae.connection, I = h0(!!z, ae.isValid);
    const be = l.get(o), Ue = be ? hn(be, K, ne.Left, !0) : J.from, je = {
      ...J,
      from: Ue,
      isValid: I,
      to: ae.toHandle && I ? ro({ x: ae.toHandle.x, y: ae.toHandle.y }, pe) : F,
      toHandle: ae.toHandle,
      toPosition: I && ae.toHandle ? ae.toHandle.position : ys[K.position],
      toNode: ae.toHandle ? l.get(ae.toHandle.nodeId) : null,
      pointer: F
    };
    E(je), J = je;
  }
  function he(Q) {
    if (!("touches" in Q && Q.touches.length > 0)) {
      if (S) {
        (z || X) && O && I && p?.(O);
        const { inProgress: pe, ...ae } = J, be = {
          ...ae,
          toPosition: J.toHandle ? J.toPosition : null
        };
        m?.(Q, be), i && x?.(Q, be);
      }
      g(), cancelAnimationFrame(W), N = !1, I = !1, O = null, X = null, B.removeEventListener("mousemove", te), B.removeEventListener("mouseup", he), B.removeEventListener("touchmove", te), B.removeEventListener("touchend", he);
    }
  }
  B.addEventListener("mousemove", te), B.addEventListener("mouseup", he), B.addEventListener("touchmove", te), B.addEventListener("touchend", he);
}
function Vl(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Hl, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = lt(e), p = s.elementFromPoint(g, v), m = p?.classList.contains(`${a}-flow__handle`) ? p : f, w = {
    handleDomNode: m,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (m) {
    const x = Ll(void 0, m), E = m.getAttribute("data-nodeid"), b = m.getAttribute("data-handleid"), T = m.classList.contains("connectable"), P = m.classList.contains("connectableend");
    if (!E || !x)
      return w;
    const L = {
      source: h ? E : r,
      sourceHandle: h ? b : o,
      target: h ? r : E,
      targetHandle: h ? o : b
    };
    w.connection = L;
    const B = T && P && (n === zn.Strict ? h && x === "source" || !h && x === "target" : E !== r || b !== o);
    w.isValid = B && u(L), w.toHandle = Rl(E, x, b, d, n, !0);
  }
  return w;
}
const zs = {
  onPointerDown: g0,
  isValid: Vl
};
function v0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = et(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const v = (E) => {
      if (E.sourceEvent.type !== "wheel" || !t)
        return;
      const b = n(), T = E.sourceEvent.ctrlKey && lr() ? 10 : 1, P = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * d, L = b[2] * Math.pow(2, P * T);
      t.scaleTo(L);
    };
    let p = [0, 0];
    const m = (E) => {
      (E.sourceEvent.type === "mousedown" || E.sourceEvent.type === "touchstart") && (p = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ]);
    }, w = (E) => {
      const b = n();
      if (E.sourceEvent.type !== "mousemove" && E.sourceEvent.type !== "touchmove" || !t)
        return;
      const T = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ], P = [T[0] - p[0], T[1] - p[1]];
      p = T;
      const L = r() * Math.max(b[2], Math.log(b[2])) * (g ? -1 : 1), A = {
        x: b[0] - P[0] * L,
        y: b[1] - P[1] * L
      }, B = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: A.x,
        y: A.y,
        zoom: b[2]
      }, B, a);
    }, x = yl().on("start", m).on("zoom", h ? w : null).on("zoom.wheel", f ? v : null);
    o.call(x, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: it
  };
}
const Eo = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ro = ({ x: e, y: t, zoom: n }) => bo.translate(e, t).scale(n), xn = (e, t) => e.target.closest(`.${t}`), Bl = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), p0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Lo = (e, t = 0, n = p0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Fl = (e) => {
  const t = e.ctrlKey && lr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function m0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (xn(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const m = it(d), w = Fl(d), x = h * Math.pow(2, w);
      r.scaleTo(n, x, m, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === Sn.Vertical ? 0 : d.deltaX * f, v = o === Sn.Horizontal ? 0 : d.deltaY * f;
    !lr() && d.shiftKey && o !== Sn.Vertical && (g = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(v / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const p = Eo(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, p), e.panScrollTimeout = setTimeout(() => {
      u?.(d, p), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, p));
  };
}
function y0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = xn(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function _0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Eo(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function w0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Bl(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Eo(i.transform));
  };
}
function b0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Bl(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = Eo(s.transform);
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
function x0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (h) => {
    const f = e || t, g = n && h.ctrlKey, v = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (xn(h, `${u}-flow__node`) || xn(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !v || xn(h, a) && v || xn(h, l) && (!v || o && v && !e) || !n && h.ctrlKey && v)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !g && v || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || v) && p;
  };
}
function k0({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), h = yl().scaleExtent([t, n]).translateExtent(r), f = et(e).call(h);
  x({
    x: o.x,
    y: o.y,
    zoom: Tn(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), v = f.on("dblclick.zoom");
  h.wheelDelta(Fl);
  function p(z, k) {
    return f ? new Promise((M) => {
      h?.interpolate(k?.interpolate === "linear" ? Jn : Hr).transform(Lo(f, k?.duration, k?.ease, () => M(!0)), z);
    }) : Promise.resolve(!1);
  }
  function m({ noWheelClassName: z, noPanClassName: k, onPaneContextMenu: M, userSelectionActive: y, panOnScroll: C, panOnDrag: S, panOnScrollMode: D, panOnScrollSpeed: F, preventScrolling: N, zoomOnPinch: O, zoomOnScroll: I, zoomOnDoubleClick: X, zoomActivationKeyPressed: Y, lib: K, onTransformChange: G, connectionInProgress: q, paneClickDistance: J, selectionOnDrag: U }) {
    y && !u.isZoomingOrPanning && w();
    const te = C && !Y && !y;
    h.clickDistance(U ? 1 / 0 : !zt(J) || J < 0 ? 0 : J);
    const he = te ? m0({
      zoomPanValues: u,
      noWheelClassName: z,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: D,
      panOnScrollSpeed: F,
      zoomOnPinch: O,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : y0({
      noWheelClassName: z,
      preventScrolling: N,
      d3ZoomHandler: g
    });
    if (f.on("wheel.zoom", he, { passive: !1 }), !y) {
      const pe = _0({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", pe);
      const ae = w0({
        zoomPanValues: u,
        panOnDrag: S,
        onPaneContextMenu: !!M,
        onPanZoom: i,
        onTransformChange: G
      });
      h.on("zoom", ae);
      const be = b0({
        zoomPanValues: u,
        panOnDrag: S,
        panOnScroll: C,
        onPaneContextMenu: M,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", be);
    }
    const Q = x0({
      zoomActivationKeyPressed: Y,
      panOnDrag: S,
      zoomOnScroll: I,
      panOnScroll: C,
      zoomOnDoubleClick: X,
      zoomOnPinch: O,
      userSelectionActive: y,
      noPanClassName: k,
      noWheelClassName: z,
      lib: K,
      connectionInProgress: q
    });
    h.filter(Q), X ? f.on("dblclick.zoom", v) : f.on("dblclick.zoom", null);
  }
  function w() {
    h.on("zoom", null);
  }
  async function x(z, k, M) {
    const y = Ro(z), C = h?.constrain()(y, k, M);
    return C && await p(C), new Promise((S) => S(C));
  }
  async function E(z, k) {
    const M = Ro(z);
    return await p(M, k), new Promise((y) => y(M));
  }
  function b(z) {
    if (f) {
      const k = Ro(z), M = f.property("__zoom");
      (M.k !== z.zoom || M.x !== z.x || M.y !== z.y) && h?.transform(f, k, null, { sync: !0 });
    }
  }
  function T() {
    const z = f ? ml(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function P(z, k) {
    return f ? new Promise((M) => {
      h?.interpolate(k?.interpolate === "linear" ? Jn : Hr).scaleTo(Lo(f, k?.duration, k?.ease, () => M(!0)), z);
    }) : Promise.resolve(!1);
  }
  function L(z, k) {
    return f ? new Promise((M) => {
      h?.interpolate(k?.interpolate === "linear" ? Jn : Hr).scaleBy(Lo(f, k?.duration, k?.ease, () => M(!0)), z);
    }) : Promise.resolve(!1);
  }
  function A(z) {
    h?.scaleExtent(z);
  }
  function B(z) {
    h?.translateExtent(z);
  }
  function W(z) {
    const k = !zt(z) || z < 0 ? 0 : z;
    h?.clickDistance(k);
  }
  return {
    update: m,
    destroy: w,
    setViewport: E,
    setViewportConstrained: x,
    getViewport: T,
    scaleTo: P,
    scaleBy: L,
    setScaleExtent: A,
    setTranslateExtent: B,
    syncViewport: b,
    setClickDistance: W
  };
}
var Ts;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ts || (Ts = {}));
function Oi() {
  const e = {};
  return [
    (t) => {
      if (t && !Dc(e))
        throw new Error(t);
      return di(e);
    },
    (t) => fi(e, t)
  ];
}
const [E0, S0] = Oi(), [C0, N0] = Oi(), [P0, M0] = Oi();
var A0 = /* @__PURE__ */ ee("<div><!></div>");
function Wt(e, t) {
  oe(t, !0);
  let n = V(t, "id", 3, null), r = V(t, "type", 3, "source"), o = V(t, "position", 19, () => ne.Top), i = V(t, "isConnectableStart", 3, !0), s = V(t, "isConnectableEnd", 3, !0), a = /* @__PURE__ */ jt(t, [
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
  const l = E0("Handle must be used within a Custom Node component"), u = C0("Handle must be used within a Custom Node component");
  let d = /* @__PURE__ */ _(() => r() === "target"), h = /* @__PURE__ */ _(() => t.isConnectable !== void 0 ? t.isConnectable : u.value), f = Qt(), g = /* @__PURE__ */ _(() => f.ariaLabelConfig), v = null;
  ya(() => {
    if (t.onconnect || t.ondisconnect) {
      f.edges;
      let k = f.connectionLookup.get(`${l}-${r()}${n() ? `-${n()}` : ""}`);
      if (v && !Sg(k, v)) {
        const M = k ?? /* @__PURE__ */ new Map();
        _s(v, M, t.ondisconnect), _s(M, v, t.onconnect);
      }
      v = new Map(k);
    }
  });
  let p = /* @__PURE__ */ _(() => {
    if (!f.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: k, toHandle: M, isValid: y } = f.connection, C = k && k.nodeId === l && k.type === r() && k.id === n(), S = M && M.nodeId === l && M.type === r() && M.id === n(), D = f.connectionMode === zn.Strict ? k?.type !== r() : l !== k?.nodeId || n() !== k?.id;
    return [
      !0,
      C,
      S,
      D,
      S && y
    ];
  }), m = /* @__PURE__ */ _(() => On(c(p), 5)), w = /* @__PURE__ */ _(() => c(m)[0]), x = /* @__PURE__ */ _(() => c(m)[1]), E = /* @__PURE__ */ _(() => c(m)[2]), b = /* @__PURE__ */ _(() => c(m)[3]), T = /* @__PURE__ */ _(() => c(m)[4]);
  function P(k) {
    const M = f.onbeforeconnect ? f.onbeforeconnect(k) : k;
    M && (f.addEdge(M), f.onconnect?.(k));
  }
  function L(k) {
    const M = Ml(k);
    k.currentTarget && (M && k.button === 0 || !M) && zs.onPointerDown(k, {
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
      onConnectStart: (y, C) => {
        f.onconnectstart?.(y, {
          nodeId: C.nodeId,
          handleId: C.handleId,
          handleType: C.handleType
        });
      },
      onConnectEnd: (y, C) => {
        f.onconnectend?.(y, C);
      },
      getTransform: () => [f.viewport.x, f.viewport.y, f.viewport.zoom],
      getFromHandle: () => f.connection.fromHandle,
      dragThreshold: f.connectionDragThreshold,
      handleDomNode: k.currentTarget
    });
  }
  function A(k) {
    if (!l || !f.clickConnectStartHandle && !i())
      return;
    if (!f.clickConnectStartHandle) {
      f.onclickconnectstart?.(k, { nodeId: l, handleId: n(), handleType: r() }), f.clickConnectStartHandle = { nodeId: l, type: r(), id: n() };
      return;
    }
    const M = Nl(k.target), y = t.isValidConnection ?? f.isValidConnection, { connectionMode: C, clickConnectStartHandle: S, flowId: D, nodeLookup: F } = f, { connection: N, isValid: O } = zs.isValid(k, {
      handle: { nodeId: l, id: n(), type: r() },
      connectionMode: C,
      fromNodeId: S.nodeId,
      fromHandleId: S.id ?? null,
      fromType: S.type,
      isValidConnection: y,
      flowId: D,
      doc: M,
      lib: "svelte",
      nodeLookup: F
    });
    O && N && P(N);
    const I = structuredClone(ea(f.connection));
    delete I.inProgress, I.toPosition = I.toHandle ? I.toHandle.position : null, f.onclickconnectend?.(k, I), f.clickConnectStartHandle = null;
  }
  var B = A0(), W = () => {
  };
  bt(B, () => ({
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
    onmousedown: L,
    ontouchstart: L,
    onclick: f.clickConnect ? A : void 0,
    onkeypress: W,
    style: t.style,
    role: "button",
    "aria-label": c(g)["handle.ariaLabel"],
    tabindex: "-1",
    ...a,
    [Ht]: {
      valid: c(T),
      connectingto: c(E),
      connectingfrom: c(x),
      source: !c(d),
      target: c(d),
      connectablestart: i(),
      connectableend: s(),
      connectable: c(h),
      connectionindicator: c(h) && (!c(w) || c(b)) && (c(w) || f.clickConnectStartHandle ? s() : i())
    }
  }));
  var z = Z(B);
  He(z, () => t.children ?? Ye), H(e, B), ie();
}
var z0 = /* @__PURE__ */ ee("<!> <!>", 1);
function Kl(e, t) {
  oe(t, !0);
  let n = V(t, "targetPosition", 19, () => ne.Top), r = V(t, "sourcePosition", 19, () => ne.Bottom);
  var o = z0(), i = $(o);
  Wt(i, {
    type: "target",
    get position() {
      return n();
    }
  });
  var s = j(i), a = j(s);
  Wt(a, {
    type: "source",
    get position() {
      return r();
    }
  }), ue(() => xe(s, ` ${t.data?.label ?? ""} `)), H(e, o), ie();
}
var T0 = /* @__PURE__ */ ee(" <!>", 1);
function D0(e, t) {
  oe(t, !0);
  let n = V(t, "data", 19, () => ({ label: "Node" })), r = V(t, "sourcePosition", 19, () => ne.Bottom);
  var o = T0(), i = $(o), s = j(i);
  Wt(s, {
    type: "source",
    get position() {
      return r();
    }
  }), ue(() => xe(i, `${n()?.label ?? ""} `)), H(e, o), ie();
}
var I0 = /* @__PURE__ */ ee(" <!>", 1);
function O0(e, t) {
  oe(t, !0);
  let n = V(t, "data", 19, () => ({ label: "Node" })), r = V(t, "targetPosition", 19, () => ne.Top);
  var o = I0(), i = $(o), s = j(i);
  Wt(s, {
    type: "target",
    get position() {
      return r();
    }
  }), ue(() => xe(i, `${n()?.label ?? ""} `)), H(e, o), ie();
}
function R0(e, t) {
}
function Ho(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function L0(e, t) {
  const n = /* @__PURE__ */ _(Qt), r = /* @__PURE__ */ _(() => c(n).domNode);
  let o;
  return c(r) ? Ho(e, c(r), t) : o = _a(() => {
    Ve(() => {
      Ho(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      Ho(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function H0() {
  let e = /* @__PURE__ */ se(typeof window > "u");
  if (c(e)) {
    const t = _a(() => {
      Ve(() => {
        R(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const Ds = (e) => Ng(e), V0 = (e) => wl(e);
function xt(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const oo = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var B0 = /* @__PURE__ */ ee("<div><!></div>");
function F0(e, t) {
  oe(t, !0);
  let n = V(t, "x", 3, 0), r = V(t, "y", 3, 0), o = V(t, "selectEdgeOnClick", 3, !1), i = V(t, "transparent", 3, !1), s = /* @__PURE__ */ jt(t, [
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
  const a = Qt(), l = P0("EdgeLabel must be used within a Custom Edge component");
  let u = /* @__PURE__ */ _(() => a.visible.edges.get(l)?.zIndex);
  var d = B0(), h = () => {
    o() && l && a.handleEdgeSelection(l);
  };
  bt(
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
      [Pt]: g
    }),
    [
      () => ({
        display: H0().value ? "none" : void 0,
        cursor: o() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: xt(t.width),
        height: xt(t.height),
        "z-index": c(u)
      })
    ],
    void 0,
    void 0,
    "svelte-1wg91mu"
  );
  var f = Z(d);
  He(f, () => t.children ?? Ye), ze(d, (g, v) => L0?.(g, v), () => "edge-labels"), H(e, d), ie();
}
var K0 = /* @__PURE__ */ _e("<path></path>"), Y0 = /* @__PURE__ */ _e('<path fill="none"></path><!><!>', 1);
function So(e, t) {
  let n = V(t, "interactionWidth", 3, 20), r = /* @__PURE__ */ jt(t, [
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
  var o = Y0(), i = $(o), s = j(i);
  {
    var a = (d) => {
      var h = K0();
      bt(h, () => ({
        d: t.path,
        "stroke-opacity": 0,
        "stroke-width": n(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...r
      })), H(d, h);
    };
    le(s, (d) => {
      n() > 0 && d(a);
    });
  }
  var l = j(s);
  {
    var u = (d) => {
      F0(d, {
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
          var g = Rr();
          ue(() => xe(g, t.label)), H(h, g);
        },
        $$slots: { default: !0 }
      });
    };
    le(l, (d) => {
      t.label && d(u);
    });
  }
  ue(() => {
    re(i, "id", t.id), re(i, "d", t.path), De(i, 0, Ut(["svelte-flow__edge-path", t.class])), re(i, "marker-start", t.markerStart), re(i, "marker-end", t.markerEnd), Be(i, t.style);
  }), H(e, o);
}
function Yl(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ _(() => Al({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    curvature: t.pathOptions?.curvature
  })), r = /* @__PURE__ */ _(() => On(c(n), 3)), o = /* @__PURE__ */ _(() => c(r)[0]), i = /* @__PURE__ */ _(() => c(r)[1]), s = /* @__PURE__ */ _(() => c(r)[2]);
  So(e, {
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
  }), ie();
}
function X0(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ _(() => Ai({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition
  })), r = /* @__PURE__ */ _(() => On(c(n), 3)), o = /* @__PURE__ */ _(() => c(r)[0]), i = /* @__PURE__ */ _(() => c(r)[1]), s = /* @__PURE__ */ _(() => c(r)[2]);
  So(e, {
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
  }), ie();
}
function Z0(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ _(() => Tl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY
  })), r = /* @__PURE__ */ _(() => On(c(n), 3)), o = /* @__PURE__ */ _(() => c(r)[0]), i = /* @__PURE__ */ _(() => c(r)[1]), s = /* @__PURE__ */ _(() => c(r)[2]);
  So(e, {
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
  }), ie();
}
function W0(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ _(() => Ai({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    borderRadius: 0
  })), r = /* @__PURE__ */ _(() => On(c(n), 3)), o = /* @__PURE__ */ _(() => c(r)[0]), i = /* @__PURE__ */ _(() => c(r)[1]), s = /* @__PURE__ */ _(() => c(r)[2]);
  So(e, {
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
  }), ie();
}
class q0 {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#e = t, this.#t = sa(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const G0 = /\(.+\)/, U0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class j0 extends q0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = G0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => U0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Wo(o, "change", i)
    );
  }
}
function J0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Pi(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Is(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l, zIndexMode: u } = e, d = /* @__PURE__ */ new Map();
  for (const h of t) {
    const f = r.get(h.source), g = r.get(h.target);
    if (!f || !g)
      continue;
    if (a) {
      const { visibleNodes: m, transform: w, width: x, height: E } = e;
      if (Fg({
        sourceNode: f,
        targetNode: g,
        width: x,
        height: E,
        transform: w
      }))
        m.set(f.id, f), m.set(g.id, g);
      else
        continue;
    }
    const v = o.get(h.id);
    if (v && h === v.edge && f == v.sourceNode && g == v.targetNode) {
      d.set(h.id, v);
      continue;
    }
    const p = Gg({
      id: h.id,
      sourceNode: f,
      targetNode: g,
      sourceHandle: h.sourceHandle || null,
      targetHandle: h.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    p && d.set(h.id, {
      ...n,
      ...h,
      ...p,
      zIndex: Bg({
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
const Xl = {
  input: D0,
  output: O0,
  default: Kl,
  group: R0
}, Zl = {
  straight: Z0,
  smoothstep: X0,
  default: Yl,
  step: W0
};
function Q0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = yr(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Mi(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function $0(e) {
  class t {
    #e = /* @__PURE__ */ _(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#e);
    }
    set flowId(r) {
      R(this.#e, r);
    }
    #t = /* @__PURE__ */ se(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      R(this.#t, r);
    }
    #n = /* @__PURE__ */ se(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      R(this.#n, r);
    }
    #r = /* @__PURE__ */ se(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      R(this.#r, r);
    }
    #l = /* @__PURE__ */ se(e.height ?? 0);
    get height() {
      return c(this.#l);
    }
    set height(r) {
      R(this.#l, r);
    }
    #i = /* @__PURE__ */ se(e.props.zIndexMode ?? "basic");
    get zIndexMode() {
      return c(this.#i);
    }
    set zIndexMode(r) {
      R(this.#i, r);
    }
    #o = /* @__PURE__ */ _(() => {
      const r = e0(e.nodes, this.nodeLookup, this.parentLookup, {
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
      R(this.#o, r);
    }
    #s = /* @__PURE__ */ _(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#s);
    }
    set viewportInitialized(r) {
      R(this.#s, r);
    }
    #a = /* @__PURE__ */ _(() => (s0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#a);
    }
    set _edges(r) {
      R(this.#a, r);
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
    #c = /* @__PURE__ */ _(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#c);
    }
    set selectedNodes(r) {
      R(this.#c, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ _(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#u);
    }
    set selectedEdges(r) {
      R(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #d = /* @__PURE__ */ _(() => {
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
        const { viewport: p, width: m, height: w } = this, x = [p.x, p.y, p.zoom];
        f = J0(s, x, m, w), g = Is({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: x,
          width: m,
          height: w
        });
      } else
        f = this.nodeLookup, g = Is(v);
      return { nodes: f, edges: g };
    });
    get visible() {
      return c(this.#d);
    }
    set visible(r) {
      R(this.#d, r);
    }
    #f = /* @__PURE__ */ _(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#f);
    }
    set nodesDraggable(r) {
      R(this.#f, r);
    }
    #g = /* @__PURE__ */ _(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#g);
    }
    set nodesConnectable(r) {
      R(this.#g, r);
    }
    #h = /* @__PURE__ */ _(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#h);
    }
    set elementsSelectable(r) {
      R(this.#h, r);
    }
    #_ = /* @__PURE__ */ _(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#_);
    }
    set nodesFocusable(r) {
      R(this.#_, r);
    }
    #w = /* @__PURE__ */ _(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#w);
    }
    set edgesFocusable(r) {
      R(this.#w, r);
    }
    #b = /* @__PURE__ */ _(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#b);
    }
    set disableKeyboardA11y(r) {
      R(this.#b, r);
    }
    #m = /* @__PURE__ */ _(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#m);
    }
    set minZoom(r) {
      R(this.#m, r);
    }
    #v = /* @__PURE__ */ _(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#v);
    }
    set maxZoom(r) {
      R(this.#v, r);
    }
    #p = /* @__PURE__ */ _(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#p);
    }
    set nodeOrigin(r) {
      R(this.#p, r);
    }
    #y = /* @__PURE__ */ _(() => e.props.nodeExtent ?? oi);
    get nodeExtent() {
      return c(this.#y);
    }
    set nodeExtent(r) {
      R(this.#y, r);
    }
    #x = /* @__PURE__ */ _(() => e.props.translateExtent ?? oi);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      R(this.#x, r);
    }
    #k = /* @__PURE__ */ _(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#k);
    }
    set defaultEdgeOptions(r) {
      R(this.#k, r);
    }
    #E = /* @__PURE__ */ _(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#E);
    }
    set nodeDragThreshold(r) {
      R(this.#E, r);
    }
    #S = /* @__PURE__ */ _(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#S);
    }
    set autoPanOnNodeDrag(r) {
      R(this.#S, r);
    }
    #C = /* @__PURE__ */ _(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#C);
    }
    set autoPanOnConnect(r) {
      R(this.#C, r);
    }
    #N = /* @__PURE__ */ _(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#N);
    }
    set autoPanOnNodeFocus(r) {
      R(this.#N, r);
    }
    #P = /* @__PURE__ */ _(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#P);
    }
    set autoPanSpeed(r) {
      R(this.#P, r);
    }
    #M = /* @__PURE__ */ _(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#M);
    }
    set connectionDragThreshold(r) {
      R(this.#M, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #A = /* @__PURE__ */ _(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#A);
    }
    set snapGrid(r) {
      R(this.#A, r);
    }
    #z = /* @__PURE__ */ se(!1);
    get dragging() {
      return c(this.#z);
    }
    set dragging(r) {
      R(this.#z, r);
    }
    #T = /* @__PURE__ */ se(null);
    get selectionRect() {
      return c(this.#T);
    }
    set selectionRect(r) {
      R(this.#T, r);
    }
    #D = /* @__PURE__ */ se(!1);
    get selectionKeyPressed() {
      return c(this.#D);
    }
    set selectionKeyPressed(r) {
      R(this.#D, r);
    }
    #I = /* @__PURE__ */ se(!1);
    get multiselectionKeyPressed() {
      return c(this.#I);
    }
    set multiselectionKeyPressed(r) {
      R(this.#I, r);
    }
    #O = /* @__PURE__ */ se(!1);
    get deleteKeyPressed() {
      return c(this.#O);
    }
    set deleteKeyPressed(r) {
      R(this.#O, r);
    }
    #R = /* @__PURE__ */ se(!1);
    get panActivationKeyPressed() {
      return c(this.#R);
    }
    set panActivationKeyPressed(r) {
      R(this.#R, r);
    }
    #L = /* @__PURE__ */ se(!1);
    get zoomActivationKeyPressed() {
      return c(this.#L);
    }
    set zoomActivationKeyPressed(r) {
      R(this.#L, r);
    }
    #H = /* @__PURE__ */ se(null);
    get selectionRectMode() {
      return c(this.#H);
    }
    set selectionRectMode(r) {
      R(this.#H, r);
    }
    #V = /* @__PURE__ */ se("");
    get ariaLiveMessage() {
      return c(this.#V);
    }
    set ariaLiveMessage(r) {
      R(this.#V, r);
    }
    #B = /* @__PURE__ */ _(() => e.props.selectionMode ?? eo.Partial);
    get selectionMode() {
      return c(this.#B);
    }
    set selectionMode(r) {
      R(this.#B, r);
    }
    #F = /* @__PURE__ */ _(() => ({ ...Xl, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#F);
    }
    set nodeTypes(r) {
      R(this.#F, r);
    }
    #K = /* @__PURE__ */ _(() => ({ ...Zl, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#K);
    }
    set edgeTypes(r) {
      R(this.#K, r);
    }
    #Y = /* @__PURE__ */ _(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#Y);
    }
    set noPanClass(r) {
      R(this.#Y, r);
    }
    #X = /* @__PURE__ */ _(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#X);
    }
    set noDragClass(r) {
      R(this.#X, r);
    }
    #Z = /* @__PURE__ */ _(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#Z);
    }
    set noWheelClass(r) {
      R(this.#Z, r);
    }
    #W = /* @__PURE__ */ _(() => Lg(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#W);
    }
    set ariaLabelConfig(r) {
      R(this.#W, r);
    }
    #q = /* @__PURE__ */ se(Q0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#q);
    }
    set _viewport(r) {
      R(this.#q, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #G = (
      // _connection is viewport independent and originating from XYHandle
      /* @__PURE__ */ se(ii)
    );
    get _connection() {
      return c(this.#G);
    }
    set _connection(r) {
      R(this.#G, r);
    }
    #U = /* @__PURE__ */ _(() => this._connection.inProgress ? {
      ...this._connection,
      to: wr(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#U);
    }
    set connection(r) {
      R(this.#U, r);
    }
    #j = /* @__PURE__ */ _(() => e.props.connectionMode ?? zn.Strict);
    get connectionMode() {
      return c(this.#j);
    }
    set connectionMode(r) {
      R(this.#j, r);
    }
    #J = /* @__PURE__ */ _(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#J);
    }
    set connectionRadius(r) {
      R(this.#J, r);
    }
    #Q = /* @__PURE__ */ _(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#Q);
    }
    set isValidConnection(r) {
      R(this.#Q, r);
    }
    #$ = /* @__PURE__ */ _(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#$);
    }
    set selectNodesOnDrag(r) {
      R(this.#$, r);
    }
    #ee = /* @__PURE__ */ _(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#ee);
    }
    set defaultMarkerColor(r) {
      R(this.#ee, r);
    }
    #te = /* @__PURE__ */ _(() => Ug(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#te);
    }
    set markers(r) {
      R(this.#te, r);
    }
    #ne = /* @__PURE__ */ _(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#ne);
    }
    set onlyRenderVisibleElements(r) {
      R(this.#ne, r);
    }
    #re = /* @__PURE__ */ _(() => e.props.onflowerror ?? Dg);
    get onerror() {
      return c(this.#re);
    }
    set onerror(r) {
      R(this.#re, r);
    }
    #oe = /* @__PURE__ */ _(() => e.props.ondelete);
    get ondelete() {
      return c(this.#oe);
    }
    set ondelete(r) {
      R(this.#oe, r);
    }
    #ie = /* @__PURE__ */ _(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#ie);
    }
    set onbeforedelete(r) {
      R(this.#ie, r);
    }
    #se = /* @__PURE__ */ _(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#se);
    }
    set onbeforeconnect(r) {
      R(this.#se, r);
    }
    #ae = /* @__PURE__ */ _(() => e.props.onconnect);
    get onconnect() {
      return c(this.#ae);
    }
    set onconnect(r) {
      R(this.#ae, r);
    }
    #le = /* @__PURE__ */ _(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#le);
    }
    set onconnectstart(r) {
      R(this.#le, r);
    }
    #ce = /* @__PURE__ */ _(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#ce);
    }
    set onconnectend(r) {
      R(this.#ce, r);
    }
    #ue = /* @__PURE__ */ _(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      R(this.#ue, r);
    }
    #de = /* @__PURE__ */ _(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#de);
    }
    set onreconnect(r) {
      R(this.#de, r);
    }
    #fe = /* @__PURE__ */ _(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#fe);
    }
    set onreconnectstart(r) {
      R(this.#fe, r);
    }
    #he = /* @__PURE__ */ _(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#he);
    }
    set onreconnectend(r) {
      R(this.#he, r);
    }
    #ge = /* @__PURE__ */ _(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#ge);
    }
    set clickConnect(r) {
      R(this.#ge, r);
    }
    #ve = /* @__PURE__ */ _(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#ve);
    }
    set onclickconnectstart(r) {
      R(this.#ve, r);
    }
    #pe = /* @__PURE__ */ _(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#pe);
    }
    set onclickconnectend(r) {
      R(this.#pe, r);
    }
    #me = /* @__PURE__ */ se(null);
    get clickConnectStartHandle() {
      return c(this.#me);
    }
    set clickConnectStartHandle(r) {
      R(this.#me, r);
    }
    #ye = /* @__PURE__ */ _(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#ye);
    }
    set onselectiondrag(r) {
      R(this.#ye, r);
    }
    #_e = /* @__PURE__ */ _(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#_e);
    }
    set onselectiondragstart(r) {
      R(this.#_e, r);
    }
    #we = /* @__PURE__ */ _(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      R(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await zg(
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
    _prefersDark = new j0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ _(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      R(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = ii, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Qt() {
  const e = di(io);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const io = /* @__PURE__ */ Symbol();
function Wl(e) {
  const t = $0(e);
  function n(z) {
    t.nodeTypes = {
      ...Xl,
      ...z
    };
  }
  function r(z) {
    t.edgeTypes = {
      ...Zl,
      ...z
    };
  }
  function o(z) {
    t.edges = Xg(z, t.edges);
  }
  const i = (z, k = !1) => {
    t.nodes = t.nodes.map((M) => {
      if (t.connection.inProgress && t.connection.fromNode.id === M.id) {
        const C = t.nodeLookup.get(M.id);
        C && (t.connection = {
          ...t.connection,
          from: hn(C, t.connection.fromHandle, ne.Left, !0)
        });
      }
      const y = z.get(M.id);
      return y ? { ...M, position: y.position, dragging: k } : M;
    });
  };
  function s(z) {
    const { changes: k, updatedInternals: M } = o0(z, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin, t.nodeExtent, t.zIndexMode);
    if (!M)
      return;
    Qg(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent,
      zIndexMode: t.zIndexMode
    }), t.fitViewQueued && t.resolveFitView();
    const y = /* @__PURE__ */ new Map();
    for (const C of k) {
      const S = t.nodeLookup.get(C.id)?.internals.userNode;
      if (!S)
        continue;
      const D = { ...S };
      switch (C.type) {
        case "dimensions": {
          const F = { ...D.measured, ...C.dimensions };
          C.setAttributes && (D.width = C.dimensions?.width ?? D.width, D.height = C.dimensions?.height ?? D.height), D.measured = F;
          break;
        }
        case "position":
          D.position = C.position ?? D.position;
          break;
      }
      y.set(C.id, D);
    }
    t.nodes = t.nodes.map((C) => y.get(C.id) ?? C);
  }
  function a(z) {
    const k = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = z, t.fitViewResolver = k, t.nodes = [...t.nodes], k.promise;
  }
  async function l(z, k, M) {
    const y = typeof M?.zoom < "u" ? M.zoom : t.maxZoom, C = t.panZoom;
    return C ? (await C.setViewport({
      x: t.width / 2 - z * y,
      y: t.height / 2 - k * y,
      zoom: y
    }, { duration: M?.duration, ease: M?.ease, interpolate: M?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(z, k) {
    const M = t.panZoom;
    return M ? M.scaleBy(z, k) : Promise.resolve(!1);
  }
  function d(z) {
    return u(1.2, z);
  }
  function h(z) {
    return u(1 / 1.2, z);
  }
  function f(z) {
    const k = t.panZoom;
    k && (k.setScaleExtent([z, t.maxZoom]), t.minZoom = z);
  }
  function g(z) {
    const k = t.panZoom;
    k && (k.setScaleExtent([t.minZoom, z]), t.maxZoom = z);
  }
  function v(z) {
    const k = t.panZoom;
    k && (k.setTranslateExtent(z), t.translateExtent = z);
  }
  function p(z, k = null) {
    let M = !1;
    const y = z.map((C) => (k ? k.has(C.id) : !0) && C.selected ? (M = !0, { ...C, selected: !1 }) : C);
    return [M, y];
  }
  function m(z) {
    const k = z?.nodes ? new Set(z.nodes.map((F) => F.id)) : null, [M, y] = p(t.nodes, k);
    M && (t.nodes = y);
    const C = z?.edges ? new Set(z.edges.map((F) => F.id)) : null, [S, D] = p(t.edges, C);
    S && (t.edges = D);
  }
  function w(z) {
    const k = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((M) => {
      const y = z.includes(M.id), C = k && M.selected || y;
      return !!M.selected !== C ? { ...M, selected: C } : M;
    }), k || m({ nodes: [] });
  }
  function x(z) {
    const k = t.multiselectionKeyPressed;
    t.edges = t.edges.map((M) => {
      const y = z.includes(M.id), C = k && M.selected || y;
      return !!M.selected !== C ? { ...M, selected: C } : M;
    }), k || m({ edges: [] });
  }
  function E(z, k, M) {
    const y = t.nodeLookup.get(z);
    if (!y) {
      console.warn("012", sr.error012(z));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, y.selected ? (k || y.selected && t.multiselectionKeyPressed) && (m({ nodes: [y], edges: [] }), requestAnimationFrame(() => M?.blur())) : w([z]);
  }
  function b(z) {
    const k = t.edgeLookup.get(z);
    if (!k) {
      console.warn("012", sr.error012(z));
      return;
    }
    (k.selectable || t.elementsSelectable && typeof k.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, k.selected ? k.selected && t.multiselectionKeyPressed && m({ nodes: [], edges: [k] }) : x([z]));
  }
  function T(z, k) {
    const { nodeExtent: M, snapGrid: y, nodeOrigin: C, nodeLookup: S, nodesDraggable: D, onerror: F } = t, N = /* @__PURE__ */ new Map(), O = y?.[0] ?? 5, I = y?.[1] ?? 5, X = z.x * O * k, Y = z.y * I * k;
    for (const K of S.values()) {
      if (!(K.selected && (K.draggable || D && typeof K.draggable > "u")))
        continue;
      let q = {
        x: K.internals.positionAbsolute.x + X,
        y: K.internals.positionAbsolute.y + Y
      };
      y && (q = _r(q, y));
      const { position: J, positionAbsolute: U } = bl({
        nodeId: K.id,
        nextPosition: q,
        nodeLookup: S,
        nodeExtent: M,
        nodeOrigin: C,
        onError: F
      });
      K.position = J, K.internals.positionAbsolute = U, N.set(K.id, K);
    }
    i(N);
  }
  function P(z) {
    return i0({
      delta: z,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const L = (z) => {
    t._connection = { ...z };
  };
  function A() {
    t._connection = ii;
  }
  function B() {
    t.resetStoreValues(), m();
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
    unselectNodesAndEdges: m,
    addSelectedNodes: w,
    addSelectedEdges: x,
    handleNodeSelection: E,
    handleEdgeSelection: b,
    moveSelectedNodes: T,
    panBy: P,
    updateConnection: L,
    cancelConnection: A,
    reset: B
  });
}
function ev(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: h } = t, f = k0({
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
var tv = /* @__PURE__ */ ee('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function nv(e, t) {
  oe(t, !0);
  let n = V(t, "store", 15), r = /* @__PURE__ */ _(() => n().panActivationKeyPressed || t.panOnDrag), o = /* @__PURE__ */ _(() => n().panActivationKeyPressed || t.panOnScroll);
  const { viewport: i } = n();
  let s = !1;
  Ve(() => {
    !s && n().viewportInitialized && (t.oninit?.(), s = !0);
  });
  var a = tv(), l = Z(a);
  He(l, () => t.children), ze(a, (u, d) => ev?.(u, d), () => ({
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
  })), H(e, a), ie();
}
function Os(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Rs(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Ls(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var rv = /* @__PURE__ */ ee("<div><!></div>");
function ov(e, t) {
  oe(t, !0);
  let n = V(t, "store", 15), r = V(t, "panOnDrag", 3, !0), o = V(t, "paneClickDistance", 3, 1), i, s = null, a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ _(() => n().panActivationKeyPressed || r()), d = /* @__PURE__ */ _(() => n().selectionKeyPressed || !!n().selectionRect || t.selectionOnDrag && c(u) !== !0), h = /* @__PURE__ */ _(() => n().elementsSelectable && (c(d) || n().selectionRectMode === "user")), f = !1;
  function g(A) {
    if (s = i?.getBoundingClientRect(), !s) return;
    const B = A.target === i, W = !B && !!A.target.closest(".nokey"), z = t.selectionOnDrag && B || n().selectionKeyPressed;
    if (W || !c(d) || !z || A.button !== 0 || !A.isPrimary)
      return;
    A.target?.setPointerCapture?.(A.pointerId), f = !1;
    const { x: k, y: M } = lt(A, s);
    n(n().selectionRect = { width: 0, height: 0, startX: k, startY: M, x: k, y: M }, !0), B || (A.stopPropagation(), A.preventDefault());
  }
  function v(A) {
    if (!c(d) || !s || !n().selectionRect)
      return;
    const B = lt(A, s), { startX: W = 0, startY: z = 0 } = n().selectionRect;
    if (!f) {
      const S = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(B.x - W, B.y - z) <= S)
        return;
      n().unselectNodesAndEdges(), t.onselectionstart?.(A);
    }
    f = !0;
    const k = {
      ...n().selectionRect,
      x: B.x < W ? B.x : W,
      y: B.y < z ? B.y : z,
      width: Math.abs(B.x - W),
      height: Math.abs(B.y - z)
    }, M = a, y = l;
    a = new Set(Pi(
      n().nodeLookup,
      k,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === eo.Partial,
      !0
    ).map((S) => S.id));
    const C = n().defaultEdgeOptions.selectable ?? !0;
    l = /* @__PURE__ */ new Set();
    for (const S of a) {
      const D = n().connectionLookup.get(S);
      if (D)
        for (const { edgeId: F } of D.values()) {
          const N = n().edgeLookup.get(F);
          N && (N.selectable ?? C) && l.add(F);
        }
    }
    Ls(M, a) || n(n().nodes = n().nodes.map(Rs(a)), !0), Ls(y, l) || n(n().edges = n().edges.map(Rs(l)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = k, !0);
  }
  function p(A) {
    A.button === 0 && (A.target?.releasePointerCapture?.(A.pointerId), !f && A.target === i && x?.(A), n(n().selectionRect = null, !0), f && n(n().selectionRectMode = a.size > 0 ? "nodes" : null, !0), f && t.onselectionend?.(A));
  }
  const m = (A) => {
    if (Array.isArray(c(u)) && c(u).includes(2)) {
      A.preventDefault();
      return;
    }
    t.onpanecontextmenu?.({ event: A });
  }, w = (A) => {
    f && (A.stopPropagation(), f = !1);
  };
  function x(A) {
    if (f || n().connection.inProgress) {
      f = !1;
      return;
    }
    t.onpaneclick?.({ event: A }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var E = rv();
  let b;
  var T = /* @__PURE__ */ _(() => c(h) ? void 0 : Os(x, i));
  E.__click = function(...A) {
    c(T)?.apply(this, A);
  }, E.__pointermove = function(...A) {
    (c(h) ? v : void 0)?.apply(this, A);
  }, E.__pointerup = function(...A) {
    (c(h) ? p : void 0)?.apply(this, A);
  };
  var P = /* @__PURE__ */ _(() => Os(m, i));
  E.__contextmenu = function(...A) {
    c(P)?.apply(this, A);
  };
  var L = Z(E);
  He(L, () => t.children), Bn(E, (A) => i = A, () => i), ue((A) => b = De(E, 1, "svelte-flow__pane svelte-flow__container", null, b, A), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(d)
    })
  ]), cn(
    "pointerdown",
    E,
    function(...A) {
      (c(h) ? g : void 0)?.apply(this, A);
    },
    !0
  ), cn(
    "click",
    E,
    function(...A) {
      (c(h) ? w : void 0)?.apply(this, A);
    },
    !0
  ), H(e, E), ie();
}
pn(["click", "pointermove", "pointerup", "contextmenu"]);
var iv = /* @__PURE__ */ ee('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function sv(e, t) {
  oe(t, !0);
  var n = iv();
  let r;
  var o = Z(n);
  He(o, () => t.children), ue(() => r = Be(n, "", r, {
    transform: `translate(${t.store.viewport.x ?? ""}px, ${t.store.viewport.y ?? ""}px) scale(${t.store.viewport.zoom ?? ""})`
  })), H(e, n), ie();
}
function ql(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = c0({
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
var av = /* @__PURE__ */ ee('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>'), lv = /* @__PURE__ */ ee('<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>', 1);
function cv(e, t) {
  oe(t, !0);
  var n = lv(), r = $(n), o = Z(r), i = j(r, 2), s = Z(i), a = j(i, 2);
  {
    var l = (u) => {
      var d = av(), h = Z(d);
      ue(() => {
        re(d, "id", `${uv}-${t.store.flowId}`), xe(h, t.store.ariaLiveMessage);
      }), H(u, d);
    };
    le(a, (u) => {
      t.store.disableKeyboardA11y || u(l);
    });
  }
  ue(() => {
    re(r, "id", `${Gl}-${t.store.flowId}`), xe(o, t.store.disableKeyboardA11y ? t.store.ariaLabelConfig["node.a11yDescription.default"] : t.store.ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), re(i, "id", `${Ul}-${t.store.flowId}`), xe(s, t.store.ariaLabelConfig["edge.a11yDescription.default"]);
  }), H(e, n), ie();
}
const Gl = "svelte-flow__node-desc", Ul = "svelte-flow__edge-desc", uv = "svelte-flow__aria-live";
var dv = /* @__PURE__ */ ee("<div><!></div>");
function fv(e, t) {
  oe(t, !0);
  let n = V(t, "store", 15), r = /* @__PURE__ */ _(() => Ae(t.node.data, () => ({}), !0)), o = /* @__PURE__ */ _(() => Ae(t.node.selected, !1)), i = /* @__PURE__ */ _(() => t.node.draggable), s = /* @__PURE__ */ _(() => t.node.selectable), a = /* @__PURE__ */ _(() => Ae(t.node.deletable, !0)), l = /* @__PURE__ */ _(() => t.node.connectable), u = /* @__PURE__ */ _(() => t.node.focusable), d = /* @__PURE__ */ _(() => Ae(t.node.hidden, !1)), h = /* @__PURE__ */ _(() => Ae(t.node.dragging, !1)), f = /* @__PURE__ */ _(() => Ae(t.node.style, "")), g = /* @__PURE__ */ _(() => t.node.class), v = /* @__PURE__ */ _(() => Ae(t.node.type, "default")), p = /* @__PURE__ */ _(() => t.node.parentId), m = /* @__PURE__ */ _(() => t.node.sourcePosition), w = /* @__PURE__ */ _(() => t.node.targetPosition), x = /* @__PURE__ */ _(() => Ae(t.node.measured, () => ({ width: 0, height: 0 }), !0).width), E = /* @__PURE__ */ _(() => Ae(t.node.measured, () => ({ width: 0, height: 0 }), !0).height), b = /* @__PURE__ */ _(() => t.node.initialWidth), T = /* @__PURE__ */ _(() => t.node.initialHeight), P = /* @__PURE__ */ _(() => t.node.width), L = /* @__PURE__ */ _(() => t.node.height), A = /* @__PURE__ */ _(() => t.node.dragHandle), B = /* @__PURE__ */ _(() => Ae(t.node.internals.z, 0)), W = /* @__PURE__ */ _(() => t.node.internals.positionAbsolute.x), z = /* @__PURE__ */ _(() => t.node.internals.positionAbsolute.y), k = /* @__PURE__ */ _(() => t.node.internals.userNode), { id: M } = t.node, y = /* @__PURE__ */ _(() => c(i) ?? n().nodesDraggable), C = /* @__PURE__ */ _(() => c(s) ?? n().elementsSelectable), S = /* @__PURE__ */ _(() => c(l) ?? n().nodesConnectable), D = /* @__PURE__ */ _(() => Sl(t.node)), F = /* @__PURE__ */ _(() => !!t.node.internals.handleBounds), N = /* @__PURE__ */ _(() => c(D) && c(F)), O = /* @__PURE__ */ _(() => c(u) ?? n().nodesFocusable);
  function I(ge) {
    return n().parentLookup.has(ge);
  }
  let X = /* @__PURE__ */ _(() => I(M)), Y = /* @__PURE__ */ se(null), K = null, G = c(v), q = c(m), J = c(w), U = /* @__PURE__ */ _(() => n().nodeTypes[c(v)] ?? Kl), te = /* @__PURE__ */ _(() => n().ariaLabelConfig), he = {
    get value() {
      return c(S);
    }
  };
  S0(M), N0(he);
  let Q = /* @__PURE__ */ _(() => {
    const ge = c(x) === void 0 ? c(P) ?? c(b) : c(P), Ee = c(E) === void 0 ? c(L) ?? c(T) : c(L);
    if (!(ge === void 0 && Ee === void 0 && c(f) === void 0))
      return `${c(f)};${ge ? `width:${xt(ge)};` : ""}${Ee ? `height:${xt(Ee)};` : ""}`;
  });
  Ve(() => {
    (c(v) !== G || c(m) !== q || c(w) !== J) && c(Y) !== null && requestAnimationFrame(() => {
      c(Y) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[M, { id: M, nodeElement: c(Y), force: !0 }]]));
    }), G = c(v), q = c(m), J = c(w);
  }), Ve(() => {
    t.resizeObserver && (!c(N) || c(Y) !== K) && (K && t.resizeObserver.unobserve(K), c(Y) && t.resizeObserver.observe(c(Y)), K = c(Y));
  }), po(() => {
    K && t.resizeObserver?.unobserve(K);
  });
  function pe(ge) {
    c(C) && (!n().selectNodesOnDrag || !c(y) || n().nodeDragThreshold > 0) && n().handleNodeSelection(M), t.onnodeclick?.({ node: c(k), event: ge });
  }
  function ae(ge) {
    if (!(Pl(ge) || n().disableKeyboardA11y))
      if (_l.includes(ge.key) && c(C)) {
        const Ee = ge.key === "Escape";
        n().handleNodeSelection(M, Ee, c(Y));
      } else c(y) && t.node.selected && Object.prototype.hasOwnProperty.call(oo, ge.key) && (ge.preventDefault(), n(
        n().ariaLiveMessage = c(te)["node.a11yDescription.ariaLiveMessage"]({
          direction: ge.key.replace("Arrow", "").toLowerCase(),
          x: ~~t.node.internals.positionAbsolute.x,
          y: ~~t.node.internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(oo[ge.key], ge.shiftKey ? 4 : 1));
  }
  const be = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(Y)?.matches(":focus-visible"))
      return;
    const { width: ge, height: Ee, viewport: ot } = n();
    Pi(/* @__PURE__ */ new Map([[M, t.node]]), { x: 0, y: 0, width: ge, height: Ee }, [ot.x, ot.y, ot.zoom], !0).length > 0 || n().setCenter(t.node.position.x + (t.node.measured.width ?? 0) / 2, t.node.position.y + (t.node.measured.height ?? 0) / 2, { zoom: ot.zoom });
  };
  var Ue = fe(), je = $(Ue);
  {
    var Fe = (ge) => {
      var Ee = dv();
      bt(Ee, () => ({
        "data-id": M,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(v)}`,
          c(g)
        ],
        style: c(Q),
        onclick: pe,
        onpointerenter: t.onnodepointerenter ? (ye) => t.onnodepointerenter({ node: c(k), event: ye }) : void 0,
        onpointerleave: t.onnodepointerleave ? (ye) => t.onnodepointerleave({ node: c(k), event: ye }) : void 0,
        onpointermove: t.onnodepointermove ? (ye) => t.onnodepointermove({ node: c(k), event: ye }) : void 0,
        oncontextmenu: t.onnodecontextmenu ? (ye) => t.onnodecontextmenu({ node: c(k), event: ye }) : void 0,
        onkeydown: c(O) ? ae : void 0,
        onfocus: c(O) ? be : void 0,
        tabIndex: c(O) ? 0 : void 0,
        role: t.node.ariaRole ?? (c(O) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Gl}-${n().flowId}`,
        ...t.node.domAttributes,
        [Ht]: {
          dragging: c(h),
          selected: c(o),
          draggable: c(y),
          connectable: c(S),
          selectable: c(C),
          nopan: c(y),
          parent: c(X)
        },
        [Pt]: {
          "z-index": c(B),
          transform: `translate(${c(W) ?? ""}px, ${c(z) ?? ""}px)`,
          visibility: c(D) ? "visible" : "hidden"
        }
      }));
      var ot = Z(Ee);
      gr(ot, () => c(U), (ye, mn) => {
        mn(ye, {
          get data() {
            return c(r);
          },
          get id() {
            return M;
          },
          get selected() {
            return c(o);
          },
          get selectable() {
            return c(C);
          },
          get deletable() {
            return c(a);
          },
          get sourcePosition() {
            return c(m);
          },
          get targetPosition() {
            return c(w);
          },
          get zIndex() {
            return c(B);
          },
          get dragging() {
            return c(h);
          },
          get draggable() {
            return c(y);
          },
          get dragHandle() {
            return c(A);
          },
          get parentId() {
            return c(p);
          },
          get type() {
            return c(v);
          },
          get isConnectable() {
            return c(S);
          },
          get positionAbsoluteX() {
            return c(W);
          },
          get positionAbsoluteY() {
            return c(z);
          },
          get width() {
            return c(P);
          },
          get height() {
            return c(L);
          }
        });
      }), ze(Ee, (ye, mn) => ql?.(ye, mn), () => ({
        nodeId: M,
        isSelectable: c(C),
        disabled: !c(y),
        handleSelector: c(A),
        noDragClass: n().noDragClass,
        nodeClickDistance: t.nodeClickDistance,
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (ye, mn, Fn, Kn) => {
          t.onnodedrag?.({ event: ye, targetNode: Fn, nodes: Kn });
        },
        onDragStart: (ye, mn, Fn, Kn) => {
          t.onnodedragstart?.({ event: ye, targetNode: Fn, nodes: Kn });
        },
        onDragStop: (ye, mn, Fn, Kn) => {
          t.onnodedragstop?.({ event: ye, targetNode: Fn, nodes: Kn });
        },
        store: n()
      })), Bn(Ee, (ye) => R(Y, ye), () => c(Y)), H(ge, Ee);
    };
    le(je, (ge) => {
      c(d) || ge(Fe);
    });
  }
  H(e, Ue), ie();
}
var hv = /* @__PURE__ */ ee('<div class="svelte-flow__nodes"></div>');
function gv(e, t) {
  oe(t, !0);
  let n = V(t, "store", 15);
  const r = typeof ResizeObserver > "u" ? null : new ResizeObserver((i) => {
    const s = /* @__PURE__ */ new Map();
    i.forEach((a) => {
      const l = a.target.getAttribute("data-id");
      s.set(l, { id: l, nodeElement: a.target, force: !0 });
    }), n().updateNodeInternals(s);
  });
  po(() => {
    r?.disconnect();
  });
  var o = hv();
  It(o, 21, () => n().visible.nodes.values(), (i) => i.id, (i, s) => {
    fv(i, {
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
  }), H(e, o), ie();
}
var vv = /* @__PURE__ */ _e('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function pv(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ _(() => t.edge.id), r = /* @__PURE__ */ _(() => t.edge.source), o = /* @__PURE__ */ _(() => t.edge.target), i = /* @__PURE__ */ _(() => t.edge.sourceX), s = /* @__PURE__ */ _(() => t.edge.sourceY), a = /* @__PURE__ */ _(() => t.edge.targetX), l = /* @__PURE__ */ _(() => t.edge.targetY), u = /* @__PURE__ */ _(() => t.edge.sourcePosition), d = /* @__PURE__ */ _(() => t.edge.targetPosition), h = /* @__PURE__ */ _(() => Ae(t.edge.animated, !1)), f = /* @__PURE__ */ _(() => Ae(t.edge.selected, !1)), g = /* @__PURE__ */ _(() => t.edge.label), v = /* @__PURE__ */ _(() => t.edge.labelStyle), p = /* @__PURE__ */ _(() => Ae(t.edge.data, () => ({}), !0)), m = /* @__PURE__ */ _(() => t.edge.style), w = /* @__PURE__ */ _(() => t.edge.interactionWidth), x = /* @__PURE__ */ _(() => Ae(t.edge.type, "default")), E = /* @__PURE__ */ _(() => t.edge.sourceHandle), b = /* @__PURE__ */ _(() => t.edge.targetHandle), T = /* @__PURE__ */ _(() => t.edge.markerStart), P = /* @__PURE__ */ _(() => t.edge.markerEnd), L = /* @__PURE__ */ _(() => t.edge.selectable), A = /* @__PURE__ */ _(() => t.edge.focusable), B = /* @__PURE__ */ _(() => Ae(t.edge.deletable, !0)), W = /* @__PURE__ */ _(() => t.edge.hidden), z = /* @__PURE__ */ _(() => t.edge.zIndex), k = /* @__PURE__ */ _(() => t.edge.class), M = /* @__PURE__ */ _(() => t.edge.ariaLabel);
  M0(c(n));
  let y = null, C = /* @__PURE__ */ _(() => c(L) ?? t.store.elementsSelectable), S = /* @__PURE__ */ _(() => c(A) ?? t.store.edgesFocusable), D = /* @__PURE__ */ _(() => t.store.edgeTypes[c(x)] ?? Yl), F = /* @__PURE__ */ _(() => c(T) ? `url('#${ai(c(T), t.store.flowId)}')` : void 0), N = /* @__PURE__ */ _(() => c(P) ? `url('#${ai(c(P), t.store.flowId)}')` : void 0);
  function O(q) {
    const J = t.store.edgeLookup.get(c(n));
    J && (c(C) && t.store.handleEdgeSelection(c(n)), t.onedgeclick?.({ event: q, edge: J }));
  }
  function I(q, J) {
    const U = t.store.edgeLookup.get(c(n));
    U && J({ event: q, edge: U });
  }
  function X(q) {
    if (!t.store.disableKeyboardA11y && _l.includes(q.key) && c(C)) {
      const { unselectNodesAndEdges: J, addSelectedEdges: U } = t.store;
      q.key === "Escape" ? (y?.blur(), J({ edges: [t.edge] })) : U([c(n)]);
    }
  }
  var Y = fe(), K = $(Y);
  {
    var G = (q) => {
      var J = vv();
      let U;
      var te = Z(J);
      bt(te, () => ({
        class: ["svelte-flow__edge", c(k)],
        "data-id": c(n),
        onclick: O,
        oncontextmenu: t.onedgecontextmenu ? (Q) => {
          I(Q, t.onedgecontextmenu);
        } : void 0,
        onpointerenter: t.onedgepointerenter ? (Q) => {
          I(Q, t.onedgepointerenter);
        } : void 0,
        onpointerleave: t.onedgepointerleave ? (Q) => {
          I(Q, t.onedgepointerleave);
        } : void 0,
        "aria-label": c(M) === null ? void 0 : c(M) ? c(M) : `Edge from ${c(r)} to ${c(o)}`,
        "aria-describedby": c(S) ? `${Ul}-${t.store.flowId}` : void 0,
        role: t.edge.ariaRole ?? (c(S) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(S) ? X : void 0,
        tabindex: c(S) ? 0 : void 0,
        ...t.edge.domAttributes,
        [Ht]: {
          animated: c(h),
          selected: c(f),
          selectable: c(C)
        }
      }));
      var he = Z(te);
      gr(he, () => c(D), (Q, pe) => {
        pe(Q, {
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
            return c(p);
          },
          get style() {
            return c(m);
          },
          get interactionWidth() {
            return c(w);
          },
          get selectable() {
            return c(C);
          },
          get deletable() {
            return c(B);
          },
          get type() {
            return c(x);
          },
          get sourceHandleId() {
            return c(E);
          },
          get targetHandleId() {
            return c(b);
          },
          get markerStart() {
            return c(F);
          },
          get markerEnd() {
            return c(N);
          }
        });
      }), Bn(te, (Q) => y = Q, () => y), ue(() => U = Be(J, "", U, { "z-index": c(z) })), H(q, J);
    };
    le(K, (q) => {
      c(W) || q(G);
    });
  }
  H(e, Y), ie();
}
zc();
var mv = /* @__PURE__ */ _e("<defs></defs>");
function yv(e, t) {
  oe(t, !1);
  const n = Qt();
  Ya();
  var r = mv();
  It(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    xv(o, we(() => c(i)));
  }), H(e, r), ie();
}
var _v = /* @__PURE__ */ _e('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), wv = /* @__PURE__ */ _e('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), bv = /* @__PURE__ */ _e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function xv(e, t) {
  oe(t, !0);
  let n = V(t, "width", 3, 12.5), r = V(t, "height", 3, 12.5), o = V(t, "markerUnits", 3, "strokeWidth"), i = V(t, "orient", 3, "auto-start-reverse"), s = V(t, "color", 3, "none");
  var a = bv(), l = Z(a);
  {
    var u = (h) => {
      var f = _v();
      let g;
      ue(() => {
        re(f, "stroke-width", t.strokeWidth), g = Be(f, "", g, { stroke: s() });
      }), H(h, f);
    }, d = (h) => {
      var f = fe(), g = $(f);
      {
        var v = (p) => {
          var m = wv();
          let w;
          ue(() => {
            re(m, "stroke-width", t.strokeWidth), w = Be(m, "", w, { stroke: s(), fill: s() });
          }), H(p, m);
        };
        le(
          g,
          (p) => {
            t.type === to.ArrowClosed && p(v);
          },
          !0
        );
      }
      H(h, f);
    };
    le(l, (h) => {
      t.type === to.Arrow ? h(u) : h(d, !1);
    });
  }
  ue(() => {
    re(a, "id", t.id), re(a, "markerWidth", `${n()}`), re(a, "markerHeight", `${r()}`), re(a, "markerUnits", o()), re(a, "orient", i());
  }), H(e, a), ie();
}
var kv = /* @__PURE__ */ ee('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Ev(e, t) {
  oe(t, !0);
  let n = V(t, "store", 15);
  var r = kv(), o = Z(r), i = Z(o);
  yv(i, {});
  var s = j(o, 2);
  It(s, 17, () => n().visible.edges.values(), (a) => a.id, (a, l) => {
    pv(a, {
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
  }), H(e, r), ie();
}
var Sv = /* @__PURE__ */ ee('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function jl(e, t) {
  oe(t, !0);
  let n = V(t, "x", 3, 0), r = V(t, "y", 3, 0), o = V(t, "width", 3, 0), i = V(t, "height", 3, 0), s = V(t, "isVisible", 3, !0);
  var a = fe(), l = $(a);
  {
    var u = (d) => {
      var h = Sv();
      let f;
      ue((g) => f = Be(h, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : xt(o()),
          height: typeof i() == "string" ? i() : xt(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), H(d, h);
    };
    le(l, (d) => {
      s() && d(u);
    });
  }
  H(e, a), ie();
}
var Cv = /* @__PURE__ */ ee("<div><!></div>");
function Nv(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ se(void 0);
  Ve(() => {
    t.store.disableKeyboardA11y || c(n)?.focus({ preventScroll: !0 });
  });
  let r = /* @__PURE__ */ _(() => {
    if (t.store.selectionRectMode === "nodes") {
      t.store.nodes;
      const d = yr(t.store.nodeLookup, { filter: (h) => !!h.selected });
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
    Object.prototype.hasOwnProperty.call(oo, d.key) && (d.preventDefault(), t.store.moveSelectedNodes(oo[d.key], d.shiftKey ? 4 : 1));
  }
  var a = fe(), l = $(a);
  {
    var u = (d) => {
      var h = Cv();
      h.__contextmenu = o, h.__click = i, h.__keydown = function(...v) {
        (t.store.disableKeyboardA11y ? void 0 : s)?.apply(this, v);
      };
      let f;
      var g = Z(h);
      jl(g, { width: "100%", height: "100%", x: 0, y: 0 }), ze(h, (v, p) => ql?.(v, p), () => ({
        disabled: !1,
        store: t.store,
        onDrag: (v, p, m, w) => {
          t.onnodedrag?.({ event: v, targetNode: null, nodes: w });
        },
        onDragStart: (v, p, m, w) => {
          t.onnodedragstart?.({ event: v, targetNode: null, nodes: w });
        },
        onDragStop: (v, p, m, w) => {
          t.onnodedragstop?.({ event: v, targetNode: null, nodes: w });
        }
      })), Bn(h, (v) => R(n, v), () => c(n)), ue(
        (v) => {
          De(h, 1, Ut(["svelte-flow__selection-wrapper", t.store.noPanClass]), "svelte-sf2y5e"), re(h, "role", t.store.disableKeyboardA11y ? void 0 : "button"), re(h, "tabindex", t.store.disableKeyboardA11y ? void 0 : -1), f = Be(h, "", f, v);
        },
        [
          () => ({
            width: xt(c(r).width),
            height: xt(c(r).height),
            transform: `translate(${c(r).x ?? ""}px, ${c(r).y ?? ""}px)`
          })
        ]
      ), H(d, h);
    };
    le(l, (d) => {
      t.store.selectionRectMode === "nodes" && c(r) && zt(c(r).x) && zt(c(r).y) && d(u);
    });
  }
  H(e, a), ie();
}
pn(["contextmenu", "click", "keydown"]);
function Pv(e) {
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
function ft(e, t) {
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
      }, { modifier: f, key: g, callback: v, preventDefault: p, enabled: m } = h;
      if (m) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const x = Array.isArray(f) ? f : [f];
          let E = !1;
          for (const b of x)
            if ((Array.isArray(b) ? b : [b]).reduce(
              (P, L) => P | Pv(L),
              0
            ) === u) {
              E = !0;
              break;
            }
          if (!E) continue;
        }
        p && a.preventDefault();
        const w = {
          node: e,
          trigger: h,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: w })), v?.(w);
      }
    }
  }
  let s;
  return n && (s = Wo(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = Wo(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function Jl() {
  const e = /* @__PURE__ */ _(Qt), t = (i) => {
    const s = Ds(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? Rg(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Dn(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = ke(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Ds(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = ke(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && V0(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : Hs(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : Hs(c(e).edgeLookup, i),
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
    getViewport: () => ea(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = Mi(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
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
      const l = bs(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const h = c(e).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = Dn(h), g = ar(f, u);
        return s && g > 0 || g >= f.width * f.height || g >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const u = bs(i) ? i : t(i);
      if (!u)
        return !1;
      const d = ar(u, s);
      return a && d > 0 || d >= s.width * s.height || d >= u.width * u.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Tg({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = ke(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = ke(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: h, y: f } = c(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - f };
      return wr(g, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), h = ro(i, [s, a, l]);
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
    getNodesBounds: (i) => Pg(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Hs(e, t) {
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
function Mv(e, t) {
  oe(t, !0);
  let n = V(t, "store", 15), r = V(t, "selectionKey", 3, "Shift"), o = V(t, "multiSelectionKey", 19, () => lr() ? "Meta" : "Control"), i = V(t, "deleteKey", 3, "Backspace"), s = V(t, "panActivationKey", 3, " "), a = V(t, "zoomActivationKey", 19, () => lr() ? "Meta" : "Control"), { deleteElements: l } = Jl();
  function u(p) {
    return p !== null && typeof p == "object";
  }
  function d(p) {
    return u(p) ? p.modifier || [] : [];
  }
  function h(p) {
    return p == null ? "" : u(p) ? p.key : p;
  }
  function f(p, m) {
    return (Array.isArray(p) ? p : [p]).map((x) => {
      const E = h(x);
      return {
        key: E,
        modifier: d(x),
        enabled: E !== null,
        callback: m
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function v() {
    const p = n().nodes.filter((w) => w.selected), m = n().edges.filter((w) => w.selected);
    l({ nodes: p, edges: m });
  }
  cn("blur", Ie, g), cn("contextmenu", Ie, g), ze(Ie, (p, m) => ft?.(p, m), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), ze(Ie, (p, m) => ft?.(p, m), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ze(Ie, (p, m) => ft?.(p, m), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), ze(Ie, (p, m) => ft?.(p, m), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ze(Ie, (p, m) => ft?.(p, m), () => ({
    trigger: f(i(), (p) => {
      !(p.originalEvent.ctrlKey || p.originalEvent.metaKey || p.originalEvent.shiftKey) && !Pl(p.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), ze(Ie, (p, m) => ft?.(p, m), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), ze(Ie, (p, m) => ft?.(p, m), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ze(Ie, (p, m) => ft?.(p, m), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ze(Ie, (p, m) => ft?.(p, m), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ze(Ie, (p, m) => ft?.(p, m), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ie();
}
var Av = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__connection-path"></path>'), zv = /* @__PURE__ */ _e('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Tv(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ _(() => {
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
      case Vt.Bezier: {
        const [a] = Al(s);
        return a;
      }
      case Vt.Straight: {
        const [a] = Tl(s);
        return a;
      }
      case Vt.Step:
      case Vt.SmoothStep: {
        const [a] = Ai({
          ...s,
          borderRadius: t.type === Vt.Step ? 0 : void 0
        });
        return a;
      }
    }
  });
  var r = fe(), o = $(r);
  {
    var i = (s) => {
      var a = zv(), l = Z(a), u = Z(l);
      {
        var d = (f) => {
          var g = fe(), v = $(g);
          gr(v, () => t.LineComponent, (p, m) => {
            m(p, {});
          }), H(f, g);
        }, h = (f) => {
          var g = Av();
          ue(() => {
            re(g, "d", c(n)), Be(g, t.style);
          }), H(f, g);
        };
        le(u, (f) => {
          t.LineComponent ? f(d) : f(h, !1);
        });
      }
      ue(
        (f) => {
          re(a, "width", t.store.width), re(a, "height", t.store.height), Be(a, t.containerStyle), De(l, 0, f);
        },
        [
          () => Ut([
            "svelte-flow__connection",
            Cg(t.store.connection.isValid)
          ])
        ]
      ), H(s, a);
    };
    le(o, (s) => {
      t.store.connection.inProgress && s(i);
    });
  }
  H(e, r), ie();
}
var Dv = /* @__PURE__ */ ee("<div><!></div>");
function Ri(e, t) {
  oe(t, !0);
  let n = V(t, "position", 3, "top-right"), r = /* @__PURE__ */ jt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "style",
    "class",
    "children"
  ]), o = /* @__PURE__ */ _(() => `${n()}`.split("-"));
  var i = Dv();
  bt(i, (a) => ({ class: a, style: t.style, ...r }), [
    () => [
      "svelte-flow__panel",
      t.class,
      ...c(o)
    ]
  ]);
  var s = Z(i);
  He(s, () => t.children ?? Ye), H(e, i), ie();
}
var Iv = /* @__PURE__ */ ee('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Ov(e, t) {
  oe(t, !0);
  let n = V(t, "position", 3, "bottom-right");
  var r = fe(), o = $(r);
  {
    var i = (s) => {
      Ri(s, {
        get position() {
          return n();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (a, l) => {
          var u = Iv();
          H(a, u);
        },
        $$slots: { default: !0 }
      });
    };
    le(o, (s) => {
      t.proOptions?.hideAttribution || s(i);
    });
  }
  H(e, r), ie();
}
var Rv = /* @__PURE__ */ ee("<div><!></div>");
function Lv(e, t) {
  oe(t, !0);
  let n = V(t, "domNode", 15), r = V(t, "clientWidth", 15), o = V(t, "clientHeight", 15), i = /* @__PURE__ */ _(() => t.rest.class), s = /* @__PURE__ */ _(() => su(t.rest, [
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
  var l = Rv();
  bt(
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
      [Pt]: d
    }),
    [
      () => ({
        width: xt(t.width),
        height: xt(t.height)
      })
    ],
    void 0,
    void 0,
    "svelte-mkap6j"
  );
  var u = Z(l);
  He(u, () => t.children ?? Ye), Bn(l, (d) => n(d), () => n()), Wr(l, "clientHeight", o), Wr(l, "clientWidth", r), H(e, l), ie();
}
var Hv = /* @__PURE__ */ ee('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Vv = /* @__PURE__ */ ee("<!> <!>", 1), Bv = /* @__PURE__ */ ee("<!> <!> <!> <!> <!>", 1);
function Fv(e, t) {
  oe(t, !0);
  let n = V(t, "paneClickDistance", 3, 1), r = V(t, "nodeClickDistance", 3, 1), o = V(t, "panOnScrollMode", 19, () => Sn.Free), i = V(t, "preventScrolling", 3, !0), s = V(t, "zoomOnScroll", 3, !0), a = V(t, "zoomOnDoubleClick", 3, !0), l = V(t, "zoomOnPinch", 3, !0), u = V(t, "panOnScroll", 3, !1), d = V(t, "panOnScrollSpeed", 3, 0.5), h = V(t, "panOnDrag", 3, !0), f = V(t, "selectionOnDrag", 3, !1), g = V(t, "connectionLineType", 19, () => Vt.Bezier), v = V(t, "nodes", 31, () => gt([])), p = V(t, "edges", 31, () => gt([])), m = V(t, "viewport", 15, void 0), w = /* @__PURE__ */ jt(t, [
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
  ]), x = Wl({
    props: w,
    width: t.width,
    height: t.height,
    get nodes() {
      return v();
    },
    set nodes(b) {
      v(b);
    },
    get edges() {
      return p();
    },
    set edges(b) {
      p(b);
    },
    get viewport() {
      return m();
    },
    set viewport(b) {
      m(b);
    }
  });
  const E = di(io);
  E && E.setStore && E.setStore(x), fi(io, {
    provider: !1,
    getStore() {
      return x;
    }
  }), Ve(() => {
    const b = { nodes: x.selectedNodes, edges: x.selectedEdges };
    ke(() => t.onselectionchange)?.(b);
    for (const T of x.selectionChangeHandlers.values())
      T(b);
  }), po(() => {
    x.reset();
  }), Lv(e, {
    get colorMode() {
      return x.colorMode;
    },
    get width() {
      return t.width;
    },
    get height() {
      return t.height;
    },
    get rest() {
      return w;
    },
    get domNode() {
      return x.domNode;
    },
    set domNode(b) {
      x.domNode = b;
    },
    get clientWidth() {
      return x.width;
    },
    set clientWidth(b) {
      x.width = b;
    },
    get clientHeight() {
      return x.height;
    },
    set clientHeight(b) {
      x.height = b;
    },
    children: (b, T) => {
      var P = Bv(), L = $(P);
      Mv(L, {
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
          return x;
        },
        set store(k) {
          x = k;
        }
      });
      var A = j(L, 2);
      nv(A, {
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
          return x;
        },
        set store(k) {
          x = k;
        },
        children: (k, M) => {
          ov(k, {
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
              return x;
            },
            set store(y) {
              x = y;
            },
            children: (y, C) => {
              var S = Vv(), D = $(S);
              sv(D, {
                get store() {
                  return x;
                },
                set store(N) {
                  x = N;
                },
                children: (N, O) => {
                  var I = Hv(), X = j($(I), 2);
                  Ev(X, {
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
                      return x;
                    },
                    set store(q) {
                      x = q;
                    }
                  });
                  var Y = j(X, 4);
                  Tv(Y, {
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
                      return x;
                    },
                    set store(q) {
                      x = q;
                    }
                  });
                  var K = j(Y, 2);
                  gv(K, {
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
                      return x;
                    },
                    set store(q) {
                      x = q;
                    }
                  });
                  var G = j(K, 2);
                  Nv(G, {
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
                      return x;
                    },
                    set store(q) {
                      x = q;
                    }
                  }), H(N, I);
                },
                $$slots: { default: !0 }
              });
              var F = j(D, 2);
              {
                let N = /* @__PURE__ */ _(() => !!(x.selectionRect && x.selectionRectMode === "user")), O = /* @__PURE__ */ _(() => x.selectionRect?.width), I = /* @__PURE__ */ _(() => x.selectionRect?.height), X = /* @__PURE__ */ _(() => x.selectionRect?.x), Y = /* @__PURE__ */ _(() => x.selectionRect?.y);
                jl(F, {
                  get isVisible() {
                    return c(N);
                  },
                  get width() {
                    return c(O);
                  },
                  get height() {
                    return c(I);
                  },
                  get x() {
                    return c(X);
                  },
                  get y() {
                    return c(Y);
                  }
                });
              }
              H(y, S);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var B = j(A, 2);
      Ov(B, {
        get proOptions() {
          return t.proOptions;
        },
        get position() {
          return t.attributionPosition;
        }
      });
      var W = j(B, 2);
      cv(W, {
        get store() {
          return x;
        }
      });
      var z = j(W, 2);
      He(z, () => t.children ?? Ye), H(b, P);
    },
    $$slots: { default: !0 }
  }), ie();
}
function Kv(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ se(Wl({ props: {}, nodes: [], edges: [] }));
  fi(io, {
    provider: !0,
    getStore() {
      return c(n);
    },
    setStore: (i) => {
      R(n, i);
    }
  }), po(() => {
    c(n).reset();
  });
  var r = fe(), o = $(r);
  He(o, () => t.children ?? Ye), H(e, r), ie();
}
var Yv = /* @__PURE__ */ ee("<button><!></button>");
function Tr(e, t) {
  let n = /* @__PURE__ */ jt(t, [
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
  var r = Yv();
  bt(r, () => ({
    type: "button",
    onclick: t.onclick,
    class: ["svelte-flow__controls-button", t.class],
    ...n,
    [Pt]: {
      "--xy-controls-button-background-color-props": t.bgColor,
      "--xy-controls-button-background-color-hover-props": t.bgColorHover,
      "--xy-controls-button-color-props": t.color,
      "--xy-controls-button-color-hover-props": t.colorHover,
      "--xy-controls-button-border-color-props": t.borderColor
    }
  }));
  var o = Z(r);
  He(o, () => t.children ?? Ye), H(e, r);
}
var Xv = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Zv(e) {
  var t = Xv();
  H(e, t);
}
var Wv = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function qv(e) {
  var t = Wv();
  H(e, t);
}
var Gv = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Uv(e) {
  var t = Gv();
  H(e, t);
}
var jv = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Jv(e) {
  var t = jv();
  H(e, t);
}
var Qv = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function $v(e) {
  var t = Qv();
  H(e, t);
}
var ep = /* @__PURE__ */ ee("<!> <!>", 1), tp = /* @__PURE__ */ ee("<!> <!> <!> <!> <!> <!>", 1);
function np(e, t) {
  oe(t, !0);
  let n = V(t, "position", 3, "bottom-left"), r = V(t, "orientation", 3, "vertical"), o = V(t, "showZoom", 3, !0), i = V(t, "showFitView", 3, !0), s = V(t, "showLock", 3, !0), a = /* @__PURE__ */ jt(t, [
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
  ]), l = /* @__PURE__ */ _(Qt);
  const u = {
    bgColor: t.buttonBgColor,
    bgColorHover: t.buttonBgColorHover,
    color: t.buttonColor,
    colorHover: t.buttonColorHover,
    borderColor: t.buttonBorderColor
  };
  let d = /* @__PURE__ */ _(() => c(l).nodesDraggable || c(l).nodesConnectable || c(l).elementsSelectable), h = /* @__PURE__ */ _(() => c(l).viewport.zoom <= c(l).minZoom), f = /* @__PURE__ */ _(() => c(l).viewport.zoom >= c(l).maxZoom), g = /* @__PURE__ */ _(() => c(l).ariaLabelConfig), v = /* @__PURE__ */ _(() => r() === "horizontal" ? "horizontal" : "vertical");
  const p = () => {
    c(l).zoomIn();
  }, m = () => {
    c(l).zoomOut();
  }, w = () => {
    c(l).fitView(t.fitViewOptions);
  }, x = () => {
    let E = !c(d);
    c(l).nodesDraggable = E, c(l).nodesConnectable = E, c(l).elementsSelectable = E;
  };
  {
    let E = /* @__PURE__ */ _(() => [
      "svelte-flow__controls",
      c(v),
      t.class
    ]);
    Ri(e, we(
      {
        get class() {
          return c(E);
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
        children: (b, T) => {
          var P = tp(), L = $(P);
          {
            var A = (N) => {
              var O = fe(), I = $(O);
              He(I, () => t.before), H(N, O);
            };
            le(L, (N) => {
              t.before && N(A);
            });
          }
          var B = j(L, 2);
          {
            var W = (N) => {
              var O = ep(), I = $(O);
              Tr(I, we(
                {
                  onclick: p,
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
                  children: (Y, K) => {
                    Zv(Y);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var X = j(I, 2);
              Tr(X, we(
                {
                  onclick: m,
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
                  children: (Y, K) => {
                    qv(Y);
                  },
                  $$slots: { default: !0 }
                }
              )), H(N, O);
            };
            le(B, (N) => {
              o() && N(W);
            });
          }
          var z = j(B, 2);
          {
            var k = (N) => {
              Tr(N, we(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: w,
                  get title() {
                    return c(g)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(g)["controls.fitView.ariaLabel"];
                  }
                },
                () => u,
                {
                  children: (O, I) => {
                    Uv(O);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(z, (N) => {
              i() && N(k);
            });
          }
          var M = j(z, 2);
          {
            var y = (N) => {
              Tr(N, we(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: x,
                  get title() {
                    return c(g)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(g)["controls.interactive.ariaLabel"];
                  }
                },
                () => u,
                {
                  children: (O, I) => {
                    var X = fe(), Y = $(X);
                    {
                      var K = (q) => {
                        $v(q);
                      }, G = (q) => {
                        Jv(q);
                      };
                      le(Y, (q) => {
                        c(d) ? q(K) : q(G, !1);
                      });
                    }
                    H(O, X);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(M, (N) => {
              s() && N(y);
            });
          }
          var C = j(M, 2);
          {
            var S = (N) => {
              var O = fe(), I = $(O);
              He(I, () => t.children), H(N, O);
            };
            le(C, (N) => {
              t.children && N(S);
            });
          }
          var D = j(C, 2);
          {
            var F = (N) => {
              var O = fe(), I = $(O);
              He(I, () => t.after), H(N, O);
            };
            le(D, (N) => {
              t.after && N(F);
            });
          }
          H(b, P);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ie();
}
var Yt;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Yt || (Yt = {}));
var rp = /* @__PURE__ */ _e("<circle></circle>");
function op(e, t) {
  var n = rp();
  ue(() => {
    re(n, "cx", t.radius), re(n, "cy", t.radius), re(n, "r", t.radius), De(n, 0, Ut(["svelte-flow__background-pattern", "dots", t.class]));
  }), H(e, n);
}
var ip = /* @__PURE__ */ _e("<path></path>");
function sp(e, t) {
  oe(t, !0);
  var n = ip();
  ue(() => {
    re(n, "stroke-width", t.lineWidth), re(n, "d", `M${t.dimensions[0] / 2} 0 V${t.dimensions[1]} M0 ${t.dimensions[1] / 2} H${t.dimensions[0]}`), De(n, 0, Ut([
      "svelte-flow__background-pattern",
      t.variant,
      t.class
    ]));
  }), H(e, n), ie();
}
const ap = {
  [Yt.Dots]: 1,
  [Yt.Lines]: 1,
  [Yt.Cross]: 6
};
var lp = /* @__PURE__ */ _e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function cp(e, t) {
  oe(t, !0);
  let n = V(t, "variant", 19, () => Yt.Dots), r = V(t, "gap", 3, 20), o = V(t, "lineWidth", 3, 1), i = /* @__PURE__ */ _(Qt), s = /* @__PURE__ */ _(() => n() === Yt.Dots), a = /* @__PURE__ */ _(() => n() === Yt.Cross), l = /* @__PURE__ */ _(() => Array.isArray(r()) ? r() : [r(), r()]), u = /* @__PURE__ */ _(() => `background-pattern-${c(i).flowId}-${t.id ?? ""}`), d = /* @__PURE__ */ _(() => [
    c(l)[0] * c(i).viewport.zoom || 1,
    c(l)[1] * c(i).viewport.zoom || 1
  ]), h = /* @__PURE__ */ _(() => (t.size ?? ap[n()]) * c(i).viewport.zoom), f = /* @__PURE__ */ _(() => c(a) ? [c(h), c(h)] : c(d)), g = /* @__PURE__ */ _(() => c(s) ? [c(h) / 2, c(h) / 2] : [
    c(f)[0] / 2,
    c(f)[1] / 2
  ]);
  var v = lp();
  let p;
  var m = Z(v), w = Z(m);
  {
    var x = (T) => {
      {
        let P = /* @__PURE__ */ _(() => c(h) / 2);
        op(T, {
          get radius() {
            return c(P);
          },
          get class() {
            return t.patternClass;
          }
        });
      }
    }, E = (T) => {
      sp(T, {
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
    le(w, (T) => {
      c(s) ? T(x) : T(E, !1);
    });
  }
  var b = j(m);
  ue(() => {
    De(v, 0, Ut([
      "svelte-flow__background",
      "svelte-flow__container",
      t.class
    ])), p = Be(v, "", p, {
      "--xy-background-color-props": t.bgColor,
      "--xy-background-pattern-color-props": t.patternColor
    }), re(m, "id", c(u)), re(m, "x", c(i).viewport.x % c(d)[0]), re(m, "y", c(i).viewport.y % c(d)[1]), re(m, "width", c(d)[0]), re(m, "height", c(d)[1]), re(m, "patternTransform", `translate(-${c(g)[0]},-${c(g)[1]})`), re(b, "fill", `url(#${c(u)})`);
  }), H(e, v), ie();
}
var up = /* @__PURE__ */ _e("<rect></rect>");
function dp(e, t) {
  let n = V(t, "borderRadius", 3, 5), r = V(t, "strokeWidth", 3, 2);
  var o = fe(), i = $(o);
  {
    var s = (l) => {
      const u = /* @__PURE__ */ _(() => t.nodeComponent);
      var d = fe(), h = $(d);
      gr(h, () => c(u), (f, g) => {
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
      }), H(l, d);
    }, a = (l) => {
      var u = up();
      let d, h;
      ue(() => {
        d = De(u, 0, Ut(["svelte-flow__minimap-node", t.class]), null, d, { selected: t.selected }), re(u, "x", t.x), re(u, "y", t.y), re(u, "rx", n()), re(u, "ry", n()), re(u, "width", t.width), re(u, "height", t.height), re(u, "shape-rendering", t.shapeRendering), h = Be(u, "", h, {
          fill: t.color,
          stroke: t.strokeColor,
          "stroke-width": r()
        });
      }), H(l, u);
    };
    le(i, (l) => {
      t.nodeComponent ? l(s) : l(a, !1);
    });
  }
  H(e, o);
}
function fp(e, t) {
  const n = v0({
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
const Vo = (e) => e instanceof Function ? e : () => e;
var hp = /* @__PURE__ */ _e("<title> </title>"), gp = /* @__PURE__ */ _e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), vp = /* @__PURE__ */ ee('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function pp(e, t) {
  oe(t, !0);
  let n = V(t, "position", 3, "bottom-right"), r = V(t, "nodeStrokeColor", 3, "transparent"), o = V(t, "nodeClass", 3, ""), i = V(t, "nodeBorderRadius", 3, 5), s = V(t, "nodeStrokeWidth", 3, 2), a = V(t, "width", 3, 200), l = V(t, "height", 3, 150), u = V(t, "pannable", 3, !0), d = V(t, "zoomable", 3, !0), h = /* @__PURE__ */ jt(t, [
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
  ]), f = /* @__PURE__ */ _(Qt), g = /* @__PURE__ */ _(() => c(f).ariaLabelConfig);
  const v = t.nodeColor === void 0 ? void 0 : Vo(t.nodeColor), p = Vo(r()), m = Vo(o()), w = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let x = /* @__PURE__ */ _(() => `svelte-flow__minimap-desc-${c(f).flowId}`), E = /* @__PURE__ */ _(() => ({
    x: -c(f).viewport.x / c(f).viewport.zoom,
    y: -c(f).viewport.y / c(f).viewport.zoom,
    width: c(f).width / c(f).viewport.zoom,
    height: c(f).height / c(f).viewport.zoom
  })), b = /* @__PURE__ */ _(() => El(yr(c(f).nodeLookup, { filter: (F) => !F.hidden }), c(E))), T = /* @__PURE__ */ _(() => c(b).width / a()), P = /* @__PURE__ */ _(() => c(b).height / l()), L = /* @__PURE__ */ _(() => Math.max(c(T), c(P))), A = /* @__PURE__ */ _(() => c(L) * a()), B = /* @__PURE__ */ _(() => c(L) * l()), W = /* @__PURE__ */ _(() => 5 * c(L)), z = /* @__PURE__ */ _(() => c(b).x - (c(A) - c(b).width) / 2 - c(W)), k = /* @__PURE__ */ _(() => c(b).y - (c(B) - c(b).height) / 2 - c(W)), M = /* @__PURE__ */ _(() => c(A) + c(W) * 2), y = /* @__PURE__ */ _(() => c(B) + c(W) * 2);
  const C = () => c(L);
  var S = vp(), D = $(S);
  {
    let F = /* @__PURE__ */ _(() => ["svelte-flow__minimap", t.class]);
    yu(D, () => ({ "--xy-minimap-background-color-props": t.bgColor })), Ri(D.lastChild, we(
      {
        get position() {
          return n();
        },
        get class() {
          return c(F);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => h,
      {
        children: (N, O) => {
          var I = fe(), X = $(I);
          {
            var Y = (K) => {
              var G = gp();
              let q;
              var J = Z(G);
              {
                var U = (Q) => {
                  var pe = hp(), ae = Z(pe);
                  ue(() => {
                    re(pe, "id", c(x)), xe(ae, t.ariaLabel ?? c(g)["minimap.ariaLabel"]);
                  }), H(Q, pe);
                };
                le(J, (Q) => {
                  (t.ariaLabel ?? c(g)["minimap.ariaLabel"]) && Q(U);
                });
              }
              var te = j(J);
              It(te, 17, () => c(f).nodes, (Q) => Q.id, (Q, pe) => {
                const ae = /* @__PURE__ */ _(() => c(f).nodeLookup.get(c(pe).id));
                var be = fe(), Ue = $(be);
                {
                  var je = (Fe) => {
                    const ge = /* @__PURE__ */ _(() => Jt(c(ae)));
                    {
                      let Ee = /* @__PURE__ */ _(() => v?.(c(ae))), ot = /* @__PURE__ */ _(() => p(c(ae))), ye = /* @__PURE__ */ _(() => m(c(ae)));
                      dp(Fe, we(
                        {
                          get id() {
                            return c(ae).id;
                          },
                          get x() {
                            return c(ae).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(ae).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ge),
                        {
                          get selected() {
                            return c(ae).selected;
                          },
                          get nodeComponent() {
                            return t.nodeComponent;
                          },
                          get color() {
                            return c(Ee);
                          },
                          get borderRadius() {
                            return i();
                          },
                          get strokeColor() {
                            return c(ot);
                          },
                          get strokeWidth() {
                            return s();
                          },
                          get shapeRendering() {
                            return w;
                          },
                          get class() {
                            return c(ye);
                          }
                        }
                      ));
                    }
                  };
                  le(Ue, (Fe) => {
                    c(ae) && Sl(c(ae)) && !c(ae).hidden && Fe(je);
                  });
                }
                H(Q, be);
              });
              var he = j(te);
              ze(G, (Q, pe) => fp?.(Q, pe), () => ({
                store: c(f),
                panZoom: c(f).panZoom,
                getViewScale: C,
                translateExtent: c(f).translateExtent,
                width: c(f).width,
                height: c(f).height,
                inversePan: t.inversePan,
                zoomStep: t.zoomStep,
                pannable: u(),
                zoomable: d()
              })), ue(() => {
                re(G, "width", a()), re(G, "height", l()), re(G, "viewBox", `${c(z) ?? ""} ${c(k) ?? ""} ${c(M) ?? ""} ${c(y) ?? ""}`), re(G, "aria-labelledby", c(x)), q = Be(G, "", q, {
                  "--xy-minimap-mask-background-color-props": t.maskColor,
                  "--xy-minimap-mask-stroke-color-props": t.maskStrokeColor,
                  "--xy-minimap-mask-stroke-width-props": t.maskStrokeWidth ? t.maskStrokeWidth * c(L) : void 0
                }), re(he, "d", `M${c(z) - c(W)},${c(k) - c(W)}h${c(M) + c(W) * 2}v${c(y) + c(W) * 2}h${-c(M) - c(W) * 2}z
      M${c(E).x ?? ""},${c(E).y ?? ""}h${c(E).width ?? ""}v${c(E).height ?? ""}h${-c(E).width}z`);
              }), H(K, G);
            };
            le(X, (K) => {
              c(f).panZoom && K(Y);
            });
          }
          H(N, I);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  H(e, S), ie();
}
function mp(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Vs(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
function Dr(e, { delay: t = 0, duration: n = 400, easing: r = mp, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(e), l = +a.opacity, u = a.transform === "none" ? "" : a.transform, d = l * (1 - s), [h, f] = Vs(o), [g, v] = Vs(i);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (p, m) => `
			transform: ${u} translate(${(1 - p) * h}${f}, ${(1 - p) * g}${v});
			opacity: ${l - d * m}`
  };
}
const yp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var _p = /* @__PURE__ */ _e("<svg><!><!></svg>");
function dt(e, t) {
  const n = qe(t, ["children", "$$slots", "$$events", "$$legacy"]), r = qe(n, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  oe(t, !1);
  let o = V(t, "name", 8, void 0), i = V(t, "color", 8, "currentColor"), s = V(t, "size", 8, 24), a = V(t, "strokeWidth", 8, 2), l = V(t, "absoluteStrokeWidth", 8, !1), u = V(t, "iconNode", 24, () => []);
  const d = (...v) => v.filter((p, m, w) => !!p && w.indexOf(p) === m).join(" ");
  Ya();
  var h = _p();
  bt(
    h,
    (v, p) => ({
      ...yp,
      ...r,
      width: s(),
      height: s(),
      stroke: i(),
      "stroke-width": v,
      class: p
    }),
    [
      () => ($t(l()), $t(a()), $t(s()), ke(() => l() ? Number(a()) * 24 / Number(s()) : a())),
      () => ($t(o()), $t(n), ke(() => d("lucide-icon", "lucide", o() ? `lucide-${o()}` : "", n.class)))
    ]
  );
  var f = Z(h);
  It(f, 1, u, tr, (v, p) => {
    var m = /* @__PURE__ */ _(() => On(c(p), 2));
    let w = () => c(m)[0], x = () => c(m)[1];
    var E = fe(), b = $(E);
    Cu(b, w, !0, (T, P) => {
      bt(T, () => ({ ...x() }));
    }), H(v, E);
  });
  var g = j(f);
  rt(g, t, "default", {}), H(e, h), ie();
}
function wp(e, t) {
  const n = qe(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [["path", { d: "m15 18-6-6 6-6" }]];
  dt(e, we({ name: "chevron-left" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = $(s);
      rt(a, t, "default", {}), H(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function bp(e, t) {
  const n = qe(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [["path", { d: "m9 18 6-6-6-6" }]];
  dt(e, we({ name: "chevron-right" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = $(s);
      rt(a, t, "default", {}), H(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function xp(e, t) {
  const n = qe(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2"
      }
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
      }
    ]
  ];
  dt(e, we({ name: "copy" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = $(s);
      rt(a, t, "default", {}), H(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function kp(e, t) {
  const n = qe(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
      }
    ],
    ["path", { d: "m15 5 4 4" }]
  ];
  dt(e, we({ name: "pencil" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = $(s);
      rt(a, t, "default", {}), H(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Ql(e, t) {
  const n = qe(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [["path", { d: "M5 12h14" }], ["path", { d: "M12 5v14" }]];
  dt(e, we({ name: "plus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = $(s);
      rt(a, t, "default", {}), H(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Ep(e, t) {
  const n = qe(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      }
    ],
    [
      "path",
      {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      }
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }]
  ];
  dt(e, we({ name: "rocket" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = $(s);
      rt(a, t, "default", {}), H(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Sp(e, t) {
  const n = qe(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    ["path", { d: "M12 3v18" }],
    ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7" }],
    ["path", { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" }],
    ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7" }],
    ["path", { d: "M7 21h10" }]
  ];
  dt(e, we({ name: "scale" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = $(s);
      rt(a, t, "default", {}), H(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Cp(e, t) {
  const n = qe(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    ["path", { d: "m21 21-4.34-4.34" }],
    ["circle", { cx: "11", cy: "11", r: "8" }]
  ];
  dt(e, we({ name: "search" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = $(s);
      rt(a, t, "default", {}), H(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Np(e, t) {
  const n = qe(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    ["path", { d: "M10 11v6" }],
    ["path", { d: "M14 11v6" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
    ["path", { d: "M3 6h18" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
  ];
  dt(e, we({ name: "trash-2" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = $(s);
      rt(a, t, "default", {}), H(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Pp(e, t) {
  const n = qe(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    ["path", { d: "M18 6 6 18" }],
    ["path", { d: "m6 6 12 12" }]
  ];
  dt(e, we({ name: "x" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = $(s);
      rt(a, t, "default", {}), H(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Mp(e, t) {
  const n = qe(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      }
    ]
  ];
  dt(e, we({ name: "zap" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = $(s);
      rt(a, t, "default", {}), H(o, s);
    },
    $$slots: { default: !0 }
  }));
}
var Ap = /* @__PURE__ */ ee('<button type="button" title="Go back" class="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"><!></button>'), zp = /* @__PURE__ */ ee('<button type="button" class="group flex items-center gap-4 p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-sm cursor-grab hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all active:cursor-grabbing text-left w-full" draggable="true"><div><!></div> <div class="min-w-0 flex-grow"><div class="text-xs font-bold text-slate-800 dark:text-slate-100 tracking-tight truncate"> </div> <div class="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 truncate"> </div></div></button>'), Tp = /* @__PURE__ */ ee('<div class="text-center py-10"><p class="text-sm text-slate-400 dark:text-slate-500"> </p></div>'), Dp = /* @__PURE__ */ ee('<div class="flex flex-col gap-3"><!> <!></div>'), Ip = /* @__PURE__ */ ee('<button type="button" class="group relative flex flex-col gap-1 p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all w-full text-left overflow-hidden"><div class="flex items-center gap-3 mb-1"><div><!></div> <span class="text-sm font-bold text-slate-800 dark:text-slate-100"> </span> <!></div> <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed"> </p></button>'), Op = /* @__PURE__ */ ee('<div class="flex flex-col gap-3"></div>'), Rp = /* @__PURE__ */ ee('<div class="absolute top-4 right-4 bottom-4 w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden transition-all duration-300 z-40 rounded-2xl shadow-2xl p-0 animate-in slide-in-from-right-10"><div class="p-5 border-b border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10"><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2"><!> <div><h3 class="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]"><!></h3></div></div> <button type="button" title="Close" class="p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"><!></button></div> <div class="relative"><input type="text" placeholder="Search nodes..." class="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-blue-400 transition-all pl-9"/> <!></div></div> <div class="flex-grow overflow-y-auto p-5 relative"><!></div></div>');
function Lp(e, t) {
  oe(t, !0);
  let n = V(t, "availableComponents", 19, () => ({})), r = V(t, "isOpen", 15, !1), o = /* @__PURE__ */ se(""), i = /* @__PURE__ */ se(null);
  const s = [
    {
      id: "triggers",
      label: "Triggers",
      icon: Mp,
      color: "text-amber-500",
      description: "Events that start your workflow"
    },
    {
      id: "actions",
      label: "Actions",
      icon: Ep,
      color: "text-blue-500",
      description: "Operations your workflow performs"
    },
    {
      id: "conditions",
      label: "Conditions",
      icon: Sp,
      color: "text-purple-500",
      description: "Logic to branch your workflow"
    }
  ];
  function a(x) {
    console.log(x);
    const E = (x.triggers || []).map((P) => ({
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
    })), b = (x.actions || []).map((P) => ({
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
    })), T = (x.conditions || []).map((P) => ({
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
    return [...E, ...b, ...T];
  }
  let l = /* @__PURE__ */ _(() => a(n())), u = /* @__PURE__ */ _(() => c(o) ? c(l).filter((x) => x.label.toLowerCase().includes(c(o).toLowerCase())) : c(i) ? c(l).filter((x) => x.category === c(i)) : []);
  function d(x, E, b) {
    x.dataTransfer.setData("application/svelteflow", JSON.stringify({ type: E, data: b })), x.dataTransfer.effectAllowed = "move";
  }
  function h(x) {
    t.onSelectNode && t.onSelectNode(x.type, x.data), f();
  }
  function f() {
    r(!1), R(o, ""), R(i, null);
  }
  function g() {
    R(i, null);
  }
  function v(x) {
    R(i, x, !0);
  }
  Ve(() => {
    if (!r()) return;
    const x = (E) => {
      E.key === "Escape" && f();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  });
  var p = fe(), m = $(p);
  {
    var w = (x) => {
      var E = Rp(), b = Z(E), T = Z(b), P = Z(T), L = Z(P);
      {
        var A = (Y) => {
          var K = Ap();
          K.__click = g;
          var G = Z(K);
          wp(G, { size: 16 }), H(Y, K);
        };
        le(L, (Y) => {
          c(i) && !c(o) && Y(A);
        });
      }
      var B = j(L, 2), W = Z(B), z = Z(W);
      {
        var k = (Y) => {
          var K = Rr("Search Results");
          H(Y, K);
        }, M = (Y) => {
          var K = fe(), G = $(K);
          {
            var q = (U) => {
              var te = Rr();
              ue((he) => xe(te, he), [
                () => s.find((he) => he.id === c(i))?.label
              ]), H(U, te);
            }, J = (U) => {
              var te = Rr("Components");
              H(U, te);
            };
            le(
              G,
              (U) => {
                c(i) ? U(q) : U(J, !1);
              },
              !0
            );
          }
          H(Y, K);
        };
        le(z, (Y) => {
          c(o) ? Y(k) : Y(M, !1);
        });
      }
      var y = j(P, 2);
      y.__click = f;
      var C = Z(y);
      Pp(C, { size: 16 });
      var S = j(T, 2), D = Z(S), F = j(D, 2);
      Cp(F, {
        size: 16,
        class: "absolute left-3 top-3 text-slate-400 dark:text-slate-500"
      });
      var N = j(b, 2), O = Z(N);
      {
        var I = (Y) => {
          var K = Dp(), G = Z(K);
          It(G, 17, () => c(u), tr, (U, te) => {
            var he = zp();
            he.__click = () => h(c(te));
            var Q = Z(he), pe = Z(Q);
            Ra(pe, () => c(te).icon || "<span>?</span>");
            var ae = j(Q, 2), be = Z(ae), Ue = Z(be), je = j(be, 2), Fe = Z(je);
            ue(() => {
              De(Q, 1, `w-10 h-10 ${c(te).color ?? ""} p-2 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0`), xe(Ue, c(te).label), xe(Fe, c(te).description);
            }), cn("dragstart", he, (ge) => d(ge, c(te).type, c(te).data)), H(U, he);
          });
          var q = j(G, 2);
          {
            var J = (U) => {
              var te = Tp(), he = Z(te), Q = Z(he);
              ue(() => xe(Q, `No nodes found matching "${c(o) ?? ""}"`)), H(U, te);
            };
            le(q, (U) => {
              c(u).length === 0 && U(J);
            });
          }
          Er(1, K, () => Dr, () => ({ x: 20, duration: 300, delay: 150 })), Er(2, K, () => Dr, () => ({ x: 20, duration: 200 })), H(Y, K);
        }, X = (Y) => {
          var K = Op();
          It(K, 21, () => s, tr, (G, q) => {
            var J = Ip();
            J.__click = () => v(c(q).id);
            var U = Z(J), te = Z(U), he = Z(te);
            gr(he, () => c(q).icon, (je, Fe) => {
              Fe(je, { size: 16 });
            });
            var Q = j(te, 2), pe = Z(Q), ae = j(Q, 2);
            bp(ae, {
              size: 16,
              class: "ml-auto text-slate-300 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"
            });
            var be = j(U, 2), Ue = Z(be);
            ue(() => {
              De(te, 1, `w-8 h-8 bg-slate-50 dark:bg-slate-700 rounded-lg flex items-center justify-center ${c(q).color ?? ""}`), xe(pe, c(q).label), xe(Ue, c(q).description);
            }), H(G, J);
          }), Er(1, K, () => Dr, () => ({ x: -20, duration: 300, delay: 150 })), Er(2, K, () => Dr, () => ({ x: -20, duration: 200 })), H(Y, K);
        };
        le(O, (Y) => {
          c(o) || c(i) ? Y(I) : Y(X, !1);
        });
      }
      Iu(D, () => c(o), (Y) => R(o, Y)), H(x, E);
    };
    le(m, (x) => {
      r() && x(w);
    });
  }
  H(e, p), ie();
}
pn(["click"]);
var Hp = /* @__PURE__ */ ee('<button type="button" class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg"><!> Rename Node</button> <button type="button" class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg"><!> Duplicate Node</button> <div class="h-px bg-slate-100 dark:bg-slate-800 my-1"></div> <button type="button" class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/30 transition-colors rounded-lg"><!> Delete Node</button>', 1), Vp = /* @__PURE__ */ ee('<button type="button" class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg"><!> Add Node</button>'), Bp = /* @__PURE__ */ ee('<div class="absolute z-50 min-w-[160px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl p-1 animate-in fade-in zoom-in duration-200"><!></div>');
function Fp(e, t) {
  oe(t, !0);
  let n = V(t, "type", 3, "canvas");
  function r() {
    t.onRenameNode && t.onRenameNode(t.id), t.onclick();
  }
  function o() {
    t.onDeleteNode && t.onDeleteNode(t.id), t.onclick();
  }
  function i() {
    t.onAddNode && t.onAddNode(), t.onclick();
  }
  function s() {
    t.onDuplicateNode && t.onDuplicateNode(t.id), t.onclick();
  }
  var a = Bp();
  a.__click = (h) => h.stopPropagation();
  var l = Z(a);
  {
    var u = (h) => {
      var f = Hp(), g = $(f);
      g.__click = r;
      var v = Z(g);
      kp(v, { size: 16 });
      var p = j(g, 2);
      p.__click = s;
      var m = Z(p);
      xp(m, { size: 16 });
      var w = j(p, 4);
      w.__click = o;
      var x = Z(w);
      Np(x, { size: 16 }), H(h, f);
    }, d = (h) => {
      var f = Vp();
      f.__click = i;
      var g = Z(f);
      Ql(g, { size: 16 }), H(h, f);
    };
    le(l, (h) => {
      n() === "node" ? h(u) : h(d, !1);
    });
  }
  ue(() => Be(a, `top: ${t.top ?? ""}px; left: ${t.left ?? ""}px; right: ${t.right ?? ""}px; bottom: ${t.bottom ?? ""}px;`)), H(e, a), ie();
}
pn(["click"]);
var Kp = /* @__PURE__ */ ee("<!> <!> <!>", 1), Yp = /* @__PURE__ */ ee('<div class="relative h-[600px] w-full border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl"><div class="absolute inset-0" role="presentation"><!> <!></div> <!> <button type="button" class="absolute top-4 right-4 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all z-10 group" title="Add Node"><!></button></div>');
function Xp(e, t) {
  oe(t, !0);
  let n = V(t, "nodes", 31, () => gt([])), r = V(t, "edges", 31, () => gt([])), o = V(t, "availableComponents", 19, () => ({}));
  const { screenToFlowPosition: i, getNodes: s } = Jl();
  let a = /* @__PURE__ */ se(void 0), l = /* @__PURE__ */ se(null), u = /* @__PURE__ */ se(!1), d = /* @__PURE__ */ se(0), h = /* @__PURE__ */ se(0), f = /* @__PURE__ */ se(null), g = /* @__PURE__ */ se("light");
  function v(N) {
    N.preventDefault(), N.dataTransfer.dropEffect = "move";
  }
  function p(N) {
    const O = n().map((I) => ({ ...I, selected: !1 }));
    n([...O, { ...N, selected: !0 }]);
  }
  function m(N) {
    const I = s().find((X) => X.id === N);
    if (I) {
      const X = {
        ...I,
        id: `${I.type}-${Date.now()}`,
        position: { x: I.position.x + 20, y: I.position.y + 20 }
      };
      p(X);
    }
  }
  function w(N) {
    N.preventDefault();
    const O = N.dataTransfer.getData("application/svelteflow");
    if (!O) return;
    const { type: I, data: X } = JSON.parse(O), Y = i({ x: N.clientX, y: N.clientY }), K = { id: `${I}-${Date.now()}`, type: I, position: Y, data: X };
    p(K);
  }
  function x({ event: N, node: O }) {
    N.preventDefault();
    const I = c(a).getBoundingClientRect(), X = N.clientX - I.left, Y = N.clientY - I.top;
    R(
      l,
      {
        id: O.id,
        type: "node",
        top: Y < c(h) - 200 ? Y : void 0,
        left: X < c(d) - 200 ? X : void 0,
        right: X >= c(d) - 200 ? c(d) - X : void 0,
        bottom: Y >= c(h) - 200 ? c(h) - Y : void 0,
        clientX: N.clientX,
        clientY: N.clientY
      },
      !0
    );
  }
  function E({ event: N }) {
    N.preventDefault();
    const O = c(a).getBoundingClientRect(), I = N.clientX - O.left, X = N.clientY - O.top;
    R(
      l,
      {
        id: "canvas",
        type: "canvas",
        top: X < c(h) - 200 ? X : void 0,
        left: I < c(d) - 200 ? I : void 0,
        right: I >= c(d) - 200 ? c(d) - I : void 0,
        bottom: X >= c(h) - 200 ? c(h) - X : void 0,
        clientX: N.clientX,
        clientY: N.clientY
      },
      !0
    );
  }
  function b() {
    R(l, null), R(f, null);
  }
  function T() {
    R(u, !1);
  }
  function P() {
    b(), T();
  }
  function L() {
    c(l) ? R(f, { x: c(l).clientX, y: c(l).clientY }, !0) : R(f, null), R(u, !0);
  }
  function A(N, O) {
    let I;
    if (c(f))
      I = i(c(f));
    else {
      const Y = { x: c(d) / 2, y: c(h) / 2 };
      I = i(Y);
      const K = 50;
      let G = 0;
      for (; n().some((q) => Math.abs(q.position.x - (I.x + G)) < K && Math.abs(q.position.y - (I.y + G)) < K); )
        G += 40;
      I.x += G, I.y += G;
    }
    const X = { id: `${N}-${Date.now()}`, type: N, position: I, data: O };
    p(X);
  }
  function B(N) {
    n(n().filter((O) => O.id !== N));
  }
  function W(N) {
    const O = n().find((I) => I.id === N);
    if (O) {
      const I = window.prompt("Enter new node name:", O.data.label);
      I !== null && n(n().map((X) => X.id === N ? { ...X, data: { ...X.data, label: I } } : X));
    }
  }
  Ve(() => {
    const N = (I) => {
      I.key === "Escape" && P();
    };
    window.addEventListener("keydown", N);
    const O = new MutationObserver(() => {
      R(g, document.documentElement.classList.contains("dark") ? "dark" : "light", !0);
    });
    return O.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] }), R(g, document.documentElement.classList.contains("dark") ? "dark" : "light", !0), () => {
      window.removeEventListener("keydown", N), O.disconnect();
    };
  });
  var z = Yp(), k = Z(z), M = Z(k);
  Fv(M, {
    get nodeTypes() {
      return t.nodeTypes;
    },
    get colorMode() {
      return c(g);
    },
    fitView: !0,
    onnodeclick: ({ event: N, node: O }) => {
      t.onNodeClick && t.onNodeClick(N, O), P();
    },
    onnodecontextmenu: x,
    onpanecontextmenu: E,
    onpaneclick: P,
    get nodes() {
      return n();
    },
    set nodes(N) {
      n(N);
    },
    get edges() {
      return r();
    },
    set edges(N) {
      r(N);
    },
    children: (N, O) => {
      var I = Kp(), X = $(I);
      np(X, {});
      var Y = j(X, 2);
      cp(Y, { variant: "lines", gap: 20, size: 1 });
      var K = j(Y, 2);
      pp(K, {}), H(N, I);
    },
    $$slots: { default: !0 }
  });
  var y = j(M, 2);
  {
    var C = (N) => {
      Fp(N, we(() => c(l), {
        onclick: b,
        onAddNode: L,
        onRenameNode: W,
        onDuplicateNode: m,
        onDeleteNode: B
      }));
    };
    le(y, (N) => {
      c(l) && N(C);
    });
  }
  var S = j(k, 2);
  Lp(S, {
    get availableComponents() {
      return o();
    },
    onSelectNode: A,
    get isOpen() {
      return c(u);
    },
    set isOpen(N) {
      R(u, N, !0);
    }
  });
  var D = j(S, 2);
  D.__click = () => {
    b(), R(u, !0);
  };
  var F = Z(D);
  Ql(F, {
    size: 20,
    class: "group-hover:scale-110 transition-transform"
  }), Bn(z, (N) => R(a, N), () => c(a)), cn("dragover", k, v), cn("drop", k, w), Wr(z, "clientWidth", (N) => R(d, N)), Wr(z, "clientHeight", (N) => R(h, N)), H(e, z), ie();
}
pn(["click"]);
var Zp = /* @__PURE__ */ ee('<p class="text-[10px] leading-relaxed text-slate-500 dark:text-slate-400 mb-2 italic"> </p>'), Wp = /* @__PURE__ */ ee('<div class="relative w-3 h-3" role="presentation"><!></div>'), qp = /* @__PURE__ */ ee('<div class="relative w-3 h-3" role="presentation"><!></div>'), Gp = /* @__PURE__ */ ee('<div class="relative group" role="presentation"><div><div><span class="text-white"><!></span> <span class="text-[10px] font-bold uppercase tracking-wider text-white flex-1"> </span> <button type="button" class="text-white/70 hover:text-white hover:bg-white/20 rounded p-0.5 transition-all opacity-0 group-hover:opacity-100" title="Edit Settings"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg></button></div> <div><!> <div><!></div></div></div> <div class="absolute -left-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div> <div class="absolute -right-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div></div>');
function Li(e, t) {
  oe(t, !0);
  let n = V(t, "type", 3, "default"), r = V(t, "inputs", 19, () => []), o = V(t, "outputs", 19, () => []);
  const i = {
    trigger: {
      border: "border-amber-200 dark:border-amber-500/30",
      header: "bg-amber-500 dark:bg-amber-600",
      bg: "bg-amber-50/50 dark:bg-amber-900/20",
      text: "text-amber-900 dark:text-amber-100",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>'
    },
    action: {
      border: "border-blue-200 dark:border-blue-500/30",
      header: "bg-blue-600 dark:bg-blue-700",
      bg: "bg-blue-50/50 dark:bg-blue-900/20",
      text: "text-blue-900 dark:text-blue-100",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>'
    },
    condition: {
      border: "border-purple-200 dark:border-purple-500/30",
      header: "bg-purple-600 dark:bg-purple-700",
      bg: "bg-purple-50/50 dark:bg-purple-900/20",
      text: "text-purple-900 dark:text-purple-100",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>'
    },
    default: {
      border: "border-slate-200 dark:border-slate-700",
      header: "bg-slate-600 dark:bg-slate-700",
      bg: "bg-slate-50/50 dark:bg-slate-800/50",
      text: "text-slate-900 dark:text-slate-100",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>'
    }
  }, s = /* @__PURE__ */ _(() => i[n()] || i.default);
  function a(L) {
    L.stopPropagation(), window.dispatchEvent(new CustomEvent("open-node-settings", {
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
  var l = Gp(), u = Z(l), d = Z(u), h = Z(d), f = Z(h);
  Ra(f, () => c(s).icon);
  var g = j(h, 2), v = Z(g), p = j(g, 2);
  p.__click = a;
  var m = j(d, 2), w = Z(m);
  {
    var x = (L) => {
      var A = Zp(), B = Z(A);
      ue(() => xe(B, t.data.description)), H(L, A);
    };
    le(w, (L) => {
      t.data.description && L(x);
    });
  }
  var E = j(w, 2), b = Z(E);
  He(b, () => t.children ?? Ye);
  var T = j(u, 2);
  It(T, 21, r, tr, (L, A) => {
    var B = Wp(), W = Z(B);
    Wt(W, {
      type: "target",
      get position() {
        return ne.Left;
      },
      get id() {
        return c(A).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 dark:!bg-slate-600 !border-2 !border-white dark:!border-slate-800 hover:!bg-blue-500 transition-all hover:scale-125"
    }), H(L, B);
  });
  var P = j(T, 2);
  It(P, 21, o, tr, (L, A) => {
    var B = qp(), W = Z(B);
    Wt(W, {
      type: "source",
      get position() {
        return ne.Right;
      },
      get id() {
        return c(A).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 dark:!bg-slate-600 !border-2 !border-white dark:!border-slate-800 hover:!bg-blue-500 transition-all hover:scale-125"
    }), H(L, B);
  }), ue(() => {
    De(
      u,
      1,
      `min-w-[180px] max-w-[240px] bg-white dark:bg-slate-900 rounded-xl shadow-sm border ${c(s).border ?? ""} overflow-hidden transition-all duration-200 ${t.selected ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-950" : "hover:shadow-md dark:hover:shadow-blue-500/10"}`,
      "svelte-1fdtdic"
    ), De(d, 1, `${c(s).header ?? ""} px-3 py-1.5 flex items-center gap-2`, "svelte-1fdtdic"), xe(v, t.data.label || "Node"), De(m, 1, `p-3 ${c(s).bg ?? ""}`, "svelte-1fdtdic"), De(E, 1, `text-xs font-medium ${c(s).text ?? ""}`, "svelte-1fdtdic");
  }), H(e, l), ie();
}
pn(["click"]);
var Up = /* @__PURE__ */ ee('<div class="px-2 py-1 bg-amber-100/50 dark:bg-amber-900/30 rounded border border-amber-200 dark:border-amber-800 text-[10px] break-all font-mono text-amber-700 dark:text-amber-400"> </div>');
function jp(e, t) {
  oe(t, !0);
  const n = [{ id: "output" }];
  Li(e, {
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
      var i = fe(), s = $(i);
      {
        var a = (l) => {
          var u = Up(), d = Z(u);
          ue((h) => xe(d, h), [() => t.data.event.split("\\").pop()]), H(l, u);
        };
        le(s, (l) => {
          t.data.event && l(a);
        });
      }
      H(r, i);
    },
    $$slots: { default: !0 }
  }), ie();
}
var Jp = /* @__PURE__ */ ee('<div class="flex items-center gap-2 px-2 py-1 bg-blue-100/50 dark:bg-blue-900/30 rounded border border-blue-200 dark:border-blue-800 text-[10px] font-semibold text-blue-700 dark:text-blue-300"><span>⚡</span> </div>');
function Qp(e, t) {
  oe(t, !0);
  const n = [{ id: "input" }], r = [{ id: "output" }];
  Li(e, {
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
      var s = fe(), a = $(s);
      {
        var l = (u) => {
          var d = Jp(), h = j(Z(d));
          ue(() => xe(h, ` ${t.data.action ?? ""}`)), H(u, d);
        };
        le(a, (u) => {
          t.data.action && u(l);
        });
      }
      H(o, s);
    },
    $$slots: { default: !0 }
  }), ie();
}
var $p = /* @__PURE__ */ ee('<div class="px-2 py-1 bg-purple-100/50 dark:bg-purple-900/30 rounded border border-purple-200 dark:border-purple-800 text-[10px] font-mono mb-6 text-purple-700 dark:text-purple-400"> </div>'), em = /* @__PURE__ */ ee('<!> <div class="absolute -right-1.5 top-[60px] flex flex-col gap-6"><div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-emerald-600 dark:text-emerald-400 mr-2 uppercase">True</span> <!></div> <div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-rose-600 dark:text-rose-400 mr-2 uppercase">False</span> <!></div></div>', 1), tm = /* @__PURE__ */ ee('<div class="relative"><!></div>');
function nm(e, t) {
  oe(t, !0);
  const n = [{ id: "input" }];
  var r = tm(), o = Z(r);
  Li(o, {
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
      var a = em(), l = $(a);
      {
        var u = (p) => {
          var m = $p(), w = Z(m);
          ue(() => xe(w, t.data.condition)), H(p, m);
        };
        le(l, (p) => {
          t.data.condition && p(u);
        });
      }
      var d = j(l, 2), h = Z(d), f = j(Z(h), 2);
      Wt(f, {
        type: "source",
        get position() {
          return ne.Right;
        },
        id: "true",
        class: "!w-3 !h-3 !bg-emerald-500 !border-2 !border-white dark:!border-slate-800"
      });
      var g = j(h, 2), v = j(Z(g), 2);
      Wt(v, {
        type: "source",
        get position() {
          return ne.Right;
        },
        id: "false",
        class: "!w-3 !h-3 !bg-rose-500 !border-2 !border-white dark:!border-slate-800"
      }), H(i, a);
    },
    $$slots: { default: !0 }
  }), H(e, r), ie();
}
var rm = /* @__PURE__ */ ee('<div class="flex h-full w-full overflow-hidden"><!></div>');
function om(e, t) {
  oe(t, !0);
  const n = {
    trigger: jp,
    action: Qp,
    condition: nm
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
  let i = V(t, "nodes", 19, () => []), s = V(t, "edges", 19, () => []), a = V(t, "availableComponents", 19, () => ({})), l = /* @__PURE__ */ se(ke(() => i().length > 0 ? i() : r)), u = /* @__PURE__ */ se(ke(() => s().length > 0 ? s() : o)), d = /* @__PURE__ */ se(null);
  function h(g, v) {
    R(d, v.id, !0);
  }
  let f;
  Ve(() => {
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
  }), Ve(() => {
    const g = (v) => {
      const { id: p, config: m } = v.detail, w = c(l).findIndex((x) => x.id === p);
      if (w !== -1) {
        const { label: x, description: E, ...b } = m, T = { ...c(l)[w] };
        T.data = { ...T.data, label: x, description: E, config: b };
        const P = [...c(l)];
        P[w] = T, R(l, P);
      }
    };
    return window.addEventListener("update-node-config", g), () => {
      window.removeEventListener("update-node-config", g);
    };
  }), Kv(e, {
    children: (g, v) => {
      var p = rm(), m = Z(p);
      Xp(m, {
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
        set nodes(w) {
          R(l, w);
        },
        get edges() {
          return c(u);
        },
        set edges(w) {
          R(u, w);
        }
      }), H(g, p);
    },
    $$slots: { default: !0 }
  }), ie();
}
const Bs = () => {
  window.Alpine.data("flowBuilder", ({ state: e, components: t }) => ({
    state: e,
    components: t,
    init() {
      const n = Array.isArray(this.state?.nodes) ? JSON.parse(JSON.stringify(this.state.nodes)) : [], r = Array.isArray(this.state?.edges) ? JSON.parse(JSON.stringify(this.state.edges)) : [];
      vu(om, {
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
window.Alpine ? Bs() : document.addEventListener("alpine:init", Bs);
