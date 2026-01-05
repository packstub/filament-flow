var $r = Array.isArray, Zl = Array.prototype.indexOf, eo = Array.from, Xl = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, Hs = Object.getOwnPropertyDescriptors, Ls = Object.prototype, Wl = Array.prototype, to = Object.getPrototypeOf, Ri = Object.isExtensible;
function wn(e) {
  return typeof e == "function";
}
const Ye = () => {
};
function ql(e) {
  return e();
}
function To(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Vs() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Te(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function rn(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Pe = 2, ei = 4, no = 8, Bs = 1 << 24, yt = 16, zt = 32, Zt = 64, ro = 128, it = 512, Me = 1024, We = 2048, vt = 4096, Xe = 8192, Mt = 16384, oo = 32768, Dt = 65536, Hi = 1 << 17, Fs = 1 << 18, gn = 1 << 19, Ks = 1 << 20, Ct = 1 << 25, on = 32768, Do = 1 << 21, ti = 1 << 22, Bt = 1 << 23, ht = /* @__PURE__ */ Symbol("$state"), Ys = /* @__PURE__ */ Symbol("legacy props"), Gl = /* @__PURE__ */ Symbol(""), bn = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function ni(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ul() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function jl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Jl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ql(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function $l() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ec(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function tc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function nc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function rc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function oc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ic = 1, sc = 2, Zs = 4, ac = 8, lc = 16, cc = 1, uc = 2, dc = 4, fc = 8, hc = 16, gc = 4, Xs = 1, vc = 2, Ne = /* @__PURE__ */ Symbol(), pc = "http://www.w3.org/1999/xhtml", mc = "@attach";
function yc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function _c() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ws(e) {
  return e === this.v;
}
function qs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Gs(e) {
  return !qs(e, this.v);
}
let Rn = !1;
function wc() {
  Rn = !0;
}
const bc = [];
function Us(e, t = !1, n = !1) {
  return Tr(e, /* @__PURE__ */ new Map(), "", bc, null, n);
}
function Tr(e, t, n, r, o = null, i = !1) {
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
      for (var c = 0; c < e.length; c += 1) {
        var u = e[c];
        c in e && (a[c] = Tr(u, t, n, r, null, i));
      }
      return a;
    }
    if (to(e) === Ls) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Tr(
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
      return Tr(
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
function Nn(e) {
  ve = e;
}
function ri(e) {
  return (
    /** @type {T} */
    ii().get(e)
  );
}
function oi(e, t) {
  return ii().set(e, t), t;
}
function xc(e) {
  return ii().has(e);
}
function ne(e, t = !1, n) {
  ve = {
    p: ve,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Rn && !t ? { s: null, u: null, $: [] } : null
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
      ua(r);
  }
  return t.i = !0, ve = t.p, /** @type {T} */
  {};
}
function or() {
  return !Rn || ve !== null && ve.l === null;
}
function ii(e) {
  return ve === null && ni(), ve.c ??= new Map(Ec(ve) || void 0);
}
function Ec(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let xn = [];
function kc() {
  var e = xn;
  xn = [], To(e);
}
function Xt(e) {
  if (xn.length === 0) {
    var t = xn;
    queueMicrotask(() => {
      t === xn && kc();
    });
  }
  xn.push(e);
}
function js(e) {
  var t = fe;
  if (t === null)
    return ce.f |= Bt, e;
  if ((t.f & oo) === 0) {
    if ((t.f & ro) === 0)
      throw e;
    t.b.error(e);
  } else
    Pn(e, t);
}
function Pn(e, t) {
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
const wr = /* @__PURE__ */ new Set();
let ye = null, je = null, ct = [], si = null, Io = !1;
class nt {
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
    ct = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (ye = null, Li(n.render_effects), Li(n.effects), this.#l?.resolve()), je = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(t, n) {
    t.f ^= Me;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (zt | Zt)) !== 0, s = i && (o & Me) !== 0, a = s || (o & Xe) !== 0 || this.skipped_effects.has(r);
      if ((r.f & ro) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Me : (o & ei) !== 0 ? n.effects.push(r) : cr(r) && ((r.f & yt) !== 0 && this.#i.add(r), Un(r));
        var c = r.first;
        if (c !== null) {
          r = c;
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
      (n.f & We) !== 0 ? this.#i.add(n) : (n.f & vt) !== 0 && this.#o.add(n), this.#c(n.deps), Ae(n, Me);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & Pe) === 0 || (n.f & on) === 0 || (n.f ^= on, this.#c(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Bt) === 0 && (this.current.set(t, t.v), je?.set(t, t.v));
  }
  activate() {
    ye = this, this.apply();
  }
  deactivate() {
    ye === this && (ye = null, je = null);
  }
  flush() {
    if (this.activate(), ct.length > 0) {
      if (Sc(), ye !== null && ye !== this)
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
    if (wr.size > 1) {
      this.previous.clear();
      var t = je, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of wr) {
        if (i === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [c, u] of this.current) {
          if (i.current.has(c))
            if (n && u !== i.current.get(c))
              i.current.set(c, u);
            else
              continue;
          s.push(c);
        }
        if (s.length === 0)
          continue;
        const a = [...i.current.keys()].filter((c) => !this.current.has(c));
        if (a.length > 0) {
          var o = ct;
          ct = [];
          const c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Js(d, a, c, u);
          if (ct.length > 0) {
            ye = i, i.apply();
            for (const d of ct)
              i.#s(d, r);
            i.deactivate();
          }
          ct = o;
        }
      }
      ye = null, je = t;
    }
    this.committed = !0, wr.delete(this);
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
      this.#o.delete(t), Ae(t, We), sn(t);
    for (const t of this.#o)
      Ae(t, vt), sn(t);
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
    return (this.#l ??= Vs()).promise;
  }
  static ensure() {
    if (ye === null) {
      const t = ye = new nt();
      wr.add(ye), nt.enqueue(() => {
        ye === t && t.flush();
      });
    }
    return ye;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Xt(t);
  }
  apply() {
  }
}
function Sc() {
  var e = en;
  Io = !0;
  var t = null;
  try {
    var n = 0;
    for (Lr(!0); ct.length > 0; ) {
      var r = nt.ensure();
      if (n++ > 1e3) {
        var o, i;
        Cc();
      }
      r.process(ct), Ft.clear();
    }
  } finally {
    Io = !1, Lr(e), si = null;
  }
}
function Cc() {
  try {
    $l();
  } catch (e) {
    Pn(e, si);
  }
}
let Et = null;
function Li(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Mt | Xe)) === 0 && cr(r) && (Et = /* @__PURE__ */ new Set(), Un(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? pa(r) : r.fn = null), Et?.size > 0)) {
        Ft.clear();
        for (const o of Et) {
          if ((o.f & (Mt | Xe)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Et.has(s) && (Et.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const c = i[a];
            (c.f & (Mt | Xe)) === 0 && Un(c);
          }
        }
        Et.clear();
      }
    }
    Et = null;
  }
}
function Js(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & Pe) !== 0 ? Js(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (ti | yt)) !== 0 && (i & We) === 0 && Qs(o, t, r) && (Ae(o, We), sn(
        /** @type {Effect} */
        o
      ));
    }
}
function Qs(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & Pe) !== 0 && Qs(
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
function sn(e) {
  for (var t = si = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Io && t === fe && (n & yt) !== 0 && (n & Fs) === 0)
      return;
    if ((n & (Zt | zt)) !== 0) {
      if ((n & Me) === 0) return;
      t.f ^= Me;
    }
  }
  ct.push(t);
}
function $s(e) {
  let t = 0, n = an(0), r;
  return () => {
    qn() && (l(n), io(() => (t === 0 && (r = Le(() => e(() => Xn(n)))), t += 1, () => {
      Xt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Xn(n));
      });
    })));
  };
}
var Nc = Dt | gn | ro;
function Pc(e, t, n) {
  new Mc(e, t, n);
}
class Mc {
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
  #_ = $s(() => (this.#h = an(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    fe.b, this.#e = !!this.#r.pending, this.#i = lr(() => {
      fe.b = this;
      {
        var o = this.#m();
        try {
          this.#o = Re(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#e = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, Nc);
  }
  #w() {
    try {
      this.#o = Re(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #b() {
    const t = this.#r.pending;
    t && (this.#s = Re(() => t(this.#t)), nt.enqueue(() => {
      var n = this.#m();
      this.#o = this.#v(() => (nt.ensure(), Re(() => this.#l(n)))), this.#f > 0 ? this.#p() : ($t(
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
    return this.#e && (this.#u = At(), this.#t.before(this.#u), t = this.#u), t;
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
    var n = fe, r = ce, o = ve;
    pt(this.#i), He(this.#i), Nn(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return js(i), null;
    } finally {
      pt(n), He(r), Nn(o);
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
    ), _a(this.#o, this.#c)), this.#s === null && (this.#s = Re(() => t(this.#t)));
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
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#s && $t(this.#s, () => {
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
    this.#y(t), this.#d += t, this.#h && Mn(this.#h, this.#d);
  }
  get_effect_pending() {
    return this.#_(), l(
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
    this.#o && (Ce(this.#o), this.#o = null), this.#s && (Ce(this.#s), this.#s = null), this.#a && (Ce(this.#a), this.#a = null);
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        _c();
        return;
      }
      o = !0, i && oc(), nt.ensure(), this.#d = 0, this.#a !== null && $t(this.#a, () => {
        this.#a = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#v(() => (this.#g = !1, Re(() => this.#l(this.#t)))), this.#f > 0 ? this.#p() : this.#e = !1;
    };
    var a = ce;
    try {
      He(null), i = !0, n?.(t, s), i = !1;
    } catch (c) {
      Pn(c, this.#i && this.#i.parent);
    } finally {
      He(a);
    }
    r && Xt(() => {
      this.#a = this.#v(() => {
        nt.ensure(), this.#g = !0;
        try {
          return Re(() => {
            r(
              this.#t,
              () => t,
              () => s
            );
          });
        } catch (c) {
          return Pn(
            c,
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
function ea(e, t, n, r) {
  const o = or() ? ir : ai;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = ye, s = (
    /** @type {Effect} */
    fe
  ), a = Ac();
  function c() {
    Promise.all(n.map((u) => /* @__PURE__ */ Tc(u))).then((u) => {
      a();
      try {
        r([...t.map(o), ...u]);
      } catch (d) {
        (s.f & Mt) === 0 && Pn(d, s);
      }
      i?.deactivate(), Hr();
    }).catch((u) => {
      Pn(u, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return c();
    } finally {
      i?.deactivate(), Hr();
    }
  }) : c();
}
function Ac() {
  var e = fe, t = ce, n = ve, r = ye;
  return function(i = !0) {
    pt(e), He(t), Nn(n), i && r?.activate();
  };
}
function Hr() {
  pt(null), He(null), Nn(null);
}
// @__NO_SIDE_EFFECTS__
function ir(e) {
  var t = Pe | We, n = ce !== null && (ce.f & Pe) !== 0 ? (
    /** @type {Derived} */
    ce
  ) : null;
  return fe !== null && (fe.f |= gn), {
    ctx: ve,
    deps: null,
    effects: null,
    equals: Ws,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ne
    ),
    wv: 0,
    parent: n ?? fe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Tc(e, t) {
  let n = (
    /** @type {Effect | null} */
    fe
  );
  n === null && Ul();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = an(
    /** @type {V} */
    Ne
  ), s = !ce, a = /* @__PURE__ */ new Map();
  return Fc(() => {
    var c = Vs();
    o = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, c.reject).then(() => {
        u === ye && u.committed && u.deactivate(), Hr();
      });
    } catch (f) {
      c.reject(f), Hr();
    }
    var u = (
      /** @type {Batch} */
      ye
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(bn), a.delete(u), a.set(u, c);
    }
    const h = (f, g = void 0) => {
      if (u.activate(), g)
        g !== bn && (i.f |= Bt, Mn(i, g));
      else {
        (i.f & Bt) !== 0 && (i.f ^= Bt), Mn(i, f);
        for (const [v, p] of a) {
          if (a.delete(v), v === u) break;
          p.reject(bn);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    c.promise.then(h, (f) => h(null, f || "unknown"));
  }), ci(() => {
    for (const c of a.values())
      c.reject(bn);
  }), new Promise((c) => {
    function u(d) {
      function h() {
        d === o ? c(i) : u(o);
      }
      d.then(h, h);
    }
    u(o);
  });
}
// @__NO_SIDE_EFFECTS__
function _(e) {
  const t = /* @__PURE__ */ ir(e);
  return wa(t), t;
}
// @__NO_SIDE_EFFECTS__
function ai(e) {
  const t = /* @__PURE__ */ ir(e);
  return t.equals = Gs, t;
}
function ta(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ce(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Dc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Pe) === 0)
      return (t.f & Mt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function li(e) {
  var t, n = fe;
  pt(Dc(e));
  try {
    e.f &= ~on, ta(e), t = ka(e);
  } finally {
    pt(n);
  }
  return t;
}
function na(e) {
  var t = li(e);
  if (e.equals(t) || (ye?.is_fork || (e.v = t), e.wv = xa()), !vn)
    if (je !== null)
      (qn() || ye?.is_fork) && je.set(e, t);
    else {
      var n = (e.f & it) === 0 ? vt : Me;
      Ae(e, n);
    }
}
let zo = /* @__PURE__ */ new Set();
const Ft = /* @__PURE__ */ new Map();
let ra = !1;
function an(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ws,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function de(e, t) {
  const n = an(e);
  return wa(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ic(e, t = !1, n = !0) {
  const r = an(e);
  return t || (r.equals = Gs), Rn && n && ve !== null && ve.l !== null && (ve.l.s ??= []).push(r), r;
}
function L(e, t, n = !1) {
  ce !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ft || (ce.f & Hi) !== 0) && or() && (ce.f & (Pe | yt | ti | Hi)) !== 0 && !Tt?.includes(e) && rc();
  let r = n ? dt(t) : t;
  return Mn(e, r);
}
function Mn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    vn ? Ft.set(e, t) : Ft.set(e, n), e.v = t;
    var r = nt.ensure();
    r.capture(e, n), (e.f & Pe) !== 0 && ((e.f & We) !== 0 && li(
      /** @type {Derived} */
      e
    ), Ae(e, (e.f & it) !== 0 ? Me : vt)), e.wv = xa(), oa(e, We), or() && fe !== null && (fe.f & Me) !== 0 && (fe.f & (zt | Zt)) === 0 && (Ue === null ? Yc([e]) : Ue.push(e)), !r.is_fork && zo.size > 0 && !ra && zc();
  }
  return t;
}
function zc() {
  ra = !1;
  var e = en;
  Lr(!0);
  const t = Array.from(zo);
  try {
    for (const n of t)
      (n.f & Me) !== 0 && Ae(n, vt), cr(n) && Un(n);
  } finally {
    Lr(e);
  }
  zo.clear();
}
function Xn(e) {
  L(e, e.v + 1);
}
function oa(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = or(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === fe)) {
        var c = (a & We) === 0;
        if (c && Ae(s, t), (a & Pe) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          je?.delete(u), (a & on) === 0 && (a & it && (s.f |= on), oa(u, vt));
        } else c && ((a & yt) !== 0 && Et !== null && Et.add(
          /** @type {Effect} */
          s
        ), sn(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function dt(e) {
  if (typeof e != "object" || e === null || ht in e)
    return e;
  const t = to(e);
  if (t !== Ls && t !== Wl)
    return e;
  var n = /* @__PURE__ */ new Map(), r = $r(e), o = /* @__PURE__ */ de(0), i = tn, s = (a) => {
    if (tn === i)
      return a();
    var c = ce, u = tn;
    He(null), Fi(i);
    var d = a();
    return He(c), Fi(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ de(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, c, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && tc();
        var d = n.get(c);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ de(u.value);
          return n.set(c, h), h;
        }) : L(d, u.value, !0), !0;
      },
      deleteProperty(a, c) {
        var u = n.get(c);
        if (u === void 0) {
          if (c in a) {
            const d = s(() => /* @__PURE__ */ de(Ne));
            n.set(c, d), Xn(o);
          }
        } else
          L(u, Ne), Xn(o);
        return !0;
      },
      get(a, c, u) {
        if (c === ht)
          return e;
        var d = n.get(c), h = c in a;
        if (d === void 0 && (!h || Vt(a, c)?.writable) && (d = s(() => {
          var g = dt(h ? a[c] : Ne), v = /* @__PURE__ */ de(g);
          return v;
        }), n.set(c, d)), d !== void 0) {
          var f = l(d);
          return f === Ne ? void 0 : f;
        }
        return Reflect.get(a, c, u);
      },
      getOwnPropertyDescriptor(a, c) {
        var u = Reflect.getOwnPropertyDescriptor(a, c);
        if (u && "value" in u) {
          var d = n.get(c);
          d && (u.value = l(d));
        } else if (u === void 0) {
          var h = n.get(c), f = h?.v;
          if (h !== void 0 && f !== Ne)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(a, c) {
        if (c === ht)
          return !0;
        var u = n.get(c), d = u !== void 0 && u.v !== Ne || Reflect.has(a, c);
        if (u !== void 0 || fe !== null && (!d || Vt(a, c)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? dt(a[c]) : Ne, g = /* @__PURE__ */ de(f);
            return g;
          }), n.set(c, u));
          var h = l(u);
          if (h === Ne)
            return !1;
        }
        return d;
      },
      set(a, c, u, d) {
        var h = n.get(c), f = c in a;
        if (r && c === "length")
          for (var g = u; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var v = n.get(g + "");
            v !== void 0 ? L(v, Ne) : g in a && (v = s(() => /* @__PURE__ */ de(Ne)), n.set(g + "", v));
          }
        if (h === void 0)
          (!f || Vt(a, c)?.writable) && (h = s(() => /* @__PURE__ */ de(void 0)), L(h, dt(u)), n.set(c, h));
        else {
          f = h.v !== Ne;
          var p = s(() => dt(u));
          L(h, p);
        }
        var m = Reflect.getOwnPropertyDescriptor(a, c);
        if (m?.set && m.set.call(d, u), !f) {
          if (r && typeof c == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(c);
            Number.isInteger(S) && S >= w.v && L(w, S + 1);
          }
          Xn(o);
        }
        return !0;
      },
      ownKeys(a) {
        l(o);
        var c = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Ne;
        });
        for (var [u, d] of n)
          d.v !== Ne && !(u in a) && c.push(u);
        return c;
      },
      setPrototypeOf() {
        nc();
      }
    }
  );
}
function Vi(e) {
  try {
    if (e !== null && typeof e == "object" && ht in e)
      return e[ht];
  } catch {
  }
  return e;
}
function Oc(e, t) {
  return Object.is(Vi(e), Vi(t));
}
var Oe, ia, sa, aa;
function Rc() {
  if (Oe === void 0) {
    Oe = window, ia = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    sa = Vt(t, "firstChild").get, aa = Vt(t, "nextSibling").get, Ri(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ri(n) && (n.__t = void 0);
  }
}
function At(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return (
    /** @type {TemplateNode | null} */
    sa.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function sr(e) {
  return (
    /** @type {TemplateNode | null} */
    aa.call(e)
  );
}
function Y(e, t) {
  return /* @__PURE__ */ Ze(e);
}
function ae(e, t = !1) {
  {
    var n = /* @__PURE__ */ Ze(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ sr(n) : n;
  }
}
function q(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ sr(r);
  return r;
}
function Hc(e) {
  e.textContent = "";
}
function la() {
  return !1;
}
function Lc(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Xt(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function ar(e) {
  var t = ce, n = fe;
  He(null), pt(null);
  try {
    return e();
  } finally {
    He(t), pt(n);
  }
}
function ca(e) {
  fe === null && (ce === null && Ql(), Jl()), vn && jl();
}
function Vc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Qe(e, t, n) {
  var r = fe;
  r !== null && (r.f & Xe) !== 0 && (e |= Xe);
  var o = {
    ctx: ve,
    deps: null,
    nodes: null,
    f: e | We | it,
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
      Un(o), o.f |= oo;
    } catch (a) {
      throw Ce(o), a;
    }
  else t !== null && sn(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & gn) === 0 && (i = i.first, (e & yt) !== 0 && (e & Dt) !== 0 && i !== null && (i.f |= Dt)), i !== null && (i.parent = r, r !== null && Vc(i, r), ce !== null && (ce.f & Pe) !== 0 && (e & Zt) === 0)) {
    var s = (
      /** @type {Derived} */
      ce
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function qn() {
  return ce !== null && !ft;
}
function ci(e) {
  const t = Qe(no, null, !1);
  return Ae(t, Me), t.teardown = e, t;
}
function st(e) {
  ca();
  var t = (
    /** @type {Effect} */
    fe.f
  ), n = !ce && (t & zt) !== 0 && (t & oo) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ve
    );
    (r.e ??= []).push(e);
  } else
    return ua(e);
}
function ua(e) {
  return Qe(ei | Ks, e, !1);
}
function ui(e) {
  return ca(), Qe(no | Ks, e, !0);
}
function da(e) {
  nt.ensure();
  const t = Qe(Zt | gn, e, !0);
  return () => {
    Ce(t);
  };
}
function Bc(e) {
  nt.ensure();
  const t = Qe(Zt | gn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? $t(t, () => {
      Ce(t), r(void 0);
    }) : (Ce(t), r(void 0));
  });
}
function Hn(e) {
  return Qe(ei, e, !1);
}
function Fc(e) {
  return Qe(ti | gn, e, !0);
}
function io(e, t = 0) {
  return Qe(no | t, e, !0);
}
function oe(e, t = [], n = [], r = []) {
  ea(r, t, n, (o) => {
    Qe(no, () => e(...o.map(l)), !0);
  });
}
function lr(e, t = 0) {
  var n = Qe(yt | t, e, !0);
  return n;
}
function fa(e, t = 0) {
  var n = Qe(Bs | t, e, !0);
  return n;
}
function Re(e) {
  return Qe(zt | gn, e, !0);
}
function ha(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = vn, r = ce;
    Bi(!0), He(null);
    try {
      t.call(null);
    } finally {
      Bi(n), He(r);
    }
  }
}
function ga(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && ar(() => {
      o.abort(bn);
    });
    var r = n.next;
    (n.f & Zt) !== 0 ? n.parent = null : Ce(n, t), n = r;
  }
}
function Kc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & zt) === 0 && Ce(t), t = n;
  }
}
function Ce(e, t = !0) {
  var n = !1;
  (t || (e.f & Fs) !== 0) && e.nodes !== null && e.nodes.end !== null && (va(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), ga(e, t && !n), Vr(e, 0), Ae(e, Mt);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  ha(e);
  var o = e.parent;
  o !== null && o.first !== null && pa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function va(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ sr(e);
    e.remove(), e = n;
  }
}
function pa(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function $t(e, t, n = !0) {
  var r = [];
  ma(e, r, !0);
  var o = () => {
    n && Ce(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var s = () => --i || o();
    for (var a of r)
      a.out(s);
  } else
    o();
}
function ma(e, t, n) {
  if ((e.f & Xe) === 0) {
    e.f ^= Xe;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var o = e.first; o !== null; ) {
      var i = o.next, s = (o.f & Dt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & zt) !== 0 && (e.f & yt) !== 0;
      ma(o, t, s ? n : !1), o = i;
    }
  }
}
function di(e) {
  ya(e, !0);
}
function ya(e, t) {
  if ((e.f & Xe) !== 0) {
    e.f ^= Xe, (e.f & Me) === 0 && (Ae(e, We), sn(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Dt) !== 0 || (n.f & zt) !== 0;
      ya(n, o ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || t) && s.in();
  }
}
function _a(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var o = n === r ? null : /* @__PURE__ */ sr(n);
      t.append(n), n = o;
    }
}
let en = !1;
function Lr(e) {
  en = e;
}
let vn = !1;
function Bi(e) {
  vn = e;
}
let ce = null, ft = !1;
function He(e) {
  ce = e;
}
let fe = null;
function pt(e) {
  fe = e;
}
let Tt = null;
function wa(e) {
  ce !== null && (Tt === null ? Tt = [e] : Tt.push(e));
}
let Ie = null, Ke = 0, Ue = null;
function Yc(e) {
  Ue = e;
}
let ba = 1, Gn = 0, tn = Gn;
function Fi(e) {
  tn = e;
}
function xa() {
  return ++ba;
}
function cr(e) {
  var t = e.f;
  if ((t & We) !== 0)
    return !0;
  if (t & Pe && (e.f &= ~on), (t & vt) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (cr(
          /** @type {Derived} */
          i
        ) && na(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & it) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    je === null && Ae(e, Me);
  }
  return !1;
}
function Ea(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Tt?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Pe) !== 0 ? Ea(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Ae(i, We) : (i.f & Me) !== 0 && Ae(i, vt), sn(
        /** @type {Effect} */
        i
      ));
    }
}
function ka(e) {
  var t = Ie, n = Ke, r = Ue, o = ce, i = Tt, s = ve, a = ft, c = tn, u = e.f;
  Ie = /** @type {null | Value[]} */
  null, Ke = 0, Ue = null, ce = (u & (zt | Zt)) === 0 ? e : null, Tt = null, Nn(e.ctx), ft = !1, tn = ++Gn, e.ac !== null && (ar(() => {
    e.ac.abort(bn);
  }), e.ac = null);
  try {
    e.f |= Do;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps;
    if (Ie !== null) {
      var g;
      if (Vr(e, Ke), f !== null && Ke > 0)
        for (f.length = Ke + Ie.length, g = 0; g < Ie.length; g++)
          f[Ke + g] = Ie[g];
      else
        e.deps = f = Ie;
      if (qn() && (e.f & it) !== 0)
        for (g = Ke; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Ke < f.length && (Vr(e, Ke), f.length = Ke);
    if (or() && Ue !== null && !ft && f !== null && (e.f & (Pe | vt | We)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Ue.length; g++)
        Ea(
          Ue[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Gn++, Ue !== null && (r === null ? r = Ue : r.push(.../** @type {Source[]} */
    Ue))), (e.f & Bt) !== 0 && (e.f ^= Bt), h;
  } catch (v) {
    return js(v);
  } finally {
    e.f ^= Do, Ie = t, Ke = n, Ue = r, ce = o, Tt = i, Nn(s), ft = a, tn = c;
  }
}
function Zc(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Zl.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ie === null || !Ie.includes(t)) && (Ae(t, vt), (t.f & it) !== 0 && (t.f ^= it, t.f &= ~on), ta(
    /** @type {Derived} **/
    t
  ), Vr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Vr(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Zc(e, n[r]);
}
function Un(e) {
  var t = e.f;
  if ((t & Mt) === 0) {
    Ae(e, Me);
    var n = fe, r = en;
    fe = e, en = !0;
    try {
      (t & (yt | Bs)) !== 0 ? Kc(e) : ga(e), ha(e);
      var o = ka(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ba;
      var i;
    } finally {
      en = r, fe = n;
    }
  }
}
function l(e) {
  var t = e.f, n = (t & Pe) !== 0;
  if (ce !== null && !ft) {
    var r = fe !== null && (fe.f & Mt) !== 0;
    if (!r && !Tt?.includes(e)) {
      var o = ce.deps;
      if ((ce.f & Do) !== 0)
        e.rv < Gn && (e.rv = Gn, Ie === null && o !== null && o[Ke] === e ? Ke++ : Ie === null ? Ie = [e] : Ie.includes(e) || Ie.push(e));
      else {
        (ce.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [ce] : i.includes(ce) || i.push(ce);
      }
    }
  }
  if (vn) {
    if (Ft.has(e))
      return Ft.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & Me) === 0 && s.reactions !== null || Ca(s)) && (a = li(s)), Ft.set(s, a), a;
    }
  } else n && (!je?.has(e) || ye?.is_fork && !qn()) && (s = /** @type {Derived} */
  e, cr(s) && na(s), en && qn() && (s.f & it) === 0 && Sa(s));
  if (je?.has(e))
    return je.get(e);
  if ((e.f & Bt) !== 0)
    throw e.v;
  return e.v;
}
function Sa(e) {
  if (e.deps !== null) {
    e.f ^= it;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & Pe) !== 0 && (t.f & it) === 0 && Sa(
        /** @type {Derived} */
        t
      );
  }
}
function Ca(e) {
  if (e.v === Ne) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ft.has(t) || (t.f & Pe) !== 0 && Ca(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Le(e) {
  var t = ft;
  try {
    return ft = !0, e();
  } finally {
    ft = t;
  }
}
const Xc = -7169;
function Ae(e, t) {
  e.f = e.f & Xc | t;
}
function Wc(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function Na(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ht in e)
      Oo(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ht in n && Oo(n);
      }
  }
}
function Oo(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Oo(e[r], t);
      } catch {
      }
    const n = to(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Hs(n);
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
function qc(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Gc = [
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
function Uc(e) {
  return Gc.includes(e);
}
const jc = {
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
function Jc(e) {
  return e = e.toLowerCase(), jc[e] ?? e;
}
const Qc = ["touchstart", "touchmove"];
function $c(e) {
  return Qc.includes(e);
}
const Pa = /* @__PURE__ */ new Set(), Ro = /* @__PURE__ */ new Set();
function fi(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Fn.call(t, i), !i.cancelBubble)
      return ar(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Xt(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ho(e, t, n, r = {}) {
  var o = fi(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function ln(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = fi(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ci(() => {
    t.removeEventListener(e, s, i);
  });
}
function so(e) {
  for (var t = 0; t < e.length; t++)
    Pa.add(e[t]);
  for (var n of Ro)
    n(e);
}
let Ki = null;
function Fn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Ki = e;
  var s = 0, a = Ki === e && e.__root;
  if (a) {
    var c = o.indexOf(a);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = o.indexOf(t);
    if (u === -1)
      return;
    c <= u && (s = c);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Xl(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = ce, h = fe;
    He(null), pt(null);
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
      e.__root = t, delete e.currentTarget, He(d), pt(h);
    }
  }
}
function hi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function cn(e, t) {
  var n = (
    /** @type {Effect} */
    fe
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  var n = (t & Xs) !== 0, r = (t & vc) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    o === void 0 && (o = hi(i ? e : "<!>" + e), n || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(o)));
    var s = (
      /** @type {TemplateNode} */
      r || ia ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ze(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      cn(a, c);
    } else
      cn(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function eu(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Xs) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        hi(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Ze(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Ze(c); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Ze(c)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Ze(c);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ze(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      cn(d, h);
    } else
      cn(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  return /* @__PURE__ */ eu(e, t, "svg");
}
function tu(e = "") {
  {
    var t = At(e + "");
    return cn(t, t), t;
  }
}
function pe() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = At();
  return e.append(t, n), cn(t, n), e;
}
function H(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Lo = !0;
function we(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function nu(e, t) {
  return ru(e, t);
}
const yn = /* @__PURE__ */ new Map();
function ru(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Rc();
  var a = /* @__PURE__ */ new Set(), c = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var v = $c(g);
        t.addEventListener(g, Fn, { passive: v });
        var p = yn.get(g);
        p === void 0 ? (document.addEventListener(g, Fn, { passive: v }), yn.set(g, 1)) : yn.set(g, p + 1);
      }
    }
  };
  c(eo(Pa)), Ro.add(c);
  var u = void 0, d = Bc(() => {
    var h = n ?? t.appendChild(At());
    return Pc(
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
        o && (r.$$events = o), Lo = s, u = e(f, r) || {}, Lo = !0, i && re();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, Fn);
        var g = (
          /** @type {number} */
          yn.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Fn), yn.delete(f)) : yn.set(f, g);
      }
      Ro.delete(c), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return ou.set(u, d), u;
}
let ou = /* @__PURE__ */ new WeakMap();
class gi {
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
      ye
    );
    if (this.#e.has(t)) {
      var n = (
        /** @type {Key} */
        this.#e.get(t)
      ), r = this.#t.get(n);
      if (r)
        di(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (Ce(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var u = document.createDocumentFragment();
            _a(s, u), u.append(At()), this.#n.set(i, { effect: s, fragment: u });
          } else
            Ce(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), $t(s, a, !1)) : a();
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
      n.includes(r) || (Ce(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      ye
    ), o = la();
    if (n && !this.#t.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = At();
        i.append(s), this.#n.set(t, {
          effect: Re(() => n(s)),
          fragment: i
        });
      } else
        this.#t.set(
          t,
          Re(() => n(this.anchor))
        );
    if (this.#e.set(r, t), o) {
      for (const [a, c] of this.#t)
        a === t ? r.skipped_effects.delete(c) : r.skipped_effects.add(c);
      for (const [a, c] of this.#n)
        a === t ? r.skipped_effects.delete(c.effect) : r.skipped_effects.add(c.effect);
      r.oncommit(this.#i), r.ondiscard(this.#o);
    } else
      this.#i();
  }
}
function se(e, t, n = !1) {
  var r = new gi(e), o = n ? Dt : 0;
  function i(s, a) {
    r.ensure(s, a);
  }
  lr(() => {
    var s = !1;
    t((a, c = !0) => {
      s = !0, i(c, a);
    }), s || i(!1, null);
  }, o);
}
function iu(e, t) {
  io(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Jt(e, t) {
  return t;
}
function su(e, t, n) {
  for (var r = [], o = t.length, i, s = t.length, a = 0; a < o; a++) {
    let h = t[a];
    $t(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Vo(eo(i.done)), f.delete(i), f.size === 0 && (e.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var c = r.length === 0 && n !== null;
    if (c) {
      var u = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      Hc(d), d.append(u), e.items.clear();
    }
    Vo(t, !c);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function Vo(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Ce(e[n], t);
}
var Yi;
function rt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), c = (t & Zs) !== 0;
  if (c) {
    var u = (
      /** @type {Element} */
      e
    );
    s = u.appendChild(At());
  }
  var d = null, h = /* @__PURE__ */ ai(() => {
    var w = n();
    return $r(w) ? w : w == null ? [] : eo(w);
  }), f, g = !0;
  function v() {
    m.fallback = d, au(m, f, s, t, r), d !== null && (f.length === 0 ? (d.f & Ct) === 0 ? di(d) : (d.f ^= Ct, Kn(d, null, s)) : $t(d, () => {
      d = null;
    }));
  }
  var p = lr(() => {
    f = /** @type {V[]} */
    l(h);
    for (var w = f.length, S = /* @__PURE__ */ new Set(), C = (
      /** @type {Batch} */
      ye
    ), b = la(), A = 0; A < w; A += 1) {
      var T = f[A], z = r(T, A), M = g ? null : a.get(z);
      M ? (M.v && Mn(M.v, T), M.i && Mn(M.i, A), b && C.skipped_effects.delete(M.e)) : (M = lu(
        a,
        g ? s : Yi ??= At(),
        T,
        z,
        A,
        o,
        t,
        n
      ), g || (M.e.f |= Ct), a.set(z, M)), S.add(z);
    }
    if (w === 0 && i && !d && (g ? d = Re(() => i(s)) : (d = Re(() => i(Yi ??= At())), d.f |= Ct)), !g)
      if (b) {
        for (const [B, Z] of a)
          S.has(B) || C.skipped_effects.add(Z.e);
        C.oncommit(v), C.ondiscard(() => {
        });
      } else
        v();
    l(h);
  }), m = { effect: p, items: a, outrogroups: null, fallback: d };
  g = !1;
}
function au(e, t, n, r, o) {
  var i = (r & ac) !== 0, s = t.length, a = e.items, c = e.effect.first, u, d = null, h, f = [], g = [], v, p, m, w;
  if (i)
    for (w = 0; w < s; w += 1)
      v = t[w], p = o(v, w), m = /** @type {EachItem} */
      a.get(p).e, (m.f & Ct) === 0 && (m.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(m));
  for (w = 0; w < s; w += 1) {
    if (v = t[w], p = o(v, w), m = /** @type {EachItem} */
    a.get(p).e, e.outrogroups !== null)
      for (const Z of e.outrogroups)
        Z.pending.delete(m), Z.done.delete(m);
    if ((m.f & Ct) !== 0)
      if (m.f ^= Ct, m === c)
        Kn(m, null, n);
      else {
        var S = d ? d.next : c;
        m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), Ot(e, d, m), Ot(e, m, S), Kn(m, S, n), d = m, f = [], g = [], c = d.next;
        continue;
      }
    if ((m.f & Xe) !== 0 && (di(m), i && (m.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(m))), m !== c) {
      if (u !== void 0 && u.has(m)) {
        if (f.length < g.length) {
          var C = g[0], b;
          d = C.prev;
          var A = f[0], T = f[f.length - 1];
          for (b = 0; b < f.length; b += 1)
            Kn(f[b], C, n);
          for (b = 0; b < g.length; b += 1)
            u.delete(g[b]);
          Ot(e, A.prev, T.next), Ot(e, d, A), Ot(e, T, C), c = C, d = T, w -= 1, f = [], g = [];
        } else
          u.delete(m), Kn(m, c, n), Ot(e, m.prev, m.next), Ot(e, m, d === null ? e.effect.first : d.next), Ot(e, d, m), d = m;
        continue;
      }
      for (f = [], g = []; c !== null && c !== m; )
        (u ??= /* @__PURE__ */ new Set()).add(c), g.push(c), c = c.next;
      if (c === null)
        continue;
    }
    (m.f & Ct) === 0 && f.push(m), d = m, c = m.next;
  }
  if (e.outrogroups !== null) {
    for (const Z of e.outrogroups)
      Z.pending.size === 0 && (Vo(eo(Z.done)), e.outrogroups?.delete(Z));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || u !== void 0) {
    var z = [];
    if (u !== void 0)
      for (m of u)
        (m.f & Xe) === 0 && z.push(m);
    for (; c !== null; )
      (c.f & Xe) === 0 && c !== e.fallback && z.push(c), c = c.next;
    var M = z.length;
    if (M > 0) {
      var B = (r & Zs) !== 0 && s === 0 ? n : null;
      if (i) {
        for (w = 0; w < M; w += 1)
          z[w].nodes?.a?.measure();
        for (w = 0; w < M; w += 1)
          z[w].nodes?.a?.fix();
      }
      su(e, z, B);
    }
  }
  i && Xt(() => {
    if (h !== void 0)
      for (m of h)
        m.nodes?.a?.apply();
  });
}
function lu(e, t, n, r, o, i, s, a) {
  var c = (s & ic) !== 0 ? (s & lc) === 0 ? /* @__PURE__ */ Ic(n, !1, !1) : an(n) : null, u = (s & sc) !== 0 ? an(o) : null;
  return {
    v: c,
    i: u,
    e: Re(() => (i(t, c ?? n, u ?? o, a), () => {
      e.delete(r);
    }))
  };
}
function Kn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, o = e.nodes.end, i = t && (t.f & Ct) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ sr(r)
      );
      if (i.before(r), r === o)
        return;
      r = s;
    }
}
function Ot(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ma(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  oe(() => {
    var a = (
      /** @type {Effect} */
      fe
    );
    if (s !== (s = t() ?? "") && (a.nodes !== null && (va(
      a.nodes.start,
      /** @type {TemplateNode} */
      a.nodes.end
    ), a.nodes = null), s !== "")) {
      var c = s + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var u = hi(c);
      if ((n || r) && (u = /** @type {Element} */
      /* @__PURE__ */ Ze(u)), cn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ze(u),
        /** @type {TemplateNode} */
        u.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Ze(u); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Ze(u)
          );
      else
        i.before(u);
    }
  });
}
function Fe(e, t, ...n) {
  var r = new gi(e);
  lr(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Dt);
}
function ao(e, t, n) {
  var r = new gi(e);
  lr(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Dt);
}
const cu = () => performance.now(), kt = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => cu(),
  tasks: /* @__PURE__ */ new Set()
};
function Aa() {
  const e = kt.now();
  kt.tasks.forEach((t) => {
    t.c(e) || (kt.tasks.delete(t), t.f());
  }), kt.tasks.size !== 0 && kt.tick(Aa);
}
function uu(e) {
  let t;
  return kt.tasks.size === 0 && kt.tick(Aa), {
    promise: new Promise((n) => {
      kt.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      kt.tasks.delete(t);
    }
  };
}
function br(e, t) {
  ar(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function du(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Zi(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [o, i] = r.split(":");
    if (!o || i === void 0) break;
    const s = du(o.trim());
    t[s] = i.trim();
  }
  return t;
}
const fu = (e) => e;
function hu(e, t, n, r) {
  var o = (e & gc) !== 0, i = "both", s, a = t.inert, c = t.style.overflow, u, d;
  function h() {
    return ar(() => s ??= n()(t, r?.() ?? /** @type {P} */
    {}, {
      direction: i
    }));
  }
  var f = {
    is_global: o,
    in() {
      t.inert = a, br(t, "introstart"), u = Bo(t, h(), d, 1, () => {
        br(t, "introend"), u?.abort(), u = s = void 0, t.style.overflow = c;
      });
    },
    out(m) {
      t.inert = !0, br(t, "outrostart"), d = Bo(t, h(), u, 0, () => {
        br(t, "outroend"), m?.();
      });
    },
    stop: () => {
      u?.abort(), d?.abort();
    }
  }, g = (
    /** @type {Effect & { nodes: EffectNodes }} */
    fe
  );
  if ((g.nodes.t ??= []).push(f), Lo) {
    var v = o;
    if (!v) {
      for (var p = (
        /** @type {Effect | null} */
        g.parent
      ); p && (p.f & Dt) !== 0; )
        for (; (p = p.parent) && (p.f & yt) === 0; )
          ;
      v = !p || (p.f & oo) !== 0;
    }
    v && Hn(() => {
      Le(() => f.in());
    });
  }
}
function Bo(e, t, n, r, o) {
  var i = r === 1;
  if (wn(t)) {
    var s, a = !1;
    return Xt(() => {
      if (!a) {
        var m = t({ direction: i ? "in" : "out" });
        s = Bo(e, m, n, r, o);
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
  const { delay: c = 0, css: u, tick: d, easing: h = fu } = t;
  var f = [];
  if (i && n === void 0 && (d && d(0, 1), u)) {
    var g = Zi(u(0, 1));
    f.push(g, g);
  }
  var v = () => 1 - r, p = e.animate(f, { duration: c, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var m = n?.t() ?? 1 - r;
    n?.abort();
    var w = r - m, S = (
      /** @type {number} */
      t.duration * Math.abs(w)
    ), C = [];
    if (S > 0) {
      var b = !1;
      if (u)
        for (var A = Math.ceil(S / 16.666666666666668), T = 0; T <= A; T += 1) {
          var z = m + w * h(T / A), M = Zi(u(z, 1 - z));
          C.push(M), b ||= M.overflow === "hidden";
        }
      b && (e.style.overflow = "hidden"), v = () => {
        var B = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return m + w * h(B / S);
      }, d && uu(() => {
        if (p.playState !== "running") return !1;
        var B = v();
        return d(B, 1 - B), !0;
      });
    }
    p = e.animate(C, { duration: S, fill: "forwards" }), p.onfinish = () => {
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
function De(e, t, n) {
  Hn(() => {
    var r = Le(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      io(() => {
        var s = n();
        Na(s), o && qs(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function gu(e, t) {
  var n = void 0, r;
  fa(() => {
    n !== (n = t()) && (r && (Ce(r), r = null), n && (r = Re(() => {
      Hn(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Ta(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ta(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function vu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ta(e)) && (r && (r += " "), r += t);
  return r;
}
function Wt(e) {
  return typeof e == "object" ? vu(e) : e ?? "";
}
const Xi = [...` 	
\r\f \v\uFEFF`];
function pu(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Xi.includes(r[s - 1])) && (a === r.length || Xi.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Wi(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function _o(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function mu(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, c = [];
      r && c.push(...Object.keys(r).map(_o)), o && c.push(...Object.keys(o).map(_o));
      var u = 0, d = -1;
      const p = e.length;
      for (var h = 0; h < p; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === p - 1) {
            if (d !== -1) {
              var g = _o(e.substring(u, d).trim());
              if (!c.includes(g)) {
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
    return r && (n += Wi(r)), o && (n += Wi(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Ve(e, t, n, r, o, i) {
  var s = e.__className;
  if (s !== n || s === void 0) {
    var a = pu(n, r, i);
    a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a), e.__className = n;
  } else if (i && o !== i)
    for (var c in i) {
      var u = !!i[c];
      (o == null || u !== !!o[c]) && e.classList.toggle(c, u);
    }
  return i;
}
function wo(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function qe(e, t, n, r) {
  var o = e.__style;
  if (o !== t) {
    var i = mu(t, r);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else r && (Array.isArray(r) ? (wo(e, n?.[0], r[0]), wo(e, n?.[1], r[1], "important")) : wo(e, n, r));
  return r;
}
function jn(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!$r(t))
      return yc();
    for (var r of e.options)
      r.selected = t.includes(qi(r));
    return;
  }
  for (r of e.options) {
    var o = qi(r);
    if (Oc(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Fo(e) {
  var t = new MutationObserver(() => {
    jn(e, e.__value);
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
function qi(e) {
  return "__value" in e ? e.__value : e.value;
}
const Rt = /* @__PURE__ */ Symbol("class"), St = /* @__PURE__ */ Symbol("style"), Da = /* @__PURE__ */ Symbol("is custom element"), Ia = /* @__PURE__ */ Symbol("is html");
function xr(e, t) {
  var n = vi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function yu(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function G(e, t, n, r) {
  var o = vi(e);
  o[t] !== (o[t] = n) && (t === "loading" && (e[Gl] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && za(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function _u(e, t, n, r, o = !1, i = !1) {
  var s = vi(e), a = s[Da], c = !s[Ia], u = t || {}, d = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = Wt(n.class) : (r || n[Rt]) && (n.class = null), n[St] && (n.style ??= null);
  var f = za(e);
  for (const b in n) {
    let A = n[b];
    if (d && b === "value" && A == null) {
      e.value = e.__value = "", u[b] = A;
      continue;
    }
    if (b === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ve(e, g, A, r, t?.[Rt], n[Rt]), u[b] = A, u[Rt] = n[Rt];
      continue;
    }
    if (b === "style") {
      qe(e, A, t?.[St], n[St]), u[b] = A, u[St] = n[St];
      continue;
    }
    var v = u[b];
    if (!(A === v && !(A === void 0 && e.hasAttribute(b)))) {
      u[b] = A;
      var p = b[0] + b[1];
      if (p !== "$$")
        if (p === "on") {
          const T = {}, z = "$$" + b;
          let M = b.slice(2);
          var m = Uc(M);
          if (qc(M) && (M = M.slice(0, -7), T.capture = !0), !m && v) {
            if (A != null) continue;
            e.removeEventListener(M, u[z], T), u[z] = null;
          }
          if (A != null)
            if (m)
              e[`__${M}`] = A, so([M]);
            else {
              let B = function(Z) {
                u[b].call(this, Z);
              };
              var C = B;
              u[z] = fi(M, e, B, T);
            }
          else m && (e[`__${M}`] = void 0);
        } else if (b === "style")
          G(e, b, A);
        else if (b === "autofocus")
          Lc(
            /** @type {HTMLElement} */
            e,
            !!A
          );
        else if (!a && (b === "__value" || b === "value" && A != null))
          e.value = e.__value = A;
        else if (b === "selected" && d)
          yu(
            /** @type {HTMLOptionElement} */
            e,
            A
          );
        else {
          var w = b;
          c || (w = Jc(w));
          var S = w === "defaultValue" || w === "defaultChecked";
          if (A == null && !a && !S)
            if (s[b] = null, w === "value" || w === "checked") {
              let T = (
                /** @type {HTMLInputElement} */
                e
              );
              const z = t === void 0;
              if (w === "value") {
                let M = T.defaultValue;
                T.removeAttribute(w), T.defaultValue = M, T.value = T.__value = z ? M : null;
              } else {
                let M = T.defaultChecked;
                T.removeAttribute(w), T.defaultChecked = M, T.checked = z ? M : !1;
              }
            } else
              e.removeAttribute(b);
          else S || f.includes(w) && (a || typeof A != "string") ? (e[w] = A, w in s && (s[w] = Ne)) : typeof A != "function" && G(e, w, A);
        }
    }
  }
  return u;
}
function qt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  ea(o, n, r, (c) => {
    var u = void 0, d = {}, h = e.nodeName === "SELECT", f = !1;
    if (fa(() => {
      var v = t(...c.map(l)), p = _u(
        e,
        u,
        v,
        i,
        s,
        a
      );
      f && h && "value" in v && jn(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let w of Object.getOwnPropertySymbols(d))
        v[w] || Ce(d[w]);
      for (let w of Object.getOwnPropertySymbols(v)) {
        var m = v[w];
        w.description === mc && (!u || m !== u[w]) && (d[w] && Ce(d[w]), d[w] = Re(() => gu(e, () => m))), p[w] = m;
      }
      u = p;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      Hn(() => {
        jn(
          g,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), Fo(g);
      });
    }
    f = !0;
  });
}
function vi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Da]: e.nodeName.includes("-"),
      [Ia]: e.namespaceURI === pc
    }
  );
}
var Gi = /* @__PURE__ */ new Map();
function za(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Gi.get(t);
  if (n) return n;
  Gi.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Hs(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = to(o);
  }
  return n;
}
class pi {
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
          pi.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var wu = /* @__PURE__ */ new pi({
  box: "border-box"
});
function Ui(e, t, n) {
  var r = wu.observe(e, () => n(e[t]));
  Hn(() => (Le(() => n(e[t])), r));
}
function ji(e, t) {
  return e === t || e?.[ht] === t;
}
function ur(e = {}, t, n, r) {
  return Hn(() => {
    var o, i;
    return io(() => {
      o = i, i = [], Le(() => {
        e !== n(...i) && (t(e, ...i), o && ji(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Xt(() => {
        i && ji(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Oa(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ve
  ), n = t.l.u;
  if (!n) return;
  let r = () => Na(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ ir(() => {
      let a = !1;
      const c = t.s;
      for (const u in c)
        c[u] !== i[u] && (i[u] = c[u], a = !0);
      return a && o++, o;
    });
    r = () => l(s);
  }
  n.b.length && ui(() => {
    Ji(t, r), To(n.b);
  }), st(() => {
    const o = Le(() => n.m.map(ql));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && st(() => {
    Ji(t, r), To(n.a);
  });
}
function Ji(e, t) {
  if (e.l.s)
    for (const n of e.l.s) l(n);
  t();
}
let Er = !1;
function bu(e) {
  var t = Er;
  try {
    return Er = !1, [e(), Er];
  } finally {
    Er = t;
  }
}
const xu = {
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
function Gt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    xu
  );
}
const Eu = {
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
      const i = Vt(o, t);
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
        const o = Vt(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === ht || t === Ys) return !1;
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
function Ht(...e) {
  return new Proxy({ props: e }, Eu);
}
function V(e, t, n, r) {
  var o = !Rn || (n & uc) !== 0, i = (n & fc) !== 0, s = (n & hc) !== 0, a = (
    /** @type {V} */
    r
  ), c = !0, u = () => (c && (c = !1, a = s ? Le(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = ht in e || Ys in e;
    d = Vt(e, t)?.set ?? (h && t in e ? (C) => e[t] = C : void 0);
  }
  var f, g = !1;
  i ? [f, g] = bu(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && ec(), d(f)));
  var v;
  if (o ? v = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C === void 0 ? u() : (c = !0, C);
  } : v = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C !== void 0 && (a = /** @type {V} */
    void 0), C === void 0 ? a : C;
  }, o && (n & dc) === 0)
    return v;
  if (d) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(C, b) {
        return arguments.length > 0 ? ((!o || !b || p || g) && d(b ? v() : C), C) : v();
      })
    );
  }
  var m = !1, w = ((n & cc) !== 0 ? ir : ai)(() => (m = !1, v()));
  i && l(w);
  var S = (
    /** @type {Effect} */
    fe
  );
  return (
    /** @type {() => V} */
    (function(C, b) {
      if (arguments.length > 0) {
        const A = b ? l(w) : o && i ? dt(C) : C;
        return L(w, A), m = !0, a !== void 0 && (a = A), C;
      }
      return vn && m || (S.f & Mt) !== 0 ? w.v : l(w);
    })
  );
}
function ku(e) {
  ve === null && ni(), Rn && ve.l !== null ? Su(ve).m.push(e) : st(() => {
    const t = Le(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function lo(e) {
  ve === null && ni(), ku(() => () => Le(e));
}
function Su(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const Cu = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Cu);
var Nu = { value: () => {
} };
function co() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Dr(n);
}
function Dr(e) {
  this._ = e;
}
function Pu(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Dr.prototype = co.prototype = {
  constructor: Dr,
  on: function(e, t) {
    var n = this._, r = Pu(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Mu(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Qi(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Qi(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Dr(e);
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
function Mu(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Qi(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Nu, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ko = "http://www.w3.org/1999/xhtml";
const $i = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ko,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function uo(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), $i.hasOwnProperty(t) ? { space: $i[t], local: e } : e;
}
function Au(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ko && t.documentElement.namespaceURI === Ko ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Tu(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ra(e) {
  var t = uo(e);
  return (t.local ? Tu : Au)(t);
}
function Du() {
}
function mi(e) {
  return e == null ? Du : function() {
    return this.querySelector(e);
  };
}
function Iu(e) {
  typeof e != "function" && (e = mi(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), c, u, d = 0; d < s; ++d)
      (c = i[d]) && (u = e.call(c, c.__data__, d, i)) && ("__data__" in c && (u.__data__ = c.__data__), a[d] = u);
  return new Ge(r, this._parents);
}
function zu(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ou() {
  return [];
}
function Ha(e) {
  return e == null ? Ou : function() {
    return this.querySelectorAll(e);
  };
}
function Ru(e) {
  return function() {
    return zu(e.apply(this, arguments));
  };
}
function Hu(e) {
  typeof e == "function" ? e = Ru(e) : e = Ha(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, c, u = 0; u < a; ++u)
      (c = s[u]) && (r.push(e.call(c, c.__data__, u, s)), o.push(c));
  return new Ge(r, o);
}
function La(e) {
  return function() {
    return this.matches(e);
  };
}
function Va(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Lu = Array.prototype.find;
function Vu(e) {
  return function() {
    return Lu.call(this.children, e);
  };
}
function Bu() {
  return this.firstElementChild;
}
function Fu(e) {
  return this.select(e == null ? Bu : Vu(typeof e == "function" ? e : Va(e)));
}
var Ku = Array.prototype.filter;
function Yu() {
  return Array.from(this.children);
}
function Zu(e) {
  return function() {
    return Ku.call(this.children, e);
  };
}
function Xu(e) {
  return this.selectAll(e == null ? Yu : Zu(typeof e == "function" ? e : Va(e)));
}
function Wu(e) {
  typeof e != "function" && (e = La(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], c, u = 0; u < s; ++u)
      (c = i[u]) && e.call(c, c.__data__, u, i) && a.push(c);
  return new Ge(r, this._parents);
}
function Ba(e) {
  return new Array(e.length);
}
function qu() {
  return new Ge(this._enter || this._groups.map(Ba), this._parents);
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
function Gu(e) {
  return function() {
    return e;
  };
}
function Uu(e, t, n, r, o, i) {
  for (var s = 0, a, c = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Br(e, i[s]);
  for (; s < c; ++s)
    (a = t[s]) && (o[s] = a);
}
function ju(e, t, n, r, o, i, s) {
  var a, c, u = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (c = t[a]) && (f[a] = g = s.call(c, c.__data__, a, t) + "", u.has(g) ? o[a] = c : u.set(g, c));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (c = u.get(g)) ? (r[a] = c, c.__data__ = i[a], u.delete(g)) : n[a] = new Br(e, i[a]);
  for (a = 0; a < d; ++a)
    (c = t[a]) && u.get(f[a]) === c && (o[a] = c);
}
function Ju(e) {
  return e.__data__;
}
function Qu(e, t) {
  if (!arguments.length) return Array.from(this, Ju);
  var n = t ? ju : Uu, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Gu(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), c = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], f = h.length, g = $u(e.call(d, d && d.__data__, u, r)), v = g.length, p = a[u] = new Array(v), m = s[u] = new Array(v), w = c[u] = new Array(f);
    n(d, h, p, m, w, g, t);
    for (var S = 0, C = 0, b, A; S < v; ++S)
      if (b = p[S]) {
        for (S >= C && (C = S + 1); !(A = m[C]) && ++C < v; ) ;
        b._next = A || null;
      }
  }
  return s = new Ge(s, r), s._enter = a, s._exit = c, s;
}
function $u(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ed() {
  return new Ge(this._exit || this._groups.map(Ba), this._parents);
}
function td(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function nd(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), c = 0; c < s; ++c)
    for (var u = n[c], d = r[c], h = u.length, f = a[c] = new Array(h), g, v = 0; v < h; ++v)
      (g = u[v] || d[v]) && (f[v] = g);
  for (; c < o; ++c)
    a[c] = n[c];
  return new Ge(a, this._parents);
}
function rd() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function od(e) {
  e || (e = id);
  function t(h, f) {
    return h && f ? e(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, c = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (c[d] = u);
    c.sort(t);
  }
  return new Ge(o, this._parents).order();
}
function id(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function sd() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ad() {
  return Array.from(this);
}
function ld() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function cd() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function ud() {
  return !this.node();
}
function dd(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function fd(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function hd(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function gd(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function vd(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function pd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function md(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function yd(e, t) {
  var n = uo(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? hd : fd : typeof t == "function" ? n.local ? md : pd : n.local ? vd : gd)(n, t));
}
function Fa(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function _d(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function wd(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function bd(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function xd(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? _d : typeof t == "function" ? bd : wd)(e, t, n ?? "")) : An(this.node(), e);
}
function An(e, t) {
  return e.style.getPropertyValue(t) || Fa(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Ed(e) {
  return function() {
    delete this[e];
  };
}
function kd(e, t) {
  return function() {
    this[e] = t;
  };
}
function Sd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Cd(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Ed : typeof t == "function" ? Sd : kd)(e, t)) : this.node()[e];
}
function Ka(e) {
  return e.trim().split(/^|\s+/);
}
function yi(e) {
  return e.classList || new Ya(e);
}
function Ya(e) {
  this._node = e, this._names = Ka(e.getAttribute("class") || "");
}
Ya.prototype = {
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
function Za(e, t) {
  for (var n = yi(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Xa(e, t) {
  for (var n = yi(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Nd(e) {
  return function() {
    Za(this, e);
  };
}
function Pd(e) {
  return function() {
    Xa(this, e);
  };
}
function Md(e, t) {
  return function() {
    (t.apply(this, arguments) ? Za : Xa)(this, e);
  };
}
function Ad(e, t) {
  var n = Ka(e + "");
  if (arguments.length < 2) {
    for (var r = yi(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Md : t ? Nd : Pd)(n, t));
}
function Td() {
  this.textContent = "";
}
function Dd(e) {
  return function() {
    this.textContent = e;
  };
}
function Id(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function zd(e) {
  return arguments.length ? this.each(e == null ? Td : (typeof e == "function" ? Id : Dd)(e)) : this.node().textContent;
}
function Od() {
  this.innerHTML = "";
}
function Rd(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Hd(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Ld(e) {
  return arguments.length ? this.each(e == null ? Od : (typeof e == "function" ? Hd : Rd)(e)) : this.node().innerHTML;
}
function Vd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Bd() {
  return this.each(Vd);
}
function Fd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Kd() {
  return this.each(Fd);
}
function Yd(e) {
  var t = typeof e == "function" ? e : Ra(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Zd() {
  return null;
}
function Xd(e, t) {
  var n = typeof e == "function" ? e : Ra(e), r = t == null ? Zd : typeof t == "function" ? t : mi(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Wd() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function qd() {
  return this.each(Wd);
}
function Gd() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ud() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function jd(e) {
  return this.select(e ? Ud : Gd);
}
function Jd(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Qd(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function $d(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function ef(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function tf(e, t, n) {
  return function() {
    var r = this.__on, o, i = Qd(t);
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
function nf(e, t, n) {
  var r = $d(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var c = 0, u = a.length, d; c < u; ++c)
        for (o = 0, d = a[c]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? tf : ef, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Wa(e, t, n) {
  var r = Fa(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function rf(e, t) {
  return function() {
    return Wa(this, e, t);
  };
}
function of(e, t) {
  return function() {
    return Wa(this, e, t.apply(this, arguments));
  };
}
function sf(e, t) {
  return this.each((typeof t == "function" ? of : rf)(e, t));
}
function* af() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var qa = [null];
function Ge(e, t) {
  this._groups = e, this._parents = t;
}
function dr() {
  return new Ge([[document.documentElement]], qa);
}
function lf() {
  return this;
}
Ge.prototype = dr.prototype = {
  constructor: Ge,
  select: Iu,
  selectAll: Hu,
  selectChild: Fu,
  selectChildren: Xu,
  filter: Wu,
  data: Qu,
  enter: qu,
  exit: ed,
  join: td,
  merge: nd,
  selection: lf,
  order: rd,
  sort: od,
  call: sd,
  nodes: ad,
  node: ld,
  size: cd,
  empty: ud,
  each: dd,
  attr: yd,
  style: xd,
  property: Cd,
  classed: Ad,
  text: zd,
  html: Ld,
  raise: Bd,
  lower: Kd,
  append: Yd,
  insert: Xd,
  remove: qd,
  clone: jd,
  datum: Jd,
  on: nf,
  dispatch: sf,
  [Symbol.iterator]: af
};
function Je(e) {
  return typeof e == "string" ? new Ge([[document.querySelector(e)]], [document.documentElement]) : new Ge([[e]], qa);
}
function cf(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function et(e, t) {
  if (e = cf(e), t === void 0 && (t = e.currentTarget), t) {
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
const uf = { passive: !1 }, Jn = { capture: !0, passive: !1 };
function bo(e) {
  e.stopImmediatePropagation();
}
function kn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ga(e) {
  var t = e.document.documentElement, n = Je(e).on("dragstart.drag", kn, Jn);
  "onselectstart" in t ? n.on("selectstart.drag", kn, Jn) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ua(e, t) {
  var n = e.document.documentElement, r = Je(e).on("dragstart.drag", null);
  t && (r.on("click.drag", kn, Jn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const kr = (e) => () => e;
function Yo(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: c,
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
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
Yo.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function df(e) {
  return !e.ctrlKey && !e.button;
}
function ff() {
  return this.parentNode;
}
function hf(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function gf() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function vf() {
  var e = df, t = ff, n = hf, r = gf, o = {}, i = co("start", "drag", "end"), s = 0, a, c, u, d, h = 0;
  function f(b) {
    b.on("mousedown.drag", g).filter(r).on("touchstart.drag", m).on("touchmove.drag", w, uf).on("touchend.drag touchcancel.drag", S).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(b, A) {
    if (!(d || !e.call(this, b, A))) {
      var T = C(this, t.call(this, b, A), b, A, "mouse");
      T && (Je(b.view).on("mousemove.drag", v, Jn).on("mouseup.drag", p, Jn), Ga(b.view), bo(b), u = !1, a = b.clientX, c = b.clientY, T("start", b));
    }
  }
  function v(b) {
    if (kn(b), !u) {
      var A = b.clientX - a, T = b.clientY - c;
      u = A * A + T * T > h;
    }
    o.mouse("drag", b);
  }
  function p(b) {
    Je(b.view).on("mousemove.drag mouseup.drag", null), Ua(b.view, u), kn(b), o.mouse("end", b);
  }
  function m(b, A) {
    if (e.call(this, b, A)) {
      var T = b.changedTouches, z = t.call(this, b, A), M = T.length, B, Z;
      for (B = 0; B < M; ++B)
        (Z = C(this, z, b, A, T[B].identifier, T[B])) && (bo(b), Z("start", b, T[B]));
    }
  }
  function w(b) {
    var A = b.changedTouches, T = A.length, z, M;
    for (z = 0; z < T; ++z)
      (M = o[A[z].identifier]) && (kn(b), M("drag", b, A[z]));
  }
  function S(b) {
    var A = b.changedTouches, T = A.length, z, M;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), z = 0; z < T; ++z)
      (M = o[A[z].identifier]) && (bo(b), M("end", b, A[z]));
  }
  function C(b, A, T, z, M, B) {
    var Z = i.copy(), P = et(B || T, A), E, N, y;
    if ((y = n.call(b, new Yo("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: M,
      active: s,
      x: P[0],
      y: P[1],
      dx: 0,
      dy: 0,
      dispatch: Z
    }), z)) != null)
      return E = y.x - P[0] || 0, N = y.y - P[1] || 0, function x(k, D, O) {
        var I = P, R;
        switch (k) {
          case "start":
            o[M] = x, R = s++;
            break;
          case "end":
            delete o[M], --s;
          // falls through
          case "drag":
            P = et(O || D, A), R = s;
            break;
        }
        Z.call(
          k,
          b,
          new Yo(k, {
            sourceEvent: D,
            subject: y,
            target: f,
            identifier: M,
            active: R,
            x: P[0] + E,
            y: P[1] + N,
            dx: P[0] - I[0],
            dy: P[1] - I[1],
            dispatch: Z
          }),
          z
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : kr(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : kr(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : kr(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : kr(!!b), f) : r;
  }, f.on = function() {
    var b = i.on.apply(i, arguments);
    return b === i ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (h = (b = +b) * b, f) : Math.sqrt(h);
  }, f;
}
function _i(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ja(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function fr() {
}
var Qn = 0.7, Fr = 1 / Qn, Sn = "\\s*([+-]?\\d+)\\s*", $n = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", gt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", pf = /^#([0-9a-f]{3,8})$/, mf = new RegExp(`^rgb\\(${Sn},${Sn},${Sn}\\)$`), yf = new RegExp(`^rgb\\(${gt},${gt},${gt}\\)$`), _f = new RegExp(`^rgba\\(${Sn},${Sn},${Sn},${$n}\\)$`), wf = new RegExp(`^rgba\\(${gt},${gt},${gt},${$n}\\)$`), bf = new RegExp(`^hsl\\(${$n},${gt},${gt}\\)$`), xf = new RegExp(`^hsla\\(${$n},${gt},${gt},${$n}\\)$`), es = {
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
_i(fr, un, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ts,
  // Deprecated! Use color.formatHex.
  formatHex: ts,
  formatHex8: Ef,
  formatHsl: kf,
  formatRgb: ns,
  toString: ns
});
function ts() {
  return this.rgb().formatHex();
}
function Ef() {
  return this.rgb().formatHex8();
}
function kf() {
  return Ja(this).formatHsl();
}
function ns() {
  return this.rgb().formatRgb();
}
function un(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = pf.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? rs(t) : n === 3 ? new Be(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Sr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Sr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = mf.exec(e)) ? new Be(t[1], t[2], t[3], 1) : (t = yf.exec(e)) ? new Be(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = _f.exec(e)) ? Sr(t[1], t[2], t[3], t[4]) : (t = wf.exec(e)) ? Sr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = bf.exec(e)) ? ss(t[1], t[2] / 100, t[3] / 100, 1) : (t = xf.exec(e)) ? ss(t[1], t[2] / 100, t[3] / 100, t[4]) : es.hasOwnProperty(e) ? rs(es[e]) : e === "transparent" ? new Be(NaN, NaN, NaN, 0) : null;
}
function rs(e) {
  return new Be(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Sr(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Be(e, t, n, r);
}
function Sf(e) {
  return e instanceof fr || (e = un(e)), e ? (e = e.rgb(), new Be(e.r, e.g, e.b, e.opacity)) : new Be();
}
function Zo(e, t, n, r) {
  return arguments.length === 1 ? Sf(e) : new Be(e, t, n, r ?? 1);
}
function Be(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
_i(Be, Zo, ja(fr, {
  brighter(e) {
    return e = e == null ? Fr : Math.pow(Fr, e), new Be(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Qn : Math.pow(Qn, e), new Be(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Be(nn(this.r), nn(this.g), nn(this.b), Kr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: os,
  // Deprecated! Use color.formatHex.
  formatHex: os,
  formatHex8: Cf,
  formatRgb: is,
  toString: is
}));
function os() {
  return `#${Qt(this.r)}${Qt(this.g)}${Qt(this.b)}`;
}
function Cf() {
  return `#${Qt(this.r)}${Qt(this.g)}${Qt(this.b)}${Qt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function is() {
  const e = Kr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${nn(this.r)}, ${nn(this.g)}, ${nn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Kr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function nn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Qt(e) {
  return e = nn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ss(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new tt(e, t, n, r);
}
function Ja(e) {
  if (e instanceof tt) return new tt(e.h, e.s, e.l, e.opacity);
  if (e instanceof fr || (e = un(e)), !e) return new tt();
  if (e instanceof tt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, c = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= c < 0.5 ? i + o : 2 - i - o, s *= 60) : a = c > 0 && c < 1 ? 0 : s, new tt(s, a, c, e.opacity);
}
function Nf(e, t, n, r) {
  return arguments.length === 1 ? Ja(e) : new tt(e, t, n, r ?? 1);
}
function tt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
_i(tt, Nf, ja(fr, {
  brighter(e) {
    return e = e == null ? Fr : Math.pow(Fr, e), new tt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Qn : Math.pow(Qn, e), new tt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Be(
      xo(e >= 240 ? e - 240 : e + 120, o, r),
      xo(e, o, r),
      xo(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new tt(as(this.h), Cr(this.s), Cr(this.l), Kr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Kr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${as(this.h)}, ${Cr(this.s) * 100}%, ${Cr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function as(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Cr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function xo(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const wi = (e) => () => e;
function Pf(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Mf(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Af(e) {
  return (e = +e) == 1 ? Qa : function(t, n) {
    return n - t ? Mf(t, n, e) : wi(isNaN(t) ? n : t);
  };
}
function Qa(e, t) {
  var n = t - e;
  return n ? Pf(e, n) : wi(isNaN(e) ? t : e);
}
const Yr = (function e(t) {
  var n = Af(t);
  function r(o, i) {
    var s = n((o = Zo(o)).r, (i = Zo(i)).r), a = n(o.g, i.g), c = n(o.b, i.b), u = Qa(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function Tf(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Df(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function If(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Wn(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function zf(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function ut(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Of(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Wn(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Xo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Eo = new RegExp(Xo.source, "g");
function Rf(e) {
  return function() {
    return e;
  };
}
function Hf(e) {
  return function(t) {
    return e(t) + "";
  };
}
function $a(e, t) {
  var n = Xo.lastIndex = Eo.lastIndex = 0, r, o, i, s = -1, a = [], c = [];
  for (e = e + "", t = t + ""; (r = Xo.exec(e)) && (o = Eo.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, c.push({ i: s, x: ut(r, o) })), n = Eo.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? c[0] ? Hf(c[0].x) : Rf(t) : (t = c.length, function(u) {
    for (var d = 0, h; d < t; ++d) a[(h = c[d]).i] = h.x(u);
    return a.join("");
  });
}
function Wn(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? wi(t) : (n === "number" ? ut : n === "string" ? (r = un(t)) ? (t = r, Yr) : $a : t instanceof un ? Yr : t instanceof Date ? zf : Df(t) ? Tf : Array.isArray(t) ? If : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Of : ut)(e, t);
}
var ls = 180 / Math.PI, Wo = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function el(e, t, n, r, o, i) {
  var s, a, c;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (c = e * n + t * r) && (n -= e * c, r -= t * c), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, c /= a), e * r < t * n && (e = -e, t = -t, c = -c, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * ls,
    skewX: Math.atan(c) * ls,
    scaleX: s,
    scaleY: a
  };
}
var Nr;
function Lf(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Wo : el(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Vf(e) {
  return e == null || (Nr || (Nr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Nr.setAttribute("transform", e), !(e = Nr.transform.baseVal.consolidate())) ? Wo : (e = e.matrix, el(e.a, e.b, e.c, e.d, e.e, e.f));
}
function tl(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, h, f, g, v) {
    if (u !== h || d !== f) {
      var p = g.push("translate(", null, t, null, n);
      v.push({ i: p - 4, x: ut(u, h) }, { i: p - 2, x: ut(d, f) });
    } else (h || f) && g.push("translate(" + h + t + f + n);
  }
  function s(u, d, h, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: ut(u, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(u, d, h, f) {
    u !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: ut(u, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function c(u, d, h, f, g, v) {
    if (u !== h || d !== f) {
      var p = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: p - 4, x: ut(u, h) }, { i: p - 2, x: ut(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(u, d) {
    var h = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, h, f), s(u.rotate, d.rotate, h, f), a(u.skewX, d.skewX, h, f), c(u.scaleX, u.scaleY, d.scaleX, d.scaleY, h, f), u = d = null, function(g) {
      for (var v = -1, p = f.length, m; ++v < p; ) h[(m = f[v]).i] = m.x(g);
      return h.join("");
    };
  };
}
var Bf = tl(Lf, "px, ", "px)", "deg)"), Ff = tl(Vf, ", ", ")", ")"), Kf = 1e-12;
function cs(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Yf(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Zf(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Ir = (function e(t, n, r) {
  function o(i, s) {
    var a = i[0], c = i[1], u = i[2], d = s[0], h = s[1], f = s[2], g = d - a, v = h - c, p = g * g + v * v, m, w;
    if (p < Kf)
      w = Math.log(f / u) / t, m = function(z) {
        return [
          a + z * g,
          c + z * v,
          u * Math.exp(t * z * w)
        ];
      };
    else {
      var S = Math.sqrt(p), C = (f * f - u * u + r * p) / (2 * u * n * S), b = (f * f - u * u - r * p) / (2 * f * n * S), A = Math.log(Math.sqrt(C * C + 1) - C), T = Math.log(Math.sqrt(b * b + 1) - b);
      w = (T - A) / t, m = function(z) {
        var M = z * w, B = cs(A), Z = u / (n * S) * (B * Zf(t * M + A) - Yf(A));
        return [
          a + Z * g,
          c + Z * v,
          u * B / cs(t * M + A)
        ];
      };
    }
    return m.duration = w * 1e3 * t / Math.SQRT2, m;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, c = a * a;
    return e(s, a, c);
  }, o;
})(Math.SQRT2, 2, 4);
var Tn = 0, Yn = 0, Vn = 0, nl = 1e3, Zr, Zn, Xr = 0, dn = 0, fo = 0, er = typeof performance == "object" && performance.now ? performance : Date, rl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function bi() {
  return dn || (rl(Xf), dn = er.now() + fo);
}
function Xf() {
  dn = 0;
}
function Wr() {
  this._call = this._time = this._next = null;
}
Wr.prototype = ol.prototype = {
  constructor: Wr,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? bi() : +n) + (t == null ? 0 : +t), !this._next && Zn !== this && (Zn ? Zn._next = this : Zr = this, Zn = this), this._call = e, this._time = n, qo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, qo());
  }
};
function ol(e, t, n) {
  var r = new Wr();
  return r.restart(e, t, n), r;
}
function Wf() {
  bi(), ++Tn;
  for (var e = Zr, t; e; )
    (t = dn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Tn;
}
function us() {
  dn = (Xr = er.now()) + fo, Tn = Yn = 0;
  try {
    Wf();
  } finally {
    Tn = 0, Gf(), dn = 0;
  }
}
function qf() {
  var e = er.now(), t = e - Xr;
  t > nl && (fo -= t, Xr = e);
}
function Gf() {
  for (var e, t = Zr, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Zr = n);
  Zn = e, qo(r);
}
function qo(e) {
  if (!Tn) {
    Yn && (Yn = clearTimeout(Yn));
    var t = e - dn;
    t > 24 ? (e < 1 / 0 && (Yn = setTimeout(us, e - er.now() - fo)), Vn && (Vn = clearInterval(Vn))) : (Vn || (Xr = er.now(), Vn = setInterval(qf, nl)), Tn = 1, rl(us));
  }
}
function ds(e, t, n) {
  var r = new Wr();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Uf = co("start", "end", "cancel", "interrupt"), jf = [], il = 0, fs = 1, Go = 2, zr = 3, hs = 4, Uo = 5, Or = 6;
function ho(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Jf(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Uf,
    tween: jf,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: il
  });
}
function xi(e, t) {
  var n = at(e, t);
  if (n.state > il) throw new Error("too late; already scheduled");
  return n;
}
function _t(e, t) {
  var n = at(e, t);
  if (n.state > zr) throw new Error("too late; already running");
  return n;
}
function at(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Jf(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = ol(i, 0, n.time);
  function i(u) {
    n.state = fs, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, h, f, g;
    if (n.state !== fs) return c();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === zr) return ds(s);
        g.state === hs ? (g.state = Or, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Or, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (ds(function() {
      n.state === zr && (n.state = hs, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Go, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Go) {
      for (n.state = zr, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Uo, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === Uo && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = Or, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Rr(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Go && r.state < Uo, r.state = Or, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Qf(e) {
  return this.each(function() {
    Rr(this, e);
  });
}
function $f(e, t) {
  var n, r;
  return function() {
    var o = _t(this, e), i = o.tween;
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
function eh(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = _t(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, c = 0, u = o.length; c < u; ++c)
        if (o[c].name === t) {
          o[c] = a;
          break;
        }
      c === u && o.push(a);
    }
    i.tween = o;
  };
}
function th(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = at(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? $f : eh)(n, e, t));
}
function Ei(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = _t(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return at(o, r).value[t];
  };
}
function sl(e, t) {
  var n;
  return (typeof t == "number" ? ut : t instanceof un ? Yr : (n = un(t)) ? (t = n, Yr) : $a)(e, t);
}
function nh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function rh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function oh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function ih(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function sh(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), c;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), c = a + "", s === c ? null : s === r && c === o ? i : (o = c, i = t(r = s, a)));
  };
}
function ah(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), c;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), c = a + "", s === c ? null : s === r && c === o ? i : (o = c, i = t(r = s, a)));
  };
}
function lh(e, t) {
  var n = uo(e), r = n === "transform" ? Ff : sl;
  return this.attrTween(e, typeof t == "function" ? (n.local ? ah : sh)(n, r, Ei(this, "attr." + e, t)) : t == null ? (n.local ? rh : nh)(n) : (n.local ? ih : oh)(n, r, t));
}
function ch(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function uh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function dh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && uh(e, i)), n;
  }
  return o._value = t, o;
}
function fh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && ch(e, i)), n;
  }
  return o._value = t, o;
}
function hh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = uo(e);
  return this.tween(n, (r.local ? dh : fh)(r, t));
}
function gh(e, t) {
  return function() {
    xi(this, e).delay = +t.apply(this, arguments);
  };
}
function vh(e, t) {
  return t = +t, function() {
    xi(this, e).delay = t;
  };
}
function ph(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? gh : vh)(t, e)) : at(this.node(), t).delay;
}
function mh(e, t) {
  return function() {
    _t(this, e).duration = +t.apply(this, arguments);
  };
}
function yh(e, t) {
  return t = +t, function() {
    _t(this, e).duration = t;
  };
}
function _h(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? mh : yh)(t, e)) : at(this.node(), t).duration;
}
function wh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    _t(this, e).ease = t;
  };
}
function bh(e) {
  var t = this._id;
  return arguments.length ? this.each(wh(t, e)) : at(this.node(), t).ease;
}
function xh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    _t(this, e).ease = n;
  };
}
function Eh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(xh(this._id, e));
}
function kh(e) {
  typeof e != "function" && (e = La(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], c, u = 0; u < s; ++u)
      (c = i[u]) && e.call(c, c.__data__, u, i) && a.push(c);
  return new It(r, this._parents, this._name, this._id);
}
function Sh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var c = t[a], u = n[a], d = c.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = c[g] || u[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new It(s, this._parents, this._name, this._id);
}
function Ch(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Nh(e, t, n) {
  var r, o, i = Ch(t) ? xi : _t;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Ph(e, t) {
  var n = this._id;
  return arguments.length < 2 ? at(this.node(), n).on.on(e) : this.each(Nh(n, e, t));
}
function Mh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Ah() {
  return this.on("end.remove", Mh(this._id));
}
function Th(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = mi(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], c = a.length, u = i[s] = new Array(c), d, h, f = 0; f < c; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[f] = h, ho(u[f], t, n, f, u, at(d, n)));
  return new It(i, this._parents, t, n);
}
function Dh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ha(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var c = r[a], u = c.length, d, h = 0; h < u; ++h)
      if (d = c[h]) {
        for (var f = e.call(d, d.__data__, h, c), g, v = at(d, n), p = 0, m = f.length; p < m; ++p)
          (g = f[p]) && ho(g, t, n, p, f, v);
        i.push(f), s.push(d);
      }
  return new It(i, s, t, n);
}
var Ih = dr.prototype.constructor;
function zh() {
  return new Ih(this._groups, this._parents);
}
function Oh(e, t) {
  var n, r, o;
  return function() {
    var i = An(this, e), s = (this.style.removeProperty(e), An(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function al(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Rh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = An(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Hh(e, t, n) {
  var r, o, i;
  return function() {
    var s = An(this, e), a = n(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(e), An(this, e))), s === c ? null : s === r && c === o ? i : (o = c, i = t(r = s, a));
  };
}
function Lh(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var c = _t(this, e), u = c.on, d = c.value[i] == null ? a || (a = al(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), c.on = r;
  };
}
function Vh(e, t, n) {
  var r = (e += "") == "transform" ? Bf : sl;
  return t == null ? this.styleTween(e, Oh(e, r)).on("end.style." + e, al(e)) : typeof t == "function" ? this.styleTween(e, Hh(e, r, Ei(this, "style." + e, t))).each(Lh(this._id, e)) : this.styleTween(e, Rh(e, r, t), n).on("end.style." + e, null);
}
function Bh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Fh(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Bh(e, s, n)), r;
  }
  return i._value = t, i;
}
function Kh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, Fh(e, t, n ?? ""));
}
function Yh(e) {
  return function() {
    this.textContent = e;
  };
}
function Zh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Xh(e) {
  return this.tween("text", typeof e == "function" ? Zh(Ei(this, "text", e)) : Yh(e == null ? "" : e + ""));
}
function Wh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function qh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Wh(o)), t;
  }
  return r._value = e, r;
}
function Gh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, qh(e));
}
function Uh() {
  for (var e = this._name, t = this._id, n = ll(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, c, u = 0; u < a; ++u)
      if (c = s[u]) {
        var d = at(c, t);
        ho(c, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new It(r, this._parents, e, n);
}
function jh() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, c = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = _t(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(c)), u.on = t;
    }), o === 0 && i();
  });
}
var Jh = 0;
function It(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ll() {
  return ++Jh;
}
var xt = dr.prototype;
It.prototype = {
  constructor: It,
  select: Th,
  selectAll: Dh,
  selectChild: xt.selectChild,
  selectChildren: xt.selectChildren,
  filter: kh,
  merge: Sh,
  selection: zh,
  transition: Uh,
  call: xt.call,
  nodes: xt.nodes,
  node: xt.node,
  size: xt.size,
  empty: xt.empty,
  each: xt.each,
  on: Ph,
  attr: lh,
  attrTween: hh,
  style: Vh,
  styleTween: Kh,
  text: Xh,
  textTween: Gh,
  remove: Ah,
  tween: th,
  delay: ph,
  duration: _h,
  ease: bh,
  easeVarying: Eh,
  end: jh,
  [Symbol.iterator]: xt[Symbol.iterator]
};
function Qh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var $h = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Qh
};
function eg(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function tg(e) {
  var t, n;
  e instanceof It ? (t = e._id, e = e._name) : (t = ll(), (n = $h).time = bi(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, c, u = 0; u < a; ++u)
      (c = s[u]) && ho(c, e, t, u, s, n || eg(c, t));
  return new It(r, this._parents, e, t);
}
dr.prototype.interrupt = Qf;
dr.prototype.transition = tg;
const Pr = (e) => () => e;
function ng(e, {
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
function Nt(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Nt.prototype = {
  constructor: Nt,
  scale: function(e) {
    return e === 1 ? this : new Nt(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Nt(this.k, this.x + this.k * e, this.y + this.k * t);
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
var go = new Nt(1, 0, 0);
cl.prototype = Nt.prototype;
function cl(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return go;
  return e.__zoom;
}
function ko(e) {
  e.stopImmediatePropagation();
}
function Bn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function rg(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function og() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function gs() {
  return this.__zoom || go;
}
function ig(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function sg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ag(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function ul() {
  var e = rg, t = og, n = ag, r = ig, o = sg, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, c = Ir, u = co("start", "zoom", "end"), d, h, f, g = 500, v = 150, p = 0, m = 10;
  function w(y) {
    y.property("__zoom", gs).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", B).on("dblclick.zoom", Z).filter(o).on("touchstart.zoom", P).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", N).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(y, x, k, D) {
    var O = y.selection ? y.selection() : y;
    O.property("__zoom", gs), y !== O ? A(y, x, k, D) : O.interrupt().each(function() {
      T(this, arguments).event(D).start().zoom(null, typeof x == "function" ? x.apply(this, arguments) : x).end();
    });
  }, w.scaleBy = function(y, x, k, D) {
    w.scaleTo(y, function() {
      var O = this.__zoom.k, I = typeof x == "function" ? x.apply(this, arguments) : x;
      return O * I;
    }, k, D);
  }, w.scaleTo = function(y, x, k, D) {
    w.transform(y, function() {
      var O = t.apply(this, arguments), I = this.__zoom, R = k == null ? b(O) : typeof k == "function" ? k.apply(this, arguments) : k, F = I.invert(R), X = typeof x == "function" ? x.apply(this, arguments) : x;
      return n(C(S(I, X), R, F), O, s);
    }, k, D);
  }, w.translateBy = function(y, x, k, D) {
    w.transform(y, function() {
      return n(this.__zoom.translate(
        typeof x == "function" ? x.apply(this, arguments) : x,
        typeof k == "function" ? k.apply(this, arguments) : k
      ), t.apply(this, arguments), s);
    }, null, D);
  }, w.translateTo = function(y, x, k, D, O) {
    w.transform(y, function() {
      var I = t.apply(this, arguments), R = this.__zoom, F = D == null ? b(I) : typeof D == "function" ? D.apply(this, arguments) : D;
      return n(go.translate(F[0], F[1]).scale(R.k).translate(
        typeof x == "function" ? -x.apply(this, arguments) : -x,
        typeof k == "function" ? -k.apply(this, arguments) : -k
      ), I, s);
    }, D, O);
  };
  function S(y, x) {
    return x = Math.max(i[0], Math.min(i[1], x)), x === y.k ? y : new Nt(x, y.x, y.y);
  }
  function C(y, x, k) {
    var D = x[0] - k[0] * y.k, O = x[1] - k[1] * y.k;
    return D === y.x && O === y.y ? y : new Nt(y.k, D, O);
  }
  function b(y) {
    return [(+y[0][0] + +y[1][0]) / 2, (+y[0][1] + +y[1][1]) / 2];
  }
  function A(y, x, k, D) {
    y.on("start.zoom", function() {
      T(this, arguments).event(D).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(D).end();
    }).tween("zoom", function() {
      var O = this, I = arguments, R = T(O, I).event(D), F = t.apply(O, I), X = k == null ? b(F) : typeof k == "function" ? k.apply(O, I) : k, W = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), K = O.__zoom, U = typeof x == "function" ? x.apply(O, I) : x, j = c(K.invert(X).concat(W / K.k), U.invert(X).concat(W / U.k));
      return function(Q) {
        if (Q === 1) Q = U;
        else {
          var ee = j(Q), le = W / ee[2];
          Q = new Nt(le, X[0] - ee[0] * le, X[1] - ee[1] * le);
        }
        R.zoom(null, Q);
      };
    });
  }
  function T(y, x, k) {
    return !k && y.__zooming || new z(y, x);
  }
  function z(y, x) {
    this.that = y, this.args = x, this.active = 0, this.sourceEvent = null, this.extent = t.apply(y, x), this.taps = 0;
  }
  z.prototype = {
    event: function(y) {
      return y && (this.sourceEvent = y), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(y, x) {
      return this.mouse && y !== "mouse" && (this.mouse[1] = x.invert(this.mouse[0])), this.touch0 && y !== "touch" && (this.touch0[1] = x.invert(this.touch0[0])), this.touch1 && y !== "touch" && (this.touch1[1] = x.invert(this.touch1[0])), this.that.__zoom = x, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(y) {
      var x = Je(this.that).datum();
      u.call(
        y,
        this.that,
        new ng(y, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: u
        }),
        x
      );
    }
  };
  function M(y, ...x) {
    if (!e.apply(this, arguments)) return;
    var k = T(this, x).event(y), D = this.__zoom, O = Math.max(i[0], Math.min(i[1], D.k * Math.pow(2, r.apply(this, arguments)))), I = et(y);
    if (k.wheel)
      (k.mouse[0][0] !== I[0] || k.mouse[0][1] !== I[1]) && (k.mouse[1] = D.invert(k.mouse[0] = I)), clearTimeout(k.wheel);
    else {
      if (D.k === O) return;
      k.mouse = [I, D.invert(I)], Rr(this), k.start();
    }
    Bn(y), k.wheel = setTimeout(R, v), k.zoom("mouse", n(C(S(D, O), k.mouse[0], k.mouse[1]), k.extent, s));
    function R() {
      k.wheel = null, k.end();
    }
  }
  function B(y, ...x) {
    if (f || !e.apply(this, arguments)) return;
    var k = y.currentTarget, D = T(this, x, !0).event(y), O = Je(y.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", W, !0), I = et(y, k), R = y.clientX, F = y.clientY;
    Ga(y.view), ko(y), D.mouse = [I, this.__zoom.invert(I)], Rr(this), D.start();
    function X(K) {
      if (Bn(K), !D.moved) {
        var U = K.clientX - R, j = K.clientY - F;
        D.moved = U * U + j * j > p;
      }
      D.event(K).zoom("mouse", n(C(D.that.__zoom, D.mouse[0] = et(K, k), D.mouse[1]), D.extent, s));
    }
    function W(K) {
      O.on("mousemove.zoom mouseup.zoom", null), Ua(K.view, D.moved), Bn(K), D.event(K).end();
    }
  }
  function Z(y, ...x) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom, D = et(y.changedTouches ? y.changedTouches[0] : y, this), O = k.invert(D), I = k.k * (y.shiftKey ? 0.5 : 2), R = n(C(S(k, I), D, O), t.apply(this, x), s);
      Bn(y), a > 0 ? Je(this).transition().duration(a).call(A, R, D, y) : Je(this).call(w.transform, R, D, y);
    }
  }
  function P(y, ...x) {
    if (e.apply(this, arguments)) {
      var k = y.touches, D = k.length, O = T(this, x, y.changedTouches.length === D).event(y), I, R, F, X;
      for (ko(y), R = 0; R < D; ++R)
        F = k[R], X = et(F, this), X = [X, this.__zoom.invert(X), F.identifier], O.touch0 ? !O.touch1 && O.touch0[2] !== X[2] && (O.touch1 = X, O.taps = 0) : (O.touch0 = X, I = !0, O.taps = 1 + !!d);
      d && (d = clearTimeout(d)), I && (O.taps < 2 && (h = X[0], d = setTimeout(function() {
        d = null;
      }, g)), Rr(this), O.start());
    }
  }
  function E(y, ...x) {
    if (this.__zooming) {
      var k = T(this, x).event(y), D = y.changedTouches, O = D.length, I, R, F, X;
      for (Bn(y), I = 0; I < O; ++I)
        R = D[I], F = et(R, this), k.touch0 && k.touch0[2] === R.identifier ? k.touch0[0] = F : k.touch1 && k.touch1[2] === R.identifier && (k.touch1[0] = F);
      if (R = k.that.__zoom, k.touch1) {
        var W = k.touch0[0], K = k.touch0[1], U = k.touch1[0], j = k.touch1[1], Q = (Q = U[0] - W[0]) * Q + (Q = U[1] - W[1]) * Q, ee = (ee = j[0] - K[0]) * ee + (ee = j[1] - K[1]) * ee;
        R = S(R, Math.sqrt(Q / ee)), F = [(W[0] + U[0]) / 2, (W[1] + U[1]) / 2], X = [(K[0] + j[0]) / 2, (K[1] + j[1]) / 2];
      } else if (k.touch0) F = k.touch0[0], X = k.touch0[1];
      else return;
      k.zoom("touch", n(C(R, F, X), k.extent, s));
    }
  }
  function N(y, ...x) {
    if (this.__zooming) {
      var k = T(this, x).event(y), D = y.changedTouches, O = D.length, I, R;
      for (ko(y), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), I = 0; I < O; ++I)
        R = D[I], k.touch0 && k.touch0[2] === R.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === R.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0) k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (R = et(R, this), Math.hypot(h[0] - R[0], h[1] - R[1]) < m)) {
        var F = Je(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Pr(+y), w) : r;
  }, w.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Pr(!!y), w) : e;
  }, w.touchable = function(y) {
    return arguments.length ? (o = typeof y == "function" ? y : Pr(!!y), w) : o;
  }, w.extent = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Pr([[+y[0][0], +y[0][1]], [+y[1][0], +y[1][1]]]), w) : t;
  }, w.scaleExtent = function(y) {
    return arguments.length ? (i[0] = +y[0], i[1] = +y[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(y) {
    return arguments.length ? (s[0][0] = +y[0][0], s[1][0] = +y[1][0], s[0][1] = +y[0][1], s[1][1] = +y[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(y) {
    return arguments.length ? (n = y, w) : n;
  }, w.duration = function(y) {
    return arguments.length ? (a = +y, w) : a;
  }, w.interpolate = function(y) {
    return arguments.length ? (c = y, w) : c;
  }, w.on = function() {
    var y = u.on.apply(u, arguments);
    return y === u ? w : y;
  }, w.clickDistance = function(y) {
    return arguments.length ? (p = (y = +y) * y, w) : Math.sqrt(p);
  }, w.tapDistance = function(y) {
    return arguments.length ? (m = +y, w) : m;
  }, w;
}
const tr = {
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
}, jo = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], dl = ["Enter", " ", "Escape"], lg = {
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
var Dn;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Dn || (Dn = {}));
var Cn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Cn || (Cn = {}));
var qr;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(qr || (qr = {}));
const Jo = {
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
var Lt;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Lt || (Lt = {}));
var Gr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Gr || (Gr = {}));
var $;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})($ || ($ = {}));
const vs = {
  [$.Left]: $.Right,
  [$.Right]: $.Left,
  [$.Top]: $.Bottom,
  [$.Bottom]: $.Top
};
function cg(e, t) {
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
function ps(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function ug(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const fl = (e) => "id" in e && "source" in e && "target" in e, dg = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ki = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), hr = (e, t = [0, 0]) => {
  const { width: n, height: r } = Ut(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, fg = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ki(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Ur(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return vo(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return po(n);
}, gr = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = vo(n, Ur(o)), r = !0);
  }), r ? po(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Si = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...pr(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, c = [];
  for (const u of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = u;
    if (s && !h || f)
      continue;
    const g = d.width ?? u.width ?? u.initialWidth ?? null, v = d.height ?? u.height ?? u.initialHeight ?? null, p = nr(a, zn(u)), m = (g ?? 0) * (v ?? 0), w = i && p > 0;
    (!u.internals.handleBounds || w || p >= m || u.dragging) && c.push(u);
  }
  return c;
}, hg = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function gg(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function vg({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = gg(e, s), c = gr(a), u = Ci(c, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function hl({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: c, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", tr.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (h = [
        [c, u],
        [c + g, u + v]
      ]);
    }
  else a && On(s.extent) && (h = [
    [s.extent[0][0] + c, s.extent[0][1] + u],
    [s.extent[1][0] + c, s.extent[1][1] + u]
  ]);
  const f = On(h) ? fn(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", tr.error015()), {
    position: {
      x: f.x - c + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function pg({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), v = !g && f.parentId && s.find((p) => p.id === f.parentId);
    (g || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), c = r.filter((f) => f.deletable !== !1), d = hg(s, c);
  for (const f of c)
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
const In = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), fn = (e = { x: 0, y: 0 }, t, n) => ({
  x: In(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: In(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function gl(e, t, n) {
  const { width: r, height: o } = Ut(n), { x: i, y: s } = n.internals.positionAbsolute;
  return fn(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const ms = (e, t, n) => e < t ? In(Math.abs(e - t), 1, t) / t : e > n ? -In(Math.abs(e - n), 1, t) / t : 0, vl = (e, t, n = 15, r = 40) => {
  const o = ms(e.x, r, t.width - r) * n, i = ms(e.y, r, t.height - r) * n;
  return [o, i];
}, vo = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Qo = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), po = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), zn = (e, t = [0, 0]) => {
  const { x: n, y: r } = ki(e) ? e.internals.positionAbsolute : hr(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Ur = (e, t = [0, 0]) => {
  const { x: n, y: r } = ki(e) ? e.internals.positionAbsolute : hr(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, pl = (e, t) => po(vo(Qo(e), Qo(t))), nr = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, ys = (e) => Pt(e.width) && Pt(e.height) && Pt(e.x) && Pt(e.y), Pt = (e) => !isNaN(e) && isFinite(e), mg = (e, t) => {
}, vr = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), pr = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? vr(a, s) : a;
}, jr = ({ x: e, y: t }, [n, r, o]) => ({
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
function yg(e, t, n) {
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
function _g(e, t, n, r, o, i) {
  const { x: s, y: a } = jr(e, [t, n, r]), { x: c, y: u } = jr({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - c, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const Ci = (e, t, n, r, o, i) => {
  const s = yg(i, t, n), a = (t - s.x) / e.width, c = (n - s.y) / e.height, u = Math.min(a, c), d = In(u, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, v = n / 2 - f * d, p = _g(e, g, v, d, t, n), m = {
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
}, rr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function On(e) {
  return e != null && e !== "parent";
}
function Ut(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function ml(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function wg(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function bg(e) {
  return { ...lg, ...e || {} };
}
function So(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = ot(e), a = pr({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: c, y: u } = n ? vr(a, t) : a;
  return {
    xSnapped: c,
    ySnapped: u,
    ...a
  };
}
const yl = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), _l = (e) => e?.getRootNode?.() || window?.document, xg = ["INPUT", "SELECT", "TEXTAREA"];
function wl(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : xg.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const bl = (e) => "clientX" in e, ot = (e, t) => {
  const n = bl(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, _s = (e, t, n, r, o) => {
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
      ...yl(s)
    };
  });
};
function Eg({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const c = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(c - e), h = Math.abs(u - t);
  return [c, u, d, h];
}
function Mr(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function ws({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case $.Left:
      return [t - Mr(t - r, i), n];
    case $.Right:
      return [t + Mr(r - t, i), n];
    case $.Top:
      return [t, n - Mr(n - o, i)];
    case $.Bottom:
      return [t, n + Mr(o - n, i)];
  }
}
function xl({ sourceX: e, sourceY: t, sourcePosition: n = $.Bottom, targetX: r, targetY: o, targetPosition: i = $.Top, curvature: s = 0.25 }) {
  const [a, c] = ws({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = ws({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [h, f, g, v] = Eg({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: c,
    targetControlX: u,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${c} ${u},${d} ${r},${o}`,
    h,
    f,
    g,
    v
  ];
}
function El({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function kg({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, a = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + a;
}
function Sg({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = vo(Ur(e), Ur(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return nr(s, po(i)) > 0;
}
const Cg = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Ng = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Pg = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || Cg;
  let o;
  return fl(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, Ng(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function kl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = El({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const bs = {
  [$.Left]: { x: -1, y: 0 },
  [$.Right]: { x: 1, y: 0 },
  [$.Top]: { x: 0, y: -1 },
  [$.Bottom]: { x: 0, y: 1 }
}, Mg = ({ source: e, sourcePosition: t = $.Bottom, target: n }) => t === $.Left || t === $.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, xs = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Ag({ source: e, sourcePosition: t = $.Bottom, target: n, targetPosition: r = $.Top, center: o, offset: i, stepPosition: s }) {
  const a = bs[t], c = bs[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + c.x * i, y: n.y + c.y * i }, h = Mg({
    source: u,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let v = [], p, m;
  const w = { x: 0, y: 0 }, S = { x: 0, y: 0 }, [, , C, b] = El({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * c[f] === -1) {
    f === "x" ? (p = o.x ?? u.x + (d.x - u.x) * s, m = o.y ?? (u.y + d.y) / 2) : (p = o.x ?? (u.x + d.x) / 2, m = o.y ?? u.y + (d.y - u.y) * s);
    const T = [
      { x: p, y: u.y },
      { x: p, y: d.y }
    ], z = [
      { x: u.x, y: m },
      { x: d.x, y: m }
    ];
    a[f] === g ? v = f === "x" ? T : z : v = f === "x" ? z : T;
  } else {
    const T = [{ x: u.x, y: d.y }], z = [{ x: d.x, y: u.y }];
    if (f === "x" ? v = a.x === g ? z : T : v = a.y === g ? T : z, t === r) {
      const E = Math.abs(e[f] - n[f]);
      if (E <= i) {
        const N = Math.min(i - 1, i - E);
        a[f] === g ? w[f] = (u[f] > e[f] ? -1 : 1) * N : S[f] = (d[f] > n[f] ? -1 : 1) * N;
      }
    }
    if (t !== r) {
      const E = f === "x" ? "y" : "x", N = a[f] === c[E], y = u[E] > d[E], x = u[E] < d[E];
      (a[f] === 1 && (!N && y || N && x) || a[f] !== 1 && (!N && x || N && y)) && (v = f === "x" ? T : z);
    }
    const M = { x: u.x + w.x, y: u.y + w.y }, B = { x: d.x + S.x, y: d.y + S.y }, Z = Math.max(Math.abs(M.x - v[0].x), Math.abs(B.x - v[0].x)), P = Math.max(Math.abs(M.y - v[0].y), Math.abs(B.y - v[0].y));
    Z >= P ? (p = (M.x + B.x) / 2, m = v[0].y) : (p = v[0].x, m = (M.y + B.y) / 2);
  }
  return [[
    e,
    { x: u.x + w.x, y: u.y + w.y },
    ...v,
    { x: d.x + S.x, y: d.y + S.y },
    n
  ], p, m, C, b];
}
function Tg(e, t, n, r) {
  const o = Math.min(xs(e, t) / 2, xs(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, c = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * c}Q ${i},${s} ${i + o * a},${s}`;
}
function Ni({ sourceX: e, sourceY: t, sourcePosition: n = $.Bottom, targetX: r, targetY: o, targetPosition: i = $.Top, borderRadius: s = 5, centerX: a, centerY: c, offset: u = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, v, p] = Ag({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: c },
    offset: u,
    stepPosition: d
  });
  return [h.reduce((w, S, C) => {
    let b = "";
    return C > 0 && C < h.length - 1 ? b = Tg(h[C - 1], S, h[C + 1], s) : b = `${C === 0 ? "M" : "L"}${S.x} ${S.y}`, w += b, w;
  }, ""), f, g, v, p];
}
function Es(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Dg(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Es(t) || !Es(n))
    return null;
  const r = t.internals.handleBounds || ks(t.handles), o = n.internals.handleBounds || ks(n.handles), i = Ss(r?.source ?? [], e.sourceHandle), s = Ss(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Dn.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", tr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || $.Bottom, c = s?.position || $.Top, u = hn(t, i, a), d = hn(n, s, c);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: c
  };
}
function ks(e) {
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
function hn(e, t, n = $.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Ut(e);
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
function Ss(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function $o(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Ig(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((c) => {
    if (c && typeof c == "object") {
      const u = $o(c, t);
      i.has(u) || (s.push({ id: u, color: c.color || n, ...c }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const Sl = 1e3, zg = 10, Pi = {
  nodeOrigin: [0, 0],
  nodeExtent: jo,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, Og = {
  ...Pi,
  checkEquality: !0
};
function Mi(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Rg(e, t, n) {
  const r = Mi(Pi, n);
  for (const o of e.values())
    if (o.parentId)
      Ti(o, e, t, r);
    else {
      const i = hr(o, r.nodeOrigin), s = On(o.extent) ? o.extent : r.nodeExtent, a = fn(i, s, Ut(o));
      o.internals.positionAbsolute = a;
    }
}
function Hg(e, t) {
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
function Ai(e) {
  return e === "manual";
}
function Lg(e, t, n, r = {}) {
  const o = Mi(Og, r), i = { i: 0 }, s = new Map(t), a = o?.elevateNodesOnSelect && !Ai(o.zIndexMode) ? Sl : 0;
  let c = e.length > 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = s.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const h = hr(u, o.nodeOrigin), f = On(u.extent) ? u.extent : o.nodeExtent, g = fn(h, f, Ut(u));
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
          handleBounds: Hg(u, d),
          z: Cl(u, a, o.zIndexMode),
          userNode: u
        }
      }, t.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (c = !1), u.parentId && Ti(d, t, n, r, i);
  }
  return c;
}
function Vg(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ti(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a, zIndexMode: c } = Mi(Pi, r), u = e.parentId, d = t.get(u);
  if (!d) {
    console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Vg(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && c === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * zg), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const h = i && !Ai(c) ? Sl : 0, { x: f, y: g, z: v } = Bg(e, d, s, a, h, c), { positionAbsolute: p } = e.internals, m = f !== p.x || g !== p.y;
  (m || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: m ? { x: f, y: g } : p,
      z: v
    }
  });
}
function Cl(e, t, n) {
  const r = Pt(e.zIndex) ? e.zIndex : 0;
  return Ai(n) ? r : r + (e.selected ? t : 0);
}
function Bg(e, t, n, r, o, i) {
  const { x: s, y: a } = t.internals.positionAbsolute, c = Ut(e), u = hr(e, n), d = On(e.extent) ? fn(u, e.extent, c) : u;
  let h = fn({ x: s + d.x, y: a + d.y }, r, c);
  e.extent === "parent" && (h = gl(h, c, t));
  const f = Cl(e, o, i), g = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: g >= f ? g + 1 : f
  };
}
function Fg(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const c = i.get(s.parentId)?.expandedRect ?? zn(a), u = pl(c, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, c) => {
    const u = a.internals.positionAbsolute, d = Ut(a), h = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), p = Math.max(d.height, Math.round(s.height)), m = (v - d.width) * h[0], w = (p - d.height) * h[1];
    (f > 0 || g > 0 || m || w) && (o.push({
      id: c,
      type: "position",
      position: {
        x: a.position.x - f + m,
        y: a.position.y - g + w
      }
    }), n.get(c)?.forEach((S) => {
      e.some((C) => C.id === S.id) || o.push({
        id: S.id,
        type: "position",
        position: {
          x: S.position.x + f,
          y: S.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: c,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (f ? h[0] * f - m : 0),
        height: p + (g ? h[1] * g - w : 0)
      }
    });
  }), o;
}
function Kg(e, t, n, r, o, i, s) {
  const a = r?.querySelector(".xyflow__viewport");
  let c = !1;
  if (!a)
    return { changes: [], updatedInternals: c };
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
      }), c = !0;
      continue;
    }
    const p = yl(g.nodeElement), m = v.measured.width !== p.width || v.measured.height !== p.height;
    if (!!(p.width && p.height && (m || !v.internals.handleBounds || g.force))) {
      const S = g.nodeElement.getBoundingClientRect(), C = On(v.extent) ? v.extent : i;
      let { positionAbsolute: b } = v.internals;
      v.parentId && v.extent === "parent" ? b = gl(b, p, t.get(v.parentId)) : C && (b = fn(b, C, p));
      const A = {
        ...v,
        measured: p,
        internals: {
          ...v.internals,
          positionAbsolute: b,
          handleBounds: {
            source: _s("source", g.nodeElement, S, h, v.id),
            target: _s("target", g.nodeElement, S, h, v.id)
          }
        }
      };
      t.set(v.id, A), v.parentId && Ti(A, t, n, { nodeOrigin: o, zIndexMode: s }), c = !0, m && (u.push({
        id: v.id,
        type: "dimensions",
        dimensions: p
      }), v.expandParent && v.parentId && f.push({
        id: v.id,
        parentId: v.parentId,
        rect: zn(A, o)
      }));
    }
  }
  if (f.length > 0) {
    const g = Fg(f, t, n, o);
    u.push(...g);
  }
  return { changes: u, updatedInternals: c };
}
async function Yg({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Cs(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const c = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, c.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, t));
  }
}
function Zg(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, c = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Cs("source", c, d, e, o, s), Cs("target", c, u, e, i, a), t.set(r.id, r);
  }
}
function Nl(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Nl(n, t) : !1;
}
function Ns(e, t, n) {
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
function Xg(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Nl(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Co({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  const o = [];
  for (const [s, a] of t) {
    const c = n.get(s)?.internals.userNode;
    c && o.push({
      ...c,
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
function Wg({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = vr(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function qg({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), c = !1, u = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, v = !1, p = null;
  function m({ noDragClassName: S, handleSelector: C, domNode: b, isSelectable: A, nodeId: T, nodeClickDistance: z = 0 }) {
    f = Je(b);
    function M({ x: E, y: N }) {
      const { nodeLookup: y, nodeExtent: x, snapGrid: k, snapToGrid: D, nodeOrigin: O, onNodeDrag: I, onSelectionDrag: R, onError: F, updateNodePositions: X } = t();
      i = { x: E, y: N };
      let W = !1;
      const K = a.size > 1, U = K && x ? Qo(gr(a)) : null, j = K && D ? Wg({
        dragItems: a,
        snapGrid: k,
        x: E,
        y: N
      }) : null;
      for (const [Q, ee] of a) {
        if (!y.has(Q))
          continue;
        let le = { x: E - ee.distance.x, y: N - ee.distance.y };
        D && (le = j ? {
          x: Math.round(le.x + j.x),
          y: Math.round(le.y + j.y)
        } : vr(le, k));
        let ge = null;
        if (K && x && !ee.extent && U) {
          const { positionAbsolute: ie } = ee.internals, be = ie.x - U.x + x[0][0], xe = ie.x + ee.measured.width - U.x2 + x[1][0], Ee = ie.y - U.y + x[0][1], ze = ie.y + ee.measured.height - U.y2 + x[1][1];
          ge = [
            [be, Ee],
            [xe, ze]
          ];
        }
        const { position: te, positionAbsolute: me } = hl({
          nodeId: Q,
          nextPosition: le,
          nodeLookup: y,
          nodeExtent: ge || x,
          nodeOrigin: O,
          onError: F
        });
        W = W || ee.position.x !== te.x || ee.position.y !== te.y, ee.position = te, ee.internals.positionAbsolute = me;
      }
      if (v = v || W, !!W && (X(a, !0), p && (r || I || !T && R))) {
        const [Q, ee] = Co({
          nodeId: T,
          dragItems: a,
          nodeLookup: y
        });
        r?.(p, a, Q, ee), I?.(p, Q, ee), T || R?.(p, ee);
      }
    }
    async function B() {
      if (!d)
        return;
      const { transform: E, panBy: N, autoPanSpeed: y, autoPanOnNodeDrag: x } = t();
      if (!x) {
        c = !1, cancelAnimationFrame(s);
        return;
      }
      const [k, D] = vl(u, d, y);
      (k !== 0 || D !== 0) && (i.x = (i.x ?? 0) - k / E[2], i.y = (i.y ?? 0) - D / E[2], await N({ x: k, y: D }) && M(i)), s = requestAnimationFrame(B);
    }
    function Z(E) {
      const { nodeLookup: N, multiSelectionActive: y, nodesDraggable: x, transform: k, snapGrid: D, snapToGrid: O, selectNodesOnDrag: I, onNodeDragStart: R, onSelectionDragStart: F, unselectNodesAndEdges: X } = t();
      h = !0, (!I || !A) && !y && T && (N.get(T)?.selected || X()), A && I && T && e?.(T);
      const W = So(E.sourceEvent, { transform: k, snapGrid: D, snapToGrid: O, containerBounds: d });
      if (i = W, a = Xg(N, x, W, T), a.size > 0 && (n || R || !T && F)) {
        const [K, U] = Co({
          nodeId: T,
          dragItems: a,
          nodeLookup: N
        });
        n?.(E.sourceEvent, a, K, U), R?.(E.sourceEvent, K, U), T || F?.(E.sourceEvent, U);
      }
    }
    const P = vf().clickDistance(z).on("start", (E) => {
      const { domNode: N, nodeDragThreshold: y, transform: x, snapGrid: k, snapToGrid: D } = t();
      d = N?.getBoundingClientRect() || null, g = !1, v = !1, p = E.sourceEvent, y === 0 && Z(E), i = So(E.sourceEvent, { transform: x, snapGrid: k, snapToGrid: D, containerBounds: d }), u = ot(E.sourceEvent, d);
    }).on("drag", (E) => {
      const { autoPanOnNodeDrag: N, transform: y, snapGrid: x, snapToGrid: k, nodeDragThreshold: D, nodeLookup: O } = t(), I = So(E.sourceEvent, { transform: y, snapGrid: x, snapToGrid: k, containerBounds: d });
      if (p = E.sourceEvent, (E.sourceEvent.type === "touchmove" && E.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !O.has(T)) && (g = !0), !g) {
        if (!c && N && h && (c = !0, B()), !h) {
          const R = ot(E.sourceEvent, d), F = R.x - u.x, X = R.y - u.y;
          Math.sqrt(F * F + X * X) > D && Z(E);
        }
        (i.x !== I.xSnapped || i.y !== I.ySnapped) && a && h && (u = ot(E.sourceEvent, d), M(I));
      }
    }).on("end", (E) => {
      if (!(!h || g) && (c = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: N, updateNodePositions: y, onNodeDragStop: x, onSelectionDragStop: k } = t();
        if (v && (y(a, !1), v = !1), o || x || !T && k) {
          const [D, O] = Co({
            nodeId: T,
            dragItems: a,
            nodeLookup: N,
            dragging: !1
          });
          o?.(E.sourceEvent, a, D, O), x?.(E.sourceEvent, D, O), T || k?.(E.sourceEvent, O);
        }
      }
    }).filter((E) => {
      const N = E.target;
      return !E.button && (!S || !Ns(N, `.${S}`, b)) && (!C || Ns(N, C, b));
    });
    f.call(P);
  }
  function w() {
    f?.on(".drag", null);
  }
  return {
    update: m,
    destroy: w
  };
}
function Gg(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    nr(o, zn(i)) > 0 && r.push(i);
  return r;
}
const Ug = 250;
function jg(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = Gg(e, n, t + Ug);
  for (const a of s) {
    const c = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of c) {
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
    return o.find((c) => c.type === a) ?? o[0];
  }
  return o[0];
}
function Pl(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], c = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return c && i ? { ...c, ...hn(s, c, c.position, !0) } : c;
}
function Ml(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Jg(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Al = () => !0;
function Qg(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: c, lib: u, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: v, onConnect: p, onConnectEnd: m, isValidConnection: w = Al, onReconnectEnd: S, updateConnection: C, getTransform: b, getFromHandle: A, autoPanSpeed: T, dragThreshold: z = 1, handleDomNode: M }) {
  const B = _l(e.target);
  let Z = 0, P;
  const { x: E, y: N } = ot(e), y = Ml(i, M), x = a?.getBoundingClientRect();
  let k = !1;
  if (!x || !y)
    return;
  const D = Pl(o, y, r, c, t);
  if (!D)
    return;
  let O = ot(e, x), I = !1, R = null, F = !1, X = null;
  function W() {
    if (!d || !x)
      return;
    const [te, me] = vl(O, x, T);
    f({ x: te, y: me }), Z = requestAnimationFrame(W);
  }
  const K = {
    ...D,
    nodeId: o,
    type: y,
    position: D.position
  }, U = c.get(o);
  let Q = {
    inProgress: !0,
    isValid: null,
    from: hn(U, K, $.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: U,
    to: O,
    toHandle: null,
    toPosition: vs[K.position],
    toNode: null,
    pointer: O
  };
  function ee() {
    k = !0, C(Q), v?.(e, { nodeId: o, handleId: r, handleType: y });
  }
  z === 0 && ee();
  function le(te) {
    if (!k) {
      const { x: ze, y: he } = ot(te), _e = ze - E, ke = he - N;
      if (!(_e * _e + ke * ke > z * z))
        return;
      ee();
    }
    if (!A() || !K) {
      ge(te);
      return;
    }
    const me = b();
    O = ot(te, x), P = jg(pr(O, me, !1, [1, 1]), n, c, K), I || (W(), I = !0);
    const ie = Tl(te, {
      handle: P,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: B,
      lib: u,
      flowId: h,
      nodeLookup: c
    });
    X = ie.handleDomNode, R = ie.connection, F = Jg(!!P, ie.isValid);
    const be = c.get(o), xe = be ? hn(be, K, $.Left, !0) : Q.from, Ee = {
      ...Q,
      from: xe,
      isValid: F,
      to: ie.toHandle && F ? jr({ x: ie.toHandle.x, y: ie.toHandle.y }, me) : O,
      toHandle: ie.toHandle,
      toPosition: F && ie.toHandle ? ie.toHandle.position : vs[K.position],
      toNode: ie.toHandle ? c.get(ie.toHandle.nodeId) : null,
      pointer: O
    };
    C(Ee), Q = Ee;
  }
  function ge(te) {
    if (!("touches" in te && te.touches.length > 0)) {
      if (k) {
        (P || X) && R && F && p?.(R);
        const { inProgress: me, ...ie } = Q, be = {
          ...ie,
          toPosition: Q.toHandle ? Q.toPosition : null
        };
        m?.(te, be), i && S?.(te, be);
      }
      g(), cancelAnimationFrame(Z), I = !1, F = !1, R = null, X = null, B.removeEventListener("mousemove", le), B.removeEventListener("mouseup", ge), B.removeEventListener("touchmove", le), B.removeEventListener("touchend", ge);
    }
  }
  B.addEventListener("mousemove", le), B.addEventListener("mouseup", ge), B.addEventListener("touchmove", le), B.addEventListener("touchend", ge);
}
function Tl(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: c, isValidConnection: u = Al, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = ot(e), p = s.elementFromPoint(g, v), m = p?.classList.contains(`${a}-flow__handle`) ? p : f, w = {
    handleDomNode: m,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (m) {
    const S = Ml(void 0, m), C = m.getAttribute("data-nodeid"), b = m.getAttribute("data-handleid"), A = m.classList.contains("connectable"), T = m.classList.contains("connectableend");
    if (!C || !S)
      return w;
    const z = {
      source: h ? C : r,
      sourceHandle: h ? b : o,
      target: h ? r : C,
      targetHandle: h ? o : b
    };
    w.connection = z;
    const B = A && T && (n === Dn.Strict ? h && S === "source" || !h && S === "target" : C !== r || b !== o);
    w.isValid = B && u(z), w.toHandle = Pl(C, S, b, d, n, !0);
  }
  return w;
}
const Ps = {
  onPointerDown: Qg,
  isValid: Tl
};
function $g({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Je(e);
  function i({ translateExtent: a, width: c, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const v = (C) => {
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const b = n(), A = C.sourceEvent.ctrlKey && rr() ? 10 : 1, T = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * d, z = b[2] * Math.pow(2, T * A);
      t.scaleTo(z);
    };
    let p = [0, 0];
    const m = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (p = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, w = (C) => {
      const b = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const A = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], T = [A[0] - p[0], A[1] - p[1]];
      p = A;
      const z = r() * Math.max(b[2], Math.log(b[2])) * (g ? -1 : 1), M = {
        x: b[0] - T[0] * z,
        y: b[1] - T[1] * z
      }, B = [
        [0, 0],
        [c, u]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: b[2]
      }, B, a);
    }, S = ul().on("start", m).on("zoom", h ? w : null).on("zoom.wheel", f ? v : null);
    o.call(S, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: et
  };
}
const mo = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), No = ({ x: e, y: t, zoom: n }) => go.translate(e, t).scale(n), En = (e, t) => e.target.closest(`.${t}`), Dl = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), ev = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Po = (e, t = 0, n = ev, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Il = (e) => {
  const t = e.ctrlKey && rr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function tv({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: c, onPanZoomEnd: u }) {
  return (d) => {
    if (En(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const m = et(d), w = Il(d), S = h * Math.pow(2, w);
      r.scaleTo(n, S, m, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === Cn.Vertical ? 0 : d.deltaX * f, v = o === Cn.Horizontal ? 0 : d.deltaY * f;
    !rr() && d.shiftKey && o !== Cn.Vertical && (g = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(v / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const p = mo(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (c?.(d, p), e.panScrollTimeout = setTimeout(() => {
      u?.(d, p), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, p));
  };
}
function nv({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = En(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function rv({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = mo(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function ov({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Dl(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, mo(i.transform));
  };
}
function iv({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Dl(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = mo(s.transform);
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
function sv({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: c, lib: u, connectionInProgress: d }) {
  return (h) => {
    const f = e || t, g = n && h.ctrlKey, v = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (En(h, `${u}-flow__node`) || En(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !v || En(h, a) && v || En(h, c) && (!v || o && v && !e) || !n && h.ctrlKey && v)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !g && v || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || v) && p;
  };
}
function av({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: c }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), h = ul().scaleExtent([t, n]).translateExtent(r), f = Je(e).call(h);
  S({
    x: o.x,
    y: o.y,
    zoom: In(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), v = f.on("dblclick.zoom");
  h.wheelDelta(Il);
  function p(P, E) {
    return f ? new Promise((N) => {
      h?.interpolate(E?.interpolate === "linear" ? Wn : Ir).transform(Po(f, E?.duration, E?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function m({ noWheelClassName: P, noPanClassName: E, onPaneContextMenu: N, userSelectionActive: y, panOnScroll: x, panOnDrag: k, panOnScrollMode: D, panOnScrollSpeed: O, preventScrolling: I, zoomOnPinch: R, zoomOnScroll: F, zoomOnDoubleClick: X, zoomActivationKeyPressed: W, lib: K, onTransformChange: U, connectionInProgress: j, paneClickDistance: Q, selectionOnDrag: ee }) {
    y && !u.isZoomingOrPanning && w();
    const le = x && !W && !y;
    h.clickDistance(ee ? 1 / 0 : !Pt(Q) || Q < 0 ? 0 : Q);
    const ge = le ? tv({
      zoomPanValues: u,
      noWheelClassName: P,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: D,
      panOnScrollSpeed: O,
      zoomOnPinch: R,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : nv({
      noWheelClassName: P,
      preventScrolling: I,
      d3ZoomHandler: g
    });
    if (f.on("wheel.zoom", ge, { passive: !1 }), !y) {
      const me = rv({
        zoomPanValues: u,
        onDraggingChange: c,
        onPanZoomStart: s
      });
      h.on("start", me);
      const ie = ov({
        zoomPanValues: u,
        panOnDrag: k,
        onPaneContextMenu: !!N,
        onPanZoom: i,
        onTransformChange: U
      });
      h.on("zoom", ie);
      const be = iv({
        zoomPanValues: u,
        panOnDrag: k,
        panOnScroll: x,
        onPaneContextMenu: N,
        onPanZoomEnd: a,
        onDraggingChange: c
      });
      h.on("end", be);
    }
    const te = sv({
      zoomActivationKeyPressed: W,
      panOnDrag: k,
      zoomOnScroll: F,
      panOnScroll: x,
      zoomOnDoubleClick: X,
      zoomOnPinch: R,
      userSelectionActive: y,
      noPanClassName: E,
      noWheelClassName: P,
      lib: K,
      connectionInProgress: j
    });
    h.filter(te), X ? f.on("dblclick.zoom", v) : f.on("dblclick.zoom", null);
  }
  function w() {
    h.on("zoom", null);
  }
  async function S(P, E, N) {
    const y = No(P), x = h?.constrain()(y, E, N);
    return x && await p(x), new Promise((k) => k(x));
  }
  async function C(P, E) {
    const N = No(P);
    return await p(N, E), new Promise((y) => y(N));
  }
  function b(P) {
    if (f) {
      const E = No(P), N = f.property("__zoom");
      (N.k !== P.zoom || N.x !== P.x || N.y !== P.y) && h?.transform(f, E, null, { sync: !0 });
    }
  }
  function A() {
    const P = f ? cl(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: P.x, y: P.y, zoom: P.k };
  }
  function T(P, E) {
    return f ? new Promise((N) => {
      h?.interpolate(E?.interpolate === "linear" ? Wn : Ir).scaleTo(Po(f, E?.duration, E?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function z(P, E) {
    return f ? new Promise((N) => {
      h?.interpolate(E?.interpolate === "linear" ? Wn : Ir).scaleBy(Po(f, E?.duration, E?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function M(P) {
    h?.scaleExtent(P);
  }
  function B(P) {
    h?.translateExtent(P);
  }
  function Z(P) {
    const E = !Pt(P) || P < 0 ? 0 : P;
    h?.clickDistance(E);
  }
  return {
    update: m,
    destroy: w,
    setViewport: C,
    setViewportConstrained: S,
    getViewport: A,
    scaleTo: T,
    scaleBy: z,
    setScaleExtent: M,
    setTranslateExtent: B,
    syncViewport: b,
    setClickDistance: Z
  };
}
var Ms;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ms || (Ms = {}));
function Di() {
  const e = {};
  return [
    (t) => {
      if (t && !xc(e))
        throw new Error(t);
      return ri(e);
    },
    (t) => oi(e, t)
  ];
}
const [lv, cv] = Di(), [uv, dv] = Di(), [fv, hv] = Di();
var gv = /* @__PURE__ */ J("<div><!></div>");
function Yt(e, t) {
  ne(t, !0);
  let n = V(t, "id", 3, null), r = V(t, "type", 3, "source"), o = V(t, "position", 19, () => $.Top), i = V(t, "isConnectableStart", 3, !0), s = V(t, "isConnectableEnd", 3, !0), a = /* @__PURE__ */ Gt(t, [
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
  const c = lv("Handle must be used within a Custom Node component"), u = uv("Handle must be used within a Custom Node component");
  let d = /* @__PURE__ */ _(() => r() === "target"), h = /* @__PURE__ */ _(() => t.isConnectable !== void 0 ? t.isConnectable : u.value), f = jt(), g = /* @__PURE__ */ _(() => f.ariaLabelConfig), v = null;
  ui(() => {
    if (t.onconnect || t.ondisconnect) {
      f.edges;
      let E = f.connectionLookup.get(`${c}-${r()}${n() ? `-${n()}` : ""}`);
      if (v && !cg(E, v)) {
        const N = E ?? /* @__PURE__ */ new Map();
        ps(v, N, t.ondisconnect), ps(N, v, t.onconnect);
      }
      v = new Map(E);
    }
  });
  let p = /* @__PURE__ */ _(() => {
    if (!f.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: E, toHandle: N, isValid: y } = f.connection, x = E && E.nodeId === c && E.type === r() && E.id === n(), k = N && N.nodeId === c && N.type === r() && N.id === n(), D = f.connectionMode === Dn.Strict ? E?.type !== r() : c !== E?.nodeId || n() !== E?.id;
    return [
      !0,
      x,
      k,
      D,
      k && y
    ];
  }), m = /* @__PURE__ */ _(() => rn(l(p), 5)), w = /* @__PURE__ */ _(() => l(m)[0]), S = /* @__PURE__ */ _(() => l(m)[1]), C = /* @__PURE__ */ _(() => l(m)[2]), b = /* @__PURE__ */ _(() => l(m)[3]), A = /* @__PURE__ */ _(() => l(m)[4]);
  function T(E) {
    const N = f.onbeforeconnect ? f.onbeforeconnect(E) : E;
    N && (f.addEdge(N), f.onconnect?.(E));
  }
  function z(E) {
    const N = bl(E);
    E.currentTarget && (N && E.button === 0 || !N) && Ps.onPointerDown(E, {
      handleId: n(),
      nodeId: c,
      isTarget: l(d),
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
      onConnectStart: (y, x) => {
        f.onconnectstart?.(y, {
          nodeId: x.nodeId,
          handleId: x.handleId,
          handleType: x.handleType
        });
      },
      onConnectEnd: (y, x) => {
        f.onconnectend?.(y, x);
      },
      getTransform: () => [f.viewport.x, f.viewport.y, f.viewport.zoom],
      getFromHandle: () => f.connection.fromHandle,
      dragThreshold: f.connectionDragThreshold,
      handleDomNode: E.currentTarget
    });
  }
  function M(E) {
    if (!c || !f.clickConnectStartHandle && !i())
      return;
    if (!f.clickConnectStartHandle) {
      f.onclickconnectstart?.(E, { nodeId: c, handleId: n(), handleType: r() }), f.clickConnectStartHandle = { nodeId: c, type: r(), id: n() };
      return;
    }
    const N = _l(E.target), y = t.isValidConnection ?? f.isValidConnection, { connectionMode: x, clickConnectStartHandle: k, flowId: D, nodeLookup: O } = f, { connection: I, isValid: R } = Ps.isValid(E, {
      handle: { nodeId: c, id: n(), type: r() },
      connectionMode: x,
      fromNodeId: k.nodeId,
      fromHandleId: k.id ?? null,
      fromType: k.type,
      isValidConnection: y,
      flowId: D,
      doc: N,
      lib: "svelte",
      nodeLookup: O
    });
    R && I && T(I);
    const F = structuredClone(Us(f.connection));
    delete F.inProgress, F.toPosition = F.toHandle ? F.toHandle.position : null, f.onclickconnectend?.(E, F), f.clickConnectStartHandle = null;
  }
  var B = gv(), Z = () => {
  };
  qt(B, () => ({
    "data-handleid": n(),
    "data-nodeid": c,
    "data-handlepos": o(),
    "data-id": `${f.flowId ?? ""}-${c ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      f.noDragClass,
      f.noPanClass,
      o(),
      t.class
    ],
    onmousedown: z,
    ontouchstart: z,
    onclick: f.clickConnect ? M : void 0,
    onkeypress: Z,
    style: t.style,
    role: "button",
    "aria-label": l(g)["handle.ariaLabel"],
    tabindex: "-1",
    ...a,
    [Rt]: {
      valid: l(A),
      connectingto: l(C),
      connectingfrom: l(S),
      source: !l(d),
      target: l(d),
      connectablestart: i(),
      connectableend: s(),
      connectable: l(h),
      connectionindicator: l(h) && (!l(w) || l(b)) && (l(w) || f.clickConnectStartHandle ? s() : i())
    }
  }));
  var P = Y(B);
  Fe(P, () => t.children ?? Ye), H(e, B), re();
}
var vv = /* @__PURE__ */ J("<!> <!>", 1);
function zl(e, t) {
  ne(t, !0);
  let n = V(t, "targetPosition", 19, () => $.Top), r = V(t, "sourcePosition", 19, () => $.Bottom);
  var o = vv(), i = ae(o);
  Yt(i, {
    type: "target",
    get position() {
      return n();
    }
  });
  var s = q(i), a = q(s);
  Yt(a, {
    type: "source",
    get position() {
      return r();
    }
  }), oe(() => we(s, ` ${t.data?.label ?? ""} `)), H(e, o), re();
}
var pv = /* @__PURE__ */ J(" <!>", 1);
function mv(e, t) {
  ne(t, !0);
  let n = V(t, "data", 19, () => ({ label: "Node" })), r = V(t, "sourcePosition", 19, () => $.Bottom);
  var o = pv(), i = ae(o), s = q(i);
  Yt(s, {
    type: "source",
    get position() {
      return r();
    }
  }), oe(() => we(i, `${n()?.label ?? ""} `)), H(e, o), re();
}
var yv = /* @__PURE__ */ J(" <!>", 1);
function _v(e, t) {
  ne(t, !0);
  let n = V(t, "data", 19, () => ({ label: "Node" })), r = V(t, "targetPosition", 19, () => $.Top);
  var o = yv(), i = ae(o), s = q(i);
  Yt(s, {
    type: "target",
    get position() {
      return r();
    }
  }), oe(() => we(i, `${n()?.label ?? ""} `)), H(e, o), re();
}
function wv(e, t) {
}
function Mo(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function bv(e, t) {
  const n = /* @__PURE__ */ _(jt), r = /* @__PURE__ */ _(() => l(n).domNode);
  let o;
  return l(r) ? Mo(e, l(r), t) : o = da(() => {
    st(() => {
      Mo(e, l(r), t), o?.();
    });
  }), {
    async update(i) {
      Mo(e, l(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function xv() {
  let e = /* @__PURE__ */ de(typeof window > "u");
  if (l(e)) {
    const t = da(() => {
      st(() => {
        L(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return l(e);
    }
  };
}
const As = (e) => dg(e), Ev = (e) => fl(e);
function mt(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Jr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var kv = /* @__PURE__ */ J("<div><!></div>");
function Sv(e, t) {
  ne(t, !0);
  let n = V(t, "x", 3, 0), r = V(t, "y", 3, 0), o = V(t, "selectEdgeOnClick", 3, !1), i = V(t, "transparent", 3, !1), s = /* @__PURE__ */ Gt(t, [
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
  const a = jt(), c = fv("EdgeLabel must be used within a Custom Edge component");
  let u = /* @__PURE__ */ _(() => a.visible.edges.get(c)?.zIndex);
  var d = kv(), h = () => {
    o() && c && a.handleEdgeSelection(c);
  };
  qt(
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
      [St]: g
    }),
    [
      () => ({
        display: xv().value ? "none" : void 0,
        cursor: o() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: mt(t.width),
        height: mt(t.height),
        "z-index": l(u)
      })
    ],
    void 0,
    void 0,
    "svelte-1wg91mu"
  );
  var f = Y(d);
  Fe(f, () => t.children ?? Ye), De(d, (g, v) => bv?.(g, v), () => "edge-labels"), H(e, d), re();
}
var Cv = /* @__PURE__ */ Se("<path></path>"), Nv = /* @__PURE__ */ Se('<path fill="none"></path><!><!>', 1);
function yo(e, t) {
  let n = V(t, "interactionWidth", 3, 20), r = /* @__PURE__ */ Gt(t, [
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
  var o = Nv(), i = ae(o), s = q(i);
  {
    var a = (d) => {
      var h = Cv();
      qt(h, () => ({
        d: t.path,
        "stroke-opacity": 0,
        "stroke-width": n(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...r
      })), H(d, h);
    };
    se(s, (d) => {
      n() > 0 && d(a);
    });
  }
  var c = q(s);
  {
    var u = (d) => {
      Sv(d, {
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
          var g = tu();
          oe(() => we(g, t.label)), H(h, g);
        },
        $$slots: { default: !0 }
      });
    };
    se(c, (d) => {
      t.label && d(u);
    });
  }
  oe(() => {
    G(i, "id", t.id), G(i, "d", t.path), Ve(i, 0, Wt(["svelte-flow__edge-path", t.class])), G(i, "marker-start", t.markerStart), G(i, "marker-end", t.markerEnd), qe(i, t.style);
  }), H(e, o);
}
function Ol(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ _(() => xl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    curvature: t.pathOptions?.curvature
  })), r = /* @__PURE__ */ _(() => rn(l(n), 3)), o = /* @__PURE__ */ _(() => l(r)[0]), i = /* @__PURE__ */ _(() => l(r)[1]), s = /* @__PURE__ */ _(() => l(r)[2]);
  yo(e, {
    get id() {
      return t.id;
    },
    get path() {
      return l(o);
    },
    get labelX() {
      return l(i);
    },
    get labelY() {
      return l(s);
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
function Pv(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ _(() => Ni({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition
  })), r = /* @__PURE__ */ _(() => rn(l(n), 3)), o = /* @__PURE__ */ _(() => l(r)[0]), i = /* @__PURE__ */ _(() => l(r)[1]), s = /* @__PURE__ */ _(() => l(r)[2]);
  yo(e, {
    get path() {
      return l(o);
    },
    get labelX() {
      return l(i);
    },
    get labelY() {
      return l(s);
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
function Mv(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ _(() => kl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY
  })), r = /* @__PURE__ */ _(() => rn(l(n), 3)), o = /* @__PURE__ */ _(() => l(r)[0]), i = /* @__PURE__ */ _(() => l(r)[1]), s = /* @__PURE__ */ _(() => l(r)[2]);
  yo(e, {
    get path() {
      return l(o);
    },
    get labelX() {
      return l(i);
    },
    get labelY() {
      return l(s);
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
function Av(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ _(() => Ni({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    borderRadius: 0
  })), r = /* @__PURE__ */ _(() => rn(l(n), 3)), o = /* @__PURE__ */ _(() => l(r)[0]), i = /* @__PURE__ */ _(() => l(r)[1]), s = /* @__PURE__ */ _(() => l(r)[2]);
  yo(e, {
    get path() {
      return l(o);
    },
    get labelX() {
      return l(i);
    },
    get labelY() {
      return l(s);
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
class Tv {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#e = t, this.#t = $s(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const Dv = /\(.+\)/, Iv = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class zv extends Tv {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Dv.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Iv.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Ho(o, "change", i)
    );
  }
}
function Ov(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Si(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Ts(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: c, zIndexMode: u } = e, d = /* @__PURE__ */ new Map();
  for (const h of t) {
    const f = r.get(h.source), g = r.get(h.target);
    if (!f || !g)
      continue;
    if (a) {
      const { visibleNodes: m, transform: w, width: S, height: C } = e;
      if (Sg({
        sourceNode: f,
        targetNode: g,
        width: S,
        height: C,
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
    const p = Dg({
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
      zIndex: kg({
        selected: h.selected,
        zIndex: h.zIndex ?? n.zIndex,
        sourceNode: f,
        targetNode: g,
        elevateOnSelect: c,
        zIndexMode: u
      }),
      sourceNode: f,
      targetNode: g,
      edge: h
    });
  }
  return d;
}
const Rl = {
  input: mv,
  output: _v,
  default: zl,
  group: wv
}, Hl = {
  straight: Mv,
  smoothstep: Pv,
  default: Ol,
  step: Av
};
function Rv(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = gr(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Ci(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function Hv(e) {
  class t {
    #e = /* @__PURE__ */ _(() => e.props.id ?? "1");
    get flowId() {
      return l(this.#e);
    }
    set flowId(r) {
      L(this.#e, r);
    }
    #t = /* @__PURE__ */ de(null);
    get domNode() {
      return l(this.#t);
    }
    set domNode(r) {
      L(this.#t, r);
    }
    #n = /* @__PURE__ */ de(null);
    get panZoom() {
      return l(this.#n);
    }
    set panZoom(r) {
      L(this.#n, r);
    }
    #r = /* @__PURE__ */ de(e.width ?? 0);
    get width() {
      return l(this.#r);
    }
    set width(r) {
      L(this.#r, r);
    }
    #l = /* @__PURE__ */ de(e.height ?? 0);
    get height() {
      return l(this.#l);
    }
    set height(r) {
      L(this.#l, r);
    }
    #i = /* @__PURE__ */ de(e.props.zIndexMode ?? "basic");
    get zIndexMode() {
      return l(this.#i);
    }
    set zIndexMode(r) {
      L(this.#i, r);
    }
    #o = /* @__PURE__ */ _(() => {
      const r = Lg(e.nodes, this.nodeLookup, this.parentLookup, {
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
      return l(this.#o);
    }
    set nodesInitialized(r) {
      L(this.#o, r);
    }
    #s = /* @__PURE__ */ _(() => this.panZoom !== null);
    get viewportInitialized() {
      return l(this.#s);
    }
    set viewportInitialized(r) {
      L(this.#s, r);
    }
    #a = /* @__PURE__ */ _(() => (Zg(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return l(this.#a);
    }
    set _edges(r) {
      L(this.#a, r);
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
      return l(this.#c);
    }
    set selectedNodes(r) {
      L(this.#c, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ _(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return l(this.#u);
    }
    set selectedEdges(r) {
      L(this.#u, r);
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
        onerror: c,
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
        onerror: c
      };
      if (u) {
        const { viewport: p, width: m, height: w } = this, S = [p.x, p.y, p.zoom];
        f = Ov(s, S, m, w), g = Ts({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: S,
          width: m,
          height: w
        });
      } else
        f = this.nodeLookup, g = Ts(v);
      return { nodes: f, edges: g };
    });
    get visible() {
      return l(this.#d);
    }
    set visible(r) {
      L(this.#d, r);
    }
    #f = /* @__PURE__ */ _(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return l(this.#f);
    }
    set nodesDraggable(r) {
      L(this.#f, r);
    }
    #g = /* @__PURE__ */ _(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return l(this.#g);
    }
    set nodesConnectable(r) {
      L(this.#g, r);
    }
    #h = /* @__PURE__ */ _(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return l(this.#h);
    }
    set elementsSelectable(r) {
      L(this.#h, r);
    }
    #_ = /* @__PURE__ */ _(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return l(this.#_);
    }
    set nodesFocusable(r) {
      L(this.#_, r);
    }
    #w = /* @__PURE__ */ _(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return l(this.#w);
    }
    set edgesFocusable(r) {
      L(this.#w, r);
    }
    #b = /* @__PURE__ */ _(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return l(this.#b);
    }
    set disableKeyboardA11y(r) {
      L(this.#b, r);
    }
    #m = /* @__PURE__ */ _(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return l(this.#m);
    }
    set minZoom(r) {
      L(this.#m, r);
    }
    #v = /* @__PURE__ */ _(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return l(this.#v);
    }
    set maxZoom(r) {
      L(this.#v, r);
    }
    #p = /* @__PURE__ */ _(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return l(this.#p);
    }
    set nodeOrigin(r) {
      L(this.#p, r);
    }
    #y = /* @__PURE__ */ _(() => e.props.nodeExtent ?? jo);
    get nodeExtent() {
      return l(this.#y);
    }
    set nodeExtent(r) {
      L(this.#y, r);
    }
    #x = /* @__PURE__ */ _(() => e.props.translateExtent ?? jo);
    get translateExtent() {
      return l(this.#x);
    }
    set translateExtent(r) {
      L(this.#x, r);
    }
    #E = /* @__PURE__ */ _(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return l(this.#E);
    }
    set defaultEdgeOptions(r) {
      L(this.#E, r);
    }
    #k = /* @__PURE__ */ _(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return l(this.#k);
    }
    set nodeDragThreshold(r) {
      L(this.#k, r);
    }
    #S = /* @__PURE__ */ _(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return l(this.#S);
    }
    set autoPanOnNodeDrag(r) {
      L(this.#S, r);
    }
    #C = /* @__PURE__ */ _(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return l(this.#C);
    }
    set autoPanOnConnect(r) {
      L(this.#C, r);
    }
    #N = /* @__PURE__ */ _(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return l(this.#N);
    }
    set autoPanOnNodeFocus(r) {
      L(this.#N, r);
    }
    #P = /* @__PURE__ */ _(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return l(this.#P);
    }
    set autoPanSpeed(r) {
      L(this.#P, r);
    }
    #M = /* @__PURE__ */ _(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return l(this.#M);
    }
    set connectionDragThreshold(r) {
      L(this.#M, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #A = /* @__PURE__ */ _(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return l(this.#A);
    }
    set snapGrid(r) {
      L(this.#A, r);
    }
    #T = /* @__PURE__ */ de(!1);
    get dragging() {
      return l(this.#T);
    }
    set dragging(r) {
      L(this.#T, r);
    }
    #D = /* @__PURE__ */ de(null);
    get selectionRect() {
      return l(this.#D);
    }
    set selectionRect(r) {
      L(this.#D, r);
    }
    #I = /* @__PURE__ */ de(!1);
    get selectionKeyPressed() {
      return l(this.#I);
    }
    set selectionKeyPressed(r) {
      L(this.#I, r);
    }
    #z = /* @__PURE__ */ de(!1);
    get multiselectionKeyPressed() {
      return l(this.#z);
    }
    set multiselectionKeyPressed(r) {
      L(this.#z, r);
    }
    #O = /* @__PURE__ */ de(!1);
    get deleteKeyPressed() {
      return l(this.#O);
    }
    set deleteKeyPressed(r) {
      L(this.#O, r);
    }
    #R = /* @__PURE__ */ de(!1);
    get panActivationKeyPressed() {
      return l(this.#R);
    }
    set panActivationKeyPressed(r) {
      L(this.#R, r);
    }
    #H = /* @__PURE__ */ de(!1);
    get zoomActivationKeyPressed() {
      return l(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      L(this.#H, r);
    }
    #L = /* @__PURE__ */ de(null);
    get selectionRectMode() {
      return l(this.#L);
    }
    set selectionRectMode(r) {
      L(this.#L, r);
    }
    #V = /* @__PURE__ */ de("");
    get ariaLiveMessage() {
      return l(this.#V);
    }
    set ariaLiveMessage(r) {
      L(this.#V, r);
    }
    #B = /* @__PURE__ */ _(() => e.props.selectionMode ?? qr.Partial);
    get selectionMode() {
      return l(this.#B);
    }
    set selectionMode(r) {
      L(this.#B, r);
    }
    #F = /* @__PURE__ */ _(() => ({ ...Rl, ...e.props.nodeTypes }));
    get nodeTypes() {
      return l(this.#F);
    }
    set nodeTypes(r) {
      L(this.#F, r);
    }
    #K = /* @__PURE__ */ _(() => ({ ...Hl, ...e.props.edgeTypes }));
    get edgeTypes() {
      return l(this.#K);
    }
    set edgeTypes(r) {
      L(this.#K, r);
    }
    #Y = /* @__PURE__ */ _(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return l(this.#Y);
    }
    set noPanClass(r) {
      L(this.#Y, r);
    }
    #Z = /* @__PURE__ */ _(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return l(this.#Z);
    }
    set noDragClass(r) {
      L(this.#Z, r);
    }
    #X = /* @__PURE__ */ _(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return l(this.#X);
    }
    set noWheelClass(r) {
      L(this.#X, r);
    }
    #W = /* @__PURE__ */ _(() => bg(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return l(this.#W);
    }
    set ariaLabelConfig(r) {
      L(this.#W, r);
    }
    #q = /* @__PURE__ */ de(Rv(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return l(this.#q);
    }
    set _viewport(r) {
      L(this.#q, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #G = (
      // _connection is viewport independent and originating from XYHandle
      /* @__PURE__ */ de(Jo)
    );
    get _connection() {
      return l(this.#G);
    }
    set _connection(r) {
      L(this.#G, r);
    }
    #U = /* @__PURE__ */ _(() => this._connection.inProgress ? {
      ...this._connection,
      to: pr(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return l(this.#U);
    }
    set connection(r) {
      L(this.#U, r);
    }
    #j = /* @__PURE__ */ _(() => e.props.connectionMode ?? Dn.Strict);
    get connectionMode() {
      return l(this.#j);
    }
    set connectionMode(r) {
      L(this.#j, r);
    }
    #J = /* @__PURE__ */ _(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return l(this.#J);
    }
    set connectionRadius(r) {
      L(this.#J, r);
    }
    #Q = /* @__PURE__ */ _(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return l(this.#Q);
    }
    set isValidConnection(r) {
      L(this.#Q, r);
    }
    #$ = /* @__PURE__ */ _(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return l(this.#$);
    }
    set selectNodesOnDrag(r) {
      L(this.#$, r);
    }
    #ee = /* @__PURE__ */ _(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return l(this.#ee);
    }
    set defaultMarkerColor(r) {
      L(this.#ee, r);
    }
    #te = /* @__PURE__ */ _(() => Ig(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return l(this.#te);
    }
    set markers(r) {
      L(this.#te, r);
    }
    #ne = /* @__PURE__ */ _(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return l(this.#ne);
    }
    set onlyRenderVisibleElements(r) {
      L(this.#ne, r);
    }
    #re = /* @__PURE__ */ _(() => e.props.onflowerror ?? mg);
    get onerror() {
      return l(this.#re);
    }
    set onerror(r) {
      L(this.#re, r);
    }
    #oe = /* @__PURE__ */ _(() => e.props.ondelete);
    get ondelete() {
      return l(this.#oe);
    }
    set ondelete(r) {
      L(this.#oe, r);
    }
    #ie = /* @__PURE__ */ _(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return l(this.#ie);
    }
    set onbeforedelete(r) {
      L(this.#ie, r);
    }
    #se = /* @__PURE__ */ _(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return l(this.#se);
    }
    set onbeforeconnect(r) {
      L(this.#se, r);
    }
    #ae = /* @__PURE__ */ _(() => e.props.onconnect);
    get onconnect() {
      return l(this.#ae);
    }
    set onconnect(r) {
      L(this.#ae, r);
    }
    #le = /* @__PURE__ */ _(() => e.props.onconnectstart);
    get onconnectstart() {
      return l(this.#le);
    }
    set onconnectstart(r) {
      L(this.#le, r);
    }
    #ce = /* @__PURE__ */ _(() => e.props.onconnectend);
    get onconnectend() {
      return l(this.#ce);
    }
    set onconnectend(r) {
      L(this.#ce, r);
    }
    #ue = /* @__PURE__ */ _(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return l(this.#ue);
    }
    set onbeforereconnect(r) {
      L(this.#ue, r);
    }
    #de = /* @__PURE__ */ _(() => e.props.onreconnect);
    get onreconnect() {
      return l(this.#de);
    }
    set onreconnect(r) {
      L(this.#de, r);
    }
    #fe = /* @__PURE__ */ _(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return l(this.#fe);
    }
    set onreconnectstart(r) {
      L(this.#fe, r);
    }
    #he = /* @__PURE__ */ _(() => e.props.onreconnectend);
    get onreconnectend() {
      return l(this.#he);
    }
    set onreconnectend(r) {
      L(this.#he, r);
    }
    #ge = /* @__PURE__ */ _(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return l(this.#ge);
    }
    set clickConnect(r) {
      L(this.#ge, r);
    }
    #ve = /* @__PURE__ */ _(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return l(this.#ve);
    }
    set onclickconnectstart(r) {
      L(this.#ve, r);
    }
    #pe = /* @__PURE__ */ _(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return l(this.#pe);
    }
    set onclickconnectend(r) {
      L(this.#pe, r);
    }
    #me = /* @__PURE__ */ de(null);
    get clickConnectStartHandle() {
      return l(this.#me);
    }
    set clickConnectStartHandle(r) {
      L(this.#me, r);
    }
    #ye = /* @__PURE__ */ _(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return l(this.#ye);
    }
    set onselectiondrag(r) {
      L(this.#ye, r);
    }
    #_e = /* @__PURE__ */ _(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return l(this.#_e);
    }
    set onselectiondragstart(r) {
      L(this.#_e, r);
    }
    #we = /* @__PURE__ */ _(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return l(this.#we);
    }
    set onselectiondragstop(r) {
      L(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await vg(
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
    _prefersDark = new zv("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ _(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return l(this.#be);
    }
    set colorMode(r) {
      L(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Jo, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function jt() {
  const e = ri(Qr);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Qr = /* @__PURE__ */ Symbol();
function Ll(e) {
  const t = Hv(e);
  function n(P) {
    t.nodeTypes = {
      ...Rl,
      ...P
    };
  }
  function r(P) {
    t.edgeTypes = {
      ...Hl,
      ...P
    };
  }
  function o(P) {
    t.edges = Pg(P, t.edges);
  }
  const i = (P, E = !1) => {
    t.nodes = t.nodes.map((N) => {
      if (t.connection.inProgress && t.connection.fromNode.id === N.id) {
        const x = t.nodeLookup.get(N.id);
        x && (t.connection = {
          ...t.connection,
          from: hn(x, t.connection.fromHandle, $.Left, !0)
        });
      }
      const y = P.get(N.id);
      return y ? { ...N, position: y.position, dragging: E } : N;
    });
  };
  function s(P) {
    const { changes: E, updatedInternals: N } = Kg(P, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin, t.nodeExtent, t.zIndexMode);
    if (!N)
      return;
    Rg(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent,
      zIndexMode: t.zIndexMode
    }), t.fitViewQueued && t.resolveFitView();
    const y = /* @__PURE__ */ new Map();
    for (const x of E) {
      const k = t.nodeLookup.get(x.id)?.internals.userNode;
      if (!k)
        continue;
      const D = { ...k };
      switch (x.type) {
        case "dimensions": {
          const O = { ...D.measured, ...x.dimensions };
          x.setAttributes && (D.width = x.dimensions?.width ?? D.width, D.height = x.dimensions?.height ?? D.height), D.measured = O;
          break;
        }
        case "position":
          D.position = x.position ?? D.position;
          break;
      }
      y.set(x.id, D);
    }
    t.nodes = t.nodes.map((x) => y.get(x.id) ?? x);
  }
  function a(P) {
    const E = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = P, t.fitViewResolver = E, t.nodes = [...t.nodes], E.promise;
  }
  async function c(P, E, N) {
    const y = typeof N?.zoom < "u" ? N.zoom : t.maxZoom, x = t.panZoom;
    return x ? (await x.setViewport({
      x: t.width / 2 - P * y,
      y: t.height / 2 - E * y,
      zoom: y
    }, { duration: N?.duration, ease: N?.ease, interpolate: N?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(P, E) {
    const N = t.panZoom;
    return N ? N.scaleBy(P, E) : Promise.resolve(!1);
  }
  function d(P) {
    return u(1.2, P);
  }
  function h(P) {
    return u(1 / 1.2, P);
  }
  function f(P) {
    const E = t.panZoom;
    E && (E.setScaleExtent([P, t.maxZoom]), t.minZoom = P);
  }
  function g(P) {
    const E = t.panZoom;
    E && (E.setScaleExtent([t.minZoom, P]), t.maxZoom = P);
  }
  function v(P) {
    const E = t.panZoom;
    E && (E.setTranslateExtent(P), t.translateExtent = P);
  }
  function p(P, E = null) {
    let N = !1;
    const y = P.map((x) => (E ? E.has(x.id) : !0) && x.selected ? (N = !0, { ...x, selected: !1 }) : x);
    return [N, y];
  }
  function m(P) {
    const E = P?.nodes ? new Set(P.nodes.map((O) => O.id)) : null, [N, y] = p(t.nodes, E);
    N && (t.nodes = y);
    const x = P?.edges ? new Set(P.edges.map((O) => O.id)) : null, [k, D] = p(t.edges, x);
    k && (t.edges = D);
  }
  function w(P) {
    const E = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((N) => {
      const y = P.includes(N.id), x = E && N.selected || y;
      return !!N.selected !== x ? { ...N, selected: x } : N;
    }), E || m({ nodes: [] });
  }
  function S(P) {
    const E = t.multiselectionKeyPressed;
    t.edges = t.edges.map((N) => {
      const y = P.includes(N.id), x = E && N.selected || y;
      return !!N.selected !== x ? { ...N, selected: x } : N;
    }), E || m({ edges: [] });
  }
  function C(P, E, N) {
    const y = t.nodeLookup.get(P);
    if (!y) {
      console.warn("012", tr.error012(P));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, y.selected ? (E || y.selected && t.multiselectionKeyPressed) && (m({ nodes: [y], edges: [] }), requestAnimationFrame(() => N?.blur())) : w([P]);
  }
  function b(P) {
    const E = t.edgeLookup.get(P);
    if (!E) {
      console.warn("012", tr.error012(P));
      return;
    }
    (E.selectable || t.elementsSelectable && typeof E.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, E.selected ? E.selected && t.multiselectionKeyPressed && m({ nodes: [], edges: [E] }) : S([P]));
  }
  function A(P, E) {
    const { nodeExtent: N, snapGrid: y, nodeOrigin: x, nodeLookup: k, nodesDraggable: D, onerror: O } = t, I = /* @__PURE__ */ new Map(), R = y?.[0] ?? 5, F = y?.[1] ?? 5, X = P.x * R * E, W = P.y * F * E;
    for (const K of k.values()) {
      if (!(K.selected && (K.draggable || D && typeof K.draggable > "u")))
        continue;
      let j = {
        x: K.internals.positionAbsolute.x + X,
        y: K.internals.positionAbsolute.y + W
      };
      y && (j = vr(j, y));
      const { position: Q, positionAbsolute: ee } = hl({
        nodeId: K.id,
        nextPosition: j,
        nodeLookup: k,
        nodeExtent: N,
        nodeOrigin: x,
        onError: O
      });
      K.position = Q, K.internals.positionAbsolute = ee, I.set(K.id, K);
    }
    i(I);
  }
  function T(P) {
    return Yg({
      delta: P,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const z = (P) => {
    t._connection = { ...P };
  };
  function M() {
    t._connection = Jo;
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
    setCenter: c,
    setMinZoom: f,
    setMaxZoom: g,
    setTranslateExtent: v,
    unselectNodesAndEdges: m,
    addSelectedNodes: w,
    addSelectedEdges: S,
    handleNodeSelection: C,
    handleEdgeSelection: b,
    moveSelectedNodes: A,
    panBy: T,
    updateConnection: z,
    cancelConnection: M,
    reset: B
  });
}
function Lv(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: c, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: h } = t, f = av({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: c,
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
var Vv = /* @__PURE__ */ J('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Bv(e, t) {
  ne(t, !0);
  let n = V(t, "store", 15), r = /* @__PURE__ */ _(() => n().panActivationKeyPressed || t.panOnDrag), o = /* @__PURE__ */ _(() => n().panActivationKeyPressed || t.panOnScroll);
  const { viewport: i } = n();
  let s = !1;
  st(() => {
    !s && n().viewportInitialized && (t.oninit?.(), s = !0);
  });
  var a = Vv(), c = Y(a);
  Fe(c, () => t.children), De(a, (u, d) => Lv?.(u, d), () => ({
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
    panOnScroll: l(o),
    panOnDrag: l(r),
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
  })), H(e, a), re();
}
function Ds(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Is(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function zs(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Fv = /* @__PURE__ */ J("<div><!></div>");
function Kv(e, t) {
  ne(t, !0);
  let n = V(t, "store", 15), r = V(t, "panOnDrag", 3, !0), o = V(t, "paneClickDistance", 3, 1), i, s = null, a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ _(() => n().panActivationKeyPressed || r()), d = /* @__PURE__ */ _(() => n().selectionKeyPressed || !!n().selectionRect || t.selectionOnDrag && l(u) !== !0), h = /* @__PURE__ */ _(() => n().elementsSelectable && (l(d) || n().selectionRectMode === "user")), f = !1;
  function g(M) {
    if (s = i?.getBoundingClientRect(), !s) return;
    const B = M.target === i, Z = !B && !!M.target.closest(".nokey"), P = t.selectionOnDrag && B || n().selectionKeyPressed;
    if (Z || !l(d) || !P || M.button !== 0 || !M.isPrimary)
      return;
    M.target?.setPointerCapture?.(M.pointerId), f = !1;
    const { x: E, y: N } = ot(M, s);
    n(n().selectionRect = { width: 0, height: 0, startX: E, startY: N, x: E, y: N }, !0), B || (M.stopPropagation(), M.preventDefault());
  }
  function v(M) {
    if (!l(d) || !s || !n().selectionRect)
      return;
    const B = ot(M, s), { startX: Z = 0, startY: P = 0 } = n().selectionRect;
    if (!f) {
      const k = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(B.x - Z, B.y - P) <= k)
        return;
      n().unselectNodesAndEdges(), t.onselectionstart?.(M);
    }
    f = !0;
    const E = {
      ...n().selectionRect,
      x: B.x < Z ? B.x : Z,
      y: B.y < P ? B.y : P,
      width: Math.abs(B.x - Z),
      height: Math.abs(B.y - P)
    }, N = a, y = c;
    a = new Set(Si(
      n().nodeLookup,
      E,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === qr.Partial,
      !0
    ).map((k) => k.id));
    const x = n().defaultEdgeOptions.selectable ?? !0;
    c = /* @__PURE__ */ new Set();
    for (const k of a) {
      const D = n().connectionLookup.get(k);
      if (D)
        for (const { edgeId: O } of D.values()) {
          const I = n().edgeLookup.get(O);
          I && (I.selectable ?? x) && c.add(O);
        }
    }
    zs(N, a) || n(n().nodes = n().nodes.map(Is(a)), !0), zs(y, c) || n(n().edges = n().edges.map(Is(c)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = E, !0);
  }
  function p(M) {
    M.button === 0 && (M.target?.releasePointerCapture?.(M.pointerId), !f && M.target === i && S?.(M), n(n().selectionRect = null, !0), f && n(n().selectionRectMode = a.size > 0 ? "nodes" : null, !0), f && t.onselectionend?.(M));
  }
  const m = (M) => {
    if (Array.isArray(l(u)) && l(u).includes(2)) {
      M.preventDefault();
      return;
    }
    t.onpanecontextmenu?.({ event: M });
  }, w = (M) => {
    f && (M.stopPropagation(), f = !1);
  };
  function S(M) {
    if (f || n().connection.inProgress) {
      f = !1;
      return;
    }
    t.onpaneclick?.({ event: M }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var C = Fv();
  let b;
  var A = /* @__PURE__ */ _(() => l(h) ? void 0 : Ds(S, i));
  C.__click = function(...M) {
    l(A)?.apply(this, M);
  }, C.__pointermove = function(...M) {
    (l(h) ? v : void 0)?.apply(this, M);
  }, C.__pointerup = function(...M) {
    (l(h) ? p : void 0)?.apply(this, M);
  };
  var T = /* @__PURE__ */ _(() => Ds(m, i));
  C.__contextmenu = function(...M) {
    l(T)?.apply(this, M);
  };
  var z = Y(C);
  Fe(z, () => t.children), ur(C, (M) => i = M, () => i), oe((M) => b = Ve(C, 1, "svelte-flow__pane svelte-flow__container", null, b, M), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: l(d)
    })
  ]), ln(
    "pointerdown",
    C,
    function(...M) {
      (l(h) ? g : void 0)?.apply(this, M);
    },
    !0
  ), ln(
    "click",
    C,
    function(...M) {
      (l(h) ? w : void 0)?.apply(this, M);
    },
    !0
  ), H(e, C), re();
}
so(["click", "pointermove", "pointerup", "contextmenu"]);
var Yv = /* @__PURE__ */ J('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Zv(e, t) {
  ne(t, !0);
  var n = Yv();
  let r;
  var o = Y(n);
  Fe(o, () => t.children), oe(() => r = qe(n, "", r, {
    transform: `translate(${t.store.viewport.x ?? ""}px, ${t.store.viewport.y ?? ""}px) scale(${t.store.viewport.zoom ?? ""})`
  })), H(e, n), re();
}
function Vl(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = qg({
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
  function c(u, d) {
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
  return c(e, t), {
    update(u) {
      c(e, u);
    },
    destroy() {
      a.destroy();
    }
  };
}
var Xv = /* @__PURE__ */ J('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>'), Wv = /* @__PURE__ */ J('<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>', 1);
function qv(e, t) {
  ne(t, !0);
  var n = Wv(), r = ae(n), o = Y(r), i = q(r, 2), s = Y(i), a = q(i, 2);
  {
    var c = (u) => {
      var d = Xv(), h = Y(d);
      oe(() => {
        G(d, "id", `${Gv}-${t.store.flowId}`), we(h, t.store.ariaLiveMessage);
      }), H(u, d);
    };
    se(a, (u) => {
      t.store.disableKeyboardA11y || u(c);
    });
  }
  oe(() => {
    G(r, "id", `${Bl}-${t.store.flowId}`), we(o, t.store.disableKeyboardA11y ? t.store.ariaLabelConfig["node.a11yDescription.default"] : t.store.ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), G(i, "id", `${Fl}-${t.store.flowId}`), we(s, t.store.ariaLabelConfig["edge.a11yDescription.default"]);
  }), H(e, n), re();
}
const Bl = "svelte-flow__node-desc", Fl = "svelte-flow__edge-desc", Gv = "svelte-flow__aria-live";
var Uv = /* @__PURE__ */ J("<div><!></div>");
function jv(e, t) {
  ne(t, !0);
  let n = V(t, "store", 15), r = /* @__PURE__ */ _(() => Te(t.node.data, () => ({}), !0)), o = /* @__PURE__ */ _(() => Te(t.node.selected, !1)), i = /* @__PURE__ */ _(() => t.node.draggable), s = /* @__PURE__ */ _(() => t.node.selectable), a = /* @__PURE__ */ _(() => Te(t.node.deletable, !0)), c = /* @__PURE__ */ _(() => t.node.connectable), u = /* @__PURE__ */ _(() => t.node.focusable), d = /* @__PURE__ */ _(() => Te(t.node.hidden, !1)), h = /* @__PURE__ */ _(() => Te(t.node.dragging, !1)), f = /* @__PURE__ */ _(() => Te(t.node.style, "")), g = /* @__PURE__ */ _(() => t.node.class), v = /* @__PURE__ */ _(() => Te(t.node.type, "default")), p = /* @__PURE__ */ _(() => t.node.parentId), m = /* @__PURE__ */ _(() => t.node.sourcePosition), w = /* @__PURE__ */ _(() => t.node.targetPosition), S = /* @__PURE__ */ _(() => Te(t.node.measured, () => ({ width: 0, height: 0 }), !0).width), C = /* @__PURE__ */ _(() => Te(t.node.measured, () => ({ width: 0, height: 0 }), !0).height), b = /* @__PURE__ */ _(() => t.node.initialWidth), A = /* @__PURE__ */ _(() => t.node.initialHeight), T = /* @__PURE__ */ _(() => t.node.width), z = /* @__PURE__ */ _(() => t.node.height), M = /* @__PURE__ */ _(() => t.node.dragHandle), B = /* @__PURE__ */ _(() => Te(t.node.internals.z, 0)), Z = /* @__PURE__ */ _(() => t.node.internals.positionAbsolute.x), P = /* @__PURE__ */ _(() => t.node.internals.positionAbsolute.y), E = /* @__PURE__ */ _(() => t.node.internals.userNode), { id: N } = t.node, y = /* @__PURE__ */ _(() => l(i) ?? n().nodesDraggable), x = /* @__PURE__ */ _(() => l(s) ?? n().elementsSelectable), k = /* @__PURE__ */ _(() => l(c) ?? n().nodesConnectable), D = /* @__PURE__ */ _(() => ml(t.node)), O = /* @__PURE__ */ _(() => !!t.node.internals.handleBounds), I = /* @__PURE__ */ _(() => l(D) && l(O)), R = /* @__PURE__ */ _(() => l(u) ?? n().nodesFocusable);
  function F(he) {
    return n().parentLookup.has(he);
  }
  let X = /* @__PURE__ */ _(() => F(N)), W = /* @__PURE__ */ de(null), K = null, U = l(v), j = l(m), Q = l(w), ee = /* @__PURE__ */ _(() => n().nodeTypes[l(v)] ?? zl), le = /* @__PURE__ */ _(() => n().ariaLabelConfig), ge = {
    get value() {
      return l(k);
    }
  };
  cv(N), dv(ge);
  let te = /* @__PURE__ */ _(() => {
    const he = l(S) === void 0 ? l(T) ?? l(b) : l(T), _e = l(C) === void 0 ? l(z) ?? l(A) : l(z);
    if (!(he === void 0 && _e === void 0 && l(f) === void 0))
      return `${l(f)};${he ? `width:${mt(he)};` : ""}${_e ? `height:${mt(_e)};` : ""}`;
  });
  st(() => {
    (l(v) !== U || l(m) !== j || l(w) !== Q) && l(W) !== null && requestAnimationFrame(() => {
      l(W) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[N, { id: N, nodeElement: l(W), force: !0 }]]));
    }), U = l(v), j = l(m), Q = l(w);
  }), st(() => {
    t.resizeObserver && (!l(I) || l(W) !== K) && (K && t.resizeObserver.unobserve(K), l(W) && t.resizeObserver.observe(l(W)), K = l(W));
  }), lo(() => {
    K && t.resizeObserver?.unobserve(K);
  });
  function me(he) {
    l(x) && (!n().selectNodesOnDrag || !l(y) || n().nodeDragThreshold > 0) && n().handleNodeSelection(N), t.onnodeclick?.({ node: l(E), event: he });
  }
  function ie(he) {
    if (!(wl(he) || n().disableKeyboardA11y))
      if (dl.includes(he.key) && l(x)) {
        const _e = he.key === "Escape";
        n().handleNodeSelection(N, _e, l(W));
      } else l(y) && t.node.selected && Object.prototype.hasOwnProperty.call(Jr, he.key) && (he.preventDefault(), n(
        n().ariaLiveMessage = l(le)["node.a11yDescription.ariaLiveMessage"]({
          direction: he.key.replace("Arrow", "").toLowerCase(),
          x: ~~t.node.internals.positionAbsolute.x,
          y: ~~t.node.internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Jr[he.key], he.shiftKey ? 4 : 1));
  }
  const be = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !l(W)?.matches(":focus-visible"))
      return;
    const { width: he, height: _e, viewport: ke } = n();
    Si(/* @__PURE__ */ new Map([[N, t.node]]), { x: 0, y: 0, width: he, height: _e }, [ke.x, ke.y, ke.zoom], !0).length > 0 || n().setCenter(t.node.position.x + (t.node.measured.width ?? 0) / 2, t.node.position.y + (t.node.measured.height ?? 0) / 2, { zoom: ke.zoom });
  };
  var xe = pe(), Ee = ae(xe);
  {
    var ze = (he) => {
      var _e = Uv();
      qt(_e, () => ({
        "data-id": N,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${l(v)}`,
          l(g)
        ],
        style: l(te),
        onclick: me,
        onpointerenter: t.onnodepointerenter ? (ue) => t.onnodepointerenter({ node: l(E), event: ue }) : void 0,
        onpointerleave: t.onnodepointerleave ? (ue) => t.onnodepointerleave({ node: l(E), event: ue }) : void 0,
        onpointermove: t.onnodepointermove ? (ue) => t.onnodepointermove({ node: l(E), event: ue }) : void 0,
        oncontextmenu: t.onnodecontextmenu ? (ue) => t.onnodecontextmenu({ node: l(E), event: ue }) : void 0,
        onkeydown: l(R) ? ie : void 0,
        onfocus: l(R) ? be : void 0,
        tabIndex: l(R) ? 0 : void 0,
        role: t.node.ariaRole ?? (l(R) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Bl}-${n().flowId}`,
        ...t.node.domAttributes,
        [Rt]: {
          dragging: l(h),
          selected: l(o),
          draggable: l(y),
          connectable: l(k),
          selectable: l(x),
          nopan: l(y),
          parent: l(X)
        },
        [St]: {
          "z-index": l(B),
          transform: `translate(${l(Z) ?? ""}px, ${l(P) ?? ""}px)`,
          visibility: l(D) ? "visible" : "hidden"
        }
      }));
      var ke = Y(_e);
      ao(ke, () => l(ee), (ue, $e) => {
        $e(ue, {
          get data() {
            return l(r);
          },
          get id() {
            return N;
          },
          get selected() {
            return l(o);
          },
          get selectable() {
            return l(x);
          },
          get deletable() {
            return l(a);
          },
          get sourcePosition() {
            return l(m);
          },
          get targetPosition() {
            return l(w);
          },
          get zIndex() {
            return l(B);
          },
          get dragging() {
            return l(h);
          },
          get draggable() {
            return l(y);
          },
          get dragHandle() {
            return l(M);
          },
          get parentId() {
            return l(p);
          },
          get type() {
            return l(v);
          },
          get isConnectable() {
            return l(k);
          },
          get positionAbsoluteX() {
            return l(Z);
          },
          get positionAbsoluteY() {
            return l(P);
          },
          get width() {
            return l(T);
          },
          get height() {
            return l(z);
          }
        });
      }), De(_e, (ue, $e) => Vl?.(ue, $e), () => ({
        nodeId: N,
        isSelectable: l(x),
        disabled: !l(y),
        handleSelector: l(M),
        noDragClass: n().noDragClass,
        nodeClickDistance: t.nodeClickDistance,
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (ue, $e, wt, bt) => {
          t.onnodedrag?.({ event: ue, targetNode: wt, nodes: bt });
        },
        onDragStart: (ue, $e, wt, bt) => {
          t.onnodedragstart?.({ event: ue, targetNode: wt, nodes: bt });
        },
        onDragStop: (ue, $e, wt, bt) => {
          t.onnodedragstop?.({ event: ue, targetNode: wt, nodes: bt });
        },
        store: n()
      })), ur(_e, (ue) => L(W, ue), () => l(W)), H(he, _e);
    };
    se(Ee, (he) => {
      l(d) || he(ze);
    });
  }
  H(e, xe), re();
}
var Jv = /* @__PURE__ */ J('<div class="svelte-flow__nodes"></div>');
function Qv(e, t) {
  ne(t, !0);
  let n = V(t, "store", 15);
  const r = typeof ResizeObserver > "u" ? null : new ResizeObserver((i) => {
    const s = /* @__PURE__ */ new Map();
    i.forEach((a) => {
      const c = a.target.getAttribute("data-id");
      s.set(c, { id: c, nodeElement: a.target, force: !0 });
    }), n().updateNodeInternals(s);
  });
  lo(() => {
    r?.disconnect();
  });
  var o = Jv();
  rt(o, 21, () => n().visible.nodes.values(), (i) => i.id, (i, s) => {
    jv(i, {
      get node() {
        return l(s);
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
  }), H(e, o), re();
}
var $v = /* @__PURE__ */ Se('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function e0(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ _(() => t.edge.id), r = /* @__PURE__ */ _(() => t.edge.source), o = /* @__PURE__ */ _(() => t.edge.target), i = /* @__PURE__ */ _(() => t.edge.sourceX), s = /* @__PURE__ */ _(() => t.edge.sourceY), a = /* @__PURE__ */ _(() => t.edge.targetX), c = /* @__PURE__ */ _(() => t.edge.targetY), u = /* @__PURE__ */ _(() => t.edge.sourcePosition), d = /* @__PURE__ */ _(() => t.edge.targetPosition), h = /* @__PURE__ */ _(() => Te(t.edge.animated, !1)), f = /* @__PURE__ */ _(() => Te(t.edge.selected, !1)), g = /* @__PURE__ */ _(() => t.edge.label), v = /* @__PURE__ */ _(() => t.edge.labelStyle), p = /* @__PURE__ */ _(() => Te(t.edge.data, () => ({}), !0)), m = /* @__PURE__ */ _(() => t.edge.style), w = /* @__PURE__ */ _(() => t.edge.interactionWidth), S = /* @__PURE__ */ _(() => Te(t.edge.type, "default")), C = /* @__PURE__ */ _(() => t.edge.sourceHandle), b = /* @__PURE__ */ _(() => t.edge.targetHandle), A = /* @__PURE__ */ _(() => t.edge.markerStart), T = /* @__PURE__ */ _(() => t.edge.markerEnd), z = /* @__PURE__ */ _(() => t.edge.selectable), M = /* @__PURE__ */ _(() => t.edge.focusable), B = /* @__PURE__ */ _(() => Te(t.edge.deletable, !0)), Z = /* @__PURE__ */ _(() => t.edge.hidden), P = /* @__PURE__ */ _(() => t.edge.zIndex), E = /* @__PURE__ */ _(() => t.edge.class), N = /* @__PURE__ */ _(() => t.edge.ariaLabel);
  hv(l(n));
  let y = null, x = /* @__PURE__ */ _(() => l(z) ?? t.store.elementsSelectable), k = /* @__PURE__ */ _(() => l(M) ?? t.store.edgesFocusable), D = /* @__PURE__ */ _(() => t.store.edgeTypes[l(S)] ?? Ol), O = /* @__PURE__ */ _(() => l(A) ? `url('#${$o(l(A), t.store.flowId)}')` : void 0), I = /* @__PURE__ */ _(() => l(T) ? `url('#${$o(l(T), t.store.flowId)}')` : void 0);
  function R(j) {
    const Q = t.store.edgeLookup.get(l(n));
    Q && (l(x) && t.store.handleEdgeSelection(l(n)), t.onedgeclick?.({ event: j, edge: Q }));
  }
  function F(j, Q) {
    const ee = t.store.edgeLookup.get(l(n));
    ee && Q({ event: j, edge: ee });
  }
  function X(j) {
    if (!t.store.disableKeyboardA11y && dl.includes(j.key) && l(x)) {
      const { unselectNodesAndEdges: Q, addSelectedEdges: ee } = t.store;
      j.key === "Escape" ? (y?.blur(), Q({ edges: [t.edge] })) : ee([l(n)]);
    }
  }
  var W = pe(), K = ae(W);
  {
    var U = (j) => {
      var Q = $v();
      let ee;
      var le = Y(Q);
      qt(le, () => ({
        class: ["svelte-flow__edge", l(E)],
        "data-id": l(n),
        onclick: R,
        oncontextmenu: t.onedgecontextmenu ? (te) => {
          F(te, t.onedgecontextmenu);
        } : void 0,
        onpointerenter: t.onedgepointerenter ? (te) => {
          F(te, t.onedgepointerenter);
        } : void 0,
        onpointerleave: t.onedgepointerleave ? (te) => {
          F(te, t.onedgepointerleave);
        } : void 0,
        "aria-label": l(N) === null ? void 0 : l(N) ? l(N) : `Edge from ${l(r)} to ${l(o)}`,
        "aria-describedby": l(k) ? `${Fl}-${t.store.flowId}` : void 0,
        role: t.edge.ariaRole ?? (l(k) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: l(k) ? X : void 0,
        tabindex: l(k) ? 0 : void 0,
        ...t.edge.domAttributes,
        [Rt]: {
          animated: l(h),
          selected: l(f),
          selectable: l(x)
        }
      }));
      var ge = Y(le);
      ao(ge, () => l(D), (te, me) => {
        me(te, {
          get id() {
            return l(n);
          },
          get source() {
            return l(r);
          },
          get target() {
            return l(o);
          },
          get sourceX() {
            return l(i);
          },
          get sourceY() {
            return l(s);
          },
          get targetX() {
            return l(a);
          },
          get targetY() {
            return l(c);
          },
          get sourcePosition() {
            return l(u);
          },
          get targetPosition() {
            return l(d);
          },
          get animated() {
            return l(h);
          },
          get selected() {
            return l(f);
          },
          get label() {
            return l(g);
          },
          get labelStyle() {
            return l(v);
          },
          get data() {
            return l(p);
          },
          get style() {
            return l(m);
          },
          get interactionWidth() {
            return l(w);
          },
          get selectable() {
            return l(x);
          },
          get deletable() {
            return l(B);
          },
          get type() {
            return l(S);
          },
          get sourceHandleId() {
            return l(C);
          },
          get targetHandleId() {
            return l(b);
          },
          get markerStart() {
            return l(O);
          },
          get markerEnd() {
            return l(I);
          }
        });
      }), ur(le, (te) => y = te, () => y), oe(() => ee = qe(Q, "", ee, { "z-index": l(P) })), H(j, Q);
    };
    se(K, (j) => {
      l(Z) || j(U);
    });
  }
  H(e, W), re();
}
wc();
var t0 = /* @__PURE__ */ Se("<defs></defs>");
function n0(e, t) {
  ne(t, !1);
  const n = jt();
  Oa();
  var r = t0();
  rt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    s0(o, Ht(() => l(i)));
  }), H(e, r), re();
}
var r0 = /* @__PURE__ */ Se('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), o0 = /* @__PURE__ */ Se('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), i0 = /* @__PURE__ */ Se('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function s0(e, t) {
  ne(t, !0);
  let n = V(t, "width", 3, 12.5), r = V(t, "height", 3, 12.5), o = V(t, "markerUnits", 3, "strokeWidth"), i = V(t, "orient", 3, "auto-start-reverse"), s = V(t, "color", 3, "none");
  var a = i0(), c = Y(a);
  {
    var u = (h) => {
      var f = r0();
      let g;
      oe(() => {
        G(f, "stroke-width", t.strokeWidth), g = qe(f, "", g, { stroke: s() });
      }), H(h, f);
    }, d = (h) => {
      var f = pe(), g = ae(f);
      {
        var v = (p) => {
          var m = o0();
          let w;
          oe(() => {
            G(m, "stroke-width", t.strokeWidth), w = qe(m, "", w, { stroke: s(), fill: s() });
          }), H(p, m);
        };
        se(
          g,
          (p) => {
            t.type === Gr.ArrowClosed && p(v);
          },
          !0
        );
      }
      H(h, f);
    };
    se(c, (h) => {
      t.type === Gr.Arrow ? h(u) : h(d, !1);
    });
  }
  oe(() => {
    G(a, "id", t.id), G(a, "markerWidth", `${n()}`), G(a, "markerHeight", `${r()}`), G(a, "markerUnits", o()), G(a, "orient", i());
  }), H(e, a), re();
}
var a0 = /* @__PURE__ */ J('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function l0(e, t) {
  ne(t, !0);
  let n = V(t, "store", 15);
  var r = a0(), o = Y(r), i = Y(o);
  n0(i, {});
  var s = q(o, 2);
  rt(s, 17, () => n().visible.edges.values(), (a) => a.id, (a, c) => {
    e0(a, {
      get edge() {
        return l(c);
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
  }), H(e, r), re();
}
var c0 = /* @__PURE__ */ J('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function Kl(e, t) {
  ne(t, !0);
  let n = V(t, "x", 3, 0), r = V(t, "y", 3, 0), o = V(t, "width", 3, 0), i = V(t, "height", 3, 0), s = V(t, "isVisible", 3, !0);
  var a = pe(), c = ae(a);
  {
    var u = (d) => {
      var h = c0();
      let f;
      oe((g) => f = qe(h, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : mt(o()),
          height: typeof i() == "string" ? i() : mt(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), H(d, h);
    };
    se(c, (d) => {
      s() && d(u);
    });
  }
  H(e, a), re();
}
var u0 = /* @__PURE__ */ J("<div><!></div>");
function d0(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ de(void 0);
  st(() => {
    t.store.disableKeyboardA11y || l(n)?.focus({ preventScroll: !0 });
  });
  let r = /* @__PURE__ */ _(() => {
    if (t.store.selectionRectMode === "nodes") {
      t.store.nodes;
      const d = gr(t.store.nodeLookup, { filter: (h) => !!h.selected });
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
  var a = pe(), c = ae(a);
  {
    var u = (d) => {
      var h = u0();
      h.__contextmenu = o, h.__click = i, h.__keydown = function(...v) {
        (t.store.disableKeyboardA11y ? void 0 : s)?.apply(this, v);
      };
      let f;
      var g = Y(h);
      Kl(g, { width: "100%", height: "100%", x: 0, y: 0 }), De(h, (v, p) => Vl?.(v, p), () => ({
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
      })), ur(h, (v) => L(n, v), () => l(n)), oe(
        (v) => {
          Ve(h, 1, Wt(["svelte-flow__selection-wrapper", t.store.noPanClass]), "svelte-sf2y5e"), G(h, "role", t.store.disableKeyboardA11y ? void 0 : "button"), G(h, "tabindex", t.store.disableKeyboardA11y ? void 0 : -1), f = qe(h, "", f, v);
        },
        [
          () => ({
            width: mt(l(r).width),
            height: mt(l(r).height),
            transform: `translate(${l(r).x ?? ""}px, ${l(r).y ?? ""}px)`
          })
        ]
      ), H(d, h);
    };
    se(c, (d) => {
      t.store.selectionRectMode === "nodes" && l(r) && Pt(l(r).x) && Pt(l(r).y) && d(u);
    });
  }
  H(e, a), re();
}
so(["contextmenu", "click", "keydown"]);
function f0(e) {
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
function lt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const c = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, h, f) => h ? d | 1 << f : d,
      0
    );
    for (const d of c) {
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
          const S = Array.isArray(f) ? f : [f];
          let C = !1;
          for (const b of S)
            if ((Array.isArray(b) ? b : [b]).reduce(
              (T, z) => T | f0(z),
              0
            ) === u) {
              C = !0;
              break;
            }
          if (!C) continue;
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
  return n && (s = Ho(e, o, i)), {
    update: (a) => {
      const { enabled: c = !0, type: u = "keydown" } = a;
      n && (!c || o !== u) ? s?.() : !n && c && (s = Ho(e, u, i)), n = c, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function Yl() {
  const e = /* @__PURE__ */ _(jt), t = (i) => {
    const s = As(i) ? i : l(e).nodeLookup.get(i.id), a = s.parentId ? wg(s.position, s.measured, s.parentId, l(e).nodeLookup, l(e).nodeOrigin) : s.position, c = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return zn(c);
  };
  function n(i, s, a = { replace: !1 }) {
    l(e).nodes = Le(() => l(e).nodes).map((c) => {
      if (c.id === i) {
        const u = typeof s == "function" ? s(c) : s;
        return a?.replace && As(u) ? u : { ...c, ...u };
      }
      return c;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    l(e).edges = Le(() => l(e).edges).map((c) => {
      if (c.id === i) {
        const u = typeof s == "function" ? s(c) : s;
        return a.replace && Ev(u) ? u : { ...c, ...u };
      }
      return c;
    });
  }
  const o = (i) => l(e).nodeLookup.get(i);
  return {
    zoomIn: l(e).zoomIn,
    zoomOut: l(e).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? l(e).nodes : Os(l(e).nodeLookup, i),
    getEdge: (i) => l(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? l(e).edges : Os(l(e).edgeLookup, i),
    setZoom: (i, s) => {
      const a = l(e).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => l(e).viewport.zoom,
    setViewport: async (i, s) => {
      const a = l(e).viewport;
      return l(e).panZoom ? (await l(e).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => Us(l(e).viewport),
    setCenter: async (i, s, a) => l(e).setCenter(i, s, a),
    fitView: (i) => l(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!l(e).panZoom)
        return Promise.resolve(!1);
      const a = Ci(i, l(e).width, l(e).height, l(e).minZoom, l(e).maxZoom, s?.padding ?? 0.1);
      return await l(e).panZoom.setViewport(a, {
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
      const c = ys(i), u = c ? i : t(i);
      return u ? (a || l(e).nodes).filter((d) => {
        const h = l(e).nodeLookup.get(d.id);
        if (!h || !c && d.id === i.id)
          return !1;
        const f = zn(h), g = nr(f, u);
        return s && g > 0 || g >= f.width * f.height || g >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const u = ys(i) ? i : t(i);
      if (!u)
        return !1;
      const d = nr(u, s);
      return a && d > 0 || d >= s.width * s.height || d >= u.width * u.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: c } = await pg({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: l(e).nodes,
        edges: l(e).edges,
        onBeforeDelete: l(e).onbeforedelete
      });
      return a && (l(e).nodes = Le(() => l(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), c && (l(e).edges = Le(() => l(e).edges).filter((u) => !c.some(({ id: d }) => d === u.id))), (a.length > 0 || c.length > 0) && l(e).ondelete?.({ nodes: a, edges: c }), { deletedNodes: a, deletedEdges: c };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!l(e).domNode)
        return i;
      const a = s.snapToGrid ? l(e).snapGrid : !1, { x: c, y: u, zoom: d } = l(e).viewport, { x: h, y: f } = l(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - f };
      return pr(g, [c, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!l(e).domNode)
        return i;
      const { x: s, y: a, zoom: c } = l(e).viewport, { x: u, y: d } = l(e).domNode.getBoundingClientRect(), h = jr(i, [s, a, c]);
      return { x: h.x + u, y: h.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...l(e).nodes],
      edges: [...l(e).edges],
      viewport: { ...l(e).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const c = l(e).nodeLookup.get(i)?.internals.userNode;
      if (!c)
        return;
      const u = typeof s == "function" ? s(c) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? u : { ...d.data, ...u }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => fg(i, {
      nodeLookup: l(e).nodeLookup,
      nodeOrigin: l(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(l(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Os(e, t) {
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
function h0(e, t) {
  ne(t, !0);
  let n = V(t, "store", 15), r = V(t, "selectionKey", 3, "Shift"), o = V(t, "multiSelectionKey", 19, () => rr() ? "Meta" : "Control"), i = V(t, "deleteKey", 3, "Backspace"), s = V(t, "panActivationKey", 3, " "), a = V(t, "zoomActivationKey", 19, () => rr() ? "Meta" : "Control"), { deleteElements: c } = Yl();
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
    return (Array.isArray(p) ? p : [p]).map((S) => {
      const C = h(S);
      return {
        key: C,
        modifier: d(S),
        enabled: C !== null,
        callback: m
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function v() {
    const p = n().nodes.filter((w) => w.selected), m = n().edges.filter((w) => w.selected);
    c({ nodes: p, edges: m });
  }
  ln("blur", Oe, g), ln("contextmenu", Oe, g), De(Oe, (p, m) => lt?.(p, m), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), De(Oe, (p, m) => lt?.(p, m), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), De(Oe, (p, m) => lt?.(p, m), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), De(Oe, (p, m) => lt?.(p, m), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), De(Oe, (p, m) => lt?.(p, m), () => ({
    trigger: f(i(), (p) => {
      !(p.originalEvent.ctrlKey || p.originalEvent.metaKey || p.originalEvent.shiftKey) && !wl(p.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), De(Oe, (p, m) => lt?.(p, m), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), De(Oe, (p, m) => lt?.(p, m), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), De(Oe, (p, m) => lt?.(p, m), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), De(Oe, (p, m) => lt?.(p, m), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), De(Oe, (p, m) => lt?.(p, m), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), re();
}
var g0 = /* @__PURE__ */ Se('<path fill="none" class="svelte-flow__connection-path"></path>'), v0 = /* @__PURE__ */ Se('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function p0(e, t) {
  ne(t, !0);
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
      case Lt.Bezier: {
        const [a] = xl(s);
        return a;
      }
      case Lt.Straight: {
        const [a] = kl(s);
        return a;
      }
      case Lt.Step:
      case Lt.SmoothStep: {
        const [a] = Ni({
          ...s,
          borderRadius: t.type === Lt.Step ? 0 : void 0
        });
        return a;
      }
    }
  });
  var r = pe(), o = ae(r);
  {
    var i = (s) => {
      var a = v0(), c = Y(a), u = Y(c);
      {
        var d = (f) => {
          var g = pe(), v = ae(g);
          ao(v, () => t.LineComponent, (p, m) => {
            m(p, {});
          }), H(f, g);
        }, h = (f) => {
          var g = g0();
          oe(() => {
            G(g, "d", l(n)), qe(g, t.style);
          }), H(f, g);
        };
        se(u, (f) => {
          t.LineComponent ? f(d) : f(h, !1);
        });
      }
      oe(
        (f) => {
          G(a, "width", t.store.width), G(a, "height", t.store.height), qe(a, t.containerStyle), Ve(c, 0, f);
        },
        [
          () => Wt([
            "svelte-flow__connection",
            ug(t.store.connection.isValid)
          ])
        ]
      ), H(s, a);
    };
    se(o, (s) => {
      t.store.connection.inProgress && s(i);
    });
  }
  H(e, r), re();
}
var m0 = /* @__PURE__ */ J("<div><!></div>");
function Ii(e, t) {
  ne(t, !0);
  let n = V(t, "position", 3, "top-right"), r = /* @__PURE__ */ Gt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "style",
    "class",
    "children"
  ]), o = /* @__PURE__ */ _(() => `${n()}`.split("-"));
  var i = m0();
  qt(i, (a) => ({ class: a, style: t.style, ...r }), [
    () => [
      "svelte-flow__panel",
      t.class,
      ...l(o)
    ]
  ]);
  var s = Y(i);
  Fe(s, () => t.children ?? Ye), H(e, i), re();
}
var y0 = /* @__PURE__ */ J('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function _0(e, t) {
  ne(t, !0);
  let n = V(t, "position", 3, "bottom-right");
  var r = pe(), o = ae(r);
  {
    var i = (s) => {
      Ii(s, {
        get position() {
          return n();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (a, c) => {
          var u = y0();
          H(a, u);
        },
        $$slots: { default: !0 }
      });
    };
    se(o, (s) => {
      t.proOptions?.hideAttribution || s(i);
    });
  }
  H(e, r), re();
}
var w0 = /* @__PURE__ */ J("<div><!></div>");
function b0(e, t) {
  ne(t, !0);
  let n = V(t, "domNode", 15), r = V(t, "clientWidth", 15), o = V(t, "clientHeight", 15), i = /* @__PURE__ */ _(() => t.rest.class), s = /* @__PURE__ */ _(() => Wc(t.rest, [
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
  var c = w0();
  qt(
    c,
    (d) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        l(i),
        t.colorMode
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: a,
      ...l(s),
      [St]: d
    }),
    [
      () => ({
        width: mt(t.width),
        height: mt(t.height)
      })
    ],
    void 0,
    void 0,
    "svelte-mkap6j"
  );
  var u = Y(c);
  Fe(u, () => t.children ?? Ye), ur(c, (d) => n(d), () => n()), Ui(c, "clientHeight", o), Ui(c, "clientWidth", r), H(e, c), re();
}
var x0 = /* @__PURE__ */ J('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), E0 = /* @__PURE__ */ J("<!> <!>", 1), k0 = /* @__PURE__ */ J("<!> <!> <!> <!> <!>", 1);
function S0(e, t) {
  ne(t, !0);
  let n = V(t, "paneClickDistance", 3, 1), r = V(t, "nodeClickDistance", 3, 1), o = V(t, "panOnScrollMode", 19, () => Cn.Free), i = V(t, "preventScrolling", 3, !0), s = V(t, "zoomOnScroll", 3, !0), a = V(t, "zoomOnDoubleClick", 3, !0), c = V(t, "zoomOnPinch", 3, !0), u = V(t, "panOnScroll", 3, !1), d = V(t, "panOnScrollSpeed", 3, 0.5), h = V(t, "panOnDrag", 3, !0), f = V(t, "selectionOnDrag", 3, !1), g = V(t, "connectionLineType", 19, () => Lt.Bezier), v = V(t, "nodes", 31, () => dt([])), p = V(t, "edges", 31, () => dt([])), m = V(t, "viewport", 15, void 0), w = /* @__PURE__ */ Gt(t, [
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
  ]), S = Ll({
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
  const C = ri(Qr);
  C && C.setStore && C.setStore(S), oi(Qr, {
    provider: !1,
    getStore() {
      return S;
    }
  }), st(() => {
    const b = { nodes: S.selectedNodes, edges: S.selectedEdges };
    Le(() => t.onselectionchange)?.(b);
    for (const A of S.selectionChangeHandlers.values())
      A(b);
  }), lo(() => {
    S.reset();
  }), b0(e, {
    get colorMode() {
      return S.colorMode;
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
      return S.domNode;
    },
    set domNode(b) {
      S.domNode = b;
    },
    get clientWidth() {
      return S.width;
    },
    set clientWidth(b) {
      S.width = b;
    },
    get clientHeight() {
      return S.height;
    },
    set clientHeight(b) {
      S.height = b;
    },
    children: (b, A) => {
      var T = k0(), z = ae(T);
      h0(z, {
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
          return S;
        },
        set store(E) {
          S = E;
        }
      });
      var M = q(z, 2);
      Bv(M, {
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
          return c();
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
          return S;
        },
        set store(E) {
          S = E;
        },
        children: (E, N) => {
          Kv(E, {
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
              return S;
            },
            set store(y) {
              S = y;
            },
            children: (y, x) => {
              var k = E0(), D = ae(k);
              Zv(D, {
                get store() {
                  return S;
                },
                set store(I) {
                  S = I;
                },
                children: (I, R) => {
                  var F = x0(), X = q(ae(F), 2);
                  l0(X, {
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
                      return S;
                    },
                    set store(j) {
                      S = j;
                    }
                  });
                  var W = q(X, 4);
                  p0(W, {
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
                      return S;
                    },
                    set store(j) {
                      S = j;
                    }
                  });
                  var K = q(W, 2);
                  Qv(K, {
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
                      return S;
                    },
                    set store(j) {
                      S = j;
                    }
                  });
                  var U = q(K, 2);
                  d0(U, {
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
                      return S;
                    },
                    set store(j) {
                      S = j;
                    }
                  }), H(I, F);
                },
                $$slots: { default: !0 }
              });
              var O = q(D, 2);
              {
                let I = /* @__PURE__ */ _(() => !!(S.selectionRect && S.selectionRectMode === "user")), R = /* @__PURE__ */ _(() => S.selectionRect?.width), F = /* @__PURE__ */ _(() => S.selectionRect?.height), X = /* @__PURE__ */ _(() => S.selectionRect?.x), W = /* @__PURE__ */ _(() => S.selectionRect?.y);
                Kl(O, {
                  get isVisible() {
                    return l(I);
                  },
                  get width() {
                    return l(R);
                  },
                  get height() {
                    return l(F);
                  },
                  get x() {
                    return l(X);
                  },
                  get y() {
                    return l(W);
                  }
                });
              }
              H(y, k);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var B = q(M, 2);
      _0(B, {
        get proOptions() {
          return t.proOptions;
        },
        get position() {
          return t.attributionPosition;
        }
      });
      var Z = q(B, 2);
      qv(Z, {
        get store() {
          return S;
        }
      });
      var P = q(Z, 2);
      Fe(P, () => t.children ?? Ye), H(b, T);
    },
    $$slots: { default: !0 }
  }), re();
}
function C0(e, t) {
  ne(t, !0);
  let n = /* @__PURE__ */ de(Ll({ props: {}, nodes: [], edges: [] }));
  oi(Qr, {
    provider: !0,
    getStore() {
      return l(n);
    },
    setStore: (i) => {
      L(n, i);
    }
  }), lo(() => {
    l(n).reset();
  });
  var r = pe(), o = ae(r);
  Fe(o, () => t.children ?? Ye), H(e, r), re();
}
var N0 = /* @__PURE__ */ J("<button><!></button>");
function Ar(e, t) {
  let n = /* @__PURE__ */ Gt(t, [
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
  var r = N0();
  qt(r, () => ({
    type: "button",
    onclick: t.onclick,
    class: ["svelte-flow__controls-button", t.class],
    ...n,
    [St]: {
      "--xy-controls-button-background-color-props": t.bgColor,
      "--xy-controls-button-background-color-hover-props": t.bgColorHover,
      "--xy-controls-button-color-props": t.color,
      "--xy-controls-button-color-hover-props": t.colorHover,
      "--xy-controls-button-border-color-props": t.borderColor
    }
  }));
  var o = Y(r);
  Fe(o, () => t.children ?? Ye), H(e, r);
}
var P0 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function M0(e) {
  var t = P0();
  H(e, t);
}
var A0 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function T0(e) {
  var t = A0();
  H(e, t);
}
var D0 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function I0(e) {
  var t = D0();
  H(e, t);
}
var z0 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function O0(e) {
  var t = z0();
  H(e, t);
}
var R0 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function H0(e) {
  var t = R0();
  H(e, t);
}
var L0 = /* @__PURE__ */ J("<!> <!>", 1), V0 = /* @__PURE__ */ J("<!> <!> <!> <!> <!> <!>", 1);
function B0(e, t) {
  ne(t, !0);
  let n = V(t, "position", 3, "bottom-left"), r = V(t, "orientation", 3, "vertical"), o = V(t, "showZoom", 3, !0), i = V(t, "showFitView", 3, !0), s = V(t, "showLock", 3, !0), a = /* @__PURE__ */ Gt(t, [
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
  ]), c = /* @__PURE__ */ _(jt);
  const u = {
    bgColor: t.buttonBgColor,
    bgColorHover: t.buttonBgColorHover,
    color: t.buttonColor,
    colorHover: t.buttonColorHover,
    borderColor: t.buttonBorderColor
  };
  let d = /* @__PURE__ */ _(() => l(c).nodesDraggable || l(c).nodesConnectable || l(c).elementsSelectable), h = /* @__PURE__ */ _(() => l(c).viewport.zoom <= l(c).minZoom), f = /* @__PURE__ */ _(() => l(c).viewport.zoom >= l(c).maxZoom), g = /* @__PURE__ */ _(() => l(c).ariaLabelConfig), v = /* @__PURE__ */ _(() => r() === "horizontal" ? "horizontal" : "vertical");
  const p = () => {
    l(c).zoomIn();
  }, m = () => {
    l(c).zoomOut();
  }, w = () => {
    l(c).fitView(t.fitViewOptions);
  }, S = () => {
    let C = !l(d);
    l(c).nodesDraggable = C, l(c).nodesConnectable = C, l(c).elementsSelectable = C;
  };
  {
    let C = /* @__PURE__ */ _(() => [
      "svelte-flow__controls",
      l(v),
      t.class
    ]);
    Ii(e, Ht(
      {
        get class() {
          return l(C);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return l(g)["controls.ariaLabel"];
        },
        get style() {
          return t.style;
        }
      },
      () => a,
      {
        children: (b, A) => {
          var T = V0(), z = ae(T);
          {
            var M = (I) => {
              var R = pe(), F = ae(R);
              Fe(F, () => t.before), H(I, R);
            };
            se(z, (I) => {
              t.before && I(M);
            });
          }
          var B = q(z, 2);
          {
            var Z = (I) => {
              var R = L0(), F = ae(R);
              Ar(F, Ht(
                {
                  onclick: p,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return l(g)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return l(g)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return l(f);
                  }
                },
                () => u,
                {
                  children: (W, K) => {
                    M0(W);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var X = q(F, 2);
              Ar(X, Ht(
                {
                  onclick: m,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return l(g)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return l(g)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return l(h);
                  }
                },
                () => u,
                {
                  children: (W, K) => {
                    T0(W);
                  },
                  $$slots: { default: !0 }
                }
              )), H(I, R);
            };
            se(B, (I) => {
              o() && I(Z);
            });
          }
          var P = q(B, 2);
          {
            var E = (I) => {
              Ar(I, Ht(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: w,
                  get title() {
                    return l(g)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return l(g)["controls.fitView.ariaLabel"];
                  }
                },
                () => u,
                {
                  children: (R, F) => {
                    I0(R);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(P, (I) => {
              i() && I(E);
            });
          }
          var N = q(P, 2);
          {
            var y = (I) => {
              Ar(I, Ht(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: S,
                  get title() {
                    return l(g)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return l(g)["controls.interactive.ariaLabel"];
                  }
                },
                () => u,
                {
                  children: (R, F) => {
                    var X = pe(), W = ae(X);
                    {
                      var K = (j) => {
                        H0(j);
                      }, U = (j) => {
                        O0(j);
                      };
                      se(W, (j) => {
                        l(d) ? j(K) : j(U, !1);
                      });
                    }
                    H(R, X);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(N, (I) => {
              s() && I(y);
            });
          }
          var x = q(N, 2);
          {
            var k = (I) => {
              var R = pe(), F = ae(R);
              Fe(F, () => t.children), H(I, R);
            };
            se(x, (I) => {
              t.children && I(k);
            });
          }
          var D = q(x, 2);
          {
            var O = (I) => {
              var R = pe(), F = ae(R);
              Fe(F, () => t.after), H(I, R);
            };
            se(D, (I) => {
              t.after && I(O);
            });
          }
          H(b, T);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  re();
}
var Kt;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Kt || (Kt = {}));
var F0 = /* @__PURE__ */ Se("<circle></circle>");
function K0(e, t) {
  var n = F0();
  oe(() => {
    G(n, "cx", t.radius), G(n, "cy", t.radius), G(n, "r", t.radius), Ve(n, 0, Wt(["svelte-flow__background-pattern", "dots", t.class]));
  }), H(e, n);
}
var Y0 = /* @__PURE__ */ Se("<path></path>");
function Z0(e, t) {
  ne(t, !0);
  var n = Y0();
  oe(() => {
    G(n, "stroke-width", t.lineWidth), G(n, "d", `M${t.dimensions[0] / 2} 0 V${t.dimensions[1]} M0 ${t.dimensions[1] / 2} H${t.dimensions[0]}`), Ve(n, 0, Wt([
      "svelte-flow__background-pattern",
      t.variant,
      t.class
    ]));
  }), H(e, n), re();
}
const X0 = {
  [Kt.Dots]: 1,
  [Kt.Lines]: 1,
  [Kt.Cross]: 6
};
var W0 = /* @__PURE__ */ Se('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function q0(e, t) {
  ne(t, !0);
  let n = V(t, "variant", 19, () => Kt.Dots), r = V(t, "gap", 3, 20), o = V(t, "lineWidth", 3, 1), i = /* @__PURE__ */ _(jt), s = /* @__PURE__ */ _(() => n() === Kt.Dots), a = /* @__PURE__ */ _(() => n() === Kt.Cross), c = /* @__PURE__ */ _(() => Array.isArray(r()) ? r() : [r(), r()]), u = /* @__PURE__ */ _(() => `background-pattern-${l(i).flowId}-${t.id ?? ""}`), d = /* @__PURE__ */ _(() => [
    l(c)[0] * l(i).viewport.zoom || 1,
    l(c)[1] * l(i).viewport.zoom || 1
  ]), h = /* @__PURE__ */ _(() => (t.size ?? X0[n()]) * l(i).viewport.zoom), f = /* @__PURE__ */ _(() => l(a) ? [l(h), l(h)] : l(d)), g = /* @__PURE__ */ _(() => l(s) ? [l(h) / 2, l(h) / 2] : [
    l(f)[0] / 2,
    l(f)[1] / 2
  ]);
  var v = W0();
  let p;
  var m = Y(v), w = Y(m);
  {
    var S = (A) => {
      {
        let T = /* @__PURE__ */ _(() => l(h) / 2);
        K0(A, {
          get radius() {
            return l(T);
          },
          get class() {
            return t.patternClass;
          }
        });
      }
    }, C = (A) => {
      Z0(A, {
        get dimensions() {
          return l(f);
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
    se(w, (A) => {
      l(s) ? A(S) : A(C, !1);
    });
  }
  var b = q(m);
  oe(() => {
    Ve(v, 0, Wt([
      "svelte-flow__background",
      "svelte-flow__container",
      t.class
    ])), p = qe(v, "", p, {
      "--xy-background-color-props": t.bgColor,
      "--xy-background-pattern-color-props": t.patternColor
    }), G(m, "id", l(u)), G(m, "x", l(i).viewport.x % l(d)[0]), G(m, "y", l(i).viewport.y % l(d)[1]), G(m, "width", l(d)[0]), G(m, "height", l(d)[1]), G(m, "patternTransform", `translate(-${l(g)[0]},-${l(g)[1]})`), G(b, "fill", `url(#${l(u)})`);
  }), H(e, v), re();
}
var G0 = /* @__PURE__ */ Se("<rect></rect>");
function U0(e, t) {
  let n = V(t, "borderRadius", 3, 5), r = V(t, "strokeWidth", 3, 2);
  var o = pe(), i = ae(o);
  {
    var s = (c) => {
      const u = /* @__PURE__ */ _(() => t.nodeComponent);
      var d = pe(), h = ae(d);
      ao(h, () => l(u), (f, g) => {
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
      }), H(c, d);
    }, a = (c) => {
      var u = G0();
      let d, h;
      oe(() => {
        d = Ve(u, 0, Wt(["svelte-flow__minimap-node", t.class]), null, d, { selected: t.selected }), G(u, "x", t.x), G(u, "y", t.y), G(u, "rx", n()), G(u, "ry", n()), G(u, "width", t.width), G(u, "height", t.height), G(u, "shape-rendering", t.shapeRendering), h = qe(u, "", h, {
          fill: t.color,
          stroke: t.strokeColor,
          "stroke-width": r()
        });
      }), H(c, u);
    };
    se(i, (c) => {
      t.nodeComponent ? c(s) : c(a, !1);
    });
  }
  H(e, o);
}
function j0(e, t) {
  const n = $g({
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
const Ao = (e) => e instanceof Function ? e : () => e;
var J0 = /* @__PURE__ */ Se("<title> </title>"), Q0 = /* @__PURE__ */ Se('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), $0 = /* @__PURE__ */ J('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function ep(e, t) {
  ne(t, !0);
  let n = V(t, "position", 3, "bottom-right"), r = V(t, "nodeStrokeColor", 3, "transparent"), o = V(t, "nodeClass", 3, ""), i = V(t, "nodeBorderRadius", 3, 5), s = V(t, "nodeStrokeWidth", 3, 2), a = V(t, "width", 3, 200), c = V(t, "height", 3, 150), u = V(t, "pannable", 3, !0), d = V(t, "zoomable", 3, !0), h = /* @__PURE__ */ Gt(t, [
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
  ]), f = /* @__PURE__ */ _(jt), g = /* @__PURE__ */ _(() => l(f).ariaLabelConfig);
  const v = t.nodeColor === void 0 ? void 0 : Ao(t.nodeColor), p = Ao(r()), m = Ao(o()), w = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ _(() => `svelte-flow__minimap-desc-${l(f).flowId}`), C = /* @__PURE__ */ _(() => ({
    x: -l(f).viewport.x / l(f).viewport.zoom,
    y: -l(f).viewport.y / l(f).viewport.zoom,
    width: l(f).width / l(f).viewport.zoom,
    height: l(f).height / l(f).viewport.zoom
  })), b = /* @__PURE__ */ _(() => pl(gr(l(f).nodeLookup, { filter: (O) => !O.hidden }), l(C))), A = /* @__PURE__ */ _(() => l(b).width / a()), T = /* @__PURE__ */ _(() => l(b).height / c()), z = /* @__PURE__ */ _(() => Math.max(l(A), l(T))), M = /* @__PURE__ */ _(() => l(z) * a()), B = /* @__PURE__ */ _(() => l(z) * c()), Z = /* @__PURE__ */ _(() => 5 * l(z)), P = /* @__PURE__ */ _(() => l(b).x - (l(M) - l(b).width) / 2 - l(Z)), E = /* @__PURE__ */ _(() => l(b).y - (l(B) - l(b).height) / 2 - l(Z)), N = /* @__PURE__ */ _(() => l(M) + l(Z) * 2), y = /* @__PURE__ */ _(() => l(B) + l(Z) * 2);
  const x = () => l(z);
  var k = $0(), D = ae(k);
  {
    let O = /* @__PURE__ */ _(() => ["svelte-flow__minimap", t.class]);
    iu(D, () => ({ "--xy-minimap-background-color-props": t.bgColor })), Ii(D.lastChild, Ht(
      {
        get position() {
          return n();
        },
        get class() {
          return l(O);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => h,
      {
        children: (I, R) => {
          var F = pe(), X = ae(F);
          {
            var W = (K) => {
              var U = Q0();
              let j;
              var Q = Y(U);
              {
                var ee = (te) => {
                  var me = J0(), ie = Y(me);
                  oe(() => {
                    G(me, "id", l(S)), we(ie, t.ariaLabel ?? l(g)["minimap.ariaLabel"]);
                  }), H(te, me);
                };
                se(Q, (te) => {
                  (t.ariaLabel ?? l(g)["minimap.ariaLabel"]) && te(ee);
                });
              }
              var le = q(Q);
              rt(le, 17, () => l(f).nodes, (te) => te.id, (te, me) => {
                const ie = /* @__PURE__ */ _(() => l(f).nodeLookup.get(l(me).id));
                var be = pe(), xe = ae(be);
                {
                  var Ee = (ze) => {
                    const he = /* @__PURE__ */ _(() => Ut(l(ie)));
                    {
                      let _e = /* @__PURE__ */ _(() => v?.(l(ie))), ke = /* @__PURE__ */ _(() => p(l(ie))), ue = /* @__PURE__ */ _(() => m(l(ie)));
                      U0(ze, Ht(
                        {
                          get id() {
                            return l(ie).id;
                          },
                          get x() {
                            return l(ie).internals.positionAbsolute.x;
                          },
                          get y() {
                            return l(ie).internals.positionAbsolute.y;
                          }
                        },
                        () => l(he),
                        {
                          get selected() {
                            return l(ie).selected;
                          },
                          get nodeComponent() {
                            return t.nodeComponent;
                          },
                          get color() {
                            return l(_e);
                          },
                          get borderRadius() {
                            return i();
                          },
                          get strokeColor() {
                            return l(ke);
                          },
                          get strokeWidth() {
                            return s();
                          },
                          get shapeRendering() {
                            return w;
                          },
                          get class() {
                            return l(ue);
                          }
                        }
                      ));
                    }
                  };
                  se(xe, (ze) => {
                    l(ie) && ml(l(ie)) && !l(ie).hidden && ze(Ee);
                  });
                }
                H(te, be);
              });
              var ge = q(le);
              De(U, (te, me) => j0?.(te, me), () => ({
                store: l(f),
                panZoom: l(f).panZoom,
                getViewScale: x,
                translateExtent: l(f).translateExtent,
                width: l(f).width,
                height: l(f).height,
                inversePan: t.inversePan,
                zoomStep: t.zoomStep,
                pannable: u(),
                zoomable: d()
              })), oe(() => {
                G(U, "width", a()), G(U, "height", c()), G(U, "viewBox", `${l(P) ?? ""} ${l(E) ?? ""} ${l(N) ?? ""} ${l(y) ?? ""}`), G(U, "aria-labelledby", l(S)), j = qe(U, "", j, {
                  "--xy-minimap-mask-background-color-props": t.maskColor,
                  "--xy-minimap-mask-stroke-color-props": t.maskStrokeColor,
                  "--xy-minimap-mask-stroke-width-props": t.maskStrokeWidth ? t.maskStrokeWidth * l(z) : void 0
                }), G(ge, "d", `M${l(P) - l(Z)},${l(E) - l(Z)}h${l(N) + l(Z) * 2}v${l(y) + l(Z) * 2}h${-l(N) - l(Z) * 2}z
      M${l(C).x ?? ""},${l(C).y ?? ""}h${l(C).width ?? ""}v${l(C).height ?? ""}h${-l(C).width}z`);
              }), H(K, U);
            };
            se(X, (K) => {
              l(f).panZoom && K(W);
            });
          }
          H(I, F);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  H(e, k), re();
}
var tp = /* @__PURE__ */ J('<div class="group flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm cursor-grab hover:border-blue-400 hover:shadow-md transition-all active:cursor-grabbing" draggable="true" role="listitem" aria-roledescription="node blueprint"><div><!></div> <div><div class="text-xs font-bold text-slate-800 tracking-tight"> </div> <div class="text-[10px] text-slate-400 mt-0.5"> </div></div></div>'), np = /* @__PURE__ */ J('<div class="w-64 bg-slate-50 border-r border-slate-200 p-5 flex flex-col gap-5 overflow-y-auto"><div><h3 class="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Components</h3> <p class="text-[10px] text-slate-500 mt-1">Drag to build workflow</p></div> <div class="flex flex-col gap-3" role="list"></div> <div class="mt-auto p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl text-white shadow-xl shadow-blue-200/50"><div class="flex items-center gap-2 mb-2"><span class="text-sm">💡</span> <span class="text-[10px] font-bold uppercase tracking-wider">Pro Tip</span></div> <p class="text-[10px] leading-relaxed opacity-90">Connect nodes by clicking and dragging between handles. Use <kbd class="px-1 py-0.5 bg-white/20 rounded">CMD</kbd> to multi-select.</p></div></div>');
function rp(e, t) {
  ne(t, !1);
  const n = [
    {
      type: "trigger",
      label: "Trigger",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>',
      description: "Start point",
      color: "bg-amber-500",
      data: { label: "New Trigger", event: "App\\Events\\ExampleEvent" }
    },
    {
      type: "action",
      label: "Action",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>',
      description: "Execute task",
      color: "bg-blue-600",
      data: { label: "New Action", action: "LogMessage" }
    },
    {
      type: "condition",
      label: "Condition",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>',
      description: "Branching logic",
      color: "bg-purple-600",
      data: { label: "New Condition", condition: "true == true" }
    }
  ];
  function r(s, a, c) {
    s.dataTransfer.setData("application/svelteflow", JSON.stringify({ type: a, data: c })), s.dataTransfer.effectAllowed = "move";
  }
  Oa();
  var o = np(), i = q(Y(o), 2);
  rt(i, 5, () => n, Jt, (s, a) => {
    var c = tp(), u = Y(c), d = Y(u);
    Ma(d, () => l(a).icon);
    var h = q(u, 2), f = Y(h), g = Y(f), v = q(f, 2), p = Y(v);
    oe(
      (m) => {
        Ve(u, 1, `w-10 h-10 ${l(a).color ?? ""} rounded-lg flex items-center justify-center text-white shadow-lg shadow-${m ?? ""}-200/50 group-hover:scale-110 transition-transform`), we(g, l(a).label), we(p, l(a).description);
      },
      [() => l(a).color.split("-")[1]]
    ), ln("dragstart", c, (m) => r(m, l(a).type, l(a).data)), H(s, c);
  }), H(e, o), re();
}
var op = /* @__PURE__ */ J("<!> <!> <!>", 1), ip = /* @__PURE__ */ J('<div class="flex h-[600px] w-full border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xl"><!> <div class="flex-grow relative h-full" role="presentation"><!></div></div>');
function sp(e, t) {
  ne(t, !0);
  let n = V(t, "nodes", 31, () => dt([])), r = V(t, "edges", 31, () => dt([]));
  const { screenToFlowPosition: o } = Yl();
  function i(h) {
    h.preventDefault(), h.dataTransfer.dropEffect = "move";
  }
  function s(h) {
    h.preventDefault();
    const f = h.dataTransfer.getData("application/svelteflow");
    if (!f) return;
    const { type: g, data: v } = JSON.parse(f), p = o({ x: h.clientX, y: h.clientY }), m = { id: `${g}-${Date.now()}`, type: g, position: p, data: v };
    n([...n(), m]);
  }
  var a = ip(), c = Y(a);
  rp(c, {});
  var u = q(c, 2), d = Y(u);
  S0(d, {
    get nodeTypes() {
      return t.nodeTypes;
    },
    fitView: !0,
    onnodeclick: ({ event: h, node: f }) => {
      t.onNodeClick && t.onNodeClick(h, f);
    },
    get nodes() {
      return n();
    },
    set nodes(h) {
      n(h);
    },
    get edges() {
      return r();
    },
    set edges(h) {
      r(h);
    },
    children: (h, f) => {
      var g = op(), v = ae(g);
      B0(v, {});
      var p = q(v, 2);
      q0(p, { variant: "lines", gap: 20, size: 1, color: "#f1f5f9" });
      var m = q(p, 2);
      ep(m, {}), H(h, g);
    },
    $$slots: { default: !0 }
  }), ln("dragover", u, i), ln("drop", u, s), H(e, a), re();
}
function ap(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function lp(e, { delay: t = 0, duration: n = 400, easing: r = ap, axis: o = "y" } = {}) {
  const i = getComputedStyle(e), s = +i.opacity, a = o === "y" ? "height" : "width", c = parseFloat(i[a]), u = o === "y" ? ["top", "bottom"] : ["left", "right"], d = u.map(
    (w) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${w[0].toUpperCase()}${w.slice(1)}`
    )
  ), h = parseFloat(i[`padding${d[0]}`]), f = parseFloat(i[`padding${d[1]}`]), g = parseFloat(i[`margin${d[0]}`]), v = parseFloat(i[`margin${d[1]}`]), p = parseFloat(
    i[`border${d[0]}Width`]
  ), m = parseFloat(
    i[`border${d[1]}Width`]
  );
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (w) => `overflow: hidden;opacity: ${Math.min(w * 20, 1) * s};${a}: ${w * c}px;padding-${u[0]}: ${w * h}px;padding-${u[1]}: ${w * f}px;margin-${u[0]}: ${w * g}px;margin-${u[1]}: ${w * v}px;border-${u[0]}-width: ${w * p}px;border-${u[1]}-width: ${w * m}px;min-${a}: 0`
  };
}
var cp = /* @__PURE__ */ J("<option> </option>"), up = /* @__PURE__ */ J('<div><label for="node-type" class="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Component Type</label> <select id="node-type" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"><option> </option><!></select></div>'), dp = /* @__PURE__ */ J('<span class="text-rose-500">*</span>'), fp = /* @__PURE__ */ J('<textarea class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"></textarea>'), hp = /* @__PURE__ */ J("<option> </option>"), gp = /* @__PURE__ */ J('<input class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"/> <datalist><!></datalist>', 1), vp = /* @__PURE__ */ J("<option> </option>"), pp = /* @__PURE__ */ J('<select class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"><option disabled selected> </option><!></select>'), mp = /* @__PURE__ */ J('<input class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"/>'), yp = /* @__PURE__ */ J('<div class="space-y-2"><label class="text-sm font-semibold text-slate-700 flex items-center gap-1"> <!></label> <!></div>'), _p = /* @__PURE__ */ J('<div class="pt-4 border-t border-slate-200"><h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Configuration</h4> <div class="space-y-4"></div></div>'), wp = /* @__PURE__ */ J('<div class="w-80 border-l border-slate-200 bg-slate-50 flex flex-col h-full shadow-inner"><div class="p-4 border-b border-slate-200 bg-white flex items-center justify-between"><h3 class="font-bold text-slate-800 uppercase tracking-wider text-xs">Node Settings</h3> <button class="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Close Settings"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg></button></div> <div class="flex-grow overflow-y-auto p-4 space-y-6"><div class="space-y-4"><div><label for="node-label" class="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Display Label</label> <input id="node-label" type="text" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"/></div> <!></div> <!></div> <div class="p-4 bg-white border-t border-slate-200"><p class="text-[10px] italic text-slate-400 break-all"> </p></div></div>');
function bp(e, t) {
  ne(t, !0);
  let n = V(t, "node", 15, null), r = V(t, "availableComponents", 19, () => ({})), o = /* @__PURE__ */ _(() => n()?.type), i = /* @__PURE__ */ _(() => l(o) === "trigger" ? r().triggers : l(o) === "action" ? r().actions : l(o) === "condition" ? r().conditions : []), s = /* @__PURE__ */ _(() => l(i)?.find((f) => f.identifier === n()?.data?.identifier));
  function a(f) {
    n(n().data.label = f.target.value, !0);
  }
  function c(f, g) {
    n().data.config || n(n().data.config = {}, !0), n(n().data.config[f] = g, !0);
  }
  var u = pe(), d = ae(u);
  {
    var h = (f) => {
      var g = wp(), v = Y(g), p = q(Y(v), 2);
      p.__click = function(...P) {
        t.onClose?.apply(this, P);
      };
      var m = q(v, 2), w = Y(m), S = Y(w), C = q(Y(S), 2);
      C.__input = a;
      var b = q(S, 2);
      {
        var A = (P) => {
          var E = up(), N = q(Y(E), 2);
          N.__change = (O) => {
            const I = l(i).find((R) => R.identifier === O.target.value);
            n(n().data.identifier = I.identifier, !0), n(n().data.description = I.description, !0), n(n().data.config = {}, !0);
          };
          var y = Y(N), x = Y(y);
          y.value = y.__value = "";
          var k = q(y);
          rt(k, 17, () => l(i), Jt, (O, I) => {
            var R = cp(), F = Y(R), X = {};
            oe(() => {
              we(F, l(I).name), X !== (X = l(I).identifier) && (R.value = (R.__value = l(I).identifier) ?? "");
            }), H(O, R);
          });
          var D;
          Fo(N), oe(() => {
            we(x, `Select a ${l(o) ?? ""}...`), D !== (D = n().data.identifier) && (N.value = (N.__value = n().data.identifier) ?? "", jn(N, n().data.identifier));
          }), H(P, E);
        };
        se(b, (P) => {
          l(i) && l(i).length > 0 && P(A);
        });
      }
      var T = q(w, 2);
      {
        var z = (P) => {
          var E = _p(), N = q(Y(E), 2);
          rt(N, 21, () => l(s).schema, Jt, (y, x) => {
            var k = yp(), D = Y(k), O = Y(D), I = q(O);
            {
              var R = (K) => {
                var U = dp();
                H(K, U);
              };
              se(I, (K) => {
                l(x).required && K(R);
              });
            }
            var F = q(D, 2);
            {
              var X = (K) => {
                var U = fp();
                U.__input = (j) => c(l(x).name, j.target.value), oe(() => {
                  G(U, "id", `field-${l(x).name ?? ""}`), G(U, "placeholder", l(x).placeholder), xr(U, n().data.config?.[l(x).name] || "");
                }), H(K, U);
              }, W = (K) => {
                var U = pe(), j = ae(U);
                {
                  var Q = (le) => {
                    var ge = pe(), te = ae(ge);
                    {
                      var me = (be) => {
                        var xe = gp(), Ee = ae(xe);
                        Ee.__change = (ke) => c(l(x).name, ke.target.value);
                        var ze = q(Ee, 2), he = Y(ze);
                        {
                          var _e = (ke) => {
                            var ue = pe(), $e = ae(ue);
                            rt($e, 17, () => Object.entries(l(x).options), Jt, (wt, bt) => {
                              var mr = /* @__PURE__ */ _(() => rn(l(bt), 2));
                              let Ln = () => l(mr)[0], yr = () => l(mr)[1];
                              var pn = hp(), mn = Y(pn), _r = {};
                              oe(() => {
                                we(mn, yr()), _r !== (_r = Ln()) && (pn.value = (pn.__value = Ln()) ?? "");
                              }), H(wt, pn);
                            }), H(ke, ue);
                          };
                          se(he, (ke) => {
                            l(x).options && ke(_e);
                          });
                        }
                        oe(() => {
                          G(Ee, "list", `list-${l(x).name ?? ""}`), G(Ee, "id", `field-${l(x).name ?? ""}`), G(Ee, "placeholder", l(x).placeholder), xr(Ee, n().data.config?.[l(x).name] || ""), G(ze, "id", `list-${l(x).name ?? ""}`);
                        }), H(be, xe);
                      }, ie = (be) => {
                        var xe = pp();
                        xe.__change = (ue) => c(l(x).name, ue.target.value);
                        var Ee = Y(xe), ze = Y(Ee);
                        Ee.value = Ee.__value = "";
                        var he = q(Ee);
                        {
                          var _e = (ue) => {
                            var $e = pe(), wt = ae($e);
                            rt(wt, 17, () => Object.entries(l(x).options), Jt, (bt, mr) => {
                              var Ln = /* @__PURE__ */ _(() => rn(l(mr), 2));
                              let yr = () => l(Ln)[0], pn = () => l(Ln)[1];
                              var mn = vp(), _r = Y(mn), Oi = {};
                              oe(() => {
                                we(_r, pn()), Oi !== (Oi = yr()) && (mn.value = (mn.__value = yr()) ?? "");
                              }), H(bt, mn);
                            }), H(ue, $e);
                          };
                          se(he, (ue) => {
                            l(x).options && ue(_e);
                          });
                        }
                        var ke;
                        Fo(xe), oe(() => {
                          G(xe, "id", `field-${l(x).name ?? ""}`), we(ze, l(x).placeholder || "Select an option..."), ke !== (ke = n().data.config?.[l(x).name] || "") && (xe.value = (xe.__value = n().data.config?.[l(x).name] || "") ?? "", jn(xe, n().data.config?.[l(x).name] || ""));
                        }), H(be, xe);
                      };
                      se(te, (be) => {
                        l(x).type === "searchable-select" ? be(me) : be(ie, !1);
                      });
                    }
                    H(le, ge);
                  }, ee = (le) => {
                    var ge = mp();
                    ge.__input = (te) => c(l(x).name, te.target.value), oe(() => {
                      G(ge, "id", `field-${l(x).name ?? ""}`), G(ge, "type", l(x).type), G(ge, "placeholder", l(x).placeholder), xr(ge, n().data.config?.[l(x).name] || "");
                    }), H(le, ge);
                  };
                  se(
                    j,
                    (le) => {
                      l(x).type === "select" || l(x).type === "searchable-select" ? le(Q) : le(ee, !1);
                    },
                    !0
                  );
                }
                H(K, U);
              };
              se(F, (K) => {
                l(x).type === "textarea" ? K(X) : K(W, !1);
              });
            }
            oe(() => {
              G(D, "for", `field-${l(x).name ?? ""}`), we(O, `${l(x).label ?? ""} `);
            }), H(y, k);
          }), H(P, E);
        };
        se(T, (P) => {
          l(s) && l(s).schema && l(s).schema.length > 0 && P(z);
        });
      }
      var M = q(m, 2), B = Y(M), Z = Y(B);
      oe(() => {
        xr(C, n().data.label), we(Z, `ID: ${n().id ?? ""}`);
      }), hu(3, g, () => lp, () => ({ axis: "x" })), H(f, g);
    };
    se(d, (f) => {
      n() && f(h);
    });
  }
  H(e, u), re();
}
so(["click", "input", "change"]);
var xp = /* @__PURE__ */ J('<p class="text-[10px] leading-relaxed text-slate-500 mb-2 italic"> </p>'), Ep = /* @__PURE__ */ J('<div class="relative w-3 h-3" role="presentation"><!></div>'), kp = /* @__PURE__ */ J('<div class="relative w-3 h-3" role="presentation"><!></div>'), Sp = /* @__PURE__ */ J('<div class="relative group" role="presentation"><div><div><span class="text-white"><!></span> <span class="text-[10px] font-bold uppercase tracking-wider text-white"> </span></div> <div><!> <div><!></div></div></div> <div class="absolute -left-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div> <div class="absolute -right-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div></div>');
function zi(e, t) {
  ne(t, !0);
  let n = V(t, "type", 3, "default"), r = V(t, "inputs", 19, () => []), o = V(t, "outputs", 19, () => []);
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
  }, s = /* @__PURE__ */ _(() => i[n()] || i.default);
  var a = Sp(), c = Y(a), u = Y(c), d = Y(u), h = Y(d);
  Ma(h, () => l(s).icon);
  var f = q(d, 2), g = Y(f), v = q(u, 2), p = Y(v);
  {
    var m = (A) => {
      var T = xp(), z = Y(T);
      oe(() => we(z, t.data.description)), H(A, T);
    };
    se(p, (A) => {
      t.data.description && A(m);
    });
  }
  var w = q(p, 2), S = Y(w);
  Fe(S, () => t.children ?? Ye);
  var C = q(c, 2);
  rt(C, 21, r, Jt, (A, T) => {
    var z = Ep(), M = Y(z);
    Yt(M, {
      type: "target",
      get position() {
        return $.Left;
      },
      get id() {
        return l(T).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
    }), H(A, z);
  });
  var b = q(C, 2);
  rt(b, 21, o, Jt, (A, T) => {
    var z = kp(), M = Y(z);
    Yt(M, {
      type: "source",
      get position() {
        return $.Right;
      },
      get id() {
        return l(T).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
    }), H(A, z);
  }), oe(() => {
    Ve(c, 1, `min-w-[180px] max-w-[240px] bg-white rounded-xl shadow-sm border ${l(s).border ?? ""} overflow-hidden transition-all duration-200 ${t.selected ? "ring-2 ring-blue-500 ring-offset-2" : "hover:shadow-md"}`), Ve(u, 1, `${l(s).header ?? ""} px-3 py-1.5 flex items-center gap-2`), we(g, t.data.label || "Node"), Ve(v, 1, `p-3 ${l(s).bg ?? ""}`), Ve(w, 1, `text-xs font-medium ${l(s).text ?? ""}`);
  }), H(e, a), re();
}
var Cp = /* @__PURE__ */ J('<div class="px-2 py-1 bg-amber-100/50 rounded border border-amber-200 text-[10px] break-all font-mono"> </div>');
function Np(e, t) {
  ne(t, !0);
  const n = [{ id: "output" }];
  zi(e, {
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
      var i = pe(), s = ae(i);
      {
        var a = (c) => {
          var u = Cp(), d = Y(u);
          oe((h) => we(d, h), [() => t.data.event.split("\\").pop()]), H(c, u);
        };
        se(s, (c) => {
          t.data.event && c(a);
        });
      }
      H(r, i);
    },
    $$slots: { default: !0 }
  }), re();
}
var Pp = /* @__PURE__ */ J('<div class="flex items-center gap-2 px-2 py-1 bg-blue-100/50 rounded border border-blue-200 text-[10px] font-semibold"><span>⚡</span> </div>');
function Mp(e, t) {
  ne(t, !0);
  const n = [{ id: "input" }], r = [{ id: "output" }];
  zi(e, {
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
      var s = pe(), a = ae(s);
      {
        var c = (u) => {
          var d = Pp(), h = q(Y(d));
          oe(() => we(h, ` ${t.data.action ?? ""}`)), H(u, d);
        };
        se(a, (u) => {
          t.data.action && u(c);
        });
      }
      H(o, s);
    },
    $$slots: { default: !0 }
  }), re();
}
var Ap = /* @__PURE__ */ J('<div class="px-2 py-1 bg-purple-100/50 rounded border border-purple-200 text-[10px] font-mono mb-6"> </div>'), Tp = /* @__PURE__ */ J('<!> <div class="absolute -right-1.5 top-[60px] flex flex-col gap-6"><div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-emerald-600 mr-2 uppercase">True</span> <!></div> <div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-rose-600 mr-2 uppercase">False</span> <!></div></div>', 1), Dp = /* @__PURE__ */ J('<div class="relative"><!></div>');
function Ip(e, t) {
  ne(t, !0);
  const n = [{ id: "input" }];
  var r = Dp(), o = Y(r);
  zi(o, {
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
      var a = Tp(), c = ae(a);
      {
        var u = (p) => {
          var m = Ap(), w = Y(m);
          oe(() => we(w, t.data.condition)), H(p, m);
        };
        se(c, (p) => {
          t.data.condition && p(u);
        });
      }
      var d = q(c, 2), h = Y(d), f = q(Y(h), 2);
      Yt(f, {
        type: "source",
        get position() {
          return $.Right;
        },
        id: "true",
        class: "!w-3 !h-3 !bg-emerald-500 !border-2 !border-white"
      });
      var g = q(h, 2), v = q(Y(g), 2);
      Yt(v, {
        type: "source",
        get position() {
          return $.Right;
        },
        id: "false",
        class: "!w-3 !h-3 !bg-rose-500 !border-2 !border-white"
      }), H(i, a);
    },
    $$slots: { default: !0 }
  }), H(e, r), re();
}
var zp = /* @__PURE__ */ J('<div class="flex h-full w-full overflow-hidden"><!> <!></div>');
function Op(e, t) {
  ne(t, !0);
  const n = {
    trigger: Np,
    action: Mp,
    condition: Ip
  };
  let r = V(t, "nodes", 19, () => []), o = V(t, "edges", 19, () => []), i = V(t, "availableComponents", 19, () => ({})), s = /* @__PURE__ */ de([]), a = /* @__PURE__ */ de([]), c = /* @__PURE__ */ de(null), u = /* @__PURE__ */ _(() => l(s).find((f) => f.id === l(c)));
  function d(f, g) {
    L(c, g.id, !0);
  }
  function h() {
    L(c, null);
  }
  st(() => {
    t.updateState && t.updateState({
      nodes: JSON.parse(JSON.stringify(l(s))),
      edges: JSON.parse(JSON.stringify(l(a)))
    });
  }), ui(() => {
    l(s).length === 0 && L(s, r().length > 0 ? r() : [
      {
        id: "trigger-1",
        type: "trigger",
        position: { x: 50, y: 50 },
        data: {
          label: "User Registered",
          event: "App\\Events\\UserRegistered",
          description: "Triggers when a new user signs up."
        }
      },
      {
        id: "condition-1",
        type: "condition",
        position: { x: 300, y: 50 },
        data: {
          label: "Check Email",
          condition: "user.email_verified_at != null",
          description: "Check if email is verified."
        }
      },
      {
        id: "action-1",
        type: "action",
        position: { x: 550, y: 0 },
        data: {
          label: "Send Welcome Email",
          action: "SendMail",
          description: "Send the official welcome package."
        }
      },
      {
        id: "action-2",
        type: "action",
        position: { x: 550, y: 150 },
        data: {
          label: "Log Unverified",
          action: "LogMessage",
          description: "Log a warning about unverified user."
        }
      }
    ]), l(a).length === 0 && L(a, o().length > 0 ? o() : [
      { id: "e1-2", source: "trigger-1", target: "condition-1" },
      {
        id: "e2-3",
        source: "condition-1",
        sourceHandle: "true",
        target: "action-1"
      },
      {
        id: "e2-4",
        source: "condition-1",
        sourceHandle: "false",
        target: "action-2"
      }
    ]);
  }), C0(e, {
    children: (f, g) => {
      var v = zp(), p = Y(v);
      sp(p, {
        get nodeTypes() {
          return n;
        },
        onNodeClick: d,
        get nodes() {
          return l(s);
        },
        set nodes(S) {
          L(s, S);
        },
        get edges() {
          return l(a);
        },
        set edges(S) {
          L(a, S);
        }
      });
      var m = q(p, 2);
      {
        var w = (S) => {
          bp(S, {
            get availableComponents() {
              return i();
            },
            onClose: h,
            get node() {
              return l(s)[l(s).findIndex((C) => C.id === l(c))];
            },
            set node(C) {
              l(s)[l(s).findIndex((b) => b.id === l(c))] = C;
            }
          });
        };
        se(m, (S) => {
          l(u) && S(w);
        });
      }
      H(f, v);
    },
    $$slots: { default: !0 }
  }), re();
}
const Rs = () => {
  window.Alpine.data("flowBuilder", ({ state: e, components: t }) => ({
    state: e,
    components: t,
    init() {
      const n = Array.isArray(this.state?.nodes) ? JSON.parse(JSON.stringify(this.state.nodes)) : [], r = Array.isArray(this.state?.edges) ? JSON.parse(JSON.stringify(this.state.edges)) : [];
      nu(Op, {
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
window.Alpine ? Rs() : document.addEventListener("alpine:init", Rs);
