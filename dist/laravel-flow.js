var Wr = Array.isArray, Hl = Array.prototype.indexOf, qr = Array.from, Ll = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, Ms = Object.getOwnPropertyDescriptors, As = Object.prototype, Vl = Array.prototype, Gr = Object.getPrototypeOf, Pi = Object.isExtensible;
function gn(e) {
  return typeof e == "function";
}
const Ve = () => {
};
function Bl(e) {
  return e();
}
function So(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ts() {
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
function $n(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const ke = 2, qo = 4, Ur = 8, Ds = 1 << 24, ht = 16, Mt = 32, Ft = 64, jr = 128, et = 512, Se = 1024, Ke = 2048, ut = 4096, Fe = 8192, Et = 16384, Jr = 32768, Ct = 65536, Mi = 1 << 17, Is = 1 << 18, cn = 1 << 19, zs = 1 << 20, wt = 1 << 25, $t = 32768, Co = 1 << 21, Go = 1 << 22, Ht = 1 << 23, lt = /* @__PURE__ */ Symbol("$state"), Os = /* @__PURE__ */ Symbol("legacy props"), Fl = /* @__PURE__ */ Symbol(""), vn = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Uo(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Kl() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Yl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Zl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ql(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Gl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ul() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function jl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Jl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ql = 1, $l = 2, Rs = 4, ec = 8, tc = 16, nc = 1, rc = 2, oc = 4, ic = 8, sc = 16, ac = 4, Hs = 1, lc = 2, Ee = /* @__PURE__ */ Symbol(), cc = "http://www.w3.org/1999/xhtml", uc = "@attach";
function dc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function fc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ls(e) {
  return e === this.v;
}
function Vs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Bs(e) {
  return !Vs(e, this.v);
}
let An = !1;
function hc() {
  An = !0;
}
const gc = [];
function Fs(e, t = !1, n = !1) {
  return Er(e, /* @__PURE__ */ new Map(), "", gc, null, n);
}
function Er(e, t, n, r, o = null, i = !1) {
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
    if (Wr(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var c = 0; c < e.length; c += 1) {
        var l = e[c];
        c in e && (a[c] = Er(l, t, n, r, null, i));
      }
      return a;
    }
    if (Gr(e) === As) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Er(
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
      return Er(
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
let he = null;
function bn(e) {
  he = e;
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
function vc(e) {
  return Qo().has(e);
}
function te(e, t = !1, n) {
  he = {
    p: he,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: An && !t ? { s: null, u: null, $: [] } : null
  };
}
function ne(e) {
  var t = (
    /** @type {ComponentContext} */
    he
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      na(r);
  }
  return t.i = !0, he = t.p, /** @type {T} */
  {};
}
function er() {
  return !An || he !== null && he.l === null;
}
function Qo(e) {
  return he === null && Uo(), he.c ??= new Map(pc(he) || void 0);
}
function pc(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let pn = [];
function mc() {
  var e = pn;
  pn = [], So(e);
}
function Kt(e) {
  if (pn.length === 0) {
    var t = pn;
    queueMicrotask(() => {
      t === pn && mc();
    });
  }
  pn.push(e);
}
function Ks(e) {
  var t = ue;
  if (t === null)
    return ae.f |= Ht, e;
  if ((t.f & Jr) === 0) {
    if ((t.f & jr) === 0)
      throw e;
    t.b.error(e);
  } else
    xn(e, t);
}
function xn(e, t) {
  for (; t !== null; ) {
    if ((t.f & jr) !== 0)
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
const hr = /* @__PURE__ */ new Set();
let ve = null, We = null, ot = [], $o = null, No = !1;
class Qe {
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
    ot = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (ve = null, Ai(n.render_effects), Ai(n.effects), this.#l?.resolve()), We = null;
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
      var o = r.f, i = (o & (Mt | Ft)) !== 0, s = i && (o & Se) !== 0, a = s || (o & Fe) !== 0 || this.skipped_effects.has(r);
      if ((r.f & jr) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Se : (o & qo) !== 0 ? n.effects.push(r) : ir(r) && ((r.f & ht) !== 0 && this.#i.add(r), Zn(r));
        var c = r.first;
        if (c !== null) {
          r = c;
          continue;
        }
      }
      var l = r.parent;
      for (r = r.next; r === null && l !== null; )
        l === n.effect && (this.#a(n.effects), this.#a(n.render_effects), n = /** @type {EffectTarget} */
        n.parent), r = l.next, l = l.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(t) {
    for (const n of t)
      (n.f & Ke) !== 0 ? this.#i.add(n) : (n.f & ut) !== 0 && this.#o.add(n), this.#c(n.deps), Ce(n, Se);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & ke) === 0 || (n.f & $t) === 0 || (n.f ^= $t, this.#c(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Ht) === 0 && (this.current.set(t, t.v), We?.set(t, t.v));
  }
  activate() {
    ve = this, this.apply();
  }
  deactivate() {
    ve === this && (ve = null, We = null);
  }
  flush() {
    if (this.activate(), ot.length > 0) {
      if (yc(), ve !== null && ve !== this)
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
    if (hr.size > 1) {
      this.previous.clear();
      var t = We, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of hr) {
        if (i === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [c, l] of this.current) {
          if (i.current.has(c))
            if (n && l !== i.current.get(c))
              i.current.set(c, l);
            else
              continue;
          s.push(c);
        }
        if (s.length === 0)
          continue;
        const a = [...i.current.keys()].filter((c) => !this.current.has(c));
        if (a.length > 0) {
          var o = ot;
          ot = [];
          const c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
          for (const d of s)
            Ys(d, a, c, l);
          if (ot.length > 0) {
            ve = i, i.apply();
            for (const d of ot)
              i.#s(d, r);
            i.deactivate();
          }
          ot = o;
        }
      }
      ve = null, We = t;
    }
    this.committed = !0, hr.delete(this);
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
      this.#o.delete(t), Ce(t, Ke), en(t);
    for (const t of this.#o)
      Ce(t, ut), en(t);
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
    return (this.#l ??= Ts()).promise;
  }
  static ensure() {
    if (ve === null) {
      const t = ve = new Qe();
      hr.add(ve), Qe.enqueue(() => {
        ve === t && t.flush();
      });
    }
    return ve;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Kt(t);
  }
  apply() {
  }
}
function yc() {
  var e = jt;
  No = !0;
  var t = null;
  try {
    var n = 0;
    for (Ar(!0); ot.length > 0; ) {
      var r = Qe.ensure();
      if (n++ > 1e3) {
        var o, i;
        _c();
      }
      r.process(ot), Lt.clear();
    }
  } finally {
    No = !1, Ar(e), $o = null;
  }
}
function _c() {
  try {
    Wl();
  } catch (e) {
    xn(e, $o);
  }
}
let mt = null;
function Ai(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Et | Fe)) === 0 && ir(r) && (mt = /* @__PURE__ */ new Set(), Zn(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? la(r) : r.fn = null), mt?.size > 0)) {
        Lt.clear();
        for (const o of mt) {
          if ((o.f & (Et | Fe)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            mt.has(s) && (mt.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const c = i[a];
            (c.f & (Et | Fe)) === 0 && Zn(c);
          }
        }
        mt.clear();
      }
    }
    mt = null;
  }
}
function Ys(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & ke) !== 0 ? Ys(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Go | ht)) !== 0 && (i & Ke) === 0 && Zs(o, t, r) && (Ce(o, Ke), en(
        /** @type {Effect} */
        o
      ));
    }
}
function Zs(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & ke) !== 0 && Zs(
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
function en(e) {
  for (var t = $o = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (No && t === ue && (n & ht) !== 0 && (n & Is) === 0)
      return;
    if ((n & (Ft | Mt)) !== 0) {
      if ((n & Se) === 0) return;
      t.f ^= Se;
    }
  }
  ot.push(t);
}
function Xs(e) {
  let t = 0, n = tn(0), r;
  return () => {
    Kn() && (u(n), Qr(() => (t === 0 && (r = ze(() => e(() => Bn(n)))), t += 1, () => {
      Kt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Bn(n));
      });
    })));
  };
}
var wc = Ct | cn | jr;
function bc(e, t, n) {
  new xc(e, t, n);
}
class xc {
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
  #_ = Xs(() => (this.#h = tn(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    ue.b, this.#e = !!this.#r.pending, this.#i = or(() => {
      ue.b = this;
      {
        var o = this.#m();
        try {
          this.#o = De(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#e = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, wc);
  }
  #w() {
    try {
      this.#o = De(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #b() {
    const t = this.#r.pending;
    t && (this.#s = De(() => t(this.#t)), Qe.enqueue(() => {
      var n = this.#m();
      this.#o = this.#v(() => (Qe.ensure(), De(() => this.#l(n)))), this.#f > 0 ? this.#p() : (Ut(
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
    return this.#e && (this.#u = kt(), this.#t.before(this.#u), t = this.#u), t;
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
    var n = ue, r = ae, o = he;
    dt(this.#i), Ie(this.#i), bn(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return Ks(i), null;
    } finally {
      dt(n), Ie(r), bn(o);
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
    ), da(this.#o, this.#c)), this.#s === null && (this.#s = De(() => t(this.#t)));
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
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#s && Ut(this.#s, () => {
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
    this.#o && (be(this.#o), this.#o = null), this.#s && (be(this.#s), this.#s = null), this.#a && (be(this.#a), this.#a = null);
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        fc();
        return;
      }
      o = !0, i && Jl(), Qe.ensure(), this.#d = 0, this.#a !== null && Ut(this.#a, () => {
        this.#a = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#v(() => (this.#g = !1, De(() => this.#l(this.#t)))), this.#f > 0 ? this.#p() : this.#e = !1;
    };
    var a = ae;
    try {
      Ie(null), i = !0, n?.(t, s), i = !1;
    } catch (c) {
      xn(c, this.#i && this.#i.parent);
    } finally {
      Ie(a);
    }
    r && Kt(() => {
      this.#a = this.#v(() => {
        Qe.ensure(), this.#g = !0;
        try {
          return De(() => {
            r(
              this.#t,
              () => t,
              () => s
            );
          });
        } catch (c) {
          return xn(
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
function Ws(e, t, n, r) {
  const o = er() ? tr : ei;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = ve, s = (
    /** @type {Effect} */
    ue
  ), a = Ec();
  function c() {
    Promise.all(n.map((l) => /* @__PURE__ */ kc(l))).then((l) => {
      a();
      try {
        r([...t.map(o), ...l]);
      } catch (d) {
        (s.f & Et) === 0 && xn(d, s);
      }
      i?.deactivate(), Mr();
    }).catch((l) => {
      xn(l, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return c();
    } finally {
      i?.deactivate(), Mr();
    }
  }) : c();
}
function Ec() {
  var e = ue, t = ae, n = he, r = ve;
  return function(i = !0) {
    dt(e), Ie(t), bn(n), i && r?.activate();
  };
}
function Mr() {
  dt(null), Ie(null), bn(null);
}
// @__NO_SIDE_EFFECTS__
function tr(e) {
  var t = ke | Ke, n = ae !== null && (ae.f & ke) !== 0 ? (
    /** @type {Derived} */
    ae
  ) : null;
  return ue !== null && (ue.f |= cn), {
    ctx: he,
    deps: null,
    effects: null,
    equals: Ls,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ee
    ),
    wv: 0,
    parent: n ?? ue,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function kc(e, t) {
  let n = (
    /** @type {Effect | null} */
    ue
  );
  n === null && Kl();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = tn(
    /** @type {V} */
    Ee
  ), s = !ae, a = /* @__PURE__ */ new Map();
  return zc(() => {
    var c = Ts();
    o = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, c.reject).then(() => {
        l === ve && l.committed && l.deactivate(), Mr();
      });
    } catch (f) {
      c.reject(f), Mr();
    }
    var l = (
      /** @type {Batch} */
      ve
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), l.increment(d), a.get(l)?.reject(vn), a.delete(l), a.set(l, c);
    }
    const h = (f, g = void 0) => {
      if (l.activate(), g)
        g !== vn && (i.f |= Ht, En(i, g));
      else {
        (i.f & Ht) !== 0 && (i.f ^= Ht), En(i, f);
        for (const [v, p] of a) {
          if (a.delete(v), v === l) break;
          p.reject(vn);
        }
      }
      s && (r.update_pending_count(-1), l.decrement(d));
    };
    c.promise.then(h, (f) => h(null, f || "unknown"));
  }), ni(() => {
    for (const c of a.values())
      c.reject(vn);
  }), new Promise((c) => {
    function l(d) {
      function h() {
        d === o ? c(i) : l(o);
      }
      d.then(h, h);
    }
    l(o);
  });
}
// @__NO_SIDE_EFFECTS__
function _(e) {
  const t = /* @__PURE__ */ tr(e);
  return fa(t), t;
}
// @__NO_SIDE_EFFECTS__
function ei(e) {
  const t = /* @__PURE__ */ tr(e);
  return t.equals = Bs, t;
}
function qs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      be(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Sc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ke) === 0)
      return (t.f & Et) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function ti(e) {
  var t, n = ue;
  dt(Sc(e));
  try {
    e.f &= ~$t, qs(e), t = pa(e);
  } finally {
    dt(n);
  }
  return t;
}
function Gs(e) {
  var t = ti(e);
  if (e.equals(t) || (ve?.is_fork || (e.v = t), e.wv = ga()), !un)
    if (We !== null)
      (Kn() || ve?.is_fork) && We.set(e, t);
    else {
      var n = (e.f & et) === 0 ? ut : Se;
      Ce(e, n);
    }
}
let Po = /* @__PURE__ */ new Set();
const Lt = /* @__PURE__ */ new Map();
let Us = !1;
function tn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ls,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ce(e, t) {
  const n = tn(e);
  return fa(n), n;
}
// @__NO_SIDE_EFFECTS__
function Cc(e, t = !1, n = !0) {
  const r = tn(e);
  return t || (r.equals = Bs), An && n && he !== null && he.l !== null && (he.l.s ??= []).push(r), r;
}
function H(e, t, n = !1) {
  ae !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!at || (ae.f & Mi) !== 0) && er() && (ae.f & (ke | ht | Go | Mi)) !== 0 && !St?.includes(e) && jl();
  let r = n ? st(t) : t;
  return En(e, r);
}
function En(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    un ? Lt.set(e, t) : Lt.set(e, n), e.v = t;
    var r = Qe.ensure();
    r.capture(e, n), (e.f & ke) !== 0 && ((e.f & Ke) !== 0 && ti(
      /** @type {Derived} */
      e
    ), Ce(e, (e.f & et) !== 0 ? Se : ut)), e.wv = ga(), js(e, Ke), er() && ue !== null && (ue.f & Se) !== 0 && (ue.f & (Mt | Ft)) === 0 && (Xe === null ? Rc([e]) : Xe.push(e)), !r.is_fork && Po.size > 0 && !Us && Nc();
  }
  return t;
}
function Nc() {
  Us = !1;
  var e = jt;
  Ar(!0);
  const t = Array.from(Po);
  try {
    for (const n of t)
      (n.f & Se) !== 0 && Ce(n, ut), ir(n) && Zn(n);
  } finally {
    Ar(e);
  }
  Po.clear();
}
function Bn(e) {
  H(e, e.v + 1);
}
function js(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = er(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === ue)) {
        var c = (a & Ke) === 0;
        if (c && Ce(s, t), (a & ke) !== 0) {
          var l = (
            /** @type {Derived} */
            s
          );
          We?.delete(l), (a & $t) === 0 && (a & et && (s.f |= $t), js(l, ut));
        } else c && ((a & ht) !== 0 && mt !== null && mt.add(
          /** @type {Effect} */
          s
        ), en(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function st(e) {
  if (typeof e != "object" || e === null || lt in e)
    return e;
  const t = Gr(e);
  if (t !== As && t !== Vl)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Wr(e), o = /* @__PURE__ */ ce(0), i = Jt, s = (a) => {
    if (Jt === i)
      return a();
    var c = ae, l = Jt;
    Ie(null), Ii(i);
    var d = a();
    return Ie(c), Ii(l), d;
  };
  return r && n.set("length", /* @__PURE__ */ ce(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, c, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Gl();
        var d = n.get(c);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ ce(l.value);
          return n.set(c, h), h;
        }) : H(d, l.value, !0), !0;
      },
      deleteProperty(a, c) {
        var l = n.get(c);
        if (l === void 0) {
          if (c in a) {
            const d = s(() => /* @__PURE__ */ ce(Ee));
            n.set(c, d), Bn(o);
          }
        } else
          H(l, Ee), Bn(o);
        return !0;
      },
      get(a, c, l) {
        if (c === lt)
          return e;
        var d = n.get(c), h = c in a;
        if (d === void 0 && (!h || Rt(a, c)?.writable) && (d = s(() => {
          var g = st(h ? a[c] : Ee), v = /* @__PURE__ */ ce(g);
          return v;
        }), n.set(c, d)), d !== void 0) {
          var f = u(d);
          return f === Ee ? void 0 : f;
        }
        return Reflect.get(a, c, l);
      },
      getOwnPropertyDescriptor(a, c) {
        var l = Reflect.getOwnPropertyDescriptor(a, c);
        if (l && "value" in l) {
          var d = n.get(c);
          d && (l.value = u(d));
        } else if (l === void 0) {
          var h = n.get(c), f = h?.v;
          if (h !== void 0 && f !== Ee)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return l;
      },
      has(a, c) {
        if (c === lt)
          return !0;
        var l = n.get(c), d = l !== void 0 && l.v !== Ee || Reflect.has(a, c);
        if (l !== void 0 || ue !== null && (!d || Rt(a, c)?.writable)) {
          l === void 0 && (l = s(() => {
            var f = d ? st(a[c]) : Ee, g = /* @__PURE__ */ ce(f);
            return g;
          }), n.set(c, l));
          var h = u(l);
          if (h === Ee)
            return !1;
        }
        return d;
      },
      set(a, c, l, d) {
        var h = n.get(c), f = c in a;
        if (r && c === "length")
          for (var g = l; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var v = n.get(g + "");
            v !== void 0 ? H(v, Ee) : g in a && (v = s(() => /* @__PURE__ */ ce(Ee)), n.set(g + "", v));
          }
        if (h === void 0)
          (!f || Rt(a, c)?.writable) && (h = s(() => /* @__PURE__ */ ce(void 0)), H(h, st(l)), n.set(c, h));
        else {
          f = h.v !== Ee;
          var p = s(() => st(l));
          H(h, p);
        }
        var m = Reflect.getOwnPropertyDescriptor(a, c);
        if (m?.set && m.set.call(d, l), !f) {
          if (r && typeof c == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(c);
            Number.isInteger(S) && S >= w.v && H(w, S + 1);
          }
          Bn(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var c = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Ee;
        });
        for (var [l, d] of n)
          d.v !== Ee && !(l in a) && c.push(l);
        return c;
      },
      setPrototypeOf() {
        Ul();
      }
    }
  );
}
function Ti(e) {
  try {
    if (e !== null && typeof e == "object" && lt in e)
      return e[lt];
  } catch {
  }
  return e;
}
function Pc(e, t) {
  return Object.is(Ti(e), Ti(t));
}
var Te, Js, Qs, $s;
function Mc() {
  if (Te === void 0) {
    Te = window, Js = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Qs = Rt(t, "firstChild").get, $s = Rt(t, "nextSibling").get, Pi(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Pi(n) && (n.__t = void 0);
  }
}
function kt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  return (
    /** @type {TemplateNode | null} */
    Qs.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
  return (
    /** @type {TemplateNode | null} */
    $s.call(e)
  );
}
function Z(e, t) {
  return /* @__PURE__ */ Be(e);
}
function le(e, t = !1) {
  {
    var n = /* @__PURE__ */ Be(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ nr(n) : n;
  }
}
function U(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ nr(r);
  return r;
}
function Ac(e) {
  e.textContent = "";
}
function ea() {
  return !1;
}
function Tc(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Kt(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function rr(e) {
  var t = ae, n = ue;
  Ie(null), dt(null);
  try {
    return e();
  } finally {
    Ie(t), dt(n);
  }
}
function ta(e) {
  ue === null && (ae === null && Xl(), Zl()), un && Yl();
}
function Dc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ge(e, t, n) {
  var r = ue;
  r !== null && (r.f & Fe) !== 0 && (e |= Fe);
  var o = {
    ctx: he,
    deps: null,
    nodes: null,
    f: e | Ke | et,
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
      Zn(o), o.f |= Jr;
    } catch (a) {
      throw be(o), a;
    }
  else t !== null && en(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & cn) === 0 && (i = i.first, (e & ht) !== 0 && (e & Ct) !== 0 && i !== null && (i.f |= Ct)), i !== null && (i.parent = r, r !== null && Dc(i, r), ae !== null && (ae.f & ke) !== 0 && (e & Ft) === 0)) {
    var s = (
      /** @type {Derived} */
      ae
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Kn() {
  return ae !== null && !at;
}
function ni(e) {
  const t = Ge(Ur, null, !1);
  return Ce(t, Se), t.teardown = e, t;
}
function tt(e) {
  ta();
  var t = (
    /** @type {Effect} */
    ue.f
  ), n = !ae && (t & Mt) !== 0 && (t & Jr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      he
    );
    (r.e ??= []).push(e);
  } else
    return na(e);
}
function na(e) {
  return Ge(qo | zs, e, !1);
}
function ri(e) {
  return ta(), Ge(Ur | zs, e, !0);
}
function ra(e) {
  Qe.ensure();
  const t = Ge(Ft | cn, e, !0);
  return () => {
    be(t);
  };
}
function Ic(e) {
  Qe.ensure();
  const t = Ge(Ft | cn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ut(t, () => {
      be(t), r(void 0);
    }) : (be(t), r(void 0));
  });
}
function Tn(e) {
  return Ge(qo, e, !1);
}
function zc(e) {
  return Ge(Go | cn, e, !0);
}
function Qr(e, t = 0) {
  return Ge(Ur | t, e, !0);
}
function ie(e, t = [], n = [], r = []) {
  Ws(r, t, n, (o) => {
    Ge(Ur, () => e(...o.map(u)), !0);
  });
}
function or(e, t = 0) {
  var n = Ge(ht | t, e, !0);
  return n;
}
function oa(e, t = 0) {
  var n = Ge(Ds | t, e, !0);
  return n;
}
function De(e) {
  return Ge(Mt | cn, e, !0);
}
function ia(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = un, r = ae;
    Di(!0), Ie(null);
    try {
      t.call(null);
    } finally {
      Di(n), Ie(r);
    }
  }
}
function sa(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && rr(() => {
      o.abort(vn);
    });
    var r = n.next;
    (n.f & Ft) !== 0 ? n.parent = null : be(n, t), n = r;
  }
}
function Oc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Mt) === 0 && be(t), t = n;
  }
}
function be(e, t = !0) {
  var n = !1;
  (t || (e.f & Is) !== 0) && e.nodes !== null && e.nodes.end !== null && (aa(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), sa(e, t && !n), Tr(e, 0), Ce(e, Et);
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
    var n = e === t ? null : /* @__PURE__ */ nr(e);
    e.remove(), e = n;
  }
}
function la(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ut(e, t, n = !0) {
  var r = [];
  ca(e, r, !0);
  var o = () => {
    n && be(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var s = () => --i || o();
    for (var a of r)
      a.out(s);
  } else
    o();
}
function ca(e, t, n) {
  if ((e.f & Fe) === 0) {
    e.f ^= Fe;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var o = e.first; o !== null; ) {
      var i = o.next, s = (o.f & Ct) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & Mt) !== 0 && (e.f & ht) !== 0;
      ca(o, t, s ? n : !1), o = i;
    }
  }
}
function oi(e) {
  ua(e, !0);
}
function ua(e, t) {
  if ((e.f & Fe) !== 0) {
    e.f ^= Fe, (e.f & Se) === 0 && (Ce(e, Ke), en(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Ct) !== 0 || (n.f & Mt) !== 0;
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
      var o = n === r ? null : /* @__PURE__ */ nr(n);
      t.append(n), n = o;
    }
}
let jt = !1;
function Ar(e) {
  jt = e;
}
let un = !1;
function Di(e) {
  un = e;
}
let ae = null, at = !1;
function Ie(e) {
  ae = e;
}
let ue = null;
function dt(e) {
  ue = e;
}
let St = null;
function fa(e) {
  ae !== null && (St === null ? St = [e] : St.push(e));
}
let Me = null, Le = 0, Xe = null;
function Rc(e) {
  Xe = e;
}
let ha = 1, Yn = 0, Jt = Yn;
function Ii(e) {
  Jt = e;
}
function ga() {
  return ++ha;
}
function ir(e) {
  var t = e.f;
  if ((t & Ke) !== 0)
    return !0;
  if (t & ke && (e.f &= ~$t), (t & ut) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (ir(
          /** @type {Derived} */
          i
        ) && Gs(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & et) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    We === null && Ce(e, Se);
  }
  return !1;
}
function va(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !St?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & ke) !== 0 ? va(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Ce(i, Ke) : (i.f & Se) !== 0 && Ce(i, ut), en(
        /** @type {Effect} */
        i
      ));
    }
}
function pa(e) {
  var t = Me, n = Le, r = Xe, o = ae, i = St, s = he, a = at, c = Jt, l = e.f;
  Me = /** @type {null | Value[]} */
  null, Le = 0, Xe = null, ae = (l & (Mt | Ft)) === 0 ? e : null, St = null, bn(e.ctx), at = !1, Jt = ++Yn, e.ac !== null && (rr(() => {
    e.ac.abort(vn);
  }), e.ac = null);
  try {
    e.f |= Co;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps;
    if (Me !== null) {
      var g;
      if (Tr(e, Le), f !== null && Le > 0)
        for (f.length = Le + Me.length, g = 0; g < Me.length; g++)
          f[Le + g] = Me[g];
      else
        e.deps = f = Me;
      if (Kn() && (e.f & et) !== 0)
        for (g = Le; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Le < f.length && (Tr(e, Le), f.length = Le);
    if (er() && Xe !== null && !at && f !== null && (e.f & (ke | ut | Ke)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Xe.length; g++)
        va(
          Xe[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Yn++, Xe !== null && (r === null ? r = Xe : r.push(.../** @type {Source[]} */
    Xe))), (e.f & Ht) !== 0 && (e.f ^= Ht), h;
  } catch (v) {
    return Ks(v);
  } finally {
    e.f ^= Co, Me = t, Le = n, Xe = r, ae = o, St = i, bn(s), at = a, Jt = c;
  }
}
function Hc(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Hl.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & ke) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Me === null || !Me.includes(t)) && (Ce(t, ut), (t.f & et) !== 0 && (t.f ^= et, t.f &= ~$t), qs(
    /** @type {Derived} **/
    t
  ), Tr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Tr(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Hc(e, n[r]);
}
function Zn(e) {
  var t = e.f;
  if ((t & Et) === 0) {
    Ce(e, Se);
    var n = ue, r = jt;
    ue = e, jt = !0;
    try {
      (t & (ht | Ds)) !== 0 ? Oc(e) : sa(e), ia(e);
      var o = pa(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ha;
      var i;
    } finally {
      jt = r, ue = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & ke) !== 0;
  if (ae !== null && !at) {
    var r = ue !== null && (ue.f & Et) !== 0;
    if (!r && !St?.includes(e)) {
      var o = ae.deps;
      if ((ae.f & Co) !== 0)
        e.rv < Yn && (e.rv = Yn, Me === null && o !== null && o[Le] === e ? Le++ : Me === null ? Me = [e] : Me.includes(e) || Me.push(e));
      else {
        (ae.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [ae] : i.includes(ae) || i.push(ae);
      }
    }
  }
  if (un) {
    if (Lt.has(e))
      return Lt.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & Se) === 0 && s.reactions !== null || ya(s)) && (a = ti(s)), Lt.set(s, a), a;
    }
  } else n && (!We?.has(e) || ve?.is_fork && !Kn()) && (s = /** @type {Derived} */
  e, ir(s) && Gs(s), jt && Kn() && (s.f & et) === 0 && ma(s));
  if (We?.has(e))
    return We.get(e);
  if ((e.f & Ht) !== 0)
    throw e.v;
  return e.v;
}
function ma(e) {
  if (e.deps !== null) {
    e.f ^= et;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & ke) !== 0 && (t.f & et) === 0 && ma(
        /** @type {Derived} */
        t
      );
  }
}
function ya(e) {
  if (e.v === Ee) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Lt.has(t) || (t.f & ke) !== 0 && ya(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ze(e) {
  var t = at;
  try {
    return at = !0, e();
  } finally {
    at = t;
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
function _a(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (lt in e)
      Mo(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && lt in n && Mo(n);
      }
  }
}
function Mo(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Mo(e[r], t);
      } catch {
      }
    const n = Gr(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ms(n);
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
const wa = /* @__PURE__ */ new Set(), Ao = /* @__PURE__ */ new Set();
function ii(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Rn.call(t, i), !i.cancelBubble)
      return rr(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Kt(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function To(e, t, n, r = {}) {
  var o = ii(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function nn(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = ii(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ni(() => {
    t.removeEventListener(e, s, i);
  });
}
function $r(e) {
  for (var t = 0; t < e.length; t++)
    wa.add(e[t]);
  for (var n of Ao)
    n(e);
}
let zi = null;
function Rn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  zi = e;
  var s = 0, a = zi === e && e.__root;
  if (a) {
    var c = o.indexOf(a);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var l = o.indexOf(t);
    if (l === -1)
      return;
    c <= l && (s = c);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Ll(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = ae, h = ue;
    Ie(null), dt(null);
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
      e.__root = t, delete e.currentTarget, Ie(d), dt(h);
    }
  }
}
function si(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function rn(e, t) {
  var n = (
    /** @type {Effect} */
    ue
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  var n = (t & Hs) !== 0, r = (t & lc) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    o === void 0 && (o = si(i ? e : "<!>" + e), n || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ Be(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Js ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Be(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      rn(a, c);
    } else
      rn(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function qc(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Hs) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        si(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Be(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Be(c); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Be(c)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Be(c);
    }
    var l = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Be(l)
      ), h = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      rn(d, h);
    } else
      rn(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function ye(e, t) {
  return /* @__PURE__ */ qc(e, t, "svg");
}
function Gc(e = "") {
  {
    var t = kt(e + "");
    return rn(t, t), t;
  }
}
function me() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = kt();
  return e.append(t, n), rn(t, n), e;
}
function V(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Do = !0;
function _e(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Uc(e, t) {
  return jc(e, t);
}
const fn = /* @__PURE__ */ new Map();
function jc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Mc();
  var a = /* @__PURE__ */ new Set(), c = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var v = Wc(g);
        t.addEventListener(g, Rn, { passive: v });
        var p = fn.get(g);
        p === void 0 ? (document.addEventListener(g, Rn, { passive: v }), fn.set(g, 1)) : fn.set(g, p + 1);
      }
    }
  };
  c(qr(wa)), Ao.add(c);
  var l = void 0, d = Ic(() => {
    var h = n ?? t.appendChild(kt());
    return bc(
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
            he
          );
          g.c = i;
        }
        o && (r.$$events = o), Do = s, l = e(f, r) || {}, Do = !0, i && ne();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, Rn);
        var g = (
          /** @type {number} */
          fn.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Rn), fn.delete(f)) : fn.set(f, g);
      }
      Ao.delete(c), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Jc.set(l, d), l;
}
let Jc = /* @__PURE__ */ new WeakMap();
class ai {
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
        oi(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (be(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            da(s, l), l.append(kt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            be(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), Ut(s, a, !1)) : a();
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
      n.includes(r) || (be(o.effect), this.#n.delete(r));
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
    ), o = ea();
    if (n && !this.#t.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = kt();
        i.append(s), this.#n.set(t, {
          effect: De(() => n(s)),
          fragment: i
        });
      } else
        this.#t.set(
          t,
          De(() => n(this.anchor))
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
  var r = new ai(e), o = n ? Ct : 0;
  function i(s, a) {
    r.ensure(s, a);
  }
  or(() => {
    var s = !1;
    t((a, c = !0) => {
      s = !0, i(c, a);
    }), s || i(!1, null);
  }, o);
}
function Qc(e, t) {
  Qr(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Xn(e, t) {
  return t;
}
function $c(e, t, n) {
  for (var r = [], o = t.length, i, s = t.length, a = 0; a < o; a++) {
    let h = t[a];
    Ut(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Io(qr(i.done)), f.delete(i), f.size === 0 && (e.outrogroups = null);
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
      var l = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        l.parentNode
      );
      Ac(d), d.append(l), e.items.clear();
    }
    Io(t, !c);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function Io(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    be(e[n], t);
}
var Oi;
function Nt(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), c = (t & Rs) !== 0;
  if (c) {
    var l = (
      /** @type {Element} */
      e
    );
    s = l.appendChild(kt());
  }
  var d = null, h = /* @__PURE__ */ ei(() => {
    var w = n();
    return Wr(w) ? w : w == null ? [] : qr(w);
  }), f, g = !0;
  function v() {
    m.fallback = d, eu(m, f, s, t, r), d !== null && (f.length === 0 ? (d.f & wt) === 0 ? oi(d) : (d.f ^= wt, Hn(d, null, s)) : Ut(d, () => {
      d = null;
    }));
  }
  var p = or(() => {
    f = /** @type {V[]} */
    u(h);
    for (var w = f.length, S = /* @__PURE__ */ new Set(), C = (
      /** @type {Batch} */
      ve
    ), b = ea(), A = 0; A < w; A += 1) {
      var T = f[A], z = r(T, A), M = g ? null : a.get(z);
      M ? (M.v && En(M.v, T), M.i && En(M.i, A), b && C.skipped_effects.delete(M.e)) : (M = tu(
        a,
        g ? s : Oi ??= kt(),
        T,
        z,
        A,
        o,
        t,
        n
      ), g || (M.e.f |= wt), a.set(z, M)), S.add(z);
    }
    if (w === 0 && i && !d && (g ? d = De(() => i(s)) : (d = De(() => i(Oi ??= kt())), d.f |= wt)), !g)
      if (b) {
        for (const [B, Y] of a)
          S.has(B) || C.skipped_effects.add(Y.e);
        C.oncommit(v), C.ondiscard(() => {
        });
      } else
        v();
    u(h);
  }), m = { effect: p, items: a, outrogroups: null, fallback: d };
  g = !1;
}
function eu(e, t, n, r, o) {
  var i = (r & ec) !== 0, s = t.length, a = e.items, c = e.effect.first, l, d = null, h, f = [], g = [], v, p, m, w;
  if (i)
    for (w = 0; w < s; w += 1)
      v = t[w], p = o(v, w), m = /** @type {EachItem} */
      a.get(p).e, (m.f & wt) === 0 && (m.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(m));
  for (w = 0; w < s; w += 1) {
    if (v = t[w], p = o(v, w), m = /** @type {EachItem} */
    a.get(p).e, e.outrogroups !== null)
      for (const Y of e.outrogroups)
        Y.pending.delete(m), Y.done.delete(m);
    if ((m.f & wt) !== 0)
      if (m.f ^= wt, m === c)
        Hn(m, null, n);
      else {
        var S = d ? d.next : c;
        m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), Dt(e, d, m), Dt(e, m, S), Hn(m, S, n), d = m, f = [], g = [], c = d.next;
        continue;
      }
    if ((m.f & Fe) !== 0 && (oi(m), i && (m.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(m))), m !== c) {
      if (l !== void 0 && l.has(m)) {
        if (f.length < g.length) {
          var C = g[0], b;
          d = C.prev;
          var A = f[0], T = f[f.length - 1];
          for (b = 0; b < f.length; b += 1)
            Hn(f[b], C, n);
          for (b = 0; b < g.length; b += 1)
            l.delete(g[b]);
          Dt(e, A.prev, T.next), Dt(e, d, A), Dt(e, T, C), c = C, d = T, w -= 1, f = [], g = [];
        } else
          l.delete(m), Hn(m, c, n), Dt(e, m.prev, m.next), Dt(e, m, d === null ? e.effect.first : d.next), Dt(e, d, m), d = m;
        continue;
      }
      for (f = [], g = []; c !== null && c !== m; )
        (l ??= /* @__PURE__ */ new Set()).add(c), g.push(c), c = c.next;
      if (c === null)
        continue;
    }
    (m.f & wt) === 0 && f.push(m), d = m, c = m.next;
  }
  if (e.outrogroups !== null) {
    for (const Y of e.outrogroups)
      Y.pending.size === 0 && (Io(qr(Y.done)), e.outrogroups?.delete(Y));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || l !== void 0) {
    var z = [];
    if (l !== void 0)
      for (m of l)
        (m.f & Fe) === 0 && z.push(m);
    for (; c !== null; )
      (c.f & Fe) === 0 && c !== e.fallback && z.push(c), c = c.next;
    var M = z.length;
    if (M > 0) {
      var B = (r & Rs) !== 0 && s === 0 ? n : null;
      if (i) {
        for (w = 0; w < M; w += 1)
          z[w].nodes?.a?.measure();
        for (w = 0; w < M; w += 1)
          z[w].nodes?.a?.fix();
      }
      $c(e, z, B);
    }
  }
  i && Kt(() => {
    if (h !== void 0)
      for (m of h)
        m.nodes?.a?.apply();
  });
}
function tu(e, t, n, r, o, i, s, a) {
  var c = (s & Ql) !== 0 ? (s & tc) === 0 ? /* @__PURE__ */ Cc(n, !1, !1) : tn(n) : null, l = (s & $l) !== 0 ? tn(o) : null;
  return {
    v: c,
    i: l,
    e: De(() => (i(t, c ?? n, l ?? o, a), () => {
      e.delete(r);
    }))
  };
}
function Hn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, o = e.nodes.end, i = t && (t.f & wt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ nr(r)
      );
      if (i.before(r), r === o)
        return;
      r = s;
    }
}
function Dt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function ba(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  ie(() => {
    var a = (
      /** @type {Effect} */
      ue
    );
    if (s !== (s = t() ?? "") && (a.nodes !== null && (aa(
      a.nodes.start,
      /** @type {TemplateNode} */
      a.nodes.end
    ), a.nodes = null), s !== "")) {
      var c = s + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var l = si(c);
      if ((n || r) && (l = /** @type {Element} */
      /* @__PURE__ */ Be(l)), rn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Be(l),
        /** @type {TemplateNode} */
        l.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Be(l); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Be(l)
          );
      else
        i.before(l);
    }
  });
}
function He(e, t, ...n) {
  var r = new ai(e);
  or(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Ct);
}
function eo(e, t, n) {
  var r = new ai(e);
  or(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Ct);
}
const nu = () => performance.now(), yt = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => nu(),
  tasks: /* @__PURE__ */ new Set()
};
function xa() {
  const e = yt.now();
  yt.tasks.forEach((t) => {
    t.c(e) || (yt.tasks.delete(t), t.f());
  }), yt.tasks.size !== 0 && yt.tick(xa);
}
function ru(e) {
  let t;
  return yt.tasks.size === 0 && yt.tick(xa), {
    promise: new Promise((n) => {
      yt.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      yt.tasks.delete(t);
    }
  };
}
function gr(e, t) {
  rr(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function ou(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Ri(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [o, i] = r.split(":");
    if (!o || i === void 0) break;
    const s = ou(o.trim());
    t[s] = i.trim();
  }
  return t;
}
const iu = (e) => e;
function su(e, t, n, r) {
  var o = (e & ac) !== 0, i = "both", s, a = t.inert, c = t.style.overflow, l, d;
  function h() {
    return rr(() => s ??= n()(t, r?.() ?? /** @type {P} */
    {}, {
      direction: i
    }));
  }
  var f = {
    is_global: o,
    in() {
      t.inert = a, gr(t, "introstart"), l = zo(t, h(), d, 1, () => {
        gr(t, "introend"), l?.abort(), l = s = void 0, t.style.overflow = c;
      });
    },
    out(m) {
      t.inert = !0, gr(t, "outrostart"), d = zo(t, h(), l, 0, () => {
        gr(t, "outroend"), m?.();
      });
    },
    stop: () => {
      l?.abort(), d?.abort();
    }
  }, g = (
    /** @type {Effect & { nodes: EffectNodes }} */
    ue
  );
  if ((g.nodes.t ??= []).push(f), Do) {
    var v = o;
    if (!v) {
      for (var p = (
        /** @type {Effect | null} */
        g.parent
      ); p && (p.f & Ct) !== 0; )
        for (; (p = p.parent) && (p.f & ht) === 0; )
          ;
      v = !p || (p.f & Jr) !== 0;
    }
    v && Tn(() => {
      ze(() => f.in());
    });
  }
}
function zo(e, t, n, r, o) {
  var i = r === 1;
  if (gn(t)) {
    var s, a = !1;
    return Kt(() => {
      if (!a) {
        var m = t({ direction: i ? "in" : "out" });
        s = zo(e, m, n, r, o);
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
      abort: Ve,
      deactivate: Ve,
      reset: Ve,
      t: () => r
    };
  const { delay: c = 0, css: l, tick: d, easing: h = iu } = t;
  var f = [];
  if (i && n === void 0 && (d && d(0, 1), l)) {
    var g = Ri(l(0, 1));
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
      if (l)
        for (var A = Math.ceil(S / 16.666666666666668), T = 0; T <= A; T += 1) {
          var z = m + w * h(T / A), M = Ri(l(z, 1 - z));
          C.push(M), b ||= M.overflow === "hidden";
        }
      b && (e.style.overflow = "hidden"), v = () => {
        var B = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return m + w * h(B / S);
      }, d && ru(() => {
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
      p && (p.cancel(), p.effect = null, p.onfinish = Ve);
    },
    deactivate: () => {
      o = Ve;
    },
    reset: () => {
      r === 0 && d?.(1, 0);
    },
    t: () => v()
  };
}
function Pe(e, t, n) {
  Tn(() => {
    var r = ze(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Qr(() => {
        var s = n();
        _a(s), o && Vs(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function au(e, t) {
  var n = void 0, r;
  oa(() => {
    n !== (n = t()) && (r && (be(r), r = null), n && (r = De(() => {
      Tn(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Ea(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ea(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function lu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ea(e)) && (r && (r += " "), r += t);
  return r;
}
function Yt(e) {
  return typeof e == "object" ? lu(e) : e ?? "";
}
const Hi = [...` 	
\r\f \v\uFEFF`];
function cu(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Hi.includes(r[s - 1])) && (a === r.length || Hi.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Li(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function fo(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function uu(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, c = [];
      r && c.push(...Object.keys(r).map(fo)), o && c.push(...Object.keys(o).map(fo));
      var l = 0, d = -1;
      const p = e.length;
      for (var h = 0; h < p; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === p - 1) {
            if (d !== -1) {
              var g = fo(e.substring(l, d).trim());
              if (!c.includes(g)) {
                f !== ";" && h++;
                var v = e.substring(l, h).trim();
                n += " " + v + ";";
              }
            }
            l = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Li(r)), o && (n += Li(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Oe(e, t, n, r, o, i) {
  var s = e.__className;
  if (s !== n || s === void 0) {
    var a = cu(n, r, i);
    a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a), e.__className = n;
  } else if (i && o !== i)
    for (var c in i) {
      var l = !!i[c];
      (o == null || l !== !!o[c]) && e.classList.toggle(c, l);
    }
  return i;
}
function ho(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Ye(e, t, n, r) {
  var o = e.__style;
  if (o !== t) {
    var i = uu(t, r);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else r && (Array.isArray(r) ? (ho(e, n?.[0], r[0]), ho(e, n?.[1], r[1], "important")) : ho(e, n, r));
  return r;
}
function Dr(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Wr(t))
      return dc();
    for (var r of e.options)
      r.selected = t.includes(Vi(r));
    return;
  }
  for (r of e.options) {
    var o = Vi(r);
    if (Pc(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function ka(e) {
  var t = new MutationObserver(() => {
    Dr(e, e.__value);
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
  }), ni(() => {
    t.disconnect();
  });
}
function Vi(e) {
  return "__value" in e ? e.__value : e.value;
}
const It = /* @__PURE__ */ Symbol("class"), _t = /* @__PURE__ */ Symbol("style"), Sa = /* @__PURE__ */ Symbol("is custom element"), Ca = /* @__PURE__ */ Symbol("is html");
function go(e, t) {
  var n = li(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function du(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function j(e, t, n, r) {
  var o = li(e);
  o[t] !== (o[t] = n) && (t === "loading" && (e[Fl] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Na(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function fu(e, t, n, r, o = !1, i = !1) {
  var s = li(e), a = s[Sa], c = !s[Ca], l = t || {}, d = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = Yt(n.class) : (r || n[It]) && (n.class = null), n[_t] && (n.style ??= null);
  var f = Na(e);
  for (const b in n) {
    let A = n[b];
    if (d && b === "value" && A == null) {
      e.value = e.__value = "", l[b] = A;
      continue;
    }
    if (b === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Oe(e, g, A, r, t?.[It], n[It]), l[b] = A, l[It] = n[It];
      continue;
    }
    if (b === "style") {
      Ye(e, A, t?.[_t], n[_t]), l[b] = A, l[_t] = n[_t];
      continue;
    }
    var v = l[b];
    if (!(A === v && !(A === void 0 && e.hasAttribute(b)))) {
      l[b] = A;
      var p = b[0] + b[1];
      if (p !== "$$")
        if (p === "on") {
          const T = {}, z = "$$" + b;
          let M = b.slice(2);
          var m = Kc(M);
          if (Bc(M) && (M = M.slice(0, -7), T.capture = !0), !m && v) {
            if (A != null) continue;
            e.removeEventListener(M, l[z], T), l[z] = null;
          }
          if (A != null)
            if (m)
              e[`__${M}`] = A, $r([M]);
            else {
              let B = function(Y) {
                l[b].call(this, Y);
              };
              var C = B;
              l[z] = ii(M, e, B, T);
            }
          else m && (e[`__${M}`] = void 0);
        } else if (b === "style")
          j(e, b, A);
        else if (b === "autofocus")
          Tc(
            /** @type {HTMLElement} */
            e,
            !!A
          );
        else if (!a && (b === "__value" || b === "value" && A != null))
          e.value = e.__value = A;
        else if (b === "selected" && d)
          du(
            /** @type {HTMLOptionElement} */
            e,
            A
          );
        else {
          var w = b;
          c || (w = Zc(w));
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
          else S || f.includes(w) && (a || typeof A != "string") ? (e[w] = A, w in s && (s[w] = Ee)) : typeof A != "function" && j(e, w, A);
        }
    }
  }
  return l;
}
function Zt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  Ws(o, n, r, (c) => {
    var l = void 0, d = {}, h = e.nodeName === "SELECT", f = !1;
    if (oa(() => {
      var v = t(...c.map(u)), p = fu(
        e,
        l,
        v,
        i,
        s,
        a
      );
      f && h && "value" in v && Dr(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let w of Object.getOwnPropertySymbols(d))
        v[w] || be(d[w]);
      for (let w of Object.getOwnPropertySymbols(v)) {
        var m = v[w];
        w.description === uc && (!l || m !== l[w]) && (d[w] && be(d[w]), d[w] = De(() => au(e, () => m))), p[w] = m;
      }
      l = p;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      Tn(() => {
        Dr(
          g,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), ka(g);
      });
    }
    f = !0;
  });
}
function li(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Sa]: e.nodeName.includes("-"),
      [Ca]: e.namespaceURI === cc
    }
  );
}
var Bi = /* @__PURE__ */ new Map();
function Na(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Bi.get(t);
  if (n) return n;
  Bi.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Ms(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Gr(o);
  }
  return n;
}
class ci {
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
          ci.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var hu = /* @__PURE__ */ new ci({
  box: "border-box"
});
function Fi(e, t, n) {
  var r = hu.observe(e, () => n(e[t]));
  Tn(() => (ze(() => n(e[t])), r));
}
function Ki(e, t) {
  return e === t || e?.[lt] === t;
}
function sr(e = {}, t, n, r) {
  return Tn(() => {
    var o, i;
    return Qr(() => {
      o = i, i = [], ze(() => {
        e !== n(...i) && (t(e, ...i), o && Ki(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Kt(() => {
        i && Ki(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Pa(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    he
  ), n = t.l.u;
  if (!n) return;
  let r = () => _a(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ tr(() => {
      let a = !1;
      const c = t.s;
      for (const l in c)
        c[l] !== i[l] && (i[l] = c[l], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && ri(() => {
    Yi(t, r), So(n.b);
  }), tt(() => {
    const o = ze(() => n.m.map(Bl));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && tt(() => {
    Yi(t, r), So(n.a);
  });
}
function Yi(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let vr = !1;
function gu(e) {
  var t = vr;
  try {
    return vr = !1, [e(), vr];
  } finally {
    vr = t;
  }
}
const vu = {
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
    vu
  );
}
const pu = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (gn(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      gn(o) && (o = o());
      const i = Rt(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (gn(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Rt(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === lt || t === Os) return !1;
    for (let n of e.props)
      if (gn(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (gn(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function zt(...e) {
  return new Proxy({ props: e }, pu);
}
function L(e, t, n, r) {
  var o = !An || (n & rc) !== 0, i = (n & ic) !== 0, s = (n & sc) !== 0, a = (
    /** @type {V} */
    r
  ), c = !0, l = () => (c && (c = !1, a = s ? ze(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = lt in e || Os in e;
    d = Rt(e, t)?.set ?? (h && t in e ? (C) => e[t] = C : void 0);
  }
  var f, g = !1;
  i ? [f, g] = gu(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = l(), d && (o && ql(), d(f)));
  var v;
  if (o ? v = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C === void 0 ? l() : (c = !0, C);
  } : v = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C !== void 0 && (a = /** @type {V} */
    void 0), C === void 0 ? a : C;
  }, o && (n & oc) === 0)
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
  var m = !1, w = ((n & nc) !== 0 ? tr : ei)(() => (m = !1, v()));
  i && u(w);
  var S = (
    /** @type {Effect} */
    ue
  );
  return (
    /** @type {() => V} */
    (function(C, b) {
      if (arguments.length > 0) {
        const A = b ? u(w) : o && i ? st(C) : C;
        return H(w, A), m = !0, a !== void 0 && (a = A), C;
      }
      return un && m || (S.f & Et) !== 0 ? w.v : u(w);
    })
  );
}
function mu(e) {
  he === null && Uo(), An && he.l !== null ? yu(he).m.push(e) : tt(() => {
    const t = ze(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function to(e) {
  he === null && Uo(), mu(() => () => ze(e));
}
function yu(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const _u = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(_u);
var wu = { value: () => {
} };
function no() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new kr(n);
}
function kr(e) {
  this._ = e;
}
function bu(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
kr.prototype = no.prototype = {
  constructor: kr,
  on: function(e, t) {
    var n = this._, r = bu(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = xu(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Zi(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Zi(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new kr(e);
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
function xu(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Zi(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = wu, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Oo = "http://www.w3.org/1999/xhtml";
const Xi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Oo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ro(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Xi.hasOwnProperty(t) ? { space: Xi[t], local: e } : e;
}
function Eu(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Oo && t.documentElement.namespaceURI === Oo ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function ku(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ma(e) {
  var t = ro(e);
  return (t.local ? ku : Eu)(t);
}
function Su() {
}
function ui(e) {
  return e == null ? Su : function() {
    return this.querySelector(e);
  };
}
function Cu(e) {
  typeof e != "function" && (e = ui(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), c, l, d = 0; d < s; ++d)
      (c = i[d]) && (l = e.call(c, c.__data__, d, i)) && ("__data__" in c && (l.__data__ = c.__data__), a[d] = l);
  return new Ze(r, this._parents);
}
function Nu(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Pu() {
  return [];
}
function Aa(e) {
  return e == null ? Pu : function() {
    return this.querySelectorAll(e);
  };
}
function Mu(e) {
  return function() {
    return Nu(e.apply(this, arguments));
  };
}
function Au(e) {
  typeof e == "function" ? e = Mu(e) : e = Aa(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, c, l = 0; l < a; ++l)
      (c = s[l]) && (r.push(e.call(c, c.__data__, l, s)), o.push(c));
  return new Ze(r, o);
}
function Ta(e) {
  return function() {
    return this.matches(e);
  };
}
function Da(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Tu = Array.prototype.find;
function Du(e) {
  return function() {
    return Tu.call(this.children, e);
  };
}
function Iu() {
  return this.firstElementChild;
}
function zu(e) {
  return this.select(e == null ? Iu : Du(typeof e == "function" ? e : Da(e)));
}
var Ou = Array.prototype.filter;
function Ru() {
  return Array.from(this.children);
}
function Hu(e) {
  return function() {
    return Ou.call(this.children, e);
  };
}
function Lu(e) {
  return this.selectAll(e == null ? Ru : Hu(typeof e == "function" ? e : Da(e)));
}
function Vu(e) {
  typeof e != "function" && (e = Ta(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], c, l = 0; l < s; ++l)
      (c = i[l]) && e.call(c, c.__data__, l, i) && a.push(c);
  return new Ze(r, this._parents);
}
function Ia(e) {
  return new Array(e.length);
}
function Bu() {
  return new Ze(this._enter || this._groups.map(Ia), this._parents);
}
function Ir(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ir.prototype = {
  constructor: Ir,
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
function Fu(e) {
  return function() {
    return e;
  };
}
function Ku(e, t, n, r, o, i) {
  for (var s = 0, a, c = t.length, l = i.length; s < l; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Ir(e, i[s]);
  for (; s < c; ++s)
    (a = t[s]) && (o[s] = a);
}
function Yu(e, t, n, r, o, i, s) {
  var a, c, l = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (c = t[a]) && (f[a] = g = s.call(c, c.__data__, a, t) + "", l.has(g) ? o[a] = c : l.set(g, c));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (c = l.get(g)) ? (r[a] = c, c.__data__ = i[a], l.delete(g)) : n[a] = new Ir(e, i[a]);
  for (a = 0; a < d; ++a)
    (c = t[a]) && l.get(f[a]) === c && (o[a] = c);
}
function Zu(e) {
  return e.__data__;
}
function Xu(e, t) {
  if (!arguments.length) return Array.from(this, Zu);
  var n = t ? Yu : Ku, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Fu(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), c = new Array(i), l = 0; l < i; ++l) {
    var d = r[l], h = o[l], f = h.length, g = Wu(e.call(d, d && d.__data__, l, r)), v = g.length, p = a[l] = new Array(v), m = s[l] = new Array(v), w = c[l] = new Array(f);
    n(d, h, p, m, w, g, t);
    for (var S = 0, C = 0, b, A; S < v; ++S)
      if (b = p[S]) {
        for (S >= C && (C = S + 1); !(A = m[C]) && ++C < v; ) ;
        b._next = A || null;
      }
  }
  return s = new Ze(s, r), s._enter = a, s._exit = c, s;
}
function Wu(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function qu() {
  return new Ze(this._exit || this._groups.map(Ia), this._parents);
}
function Gu(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Uu(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), c = 0; c < s; ++c)
    for (var l = n[c], d = r[c], h = l.length, f = a[c] = new Array(h), g, v = 0; v < h; ++v)
      (g = l[v] || d[v]) && (f[v] = g);
  for (; c < o; ++c)
    a[c] = n[c];
  return new Ze(a, this._parents);
}
function ju() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Ju(e) {
  e || (e = Qu);
  function t(h, f) {
    return h && f ? e(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, c = o[i] = new Array(a), l, d = 0; d < a; ++d)
      (l = s[d]) && (c[d] = l);
    c.sort(t);
  }
  return new Ze(o, this._parents).order();
}
function Qu(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function $u() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ed() {
  return Array.from(this);
}
function td() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function nd() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function rd() {
  return !this.node();
}
function od(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function id(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function sd(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ad(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function ld(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function cd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function ud(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function dd(e, t) {
  var n = ro(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? sd : id : typeof t == "function" ? n.local ? ud : cd : n.local ? ld : ad)(n, t));
}
function za(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function fd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function hd(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function gd(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function vd(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? fd : typeof t == "function" ? gd : hd)(e, t, n ?? "")) : kn(this.node(), e);
}
function kn(e, t) {
  return e.style.getPropertyValue(t) || za(e).getComputedStyle(e, null).getPropertyValue(t);
}
function pd(e) {
  return function() {
    delete this[e];
  };
}
function md(e, t) {
  return function() {
    this[e] = t;
  };
}
function yd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function _d(e, t) {
  return arguments.length > 1 ? this.each((t == null ? pd : typeof t == "function" ? yd : md)(e, t)) : this.node()[e];
}
function Oa(e) {
  return e.trim().split(/^|\s+/);
}
function di(e) {
  return e.classList || new Ra(e);
}
function Ra(e) {
  this._node = e, this._names = Oa(e.getAttribute("class") || "");
}
Ra.prototype = {
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
function Ha(e, t) {
  for (var n = di(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function La(e, t) {
  for (var n = di(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function wd(e) {
  return function() {
    Ha(this, e);
  };
}
function bd(e) {
  return function() {
    La(this, e);
  };
}
function xd(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ha : La)(this, e);
  };
}
function Ed(e, t) {
  var n = Oa(e + "");
  if (arguments.length < 2) {
    for (var r = di(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? xd : t ? wd : bd)(n, t));
}
function kd() {
  this.textContent = "";
}
function Sd(e) {
  return function() {
    this.textContent = e;
  };
}
function Cd(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Nd(e) {
  return arguments.length ? this.each(e == null ? kd : (typeof e == "function" ? Cd : Sd)(e)) : this.node().textContent;
}
function Pd() {
  this.innerHTML = "";
}
function Md(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Ad(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Td(e) {
  return arguments.length ? this.each(e == null ? Pd : (typeof e == "function" ? Ad : Md)(e)) : this.node().innerHTML;
}
function Dd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Id() {
  return this.each(Dd);
}
function zd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Od() {
  return this.each(zd);
}
function Rd(e) {
  var t = typeof e == "function" ? e : Ma(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Hd() {
  return null;
}
function Ld(e, t) {
  var n = typeof e == "function" ? e : Ma(e), r = t == null ? Hd : typeof t == "function" ? t : ui(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Vd() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Bd() {
  return this.each(Vd);
}
function Fd() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Kd() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Yd(e) {
  return this.select(e ? Kd : Fd);
}
function Zd(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Xd(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Wd(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function qd(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Gd(e, t, n) {
  return function() {
    var r = this.__on, o, i = Xd(t);
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
function Ud(e, t, n) {
  var r = Wd(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var c = 0, l = a.length, d; c < l; ++c)
        for (o = 0, d = a[c]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? Gd : qd, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Va(e, t, n) {
  var r = za(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function jd(e, t) {
  return function() {
    return Va(this, e, t);
  };
}
function Jd(e, t) {
  return function() {
    return Va(this, e, t.apply(this, arguments));
  };
}
function Qd(e, t) {
  return this.each((typeof t == "function" ? Jd : jd)(e, t));
}
function* $d() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Ba = [null];
function Ze(e, t) {
  this._groups = e, this._parents = t;
}
function ar() {
  return new Ze([[document.documentElement]], Ba);
}
function ef() {
  return this;
}
Ze.prototype = ar.prototype = {
  constructor: Ze,
  select: Cu,
  selectAll: Au,
  selectChild: zu,
  selectChildren: Lu,
  filter: Vu,
  data: Xu,
  enter: Bu,
  exit: qu,
  join: Gu,
  merge: Uu,
  selection: ef,
  order: ju,
  sort: Ju,
  call: $u,
  nodes: ed,
  node: td,
  size: nd,
  empty: rd,
  each: od,
  attr: dd,
  style: vd,
  property: _d,
  classed: Ed,
  text: Nd,
  html: Td,
  raise: Id,
  lower: Od,
  append: Rd,
  insert: Ld,
  remove: Bd,
  clone: Yd,
  datum: Zd,
  on: Ud,
  dispatch: Qd,
  [Symbol.iterator]: $d
};
function qe(e) {
  return typeof e == "string" ? new Ze([[document.querySelector(e)]], [document.documentElement]) : new Ze([[e]], Ba);
}
function tf(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function je(e, t) {
  if (e = tf(e), t === void 0 && (t = e.currentTarget), t) {
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
const nf = { passive: !1 }, Wn = { capture: !0, passive: !1 };
function vo(e) {
  e.stopImmediatePropagation();
}
function yn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Fa(e) {
  var t = e.document.documentElement, n = qe(e).on("dragstart.drag", yn, Wn);
  "onselectstart" in t ? n.on("selectstart.drag", yn, Wn) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ka(e, t) {
  var n = e.document.documentElement, r = qe(e).on("dragstart.drag", null);
  t && (r.on("click.drag", yn, Wn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const pr = (e) => () => e;
function Ro(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: c,
  dy: l,
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
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
Ro.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function rf(e) {
  return !e.ctrlKey && !e.button;
}
function of() {
  return this.parentNode;
}
function sf(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function af() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function lf() {
  var e = rf, t = of, n = sf, r = af, o = {}, i = no("start", "drag", "end"), s = 0, a, c, l, d, h = 0;
  function f(b) {
    b.on("mousedown.drag", g).filter(r).on("touchstart.drag", m).on("touchmove.drag", w, nf).on("touchend.drag touchcancel.drag", S).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(b, A) {
    if (!(d || !e.call(this, b, A))) {
      var T = C(this, t.call(this, b, A), b, A, "mouse");
      T && (qe(b.view).on("mousemove.drag", v, Wn).on("mouseup.drag", p, Wn), Fa(b.view), vo(b), l = !1, a = b.clientX, c = b.clientY, T("start", b));
    }
  }
  function v(b) {
    if (yn(b), !l) {
      var A = b.clientX - a, T = b.clientY - c;
      l = A * A + T * T > h;
    }
    o.mouse("drag", b);
  }
  function p(b) {
    qe(b.view).on("mousemove.drag mouseup.drag", null), Ka(b.view, l), yn(b), o.mouse("end", b);
  }
  function m(b, A) {
    if (e.call(this, b, A)) {
      var T = b.changedTouches, z = t.call(this, b, A), M = T.length, B, Y;
      for (B = 0; B < M; ++B)
        (Y = C(this, z, b, A, T[B].identifier, T[B])) && (vo(b), Y("start", b, T[B]));
    }
  }
  function w(b) {
    var A = b.changedTouches, T = A.length, z, M;
    for (z = 0; z < T; ++z)
      (M = o[A[z].identifier]) && (yn(b), M("drag", b, A[z]));
  }
  function S(b) {
    var A = b.changedTouches, T = A.length, z, M;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), z = 0; z < T; ++z)
      (M = o[A[z].identifier]) && (vo(b), M("end", b, A[z]));
  }
  function C(b, A, T, z, M, B) {
    var Y = i.copy(), P = je(B || T, A), E, N, y;
    if ((y = n.call(b, new Ro("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: M,
      active: s,
      x: P[0],
      y: P[1],
      dx: 0,
      dy: 0,
      dispatch: Y
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
            P = je(O || D, A), R = s;
            break;
        }
        Y.call(
          k,
          b,
          new Ro(k, {
            sourceEvent: D,
            subject: y,
            target: f,
            identifier: M,
            active: R,
            x: P[0] + E,
            y: P[1] + N,
            dx: P[0] - I[0],
            dy: P[1] - I[1],
            dispatch: Y
          }),
          z
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : pr(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : pr(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : pr(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : pr(!!b), f) : r;
  }, f.on = function() {
    var b = i.on.apply(i, arguments);
    return b === i ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (h = (b = +b) * b, f) : Math.sqrt(h);
  }, f;
}
function fi(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ya(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function lr() {
}
var qn = 0.7, zr = 1 / qn, _n = "\\s*([+-]?\\d+)\\s*", Gn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", cf = /^#([0-9a-f]{3,8})$/, uf = new RegExp(`^rgb\\(${_n},${_n},${_n}\\)$`), df = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`), ff = new RegExp(`^rgba\\(${_n},${_n},${_n},${Gn}\\)$`), hf = new RegExp(`^rgba\\(${ct},${ct},${ct},${Gn}\\)$`), gf = new RegExp(`^hsl\\(${Gn},${ct},${ct}\\)$`), vf = new RegExp(`^hsla\\(${Gn},${ct},${ct},${Gn}\\)$`), Wi = {
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
fi(lr, on, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: qi,
  // Deprecated! Use color.formatHex.
  formatHex: qi,
  formatHex8: pf,
  formatHsl: mf,
  formatRgb: Gi,
  toString: Gi
});
function qi() {
  return this.rgb().formatHex();
}
function pf() {
  return this.rgb().formatHex8();
}
function mf() {
  return Za(this).formatHsl();
}
function Gi() {
  return this.rgb().formatRgb();
}
function on(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = cf.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ui(t) : n === 3 ? new Re(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? mr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? mr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = uf.exec(e)) ? new Re(t[1], t[2], t[3], 1) : (t = df.exec(e)) ? new Re(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ff.exec(e)) ? mr(t[1], t[2], t[3], t[4]) : (t = hf.exec(e)) ? mr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = gf.exec(e)) ? Qi(t[1], t[2] / 100, t[3] / 100, 1) : (t = vf.exec(e)) ? Qi(t[1], t[2] / 100, t[3] / 100, t[4]) : Wi.hasOwnProperty(e) ? Ui(Wi[e]) : e === "transparent" ? new Re(NaN, NaN, NaN, 0) : null;
}
function Ui(e) {
  return new Re(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function mr(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Re(e, t, n, r);
}
function yf(e) {
  return e instanceof lr || (e = on(e)), e ? (e = e.rgb(), new Re(e.r, e.g, e.b, e.opacity)) : new Re();
}
function Ho(e, t, n, r) {
  return arguments.length === 1 ? yf(e) : new Re(e, t, n, r ?? 1);
}
function Re(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
fi(Re, Ho, Ya(lr, {
  brighter(e) {
    return e = e == null ? zr : Math.pow(zr, e), new Re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? qn : Math.pow(qn, e), new Re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Re(Qt(this.r), Qt(this.g), Qt(this.b), Or(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ji,
  // Deprecated! Use color.formatHex.
  formatHex: ji,
  formatHex8: _f,
  formatRgb: Ji,
  toString: Ji
}));
function ji() {
  return `#${Gt(this.r)}${Gt(this.g)}${Gt(this.b)}`;
}
function _f() {
  return `#${Gt(this.r)}${Gt(this.g)}${Gt(this.b)}${Gt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ji() {
  const e = Or(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Qt(this.r)}, ${Qt(this.g)}, ${Qt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Or(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Qt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Gt(e) {
  return e = Qt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Qi(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Je(e, t, n, r);
}
function Za(e) {
  if (e instanceof Je) return new Je(e.h, e.s, e.l, e.opacity);
  if (e instanceof lr || (e = on(e)), !e) return new Je();
  if (e instanceof Je) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, c = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= c < 0.5 ? i + o : 2 - i - o, s *= 60) : a = c > 0 && c < 1 ? 0 : s, new Je(s, a, c, e.opacity);
}
function wf(e, t, n, r) {
  return arguments.length === 1 ? Za(e) : new Je(e, t, n, r ?? 1);
}
function Je(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
fi(Je, wf, Ya(lr, {
  brighter(e) {
    return e = e == null ? zr : Math.pow(zr, e), new Je(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? qn : Math.pow(qn, e), new Je(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Re(
      po(e >= 240 ? e - 240 : e + 120, o, r),
      po(e, o, r),
      po(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Je($i(this.h), yr(this.s), yr(this.l), Or(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Or(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${$i(this.h)}, ${yr(this.s) * 100}%, ${yr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function $i(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function yr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function po(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const hi = (e) => () => e;
function bf(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function xf(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Ef(e) {
  return (e = +e) == 1 ? Xa : function(t, n) {
    return n - t ? xf(t, n, e) : hi(isNaN(t) ? n : t);
  };
}
function Xa(e, t) {
  var n = t - e;
  return n ? bf(e, n) : hi(isNaN(e) ? t : e);
}
const Rr = (function e(t) {
  var n = Ef(t);
  function r(o, i) {
    var s = n((o = Ho(o)).r, (i = Ho(i)).r), a = n(o.g, i.g), c = n(o.b, i.b), l = Xa(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = c(d), o.opacity = l(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function kf(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Sf(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Cf(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Fn(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Nf(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function it(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Pf(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Fn(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Lo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, mo = new RegExp(Lo.source, "g");
function Mf(e) {
  return function() {
    return e;
  };
}
function Af(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Wa(e, t) {
  var n = Lo.lastIndex = mo.lastIndex = 0, r, o, i, s = -1, a = [], c = [];
  for (e = e + "", t = t + ""; (r = Lo.exec(e)) && (o = mo.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, c.push({ i: s, x: it(r, o) })), n = mo.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? c[0] ? Af(c[0].x) : Mf(t) : (t = c.length, function(l) {
    for (var d = 0, h; d < t; ++d) a[(h = c[d]).i] = h.x(l);
    return a.join("");
  });
}
function Fn(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? hi(t) : (n === "number" ? it : n === "string" ? (r = on(t)) ? (t = r, Rr) : Wa : t instanceof on ? Rr : t instanceof Date ? Nf : Sf(t) ? kf : Array.isArray(t) ? Cf : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Pf : it)(e, t);
}
var es = 180 / Math.PI, Vo = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function qa(e, t, n, r, o, i) {
  var s, a, c;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (c = e * n + t * r) && (n -= e * c, r -= t * c), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, c /= a), e * r < t * n && (e = -e, t = -t, c = -c, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * es,
    skewX: Math.atan(c) * es,
    scaleX: s,
    scaleY: a
  };
}
var _r;
function Tf(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Vo : qa(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Df(e) {
  return e == null || (_r || (_r = document.createElementNS("http://www.w3.org/2000/svg", "g")), _r.setAttribute("transform", e), !(e = _r.transform.baseVal.consolidate())) ? Vo : (e = e.matrix, qa(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ga(e, t, n, r) {
  function o(l) {
    return l.length ? l.pop() + " " : "";
  }
  function i(l, d, h, f, g, v) {
    if (l !== h || d !== f) {
      var p = g.push("translate(", null, t, null, n);
      v.push({ i: p - 4, x: it(l, h) }, { i: p - 2, x: it(d, f) });
    } else (h || f) && g.push("translate(" + h + t + f + n);
  }
  function s(l, d, h, f) {
    l !== d ? (l - d > 180 ? d += 360 : d - l > 180 && (l += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: it(l, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(l, d, h, f) {
    l !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: it(l, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function c(l, d, h, f, g, v) {
    if (l !== h || d !== f) {
      var p = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: p - 4, x: it(l, h) }, { i: p - 2, x: it(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(l, d) {
    var h = [], f = [];
    return l = e(l), d = e(d), i(l.translateX, l.translateY, d.translateX, d.translateY, h, f), s(l.rotate, d.rotate, h, f), a(l.skewX, d.skewX, h, f), c(l.scaleX, l.scaleY, d.scaleX, d.scaleY, h, f), l = d = null, function(g) {
      for (var v = -1, p = f.length, m; ++v < p; ) h[(m = f[v]).i] = m.x(g);
      return h.join("");
    };
  };
}
var If = Ga(Tf, "px, ", "px)", "deg)"), zf = Ga(Df, ", ", ")", ")"), Of = 1e-12;
function ts(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Rf(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Hf(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Sr = (function e(t, n, r) {
  function o(i, s) {
    var a = i[0], c = i[1], l = i[2], d = s[0], h = s[1], f = s[2], g = d - a, v = h - c, p = g * g + v * v, m, w;
    if (p < Of)
      w = Math.log(f / l) / t, m = function(z) {
        return [
          a + z * g,
          c + z * v,
          l * Math.exp(t * z * w)
        ];
      };
    else {
      var S = Math.sqrt(p), C = (f * f - l * l + r * p) / (2 * l * n * S), b = (f * f - l * l - r * p) / (2 * f * n * S), A = Math.log(Math.sqrt(C * C + 1) - C), T = Math.log(Math.sqrt(b * b + 1) - b);
      w = (T - A) / t, m = function(z) {
        var M = z * w, B = ts(A), Y = l / (n * S) * (B * Hf(t * M + A) - Rf(A));
        return [
          a + Y * g,
          c + Y * v,
          l * B / ts(t * M + A)
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
var Sn = 0, Ln = 0, zn = 0, Ua = 1e3, Hr, Vn, Lr = 0, sn = 0, oo = 0, Un = typeof performance == "object" && performance.now ? performance : Date, ja = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function gi() {
  return sn || (ja(Lf), sn = Un.now() + oo);
}
function Lf() {
  sn = 0;
}
function Vr() {
  this._call = this._time = this._next = null;
}
Vr.prototype = Ja.prototype = {
  constructor: Vr,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? gi() : +n) + (t == null ? 0 : +t), !this._next && Vn !== this && (Vn ? Vn._next = this : Hr = this, Vn = this), this._call = e, this._time = n, Bo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Bo());
  }
};
function Ja(e, t, n) {
  var r = new Vr();
  return r.restart(e, t, n), r;
}
function Vf() {
  gi(), ++Sn;
  for (var e = Hr, t; e; )
    (t = sn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Sn;
}
function ns() {
  sn = (Lr = Un.now()) + oo, Sn = Ln = 0;
  try {
    Vf();
  } finally {
    Sn = 0, Ff(), sn = 0;
  }
}
function Bf() {
  var e = Un.now(), t = e - Lr;
  t > Ua && (oo -= t, Lr = e);
}
function Ff() {
  for (var e, t = Hr, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Hr = n);
  Vn = e, Bo(r);
}
function Bo(e) {
  if (!Sn) {
    Ln && (Ln = clearTimeout(Ln));
    var t = e - sn;
    t > 24 ? (e < 1 / 0 && (Ln = setTimeout(ns, e - Un.now() - oo)), zn && (zn = clearInterval(zn))) : (zn || (Lr = Un.now(), zn = setInterval(Bf, Ua)), Sn = 1, ja(ns));
  }
}
function rs(e, t, n) {
  var r = new Vr();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Kf = no("start", "end", "cancel", "interrupt"), Yf = [], Qa = 0, os = 1, Fo = 2, Cr = 3, is = 4, Ko = 5, Nr = 6;
function io(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Zf(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Kf,
    tween: Yf,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Qa
  });
}
function vi(e, t) {
  var n = nt(e, t);
  if (n.state > Qa) throw new Error("too late; already scheduled");
  return n;
}
function gt(e, t) {
  var n = nt(e, t);
  if (n.state > Cr) throw new Error("too late; already running");
  return n;
}
function nt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Zf(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ja(i, 0, n.time);
  function i(l) {
    n.state = os, n.timer.restart(s, n.delay, n.time), n.delay <= l && s(l - n.delay);
  }
  function s(l) {
    var d, h, f, g;
    if (n.state !== os) return c();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Cr) return rs(s);
        g.state === is ? (g.state = Nr, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Nr, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (rs(function() {
      n.state === Cr && (n.state = is, n.timer.restart(a, n.delay, n.time), a(l));
    }), n.state = Fo, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Fo) {
      for (n.state = Cr, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(l) {
    for (var d = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(c), n.state = Ko, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === Ko && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = Nr, n.timer.stop(), delete r[t];
    for (var l in r) return;
    delete e.__transition;
  }
}
function Pr(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Fo && r.state < Ko, r.state = Nr, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Xf(e) {
  return this.each(function() {
    Pr(this, e);
  });
}
function Wf(e, t) {
  var n, r;
  return function() {
    var o = gt(this, e), i = o.tween;
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
function qf(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = gt(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, c = 0, l = o.length; c < l; ++c)
        if (o[c].name === t) {
          o[c] = a;
          break;
        }
      c === l && o.push(a);
    }
    i.tween = o;
  };
}
function Gf(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = nt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Wf : qf)(n, e, t));
}
function pi(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = gt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return nt(o, r).value[t];
  };
}
function $a(e, t) {
  var n;
  return (typeof t == "number" ? it : t instanceof on ? Rr : (n = on(t)) ? (t = n, Rr) : Wa)(e, t);
}
function Uf(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function jf(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Jf(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Qf(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function $f(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), c;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), c = a + "", s === c ? null : s === r && c === o ? i : (o = c, i = t(r = s, a)));
  };
}
function eh(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), c;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), c = a + "", s === c ? null : s === r && c === o ? i : (o = c, i = t(r = s, a)));
  };
}
function th(e, t) {
  var n = ro(e), r = n === "transform" ? zf : $a;
  return this.attrTween(e, typeof t == "function" ? (n.local ? eh : $f)(n, r, pi(this, "attr." + e, t)) : t == null ? (n.local ? jf : Uf)(n) : (n.local ? Qf : Jf)(n, r, t));
}
function nh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function rh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function oh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && rh(e, i)), n;
  }
  return o._value = t, o;
}
function ih(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && nh(e, i)), n;
  }
  return o._value = t, o;
}
function sh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ro(e);
  return this.tween(n, (r.local ? oh : ih)(r, t));
}
function ah(e, t) {
  return function() {
    vi(this, e).delay = +t.apply(this, arguments);
  };
}
function lh(e, t) {
  return t = +t, function() {
    vi(this, e).delay = t;
  };
}
function ch(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? ah : lh)(t, e)) : nt(this.node(), t).delay;
}
function uh(e, t) {
  return function() {
    gt(this, e).duration = +t.apply(this, arguments);
  };
}
function dh(e, t) {
  return t = +t, function() {
    gt(this, e).duration = t;
  };
}
function fh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? uh : dh)(t, e)) : nt(this.node(), t).duration;
}
function hh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    gt(this, e).ease = t;
  };
}
function gh(e) {
  var t = this._id;
  return arguments.length ? this.each(hh(t, e)) : nt(this.node(), t).ease;
}
function vh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    gt(this, e).ease = n;
  };
}
function ph(e) {
  if (typeof e != "function") throw new Error();
  return this.each(vh(this._id, e));
}
function mh(e) {
  typeof e != "function" && (e = Ta(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], c, l = 0; l < s; ++l)
      (c = i[l]) && e.call(c, c.__data__, l, i) && a.push(c);
  return new Pt(r, this._parents, this._name, this._id);
}
function yh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var c = t[a], l = n[a], d = c.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = c[g] || l[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Pt(s, this._parents, this._name, this._id);
}
function _h(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function wh(e, t, n) {
  var r, o, i = _h(t) ? vi : gt;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function bh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? nt(this.node(), n).on.on(e) : this.each(wh(n, e, t));
}
function xh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Eh() {
  return this.on("end.remove", xh(this._id));
}
function kh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ui(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], c = a.length, l = i[s] = new Array(c), d, h, f = 0; f < c; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), l[f] = h, io(l[f], t, n, f, l, nt(d, n)));
  return new Pt(i, this._parents, t, n);
}
function Sh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Aa(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var c = r[a], l = c.length, d, h = 0; h < l; ++h)
      if (d = c[h]) {
        for (var f = e.call(d, d.__data__, h, c), g, v = nt(d, n), p = 0, m = f.length; p < m; ++p)
          (g = f[p]) && io(g, t, n, p, f, v);
        i.push(f), s.push(d);
      }
  return new Pt(i, s, t, n);
}
var Ch = ar.prototype.constructor;
function Nh() {
  return new Ch(this._groups, this._parents);
}
function Ph(e, t) {
  var n, r, o;
  return function() {
    var i = kn(this, e), s = (this.style.removeProperty(e), kn(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function el(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Mh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = kn(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Ah(e, t, n) {
  var r, o, i;
  return function() {
    var s = kn(this, e), a = n(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(e), kn(this, e))), s === c ? null : s === r && c === o ? i : (o = c, i = t(r = s, a));
  };
}
function Th(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var c = gt(this, e), l = c.on, d = c.value[i] == null ? a || (a = el(t)) : void 0;
    (l !== n || o !== d) && (r = (n = l).copy()).on(s, o = d), c.on = r;
  };
}
function Dh(e, t, n) {
  var r = (e += "") == "transform" ? If : $a;
  return t == null ? this.styleTween(e, Ph(e, r)).on("end.style." + e, el(e)) : typeof t == "function" ? this.styleTween(e, Ah(e, r, pi(this, "style." + e, t))).each(Th(this._id, e)) : this.styleTween(e, Mh(e, r, t), n).on("end.style." + e, null);
}
function Ih(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function zh(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Ih(e, s, n)), r;
  }
  return i._value = t, i;
}
function Oh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, zh(e, t, n ?? ""));
}
function Rh(e) {
  return function() {
    this.textContent = e;
  };
}
function Hh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Lh(e) {
  return this.tween("text", typeof e == "function" ? Hh(pi(this, "text", e)) : Rh(e == null ? "" : e + ""));
}
function Vh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Bh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Vh(o)), t;
  }
  return r._value = e, r;
}
function Fh(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Bh(e));
}
function Kh() {
  for (var e = this._name, t = this._id, n = tl(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, c, l = 0; l < a; ++l)
      if (c = s[l]) {
        var d = nt(c, t);
        io(c, e, n, l, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Pt(r, this._parents, e, n);
}
function Yh() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, c = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var l = gt(this, r), d = l.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(c)), l.on = t;
    }), o === 0 && i();
  });
}
var Zh = 0;
function Pt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function tl() {
  return ++Zh;
}
var pt = ar.prototype;
Pt.prototype = {
  constructor: Pt,
  select: kh,
  selectAll: Sh,
  selectChild: pt.selectChild,
  selectChildren: pt.selectChildren,
  filter: mh,
  merge: yh,
  selection: Nh,
  transition: Kh,
  call: pt.call,
  nodes: pt.nodes,
  node: pt.node,
  size: pt.size,
  empty: pt.empty,
  each: pt.each,
  on: bh,
  attr: th,
  attrTween: sh,
  style: Dh,
  styleTween: Oh,
  text: Lh,
  textTween: Fh,
  remove: Eh,
  tween: Gf,
  delay: ch,
  duration: fh,
  ease: gh,
  easeVarying: ph,
  end: Yh,
  [Symbol.iterator]: pt[Symbol.iterator]
};
function Xh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Wh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Xh
};
function qh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Gh(e) {
  var t, n;
  e instanceof Pt ? (t = e._id, e = e._name) : (t = tl(), (n = Wh).time = gi(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, c, l = 0; l < a; ++l)
      (c = s[l]) && io(c, e, t, l, s, n || qh(c, t));
  return new Pt(r, this._parents, e, t);
}
ar.prototype.interrupt = Xf;
ar.prototype.transition = Gh;
const wr = (e) => () => e;
function Uh(e, {
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
function bt(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
bt.prototype = {
  constructor: bt,
  scale: function(e) {
    return e === 1 ? this : new bt(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new bt(this.k, this.x + this.k * e, this.y + this.k * t);
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
var so = new bt(1, 0, 0);
nl.prototype = bt.prototype;
function nl(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return so;
  return e.__zoom;
}
function yo(e) {
  e.stopImmediatePropagation();
}
function On(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function jh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Jh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function ss() {
  return this.__zoom || so;
}
function Qh(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function $h() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function eg(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function rl() {
  var e = jh, t = Jh, n = eg, r = Qh, o = $h, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, c = Sr, l = no("start", "zoom", "end"), d, h, f, g = 500, v = 150, p = 0, m = 10;
  function w(y) {
    y.property("__zoom", ss).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", B).on("dblclick.zoom", Y).filter(o).on("touchstart.zoom", P).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", N).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(y, x, k, D) {
    var O = y.selection ? y.selection() : y;
    O.property("__zoom", ss), y !== O ? A(y, x, k, D) : O.interrupt().each(function() {
      T(this, arguments).event(D).start().zoom(null, typeof x == "function" ? x.apply(this, arguments) : x).end();
    });
  }, w.scaleBy = function(y, x, k, D) {
    w.scaleTo(y, function() {
      var O = this.__zoom.k, I = typeof x == "function" ? x.apply(this, arguments) : x;
      return O * I;
    }, k, D);
  }, w.scaleTo = function(y, x, k, D) {
    w.transform(y, function() {
      var O = t.apply(this, arguments), I = this.__zoom, R = k == null ? b(O) : typeof k == "function" ? k.apply(this, arguments) : k, F = I.invert(R), W = typeof x == "function" ? x.apply(this, arguments) : x;
      return n(C(S(I, W), R, F), O, s);
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
      return n(so.translate(F[0], F[1]).scale(R.k).translate(
        typeof x == "function" ? -x.apply(this, arguments) : -x,
        typeof k == "function" ? -k.apply(this, arguments) : -k
      ), I, s);
    }, D, O);
  };
  function S(y, x) {
    return x = Math.max(i[0], Math.min(i[1], x)), x === y.k ? y : new bt(x, y.x, y.y);
  }
  function C(y, x, k) {
    var D = x[0] - k[0] * y.k, O = x[1] - k[1] * y.k;
    return D === y.x && O === y.y ? y : new bt(y.k, D, O);
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
      var O = this, I = arguments, R = T(O, I).event(D), F = t.apply(O, I), W = k == null ? b(F) : typeof k == "function" ? k.apply(O, I) : k, q = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), K = O.__zoom, X = typeof x == "function" ? x.apply(O, I) : x, G = c(K.invert(W).concat(q / K.k), X.invert(W).concat(q / X.k));
      return function(J) {
        if (J === 1) J = X;
        else {
          var ee = G(J), fe = q / ee[2];
          J = new bt(fe, W[0] - ee[0] * fe, W[1] - ee[1] * fe);
        }
        R.zoom(null, J);
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
      var x = qe(this.that).datum();
      l.call(
        y,
        this.that,
        new Uh(y, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: l
        }),
        x
      );
    }
  };
  function M(y, ...x) {
    if (!e.apply(this, arguments)) return;
    var k = T(this, x).event(y), D = this.__zoom, O = Math.max(i[0], Math.min(i[1], D.k * Math.pow(2, r.apply(this, arguments)))), I = je(y);
    if (k.wheel)
      (k.mouse[0][0] !== I[0] || k.mouse[0][1] !== I[1]) && (k.mouse[1] = D.invert(k.mouse[0] = I)), clearTimeout(k.wheel);
    else {
      if (D.k === O) return;
      k.mouse = [I, D.invert(I)], Pr(this), k.start();
    }
    On(y), k.wheel = setTimeout(R, v), k.zoom("mouse", n(C(S(D, O), k.mouse[0], k.mouse[1]), k.extent, s));
    function R() {
      k.wheel = null, k.end();
    }
  }
  function B(y, ...x) {
    if (f || !e.apply(this, arguments)) return;
    var k = y.currentTarget, D = T(this, x, !0).event(y), O = qe(y.view).on("mousemove.zoom", W, !0).on("mouseup.zoom", q, !0), I = je(y, k), R = y.clientX, F = y.clientY;
    Fa(y.view), yo(y), D.mouse = [I, this.__zoom.invert(I)], Pr(this), D.start();
    function W(K) {
      if (On(K), !D.moved) {
        var X = K.clientX - R, G = K.clientY - F;
        D.moved = X * X + G * G > p;
      }
      D.event(K).zoom("mouse", n(C(D.that.__zoom, D.mouse[0] = je(K, k), D.mouse[1]), D.extent, s));
    }
    function q(K) {
      O.on("mousemove.zoom mouseup.zoom", null), Ka(K.view, D.moved), On(K), D.event(K).end();
    }
  }
  function Y(y, ...x) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom, D = je(y.changedTouches ? y.changedTouches[0] : y, this), O = k.invert(D), I = k.k * (y.shiftKey ? 0.5 : 2), R = n(C(S(k, I), D, O), t.apply(this, x), s);
      On(y), a > 0 ? qe(this).transition().duration(a).call(A, R, D, y) : qe(this).call(w.transform, R, D, y);
    }
  }
  function P(y, ...x) {
    if (e.apply(this, arguments)) {
      var k = y.touches, D = k.length, O = T(this, x, y.changedTouches.length === D).event(y), I, R, F, W;
      for (yo(y), R = 0; R < D; ++R)
        F = k[R], W = je(F, this), W = [W, this.__zoom.invert(W), F.identifier], O.touch0 ? !O.touch1 && O.touch0[2] !== W[2] && (O.touch1 = W, O.taps = 0) : (O.touch0 = W, I = !0, O.taps = 1 + !!d);
      d && (d = clearTimeout(d)), I && (O.taps < 2 && (h = W[0], d = setTimeout(function() {
        d = null;
      }, g)), Pr(this), O.start());
    }
  }
  function E(y, ...x) {
    if (this.__zooming) {
      var k = T(this, x).event(y), D = y.changedTouches, O = D.length, I, R, F, W;
      for (On(y), I = 0; I < O; ++I)
        R = D[I], F = je(R, this), k.touch0 && k.touch0[2] === R.identifier ? k.touch0[0] = F : k.touch1 && k.touch1[2] === R.identifier && (k.touch1[0] = F);
      if (R = k.that.__zoom, k.touch1) {
        var q = k.touch0[0], K = k.touch0[1], X = k.touch1[0], G = k.touch1[1], J = (J = X[0] - q[0]) * J + (J = X[1] - q[1]) * J, ee = (ee = G[0] - K[0]) * ee + (ee = G[1] - K[1]) * ee;
        R = S(R, Math.sqrt(J / ee)), F = [(q[0] + X[0]) / 2, (q[1] + X[1]) / 2], W = [(K[0] + G[0]) / 2, (K[1] + G[1]) / 2];
      } else if (k.touch0) F = k.touch0[0], W = k.touch0[1];
      else return;
      k.zoom("touch", n(C(R, F, W), k.extent, s));
    }
  }
  function N(y, ...x) {
    if (this.__zooming) {
      var k = T(this, x).event(y), D = y.changedTouches, O = D.length, I, R;
      for (yo(y), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), I = 0; I < O; ++I)
        R = D[I], k.touch0 && k.touch0[2] === R.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === R.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0) k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (R = je(R, this), Math.hypot(h[0] - R[0], h[1] - R[1]) < m)) {
        var F = qe(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : wr(+y), w) : r;
  }, w.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : wr(!!y), w) : e;
  }, w.touchable = function(y) {
    return arguments.length ? (o = typeof y == "function" ? y : wr(!!y), w) : o;
  }, w.extent = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : wr([[+y[0][0], +y[0][1]], [+y[1][0], +y[1][1]]]), w) : t;
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
    var y = l.on.apply(l, arguments);
    return y === l ? w : y;
  }, w.clickDistance = function(y) {
    return arguments.length ? (p = (y = +y) * y, w) : Math.sqrt(p);
  }, w.tapDistance = function(y) {
    return arguments.length ? (m = +y, w) : m;
  }, w;
}
const jn = {
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
}, Yo = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], ol = ["Enter", " ", "Escape"], tg = {
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
var Cn;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Cn || (Cn = {}));
var wn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(wn || (wn = {}));
var Br;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Br || (Br = {}));
const Zo = {
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
var Ot;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Ot || (Ot = {}));
var Fr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Fr || (Fr = {}));
var $;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})($ || ($ = {}));
const as = {
  [$.Left]: $.Right,
  [$.Right]: $.Left,
  [$.Top]: $.Bottom,
  [$.Bottom]: $.Top
};
function ng(e, t) {
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
function ls(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function rg(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const il = (e) => "id" in e && "source" in e && "target" in e, og = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), mi = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), cr = (e, t = [0, 0]) => {
  const { width: n, height: r } = Wt(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, ig = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : mi(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Kr(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ao(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return lo(n);
}, ur = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = ao(n, Kr(o)), r = !0);
  }), r ? lo(n) : { x: 0, y: 0, width: 0, height: 0 };
}, yi = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...fr(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, c = [];
  for (const l of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = l;
    if (s && !h || f)
      continue;
    const g = d.width ?? l.width ?? l.initialWidth ?? null, v = d.height ?? l.height ?? l.initialHeight ?? null, p = Jn(a, Pn(l)), m = (g ?? 0) * (v ?? 0), w = i && p > 0;
    (!l.internals.handleBounds || w || p >= m || l.dragging) && c.push(l);
  }
  return c;
}, sg = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function ag(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function lg({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = ag(e, s), c = ur(a), l = _i(c, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(l, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function sl({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: c, y: l } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", jn.error005());
    else {
      const g = a.measured.width, v = a.measured.height;
      g && v && (h = [
        [c, l],
        [c + g, l + v]
      ]);
    }
  else a && Mn(s.extent) && (h = [
    [s.extent[0][0] + c, s.extent[0][1] + l],
    [s.extent[1][0] + c, s.extent[1][1] + l]
  ]);
  const f = Mn(h) ? an(t, h, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", jn.error015()), {
    position: {
      x: f.x - c + (s.measured.width ?? 0) * d[0],
      y: f.y - l + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function cg({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), v = !g && f.parentId && s.find((p) => p.id === f.parentId);
    (g || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), c = r.filter((f) => f.deletable !== !1), d = sg(s, c);
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
const Nn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), an = (e = { x: 0, y: 0 }, t, n) => ({
  x: Nn(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Nn(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function al(e, t, n) {
  const { width: r, height: o } = Wt(n), { x: i, y: s } = n.internals.positionAbsolute;
  return an(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const cs = (e, t, n) => e < t ? Nn(Math.abs(e - t), 1, t) / t : e > n ? -Nn(Math.abs(e - n), 1, t) / t : 0, ll = (e, t, n = 15, r = 40) => {
  const o = cs(e.x, r, t.width - r) * n, i = cs(e.y, r, t.height - r) * n;
  return [o, i];
}, ao = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Xo = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), lo = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Pn = (e, t = [0, 0]) => {
  const { x: n, y: r } = mi(e) ? e.internals.positionAbsolute : cr(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Kr = (e, t = [0, 0]) => {
  const { x: n, y: r } = mi(e) ? e.internals.positionAbsolute : cr(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, cl = (e, t) => lo(ao(Xo(e), Xo(t))), Jn = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, us = (e) => xt(e.width) && xt(e.height) && xt(e.x) && xt(e.y), xt = (e) => !isNaN(e) && isFinite(e), ug = (e, t) => {
}, dr = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), fr = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? dr(a, s) : a;
}, Yr = ({ x: e, y: t }, [n, r, o]) => ({
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
function dg(e, t, n) {
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
function fg(e, t, n, r, o, i) {
  const { x: s, y: a } = Yr(e, [t, n, r]), { x: c, y: l } = Yr({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - c, h = i - l;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const _i = (e, t, n, r, o, i) => {
  const s = dg(i, t, n), a = (t - s.x) / e.width, c = (n - s.y) / e.height, l = Math.min(a, c), d = Nn(l, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, v = n / 2 - f * d, p = fg(e, g, v, d, t, n), m = {
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
}, Qn = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Mn(e) {
  return e != null && e !== "parent";
}
function Wt(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function ul(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function hg(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function gg(e) {
  return { ...tg, ...e || {} };
}
function _o(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = $e(e), a = fr({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: c, y: l } = n ? dr(a, t) : a;
  return {
    xSnapped: c,
    ySnapped: l,
    ...a
  };
}
const dl = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), fl = (e) => e?.getRootNode?.() || window?.document, vg = ["INPUT", "SELECT", "TEXTAREA"];
function hl(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : vg.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const gl = (e) => "clientX" in e, $e = (e, t) => {
  const n = gl(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, ds = (e, t, n, r, o) => {
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
      ...dl(s)
    };
  });
};
function pg({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const c = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, l = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(c - e), h = Math.abs(l - t);
  return [c, l, d, h];
}
function br(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function fs({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case $.Left:
      return [t - br(t - r, i), n];
    case $.Right:
      return [t + br(r - t, i), n];
    case $.Top:
      return [t, n - br(n - o, i)];
    case $.Bottom:
      return [t, n + br(o - n, i)];
  }
}
function vl({ sourceX: e, sourceY: t, sourcePosition: n = $.Bottom, targetX: r, targetY: o, targetPosition: i = $.Top, curvature: s = 0.25 }) {
  const [a, c] = fs({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [l, d] = fs({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [h, f, g, v] = pg({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: c,
    targetControlX: l,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${c} ${l},${d} ${r},${o}`,
    h,
    f,
    g,
    v
  ];
}
function pl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function mg({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, a = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + a;
}
function yg({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ao(Kr(e), Kr(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Jn(s, lo(i)) > 0;
}
const _g = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, wg = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), bg = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || _g;
  let o;
  return il(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, wg(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function ml({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = pl({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const hs = {
  [$.Left]: { x: -1, y: 0 },
  [$.Right]: { x: 1, y: 0 },
  [$.Top]: { x: 0, y: -1 },
  [$.Bottom]: { x: 0, y: 1 }
}, xg = ({ source: e, sourcePosition: t = $.Bottom, target: n }) => t === $.Left || t === $.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, gs = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Eg({ source: e, sourcePosition: t = $.Bottom, target: n, targetPosition: r = $.Top, center: o, offset: i, stepPosition: s }) {
  const a = hs[t], c = hs[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + c.x * i, y: n.y + c.y * i }, h = xg({
    source: l,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let v = [], p, m;
  const w = { x: 0, y: 0 }, S = { x: 0, y: 0 }, [, , C, b] = pl({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * c[f] === -1) {
    f === "x" ? (p = o.x ?? l.x + (d.x - l.x) * s, m = o.y ?? (l.y + d.y) / 2) : (p = o.x ?? (l.x + d.x) / 2, m = o.y ?? l.y + (d.y - l.y) * s);
    const T = [
      { x: p, y: l.y },
      { x: p, y: d.y }
    ], z = [
      { x: l.x, y: m },
      { x: d.x, y: m }
    ];
    a[f] === g ? v = f === "x" ? T : z : v = f === "x" ? z : T;
  } else {
    const T = [{ x: l.x, y: d.y }], z = [{ x: d.x, y: l.y }];
    if (f === "x" ? v = a.x === g ? z : T : v = a.y === g ? T : z, t === r) {
      const E = Math.abs(e[f] - n[f]);
      if (E <= i) {
        const N = Math.min(i - 1, i - E);
        a[f] === g ? w[f] = (l[f] > e[f] ? -1 : 1) * N : S[f] = (d[f] > n[f] ? -1 : 1) * N;
      }
    }
    if (t !== r) {
      const E = f === "x" ? "y" : "x", N = a[f] === c[E], y = l[E] > d[E], x = l[E] < d[E];
      (a[f] === 1 && (!N && y || N && x) || a[f] !== 1 && (!N && x || N && y)) && (v = f === "x" ? T : z);
    }
    const M = { x: l.x + w.x, y: l.y + w.y }, B = { x: d.x + S.x, y: d.y + S.y }, Y = Math.max(Math.abs(M.x - v[0].x), Math.abs(B.x - v[0].x)), P = Math.max(Math.abs(M.y - v[0].y), Math.abs(B.y - v[0].y));
    Y >= P ? (p = (M.x + B.x) / 2, m = v[0].y) : (p = v[0].x, m = (M.y + B.y) / 2);
  }
  return [[
    e,
    { x: l.x + w.x, y: l.y + w.y },
    ...v,
    { x: d.x + S.x, y: d.y + S.y },
    n
  ], p, m, C, b];
}
function kg(e, t, n, r) {
  const o = Math.min(gs(e, t) / 2, gs(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const l = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * l},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, c = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * c}Q ${i},${s} ${i + o * a},${s}`;
}
function wi({ sourceX: e, sourceY: t, sourcePosition: n = $.Bottom, targetX: r, targetY: o, targetPosition: i = $.Top, borderRadius: s = 5, centerX: a, centerY: c, offset: l = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, v, p] = Eg({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: c },
    offset: l,
    stepPosition: d
  });
  return [h.reduce((w, S, C) => {
    let b = "";
    return C > 0 && C < h.length - 1 ? b = kg(h[C - 1], S, h[C + 1], s) : b = `${C === 0 ? "M" : "L"}${S.x} ${S.y}`, w += b, w;
  }, ""), f, g, v, p];
}
function vs(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Sg(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!vs(t) || !vs(n))
    return null;
  const r = t.internals.handleBounds || ps(t.handles), o = n.internals.handleBounds || ps(n.handles), i = ms(r?.source ?? [], e.sourceHandle), s = ms(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Cn.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", jn.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || $.Bottom, c = s?.position || $.Top, l = ln(t, i, a), d = ln(n, s, c);
  return {
    sourceX: l.x,
    sourceY: l.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: c
  };
}
function ps(e) {
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
function ln(e, t, n = $.Left, r = !1) {
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
function ms(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Wo(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Cg(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((c) => {
    if (c && typeof c == "object") {
      const l = Wo(c, t);
      i.has(l) || (s.push({ id: l, color: c.color || n, ...c }), i.add(l));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const yl = 1e3, Ng = 10, bi = {
  nodeOrigin: [0, 0],
  nodeExtent: Yo,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, Pg = {
  ...bi,
  checkEquality: !0
};
function xi(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Mg(e, t, n) {
  const r = xi(bi, n);
  for (const o of e.values())
    if (o.parentId)
      ki(o, e, t, r);
    else {
      const i = cr(o, r.nodeOrigin), s = Mn(o.extent) ? o.extent : r.nodeExtent, a = an(i, s, Wt(o));
      o.internals.positionAbsolute = a;
    }
}
function Ag(e, t) {
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
function Ei(e) {
  return e === "manual";
}
function Tg(e, t, n, r = {}) {
  const o = xi(Pg, r), i = { i: 0 }, s = new Map(t), a = o?.elevateNodesOnSelect && !Ei(o.zIndexMode) ? yl : 0;
  let c = e.length > 0;
  t.clear(), n.clear();
  for (const l of e) {
    let d = s.get(l.id);
    if (o.checkEquality && l === d?.internals.userNode)
      t.set(l.id, d);
    else {
      const h = cr(l, o.nodeOrigin), f = Mn(l.extent) ? l.extent : o.nodeExtent, g = an(h, f, Wt(l));
      d = {
        ...o.defaults,
        ...l,
        measured: {
          width: l.measured?.width,
          height: l.measured?.height
        },
        internals: {
          positionAbsolute: g,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: Ag(l, d),
          z: _l(l, a, o.zIndexMode),
          userNode: l
        }
      }, t.set(l.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (c = !1), l.parentId && ki(d, t, n, r, i);
  }
  return c;
}
function Dg(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ki(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a, zIndexMode: c } = xi(bi, r), l = e.parentId, d = t.get(l);
  if (!d) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Dg(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && c === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * Ng), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const h = i && !Ei(c) ? yl : 0, { x: f, y: g, z: v } = Ig(e, d, s, a, h, c), { positionAbsolute: p } = e.internals, m = f !== p.x || g !== p.y;
  (m || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: m ? { x: f, y: g } : p,
      z: v
    }
  });
}
function _l(e, t, n) {
  const r = xt(e.zIndex) ? e.zIndex : 0;
  return Ei(n) ? r : r + (e.selected ? t : 0);
}
function Ig(e, t, n, r, o, i) {
  const { x: s, y: a } = t.internals.positionAbsolute, c = Wt(e), l = cr(e, n), d = Mn(e.extent) ? an(l, e.extent, c) : l;
  let h = an({ x: s + d.x, y: a + d.y }, r, c);
  e.extent === "parent" && (h = al(h, c, t));
  const f = _l(e, o, i), g = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: g >= f ? g + 1 : f
  };
}
function zg(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const c = i.get(s.parentId)?.expandedRect ?? Pn(a), l = cl(c, s.rect);
    i.set(s.parentId, { expandedRect: l, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, c) => {
    const l = a.internals.positionAbsolute, d = Wt(a), h = a.origin ?? r, f = s.x < l.x ? Math.round(Math.abs(l.x - s.x)) : 0, g = s.y < l.y ? Math.round(Math.abs(l.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), p = Math.max(d.height, Math.round(s.height)), m = (v - d.width) * h[0], w = (p - d.height) * h[1];
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
function Og(e, t, n, r, o, i, s) {
  const a = r?.querySelector(".xyflow__viewport");
  let c = !1;
  if (!a)
    return { changes: [], updatedInternals: c };
  const l = [], d = window.getComputedStyle(a), { m22: h } = new window.DOMMatrixReadOnly(d.transform), f = [];
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
    const p = dl(g.nodeElement), m = v.measured.width !== p.width || v.measured.height !== p.height;
    if (!!(p.width && p.height && (m || !v.internals.handleBounds || g.force))) {
      const S = g.nodeElement.getBoundingClientRect(), C = Mn(v.extent) ? v.extent : i;
      let { positionAbsolute: b } = v.internals;
      v.parentId && v.extent === "parent" ? b = al(b, p, t.get(v.parentId)) : C && (b = an(b, C, p));
      const A = {
        ...v,
        measured: p,
        internals: {
          ...v.internals,
          positionAbsolute: b,
          handleBounds: {
            source: ds("source", g.nodeElement, S, h, v.id),
            target: ds("target", g.nodeElement, S, h, v.id)
          }
        }
      };
      t.set(v.id, A), v.parentId && ki(A, t, n, { nodeOrigin: o, zIndexMode: s }), c = !0, m && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: p
      }), v.expandParent && v.parentId && f.push({
        id: v.id,
        parentId: v.parentId,
        rect: Pn(A, o)
      }));
    }
  }
  if (f.length > 0) {
    const g = zg(f, t, n, o);
    l.push(...g);
  }
  return { changes: l, updatedInternals: c };
}
async function Rg({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function ys(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const c = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, c.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const l = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, l.set(n, t));
  }
}
function Hg(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, c = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, l = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    ys("source", c, d, e, o, s), ys("target", c, l, e, i, a), t.set(r.id, r);
  }
}
function wl(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : wl(n, t) : !1;
}
function _s(e, t, n) {
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
function Lg(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !wl(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Vg({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = dr(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Bg({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), c = !1, l = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, v = !1, p = null;
  function m({ noDragClassName: S, handleSelector: C, domNode: b, isSelectable: A, nodeId: T, nodeClickDistance: z = 0 }) {
    f = qe(b);
    function M({ x: E, y: N }) {
      const { nodeLookup: y, nodeExtent: x, snapGrid: k, snapToGrid: D, nodeOrigin: O, onNodeDrag: I, onSelectionDrag: R, onError: F, updateNodePositions: W } = t();
      i = { x: E, y: N };
      let q = !1;
      const K = a.size > 1, X = K && x ? Xo(ur(a)) : null, G = K && D ? Vg({
        dragItems: a,
        snapGrid: k,
        x: E,
        y: N
      }) : null;
      for (const [J, ee] of a) {
        if (!y.has(J))
          continue;
        let fe = { x: E - ee.distance.x, y: N - ee.distance.y };
        D && (fe = G ? {
          x: Math.round(fe.x + G.x),
          y: Math.round(fe.y + G.y)
        } : dr(fe, k));
        let xe = null;
        if (K && x && !ee.extent && X) {
          const { positionAbsolute: oe } = ee.internals, Ae = oe.x - X.x + x[0][0], At = oe.x + ee.measured.width - X.x2 + x[1][0], Tt = oe.y - X.y + x[0][1], vt = oe.y + ee.measured.height - X.y2 + x[1][1];
          xe = [
            [Ae, Tt],
            [At, vt]
          ];
        }
        const { position: re, positionAbsolute: pe } = sl({
          nodeId: J,
          nextPosition: fe,
          nodeLookup: y,
          nodeExtent: xe || x,
          nodeOrigin: O,
          onError: F
        });
        q = q || ee.position.x !== re.x || ee.position.y !== re.y, ee.position = re, ee.internals.positionAbsolute = pe;
      }
      if (v = v || q, !!q && (W(a, !0), p && (r || I || !T && R))) {
        const [J, ee] = wo({
          nodeId: T,
          dragItems: a,
          nodeLookup: y
        });
        r?.(p, a, J, ee), I?.(p, J, ee), T || R?.(p, ee);
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
      const [k, D] = ll(l, d, y);
      (k !== 0 || D !== 0) && (i.x = (i.x ?? 0) - k / E[2], i.y = (i.y ?? 0) - D / E[2], await N({ x: k, y: D }) && M(i)), s = requestAnimationFrame(B);
    }
    function Y(E) {
      const { nodeLookup: N, multiSelectionActive: y, nodesDraggable: x, transform: k, snapGrid: D, snapToGrid: O, selectNodesOnDrag: I, onNodeDragStart: R, onSelectionDragStart: F, unselectNodesAndEdges: W } = t();
      h = !0, (!I || !A) && !y && T && (N.get(T)?.selected || W()), A && I && T && e?.(T);
      const q = _o(E.sourceEvent, { transform: k, snapGrid: D, snapToGrid: O, containerBounds: d });
      if (i = q, a = Lg(N, x, q, T), a.size > 0 && (n || R || !T && F)) {
        const [K, X] = wo({
          nodeId: T,
          dragItems: a,
          nodeLookup: N
        });
        n?.(E.sourceEvent, a, K, X), R?.(E.sourceEvent, K, X), T || F?.(E.sourceEvent, X);
      }
    }
    const P = lf().clickDistance(z).on("start", (E) => {
      const { domNode: N, nodeDragThreshold: y, transform: x, snapGrid: k, snapToGrid: D } = t();
      d = N?.getBoundingClientRect() || null, g = !1, v = !1, p = E.sourceEvent, y === 0 && Y(E), i = _o(E.sourceEvent, { transform: x, snapGrid: k, snapToGrid: D, containerBounds: d }), l = $e(E.sourceEvent, d);
    }).on("drag", (E) => {
      const { autoPanOnNodeDrag: N, transform: y, snapGrid: x, snapToGrid: k, nodeDragThreshold: D, nodeLookup: O } = t(), I = _o(E.sourceEvent, { transform: y, snapGrid: x, snapToGrid: k, containerBounds: d });
      if (p = E.sourceEvent, (E.sourceEvent.type === "touchmove" && E.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      T && !O.has(T)) && (g = !0), !g) {
        if (!c && N && h && (c = !0, B()), !h) {
          const R = $e(E.sourceEvent, d), F = R.x - l.x, W = R.y - l.y;
          Math.sqrt(F * F + W * W) > D && Y(E);
        }
        (i.x !== I.xSnapped || i.y !== I.ySnapped) && a && h && (l = $e(E.sourceEvent, d), M(I));
      }
    }).on("end", (E) => {
      if (!(!h || g) && (c = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: N, updateNodePositions: y, onNodeDragStop: x, onSelectionDragStop: k } = t();
        if (v && (y(a, !1), v = !1), o || x || !T && k) {
          const [D, O] = wo({
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
      return !E.button && (!S || !_s(N, `.${S}`, b)) && (!C || _s(N, C, b));
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
function Fg(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Jn(o, Pn(i)) > 0 && r.push(i);
  return r;
}
const Kg = 250;
function Yg(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = Fg(e, n, t + Kg);
  for (const a of s) {
    const c = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const l of c) {
      if (r.nodeId === l.nodeId && r.type === l.type && r.id === l.id)
        continue;
      const { x: d, y: h } = ln(a, l, l.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(h - e.y, 2));
      f > t || (f < i ? (o = [{ ...l, x: d, y: h }], i = f) : f === i && o.push({ ...l, x: d, y: h }));
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
function bl(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], c = (n ? a?.find((l) => l.id === n) : a?.[0]) ?? null;
  return c && i ? { ...c, ...ln(s, c, c.position, !0) } : c;
}
function xl(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Zg(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const El = () => !0;
function Xg(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: c, lib: l, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: v, onConnect: p, onConnectEnd: m, isValidConnection: w = El, onReconnectEnd: S, updateConnection: C, getTransform: b, getFromHandle: A, autoPanSpeed: T, dragThreshold: z = 1, handleDomNode: M }) {
  const B = fl(e.target);
  let Y = 0, P;
  const { x: E, y: N } = $e(e), y = xl(i, M), x = a?.getBoundingClientRect();
  let k = !1;
  if (!x || !y)
    return;
  const D = bl(o, y, r, c, t);
  if (!D)
    return;
  let O = $e(e, x), I = !1, R = null, F = !1, W = null;
  function q() {
    if (!d || !x)
      return;
    const [re, pe] = ll(O, x, T);
    f({ x: re, y: pe }), Y = requestAnimationFrame(q);
  }
  const K = {
    ...D,
    nodeId: o,
    type: y,
    position: D.position
  }, X = c.get(o);
  let J = {
    inProgress: !0,
    isValid: null,
    from: ln(X, K, $.Left, !0),
    fromHandle: K,
    fromPosition: K.position,
    fromNode: X,
    to: O,
    toHandle: null,
    toPosition: as[K.position],
    toNode: null,
    pointer: O
  };
  function ee() {
    k = !0, C(J), v?.(e, { nodeId: o, handleId: r, handleType: y });
  }
  z === 0 && ee();
  function fe(re) {
    if (!k) {
      const { x: vt, y: de } = $e(re), we = vt - E, Ue = de - N;
      if (!(we * we + Ue * Ue > z * z))
        return;
      ee();
    }
    if (!A() || !K) {
      xe(re);
      return;
    }
    const pe = b();
    O = $e(re, x), P = Yg(fr(O, pe, !1, [1, 1]), n, c, K), I || (q(), I = !0);
    const oe = kl(re, {
      handle: P,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: B,
      lib: l,
      flowId: h,
      nodeLookup: c
    });
    W = oe.handleDomNode, R = oe.connection, F = Zg(!!P, oe.isValid);
    const Ae = c.get(o), At = Ae ? ln(Ae, K, $.Left, !0) : J.from, Tt = {
      ...J,
      from: At,
      isValid: F,
      to: oe.toHandle && F ? Yr({ x: oe.toHandle.x, y: oe.toHandle.y }, pe) : O,
      toHandle: oe.toHandle,
      toPosition: F && oe.toHandle ? oe.toHandle.position : as[K.position],
      toNode: oe.toHandle ? c.get(oe.toHandle.nodeId) : null,
      pointer: O
    };
    C(Tt), J = Tt;
  }
  function xe(re) {
    if (!("touches" in re && re.touches.length > 0)) {
      if (k) {
        (P || W) && R && F && p?.(R);
        const { inProgress: pe, ...oe } = J, Ae = {
          ...oe,
          toPosition: J.toHandle ? J.toPosition : null
        };
        m?.(re, Ae), i && S?.(re, Ae);
      }
      g(), cancelAnimationFrame(Y), I = !1, F = !1, R = null, W = null, B.removeEventListener("mousemove", fe), B.removeEventListener("mouseup", xe), B.removeEventListener("touchmove", fe), B.removeEventListener("touchend", xe);
    }
  }
  B.addEventListener("mousemove", fe), B.addEventListener("mouseup", xe), B.addEventListener("touchmove", fe), B.addEventListener("touchend", xe);
}
function kl(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: c, isValidConnection: l = El, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = $e(e), p = s.elementFromPoint(g, v), m = p?.classList.contains(`${a}-flow__handle`) ? p : f, w = {
    handleDomNode: m,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (m) {
    const S = xl(void 0, m), C = m.getAttribute("data-nodeid"), b = m.getAttribute("data-handleid"), A = m.classList.contains("connectable"), T = m.classList.contains("connectableend");
    if (!C || !S)
      return w;
    const z = {
      source: h ? C : r,
      sourceHandle: h ? b : o,
      target: h ? r : C,
      targetHandle: h ? o : b
    };
    w.connection = z;
    const B = A && T && (n === Cn.Strict ? h && S === "source" || !h && S === "target" : C !== r || b !== o);
    w.isValid = B && l(z), w.toHandle = bl(C, S, b, d, n, !0);
  }
  return w;
}
const ws = {
  onPointerDown: Xg,
  isValid: kl
};
function Wg({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = qe(e);
  function i({ translateExtent: a, width: c, height: l, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const v = (C) => {
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const b = n(), A = C.sourceEvent.ctrlKey && Qn() ? 10 : 1, T = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * d, z = b[2] * Math.pow(2, T * A);
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
        [c, l]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: b[2]
      }, B, a);
    }, S = rl().on("start", m).on("zoom", h ? w : null).on("zoom.wheel", f ? v : null);
    o.call(S, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: je
  };
}
const co = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), bo = ({ x: e, y: t, zoom: n }) => so.translate(e, t).scale(n), mn = (e, t) => e.target.closest(`.${t}`), Sl = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), qg = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, xo = (e, t = 0, n = qg, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Cl = (e) => {
  const t = e.ctrlKey && Qn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Gg({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: c, onPanZoomEnd: l }) {
  return (d) => {
    if (mn(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const m = je(d), w = Cl(d), S = h * Math.pow(2, w);
      r.scaleTo(n, S, m, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === wn.Vertical ? 0 : d.deltaX * f, v = o === wn.Horizontal ? 0 : d.deltaY * f;
    !Qn() && d.shiftKey && o !== wn.Vertical && (g = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(v / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const p = co(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (c?.(d, p), e.panScrollTimeout = setTimeout(() => {
      l?.(d, p), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, p));
  };
}
function Ug({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = mn(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function jg({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = co(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Jg({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Sl(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, co(i.transform));
  };
}
function Qg({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Sl(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = co(s.transform);
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
function $g({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: c, lib: l, connectionInProgress: d }) {
  return (h) => {
    const f = e || t, g = n && h.ctrlKey, v = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (mn(h, `${l}-flow__node`) || mn(h, `${l}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !v || mn(h, a) && v || mn(h, c) && (!v || o && v && !e) || !n && h.ctrlKey && v)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !g && v || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || v) && p;
  };
}
function ev({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: c }) {
  const l = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), h = rl().scaleExtent([t, n]).translateExtent(r), f = qe(e).call(h);
  S({
    x: o.x,
    y: o.y,
    zoom: Nn(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), v = f.on("dblclick.zoom");
  h.wheelDelta(Cl);
  function p(P, E) {
    return f ? new Promise((N) => {
      h?.interpolate(E?.interpolate === "linear" ? Fn : Sr).transform(xo(f, E?.duration, E?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function m({ noWheelClassName: P, noPanClassName: E, onPaneContextMenu: N, userSelectionActive: y, panOnScroll: x, panOnDrag: k, panOnScrollMode: D, panOnScrollSpeed: O, preventScrolling: I, zoomOnPinch: R, zoomOnScroll: F, zoomOnDoubleClick: W, zoomActivationKeyPressed: q, lib: K, onTransformChange: X, connectionInProgress: G, paneClickDistance: J, selectionOnDrag: ee }) {
    y && !l.isZoomingOrPanning && w();
    const fe = x && !q && !y;
    h.clickDistance(ee ? 1 / 0 : !xt(J) || J < 0 ? 0 : J);
    const xe = fe ? Gg({
      zoomPanValues: l,
      noWheelClassName: P,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: D,
      panOnScrollSpeed: O,
      zoomOnPinch: R,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : Ug({
      noWheelClassName: P,
      preventScrolling: I,
      d3ZoomHandler: g
    });
    if (f.on("wheel.zoom", xe, { passive: !1 }), !y) {
      const pe = jg({
        zoomPanValues: l,
        onDraggingChange: c,
        onPanZoomStart: s
      });
      h.on("start", pe);
      const oe = Jg({
        zoomPanValues: l,
        panOnDrag: k,
        onPaneContextMenu: !!N,
        onPanZoom: i,
        onTransformChange: X
      });
      h.on("zoom", oe);
      const Ae = Qg({
        zoomPanValues: l,
        panOnDrag: k,
        panOnScroll: x,
        onPaneContextMenu: N,
        onPanZoomEnd: a,
        onDraggingChange: c
      });
      h.on("end", Ae);
    }
    const re = $g({
      zoomActivationKeyPressed: q,
      panOnDrag: k,
      zoomOnScroll: F,
      panOnScroll: x,
      zoomOnDoubleClick: W,
      zoomOnPinch: R,
      userSelectionActive: y,
      noPanClassName: E,
      noWheelClassName: P,
      lib: K,
      connectionInProgress: G
    });
    h.filter(re), W ? f.on("dblclick.zoom", v) : f.on("dblclick.zoom", null);
  }
  function w() {
    h.on("zoom", null);
  }
  async function S(P, E, N) {
    const y = bo(P), x = h?.constrain()(y, E, N);
    return x && await p(x), new Promise((k) => k(x));
  }
  async function C(P, E) {
    const N = bo(P);
    return await p(N, E), new Promise((y) => y(N));
  }
  function b(P) {
    if (f) {
      const E = bo(P), N = f.property("__zoom");
      (N.k !== P.zoom || N.x !== P.x || N.y !== P.y) && h?.transform(f, E, null, { sync: !0 });
    }
  }
  function A() {
    const P = f ? nl(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: P.x, y: P.y, zoom: P.k };
  }
  function T(P, E) {
    return f ? new Promise((N) => {
      h?.interpolate(E?.interpolate === "linear" ? Fn : Sr).scaleTo(xo(f, E?.duration, E?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function z(P, E) {
    return f ? new Promise((N) => {
      h?.interpolate(E?.interpolate === "linear" ? Fn : Sr).scaleBy(xo(f, E?.duration, E?.ease, () => N(!0)), P);
    }) : Promise.resolve(!1);
  }
  function M(P) {
    h?.scaleExtent(P);
  }
  function B(P) {
    h?.translateExtent(P);
  }
  function Y(P) {
    const E = !xt(P) || P < 0 ? 0 : P;
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
    setClickDistance: Y
  };
}
var bs;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(bs || (bs = {}));
function Si() {
  const e = {};
  return [
    (t) => {
      if (t && !vc(e))
        throw new Error(t);
      return jo(e);
    },
    (t) => Jo(e, t)
  ];
}
const [tv, nv] = Si(), [rv, ov] = Si(), [iv, sv] = Si();
var av = /* @__PURE__ */ Q("<div><!></div>");
function Bt(e, t) {
  te(t, !0);
  let n = L(t, "id", 3, null), r = L(t, "type", 3, "source"), o = L(t, "position", 19, () => $.Top), i = L(t, "isConnectableStart", 3, !0), s = L(t, "isConnectableEnd", 3, !0), a = /* @__PURE__ */ Xt(t, [
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
  const c = tv("Handle must be used within a Custom Node component"), l = rv("Handle must be used within a Custom Node component");
  let d = /* @__PURE__ */ _(() => r() === "target"), h = /* @__PURE__ */ _(() => t.isConnectable !== void 0 ? t.isConnectable : l.value), f = qt(), g = /* @__PURE__ */ _(() => f.ariaLabelConfig), v = null;
  ri(() => {
    if (t.onconnect || t.ondisconnect) {
      f.edges;
      let E = f.connectionLookup.get(`${c}-${r()}${n() ? `-${n()}` : ""}`);
      if (v && !ng(E, v)) {
        const N = E ?? /* @__PURE__ */ new Map();
        ls(v, N, t.ondisconnect), ls(N, v, t.onconnect);
      }
      v = new Map(E);
    }
  });
  let p = /* @__PURE__ */ _(() => {
    if (!f.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: E, toHandle: N, isValid: y } = f.connection, x = E && E.nodeId === c && E.type === r() && E.id === n(), k = N && N.nodeId === c && N.type === r() && N.id === n(), D = f.connectionMode === Cn.Strict ? E?.type !== r() : c !== E?.nodeId || n() !== E?.id;
    return [
      !0,
      x,
      k,
      D,
      k && y
    ];
  }), m = /* @__PURE__ */ _(() => $n(u(p), 5)), w = /* @__PURE__ */ _(() => u(m)[0]), S = /* @__PURE__ */ _(() => u(m)[1]), C = /* @__PURE__ */ _(() => u(m)[2]), b = /* @__PURE__ */ _(() => u(m)[3]), A = /* @__PURE__ */ _(() => u(m)[4]);
  function T(E) {
    const N = f.onbeforeconnect ? f.onbeforeconnect(E) : E;
    N && (f.addEdge(N), f.onconnect?.(E));
  }
  function z(E) {
    const N = gl(E);
    E.currentTarget && (N && E.button === 0 || !N) && ws.onPointerDown(E, {
      handleId: n(),
      nodeId: c,
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
    const N = fl(E.target), y = t.isValidConnection ?? f.isValidConnection, { connectionMode: x, clickConnectStartHandle: k, flowId: D, nodeLookup: O } = f, { connection: I, isValid: R } = ws.isValid(E, {
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
    const F = structuredClone(Fs(f.connection));
    delete F.inProgress, F.toPosition = F.toHandle ? F.toHandle.position : null, f.onclickconnectend?.(E, F), f.clickConnectStartHandle = null;
  }
  var B = av(), Y = () => {
  };
  Zt(B, () => ({
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
    onkeypress: Y,
    style: t.style,
    role: "button",
    "aria-label": u(g)["handle.ariaLabel"],
    tabindex: "-1",
    ...a,
    [It]: {
      valid: u(A),
      connectingto: u(C),
      connectingfrom: u(S),
      source: !u(d),
      target: u(d),
      connectablestart: i(),
      connectableend: s(),
      connectable: u(h),
      connectionindicator: u(h) && (!u(w) || u(b)) && (u(w) || f.clickConnectStartHandle ? s() : i())
    }
  }));
  var P = Z(B);
  He(P, () => t.children ?? Ve), V(e, B), ne();
}
var lv = /* @__PURE__ */ Q("<!> <!>", 1);
function Nl(e, t) {
  te(t, !0);
  let n = L(t, "targetPosition", 19, () => $.Top), r = L(t, "sourcePosition", 19, () => $.Bottom);
  var o = lv(), i = le(o);
  Bt(i, {
    type: "target",
    get position() {
      return n();
    }
  });
  var s = U(i), a = U(s);
  Bt(a, {
    type: "source",
    get position() {
      return r();
    }
  }), ie(() => _e(s, ` ${t.data?.label ?? ""} `)), V(e, o), ne();
}
var cv = /* @__PURE__ */ Q(" <!>", 1);
function uv(e, t) {
  te(t, !0);
  let n = L(t, "data", 19, () => ({ label: "Node" })), r = L(t, "sourcePosition", 19, () => $.Bottom);
  var o = cv(), i = le(o), s = U(i);
  Bt(s, {
    type: "source",
    get position() {
      return r();
    }
  }), ie(() => _e(i, `${n()?.label ?? ""} `)), V(e, o), ne();
}
var dv = /* @__PURE__ */ Q(" <!>", 1);
function fv(e, t) {
  te(t, !0);
  let n = L(t, "data", 19, () => ({ label: "Node" })), r = L(t, "targetPosition", 19, () => $.Top);
  var o = dv(), i = le(o), s = U(i);
  Bt(s, {
    type: "target",
    get position() {
      return r();
    }
  }), ie(() => _e(i, `${n()?.label ?? ""} `)), V(e, o), ne();
}
function hv(e, t) {
}
function Eo(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function gv(e, t) {
  const n = /* @__PURE__ */ _(qt), r = /* @__PURE__ */ _(() => u(n).domNode);
  let o;
  return u(r) ? Eo(e, u(r), t) : o = ra(() => {
    tt(() => {
      Eo(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      Eo(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function vv() {
  let e = /* @__PURE__ */ ce(typeof window > "u");
  if (u(e)) {
    const t = ra(() => {
      tt(() => {
        H(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return u(e);
    }
  };
}
const xs = (e) => og(e), pv = (e) => il(e);
function ft(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Zr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var mv = /* @__PURE__ */ Q("<div><!></div>");
function yv(e, t) {
  te(t, !0);
  let n = L(t, "x", 3, 0), r = L(t, "y", 3, 0), o = L(t, "selectEdgeOnClick", 3, !1), i = L(t, "transparent", 3, !1), s = /* @__PURE__ */ Xt(t, [
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
  const a = qt(), c = iv("EdgeLabel must be used within a Custom Edge component");
  let l = /* @__PURE__ */ _(() => a.visible.edges.get(c)?.zIndex);
  var d = mv(), h = () => {
    o() && c && a.handleEdgeSelection(c);
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
      [_t]: g
    }),
    [
      () => ({
        display: vv().value ? "none" : void 0,
        cursor: o() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: ft(t.width),
        height: ft(t.height),
        "z-index": u(l)
      })
    ],
    void 0,
    void 0,
    "svelte-1wg91mu"
  );
  var f = Z(d);
  He(f, () => t.children ?? Ve), Pe(d, (g, v) => gv?.(g, v), () => "edge-labels"), V(e, d), ne();
}
var _v = /* @__PURE__ */ ye("<path></path>"), wv = /* @__PURE__ */ ye('<path fill="none"></path><!><!>', 1);
function uo(e, t) {
  let n = L(t, "interactionWidth", 3, 20), r = /* @__PURE__ */ Xt(t, [
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
  var o = wv(), i = le(o), s = U(i);
  {
    var a = (d) => {
      var h = _v();
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
  var c = U(s);
  {
    var l = (d) => {
      yv(d, {
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
          ie(() => _e(g, t.label)), V(h, g);
        },
        $$slots: { default: !0 }
      });
    };
    se(c, (d) => {
      t.label && d(l);
    });
  }
  ie(() => {
    j(i, "id", t.id), j(i, "d", t.path), Oe(i, 0, Yt(["svelte-flow__edge-path", t.class])), j(i, "marker-start", t.markerStart), j(i, "marker-end", t.markerEnd), Ye(i, t.style);
  }), V(e, o);
}
function Pl(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ _(() => vl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    curvature: t.pathOptions?.curvature
  })), r = /* @__PURE__ */ _(() => $n(u(n), 3)), o = /* @__PURE__ */ _(() => u(r)[0]), i = /* @__PURE__ */ _(() => u(r)[1]), s = /* @__PURE__ */ _(() => u(r)[2]);
  uo(e, {
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
function bv(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ _(() => wi({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition
  })), r = /* @__PURE__ */ _(() => $n(u(n), 3)), o = /* @__PURE__ */ _(() => u(r)[0]), i = /* @__PURE__ */ _(() => u(r)[1]), s = /* @__PURE__ */ _(() => u(r)[2]);
  uo(e, {
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
function xv(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ _(() => ml({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY
  })), r = /* @__PURE__ */ _(() => $n(u(n), 3)), o = /* @__PURE__ */ _(() => u(r)[0]), i = /* @__PURE__ */ _(() => u(r)[1]), s = /* @__PURE__ */ _(() => u(r)[2]);
  uo(e, {
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
function Ev(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ _(() => wi({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    borderRadius: 0
  })), r = /* @__PURE__ */ _(() => $n(u(n), 3)), o = /* @__PURE__ */ _(() => u(r)[0]), i = /* @__PURE__ */ _(() => u(r)[1]), s = /* @__PURE__ */ _(() => u(r)[2]);
  uo(e, {
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
class kv {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#e = t, this.#t = Xs(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const Sv = /\(.+\)/, Cv = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Nv extends kv {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Sv.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Cv.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => To(o, "change", i)
    );
  }
}
function Pv(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return yi(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Es(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: c, zIndexMode: l } = e, d = /* @__PURE__ */ new Map();
  for (const h of t) {
    const f = r.get(h.source), g = r.get(h.target);
    if (!f || !g)
      continue;
    if (a) {
      const { visibleNodes: m, transform: w, width: S, height: C } = e;
      if (yg({
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
    const p = Sg({
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
      zIndex: mg({
        selected: h.selected,
        zIndex: h.zIndex ?? n.zIndex,
        sourceNode: f,
        targetNode: g,
        elevateOnSelect: c,
        zIndexMode: l
      }),
      sourceNode: f,
      targetNode: g,
      edge: h
    });
  }
  return d;
}
const Ml = {
  input: uv,
  output: fv,
  default: Nl,
  group: hv
}, Al = {
  straight: xv,
  smoothstep: bv,
  default: Pl,
  step: Ev
};
function Mv(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = ur(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return _i(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function Av(e) {
  class t {
    #e = /* @__PURE__ */ _(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#e);
    }
    set flowId(r) {
      H(this.#e, r);
    }
    #t = /* @__PURE__ */ ce(null);
    get domNode() {
      return u(this.#t);
    }
    set domNode(r) {
      H(this.#t, r);
    }
    #n = /* @__PURE__ */ ce(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      H(this.#n, r);
    }
    #r = /* @__PURE__ */ ce(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      H(this.#r, r);
    }
    #l = /* @__PURE__ */ ce(e.height ?? 0);
    get height() {
      return u(this.#l);
    }
    set height(r) {
      H(this.#l, r);
    }
    #i = /* @__PURE__ */ ce(e.props.zIndexMode ?? "basic");
    get zIndexMode() {
      return u(this.#i);
    }
    set zIndexMode(r) {
      H(this.#i, r);
    }
    #o = /* @__PURE__ */ _(() => {
      const r = Tg(e.nodes, this.nodeLookup, this.parentLookup, {
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
      H(this.#o, r);
    }
    #s = /* @__PURE__ */ _(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#s);
    }
    set viewportInitialized(r) {
      H(this.#s, r);
    }
    #a = /* @__PURE__ */ _(() => (Hg(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#a);
    }
    set _edges(r) {
      H(this.#a, r);
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
      return u(this.#c);
    }
    set selectedNodes(r) {
      H(this.#c, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ _(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#u);
    }
    set selectedEdges(r) {
      H(this.#u, r);
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
        onlyRenderVisibleElements: l,
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
      if (l) {
        const { viewport: p, width: m, height: w } = this, S = [p.x, p.y, p.zoom];
        f = Pv(s, S, m, w), g = Es({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: S,
          width: m,
          height: w
        });
      } else
        f = this.nodeLookup, g = Es(v);
      return { nodes: f, edges: g };
    });
    get visible() {
      return u(this.#d);
    }
    set visible(r) {
      H(this.#d, r);
    }
    #f = /* @__PURE__ */ _(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#f);
    }
    set nodesDraggable(r) {
      H(this.#f, r);
    }
    #g = /* @__PURE__ */ _(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#g);
    }
    set nodesConnectable(r) {
      H(this.#g, r);
    }
    #h = /* @__PURE__ */ _(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#h);
    }
    set elementsSelectable(r) {
      H(this.#h, r);
    }
    #_ = /* @__PURE__ */ _(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#_);
    }
    set nodesFocusable(r) {
      H(this.#_, r);
    }
    #w = /* @__PURE__ */ _(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#w);
    }
    set edgesFocusable(r) {
      H(this.#w, r);
    }
    #b = /* @__PURE__ */ _(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#b);
    }
    set disableKeyboardA11y(r) {
      H(this.#b, r);
    }
    #m = /* @__PURE__ */ _(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#m);
    }
    set minZoom(r) {
      H(this.#m, r);
    }
    #v = /* @__PURE__ */ _(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#v);
    }
    set maxZoom(r) {
      H(this.#v, r);
    }
    #p = /* @__PURE__ */ _(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#p);
    }
    set nodeOrigin(r) {
      H(this.#p, r);
    }
    #y = /* @__PURE__ */ _(() => e.props.nodeExtent ?? Yo);
    get nodeExtent() {
      return u(this.#y);
    }
    set nodeExtent(r) {
      H(this.#y, r);
    }
    #x = /* @__PURE__ */ _(() => e.props.translateExtent ?? Yo);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      H(this.#x, r);
    }
    #E = /* @__PURE__ */ _(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#E);
    }
    set defaultEdgeOptions(r) {
      H(this.#E, r);
    }
    #k = /* @__PURE__ */ _(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#k);
    }
    set nodeDragThreshold(r) {
      H(this.#k, r);
    }
    #S = /* @__PURE__ */ _(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#S);
    }
    set autoPanOnNodeDrag(r) {
      H(this.#S, r);
    }
    #C = /* @__PURE__ */ _(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#C);
    }
    set autoPanOnConnect(r) {
      H(this.#C, r);
    }
    #N = /* @__PURE__ */ _(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#N);
    }
    set autoPanOnNodeFocus(r) {
      H(this.#N, r);
    }
    #P = /* @__PURE__ */ _(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return u(this.#P);
    }
    set autoPanSpeed(r) {
      H(this.#P, r);
    }
    #M = /* @__PURE__ */ _(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#M);
    }
    set connectionDragThreshold(r) {
      H(this.#M, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #A = /* @__PURE__ */ _(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#A);
    }
    set snapGrid(r) {
      H(this.#A, r);
    }
    #T = /* @__PURE__ */ ce(!1);
    get dragging() {
      return u(this.#T);
    }
    set dragging(r) {
      H(this.#T, r);
    }
    #D = /* @__PURE__ */ ce(null);
    get selectionRect() {
      return u(this.#D);
    }
    set selectionRect(r) {
      H(this.#D, r);
    }
    #I = /* @__PURE__ */ ce(!1);
    get selectionKeyPressed() {
      return u(this.#I);
    }
    set selectionKeyPressed(r) {
      H(this.#I, r);
    }
    #z = /* @__PURE__ */ ce(!1);
    get multiselectionKeyPressed() {
      return u(this.#z);
    }
    set multiselectionKeyPressed(r) {
      H(this.#z, r);
    }
    #O = /* @__PURE__ */ ce(!1);
    get deleteKeyPressed() {
      return u(this.#O);
    }
    set deleteKeyPressed(r) {
      H(this.#O, r);
    }
    #R = /* @__PURE__ */ ce(!1);
    get panActivationKeyPressed() {
      return u(this.#R);
    }
    set panActivationKeyPressed(r) {
      H(this.#R, r);
    }
    #H = /* @__PURE__ */ ce(!1);
    get zoomActivationKeyPressed() {
      return u(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      H(this.#H, r);
    }
    #L = /* @__PURE__ */ ce(null);
    get selectionRectMode() {
      return u(this.#L);
    }
    set selectionRectMode(r) {
      H(this.#L, r);
    }
    #V = /* @__PURE__ */ ce("");
    get ariaLiveMessage() {
      return u(this.#V);
    }
    set ariaLiveMessage(r) {
      H(this.#V, r);
    }
    #B = /* @__PURE__ */ _(() => e.props.selectionMode ?? Br.Partial);
    get selectionMode() {
      return u(this.#B);
    }
    set selectionMode(r) {
      H(this.#B, r);
    }
    #F = /* @__PURE__ */ _(() => ({ ...Ml, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#F);
    }
    set nodeTypes(r) {
      H(this.#F, r);
    }
    #K = /* @__PURE__ */ _(() => ({ ...Al, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#K);
    }
    set edgeTypes(r) {
      H(this.#K, r);
    }
    #Y = /* @__PURE__ */ _(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#Y);
    }
    set noPanClass(r) {
      H(this.#Y, r);
    }
    #Z = /* @__PURE__ */ _(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#Z);
    }
    set noDragClass(r) {
      H(this.#Z, r);
    }
    #X = /* @__PURE__ */ _(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#X);
    }
    set noWheelClass(r) {
      H(this.#X, r);
    }
    #W = /* @__PURE__ */ _(() => gg(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#W);
    }
    set ariaLabelConfig(r) {
      H(this.#W, r);
    }
    #q = /* @__PURE__ */ ce(Mv(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#q);
    }
    set _viewport(r) {
      H(this.#q, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #G = (
      // _connection is viewport independent and originating from XYHandle
      /* @__PURE__ */ ce(Zo)
    );
    get _connection() {
      return u(this.#G);
    }
    set _connection(r) {
      H(this.#G, r);
    }
    #U = /* @__PURE__ */ _(() => this._connection.inProgress ? {
      ...this._connection,
      to: fr(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#U);
    }
    set connection(r) {
      H(this.#U, r);
    }
    #j = /* @__PURE__ */ _(() => e.props.connectionMode ?? Cn.Strict);
    get connectionMode() {
      return u(this.#j);
    }
    set connectionMode(r) {
      H(this.#j, r);
    }
    #J = /* @__PURE__ */ _(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#J);
    }
    set connectionRadius(r) {
      H(this.#J, r);
    }
    #Q = /* @__PURE__ */ _(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#Q);
    }
    set isValidConnection(r) {
      H(this.#Q, r);
    }
    #$ = /* @__PURE__ */ _(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#$);
    }
    set selectNodesOnDrag(r) {
      H(this.#$, r);
    }
    #ee = /* @__PURE__ */ _(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#ee);
    }
    set defaultMarkerColor(r) {
      H(this.#ee, r);
    }
    #te = /* @__PURE__ */ _(() => Cg(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#te);
    }
    set markers(r) {
      H(this.#te, r);
    }
    #ne = /* @__PURE__ */ _(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#ne);
    }
    set onlyRenderVisibleElements(r) {
      H(this.#ne, r);
    }
    #re = /* @__PURE__ */ _(() => e.props.onflowerror ?? ug);
    get onerror() {
      return u(this.#re);
    }
    set onerror(r) {
      H(this.#re, r);
    }
    #oe = /* @__PURE__ */ _(() => e.props.ondelete);
    get ondelete() {
      return u(this.#oe);
    }
    set ondelete(r) {
      H(this.#oe, r);
    }
    #ie = /* @__PURE__ */ _(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#ie);
    }
    set onbeforedelete(r) {
      H(this.#ie, r);
    }
    #se = /* @__PURE__ */ _(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#se);
    }
    set onbeforeconnect(r) {
      H(this.#se, r);
    }
    #ae = /* @__PURE__ */ _(() => e.props.onconnect);
    get onconnect() {
      return u(this.#ae);
    }
    set onconnect(r) {
      H(this.#ae, r);
    }
    #le = /* @__PURE__ */ _(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#le);
    }
    set onconnectstart(r) {
      H(this.#le, r);
    }
    #ce = /* @__PURE__ */ _(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#ce);
    }
    set onconnectend(r) {
      H(this.#ce, r);
    }
    #ue = /* @__PURE__ */ _(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#ue);
    }
    set onbeforereconnect(r) {
      H(this.#ue, r);
    }
    #de = /* @__PURE__ */ _(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#de);
    }
    set onreconnect(r) {
      H(this.#de, r);
    }
    #fe = /* @__PURE__ */ _(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#fe);
    }
    set onreconnectstart(r) {
      H(this.#fe, r);
    }
    #he = /* @__PURE__ */ _(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#he);
    }
    set onreconnectend(r) {
      H(this.#he, r);
    }
    #ge = /* @__PURE__ */ _(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#ge);
    }
    set clickConnect(r) {
      H(this.#ge, r);
    }
    #ve = /* @__PURE__ */ _(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ve);
    }
    set onclickconnectstart(r) {
      H(this.#ve, r);
    }
    #pe = /* @__PURE__ */ _(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#pe);
    }
    set onclickconnectend(r) {
      H(this.#pe, r);
    }
    #me = /* @__PURE__ */ ce(null);
    get clickConnectStartHandle() {
      return u(this.#me);
    }
    set clickConnectStartHandle(r) {
      H(this.#me, r);
    }
    #ye = /* @__PURE__ */ _(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#ye);
    }
    set onselectiondrag(r) {
      H(this.#ye, r);
    }
    #_e = /* @__PURE__ */ _(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#_e);
    }
    set onselectiondragstart(r) {
      H(this.#_e, r);
    }
    #we = /* @__PURE__ */ _(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#we);
    }
    set onselectiondragstop(r) {
      H(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await lg(
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
    _prefersDark = new Nv("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ _(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#be);
    }
    set colorMode(r) {
      H(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Zo, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function qt() {
  const e = jo(Xr);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Xr = /* @__PURE__ */ Symbol();
function Tl(e) {
  const t = Av(e);
  function n(P) {
    t.nodeTypes = {
      ...Ml,
      ...P
    };
  }
  function r(P) {
    t.edgeTypes = {
      ...Al,
      ...P
    };
  }
  function o(P) {
    t.edges = bg(P, t.edges);
  }
  const i = (P, E = !1) => {
    t.nodes = t.nodes.map((N) => {
      if (t.connection.inProgress && t.connection.fromNode.id === N.id) {
        const x = t.nodeLookup.get(N.id);
        x && (t.connection = {
          ...t.connection,
          from: ln(x, t.connection.fromHandle, $.Left, !0)
        });
      }
      const y = P.get(N.id);
      return y ? { ...N, position: y.position, dragging: E } : N;
    });
  };
  function s(P) {
    const { changes: E, updatedInternals: N } = Og(P, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin, t.nodeExtent, t.zIndexMode);
    if (!N)
      return;
    Mg(t.nodeLookup, t.parentLookup, {
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
  function l(P, E) {
    const N = t.panZoom;
    return N ? N.scaleBy(P, E) : Promise.resolve(!1);
  }
  function d(P) {
    return l(1.2, P);
  }
  function h(P) {
    return l(1 / 1.2, P);
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
      console.warn("012", jn.error012(P));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, y.selected ? (E || y.selected && t.multiselectionKeyPressed) && (m({ nodes: [y], edges: [] }), requestAnimationFrame(() => N?.blur())) : w([P]);
  }
  function b(P) {
    const E = t.edgeLookup.get(P);
    if (!E) {
      console.warn("012", jn.error012(P));
      return;
    }
    (E.selectable || t.elementsSelectable && typeof E.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, E.selected ? E.selected && t.multiselectionKeyPressed && m({ nodes: [], edges: [E] }) : S([P]));
  }
  function A(P, E) {
    const { nodeExtent: N, snapGrid: y, nodeOrigin: x, nodeLookup: k, nodesDraggable: D, onerror: O } = t, I = /* @__PURE__ */ new Map(), R = y?.[0] ?? 5, F = y?.[1] ?? 5, W = P.x * R * E, q = P.y * F * E;
    for (const K of k.values()) {
      if (!(K.selected && (K.draggable || D && typeof K.draggable > "u")))
        continue;
      let G = {
        x: K.internals.positionAbsolute.x + W,
        y: K.internals.positionAbsolute.y + q
      };
      y && (G = dr(G, y));
      const { position: J, positionAbsolute: ee } = sl({
        nodeId: K.id,
        nextPosition: G,
        nodeLookup: k,
        nodeExtent: N,
        nodeOrigin: x,
        onError: O
      });
      K.position = J, K.internals.positionAbsolute = ee, I.set(K.id, K);
    }
    i(I);
  }
  function T(P) {
    return Rg({
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
    t._connection = Zo;
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
function Tv(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: c, setPanZoomInstance: l, onDraggingChange: d, onTransformChange: h } = t, f = ev({
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
  return (o.x !== g.x || o.y !== g.y || o.zoom !== g.zoom) && h([g.x, g.y, g.zoom]), l(f), f.update(t), {
    update(v) {
      f.update(v);
    }
  };
}
var Dv = /* @__PURE__ */ Q('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Iv(e, t) {
  te(t, !0);
  let n = L(t, "store", 15), r = /* @__PURE__ */ _(() => n().panActivationKeyPressed || t.panOnDrag), o = /* @__PURE__ */ _(() => n().panActivationKeyPressed || t.panOnScroll);
  const { viewport: i } = n();
  let s = !1;
  tt(() => {
    !s && n().viewportInitialized && (t.oninit?.(), s = !0);
  });
  var a = Dv(), c = Z(a);
  He(c, () => t.children), Pe(a, (l, d) => Tv?.(l, d), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: i,
    onDraggingChange: (l) => {
      n(n().dragging = l, !0);
    },
    setPanZoomInstance: (l) => {
      n(n().panZoom = l, !0);
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
    onTransformChange: (l) => {
      n(n().viewport = { x: l[0], y: l[1], zoom: l[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), V(e, a), ne();
}
function ks(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Ss(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Cs(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var zv = /* @__PURE__ */ Q("<div><!></div>");
function Ov(e, t) {
  te(t, !0);
  let n = L(t, "store", 15), r = L(t, "panOnDrag", 3, !0), o = L(t, "paneClickDistance", 3, 1), i, s = null, a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ _(() => n().panActivationKeyPressed || r()), d = /* @__PURE__ */ _(() => n().selectionKeyPressed || !!n().selectionRect || t.selectionOnDrag && u(l) !== !0), h = /* @__PURE__ */ _(() => n().elementsSelectable && (u(d) || n().selectionRectMode === "user")), f = !1;
  function g(M) {
    if (s = i?.getBoundingClientRect(), !s) return;
    const B = M.target === i, Y = !B && !!M.target.closest(".nokey"), P = t.selectionOnDrag && B || n().selectionKeyPressed;
    if (Y || !u(d) || !P || M.button !== 0 || !M.isPrimary)
      return;
    M.target?.setPointerCapture?.(M.pointerId), f = !1;
    const { x: E, y: N } = $e(M, s);
    n(n().selectionRect = { width: 0, height: 0, startX: E, startY: N, x: E, y: N }, !0), B || (M.stopPropagation(), M.preventDefault());
  }
  function v(M) {
    if (!u(d) || !s || !n().selectionRect)
      return;
    const B = $e(M, s), { startX: Y = 0, startY: P = 0 } = n().selectionRect;
    if (!f) {
      const k = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(B.x - Y, B.y - P) <= k)
        return;
      n().unselectNodesAndEdges(), t.onselectionstart?.(M);
    }
    f = !0;
    const E = {
      ...n().selectionRect,
      x: B.x < Y ? B.x : Y,
      y: B.y < P ? B.y : P,
      width: Math.abs(B.x - Y),
      height: Math.abs(B.y - P)
    }, N = a, y = c;
    a = new Set(yi(
      n().nodeLookup,
      E,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Br.Partial,
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
    Cs(N, a) || n(n().nodes = n().nodes.map(Ss(a)), !0), Cs(y, c) || n(n().edges = n().edges.map(Ss(c)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = E, !0);
  }
  function p(M) {
    M.button === 0 && (M.target?.releasePointerCapture?.(M.pointerId), !f && M.target === i && S?.(M), n(n().selectionRect = null, !0), f && n(n().selectionRectMode = a.size > 0 ? "nodes" : null, !0), f && t.onselectionend?.(M));
  }
  const m = (M) => {
    if (Array.isArray(u(l)) && u(l).includes(2)) {
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
  var C = zv();
  let b;
  var A = /* @__PURE__ */ _(() => u(h) ? void 0 : ks(S, i));
  C.__click = function(...M) {
    u(A)?.apply(this, M);
  }, C.__pointermove = function(...M) {
    (u(h) ? v : void 0)?.apply(this, M);
  }, C.__pointerup = function(...M) {
    (u(h) ? p : void 0)?.apply(this, M);
  };
  var T = /* @__PURE__ */ _(() => ks(m, i));
  C.__contextmenu = function(...M) {
    u(T)?.apply(this, M);
  };
  var z = Z(C);
  He(z, () => t.children), sr(C, (M) => i = M, () => i), ie((M) => b = Oe(C, 1, "svelte-flow__pane svelte-flow__container", null, b, M), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(d)
    })
  ]), nn(
    "pointerdown",
    C,
    function(...M) {
      (u(h) ? g : void 0)?.apply(this, M);
    },
    !0
  ), nn(
    "click",
    C,
    function(...M) {
      (u(h) ? w : void 0)?.apply(this, M);
    },
    !0
  ), V(e, C), ne();
}
$r(["click", "pointermove", "pointerup", "contextmenu"]);
var Rv = /* @__PURE__ */ Q('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Hv(e, t) {
  te(t, !0);
  var n = Rv();
  let r;
  var o = Z(n);
  He(o, () => t.children), ie(() => r = Ye(n, "", r, {
    transform: `translate(${t.store.viewport.x ?? ""}px, ${t.store.viewport.y ?? ""}px) scale(${t.store.viewport.zoom ?? ""})`
  })), V(e, n), ne();
}
function Dl(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Bg({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const { snapGrid: l, viewport: d } = n;
      return {
        nodes: n.nodes,
        nodeLookup: n.nodeLookup,
        edges: n.edges,
        nodeExtent: n.nodeExtent,
        snapGrid: l || [0, 0],
        snapToGrid: !!l,
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
  function c(l, d) {
    if (d.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: l,
      noDragClassName: d.noDragClass,
      handleSelector: d.handleSelector,
      nodeId: d.nodeId,
      isSelectable: d.isSelectable,
      nodeClickDistance: d.nodeClickDistance
    });
  }
  return c(e, t), {
    update(l) {
      c(e, l);
    },
    destroy() {
      a.destroy();
    }
  };
}
var Lv = /* @__PURE__ */ Q('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>'), Vv = /* @__PURE__ */ Q('<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>', 1);
function Bv(e, t) {
  te(t, !0);
  var n = Vv(), r = le(n), o = Z(r), i = U(r, 2), s = Z(i), a = U(i, 2);
  {
    var c = (l) => {
      var d = Lv(), h = Z(d);
      ie(() => {
        j(d, "id", `${Fv}-${t.store.flowId}`), _e(h, t.store.ariaLiveMessage);
      }), V(l, d);
    };
    se(a, (l) => {
      t.store.disableKeyboardA11y || l(c);
    });
  }
  ie(() => {
    j(r, "id", `${Il}-${t.store.flowId}`), _e(o, t.store.disableKeyboardA11y ? t.store.ariaLabelConfig["node.a11yDescription.default"] : t.store.ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), j(i, "id", `${zl}-${t.store.flowId}`), _e(s, t.store.ariaLabelConfig["edge.a11yDescription.default"]);
  }), V(e, n), ne();
}
const Il = "svelte-flow__node-desc", zl = "svelte-flow__edge-desc", Fv = "svelte-flow__aria-live";
var Kv = /* @__PURE__ */ Q("<div><!></div>");
function Yv(e, t) {
  te(t, !0);
  let n = L(t, "store", 15), r = /* @__PURE__ */ _(() => Ne(t.node.data, () => ({}), !0)), o = /* @__PURE__ */ _(() => Ne(t.node.selected, !1)), i = /* @__PURE__ */ _(() => t.node.draggable), s = /* @__PURE__ */ _(() => t.node.selectable), a = /* @__PURE__ */ _(() => Ne(t.node.deletable, !0)), c = /* @__PURE__ */ _(() => t.node.connectable), l = /* @__PURE__ */ _(() => t.node.focusable), d = /* @__PURE__ */ _(() => Ne(t.node.hidden, !1)), h = /* @__PURE__ */ _(() => Ne(t.node.dragging, !1)), f = /* @__PURE__ */ _(() => Ne(t.node.style, "")), g = /* @__PURE__ */ _(() => t.node.class), v = /* @__PURE__ */ _(() => Ne(t.node.type, "default")), p = /* @__PURE__ */ _(() => t.node.parentId), m = /* @__PURE__ */ _(() => t.node.sourcePosition), w = /* @__PURE__ */ _(() => t.node.targetPosition), S = /* @__PURE__ */ _(() => Ne(t.node.measured, () => ({ width: 0, height: 0 }), !0).width), C = /* @__PURE__ */ _(() => Ne(t.node.measured, () => ({ width: 0, height: 0 }), !0).height), b = /* @__PURE__ */ _(() => t.node.initialWidth), A = /* @__PURE__ */ _(() => t.node.initialHeight), T = /* @__PURE__ */ _(() => t.node.width), z = /* @__PURE__ */ _(() => t.node.height), M = /* @__PURE__ */ _(() => t.node.dragHandle), B = /* @__PURE__ */ _(() => Ne(t.node.internals.z, 0)), Y = /* @__PURE__ */ _(() => t.node.internals.positionAbsolute.x), P = /* @__PURE__ */ _(() => t.node.internals.positionAbsolute.y), E = /* @__PURE__ */ _(() => t.node.internals.userNode), { id: N } = t.node, y = /* @__PURE__ */ _(() => u(i) ?? n().nodesDraggable), x = /* @__PURE__ */ _(() => u(s) ?? n().elementsSelectable), k = /* @__PURE__ */ _(() => u(c) ?? n().nodesConnectable), D = /* @__PURE__ */ _(() => ul(t.node)), O = /* @__PURE__ */ _(() => !!t.node.internals.handleBounds), I = /* @__PURE__ */ _(() => u(D) && u(O)), R = /* @__PURE__ */ _(() => u(l) ?? n().nodesFocusable);
  function F(de) {
    return n().parentLookup.has(de);
  }
  let W = /* @__PURE__ */ _(() => F(N)), q = /* @__PURE__ */ ce(null), K = null, X = u(v), G = u(m), J = u(w), ee = /* @__PURE__ */ _(() => n().nodeTypes[u(v)] ?? Nl), fe = /* @__PURE__ */ _(() => n().ariaLabelConfig), xe = {
    get value() {
      return u(k);
    }
  };
  nv(N), ov(xe);
  let re = /* @__PURE__ */ _(() => {
    const de = u(S) === void 0 ? u(T) ?? u(b) : u(T), we = u(C) === void 0 ? u(z) ?? u(A) : u(z);
    if (!(de === void 0 && we === void 0 && u(f) === void 0))
      return `${u(f)};${de ? `width:${ft(de)};` : ""}${we ? `height:${ft(we)};` : ""}`;
  });
  tt(() => {
    (u(v) !== X || u(m) !== G || u(w) !== J) && u(q) !== null && requestAnimationFrame(() => {
      u(q) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[N, { id: N, nodeElement: u(q), force: !0 }]]));
    }), X = u(v), G = u(m), J = u(w);
  }), tt(() => {
    t.resizeObserver && (!u(I) || u(q) !== K) && (K && t.resizeObserver.unobserve(K), u(q) && t.resizeObserver.observe(u(q)), K = u(q));
  }), to(() => {
    K && t.resizeObserver?.unobserve(K);
  });
  function pe(de) {
    u(x) && (!n().selectNodesOnDrag || !u(y) || n().nodeDragThreshold > 0) && n().handleNodeSelection(N), t.onnodeclick?.({ node: u(E), event: de });
  }
  function oe(de) {
    if (!(hl(de) || n().disableKeyboardA11y))
      if (ol.includes(de.key) && u(x)) {
        const we = de.key === "Escape";
        n().handleNodeSelection(N, we, u(q));
      } else u(y) && t.node.selected && Object.prototype.hasOwnProperty.call(Zr, de.key) && (de.preventDefault(), n(
        n().ariaLiveMessage = u(fe)["node.a11yDescription.ariaLiveMessage"]({
          direction: de.key.replace("Arrow", "").toLowerCase(),
          x: ~~t.node.internals.positionAbsolute.x,
          y: ~~t.node.internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Zr[de.key], de.shiftKey ? 4 : 1));
  }
  const Ae = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(q)?.matches(":focus-visible"))
      return;
    const { width: de, height: we, viewport: Ue } = n();
    yi(/* @__PURE__ */ new Map([[N, t.node]]), { x: 0, y: 0, width: de, height: we }, [Ue.x, Ue.y, Ue.zoom], !0).length > 0 || n().setCenter(t.node.position.x + (t.node.measured.width ?? 0) / 2, t.node.position.y + (t.node.measured.height ?? 0) / 2, { zoom: Ue.zoom });
  };
  var At = me(), Tt = le(At);
  {
    var vt = (de) => {
      var we = Kv();
      Zt(we, () => ({
        "data-id": N,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${u(v)}`,
          u(g)
        ],
        style: u(re),
        onclick: pe,
        onpointerenter: t.onnodepointerenter ? (ge) => t.onnodepointerenter({ node: u(E), event: ge }) : void 0,
        onpointerleave: t.onnodepointerleave ? (ge) => t.onnodepointerleave({ node: u(E), event: ge }) : void 0,
        onpointermove: t.onnodepointermove ? (ge) => t.onnodepointermove({ node: u(E), event: ge }) : void 0,
        oncontextmenu: t.onnodecontextmenu ? (ge) => t.onnodecontextmenu({ node: u(E), event: ge }) : void 0,
        onkeydown: u(R) ? oe : void 0,
        onfocus: u(R) ? Ae : void 0,
        tabIndex: u(R) ? 0 : void 0,
        role: t.node.ariaRole ?? (u(R) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Il}-${n().flowId}`,
        ...t.node.domAttributes,
        [It]: {
          dragging: u(h),
          selected: u(o),
          draggable: u(y),
          connectable: u(k),
          selectable: u(x),
          nopan: u(y),
          parent: u(W)
        },
        [_t]: {
          "z-index": u(B),
          transform: `translate(${u(Y) ?? ""}px, ${u(P) ?? ""}px)`,
          visibility: u(D) ? "visible" : "hidden"
        }
      }));
      var Ue = Z(we);
      eo(Ue, () => u(ee), (ge, dn) => {
        dn(ge, {
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
            return u(x);
          },
          get deletable() {
            return u(a);
          },
          get sourcePosition() {
            return u(m);
          },
          get targetPosition() {
            return u(w);
          },
          get zIndex() {
            return u(B);
          },
          get dragging() {
            return u(h);
          },
          get draggable() {
            return u(y);
          },
          get dragHandle() {
            return u(M);
          },
          get parentId() {
            return u(p);
          },
          get type() {
            return u(v);
          },
          get isConnectable() {
            return u(k);
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
      }), Pe(we, (ge, dn) => Dl?.(ge, dn), () => ({
        nodeId: N,
        isSelectable: u(x),
        disabled: !u(y),
        handleSelector: u(M),
        noDragClass: n().noDragClass,
        nodeClickDistance: t.nodeClickDistance,
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (ge, dn, Dn, In) => {
          t.onnodedrag?.({ event: ge, targetNode: Dn, nodes: In });
        },
        onDragStart: (ge, dn, Dn, In) => {
          t.onnodedragstart?.({ event: ge, targetNode: Dn, nodes: In });
        },
        onDragStop: (ge, dn, Dn, In) => {
          t.onnodedragstop?.({ event: ge, targetNode: Dn, nodes: In });
        },
        store: n()
      })), sr(we, (ge) => H(q, ge), () => u(q)), V(de, we);
    };
    se(Tt, (de) => {
      u(d) || de(vt);
    });
  }
  V(e, At), ne();
}
var Zv = /* @__PURE__ */ Q('<div class="svelte-flow__nodes"></div>');
function Xv(e, t) {
  te(t, !0);
  let n = L(t, "store", 15);
  const r = typeof ResizeObserver > "u" ? null : new ResizeObserver((i) => {
    const s = /* @__PURE__ */ new Map();
    i.forEach((a) => {
      const c = a.target.getAttribute("data-id");
      s.set(c, { id: c, nodeElement: a.target, force: !0 });
    }), n().updateNodeInternals(s);
  });
  to(() => {
    r?.disconnect();
  });
  var o = Zv();
  Nt(o, 21, () => n().visible.nodes.values(), (i) => i.id, (i, s) => {
    Yv(i, {
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
var Wv = /* @__PURE__ */ ye('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function qv(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ _(() => t.edge.id), r = /* @__PURE__ */ _(() => t.edge.source), o = /* @__PURE__ */ _(() => t.edge.target), i = /* @__PURE__ */ _(() => t.edge.sourceX), s = /* @__PURE__ */ _(() => t.edge.sourceY), a = /* @__PURE__ */ _(() => t.edge.targetX), c = /* @__PURE__ */ _(() => t.edge.targetY), l = /* @__PURE__ */ _(() => t.edge.sourcePosition), d = /* @__PURE__ */ _(() => t.edge.targetPosition), h = /* @__PURE__ */ _(() => Ne(t.edge.animated, !1)), f = /* @__PURE__ */ _(() => Ne(t.edge.selected, !1)), g = /* @__PURE__ */ _(() => t.edge.label), v = /* @__PURE__ */ _(() => t.edge.labelStyle), p = /* @__PURE__ */ _(() => Ne(t.edge.data, () => ({}), !0)), m = /* @__PURE__ */ _(() => t.edge.style), w = /* @__PURE__ */ _(() => t.edge.interactionWidth), S = /* @__PURE__ */ _(() => Ne(t.edge.type, "default")), C = /* @__PURE__ */ _(() => t.edge.sourceHandle), b = /* @__PURE__ */ _(() => t.edge.targetHandle), A = /* @__PURE__ */ _(() => t.edge.markerStart), T = /* @__PURE__ */ _(() => t.edge.markerEnd), z = /* @__PURE__ */ _(() => t.edge.selectable), M = /* @__PURE__ */ _(() => t.edge.focusable), B = /* @__PURE__ */ _(() => Ne(t.edge.deletable, !0)), Y = /* @__PURE__ */ _(() => t.edge.hidden), P = /* @__PURE__ */ _(() => t.edge.zIndex), E = /* @__PURE__ */ _(() => t.edge.class), N = /* @__PURE__ */ _(() => t.edge.ariaLabel);
  sv(u(n));
  let y = null, x = /* @__PURE__ */ _(() => u(z) ?? t.store.elementsSelectable), k = /* @__PURE__ */ _(() => u(M) ?? t.store.edgesFocusable), D = /* @__PURE__ */ _(() => t.store.edgeTypes[u(S)] ?? Pl), O = /* @__PURE__ */ _(() => u(A) ? `url('#${Wo(u(A), t.store.flowId)}')` : void 0), I = /* @__PURE__ */ _(() => u(T) ? `url('#${Wo(u(T), t.store.flowId)}')` : void 0);
  function R(G) {
    const J = t.store.edgeLookup.get(u(n));
    J && (u(x) && t.store.handleEdgeSelection(u(n)), t.onedgeclick?.({ event: G, edge: J }));
  }
  function F(G, J) {
    const ee = t.store.edgeLookup.get(u(n));
    ee && J({ event: G, edge: ee });
  }
  function W(G) {
    if (!t.store.disableKeyboardA11y && ol.includes(G.key) && u(x)) {
      const { unselectNodesAndEdges: J, addSelectedEdges: ee } = t.store;
      G.key === "Escape" ? (y?.blur(), J({ edges: [t.edge] })) : ee([u(n)]);
    }
  }
  var q = me(), K = le(q);
  {
    var X = (G) => {
      var J = Wv();
      let ee;
      var fe = Z(J);
      Zt(fe, () => ({
        class: ["svelte-flow__edge", u(E)],
        "data-id": u(n),
        onclick: R,
        oncontextmenu: t.onedgecontextmenu ? (re) => {
          F(re, t.onedgecontextmenu);
        } : void 0,
        onpointerenter: t.onedgepointerenter ? (re) => {
          F(re, t.onedgepointerenter);
        } : void 0,
        onpointerleave: t.onedgepointerleave ? (re) => {
          F(re, t.onedgepointerleave);
        } : void 0,
        "aria-label": u(N) === null ? void 0 : u(N) ? u(N) : `Edge from ${u(r)} to ${u(o)}`,
        "aria-describedby": u(k) ? `${zl}-${t.store.flowId}` : void 0,
        role: t.edge.ariaRole ?? (u(k) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: u(k) ? W : void 0,
        tabindex: u(k) ? 0 : void 0,
        ...t.edge.domAttributes,
        [It]: {
          animated: u(h),
          selected: u(f),
          selectable: u(x)
        }
      }));
      var xe = Z(fe);
      eo(xe, () => u(D), (re, pe) => {
        pe(re, {
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
            return u(c);
          },
          get sourcePosition() {
            return u(l);
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
            return u(p);
          },
          get style() {
            return u(m);
          },
          get interactionWidth() {
            return u(w);
          },
          get selectable() {
            return u(x);
          },
          get deletable() {
            return u(B);
          },
          get type() {
            return u(S);
          },
          get sourceHandleId() {
            return u(C);
          },
          get targetHandleId() {
            return u(b);
          },
          get markerStart() {
            return u(O);
          },
          get markerEnd() {
            return u(I);
          }
        });
      }), sr(fe, (re) => y = re, () => y), ie(() => ee = Ye(J, "", ee, { "z-index": u(P) })), V(G, J);
    };
    se(K, (G) => {
      u(Y) || G(X);
    });
  }
  V(e, q), ne();
}
hc();
var Gv = /* @__PURE__ */ ye("<defs></defs>");
function Uv(e, t) {
  te(t, !1);
  const n = qt();
  Pa();
  var r = Gv();
  Nt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    $v(o, zt(() => u(i)));
  }), V(e, r), ne();
}
var jv = /* @__PURE__ */ ye('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Jv = /* @__PURE__ */ ye('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Qv = /* @__PURE__ */ ye('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function $v(e, t) {
  te(t, !0);
  let n = L(t, "width", 3, 12.5), r = L(t, "height", 3, 12.5), o = L(t, "markerUnits", 3, "strokeWidth"), i = L(t, "orient", 3, "auto-start-reverse"), s = L(t, "color", 3, "none");
  var a = Qv(), c = Z(a);
  {
    var l = (h) => {
      var f = jv();
      let g;
      ie(() => {
        j(f, "stroke-width", t.strokeWidth), g = Ye(f, "", g, { stroke: s() });
      }), V(h, f);
    }, d = (h) => {
      var f = me(), g = le(f);
      {
        var v = (p) => {
          var m = Jv();
          let w;
          ie(() => {
            j(m, "stroke-width", t.strokeWidth), w = Ye(m, "", w, { stroke: s(), fill: s() });
          }), V(p, m);
        };
        se(
          g,
          (p) => {
            t.type === Fr.ArrowClosed && p(v);
          },
          !0
        );
      }
      V(h, f);
    };
    se(c, (h) => {
      t.type === Fr.Arrow ? h(l) : h(d, !1);
    });
  }
  ie(() => {
    j(a, "id", t.id), j(a, "markerWidth", `${n()}`), j(a, "markerHeight", `${r()}`), j(a, "markerUnits", o()), j(a, "orient", i());
  }), V(e, a), ne();
}
var e0 = /* @__PURE__ */ Q('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function t0(e, t) {
  te(t, !0);
  let n = L(t, "store", 15);
  var r = e0(), o = Z(r), i = Z(o);
  Uv(i, {});
  var s = U(o, 2);
  Nt(s, 17, () => n().visible.edges.values(), (a) => a.id, (a, c) => {
    qv(a, {
      get edge() {
        return u(c);
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
      set store(l) {
        n(l);
      }
    });
  }), V(e, r), ne();
}
var n0 = /* @__PURE__ */ Q('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function Ol(e, t) {
  te(t, !0);
  let n = L(t, "x", 3, 0), r = L(t, "y", 3, 0), o = L(t, "width", 3, 0), i = L(t, "height", 3, 0), s = L(t, "isVisible", 3, !0);
  var a = me(), c = le(a);
  {
    var l = (d) => {
      var h = n0();
      let f;
      ie((g) => f = Ye(h, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : ft(o()),
          height: typeof i() == "string" ? i() : ft(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), V(d, h);
    };
    se(c, (d) => {
      s() && d(l);
    });
  }
  V(e, a), ne();
}
var r0 = /* @__PURE__ */ Q("<div><!></div>");
function o0(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ ce(void 0);
  tt(() => {
    t.store.disableKeyboardA11y || u(n)?.focus({ preventScroll: !0 });
  });
  let r = /* @__PURE__ */ _(() => {
    if (t.store.selectionRectMode === "nodes") {
      t.store.nodes;
      const d = ur(t.store.nodeLookup, { filter: (h) => !!h.selected });
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
    Object.prototype.hasOwnProperty.call(Zr, d.key) && (d.preventDefault(), t.store.moveSelectedNodes(Zr[d.key], d.shiftKey ? 4 : 1));
  }
  var a = me(), c = le(a);
  {
    var l = (d) => {
      var h = r0();
      h.__contextmenu = o, h.__click = i, h.__keydown = function(...v) {
        (t.store.disableKeyboardA11y ? void 0 : s)?.apply(this, v);
      };
      let f;
      var g = Z(h);
      Ol(g, { width: "100%", height: "100%", x: 0, y: 0 }), Pe(h, (v, p) => Dl?.(v, p), () => ({
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
      })), sr(h, (v) => H(n, v), () => u(n)), ie(
        (v) => {
          Oe(h, 1, Yt(["svelte-flow__selection-wrapper", t.store.noPanClass]), "svelte-sf2y5e"), j(h, "role", t.store.disableKeyboardA11y ? void 0 : "button"), j(h, "tabindex", t.store.disableKeyboardA11y ? void 0 : -1), f = Ye(h, "", f, v);
        },
        [
          () => ({
            width: ft(u(r).width),
            height: ft(u(r).height),
            transform: `translate(${u(r).x ?? ""}px, ${u(r).y ?? ""}px)`
          })
        ]
      ), V(d, h);
    };
    se(c, (d) => {
      t.store.selectionRectMode === "nodes" && u(r) && xt(u(r).x) && xt(u(r).y) && d(l);
    });
  }
  V(e, a), ne();
}
$r(["contextmenu", "click", "keydown"]);
function i0(e) {
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
    const c = Array.isArray(r) ? r : [r], l = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
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
          if (l !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const S = Array.isArray(f) ? f : [f];
          let C = !1;
          for (const b of S)
            if ((Array.isArray(b) ? b : [b]).reduce(
              (T, z) => T | i0(z),
              0
            ) === l) {
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
  return n && (s = To(e, o, i)), {
    update: (a) => {
      const { enabled: c = !0, type: l = "keydown" } = a;
      n && (!c || o !== l) ? s?.() : !n && c && (s = To(e, l, i)), n = c, o = l, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function Rl() {
  const e = /* @__PURE__ */ _(qt), t = (i) => {
    const s = xs(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? hg(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, c = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Pn(c);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = ze(() => u(e).nodes).map((c) => {
      if (c.id === i) {
        const l = typeof s == "function" ? s(c) : s;
        return a?.replace && xs(l) ? l : { ...c, ...l };
      }
      return c;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = ze(() => u(e).edges).map((c) => {
      if (c.id === i) {
        const l = typeof s == "function" ? s(c) : s;
        return a.replace && pv(l) ? l : { ...c, ...l };
      }
      return c;
    });
  }
  const o = (i) => u(e).nodeLookup.get(i);
  return {
    zoomIn: u(e).zoomIn,
    zoomOut: u(e).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? u(e).nodes : Ns(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : Ns(u(e).edgeLookup, i),
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
    getViewport: () => Fs(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = _i(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
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
      const c = us(i), l = c ? i : t(i);
      return l ? (a || u(e).nodes).filter((d) => {
        const h = u(e).nodeLookup.get(d.id);
        if (!h || !c && d.id === i.id)
          return !1;
        const f = Pn(h), g = Jn(f, l);
        return s && g > 0 || g >= f.width * f.height || g >= l.width * l.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = us(i) ? i : t(i);
      if (!l)
        return !1;
      const d = Jn(l, s);
      return a && d > 0 || d >= s.width * s.height || d >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: c } = await cg({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = ze(() => u(e).nodes).filter((l) => !a.some(({ id: d }) => d === l.id))), c && (u(e).edges = ze(() => u(e).edges).filter((l) => !c.some(({ id: d }) => d === l.id))), (a.length > 0 || c.length > 0) && u(e).ondelete?.({ nodes: a, edges: c }), { deletedNodes: a, deletedEdges: c };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: c, y: l, zoom: d } = u(e).viewport, { x: h, y: f } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - f };
      return fr(g, [c, l, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: c } = u(e).viewport, { x: l, y: d } = u(e).domNode.getBoundingClientRect(), h = Yr(i, [s, a, c]);
      return { x: h.x + l, y: h.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...u(e).nodes],
      edges: [...u(e).edges],
      viewport: { ...u(e).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const c = u(e).nodeLookup.get(i)?.internals.userNode;
      if (!c)
        return;
      const l = typeof s == "function" ? s(c) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? l : { ...d.data, ...l }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => ig(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Ns(e, t) {
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
function s0(e, t) {
  te(t, !0);
  let n = L(t, "store", 15), r = L(t, "selectionKey", 3, "Shift"), o = L(t, "multiSelectionKey", 19, () => Qn() ? "Meta" : "Control"), i = L(t, "deleteKey", 3, "Backspace"), s = L(t, "panActivationKey", 3, " "), a = L(t, "zoomActivationKey", 19, () => Qn() ? "Meta" : "Control"), { deleteElements: c } = Rl();
  function l(p) {
    return p !== null && typeof p == "object";
  }
  function d(p) {
    return l(p) ? p.modifier || [] : [];
  }
  function h(p) {
    return p == null ? "" : l(p) ? p.key : p;
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
  nn("blur", Te, g), nn("contextmenu", Te, g), Pe(Te, (p, m) => rt?.(p, m), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Pe(Te, (p, m) => rt?.(p, m), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Pe(Te, (p, m) => rt?.(p, m), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Pe(Te, (p, m) => rt?.(p, m), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Pe(Te, (p, m) => rt?.(p, m), () => ({
    trigger: f(i(), (p) => {
      !(p.originalEvent.ctrlKey || p.originalEvent.metaKey || p.originalEvent.shiftKey) && !hl(p.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), Pe(Te, (p, m) => rt?.(p, m), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Pe(Te, (p, m) => rt?.(p, m), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Pe(Te, (p, m) => rt?.(p, m), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Pe(Te, (p, m) => rt?.(p, m), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Pe(Te, (p, m) => rt?.(p, m), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ne();
}
var a0 = /* @__PURE__ */ ye('<path fill="none" class="svelte-flow__connection-path"></path>'), l0 = /* @__PURE__ */ ye('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function c0(e, t) {
  te(t, !0);
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
      case Ot.Bezier: {
        const [a] = vl(s);
        return a;
      }
      case Ot.Straight: {
        const [a] = ml(s);
        return a;
      }
      case Ot.Step:
      case Ot.SmoothStep: {
        const [a] = wi({
          ...s,
          borderRadius: t.type === Ot.Step ? 0 : void 0
        });
        return a;
      }
    }
  });
  var r = me(), o = le(r);
  {
    var i = (s) => {
      var a = l0(), c = Z(a), l = Z(c);
      {
        var d = (f) => {
          var g = me(), v = le(g);
          eo(v, () => t.LineComponent, (p, m) => {
            m(p, {});
          }), V(f, g);
        }, h = (f) => {
          var g = a0();
          ie(() => {
            j(g, "d", u(n)), Ye(g, t.style);
          }), V(f, g);
        };
        se(l, (f) => {
          t.LineComponent ? f(d) : f(h, !1);
        });
      }
      ie(
        (f) => {
          j(a, "width", t.store.width), j(a, "height", t.store.height), Ye(a, t.containerStyle), Oe(c, 0, f);
        },
        [
          () => Yt([
            "svelte-flow__connection",
            rg(t.store.connection.isValid)
          ])
        ]
      ), V(s, a);
    };
    se(o, (s) => {
      t.store.connection.inProgress && s(i);
    });
  }
  V(e, r), ne();
}
var u0 = /* @__PURE__ */ Q("<div><!></div>");
function Ci(e, t) {
  te(t, !0);
  let n = L(t, "position", 3, "top-right"), r = /* @__PURE__ */ Xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "style",
    "class",
    "children"
  ]), o = /* @__PURE__ */ _(() => `${n()}`.split("-"));
  var i = u0();
  Zt(i, (a) => ({ class: a, style: t.style, ...r }), [
    () => [
      "svelte-flow__panel",
      t.class,
      ...u(o)
    ]
  ]);
  var s = Z(i);
  He(s, () => t.children ?? Ve), V(e, i), ne();
}
var d0 = /* @__PURE__ */ Q('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function f0(e, t) {
  te(t, !0);
  let n = L(t, "position", 3, "bottom-right");
  var r = me(), o = le(r);
  {
    var i = (s) => {
      Ci(s, {
        get position() {
          return n();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (a, c) => {
          var l = d0();
          V(a, l);
        },
        $$slots: { default: !0 }
      });
    };
    se(o, (s) => {
      t.proOptions?.hideAttribution || s(i);
    });
  }
  V(e, r), ne();
}
var h0 = /* @__PURE__ */ Q("<div><!></div>");
function g0(e, t) {
  te(t, !0);
  let n = L(t, "domNode", 15), r = L(t, "clientWidth", 15), o = L(t, "clientHeight", 15), i = /* @__PURE__ */ _(() => t.rest.class), s = /* @__PURE__ */ _(() => Vc(t.rest, [
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
  var c = h0();
  Zt(
    c,
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
      [_t]: d
    }),
    [
      () => ({
        width: ft(t.width),
        height: ft(t.height)
      })
    ],
    void 0,
    void 0,
    "svelte-mkap6j"
  );
  var l = Z(c);
  He(l, () => t.children ?? Ve), sr(c, (d) => n(d), () => n()), Fi(c, "clientHeight", o), Fi(c, "clientWidth", r), V(e, c), ne();
}
var v0 = /* @__PURE__ */ Q('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), p0 = /* @__PURE__ */ Q("<!> <!>", 1), m0 = /* @__PURE__ */ Q("<!> <!> <!> <!> <!>", 1);
function y0(e, t) {
  te(t, !0);
  let n = L(t, "paneClickDistance", 3, 1), r = L(t, "nodeClickDistance", 3, 1), o = L(t, "panOnScrollMode", 19, () => wn.Free), i = L(t, "preventScrolling", 3, !0), s = L(t, "zoomOnScroll", 3, !0), a = L(t, "zoomOnDoubleClick", 3, !0), c = L(t, "zoomOnPinch", 3, !0), l = L(t, "panOnScroll", 3, !1), d = L(t, "panOnScrollSpeed", 3, 0.5), h = L(t, "panOnDrag", 3, !0), f = L(t, "selectionOnDrag", 3, !1), g = L(t, "connectionLineType", 19, () => Ot.Bezier), v = L(t, "nodes", 31, () => st([])), p = L(t, "edges", 31, () => st([])), m = L(t, "viewport", 15, void 0), w = /* @__PURE__ */ Xt(t, [
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
  ]), S = Tl({
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
  const C = jo(Xr);
  C && C.setStore && C.setStore(S), Jo(Xr, {
    provider: !1,
    getStore() {
      return S;
    }
  }), tt(() => {
    const b = { nodes: S.selectedNodes, edges: S.selectedEdges };
    ze(() => t.onselectionchange)?.(b);
    for (const A of S.selectionChangeHandlers.values())
      A(b);
  }), to(() => {
    S.reset();
  }), g0(e, {
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
      var T = m0(), z = le(T);
      s0(z, {
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
      var M = U(z, 2);
      Iv(M, {
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
          return l();
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
          Ov(E, {
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
              var k = p0(), D = le(k);
              Hv(D, {
                get store() {
                  return S;
                },
                set store(I) {
                  S = I;
                },
                children: (I, R) => {
                  var F = v0(), W = U(le(F), 2);
                  t0(W, {
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
                    set store(G) {
                      S = G;
                    }
                  });
                  var q = U(W, 4);
                  c0(q, {
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
                    set store(G) {
                      S = G;
                    }
                  });
                  var K = U(q, 2);
                  Xv(K, {
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
                    set store(G) {
                      S = G;
                    }
                  });
                  var X = U(K, 2);
                  o0(X, {
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
                    set store(G) {
                      S = G;
                    }
                  }), V(I, F);
                },
                $$slots: { default: !0 }
              });
              var O = U(D, 2);
              {
                let I = /* @__PURE__ */ _(() => !!(S.selectionRect && S.selectionRectMode === "user")), R = /* @__PURE__ */ _(() => S.selectionRect?.width), F = /* @__PURE__ */ _(() => S.selectionRect?.height), W = /* @__PURE__ */ _(() => S.selectionRect?.x), q = /* @__PURE__ */ _(() => S.selectionRect?.y);
                Ol(O, {
                  get isVisible() {
                    return u(I);
                  },
                  get width() {
                    return u(R);
                  },
                  get height() {
                    return u(F);
                  },
                  get x() {
                    return u(W);
                  },
                  get y() {
                    return u(q);
                  }
                });
              }
              V(y, k);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var B = U(M, 2);
      f0(B, {
        get proOptions() {
          return t.proOptions;
        },
        get position() {
          return t.attributionPosition;
        }
      });
      var Y = U(B, 2);
      Bv(Y, {
        get store() {
          return S;
        }
      });
      var P = U(Y, 2);
      He(P, () => t.children ?? Ve), V(b, T);
    },
    $$slots: { default: !0 }
  }), ne();
}
function _0(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ ce(Tl({ props: {}, nodes: [], edges: [] }));
  Jo(Xr, {
    provider: !0,
    getStore() {
      return u(n);
    },
    setStore: (i) => {
      H(n, i);
    }
  }), to(() => {
    u(n).reset();
  });
  var r = me(), o = le(r);
  He(o, () => t.children ?? Ve), V(e, r), ne();
}
var w0 = /* @__PURE__ */ Q("<button><!></button>");
function xr(e, t) {
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
  var r = w0();
  Zt(r, () => ({
    type: "button",
    onclick: t.onclick,
    class: ["svelte-flow__controls-button", t.class],
    ...n,
    [_t]: {
      "--xy-controls-button-background-color-props": t.bgColor,
      "--xy-controls-button-background-color-hover-props": t.bgColorHover,
      "--xy-controls-button-color-props": t.color,
      "--xy-controls-button-color-hover-props": t.colorHover,
      "--xy-controls-button-border-color-props": t.borderColor
    }
  }));
  var o = Z(r);
  He(o, () => t.children ?? Ve), V(e, r);
}
var b0 = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function x0(e) {
  var t = b0();
  V(e, t);
}
var E0 = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function k0(e) {
  var t = E0();
  V(e, t);
}
var S0 = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function C0(e) {
  var t = S0();
  V(e, t);
}
var N0 = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function P0(e) {
  var t = N0();
  V(e, t);
}
var M0 = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function A0(e) {
  var t = M0();
  V(e, t);
}
var T0 = /* @__PURE__ */ Q("<!> <!>", 1), D0 = /* @__PURE__ */ Q("<!> <!> <!> <!> <!> <!>", 1);
function I0(e, t) {
  te(t, !0);
  let n = L(t, "position", 3, "bottom-left"), r = L(t, "orientation", 3, "vertical"), o = L(t, "showZoom", 3, !0), i = L(t, "showFitView", 3, !0), s = L(t, "showLock", 3, !0), a = /* @__PURE__ */ Xt(t, [
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
  ]), c = /* @__PURE__ */ _(qt);
  const l = {
    bgColor: t.buttonBgColor,
    bgColorHover: t.buttonBgColorHover,
    color: t.buttonColor,
    colorHover: t.buttonColorHover,
    borderColor: t.buttonBorderColor
  };
  let d = /* @__PURE__ */ _(() => u(c).nodesDraggable || u(c).nodesConnectable || u(c).elementsSelectable), h = /* @__PURE__ */ _(() => u(c).viewport.zoom <= u(c).minZoom), f = /* @__PURE__ */ _(() => u(c).viewport.zoom >= u(c).maxZoom), g = /* @__PURE__ */ _(() => u(c).ariaLabelConfig), v = /* @__PURE__ */ _(() => r() === "horizontal" ? "horizontal" : "vertical");
  const p = () => {
    u(c).zoomIn();
  }, m = () => {
    u(c).zoomOut();
  }, w = () => {
    u(c).fitView(t.fitViewOptions);
  }, S = () => {
    let C = !u(d);
    u(c).nodesDraggable = C, u(c).nodesConnectable = C, u(c).elementsSelectable = C;
  };
  {
    let C = /* @__PURE__ */ _(() => [
      "svelte-flow__controls",
      u(v),
      t.class
    ]);
    Ci(e, zt(
      {
        get class() {
          return u(C);
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
        children: (b, A) => {
          var T = D0(), z = le(T);
          {
            var M = (I) => {
              var R = me(), F = le(R);
              He(F, () => t.before), V(I, R);
            };
            se(z, (I) => {
              t.before && I(M);
            });
          }
          var B = U(z, 2);
          {
            var Y = (I) => {
              var R = T0(), F = le(R);
              xr(F, zt(
                {
                  onclick: p,
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
                () => l,
                {
                  children: (q, K) => {
                    x0(q);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var W = U(F, 2);
              xr(W, zt(
                {
                  onclick: m,
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
                () => l,
                {
                  children: (q, K) => {
                    k0(q);
                  },
                  $$slots: { default: !0 }
                }
              )), V(I, R);
            };
            se(B, (I) => {
              o() && I(Y);
            });
          }
          var P = U(B, 2);
          {
            var E = (I) => {
              xr(I, zt(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: w,
                  get title() {
                    return u(g)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.fitView.ariaLabel"];
                  }
                },
                () => l,
                {
                  children: (R, F) => {
                    C0(R);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(P, (I) => {
              i() && I(E);
            });
          }
          var N = U(P, 2);
          {
            var y = (I) => {
              xr(I, zt(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: S,
                  get title() {
                    return u(g)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.interactive.ariaLabel"];
                  }
                },
                () => l,
                {
                  children: (R, F) => {
                    var W = me(), q = le(W);
                    {
                      var K = (G) => {
                        A0(G);
                      }, X = (G) => {
                        P0(G);
                      };
                      se(q, (G) => {
                        u(d) ? G(K) : G(X, !1);
                      });
                    }
                    V(R, W);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            se(N, (I) => {
              s() && I(y);
            });
          }
          var x = U(N, 2);
          {
            var k = (I) => {
              var R = me(), F = le(R);
              He(F, () => t.children), V(I, R);
            };
            se(x, (I) => {
              t.children && I(k);
            });
          }
          var D = U(x, 2);
          {
            var O = (I) => {
              var R = me(), F = le(R);
              He(F, () => t.after), V(I, R);
            };
            se(D, (I) => {
              t.after && I(O);
            });
          }
          V(b, T);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ne();
}
var Vt;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Vt || (Vt = {}));
var z0 = /* @__PURE__ */ ye("<circle></circle>");
function O0(e, t) {
  var n = z0();
  ie(() => {
    j(n, "cx", t.radius), j(n, "cy", t.radius), j(n, "r", t.radius), Oe(n, 0, Yt(["svelte-flow__background-pattern", "dots", t.class]));
  }), V(e, n);
}
var R0 = /* @__PURE__ */ ye("<path></path>");
function H0(e, t) {
  te(t, !0);
  var n = R0();
  ie(() => {
    j(n, "stroke-width", t.lineWidth), j(n, "d", `M${t.dimensions[0] / 2} 0 V${t.dimensions[1]} M0 ${t.dimensions[1] / 2} H${t.dimensions[0]}`), Oe(n, 0, Yt([
      "svelte-flow__background-pattern",
      t.variant,
      t.class
    ]));
  }), V(e, n), ne();
}
const L0 = {
  [Vt.Dots]: 1,
  [Vt.Lines]: 1,
  [Vt.Cross]: 6
};
var V0 = /* @__PURE__ */ ye('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function B0(e, t) {
  te(t, !0);
  let n = L(t, "variant", 19, () => Vt.Dots), r = L(t, "gap", 3, 20), o = L(t, "lineWidth", 3, 1), i = /* @__PURE__ */ _(qt), s = /* @__PURE__ */ _(() => n() === Vt.Dots), a = /* @__PURE__ */ _(() => n() === Vt.Cross), c = /* @__PURE__ */ _(() => Array.isArray(r()) ? r() : [r(), r()]), l = /* @__PURE__ */ _(() => `background-pattern-${u(i).flowId}-${t.id ?? ""}`), d = /* @__PURE__ */ _(() => [
    u(c)[0] * u(i).viewport.zoom || 1,
    u(c)[1] * u(i).viewport.zoom || 1
  ]), h = /* @__PURE__ */ _(() => (t.size ?? L0[n()]) * u(i).viewport.zoom), f = /* @__PURE__ */ _(() => u(a) ? [u(h), u(h)] : u(d)), g = /* @__PURE__ */ _(() => u(s) ? [u(h) / 2, u(h) / 2] : [
    u(f)[0] / 2,
    u(f)[1] / 2
  ]);
  var v = V0();
  let p;
  var m = Z(v), w = Z(m);
  {
    var S = (A) => {
      {
        let T = /* @__PURE__ */ _(() => u(h) / 2);
        O0(A, {
          get radius() {
            return u(T);
          },
          get class() {
            return t.patternClass;
          }
        });
      }
    }, C = (A) => {
      H0(A, {
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
    se(w, (A) => {
      u(s) ? A(S) : A(C, !1);
    });
  }
  var b = U(m);
  ie(() => {
    Oe(v, 0, Yt([
      "svelte-flow__background",
      "svelte-flow__container",
      t.class
    ])), p = Ye(v, "", p, {
      "--xy-background-color-props": t.bgColor,
      "--xy-background-pattern-color-props": t.patternColor
    }), j(m, "id", u(l)), j(m, "x", u(i).viewport.x % u(d)[0]), j(m, "y", u(i).viewport.y % u(d)[1]), j(m, "width", u(d)[0]), j(m, "height", u(d)[1]), j(m, "patternTransform", `translate(-${u(g)[0]},-${u(g)[1]})`), j(b, "fill", `url(#${u(l)})`);
  }), V(e, v), ne();
}
var F0 = /* @__PURE__ */ ye("<rect></rect>");
function K0(e, t) {
  let n = L(t, "borderRadius", 3, 5), r = L(t, "strokeWidth", 3, 2);
  var o = me(), i = le(o);
  {
    var s = (c) => {
      const l = /* @__PURE__ */ _(() => t.nodeComponent);
      var d = me(), h = le(d);
      eo(h, () => u(l), (f, g) => {
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
      }), V(c, d);
    }, a = (c) => {
      var l = F0();
      let d, h;
      ie(() => {
        d = Oe(l, 0, Yt(["svelte-flow__minimap-node", t.class]), null, d, { selected: t.selected }), j(l, "x", t.x), j(l, "y", t.y), j(l, "rx", n()), j(l, "ry", n()), j(l, "width", t.width), j(l, "height", t.height), j(l, "shape-rendering", t.shapeRendering), h = Ye(l, "", h, {
          fill: t.color,
          stroke: t.strokeColor,
          "stroke-width": r()
        });
      }), V(c, l);
    };
    se(i, (c) => {
      t.nodeComponent ? c(s) : c(a, !1);
    });
  }
  V(e, o);
}
function Y0(e, t) {
  const n = Wg({
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
const ko = (e) => e instanceof Function ? e : () => e;
var Z0 = /* @__PURE__ */ ye("<title> </title>"), X0 = /* @__PURE__ */ ye('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), W0 = /* @__PURE__ */ Q('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function q0(e, t) {
  te(t, !0);
  let n = L(t, "position", 3, "bottom-right"), r = L(t, "nodeStrokeColor", 3, "transparent"), o = L(t, "nodeClass", 3, ""), i = L(t, "nodeBorderRadius", 3, 5), s = L(t, "nodeStrokeWidth", 3, 2), a = L(t, "width", 3, 200), c = L(t, "height", 3, 150), l = L(t, "pannable", 3, !0), d = L(t, "zoomable", 3, !0), h = /* @__PURE__ */ Xt(t, [
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
  ]), f = /* @__PURE__ */ _(qt), g = /* @__PURE__ */ _(() => u(f).ariaLabelConfig);
  const v = t.nodeColor === void 0 ? void 0 : ko(t.nodeColor), p = ko(r()), m = ko(o()), w = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ _(() => `svelte-flow__minimap-desc-${u(f).flowId}`), C = /* @__PURE__ */ _(() => ({
    x: -u(f).viewport.x / u(f).viewport.zoom,
    y: -u(f).viewport.y / u(f).viewport.zoom,
    width: u(f).width / u(f).viewport.zoom,
    height: u(f).height / u(f).viewport.zoom
  })), b = /* @__PURE__ */ _(() => cl(ur(u(f).nodeLookup, { filter: (O) => !O.hidden }), u(C))), A = /* @__PURE__ */ _(() => u(b).width / a()), T = /* @__PURE__ */ _(() => u(b).height / c()), z = /* @__PURE__ */ _(() => Math.max(u(A), u(T))), M = /* @__PURE__ */ _(() => u(z) * a()), B = /* @__PURE__ */ _(() => u(z) * c()), Y = /* @__PURE__ */ _(() => 5 * u(z)), P = /* @__PURE__ */ _(() => u(b).x - (u(M) - u(b).width) / 2 - u(Y)), E = /* @__PURE__ */ _(() => u(b).y - (u(B) - u(b).height) / 2 - u(Y)), N = /* @__PURE__ */ _(() => u(M) + u(Y) * 2), y = /* @__PURE__ */ _(() => u(B) + u(Y) * 2);
  const x = () => u(z);
  var k = W0(), D = le(k);
  {
    let O = /* @__PURE__ */ _(() => ["svelte-flow__minimap", t.class]);
    Qc(D, () => ({ "--xy-minimap-background-color-props": t.bgColor })), Ci(D.lastChild, zt(
      {
        get position() {
          return n();
        },
        get class() {
          return u(O);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => h,
      {
        children: (I, R) => {
          var F = me(), W = le(F);
          {
            var q = (K) => {
              var X = X0();
              let G;
              var J = Z(X);
              {
                var ee = (re) => {
                  var pe = Z0(), oe = Z(pe);
                  ie(() => {
                    j(pe, "id", u(S)), _e(oe, t.ariaLabel ?? u(g)["minimap.ariaLabel"]);
                  }), V(re, pe);
                };
                se(J, (re) => {
                  (t.ariaLabel ?? u(g)["minimap.ariaLabel"]) && re(ee);
                });
              }
              var fe = U(J);
              Nt(fe, 17, () => u(f).nodes, (re) => re.id, (re, pe) => {
                const oe = /* @__PURE__ */ _(() => u(f).nodeLookup.get(u(pe).id));
                var Ae = me(), At = le(Ae);
                {
                  var Tt = (vt) => {
                    const de = /* @__PURE__ */ _(() => Wt(u(oe)));
                    {
                      let we = /* @__PURE__ */ _(() => v?.(u(oe))), Ue = /* @__PURE__ */ _(() => p(u(oe))), ge = /* @__PURE__ */ _(() => m(u(oe)));
                      K0(vt, zt(
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
                        () => u(de),
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
                            return u(Ue);
                          },
                          get strokeWidth() {
                            return s();
                          },
                          get shapeRendering() {
                            return w;
                          },
                          get class() {
                            return u(ge);
                          }
                        }
                      ));
                    }
                  };
                  se(At, (vt) => {
                    u(oe) && ul(u(oe)) && !u(oe).hidden && vt(Tt);
                  });
                }
                V(re, Ae);
              });
              var xe = U(fe);
              Pe(X, (re, pe) => Y0?.(re, pe), () => ({
                store: u(f),
                panZoom: u(f).panZoom,
                getViewScale: x,
                translateExtent: u(f).translateExtent,
                width: u(f).width,
                height: u(f).height,
                inversePan: t.inversePan,
                zoomStep: t.zoomStep,
                pannable: l(),
                zoomable: d()
              })), ie(() => {
                j(X, "width", a()), j(X, "height", c()), j(X, "viewBox", `${u(P) ?? ""} ${u(E) ?? ""} ${u(N) ?? ""} ${u(y) ?? ""}`), j(X, "aria-labelledby", u(S)), G = Ye(X, "", G, {
                  "--xy-minimap-mask-background-color-props": t.maskColor,
                  "--xy-minimap-mask-stroke-color-props": t.maskStrokeColor,
                  "--xy-minimap-mask-stroke-width-props": t.maskStrokeWidth ? t.maskStrokeWidth * u(z) : void 0
                }), j(xe, "d", `M${u(P) - u(Y)},${u(E) - u(Y)}h${u(N) + u(Y) * 2}v${u(y) + u(Y) * 2}h${-u(N) - u(Y) * 2}z
      M${u(C).x ?? ""},${u(C).y ?? ""}h${u(C).width ?? ""}v${u(C).height ?? ""}h${-u(C).width}z`);
              }), V(K, X);
            };
            se(W, (K) => {
              u(f).panZoom && K(q);
            });
          }
          V(I, F);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  V(e, k), ne();
}
var G0 = /* @__PURE__ */ Q('<div class="group flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm cursor-grab hover:border-blue-400 hover:shadow-md transition-all active:cursor-grabbing" draggable="true" role="listitem" aria-roledescription="node blueprint"><div><!></div> <div><div class="text-xs font-bold text-slate-800 tracking-tight"> </div> <div class="text-[10px] text-slate-400 mt-0.5"> </div></div></div>'), U0 = /* @__PURE__ */ Q('<div class="w-64 bg-slate-50 border-r border-slate-200 p-5 flex flex-col gap-5 overflow-y-auto"><div><h3 class="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Components</h3> <p class="text-[10px] text-slate-500 mt-1">Drag to build workflow</p></div> <div class="flex flex-col gap-3" role="list"></div> <div class="mt-auto p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl text-white shadow-xl shadow-blue-200/50"><div class="flex items-center gap-2 mb-2"><span class="text-sm">💡</span> <span class="text-[10px] font-bold uppercase tracking-wider">Pro Tip</span></div> <p class="text-[10px] leading-relaxed opacity-90">Connect nodes by clicking and dragging between handles. Use <kbd class="px-1 py-0.5 bg-white/20 rounded">CMD</kbd> to multi-select.</p></div></div>');
function j0(e, t) {
  te(t, !1);
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
  Pa();
  var o = U0(), i = U(Z(o), 2);
  Nt(i, 5, () => n, Xn, (s, a) => {
    var c = G0(), l = Z(c), d = Z(l);
    ba(d, () => u(a).icon);
    var h = U(l, 2), f = Z(h), g = Z(f), v = U(f, 2), p = Z(v);
    ie(
      (m) => {
        Oe(l, 1, `w-10 h-10 ${u(a).color ?? ""} rounded-lg flex items-center justify-center text-white shadow-lg shadow-${m ?? ""}-200/50 group-hover:scale-110 transition-transform`), _e(g, u(a).label), _e(p, u(a).description);
      },
      [() => u(a).color.split("-")[1]]
    ), nn("dragstart", c, (m) => r(m, u(a).type, u(a).data)), V(s, c);
  }), V(e, o), ne();
}
var J0 = /* @__PURE__ */ Q("<!> <!> <!>", 1), Q0 = /* @__PURE__ */ Q('<div class="flex h-[600px] w-full border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xl"><!> <div class="flex-grow relative h-full" role="presentation"><!></div></div>');
function $0(e, t) {
  te(t, !0);
  let n = L(t, "nodes", 31, () => st([])), r = L(t, "edges", 31, () => st([]));
  const { screenToFlowPosition: o } = Rl();
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
  var a = Q0(), c = Z(a);
  j0(c, {});
  var l = U(c, 2), d = Z(l);
  y0(d, {
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
      var g = J0(), v = le(g);
      I0(v, {});
      var p = U(v, 2);
      B0(p, { variant: "lines", gap: 20, size: 1, color: "#f1f5f9" });
      var m = U(p, 2);
      q0(m, {}), V(h, g);
    },
    $$slots: { default: !0 }
  }), nn("dragover", l, i), nn("drop", l, s), V(e, a), ne();
}
function ep(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function tp(e, { delay: t = 0, duration: n = 400, easing: r = ep, axis: o = "y" } = {}) {
  const i = getComputedStyle(e), s = +i.opacity, a = o === "y" ? "height" : "width", c = parseFloat(i[a]), l = o === "y" ? ["top", "bottom"] : ["left", "right"], d = l.map(
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
    css: (w) => `overflow: hidden;opacity: ${Math.min(w * 20, 1) * s};${a}: ${w * c}px;padding-${l[0]}: ${w * h}px;padding-${l[1]}: ${w * f}px;margin-${l[0]}: ${w * g}px;margin-${l[1]}: ${w * v}px;border-${l[0]}-width: ${w * p}px;border-${l[1]}-width: ${w * m}px;min-${a}: 0`
  };
}
var np = /* @__PURE__ */ Q("<option> </option>"), rp = /* @__PURE__ */ Q('<div><label for="node-type" class="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Component Type</label> <select id="node-type" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"><option> </option><!></select></div>'), op = /* @__PURE__ */ Q('<span class="text-rose-500">*</span>'), ip = /* @__PURE__ */ Q('<textarea class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"></textarea>'), sp = /* @__PURE__ */ Q('<input class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"/>'), ap = /* @__PURE__ */ Q('<div class="space-y-2"><label class="text-sm font-semibold text-slate-700 flex items-center gap-1"> <!></label> <!></div>'), lp = /* @__PURE__ */ Q('<div class="pt-4 border-t border-slate-200"><h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Configuration</h4> <div class="space-y-4"></div></div>'), cp = /* @__PURE__ */ Q('<div class="w-80 border-l border-slate-200 bg-slate-50 flex flex-col h-full shadow-inner"><div class="p-4 border-b border-slate-200 bg-white flex items-center justify-between"><h3 class="font-bold text-slate-800 uppercase tracking-wider text-xs">Node Settings</h3> <button class="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Close Settings"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg></button></div> <div class="flex-grow overflow-y-auto p-4 space-y-6"><div class="space-y-4"><div><label for="node-label" class="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Display Label</label> <input id="node-label" type="text" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"/></div> <!></div> <!></div> <div class="p-4 bg-white border-t border-slate-200"><p class="text-[10px] italic text-slate-400 break-all"> </p></div></div>');
function up(e, t) {
  te(t, !0);
  let n = L(t, "node", 15, null), r = L(t, "availableComponents", 19, () => ({})), o = /* @__PURE__ */ _(() => n()?.type), i = /* @__PURE__ */ _(() => u(o) === "trigger" ? r().triggers : u(o) === "action" ? r().actions : u(o) === "condition" ? r().conditions : []), s = /* @__PURE__ */ _(() => u(i)?.find((f) => f.identifier === n()?.data?.identifier));
  function a(f) {
    n(n().data.label = f.target.value, !0);
  }
  function c(f, g) {
    n().data.config || n(n().data.config = {}, !0), n(n().data.config[f] = g, !0);
  }
  var l = me(), d = le(l);
  {
    var h = (f) => {
      var g = cp(), v = Z(g), p = U(Z(v), 2);
      p.__click = function(...P) {
        t.onClose?.apply(this, P);
      };
      var m = U(v, 2), w = Z(m), S = Z(w), C = U(Z(S), 2);
      C.__input = a;
      var b = U(S, 2);
      {
        var A = (P) => {
          var E = rp(), N = U(Z(E), 2);
          N.__change = (O) => {
            const I = u(i).find((R) => R.identifier === O.target.value);
            n(n().data.identifier = I.identifier, !0), n(n().data.description = I.description, !0), n(n().data.config = {}, !0);
          };
          var y = Z(N), x = Z(y);
          y.value = y.__value = "";
          var k = U(y);
          Nt(k, 17, () => u(i), Xn, (O, I) => {
            var R = np(), F = Z(R), W = {};
            ie(() => {
              _e(F, u(I).name), W !== (W = u(I).identifier) && (R.value = (R.__value = u(I).identifier) ?? "");
            }), V(O, R);
          });
          var D;
          ka(N), ie(() => {
            _e(x, `Select a ${u(o) ?? ""}...`), D !== (D = n().data.identifier) && (N.value = (N.__value = n().data.identifier) ?? "", Dr(N, n().data.identifier));
          }), V(P, E);
        };
        se(b, (P) => {
          u(i) && u(i).length > 0 && P(A);
        });
      }
      var T = U(w, 2);
      {
        var z = (P) => {
          var E = lp(), N = U(Z(E), 2);
          Nt(N, 21, () => u(s).schema, Xn, (y, x) => {
            var k = ap(), D = Z(k), O = Z(D), I = U(O);
            {
              var R = (K) => {
                var X = op();
                V(K, X);
              };
              se(I, (K) => {
                u(x).required && K(R);
              });
            }
            var F = U(D, 2);
            {
              var W = (K) => {
                var X = ip();
                X.__input = (G) => c(u(x).name, G.target.value), ie(() => {
                  j(X, "id", `field-${u(x).name ?? ""}`), j(X, "placeholder", u(x).placeholder), go(X, n().data.config?.[u(x).name] || "");
                }), V(K, X);
              }, q = (K) => {
                var X = sp();
                X.__input = (G) => c(u(x).name, G.target.value), ie(() => {
                  j(X, "id", `field-${u(x).name ?? ""}`), j(X, "type", u(x).type), j(X, "placeholder", u(x).placeholder), go(X, n().data.config?.[u(x).name] || "");
                }), V(K, X);
              };
              se(F, (K) => {
                u(x).type === "textarea" ? K(W) : K(q, !1);
              });
            }
            ie(() => {
              j(D, "for", `field-${u(x).name ?? ""}`), _e(O, `${u(x).label ?? ""} `);
            }), V(y, k);
          }), V(P, E);
        };
        se(T, (P) => {
          u(s) && u(s).schema && u(s).schema.length > 0 && P(z);
        });
      }
      var M = U(m, 2), B = Z(M), Y = Z(B);
      ie(() => {
        go(C, n().data.label), _e(Y, `ID: ${n().id ?? ""}`);
      }), su(3, g, () => tp, () => ({ axis: "x" })), V(f, g);
    };
    se(d, (f) => {
      n() && f(h);
    });
  }
  V(e, l), ne();
}
$r(["click", "input", "change"]);
var dp = /* @__PURE__ */ Q('<p class="text-[10px] leading-relaxed text-slate-500 mb-2 italic"> </p>'), fp = /* @__PURE__ */ Q('<div class="relative w-3 h-3" role="presentation"><!></div>'), hp = /* @__PURE__ */ Q('<div class="relative w-3 h-3" role="presentation"><!></div>'), gp = /* @__PURE__ */ Q('<div class="relative group" role="presentation"><div><div><span class="text-white"><!></span> <span class="text-[10px] font-bold uppercase tracking-wider text-white"> </span></div> <div><!> <div><!></div></div></div> <div class="absolute -left-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div> <div class="absolute -right-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div></div>');
function Ni(e, t) {
  te(t, !0);
  let n = L(t, "type", 3, "default"), r = L(t, "inputs", 19, () => []), o = L(t, "outputs", 19, () => []);
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
  var a = gp(), c = Z(a), l = Z(c), d = Z(l), h = Z(d);
  ba(h, () => u(s).icon);
  var f = U(d, 2), g = Z(f), v = U(l, 2), p = Z(v);
  {
    var m = (A) => {
      var T = dp(), z = Z(T);
      ie(() => _e(z, t.data.description)), V(A, T);
    };
    se(p, (A) => {
      t.data.description && A(m);
    });
  }
  var w = U(p, 2), S = Z(w);
  He(S, () => t.children ?? Ve);
  var C = U(c, 2);
  Nt(C, 21, r, Xn, (A, T) => {
    var z = fp(), M = Z(z);
    Bt(M, {
      type: "target",
      get position() {
        return $.Left;
      },
      get id() {
        return u(T).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
    }), V(A, z);
  });
  var b = U(C, 2);
  Nt(b, 21, o, Xn, (A, T) => {
    var z = hp(), M = Z(z);
    Bt(M, {
      type: "source",
      get position() {
        return $.Right;
      },
      get id() {
        return u(T).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
    }), V(A, z);
  }), ie(() => {
    Oe(c, 1, `min-w-[180px] max-w-[240px] bg-white rounded-xl shadow-sm border ${u(s).border ?? ""} overflow-hidden transition-all duration-200 ${t.selected ? "ring-2 ring-blue-500 ring-offset-2" : "hover:shadow-md"}`), Oe(l, 1, `${u(s).header ?? ""} px-3 py-1.5 flex items-center gap-2`), _e(g, t.data.label || "Node"), Oe(v, 1, `p-3 ${u(s).bg ?? ""}`), Oe(w, 1, `text-xs font-medium ${u(s).text ?? ""}`);
  }), V(e, a), ne();
}
var vp = /* @__PURE__ */ Q('<div class="px-2 py-1 bg-amber-100/50 rounded border border-amber-200 text-[10px] break-all font-mono"> </div>');
function pp(e, t) {
  te(t, !0);
  const n = [{ id: "output" }];
  Ni(e, {
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
      var i = me(), s = le(i);
      {
        var a = (c) => {
          var l = vp(), d = Z(l);
          ie((h) => _e(d, h), [() => t.data.event.split("\\").pop()]), V(c, l);
        };
        se(s, (c) => {
          t.data.event && c(a);
        });
      }
      V(r, i);
    },
    $$slots: { default: !0 }
  }), ne();
}
var mp = /* @__PURE__ */ Q('<div class="flex items-center gap-2 px-2 py-1 bg-blue-100/50 rounded border border-blue-200 text-[10px] font-semibold"><span>⚡</span> </div>');
function yp(e, t) {
  te(t, !0);
  const n = [{ id: "input" }], r = [{ id: "output" }];
  Ni(e, {
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
      var s = me(), a = le(s);
      {
        var c = (l) => {
          var d = mp(), h = U(Z(d));
          ie(() => _e(h, ` ${t.data.action ?? ""}`)), V(l, d);
        };
        se(a, (l) => {
          t.data.action && l(c);
        });
      }
      V(o, s);
    },
    $$slots: { default: !0 }
  }), ne();
}
var _p = /* @__PURE__ */ Q('<div class="px-2 py-1 bg-purple-100/50 rounded border border-purple-200 text-[10px] font-mono mb-6"> </div>'), wp = /* @__PURE__ */ Q('<!> <div class="absolute -right-1.5 top-[60px] flex flex-col gap-6"><div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-emerald-600 mr-2 uppercase">True</span> <!></div> <div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-rose-600 mr-2 uppercase">False</span> <!></div></div>', 1), bp = /* @__PURE__ */ Q('<div class="relative"><!></div>');
function xp(e, t) {
  te(t, !0);
  const n = [{ id: "input" }];
  var r = bp(), o = Z(r);
  Ni(o, {
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
      var a = wp(), c = le(a);
      {
        var l = (p) => {
          var m = _p(), w = Z(m);
          ie(() => _e(w, t.data.condition)), V(p, m);
        };
        se(c, (p) => {
          t.data.condition && p(l);
        });
      }
      var d = U(c, 2), h = Z(d), f = U(Z(h), 2);
      Bt(f, {
        type: "source",
        get position() {
          return $.Right;
        },
        id: "true",
        class: "!w-3 !h-3 !bg-emerald-500 !border-2 !border-white"
      });
      var g = U(h, 2), v = U(Z(g), 2);
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
  }), V(e, r), ne();
}
var Ep = /* @__PURE__ */ Q('<div class="flex h-full w-full overflow-hidden"><!> <!></div>');
function kp(e, t) {
  te(t, !0);
  const n = {
    trigger: pp,
    action: yp,
    condition: xp
  };
  let r = L(t, "nodes", 19, () => []), o = L(t, "edges", 19, () => []), i = L(t, "availableComponents", 19, () => ({})), s = /* @__PURE__ */ ce([]), a = /* @__PURE__ */ ce([]), c = /* @__PURE__ */ ce(null), l = /* @__PURE__ */ _(() => u(s).find((f) => f.id === u(c)));
  function d(f, g) {
    H(c, g.id, !0);
  }
  function h() {
    H(c, null);
  }
  tt(() => {
    t.updateState && t.updateState({
      nodes: JSON.parse(JSON.stringify(u(s))),
      edges: JSON.parse(JSON.stringify(u(a)))
    });
  }), ri(() => {
    u(s).length === 0 && H(s, r().length > 0 ? r() : [
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
    ]), u(a).length === 0 && H(a, o().length > 0 ? o() : [
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
  }), _0(e, {
    children: (f, g) => {
      var v = Ep(), p = Z(v);
      $0(p, {
        get nodeTypes() {
          return n;
        },
        onNodeClick: d,
        get nodes() {
          return u(s);
        },
        set nodes(S) {
          H(s, S);
        },
        get edges() {
          return u(a);
        },
        set edges(S) {
          H(a, S);
        }
      });
      var m = U(p, 2);
      {
        var w = (S) => {
          up(S, {
            get availableComponents() {
              return i();
            },
            onClose: h,
            get node() {
              return u(s)[u(s).findIndex((C) => C.id === u(c))];
            },
            set node(C) {
              u(s)[u(s).findIndex((b) => b.id === u(c))] = C;
            }
          });
        };
        se(m, (S) => {
          u(l) && S(w);
        });
      }
      V(f, v);
    },
    $$slots: { default: !0 }
  }), ne();
}
const Ps = () => {
  window.Alpine.data("flowBuilder", ({ state: e, components: t }) => ({
    state: e,
    components: t,
    init() {
      const n = Array.isArray(this.state?.nodes) ? JSON.parse(JSON.stringify(this.state.nodes)) : [], r = Array.isArray(this.state?.edges) ? JSON.parse(JSON.stringify(this.state.edges)) : [];
      Uc(kp, {
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
window.Alpine ? Ps() : document.addEventListener("alpine:init", Ps);
