var Vr = Array.isArray, xl = Array.prototype.indexOf, Br = Array.from, El = Object.defineProperty, It = Object.getOwnPropertyDescriptor, ys = Object.getOwnPropertyDescriptors, _s = Object.prototype, Sl = Array.prototype, Fr = Object.getPrototypeOf, yi = Object.isExtensible;
function Pn(e) {
  return typeof e == "function";
}
const Sn = () => {
};
function kl(e) {
  return e();
}
function vo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ws() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Ce(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function qn(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const xe = 2, Ho = 4, Kr = 8, bs = 1 << 24, bt = 16, xt = 32, Ht = 64, Yr = 128, Qe = 512, Ee = 1024, He = 2048, ot = 4096, Re = 8192, mt = 16384, Lo = 32768, Rt = 65536, _i = 1 << 17, xs = 1 << 18, tn = 1 << 19, Es = 1 << 20, gt = 1 << 25, Gt = 32768, po = 1 << 21, Vo = 1 << 22, Tt = 1 << 23, nt = /* @__PURE__ */ Symbol("$state"), Ss = /* @__PURE__ */ Symbol("legacy props"), Cl = /* @__PURE__ */ Symbol(""), ln = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Bo(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Nl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Pl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ml() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Al(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Il() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Tl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Dl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function zl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ol() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Rl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Hl = 1, Ll = 2, ks = 4, Vl = 8, Bl = 16, Fl = 1, Kl = 2, Yl = 4, Zl = 8, Xl = 16, Cs = 1, Wl = 2, be = /* @__PURE__ */ Symbol(), ql = "http://www.w3.org/1999/xhtml", Gl = "@attach";
function Ul() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ql() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ns(e) {
  return e === this.v;
}
function Ps(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ms(e) {
  return !Ps(e, this.v);
}
let kn = !1;
function Jl() {
  kn = !0;
}
const jl = [];
function As(e, t = !1, n = !1) {
  return pr(e, /* @__PURE__ */ new Map(), "", jl, null, n);
}
function pr(e, t, n, r, o = null, i = !1) {
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
    if (Vr(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var c = e[l];
        l in e && (a[l] = pr(c, t, n, r, null, i));
      }
      return a;
    }
    if (Fr(e) === _s) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var f in e)
        a[f] = pr(
          // @ts-expect-error
          e[f],
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
      return pr(
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
let ue = null;
function gn(e) {
  ue = e;
}
function Fo(e) {
  return (
    /** @type {T} */
    Ko().get(e)
  );
}
function Is(e, t) {
  return Ko().set(e, t), t;
}
function $l(e) {
  return Ko().has(e);
}
function te(e, t = !1, n) {
  ue = {
    p: ue,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: kn && !t ? { s: null, u: null, $: [] } : null
  };
}
function ne(e) {
  var t = (
    /** @type {ComponentContext} */
    ue
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Ws(r);
  }
  return t.i = !0, ue = t.p, /** @type {T} */
  {};
}
function Gn() {
  return !kn || ue !== null && ue.l === null;
}
function Ko(e) {
  return ue === null && Bo(), ue.c ??= new Map(ec(ue) || void 0);
}
function ec(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let cn = [];
function tc() {
  var e = cn;
  cn = [], vo(e);
}
function nn(e) {
  if (cn.length === 0) {
    var t = cn;
    queueMicrotask(() => {
      t === cn && tc();
    });
  }
  cn.push(e);
}
function Ts(e) {
  var t = oe;
  if (t === null)
    return ee.f |= Tt, e;
  if ((t.f & Lo) === 0) {
    if ((t.f & Yr) === 0)
      throw e;
    t.b.error(e);
  } else
    vn(e, t);
}
function vn(e, t) {
  for (; t !== null; ) {
    if ((t.f & Yr) !== 0)
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
const ar = /* @__PURE__ */ new Set();
let ge = null, Fe = null, $e = [], Yo = null, mo = !1;
class Ge {
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
    $e = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (ge = null, wi(n.render_effects), wi(n.effects), this.#l?.resolve()), Fe = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(t, n) {
    t.f ^= Ee;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (xt | Ht)) !== 0, s = i && (o & Ee) !== 0, a = s || (o & Re) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Yr) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Ee : (o & Ho) !== 0 ? n.effects.push(r) : $n(r) && ((r.f & bt) !== 0 && this.#i.add(r), Vn(r));
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
      (n.f & He) !== 0 ? this.#i.add(n) : (n.f & ot) !== 0 && this.#o.add(n), this.#c(n.deps), ke(n, Ee);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & xe) === 0 || (n.f & Gt) === 0 || (n.f ^= Gt, this.#c(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Tt) === 0 && (this.current.set(t, t.v), Fe?.set(t, t.v));
  }
  activate() {
    ge = this, this.apply();
  }
  deactivate() {
    ge === this && (ge = null, Fe = null);
  }
  flush() {
    if (this.activate(), $e.length > 0) {
      if (nc(), ge !== null && ge !== this)
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
    this.#n === 0 && this.#f();
  }
  #f() {
    if (ar.size > 1) {
      this.previous.clear();
      var t = Fe, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of ar) {
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
          var o = $e;
          $e = [];
          const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const f of s)
            Ds(f, a, l, c);
          if ($e.length > 0) {
            ge = i, i.apply();
            for (const f of $e)
              i.#s(f, r);
            i.deactivate();
          }
          $e = o;
        }
      }
      ge = null, Fe = t;
    }
    this.committed = !0, ar.delete(this);
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
      this.#o.delete(t), ke(t, He), Ut(t);
    for (const t of this.#o)
      ke(t, ot), Ut(t);
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
    return (this.#l ??= ws()).promise;
  }
  static ensure() {
    if (ge === null) {
      const t = ge = new Ge();
      ar.add(ge), Ge.enqueue(() => {
        ge === t && t.flush();
      });
    }
    return ge;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    nn(t);
  }
  apply() {
  }
}
function nc() {
  var e = Xt;
  mo = !0;
  var t = null;
  try {
    var n = 0;
    for (Er(!0); $e.length > 0; ) {
      var r = Ge.ensure();
      if (n++ > 1e3) {
        var o, i;
        rc();
      }
      r.process($e), Dt.clear();
    }
  } finally {
    mo = !1, Er(e), Yo = null;
  }
}
function rc() {
  try {
    Il();
  } catch (e) {
    vn(e, Yo);
  }
}
let ft = null;
function wi(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (mt | Re)) === 0 && $n(r) && (ft = /* @__PURE__ */ new Set(), Vn(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? Js(r) : r.fn = null), ft?.size > 0)) {
        Dt.clear();
        for (const o of ft) {
          if ((o.f & (mt | Re)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            ft.has(s) && (ft.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (mt | Re)) === 0 && Vn(l);
          }
        }
        ft.clear();
      }
    }
    ft = null;
  }
}
function Ds(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & xe) !== 0 ? Ds(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Vo | bt)) !== 0 && (i & He) === 0 && zs(o, t, r) && (ke(o, He), Ut(
        /** @type {Effect} */
        o
      ));
    }
}
function zs(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & xe) !== 0 && zs(
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
function Ut(e) {
  for (var t = Yo = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (mo && t === oe && (n & bt) !== 0 && (n & xs) === 0)
      return;
    if ((n & (Ht | xt)) !== 0) {
      if ((n & Ee) === 0) return;
      t.f ^= Ee;
    }
  }
  $e.push(t);
}
function Os(e) {
  let t = 0, n = Qt(0), r;
  return () => {
    Hn() && (u(n), Zr(() => (t === 0 && (r = Oe(() => e(() => On(n)))), t += 1, () => {
      nn(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, On(n));
      });
    })));
  };
}
var oc = Rt | tn | Yr;
function ic(e, t, n) {
  new sc(e, t, n);
}
class sc {
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
  #f = 0;
  #d = 0;
  #g = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #h = null;
  #_ = Os(() => (this.#h = Qt(this.#f), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    oe.b, this.#e = !!this.#r.pending, this.#i = jn(() => {
      oe.b = this;
      {
        var o = this.#m();
        try {
          this.#o = Ie(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#d > 0 ? this.#p() : this.#e = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, oc);
  }
  #w() {
    try {
      this.#o = Ie(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #b() {
    const t = this.#r.pending;
    t && (this.#s = Ie(() => t(this.#t)), Ge.enqueue(() => {
      var n = this.#m();
      this.#o = this.#v(() => (Ge.ensure(), Ie(() => this.#l(n)))), this.#d > 0 ? this.#p() : (Zt(
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
    return this.#e && (this.#u = yt(), this.#t.before(this.#u), t = this.#u), t;
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
    var n = oe, r = ee, o = ue;
    st(this.#i), Te(this.#i), gn(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return Ts(i), null;
    } finally {
      st(n), Te(r), gn(o);
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
    ), ea(this.#o, this.#c)), this.#s === null && (this.#s = Ie(() => t(this.#t)));
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
    this.#d += t, this.#d === 0 && (this.#e = !1, this.#s && Zt(this.#s, () => {
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
    this.#y(t), this.#f += t, this.#h && pn(this.#h, this.#f);
  }
  get_effect_pending() {
    return this.#_(), u(
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
        Ql();
        return;
      }
      o = !0, i && Rl(), Ge.ensure(), this.#f = 0, this.#a !== null && Zt(this.#a, () => {
        this.#a = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#v(() => (this.#g = !1, Ie(() => this.#l(this.#t)))), this.#d > 0 ? this.#p() : this.#e = !1;
    };
    var a = ee;
    try {
      Te(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      vn(l, this.#i && this.#i.parent);
    } finally {
      Te(a);
    }
    r && nn(() => {
      this.#a = this.#v(() => {
        Ge.ensure(), this.#g = !0;
        try {
          return Ie(() => {
            r(
              this.#t,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return vn(
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
function Rs(e, t, n, r) {
  const o = Gn() ? Un : Zo;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = ge, s = (
    /** @type {Effect} */
    oe
  ), a = ac();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ lc(c))).then((c) => {
      a();
      try {
        r([...t.map(o), ...c]);
      } catch (f) {
        (s.f & mt) === 0 && vn(f, s);
      }
      i?.deactivate(), xr();
    }).catch((c) => {
      vn(c, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), xr();
    }
  }) : l();
}
function ac() {
  var e = oe, t = ee, n = ue, r = ge;
  return function(i = !0) {
    st(e), Te(t), gn(n), i && r?.activate();
  };
}
function xr() {
  st(null), Te(null), gn(null);
}
// @__NO_SIDE_EFFECTS__
function Un(e) {
  var t = xe | He, n = ee !== null && (ee.f & xe) !== 0 ? (
    /** @type {Derived} */
    ee
  ) : null;
  return oe !== null && (oe.f |= tn), {
    ctx: ue,
    deps: null,
    effects: null,
    equals: Ns,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      be
    ),
    wv: 0,
    parent: n ?? oe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function lc(e, t) {
  let n = (
    /** @type {Effect | null} */
    oe
  );
  n === null && Nl();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Qt(
    /** @type {V} */
    be
  ), s = !ee, a = /* @__PURE__ */ new Map();
  return yc(() => {
    var l = ws();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        c === ge && c.committed && c.deactivate(), xr();
      });
    } catch (d) {
      l.reject(d), xr();
    }
    var c = (
      /** @type {Batch} */
      ge
    );
    if (s) {
      var f = !r.is_pending();
      r.update_pending_count(1), c.increment(f), a.get(c)?.reject(ln), a.delete(c), a.set(c, l);
    }
    const h = (d, g = void 0) => {
      if (c.activate(), g)
        g !== ln && (i.f |= Tt, pn(i, g));
      else {
        (i.f & Tt) !== 0 && (i.f ^= Tt), pn(i, d);
        for (const [v, _] of a) {
          if (a.delete(v), v === c) break;
          _.reject(ln);
        }
      }
      s && (r.update_pending_count(-1), c.decrement(f));
    };
    l.promise.then(h, (d) => h(null, d || "unknown"));
  }), qo(() => {
    for (const l of a.values())
      l.reject(ln);
  }), new Promise((l) => {
    function c(f) {
      function h() {
        f === o ? l(i) : c(o);
      }
      f.then(h, h);
    }
    c(o);
  });
}
// @__NO_SIDE_EFFECTS__
function m(e) {
  const t = /* @__PURE__ */ Un(e);
  return ta(t), t;
}
// @__NO_SIDE_EFFECTS__
function Zo(e) {
  const t = /* @__PURE__ */ Un(e);
  return t.equals = Ms, t;
}
function Hs(e) {
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
function cc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & xe) === 0)
      return (t.f & mt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Xo(e) {
  var t, n = oe;
  st(cc(e));
  try {
    e.f &= ~Gt, Hs(e), t = ia(e);
  } finally {
    st(n);
  }
  return t;
}
function Ls(e) {
  var t = Xo(e);
  if (e.equals(t) || (ge?.is_fork || (e.v = t), e.wv = ra()), !rn)
    if (Fe !== null)
      (Hn() || ge?.is_fork) && Fe.set(e, t);
    else {
      var n = (e.f & Qe) === 0 ? ot : Ee;
      ke(e, n);
    }
}
let yo = /* @__PURE__ */ new Set();
const Dt = /* @__PURE__ */ new Map();
let Vs = !1;
function Qt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ns,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  const n = Qt(e);
  return ta(n), n;
}
// @__NO_SIDE_EFFECTS__
function uc(e, t = !1, n = !0) {
  const r = Qt(e);
  return t || (r.equals = Ms), kn && n && ue !== null && ue.l !== null && (ue.l.s ??= []).push(r), r;
}
function O(e, t, n = !1) {
  ee !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!tt || (ee.f & _i) !== 0) && Gn() && (ee.f & (xe | bt | Vo | _i)) !== 0 && !_t?.includes(e) && Ol();
  let r = n ? At(t) : t;
  return pn(e, r);
}
function pn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    rn ? Dt.set(e, t) : Dt.set(e, n), e.v = t;
    var r = Ge.ensure();
    r.capture(e, n), (e.f & xe) !== 0 && ((e.f & He) !== 0 && Xo(
      /** @type {Derived} */
      e
    ), ke(e, (e.f & Qe) !== 0 ? Ee : ot)), e.wv = ra(), Bs(e, He), Gn() && oe !== null && (oe.f & Ee) !== 0 && (oe.f & (xt | Ht)) === 0 && (Be === null ? bc([e]) : Be.push(e)), !r.is_fork && yo.size > 0 && !Vs && fc();
  }
  return t;
}
function fc() {
  Vs = !1;
  var e = Xt;
  Er(!0);
  const t = Array.from(yo);
  try {
    for (const n of t)
      (n.f & Ee) !== 0 && ke(n, ot), $n(n) && Vn(n);
  } finally {
    Er(e);
  }
  yo.clear();
}
function On(e) {
  O(e, e.v + 1);
}
function Bs(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Gn(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === oe)) {
        var l = (a & He) === 0;
        if (l && ke(s, t), (a & xe) !== 0) {
          var c = (
            /** @type {Derived} */
            s
          );
          Fe?.delete(c), (a & Gt) === 0 && (a & Qe && (s.f |= Gt), Bs(c, ot));
        } else l && ((a & bt) !== 0 && ft !== null && ft.add(
          /** @type {Effect} */
          s
        ), Ut(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function At(e) {
  if (typeof e != "object" || e === null || nt in e)
    return e;
  const t = Fr(e);
  if (t !== _s && t !== Sl)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Vr(e), o = /* @__PURE__ */ re(0), i = Wt, s = (a) => {
    if (Wt === i)
      return a();
    var l = ee, c = Wt;
    Te(null), Ei(i);
    var f = a();
    return Te(l), Ei(c), f;
  };
  return r && n.set("length", /* @__PURE__ */ re(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Dl();
        var f = n.get(l);
        return f === void 0 ? f = s(() => {
          var h = /* @__PURE__ */ re(c.value);
          return n.set(l, h), h;
        }) : O(f, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ re(be));
            n.set(l, f), On(o);
          }
        } else
          O(c, be), On(o);
        return !0;
      },
      get(a, l, c) {
        if (l === nt)
          return e;
        var f = n.get(l), h = l in a;
        if (f === void 0 && (!h || It(a, l)?.writable) && (f = s(() => {
          var g = At(h ? a[l] : be), v = /* @__PURE__ */ re(g);
          return v;
        }), n.set(l, f)), f !== void 0) {
          var d = u(f);
          return d === be ? void 0 : d;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var f = n.get(l);
          f && (c.value = u(f));
        } else if (c === void 0) {
          var h = n.get(l), d = h?.v;
          if (h !== void 0 && d !== be)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return c;
      },
      has(a, l) {
        if (l === nt)
          return !0;
        var c = n.get(l), f = c !== void 0 && c.v !== be || Reflect.has(a, l);
        if (c !== void 0 || oe !== null && (!f || It(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var d = f ? At(a[l]) : be, g = /* @__PURE__ */ re(d);
            return g;
          }), n.set(l, c));
          var h = u(c);
          if (h === be)
            return !1;
        }
        return f;
      },
      set(a, l, c, f) {
        var h = n.get(l), d = l in a;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var v = n.get(g + "");
            v !== void 0 ? O(v, be) : g in a && (v = s(() => /* @__PURE__ */ re(be)), n.set(g + "", v));
          }
        if (h === void 0)
          (!d || It(a, l)?.writable) && (h = s(() => /* @__PURE__ */ re(void 0)), O(h, At(c)), n.set(l, h));
        else {
          d = h.v !== be;
          var _ = s(() => At(c));
          O(h, _);
        }
        var y = Reflect.getOwnPropertyDescriptor(a, l);
        if (y?.set && y.set.call(f, c), !d) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= b.v && O(b, C + 1);
          }
          On(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var d = n.get(h);
          return d === void 0 || d.v !== be;
        });
        for (var [c, f] of n)
          f.v !== be && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        zl();
      }
    }
  );
}
function bi(e) {
  try {
    if (e !== null && typeof e == "object" && nt in e)
      return e[nt];
  } catch {
  }
  return e;
}
function dc(e, t) {
  return Object.is(bi(e), bi(t));
}
var Ae, Fs, Ks, Ys;
function hc() {
  if (Ae === void 0) {
    Ae = window, Fs = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Ks = It(t, "firstChild").get, Ys = It(t, "nextSibling").get, yi(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), yi(n) && (n.__t = void 0);
  }
}
function yt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ks.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  return (
    /** @type {TemplateNode | null} */
    Ys.call(e)
  );
}
function fe(e, t) {
  return /* @__PURE__ */ dt(e);
}
function se(e, t = !1) {
  {
    var n = /* @__PURE__ */ dt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Qn(n) : n;
  }
}
function ie(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Qn(r);
  return r;
}
function gc(e) {
  e.textContent = "";
}
function Zs() {
  return !1;
}
function vc(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, nn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Wo(e) {
  var t = ee, n = oe;
  Te(null), st(null);
  try {
    return e();
  } finally {
    Te(t), st(n);
  }
}
function Xs(e) {
  oe === null && (ee === null && Al(), Ml()), rn && Pl();
}
function pc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ze(e, t, n) {
  var r = oe;
  r !== null && (r.f & Re) !== 0 && (e |= Re);
  var o = {
    ctx: ue,
    deps: null,
    nodes: null,
    f: e | He | Qe,
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
      Vn(o), o.f |= Lo;
    } catch (a) {
      throw _e(o), a;
    }
  else t !== null && Ut(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & tn) === 0 && (i = i.first, (e & bt) !== 0 && (e & Rt) !== 0 && i !== null && (i.f |= Rt)), i !== null && (i.parent = r, r !== null && pc(i, r), ee !== null && (ee.f & xe) !== 0 && (e & Ht) === 0)) {
    var s = (
      /** @type {Derived} */
      ee
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Hn() {
  return ee !== null && !tt;
}
function qo(e) {
  const t = Ze(Kr, null, !1);
  return ke(t, Ee), t.teardown = e, t;
}
function it(e) {
  Xs();
  var t = (
    /** @type {Effect} */
    oe.f
  ), n = !ee && (t & xt) !== 0 && (t & Lo) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ue
    );
    (r.e ??= []).push(e);
  } else
    return Ws(e);
}
function Ws(e) {
  return Ze(Ho | Es, e, !1);
}
function Go(e) {
  return Xs(), Ze(Kr | Es, e, !0);
}
function qs(e) {
  Ge.ensure();
  const t = Ze(Ht | tn, e, !0);
  return () => {
    _e(t);
  };
}
function mc(e) {
  Ge.ensure();
  const t = Ze(Ht | tn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Zt(t, () => {
      _e(t), r(void 0);
    }) : (_e(t), r(void 0));
  });
}
function Jn(e) {
  return Ze(Ho, e, !1);
}
function yc(e) {
  return Ze(Vo | tn, e, !0);
}
function Zr(e, t = 0) {
  return Ze(Kr | t, e, !0);
}
function ve(e, t = [], n = [], r = []) {
  Rs(r, t, n, (o) => {
    Ze(Kr, () => e(...o.map(u)), !0);
  });
}
function jn(e, t = 0) {
  var n = Ze(bt | t, e, !0);
  return n;
}
function Gs(e, t = 0) {
  var n = Ze(bs | t, e, !0);
  return n;
}
function Ie(e) {
  return Ze(xt | tn, e, !0);
}
function Us(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = rn, r = ee;
    xi(!0), Te(null);
    try {
      t.call(null);
    } finally {
      xi(n), Te(r);
    }
  }
}
function Qs(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Wo(() => {
      o.abort(ln);
    });
    var r = n.next;
    (n.f & Ht) !== 0 ? n.parent = null : _e(n, t), n = r;
  }
}
function _c(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & xt) === 0 && _e(t), t = n;
  }
}
function _e(e, t = !0) {
  var n = !1;
  (t || (e.f & xs) !== 0) && e.nodes !== null && e.nodes.end !== null && (wc(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Qs(e, t && !n), Sr(e, 0), ke(e, mt);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  Us(e);
  var o = e.parent;
  o !== null && o.first !== null && Js(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function wc(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Qn(e);
    e.remove(), e = n;
  }
}
function Js(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Zt(e, t, n = !0) {
  var r = [];
  js(e, r, !0);
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
function js(e, t, n) {
  if ((e.f & Re) === 0) {
    e.f ^= Re;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var o = e.first; o !== null; ) {
      var i = o.next, s = (o.f & Rt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & xt) !== 0 && (e.f & bt) !== 0;
      js(o, t, s ? n : !1), o = i;
    }
  }
}
function Uo(e) {
  $s(e, !0);
}
function $s(e, t) {
  if ((e.f & Re) !== 0) {
    e.f ^= Re, (e.f & Ee) === 0 && (ke(e, He), Ut(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rt) !== 0 || (n.f & xt) !== 0;
      $s(n, o ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || t) && s.in();
  }
}
function ea(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var o = n === r ? null : /* @__PURE__ */ Qn(n);
      t.append(n), n = o;
    }
}
let Xt = !1;
function Er(e) {
  Xt = e;
}
let rn = !1;
function xi(e) {
  rn = e;
}
let ee = null, tt = !1;
function Te(e) {
  ee = e;
}
let oe = null;
function st(e) {
  oe = e;
}
let _t = null;
function ta(e) {
  ee !== null && (_t === null ? _t = [e] : _t.push(e));
}
let Pe = null, ze = 0, Be = null;
function bc(e) {
  Be = e;
}
let na = 1, Ln = 0, Wt = Ln;
function Ei(e) {
  Wt = e;
}
function ra() {
  return ++na;
}
function $n(e) {
  var t = e.f;
  if ((t & He) !== 0)
    return !0;
  if (t & xe && (e.f &= ~Gt), (t & ot) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if ($n(
          /** @type {Derived} */
          i
        ) && Ls(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & Qe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Fe === null && ke(e, Ee);
  }
  return !1;
}
function oa(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !_t?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & xe) !== 0 ? oa(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? ke(i, He) : (i.f & Ee) !== 0 && ke(i, ot), Ut(
        /** @type {Effect} */
        i
      ));
    }
}
function ia(e) {
  var t = Pe, n = ze, r = Be, o = ee, i = _t, s = ue, a = tt, l = Wt, c = e.f;
  Pe = /** @type {null | Value[]} */
  null, ze = 0, Be = null, ee = (c & (xt | Ht)) === 0 ? e : null, _t = null, gn(e.ctx), tt = !1, Wt = ++Ln, e.ac !== null && (Wo(() => {
    e.ac.abort(ln);
  }), e.ac = null);
  try {
    e.f |= po;
    var f = (
      /** @type {Function} */
      e.fn
    ), h = f(), d = e.deps;
    if (Pe !== null) {
      var g;
      if (Sr(e, ze), d !== null && ze > 0)
        for (d.length = ze + Pe.length, g = 0; g < Pe.length; g++)
          d[ze + g] = Pe[g];
      else
        e.deps = d = Pe;
      if (Hn() && (e.f & Qe) !== 0)
        for (g = ze; g < d.length; g++)
          (d[g].reactions ??= []).push(e);
    } else d !== null && ze < d.length && (Sr(e, ze), d.length = ze);
    if (Gn() && Be !== null && !tt && d !== null && (e.f & (xe | ot | He)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Be.length; g++)
        oa(
          Be[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Ln++, Be !== null && (r === null ? r = Be : r.push(.../** @type {Source[]} */
    Be))), (e.f & Tt) !== 0 && (e.f ^= Tt), h;
  } catch (v) {
    return Ts(v);
  } finally {
    e.f ^= po, Pe = t, ze = n, Be = r, ee = o, _t = i, gn(s), tt = a, Wt = l;
  }
}
function xc(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = xl.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & xe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Pe === null || !Pe.includes(t)) && (ke(t, ot), (t.f & Qe) !== 0 && (t.f ^= Qe, t.f &= ~Gt), Hs(
    /** @type {Derived} **/
    t
  ), Sr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Sr(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      xc(e, n[r]);
}
function Vn(e) {
  var t = e.f;
  if ((t & mt) === 0) {
    ke(e, Ee);
    var n = oe, r = Xt;
    oe = e, Xt = !0;
    try {
      (t & (bt | bs)) !== 0 ? _c(e) : Qs(e), Us(e);
      var o = ia(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = na;
      var i;
    } finally {
      Xt = r, oe = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & xe) !== 0;
  if (ee !== null && !tt) {
    var r = oe !== null && (oe.f & mt) !== 0;
    if (!r && !_t?.includes(e)) {
      var o = ee.deps;
      if ((ee.f & po) !== 0)
        e.rv < Ln && (e.rv = Ln, Pe === null && o !== null && o[ze] === e ? ze++ : Pe === null ? Pe = [e] : Pe.includes(e) || Pe.push(e));
      else {
        (ee.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [ee] : i.includes(ee) || i.push(ee);
      }
    }
  }
  if (rn) {
    if (Dt.has(e))
      return Dt.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & Ee) === 0 && s.reactions !== null || aa(s)) && (a = Xo(s)), Dt.set(s, a), a;
    }
  } else n && (!Fe?.has(e) || ge?.is_fork && !Hn()) && (s = /** @type {Derived} */
  e, $n(s) && Ls(s), Xt && Hn() && (s.f & Qe) === 0 && sa(s));
  if (Fe?.has(e))
    return Fe.get(e);
  if ((e.f & Tt) !== 0)
    throw e.v;
  return e.v;
}
function sa(e) {
  if (e.deps !== null) {
    e.f ^= Qe;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & xe) !== 0 && (t.f & Qe) === 0 && sa(
        /** @type {Derived} */
        t
      );
  }
}
function aa(e) {
  if (e.v === be) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Dt.has(t) || (t.f & xe) !== 0 && aa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Oe(e) {
  var t = tt;
  try {
    return tt = !0, e();
  } finally {
    tt = t;
  }
}
const Ec = -7169;
function ke(e, t) {
  e.f = e.f & Ec | t;
}
function Sc(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function la(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (nt in e)
      _o(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && nt in n && _o(n);
      }
  }
}
function _o(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        _o(e[r], t);
      } catch {
      }
    const n = Fr(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = ys(n);
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
function kc(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Cc = [
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
function Nc(e) {
  return Cc.includes(e);
}
const Pc = {
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
function Mc(e) {
  return e = e.toLowerCase(), Pc[e] ?? e;
}
const Ac = ["touchstart", "touchmove"];
function Ic(e) {
  return Ac.includes(e);
}
const ca = /* @__PURE__ */ new Set(), wo = /* @__PURE__ */ new Set();
function Qo(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || In.call(t, i), !i.cancelBubble)
      return Wo(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? nn(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function bo(e, t, n, r = {}) {
  var o = Qo(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function kr(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Qo(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && qo(() => {
    t.removeEventListener(e, s, i);
  });
}
function Jo(e) {
  for (var t = 0; t < e.length; t++)
    ca.add(e[t]);
  for (var n of wo)
    n(e);
}
let Si = null;
function In(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  Si = e;
  var s = 0, a = Si === e && e.__root;
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
    El(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var f = ee, h = oe;
    Te(null), st(null);
    try {
      for (var d, g = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var _ = i["__" + r];
          _ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && _.call(i, e);
        } catch (y) {
          d ? g.push(y) : d = y;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (d) {
        for (let y of g)
          queueMicrotask(() => {
            throw y;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Te(f), st(h);
    }
  }
}
function ua(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function mn(e, t) {
  var n = (
    /** @type {Effect} */
    oe
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function le(e, t) {
  var n = (t & Cs) !== 0, r = (t & Wl) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    o === void 0 && (o = ua(i ? e : "<!>" + e), n || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ dt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Fs ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ dt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      mn(a, l);
    } else
      mn(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Tc(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Cs) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ua(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ dt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ dt(l); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ dt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ dt(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ dt(c)
      ), h = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      mn(f, h);
    } else
      mn(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function me(e, t) {
  return /* @__PURE__ */ Tc(e, t, "svg");
}
function Dc(e = "") {
  {
    var t = yt(e + "");
    return mn(t, t), t;
  }
}
function Se() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = yt();
  return e.append(t, n), mn(t, n), e;
}
function K(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function zt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function zc(e, t) {
  return Oc(e, t);
}
const sn = /* @__PURE__ */ new Map();
function Oc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  hc();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var d = 0; d < h.length; d++) {
      var g = h[d];
      if (!a.has(g)) {
        a.add(g);
        var v = Ic(g);
        t.addEventListener(g, In, { passive: v });
        var _ = sn.get(g);
        _ === void 0 ? (document.addEventListener(g, In, { passive: v }), sn.set(g, 1)) : sn.set(g, _ + 1);
      }
    }
  };
  l(Br(ca)), wo.add(l);
  var c = void 0, f = mc(() => {
    var h = n ?? t.appendChild(yt());
    return ic(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (d) => {
        if (i) {
          te({});
          var g = (
            /** @type {ComponentContext} */
            ue
          );
          g.c = i;
        }
        o && (r.$$events = o), c = e(d, r) || {}, i && ne();
      }
    ), () => {
      for (var d of a) {
        t.removeEventListener(d, In);
        var g = (
          /** @type {number} */
          sn.get(d)
        );
        --g === 0 ? (document.removeEventListener(d, In), sn.delete(d)) : sn.set(d, g);
      }
      wo.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Rc.set(c, f), c;
}
let Rc = /* @__PURE__ */ new WeakMap();
class jo {
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
      ge
    );
    if (this.#e.has(t)) {
      var n = (
        /** @type {Key} */
        this.#e.get(t)
      ), r = this.#t.get(n);
      if (r)
        Uo(r), this.#r.delete(n);
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
            ea(s, c), c.append(yt()), this.#n.set(i, { effect: s, fragment: c });
          } else
            _e(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), Zt(s, a, !1)) : a();
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
      ge
    ), o = Zs();
    if (n && !this.#t.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = yt();
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
function de(e, t, n = !1) {
  var r = new jo(e), o = n ? Rt : 0;
  function i(s, a) {
    r.ensure(s, a);
  }
  jn(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Hc(e, t) {
  Zr(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Lc(e, t, n) {
  for (var r = [], o = t.length, i, s = t.length, a = 0; a < o; a++) {
    let h = t[a];
    Zt(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var d = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            xo(Br(i.done)), d.delete(i), d.size === 0 && (e.outrogroups = null);
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
      ), f = (
        /** @type {Element} */
        c.parentNode
      );
      gc(f), f.append(c), e.items.clear();
    }
    xo(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function xo(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    _e(e[n], t);
}
var ki;
function Xr(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = (t & ks) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = c.appendChild(yt());
  }
  var f = null, h = /* @__PURE__ */ Zo(() => {
    var b = n();
    return Vr(b) ? b : b == null ? [] : Br(b);
  }), d, g = !0;
  function v() {
    y.fallback = f, Vc(y, d, s, t, r), f !== null && (d.length === 0 ? (f.f & gt) === 0 ? Uo(f) : (f.f ^= gt, Tn(f, null, s)) : Zt(f, () => {
      f = null;
    }));
  }
  var _ = jn(() => {
    d = /** @type {V[]} */
    u(h);
    for (var b = d.length, C = /* @__PURE__ */ new Set(), k = (
      /** @type {Batch} */
      ge
    ), w = Zs(), A = 0; A < b; A += 1) {
      var T = d[A], z = r(T, A), M = g ? null : a.get(z);
      M ? (M.v && pn(M.v, T), M.i && pn(M.i, A), w && k.skipped_effects.delete(M.e)) : (M = Bc(
        a,
        g ? s : ki ??= yt(),
        T,
        z,
        A,
        o,
        t,
        n
      ), g || (M.e.f |= gt), a.set(z, M)), C.add(z);
    }
    if (b === 0 && i && !f && (g ? f = Ie(() => i(s)) : (f = Ie(() => i(ki ??= yt())), f.f |= gt)), !g)
      if (w) {
        for (const [V, Y] of a)
          C.has(V) || k.skipped_effects.add(Y.e);
        k.oncommit(v), k.ondiscard(() => {
        });
      } else
        v();
    u(h);
  }), y = { effect: _, items: a, outrogroups: null, fallback: f };
  g = !1;
}
function Vc(e, t, n, r, o) {
  var i = (r & Vl) !== 0, s = t.length, a = e.items, l = e.effect.first, c, f = null, h, d = [], g = [], v, _, y, b;
  if (i)
    for (b = 0; b < s; b += 1)
      v = t[b], _ = o(v, b), y = /** @type {EachItem} */
      a.get(_).e, (y.f & gt) === 0 && (y.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(y));
  for (b = 0; b < s; b += 1) {
    if (v = t[b], _ = o(v, b), y = /** @type {EachItem} */
    a.get(_).e, e.outrogroups !== null)
      for (const Y of e.outrogroups)
        Y.pending.delete(y), Y.done.delete(y);
    if ((y.f & gt) !== 0)
      if (y.f ^= gt, y === l)
        Tn(y, null, n);
      else {
        var C = f ? f.next : l;
        y === e.effect.last && (e.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), Ct(e, f, y), Ct(e, y, C), Tn(y, C, n), f = y, d = [], g = [], l = f.next;
        continue;
      }
    if ((y.f & Re) !== 0 && (Uo(y), i && (y.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(y))), y !== l) {
      if (c !== void 0 && c.has(y)) {
        if (d.length < g.length) {
          var k = g[0], w;
          f = k.prev;
          var A = d[0], T = d[d.length - 1];
          for (w = 0; w < d.length; w += 1)
            Tn(d[w], k, n);
          for (w = 0; w < g.length; w += 1)
            c.delete(g[w]);
          Ct(e, A.prev, T.next), Ct(e, f, A), Ct(e, T, k), l = k, f = T, b -= 1, d = [], g = [];
        } else
          c.delete(y), Tn(y, l, n), Ct(e, y.prev, y.next), Ct(e, y, f === null ? e.effect.first : f.next), Ct(e, f, y), f = y;
        continue;
      }
      for (d = [], g = []; l !== null && l !== y; )
        (c ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = l.next;
      if (l === null)
        continue;
    }
    (y.f & gt) === 0 && d.push(y), f = y, l = y.next;
  }
  if (e.outrogroups !== null) {
    for (const Y of e.outrogroups)
      Y.pending.size === 0 && (xo(Br(Y.done)), e.outrogroups?.delete(Y));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var z = [];
    if (c !== void 0)
      for (y of c)
        (y.f & Re) === 0 && z.push(y);
    for (; l !== null; )
      (l.f & Re) === 0 && l !== e.fallback && z.push(l), l = l.next;
    var M = z.length;
    if (M > 0) {
      var V = (r & ks) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < M; b += 1)
          z[b].nodes?.a?.measure();
        for (b = 0; b < M; b += 1)
          z[b].nodes?.a?.fix();
      }
      Lc(e, z, V);
    }
  }
  i && nn(() => {
    if (h !== void 0)
      for (y of h)
        y.nodes?.a?.apply();
  });
}
function Bc(e, t, n, r, o, i, s, a) {
  var l = (s & Hl) !== 0 ? (s & Bl) === 0 ? /* @__PURE__ */ uc(n, !1, !1) : Qt(n) : null, c = (s & Ll) !== 0 ? Qt(o) : null;
  return {
    v: l,
    i: c,
    e: Ie(() => (i(t, l ?? n, c ?? o, a), () => {
      e.delete(r);
    }))
  };
}
function Tn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, o = e.nodes.end, i = t && (t.f & gt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qn(r)
      );
      if (i.before(r), r === o)
        return;
      r = s;
    }
}
function Ct(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ye(e, t, ...n) {
  var r = new jo(e);
  jn(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Rt);
}
function Wr(e, t, n) {
  var r = new jo(e);
  jn(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Rt);
}
function Ne(e, t, n) {
  Jn(() => {
    var r = Oe(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Zr(() => {
        var s = n();
        la(s), o && Ps(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Fc(e, t) {
  var n = void 0, r;
  Gs(() => {
    n !== (n = t()) && (r && (_e(r), r = null), n && (r = Ie(() => {
      Jn(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function fa(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = fa(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Kc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = fa(e)) && (r && (r += " "), r += t);
  return r;
}
function Lt(e) {
  return typeof e == "object" ? Kc(e) : e ?? "";
}
const Ci = [...` 	
\r\f \v\uFEFF`];
function Yc(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Ci.includes(r[s - 1])) && (a === r.length || Ci.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Ni(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function no(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Zc(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(no)), o && l.push(...Object.keys(o).map(no));
      var c = 0, f = -1;
      const _ = e.length;
      for (var h = 0; h < _; h++) {
        var d = e[h];
        if (a ? d === "/" && e[h - 1] === "*" && (a = !1) : i ? i === d && (i = !1) : d === "/" && e[h + 1] === "*" ? a = !0 : d === '"' || d === "'" ? i = d : d === "(" ? s++ : d === ")" && s--, !a && i === !1 && s === 0) {
          if (d === ":" && f === -1)
            f = h;
          else if (d === ";" || h === _ - 1) {
            if (f !== -1) {
              var g = no(e.substring(c, f).trim());
              if (!l.includes(g)) {
                d !== ";" && h++;
                var v = e.substring(c, h).trim();
                n += " " + v + ";";
              }
            }
            c = h + 1, f = -1;
          }
        }
      }
    }
    return r && (n += Ni(r)), o && (n += Ni(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Et(e, t, n, r, o, i) {
  var s = e.__className;
  if (s !== n || s === void 0) {
    var a = Yc(n, r, i);
    a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function ro(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Le(e, t, n, r) {
  var o = e.__style;
  if (o !== t) {
    var i = Zc(t, r);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else r && (Array.isArray(r) ? (ro(e, n?.[0], r[0]), ro(e, n?.[1], r[1], "important")) : ro(e, n, r));
  return r;
}
function Eo(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Vr(t))
      return Ul();
    for (var r of e.options)
      r.selected = t.includes(Pi(r));
    return;
  }
  for (r of e.options) {
    var o = Pi(r);
    if (dc(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Xc(e) {
  var t = new MutationObserver(() => {
    Eo(e, e.__value);
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
  }), qo(() => {
    t.disconnect();
  });
}
function Pi(e) {
  return "__value" in e ? e.__value : e.value;
}
const Nt = /* @__PURE__ */ Symbol("class"), ht = /* @__PURE__ */ Symbol("style"), da = /* @__PURE__ */ Symbol("is custom element"), ha = /* @__PURE__ */ Symbol("is html");
function Wc(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function G(e, t, n, r) {
  var o = ga(e);
  o[t] !== (o[t] = n) && (t === "loading" && (e[Cl] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && va(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function qc(e, t, n, r, o = !1, i = !1) {
  var s = ga(e), a = s[da], l = !s[ha], c = t || {}, f = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = Lt(n.class) : (r || n[Nt]) && (n.class = null), n[ht] && (n.style ??= null);
  var d = va(e);
  for (const w in n) {
    let A = n[w];
    if (f && w === "value" && A == null) {
      e.value = e.__value = "", c[w] = A;
      continue;
    }
    if (w === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Et(e, g, A, r, t?.[Nt], n[Nt]), c[w] = A, c[Nt] = n[Nt];
      continue;
    }
    if (w === "style") {
      Le(e, A, t?.[ht], n[ht]), c[w] = A, c[ht] = n[ht];
      continue;
    }
    var v = c[w];
    if (!(A === v && !(A === void 0 && e.hasAttribute(w)))) {
      c[w] = A;
      var _ = w[0] + w[1];
      if (_ !== "$$")
        if (_ === "on") {
          const T = {}, z = "$$" + w;
          let M = w.slice(2);
          var y = Nc(M);
          if (kc(M) && (M = M.slice(0, -7), T.capture = !0), !y && v) {
            if (A != null) continue;
            e.removeEventListener(M, c[z], T), c[z] = null;
          }
          if (A != null)
            if (y)
              e[`__${M}`] = A, Jo([M]);
            else {
              let V = function(Y) {
                c[w].call(this, Y);
              };
              var k = V;
              c[z] = Qo(M, e, V, T);
            }
          else y && (e[`__${M}`] = void 0);
        } else if (w === "style")
          G(e, w, A);
        else if (w === "autofocus")
          vc(
            /** @type {HTMLElement} */
            e,
            !!A
          );
        else if (!a && (w === "__value" || w === "value" && A != null))
          e.value = e.__value = A;
        else if (w === "selected" && f)
          Wc(
            /** @type {HTMLOptionElement} */
            e,
            A
          );
        else {
          var b = w;
          l || (b = Mc(b));
          var C = b === "defaultValue" || b === "defaultChecked";
          if (A == null && !a && !C)
            if (s[w] = null, b === "value" || b === "checked") {
              let T = (
                /** @type {HTMLInputElement} */
                e
              );
              const z = t === void 0;
              if (b === "value") {
                let M = T.defaultValue;
                T.removeAttribute(b), T.defaultValue = M, T.value = T.__value = z ? M : null;
              } else {
                let M = T.defaultChecked;
                T.removeAttribute(b), T.defaultChecked = M, T.checked = z ? M : !1;
              }
            } else
              e.removeAttribute(w);
          else C || d.includes(b) && (a || typeof A != "string") ? (e[b] = A, b in s && (s[b] = be)) : typeof A != "function" && G(e, b, A);
        }
    }
  }
  return c;
}
function Vt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  Rs(o, n, r, (l) => {
    var c = void 0, f = {}, h = e.nodeName === "SELECT", d = !1;
    if (Gs(() => {
      var v = t(...l.map(u)), _ = qc(
        e,
        c,
        v,
        i,
        s,
        a
      );
      d && h && "value" in v && Eo(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let b of Object.getOwnPropertySymbols(f))
        v[b] || _e(f[b]);
      for (let b of Object.getOwnPropertySymbols(v)) {
        var y = v[b];
        b.description === Gl && (!c || y !== c[b]) && (f[b] && _e(f[b]), f[b] = Ie(() => Fc(e, () => y))), _[b] = y;
      }
      c = _;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      Jn(() => {
        Eo(
          g,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), Xc(g);
      });
    }
    d = !0;
  });
}
function ga(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [da]: e.nodeName.includes("-"),
      [ha]: e.namespaceURI === ql
    }
  );
}
var Mi = /* @__PURE__ */ new Map();
function va(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Mi.get(t);
  if (n) return n;
  Mi.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = ys(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Fr(o);
  }
  return n;
}
class $o {
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
          $o.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Gc = /* @__PURE__ */ new $o({
  box: "border-box"
});
function Ai(e, t, n) {
  var r = Gc.observe(e, () => n(e[t]));
  Jn(() => (Oe(() => n(e[t])), r));
}
function Ii(e, t) {
  return e === t || e?.[nt] === t;
}
function er(e = {}, t, n, r) {
  return Jn(() => {
    var o, i;
    return Zr(() => {
      o = i, i = [], Oe(() => {
        e !== n(...i) && (t(e, ...i), o && Ii(n(...o), e) && t(null, ...o));
      });
    }), () => {
      nn(() => {
        i && Ii(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Uc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ue
  ), n = t.l.u;
  if (!n) return;
  let r = () => la(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Un(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && Go(() => {
    Ti(t, r), vo(n.b);
  }), it(() => {
    const o = Oe(() => n.m.map(kl));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && it(() => {
    Ti(t, r), vo(n.a);
  });
}
function Ti(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let lr = !1;
function Qc(e) {
  var t = lr;
  try {
    return lr = !1, [e(), lr];
  } finally {
    lr = t;
  }
}
const Jc = {
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
function Bt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Jc
  );
}
const jc = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Pn(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Pn(o) && (o = o());
      const i = It(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Pn(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = It(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === nt || t === Ss) return !1;
    for (let n of e.props)
      if (Pn(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Pn(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Pt(...e) {
  return new Proxy({ props: e }, jc);
}
function L(e, t, n, r) {
  var o = !kn || (n & Kl) !== 0, i = (n & Zl) !== 0, s = (n & Xl) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? Oe(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), f;
  if (i) {
    var h = nt in e || Ss in e;
    f = It(e, t)?.set ?? (h && t in e ? (k) => e[t] = k : void 0);
  }
  var d, g = !1;
  i ? [d, g] = Qc(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t], d === void 0 && r !== void 0 && (d = c(), f && (o && Tl(), f(d)));
  var v;
  if (o ? v = () => {
    var k = (
      /** @type {V} */
      e[t]
    );
    return k === void 0 ? c() : (l = !0, k);
  } : v = () => {
    var k = (
      /** @type {V} */
      e[t]
    );
    return k !== void 0 && (a = /** @type {V} */
    void 0), k === void 0 ? a : k;
  }, o && (n & Yl) === 0)
    return v;
  if (f) {
    var _ = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(k, w) {
        return arguments.length > 0 ? ((!o || !w || _ || g) && f(w ? v() : k), k) : v();
      })
    );
  }
  var y = !1, b = ((n & Fl) !== 0 ? Un : Zo)(() => (y = !1, v()));
  i && u(b);
  var C = (
    /** @type {Effect} */
    oe
  );
  return (
    /** @type {() => V} */
    (function(k, w) {
      if (arguments.length > 0) {
        const A = w ? u(b) : o && i ? At(k) : k;
        return O(b, A), y = !0, a !== void 0 && (a = A), k;
      }
      return rn && y || (C.f & mt) !== 0 ? b.v : u(b);
    })
  );
}
function $c(e) {
  ue === null && Bo(), kn && ue.l !== null ? eu(ue).m.push(e) : it(() => {
    const t = Oe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ei(e) {
  ue === null && Bo(), $c(() => () => Oe(e));
}
function eu(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const tu = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(tu);
var nu = { value: () => {
} };
function qr() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new mr(n);
}
function mr(e) {
  this._ = e;
}
function ru(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
mr.prototype = qr.prototype = {
  constructor: mr,
  on: function(e, t) {
    var n = this._, r = ru(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = ou(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Di(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Di(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new mr(e);
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
function ou(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Di(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = nu, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var So = "http://www.w3.org/1999/xhtml";
const zi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: So,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Gr(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), zi.hasOwnProperty(t) ? { space: zi[t], local: e } : e;
}
function iu(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === So && t.documentElement.namespaceURI === So ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function su(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function pa(e) {
  var t = Gr(e);
  return (t.local ? su : iu)(t);
}
function au() {
}
function ti(e) {
  return e == null ? au : function() {
    return this.querySelector(e);
  };
}
function lu(e) {
  typeof e != "function" && (e = ti(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, f = 0; f < s; ++f)
      (l = i[f]) && (c = e.call(l, l.__data__, f, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[f] = c);
  return new Ve(r, this._parents);
}
function cu(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function uu() {
  return [];
}
function ma(e) {
  return e == null ? uu : function() {
    return this.querySelectorAll(e);
  };
}
function fu(e) {
  return function() {
    return cu(e.apply(this, arguments));
  };
}
function du(e) {
  typeof e == "function" ? e = fu(e) : e = ma(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new Ve(r, o);
}
function ya(e) {
  return function() {
    return this.matches(e);
  };
}
function _a(e) {
  return function(t) {
    return t.matches(e);
  };
}
var hu = Array.prototype.find;
function gu(e) {
  return function() {
    return hu.call(this.children, e);
  };
}
function vu() {
  return this.firstElementChild;
}
function pu(e) {
  return this.select(e == null ? vu : gu(typeof e == "function" ? e : _a(e)));
}
var mu = Array.prototype.filter;
function yu() {
  return Array.from(this.children);
}
function _u(e) {
  return function() {
    return mu.call(this.children, e);
  };
}
function wu(e) {
  return this.selectAll(e == null ? yu : _u(typeof e == "function" ? e : _a(e)));
}
function bu(e) {
  typeof e != "function" && (e = ya(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Ve(r, this._parents);
}
function wa(e) {
  return new Array(e.length);
}
function xu() {
  return new Ve(this._enter || this._groups.map(wa), this._parents);
}
function Cr(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Cr.prototype = {
  constructor: Cr,
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
function Eu(e) {
  return function() {
    return e;
  };
}
function Su(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Cr(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function ku(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), f = t.length, h = i.length, d = new Array(f), g;
  for (a = 0; a < f; ++a)
    (l = t[a]) && (d[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new Cr(e, i[a]);
  for (a = 0; a < f; ++a)
    (l = t[a]) && c.get(d[a]) === l && (o[a] = l);
}
function Cu(e) {
  return e.__data__;
}
function Nu(e, t) {
  if (!arguments.length) return Array.from(this, Cu);
  var n = t ? ku : Su, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Eu(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var f = r[c], h = o[c], d = h.length, g = Pu(e.call(f, f && f.__data__, c, r)), v = g.length, _ = a[c] = new Array(v), y = s[c] = new Array(v), b = l[c] = new Array(d);
    n(f, h, _, y, b, g, t);
    for (var C = 0, k = 0, w, A; C < v; ++C)
      if (w = _[C]) {
        for (C >= k && (k = C + 1); !(A = y[k]) && ++k < v; ) ;
        w._next = A || null;
      }
  }
  return s = new Ve(s, r), s._enter = a, s._exit = l, s;
}
function Pu(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Mu() {
  return new Ve(this._exit || this._groups.map(wa), this._parents);
}
function Au(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Iu(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], f = r[l], h = c.length, d = a[l] = new Array(h), g, v = 0; v < h; ++v)
      (g = c[v] || f[v]) && (d[v] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ve(a, this._parents);
}
function Tu() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Du(e) {
  e || (e = zu);
  function t(h, d) {
    return h && d ? e(h.__data__, d.__data__) : !h - !d;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, f = 0; f < a; ++f)
      (c = s[f]) && (l[f] = c);
    l.sort(t);
  }
  return new Ve(o, this._parents).order();
}
function zu(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ou() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Ru() {
  return Array.from(this);
}
function Hu() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Lu() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Vu() {
  return !this.node();
}
function Bu(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Fu(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ku(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Yu(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Zu(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Xu(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Wu(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function qu(e, t) {
  var n = Gr(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Ku : Fu : typeof t == "function" ? n.local ? Wu : Xu : n.local ? Zu : Yu)(n, t));
}
function ba(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Gu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Uu(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Qu(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Ju(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Gu : typeof t == "function" ? Qu : Uu)(e, t, n ?? "")) : yn(this.node(), e);
}
function yn(e, t) {
  return e.style.getPropertyValue(t) || ba(e).getComputedStyle(e, null).getPropertyValue(t);
}
function ju(e) {
  return function() {
    delete this[e];
  };
}
function $u(e, t) {
  return function() {
    this[e] = t;
  };
}
function ef(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function tf(e, t) {
  return arguments.length > 1 ? this.each((t == null ? ju : typeof t == "function" ? ef : $u)(e, t)) : this.node()[e];
}
function xa(e) {
  return e.trim().split(/^|\s+/);
}
function ni(e) {
  return e.classList || new Ea(e);
}
function Ea(e) {
  this._node = e, this._names = xa(e.getAttribute("class") || "");
}
Ea.prototype = {
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
function Sa(e, t) {
  for (var n = ni(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function ka(e, t) {
  for (var n = ni(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function nf(e) {
  return function() {
    Sa(this, e);
  };
}
function rf(e) {
  return function() {
    ka(this, e);
  };
}
function of(e, t) {
  return function() {
    (t.apply(this, arguments) ? Sa : ka)(this, e);
  };
}
function sf(e, t) {
  var n = xa(e + "");
  if (arguments.length < 2) {
    for (var r = ni(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? of : t ? nf : rf)(n, t));
}
function af() {
  this.textContent = "";
}
function lf(e) {
  return function() {
    this.textContent = e;
  };
}
function cf(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function uf(e) {
  return arguments.length ? this.each(e == null ? af : (typeof e == "function" ? cf : lf)(e)) : this.node().textContent;
}
function ff() {
  this.innerHTML = "";
}
function df(e) {
  return function() {
    this.innerHTML = e;
  };
}
function hf(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function gf(e) {
  return arguments.length ? this.each(e == null ? ff : (typeof e == "function" ? hf : df)(e)) : this.node().innerHTML;
}
function vf() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function pf() {
  return this.each(vf);
}
function mf() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function yf() {
  return this.each(mf);
}
function _f(e) {
  var t = typeof e == "function" ? e : pa(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function wf() {
  return null;
}
function bf(e, t) {
  var n = typeof e == "function" ? e : pa(e), r = t == null ? wf : typeof t == "function" ? t : ti(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function xf() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ef() {
  return this.each(xf);
}
function Sf() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function kf() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Cf(e) {
  return this.select(e ? kf : Sf);
}
function Nf(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Pf(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Mf(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Af(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function If(e, t, n) {
  return function() {
    var r = this.__on, o, i = Pf(t);
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
function Tf(e, t, n) {
  var r = Mf(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, f; l < c; ++l)
        for (o = 0, f = a[l]; o < i; ++o)
          if ((s = r[o]).type === f.type && s.name === f.name)
            return f.value;
    }
    return;
  }
  for (a = t ? If : Af, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Ca(e, t, n) {
  var r = ba(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Df(e, t) {
  return function() {
    return Ca(this, e, t);
  };
}
function zf(e, t) {
  return function() {
    return Ca(this, e, t.apply(this, arguments));
  };
}
function Of(e, t) {
  return this.each((typeof t == "function" ? zf : Df)(e, t));
}
function* Rf() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Na = [null];
function Ve(e, t) {
  this._groups = e, this._parents = t;
}
function tr() {
  return new Ve([[document.documentElement]], Na);
}
function Hf() {
  return this;
}
Ve.prototype = tr.prototype = {
  constructor: Ve,
  select: lu,
  selectAll: du,
  selectChild: pu,
  selectChildren: wu,
  filter: bu,
  data: Nu,
  enter: xu,
  exit: Mu,
  join: Au,
  merge: Iu,
  selection: Hf,
  order: Tu,
  sort: Du,
  call: Ou,
  nodes: Ru,
  node: Hu,
  size: Lu,
  empty: Vu,
  each: Bu,
  attr: qu,
  style: Ju,
  property: tf,
  classed: sf,
  text: uf,
  html: gf,
  raise: pf,
  lower: yf,
  append: _f,
  insert: bf,
  remove: Ef,
  clone: Cf,
  datum: Nf,
  on: Tf,
  dispatch: Of,
  [Symbol.iterator]: Rf
};
function Ke(e) {
  return typeof e == "string" ? new Ve([[document.querySelector(e)]], [document.documentElement]) : new Ve([[e]], Na);
}
function Lf(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function We(e, t) {
  if (e = Lf(e), t === void 0 && (t = e.currentTarget), t) {
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
const Vf = { passive: !1 }, Bn = { capture: !0, passive: !1 };
function oo(e) {
  e.stopImmediatePropagation();
}
function fn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Pa(e) {
  var t = e.document.documentElement, n = Ke(e).on("dragstart.drag", fn, Bn);
  "onselectstart" in t ? n.on("selectstart.drag", fn, Bn) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ma(e, t) {
  var n = e.document.documentElement, r = Ke(e).on("dragstart.drag", null);
  t && (r.on("click.drag", fn, Bn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const cr = (e) => () => e;
function ko(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: c,
  dispatch: f
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
    _: { value: f }
  });
}
ko.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Bf(e) {
  return !e.ctrlKey && !e.button;
}
function Ff() {
  return this.parentNode;
}
function Kf(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Yf() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Zf() {
  var e = Bf, t = Ff, n = Kf, r = Yf, o = {}, i = qr("start", "drag", "end"), s = 0, a, l, c, f, h = 0;
  function d(w) {
    w.on("mousedown.drag", g).filter(r).on("touchstart.drag", y).on("touchmove.drag", b, Vf).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(w, A) {
    if (!(f || !e.call(this, w, A))) {
      var T = k(this, t.call(this, w, A), w, A, "mouse");
      T && (Ke(w.view).on("mousemove.drag", v, Bn).on("mouseup.drag", _, Bn), Pa(w.view), oo(w), c = !1, a = w.clientX, l = w.clientY, T("start", w));
    }
  }
  function v(w) {
    if (fn(w), !c) {
      var A = w.clientX - a, T = w.clientY - l;
      c = A * A + T * T > h;
    }
    o.mouse("drag", w);
  }
  function _(w) {
    Ke(w.view).on("mousemove.drag mouseup.drag", null), Ma(w.view, c), fn(w), o.mouse("end", w);
  }
  function y(w, A) {
    if (e.call(this, w, A)) {
      var T = w.changedTouches, z = t.call(this, w, A), M = T.length, V, Y;
      for (V = 0; V < M; ++V)
        (Y = k(this, z, w, A, T[V].identifier, T[V])) && (oo(w), Y("start", w, T[V]));
    }
  }
  function b(w) {
    var A = w.changedTouches, T = A.length, z, M;
    for (z = 0; z < T; ++z)
      (M = o[A[z].identifier]) && (fn(w), M("drag", w, A[z]));
  }
  function C(w) {
    var A = w.changedTouches, T = A.length, z, M;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), z = 0; z < T; ++z)
      (M = o[A[z].identifier]) && (oo(w), M("end", w, A[z]));
  }
  function k(w, A, T, z, M, V) {
    var Y = i.copy(), P = We(V || T, A), x, N, p;
    if ((p = n.call(w, new ko("beforestart", {
      sourceEvent: T,
      target: d,
      identifier: M,
      active: s,
      x: P[0],
      y: P[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), z)) != null)
      return x = p.x - P[0] || 0, N = p.y - P[1] || 0, function S(E, I, R) {
        var D = P, H;
        switch (E) {
          case "start":
            o[M] = S, H = s++;
            break;
          case "end":
            delete o[M], --s;
          // falls through
          case "drag":
            P = We(R || I, A), H = s;
            break;
        }
        Y.call(
          E,
          w,
          new ko(E, {
            sourceEvent: I,
            subject: p,
            target: d,
            identifier: M,
            active: H,
            x: P[0] + x,
            y: P[1] + N,
            dx: P[0] - D[0],
            dy: P[1] - D[1],
            dispatch: Y
          }),
          z
        );
      };
  }
  return d.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : cr(!!w), d) : e;
  }, d.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : cr(w), d) : t;
  }, d.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : cr(w), d) : n;
  }, d.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : cr(!!w), d) : r;
  }, d.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? d : w;
  }, d.clickDistance = function(w) {
    return arguments.length ? (h = (w = +w) * w, d) : Math.sqrt(h);
  }, d;
}
function ri(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Aa(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function nr() {
}
var Fn = 0.7, Nr = 1 / Fn, dn = "\\s*([+-]?\\d+)\\s*", Kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Xf = /^#([0-9a-f]{3,8})$/, Wf = new RegExp(`^rgb\\(${dn},${dn},${dn}\\)$`), qf = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), Gf = new RegExp(`^rgba\\(${dn},${dn},${dn},${Kn}\\)$`), Uf = new RegExp(`^rgba\\(${rt},${rt},${rt},${Kn}\\)$`), Qf = new RegExp(`^hsl\\(${Kn},${rt},${rt}\\)$`), Jf = new RegExp(`^hsla\\(${Kn},${rt},${rt},${Kn}\\)$`), Oi = {
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
ri(nr, Jt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ri,
  // Deprecated! Use color.formatHex.
  formatHex: Ri,
  formatHex8: jf,
  formatHsl: $f,
  formatRgb: Hi,
  toString: Hi
});
function Ri() {
  return this.rgb().formatHex();
}
function jf() {
  return this.rgb().formatHex8();
}
function $f() {
  return Ia(this).formatHsl();
}
function Hi() {
  return this.rgb().formatRgb();
}
function Jt(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Xf.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Li(t) : n === 3 ? new De(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ur(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ur(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Wf.exec(e)) ? new De(t[1], t[2], t[3], 1) : (t = qf.exec(e)) ? new De(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Gf.exec(e)) ? ur(t[1], t[2], t[3], t[4]) : (t = Uf.exec(e)) ? ur(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Qf.exec(e)) ? Fi(t[1], t[2] / 100, t[3] / 100, 1) : (t = Jf.exec(e)) ? Fi(t[1], t[2] / 100, t[3] / 100, t[4]) : Oi.hasOwnProperty(e) ? Li(Oi[e]) : e === "transparent" ? new De(NaN, NaN, NaN, 0) : null;
}
function Li(e) {
  return new De(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ur(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new De(e, t, n, r);
}
function ed(e) {
  return e instanceof nr || (e = Jt(e)), e ? (e = e.rgb(), new De(e.r, e.g, e.b, e.opacity)) : new De();
}
function Co(e, t, n, r) {
  return arguments.length === 1 ? ed(e) : new De(e, t, n, r ?? 1);
}
function De(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ri(De, Co, Aa(nr, {
  brighter(e) {
    return e = e == null ? Nr : Math.pow(Nr, e), new De(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fn : Math.pow(Fn, e), new De(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new De(qt(this.r), qt(this.g), qt(this.b), Pr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Vi,
  // Deprecated! Use color.formatHex.
  formatHex: Vi,
  formatHex8: td,
  formatRgb: Bi,
  toString: Bi
}));
function Vi() {
  return `#${Yt(this.r)}${Yt(this.g)}${Yt(this.b)}`;
}
function td() {
  return `#${Yt(this.r)}${Yt(this.g)}${Yt(this.b)}${Yt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Bi() {
  const e = Pr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${qt(this.r)}, ${qt(this.g)}, ${qt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Pr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function qt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Yt(e) {
  return e = qt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Fi(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new qe(e, t, n, r);
}
function Ia(e) {
  if (e instanceof qe) return new qe(e.h, e.s, e.l, e.opacity);
  if (e instanceof nr || (e = Jt(e)), !e) return new qe();
  if (e instanceof qe) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new qe(s, a, l, e.opacity);
}
function nd(e, t, n, r) {
  return arguments.length === 1 ? Ia(e) : new qe(e, t, n, r ?? 1);
}
function qe(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ri(qe, nd, Aa(nr, {
  brighter(e) {
    return e = e == null ? Nr : Math.pow(Nr, e), new qe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fn : Math.pow(Fn, e), new qe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new De(
      io(e >= 240 ? e - 240 : e + 120, o, r),
      io(e, o, r),
      io(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new qe(Ki(this.h), fr(this.s), fr(this.l), Pr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Pr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ki(this.h)}, ${fr(this.s) * 100}%, ${fr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ki(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function fr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function io(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const oi = (e) => () => e;
function rd(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function od(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function id(e) {
  return (e = +e) == 1 ? Ta : function(t, n) {
    return n - t ? od(t, n, e) : oi(isNaN(t) ? n : t);
  };
}
function Ta(e, t) {
  var n = t - e;
  return n ? rd(e, n) : oi(isNaN(e) ? t : e);
}
const Mr = (function e(t) {
  var n = id(t);
  function r(o, i) {
    var s = n((o = Co(o)).r, (i = Co(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = Ta(o.opacity, i.opacity);
    return function(f) {
      return o.r = s(f), o.g = a(f), o.b = l(f), o.opacity = c(f), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function sd(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function ad(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ld(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Rn(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function cd(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function et(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function ud(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Rn(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var No = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, so = new RegExp(No.source, "g");
function fd(e) {
  return function() {
    return e;
  };
}
function dd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Da(e, t) {
  var n = No.lastIndex = so.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = No.exec(e)) && (o = so.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: et(r, o) })), n = so.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? dd(l[0].x) : fd(t) : (t = l.length, function(c) {
    for (var f = 0, h; f < t; ++f) a[(h = l[f]).i] = h.x(c);
    return a.join("");
  });
}
function Rn(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? oi(t) : (n === "number" ? et : n === "string" ? (r = Jt(t)) ? (t = r, Mr) : Da : t instanceof Jt ? Mr : t instanceof Date ? cd : ad(t) ? sd : Array.isArray(t) ? ld : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ud : et)(e, t);
}
var Yi = 180 / Math.PI, Po = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function za(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Yi,
    skewX: Math.atan(l) * Yi,
    scaleX: s,
    scaleY: a
  };
}
var dr;
function hd(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Po : za(t.a, t.b, t.c, t.d, t.e, t.f);
}
function gd(e) {
  return e == null || (dr || (dr = document.createElementNS("http://www.w3.org/2000/svg", "g")), dr.setAttribute("transform", e), !(e = dr.transform.baseVal.consolidate())) ? Po : (e = e.matrix, za(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Oa(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, f, h, d, g, v) {
    if (c !== h || f !== d) {
      var _ = g.push("translate(", null, t, null, n);
      v.push({ i: _ - 4, x: et(c, h) }, { i: _ - 2, x: et(f, d) });
    } else (h || d) && g.push("translate(" + h + t + d + n);
  }
  function s(c, f, h, d) {
    c !== f ? (c - f > 180 ? f += 360 : f - c > 180 && (c += 360), d.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: et(c, f) })) : f && h.push(o(h) + "rotate(" + f + r);
  }
  function a(c, f, h, d) {
    c !== f ? d.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: et(c, f) }) : f && h.push(o(h) + "skewX(" + f + r);
  }
  function l(c, f, h, d, g, v) {
    if (c !== h || f !== d) {
      var _ = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: _ - 4, x: et(c, h) }, { i: _ - 2, x: et(f, d) });
    } else (h !== 1 || d !== 1) && g.push(o(g) + "scale(" + h + "," + d + ")");
  }
  return function(c, f) {
    var h = [], d = [];
    return c = e(c), f = e(f), i(c.translateX, c.translateY, f.translateX, f.translateY, h, d), s(c.rotate, f.rotate, h, d), a(c.skewX, f.skewX, h, d), l(c.scaleX, c.scaleY, f.scaleX, f.scaleY, h, d), c = f = null, function(g) {
      for (var v = -1, _ = d.length, y; ++v < _; ) h[(y = d[v]).i] = y.x(g);
      return h.join("");
    };
  };
}
var vd = Oa(hd, "px, ", "px)", "deg)"), pd = Oa(gd, ", ", ")", ")"), md = 1e-12;
function Zi(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function yd(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function _d(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const yr = (function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], f = s[0], h = s[1], d = s[2], g = f - a, v = h - l, _ = g * g + v * v, y, b;
    if (_ < md)
      b = Math.log(d / c) / t, y = function(z) {
        return [
          a + z * g,
          l + z * v,
          c * Math.exp(t * z * b)
        ];
      };
    else {
      var C = Math.sqrt(_), k = (d * d - c * c + r * _) / (2 * c * n * C), w = (d * d - c * c - r * _) / (2 * d * n * C), A = Math.log(Math.sqrt(k * k + 1) - k), T = Math.log(Math.sqrt(w * w + 1) - w);
      b = (T - A) / t, y = function(z) {
        var M = z * b, V = Zi(A), Y = c / (n * C) * (V * _d(t * M + A) - yd(A));
        return [
          a + Y * g,
          l + Y * v,
          c * V / Zi(t * M + A)
        ];
      };
    }
    return y.duration = b * 1e3 * t / Math.SQRT2, y;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
})(Math.SQRT2, 2, 4);
var _n = 0, Dn = 0, Mn = 0, Ra = 1e3, Ar, zn, Ir = 0, jt = 0, Ur = 0, Yn = typeof performance == "object" && performance.now ? performance : Date, Ha = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ii() {
  return jt || (Ha(wd), jt = Yn.now() + Ur);
}
function wd() {
  jt = 0;
}
function Tr() {
  this._call = this._time = this._next = null;
}
Tr.prototype = La.prototype = {
  constructor: Tr,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ii() : +n) + (t == null ? 0 : +t), !this._next && zn !== this && (zn ? zn._next = this : Ar = this, zn = this), this._call = e, this._time = n, Mo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Mo());
  }
};
function La(e, t, n) {
  var r = new Tr();
  return r.restart(e, t, n), r;
}
function bd() {
  ii(), ++_n;
  for (var e = Ar, t; e; )
    (t = jt - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --_n;
}
function Xi() {
  jt = (Ir = Yn.now()) + Ur, _n = Dn = 0;
  try {
    bd();
  } finally {
    _n = 0, Ed(), jt = 0;
  }
}
function xd() {
  var e = Yn.now(), t = e - Ir;
  t > Ra && (Ur -= t, Ir = e);
}
function Ed() {
  for (var e, t = Ar, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ar = n);
  zn = e, Mo(r);
}
function Mo(e) {
  if (!_n) {
    Dn && (Dn = clearTimeout(Dn));
    var t = e - jt;
    t > 24 ? (e < 1 / 0 && (Dn = setTimeout(Xi, e - Yn.now() - Ur)), Mn && (Mn = clearInterval(Mn))) : (Mn || (Ir = Yn.now(), Mn = setInterval(xd, Ra)), _n = 1, Ha(Xi));
  }
}
function Wi(e, t, n) {
  var r = new Tr();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Sd = qr("start", "end", "cancel", "interrupt"), kd = [], Va = 0, qi = 1, Ao = 2, _r = 3, Gi = 4, Io = 5, wr = 6;
function Qr(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Cd(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Sd,
    tween: kd,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Va
  });
}
function si(e, t) {
  var n = Je(e, t);
  if (n.state > Va) throw new Error("too late; already scheduled");
  return n;
}
function lt(e, t) {
  var n = Je(e, t);
  if (n.state > _r) throw new Error("too late; already running");
  return n;
}
function Je(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Cd(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = La(i, 0, n.time);
  function i(c) {
    n.state = qi, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var f, h, d, g;
    if (n.state !== qi) return l();
    for (f in r)
      if (g = r[f], g.name === n.name) {
        if (g.state === _r) return Wi(s);
        g.state === Gi ? (g.state = wr, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[f]) : +f < t && (g.state = wr, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[f]);
      }
    if (Wi(function() {
      n.state === _r && (n.state = Gi, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = Ao, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ao) {
      for (n.state = _r, o = new Array(d = n.tween.length), f = 0, h = -1; f < d; ++f)
        (g = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(c) {
    for (var f = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = Io, 1), h = -1, d = o.length; ++h < d; )
      o[h].call(e, f);
    n.state === Io && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = wr, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function br(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Ao && r.state < Io, r.state = wr, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Nd(e) {
  return this.each(function() {
    br(this, e);
  });
}
function Pd(e, t) {
  var n, r;
  return function() {
    var o = lt(this, e), i = o.tween;
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
function Md(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = lt(this, e), s = i.tween;
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
function Ad(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Je(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Pd : Md)(n, e, t));
}
function ai(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = lt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Je(o, r).value[t];
  };
}
function Ba(e, t) {
  var n;
  return (typeof t == "number" ? et : t instanceof Jt ? Mr : (n = Jt(t)) ? (t = n, Mr) : Da)(e, t);
}
function Id(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Td(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Dd(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function zd(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Od(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Rd(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Hd(e, t) {
  var n = Gr(e), r = n === "transform" ? pd : Ba;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Rd : Od)(n, r, ai(this, "attr." + e, t)) : t == null ? (n.local ? Td : Id)(n) : (n.local ? zd : Dd)(n, r, t));
}
function Ld(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Vd(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Bd(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Vd(e, i)), n;
  }
  return o._value = t, o;
}
function Fd(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Ld(e, i)), n;
  }
  return o._value = t, o;
}
function Kd(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Gr(e);
  return this.tween(n, (r.local ? Bd : Fd)(r, t));
}
function Yd(e, t) {
  return function() {
    si(this, e).delay = +t.apply(this, arguments);
  };
}
function Zd(e, t) {
  return t = +t, function() {
    si(this, e).delay = t;
  };
}
function Xd(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Yd : Zd)(t, e)) : Je(this.node(), t).delay;
}
function Wd(e, t) {
  return function() {
    lt(this, e).duration = +t.apply(this, arguments);
  };
}
function qd(e, t) {
  return t = +t, function() {
    lt(this, e).duration = t;
  };
}
function Gd(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Wd : qd)(t, e)) : Je(this.node(), t).duration;
}
function Ud(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    lt(this, e).ease = t;
  };
}
function Qd(e) {
  var t = this._id;
  return arguments.length ? this.each(Ud(t, e)) : Je(this.node(), t).ease;
}
function Jd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    lt(this, e).ease = n;
  };
}
function jd(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Jd(this._id, e));
}
function $d(e) {
  typeof e != "function" && (e = ya(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new wt(r, this._parents, this._name, this._id);
}
function eh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], f = l.length, h = s[a] = new Array(f), d, g = 0; g < f; ++g)
      (d = l[g] || c[g]) && (h[g] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new wt(s, this._parents, this._name, this._id);
}
function th(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function nh(e, t, n) {
  var r, o, i = th(t) ? si : lt;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function rh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Je(this.node(), n).on.on(e) : this.each(nh(n, e, t));
}
function oh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function ih() {
  return this.on("end.remove", oh(this._id));
}
function sh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ti(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), f, h, d = 0; d < l; ++d)
      (f = a[d]) && (h = e.call(f, f.__data__, d, a)) && ("__data__" in f && (h.__data__ = f.__data__), c[d] = h, Qr(c[d], t, n, d, c, Je(f, n)));
  return new wt(i, this._parents, t, n);
}
function ah(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ma(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, f, h = 0; h < c; ++h)
      if (f = l[h]) {
        for (var d = e.call(f, f.__data__, h, l), g, v = Je(f, n), _ = 0, y = d.length; _ < y; ++_)
          (g = d[_]) && Qr(g, t, n, _, d, v);
        i.push(d), s.push(f);
      }
  return new wt(i, s, t, n);
}
var lh = tr.prototype.constructor;
function ch() {
  return new lh(this._groups, this._parents);
}
function uh(e, t) {
  var n, r, o;
  return function() {
    var i = yn(this, e), s = (this.style.removeProperty(e), yn(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Fa(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function fh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = yn(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function dh(e, t, n) {
  var r, o, i;
  return function() {
    var s = yn(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), yn(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function hh(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = lt(this, e), c = l.on, f = l.value[i] == null ? a || (a = Fa(t)) : void 0;
    (c !== n || o !== f) && (r = (n = c).copy()).on(s, o = f), l.on = r;
  };
}
function gh(e, t, n) {
  var r = (e += "") == "transform" ? vd : Ba;
  return t == null ? this.styleTween(e, uh(e, r)).on("end.style." + e, Fa(e)) : typeof t == "function" ? this.styleTween(e, dh(e, r, ai(this, "style." + e, t))).each(hh(this._id, e)) : this.styleTween(e, fh(e, r, t), n).on("end.style." + e, null);
}
function vh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function ph(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && vh(e, s, n)), r;
  }
  return i._value = t, i;
}
function mh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, ph(e, t, n ?? ""));
}
function yh(e) {
  return function() {
    this.textContent = e;
  };
}
function _h(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function wh(e) {
  return this.tween("text", typeof e == "function" ? _h(ai(this, "text", e)) : yh(e == null ? "" : e + ""));
}
function bh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function xh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && bh(o)), t;
  }
  return r._value = e, r;
}
function Eh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, xh(e));
}
function Sh() {
  for (var e = this._name, t = this._id, n = Ka(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var f = Je(l, t);
        Qr(l, e, n, c, s, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new wt(r, this._parents, e, n);
}
function kh() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = lt(this, r), f = c.on;
      f !== e && (t = (e = f).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var Ch = 0;
function wt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ka() {
  return ++Ch;
}
var ut = tr.prototype;
wt.prototype = {
  constructor: wt,
  select: sh,
  selectAll: ah,
  selectChild: ut.selectChild,
  selectChildren: ut.selectChildren,
  filter: $d,
  merge: eh,
  selection: ch,
  transition: Sh,
  call: ut.call,
  nodes: ut.nodes,
  node: ut.node,
  size: ut.size,
  empty: ut.empty,
  each: ut.each,
  on: rh,
  attr: Hd,
  attrTween: Kd,
  style: gh,
  styleTween: mh,
  text: wh,
  textTween: Eh,
  remove: ih,
  tween: Ad,
  delay: Xd,
  duration: Gd,
  ease: Qd,
  easeVarying: jd,
  end: kh,
  [Symbol.iterator]: ut[Symbol.iterator]
};
function Nh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Ph = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Nh
};
function Mh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Ah(e) {
  var t, n;
  e instanceof wt ? (t = e._id, e = e._name) : (t = Ka(), (n = Ph).time = ii(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && Qr(l, e, t, c, s, n || Mh(l, t));
  return new wt(r, this._parents, e, t);
}
tr.prototype.interrupt = Nd;
tr.prototype.transition = Ah;
const hr = (e) => () => e;
function Ih(e, {
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
function vt(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
vt.prototype = {
  constructor: vt,
  scale: function(e) {
    return e === 1 ? this : new vt(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new vt(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Jr = new vt(1, 0, 0);
Ya.prototype = vt.prototype;
function Ya(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Jr;
  return e.__zoom;
}
function ao(e) {
  e.stopImmediatePropagation();
}
function An(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Th(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Dh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ui() {
  return this.__zoom || Jr;
}
function zh(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Oh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Rh(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Za() {
  var e = Th, t = Dh, n = Rh, r = zh, o = Oh, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = yr, c = qr("start", "zoom", "end"), f, h, d, g = 500, v = 150, _ = 0, y = 10;
  function b(p) {
    p.property("__zoom", Ui).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", Y).filter(o).on("touchstart.zoom", P).on("touchmove.zoom", x).on("touchend.zoom touchcancel.zoom", N).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(p, S, E, I) {
    var R = p.selection ? p.selection() : p;
    R.property("__zoom", Ui), p !== R ? A(p, S, E, I) : R.interrupt().each(function() {
      T(this, arguments).event(I).start().zoom(null, typeof S == "function" ? S.apply(this, arguments) : S).end();
    });
  }, b.scaleBy = function(p, S, E, I) {
    b.scaleTo(p, function() {
      var R = this.__zoom.k, D = typeof S == "function" ? S.apply(this, arguments) : S;
      return R * D;
    }, E, I);
  }, b.scaleTo = function(p, S, E, I) {
    b.transform(p, function() {
      var R = t.apply(this, arguments), D = this.__zoom, H = E == null ? w(R) : typeof E == "function" ? E.apply(this, arguments) : E, B = D.invert(H), X = typeof S == "function" ? S.apply(this, arguments) : S;
      return n(k(C(D, X), H, B), R, s);
    }, E, I);
  }, b.translateBy = function(p, S, E, I) {
    b.transform(p, function() {
      return n(this.__zoom.translate(
        typeof S == "function" ? S.apply(this, arguments) : S,
        typeof E == "function" ? E.apply(this, arguments) : E
      ), t.apply(this, arguments), s);
    }, null, I);
  }, b.translateTo = function(p, S, E, I, R) {
    b.transform(p, function() {
      var D = t.apply(this, arguments), H = this.__zoom, B = I == null ? w(D) : typeof I == "function" ? I.apply(this, arguments) : I;
      return n(Jr.translate(B[0], B[1]).scale(H.k).translate(
        typeof S == "function" ? -S.apply(this, arguments) : -S,
        typeof E == "function" ? -E.apply(this, arguments) : -E
      ), D, s);
    }, I, R);
  };
  function C(p, S) {
    return S = Math.max(i[0], Math.min(i[1], S)), S === p.k ? p : new vt(S, p.x, p.y);
  }
  function k(p, S, E) {
    var I = S[0] - E[0] * p.k, R = S[1] - E[1] * p.k;
    return I === p.x && R === p.y ? p : new vt(p.k, I, R);
  }
  function w(p) {
    return [(+p[0][0] + +p[1][0]) / 2, (+p[0][1] + +p[1][1]) / 2];
  }
  function A(p, S, E, I) {
    p.on("start.zoom", function() {
      T(this, arguments).event(I).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(I).end();
    }).tween("zoom", function() {
      var R = this, D = arguments, H = T(R, D).event(I), B = t.apply(R, D), X = E == null ? w(B) : typeof E == "function" ? E.apply(R, D) : E, Z = Math.max(B[1][0] - B[0][0], B[1][1] - B[0][1]), F = R.__zoom, U = typeof S == "function" ? S.apply(R, D) : S, W = l(F.invert(X).concat(Z / F.k), U.invert(X).concat(Z / U.k));
      return function(q) {
        if (q === 1) q = U;
        else {
          var Q = W(q), ce = Z / Q[2];
          q = new vt(ce, X[0] - Q[0] * ce, X[1] - Q[1] * ce);
        }
        H.zoom(null, q);
      };
    });
  }
  function T(p, S, E) {
    return !E && p.__zooming || new z(p, S);
  }
  function z(p, S) {
    this.that = p, this.args = S, this.active = 0, this.sourceEvent = null, this.extent = t.apply(p, S), this.taps = 0;
  }
  z.prototype = {
    event: function(p) {
      return p && (this.sourceEvent = p), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(p, S) {
      return this.mouse && p !== "mouse" && (this.mouse[1] = S.invert(this.mouse[0])), this.touch0 && p !== "touch" && (this.touch0[1] = S.invert(this.touch0[0])), this.touch1 && p !== "touch" && (this.touch1[1] = S.invert(this.touch1[0])), this.that.__zoom = S, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(p) {
      var S = Ke(this.that).datum();
      c.call(
        p,
        this.that,
        new Ih(p, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: c
        }),
        S
      );
    }
  };
  function M(p, ...S) {
    if (!e.apply(this, arguments)) return;
    var E = T(this, S).event(p), I = this.__zoom, R = Math.max(i[0], Math.min(i[1], I.k * Math.pow(2, r.apply(this, arguments)))), D = We(p);
    if (E.wheel)
      (E.mouse[0][0] !== D[0] || E.mouse[0][1] !== D[1]) && (E.mouse[1] = I.invert(E.mouse[0] = D)), clearTimeout(E.wheel);
    else {
      if (I.k === R) return;
      E.mouse = [D, I.invert(D)], br(this), E.start();
    }
    An(p), E.wheel = setTimeout(H, v), E.zoom("mouse", n(k(C(I, R), E.mouse[0], E.mouse[1]), E.extent, s));
    function H() {
      E.wheel = null, E.end();
    }
  }
  function V(p, ...S) {
    if (d || !e.apply(this, arguments)) return;
    var E = p.currentTarget, I = T(this, S, !0).event(p), R = Ke(p.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", Z, !0), D = We(p, E), H = p.clientX, B = p.clientY;
    Pa(p.view), ao(p), I.mouse = [D, this.__zoom.invert(D)], br(this), I.start();
    function X(F) {
      if (An(F), !I.moved) {
        var U = F.clientX - H, W = F.clientY - B;
        I.moved = U * U + W * W > _;
      }
      I.event(F).zoom("mouse", n(k(I.that.__zoom, I.mouse[0] = We(F, E), I.mouse[1]), I.extent, s));
    }
    function Z(F) {
      R.on("mousemove.zoom mouseup.zoom", null), Ma(F.view, I.moved), An(F), I.event(F).end();
    }
  }
  function Y(p, ...S) {
    if (e.apply(this, arguments)) {
      var E = this.__zoom, I = We(p.changedTouches ? p.changedTouches[0] : p, this), R = E.invert(I), D = E.k * (p.shiftKey ? 0.5 : 2), H = n(k(C(E, D), I, R), t.apply(this, S), s);
      An(p), a > 0 ? Ke(this).transition().duration(a).call(A, H, I, p) : Ke(this).call(b.transform, H, I, p);
    }
  }
  function P(p, ...S) {
    if (e.apply(this, arguments)) {
      var E = p.touches, I = E.length, R = T(this, S, p.changedTouches.length === I).event(p), D, H, B, X;
      for (ao(p), H = 0; H < I; ++H)
        B = E[H], X = We(B, this), X = [X, this.__zoom.invert(X), B.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== X[2] && (R.touch1 = X, R.taps = 0) : (R.touch0 = X, D = !0, R.taps = 1 + !!f);
      f && (f = clearTimeout(f)), D && (R.taps < 2 && (h = X[0], f = setTimeout(function() {
        f = null;
      }, g)), br(this), R.start());
    }
  }
  function x(p, ...S) {
    if (this.__zooming) {
      var E = T(this, S).event(p), I = p.changedTouches, R = I.length, D, H, B, X;
      for (An(p), D = 0; D < R; ++D)
        H = I[D], B = We(H, this), E.touch0 && E.touch0[2] === H.identifier ? E.touch0[0] = B : E.touch1 && E.touch1[2] === H.identifier && (E.touch1[0] = B);
      if (H = E.that.__zoom, E.touch1) {
        var Z = E.touch0[0], F = E.touch0[1], U = E.touch1[0], W = E.touch1[1], q = (q = U[0] - Z[0]) * q + (q = U[1] - Z[1]) * q, Q = (Q = W[0] - F[0]) * Q + (Q = W[1] - F[1]) * Q;
        H = C(H, Math.sqrt(q / Q)), B = [(Z[0] + U[0]) / 2, (Z[1] + U[1]) / 2], X = [(F[0] + W[0]) / 2, (F[1] + W[1]) / 2];
      } else if (E.touch0) B = E.touch0[0], X = E.touch0[1];
      else return;
      E.zoom("touch", n(k(H, B, X), E.extent, s));
    }
  }
  function N(p, ...S) {
    if (this.__zooming) {
      var E = T(this, S).event(p), I = p.changedTouches, R = I.length, D, H;
      for (ao(p), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, g), D = 0; D < R; ++D)
        H = I[D], E.touch0 && E.touch0[2] === H.identifier ? delete E.touch0 : E.touch1 && E.touch1[2] === H.identifier && delete E.touch1;
      if (E.touch1 && !E.touch0 && (E.touch0 = E.touch1, delete E.touch1), E.touch0) E.touch0[1] = this.__zoom.invert(E.touch0[0]);
      else if (E.end(), E.taps === 2 && (H = We(H, this), Math.hypot(h[0] - H[0], h[1] - H[1]) < y)) {
        var B = Ke(this).on("dblclick.zoom");
        B && B.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : hr(+p), b) : r;
  }, b.filter = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : hr(!!p), b) : e;
  }, b.touchable = function(p) {
    return arguments.length ? (o = typeof p == "function" ? p : hr(!!p), b) : o;
  }, b.extent = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : hr([[+p[0][0], +p[0][1]], [+p[1][0], +p[1][1]]]), b) : t;
  }, b.scaleExtent = function(p) {
    return arguments.length ? (i[0] = +p[0], i[1] = +p[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(p) {
    return arguments.length ? (s[0][0] = +p[0][0], s[1][0] = +p[1][0], s[0][1] = +p[0][1], s[1][1] = +p[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(p) {
    return arguments.length ? (n = p, b) : n;
  }, b.duration = function(p) {
    return arguments.length ? (a = +p, b) : a;
  }, b.interpolate = function(p) {
    return arguments.length ? (l = p, b) : l;
  }, b.on = function() {
    var p = c.on.apply(c, arguments);
    return p === c ? b : p;
  }, b.clickDistance = function(p) {
    return arguments.length ? (_ = (p = +p) * p, b) : Math.sqrt(_);
  }, b.tapDistance = function(p) {
    return arguments.length ? (y = +p, b) : y;
  }, b;
}
const Zn = {
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
}, To = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Xa = ["Enter", " ", "Escape"], Hh = {
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
var wn;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(wn || (wn = {}));
var hn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(hn || (hn = {}));
var Dr;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Dr || (Dr = {}));
const Do = {
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
var Mt;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Mt || (Mt = {}));
var zr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(zr || (zr = {}));
var J;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(J || (J = {}));
const Qi = {
  [J.Left]: J.Right,
  [J.Right]: J.Left,
  [J.Top]: J.Bottom,
  [J.Bottom]: J.Top
};
function Lh(e, t) {
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
function Ji(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Vh(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Wa = (e) => "id" in e && "source" in e && "target" in e, Bh = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), li = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), rr = (e, t = [0, 0]) => {
  const { width: n, height: r } = Ft(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Fh = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : li(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Or(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return jr(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return $r(n);
}, or = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = jr(n, Or(o)), r = !0);
  }), r ? $r(n) : { x: 0, y: 0, width: 0, height: 0 };
}, ci = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...sr(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: f, selectable: h = !0, hidden: d = !1 } = c;
    if (s && !h || d)
      continue;
    const g = f.width ?? c.width ?? c.initialWidth ?? null, v = f.height ?? c.height ?? c.initialHeight ?? null, _ = Xn(a, xn(c)), y = (g ?? 0) * (v ?? 0), b = i && _ > 0;
    (!c.internals.handleBounds || b || _ >= y || c.dragging) && l.push(c);
  }
  return l;
}, Kh = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Yh(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Zh({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Yh(e, s), l = or(a), c = ui(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function qa({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, f = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Zn.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (h = [
        [l, c],
        [l + g, c + v]
      ]);
    }
  else a && En(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const d = En(h) ? $t(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Zn.error015()), {
    position: {
      x: d.x - l + (s.measured.width ?? 0) * f[0],
      y: d.y - c + (s.measured.height ?? 0) * f[1]
    },
    positionAbsolute: d
  };
}
async function Xh({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), s = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const g = i.has(d.id), v = !g && d.parentId && s.find((_) => _.id === d.parentId);
    (g || v) && s.push(d);
  }
  const a = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), f = Kh(s, l);
  for (const d of l)
    a.has(d.id) && !f.find((v) => v.id === d.id) && f.push(d);
  if (!o)
    return {
      edges: f,
      nodes: s
    };
  const h = await o({
    nodes: s,
    edges: f
  });
  return typeof h == "boolean" ? h ? { edges: f, nodes: s } : { edges: [], nodes: [] } : h;
}
const bn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), $t = (e = { x: 0, y: 0 }, t, n) => ({
  x: bn(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: bn(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Ga(e, t, n) {
  const { width: r, height: o } = Ft(n), { x: i, y: s } = n.internals.positionAbsolute;
  return $t(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const ji = (e, t, n) => e < t ? bn(Math.abs(e - t), 1, t) / t : e > n ? -bn(Math.abs(e - n), 1, t) / t : 0, Ua = (e, t, n = 15, r = 40) => {
  const o = ji(e.x, r, t.width - r) * n, i = ji(e.y, r, t.height - r) * n;
  return [o, i];
}, jr = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), zo = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), $r = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), xn = (e, t = [0, 0]) => {
  const { x: n, y: r } = li(e) ? e.internals.positionAbsolute : rr(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Or = (e, t = [0, 0]) => {
  const { x: n, y: r } = li(e) ? e.internals.positionAbsolute : rr(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Qa = (e, t) => $r(jr(zo(e), zo(t))), Xn = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, $i = (e) => pt(e.width) && pt(e.height) && pt(e.x) && pt(e.y), pt = (e) => !isNaN(e) && isFinite(e), Wh = (e, t) => {
}, ir = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), sr = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ir(a, s) : a;
}, Rr = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function an(e, t) {
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
function qh(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = an(e, n), o = an(e, t);
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
    const r = an(e.top ?? e.y ?? 0, n), o = an(e.bottom ?? e.y ?? 0, n), i = an(e.left ?? e.x ?? 0, t), s = an(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Gh(e, t, n, r, o, i) {
  const { x: s, y: a } = Rr(e, [t, n, r]), { x: l, y: c } = Rr({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), f = o - l, h = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(f),
    bottom: Math.floor(h)
  };
}
const ui = (e, t, n, r, o, i) => {
  const s = qh(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), f = bn(c, r, o), h = e.x + e.width / 2, d = e.y + e.height / 2, g = t / 2 - h * f, v = n / 2 - d * f, _ = Gh(e, g, v, f, t, n), y = {
    left: Math.min(_.left - s.left, 0),
    top: Math.min(_.top - s.top, 0),
    right: Math.min(_.right - s.right, 0),
    bottom: Math.min(_.bottom - s.bottom, 0)
  };
  return {
    x: g - y.left + y.right,
    y: v - y.top + y.bottom,
    zoom: f
  };
}, Wn = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function En(e) {
  return e != null && e !== "parent";
}
function Ft(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Ja(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Uh(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Qh(e) {
  return { ...Hh, ...e || {} };
}
function lo(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Ue(e), a = sr({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? ir(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const ja = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), $a = (e) => e?.getRootNode?.() || window?.document, Jh = ["INPUT", "SELECT", "TEXTAREA"];
function el(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Jh.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const tl = (e) => "clientX" in e, Ue = (e, t) => {
  const n = tl(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, es = (e, t, n, r, o) => {
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
      ...ja(s)
    };
  });
};
function jh({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, f = Math.abs(l - e), h = Math.abs(c - t);
  return [l, c, f, h];
}
function gr(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function ts({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case J.Left:
      return [t - gr(t - r, i), n];
    case J.Right:
      return [t + gr(r - t, i), n];
    case J.Top:
      return [t, n - gr(n - o, i)];
    case J.Bottom:
      return [t, n + gr(o - n, i)];
  }
}
function nl({ sourceX: e, sourceY: t, sourcePosition: n = J.Bottom, targetX: r, targetY: o, targetPosition: i = J.Top, curvature: s = 0.25 }) {
  const [a, l] = ts({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, f] = ts({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [h, d, g, v] = jh({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: c,
    targetControlY: f
  });
  return [
    `M${e},${t} C${a},${l} ${c},${f} ${r},${o}`,
    h,
    d,
    g,
    v
  ];
}
function rl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function $h({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, a = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + a;
}
function eg({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = jr(Or(e), Or(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Xn(s, $r(i)) > 0;
}
const tg = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, ng = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), rg = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || tg;
  let o;
  return Wa(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, ng(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function ol({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = rl({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const ns = {
  [J.Left]: { x: -1, y: 0 },
  [J.Right]: { x: 1, y: 0 },
  [J.Top]: { x: 0, y: -1 },
  [J.Bottom]: { x: 0, y: 1 }
}, og = ({ source: e, sourcePosition: t = J.Bottom, target: n }) => t === J.Left || t === J.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, rs = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function ig({ source: e, sourcePosition: t = J.Bottom, target: n, targetPosition: r = J.Top, center: o, offset: i, stepPosition: s }) {
  const a = ns[t], l = ns[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, f = { x: n.x + l.x * i, y: n.y + l.y * i }, h = og({
    source: c,
    sourcePosition: t,
    target: f
  }), d = h.x !== 0 ? "x" : "y", g = h[d];
  let v = [], _, y;
  const b = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , k, w] = rl({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * l[d] === -1) {
    d === "x" ? (_ = o.x ?? c.x + (f.x - c.x) * s, y = o.y ?? (c.y + f.y) / 2) : (_ = o.x ?? (c.x + f.x) / 2, y = o.y ?? c.y + (f.y - c.y) * s);
    const T = [
      { x: _, y: c.y },
      { x: _, y: f.y }
    ], z = [
      { x: c.x, y },
      { x: f.x, y }
    ];
    a[d] === g ? v = d === "x" ? T : z : v = d === "x" ? z : T;
  } else {
    const T = [{ x: c.x, y: f.y }], z = [{ x: f.x, y: c.y }];
    if (d === "x" ? v = a.x === g ? z : T : v = a.y === g ? T : z, t === r) {
      const x = Math.abs(e[d] - n[d]);
      if (x <= i) {
        const N = Math.min(i - 1, i - x);
        a[d] === g ? b[d] = (c[d] > e[d] ? -1 : 1) * N : C[d] = (f[d] > n[d] ? -1 : 1) * N;
      }
    }
    if (t !== r) {
      const x = d === "x" ? "y" : "x", N = a[d] === l[x], p = c[x] > f[x], S = c[x] < f[x];
      (a[d] === 1 && (!N && p || N && S) || a[d] !== 1 && (!N && S || N && p)) && (v = d === "x" ? T : z);
    }
    const M = { x: c.x + b.x, y: c.y + b.y }, V = { x: f.x + C.x, y: f.y + C.y }, Y = Math.max(Math.abs(M.x - v[0].x), Math.abs(V.x - v[0].x)), P = Math.max(Math.abs(M.y - v[0].y), Math.abs(V.y - v[0].y));
    Y >= P ? (_ = (M.x + V.x) / 2, y = v[0].y) : (_ = v[0].x, y = (M.y + V.y) / 2);
  }
  return [[
    e,
    { x: c.x + b.x, y: c.y + b.y },
    ...v,
    { x: f.x + C.x, y: f.y + C.y },
    n
  ], _, y, k, w];
}
function sg(e, t, n, r) {
  const o = Math.min(rs(e, t) / 2, rs(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, f = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * f}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function fi({ sourceX: e, sourceY: t, sourcePosition: n = J.Bottom, targetX: r, targetY: o, targetPosition: i = J.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: f = 0.5 }) {
  const [h, d, g, v, _] = ig({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: f
  });
  return [h.reduce((b, C, k) => {
    let w = "";
    return k > 0 && k < h.length - 1 ? w = sg(h[k - 1], C, h[k + 1], s) : w = `${k === 0 ? "M" : "L"}${C.x} ${C.y}`, b += w, b;
  }, ""), d, g, v, _];
}
function os(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function ag(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!os(t) || !os(n))
    return null;
  const r = t.internals.handleBounds || is(t.handles), o = n.internals.handleBounds || is(n.handles), i = ss(r?.source ?? [], e.sourceHandle), s = ss(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === wn.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Zn.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || J.Bottom, l = s?.position || J.Top, c = en(t, i, a), f = en(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: f.x,
    targetY: f.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function is(e) {
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
function en(e, t, n = J.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Ft(e);
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
function ss(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Oo(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function lg(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = Oo(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const il = 1e3, cg = 10, di = {
  nodeOrigin: [0, 0],
  nodeExtent: To,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, ug = {
  ...di,
  checkEquality: !0
};
function hi(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function fg(e, t, n) {
  const r = hi(di, n);
  for (const o of e.values())
    if (o.parentId)
      vi(o, e, t, r);
    else {
      const i = rr(o, r.nodeOrigin), s = En(o.extent) ? o.extent : r.nodeExtent, a = $t(i, s, Ft(o));
      o.internals.positionAbsolute = a;
    }
}
function dg(e, t) {
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
function gi(e) {
  return e === "manual";
}
function hg(e, t, n, r = {}) {
  const o = hi(ug, r), i = { i: 0 }, s = new Map(t), a = o?.elevateNodesOnSelect && !gi(o.zIndexMode) ? il : 0;
  let l = e.length > 0;
  t.clear(), n.clear();
  for (const c of e) {
    let f = s.get(c.id);
    if (o.checkEquality && c === f?.internals.userNode)
      t.set(c.id, f);
    else {
      const h = rr(c, o.nodeOrigin), d = En(c.extent) ? c.extent : o.nodeExtent, g = $t(h, d, Ft(c));
      f = {
        ...o.defaults,
        ...c,
        measured: {
          width: c.measured?.width,
          height: c.measured?.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: dg(c, f),
          z: sl(c, a, o.zIndexMode),
          userNode: c
        }
      }, t.set(c.id, f);
    }
    (f.measured === void 0 || f.measured.width === void 0 || f.measured.height === void 0) && !f.hidden && (l = !1), c.parentId && vi(f, t, n, r, i);
  }
  return l;
}
function gg(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function vi(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a, zIndexMode: l } = hi(di, r), c = e.parentId, f = t.get(c);
  if (!f) {
    console.warn(`Parent node ${c} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  gg(e, n), o && !f.parentId && f.internals.rootParentIndex === void 0 && l === "auto" && (f.internals.rootParentIndex = ++o.i, f.internals.z = f.internals.z + o.i * cg), o && f.internals.rootParentIndex !== void 0 && (o.i = f.internals.rootParentIndex);
  const h = i && !gi(l) ? il : 0, { x: d, y: g, z: v } = vg(e, f, s, a, h, l), { positionAbsolute: _ } = e.internals, y = d !== _.x || g !== _.y;
  (y || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: d, y: g } : _,
      z: v
    }
  });
}
function sl(e, t, n) {
  const r = pt(e.zIndex) ? e.zIndex : 0;
  return gi(n) ? r : r + (e.selected ? t : 0);
}
function vg(e, t, n, r, o, i) {
  const { x: s, y: a } = t.internals.positionAbsolute, l = Ft(e), c = rr(e, n), f = En(e.extent) ? $t(c, e.extent, l) : c;
  let h = $t({ x: s + f.x, y: a + f.y }, r, l);
  e.extent === "parent" && (h = Ga(h, l, t));
  const d = sl(e, o, i), g = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: g >= d ? g + 1 : d
  };
}
function pg(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? xn(a), c = Qa(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, f = Ft(a), h = a.origin ?? r, d = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, v = Math.max(f.width, Math.round(s.width)), _ = Math.max(f.height, Math.round(s.height)), y = (v - f.width) * h[0], b = (_ - f.height) * h[1];
    (d > 0 || g > 0 || y || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - d + y,
        y: a.position.y - g + b
      }
    }), n.get(l)?.forEach((C) => {
      e.some((k) => k.id === C.id) || o.push({
        id: C.id,
        type: "position",
        position: {
          x: C.position.x + d,
          y: C.position.y + g
        }
      });
    })), (f.width < s.width || f.height < s.height || d || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (d ? h[0] * d - y : 0),
        height: _ + (g ? h[1] * g - b : 0)
      }
    });
  }), o;
}
function mg(e, t, n, r, o, i, s) {
  const a = r?.querySelector(".xyflow__viewport");
  let l = !1;
  if (!a)
    return { changes: [], updatedInternals: l };
  const c = [], f = window.getComputedStyle(a), { m22: h } = new window.DOMMatrixReadOnly(f.transform), d = [];
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
    const _ = ja(g.nodeElement), y = v.measured.width !== _.width || v.measured.height !== _.height;
    if (!!(_.width && _.height && (y || !v.internals.handleBounds || g.force))) {
      const C = g.nodeElement.getBoundingClientRect(), k = En(v.extent) ? v.extent : i;
      let { positionAbsolute: w } = v.internals;
      v.parentId && v.extent === "parent" ? w = Ga(w, _, t.get(v.parentId)) : k && (w = $t(w, k, _));
      const A = {
        ...v,
        measured: _,
        internals: {
          ...v.internals,
          positionAbsolute: w,
          handleBounds: {
            source: es("source", g.nodeElement, C, h, v.id),
            target: es("target", g.nodeElement, C, h, v.id)
          }
        }
      };
      t.set(v.id, A), v.parentId && vi(A, t, n, { nodeOrigin: o, zIndexMode: s }), l = !0, y && (c.push({
        id: v.id,
        type: "dimensions",
        dimensions: _
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: xn(A, o)
      }));
    }
  }
  if (d.length > 0) {
    const g = pg(d, t, n, o);
    c.push(...g);
  }
  return { changes: c, updatedInternals: l };
}
async function yg({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function as(e, t, n, r, o, i) {
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
function _g(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, f = `${i}-${a}--${o}-${s}`;
    as("source", l, f, e, o, s), as("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function al(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : al(n, t) : !1;
}
function ls(e, t, n) {
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
function wg(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !al(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function co({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function bg({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = ir(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function xg({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, f = null, h = !1, d = null, g = !1, v = !1, _ = null;
  function y({ noDragClassName: C, handleSelector: k, domNode: w, isSelectable: A, nodeId: T, nodeClickDistance: z = 0 }) {
    d = Ke(w);
    function M({ x, y: N }) {
      const { nodeLookup: p, nodeExtent: S, snapGrid: E, snapToGrid: I, nodeOrigin: R, onNodeDrag: D, onSelectionDrag: H, onError: B, updateNodePositions: X } = t();
      i = { x, y: N };
      let Z = !1;
      const F = a.size > 1, U = F && S ? zo(or(a)) : null, W = F && I ? bg({
        dragItems: a,
        snapGrid: E,
        x,
        y: N
      }) : null;
      for (const [q, Q] of a) {
        if (!p.has(q))
          continue;
        let ce = { x: x - Q.distance.x, y: N - Q.distance.y };
        I && (ce = W ? {
          x: Math.round(ce.x + W.x),
          y: Math.round(ce.y + W.y)
        } : ir(ce, E));
        let we = null;
        if (F && S && !Q.extent && U) {
          const { positionAbsolute: $ } = Q.internals, Me = $.x - U.x + S[0][0], St = $.x + Q.measured.width - U.x2 + S[1][0], kt = $.y - U.y + S[0][1], ct = $.y + Q.measured.height - U.y2 + S[1][1];
          we = [
            [Me, kt],
            [St, ct]
          ];
        }
        const { position: j, positionAbsolute: pe } = qa({
          nodeId: q,
          nextPosition: ce,
          nodeLookup: p,
          nodeExtent: we || S,
          nodeOrigin: R,
          onError: B
        });
        Z = Z || Q.position.x !== j.x || Q.position.y !== j.y, Q.position = j, Q.internals.positionAbsolute = pe;
      }
      if (v = v || Z, !!Z && (X(a, !0), _ && (r || D || !T && H))) {
        const [q, Q] = co({
          nodeId: T,
          dragItems: a,
          nodeLookup: p
        });
        r?.(_, a, q, Q), D?.(_, q, Q), T || H?.(_, Q);
      }
    }
    async function V() {
      if (!f)
        return;
      const { transform: x, panBy: N, autoPanSpeed: p, autoPanOnNodeDrag: S } = t();
      if (!S) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, I] = Ua(c, f, p);
      (E !== 0 || I !== 0) && (i.x = (i.x ?? 0) - E / x[2], i.y = (i.y ?? 0) - I / x[2], await N({ x: E, y: I }) && M(i)), s = requestAnimationFrame(V);
    }
    function Y(x) {
      const { nodeLookup: N, multiSelectionActive: p, nodesDraggable: S, transform: E, snapGrid: I, snapToGrid: R, selectNodesOnDrag: D, onNodeDragStart: H, onSelectionDragStart: B, unselectNodesAndEdges: X } = t();
      h = !0, (!D || !A) && !p && T && (N.get(T)?.selected || X()), A && D && T && e?.(T);
      const Z = lo(x.sourceEvent, { transform: E, snapGrid: I, snapToGrid: R, containerBounds: f });
      if (i = Z, a = wg(N, S, Z, T), a.size > 0 && (n || H || !T && B)) {
        const [F, U] = co({
          nodeId: T,
          dragItems: a,
          nodeLookup: N
        });
        n?.(x.sourceEvent, a, F, U), H?.(x.sourceEvent, F, U), T || B?.(x.sourceEvent, U);
      }
    }
    const P = Zf().clickDistance(z).on("start", (x) => {
      const { domNode: N, nodeDragThreshold: p, transform: S, snapGrid: E, snapToGrid: I } = t();
      f = N?.getBoundingClientRect() || null, g = !1, v = !1, _ = x.sourceEvent, p === 0 && Y(x), i = lo(x.sourceEvent, { transform: S, snapGrid: E, snapToGrid: I, containerBounds: f }), c = Ue(x.sourceEvent, f);
    }).on("drag", (x) => {
      const { autoPanOnNodeDrag: N, transform: p, snapGrid: S, snapToGrid: E, nodeDragThreshold: I, nodeLookup: R } = t(), D = lo(x.sourceEvent, { transform: p, snapGrid: S, snapToGrid: E, containerBounds: f });
      if (_ = x.sourceEvent, (x.sourceEvent.type === "touchmove" && x.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !R.has(T)) && (g = !0), !g) {
        if (!l && N && h && (l = !0, V()), !h) {
          const H = Ue(x.sourceEvent, f), B = H.x - c.x, X = H.y - c.y;
          Math.sqrt(B * B + X * X) > I && Y(x);
        }
        (i.x !== D.xSnapped || i.y !== D.ySnapped) && a && h && (c = Ue(x.sourceEvent, f), M(D));
      }
    }).on("end", (x) => {
      if (!(!h || g) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: N, updateNodePositions: p, onNodeDragStop: S, onSelectionDragStop: E } = t();
        if (v && (p(a, !1), v = !1), o || S || !T && E) {
          const [I, R] = co({
            nodeId: T,
            dragItems: a,
            nodeLookup: N,
            dragging: !1
          });
          o?.(x.sourceEvent, a, I, R), S?.(x.sourceEvent, I, R), T || E?.(x.sourceEvent, R);
        }
      }
    }).filter((x) => {
      const N = x.target;
      return !x.button && (!C || !ls(N, `.${C}`, w)) && (!k || ls(N, k, w));
    });
    d.call(P);
  }
  function b() {
    d?.on(".drag", null);
  }
  return {
    update: y,
    destroy: b
  };
}
function Eg(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Xn(o, xn(i)) > 0 && r.push(i);
  return r;
}
const Sg = 250;
function kg(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = Eg(e, n, t + Sg);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: f, y: h } = en(a, c, c.position, !0), d = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(h - e.y, 2));
      d > t || (d < i ? (o = [{ ...c, x: f, y: h }], i = d) : d === i && o.push({ ...c, x: f, y: h }));
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
function ll(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...en(s, l, l.position, !0) } : l;
}
function cl(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Cg(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const ul = () => !0;
function Ng(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: f, flowId: h, panBy: d, cancelConnection: g, onConnectStart: v, onConnect: _, onConnectEnd: y, isValidConnection: b = ul, onReconnectEnd: C, updateConnection: k, getTransform: w, getFromHandle: A, autoPanSpeed: T, dragThreshold: z = 1, handleDomNode: M }) {
  const V = $a(e.target);
  let Y = 0, P;
  const { x, y: N } = Ue(e), p = cl(i, M), S = a?.getBoundingClientRect();
  let E = !1;
  if (!S || !p)
    return;
  const I = ll(o, p, r, l, t);
  if (!I)
    return;
  let R = Ue(e, S), D = !1, H = null, B = !1, X = null;
  function Z() {
    if (!f || !S)
      return;
    const [j, pe] = Ua(R, S, T);
    d({ x: j, y: pe }), Y = requestAnimationFrame(Z);
  }
  const F = {
    ...I,
    nodeId: o,
    type: p,
    position: I.position
  }, U = l.get(o);
  let q = {
    inProgress: !0,
    isValid: null,
    from: en(U, F, J.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: U,
    to: R,
    toHandle: null,
    toPosition: Qi[F.position],
    toNode: null,
    pointer: R
  };
  function Q() {
    E = !0, k(q), v?.(e, { nodeId: o, handleId: r, handleType: p });
  }
  z === 0 && Q();
  function ce(j) {
    if (!E) {
      const { x: ct, y: ae } = Ue(j), ye = ct - x, Xe = ae - N;
      if (!(ye * ye + Xe * Xe > z * z))
        return;
      Q();
    }
    if (!A() || !F) {
      we(j);
      return;
    }
    const pe = w();
    R = Ue(j, S), P = kg(sr(R, pe, !1, [1, 1]), n, l, F), D || (Z(), D = !0);
    const $ = fl(j, {
      handle: P,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: V,
      lib: c,
      flowId: h,
      nodeLookup: l
    });
    X = $.handleDomNode, H = $.connection, B = Cg(!!P, $.isValid);
    const Me = l.get(o), St = Me ? en(Me, F, J.Left, !0) : q.from, kt = {
      ...q,
      from: St,
      isValid: B,
      to: $.toHandle && B ? Rr({ x: $.toHandle.x, y: $.toHandle.y }, pe) : R,
      toHandle: $.toHandle,
      toPosition: B && $.toHandle ? $.toHandle.position : Qi[F.position],
      toNode: $.toHandle ? l.get($.toHandle.nodeId) : null,
      pointer: R
    };
    k(kt), q = kt;
  }
  function we(j) {
    if (!("touches" in j && j.touches.length > 0)) {
      if (E) {
        (P || X) && H && B && _?.(H);
        const { inProgress: pe, ...$ } = q, Me = {
          ...$,
          toPosition: q.toHandle ? q.toPosition : null
        };
        y?.(j, Me), i && C?.(j, Me);
      }
      g(), cancelAnimationFrame(Y), D = !1, B = !1, H = null, X = null, V.removeEventListener("mousemove", ce), V.removeEventListener("mouseup", we), V.removeEventListener("touchmove", ce), V.removeEventListener("touchend", we);
    }
  }
  V.addEventListener("mousemove", ce), V.addEventListener("mouseup", we), V.addEventListener("touchmove", ce), V.addEventListener("touchend", we);
}
function fl(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = ul, nodeLookup: f }) {
  const h = i === "target", d = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = Ue(e), _ = s.elementFromPoint(g, v), y = _?.classList.contains(`${a}-flow__handle`) ? _ : d, b = {
    handleDomNode: y,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (y) {
    const C = cl(void 0, y), k = y.getAttribute("data-nodeid"), w = y.getAttribute("data-handleid"), A = y.classList.contains("connectable"), T = y.classList.contains("connectableend");
    if (!k || !C)
      return b;
    const z = {
      source: h ? k : r,
      sourceHandle: h ? w : o,
      target: h ? r : k,
      targetHandle: h ? o : w
    };
    b.connection = z;
    const V = A && T && (n === wn.Strict ? h && C === "source" || !h && C === "target" : k !== r || w !== o);
    b.isValid = V && c(z), b.toHandle = ll(k, C, w, f, n, !0);
  }
  return b;
}
const cs = {
  onPointerDown: Ng,
  isValid: fl
};
function Pg({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ke(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: f = 1, pannable: h = !0, zoomable: d = !0, inversePan: g = !1 }) {
    const v = (k) => {
      if (k.sourceEvent.type !== "wheel" || !t)
        return;
      const w = n(), A = k.sourceEvent.ctrlKey && Wn() ? 10 : 1, T = -k.sourceEvent.deltaY * (k.sourceEvent.deltaMode === 1 ? 0.05 : k.sourceEvent.deltaMode ? 1 : 2e-3) * f, z = w[2] * Math.pow(2, T * A);
      t.scaleTo(z);
    };
    let _ = [0, 0];
    const y = (k) => {
      (k.sourceEvent.type === "mousedown" || k.sourceEvent.type === "touchstart") && (_ = [
        k.sourceEvent.clientX ?? k.sourceEvent.touches[0].clientX,
        k.sourceEvent.clientY ?? k.sourceEvent.touches[0].clientY
      ]);
    }, b = (k) => {
      const w = n();
      if (k.sourceEvent.type !== "mousemove" && k.sourceEvent.type !== "touchmove" || !t)
        return;
      const A = [
        k.sourceEvent.clientX ?? k.sourceEvent.touches[0].clientX,
        k.sourceEvent.clientY ?? k.sourceEvent.touches[0].clientY
      ], T = [A[0] - _[0], A[1] - _[1]];
      _ = A;
      const z = r() * Math.max(w[2], Math.log(w[2])) * (g ? -1 : 1), M = {
        x: w[0] - T[0] * z,
        y: w[1] - T[1] * z
      }, V = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: w[2]
      }, V, a);
    }, C = Za().on("start", y).on("zoom", h ? b : null).on("zoom.wheel", d ? v : null);
    o.call(C, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: We
  };
}
const eo = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), uo = ({ x: e, y: t, zoom: n }) => Jr.translate(e, t).scale(n), un = (e, t) => e.target.closest(`.${t}`), dl = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Mg = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, fo = (e, t = 0, n = Mg, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, hl = (e) => {
  const t = e.ctrlKey && Wn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Ag({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (f) => {
    if (un(f, t))
      return f.ctrlKey && f.preventDefault(), !1;
    f.preventDefault(), f.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (f.ctrlKey && s) {
      const y = We(f), b = hl(f), C = h * Math.pow(2, b);
      r.scaleTo(n, C, y, f);
      return;
    }
    const d = f.deltaMode === 1 ? 20 : 1;
    let g = o === hn.Vertical ? 0 : f.deltaX * d, v = o === hn.Horizontal ? 0 : f.deltaY * d;
    !Wn() && f.shiftKey && o !== hn.Vertical && (g = f.deltaY * d, v = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(v / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const _ = eo(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(f, _), e.panScrollTimeout = setTimeout(() => {
      c?.(f, _), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(f, _));
  };
}
function Ig({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = un(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Tg({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = eo(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Dg({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && dl(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, eo(i.transform));
  };
}
function zg({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && dl(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = eo(s.transform);
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
function Og({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c, connectionInProgress: f }) {
  return (h) => {
    const d = e || t, g = n && h.ctrlKey, v = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (un(h, `${c}-flow__node`) || un(h, `${c}-flow__edge`)))
      return !0;
    if (!r && !d && !o && !i && !n || s || f && !v || un(h, a) && v || un(h, l) && (!v || o && v && !e) || !n && h.ctrlKey && v)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!d && !o && !g && v || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const _ = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || v) && _;
  };
}
function Rg({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), h = Za().scaleExtent([t, n]).translateExtent(r), d = Ke(e).call(h);
  C({
    x: o.x,
    y: o.y,
    zoom: bn(o.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], r);
  const g = d.on("wheel.zoom"), v = d.on("dblclick.zoom");
  h.wheelDelta(hl);
  function _(P, x) {
    return d ? new Promise((N) => {
      h?.interpolate(x?.interpolate === "linear" ? Rn : yr).transform(fo(d, x?.duration, x?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function y({ noWheelClassName: P, noPanClassName: x, onPaneContextMenu: N, userSelectionActive: p, panOnScroll: S, panOnDrag: E, panOnScrollMode: I, panOnScrollSpeed: R, preventScrolling: D, zoomOnPinch: H, zoomOnScroll: B, zoomOnDoubleClick: X, zoomActivationKeyPressed: Z, lib: F, onTransformChange: U, connectionInProgress: W, paneClickDistance: q, selectionOnDrag: Q }) {
    p && !c.isZoomingOrPanning && b();
    const ce = S && !Z && !p;
    h.clickDistance(Q ? 1 / 0 : !pt(q) || q < 0 ? 0 : q);
    const we = ce ? Ag({
      zoomPanValues: c,
      noWheelClassName: P,
      d3Selection: d,
      d3Zoom: h,
      panOnScrollMode: I,
      panOnScrollSpeed: R,
      zoomOnPinch: H,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : Ig({
      noWheelClassName: P,
      preventScrolling: D,
      d3ZoomHandler: g
    });
    if (d.on("wheel.zoom", we, { passive: !1 }), !p) {
      const pe = Tg({
        zoomPanValues: c,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", pe);
      const $ = Dg({
        zoomPanValues: c,
        panOnDrag: E,
        onPaneContextMenu: !!N,
        onPanZoom: i,
        onTransformChange: U
      });
      h.on("zoom", $);
      const Me = zg({
        zoomPanValues: c,
        panOnDrag: E,
        panOnScroll: S,
        onPaneContextMenu: N,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", Me);
    }
    const j = Og({
      zoomActivationKeyPressed: Z,
      panOnDrag: E,
      zoomOnScroll: B,
      panOnScroll: S,
      zoomOnDoubleClick: X,
      zoomOnPinch: H,
      userSelectionActive: p,
      noPanClassName: x,
      noWheelClassName: P,
      lib: F,
      connectionInProgress: W
    });
    h.filter(j), X ? d.on("dblclick.zoom", v) : d.on("dblclick.zoom", null);
  }
  function b() {
    h.on("zoom", null);
  }
  async function C(P, x, N) {
    const p = uo(P), S = h?.constrain()(p, x, N);
    return S && await _(S), new Promise((E) => E(S));
  }
  async function k(P, x) {
    const N = uo(P);
    return await _(N, x), new Promise((p) => p(N));
  }
  function w(P) {
    if (d) {
      const x = uo(P), N = d.property("__zoom");
      (N.k !== P.zoom || N.x !== P.x || N.y !== P.y) && h?.transform(d, x, null, { sync: !0 });
    }
  }
  function A() {
    const P = d ? Ya(d.node()) : { x: 0, y: 0, k: 1 };
    return { x: P.x, y: P.y, zoom: P.k };
  }
  function T(P, x) {
    return d ? new Promise((N) => {
      h?.interpolate(x?.interpolate === "linear" ? Rn : yr).scaleTo(fo(d, x?.duration, x?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function z(P, x) {
    return d ? new Promise((N) => {
      h?.interpolate(x?.interpolate === "linear" ? Rn : yr).scaleBy(fo(d, x?.duration, x?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function M(P) {
    h?.scaleExtent(P);
  }
  function V(P) {
    h?.translateExtent(P);
  }
  function Y(P) {
    const x = !pt(P) || P < 0 ? 0 : P;
    h?.clickDistance(x);
  }
  return {
    update: y,
    destroy: b,
    setViewport: k,
    setViewportConstrained: C,
    getViewport: A,
    scaleTo: T,
    scaleBy: z,
    setScaleExtent: M,
    setTranslateExtent: V,
    syncViewport: w,
    setClickDistance: Y
  };
}
var us;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(us || (us = {}));
function pi() {
  const e = {};
  return [
    (t) => {
      if (t && !$l(e))
        throw new Error(t);
      return Fo(e);
    },
    (t) => Is(e, t)
  ];
}
const [Hg, Lg] = pi(), [Vg, Bg] = pi(), [Fg, Kg] = pi();
var Yg = /* @__PURE__ */ le("<div><!></div>");
function Hr(e, t) {
  te(t, !0);
  let n = L(t, "id", 3, null), r = L(t, "type", 3, "source"), o = L(t, "position", 19, () => J.Top), i = L(t, "isConnectableStart", 3, !0), s = L(t, "isConnectableEnd", 3, !0), a = /* @__PURE__ */ Bt(t, [
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
  const l = Hg("Handle must be used within a Custom Node component"), c = Vg("Handle must be used within a Custom Node component");
  let f = /* @__PURE__ */ m(() => r() === "target"), h = /* @__PURE__ */ m(() => t.isConnectable !== void 0 ? t.isConnectable : c.value), d = Kt(), g = /* @__PURE__ */ m(() => d.ariaLabelConfig), v = null;
  Go(() => {
    if (t.onconnect || t.ondisconnect) {
      d.edges;
      let x = d.connectionLookup.get(`${l}-${r()}${n() ? `-${n()}` : ""}`);
      if (v && !Lh(x, v)) {
        const N = x ?? /* @__PURE__ */ new Map();
        Ji(v, N, t.ondisconnect), Ji(N, v, t.onconnect);
      }
      v = new Map(x);
    }
  });
  let _ = /* @__PURE__ */ m(() => {
    if (!d.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: x, toHandle: N, isValid: p } = d.connection, S = x && x.nodeId === l && x.type === r() && x.id === n(), E = N && N.nodeId === l && N.type === r() && N.id === n(), I = d.connectionMode === wn.Strict ? x?.type !== r() : l !== x?.nodeId || n() !== x?.id;
    return [
      !0,
      S,
      E,
      I,
      E && p
    ];
  }), y = /* @__PURE__ */ m(() => qn(u(_), 5)), b = /* @__PURE__ */ m(() => u(y)[0]), C = /* @__PURE__ */ m(() => u(y)[1]), k = /* @__PURE__ */ m(() => u(y)[2]), w = /* @__PURE__ */ m(() => u(y)[3]), A = /* @__PURE__ */ m(() => u(y)[4]);
  function T(x) {
    const N = d.onbeforeconnect ? d.onbeforeconnect(x) : x;
    N && (d.addEdge(N), d.onconnect?.(x));
  }
  function z(x) {
    const N = tl(x);
    x.currentTarget && (N && x.button === 0 || !N) && cs.onPointerDown(x, {
      handleId: n(),
      nodeId: l,
      isTarget: u(f),
      connectionRadius: d.connectionRadius,
      domNode: d.domNode,
      nodeLookup: d.nodeLookup,
      connectionMode: d.connectionMode,
      lib: "svelte",
      autoPanOnConnect: d.autoPanOnConnect,
      autoPanSpeed: d.autoPanSpeed,
      flowId: d.flowId,
      isValidConnection: t.isValidConnection ?? d.isValidConnection,
      updateConnection: d.updateConnection,
      cancelConnection: d.cancelConnection,
      panBy: d.panBy,
      onConnect: T,
      onConnectStart: (p, S) => {
        d.onconnectstart?.(p, {
          nodeId: S.nodeId,
          handleId: S.handleId,
          handleType: S.handleType
        });
      },
      onConnectEnd: (p, S) => {
        d.onconnectend?.(p, S);
      },
      getTransform: () => [d.viewport.x, d.viewport.y, d.viewport.zoom],
      getFromHandle: () => d.connection.fromHandle,
      dragThreshold: d.connectionDragThreshold,
      handleDomNode: x.currentTarget
    });
  }
  function M(x) {
    if (!l || !d.clickConnectStartHandle && !i())
      return;
    if (!d.clickConnectStartHandle) {
      d.onclickconnectstart?.(x, { nodeId: l, handleId: n(), handleType: r() }), d.clickConnectStartHandle = { nodeId: l, type: r(), id: n() };
      return;
    }
    const N = $a(x.target), p = t.isValidConnection ?? d.isValidConnection, { connectionMode: S, clickConnectStartHandle: E, flowId: I, nodeLookup: R } = d, { connection: D, isValid: H } = cs.isValid(x, {
      handle: { nodeId: l, id: n(), type: r() },
      connectionMode: S,
      fromNodeId: E.nodeId,
      fromHandleId: E.id ?? null,
      fromType: E.type,
      isValidConnection: p,
      flowId: I,
      doc: N,
      lib: "svelte",
      nodeLookup: R
    });
    H && D && T(D);
    const B = structuredClone(As(d.connection));
    delete B.inProgress, B.toPosition = B.toHandle ? B.toHandle.position : null, d.onclickconnectend?.(x, B), d.clickConnectStartHandle = null;
  }
  var V = Yg(), Y = () => {
  };
  Vt(V, () => ({
    "data-handleid": n(),
    "data-nodeid": l,
    "data-handlepos": o(),
    "data-id": `${d.flowId ?? ""}-${l ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      d.noDragClass,
      d.noPanClass,
      o(),
      t.class
    ],
    onmousedown: z,
    ontouchstart: z,
    onclick: d.clickConnect ? M : void 0,
    onkeypress: Y,
    style: t.style,
    role: "button",
    "aria-label": u(g)["handle.ariaLabel"],
    tabindex: "-1",
    ...a,
    [Nt]: {
      valid: u(A),
      connectingto: u(k),
      connectingfrom: u(C),
      source: !u(f),
      target: u(f),
      connectablestart: i(),
      connectableend: s(),
      connectable: u(h),
      connectionindicator: u(h) && (!u(b) || u(w)) && (u(b) || d.clickConnectStartHandle ? s() : i())
    }
  }));
  var P = fe(V);
  Ye(P, () => t.children ?? Sn), K(e, V), ne();
}
var Zg = /* @__PURE__ */ le("<!> <!>", 1);
function gl(e, t) {
  te(t, !0);
  let n = L(t, "targetPosition", 19, () => J.Top), r = L(t, "sourcePosition", 19, () => J.Bottom);
  var o = Zg(), i = se(o);
  Hr(i, {
    type: "target",
    get position() {
      return n();
    }
  });
  var s = ie(i), a = ie(s);
  Hr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), ve(() => zt(s, ` ${t.data?.label ?? ""} `)), K(e, o), ne();
}
var Xg = /* @__PURE__ */ le(" <!>", 1);
function Wg(e, t) {
  te(t, !0);
  let n = L(t, "data", 19, () => ({ label: "Node" })), r = L(t, "sourcePosition", 19, () => J.Bottom);
  var o = Xg(), i = se(o), s = ie(i);
  Hr(s, {
    type: "source",
    get position() {
      return r();
    }
  }), ve(() => zt(i, `${n()?.label ?? ""} `)), K(e, o), ne();
}
var qg = /* @__PURE__ */ le(" <!>", 1);
function Gg(e, t) {
  te(t, !0);
  let n = L(t, "data", 19, () => ({ label: "Node" })), r = L(t, "targetPosition", 19, () => J.Top);
  var o = qg(), i = se(o), s = ie(i);
  Hr(s, {
    type: "target",
    get position() {
      return r();
    }
  }), ve(() => zt(i, `${n()?.label ?? ""} `)), K(e, o), ne();
}
function Ug(e, t) {
}
function ho(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Qg(e, t) {
  const n = /* @__PURE__ */ m(Kt), r = /* @__PURE__ */ m(() => u(n).domNode);
  let o;
  return u(r) ? ho(e, u(r), t) : o = qs(() => {
    it(() => {
      ho(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      ho(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Jg() {
  let e = /* @__PURE__ */ re(typeof window > "u");
  if (u(e)) {
    const t = qs(() => {
      it(() => {
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
const fs = (e) => Bh(e), jg = (e) => Wa(e);
function at(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Lr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var $g = /* @__PURE__ */ le("<div><!></div>");
function ev(e, t) {
  te(t, !0);
  let n = L(t, "x", 3, 0), r = L(t, "y", 3, 0), o = L(t, "selectEdgeOnClick", 3, !1), i = L(t, "transparent", 3, !1), s = /* @__PURE__ */ Bt(t, [
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
  const a = Kt(), l = Fg("EdgeLabel must be used within a Custom Edge component");
  let c = /* @__PURE__ */ m(() => a.visible.edges.get(l)?.zIndex);
  var f = $g(), h = () => {
    o() && l && a.handleEdgeSelection(l);
  };
  Vt(
    f,
    (g) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: i() },
        t.class
      ],
      tabindex: "-1",
      onclick: h,
      ...s,
      [ht]: g
    }),
    [
      () => ({
        display: Jg().value ? "none" : void 0,
        cursor: o() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: at(t.width),
        height: at(t.height),
        "z-index": u(c)
      })
    ],
    void 0,
    void 0,
    "svelte-1wg91mu"
  );
  var d = fe(f);
  Ye(d, () => t.children ?? Sn), Ne(f, (g, v) => Qg?.(g, v), () => "edge-labels"), K(e, f), ne();
}
var tv = /* @__PURE__ */ me("<path></path>"), nv = /* @__PURE__ */ me('<path fill="none"></path><!><!>', 1);
function to(e, t) {
  let n = L(t, "interactionWidth", 3, 20), r = /* @__PURE__ */ Bt(t, [
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
  var o = nv(), i = se(o), s = ie(i);
  {
    var a = (f) => {
      var h = tv();
      Vt(h, () => ({
        d: t.path,
        "stroke-opacity": 0,
        "stroke-width": n(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...r
      })), K(f, h);
    };
    de(s, (f) => {
      n() > 0 && f(a);
    });
  }
  var l = ie(s);
  {
    var c = (f) => {
      ev(f, {
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
        children: (h, d) => {
          var g = Dc();
          ve(() => zt(g, t.label)), K(h, g);
        },
        $$slots: { default: !0 }
      });
    };
    de(l, (f) => {
      t.label && f(c);
    });
  }
  ve(() => {
    G(i, "id", t.id), G(i, "d", t.path), Et(i, 0, Lt(["svelte-flow__edge-path", t.class])), G(i, "marker-start", t.markerStart), G(i, "marker-end", t.markerEnd), Le(i, t.style);
  }), K(e, o);
}
function vl(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ m(() => nl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    curvature: t.pathOptions?.curvature
  })), r = /* @__PURE__ */ m(() => qn(u(n), 3)), o = /* @__PURE__ */ m(() => u(r)[0]), i = /* @__PURE__ */ m(() => u(r)[1]), s = /* @__PURE__ */ m(() => u(r)[2]);
  to(e, {
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
function rv(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ m(() => fi({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition
  })), r = /* @__PURE__ */ m(() => qn(u(n), 3)), o = /* @__PURE__ */ m(() => u(r)[0]), i = /* @__PURE__ */ m(() => u(r)[1]), s = /* @__PURE__ */ m(() => u(r)[2]);
  to(e, {
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
function ov(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ m(() => ol({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY
  })), r = /* @__PURE__ */ m(() => qn(u(n), 3)), o = /* @__PURE__ */ m(() => u(r)[0]), i = /* @__PURE__ */ m(() => u(r)[1]), s = /* @__PURE__ */ m(() => u(r)[2]);
  to(e, {
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
function iv(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ m(() => fi({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    borderRadius: 0
  })), r = /* @__PURE__ */ m(() => qn(u(n), 3)), o = /* @__PURE__ */ m(() => u(r)[0]), i = /* @__PURE__ */ m(() => u(r)[1]), s = /* @__PURE__ */ m(() => u(r)[2]);
  to(e, {
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
class sv {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#e = t, this.#t = Os(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const av = /\(.+\)/, lv = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class cv extends sv {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = av.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => lv.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => bo(o, "change", i)
    );
  }
}
function uv(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return ci(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function ds(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l, zIndexMode: c } = e, f = /* @__PURE__ */ new Map();
  for (const h of t) {
    const d = r.get(h.source), g = r.get(h.target);
    if (!d || !g)
      continue;
    if (a) {
      const { visibleNodes: y, transform: b, width: C, height: k } = e;
      if (eg({
        sourceNode: d,
        targetNode: g,
        width: C,
        height: k,
        transform: b
      }))
        y.set(d.id, d), y.set(g.id, g);
      else
        continue;
    }
    const v = o.get(h.id);
    if (v && h === v.edge && d == v.sourceNode && g == v.targetNode) {
      f.set(h.id, v);
      continue;
    }
    const _ = ag({
      id: h.id,
      sourceNode: d,
      targetNode: g,
      sourceHandle: h.sourceHandle || null,
      targetHandle: h.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    _ && f.set(h.id, {
      ...n,
      ...h,
      ..._,
      zIndex: $h({
        selected: h.selected,
        zIndex: h.zIndex ?? n.zIndex,
        sourceNode: d,
        targetNode: g,
        elevateOnSelect: l,
        zIndexMode: c
      }),
      sourceNode: d,
      targetNode: g,
      edge: h
    });
  }
  return f;
}
const pl = {
  input: Wg,
  output: Gg,
  default: gl,
  group: Ug
}, ml = {
  straight: ov,
  smoothstep: rv,
  default: vl,
  step: iv
};
function fv(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = or(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ui(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function dv(e) {
  class t {
    #e = /* @__PURE__ */ m(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#e);
    }
    set flowId(r) {
      O(this.#e, r);
    }
    #t = /* @__PURE__ */ re(null);
    get domNode() {
      return u(this.#t);
    }
    set domNode(r) {
      O(this.#t, r);
    }
    #n = /* @__PURE__ */ re(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      O(this.#n, r);
    }
    #r = /* @__PURE__ */ re(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      O(this.#r, r);
    }
    #l = /* @__PURE__ */ re(e.height ?? 0);
    get height() {
      return u(this.#l);
    }
    set height(r) {
      O(this.#l, r);
    }
    #i = /* @__PURE__ */ re(e.props.zIndexMode ?? "basic");
    get zIndexMode() {
      return u(this.#i);
    }
    set zIndexMode(r) {
      O(this.#i, r);
    }
    #o = /* @__PURE__ */ m(() => {
      const r = hg(e.nodes, this.nodeLookup, this.parentLookup, {
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
    #s = /* @__PURE__ */ m(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#s);
    }
    set viewportInitialized(r) {
      O(this.#s, r);
    }
    #a = /* @__PURE__ */ m(() => (_g(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
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
    #c = /* @__PURE__ */ m(() => {
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
    #u = /* @__PURE__ */ m(() => {
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
    #f = /* @__PURE__ */ m(() => {
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
        defaultEdgeOptions: f,
        zIndexMode: h
      } = this;
      let d, g;
      const v = {
        edges: o,
        defaultEdgeOptions: f,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        zIndexMode: h,
        onerror: l
      };
      if (c) {
        const { viewport: _, width: y, height: b } = this, C = [_.x, _.y, _.zoom];
        d = uv(s, C, y, b), g = ds({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: d,
          transform: C,
          width: y,
          height: b
        });
      } else
        d = this.nodeLookup, g = ds(v);
      return { nodes: d, edges: g };
    });
    get visible() {
      return u(this.#f);
    }
    set visible(r) {
      O(this.#f, r);
    }
    #d = /* @__PURE__ */ m(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#d);
    }
    set nodesDraggable(r) {
      O(this.#d, r);
    }
    #g = /* @__PURE__ */ m(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#g);
    }
    set nodesConnectable(r) {
      O(this.#g, r);
    }
    #h = /* @__PURE__ */ m(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#h);
    }
    set elementsSelectable(r) {
      O(this.#h, r);
    }
    #_ = /* @__PURE__ */ m(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#_);
    }
    set nodesFocusable(r) {
      O(this.#_, r);
    }
    #w = /* @__PURE__ */ m(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#w);
    }
    set edgesFocusable(r) {
      O(this.#w, r);
    }
    #b = /* @__PURE__ */ m(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#b);
    }
    set disableKeyboardA11y(r) {
      O(this.#b, r);
    }
    #m = /* @__PURE__ */ m(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#m);
    }
    set minZoom(r) {
      O(this.#m, r);
    }
    #v = /* @__PURE__ */ m(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#v);
    }
    set maxZoom(r) {
      O(this.#v, r);
    }
    #p = /* @__PURE__ */ m(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#p);
    }
    set nodeOrigin(r) {
      O(this.#p, r);
    }
    #y = /* @__PURE__ */ m(() => e.props.nodeExtent ?? To);
    get nodeExtent() {
      return u(this.#y);
    }
    set nodeExtent(r) {
      O(this.#y, r);
    }
    #x = /* @__PURE__ */ m(() => e.props.translateExtent ?? To);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      O(this.#x, r);
    }
    #E = /* @__PURE__ */ m(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#E);
    }
    set defaultEdgeOptions(r) {
      O(this.#E, r);
    }
    #S = /* @__PURE__ */ m(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#S);
    }
    set nodeDragThreshold(r) {
      O(this.#S, r);
    }
    #k = /* @__PURE__ */ m(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      O(this.#k, r);
    }
    #C = /* @__PURE__ */ m(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#C);
    }
    set autoPanOnConnect(r) {
      O(this.#C, r);
    }
    #N = /* @__PURE__ */ m(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#N);
    }
    set autoPanOnNodeFocus(r) {
      O(this.#N, r);
    }
    #P = /* @__PURE__ */ m(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return u(this.#P);
    }
    set autoPanSpeed(r) {
      O(this.#P, r);
    }
    #M = /* @__PURE__ */ m(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#M);
    }
    set connectionDragThreshold(r) {
      O(this.#M, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #A = /* @__PURE__ */ m(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#A);
    }
    set snapGrid(r) {
      O(this.#A, r);
    }
    #I = /* @__PURE__ */ re(!1);
    get dragging() {
      return u(this.#I);
    }
    set dragging(r) {
      O(this.#I, r);
    }
    #T = /* @__PURE__ */ re(null);
    get selectionRect() {
      return u(this.#T);
    }
    set selectionRect(r) {
      O(this.#T, r);
    }
    #D = /* @__PURE__ */ re(!1);
    get selectionKeyPressed() {
      return u(this.#D);
    }
    set selectionKeyPressed(r) {
      O(this.#D, r);
    }
    #z = /* @__PURE__ */ re(!1);
    get multiselectionKeyPressed() {
      return u(this.#z);
    }
    set multiselectionKeyPressed(r) {
      O(this.#z, r);
    }
    #O = /* @__PURE__ */ re(!1);
    get deleteKeyPressed() {
      return u(this.#O);
    }
    set deleteKeyPressed(r) {
      O(this.#O, r);
    }
    #R = /* @__PURE__ */ re(!1);
    get panActivationKeyPressed() {
      return u(this.#R);
    }
    set panActivationKeyPressed(r) {
      O(this.#R, r);
    }
    #H = /* @__PURE__ */ re(!1);
    get zoomActivationKeyPressed() {
      return u(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      O(this.#H, r);
    }
    #L = /* @__PURE__ */ re(null);
    get selectionRectMode() {
      return u(this.#L);
    }
    set selectionRectMode(r) {
      O(this.#L, r);
    }
    #V = /* @__PURE__ */ re("");
    get ariaLiveMessage() {
      return u(this.#V);
    }
    set ariaLiveMessage(r) {
      O(this.#V, r);
    }
    #B = /* @__PURE__ */ m(() => e.props.selectionMode ?? Dr.Partial);
    get selectionMode() {
      return u(this.#B);
    }
    set selectionMode(r) {
      O(this.#B, r);
    }
    #F = /* @__PURE__ */ m(() => ({ ...pl, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#F);
    }
    set nodeTypes(r) {
      O(this.#F, r);
    }
    #K = /* @__PURE__ */ m(() => ({ ...ml, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#K);
    }
    set edgeTypes(r) {
      O(this.#K, r);
    }
    #Y = /* @__PURE__ */ m(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#Y);
    }
    set noPanClass(r) {
      O(this.#Y, r);
    }
    #Z = /* @__PURE__ */ m(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#Z);
    }
    set noDragClass(r) {
      O(this.#Z, r);
    }
    #X = /* @__PURE__ */ m(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#X);
    }
    set noWheelClass(r) {
      O(this.#X, r);
    }
    #W = /* @__PURE__ */ m(() => Qh(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#W);
    }
    set ariaLabelConfig(r) {
      O(this.#W, r);
    }
    #q = /* @__PURE__ */ re(fv(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
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
      /* @__PURE__ */ re(Do)
    );
    get _connection() {
      return u(this.#G);
    }
    set _connection(r) {
      O(this.#G, r);
    }
    #U = /* @__PURE__ */ m(() => this._connection.inProgress ? {
      ...this._connection,
      to: sr(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#U);
    }
    set connection(r) {
      O(this.#U, r);
    }
    #Q = /* @__PURE__ */ m(() => e.props.connectionMode ?? wn.Strict);
    get connectionMode() {
      return u(this.#Q);
    }
    set connectionMode(r) {
      O(this.#Q, r);
    }
    #J = /* @__PURE__ */ m(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#J);
    }
    set connectionRadius(r) {
      O(this.#J, r);
    }
    #j = /* @__PURE__ */ m(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#j);
    }
    set isValidConnection(r) {
      O(this.#j, r);
    }
    #$ = /* @__PURE__ */ m(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#$);
    }
    set selectNodesOnDrag(r) {
      O(this.#$, r);
    }
    #ee = /* @__PURE__ */ m(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#ee);
    }
    set defaultMarkerColor(r) {
      O(this.#ee, r);
    }
    #te = /* @__PURE__ */ m(() => lg(e.edges, {
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
    #ne = /* @__PURE__ */ m(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#ne);
    }
    set onlyRenderVisibleElements(r) {
      O(this.#ne, r);
    }
    #re = /* @__PURE__ */ m(() => e.props.onflowerror ?? Wh);
    get onerror() {
      return u(this.#re);
    }
    set onerror(r) {
      O(this.#re, r);
    }
    #oe = /* @__PURE__ */ m(() => e.props.ondelete);
    get ondelete() {
      return u(this.#oe);
    }
    set ondelete(r) {
      O(this.#oe, r);
    }
    #ie = /* @__PURE__ */ m(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#ie);
    }
    set onbeforedelete(r) {
      O(this.#ie, r);
    }
    #se = /* @__PURE__ */ m(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#se);
    }
    set onbeforeconnect(r) {
      O(this.#se, r);
    }
    #ae = /* @__PURE__ */ m(() => e.props.onconnect);
    get onconnect() {
      return u(this.#ae);
    }
    set onconnect(r) {
      O(this.#ae, r);
    }
    #le = /* @__PURE__ */ m(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#le);
    }
    set onconnectstart(r) {
      O(this.#le, r);
    }
    #ce = /* @__PURE__ */ m(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#ce);
    }
    set onconnectend(r) {
      O(this.#ce, r);
    }
    #ue = /* @__PURE__ */ m(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#ue);
    }
    set onbeforereconnect(r) {
      O(this.#ue, r);
    }
    #fe = /* @__PURE__ */ m(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#fe);
    }
    set onreconnect(r) {
      O(this.#fe, r);
    }
    #de = /* @__PURE__ */ m(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#de);
    }
    set onreconnectstart(r) {
      O(this.#de, r);
    }
    #he = /* @__PURE__ */ m(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#he);
    }
    set onreconnectend(r) {
      O(this.#he, r);
    }
    #ge = /* @__PURE__ */ m(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#ge);
    }
    set clickConnect(r) {
      O(this.#ge, r);
    }
    #ve = /* @__PURE__ */ m(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ve);
    }
    set onclickconnectstart(r) {
      O(this.#ve, r);
    }
    #pe = /* @__PURE__ */ m(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#pe);
    }
    set onclickconnectend(r) {
      O(this.#pe, r);
    }
    #me = /* @__PURE__ */ re(null);
    get clickConnectStartHandle() {
      return u(this.#me);
    }
    set clickConnectStartHandle(r) {
      O(this.#me, r);
    }
    #ye = /* @__PURE__ */ m(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#ye);
    }
    set onselectiondrag(r) {
      O(this.#ye, r);
    }
    #_e = /* @__PURE__ */ m(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#_e);
    }
    set onselectiondragstart(r) {
      O(this.#_e, r);
    }
    #we = /* @__PURE__ */ m(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#we);
    }
    set onselectiondragstop(r) {
      O(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Zh(
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
    _prefersDark = new cv("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ m(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#be);
    }
    set colorMode(r) {
      O(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Do, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Kt() {
  const e = Fo(Ro);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Ro = /* @__PURE__ */ Symbol();
function hv(e) {
  const t = dv(e);
  function n(P) {
    t.nodeTypes = {
      ...pl,
      ...P
    };
  }
  function r(P) {
    t.edgeTypes = {
      ...ml,
      ...P
    };
  }
  function o(P) {
    t.edges = rg(P, t.edges);
  }
  const i = (P, x = !1) => {
    t.nodes = t.nodes.map((N) => {
      if (t.connection.inProgress && t.connection.fromNode.id === N.id) {
        const S = t.nodeLookup.get(N.id);
        S && (t.connection = {
          ...t.connection,
          from: en(S, t.connection.fromHandle, J.Left, !0)
        });
      }
      const p = P.get(N.id);
      return p ? { ...N, position: p.position, dragging: x } : N;
    });
  };
  function s(P) {
    const { changes: x, updatedInternals: N } = mg(P, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin, t.nodeExtent, t.zIndexMode);
    if (!N)
      return;
    fg(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent,
      zIndexMode: t.zIndexMode
    }), t.fitViewQueued && t.resolveFitView();
    const p = /* @__PURE__ */ new Map();
    for (const S of x) {
      const E = t.nodeLookup.get(S.id)?.internals.userNode;
      if (!E)
        continue;
      const I = { ...E };
      switch (S.type) {
        case "dimensions": {
          const R = { ...I.measured, ...S.dimensions };
          S.setAttributes && (I.width = S.dimensions?.width ?? I.width, I.height = S.dimensions?.height ?? I.height), I.measured = R;
          break;
        }
        case "position":
          I.position = S.position ?? I.position;
          break;
      }
      p.set(S.id, I);
    }
    t.nodes = t.nodes.map((S) => p.get(S.id) ?? S);
  }
  function a(P) {
    const x = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = P, t.fitViewResolver = x, t.nodes = [...t.nodes], x.promise;
  }
  async function l(P, x, N) {
    const p = typeof N?.zoom < "u" ? N.zoom : t.maxZoom, S = t.panZoom;
    return S ? (await S.setViewport({
      x: t.width / 2 - P * p,
      y: t.height / 2 - x * p,
      zoom: p
    }, { duration: N?.duration, ease: N?.ease, interpolate: N?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(P, x) {
    const N = t.panZoom;
    return N ? N.scaleBy(P, x) : Promise.resolve(!1);
  }
  function f(P) {
    return c(1.2, P);
  }
  function h(P) {
    return c(1 / 1.2, P);
  }
  function d(P) {
    const x = t.panZoom;
    x && (x.setScaleExtent([P, t.maxZoom]), t.minZoom = P);
  }
  function g(P) {
    const x = t.panZoom;
    x && (x.setScaleExtent([t.minZoom, P]), t.maxZoom = P);
  }
  function v(P) {
    const x = t.panZoom;
    x && (x.setTranslateExtent(P), t.translateExtent = P);
  }
  function _(P, x = null) {
    let N = !1;
    const p = P.map((S) => (x ? x.has(S.id) : !0) && S.selected ? (N = !0, { ...S, selected: !1 }) : S);
    return [N, p];
  }
  function y(P) {
    const x = P?.nodes ? new Set(P.nodes.map((R) => R.id)) : null, [N, p] = _(t.nodes, x);
    N && (t.nodes = p);
    const S = P?.edges ? new Set(P.edges.map((R) => R.id)) : null, [E, I] = _(t.edges, S);
    E && (t.edges = I);
  }
  function b(P) {
    const x = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((N) => {
      const p = P.includes(N.id), S = x && N.selected || p;
      return !!N.selected !== S ? { ...N, selected: S } : N;
    }), x || y({ nodes: [] });
  }
  function C(P) {
    const x = t.multiselectionKeyPressed;
    t.edges = t.edges.map((N) => {
      const p = P.includes(N.id), S = x && N.selected || p;
      return !!N.selected !== S ? { ...N, selected: S } : N;
    }), x || y({ edges: [] });
  }
  function k(P, x, N) {
    const p = t.nodeLookup.get(P);
    if (!p) {
      console.warn("012", Zn.error012(P));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, p.selected ? (x || p.selected && t.multiselectionKeyPressed) && (y({ nodes: [p], edges: [] }), requestAnimationFrame(() => N?.blur())) : b([P]);
  }
  function w(P) {
    const x = t.edgeLookup.get(P);
    if (!x) {
      console.warn("012", Zn.error012(P));
      return;
    }
    (x.selectable || t.elementsSelectable && typeof x.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, x.selected ? x.selected && t.multiselectionKeyPressed && y({ nodes: [], edges: [x] }) : C([P]));
  }
  function A(P, x) {
    const { nodeExtent: N, snapGrid: p, nodeOrigin: S, nodeLookup: E, nodesDraggable: I, onerror: R } = t, D = /* @__PURE__ */ new Map(), H = p?.[0] ?? 5, B = p?.[1] ?? 5, X = P.x * H * x, Z = P.y * B * x;
    for (const F of E.values()) {
      if (!(F.selected && (F.draggable || I && typeof F.draggable > "u")))
        continue;
      let W = {
        x: F.internals.positionAbsolute.x + X,
        y: F.internals.positionAbsolute.y + Z
      };
      p && (W = ir(W, p));
      const { position: q, positionAbsolute: Q } = qa({
        nodeId: F.id,
        nextPosition: W,
        nodeLookup: E,
        nodeExtent: N,
        nodeOrigin: S,
        onError: R
      });
      F.position = q, F.internals.positionAbsolute = Q, D.set(F.id, F);
    }
    i(D);
  }
  function T(P) {
    return yg({
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
    t._connection = Do;
  }
  function V() {
    t.resetStoreValues(), y();
  }
  return Object.assign(t, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: f,
    zoomOut: h,
    fitView: a,
    setCenter: l,
    setMinZoom: d,
    setMaxZoom: g,
    setTranslateExtent: v,
    unselectNodesAndEdges: y,
    addSelectedNodes: b,
    addSelectedEdges: C,
    handleNodeSelection: k,
    handleEdgeSelection: w,
    moveSelectedNodes: A,
    panBy: T,
    updateConnection: z,
    cancelConnection: M,
    reset: V
  });
}
function gv(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: c, onDraggingChange: f, onTransformChange: h } = t, d = Rg({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: f
  }), g = d.getViewport();
  return (o.x !== g.x || o.y !== g.y || o.zoom !== g.zoom) && h([g.x, g.y, g.zoom]), c(d), d.update(t), {
    update(v) {
      d.update(v);
    }
  };
}
var vv = /* @__PURE__ */ le('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function pv(e, t) {
  te(t, !0);
  let n = L(t, "store", 15), r = /* @__PURE__ */ m(() => n().panActivationKeyPressed || t.panOnDrag), o = /* @__PURE__ */ m(() => n().panActivationKeyPressed || t.panOnScroll);
  const { viewport: i } = n();
  let s = !1;
  it(() => {
    !s && n().viewportInitialized && (t.oninit?.(), s = !0);
  });
  var a = vv(), l = fe(a);
  Ye(l, () => t.children), Ne(a, (c, f) => gv?.(c, f), () => ({
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
  })), K(e, a), ne();
}
function hs(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function gs(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function vs(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var mv = /* @__PURE__ */ le("<div><!></div>");
function yv(e, t) {
  te(t, !0);
  let n = L(t, "store", 15), r = L(t, "panOnDrag", 3, !0), o = L(t, "paneClickDistance", 3, 1), i, s = null, a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ m(() => n().panActivationKeyPressed || r()), f = /* @__PURE__ */ m(() => n().selectionKeyPressed || !!n().selectionRect || t.selectionOnDrag && u(c) !== !0), h = /* @__PURE__ */ m(() => n().elementsSelectable && (u(f) || n().selectionRectMode === "user")), d = !1;
  function g(M) {
    if (s = i?.getBoundingClientRect(), !s) return;
    const V = M.target === i, Y = !V && !!M.target.closest(".nokey"), P = t.selectionOnDrag && V || n().selectionKeyPressed;
    if (Y || !u(f) || !P || M.button !== 0 || !M.isPrimary)
      return;
    M.target?.setPointerCapture?.(M.pointerId), d = !1;
    const { x, y: N } = Ue(M, s);
    n(n().selectionRect = { width: 0, height: 0, startX: x, startY: N, x, y: N }, !0), V || (M.stopPropagation(), M.preventDefault());
  }
  function v(M) {
    if (!u(f) || !s || !n().selectionRect)
      return;
    const V = Ue(M, s), { startX: Y = 0, startY: P = 0 } = n().selectionRect;
    if (!d) {
      const E = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(V.x - Y, V.y - P) <= E)
        return;
      n().unselectNodesAndEdges(), t.onselectionstart?.(M);
    }
    d = !0;
    const x = {
      ...n().selectionRect,
      x: V.x < Y ? V.x : Y,
      y: V.y < P ? V.y : P,
      width: Math.abs(V.x - Y),
      height: Math.abs(V.y - P)
    }, N = a, p = l;
    a = new Set(ci(
      n().nodeLookup,
      x,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Dr.Partial,
      !0
    ).map((E) => E.id));
    const S = n().defaultEdgeOptions.selectable ?? !0;
    l = /* @__PURE__ */ new Set();
    for (const E of a) {
      const I = n().connectionLookup.get(E);
      if (I)
        for (const { edgeId: R } of I.values()) {
          const D = n().edgeLookup.get(R);
          D && (D.selectable ?? S) && l.add(R);
        }
    }
    vs(N, a) || n(n().nodes = n().nodes.map(gs(a)), !0), vs(p, l) || n(n().edges = n().edges.map(gs(l)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = x, !0);
  }
  function _(M) {
    M.button === 0 && (M.target?.releasePointerCapture?.(M.pointerId), !d && M.target === i && C?.(M), n(n().selectionRect = null, !0), d && n(n().selectionRectMode = a.size > 0 ? "nodes" : null, !0), d && t.onselectionend?.(M));
  }
  const y = (M) => {
    if (Array.isArray(u(c)) && u(c).includes(2)) {
      M.preventDefault();
      return;
    }
    t.onpanecontextmenu?.({ event: M });
  }, b = (M) => {
    d && (M.stopPropagation(), d = !1);
  };
  function C(M) {
    if (d || n().connection.inProgress) {
      d = !1;
      return;
    }
    t.onpaneclick?.({ event: M }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var k = mv();
  let w;
  var A = /* @__PURE__ */ m(() => u(h) ? void 0 : hs(C, i));
  k.__click = function(...M) {
    u(A)?.apply(this, M);
  }, k.__pointermove = function(...M) {
    (u(h) ? v : void 0)?.apply(this, M);
  }, k.__pointerup = function(...M) {
    (u(h) ? _ : void 0)?.apply(this, M);
  };
  var T = /* @__PURE__ */ m(() => hs(y, i));
  k.__contextmenu = function(...M) {
    u(T)?.apply(this, M);
  };
  var z = fe(k);
  Ye(z, () => t.children), er(k, (M) => i = M, () => i), ve((M) => w = Et(k, 1, "svelte-flow__pane svelte-flow__container", null, w, M), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(f)
    })
  ]), kr(
    "pointerdown",
    k,
    function(...M) {
      (u(h) ? g : void 0)?.apply(this, M);
    },
    !0
  ), kr(
    "click",
    k,
    function(...M) {
      (u(h) ? b : void 0)?.apply(this, M);
    },
    !0
  ), K(e, k), ne();
}
Jo(["click", "pointermove", "pointerup", "contextmenu"]);
var _v = /* @__PURE__ */ le('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function wv(e, t) {
  te(t, !0);
  var n = _v();
  let r;
  var o = fe(n);
  Ye(o, () => t.children), ve(() => r = Le(n, "", r, {
    transform: `translate(${t.store.viewport.x ?? ""}px, ${t.store.viewport.y ?? ""}px) scale(${t.store.viewport.zoom ?? ""})`
  })), K(e, n), ne();
}
function yl(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = xg({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const { snapGrid: c, viewport: f } = n;
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
        transform: [f.x, f.y, f.zoom],
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
  function l(c, f) {
    if (f.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: c,
      noDragClassName: f.noDragClass,
      handleSelector: f.handleSelector,
      nodeId: f.nodeId,
      isSelectable: f.isSelectable,
      nodeClickDistance: f.nodeClickDistance
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
var bv = /* @__PURE__ */ le('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>'), xv = /* @__PURE__ */ le('<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>', 1);
function Ev(e, t) {
  te(t, !0);
  var n = xv(), r = se(n), o = fe(r), i = ie(r, 2), s = fe(i), a = ie(i, 2);
  {
    var l = (c) => {
      var f = bv(), h = fe(f);
      ve(() => {
        G(f, "id", `${Sv}-${t.store.flowId}`), zt(h, t.store.ariaLiveMessage);
      }), K(c, f);
    };
    de(a, (c) => {
      t.store.disableKeyboardA11y || c(l);
    });
  }
  ve(() => {
    G(r, "id", `${_l}-${t.store.flowId}`), zt(o, t.store.disableKeyboardA11y ? t.store.ariaLabelConfig["node.a11yDescription.default"] : t.store.ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), G(i, "id", `${wl}-${t.store.flowId}`), zt(s, t.store.ariaLabelConfig["edge.a11yDescription.default"]);
  }), K(e, n), ne();
}
const _l = "svelte-flow__node-desc", wl = "svelte-flow__edge-desc", Sv = "svelte-flow__aria-live";
var kv = /* @__PURE__ */ le("<div><!></div>");
function Cv(e, t) {
  te(t, !0);
  let n = L(t, "store", 15), r = /* @__PURE__ */ m(() => Ce(t.node.data, () => ({}), !0)), o = /* @__PURE__ */ m(() => Ce(t.node.selected, !1)), i = /* @__PURE__ */ m(() => t.node.draggable), s = /* @__PURE__ */ m(() => t.node.selectable), a = /* @__PURE__ */ m(() => Ce(t.node.deletable, !0)), l = /* @__PURE__ */ m(() => t.node.connectable), c = /* @__PURE__ */ m(() => t.node.focusable), f = /* @__PURE__ */ m(() => Ce(t.node.hidden, !1)), h = /* @__PURE__ */ m(() => Ce(t.node.dragging, !1)), d = /* @__PURE__ */ m(() => Ce(t.node.style, "")), g = /* @__PURE__ */ m(() => t.node.class), v = /* @__PURE__ */ m(() => Ce(t.node.type, "default")), _ = /* @__PURE__ */ m(() => t.node.parentId), y = /* @__PURE__ */ m(() => t.node.sourcePosition), b = /* @__PURE__ */ m(() => t.node.targetPosition), C = /* @__PURE__ */ m(() => Ce(t.node.measured, () => ({ width: 0, height: 0 }), !0).width), k = /* @__PURE__ */ m(() => Ce(t.node.measured, () => ({ width: 0, height: 0 }), !0).height), w = /* @__PURE__ */ m(() => t.node.initialWidth), A = /* @__PURE__ */ m(() => t.node.initialHeight), T = /* @__PURE__ */ m(() => t.node.width), z = /* @__PURE__ */ m(() => t.node.height), M = /* @__PURE__ */ m(() => t.node.dragHandle), V = /* @__PURE__ */ m(() => Ce(t.node.internals.z, 0)), Y = /* @__PURE__ */ m(() => t.node.internals.positionAbsolute.x), P = /* @__PURE__ */ m(() => t.node.internals.positionAbsolute.y), x = /* @__PURE__ */ m(() => t.node.internals.userNode), { id: N } = t.node, p = /* @__PURE__ */ m(() => u(i) ?? n().nodesDraggable), S = /* @__PURE__ */ m(() => u(s) ?? n().elementsSelectable), E = /* @__PURE__ */ m(() => u(l) ?? n().nodesConnectable), I = /* @__PURE__ */ m(() => Ja(t.node)), R = /* @__PURE__ */ m(() => !!t.node.internals.handleBounds), D = /* @__PURE__ */ m(() => u(I) && u(R)), H = /* @__PURE__ */ m(() => u(c) ?? n().nodesFocusable);
  function B(ae) {
    return n().parentLookup.has(ae);
  }
  let X = /* @__PURE__ */ m(() => B(N)), Z = /* @__PURE__ */ re(null), F = null, U = u(v), W = u(y), q = u(b), Q = /* @__PURE__ */ m(() => n().nodeTypes[u(v)] ?? gl), ce = /* @__PURE__ */ m(() => n().ariaLabelConfig), we = {
    get value() {
      return u(E);
    }
  };
  Lg(N), Bg(we);
  let j = /* @__PURE__ */ m(() => {
    const ae = u(C) === void 0 ? u(T) ?? u(w) : u(T), ye = u(k) === void 0 ? u(z) ?? u(A) : u(z);
    if (!(ae === void 0 && ye === void 0 && u(d) === void 0))
      return `${u(d)};${ae ? `width:${at(ae)};` : ""}${ye ? `height:${at(ye)};` : ""}`;
  });
  it(() => {
    (u(v) !== U || u(y) !== W || u(b) !== q) && u(Z) !== null && requestAnimationFrame(() => {
      u(Z) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[N, { id: N, nodeElement: u(Z), force: !0 }]]));
    }), U = u(v), W = u(y), q = u(b);
  }), it(() => {
    t.resizeObserver && (!u(D) || u(Z) !== F) && (F && t.resizeObserver.unobserve(F), u(Z) && t.resizeObserver.observe(u(Z)), F = u(Z));
  }), ei(() => {
    F && t.resizeObserver?.unobserve(F);
  });
  function pe(ae) {
    u(S) && (!n().selectNodesOnDrag || !u(p) || n().nodeDragThreshold > 0) && n().handleNodeSelection(N), t.onnodeclick?.({ node: u(x), event: ae });
  }
  function $(ae) {
    if (!(el(ae) || n().disableKeyboardA11y))
      if (Xa.includes(ae.key) && u(S)) {
        const ye = ae.key === "Escape";
        n().handleNodeSelection(N, ye, u(Z));
      } else u(p) && t.node.selected && Object.prototype.hasOwnProperty.call(Lr, ae.key) && (ae.preventDefault(), n(
        n().ariaLiveMessage = u(ce)["node.a11yDescription.ariaLiveMessage"]({
          direction: ae.key.replace("Arrow", "").toLowerCase(),
          x: ~~t.node.internals.positionAbsolute.x,
          y: ~~t.node.internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Lr[ae.key], ae.shiftKey ? 4 : 1));
  }
  const Me = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(Z)?.matches(":focus-visible"))
      return;
    const { width: ae, height: ye, viewport: Xe } = n();
    ci(/* @__PURE__ */ new Map([[N, t.node]]), { x: 0, y: 0, width: ae, height: ye }, [Xe.x, Xe.y, Xe.zoom], !0).length > 0 || n().setCenter(t.node.position.x + (t.node.measured.width ?? 0) / 2, t.node.position.y + (t.node.measured.height ?? 0) / 2, { zoom: Xe.zoom });
  };
  var St = Se(), kt = se(St);
  {
    var ct = (ae) => {
      var ye = kv();
      Vt(ye, () => ({
        "data-id": N,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${u(v)}`,
          u(g)
        ],
        style: u(j),
        onclick: pe,
        onpointerenter: t.onnodepointerenter ? (he) => t.onnodepointerenter({ node: u(x), event: he }) : void 0,
        onpointerleave: t.onnodepointerleave ? (he) => t.onnodepointerleave({ node: u(x), event: he }) : void 0,
        onpointermove: t.onnodepointermove ? (he) => t.onnodepointermove({ node: u(x), event: he }) : void 0,
        oncontextmenu: t.onnodecontextmenu ? (he) => t.onnodecontextmenu({ node: u(x), event: he }) : void 0,
        onkeydown: u(H) ? $ : void 0,
        onfocus: u(H) ? Me : void 0,
        tabIndex: u(H) ? 0 : void 0,
        role: t.node.ariaRole ?? (u(H) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${_l}-${n().flowId}`,
        ...t.node.domAttributes,
        [Nt]: {
          dragging: u(h),
          selected: u(o),
          draggable: u(p),
          connectable: u(E),
          selectable: u(S),
          nopan: u(p),
          parent: u(X)
        },
        [ht]: {
          "z-index": u(V),
          transform: `translate(${u(Y) ?? ""}px, ${u(P) ?? ""}px)`,
          visibility: u(I) ? "visible" : "hidden"
        }
      }));
      var Xe = fe(ye);
      Wr(Xe, () => u(Q), (he, on) => {
        on(he, {
          get data() {
            return u(r);
          },
          get id() {
            return N;
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
            return u(y);
          },
          get targetPosition() {
            return u(b);
          },
          get zIndex() {
            return u(V);
          },
          get dragging() {
            return u(h);
          },
          get draggable() {
            return u(p);
          },
          get dragHandle() {
            return u(M);
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
            return u(P);
          },
          get width() {
            return u(T);
          },
          get height() {
            return u(z);
          }
        });
      }), Ne(ye, (he, on) => yl?.(he, on), () => ({
        nodeId: N,
        isSelectable: u(S),
        disabled: !u(p),
        handleSelector: u(M),
        noDragClass: n().noDragClass,
        nodeClickDistance: t.nodeClickDistance,
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (he, on, Cn, Nn) => {
          t.onnodedrag?.({ event: he, targetNode: Cn, nodes: Nn });
        },
        onDragStart: (he, on, Cn, Nn) => {
          t.onnodedragstart?.({ event: he, targetNode: Cn, nodes: Nn });
        },
        onDragStop: (he, on, Cn, Nn) => {
          t.onnodedragstop?.({ event: he, targetNode: Cn, nodes: Nn });
        },
        store: n()
      })), er(ye, (he) => O(Z, he), () => u(Z)), K(ae, ye);
    };
    de(kt, (ae) => {
      u(f) || ae(ct);
    });
  }
  K(e, St), ne();
}
var Nv = /* @__PURE__ */ le('<div class="svelte-flow__nodes"></div>');
function Pv(e, t) {
  te(t, !0);
  let n = L(t, "store", 15);
  const r = typeof ResizeObserver > "u" ? null : new ResizeObserver((i) => {
    const s = /* @__PURE__ */ new Map();
    i.forEach((a) => {
      const l = a.target.getAttribute("data-id");
      s.set(l, { id: l, nodeElement: a.target, force: !0 });
    }), n().updateNodeInternals(s);
  });
  ei(() => {
    r?.disconnect();
  });
  var o = Nv();
  Xr(o, 21, () => n().visible.nodes.values(), (i) => i.id, (i, s) => {
    Cv(i, {
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
  }), K(e, o), ne();
}
var Mv = /* @__PURE__ */ me('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Av(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ m(() => t.edge.id), r = /* @__PURE__ */ m(() => t.edge.source), o = /* @__PURE__ */ m(() => t.edge.target), i = /* @__PURE__ */ m(() => t.edge.sourceX), s = /* @__PURE__ */ m(() => t.edge.sourceY), a = /* @__PURE__ */ m(() => t.edge.targetX), l = /* @__PURE__ */ m(() => t.edge.targetY), c = /* @__PURE__ */ m(() => t.edge.sourcePosition), f = /* @__PURE__ */ m(() => t.edge.targetPosition), h = /* @__PURE__ */ m(() => Ce(t.edge.animated, !1)), d = /* @__PURE__ */ m(() => Ce(t.edge.selected, !1)), g = /* @__PURE__ */ m(() => t.edge.label), v = /* @__PURE__ */ m(() => t.edge.labelStyle), _ = /* @__PURE__ */ m(() => Ce(t.edge.data, () => ({}), !0)), y = /* @__PURE__ */ m(() => t.edge.style), b = /* @__PURE__ */ m(() => t.edge.interactionWidth), C = /* @__PURE__ */ m(() => Ce(t.edge.type, "default")), k = /* @__PURE__ */ m(() => t.edge.sourceHandle), w = /* @__PURE__ */ m(() => t.edge.targetHandle), A = /* @__PURE__ */ m(() => t.edge.markerStart), T = /* @__PURE__ */ m(() => t.edge.markerEnd), z = /* @__PURE__ */ m(() => t.edge.selectable), M = /* @__PURE__ */ m(() => t.edge.focusable), V = /* @__PURE__ */ m(() => Ce(t.edge.deletable, !0)), Y = /* @__PURE__ */ m(() => t.edge.hidden), P = /* @__PURE__ */ m(() => t.edge.zIndex), x = /* @__PURE__ */ m(() => t.edge.class), N = /* @__PURE__ */ m(() => t.edge.ariaLabel);
  Kg(u(n));
  let p = null, S = /* @__PURE__ */ m(() => u(z) ?? t.store.elementsSelectable), E = /* @__PURE__ */ m(() => u(M) ?? t.store.edgesFocusable), I = /* @__PURE__ */ m(() => t.store.edgeTypes[u(C)] ?? vl), R = /* @__PURE__ */ m(() => u(A) ? `url('#${Oo(u(A), t.store.flowId)}')` : void 0), D = /* @__PURE__ */ m(() => u(T) ? `url('#${Oo(u(T), t.store.flowId)}')` : void 0);
  function H(W) {
    const q = t.store.edgeLookup.get(u(n));
    q && (u(S) && t.store.handleEdgeSelection(u(n)), t.onedgeclick?.({ event: W, edge: q }));
  }
  function B(W, q) {
    const Q = t.store.edgeLookup.get(u(n));
    Q && q({ event: W, edge: Q });
  }
  function X(W) {
    if (!t.store.disableKeyboardA11y && Xa.includes(W.key) && u(S)) {
      const { unselectNodesAndEdges: q, addSelectedEdges: Q } = t.store;
      W.key === "Escape" ? (p?.blur(), q({ edges: [t.edge] })) : Q([u(n)]);
    }
  }
  var Z = Se(), F = se(Z);
  {
    var U = (W) => {
      var q = Mv();
      let Q;
      var ce = fe(q);
      Vt(ce, () => ({
        class: ["svelte-flow__edge", u(x)],
        "data-id": u(n),
        onclick: H,
        oncontextmenu: t.onedgecontextmenu ? (j) => {
          B(j, t.onedgecontextmenu);
        } : void 0,
        onpointerenter: t.onedgepointerenter ? (j) => {
          B(j, t.onedgepointerenter);
        } : void 0,
        onpointerleave: t.onedgepointerleave ? (j) => {
          B(j, t.onedgepointerleave);
        } : void 0,
        "aria-label": u(N) === null ? void 0 : u(N) ? u(N) : `Edge from ${u(r)} to ${u(o)}`,
        "aria-describedby": u(E) ? `${wl}-${t.store.flowId}` : void 0,
        role: t.edge.ariaRole ?? (u(E) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: u(E) ? X : void 0,
        tabindex: u(E) ? 0 : void 0,
        ...t.edge.domAttributes,
        [Nt]: {
          animated: u(h),
          selected: u(d),
          selectable: u(S)
        }
      }));
      var we = fe(ce);
      Wr(we, () => u(I), (j, pe) => {
        pe(j, {
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
            return u(f);
          },
          get animated() {
            return u(h);
          },
          get selected() {
            return u(d);
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
            return u(y);
          },
          get interactionWidth() {
            return u(b);
          },
          get selectable() {
            return u(S);
          },
          get deletable() {
            return u(V);
          },
          get type() {
            return u(C);
          },
          get sourceHandleId() {
            return u(k);
          },
          get targetHandleId() {
            return u(w);
          },
          get markerStart() {
            return u(R);
          },
          get markerEnd() {
            return u(D);
          }
        });
      }), er(ce, (j) => p = j, () => p), ve(() => Q = Le(q, "", Q, { "z-index": u(P) })), K(W, q);
    };
    de(F, (W) => {
      u(Y) || W(U);
    });
  }
  K(e, Z), ne();
}
Jl();
var Iv = /* @__PURE__ */ me("<defs></defs>");
function Tv(e, t) {
  te(t, !1);
  const n = Kt();
  Uc();
  var r = Iv();
  Xr(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Rv(o, Pt(() => u(i)));
  }), K(e, r), ne();
}
var Dv = /* @__PURE__ */ me('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), zv = /* @__PURE__ */ me('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Ov = /* @__PURE__ */ me('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Rv(e, t) {
  te(t, !0);
  let n = L(t, "width", 3, 12.5), r = L(t, "height", 3, 12.5), o = L(t, "markerUnits", 3, "strokeWidth"), i = L(t, "orient", 3, "auto-start-reverse"), s = L(t, "color", 3, "none");
  var a = Ov(), l = fe(a);
  {
    var c = (h) => {
      var d = Dv();
      let g;
      ve(() => {
        G(d, "stroke-width", t.strokeWidth), g = Le(d, "", g, { stroke: s() });
      }), K(h, d);
    }, f = (h) => {
      var d = Se(), g = se(d);
      {
        var v = (_) => {
          var y = zv();
          let b;
          ve(() => {
            G(y, "stroke-width", t.strokeWidth), b = Le(y, "", b, { stroke: s(), fill: s() });
          }), K(_, y);
        };
        de(
          g,
          (_) => {
            t.type === zr.ArrowClosed && _(v);
          },
          !0
        );
      }
      K(h, d);
    };
    de(l, (h) => {
      t.type === zr.Arrow ? h(c) : h(f, !1);
    });
  }
  ve(() => {
    G(a, "id", t.id), G(a, "markerWidth", `${n()}`), G(a, "markerHeight", `${r()}`), G(a, "markerUnits", o()), G(a, "orient", i());
  }), K(e, a), ne();
}
var Hv = /* @__PURE__ */ le('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Lv(e, t) {
  te(t, !0);
  let n = L(t, "store", 15);
  var r = Hv(), o = fe(r), i = fe(o);
  Tv(i, {});
  var s = ie(o, 2);
  Xr(s, 17, () => n().visible.edges.values(), (a) => a.id, (a, l) => {
    Av(a, {
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
  }), K(e, r), ne();
}
var Vv = /* @__PURE__ */ le('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function bl(e, t) {
  te(t, !0);
  let n = L(t, "x", 3, 0), r = L(t, "y", 3, 0), o = L(t, "width", 3, 0), i = L(t, "height", 3, 0), s = L(t, "isVisible", 3, !0);
  var a = Se(), l = se(a);
  {
    var c = (f) => {
      var h = Vv();
      let d;
      ve((g) => d = Le(h, "", d, g), [
        () => ({
          width: typeof o() == "string" ? o() : at(o()),
          height: typeof i() == "string" ? i() : at(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), K(f, h);
    };
    de(l, (f) => {
      s() && f(c);
    });
  }
  K(e, a), ne();
}
var Bv = /* @__PURE__ */ le("<div><!></div>");
function Fv(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ re(void 0);
  it(() => {
    t.store.disableKeyboardA11y || u(n)?.focus({ preventScroll: !0 });
  });
  let r = /* @__PURE__ */ m(() => {
    if (t.store.selectionRectMode === "nodes") {
      t.store.nodes;
      const f = or(t.store.nodeLookup, { filter: (h) => !!h.selected });
      if (f.width > 0 && f.height > 0)
        return f;
    }
    return null;
  });
  function o(f) {
    const h = t.store.nodes.filter((d) => d.selected);
    t.onselectioncontextmenu?.({ nodes: h, event: f });
  }
  function i(f) {
    const h = t.store.nodes.filter((d) => d.selected);
    t.onselectionclick?.({ nodes: h, event: f });
  }
  function s(f) {
    Object.prototype.hasOwnProperty.call(Lr, f.key) && (f.preventDefault(), t.store.moveSelectedNodes(Lr[f.key], f.shiftKey ? 4 : 1));
  }
  var a = Se(), l = se(a);
  {
    var c = (f) => {
      var h = Bv();
      h.__contextmenu = o, h.__click = i, h.__keydown = function(...v) {
        (t.store.disableKeyboardA11y ? void 0 : s)?.apply(this, v);
      };
      let d;
      var g = fe(h);
      bl(g, { width: "100%", height: "100%", x: 0, y: 0 }), Ne(h, (v, _) => yl?.(v, _), () => ({
        disabled: !1,
        store: t.store,
        onDrag: (v, _, y, b) => {
          t.onnodedrag?.({ event: v, targetNode: null, nodes: b });
        },
        onDragStart: (v, _, y, b) => {
          t.onnodedragstart?.({ event: v, targetNode: null, nodes: b });
        },
        onDragStop: (v, _, y, b) => {
          t.onnodedragstop?.({ event: v, targetNode: null, nodes: b });
        }
      })), er(h, (v) => O(n, v), () => u(n)), ve(
        (v) => {
          Et(h, 1, Lt(["svelte-flow__selection-wrapper", t.store.noPanClass]), "svelte-sf2y5e"), G(h, "role", t.store.disableKeyboardA11y ? void 0 : "button"), G(h, "tabindex", t.store.disableKeyboardA11y ? void 0 : -1), d = Le(h, "", d, v);
        },
        [
          () => ({
            width: at(u(r).width),
            height: at(u(r).height),
            transform: `translate(${u(r).x ?? ""}px, ${u(r).y ?? ""}px)`
          })
        ]
      ), K(f, h);
    };
    de(l, (f) => {
      t.store.selectionRectMode === "nodes" && u(r) && pt(u(r).x) && pt(u(r).y) && f(c);
    });
  }
  K(e, a), ne();
}
Jo(["contextmenu", "click", "keydown"]);
function Kv(e) {
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
function je(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], c = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (f, h, d) => h ? f | 1 << d : f,
      0
    );
    for (const f of l) {
      const h = {
        preventDefault: !1,
        enabled: !0,
        ...f
      }, { modifier: d, key: g, callback: v, preventDefault: _, enabled: y } = h;
      if (y) {
        if (a.key !== g) continue;
        if (d === null || d === !1) {
          if (c !== 0) continue;
        } else if (d !== void 0 && d?.[0]?.length > 0) {
          const C = Array.isArray(d) ? d : [d];
          let k = !1;
          for (const w of C)
            if ((Array.isArray(w) ? w : [w]).reduce(
              (T, z) => T | Kv(z),
              0
            ) === c) {
              k = !0;
              break;
            }
          if (!k) continue;
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
  return n && (s = bo(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = bo(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function Yv() {
  const e = /* @__PURE__ */ m(Kt), t = (i) => {
    const s = fs(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? Uh(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return xn(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = Oe(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && fs(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = Oe(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && jg(c) ? c : { ...l, ...c };
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
    getNodes: (i) => i === void 0 ? u(e).nodes : ps(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : ps(u(e).edgeLookup, i),
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
    getViewport: () => As(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = ui(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
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
      const l = $i(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((f) => {
        const h = u(e).nodeLookup.get(f.id);
        if (!h || !l && f.id === i.id)
          return !1;
        const d = xn(h), g = Xn(d, c);
        return s && g > 0 || g >= d.width * d.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = $i(i) ? i : t(i);
      if (!c)
        return !1;
      const f = Xn(c, s);
      return a && f > 0 || f >= s.width * s.height || f >= c.width * c.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Xh({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = Oe(() => u(e).nodes).filter((c) => !a.some(({ id: f }) => f === c.id))), l && (u(e).edges = Oe(() => u(e).edges).filter((c) => !l.some(({ id: f }) => f === c.id))), (a.length > 0 || l.length > 0) && u(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: f } = u(e).viewport, { x: h, y: d } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - d };
      return sr(g, [l, c, f], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: f } = u(e).domNode.getBoundingClientRect(), h = Rr(i, [s, a, l]);
      return { x: h.x + c, y: h.y + f };
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
      n(i, (f) => ({
        ...f,
        data: a?.replace ? c : { ...f.data, ...c }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => Fh(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function ps(e, t) {
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
function Zv(e, t) {
  te(t, !0);
  let n = L(t, "store", 15), r = L(t, "selectionKey", 3, "Shift"), o = L(t, "multiSelectionKey", 19, () => Wn() ? "Meta" : "Control"), i = L(t, "deleteKey", 3, "Backspace"), s = L(t, "panActivationKey", 3, " "), a = L(t, "zoomActivationKey", 19, () => Wn() ? "Meta" : "Control"), { deleteElements: l } = Yv();
  function c(_) {
    return _ !== null && typeof _ == "object";
  }
  function f(_) {
    return c(_) ? _.modifier || [] : [];
  }
  function h(_) {
    return _ == null ? "" : c(_) ? _.key : _;
  }
  function d(_, y) {
    return (Array.isArray(_) ? _ : [_]).map((C) => {
      const k = h(C);
      return {
        key: k,
        modifier: f(C),
        enabled: k !== null,
        callback: y
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function v() {
    const _ = n().nodes.filter((b) => b.selected), y = n().edges.filter((b) => b.selected);
    l({ nodes: _, edges: y });
  }
  kr("blur", Ae, g), kr("contextmenu", Ae, g), Ne(Ae, (_, y) => je?.(_, y), () => ({
    trigger: d(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Ne(Ae, (_, y) => je?.(_, y), () => ({
    trigger: d(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ne(Ae, (_, y) => je?.(_, y), () => ({
    trigger: d(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Ne(Ae, (_, y) => je?.(_, y), () => ({
    trigger: d(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ne(Ae, (_, y) => je?.(_, y), () => ({
    trigger: d(i(), (_) => {
      !(_.originalEvent.ctrlKey || _.originalEvent.metaKey || _.originalEvent.shiftKey) && !el(_.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), Ne(Ae, (_, y) => je?.(_, y), () => ({
    trigger: d(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Ne(Ae, (_, y) => je?.(_, y), () => ({
    trigger: d(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ne(Ae, (_, y) => je?.(_, y), () => ({
    trigger: d(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Ne(Ae, (_, y) => je?.(_, y), () => ({
    trigger: d(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ne(Ae, (_, y) => je?.(_, y), () => ({
    trigger: d(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ne();
}
var Xv = /* @__PURE__ */ me('<path fill="none" class="svelte-flow__connection-path"></path>'), Wv = /* @__PURE__ */ me('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function qv(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ m(() => {
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
      case Mt.Bezier: {
        const [a] = nl(s);
        return a;
      }
      case Mt.Straight: {
        const [a] = ol(s);
        return a;
      }
      case Mt.Step:
      case Mt.SmoothStep: {
        const [a] = fi({
          ...s,
          borderRadius: t.type === Mt.Step ? 0 : void 0
        });
        return a;
      }
    }
  });
  var r = Se(), o = se(r);
  {
    var i = (s) => {
      var a = Wv(), l = fe(a), c = fe(l);
      {
        var f = (d) => {
          var g = Se(), v = se(g);
          Wr(v, () => t.LineComponent, (_, y) => {
            y(_, {});
          }), K(d, g);
        }, h = (d) => {
          var g = Xv();
          ve(() => {
            G(g, "d", u(n)), Le(g, t.style);
          }), K(d, g);
        };
        de(c, (d) => {
          t.LineComponent ? d(f) : d(h, !1);
        });
      }
      ve(
        (d) => {
          G(a, "width", t.store.width), G(a, "height", t.store.height), Le(a, t.containerStyle), Et(l, 0, d);
        },
        [
          () => Lt([
            "svelte-flow__connection",
            Vh(t.store.connection.isValid)
          ])
        ]
      ), K(s, a);
    };
    de(o, (s) => {
      t.store.connection.inProgress && s(i);
    });
  }
  K(e, r), ne();
}
var Gv = /* @__PURE__ */ le("<div><!></div>");
function mi(e, t) {
  te(t, !0);
  let n = L(t, "position", 3, "top-right"), r = /* @__PURE__ */ Bt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "style",
    "class",
    "children"
  ]), o = /* @__PURE__ */ m(() => `${n()}`.split("-"));
  var i = Gv();
  Vt(i, (a) => ({ class: a, style: t.style, ...r }), [
    () => [
      "svelte-flow__panel",
      t.class,
      ...u(o)
    ]
  ]);
  var s = fe(i);
  Ye(s, () => t.children ?? Sn), K(e, i), ne();
}
var Uv = /* @__PURE__ */ le('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Qv(e, t) {
  te(t, !0);
  let n = L(t, "position", 3, "bottom-right");
  var r = Se(), o = se(r);
  {
    var i = (s) => {
      mi(s, {
        get position() {
          return n();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (a, l) => {
          var c = Uv();
          K(a, c);
        },
        $$slots: { default: !0 }
      });
    };
    de(o, (s) => {
      t.proOptions?.hideAttribution || s(i);
    });
  }
  K(e, r), ne();
}
var Jv = /* @__PURE__ */ le("<div><!></div>");
function jv(e, t) {
  te(t, !0);
  let n = L(t, "domNode", 15), r = L(t, "clientWidth", 15), o = L(t, "clientHeight", 15), i = /* @__PURE__ */ m(() => t.rest.class), s = /* @__PURE__ */ m(() => Sc(t.rest, [
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
  function a(f) {
    f.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), t.rest.onscroll && t.rest.onscroll(f);
  }
  var l = Jv();
  Vt(
    l,
    (f) => ({
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
      [ht]: f
    }),
    [
      () => ({
        width: at(t.width),
        height: at(t.height)
      })
    ],
    void 0,
    void 0,
    "svelte-mkap6j"
  );
  var c = fe(l);
  Ye(c, () => t.children ?? Sn), er(l, (f) => n(f), () => n()), Ai(l, "clientHeight", o), Ai(l, "clientWidth", r), K(e, l), ne();
}
var $v = /* @__PURE__ */ le('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), e0 = /* @__PURE__ */ le("<!> <!>", 1), t0 = /* @__PURE__ */ le("<!> <!> <!> <!> <!>", 1);
function n0(e, t) {
  te(t, !0);
  let n = L(t, "paneClickDistance", 3, 1), r = L(t, "nodeClickDistance", 3, 1), o = L(t, "panOnScrollMode", 19, () => hn.Free), i = L(t, "preventScrolling", 3, !0), s = L(t, "zoomOnScroll", 3, !0), a = L(t, "zoomOnDoubleClick", 3, !0), l = L(t, "zoomOnPinch", 3, !0), c = L(t, "panOnScroll", 3, !1), f = L(t, "panOnScrollSpeed", 3, 0.5), h = L(t, "panOnDrag", 3, !0), d = L(t, "selectionOnDrag", 3, !1), g = L(t, "connectionLineType", 19, () => Mt.Bezier), v = L(t, "nodes", 31, () => At([])), _ = L(t, "edges", 31, () => At([])), y = L(t, "viewport", 15, void 0), b = /* @__PURE__ */ Bt(t, [
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
  ]), C = hv({
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
      return y();
    },
    set viewport(w) {
      y(w);
    }
  });
  const k = Fo(Ro);
  k && k.setStore && k.setStore(C), Is(Ro, {
    provider: !1,
    getStore() {
      return C;
    }
  }), it(() => {
    const w = { nodes: C.selectedNodes, edges: C.selectedEdges };
    Oe(() => t.onselectionchange)?.(w);
    for (const A of C.selectionChangeHandlers.values())
      A(w);
  }), ei(() => {
    C.reset();
  }), jv(e, {
    get colorMode() {
      return C.colorMode;
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
      return C.domNode;
    },
    set domNode(w) {
      C.domNode = w;
    },
    get clientWidth() {
      return C.width;
    },
    set clientWidth(w) {
      C.width = w;
    },
    get clientHeight() {
      return C.height;
    },
    set clientHeight(w) {
      C.height = w;
    },
    children: (w, A) => {
      var T = t0(), z = se(T);
      Zv(z, {
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
          return C;
        },
        set store(x) {
          C = x;
        }
      });
      var M = ie(z, 2);
      pv(M, {
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
          return f();
        },
        get panOnDrag() {
          return h();
        },
        get paneClickDistance() {
          return n();
        },
        get selectionOnDrag() {
          return d();
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
          return C;
        },
        set store(x) {
          C = x;
        },
        children: (x, N) => {
          yv(x, {
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
              return d();
            },
            get store() {
              return C;
            },
            set store(p) {
              C = p;
            },
            children: (p, S) => {
              var E = e0(), I = se(E);
              wv(I, {
                get store() {
                  return C;
                },
                set store(D) {
                  C = D;
                },
                children: (D, H) => {
                  var B = $v(), X = ie(se(B), 2);
                  Lv(X, {
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
                      return C;
                    },
                    set store(W) {
                      C = W;
                    }
                  });
                  var Z = ie(X, 4);
                  qv(Z, {
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
                      return C;
                    },
                    set store(W) {
                      C = W;
                    }
                  });
                  var F = ie(Z, 2);
                  Pv(F, {
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
                      return C;
                    },
                    set store(W) {
                      C = W;
                    }
                  });
                  var U = ie(F, 2);
                  Fv(U, {
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
                      return C;
                    },
                    set store(W) {
                      C = W;
                    }
                  }), K(D, B);
                },
                $$slots: { default: !0 }
              });
              var R = ie(I, 2);
              {
                let D = /* @__PURE__ */ m(() => !!(C.selectionRect && C.selectionRectMode === "user")), H = /* @__PURE__ */ m(() => C.selectionRect?.width), B = /* @__PURE__ */ m(() => C.selectionRect?.height), X = /* @__PURE__ */ m(() => C.selectionRect?.x), Z = /* @__PURE__ */ m(() => C.selectionRect?.y);
                bl(R, {
                  get isVisible() {
                    return u(D);
                  },
                  get width() {
                    return u(H);
                  },
                  get height() {
                    return u(B);
                  },
                  get x() {
                    return u(X);
                  },
                  get y() {
                    return u(Z);
                  }
                });
              }
              K(p, E);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var V = ie(M, 2);
      Qv(V, {
        get proOptions() {
          return t.proOptions;
        },
        get position() {
          return t.attributionPosition;
        }
      });
      var Y = ie(V, 2);
      Ev(Y, {
        get store() {
          return C;
        }
      });
      var P = ie(Y, 2);
      Ye(P, () => t.children ?? Sn), K(w, T);
    },
    $$slots: { default: !0 }
  }), ne();
}
var r0 = /* @__PURE__ */ le("<button><!></button>");
function vr(e, t) {
  let n = /* @__PURE__ */ Bt(t, [
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
  var r = r0();
  Vt(r, () => ({
    type: "button",
    onclick: t.onclick,
    class: ["svelte-flow__controls-button", t.class],
    ...n,
    [ht]: {
      "--xy-controls-button-background-color-props": t.bgColor,
      "--xy-controls-button-background-color-hover-props": t.bgColorHover,
      "--xy-controls-button-color-props": t.color,
      "--xy-controls-button-color-hover-props": t.colorHover,
      "--xy-controls-button-border-color-props": t.borderColor
    }
  }));
  var o = fe(r);
  Ye(o, () => t.children ?? Sn), K(e, r);
}
var o0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function i0(e) {
  var t = o0();
  K(e, t);
}
var s0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function a0(e) {
  var t = s0();
  K(e, t);
}
var l0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function c0(e) {
  var t = l0();
  K(e, t);
}
var u0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function f0(e) {
  var t = u0();
  K(e, t);
}
var d0 = /* @__PURE__ */ me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function h0(e) {
  var t = d0();
  K(e, t);
}
var g0 = /* @__PURE__ */ le("<!> <!>", 1), v0 = /* @__PURE__ */ le("<!> <!> <!> <!> <!> <!>", 1);
function p0(e, t) {
  te(t, !0);
  let n = L(t, "position", 3, "bottom-left"), r = L(t, "orientation", 3, "vertical"), o = L(t, "showZoom", 3, !0), i = L(t, "showFitView", 3, !0), s = L(t, "showLock", 3, !0), a = /* @__PURE__ */ Bt(t, [
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
  ]), l = /* @__PURE__ */ m(Kt);
  const c = {
    bgColor: t.buttonBgColor,
    bgColorHover: t.buttonBgColorHover,
    color: t.buttonColor,
    colorHover: t.buttonColorHover,
    borderColor: t.buttonBorderColor
  };
  let f = /* @__PURE__ */ m(() => u(l).nodesDraggable || u(l).nodesConnectable || u(l).elementsSelectable), h = /* @__PURE__ */ m(() => u(l).viewport.zoom <= u(l).minZoom), d = /* @__PURE__ */ m(() => u(l).viewport.zoom >= u(l).maxZoom), g = /* @__PURE__ */ m(() => u(l).ariaLabelConfig), v = /* @__PURE__ */ m(() => r() === "horizontal" ? "horizontal" : "vertical");
  const _ = () => {
    u(l).zoomIn();
  }, y = () => {
    u(l).zoomOut();
  }, b = () => {
    u(l).fitView(t.fitViewOptions);
  }, C = () => {
    let k = !u(f);
    u(l).nodesDraggable = k, u(l).nodesConnectable = k, u(l).elementsSelectable = k;
  };
  {
    let k = /* @__PURE__ */ m(() => [
      "svelte-flow__controls",
      u(v),
      t.class
    ]);
    mi(e, Pt(
      {
        get class() {
          return u(k);
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
        children: (w, A) => {
          var T = v0(), z = se(T);
          {
            var M = (D) => {
              var H = Se(), B = se(H);
              Ye(B, () => t.before), K(D, H);
            };
            de(z, (D) => {
              t.before && D(M);
            });
          }
          var V = ie(z, 2);
          {
            var Y = (D) => {
              var H = g0(), B = se(H);
              vr(B, Pt(
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
                    return u(d);
                  }
                },
                () => c,
                {
                  children: (Z, F) => {
                    i0(Z);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var X = ie(B, 2);
              vr(X, Pt(
                {
                  onclick: y,
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
                  children: (Z, F) => {
                    a0(Z);
                  },
                  $$slots: { default: !0 }
                }
              )), K(D, H);
            };
            de(V, (D) => {
              o() && D(Y);
            });
          }
          var P = ie(V, 2);
          {
            var x = (D) => {
              vr(D, Pt(
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
                  children: (H, B) => {
                    c0(H);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            de(P, (D) => {
              i() && D(x);
            });
          }
          var N = ie(P, 2);
          {
            var p = (D) => {
              vr(D, Pt(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: C,
                  get title() {
                    return u(g)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.interactive.ariaLabel"];
                  }
                },
                () => c,
                {
                  children: (H, B) => {
                    var X = Se(), Z = se(X);
                    {
                      var F = (W) => {
                        h0(W);
                      }, U = (W) => {
                        f0(W);
                      };
                      de(Z, (W) => {
                        u(f) ? W(F) : W(U, !1);
                      });
                    }
                    K(H, X);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            de(N, (D) => {
              s() && D(p);
            });
          }
          var S = ie(N, 2);
          {
            var E = (D) => {
              var H = Se(), B = se(H);
              Ye(B, () => t.children), K(D, H);
            };
            de(S, (D) => {
              t.children && D(E);
            });
          }
          var I = ie(S, 2);
          {
            var R = (D) => {
              var H = Se(), B = se(H);
              Ye(B, () => t.after), K(D, H);
            };
            de(I, (D) => {
              t.after && D(R);
            });
          }
          K(w, T);
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
var m0 = /* @__PURE__ */ me("<circle></circle>");
function y0(e, t) {
  var n = m0();
  ve(() => {
    G(n, "cx", t.radius), G(n, "cy", t.radius), G(n, "r", t.radius), Et(n, 0, Lt(["svelte-flow__background-pattern", "dots", t.class]));
  }), K(e, n);
}
var _0 = /* @__PURE__ */ me("<path></path>");
function w0(e, t) {
  te(t, !0);
  var n = _0();
  ve(() => {
    G(n, "stroke-width", t.lineWidth), G(n, "d", `M${t.dimensions[0] / 2} 0 V${t.dimensions[1]} M0 ${t.dimensions[1] / 2} H${t.dimensions[0]}`), Et(n, 0, Lt([
      "svelte-flow__background-pattern",
      t.variant,
      t.class
    ]));
  }), K(e, n), ne();
}
const b0 = {
  [Ot.Dots]: 1,
  [Ot.Lines]: 1,
  [Ot.Cross]: 6
};
var x0 = /* @__PURE__ */ me('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function E0(e, t) {
  te(t, !0);
  let n = L(t, "variant", 19, () => Ot.Dots), r = L(t, "gap", 3, 20), o = L(t, "lineWidth", 3, 1), i = /* @__PURE__ */ m(Kt), s = /* @__PURE__ */ m(() => n() === Ot.Dots), a = /* @__PURE__ */ m(() => n() === Ot.Cross), l = /* @__PURE__ */ m(() => Array.isArray(r()) ? r() : [r(), r()]), c = /* @__PURE__ */ m(() => `background-pattern-${u(i).flowId}-${t.id ?? ""}`), f = /* @__PURE__ */ m(() => [
    u(l)[0] * u(i).viewport.zoom || 1,
    u(l)[1] * u(i).viewport.zoom || 1
  ]), h = /* @__PURE__ */ m(() => (t.size ?? b0[n()]) * u(i).viewport.zoom), d = /* @__PURE__ */ m(() => u(a) ? [u(h), u(h)] : u(f)), g = /* @__PURE__ */ m(() => u(s) ? [u(h) / 2, u(h) / 2] : [
    u(d)[0] / 2,
    u(d)[1] / 2
  ]);
  var v = x0();
  let _;
  var y = fe(v), b = fe(y);
  {
    var C = (A) => {
      {
        let T = /* @__PURE__ */ m(() => u(h) / 2);
        y0(A, {
          get radius() {
            return u(T);
          },
          get class() {
            return t.patternClass;
          }
        });
      }
    }, k = (A) => {
      w0(A, {
        get dimensions() {
          return u(d);
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
    de(b, (A) => {
      u(s) ? A(C) : A(k, !1);
    });
  }
  var w = ie(y);
  ve(() => {
    Et(v, 0, Lt([
      "svelte-flow__background",
      "svelte-flow__container",
      t.class
    ])), _ = Le(v, "", _, {
      "--xy-background-color-props": t.bgColor,
      "--xy-background-pattern-color-props": t.patternColor
    }), G(y, "id", u(c)), G(y, "x", u(i).viewport.x % u(f)[0]), G(y, "y", u(i).viewport.y % u(f)[1]), G(y, "width", u(f)[0]), G(y, "height", u(f)[1]), G(y, "patternTransform", `translate(-${u(g)[0]},-${u(g)[1]})`), G(w, "fill", `url(#${u(c)})`);
  }), K(e, v), ne();
}
var S0 = /* @__PURE__ */ me("<rect></rect>");
function k0(e, t) {
  let n = L(t, "borderRadius", 3, 5), r = L(t, "strokeWidth", 3, 2);
  var o = Se(), i = se(o);
  {
    var s = (l) => {
      const c = /* @__PURE__ */ m(() => t.nodeComponent);
      var f = Se(), h = se(f);
      Wr(h, () => u(c), (d, g) => {
        g(d, {
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
      }), K(l, f);
    }, a = (l) => {
      var c = S0();
      let f, h;
      ve(() => {
        f = Et(c, 0, Lt(["svelte-flow__minimap-node", t.class]), null, f, { selected: t.selected }), G(c, "x", t.x), G(c, "y", t.y), G(c, "rx", n()), G(c, "ry", n()), G(c, "width", t.width), G(c, "height", t.height), G(c, "shape-rendering", t.shapeRendering), h = Le(c, "", h, {
          fill: t.color,
          stroke: t.strokeColor,
          "stroke-width": r()
        });
      }), K(l, c);
    };
    de(i, (l) => {
      t.nodeComponent ? l(s) : l(a, !1);
    });
  }
  K(e, o);
}
function C0(e, t) {
  const n = Pg({
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
const go = (e) => e instanceof Function ? e : () => e;
var N0 = /* @__PURE__ */ me("<title> </title>"), P0 = /* @__PURE__ */ me('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), M0 = /* @__PURE__ */ le('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function A0(e, t) {
  te(t, !0);
  let n = L(t, "position", 3, "bottom-right"), r = L(t, "nodeStrokeColor", 3, "transparent"), o = L(t, "nodeClass", 3, ""), i = L(t, "nodeBorderRadius", 3, 5), s = L(t, "nodeStrokeWidth", 3, 2), a = L(t, "width", 3, 200), l = L(t, "height", 3, 150), c = L(t, "pannable", 3, !0), f = L(t, "zoomable", 3, !0), h = /* @__PURE__ */ Bt(t, [
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
  ]), d = /* @__PURE__ */ m(Kt), g = /* @__PURE__ */ m(() => u(d).ariaLabelConfig);
  const v = t.nodeColor === void 0 ? void 0 : go(t.nodeColor), _ = go(r()), y = go(o()), b = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let C = /* @__PURE__ */ m(() => `svelte-flow__minimap-desc-${u(d).flowId}`), k = /* @__PURE__ */ m(() => ({
    x: -u(d).viewport.x / u(d).viewport.zoom,
    y: -u(d).viewport.y / u(d).viewport.zoom,
    width: u(d).width / u(d).viewport.zoom,
    height: u(d).height / u(d).viewport.zoom
  })), w = /* @__PURE__ */ m(() => Qa(or(u(d).nodeLookup, { filter: (R) => !R.hidden }), u(k))), A = /* @__PURE__ */ m(() => u(w).width / a()), T = /* @__PURE__ */ m(() => u(w).height / l()), z = /* @__PURE__ */ m(() => Math.max(u(A), u(T))), M = /* @__PURE__ */ m(() => u(z) * a()), V = /* @__PURE__ */ m(() => u(z) * l()), Y = /* @__PURE__ */ m(() => 5 * u(z)), P = /* @__PURE__ */ m(() => u(w).x - (u(M) - u(w).width) / 2 - u(Y)), x = /* @__PURE__ */ m(() => u(w).y - (u(V) - u(w).height) / 2 - u(Y)), N = /* @__PURE__ */ m(() => u(M) + u(Y) * 2), p = /* @__PURE__ */ m(() => u(V) + u(Y) * 2);
  const S = () => u(z);
  var E = M0(), I = se(E);
  {
    let R = /* @__PURE__ */ m(() => ["svelte-flow__minimap", t.class]);
    Hc(I, () => ({ "--xy-minimap-background-color-props": t.bgColor })), mi(I.lastChild, Pt(
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
        children: (D, H) => {
          var B = Se(), X = se(B);
          {
            var Z = (F) => {
              var U = P0();
              let W;
              var q = fe(U);
              {
                var Q = (j) => {
                  var pe = N0(), $ = fe(pe);
                  ve(() => {
                    G(pe, "id", u(C)), zt($, t.ariaLabel ?? u(g)["minimap.ariaLabel"]);
                  }), K(j, pe);
                };
                de(q, (j) => {
                  (t.ariaLabel ?? u(g)["minimap.ariaLabel"]) && j(Q);
                });
              }
              var ce = ie(q);
              Xr(ce, 17, () => u(d).nodes, (j) => j.id, (j, pe) => {
                const $ = /* @__PURE__ */ m(() => u(d).nodeLookup.get(u(pe).id));
                var Me = Se(), St = se(Me);
                {
                  var kt = (ct) => {
                    const ae = /* @__PURE__ */ m(() => Ft(u($)));
                    {
                      let ye = /* @__PURE__ */ m(() => v?.(u($))), Xe = /* @__PURE__ */ m(() => _(u($))), he = /* @__PURE__ */ m(() => y(u($)));
                      k0(ct, Pt(
                        {
                          get id() {
                            return u($).id;
                          },
                          get x() {
                            return u($).internals.positionAbsolute.x;
                          },
                          get y() {
                            return u($).internals.positionAbsolute.y;
                          }
                        },
                        () => u(ae),
                        {
                          get selected() {
                            return u($).selected;
                          },
                          get nodeComponent() {
                            return t.nodeComponent;
                          },
                          get color() {
                            return u(ye);
                          },
                          get borderRadius() {
                            return i();
                          },
                          get strokeColor() {
                            return u(Xe);
                          },
                          get strokeWidth() {
                            return s();
                          },
                          get shapeRendering() {
                            return b;
                          },
                          get class() {
                            return u(he);
                          }
                        }
                      ));
                    }
                  };
                  de(St, (ct) => {
                    u($) && Ja(u($)) && !u($).hidden && ct(kt);
                  });
                }
                K(j, Me);
              });
              var we = ie(ce);
              Ne(U, (j, pe) => C0?.(j, pe), () => ({
                store: u(d),
                panZoom: u(d).panZoom,
                getViewScale: S,
                translateExtent: u(d).translateExtent,
                width: u(d).width,
                height: u(d).height,
                inversePan: t.inversePan,
                zoomStep: t.zoomStep,
                pannable: c(),
                zoomable: f()
              })), ve(() => {
                G(U, "width", a()), G(U, "height", l()), G(U, "viewBox", `${u(P) ?? ""} ${u(x) ?? ""} ${u(N) ?? ""} ${u(p) ?? ""}`), G(U, "aria-labelledby", u(C)), W = Le(U, "", W, {
                  "--xy-minimap-mask-background-color-props": t.maskColor,
                  "--xy-minimap-mask-stroke-color-props": t.maskStrokeColor,
                  "--xy-minimap-mask-stroke-width-props": t.maskStrokeWidth ? t.maskStrokeWidth * u(z) : void 0
                }), G(we, "d", `M${u(P) - u(Y)},${u(x) - u(Y)}h${u(N) + u(Y) * 2}v${u(p) + u(Y) * 2}h${-u(N) - u(Y) * 2}z
      M${u(k).x ?? ""},${u(k).y ?? ""}h${u(k).width ?? ""}v${u(k).height ?? ""}h${-u(k).width}z`);
              }), K(F, U);
            };
            de(X, (F) => {
              u(d).panZoom && F(Z);
            });
          }
          K(D, B);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  K(e, E), ne();
}
var I0 = /* @__PURE__ */ le("<!> <!> <!>", 1), T0 = /* @__PURE__ */ le('<div style="width: 100%; height: 500px; border: 1px solid #ccc;"><!></div>');
function D0(e, t) {
  te(t, !0);
  let n = L(t, "nodes", 19, () => []), r = L(t, "edges", 19, () => []), o = /* @__PURE__ */ re([]), i = /* @__PURE__ */ re([]);
  Go(() => {
    u(o).length === 0 && O(o, n().length > 0 ? n() : [
      { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
      { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } }
    ]), u(i).length === 0 && O(i, r().length > 0 ? r() : [{ id: "e1-2", source: "1", target: "2" }]);
  });
  var s = T0(), a = fe(s);
  n0(a, {
    fitView: !0,
    get nodes() {
      return u(o);
    },
    set nodes(l) {
      O(o, l);
    },
    get edges() {
      return u(i);
    },
    set edges(l) {
      O(i, l);
    },
    children: (l, c) => {
      var f = I0(), h = se(f);
      p0(h, {});
      var d = ie(h, 2);
      E0(d, {});
      var g = ie(d, 2);
      A0(g, {}), K(l, f);
    },
    $$slots: { default: !0 }
  }), K(e, s), ne();
}
const ms = () => {
  window.Alpine.data("flowBuilder", ({ state: e }) => ({
    state: e,
    init() {
      const t = Array.isArray(this.state?.nodes) ? JSON.parse(JSON.stringify(this.state.nodes)) : [], n = Array.isArray(this.state?.edges) ? JSON.parse(JSON.stringify(this.state.edges)) : [];
      zc(D0, {
        target: this.$refs.canvas,
        props: {
          nodes: t,
          edges: n
        }
      });
    }
  }));
};
window.Alpine ? ms() : document.addEventListener("alpine:init", ms);
