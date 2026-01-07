var Wr = Array.isArray, Ol = Array.prototype.indexOf, qr = Array.from, Rl = Object.defineProperty, Dt = Object.getOwnPropertyDescriptor, Ns = Object.getOwnPropertyDescriptors, Ps = Object.prototype, Hl = Array.prototype, Gr = Object.getPrototypeOf, Ni = Object.isExtensible;
function Dn(e) {
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
function Ms() {
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
function Qn(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Ee = 2, qo = 4, Ur = 8, As = 1 << 24, St = 16, Ct = 32, Vt = 64, jr = 128, tt = 512, ke = 1024, Ke = 2048, ct = 4096, Fe = 8192, bt = 16384, Go = 32768, Rt = 65536, Pi = 1 << 17, Ts = 1 << 18, ln = 1 << 19, Ds = 1 << 20, yt = 1 << 25, Jt = 32768, Co = 1 << 21, Uo = 1 << 22, It = 1 << 23, at = /* @__PURE__ */ Symbol("$state"), Is = /* @__PURE__ */ Symbol("legacy props"), Vl = /* @__PURE__ */ Symbol(""), gn = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function jo(e) {
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
function Xl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Zl(e) {
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
const jl = 1, Jl = 2, zs = 4, Ql = 8, $l = 16, ec = 1, tc = 2, nc = 4, rc = 8, oc = 16, Os = 1, ic = 2, xe = /* @__PURE__ */ Symbol(), sc = "http://www.w3.org/1999/xhtml", ac = "@attach";
function lc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function cc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Rs(e) {
  return e === this.v;
}
function Hs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ls(e) {
  return !Hs(e, this.v);
}
let Pn = !1;
function uc() {
  Pn = !0;
}
const dc = [];
function Vs(e, t = !1, n = !1) {
  return xr(e, /* @__PURE__ */ new Map(), "", dc, null, n);
}
function xr(e, t, n, r, o = null, i = !1) {
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
      for (var l = 0; l < e.length; l += 1) {
        var c = e[l];
        l in e && (a[l] = xr(c, t, n, r, null, i));
      }
      return a;
    }
    if (Gr(e) === Ps) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = xr(
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
      return xr(
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
function Jo(e) {
  return (
    /** @type {T} */
    $o().get(e)
  );
}
function Qo(e, t) {
  return $o().set(e, t), t;
}
function fc(e) {
  return $o().has(e);
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
      na(r);
  }
  return t.i = !0, ge = t.p, /** @type {T} */
  {};
}
function $n() {
  return !Pn || ge !== null && ge.l === null;
}
function $o(e) {
  return ge === null && jo(), ge.c ??= new Map(hc(ge) || void 0);
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
let Zt = [];
function Bs() {
  var e = Zt;
  Zt = [], So(e);
}
function cn(e) {
  if (Zt.length === 0 && !Vn) {
    var t = Zt;
    queueMicrotask(() => {
      t === Zt && Bs();
    });
  }
  Zt.push(e);
}
function gc() {
  for (; Zt.length > 0; )
    Bs();
}
function Fs(e) {
  var t = ue;
  if (t === null)
    return ae.f |= It, e;
  if ((t.f & Go) === 0) {
    if ((t.f & jr) === 0)
      throw e;
    t.b.error(e);
  } else
    _n(e, t);
}
function _n(e, t) {
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
let de = null, Er = null, We = null, Ze = [], Jr = null, No = !1, Vn = !1;
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
    Ze = [], Er = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (Er = this, de = null, Mi(n.render_effects), Mi(n.effects), Er = null, this.#l?.resolve()), We = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(t, n) {
    t.f ^= ke;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Ct | Vt)) !== 0, s = i && (o & ke) !== 0, a = s || (o & Fe) !== 0 || this.skipped_effects.has(r);
      if ((r.f & jr) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= ke : (o & qo) !== 0 ? n.effects.push(r) : ir(r) && ((r.f & St) !== 0 && this.#i.add(r), Xn(r));
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
      (n.f & Ke) !== 0 ? this.#i.add(n) : (n.f & ct) !== 0 && this.#o.add(n), this.#c(n.deps), Ce(n, ke);
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
    if (this.activate(), Ze.length > 0) {
      if (Ks(), de !== null && de !== this)
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
          var o = Ze;
          Ze = [];
          const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const d of s)
            Ys(d, a, l, c);
          if (Ze.length > 0) {
            de = i, i.apply();
            for (const d of Ze)
              i.#s(d, r);
            i.deactivate();
          }
          Ze = o;
        }
      }
      de = null, We = t;
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
      this.#o.delete(t), Ce(t, Ke), Qt(t);
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
    return (this.#l ??= Ms()).promise;
  }
  static ensure() {
    if (de === null) {
      const t = de = new $e();
      hr.add(de), Vn || $e.enqueue(() => {
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
  var t = Vn;
  Vn = !0;
  try {
    for (var n; ; ) {
      if (gc(), Ze.length === 0 && (de?.flush(), Ze.length === 0))
        return Jr = null, /** @type {T} */
        n;
      Ks();
    }
  } finally {
    Vn = t;
  }
}
function Ks() {
  var e = Gt;
  No = !0;
  var t = null;
  try {
    var n = 0;
    for (Ar(!0); Ze.length > 0; ) {
      var r = $e.ensure();
      if (n++ > 1e3) {
        var o, i;
        pc();
      }
      r.process(Ze), zt.clear();
    }
  } finally {
    No = !1, Ar(e), Jr = null;
  }
}
function pc() {
  try {
    Xl();
  } catch (e) {
    _n(e, Jr);
  }
}
let vt = null;
function Mi(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (bt | Fe)) === 0 && ir(r) && (vt = /* @__PURE__ */ new Set(), Xn(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? ca(r) : r.fn = null), vt?.size > 0)) {
        zt.clear();
        for (const o of vt) {
          if ((o.f & (bt | Fe)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            vt.has(s) && (vt.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (bt | Fe)) === 0 && Xn(l);
          }
        }
        vt.clear();
      }
    }
    vt = null;
  }
}
function Ys(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & Ee) !== 0 ? Ys(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (Uo | St)) !== 0 && (i & Ke) === 0 && Xs(o, t, r) && (Ce(o, Ke), Qt(
        /** @type {Effect} */
        o
      ));
    }
}
function Xs(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & Ee) !== 0 && Xs(
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
  for (var t = Jr = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (No && t === ue && (n & St) !== 0 && (n & Ts) === 0)
      return;
    if ((n & (Vt | Ct)) !== 0) {
      if ((n & ke) === 0) return;
      t.f ^= ke;
    }
  }
  Ze.push(t);
}
function Zs(e) {
  let t = 0, n = $t(0), r;
  return () => {
    Kn() && (u(n), rr(() => (t === 0 && (r = Se(() => e(() => Bn(n)))), t += 1, () => {
      cn(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Bn(n));
      });
    })));
  };
}
var mc = Rt | ln | jr;
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
    ue.b, this.#e = !!this.#r.pending, this.#i = or(() => {
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
    return this.#e && (this.#u = xt(), this.#t.before(this.#u), t = this.#u), t;
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
    var n = ue, r = ae, o = ge;
    ut(this.#i), ze(this.#i), wn(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return Fs(i), null;
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
    ), fa(this.#o, this.#c)), this.#s === null && (this.#s = Ie(() => t(this.#t)));
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
    var a = ae;
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
function Ws(e, t, n, r) {
  const o = $n() ? er : ei;
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
        (s.f & bt) === 0 && _n(d, s);
      }
      i?.deactivate(), Mr();
    }).catch((c) => {
      _n(c, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Mr();
    }
  }) : l();
}
function _c() {
  var e = ue, t = ae, n = ge, r = de;
  return function(i = !0) {
    ut(e), ze(t), wn(n), i && r?.activate();
  };
}
function Mr() {
  ut(null), ze(null), wn(null);
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  var t = Ee | Ke, n = ae !== null && (ae.f & Ee) !== 0 ? (
    /** @type {Derived} */
    ae
  ) : null;
  return ue !== null && (ue.f |= ln), {
    ctx: ge,
    deps: null,
    effects: null,
    equals: Rs,
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
  ), s = !ae, a = /* @__PURE__ */ new Map();
  return Ic(() => {
    var l = Ms();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        c === de && c.committed && c.deactivate(), Mr();
      });
    } catch (f) {
      l.reject(f), Mr();
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
        for (const [v, m] of a) {
          if (a.delete(v), v === c) break;
          m.reject(gn);
        }
      }
      s && (r.update_pending_count(-1), c.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), ni(() => {
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
function _(e) {
  const t = /* @__PURE__ */ er(e);
  return ha(t), t;
}
// @__NO_SIDE_EFFECTS__
function ei(e) {
  const t = /* @__PURE__ */ er(e);
  return t.equals = Ls, t;
}
function qs(e) {
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
      return (t.f & bt) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function ti(e) {
  var t, n = ue;
  ut(xc(e));
  try {
    e.f &= ~Jt, qs(e), t = ma(e);
  } finally {
    ut(n);
  }
  return t;
}
function Gs(e) {
  var t = ti(e);
  if (e.equals(t) || (de?.is_fork || (e.v = t), e.wv = va()), !un)
    if (We !== null)
      (Kn() || de?.is_fork) && We.set(e, t);
    else {
      var n = (e.f & tt) === 0 ? ct : ke;
      Ce(e, n);
    }
}
let Po = /* @__PURE__ */ new Set();
const zt = /* @__PURE__ */ new Map();
let Us = !1;
function $t(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Rs,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function oe(e, t) {
  const n = $t(e);
  return ha(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ec(e, t = !1, n = !0) {
  const r = $t(e);
  return t || (r.equals = Ls), Pn && n && ge !== null && ge.l !== null && (ge.l.s ??= []).push(r), r;
}
function O(e, t, n = !1) {
  ae !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!st || (ae.f & Pi) !== 0) && $n() && (ae.f & (Ee | St | Uo | Pi)) !== 0 && !Et?.includes(e) && Gl();
  let r = n ? it(t) : t;
  return bn(e, r);
}
function bn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    un ? zt.set(e, t) : zt.set(e, n), e.v = t;
    var r = $e.ensure();
    r.capture(e, n), (e.f & Ee) !== 0 && ((e.f & Ke) !== 0 && ti(
      /** @type {Derived} */
      e
    ), Ce(e, (e.f & tt) !== 0 ? ke : ct)), e.wv = va(), js(e, Ke), $n() && ue !== null && (ue.f & ke) !== 0 && (ue.f & (Ct | Vt)) === 0 && (Xe === null ? Oc([e]) : Xe.push(e)), !r.is_fork && Po.size > 0 && !Us && kc();
  }
  return t;
}
function kc() {
  Us = !1;
  var e = Gt;
  Ar(!0);
  const t = Array.from(Po);
  try {
    for (const n of t)
      (n.f & ke) !== 0 && Ce(n, ct), ir(n) && Xn(n);
  } finally {
    Ar(e);
  }
  Po.clear();
}
function Bn(e) {
  O(e, e.v + 1);
}
function js(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = $n(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === ue)) {
        var l = (a & Ke) === 0;
        if (l && Ce(s, t), (a & Ee) !== 0) {
          var c = (
            /** @type {Derived} */
            s
          );
          We?.delete(c), (a & Jt) === 0 && (a & tt && (s.f |= Jt), js(c, ct));
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
  const t = Gr(e);
  if (t !== Ps && t !== Hl)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Wr(e), o = /* @__PURE__ */ oe(0), i = Ut, s = (a) => {
    if (Ut === i)
      return a();
    var l = ae, c = Ut;
    ze(null), Ii(i);
    var d = a();
    return ze(l), Ii(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ oe(
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
          var h = /* @__PURE__ */ oe(c.value);
          return n.set(l, h), h;
        }) : O(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ oe(xe));
            n.set(l, d), Bn(o);
          }
        } else
          O(c, xe), Bn(o);
        return !0;
      },
      get(a, l, c) {
        if (l === at)
          return e;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || Dt(a, l)?.writable) && (d = s(() => {
          var g = it(h ? a[l] : xe), v = /* @__PURE__ */ oe(g);
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
            var f = d ? it(a[l]) : xe, g = /* @__PURE__ */ oe(f);
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
            v !== void 0 ? O(v, xe) : g in a && (v = s(() => /* @__PURE__ */ oe(xe)), n.set(g + "", v));
          }
        if (h === void 0)
          (!f || Dt(a, l)?.writable) && (h = s(() => /* @__PURE__ */ oe(void 0)), O(h, it(c)), n.set(l, h));
        else {
          f = h.v !== xe;
          var m = s(() => it(c));
          O(h, m);
        }
        var p = Reflect.getOwnPropertyDescriptor(a, l);
        if (p?.set && p.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), N = Number(l);
            Number.isInteger(N) && N >= y.v && O(y, N + 1);
          }
          Bn(o);
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
function Ai(e) {
  try {
    if (e !== null && typeof e == "object" && at in e)
      return e[at];
  } catch {
  }
  return e;
}
function Sc(e, t) {
  return Object.is(Ai(e), Ai(t));
}
var De, Js, Qs, $s;
function Cc() {
  if (De === void 0) {
    De = window, Js = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Qs = Dt(t, "firstChild").get, $s = Dt(t, "nextSibling").get, Ni(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ni(n) && (n.__t = void 0);
  }
}
function xt(e = "") {
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
function tr(e) {
  return (
    /** @type {TemplateNode | null} */
    $s.call(e)
  );
}
function W(e, t) {
  return /* @__PURE__ */ Be(e);
}
function se(e, t = !1) {
  {
    var n = /* @__PURE__ */ Be(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ tr(n) : n;
  }
}
function G(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ tr(r);
  return r;
}
function Nc(e) {
  e.textContent = "";
}
function ea() {
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
let Ti = !1;
function Mc() {
  Ti || (Ti = !0, document.addEventListener(
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
function Qr(e) {
  var t = ae, n = ue;
  ze(null), ut(null);
  try {
    return e();
  } finally {
    ze(t), ut(n);
  }
}
function Ac(e, t, n, r = n) {
  e.addEventListener(t, () => Qr(n));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), r(!0);
  } : e.__on_r = () => r(!0), Mc();
}
function ta(e) {
  ue === null && (ae === null && Yl(), Kl()), un && Fl();
}
function Tc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ue(e, t, n) {
  var r = ue;
  r !== null && (r.f & Fe) !== 0 && (e |= Fe);
  var o = {
    ctx: ge,
    deps: null,
    nodes: null,
    f: e | Ke | tt,
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
      Xn(o), o.f |= Go;
    } catch (a) {
      throw _e(o), a;
    }
  else t !== null && Qt(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & ln) === 0 && (i = i.first, (e & St) !== 0 && (e & Rt) !== 0 && i !== null && (i.f |= Rt)), i !== null && (i.parent = r, r !== null && Tc(i, r), ae !== null && (ae.f & Ee) !== 0 && (e & Vt) === 0)) {
    var s = (
      /** @type {Derived} */
      ae
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function Kn() {
  return ae !== null && !st;
}
function ni(e) {
  const t = Ue(Ur, null, !1);
  return Ce(t, ke), t.teardown = e, t;
}
function Ge(e) {
  ta();
  var t = (
    /** @type {Effect} */
    ue.f
  ), n = !ae && (t & Ct) !== 0 && (t & Go) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ge
    );
    (r.e ??= []).push(e);
  } else
    return na(e);
}
function na(e) {
  return Ue(qo | Ds, e, !1);
}
function ra(e) {
  return ta(), Ue(Ur | Ds, e, !0);
}
function oa(e) {
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
function nr(e) {
  return Ue(qo, e, !1);
}
function Ic(e) {
  return Ue(Uo | ln, e, !0);
}
function rr(e, t = 0) {
  return Ue(Ur | t, e, !0);
}
function ce(e, t = [], n = [], r = []) {
  Ws(r, t, n, (o) => {
    Ue(Ur, () => e(...o.map(u)), !0);
  });
}
function or(e, t = 0) {
  var n = Ue(St | t, e, !0);
  return n;
}
function ia(e, t = 0) {
  var n = Ue(As | t, e, !0);
  return n;
}
function Ie(e) {
  return Ue(Ct | ln, e, !0);
}
function sa(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = un, r = ae;
    Di(!0), ze(null);
    try {
      t.call(null);
    } finally {
      Di(n), ze(r);
    }
  }
}
function aa(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Qr(() => {
      o.abort(gn);
    });
    var r = n.next;
    (n.f & Vt) !== 0 ? n.parent = null : _e(n, t), n = r;
  }
}
function zc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ct) === 0 && _e(t), t = n;
  }
}
function _e(e, t = !0) {
  var n = !1;
  (t || (e.f & Ts) !== 0) && e.nodes !== null && e.nodes.end !== null && (la(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), aa(e, t && !n), Tr(e, 0), Ce(e, bt);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  sa(e);
  var o = e.parent;
  o !== null && o.first !== null && ca(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function la(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ tr(e);
    e.remove(), e = n;
  }
}
function ca(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function qt(e, t, n = !0) {
  var r = [];
  ua(e, r, !0);
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
function ua(e, t, n) {
  if ((e.f & Fe) === 0) {
    e.f ^= Fe;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var o = e.first; o !== null; ) {
      var i = o.next, s = (o.f & Rt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & Ct) !== 0 && (e.f & St) !== 0;
      ua(o, t, s ? n : !1), o = i;
    }
  }
}
function ri(e) {
  da(e, !0);
}
function da(e, t) {
  if ((e.f & Fe) !== 0) {
    e.f ^= Fe, (e.f & ke) === 0 && (Ce(e, Ke), Qt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rt) !== 0 || (n.f & Ct) !== 0;
      da(n, o ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || t) && s.in();
  }
}
function fa(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var o = n === r ? null : /* @__PURE__ */ tr(n);
      t.append(n), n = o;
    }
}
let Gt = !1;
function Ar(e) {
  Gt = e;
}
let un = !1;
function Di(e) {
  un = e;
}
let ae = null, st = !1;
function ze(e) {
  ae = e;
}
let ue = null;
function ut(e) {
  ue = e;
}
let Et = null;
function ha(e) {
  ae !== null && (Et === null ? Et = [e] : Et.push(e));
}
let Me = null, Ve = 0, Xe = null;
function Oc(e) {
  Xe = e;
}
let ga = 1, Yn = 0, Ut = Yn;
function Ii(e) {
  Ut = e;
}
function va() {
  return ++ga;
}
function ir(e) {
  var t = e.f;
  if ((t & Ke) !== 0)
    return !0;
  if (t & Ee && (e.f &= ~Jt), (t & ct) !== 0) {
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
    (t & tt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    We === null && Ce(e, ke);
  }
  return !1;
}
function pa(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Et?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Ee) !== 0 ? pa(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Ce(i, Ke) : (i.f & ke) !== 0 && Ce(i, ct), Qt(
        /** @type {Effect} */
        i
      ));
    }
}
function ma(e) {
  var t = Me, n = Ve, r = Xe, o = ae, i = Et, s = ge, a = st, l = Ut, c = e.f;
  Me = /** @type {null | Value[]} */
  null, Ve = 0, Xe = null, ae = (c & (Ct | Vt)) === 0 ? e : null, Et = null, wn(e.ctx), st = !1, Ut = ++Yn, e.ac !== null && (Qr(() => {
    e.ac.abort(gn);
  }), e.ac = null);
  try {
    e.f |= Co;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps;
    if (Me !== null) {
      var g;
      if (Tr(e, Ve), f !== null && Ve > 0)
        for (f.length = Ve + Me.length, g = 0; g < Me.length; g++)
          f[Ve + g] = Me[g];
      else
        e.deps = f = Me;
      if (Kn() && (e.f & tt) !== 0)
        for (g = Ve; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Ve < f.length && (Tr(e, Ve), f.length = Ve);
    if ($n() && Xe !== null && !st && f !== null && (e.f & (Ee | ct | Ke)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Xe.length; g++)
        pa(
          Xe[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Yn++, Xe !== null && (r === null ? r = Xe : r.push(.../** @type {Source[]} */
    Xe))), (e.f & It) !== 0 && (e.f ^= It), h;
  } catch (v) {
    return Fs(v);
  } finally {
    e.f ^= Co, Me = t, Ve = n, Xe = r, ae = o, Et = i, wn(s), st = a, Ut = l;
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
  (Me === null || !Me.includes(t)) && (Ce(t, ct), (t.f & tt) !== 0 && (t.f ^= tt, t.f &= ~Jt), qs(
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
      Rc(e, n[r]);
}
function Xn(e) {
  var t = e.f;
  if ((t & bt) === 0) {
    Ce(e, ke);
    var n = ue, r = Gt;
    ue = e, Gt = !0;
    try {
      (t & (St | As)) !== 0 ? zc(e) : aa(e), sa(e);
      var o = ma(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ga;
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
  if (ae !== null && !st) {
    var r = ue !== null && (ue.f & bt) !== 0;
    if (!r && !Et?.includes(e)) {
      var o = ae.deps;
      if ((ae.f & Co) !== 0)
        e.rv < Yn && (e.rv = Yn, Me === null && o !== null && o[Ve] === e ? Ve++ : Me === null ? Me = [e] : Me.includes(e) || Me.push(e));
      else {
        (ae.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [ae] : i.includes(ae) || i.push(ae);
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
      return ((s.f & ke) === 0 && s.reactions !== null || wa(s)) && (a = ti(s)), zt.set(s, a), a;
    }
  } else n && (!We?.has(e) || de?.is_fork && !Kn()) && (s = /** @type {Derived} */
  e, ir(s) && Gs(s), Gt && Kn() && (s.f & tt) === 0 && ya(s));
  if (We?.has(e))
    return We.get(e);
  if ((e.f & It) !== 0)
    throw e.v;
  return e.v;
}
function ya(e) {
  if (e.deps !== null) {
    e.f ^= tt;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & Ee) !== 0 && (t.f & tt) === 0 && ya(
        /** @type {Derived} */
        t
      );
  }
}
function wa(e) {
  if (e.v === xe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (zt.has(t) || (t.f & Ee) !== 0 && wa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Se(e) {
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
function _a(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (at in e)
      Mo(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && at in n && Mo(n);
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
      const r = Ns(n);
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
function Xc(e) {
  return e = e.toLowerCase(), Yc[e] ?? e;
}
const Zc = ["touchstart", "touchmove"];
function Wc(e) {
  return Zc.includes(e);
}
const ba = /* @__PURE__ */ new Set(), Ao = /* @__PURE__ */ new Set();
function oi(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || On.call(t, i), !i.cancelBubble)
      return Qr(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? cn(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function To(e, t, n, r = {}) {
  var o = oi(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function en(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = oi(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ni(() => {
    t.removeEventListener(e, s, i);
  });
}
function Mn(e) {
  for (var t = 0; t < e.length; t++)
    ba.add(e[t]);
  for (var n of Ao)
    n(e);
}
let zi = null;
function On(e) {
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
    var d = ae, h = ue;
    ze(null), ut(null);
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
function ii(e) {
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
  var n = (t & Os) !== 0, r = (t & ic) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    o === void 0 && (o = ii(i ? e : "<!>" + e), n || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ Be(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Js ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Be(s)
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
  var r = !e.startsWith("<!>"), o = (t & Os) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ii(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Be(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Be(l); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Be(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Be(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Be(c)
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
function ye(e, t) {
  return /* @__PURE__ */ qc(e, t, "svg");
}
function Gc(e = "") {
  {
    var t = xt(e + "");
    return tn(t, t), t;
  }
}
function me() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = xt();
  return e.append(t, n), tn(t, n), e;
}
function B(e, t) {
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
        t.addEventListener(g, On, { passive: v });
        var m = fn.get(g);
        m === void 0 ? (document.addEventListener(g, On, { passive: v }), fn.set(g, 1)) : fn.set(g, m + 1);
      }
    }
  };
  l(qr(ba)), Ao.add(l);
  var c = void 0, d = Dc(() => {
    var h = n ?? t.appendChild(xt());
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
        t.removeEventListener(f, On);
        var g = (
          /** @type {number} */
          fn.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, On), fn.delete(f)) : fn.set(f, g);
      }
      Ao.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Jc.set(c, d), c;
}
let Jc = /* @__PURE__ */ new WeakMap();
class si {
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
        ri(r), this.#r.delete(n);
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
            fa(s, c), c.append(xt()), this.#n.set(i, { effect: s, fragment: c });
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
    ), o = ea();
    if (n && !this.#t.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = xt();
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
  var r = new si(e), o = n ? Rt : 0;
  function i(s, a) {
    r.ensure(s, a);
  }
  or(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function Qc(e, t) {
  rr(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Do(e, t) {
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
            Io(qr(i.done)), f.delete(i), f.size === 0 && (e.outrogroups = null);
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
    Io(t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function Io(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    _e(e[n], t);
}
var Oi;
function nn(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = (t & zs) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = c.appendChild(xt());
  }
  var d = null, h = /* @__PURE__ */ ei(() => {
    var y = n();
    return Wr(y) ? y : y == null ? [] : qr(y);
  }), f, g = !0;
  function v() {
    p.fallback = d, eu(p, f, s, t, r), d !== null && (f.length === 0 ? (d.f & yt) === 0 ? ri(d) : (d.f ^= yt, Rn(d, null, s)) : qt(d, () => {
      d = null;
    }));
  }
  var m = or(() => {
    f = /** @type {V[]} */
    u(h);
    for (var y = f.length, N = /* @__PURE__ */ new Set(), C = (
      /** @type {Batch} */
      de
    ), b = ea(), T = 0; T < y; T += 1) {
      var E = f[T], D = r(E, T), P = g ? null : a.get(D);
      P ? (P.v && bn(P.v, E), P.i && bn(P.i, T), b && C.skipped_effects.delete(P.e)) : (P = tu(
        a,
        g ? s : Oi ??= xt(),
        E,
        D,
        T,
        o,
        t,
        n
      ), g || (P.e.f |= yt), a.set(D, P)), N.add(D);
    }
    if (y === 0 && i && !d && (g ? d = Ie(() => i(s)) : (d = Ie(() => i(Oi ??= xt())), d.f |= yt)), !g)
      if (b) {
        for (const [R, K] of a)
          N.has(R) || C.skipped_effects.add(K.e);
        C.oncommit(v), C.ondiscard(() => {
        });
      } else
        v();
    u(h);
  }), p = { effect: m, items: a, outrogroups: null, fallback: d };
  g = !1;
}
function eu(e, t, n, r, o) {
  var i = (r & Ql) !== 0, s = t.length, a = e.items, l = e.effect.first, c, d = null, h, f = [], g = [], v, m, p, y;
  if (i)
    for (y = 0; y < s; y += 1)
      v = t[y], m = o(v, y), p = /** @type {EachItem} */
      a.get(m).e, (p.f & yt) === 0 && (p.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(p));
  for (y = 0; y < s; y += 1) {
    if (v = t[y], m = o(v, y), p = /** @type {EachItem} */
    a.get(m).e, e.outrogroups !== null)
      for (const K of e.outrogroups)
        K.pending.delete(p), K.done.delete(p);
    if ((p.f & yt) !== 0)
      if (p.f ^= yt, p === l)
        Rn(p, null, n);
      else {
        var N = d ? d.next : l;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), Mt(e, d, p), Mt(e, p, N), Rn(p, N, n), d = p, f = [], g = [], l = d.next;
        continue;
      }
    if ((p.f & Fe) !== 0 && (ri(p), i && (p.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(p))), p !== l) {
      if (c !== void 0 && c.has(p)) {
        if (f.length < g.length) {
          var C = g[0], b;
          d = C.prev;
          var T = f[0], E = f[f.length - 1];
          for (b = 0; b < f.length; b += 1)
            Rn(f[b], C, n);
          for (b = 0; b < g.length; b += 1)
            c.delete(g[b]);
          Mt(e, T.prev, E.next), Mt(e, d, T), Mt(e, E, C), l = C, d = E, y -= 1, f = [], g = [];
        } else
          c.delete(p), Rn(p, l, n), Mt(e, p.prev, p.next), Mt(e, p, d === null ? e.effect.first : d.next), Mt(e, d, p), d = p;
        continue;
      }
      for (f = [], g = []; l !== null && l !== p; )
        (c ??= /* @__PURE__ */ new Set()).add(l), g.push(l), l = l.next;
      if (l === null)
        continue;
    }
    (p.f & yt) === 0 && f.push(p), d = p, l = p.next;
  }
  if (e.outrogroups !== null) {
    for (const K of e.outrogroups)
      K.pending.size === 0 && (Io(qr(K.done)), e.outrogroups?.delete(K));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || c !== void 0) {
    var D = [];
    if (c !== void 0)
      for (p of c)
        (p.f & Fe) === 0 && D.push(p);
    for (; l !== null; )
      (l.f & Fe) === 0 && l !== e.fallback && D.push(l), l = l.next;
    var P = D.length;
    if (P > 0) {
      var R = (r & zs) !== 0 && s === 0 ? n : null;
      if (i) {
        for (y = 0; y < P; y += 1)
          D[y].nodes?.a?.measure();
        for (y = 0; y < P; y += 1)
          D[y].nodes?.a?.fix();
      }
      $c(e, D, R);
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
function Rn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, o = e.nodes.end, i = t && (t.f & yt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ tr(r)
      );
      if (i.before(r), r === o)
        return;
      r = s;
    }
}
function Mt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function xa(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  ce(() => {
    var a = (
      /** @type {Effect} */
      ue
    );
    if (s !== (s = t() ?? "") && (a.nodes !== null && (la(
      a.nodes.start,
      /** @type {TemplateNode} */
      a.nodes.end
    ), a.nodes = null), s !== "")) {
      var l = s + "";
      n ? l = `<svg>${l}</svg>` : r && (l = `<math>${l}</math>`);
      var c = ii(l);
      if ((n || r) && (c = /** @type {Element} */
      /* @__PURE__ */ Be(c)), tn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Be(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Be(c); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Be(c)
          );
      else
        i.before(c);
    }
  });
}
function He(e, t, ...n) {
  var r = new si(e);
  or(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Rt);
}
function $r(e, t, n) {
  var r = new si(e);
  or(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Rt);
}
function Pe(e, t, n) {
  nr(() => {
    var r = Se(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      rr(() => {
        var s = n();
        _a(s), o && Hs(i, s) && (i = s, r.update(s));
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
  ia(() => {
    n !== (n = t()) && (r && (_e(r), r = null), n && (r = Ie(() => {
      nr(() => (
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
function ru() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ea(e)) && (r && (r += " "), r += t);
  return r;
}
function Bt(e) {
  return typeof e == "object" ? ru(e) : e ?? "";
}
const Ri = [...` 	
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
          (s === 0 || Ri.includes(r[s - 1])) && (a === r.length || Ri.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Hi(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function uo(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function iu(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(uo)), o && l.push(...Object.keys(o).map(uo));
      var c = 0, d = -1;
      const m = e.length;
      for (var h = 0; h < m; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === m - 1) {
            if (d !== -1) {
              var g = uo(e.substring(c, d).trim());
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
    return r && (n += Hi(r)), o && (n += Hi(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Oe(e, t, n, r, o, i) {
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
function fo(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Le(e, t, n, r) {
  var o = e.__style;
  if (o !== t) {
    var i = iu(t, r);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else r && (Array.isArray(r) ? (fo(e, n?.[0], r[0]), fo(e, n?.[1], r[1], "important")) : fo(e, n, r));
  return r;
}
function zo(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Wr(t))
      return lc();
    for (var r of e.options)
      r.selected = t.includes(Li(r));
    return;
  }
  for (r of e.options) {
    var o = Li(r);
    if (Sc(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function su(e) {
  var t = new MutationObserver(() => {
    zo(e, e.__value);
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
function Li(e) {
  return "__value" in e ? e.__value : e.value;
}
const At = /* @__PURE__ */ Symbol("class"), pt = /* @__PURE__ */ Symbol("style"), ka = /* @__PURE__ */ Symbol("is custom element"), Sa = /* @__PURE__ */ Symbol("is html");
function au(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function j(e, t, n, r) {
  var o = Ca(e);
  o[t] !== (o[t] = n) && (t === "loading" && (e[Vl] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Na(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function lu(e, t, n, r, o = !1, i = !1) {
  var s = Ca(e), a = s[ka], l = !s[Sa], c = t || {}, d = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = Bt(n.class) : (r || n[At]) && (n.class = null), n[pt] && (n.style ??= null);
  var f = Na(e);
  for (const b in n) {
    let T = n[b];
    if (d && b === "value" && T == null) {
      e.value = e.__value = "", c[b] = T;
      continue;
    }
    if (b === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Oe(e, g, T, r, t?.[At], n[At]), c[b] = T, c[At] = n[At];
      continue;
    }
    if (b === "style") {
      Le(e, T, t?.[pt], n[pt]), c[b] = T, c[pt] = n[pt];
      continue;
    }
    var v = c[b];
    if (!(T === v && !(T === void 0 && e.hasAttribute(b)))) {
      c[b] = T;
      var m = b[0] + b[1];
      if (m !== "$$")
        if (m === "on") {
          const E = {}, D = "$$" + b;
          let P = b.slice(2);
          var p = Kc(P);
          if (Bc(P) && (P = P.slice(0, -7), E.capture = !0), !p && v) {
            if (T != null) continue;
            e.removeEventListener(P, c[D], E), c[D] = null;
          }
          if (T != null)
            if (p)
              e[`__${P}`] = T, Mn([P]);
            else {
              let R = function(K) {
                c[b].call(this, K);
              };
              var C = R;
              c[D] = oi(P, e, R, E);
            }
          else p && (e[`__${P}`] = void 0);
        } else if (b === "style")
          j(e, b, T);
        else if (b === "autofocus")
          Pc(
            /** @type {HTMLElement} */
            e,
            !!T
          );
        else if (!a && (b === "__value" || b === "value" && T != null))
          e.value = e.__value = T;
        else if (b === "selected" && d)
          au(
            /** @type {HTMLOptionElement} */
            e,
            T
          );
        else {
          var y = b;
          l || (y = Xc(y));
          var N = y === "defaultValue" || y === "defaultChecked";
          if (T == null && !a && !N)
            if (s[b] = null, y === "value" || y === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                e
              );
              const D = t === void 0;
              if (y === "value") {
                let P = E.defaultValue;
                E.removeAttribute(y), E.defaultValue = P, E.value = E.__value = D ? P : null;
              } else {
                let P = E.defaultChecked;
                E.removeAttribute(y), E.defaultChecked = P, E.checked = D ? P : !1;
              }
            } else
              e.removeAttribute(b);
          else N || f.includes(y) && (a || typeof T != "string") ? (e[y] = T, y in s && (s[y] = xe)) : typeof T != "function" && j(e, y, T);
        }
    }
  }
  return c;
}
function Ft(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  Ws(o, n, r, (l) => {
    var c = void 0, d = {}, h = e.nodeName === "SELECT", f = !1;
    if (ia(() => {
      var v = t(...l.map(u)), m = lu(
        e,
        c,
        v,
        i,
        s,
        a
      );
      f && h && "value" in v && zo(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let y of Object.getOwnPropertySymbols(d))
        v[y] || _e(d[y]);
      for (let y of Object.getOwnPropertySymbols(v)) {
        var p = v[y];
        y.description === ac && (!c || p !== c[y]) && (d[y] && _e(d[y]), d[y] = Ie(() => nu(e, () => p))), m[y] = p;
      }
      c = m;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      nr(() => {
        zo(
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
function Ca(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [ka]: e.nodeName.includes("-"),
      [Sa]: e.namespaceURI === sc
    }
  );
}
var Vi = /* @__PURE__ */ new Map();
function Na(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Vi.get(t);
  if (n) return n;
  Vi.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Ns(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Gr(o);
  }
  return n;
}
function cu(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Ac(e, "input", async (o) => {
    var i = o ? e.defaultValue : e.value;
    if (i = ho(e) ? go(i) : i, n(i), de !== null && r.add(de), await Hc(), i !== (i = t())) {
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
  Se(t) == null && e.value && (n(ho(e) ? go(e.value) : e.value), de !== null && r.add(de)), rr(() => {
    var o = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Er ?? de
      );
      if (r.has(i))
        return;
    }
    ho(e) && o === go(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function ho(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function go(e) {
  return e === "" ? null : +e;
}
class ai {
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
          ai.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var uu = /* @__PURE__ */ new ai({
  box: "border-box"
});
function Dr(e, t, n) {
  var r = uu.observe(e, () => n(e[t]));
  nr(() => (Se(() => n(e[t])), r));
}
function Bi(e, t) {
  return e === t || e?.[at] === t;
}
function sr(e = {}, t, n, r) {
  return nr(() => {
    var o, i;
    return rr(() => {
      o = i, i = [], Se(() => {
        e !== n(...i) && (t(e, ...i), o && Bi(n(...o), e) && t(null, ...o));
      });
    }), () => {
      cn(() => {
        i && Bi(n(...i), e) && t(null, ...i);
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
  let r = () => _a(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ er(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && ra(() => {
    Fi(t, r), So(n.b);
  }), Ge(() => {
    const o = Se(() => n.m.map(Ll));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ge(() => {
    Fi(t, r), So(n.a);
  });
}
function Fi(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let gr = !1;
function fu(e) {
  var t = gr;
  try {
    return gr = !1, [e(), gr];
  } finally {
    gr = t;
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
      if (Dn(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Dn(o) && (o = o());
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
      if (Dn(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Dt(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === at || t === Is) return !1;
    for (let n of e.props)
      if (Dn(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Dn(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function mt(...e) {
  return new Proxy({ props: e }, gu);
}
function H(e, t, n, r) {
  var o = !Pn || (n & tc) !== 0, i = (n & rc) !== 0, s = (n & oc) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? Se(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = at in e || Is in e;
    d = Dt(e, t)?.set ?? (h && t in e ? (C) => e[t] = C : void 0);
  }
  var f, g = !1;
  i ? [f, g] = fu(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && Zl(), d(f)));
  var v;
  if (o ? v = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C === void 0 ? c() : (l = !0, C);
  } : v = () => {
    var C = (
      /** @type {V} */
      e[t]
    );
    return C !== void 0 && (a = /** @type {V} */
    void 0), C === void 0 ? a : C;
  }, o && (n & nc) === 0)
    return v;
  if (d) {
    var m = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(C, b) {
        return arguments.length > 0 ? ((!o || !b || m || g) && d(b ? v() : C), C) : v();
      })
    );
  }
  var p = !1, y = ((n & ec) !== 0 ? er : ei)(() => (p = !1, v()));
  i && u(y);
  var N = (
    /** @type {Effect} */
    ue
  );
  return (
    /** @type {() => V} */
    (function(C, b) {
      if (arguments.length > 0) {
        const T = b ? u(y) : o && i ? it(C) : C;
        return O(y, T), p = !0, a !== void 0 && (a = T), C;
      }
      return un && p || (N.f & bt) !== 0 ? y.v : u(y);
    })
  );
}
function vu(e) {
  ge === null && jo(), Pn && ge.l !== null ? pu(ge).m.push(e) : Ge(() => {
    const t = Se(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function eo(e) {
  ge === null && jo(), vu(() => () => Se(e));
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
function to() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new kr(n);
}
function kr(e) {
  this._ = e;
}
function wu(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
kr.prototype = to.prototype = {
  constructor: kr,
  on: function(e, t) {
    var n = this._, r = wu(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = _u(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ki(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ki(n[o], e.name, null);
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
function _u(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ki(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = yu, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Oo = "http://www.w3.org/1999/xhtml";
const Yi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Oo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function no(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Yi.hasOwnProperty(t) ? { space: Yi[t], local: e } : e;
}
function bu(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Oo && t.documentElement.namespaceURI === Oo ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function xu(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Pa(e) {
  var t = no(e);
  return (t.local ? xu : bu)(t);
}
function Eu() {
}
function li(e) {
  return e == null ? Eu : function() {
    return this.querySelector(e);
  };
}
function ku(e) {
  typeof e != "function" && (e = li(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new Ye(r, this._parents);
}
function Su(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Cu() {
  return [];
}
function Ma(e) {
  return e == null ? Cu : function() {
    return this.querySelectorAll(e);
  };
}
function Nu(e) {
  return function() {
    return Su(e.apply(this, arguments));
  };
}
function Pu(e) {
  typeof e == "function" ? e = Nu(e) : e = Ma(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new Ye(r, o);
}
function Aa(e) {
  return function() {
    return this.matches(e);
  };
}
function Ta(e) {
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
  return this.select(e == null ? Tu : Au(typeof e == "function" ? e : Ta(e)));
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
  return this.selectAll(e == null ? zu : Ou(typeof e == "function" ? e : Ta(e)));
}
function Hu(e) {
  typeof e != "function" && (e = Aa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Ye(r, this._parents);
}
function Da(e) {
  return new Array(e.length);
}
function Lu() {
  return new Ye(this._enter || this._groups.map(Da), this._parents);
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
function Vu(e) {
  return function() {
    return e;
  };
}
function Bu(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Ir(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Fu(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new Ir(e, i[a]);
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
    var d = r[c], h = o[c], f = h.length, g = Xu(e.call(d, d && d.__data__, c, r)), v = g.length, m = a[c] = new Array(v), p = s[c] = new Array(v), y = l[c] = new Array(f);
    n(d, h, m, p, y, g, t);
    for (var N = 0, C = 0, b, T; N < v; ++N)
      if (b = m[N]) {
        for (N >= C && (C = N + 1); !(T = p[C]) && ++C < v; ) ;
        b._next = T || null;
      }
  }
  return s = new Ye(s, r), s._enter = a, s._exit = l, s;
}
function Xu(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Zu() {
  return new Ye(this._exit || this._groups.map(Da), this._parents);
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
  var n = no(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? od : rd : typeof t == "function" ? n.local ? ld : ad : n.local ? sd : id)(n, t));
}
function Ia(e) {
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
  return e.style.getPropertyValue(t) || Ia(e).getComputedStyle(e, null).getPropertyValue(t);
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
function za(e) {
  return e.trim().split(/^|\s+/);
}
function ci(e) {
  return e.classList || new Oa(e);
}
function Oa(e) {
  this._node = e, this._names = za(e.getAttribute("class") || "");
}
Oa.prototype = {
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
function Ra(e, t) {
  for (var n = ci(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Ha(e, t) {
  for (var n = ci(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function yd(e) {
  return function() {
    Ra(this, e);
  };
}
function wd(e) {
  return function() {
    Ha(this, e);
  };
}
function _d(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ra : Ha)(this, e);
  };
}
function bd(e, t) {
  var n = za(e + "");
  if (arguments.length < 2) {
    for (var r = ci(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
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
function kd(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Sd(e) {
  return arguments.length ? this.each(e == null ? xd : (typeof e == "function" ? kd : Ed)(e)) : this.node().textContent;
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
  var t = typeof e == "function" ? e : Pa(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Od() {
  return null;
}
function Rd(e, t) {
  var n = typeof e == "function" ? e : Pa(e), r = t == null ? Od : typeof t == "function" ? t : li(t);
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
function Xd(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Zd(e) {
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
  var r = Xd(e + ""), o, i = r.length, s;
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
  for (a = t ? Wd : Zd, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function La(e, t, n) {
  var r = Ia(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Gd(e, t) {
  return function() {
    return La(this, e, t);
  };
}
function Ud(e, t) {
  return function() {
    return La(this, e, t.apply(this, arguments));
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
var Va = [null];
function Ye(e, t) {
  this._groups = e, this._parents = t;
}
function ar() {
  return new Ye([[document.documentElement]], Va);
}
function Qd() {
  return this;
}
Ye.prototype = ar.prototype = {
  constructor: Ye,
  select: ku,
  selectAll: Pu,
  selectChild: Du,
  selectChildren: Ru,
  filter: Hu,
  data: Yu,
  enter: Lu,
  exit: Zu,
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
  text: Sd,
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
  return typeof e == "string" ? new Ye([[document.querySelector(e)]], [document.documentElement]) : new Ye([[e]], Va);
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
function vo(e) {
  e.stopImmediatePropagation();
}
function pn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ba(e) {
  var t = e.document.documentElement, n = qe(e).on("dragstart.drag", pn, Zn);
  "onselectstart" in t ? n.on("selectstart.drag", pn, Zn) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Fa(e, t) {
  var n = e.document.documentElement, r = qe(e).on("dragstart.drag", null);
  t && (r.on("click.drag", pn, Zn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const vr = (e) => () => e;
function Ro(e, {
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
Ro.prototype.on = function() {
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
  var e = tf, t = nf, n = rf, r = of, o = {}, i = to("start", "drag", "end"), s = 0, a, l, c, d, h = 0;
  function f(b) {
    b.on("mousedown.drag", g).filter(r).on("touchstart.drag", p).on("touchmove.drag", y, ef).on("touchend.drag touchcancel.drag", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(b, T) {
    if (!(d || !e.call(this, b, T))) {
      var E = C(this, t.call(this, b, T), b, T, "mouse");
      E && (qe(b.view).on("mousemove.drag", v, Zn).on("mouseup.drag", m, Zn), Ba(b.view), vo(b), c = !1, a = b.clientX, l = b.clientY, E("start", b));
    }
  }
  function v(b) {
    if (pn(b), !c) {
      var T = b.clientX - a, E = b.clientY - l;
      c = T * T + E * E > h;
    }
    o.mouse("drag", b);
  }
  function m(b) {
    qe(b.view).on("mousemove.drag mouseup.drag", null), Fa(b.view, c), pn(b), o.mouse("end", b);
  }
  function p(b, T) {
    if (e.call(this, b, T)) {
      var E = b.changedTouches, D = t.call(this, b, T), P = E.length, R, K;
      for (R = 0; R < P; ++R)
        (K = C(this, D, b, T, E[R].identifier, E[R])) && (vo(b), K("start", b, E[R]));
    }
  }
  function y(b) {
    var T = b.changedTouches, E = T.length, D, P;
    for (D = 0; D < E; ++D)
      (P = o[T[D].identifier]) && (pn(b), P("drag", b, T[D]));
  }
  function N(b) {
    var T = b.changedTouches, E = T.length, D, P;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), D = 0; D < E; ++D)
      (P = o[T[D].identifier]) && (vo(b), P("end", b, T[D]));
  }
  function C(b, T, E, D, P, R) {
    var K = i.copy(), A = Je(R || E, T), x, M, w;
    if ((w = n.call(b, new Ro("beforestart", {
      sourceEvent: E,
      target: f,
      identifier: P,
      active: s,
      x: A[0],
      y: A[1],
      dx: 0,
      dy: 0,
      dispatch: K
    }), D)) != null)
      return x = w.x - A[0] || 0, M = w.y - A[1] || 0, function S(k, I, L) {
        var z = A, V;
        switch (k) {
          case "start":
            o[P] = S, V = s++;
            break;
          case "end":
            delete o[P], --s;
          // falls through
          case "drag":
            A = Je(L || I, T), V = s;
            break;
        }
        K.call(
          k,
          b,
          new Ro(k, {
            sourceEvent: I,
            subject: w,
            target: f,
            identifier: P,
            active: V,
            x: A[0] + x,
            y: A[1] + M,
            dx: A[0] - z[0],
            dy: A[1] - z[1],
            dispatch: K
          }),
          D
        );
      };
  }
  return f.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : vr(!!b), f) : e;
  }, f.container = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : vr(b), f) : t;
  }, f.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : vr(b), f) : n;
  }, f.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : vr(!!b), f) : r;
  }, f.on = function() {
    var b = i.on.apply(i, arguments);
    return b === i ? f : b;
  }, f.clickDistance = function(b) {
    return arguments.length ? (h = (b = +b) * b, f) : Math.sqrt(h);
  }, f;
}
function ui(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ka(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function lr() {
}
var Wn = 0.7, zr = 1 / Wn, mn = "\\s*([+-]?\\d+)\\s*", qn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", af = /^#([0-9a-f]{3,8})$/, lf = new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`), cf = new RegExp(`^rgb\\(${lt},${lt},${lt}\\)$`), uf = new RegExp(`^rgba\\(${mn},${mn},${mn},${qn}\\)$`), df = new RegExp(`^rgba\\(${lt},${lt},${lt},${qn}\\)$`), ff = new RegExp(`^hsl\\(${qn},${lt},${lt}\\)$`), hf = new RegExp(`^hsla\\(${qn},${lt},${lt},${qn}\\)$`), Xi = {
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
ui(lr, rn, {
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
  formatRgb: Wi,
  toString: Wi
});
function Zi() {
  return this.rgb().formatHex();
}
function gf() {
  return this.rgb().formatHex8();
}
function vf() {
  return Ya(this).formatHsl();
}
function Wi() {
  return this.rgb().formatRgb();
}
function rn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = af.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? qi(t) : n === 3 ? new Re(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? pr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? pr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = lf.exec(e)) ? new Re(t[1], t[2], t[3], 1) : (t = cf.exec(e)) ? new Re(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = uf.exec(e)) ? pr(t[1], t[2], t[3], t[4]) : (t = df.exec(e)) ? pr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ff.exec(e)) ? ji(t[1], t[2] / 100, t[3] / 100, 1) : (t = hf.exec(e)) ? ji(t[1], t[2] / 100, t[3] / 100, t[4]) : Xi.hasOwnProperty(e) ? qi(Xi[e]) : e === "transparent" ? new Re(NaN, NaN, NaN, 0) : null;
}
function qi(e) {
  return new Re(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function pr(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Re(e, t, n, r);
}
function pf(e) {
  return e instanceof lr || (e = rn(e)), e ? (e = e.rgb(), new Re(e.r, e.g, e.b, e.opacity)) : new Re();
}
function Ho(e, t, n, r) {
  return arguments.length === 1 ? pf(e) : new Re(e, t, n, r ?? 1);
}
function Re(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ui(Re, Ho, Ka(lr, {
  brighter(e) {
    return e = e == null ? zr : Math.pow(zr, e), new Re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Wn : Math.pow(Wn, e), new Re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Re(jt(this.r), jt(this.g), jt(this.b), Or(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Gi,
  // Deprecated! Use color.formatHex.
  formatHex: Gi,
  formatHex8: mf,
  formatRgb: Ui,
  toString: Ui
}));
function Gi() {
  return `#${Wt(this.r)}${Wt(this.g)}${Wt(this.b)}`;
}
function mf() {
  return `#${Wt(this.r)}${Wt(this.g)}${Wt(this.b)}${Wt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ui() {
  const e = Or(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${jt(this.r)}, ${jt(this.g)}, ${jt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Or(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function jt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Wt(e) {
  return e = jt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ji(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Qe(e, t, n, r);
}
function Ya(e) {
  if (e instanceof Qe) return new Qe(e.h, e.s, e.l, e.opacity);
  if (e instanceof lr || (e = rn(e)), !e) return new Qe();
  if (e instanceof Qe) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Qe(s, a, l, e.opacity);
}
function yf(e, t, n, r) {
  return arguments.length === 1 ? Ya(e) : new Qe(e, t, n, r ?? 1);
}
function Qe(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ui(Qe, yf, Ka(lr, {
  brighter(e) {
    return e = e == null ? zr : Math.pow(zr, e), new Qe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Wn : Math.pow(Wn, e), new Qe(this.h, this.s, this.l * e, this.opacity);
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
    return new Qe(Ji(this.h), mr(this.s), mr(this.l), Or(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Or(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ji(this.h)}, ${mr(this.s) * 100}%, ${mr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ji(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function mr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function po(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const di = (e) => () => e;
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
  return (e = +e) == 1 ? Xa : function(t, n) {
    return n - t ? _f(t, n, e) : di(isNaN(t) ? n : t);
  };
}
function Xa(e, t) {
  var n = t - e;
  return n ? wf(e, n) : di(isNaN(e) ? t : e);
}
const Rr = (function e(t) {
  var n = bf(t);
  function r(o, i) {
    var s = n((o = Ho(o)).r, (i = Ho(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = Xa(o.opacity, i.opacity);
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
function kf(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = Fn(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Sf(e, t) {
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
    o in e ? n[o] = Fn(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Lo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, mo = new RegExp(Lo.source, "g");
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
  var n = Lo.lastIndex = mo.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Lo.exec(e)) && (o = mo.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: ot(r, o) })), n = mo.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Pf(l[0].x) : Nf(t) : (t = l.length, function(c) {
    for (var d = 0, h; d < t; ++d) a[(h = l[d]).i] = h.x(c);
    return a.join("");
  });
}
function Fn(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? di(t) : (n === "number" ? ot : n === "string" ? (r = rn(t)) ? (t = r, Rr) : Za : t instanceof rn ? Rr : t instanceof Date ? Sf : Ef(t) ? xf : Array.isArray(t) ? kf : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Cf : ot)(e, t);
}
var Qi = 180 / Math.PI, Vo = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Wa(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Qi,
    skewX: Math.atan(l) * Qi,
    scaleX: s,
    scaleY: a
  };
}
var yr;
function Mf(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Vo : Wa(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Af(e) {
  return e == null || (yr || (yr = document.createElementNS("http://www.w3.org/2000/svg", "g")), yr.setAttribute("transform", e), !(e = yr.transform.baseVal.consolidate())) ? Vo : (e = e.matrix, Wa(e.a, e.b, e.c, e.d, e.e, e.f));
}
function qa(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, h, f, g, v) {
    if (c !== h || d !== f) {
      var m = g.push("translate(", null, t, null, n);
      v.push({ i: m - 4, x: ot(c, h) }, { i: m - 2, x: ot(d, f) });
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
      var m = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: m - 4, x: ot(c, h) }, { i: m - 2, x: ot(d, f) });
    } else (h !== 1 || f !== 1) && g.push(o(g) + "scale(" + h + "," + f + ")");
  }
  return function(c, d) {
    var h = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, h, f), s(c.rotate, d.rotate, h, f), a(c.skewX, d.skewX, h, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, h, f), c = d = null, function(g) {
      for (var v = -1, m = f.length, p; ++v < m; ) h[(p = f[v]).i] = p.x(g);
      return h.join("");
    };
  };
}
var Tf = qa(Mf, "px, ", "px)", "deg)"), Df = qa(Af, ", ", ")", ")"), If = 1e-12;
function $i(e) {
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
    var a = i[0], l = i[1], c = i[2], d = s[0], h = s[1], f = s[2], g = d - a, v = h - l, m = g * g + v * v, p, y;
    if (m < If)
      y = Math.log(f / c) / t, p = function(D) {
        return [
          a + D * g,
          l + D * v,
          c * Math.exp(t * D * y)
        ];
      };
    else {
      var N = Math.sqrt(m), C = (f * f - c * c + r * m) / (2 * c * n * N), b = (f * f - c * c - r * m) / (2 * f * n * N), T = Math.log(Math.sqrt(C * C + 1) - C), E = Math.log(Math.sqrt(b * b + 1) - b);
      y = (E - T) / t, p = function(D) {
        var P = D * y, R = $i(T), K = c / (n * N) * (R * Of(t * P + T) - zf(T));
        return [
          a + K * g,
          l + K * v,
          c * R / $i(t * P + T)
        ];
      };
    }
    return p.duration = y * 1e3 * t / Math.SQRT2, p;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
})(Math.SQRT2, 2, 4);
var En = 0, Hn = 0, In = 0, Ga = 1e3, Hr, Ln, Lr = 0, on = 0, ro = 0, Gn = typeof performance == "object" && performance.now ? performance : Date, Ua = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function fi() {
  return on || (Ua(Rf), on = Gn.now() + ro);
}
function Rf() {
  on = 0;
}
function Vr() {
  this._call = this._time = this._next = null;
}
Vr.prototype = ja.prototype = {
  constructor: Vr,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? fi() : +n) + (t == null ? 0 : +t), !this._next && Ln !== this && (Ln ? Ln._next = this : Hr = this, Ln = this), this._call = e, this._time = n, Bo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Bo());
  }
};
function ja(e, t, n) {
  var r = new Vr();
  return r.restart(e, t, n), r;
}
function Hf() {
  fi(), ++En;
  for (var e = Hr, t; e; )
    (t = on - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --En;
}
function es() {
  on = (Lr = Gn.now()) + ro, En = Hn = 0;
  try {
    Hf();
  } finally {
    En = 0, Vf(), on = 0;
  }
}
function Lf() {
  var e = Gn.now(), t = e - Lr;
  t > Ga && (ro -= t, Lr = e);
}
function Vf() {
  for (var e, t = Hr, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Hr = n);
  Ln = e, Bo(r);
}
function Bo(e) {
  if (!En) {
    Hn && (Hn = clearTimeout(Hn));
    var t = e - on;
    t > 24 ? (e < 1 / 0 && (Hn = setTimeout(es, e - Gn.now() - ro)), In && (In = clearInterval(In))) : (In || (Lr = Gn.now(), In = setInterval(Lf, Ga)), En = 1, Ua(es));
  }
}
function ts(e, t, n) {
  var r = new Vr();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Bf = to("start", "end", "cancel", "interrupt"), Ff = [], Ja = 0, ns = 1, Fo = 2, Cr = 3, rs = 4, Ko = 5, Nr = 6;
function oo(e, t, n, r, o, i) {
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
    state: Ja
  });
}
function hi(e, t) {
  var n = nt(e, t);
  if (n.state > Ja) throw new Error("too late; already scheduled");
  return n;
}
function ft(e, t) {
  var n = nt(e, t);
  if (n.state > Cr) throw new Error("too late; already running");
  return n;
}
function nt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Kf(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = ja(i, 0, n.time);
  function i(c) {
    n.state = ns, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, h, f, g;
    if (n.state !== ns) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Cr) return ts(s);
        g.state === rs ? (g.state = Nr, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Nr, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (ts(function() {
      n.state === Cr && (n.state = rs, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = Fo, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Fo) {
      for (n.state = Cr, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = Ko, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === Ko && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Nr, n.timer.stop(), delete r[t];
    for (var c in r) return;
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
function Yf(e) {
  return this.each(function() {
    Pr(this, e);
  });
}
function Xf(e, t) {
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
function Zf(e, t, n) {
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
  return this.each((t == null ? Xf : Zf)(n, e, t));
}
function gi(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = ft(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return nt(o, r).value[t];
  };
}
function Qa(e, t) {
  var n;
  return (typeof t == "number" ? ot : t instanceof rn ? Rr : (n = rn(t)) ? (t = n, Rr) : Za)(e, t);
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
  var n = no(e), r = n === "transform" ? Df : Qa;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Qf : Jf)(n, r, gi(this, "attr." + e, t)) : t == null ? (n.local ? Gf : qf)(n) : (n.local ? jf : Uf)(n, r, t));
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
  var r = no(e);
  return this.tween(n, (r.local ? nh : rh)(r, t));
}
function ih(e, t) {
  return function() {
    hi(this, e).delay = +t.apply(this, arguments);
  };
}
function sh(e, t) {
  return t = +t, function() {
    hi(this, e).delay = t;
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
  typeof e != "function" && (e = Aa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new kt(r, this._parents, this._name, this._id);
}
function ph(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || c[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new kt(s, this._parents, this._name, this._id);
}
function mh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function yh(e, t, n) {
  var r, o, i = mh(t) ? hi : ft;
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
  typeof e != "function" && (e = li(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), c[f] = h, oo(c[f], t, n, f, c, nt(d, n)));
  return new kt(i, this._parents, t, n);
}
function Eh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ma(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, h = 0; h < c; ++h)
      if (d = l[h]) {
        for (var f = e.call(d, d.__data__, h, l), g, v = nt(d, n), m = 0, p = f.length; m < p; ++m)
          (g = f[m]) && oo(g, t, n, m, f, v);
        i.push(f), s.push(d);
      }
  return new kt(i, s, t, n);
}
var kh = ar.prototype.constructor;
function Sh() {
  return new kh(this._groups, this._parents);
}
function Ch(e, t) {
  var n, r, o;
  return function() {
    var i = xn(this, e), s = (this.style.removeProperty(e), xn(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function $a(e) {
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
    var l = ft(this, e), c = l.on, d = l.value[i] == null ? a || (a = $a(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function Ah(e, t, n) {
  var r = (e += "") == "transform" ? Tf : Qa;
  return t == null ? this.styleTween(e, Ch(e, r)).on("end.style." + e, $a(e)) : typeof t == "function" ? this.styleTween(e, Ph(e, r, gi(this, "style." + e, t))).each(Mh(this._id, e)) : this.styleTween(e, Nh(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? Oh(gi(this, "text", e)) : zh(e == null ? "" : e + ""));
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
  for (var e = this._name, t = this._id, n = el(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = nt(l, t);
        oo(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new kt(r, this._parents, e, n);
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
function kt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function el() {
  return ++Kh;
}
var gt = ar.prototype;
kt.prototype = {
  constructor: kt,
  select: xh,
  selectAll: Eh,
  selectChild: gt.selectChild,
  selectChildren: gt.selectChildren,
  filter: vh,
  merge: ph,
  selection: Sh,
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
var Xh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Yh
};
function Zh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Wh(e) {
  var t, n;
  e instanceof kt ? (t = e._id, e = e._name) : (t = el(), (n = Xh).time = fi(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && oo(l, e, t, c, s, n || Zh(l, t));
  return new kt(r, this._parents, e, t);
}
ar.prototype.interrupt = Yf;
ar.prototype.transition = Wh;
const wr = (e) => () => e;
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
function wt(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
wt.prototype = {
  constructor: wt,
  scale: function(e) {
    return e === 1 ? this : new wt(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new wt(this.k, this.x + this.k * e, this.y + this.k * t);
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
var io = new wt(1, 0, 0);
tl.prototype = wt.prototype;
function tl(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return io;
  return e.__zoom;
}
function yo(e) {
  e.stopImmediatePropagation();
}
function zn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Gh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Uh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function os() {
  return this.__zoom || io;
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
function nl() {
  var e = Gh, t = Uh, n = Qh, r = jh, o = Jh, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Sr, c = to("start", "zoom", "end"), d, h, f, g = 500, v = 150, m = 0, p = 10;
  function y(w) {
    w.property("__zoom", os).on("wheel.zoom", P, { passive: !1 }).on("mousedown.zoom", R).on("dblclick.zoom", K).filter(o).on("touchstart.zoom", A).on("touchmove.zoom", x).on("touchend.zoom touchcancel.zoom", M).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  y.transform = function(w, S, k, I) {
    var L = w.selection ? w.selection() : w;
    L.property("__zoom", os), w !== L ? T(w, S, k, I) : L.interrupt().each(function() {
      E(this, arguments).event(I).start().zoom(null, typeof S == "function" ? S.apply(this, arguments) : S).end();
    });
  }, y.scaleBy = function(w, S, k, I) {
    y.scaleTo(w, function() {
      var L = this.__zoom.k, z = typeof S == "function" ? S.apply(this, arguments) : S;
      return L * z;
    }, k, I);
  }, y.scaleTo = function(w, S, k, I) {
    y.transform(w, function() {
      var L = t.apply(this, arguments), z = this.__zoom, V = k == null ? b(L) : typeof k == "function" ? k.apply(this, arguments) : k, F = z.invert(V), Z = typeof S == "function" ? S.apply(this, arguments) : S;
      return n(C(N(z, Z), V, F), L, s);
    }, k, I);
  }, y.translateBy = function(w, S, k, I) {
    y.transform(w, function() {
      return n(this.__zoom.translate(
        typeof S == "function" ? S.apply(this, arguments) : S,
        typeof k == "function" ? k.apply(this, arguments) : k
      ), t.apply(this, arguments), s);
    }, null, I);
  }, y.translateTo = function(w, S, k, I, L) {
    y.transform(w, function() {
      var z = t.apply(this, arguments), V = this.__zoom, F = I == null ? b(z) : typeof I == "function" ? I.apply(this, arguments) : I;
      return n(io.translate(F[0], F[1]).scale(V.k).translate(
        typeof S == "function" ? -S.apply(this, arguments) : -S,
        typeof k == "function" ? -k.apply(this, arguments) : -k
      ), z, s);
    }, I, L);
  };
  function N(w, S) {
    return S = Math.max(i[0], Math.min(i[1], S)), S === w.k ? w : new wt(S, w.x, w.y);
  }
  function C(w, S, k) {
    var I = S[0] - k[0] * w.k, L = S[1] - k[1] * w.k;
    return I === w.x && L === w.y ? w : new wt(w.k, I, L);
  }
  function b(w) {
    return [(+w[0][0] + +w[1][0]) / 2, (+w[0][1] + +w[1][1]) / 2];
  }
  function T(w, S, k, I) {
    w.on("start.zoom", function() {
      E(this, arguments).event(I).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(I).end();
    }).tween("zoom", function() {
      var L = this, z = arguments, V = E(L, z).event(I), F = t.apply(L, z), Z = k == null ? b(F) : typeof k == "function" ? k.apply(L, z) : k, X = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), Y = L.__zoom, Q = typeof S == "function" ? S.apply(L, z) : S, q = l(Y.invert(Z).concat(X / Y.k), Q.invert(Z).concat(X / Q.k));
      return function(U) {
        if (U === 1) U = Q;
        else {
          var $ = q(U), he = X / $[2];
          U = new wt(he, Z[0] - $[0] * he, Z[1] - $[1] * he);
        }
        V.zoom(null, U);
      };
    });
  }
  function E(w, S, k) {
    return !k && w.__zooming || new D(w, S);
  }
  function D(w, S) {
    this.that = w, this.args = S, this.active = 0, this.sourceEvent = null, this.extent = t.apply(w, S), this.taps = 0;
  }
  D.prototype = {
    event: function(w) {
      return w && (this.sourceEvent = w), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(w, S) {
      return this.mouse && w !== "mouse" && (this.mouse[1] = S.invert(this.mouse[0])), this.touch0 && w !== "touch" && (this.touch0[1] = S.invert(this.touch0[0])), this.touch1 && w !== "touch" && (this.touch1[1] = S.invert(this.touch1[0])), this.that.__zoom = S, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(w) {
      var S = qe(this.that).datum();
      c.call(
        w,
        this.that,
        new qh(w, {
          sourceEvent: this.sourceEvent,
          target: y,
          transform: this.that.__zoom,
          dispatch: c
        }),
        S
      );
    }
  };
  function P(w, ...S) {
    if (!e.apply(this, arguments)) return;
    var k = E(this, S).event(w), I = this.__zoom, L = Math.max(i[0], Math.min(i[1], I.k * Math.pow(2, r.apply(this, arguments)))), z = Je(w);
    if (k.wheel)
      (k.mouse[0][0] !== z[0] || k.mouse[0][1] !== z[1]) && (k.mouse[1] = I.invert(k.mouse[0] = z)), clearTimeout(k.wheel);
    else {
      if (I.k === L) return;
      k.mouse = [z, I.invert(z)], Pr(this), k.start();
    }
    zn(w), k.wheel = setTimeout(V, v), k.zoom("mouse", n(C(N(I, L), k.mouse[0], k.mouse[1]), k.extent, s));
    function V() {
      k.wheel = null, k.end();
    }
  }
  function R(w, ...S) {
    if (f || !e.apply(this, arguments)) return;
    var k = w.currentTarget, I = E(this, S, !0).event(w), L = qe(w.view).on("mousemove.zoom", Z, !0).on("mouseup.zoom", X, !0), z = Je(w, k), V = w.clientX, F = w.clientY;
    Ba(w.view), yo(w), I.mouse = [z, this.__zoom.invert(z)], Pr(this), I.start();
    function Z(Y) {
      if (zn(Y), !I.moved) {
        var Q = Y.clientX - V, q = Y.clientY - F;
        I.moved = Q * Q + q * q > m;
      }
      I.event(Y).zoom("mouse", n(C(I.that.__zoom, I.mouse[0] = Je(Y, k), I.mouse[1]), I.extent, s));
    }
    function X(Y) {
      L.on("mousemove.zoom mouseup.zoom", null), Fa(Y.view, I.moved), zn(Y), I.event(Y).end();
    }
  }
  function K(w, ...S) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom, I = Je(w.changedTouches ? w.changedTouches[0] : w, this), L = k.invert(I), z = k.k * (w.shiftKey ? 0.5 : 2), V = n(C(N(k, z), I, L), t.apply(this, S), s);
      zn(w), a > 0 ? qe(this).transition().duration(a).call(T, V, I, w) : qe(this).call(y.transform, V, I, w);
    }
  }
  function A(w, ...S) {
    if (e.apply(this, arguments)) {
      var k = w.touches, I = k.length, L = E(this, S, w.changedTouches.length === I).event(w), z, V, F, Z;
      for (yo(w), V = 0; V < I; ++V)
        F = k[V], Z = Je(F, this), Z = [Z, this.__zoom.invert(Z), F.identifier], L.touch0 ? !L.touch1 && L.touch0[2] !== Z[2] && (L.touch1 = Z, L.taps = 0) : (L.touch0 = Z, z = !0, L.taps = 1 + !!d);
      d && (d = clearTimeout(d)), z && (L.taps < 2 && (h = Z[0], d = setTimeout(function() {
        d = null;
      }, g)), Pr(this), L.start());
    }
  }
  function x(w, ...S) {
    if (this.__zooming) {
      var k = E(this, S).event(w), I = w.changedTouches, L = I.length, z, V, F, Z;
      for (zn(w), z = 0; z < L; ++z)
        V = I[z], F = Je(V, this), k.touch0 && k.touch0[2] === V.identifier ? k.touch0[0] = F : k.touch1 && k.touch1[2] === V.identifier && (k.touch1[0] = F);
      if (V = k.that.__zoom, k.touch1) {
        var X = k.touch0[0], Y = k.touch0[1], Q = k.touch1[0], q = k.touch1[1], U = (U = Q[0] - X[0]) * U + (U = Q[1] - X[1]) * U, $ = ($ = q[0] - Y[0]) * $ + ($ = q[1] - Y[1]) * $;
        V = N(V, Math.sqrt(U / $)), F = [(X[0] + Q[0]) / 2, (X[1] + Q[1]) / 2], Z = [(Y[0] + q[0]) / 2, (Y[1] + q[1]) / 2];
      } else if (k.touch0) F = k.touch0[0], Z = k.touch0[1];
      else return;
      k.zoom("touch", n(C(V, F, Z), k.extent, s));
    }
  }
  function M(w, ...S) {
    if (this.__zooming) {
      var k = E(this, S).event(w), I = w.changedTouches, L = I.length, z, V;
      for (yo(w), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), z = 0; z < L; ++z)
        V = I[z], k.touch0 && k.touch0[2] === V.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === V.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0) k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (V = Je(V, this), Math.hypot(h[0] - V[0], h[1] - V[1]) < p)) {
        var F = qe(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return y.wheelDelta = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : wr(+w), y) : r;
  }, y.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : wr(!!w), y) : e;
  }, y.touchable = function(w) {
    return arguments.length ? (o = typeof w == "function" ? w : wr(!!w), y) : o;
  }, y.extent = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : wr([[+w[0][0], +w[0][1]], [+w[1][0], +w[1][1]]]), y) : t;
  }, y.scaleExtent = function(w) {
    return arguments.length ? (i[0] = +w[0], i[1] = +w[1], y) : [i[0], i[1]];
  }, y.translateExtent = function(w) {
    return arguments.length ? (s[0][0] = +w[0][0], s[1][0] = +w[1][0], s[0][1] = +w[0][1], s[1][1] = +w[1][1], y) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, y.constrain = function(w) {
    return arguments.length ? (n = w, y) : n;
  }, y.duration = function(w) {
    return arguments.length ? (a = +w, y) : a;
  }, y.interpolate = function(w) {
    return arguments.length ? (l = w, y) : l;
  }, y.on = function() {
    var w = c.on.apply(c, arguments);
    return w === c ? y : w;
  }, y.clickDistance = function(w) {
    return arguments.length ? (m = (w = +w) * w, y) : Math.sqrt(m);
  }, y.tapDistance = function(w) {
    return arguments.length ? (p = +w, y) : p;
  }, y;
}
const Un = {
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
], rl = ["Enter", " ", "Escape"], $h = {
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
var kn;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(kn || (kn = {}));
var yn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(yn || (yn = {}));
var Br;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Br || (Br = {}));
const Xo = {
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
var Fr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Fr || (Fr = {}));
var J;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(J || (J = {}));
const is = {
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
function ss(e, t, n) {
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
const ol = (e) => "id" in e && "source" in e && "target" in e, ng = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), vi = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), cr = (e, t = [0, 0]) => {
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
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : vi(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Kr(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return so(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ao(n);
}, ur = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = so(n, Kr(o)), r = !0);
  }), r ? ao(n) : { x: 0, y: 0, width: 0, height: 0 };
}, pi = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...fr(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = c;
    if (s && !h || f)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, v = d.height ?? c.height ?? c.initialHeight ?? null, m = jn(a, Cn(c)), p = (g ?? 0) * (v ?? 0), y = i && m > 0;
    (!c.internals.handleBounds || y || m >= p || c.dragging) && l.push(c);
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
  const a = ig(e, s), l = ur(a), c = mi(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function il({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Un.error005());
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
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Un.error015()), {
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
    const g = i.has(f.id), v = !g && f.parentId && s.find((m) => m.id === f.parentId);
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
const Sn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), sn = (e = { x: 0, y: 0 }, t, n) => ({
  x: Sn(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Sn(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function sl(e, t, n) {
  const { width: r, height: o } = Yt(n), { x: i, y: s } = n.internals.positionAbsolute;
  return sn(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const as = (e, t, n) => e < t ? Sn(Math.abs(e - t), 1, t) / t : e > n ? -Sn(Math.abs(e - n), 1, t) / t : 0, al = (e, t, n = 15, r = 40) => {
  const o = as(e.x, r, t.width - r) * n, i = as(e.y, r, t.height - r) * n;
  return [o, i];
}, so = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Zo = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), ao = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Cn = (e, t = [0, 0]) => {
  const { x: n, y: r } = vi(e) ? e.internals.positionAbsolute : cr(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Kr = (e, t = [0, 0]) => {
  const { x: n, y: r } = vi(e) ? e.internals.positionAbsolute : cr(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, ll = (e, t) => ao(so(Zo(e), Zo(t))), jn = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, ls = (e) => _t(e.width) && _t(e.height) && _t(e.x) && _t(e.y), _t = (e) => !isNaN(e) && isFinite(e), lg = (e, t) => {
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
  const { x: s, y: a } = Yr(e, [t, n, r]), { x: l, y: c } = Yr({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, h = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const mi = (e, t, n, r, o, i) => {
  const s = cg(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = Sn(c, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, v = n / 2 - f * d, m = ug(e, g, v, d, t, n), p = {
    left: Math.min(m.left - s.left, 0),
    top: Math.min(m.top - s.top, 0),
    right: Math.min(m.right - s.right, 0),
    bottom: Math.min(m.bottom - s.bottom, 0)
  };
  return {
    x: g - p.left + p.right,
    y: v - p.top + p.bottom,
    zoom: d
  };
}, Jn = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Nn(e) {
  return e != null && e !== "parent";
}
function Yt(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function cl(e) {
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
function wo(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = et(e), a = fr({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? dr(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const ul = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), dl = (e) => e?.getRootNode?.() || window?.document, hg = ["INPUT", "SELECT", "TEXTAREA"];
function fl(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : hg.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const hl = (e) => "clientX" in e, et = (e, t) => {
  const n = hl(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, cs = (e, t, n, r, o) => {
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
      ...ul(s)
    };
  });
};
function gg({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), h = Math.abs(c - t);
  return [l, c, d, h];
}
function _r(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function us({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case J.Left:
      return [t - _r(t - r, i), n];
    case J.Right:
      return [t + _r(r - t, i), n];
    case J.Top:
      return [t, n - _r(n - o, i)];
    case J.Bottom:
      return [t, n + _r(o - n, i)];
  }
}
function gl({ sourceX: e, sourceY: t, sourcePosition: n = J.Bottom, targetX: r, targetY: o, targetPosition: i = J.Top, curvature: s = 0.25 }) {
  const [a, l] = us({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = us({
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
function vl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
  const i = so(Kr(e), Kr(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return jn(s, ao(i)) > 0;
}
const mg = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, yg = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), wg = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || mg;
  let o;
  return ol(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, yg(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function pl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = vl({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const ds = {
  [J.Left]: { x: -1, y: 0 },
  [J.Right]: { x: 1, y: 0 },
  [J.Top]: { x: 0, y: -1 },
  [J.Bottom]: { x: 0, y: 1 }
}, _g = ({ source: e, sourcePosition: t = J.Bottom, target: n }) => t === J.Left || t === J.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, fs = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function bg({ source: e, sourcePosition: t = J.Bottom, target: n, targetPosition: r = J.Top, center: o, offset: i, stepPosition: s }) {
  const a = ds[t], l = ds[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = _g({
    source: c,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let v = [], m, p;
  const y = { x: 0, y: 0 }, N = { x: 0, y: 0 }, [, , C, b] = vl({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (m = o.x ?? c.x + (d.x - c.x) * s, p = o.y ?? (c.y + d.y) / 2) : (m = o.x ?? (c.x + d.x) / 2, p = o.y ?? c.y + (d.y - c.y) * s);
    const E = [
      { x: m, y: c.y },
      { x: m, y: d.y }
    ], D = [
      { x: c.x, y: p },
      { x: d.x, y: p }
    ];
    a[f] === g ? v = f === "x" ? E : D : v = f === "x" ? D : E;
  } else {
    const E = [{ x: c.x, y: d.y }], D = [{ x: d.x, y: c.y }];
    if (f === "x" ? v = a.x === g ? D : E : v = a.y === g ? E : D, t === r) {
      const x = Math.abs(e[f] - n[f]);
      if (x <= i) {
        const M = Math.min(i - 1, i - x);
        a[f] === g ? y[f] = (c[f] > e[f] ? -1 : 1) * M : N[f] = (d[f] > n[f] ? -1 : 1) * M;
      }
    }
    if (t !== r) {
      const x = f === "x" ? "y" : "x", M = a[f] === l[x], w = c[x] > d[x], S = c[x] < d[x];
      (a[f] === 1 && (!M && w || M && S) || a[f] !== 1 && (!M && S || M && w)) && (v = f === "x" ? E : D);
    }
    const P = { x: c.x + y.x, y: c.y + y.y }, R = { x: d.x + N.x, y: d.y + N.y }, K = Math.max(Math.abs(P.x - v[0].x), Math.abs(R.x - v[0].x)), A = Math.max(Math.abs(P.y - v[0].y), Math.abs(R.y - v[0].y));
    K >= A ? (m = (P.x + R.x) / 2, p = v[0].y) : (m = v[0].x, p = (P.y + R.y) / 2);
  }
  return [[
    e,
    { x: c.x + y.x, y: c.y + y.y },
    ...v,
    { x: d.x + N.x, y: d.y + N.y },
    n
  ], m, p, C, b];
}
function xg(e, t, n, r) {
  const o = Math.min(fs(e, t) / 2, fs(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function yi({ sourceX: e, sourceY: t, sourcePosition: n = J.Bottom, targetX: r, targetY: o, targetPosition: i = J.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, v, m] = bg({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [h.reduce((y, N, C) => {
    let b = "";
    return C > 0 && C < h.length - 1 ? b = xg(h[C - 1], N, h[C + 1], s) : b = `${C === 0 ? "M" : "L"}${N.x} ${N.y}`, y += b, y;
  }, ""), f, g, v, m];
}
function hs(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Eg(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!hs(t) || !hs(n))
    return null;
  const r = t.internals.handleBounds || gs(t.handles), o = n.internals.handleBounds || gs(n.handles), i = vs(r?.source ?? [], e.sourceHandle), s = vs(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === kn.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Un.error008(i ? "target" : "source", {
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
function gs(e) {
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
function vs(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Wo(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function kg(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = Wo(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const ml = 1e3, Sg = 10, wi = {
  nodeOrigin: [0, 0],
  nodeExtent: Yo,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, Cg = {
  ...wi,
  checkEquality: !0
};
function _i(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Ng(e, t, n) {
  const r = _i(wi, n);
  for (const o of e.values())
    if (o.parentId)
      xi(o, e, t, r);
    else {
      const i = cr(o, r.nodeOrigin), s = Nn(o.extent) ? o.extent : r.nodeExtent, a = sn(i, s, Yt(o));
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
function bi(e) {
  return e === "manual";
}
function Mg(e, t, n, r = {}) {
  const o = _i(Cg, r), i = { i: 0 }, s = new Map(t), a = o?.elevateNodesOnSelect && !bi(o.zIndexMode) ? ml : 0;
  let l = e.length > 0;
  t.clear(), n.clear();
  for (const c of e) {
    let d = s.get(c.id);
    if (o.checkEquality && c === d?.internals.userNode)
      t.set(c.id, d);
    else {
      const h = cr(c, o.nodeOrigin), f = Nn(c.extent) ? c.extent : o.nodeExtent, g = sn(h, f, Yt(c));
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
          z: yl(c, a, o.zIndexMode),
          userNode: c
        }
      }, t.set(c.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (l = !1), c.parentId && xi(d, t, n, r, i);
  }
  return l;
}
function Ag(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function xi(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a, zIndexMode: l } = _i(wi, r), c = e.parentId, d = t.get(c);
  if (!d) {
    console.warn(`Parent node ${c} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Ag(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && l === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * Sg), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const h = i && !bi(l) ? ml : 0, { x: f, y: g, z: v } = Tg(e, d, s, a, h, l), { positionAbsolute: m } = e.internals, p = f !== m.x || g !== m.y;
  (p || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: f, y: g } : m,
      z: v
    }
  });
}
function yl(e, t, n) {
  const r = _t(e.zIndex) ? e.zIndex : 0;
  return bi(n) ? r : r + (e.selected ? t : 0);
}
function Tg(e, t, n, r, o, i) {
  const { x: s, y: a } = t.internals.positionAbsolute, l = Yt(e), c = cr(e, n), d = Nn(e.extent) ? sn(c, e.extent, l) : c;
  let h = sn({ x: s + d.x, y: a + d.y }, r, l);
  e.extent === "parent" && (h = sl(h, l, t));
  const f = yl(e, o, i), g = t.internals.z ?? 0;
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
    const l = i.get(s.parentId)?.expandedRect ?? Cn(a), c = ll(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = Yt(a), h = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), m = Math.max(d.height, Math.round(s.height)), p = (v - d.width) * h[0], y = (m - d.height) * h[1];
    (f > 0 || g > 0 || p || y) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + p,
        y: a.position.y - g + y
      }
    }), n.get(l)?.forEach((N) => {
      e.some((C) => C.id === N.id) || o.push({
        id: N.id,
        type: "position",
        position: {
          x: N.position.x + f,
          y: N.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: v + (f ? h[0] * f - p : 0),
        height: m + (g ? h[1] * g - y : 0)
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
    const m = ul(g.nodeElement), p = v.measured.width !== m.width || v.measured.height !== m.height;
    if (!!(m.width && m.height && (p || !v.internals.handleBounds || g.force))) {
      const N = g.nodeElement.getBoundingClientRect(), C = Nn(v.extent) ? v.extent : i;
      let { positionAbsolute: b } = v.internals;
      v.parentId && v.extent === "parent" ? b = sl(b, m, t.get(v.parentId)) : C && (b = sn(b, C, m));
      const T = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: b,
          handleBounds: {
            source: cs("source", g.nodeElement, N, h, v.id),
            target: cs("target", g.nodeElement, N, h, v.id)
          }
        }
      };
      t.set(v.id, T), v.parentId && xi(T, t, n, { nodeOrigin: o, zIndexMode: s }), l = !0, p && (c.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && f.push({
        id: v.id,
        parentId: v.parentId,
        rect: Cn(T, o)
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
function ps(e, t, n, r, o, i) {
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
    ps("source", l, d, e, o, s), ps("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function wl(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : wl(n, t) : !1;
}
function ms(e, t, n) {
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
function _o({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
  }, s = dr(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function Lg({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, v = !1, m = null;
  function p({ noDragClassName: N, handleSelector: C, domNode: b, isSelectable: T, nodeId: E, nodeClickDistance: D = 0 }) {
    f = qe(b);
    function P({ x, y: M }) {
      const { nodeLookup: w, nodeExtent: S, snapGrid: k, snapToGrid: I, nodeOrigin: L, onNodeDrag: z, onSelectionDrag: V, onError: F, updateNodePositions: Z } = t();
      i = { x, y: M };
      let X = !1;
      const Y = a.size > 1, Q = Y && S ? Zo(ur(a)) : null, q = Y && I ? Hg({
        dragItems: a,
        snapGrid: k,
        x,
        y: M
      }) : null;
      for (const [U, $] of a) {
        if (!w.has(U))
          continue;
        let he = { x: x - $.distance.x, y: M - $.distance.y };
        I && (he = q ? {
          x: Math.round(he.x + q.x),
          y: Math.round(he.y + q.y)
        } : dr(he, k));
        let be = null;
        if (Y && S && !$.extent && Q) {
          const { positionAbsolute: ie } = $.internals, Te = ie.x - Q.x + S[0][0], Nt = ie.x + $.measured.width - Q.x2 + S[1][0], Pt = ie.y - Q.y + S[0][1], ht = ie.y + $.measured.height - Q.y2 + S[1][1];
          be = [
            [Te, Pt],
            [Nt, ht]
          ];
        }
        const { position: re, positionAbsolute: pe } = il({
          nodeId: U,
          nextPosition: he,
          nodeLookup: w,
          nodeExtent: be || S,
          nodeOrigin: L,
          onError: F
        });
        X = X || $.position.x !== re.x || $.position.y !== re.y, $.position = re, $.internals.positionAbsolute = pe;
      }
      if (v = v || X, !!X && (Z(a, !0), m && (r || z || !E && V))) {
        const [U, $] = _o({
          nodeId: E,
          dragItems: a,
          nodeLookup: w
        });
        r?.(m, a, U, $), z?.(m, U, $), E || V?.(m, $);
      }
    }
    async function R() {
      if (!d)
        return;
      const { transform: x, panBy: M, autoPanSpeed: w, autoPanOnNodeDrag: S } = t();
      if (!S) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [k, I] = al(c, d, w);
      (k !== 0 || I !== 0) && (i.x = (i.x ?? 0) - k / x[2], i.y = (i.y ?? 0) - I / x[2], await M({ x: k, y: I }) && P(i)), s = requestAnimationFrame(R);
    }
    function K(x) {
      const { nodeLookup: M, multiSelectionActive: w, nodesDraggable: S, transform: k, snapGrid: I, snapToGrid: L, selectNodesOnDrag: z, onNodeDragStart: V, onSelectionDragStart: F, unselectNodesAndEdges: Z } = t();
      h = !0, (!z || !T) && !w && E && (M.get(E)?.selected || Z()), T && z && E && e?.(E);
      const X = wo(x.sourceEvent, { transform: k, snapGrid: I, snapToGrid: L, containerBounds: d });
      if (i = X, a = Rg(M, S, X, E), a.size > 0 && (n || V || !E && F)) {
        const [Y, Q] = _o({
          nodeId: E,
          dragItems: a,
          nodeLookup: M
        });
        n?.(x.sourceEvent, a, Y, Q), V?.(x.sourceEvent, Y, Q), E || F?.(x.sourceEvent, Q);
      }
    }
    const A = sf().clickDistance(D).on("start", (x) => {
      const { domNode: M, nodeDragThreshold: w, transform: S, snapGrid: k, snapToGrid: I } = t();
      d = M?.getBoundingClientRect() || null, g = !1, v = !1, m = x.sourceEvent, w === 0 && K(x), i = wo(x.sourceEvent, { transform: S, snapGrid: k, snapToGrid: I, containerBounds: d }), c = et(x.sourceEvent, d);
    }).on("drag", (x) => {
      const { autoPanOnNodeDrag: M, transform: w, snapGrid: S, snapToGrid: k, nodeDragThreshold: I, nodeLookup: L } = t(), z = wo(x.sourceEvent, { transform: w, snapGrid: S, snapToGrid: k, containerBounds: d });
      if (m = x.sourceEvent, (x.sourceEvent.type === "touchmove" && x.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      E && !L.has(E)) && (g = !0), !g) {
        if (!l && M && h && (l = !0, R()), !h) {
          const V = et(x.sourceEvent, d), F = V.x - c.x, Z = V.y - c.y;
          Math.sqrt(F * F + Z * Z) > I && K(x);
        }
        (i.x !== z.xSnapped || i.y !== z.ySnapped) && a && h && (c = et(x.sourceEvent, d), P(z));
      }
    }).on("end", (x) => {
      if (!(!h || g) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: M, updateNodePositions: w, onNodeDragStop: S, onSelectionDragStop: k } = t();
        if (v && (w(a, !1), v = !1), o || S || !E && k) {
          const [I, L] = _o({
            nodeId: E,
            dragItems: a,
            nodeLookup: M,
            dragging: !1
          });
          o?.(x.sourceEvent, a, I, L), S?.(x.sourceEvent, I, L), E || k?.(x.sourceEvent, L);
        }
      }
    }).filter((x) => {
      const M = x.target;
      return !x.button && (!N || !ms(M, `.${N}`, b)) && (!C || ms(M, C, b));
    });
    f.call(A);
  }
  function y() {
    f?.on(".drag", null);
  }
  return {
    update: p,
    destroy: y
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
    jn(o, Cn(i)) > 0 && r.push(i);
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
function _l(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...an(s, l, l.position, !0) } : l;
}
function bl(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Kg(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const xl = () => !0;
function Yg(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: v, onConnect: m, onConnectEnd: p, isValidConnection: y = xl, onReconnectEnd: N, updateConnection: C, getTransform: b, getFromHandle: T, autoPanSpeed: E, dragThreshold: D = 1, handleDomNode: P }) {
  const R = dl(e.target);
  let K = 0, A;
  const { x, y: M } = et(e), w = bl(i, P), S = a?.getBoundingClientRect();
  let k = !1;
  if (!S || !w)
    return;
  const I = _l(o, w, r, l, t);
  if (!I)
    return;
  let L = et(e, S), z = !1, V = null, F = !1, Z = null;
  function X() {
    if (!d || !S)
      return;
    const [re, pe] = al(L, S, E);
    f({ x: re, y: pe }), K = requestAnimationFrame(X);
  }
  const Y = {
    ...I,
    nodeId: o,
    type: w,
    position: I.position
  }, Q = l.get(o);
  let U = {
    inProgress: !0,
    isValid: null,
    from: an(Q, Y, J.Left, !0),
    fromHandle: Y,
    fromPosition: Y.position,
    fromNode: Q,
    to: L,
    toHandle: null,
    toPosition: is[Y.position],
    toNode: null,
    pointer: L
  };
  function $() {
    k = !0, C(U), v?.(e, { nodeId: o, handleId: r, handleType: w });
  }
  D === 0 && $();
  function he(re) {
    if (!k) {
      const { x: ht, y: fe } = et(re), we = ht - x, je = fe - M;
      if (!(we * we + je * je > D * D))
        return;
      $();
    }
    if (!T() || !Y) {
      be(re);
      return;
    }
    const pe = b();
    L = et(re, S), A = Fg(fr(L, pe, !1, [1, 1]), n, l, Y), z || (X(), z = !0);
    const ie = El(re, {
      handle: A,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: y,
      doc: R,
      lib: c,
      flowId: h,
      nodeLookup: l
    });
    Z = ie.handleDomNode, V = ie.connection, F = Kg(!!A, ie.isValid);
    const Te = l.get(o), Nt = Te ? an(Te, Y, J.Left, !0) : U.from, Pt = {
      ...U,
      from: Nt,
      isValid: F,
      to: ie.toHandle && F ? Yr({ x: ie.toHandle.x, y: ie.toHandle.y }, pe) : L,
      toHandle: ie.toHandle,
      toPosition: F && ie.toHandle ? ie.toHandle.position : is[Y.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null,
      pointer: L
    };
    C(Pt), U = Pt;
  }
  function be(re) {
    if (!("touches" in re && re.touches.length > 0)) {
      if (k) {
        (A || Z) && V && F && m?.(V);
        const { inProgress: pe, ...ie } = U, Te = {
          ...ie,
          toPosition: U.toHandle ? U.toPosition : null
        };
        p?.(re, Te), i && N?.(re, Te);
      }
      g(), cancelAnimationFrame(K), z = !1, F = !1, V = null, Z = null, R.removeEventListener("mousemove", he), R.removeEventListener("mouseup", be), R.removeEventListener("touchmove", he), R.removeEventListener("touchend", be);
    }
  }
  R.addEventListener("mousemove", he), R.addEventListener("mouseup", be), R.addEventListener("touchmove", he), R.addEventListener("touchend", be);
}
function El(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = xl, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = et(e), m = s.elementFromPoint(g, v), p = m?.classList.contains(`${a}-flow__handle`) ? m : f, y = {
    handleDomNode: p,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (p) {
    const N = bl(void 0, p), C = p.getAttribute("data-nodeid"), b = p.getAttribute("data-handleid"), T = p.classList.contains("connectable"), E = p.classList.contains("connectableend");
    if (!C || !N)
      return y;
    const D = {
      source: h ? C : r,
      sourceHandle: h ? b : o,
      target: h ? r : C,
      targetHandle: h ? o : b
    };
    y.connection = D;
    const R = T && E && (n === kn.Strict ? h && N === "source" || !h && N === "target" : C !== r || b !== o);
    y.isValid = R && c(D), y.toHandle = _l(C, N, b, d, n, !0);
  }
  return y;
}
const ys = {
  onPointerDown: Yg,
  isValid: El
};
function Xg({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = qe(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const v = (C) => {
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const b = n(), T = C.sourceEvent.ctrlKey && Jn() ? 10 : 1, E = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * d, D = b[2] * Math.pow(2, E * T);
      t.scaleTo(D);
    };
    let m = [0, 0];
    const p = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (m = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, y = (C) => {
      const b = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const T = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], E = [T[0] - m[0], T[1] - m[1]];
      m = T;
      const D = r() * Math.max(b[2], Math.log(b[2])) * (g ? -1 : 1), P = {
        x: b[0] - E[0] * D,
        y: b[1] - E[1] * D
      }, R = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: P.x,
        y: P.y,
        zoom: b[2]
      }, R, a);
    }, N = nl().on("start", p).on("zoom", h ? y : null).on("zoom.wheel", f ? v : null);
    o.call(N, {});
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
const lo = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), bo = ({ x: e, y: t, zoom: n }) => io.translate(e, t).scale(n), vn = (e, t) => e.target.closest(`.${t}`), kl = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Zg = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, xo = (e, t = 0, n = Zg, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Sl = (e) => {
  const t = e.ctrlKey && Jn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function Wg({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (vn(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const p = Je(d), y = Sl(d), N = h * Math.pow(2, y);
      r.scaleTo(n, N, p, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === yn.Vertical ? 0 : d.deltaX * f, v = o === yn.Horizontal ? 0 : d.deltaY * f;
    !Jn() && d.shiftKey && o !== yn.Vertical && (g = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(v / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const m = lo(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, m), e.panScrollTimeout = setTimeout(() => {
      c?.(d, m), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, m));
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
    const o = lo(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Ug({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && kl(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, lo(i.transform));
  };
}
function jg({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && kl(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = lo(s.transform);
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
    const m = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || v) && m;
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
  }, d = e.getBoundingClientRect(), h = nl().scaleExtent([t, n]).translateExtent(r), f = qe(e).call(h);
  N({
    x: o.x,
    y: o.y,
    zoom: Sn(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), v = f.on("dblclick.zoom");
  h.wheelDelta(Sl);
  function m(A, x) {
    return f ? new Promise((M) => {
      h?.interpolate(x?.interpolate === "linear" ? Fn : Sr).transform(xo(f, x?.duration, x?.ease, () => M(!0)), A);
    }) : Promise.resolve(!1);
  }
  function p({ noWheelClassName: A, noPanClassName: x, onPaneContextMenu: M, userSelectionActive: w, panOnScroll: S, panOnDrag: k, panOnScrollMode: I, panOnScrollSpeed: L, preventScrolling: z, zoomOnPinch: V, zoomOnScroll: F, zoomOnDoubleClick: Z, zoomActivationKeyPressed: X, lib: Y, onTransformChange: Q, connectionInProgress: q, paneClickDistance: U, selectionOnDrag: $ }) {
    w && !c.isZoomingOrPanning && y();
    const he = S && !X && !w;
    h.clickDistance($ ? 1 / 0 : !_t(U) || U < 0 ? 0 : U);
    const be = he ? Wg({
      zoomPanValues: c,
      noWheelClassName: A,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: I,
      panOnScrollSpeed: L,
      zoomOnPinch: V,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : qg({
      noWheelClassName: A,
      preventScrolling: z,
      d3ZoomHandler: g
    });
    if (f.on("wheel.zoom", be, { passive: !1 }), !w) {
      const pe = Gg({
        zoomPanValues: c,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", pe);
      const ie = Ug({
        zoomPanValues: c,
        panOnDrag: k,
        onPaneContextMenu: !!M,
        onPanZoom: i,
        onTransformChange: Q
      });
      h.on("zoom", ie);
      const Te = jg({
        zoomPanValues: c,
        panOnDrag: k,
        panOnScroll: S,
        onPaneContextMenu: M,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", Te);
    }
    const re = Jg({
      zoomActivationKeyPressed: X,
      panOnDrag: k,
      zoomOnScroll: F,
      panOnScroll: S,
      zoomOnDoubleClick: Z,
      zoomOnPinch: V,
      userSelectionActive: w,
      noPanClassName: x,
      noWheelClassName: A,
      lib: Y,
      connectionInProgress: q
    });
    h.filter(re), Z ? f.on("dblclick.zoom", v) : f.on("dblclick.zoom", null);
  }
  function y() {
    h.on("zoom", null);
  }
  async function N(A, x, M) {
    const w = bo(A), S = h?.constrain()(w, x, M);
    return S && await m(S), new Promise((k) => k(S));
  }
  async function C(A, x) {
    const M = bo(A);
    return await m(M, x), new Promise((w) => w(M));
  }
  function b(A) {
    if (f) {
      const x = bo(A), M = f.property("__zoom");
      (M.k !== A.zoom || M.x !== A.x || M.y !== A.y) && h?.transform(f, x, null, { sync: !0 });
    }
  }
  function T() {
    const A = f ? tl(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: A.x, y: A.y, zoom: A.k };
  }
  function E(A, x) {
    return f ? new Promise((M) => {
      h?.interpolate(x?.interpolate === "linear" ? Fn : Sr).scaleTo(xo(f, x?.duration, x?.ease, () => M(!0)), A);
    }) : Promise.resolve(!1);
  }
  function D(A, x) {
    return f ? new Promise((M) => {
      h?.interpolate(x?.interpolate === "linear" ? Fn : Sr).scaleBy(xo(f, x?.duration, x?.ease, () => M(!0)), A);
    }) : Promise.resolve(!1);
  }
  function P(A) {
    h?.scaleExtent(A);
  }
  function R(A) {
    h?.translateExtent(A);
  }
  function K(A) {
    const x = !_t(A) || A < 0 ? 0 : A;
    h?.clickDistance(x);
  }
  return {
    update: p,
    destroy: y,
    setViewport: C,
    setViewportConstrained: N,
    getViewport: T,
    scaleTo: E,
    scaleBy: D,
    setScaleExtent: P,
    setTranslateExtent: R,
    syncViewport: b,
    setClickDistance: K
  };
}
var ws;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(ws || (ws = {}));
function Ei() {
  const e = {};
  return [
    (t) => {
      if (t && !fc(e))
        throw new Error(t);
      return Jo(e);
    },
    (t) => Qo(e, t)
  ];
}
const [$g, e0] = Ei(), [t0, n0] = Ei(), [r0, o0] = Ei();
var i0 = /* @__PURE__ */ ee("<div><!></div>");
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
  const l = $g("Handle must be used within a Custom Node component"), c = t0("Handle must be used within a Custom Node component");
  let d = /* @__PURE__ */ _(() => r() === "target"), h = /* @__PURE__ */ _(() => t.isConnectable !== void 0 ? t.isConnectable : c.value), f = Xt(), g = /* @__PURE__ */ _(() => f.ariaLabelConfig), v = null;
  ra(() => {
    if (t.onconnect || t.ondisconnect) {
      f.edges;
      let x = f.connectionLookup.get(`${l}-${r()}${n() ? `-${n()}` : ""}`);
      if (v && !eg(x, v)) {
        const M = x ?? /* @__PURE__ */ new Map();
        ss(v, M, t.ondisconnect), ss(M, v, t.onconnect);
      }
      v = new Map(x);
    }
  });
  let m = /* @__PURE__ */ _(() => {
    if (!f.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: x, toHandle: M, isValid: w } = f.connection, S = x && x.nodeId === l && x.type === r() && x.id === n(), k = M && M.nodeId === l && M.type === r() && M.id === n(), I = f.connectionMode === kn.Strict ? x?.type !== r() : l !== x?.nodeId || n() !== x?.id;
    return [
      !0,
      S,
      k,
      I,
      k && w
    ];
  }), p = /* @__PURE__ */ _(() => Qn(u(m), 5)), y = /* @__PURE__ */ _(() => u(p)[0]), N = /* @__PURE__ */ _(() => u(p)[1]), C = /* @__PURE__ */ _(() => u(p)[2]), b = /* @__PURE__ */ _(() => u(p)[3]), T = /* @__PURE__ */ _(() => u(p)[4]);
  function E(x) {
    const M = f.onbeforeconnect ? f.onbeforeconnect(x) : x;
    M && (f.addEdge(M), f.onconnect?.(x));
  }
  function D(x) {
    const M = hl(x);
    x.currentTarget && (M && x.button === 0 || !M) && ys.onPointerDown(x, {
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
      onConnect: E,
      onConnectStart: (w, S) => {
        f.onconnectstart?.(w, {
          nodeId: S.nodeId,
          handleId: S.handleId,
          handleType: S.handleType
        });
      },
      onConnectEnd: (w, S) => {
        f.onconnectend?.(w, S);
      },
      getTransform: () => [f.viewport.x, f.viewport.y, f.viewport.zoom],
      getFromHandle: () => f.connection.fromHandle,
      dragThreshold: f.connectionDragThreshold,
      handleDomNode: x.currentTarget
    });
  }
  function P(x) {
    if (!l || !f.clickConnectStartHandle && !i())
      return;
    if (!f.clickConnectStartHandle) {
      f.onclickconnectstart?.(x, { nodeId: l, handleId: n(), handleType: r() }), f.clickConnectStartHandle = { nodeId: l, type: r(), id: n() };
      return;
    }
    const M = dl(x.target), w = t.isValidConnection ?? f.isValidConnection, { connectionMode: S, clickConnectStartHandle: k, flowId: I, nodeLookup: L } = f, { connection: z, isValid: V } = ys.isValid(x, {
      handle: { nodeId: l, id: n(), type: r() },
      connectionMode: S,
      fromNodeId: k.nodeId,
      fromHandleId: k.id ?? null,
      fromType: k.type,
      isValidConnection: w,
      flowId: I,
      doc: M,
      lib: "svelte",
      nodeLookup: L
    });
    V && z && E(z);
    const F = structuredClone(Vs(f.connection));
    delete F.inProgress, F.toPosition = F.toHandle ? F.toHandle.position : null, f.onclickconnectend?.(x, F), f.clickConnectStartHandle = null;
  }
  var R = i0(), K = () => {
  };
  Ft(R, () => ({
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
    onmousedown: D,
    ontouchstart: D,
    onclick: f.clickConnect ? P : void 0,
    onkeypress: K,
    style: t.style,
    role: "button",
    "aria-label": u(g)["handle.ariaLabel"],
    tabindex: "-1",
    ...a,
    [At]: {
      valid: u(T),
      connectingto: u(C),
      connectingfrom: u(N),
      source: !u(d),
      target: u(d),
      connectablestart: i(),
      connectableend: s(),
      connectable: u(h),
      connectionindicator: u(h) && (!u(y) || u(b)) && (u(y) || f.clickConnectStartHandle ? s() : i())
    }
  }));
  var A = W(R);
  He(A, () => t.children ?? Lt), B(e, R), ne();
}
var s0 = /* @__PURE__ */ ee("<!> <!>", 1);
function Cl(e, t) {
  te(t, !0);
  let n = H(t, "targetPosition", 19, () => J.Top), r = H(t, "sourcePosition", 19, () => J.Bottom);
  var o = s0(), i = se(o);
  Ht(i, {
    type: "target",
    get position() {
      return n();
    }
  });
  var s = G(i), a = G(s);
  Ht(a, {
    type: "source",
    get position() {
      return r();
    }
  }), ce(() => Ae(s, ` ${t.data?.label ?? ""} `)), B(e, o), ne();
}
var a0 = /* @__PURE__ */ ee(" <!>", 1);
function l0(e, t) {
  te(t, !0);
  let n = H(t, "data", 19, () => ({ label: "Node" })), r = H(t, "sourcePosition", 19, () => J.Bottom);
  var o = a0(), i = se(o), s = G(i);
  Ht(s, {
    type: "source",
    get position() {
      return r();
    }
  }), ce(() => Ae(i, `${n()?.label ?? ""} `)), B(e, o), ne();
}
var c0 = /* @__PURE__ */ ee(" <!>", 1);
function u0(e, t) {
  te(t, !0);
  let n = H(t, "data", 19, () => ({ label: "Node" })), r = H(t, "targetPosition", 19, () => J.Top);
  var o = c0(), i = se(o), s = G(i);
  Ht(s, {
    type: "target",
    get position() {
      return r();
    }
  }), ce(() => Ae(i, `${n()?.label ?? ""} `)), B(e, o), ne();
}
function d0(e, t) {
}
function Eo(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function f0(e, t) {
  const n = /* @__PURE__ */ _(Xt), r = /* @__PURE__ */ _(() => u(n).domNode);
  let o;
  return u(r) ? Eo(e, u(r), t) : o = oa(() => {
    Ge(() => {
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
function h0() {
  let e = /* @__PURE__ */ oe(typeof window > "u");
  if (u(e)) {
    const t = oa(() => {
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
const _s = (e) => ng(e), g0 = (e) => ol(e);
function dt(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Xr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var v0 = /* @__PURE__ */ ee("<div><!></div>");
function p0(e, t) {
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
  const a = Xt(), l = r0("EdgeLabel must be used within a Custom Edge component");
  let c = /* @__PURE__ */ _(() => a.visible.edges.get(l)?.zIndex);
  var d = v0(), h = () => {
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
        display: h0().value ? "none" : void 0,
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
  var f = W(d);
  He(f, () => t.children ?? Lt), Pe(d, (g, v) => f0?.(g, v), () => "edge-labels"), B(e, d), ne();
}
var m0 = /* @__PURE__ */ ye("<path></path>"), y0 = /* @__PURE__ */ ye('<path fill="none"></path><!><!>', 1);
function co(e, t) {
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
  var o = y0(), i = se(o), s = G(i);
  {
    var a = (d) => {
      var h = m0();
      Ft(h, () => ({
        d: t.path,
        "stroke-opacity": 0,
        "stroke-width": n(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...r
      })), B(d, h);
    };
    le(s, (d) => {
      n() > 0 && d(a);
    });
  }
  var l = G(s);
  {
    var c = (d) => {
      p0(d, {
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
          ce(() => Ae(g, t.label)), B(h, g);
        },
        $$slots: { default: !0 }
      });
    };
    le(l, (d) => {
      t.label && d(c);
    });
  }
  ce(() => {
    j(i, "id", t.id), j(i, "d", t.path), Oe(i, 0, Bt(["svelte-flow__edge-path", t.class])), j(i, "marker-start", t.markerStart), j(i, "marker-end", t.markerEnd), Le(i, t.style);
  }), B(e, o);
}
function Nl(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ _(() => gl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    curvature: t.pathOptions?.curvature
  })), r = /* @__PURE__ */ _(() => Qn(u(n), 3)), o = /* @__PURE__ */ _(() => u(r)[0]), i = /* @__PURE__ */ _(() => u(r)[1]), s = /* @__PURE__ */ _(() => u(r)[2]);
  co(e, {
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
function w0(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ _(() => yi({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition
  })), r = /* @__PURE__ */ _(() => Qn(u(n), 3)), o = /* @__PURE__ */ _(() => u(r)[0]), i = /* @__PURE__ */ _(() => u(r)[1]), s = /* @__PURE__ */ _(() => u(r)[2]);
  co(e, {
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
function _0(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ _(() => pl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY
  })), r = /* @__PURE__ */ _(() => Qn(u(n), 3)), o = /* @__PURE__ */ _(() => u(r)[0]), i = /* @__PURE__ */ _(() => u(r)[1]), s = /* @__PURE__ */ _(() => u(r)[2]);
  co(e, {
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
function b0(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ _(() => yi({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    borderRadius: 0
  })), r = /* @__PURE__ */ _(() => Qn(u(n), 3)), o = /* @__PURE__ */ _(() => u(r)[0]), i = /* @__PURE__ */ _(() => u(r)[1]), s = /* @__PURE__ */ _(() => u(r)[2]);
  co(e, {
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
class x0 {
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
const E0 = /\(.+\)/, k0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class S0 extends x0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = E0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => k0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => To(o, "change", i)
    );
  }
}
function C0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return pi(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function bs(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l, zIndexMode: c } = e, d = /* @__PURE__ */ new Map();
  for (const h of t) {
    const f = r.get(h.source), g = r.get(h.target);
    if (!f || !g)
      continue;
    if (a) {
      const { visibleNodes: p, transform: y, width: N, height: C } = e;
      if (pg({
        sourceNode: f,
        targetNode: g,
        width: N,
        height: C,
        transform: y
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
    const m = Eg({
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
const Pl = {
  input: l0,
  output: u0,
  default: Cl,
  group: d0
}, Ml = {
  straight: _0,
  smoothstep: w0,
  default: Nl,
  step: b0
};
function N0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = ur(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return mi(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function P0(e) {
  class t {
    #e = /* @__PURE__ */ _(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#e);
    }
    set flowId(r) {
      O(this.#e, r);
    }
    #t = /* @__PURE__ */ oe(null);
    get domNode() {
      return u(this.#t);
    }
    set domNode(r) {
      O(this.#t, r);
    }
    #n = /* @__PURE__ */ oe(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      O(this.#n, r);
    }
    #r = /* @__PURE__ */ oe(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      O(this.#r, r);
    }
    #l = /* @__PURE__ */ oe(e.height ?? 0);
    get height() {
      return u(this.#l);
    }
    set height(r) {
      O(this.#l, r);
    }
    #i = /* @__PURE__ */ oe(e.props.zIndexMode ?? "basic");
    get zIndexMode() {
      return u(this.#i);
    }
    set zIndexMode(r) {
      O(this.#i, r);
    }
    #o = /* @__PURE__ */ _(() => {
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
    #s = /* @__PURE__ */ _(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#s);
    }
    set viewportInitialized(r) {
      O(this.#s, r);
    }
    #a = /* @__PURE__ */ _(() => (Og(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
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
    #c = /* @__PURE__ */ _(() => {
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
    #u = /* @__PURE__ */ _(() => {
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
        const { viewport: m, width: p, height: y } = this, N = [m.x, m.y, m.zoom];
        f = C0(s, N, p, y), g = bs({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: N,
          width: p,
          height: y
        });
      } else
        f = this.nodeLookup, g = bs(v);
      return { nodes: f, edges: g };
    });
    get visible() {
      return u(this.#d);
    }
    set visible(r) {
      O(this.#d, r);
    }
    #f = /* @__PURE__ */ _(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#f);
    }
    set nodesDraggable(r) {
      O(this.#f, r);
    }
    #g = /* @__PURE__ */ _(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#g);
    }
    set nodesConnectable(r) {
      O(this.#g, r);
    }
    #h = /* @__PURE__ */ _(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#h);
    }
    set elementsSelectable(r) {
      O(this.#h, r);
    }
    #w = /* @__PURE__ */ _(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#w);
    }
    set nodesFocusable(r) {
      O(this.#w, r);
    }
    #_ = /* @__PURE__ */ _(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#_);
    }
    set edgesFocusable(r) {
      O(this.#_, r);
    }
    #b = /* @__PURE__ */ _(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#b);
    }
    set disableKeyboardA11y(r) {
      O(this.#b, r);
    }
    #m = /* @__PURE__ */ _(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#m);
    }
    set minZoom(r) {
      O(this.#m, r);
    }
    #v = /* @__PURE__ */ _(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#v);
    }
    set maxZoom(r) {
      O(this.#v, r);
    }
    #p = /* @__PURE__ */ _(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#p);
    }
    set nodeOrigin(r) {
      O(this.#p, r);
    }
    #y = /* @__PURE__ */ _(() => e.props.nodeExtent ?? Yo);
    get nodeExtent() {
      return u(this.#y);
    }
    set nodeExtent(r) {
      O(this.#y, r);
    }
    #x = /* @__PURE__ */ _(() => e.props.translateExtent ?? Yo);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      O(this.#x, r);
    }
    #E = /* @__PURE__ */ _(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#E);
    }
    set defaultEdgeOptions(r) {
      O(this.#E, r);
    }
    #k = /* @__PURE__ */ _(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#k);
    }
    set nodeDragThreshold(r) {
      O(this.#k, r);
    }
    #S = /* @__PURE__ */ _(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#S);
    }
    set autoPanOnNodeDrag(r) {
      O(this.#S, r);
    }
    #C = /* @__PURE__ */ _(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#C);
    }
    set autoPanOnConnect(r) {
      O(this.#C, r);
    }
    #N = /* @__PURE__ */ _(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#N);
    }
    set autoPanOnNodeFocus(r) {
      O(this.#N, r);
    }
    #P = /* @__PURE__ */ _(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return u(this.#P);
    }
    set autoPanSpeed(r) {
      O(this.#P, r);
    }
    #M = /* @__PURE__ */ _(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#M);
    }
    set connectionDragThreshold(r) {
      O(this.#M, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #A = /* @__PURE__ */ _(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#A);
    }
    set snapGrid(r) {
      O(this.#A, r);
    }
    #T = /* @__PURE__ */ oe(!1);
    get dragging() {
      return u(this.#T);
    }
    set dragging(r) {
      O(this.#T, r);
    }
    #D = /* @__PURE__ */ oe(null);
    get selectionRect() {
      return u(this.#D);
    }
    set selectionRect(r) {
      O(this.#D, r);
    }
    #I = /* @__PURE__ */ oe(!1);
    get selectionKeyPressed() {
      return u(this.#I);
    }
    set selectionKeyPressed(r) {
      O(this.#I, r);
    }
    #z = /* @__PURE__ */ oe(!1);
    get multiselectionKeyPressed() {
      return u(this.#z);
    }
    set multiselectionKeyPressed(r) {
      O(this.#z, r);
    }
    #O = /* @__PURE__ */ oe(!1);
    get deleteKeyPressed() {
      return u(this.#O);
    }
    set deleteKeyPressed(r) {
      O(this.#O, r);
    }
    #R = /* @__PURE__ */ oe(!1);
    get panActivationKeyPressed() {
      return u(this.#R);
    }
    set panActivationKeyPressed(r) {
      O(this.#R, r);
    }
    #H = /* @__PURE__ */ oe(!1);
    get zoomActivationKeyPressed() {
      return u(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      O(this.#H, r);
    }
    #L = /* @__PURE__ */ oe(null);
    get selectionRectMode() {
      return u(this.#L);
    }
    set selectionRectMode(r) {
      O(this.#L, r);
    }
    #V = /* @__PURE__ */ oe("");
    get ariaLiveMessage() {
      return u(this.#V);
    }
    set ariaLiveMessage(r) {
      O(this.#V, r);
    }
    #B = /* @__PURE__ */ _(() => e.props.selectionMode ?? Br.Partial);
    get selectionMode() {
      return u(this.#B);
    }
    set selectionMode(r) {
      O(this.#B, r);
    }
    #F = /* @__PURE__ */ _(() => ({ ...Pl, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#F);
    }
    set nodeTypes(r) {
      O(this.#F, r);
    }
    #K = /* @__PURE__ */ _(() => ({ ...Ml, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#K);
    }
    set edgeTypes(r) {
      O(this.#K, r);
    }
    #Y = /* @__PURE__ */ _(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#Y);
    }
    set noPanClass(r) {
      O(this.#Y, r);
    }
    #X = /* @__PURE__ */ _(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#X);
    }
    set noDragClass(r) {
      O(this.#X, r);
    }
    #Z = /* @__PURE__ */ _(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#Z);
    }
    set noWheelClass(r) {
      O(this.#Z, r);
    }
    #W = /* @__PURE__ */ _(() => fg(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#W);
    }
    set ariaLabelConfig(r) {
      O(this.#W, r);
    }
    #q = /* @__PURE__ */ oe(N0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
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
      /* @__PURE__ */ oe(Xo)
    );
    get _connection() {
      return u(this.#G);
    }
    set _connection(r) {
      O(this.#G, r);
    }
    #U = /* @__PURE__ */ _(() => this._connection.inProgress ? {
      ...this._connection,
      to: fr(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#U);
    }
    set connection(r) {
      O(this.#U, r);
    }
    #j = /* @__PURE__ */ _(() => e.props.connectionMode ?? kn.Strict);
    get connectionMode() {
      return u(this.#j);
    }
    set connectionMode(r) {
      O(this.#j, r);
    }
    #J = /* @__PURE__ */ _(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#J);
    }
    set connectionRadius(r) {
      O(this.#J, r);
    }
    #Q = /* @__PURE__ */ _(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#Q);
    }
    set isValidConnection(r) {
      O(this.#Q, r);
    }
    #$ = /* @__PURE__ */ _(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#$);
    }
    set selectNodesOnDrag(r) {
      O(this.#$, r);
    }
    #ee = /* @__PURE__ */ _(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return u(this.#ee);
    }
    set defaultMarkerColor(r) {
      O(this.#ee, r);
    }
    #te = /* @__PURE__ */ _(() => kg(e.edges, {
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
    #ne = /* @__PURE__ */ _(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#ne);
    }
    set onlyRenderVisibleElements(r) {
      O(this.#ne, r);
    }
    #re = /* @__PURE__ */ _(() => e.props.onflowerror ?? lg);
    get onerror() {
      return u(this.#re);
    }
    set onerror(r) {
      O(this.#re, r);
    }
    #oe = /* @__PURE__ */ _(() => e.props.ondelete);
    get ondelete() {
      return u(this.#oe);
    }
    set ondelete(r) {
      O(this.#oe, r);
    }
    #ie = /* @__PURE__ */ _(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#ie);
    }
    set onbeforedelete(r) {
      O(this.#ie, r);
    }
    #se = /* @__PURE__ */ _(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#se);
    }
    set onbeforeconnect(r) {
      O(this.#se, r);
    }
    #ae = /* @__PURE__ */ _(() => e.props.onconnect);
    get onconnect() {
      return u(this.#ae);
    }
    set onconnect(r) {
      O(this.#ae, r);
    }
    #le = /* @__PURE__ */ _(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#le);
    }
    set onconnectstart(r) {
      O(this.#le, r);
    }
    #ce = /* @__PURE__ */ _(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#ce);
    }
    set onconnectend(r) {
      O(this.#ce, r);
    }
    #ue = /* @__PURE__ */ _(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#ue);
    }
    set onbeforereconnect(r) {
      O(this.#ue, r);
    }
    #de = /* @__PURE__ */ _(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#de);
    }
    set onreconnect(r) {
      O(this.#de, r);
    }
    #fe = /* @__PURE__ */ _(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#fe);
    }
    set onreconnectstart(r) {
      O(this.#fe, r);
    }
    #he = /* @__PURE__ */ _(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#he);
    }
    set onreconnectend(r) {
      O(this.#he, r);
    }
    #ge = /* @__PURE__ */ _(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#ge);
    }
    set clickConnect(r) {
      O(this.#ge, r);
    }
    #ve = /* @__PURE__ */ _(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#ve);
    }
    set onclickconnectstart(r) {
      O(this.#ve, r);
    }
    #pe = /* @__PURE__ */ _(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#pe);
    }
    set onclickconnectend(r) {
      O(this.#pe, r);
    }
    #me = /* @__PURE__ */ oe(null);
    get clickConnectStartHandle() {
      return u(this.#me);
    }
    set clickConnectStartHandle(r) {
      O(this.#me, r);
    }
    #ye = /* @__PURE__ */ _(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#ye);
    }
    set onselectiondrag(r) {
      O(this.#ye, r);
    }
    #we = /* @__PURE__ */ _(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#we);
    }
    set onselectiondragstart(r) {
      O(this.#we, r);
    }
    #_e = /* @__PURE__ */ _(() => e.props.onselectiondragstop);
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
    _prefersDark = new S0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ _(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#be);
    }
    set colorMode(r) {
      O(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Xo, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Xt() {
  const e = Jo(Zr);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Zr = /* @__PURE__ */ Symbol();
function Al(e) {
  const t = P0(e);
  function n(A) {
    t.nodeTypes = {
      ...Pl,
      ...A
    };
  }
  function r(A) {
    t.edgeTypes = {
      ...Ml,
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
      const w = A.get(M.id);
      return w ? { ...M, position: w.position, dragging: x } : M;
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
    const w = /* @__PURE__ */ new Map();
    for (const S of x) {
      const k = t.nodeLookup.get(S.id)?.internals.userNode;
      if (!k)
        continue;
      const I = { ...k };
      switch (S.type) {
        case "dimensions": {
          const L = { ...I.measured, ...S.dimensions };
          S.setAttributes && (I.width = S.dimensions?.width ?? I.width, I.height = S.dimensions?.height ?? I.height), I.measured = L;
          break;
        }
        case "position":
          I.position = S.position ?? I.position;
          break;
      }
      w.set(S.id, I);
    }
    t.nodes = t.nodes.map((S) => w.get(S.id) ?? S);
  }
  function a(A) {
    const x = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = A, t.fitViewResolver = x, t.nodes = [...t.nodes], x.promise;
  }
  async function l(A, x, M) {
    const w = typeof M?.zoom < "u" ? M.zoom : t.maxZoom, S = t.panZoom;
    return S ? (await S.setViewport({
      x: t.width / 2 - A * w,
      y: t.height / 2 - x * w,
      zoom: w
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
  function m(A, x = null) {
    let M = !1;
    const w = A.map((S) => (x ? x.has(S.id) : !0) && S.selected ? (M = !0, { ...S, selected: !1 }) : S);
    return [M, w];
  }
  function p(A) {
    const x = A?.nodes ? new Set(A.nodes.map((L) => L.id)) : null, [M, w] = m(t.nodes, x);
    M && (t.nodes = w);
    const S = A?.edges ? new Set(A.edges.map((L) => L.id)) : null, [k, I] = m(t.edges, S);
    k && (t.edges = I);
  }
  function y(A) {
    const x = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((M) => {
      const w = A.includes(M.id), S = x && M.selected || w;
      return !!M.selected !== S ? { ...M, selected: S } : M;
    }), x || p({ nodes: [] });
  }
  function N(A) {
    const x = t.multiselectionKeyPressed;
    t.edges = t.edges.map((M) => {
      const w = A.includes(M.id), S = x && M.selected || w;
      return !!M.selected !== S ? { ...M, selected: S } : M;
    }), x || p({ edges: [] });
  }
  function C(A, x, M) {
    const w = t.nodeLookup.get(A);
    if (!w) {
      console.warn("012", Un.error012(A));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, w.selected ? (x || w.selected && t.multiselectionKeyPressed) && (p({ nodes: [w], edges: [] }), requestAnimationFrame(() => M?.blur())) : y([A]);
  }
  function b(A) {
    const x = t.edgeLookup.get(A);
    if (!x) {
      console.warn("012", Un.error012(A));
      return;
    }
    (x.selectable || t.elementsSelectable && typeof x.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, x.selected ? x.selected && t.multiselectionKeyPressed && p({ nodes: [], edges: [x] }) : N([A]));
  }
  function T(A, x) {
    const { nodeExtent: M, snapGrid: w, nodeOrigin: S, nodeLookup: k, nodesDraggable: I, onerror: L } = t, z = /* @__PURE__ */ new Map(), V = w?.[0] ?? 5, F = w?.[1] ?? 5, Z = A.x * V * x, X = A.y * F * x;
    for (const Y of k.values()) {
      if (!(Y.selected && (Y.draggable || I && typeof Y.draggable > "u")))
        continue;
      let q = {
        x: Y.internals.positionAbsolute.x + Z,
        y: Y.internals.positionAbsolute.y + X
      };
      w && (q = dr(q, w));
      const { position: U, positionAbsolute: $ } = il({
        nodeId: Y.id,
        nextPosition: q,
        nodeLookup: k,
        nodeExtent: M,
        nodeOrigin: S,
        onError: L
      });
      Y.position = U, Y.internals.positionAbsolute = $, z.set(Y.id, Y);
    }
    i(z);
  }
  function E(A) {
    return zg({
      delta: A,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const D = (A) => {
    t._connection = { ...A };
  };
  function P() {
    t._connection = Xo;
  }
  function R() {
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
    addSelectedNodes: y,
    addSelectedEdges: N,
    handleNodeSelection: C,
    handleEdgeSelection: b,
    moveSelectedNodes: T,
    panBy: E,
    updateConnection: D,
    cancelConnection: P,
    reset: R
  });
}
function M0(e, t) {
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
var A0 = /* @__PURE__ */ ee('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function T0(e, t) {
  te(t, !0);
  let n = H(t, "store", 15), r = /* @__PURE__ */ _(() => n().panActivationKeyPressed || t.panOnDrag), o = /* @__PURE__ */ _(() => n().panActivationKeyPressed || t.panOnScroll);
  const { viewport: i } = n();
  let s = !1;
  Ge(() => {
    !s && n().viewportInitialized && (t.oninit?.(), s = !0);
  });
  var a = A0(), l = W(a);
  He(l, () => t.children), Pe(a, (c, d) => M0?.(c, d), () => ({
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
  })), B(e, a), ne();
}
function xs(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Es(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function ks(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var D0 = /* @__PURE__ */ ee("<div><!></div>");
function I0(e, t) {
  te(t, !0);
  let n = H(t, "store", 15), r = H(t, "panOnDrag", 3, !0), o = H(t, "paneClickDistance", 3, 1), i, s = null, a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ _(() => n().panActivationKeyPressed || r()), d = /* @__PURE__ */ _(() => n().selectionKeyPressed || !!n().selectionRect || t.selectionOnDrag && u(c) !== !0), h = /* @__PURE__ */ _(() => n().elementsSelectable && (u(d) || n().selectionRectMode === "user")), f = !1;
  function g(P) {
    if (s = i?.getBoundingClientRect(), !s) return;
    const R = P.target === i, K = !R && !!P.target.closest(".nokey"), A = t.selectionOnDrag && R || n().selectionKeyPressed;
    if (K || !u(d) || !A || P.button !== 0 || !P.isPrimary)
      return;
    P.target?.setPointerCapture?.(P.pointerId), f = !1;
    const { x, y: M } = et(P, s);
    n(n().selectionRect = { width: 0, height: 0, startX: x, startY: M, x, y: M }, !0), R || (P.stopPropagation(), P.preventDefault());
  }
  function v(P) {
    if (!u(d) || !s || !n().selectionRect)
      return;
    const R = et(P, s), { startX: K = 0, startY: A = 0 } = n().selectionRect;
    if (!f) {
      const k = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(R.x - K, R.y - A) <= k)
        return;
      n().unselectNodesAndEdges(), t.onselectionstart?.(P);
    }
    f = !0;
    const x = {
      ...n().selectionRect,
      x: R.x < K ? R.x : K,
      y: R.y < A ? R.y : A,
      width: Math.abs(R.x - K),
      height: Math.abs(R.y - A)
    }, M = a, w = l;
    a = new Set(pi(
      n().nodeLookup,
      x,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Br.Partial,
      !0
    ).map((k) => k.id));
    const S = n().defaultEdgeOptions.selectable ?? !0;
    l = /* @__PURE__ */ new Set();
    for (const k of a) {
      const I = n().connectionLookup.get(k);
      if (I)
        for (const { edgeId: L } of I.values()) {
          const z = n().edgeLookup.get(L);
          z && (z.selectable ?? S) && l.add(L);
        }
    }
    ks(M, a) || n(n().nodes = n().nodes.map(Es(a)), !0), ks(w, l) || n(n().edges = n().edges.map(Es(l)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = x, !0);
  }
  function m(P) {
    P.button === 0 && (P.target?.releasePointerCapture?.(P.pointerId), !f && P.target === i && N?.(P), n(n().selectionRect = null, !0), f && n(n().selectionRectMode = a.size > 0 ? "nodes" : null, !0), f && t.onselectionend?.(P));
  }
  const p = (P) => {
    if (Array.isArray(u(c)) && u(c).includes(2)) {
      P.preventDefault();
      return;
    }
    t.onpanecontextmenu?.({ event: P });
  }, y = (P) => {
    f && (P.stopPropagation(), f = !1);
  };
  function N(P) {
    if (f || n().connection.inProgress) {
      f = !1;
      return;
    }
    t.onpaneclick?.({ event: P }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var C = D0();
  let b;
  var T = /* @__PURE__ */ _(() => u(h) ? void 0 : xs(N, i));
  C.__click = function(...P) {
    u(T)?.apply(this, P);
  }, C.__pointermove = function(...P) {
    (u(h) ? v : void 0)?.apply(this, P);
  }, C.__pointerup = function(...P) {
    (u(h) ? m : void 0)?.apply(this, P);
  };
  var E = /* @__PURE__ */ _(() => xs(p, i));
  C.__contextmenu = function(...P) {
    u(E)?.apply(this, P);
  };
  var D = W(C);
  He(D, () => t.children), sr(C, (P) => i = P, () => i), ce((P) => b = Oe(C, 1, "svelte-flow__pane svelte-flow__container", null, b, P), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(d)
    })
  ]), en(
    "pointerdown",
    C,
    function(...P) {
      (u(h) ? g : void 0)?.apply(this, P);
    },
    !0
  ), en(
    "click",
    C,
    function(...P) {
      (u(h) ? y : void 0)?.apply(this, P);
    },
    !0
  ), B(e, C), ne();
}
Mn(["click", "pointermove", "pointerup", "contextmenu"]);
var z0 = /* @__PURE__ */ ee('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function O0(e, t) {
  te(t, !0);
  var n = z0();
  let r;
  var o = W(n);
  He(o, () => t.children), ce(() => r = Le(n, "", r, {
    transform: `translate(${t.store.viewport.x ?? ""}px, ${t.store.viewport.y ?? ""}px) scale(${t.store.viewport.zoom ?? ""})`
  })), B(e, n), ne();
}
function Tl(e, t) {
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
var R0 = /* @__PURE__ */ ee('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>'), H0 = /* @__PURE__ */ ee('<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>', 1);
function L0(e, t) {
  te(t, !0);
  var n = H0(), r = se(n), o = W(r), i = G(r, 2), s = W(i), a = G(i, 2);
  {
    var l = (c) => {
      var d = R0(), h = W(d);
      ce(() => {
        j(d, "id", `${V0}-${t.store.flowId}`), Ae(h, t.store.ariaLiveMessage);
      }), B(c, d);
    };
    le(a, (c) => {
      t.store.disableKeyboardA11y || c(l);
    });
  }
  ce(() => {
    j(r, "id", `${Dl}-${t.store.flowId}`), Ae(o, t.store.disableKeyboardA11y ? t.store.ariaLabelConfig["node.a11yDescription.default"] : t.store.ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), j(i, "id", `${Il}-${t.store.flowId}`), Ae(s, t.store.ariaLabelConfig["edge.a11yDescription.default"]);
  }), B(e, n), ne();
}
const Dl = "svelte-flow__node-desc", Il = "svelte-flow__edge-desc", V0 = "svelte-flow__aria-live";
var B0 = /* @__PURE__ */ ee("<div><!></div>");
function F0(e, t) {
  te(t, !0);
  let n = H(t, "store", 15), r = /* @__PURE__ */ _(() => Ne(t.node.data, () => ({}), !0)), o = /* @__PURE__ */ _(() => Ne(t.node.selected, !1)), i = /* @__PURE__ */ _(() => t.node.draggable), s = /* @__PURE__ */ _(() => t.node.selectable), a = /* @__PURE__ */ _(() => Ne(t.node.deletable, !0)), l = /* @__PURE__ */ _(() => t.node.connectable), c = /* @__PURE__ */ _(() => t.node.focusable), d = /* @__PURE__ */ _(() => Ne(t.node.hidden, !1)), h = /* @__PURE__ */ _(() => Ne(t.node.dragging, !1)), f = /* @__PURE__ */ _(() => Ne(t.node.style, "")), g = /* @__PURE__ */ _(() => t.node.class), v = /* @__PURE__ */ _(() => Ne(t.node.type, "default")), m = /* @__PURE__ */ _(() => t.node.parentId), p = /* @__PURE__ */ _(() => t.node.sourcePosition), y = /* @__PURE__ */ _(() => t.node.targetPosition), N = /* @__PURE__ */ _(() => Ne(t.node.measured, () => ({ width: 0, height: 0 }), !0).width), C = /* @__PURE__ */ _(() => Ne(t.node.measured, () => ({ width: 0, height: 0 }), !0).height), b = /* @__PURE__ */ _(() => t.node.initialWidth), T = /* @__PURE__ */ _(() => t.node.initialHeight), E = /* @__PURE__ */ _(() => t.node.width), D = /* @__PURE__ */ _(() => t.node.height), P = /* @__PURE__ */ _(() => t.node.dragHandle), R = /* @__PURE__ */ _(() => Ne(t.node.internals.z, 0)), K = /* @__PURE__ */ _(() => t.node.internals.positionAbsolute.x), A = /* @__PURE__ */ _(() => t.node.internals.positionAbsolute.y), x = /* @__PURE__ */ _(() => t.node.internals.userNode), { id: M } = t.node, w = /* @__PURE__ */ _(() => u(i) ?? n().nodesDraggable), S = /* @__PURE__ */ _(() => u(s) ?? n().elementsSelectable), k = /* @__PURE__ */ _(() => u(l) ?? n().nodesConnectable), I = /* @__PURE__ */ _(() => cl(t.node)), L = /* @__PURE__ */ _(() => !!t.node.internals.handleBounds), z = /* @__PURE__ */ _(() => u(I) && u(L)), V = /* @__PURE__ */ _(() => u(c) ?? n().nodesFocusable);
  function F(fe) {
    return n().parentLookup.has(fe);
  }
  let Z = /* @__PURE__ */ _(() => F(M)), X = /* @__PURE__ */ oe(null), Y = null, Q = u(v), q = u(p), U = u(y), $ = /* @__PURE__ */ _(() => n().nodeTypes[u(v)] ?? Cl), he = /* @__PURE__ */ _(() => n().ariaLabelConfig), be = {
    get value() {
      return u(k);
    }
  };
  e0(M), n0(be);
  let re = /* @__PURE__ */ _(() => {
    const fe = u(N) === void 0 ? u(E) ?? u(b) : u(E), we = u(C) === void 0 ? u(D) ?? u(T) : u(D);
    if (!(fe === void 0 && we === void 0 && u(f) === void 0))
      return `${u(f)};${fe ? `width:${dt(fe)};` : ""}${we ? `height:${dt(we)};` : ""}`;
  });
  Ge(() => {
    (u(v) !== Q || u(p) !== q || u(y) !== U) && u(X) !== null && requestAnimationFrame(() => {
      u(X) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[M, { id: M, nodeElement: u(X), force: !0 }]]));
    }), Q = u(v), q = u(p), U = u(y);
  }), Ge(() => {
    t.resizeObserver && (!u(z) || u(X) !== Y) && (Y && t.resizeObserver.unobserve(Y), u(X) && t.resizeObserver.observe(u(X)), Y = u(X));
  }), eo(() => {
    Y && t.resizeObserver?.unobserve(Y);
  });
  function pe(fe) {
    u(S) && (!n().selectNodesOnDrag || !u(w) || n().nodeDragThreshold > 0) && n().handleNodeSelection(M), t.onnodeclick?.({ node: u(x), event: fe });
  }
  function ie(fe) {
    if (!(fl(fe) || n().disableKeyboardA11y))
      if (rl.includes(fe.key) && u(S)) {
        const we = fe.key === "Escape";
        n().handleNodeSelection(M, we, u(X));
      } else u(w) && t.node.selected && Object.prototype.hasOwnProperty.call(Xr, fe.key) && (fe.preventDefault(), n(
        n().ariaLiveMessage = u(he)["node.a11yDescription.ariaLiveMessage"]({
          direction: fe.key.replace("Arrow", "").toLowerCase(),
          x: ~~t.node.internals.positionAbsolute.x,
          y: ~~t.node.internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Xr[fe.key], fe.shiftKey ? 4 : 1));
  }
  const Te = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(X)?.matches(":focus-visible"))
      return;
    const { width: fe, height: we, viewport: je } = n();
    pi(/* @__PURE__ */ new Map([[M, t.node]]), { x: 0, y: 0, width: fe, height: we }, [je.x, je.y, je.zoom], !0).length > 0 || n().setCenter(t.node.position.x + (t.node.measured.width ?? 0) / 2, t.node.position.y + (t.node.measured.height ?? 0) / 2, { zoom: je.zoom });
  };
  var Nt = me(), Pt = se(Nt);
  {
    var ht = (fe) => {
      var we = B0();
      Ft(we, () => ({
        "data-id": M,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${u(v)}`,
          u(g)
        ],
        style: u(re),
        onclick: pe,
        onpointerenter: t.onnodepointerenter ? (ve) => t.onnodepointerenter({ node: u(x), event: ve }) : void 0,
        onpointerleave: t.onnodepointerleave ? (ve) => t.onnodepointerleave({ node: u(x), event: ve }) : void 0,
        onpointermove: t.onnodepointermove ? (ve) => t.onnodepointermove({ node: u(x), event: ve }) : void 0,
        oncontextmenu: t.onnodecontextmenu ? (ve) => t.onnodecontextmenu({ node: u(x), event: ve }) : void 0,
        onkeydown: u(V) ? ie : void 0,
        onfocus: u(V) ? Te : void 0,
        tabIndex: u(V) ? 0 : void 0,
        role: t.node.ariaRole ?? (u(V) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Dl}-${n().flowId}`,
        ...t.node.domAttributes,
        [At]: {
          dragging: u(h),
          selected: u(o),
          draggable: u(w),
          connectable: u(k),
          selectable: u(S),
          nopan: u(w),
          parent: u(Z)
        },
        [pt]: {
          "z-index": u(R),
          transform: `translate(${u(K) ?? ""}px, ${u(A) ?? ""}px)`,
          visibility: u(I) ? "visible" : "hidden"
        }
      }));
      var je = W(we);
      $r(je, () => u($), (ve, dn) => {
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
            return u(y);
          },
          get zIndex() {
            return u(R);
          },
          get dragging() {
            return u(h);
          },
          get draggable() {
            return u(w);
          },
          get dragHandle() {
            return u(P);
          },
          get parentId() {
            return u(m);
          },
          get type() {
            return u(v);
          },
          get isConnectable() {
            return u(k);
          },
          get positionAbsoluteX() {
            return u(K);
          },
          get positionAbsoluteY() {
            return u(A);
          },
          get width() {
            return u(E);
          },
          get height() {
            return u(D);
          }
        });
      }), Pe(we, (ve, dn) => Tl?.(ve, dn), () => ({
        nodeId: M,
        isSelectable: u(S),
        disabled: !u(w),
        handleSelector: u(P),
        noDragClass: n().noDragClass,
        nodeClickDistance: t.nodeClickDistance,
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (ve, dn, An, Tn) => {
          t.onnodedrag?.({ event: ve, targetNode: An, nodes: Tn });
        },
        onDragStart: (ve, dn, An, Tn) => {
          t.onnodedragstart?.({ event: ve, targetNode: An, nodes: Tn });
        },
        onDragStop: (ve, dn, An, Tn) => {
          t.onnodedragstop?.({ event: ve, targetNode: An, nodes: Tn });
        },
        store: n()
      })), sr(we, (ve) => O(X, ve), () => u(X)), B(fe, we);
    };
    le(Pt, (fe) => {
      u(d) || fe(ht);
    });
  }
  B(e, Nt), ne();
}
var K0 = /* @__PURE__ */ ee('<div class="svelte-flow__nodes"></div>');
function Y0(e, t) {
  te(t, !0);
  let n = H(t, "store", 15);
  const r = typeof ResizeObserver > "u" ? null : new ResizeObserver((i) => {
    const s = /* @__PURE__ */ new Map();
    i.forEach((a) => {
      const l = a.target.getAttribute("data-id");
      s.set(l, { id: l, nodeElement: a.target, force: !0 });
    }), n().updateNodeInternals(s);
  });
  eo(() => {
    r?.disconnect();
  });
  var o = K0();
  nn(o, 21, () => n().visible.nodes.values(), (i) => i.id, (i, s) => {
    F0(i, {
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
  }), B(e, o), ne();
}
var X0 = /* @__PURE__ */ ye('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Z0(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ _(() => t.edge.id), r = /* @__PURE__ */ _(() => t.edge.source), o = /* @__PURE__ */ _(() => t.edge.target), i = /* @__PURE__ */ _(() => t.edge.sourceX), s = /* @__PURE__ */ _(() => t.edge.sourceY), a = /* @__PURE__ */ _(() => t.edge.targetX), l = /* @__PURE__ */ _(() => t.edge.targetY), c = /* @__PURE__ */ _(() => t.edge.sourcePosition), d = /* @__PURE__ */ _(() => t.edge.targetPosition), h = /* @__PURE__ */ _(() => Ne(t.edge.animated, !1)), f = /* @__PURE__ */ _(() => Ne(t.edge.selected, !1)), g = /* @__PURE__ */ _(() => t.edge.label), v = /* @__PURE__ */ _(() => t.edge.labelStyle), m = /* @__PURE__ */ _(() => Ne(t.edge.data, () => ({}), !0)), p = /* @__PURE__ */ _(() => t.edge.style), y = /* @__PURE__ */ _(() => t.edge.interactionWidth), N = /* @__PURE__ */ _(() => Ne(t.edge.type, "default")), C = /* @__PURE__ */ _(() => t.edge.sourceHandle), b = /* @__PURE__ */ _(() => t.edge.targetHandle), T = /* @__PURE__ */ _(() => t.edge.markerStart), E = /* @__PURE__ */ _(() => t.edge.markerEnd), D = /* @__PURE__ */ _(() => t.edge.selectable), P = /* @__PURE__ */ _(() => t.edge.focusable), R = /* @__PURE__ */ _(() => Ne(t.edge.deletable, !0)), K = /* @__PURE__ */ _(() => t.edge.hidden), A = /* @__PURE__ */ _(() => t.edge.zIndex), x = /* @__PURE__ */ _(() => t.edge.class), M = /* @__PURE__ */ _(() => t.edge.ariaLabel);
  o0(u(n));
  let w = null, S = /* @__PURE__ */ _(() => u(D) ?? t.store.elementsSelectable), k = /* @__PURE__ */ _(() => u(P) ?? t.store.edgesFocusable), I = /* @__PURE__ */ _(() => t.store.edgeTypes[u(N)] ?? Nl), L = /* @__PURE__ */ _(() => u(T) ? `url('#${Wo(u(T), t.store.flowId)}')` : void 0), z = /* @__PURE__ */ _(() => u(E) ? `url('#${Wo(u(E), t.store.flowId)}')` : void 0);
  function V(q) {
    const U = t.store.edgeLookup.get(u(n));
    U && (u(S) && t.store.handleEdgeSelection(u(n)), t.onedgeclick?.({ event: q, edge: U }));
  }
  function F(q, U) {
    const $ = t.store.edgeLookup.get(u(n));
    $ && U({ event: q, edge: $ });
  }
  function Z(q) {
    if (!t.store.disableKeyboardA11y && rl.includes(q.key) && u(S)) {
      const { unselectNodesAndEdges: U, addSelectedEdges: $ } = t.store;
      q.key === "Escape" ? (w?.blur(), U({ edges: [t.edge] })) : $([u(n)]);
    }
  }
  var X = me(), Y = se(X);
  {
    var Q = (q) => {
      var U = X0();
      let $;
      var he = W(U);
      Ft(he, () => ({
        class: ["svelte-flow__edge", u(x)],
        "data-id": u(n),
        onclick: V,
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
        "aria-describedby": u(k) ? `${Il}-${t.store.flowId}` : void 0,
        role: t.edge.ariaRole ?? (u(k) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: u(k) ? Z : void 0,
        tabindex: u(k) ? 0 : void 0,
        ...t.edge.domAttributes,
        [At]: {
          animated: u(h),
          selected: u(f),
          selectable: u(S)
        }
      }));
      var be = W(he);
      $r(be, () => u(I), (re, pe) => {
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
            return u(m);
          },
          get style() {
            return u(p);
          },
          get interactionWidth() {
            return u(y);
          },
          get selectable() {
            return u(S);
          },
          get deletable() {
            return u(R);
          },
          get type() {
            return u(N);
          },
          get sourceHandleId() {
            return u(C);
          },
          get targetHandleId() {
            return u(b);
          },
          get markerStart() {
            return u(L);
          },
          get markerEnd() {
            return u(z);
          }
        });
      }), sr(he, (re) => w = re, () => w), ce(() => $ = Le(U, "", $, { "z-index": u(A) })), B(q, U);
    };
    le(Y, (q) => {
      u(K) || q(Q);
    });
  }
  B(e, X), ne();
}
uc();
var W0 = /* @__PURE__ */ ye("<defs></defs>");
function q0(e, t) {
  te(t, !1);
  const n = Xt();
  du();
  var r = W0();
  nn(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    J0(o, mt(() => u(i)));
  }), B(e, r), ne();
}
var G0 = /* @__PURE__ */ ye('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), U0 = /* @__PURE__ */ ye('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), j0 = /* @__PURE__ */ ye('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function J0(e, t) {
  te(t, !0);
  let n = H(t, "width", 3, 12.5), r = H(t, "height", 3, 12.5), o = H(t, "markerUnits", 3, "strokeWidth"), i = H(t, "orient", 3, "auto-start-reverse"), s = H(t, "color", 3, "none");
  var a = j0(), l = W(a);
  {
    var c = (h) => {
      var f = G0();
      let g;
      ce(() => {
        j(f, "stroke-width", t.strokeWidth), g = Le(f, "", g, { stroke: s() });
      }), B(h, f);
    }, d = (h) => {
      var f = me(), g = se(f);
      {
        var v = (m) => {
          var p = U0();
          let y;
          ce(() => {
            j(p, "stroke-width", t.strokeWidth), y = Le(p, "", y, { stroke: s(), fill: s() });
          }), B(m, p);
        };
        le(
          g,
          (m) => {
            t.type === Fr.ArrowClosed && m(v);
          },
          !0
        );
      }
      B(h, f);
    };
    le(l, (h) => {
      t.type === Fr.Arrow ? h(c) : h(d, !1);
    });
  }
  ce(() => {
    j(a, "id", t.id), j(a, "markerWidth", `${n()}`), j(a, "markerHeight", `${r()}`), j(a, "markerUnits", o()), j(a, "orient", i());
  }), B(e, a), ne();
}
var Q0 = /* @__PURE__ */ ee('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function $0(e, t) {
  te(t, !0);
  let n = H(t, "store", 15);
  var r = Q0(), o = W(r), i = W(o);
  q0(i, {});
  var s = G(o, 2);
  nn(s, 17, () => n().visible.edges.values(), (a) => a.id, (a, l) => {
    Z0(a, {
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
  }), B(e, r), ne();
}
var ev = /* @__PURE__ */ ee('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function zl(e, t) {
  te(t, !0);
  let n = H(t, "x", 3, 0), r = H(t, "y", 3, 0), o = H(t, "width", 3, 0), i = H(t, "height", 3, 0), s = H(t, "isVisible", 3, !0);
  var a = me(), l = se(a);
  {
    var c = (d) => {
      var h = ev();
      let f;
      ce((g) => f = Le(h, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : dt(o()),
          height: typeof i() == "string" ? i() : dt(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), B(d, h);
    };
    le(l, (d) => {
      s() && d(c);
    });
  }
  B(e, a), ne();
}
var tv = /* @__PURE__ */ ee("<div><!></div>");
function nv(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ oe(void 0);
  Ge(() => {
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
    Object.prototype.hasOwnProperty.call(Xr, d.key) && (d.preventDefault(), t.store.moveSelectedNodes(Xr[d.key], d.shiftKey ? 4 : 1));
  }
  var a = me(), l = se(a);
  {
    var c = (d) => {
      var h = tv();
      h.__contextmenu = o, h.__click = i, h.__keydown = function(...v) {
        (t.store.disableKeyboardA11y ? void 0 : s)?.apply(this, v);
      };
      let f;
      var g = W(h);
      zl(g, { width: "100%", height: "100%", x: 0, y: 0 }), Pe(h, (v, m) => Tl?.(v, m), () => ({
        disabled: !1,
        store: t.store,
        onDrag: (v, m, p, y) => {
          t.onnodedrag?.({ event: v, targetNode: null, nodes: y });
        },
        onDragStart: (v, m, p, y) => {
          t.onnodedragstart?.({ event: v, targetNode: null, nodes: y });
        },
        onDragStop: (v, m, p, y) => {
          t.onnodedragstop?.({ event: v, targetNode: null, nodes: y });
        }
      })), sr(h, (v) => O(n, v), () => u(n)), ce(
        (v) => {
          Oe(h, 1, Bt(["svelte-flow__selection-wrapper", t.store.noPanClass]), "svelte-sf2y5e"), j(h, "role", t.store.disableKeyboardA11y ? void 0 : "button"), j(h, "tabindex", t.store.disableKeyboardA11y ? void 0 : -1), f = Le(h, "", f, v);
        },
        [
          () => ({
            width: dt(u(r).width),
            height: dt(u(r).height),
            transform: `translate(${u(r).x ?? ""}px, ${u(r).y ?? ""}px)`
          })
        ]
      ), B(d, h);
    };
    le(l, (d) => {
      t.store.selectionRectMode === "nodes" && u(r) && _t(u(r).x) && _t(u(r).y) && d(c);
    });
  }
  B(e, a), ne();
}
Mn(["contextmenu", "click", "keydown"]);
function rv(e) {
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
      }, { modifier: f, key: g, callback: v, preventDefault: m, enabled: p } = h;
      if (p) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const N = Array.isArray(f) ? f : [f];
          let C = !1;
          for (const b of N)
            if ((Array.isArray(b) ? b : [b]).reduce(
              (E, D) => E | rv(D),
              0
            ) === c) {
              C = !0;
              break;
            }
          if (!C) continue;
        }
        m && a.preventDefault();
        const y = {
          node: e,
          trigger: h,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: y })), v?.(y);
      }
    }
  }
  let s;
  return n && (s = To(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = To(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function ki() {
  const e = /* @__PURE__ */ _(Xt), t = (i) => {
    const s = _s(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? dg(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Cn(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = Se(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && _s(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = Se(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && g0(c) ? c : { ...l, ...c };
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
    getViewport: () => Vs(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = mi(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
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
      const l = ls(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((d) => {
        const h = u(e).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = Cn(h), g = jn(f, c);
        return s && g > 0 || g >= f.width * f.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const c = ls(i) ? i : t(i);
      if (!c)
        return !1;
      const d = jn(c, s);
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
      return a && (u(e).nodes = Se(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = Se(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), (a.length > 0 || l.length > 0) && u(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: h, y: f } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - f };
      return fr(g, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), h = Yr(i, [s, a, l]);
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
function ov(e, t) {
  te(t, !0);
  let n = H(t, "store", 15), r = H(t, "selectionKey", 3, "Shift"), o = H(t, "multiSelectionKey", 19, () => Jn() ? "Meta" : "Control"), i = H(t, "deleteKey", 3, "Backspace"), s = H(t, "panActivationKey", 3, " "), a = H(t, "zoomActivationKey", 19, () => Jn() ? "Meta" : "Control"), { deleteElements: l } = ki();
  function c(m) {
    return m !== null && typeof m == "object";
  }
  function d(m) {
    return c(m) ? m.modifier || [] : [];
  }
  function h(m) {
    return m == null ? "" : c(m) ? m.key : m;
  }
  function f(m, p) {
    return (Array.isArray(m) ? m : [m]).map((N) => {
      const C = h(N);
      return {
        key: C,
        modifier: d(N),
        enabled: C !== null,
        callback: p
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function v() {
    const m = n().nodes.filter((y) => y.selected), p = n().edges.filter((y) => y.selected);
    l({ nodes: m, edges: p });
  }
  en("blur", De, g), en("contextmenu", De, g), Pe(De, (m, p) => rt?.(m, p), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Pe(De, (m, p) => rt?.(m, p), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Pe(De, (m, p) => rt?.(m, p), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Pe(De, (m, p) => rt?.(m, p), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Pe(De, (m, p) => rt?.(m, p), () => ({
    trigger: f(i(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !fl(m.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), Pe(De, (m, p) => rt?.(m, p), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Pe(De, (m, p) => rt?.(m, p), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Pe(De, (m, p) => rt?.(m, p), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Pe(De, (m, p) => rt?.(m, p), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Pe(De, (m, p) => rt?.(m, p), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ne();
}
var iv = /* @__PURE__ */ ye('<path fill="none" class="svelte-flow__connection-path"></path>'), sv = /* @__PURE__ */ ye('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function av(e, t) {
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
      case Tt.Bezier: {
        const [a] = gl(s);
        return a;
      }
      case Tt.Straight: {
        const [a] = pl(s);
        return a;
      }
      case Tt.Step:
      case Tt.SmoothStep: {
        const [a] = yi({
          ...s,
          borderRadius: t.type === Tt.Step ? 0 : void 0
        });
        return a;
      }
    }
  });
  var r = me(), o = se(r);
  {
    var i = (s) => {
      var a = sv(), l = W(a), c = W(l);
      {
        var d = (f) => {
          var g = me(), v = se(g);
          $r(v, () => t.LineComponent, (m, p) => {
            p(m, {});
          }), B(f, g);
        }, h = (f) => {
          var g = iv();
          ce(() => {
            j(g, "d", u(n)), Le(g, t.style);
          }), B(f, g);
        };
        le(c, (f) => {
          t.LineComponent ? f(d) : f(h, !1);
        });
      }
      ce(
        (f) => {
          j(a, "width", t.store.width), j(a, "height", t.store.height), Le(a, t.containerStyle), Oe(l, 0, f);
        },
        [
          () => Bt([
            "svelte-flow__connection",
            tg(t.store.connection.isValid)
          ])
        ]
      ), B(s, a);
    };
    le(o, (s) => {
      t.store.connection.inProgress && s(i);
    });
  }
  B(e, r), ne();
}
var lv = /* @__PURE__ */ ee("<div><!></div>");
function Si(e, t) {
  te(t, !0);
  let n = H(t, "position", 3, "top-right"), r = /* @__PURE__ */ Kt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "style",
    "class",
    "children"
  ]), o = /* @__PURE__ */ _(() => `${n()}`.split("-"));
  var i = lv();
  Ft(i, (a) => ({ class: a, style: t.style, ...r }), [
    () => [
      "svelte-flow__panel",
      t.class,
      ...u(o)
    ]
  ]);
  var s = W(i);
  He(s, () => t.children ?? Lt), B(e, i), ne();
}
var cv = /* @__PURE__ */ ee('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function uv(e, t) {
  te(t, !0);
  let n = H(t, "position", 3, "bottom-right");
  var r = me(), o = se(r);
  {
    var i = (s) => {
      Si(s, {
        get position() {
          return n();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (a, l) => {
          var c = cv();
          B(a, c);
        },
        $$slots: { default: !0 }
      });
    };
    le(o, (s) => {
      t.proOptions?.hideAttribution || s(i);
    });
  }
  B(e, r), ne();
}
var dv = /* @__PURE__ */ ee("<div><!></div>");
function fv(e, t) {
  te(t, !0);
  let n = H(t, "domNode", 15), r = H(t, "clientWidth", 15), o = H(t, "clientHeight", 15), i = /* @__PURE__ */ _(() => t.rest.class), s = /* @__PURE__ */ _(() => Vc(t.rest, [
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
  var l = dv();
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
  var c = W(l);
  He(c, () => t.children ?? Lt), sr(l, (d) => n(d), () => n()), Dr(l, "clientHeight", o), Dr(l, "clientWidth", r), B(e, l), ne();
}
var hv = /* @__PURE__ */ ee('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), gv = /* @__PURE__ */ ee("<!> <!>", 1), vv = /* @__PURE__ */ ee("<!> <!> <!> <!> <!>", 1);
function pv(e, t) {
  te(t, !0);
  let n = H(t, "paneClickDistance", 3, 1), r = H(t, "nodeClickDistance", 3, 1), o = H(t, "panOnScrollMode", 19, () => yn.Free), i = H(t, "preventScrolling", 3, !0), s = H(t, "zoomOnScroll", 3, !0), a = H(t, "zoomOnDoubleClick", 3, !0), l = H(t, "zoomOnPinch", 3, !0), c = H(t, "panOnScroll", 3, !1), d = H(t, "panOnScrollSpeed", 3, 0.5), h = H(t, "panOnDrag", 3, !0), f = H(t, "selectionOnDrag", 3, !1), g = H(t, "connectionLineType", 19, () => Tt.Bezier), v = H(t, "nodes", 31, () => it([])), m = H(t, "edges", 31, () => it([])), p = H(t, "viewport", 15, void 0), y = /* @__PURE__ */ Kt(t, [
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
  ]), N = Al({
    props: y,
    width: t.width,
    height: t.height,
    get nodes() {
      return v();
    },
    set nodes(b) {
      v(b);
    },
    get edges() {
      return m();
    },
    set edges(b) {
      m(b);
    },
    get viewport() {
      return p();
    },
    set viewport(b) {
      p(b);
    }
  });
  const C = Jo(Zr);
  C && C.setStore && C.setStore(N), Qo(Zr, {
    provider: !1,
    getStore() {
      return N;
    }
  }), Ge(() => {
    const b = { nodes: N.selectedNodes, edges: N.selectedEdges };
    Se(() => t.onselectionchange)?.(b);
    for (const T of N.selectionChangeHandlers.values())
      T(b);
  }), eo(() => {
    N.reset();
  }), fv(e, {
    get colorMode() {
      return N.colorMode;
    },
    get width() {
      return t.width;
    },
    get height() {
      return t.height;
    },
    get rest() {
      return y;
    },
    get domNode() {
      return N.domNode;
    },
    set domNode(b) {
      N.domNode = b;
    },
    get clientWidth() {
      return N.width;
    },
    set clientWidth(b) {
      N.width = b;
    },
    get clientHeight() {
      return N.height;
    },
    set clientHeight(b) {
      N.height = b;
    },
    children: (b, T) => {
      var E = vv(), D = se(E);
      ov(D, {
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
          return N;
        },
        set store(x) {
          N = x;
        }
      });
      var P = G(D, 2);
      T0(P, {
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
          return N;
        },
        set store(x) {
          N = x;
        },
        children: (x, M) => {
          I0(x, {
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
              return N;
            },
            set store(w) {
              N = w;
            },
            children: (w, S) => {
              var k = gv(), I = se(k);
              O0(I, {
                get store() {
                  return N;
                },
                set store(z) {
                  N = z;
                },
                children: (z, V) => {
                  var F = hv(), Z = G(se(F), 2);
                  $0(Z, {
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
                      return N;
                    },
                    set store(q) {
                      N = q;
                    }
                  });
                  var X = G(Z, 4);
                  av(X, {
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
                      return N;
                    },
                    set store(q) {
                      N = q;
                    }
                  });
                  var Y = G(X, 2);
                  Y0(Y, {
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
                      return N;
                    },
                    set store(q) {
                      N = q;
                    }
                  });
                  var Q = G(Y, 2);
                  nv(Q, {
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
                      return N;
                    },
                    set store(q) {
                      N = q;
                    }
                  }), B(z, F);
                },
                $$slots: { default: !0 }
              });
              var L = G(I, 2);
              {
                let z = /* @__PURE__ */ _(() => !!(N.selectionRect && N.selectionRectMode === "user")), V = /* @__PURE__ */ _(() => N.selectionRect?.width), F = /* @__PURE__ */ _(() => N.selectionRect?.height), Z = /* @__PURE__ */ _(() => N.selectionRect?.x), X = /* @__PURE__ */ _(() => N.selectionRect?.y);
                zl(L, {
                  get isVisible() {
                    return u(z);
                  },
                  get width() {
                    return u(V);
                  },
                  get height() {
                    return u(F);
                  },
                  get x() {
                    return u(Z);
                  },
                  get y() {
                    return u(X);
                  }
                });
              }
              B(w, k);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var R = G(P, 2);
      uv(R, {
        get proOptions() {
          return t.proOptions;
        },
        get position() {
          return t.attributionPosition;
        }
      });
      var K = G(R, 2);
      L0(K, {
        get store() {
          return N;
        }
      });
      var A = G(K, 2);
      He(A, () => t.children ?? Lt), B(b, E);
    },
    $$slots: { default: !0 }
  }), ne();
}
function mv(e, t) {
  te(t, !0);
  let n = /* @__PURE__ */ oe(Al({ props: {}, nodes: [], edges: [] }));
  Qo(Zr, {
    provider: !0,
    getStore() {
      return u(n);
    },
    setStore: (i) => {
      O(n, i);
    }
  }), eo(() => {
    u(n).reset();
  });
  var r = me(), o = se(r);
  He(o, () => t.children ?? Lt), B(e, r), ne();
}
var yv = /* @__PURE__ */ ee("<button><!></button>");
function br(e, t) {
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
  var r = yv();
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
  var o = W(r);
  He(o, () => t.children ?? Lt), B(e, r);
}
var wv = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function _v(e) {
  var t = wv();
  B(e, t);
}
var bv = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function xv(e) {
  var t = bv();
  B(e, t);
}
var Ev = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function kv(e) {
  var t = Ev();
  B(e, t);
}
var Sv = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Cv(e) {
  var t = Sv();
  B(e, t);
}
var Nv = /* @__PURE__ */ ye('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Pv(e) {
  var t = Nv();
  B(e, t);
}
var Mv = /* @__PURE__ */ ee("<!> <!>", 1), Av = /* @__PURE__ */ ee("<!> <!> <!> <!> <!> <!>", 1);
function Tv(e, t) {
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
  ]), l = /* @__PURE__ */ _(Xt);
  const c = {
    bgColor: t.buttonBgColor,
    bgColorHover: t.buttonBgColorHover,
    color: t.buttonColor,
    colorHover: t.buttonColorHover,
    borderColor: t.buttonBorderColor
  };
  let d = /* @__PURE__ */ _(() => u(l).nodesDraggable || u(l).nodesConnectable || u(l).elementsSelectable), h = /* @__PURE__ */ _(() => u(l).viewport.zoom <= u(l).minZoom), f = /* @__PURE__ */ _(() => u(l).viewport.zoom >= u(l).maxZoom), g = /* @__PURE__ */ _(() => u(l).ariaLabelConfig), v = /* @__PURE__ */ _(() => r() === "horizontal" ? "horizontal" : "vertical");
  const m = () => {
    u(l).zoomIn();
  }, p = () => {
    u(l).zoomOut();
  }, y = () => {
    u(l).fitView(t.fitViewOptions);
  }, N = () => {
    let C = !u(d);
    u(l).nodesDraggable = C, u(l).nodesConnectable = C, u(l).elementsSelectable = C;
  };
  {
    let C = /* @__PURE__ */ _(() => [
      "svelte-flow__controls",
      u(v),
      t.class
    ]);
    Si(e, mt(
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
        children: (b, T) => {
          var E = Av(), D = se(E);
          {
            var P = (z) => {
              var V = me(), F = se(V);
              He(F, () => t.before), B(z, V);
            };
            le(D, (z) => {
              t.before && z(P);
            });
          }
          var R = G(D, 2);
          {
            var K = (z) => {
              var V = Mv(), F = se(V);
              br(F, mt(
                {
                  onclick: m,
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
                  children: (X, Y) => {
                    _v(X);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var Z = G(F, 2);
              br(Z, mt(
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
                  children: (X, Y) => {
                    xv(X);
                  },
                  $$slots: { default: !0 }
                }
              )), B(z, V);
            };
            le(R, (z) => {
              o() && z(K);
            });
          }
          var A = G(R, 2);
          {
            var x = (z) => {
              br(z, mt(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: y,
                  get title() {
                    return u(g)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.fitView.ariaLabel"];
                  }
                },
                () => c,
                {
                  children: (V, F) => {
                    kv(V);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(A, (z) => {
              i() && z(x);
            });
          }
          var M = G(A, 2);
          {
            var w = (z) => {
              br(z, mt(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: N,
                  get title() {
                    return u(g)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return u(g)["controls.interactive.ariaLabel"];
                  }
                },
                () => c,
                {
                  children: (V, F) => {
                    var Z = me(), X = se(Z);
                    {
                      var Y = (q) => {
                        Pv(q);
                      }, Q = (q) => {
                        Cv(q);
                      };
                      le(X, (q) => {
                        u(d) ? q(Y) : q(Q, !1);
                      });
                    }
                    B(V, Z);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(M, (z) => {
              s() && z(w);
            });
          }
          var S = G(M, 2);
          {
            var k = (z) => {
              var V = me(), F = se(V);
              He(F, () => t.children), B(z, V);
            };
            le(S, (z) => {
              t.children && z(k);
            });
          }
          var I = G(S, 2);
          {
            var L = (z) => {
              var V = me(), F = se(V);
              He(F, () => t.after), B(z, V);
            };
            le(I, (z) => {
              t.after && z(L);
            });
          }
          B(b, E);
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
var Dv = /* @__PURE__ */ ye("<circle></circle>");
function Iv(e, t) {
  var n = Dv();
  ce(() => {
    j(n, "cx", t.radius), j(n, "cy", t.radius), j(n, "r", t.radius), Oe(n, 0, Bt(["svelte-flow__background-pattern", "dots", t.class]));
  }), B(e, n);
}
var zv = /* @__PURE__ */ ye("<path></path>");
function Ov(e, t) {
  te(t, !0);
  var n = zv();
  ce(() => {
    j(n, "stroke-width", t.lineWidth), j(n, "d", `M${t.dimensions[0] / 2} 0 V${t.dimensions[1]} M0 ${t.dimensions[1] / 2} H${t.dimensions[0]}`), Oe(n, 0, Bt([
      "svelte-flow__background-pattern",
      t.variant,
      t.class
    ]));
  }), B(e, n), ne();
}
const Rv = {
  [Ot.Dots]: 1,
  [Ot.Lines]: 1,
  [Ot.Cross]: 6
};
var Hv = /* @__PURE__ */ ye('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Lv(e, t) {
  te(t, !0);
  let n = H(t, "variant", 19, () => Ot.Dots), r = H(t, "gap", 3, 20), o = H(t, "lineWidth", 3, 1), i = /* @__PURE__ */ _(Xt), s = /* @__PURE__ */ _(() => n() === Ot.Dots), a = /* @__PURE__ */ _(() => n() === Ot.Cross), l = /* @__PURE__ */ _(() => Array.isArray(r()) ? r() : [r(), r()]), c = /* @__PURE__ */ _(() => `background-pattern-${u(i).flowId}-${t.id ?? ""}`), d = /* @__PURE__ */ _(() => [
    u(l)[0] * u(i).viewport.zoom || 1,
    u(l)[1] * u(i).viewport.zoom || 1
  ]), h = /* @__PURE__ */ _(() => (t.size ?? Rv[n()]) * u(i).viewport.zoom), f = /* @__PURE__ */ _(() => u(a) ? [u(h), u(h)] : u(d)), g = /* @__PURE__ */ _(() => u(s) ? [u(h) / 2, u(h) / 2] : [
    u(f)[0] / 2,
    u(f)[1] / 2
  ]);
  var v = Hv();
  let m;
  var p = W(v), y = W(p);
  {
    var N = (T) => {
      {
        let E = /* @__PURE__ */ _(() => u(h) / 2);
        Iv(T, {
          get radius() {
            return u(E);
          },
          get class() {
            return t.patternClass;
          }
        });
      }
    }, C = (T) => {
      Ov(T, {
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
    le(y, (T) => {
      u(s) ? T(N) : T(C, !1);
    });
  }
  var b = G(p);
  ce(() => {
    Oe(v, 0, Bt([
      "svelte-flow__background",
      "svelte-flow__container",
      t.class
    ])), m = Le(v, "", m, {
      "--xy-background-color-props": t.bgColor,
      "--xy-background-pattern-color-props": t.patternColor
    }), j(p, "id", u(c)), j(p, "x", u(i).viewport.x % u(d)[0]), j(p, "y", u(i).viewport.y % u(d)[1]), j(p, "width", u(d)[0]), j(p, "height", u(d)[1]), j(p, "patternTransform", `translate(-${u(g)[0]},-${u(g)[1]})`), j(b, "fill", `url(#${u(c)})`);
  }), B(e, v), ne();
}
var Vv = /* @__PURE__ */ ye("<rect></rect>");
function Bv(e, t) {
  let n = H(t, "borderRadius", 3, 5), r = H(t, "strokeWidth", 3, 2);
  var o = me(), i = se(o);
  {
    var s = (l) => {
      const c = /* @__PURE__ */ _(() => t.nodeComponent);
      var d = me(), h = se(d);
      $r(h, () => u(c), (f, g) => {
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
      }), B(l, d);
    }, a = (l) => {
      var c = Vv();
      let d, h;
      ce(() => {
        d = Oe(c, 0, Bt(["svelte-flow__minimap-node", t.class]), null, d, { selected: t.selected }), j(c, "x", t.x), j(c, "y", t.y), j(c, "rx", n()), j(c, "ry", n()), j(c, "width", t.width), j(c, "height", t.height), j(c, "shape-rendering", t.shapeRendering), h = Le(c, "", h, {
          fill: t.color,
          stroke: t.strokeColor,
          "stroke-width": r()
        });
      }), B(l, c);
    };
    le(i, (l) => {
      t.nodeComponent ? l(s) : l(a, !1);
    });
  }
  B(e, o);
}
function Fv(e, t) {
  const n = Xg({
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
var Kv = /* @__PURE__ */ ye("<title> </title>"), Yv = /* @__PURE__ */ ye('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Xv = /* @__PURE__ */ ee('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Zv(e, t) {
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
  ]), f = /* @__PURE__ */ _(Xt), g = /* @__PURE__ */ _(() => u(f).ariaLabelConfig);
  const v = t.nodeColor === void 0 ? void 0 : ko(t.nodeColor), m = ko(r()), p = ko(o()), y = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let N = /* @__PURE__ */ _(() => `svelte-flow__minimap-desc-${u(f).flowId}`), C = /* @__PURE__ */ _(() => ({
    x: -u(f).viewport.x / u(f).viewport.zoom,
    y: -u(f).viewport.y / u(f).viewport.zoom,
    width: u(f).width / u(f).viewport.zoom,
    height: u(f).height / u(f).viewport.zoom
  })), b = /* @__PURE__ */ _(() => ll(ur(u(f).nodeLookup, { filter: (L) => !L.hidden }), u(C))), T = /* @__PURE__ */ _(() => u(b).width / a()), E = /* @__PURE__ */ _(() => u(b).height / l()), D = /* @__PURE__ */ _(() => Math.max(u(T), u(E))), P = /* @__PURE__ */ _(() => u(D) * a()), R = /* @__PURE__ */ _(() => u(D) * l()), K = /* @__PURE__ */ _(() => 5 * u(D)), A = /* @__PURE__ */ _(() => u(b).x - (u(P) - u(b).width) / 2 - u(K)), x = /* @__PURE__ */ _(() => u(b).y - (u(R) - u(b).height) / 2 - u(K)), M = /* @__PURE__ */ _(() => u(P) + u(K) * 2), w = /* @__PURE__ */ _(() => u(R) + u(K) * 2);
  const S = () => u(D);
  var k = Xv(), I = se(k);
  {
    let L = /* @__PURE__ */ _(() => ["svelte-flow__minimap", t.class]);
    Qc(I, () => ({ "--xy-minimap-background-color-props": t.bgColor })), Si(I.lastChild, mt(
      {
        get position() {
          return n();
        },
        get class() {
          return u(L);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => h,
      {
        children: (z, V) => {
          var F = me(), Z = se(F);
          {
            var X = (Y) => {
              var Q = Yv();
              let q;
              var U = W(Q);
              {
                var $ = (re) => {
                  var pe = Kv(), ie = W(pe);
                  ce(() => {
                    j(pe, "id", u(N)), Ae(ie, t.ariaLabel ?? u(g)["minimap.ariaLabel"]);
                  }), B(re, pe);
                };
                le(U, (re) => {
                  (t.ariaLabel ?? u(g)["minimap.ariaLabel"]) && re($);
                });
              }
              var he = G(U);
              nn(he, 17, () => u(f).nodes, (re) => re.id, (re, pe) => {
                const ie = /* @__PURE__ */ _(() => u(f).nodeLookup.get(u(pe).id));
                var Te = me(), Nt = se(Te);
                {
                  var Pt = (ht) => {
                    const fe = /* @__PURE__ */ _(() => Yt(u(ie)));
                    {
                      let we = /* @__PURE__ */ _(() => v?.(u(ie))), je = /* @__PURE__ */ _(() => m(u(ie))), ve = /* @__PURE__ */ _(() => p(u(ie)));
                      Bv(ht, mt(
                        {
                          get id() {
                            return u(ie).id;
                          },
                          get x() {
                            return u(ie).internals.positionAbsolute.x;
                          },
                          get y() {
                            return u(ie).internals.positionAbsolute.y;
                          }
                        },
                        () => u(fe),
                        {
                          get selected() {
                            return u(ie).selected;
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
                            return y;
                          },
                          get class() {
                            return u(ve);
                          }
                        }
                      ));
                    }
                  };
                  le(Nt, (ht) => {
                    u(ie) && cl(u(ie)) && !u(ie).hidden && ht(Pt);
                  });
                }
                B(re, Te);
              });
              var be = G(he);
              Pe(Q, (re, pe) => Fv?.(re, pe), () => ({
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
                j(Q, "width", a()), j(Q, "height", l()), j(Q, "viewBox", `${u(A) ?? ""} ${u(x) ?? ""} ${u(M) ?? ""} ${u(w) ?? ""}`), j(Q, "aria-labelledby", u(N)), q = Le(Q, "", q, {
                  "--xy-minimap-mask-background-color-props": t.maskColor,
                  "--xy-minimap-mask-stroke-color-props": t.maskStrokeColor,
                  "--xy-minimap-mask-stroke-width-props": t.maskStrokeWidth ? t.maskStrokeWidth * u(D) : void 0
                }), j(be, "d", `M${u(A) - u(K)},${u(x) - u(K)}h${u(M) + u(K) * 2}v${u(w) + u(K) * 2}h${-u(M) - u(K) * 2}z
      M${u(C).x ?? ""},${u(C).y ?? ""}h${u(C).width ?? ""}v${u(C).height ?? ""}h${-u(C).width}z`);
              }), B(Y, Q);
            };
            le(Z, (Y) => {
              u(f).panZoom && Y(X);
            });
          }
          B(z, F);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  B(e, k), ne();
}
var Wv = /* @__PURE__ */ ee('<div class="group flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm cursor-grab hover:border-blue-400 hover:shadow-md transition-all active:cursor-grabbing" draggable="true" role="listitem" aria-roledescription="node blueprint"><div><!></div> <div class="min-w-0 flex-grow"><div class="text-xs font-bold text-slate-800 tracking-tight truncate"> </div> <div class="text-[10px] text-slate-400 mt-0.5 truncate"> </div></div></div>'), qv = /* @__PURE__ */ ee('<div class="absolute top-4 right-4 bottom-4 w-72 bg-white/90 backdrop-blur-xl border border-slate-200 flex flex-col gap-5 overflow-y-auto transition-all duration-300 z-40 rounded-2xl shadow-2xl p-5 animate-in slide-in-from-right-10 duration-300"><div class="flex items-center justify-between"><div><h3 class="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Components</h3> <p class="text-[10px] text-slate-500 mt-1">Drag to build workflow</p></div> <button type="button" class="p-2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors" title="Close Panel"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="relative"><input type="text" placeholder="Search nodes..." class="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow pl-8 bg-slate-50/50"/> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg></div> <div class="flex flex-col gap-3 w-full" role="list"></div> <div class="mt-auto p-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl text-white shadow-xl shadow-blue-200/50"><div class="flex items-center gap-2 mb-2"><span class="text-sm">💡</span> <span class="text-[10px] font-bold uppercase tracking-wider">Pro Tip</span></div> <p class="text-[10px] leading-relaxed opacity-90">Connect nodes by clicking and dragging between handles.</p></div></div>');
function Gv(e, t) {
  te(t, !0);
  let n = H(t, "availableComponents", 19, () => ({})), r = H(t, "isOpen", 15, !1), o = /* @__PURE__ */ oe("");
  function i(g) {
    const v = (g.triggers || []).map((y) => ({
      type: "trigger",
      label: y.name,
      icon: y.icon || "<svg ...>",
      // Use default if null
      description: y.description,
      color: "bg-amber-500",
      data: {
        label: y.name,
        description: y.description,
        identifier: y.identifier
      }
    })), m = (g.actions || []).map((y) => ({
      type: "action",
      label: y.name,
      icon: y.icon || "<svg ...>",
      description: y.description,
      color: "bg-blue-600",
      data: {
        label: y.name,
        description: y.description,
        identifier: y.identifier
      }
    })), p = (g.conditions || []).map((y) => ({
      type: "condition",
      label: y.name,
      icon: y.icon || "<svg ...>",
      description: y.description,
      color: "bg-purple-600",
      data: {
        label: y.name,
        description: y.description,
        identifier: y.identifier
      }
    }));
    return [...v, ...m, ...p];
  }
  let s = /* @__PURE__ */ _(() => i(n())), a = /* @__PURE__ */ _(() => u(s).filter((g) => g.label.toLowerCase().includes(u(o).toLowerCase())));
  function l(g, v, m) {
    g.dataTransfer.setData("application/svelteflow", JSON.stringify({ type: v, data: m })), g.dataTransfer.effectAllowed = "move";
  }
  function c() {
    r(!1);
  }
  var d = me(), h = se(d);
  {
    var f = (g) => {
      var v = qv(), m = W(v), p = G(W(m), 2);
      p.__click = c;
      var y = G(m, 2), N = W(y), C = G(y, 2);
      nn(C, 21, () => u(a), Do, (b, T) => {
        var E = Wv(), D = W(E), P = W(D);
        xa(P, () => u(T).icon || "<span>?</span>");
        var R = G(D, 2), K = W(R), A = W(K), x = G(K, 2), M = W(x);
        ce(() => {
          j(E, "title", u(T).label), Oe(D, 1, `w-10 h-10 ${u(T).color ?? ""} mr-auto p-1.5 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0`), Ae(A, u(T).label), Ae(M, u(T).description);
        }), en("dragstart", E, (w) => l(w, u(T).type, u(T).data)), B(b, E);
      }), cu(N, () => u(o), (b) => O(o, b)), B(g, v);
    };
    le(h, (g) => {
      r() && g(f);
    });
  }
  B(e, d), ne();
}
Mn(["click"]);
var Uv = /* @__PURE__ */ ee('<button class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path></svg> Rename Node</button> <button class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"></path></svg> Duplicate Node</button> <div class="h-px bg-slate-100 my-1"></div> <button class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg> Delete Node</button>', 1), jv = /* @__PURE__ */ ee('<button class="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> Add Node</button>'), Jv = /* @__PURE__ */ ee('<div class="absolute z-50 min-w-[160px] bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl shadow-2xl py-1 animate-in fade-in zoom-in duration-200"><!></div>');
function Qv(e, t) {
  te(t, !0);
  let n = H(t, "type", 3, "canvas");
  const { getNodes: r, setNodes: o, deleteElements: i } = ki();
  function s() {
    t.onRenameNode && t.onRenameNode(t.id), t.onclick();
  }
  function a() {
    i({ nodes: [{ id: t.id }] }), t.onclick();
  }
  function l() {
    t.onAddNode && t.onAddNode(), t.onclick();
  }
  function c() {
    const v = r(), m = v.find((p) => p.id === t.id);
    if (m) {
      const p = {
        ...m,
        id: `${m.type}-${Date.now()}`,
        position: { x: m.position.x + 20, y: m.position.y + 20 },
        selected: !1
      };
      o([...v, p]);
    }
    t.onclick();
  }
  var d = Jv();
  d.__click = (v) => v.stopPropagation();
  var h = W(d);
  {
    var f = (v) => {
      var m = Uv(), p = se(m);
      p.__click = s;
      var y = G(p, 2);
      y.__click = c;
      var N = G(y, 4);
      N.__click = a, B(v, m);
    }, g = (v) => {
      var m = jv();
      m.__click = l, B(v, m);
    };
    le(h, (v) => {
      n() === "node" ? v(f) : v(g, !1);
    });
  }
  ce(() => Le(d, `top: ${t.top ?? ""}px; left: ${t.left ?? ""}px; right: ${t.right ?? ""}px; bottom: ${t.bottom ?? ""}px;`)), B(e, d), ne();
}
Mn(["click"]);
var $v = /* @__PURE__ */ ee("<!> <!> <!> <!>", 1), ep = /* @__PURE__ */ ee('<div class="relative h-[600px] w-full border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xl"><div class="absolute inset-0" role="presentation"><!></div> <!></div>');
function tp(e, t) {
  te(t, !0);
  let n = H(t, "nodes", 31, () => it([])), r = H(t, "edges", 31, () => it([])), o = H(t, "availableComponents", 19, () => ({}));
  const { screenToFlowPosition: i, setNodes: s } = ki();
  let a = /* @__PURE__ */ oe(null), l = /* @__PURE__ */ oe(!1), c = /* @__PURE__ */ oe(0), d = /* @__PURE__ */ oe(0);
  function h(E) {
    E.preventDefault(), E.dataTransfer.dropEffect = "move";
  }
  function f(E) {
    E.preventDefault();
    const D = E.dataTransfer.getData("application/svelteflow");
    if (!D) return;
    const { type: P, data: R } = JSON.parse(D), K = i({ x: E.clientX, y: E.clientY }), A = { id: `${P}-${Date.now()}`, type: P, position: K, data: R };
    n([...n(), A]);
  }
  function g({ event: E, node: D }) {
    E.preventDefault(), O(
      a,
      {
        id: D.id,
        type: "node",
        top: E.clientY < u(d) - 200 ? E.clientY : void 0,
        left: E.clientX < u(c) - 200 ? E.clientX : void 0,
        right: E.clientX >= u(c) - 200 ? u(c) - E.clientX : void 0,
        bottom: E.clientY >= u(d) - 200 ? u(d) - E.clientY : void 0
      },
      !0
    );
  }
  function v(E) {
    E.preventDefault(), O(
      a,
      {
        id: "canvas",
        type: "pane",
        top: E.clientY < u(d) - 200 ? E.clientY : void 0,
        left: E.clientX < u(c) - 200 ? E.clientX : void 0,
        right: E.clientX >= u(c) - 200 ? u(c) - E.clientX : void 0,
        bottom: E.clientY >= u(d) - 200 ? u(d) - E.clientY : void 0
      },
      !0
    );
  }
  function m() {
    O(a, null);
  }
  function p() {
    O(l, !0);
  }
  function y(E) {
    const D = n().find((P) => P.id === E);
    if (D) {
      const P = window.prompt("Enter new node name:", D.data.label);
      P !== null && s(n().map((R) => R.id === E ? { ...R, data: { ...R.data, label: P } } : R));
    }
  }
  var N = ep(), C = W(N), b = W(C);
  pv(b, {
    get nodeTypes() {
      return t.nodeTypes;
    },
    fitView: !0,
    onnodeclick: ({ event: E, node: D }) => {
      t.onNodeClick && t.onNodeClick(E, D), m();
    },
    onnodecontextmenu: g,
    onpanecontextmenu: v,
    onpaneclick: m,
    get nodes() {
      return n();
    },
    set nodes(E) {
      n(E);
    },
    get edges() {
      return r();
    },
    set edges(E) {
      r(E);
    },
    children: (E, D) => {
      var P = $v(), R = se(P);
      Tv(R, {});
      var K = G(R, 2);
      Lv(K, { variant: "lines", gap: 20, size: 1, color: "#f1f5f9" });
      var A = G(K, 2);
      Zv(A, {});
      var x = G(A, 2);
      {
        var M = (w) => {
          Qv(w, mt(() => u(a), {
            onclick: m,
            onAddNode: p,
            onRenameNode: y
          }));
        };
        le(x, (w) => {
          u(a) && w(M);
        });
      }
      B(E, P);
    },
    $$slots: { default: !0 }
  });
  var T = G(C, 2);
  Gv(T, {
    get availableComponents() {
      return o();
    },
    get isOpen() {
      return u(l);
    },
    set isOpen(E) {
      O(l, E, !0);
    }
  }), en("dragover", C, h), en("drop", C, f), Dr(N, "clientWidth", (E) => O(c, E)), Dr(N, "clientHeight", (E) => O(d, E)), B(e, N), ne();
}
var np = /* @__PURE__ */ ee('<p class="text-[10px] leading-relaxed text-slate-500 mb-2 italic"> </p>'), rp = /* @__PURE__ */ ee('<div class="relative w-3 h-3" role="presentation"><!></div>'), op = /* @__PURE__ */ ee('<div class="relative w-3 h-3" role="presentation"><!></div>'), ip = /* @__PURE__ */ ee('<div class="relative group" role="presentation"><div><div><span class="text-white"><!></span> <span class="text-[10px] font-bold uppercase tracking-wider text-white flex-1"> </span> <button type="button" class="text-white/70 hover:text-white hover:bg-white/20 rounded p-0.5 transition-all opacity-0 group-hover:opacity-100" title="Edit Settings"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg></button></div> <div><!> <div><!></div></div></div> <div class="absolute -left-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div> <div class="absolute -right-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div></div>');
function Ci(e, t) {
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
  }, s = /* @__PURE__ */ _(() => i[n()] || i.default);
  function a(D) {
    D.stopPropagation(), window.dispatchEvent(new CustomEvent("open-node-settings", {
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
  var l = ip(), c = W(l), d = W(c), h = W(d), f = W(h);
  xa(f, () => u(s).icon);
  var g = G(h, 2), v = W(g), m = G(g, 2);
  m.__click = a;
  var p = G(d, 2), y = W(p);
  {
    var N = (D) => {
      var P = np(), R = W(P);
      ce(() => Ae(R, t.data.description)), B(D, P);
    };
    le(y, (D) => {
      t.data.description && D(N);
    });
  }
  var C = G(y, 2), b = W(C);
  He(b, () => t.children ?? Lt);
  var T = G(c, 2);
  nn(T, 21, r, Do, (D, P) => {
    var R = rp(), K = W(R);
    Ht(K, {
      type: "target",
      get position() {
        return J.Left;
      },
      get id() {
        return u(P).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
    }), B(D, R);
  });
  var E = G(T, 2);
  nn(E, 21, o, Do, (D, P) => {
    var R = op(), K = W(R);
    Ht(K, {
      type: "source",
      get position() {
        return J.Right;
      },
      get id() {
        return u(P).id;
      },
      class: "!w-3 !h-3 !bg-slate-400 !border-2 !border-white hover:!bg-blue-500 transition-all hover:scale-125"
    }), B(D, R);
  }), ce(() => {
    Oe(c, 1, `min-w-[180px] max-w-[240px] bg-white rounded-xl shadow-sm border ${u(s).border ?? ""} overflow-hidden transition-all duration-200 ${t.selected ? "ring-2 ring-blue-500 ring-offset-2" : "hover:shadow-md"}`), Oe(d, 1, `${u(s).header ?? ""} px-3 py-1.5 flex items-center gap-2`), Ae(v, t.data.label || "Node"), Oe(p, 1, `p-3 ${u(s).bg ?? ""}`), Oe(C, 1, `text-xs font-medium ${u(s).text ?? ""}`);
  }), B(e, l), ne();
}
Mn(["click"]);
var sp = /* @__PURE__ */ ee('<div class="px-2 py-1 bg-amber-100/50 rounded border border-amber-200 text-[10px] break-all font-mono"> </div>');
function ap(e, t) {
  te(t, !0);
  const n = [{ id: "output" }];
  Ci(e, {
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
      var i = me(), s = se(i);
      {
        var a = (l) => {
          var c = sp(), d = W(c);
          ce((h) => Ae(d, h), [() => t.data.event.split("\\").pop()]), B(l, c);
        };
        le(s, (l) => {
          t.data.event && l(a);
        });
      }
      B(r, i);
    },
    $$slots: { default: !0 }
  }), ne();
}
var lp = /* @__PURE__ */ ee('<div class="flex items-center gap-2 px-2 py-1 bg-blue-100/50 rounded border border-blue-200 text-[10px] font-semibold"><span>⚡</span> </div>');
function cp(e, t) {
  te(t, !0);
  const n = [{ id: "input" }], r = [{ id: "output" }];
  Ci(e, {
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
      var s = me(), a = se(s);
      {
        var l = (c) => {
          var d = lp(), h = G(W(d));
          ce(() => Ae(h, ` ${t.data.action ?? ""}`)), B(c, d);
        };
        le(a, (c) => {
          t.data.action && c(l);
        });
      }
      B(o, s);
    },
    $$slots: { default: !0 }
  }), ne();
}
var up = /* @__PURE__ */ ee('<div class="px-2 py-1 bg-purple-100/50 rounded border border-purple-200 text-[10px] font-mono mb-6"> </div>'), dp = /* @__PURE__ */ ee('<!> <div class="absolute -right-1.5 top-[60px] flex flex-col gap-6"><div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-emerald-600 mr-2 uppercase">True</span> <!></div> <div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-rose-600 mr-2 uppercase">False</span> <!></div></div>', 1), fp = /* @__PURE__ */ ee('<div class="relative"><!></div>');
function hp(e, t) {
  te(t, !0);
  const n = [{ id: "input" }];
  var r = fp(), o = W(r);
  Ci(o, {
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
      var a = dp(), l = se(a);
      {
        var c = (m) => {
          var p = up(), y = W(p);
          ce(() => Ae(y, t.data.condition)), B(m, p);
        };
        le(l, (m) => {
          t.data.condition && m(c);
        });
      }
      var d = G(l, 2), h = W(d), f = G(W(h), 2);
      Ht(f, {
        type: "source",
        get position() {
          return J.Right;
        },
        id: "true",
        class: "!w-3 !h-3 !bg-emerald-500 !border-2 !border-white"
      });
      var g = G(h, 2), v = G(W(g), 2);
      Ht(v, {
        type: "source",
        get position() {
          return J.Right;
        },
        id: "false",
        class: "!w-3 !h-3 !bg-rose-500 !border-2 !border-white"
      }), B(i, a);
    },
    $$slots: { default: !0 }
  }), B(e, r), ne();
}
var gp = /* @__PURE__ */ ee('<div class="flex h-full w-full overflow-hidden"><!></div>');
function vp(e, t) {
  te(t, !0);
  const n = {
    trigger: ap,
    action: cp,
    condition: hp
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
  let i = H(t, "nodes", 19, () => []), s = H(t, "edges", 19, () => []), a = H(t, "availableComponents", 19, () => ({})), l = /* @__PURE__ */ oe(Se(() => i().length > 0 ? i() : r)), c = /* @__PURE__ */ oe(Se(() => s().length > 0 ? s() : o)), d = /* @__PURE__ */ oe(null);
  function h(g, v) {
    O(d, v.id, !0);
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
      const { id: m, config: p } = v.detail, y = u(l).findIndex((N) => N.id === m);
      if (y !== -1) {
        const { label: N, description: C, ...b } = p, T = { ...u(l)[y] };
        T.data = { ...T.data, label: N, description: C, config: b };
        const E = [...u(l)];
        E[y] = T, O(l, E);
      }
    };
    return window.addEventListener("update-node-config", g), () => {
      window.removeEventListener("update-node-config", g);
    };
  }), mv(e, {
    children: (g, v) => {
      var m = gp(), p = W(m);
      tp(p, {
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
        set nodes(y) {
          O(l, y);
        },
        get edges() {
          return u(c);
        },
        set edges(y) {
          O(c, y);
        }
      }), B(g, m);
    },
    $$slots: { default: !0 }
  }), ne();
}
const Cs = () => {
  window.Alpine.data("flowBuilder", ({ state: e, components: t }) => ({
    state: e,
    components: t,
    init() {
      const n = Array.isArray(this.state?.nodes) ? JSON.parse(JSON.stringify(this.state.nodes)) : [], r = Array.isArray(this.state?.edges) ? JSON.parse(JSON.stringify(this.state.edges)) : [];
      Uc(vp, {
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
window.Alpine ? Cs() : document.addEventListener("alpine:init", Cs);
