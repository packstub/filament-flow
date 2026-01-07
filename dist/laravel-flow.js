var lo = Array.isArray, oc = Array.prototype.indexOf, co = Array.from, ic = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, Zs = Object.getOwnPropertyDescriptors, Ws = Object.prototype, sc = Array.prototype, uo = Object.getPrototypeOf, Ki = Object.isExtensible;
function bn(e) {
  return typeof e == "function";
}
const We = () => {
};
function ac(e) {
  return e();
}
function Ko(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function qs() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Ie(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function Rn(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Pe = 2, ui = 4, fo = 8, Gs = 1 << 24, kt = 16, Lt = 32, qt = 64, ho = 128, ut = 512, Me = 1024, Ue = 2048, _t = 4096, Ge = 8192, It = 16384, go = 32768, wt = 65536, Yi = 1 << 17, Us = 1 << 18, gn = 1 << 19, js = 1 << 20, Mt = 1 << 25, an = 32768, Yo = 1 << 21, di = 1 << 22, Yt = 1 << 23, pt = /* @__PURE__ */ Symbol("$state"), Js = /* @__PURE__ */ Symbol("legacy props"), lc = /* @__PURE__ */ Symbol(""), xn = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function fi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function cc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function uc(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function dc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function fc(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function hc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function gc(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function vc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function pc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function mc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function yc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const _c = 1, wc = 2, Qs = 4, bc = 8, xc = 16, kc = 1, Ec = 2, $s = 4, Sc = 8, Nc = 16, Cc = 1, Pc = 2, Mc = 4, ea = 1, Ac = 2, Ne = /* @__PURE__ */ Symbol(), zc = "http://www.w3.org/1999/xhtml", Ic = "http://www.w3.org/2000/svg", Tc = "@attach";
function Dc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Oc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ta(e) {
  return e === this.v;
}
function na(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ra(e) {
  return !na(e, this.v);
}
let Ln = !1;
function Rc() {
  Ln = !0;
}
const Lc = [];
function oa(e, t = !1, n = !1) {
  return Dr(e, /* @__PURE__ */ new Map(), "", Lc, null, n);
}
function Dr(e, t, n, r, o = null, i = !1) {
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
    if (lo(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var c = 0; c < e.length; c += 1) {
        var u = e[c];
        c in e && (a[c] = Dr(u, t, n, r, null, i));
      }
      return a;
    }
    if (uo(e) === Ws) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = Dr(
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
      return Dr(
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
function hi(e) {
  return (
    /** @type {T} */
    vi().get(e)
  );
}
function gi(e, t) {
  return vi().set(e, t), t;
}
function Hc(e) {
  return vi().has(e);
}
function oe(e, t = !1, n) {
  me = {
    p: me,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Ln && !t ? { s: null, u: null, $: [] } : null
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
      ba(r);
  }
  return t.i = !0, me = t.p, /** @type {T} */
  {};
}
function fr() {
  return !Ln || me !== null && me.l === null;
}
function vi(e) {
  return me === null && fi(), me.c ??= new Map(Vc(me) || void 0);
}
function Vc(e) {
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
function ia() {
  var e = en;
  en = [], Ko(e);
}
function Gt(e) {
  if (en.length === 0 && !Jn) {
    var t = en;
    queueMicrotask(() => {
      t === en && ia();
    });
  }
  en.push(e);
}
function Bc() {
  for (; en.length > 0; )
    ia();
}
function sa(e) {
  var t = de;
  if (t === null)
    return fe.f |= Yt, e;
  if ((t.f & go) === 0) {
    if ((t.f & ho) === 0)
      throw e;
    t.b.error(e);
  } else
    Pn(e, t);
}
function Pn(e, t) {
  for (; t !== null; ) {
    if ((t.f & ho) !== 0)
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
const kr = /* @__PURE__ */ new Set();
let ve = null, Or = null, tt = null, et = [], vo = null, Xo = !1, Jn = !1;
class lt {
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
    et = [], Or = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      this.#s(r, n);
    this.is_fork || this.#u(), this.is_deferred() ? (this.#a(n.effects), this.#a(n.render_effects)) : (Or = this, ve = null, Xi(n.render_effects), Xi(n.effects), Or = null, this.#l?.resolve()), tt = null;
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
      var o = r.f, i = (o & (Lt | qt)) !== 0, s = i && (o & Me) !== 0, a = s || (o & Ge) !== 0 || this.skipped_effects.has(r);
      if ((r.f & ho) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Me : (o & ui) !== 0 ? n.effects.push(r) : pr(r) && ((r.f & kt) !== 0 && this.#i.add(r), nr(r));
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
      (n.f & Ue) !== 0 ? this.#i.add(n) : (n.f & _t) !== 0 && this.#o.add(n), this.#c(n.deps), Ae(n, Me);
  }
  /**
   * @param {Value[] | null} deps
   */
  #c(t) {
    if (t !== null)
      for (const n of t)
        (n.f & Pe) === 0 || (n.f & an) === 0 || (n.f ^= an, this.#c(
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
    this.previous.has(t) || this.previous.set(t, n), (t.f & Yt) === 0 && (this.current.set(t, t.v), tt?.set(t, t.v));
  }
  activate() {
    ve = this, this.apply();
  }
  deactivate() {
    ve === this && (ve = null, tt = null);
  }
  flush() {
    if (this.activate(), et.length > 0) {
      if (aa(), ve !== null && ve !== this)
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
    if (kr.size > 1) {
      this.previous.clear();
      var t = tt, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: []
      };
      for (const i of kr) {
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
          var o = et;
          et = [];
          const c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            la(d, a, c, u);
          if (et.length > 0) {
            ve = i, i.apply();
            for (const d of et)
              i.#s(d, r);
            i.deactivate();
          }
          et = o;
        }
      }
      ve = null, tt = t;
    }
    this.committed = !0, kr.delete(this);
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
      this.#o.delete(t), Ae(t, Ue), ln(t);
    for (const t of this.#o)
      Ae(t, _t), ln(t);
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
    return (this.#l ??= qs()).promise;
  }
  static ensure() {
    if (ve === null) {
      const t = ve = new lt();
      kr.add(ve), Jn || lt.enqueue(() => {
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
function Fc(e) {
  var t = Jn;
  Jn = !0;
  try {
    for (var n; ; ) {
      if (Bc(), et.length === 0 && (ve?.flush(), et.length === 0))
        return vo = null, /** @type {T} */
        n;
      aa();
    }
  } finally {
    Jn = t;
  }
}
function aa() {
  var e = rn;
  Xo = !0;
  var t = null;
  try {
    var n = 0;
    for (Yr(!0); et.length > 0; ) {
      var r = lt.ensure();
      if (n++ > 1e3) {
        var o, i;
        Kc();
      }
      r.process(et), Xt.clear();
    }
  } finally {
    Xo = !1, Yr(e), vo = null;
  }
}
function Kc() {
  try {
    hc();
  } catch (e) {
    Pn(e, vo);
  }
}
let Nt = null;
function Xi(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (It | Ge)) === 0 && pr(r) && (Nt = /* @__PURE__ */ new Set(), nr(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? Pa(r) : r.fn = null), Nt?.size > 0)) {
        Xt.clear();
        for (const o of Nt) {
          if ((o.f & (It | Ge)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Nt.has(s) && (Nt.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const c = i[a];
            (c.f & (It | Ge)) === 0 && nr(c);
          }
        }
        Nt.clear();
      }
    }
    Nt = null;
  }
}
function la(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & Pe) !== 0 ? la(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (di | kt)) !== 0 && (i & Ue) === 0 && ca(o, t, r) && (Ae(o, Ue), ln(
        /** @type {Effect} */
        o
      ));
    }
}
function ca(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & Pe) !== 0 && ca(
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
  for (var t = vo = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Xo && t === de && (n & kt) !== 0 && (n & Us) === 0)
      return;
    if ((n & (qt | Lt)) !== 0) {
      if ((n & Me) === 0) return;
      t.f ^= Me;
    }
  }
  et.push(t);
}
function ua(e) {
  let t = 0, n = Zt(0), r;
  return () => {
    er() && (l(n), vr(() => (t === 0 && (r = ke(() => e(() => Qn(n)))), t += 1, () => {
      Gt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Qn(n));
      });
    })));
  };
}
var Yc = wt | gn | ho;
function Xc(e, t, n) {
  new Zc(e, t, n);
}
class Zc {
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
  #_ = ua(() => (this.#h = Zt(this.#d), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    de.b, this.#e = !!this.#r.pending, this.#i = Bn(() => {
      de.b = this;
      {
        var o = this.#m();
        try {
          this.#o = He(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#p() : this.#e = !1;
      }
      return () => {
        this.#u?.remove();
      };
    }, Yc);
  }
  #w() {
    try {
      this.#o = He(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #b() {
    const t = this.#r.pending;
    t && (this.#s = He(() => t(this.#t)), lt.enqueue(() => {
      var n = this.#m();
      this.#o = this.#v(() => (lt.ensure(), He(() => this.#l(n)))), this.#f > 0 ? this.#p() : (nn(
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
    var n = de, r = fe, o = me;
    rt(this.#i), Ve(this.#i), Cn(this.#i.ctx);
    try {
      return t();
    } catch (i) {
      return sa(i), null;
    } finally {
      rt(n), Ve(r), Cn(o);
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
    ), za(this.#o, this.#c)), this.#s === null && (this.#s = He(() => t(this.#t)));
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
    this.#o && (Se(this.#o), this.#o = null), this.#s && (Se(this.#s), this.#s = null), this.#a && (Se(this.#a), this.#a = null);
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Oc();
        return;
      }
      o = !0, i && yc(), lt.ensure(), this.#d = 0, this.#a !== null && nn(this.#a, () => {
        this.#a = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#v(() => (this.#g = !1, He(() => this.#l(this.#t)))), this.#f > 0 ? this.#p() : this.#e = !1;
    };
    var a = fe;
    try {
      Ve(null), i = !0, n?.(t, s), i = !1;
    } catch (c) {
      Pn(c, this.#i && this.#i.parent);
    } finally {
      Ve(a);
    }
    r && Gt(() => {
      this.#a = this.#v(() => {
        lt.ensure(), this.#g = !0;
        try {
          return He(() => {
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
function da(e, t, n, r) {
  const o = fr() ? hr : pi;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = ve, s = (
    /** @type {Effect} */
    de
  ), a = Wc();
  function c() {
    Promise.all(n.map((u) => /* @__PURE__ */ qc(u))).then((u) => {
      a();
      try {
        r([...t.map(o), ...u]);
      } catch (d) {
        (s.f & It) === 0 && Pn(d, s);
      }
      i?.deactivate(), Kr();
    }).catch((u) => {
      Pn(u, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return c();
    } finally {
      i?.deactivate(), Kr();
    }
  }) : c();
}
function Wc() {
  var e = de, t = fe, n = me, r = ve;
  return function(i = !0) {
    rt(e), Ve(t), Cn(n), i && r?.activate();
  };
}
function Kr() {
  rt(null), Ve(null), Cn(null);
}
// @__NO_SIDE_EFFECTS__
function hr(e) {
  var t = Pe | Ue, n = fe !== null && (fe.f & Pe) !== 0 ? (
    /** @type {Derived} */
    fe
  ) : null;
  return de !== null && (de.f |= gn), {
    ctx: me,
    deps: null,
    effects: null,
    equals: ta,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ne
    ),
    wv: 0,
    parent: n ?? de,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function qc(e, t) {
  let n = (
    /** @type {Effect | null} */
    de
  );
  n === null && cc();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Zt(
    /** @type {V} */
    Ne
  ), s = !fe, a = /* @__PURE__ */ new Map();
  return iu(() => {
    var c = qs();
    o = c.promise;
    try {
      Promise.resolve(e()).then(c.resolve, c.reject).then(() => {
        u === ve && u.committed && u.deactivate(), Kr();
      });
    } catch (f) {
      c.reject(f), Kr();
    }
    var u = (
      /** @type {Batch} */
      ve
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(xn), a.delete(u), a.set(u, c);
    }
    const h = (f, g = void 0) => {
      if (u.activate(), g)
        g !== xn && (i.f |= Yt, Mn(i, g));
      else {
        (i.f & Yt) !== 0 && (i.f ^= Yt), Mn(i, f);
        for (const [v, p] of a) {
          if (a.delete(v), v === u) break;
          p.reject(xn);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    c.promise.then(h, (f) => h(null, f || "unknown"));
  }), po(() => {
    for (const c of a.values())
      c.reject(xn);
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
  const t = /* @__PURE__ */ hr(e);
  return Ia(t), t;
}
// @__NO_SIDE_EFFECTS__
function pi(e) {
  const t = /* @__PURE__ */ hr(e);
  return t.equals = ra, t;
}
function fa(e) {
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
function Gc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Pe) === 0)
      return (t.f & It) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function mi(e) {
  var t, n = de;
  rt(Gc(e));
  try {
    e.f &= ~an, fa(e), t = Ra(e);
  } finally {
    rt(n);
  }
  return t;
}
function ha(e) {
  var t = mi(e);
  if (e.equals(t) || (ve?.is_fork || (e.v = t), e.wv = Da()), !vn)
    if (tt !== null)
      (er() || ve?.is_fork) && tt.set(e, t);
    else {
      var n = (e.f & ut) === 0 ? _t : Me;
      Ae(e, n);
    }
}
let Zo = /* @__PURE__ */ new Set();
const Xt = /* @__PURE__ */ new Map();
let ga = !1;
function Zt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ta,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function se(e, t) {
  const n = Zt(e);
  return Ia(n), n;
}
// @__NO_SIDE_EFFECTS__
function Uc(e, t = !1, n = !0) {
  const r = Zt(e);
  return t || (r.equals = ra), Ln && n && me !== null && me.l !== null && (me.l.s ??= []).push(r), r;
}
function D(e, t, n = !1) {
  fe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!vt || (fe.f & Yi) !== 0) && fr() && (fe.f & (Pe | kt | di | Yi)) !== 0 && !Tt?.includes(e) && mc();
  let r = n ? gt(t) : t;
  return Mn(e, r);
}
function Mn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    vn ? Xt.set(e, t) : Xt.set(e, n), e.v = t;
    var r = lt.ensure();
    r.capture(e, n), (e.f & Pe) !== 0 && ((e.f & Ue) !== 0 && mi(
      /** @type {Derived} */
      e
    ), Ae(e, (e.f & ut) !== 0 ? Me : _t)), e.wv = Da(), va(e, Ue), fr() && de !== null && (de.f & Me) !== 0 && (de.f & (Lt | qt)) === 0 && ($e === null ? au([e]) : $e.push(e)), !r.is_fork && Zo.size > 0 && !ga && jc();
  }
  return t;
}
function jc() {
  ga = !1;
  var e = rn;
  Yr(!0);
  const t = Array.from(Zo);
  try {
    for (const n of t)
      (n.f & Me) !== 0 && Ae(n, _t), pr(n) && nr(n);
  } finally {
    Yr(e);
  }
  Zo.clear();
}
function Zi(e, t = 1) {
  var n = l(e), r = t === 1 ? n++ : n--;
  return D(e, n), r;
}
function Qn(e) {
  D(e, e.v + 1);
}
function va(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = fr(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === de)) {
        var c = (a & Ue) === 0;
        if (c && Ae(s, t), (a & Pe) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          tt?.delete(u), (a & an) === 0 && (a & ut && (s.f |= an), va(u, _t));
        } else c && ((a & kt) !== 0 && Nt !== null && Nt.add(
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
  const t = uo(e);
  if (t !== Ws && t !== sc)
    return e;
  var n = /* @__PURE__ */ new Map(), r = lo(e), o = /* @__PURE__ */ se(0), i = on, s = (a) => {
    if (on === i)
      return a();
    var c = fe, u = on;
    Ve(null), Ui(i);
    var d = a();
    return Ve(c), Ui(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ se(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, c, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && vc();
        var d = n.get(c);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ se(u.value);
          return n.set(c, h), h;
        }) : D(d, u.value, !0), !0;
      },
      deleteProperty(a, c) {
        var u = n.get(c);
        if (u === void 0) {
          if (c in a) {
            const d = s(() => /* @__PURE__ */ se(Ne));
            n.set(c, d), Qn(o);
          }
        } else
          D(u, Ne), Qn(o);
        return !0;
      },
      get(a, c, u) {
        if (c === pt)
          return e;
        var d = n.get(c), h = c in a;
        if (d === void 0 && (!h || Kt(a, c)?.writable) && (d = s(() => {
          var g = gt(h ? a[c] : Ne), v = /* @__PURE__ */ se(g);
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
        if (c === pt)
          return !0;
        var u = n.get(c), d = u !== void 0 && u.v !== Ne || Reflect.has(a, c);
        if (u !== void 0 || de !== null && (!d || Kt(a, c)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? gt(a[c]) : Ne, g = /* @__PURE__ */ se(f);
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
            v !== void 0 ? D(v, Ne) : g in a && (v = s(() => /* @__PURE__ */ se(Ne)), n.set(g + "", v));
          }
        if (h === void 0)
          (!f || Kt(a, c)?.writable) && (h = s(() => /* @__PURE__ */ se(void 0)), D(h, gt(u)), n.set(c, h));
        else {
          f = h.v !== Ne;
          var p = s(() => gt(u));
          D(h, p);
        }
        var m = Reflect.getOwnPropertyDescriptor(a, c);
        if (m?.set && m.set.call(d, u), !f) {
          if (r && typeof c == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(c);
            Number.isInteger(x) && x >= w.v && D(w, x + 1);
          }
          Qn(o);
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
        pc();
      }
    }
  );
}
function Wi(e) {
  try {
    if (e !== null && typeof e == "object" && pt in e)
      return e[pt];
  } catch {
  }
  return e;
}
function Jc(e, t) {
  return Object.is(Wi(e), Wi(t));
}
var Le, pa, ma, ya;
function Qc() {
  if (Le === void 0) {
    Le = window, pa = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ma = Kt(t, "firstChild").get, ya = Kt(t, "nextSibling").get, Ki(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ki(n) && (n.__t = void 0);
  }
}
function mt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return (
    /** @type {TemplateNode | null} */
    ma.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  return (
    /** @type {TemplateNode | null} */
    ya.call(e)
  );
}
function Z(e, t) {
  return /* @__PURE__ */ qe(e);
}
function $(e, t = !1) {
  {
    var n = /* @__PURE__ */ qe(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ gr(n) : n;
  }
}
function J(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ gr(r);
  return r;
}
function $c(e) {
  e.textContent = "";
}
function _a() {
  return !1;
}
function eu(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Gt(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let qi = !1;
function tu() {
  qi || (qi = !0, document.addEventListener(
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
function Hn(e) {
  var t = fe, n = de;
  Ve(null), rt(null);
  try {
    return e();
  } finally {
    Ve(t), rt(n);
  }
}
function nu(e, t, n, r = n) {
  e.addEventListener(t, () => Hn(n));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), r(!0);
  } : e.__on_r = () => r(!0), tu();
}
function wa(e) {
  de === null && (fe === null && fc(), dc()), vn && uc();
}
function ru(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ot(e, t, n) {
  var r = de;
  r !== null && (r.f & Ge) !== 0 && (e |= Ge);
  var o = {
    ctx: me,
    deps: null,
    nodes: null,
    f: e | Ue | ut,
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
      nr(o), o.f |= go;
    } catch (a) {
      throw Se(o), a;
    }
  else t !== null && ln(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & gn) === 0 && (i = i.first, (e & kt) !== 0 && (e & wt) !== 0 && i !== null && (i.f |= wt)), i !== null && (i.parent = r, r !== null && ru(i, r), fe !== null && (fe.f & Pe) !== 0 && (e & qt) === 0)) {
    var s = (
      /** @type {Derived} */
      fe
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function er() {
  return fe !== null && !vt;
}
function po(e) {
  const t = ot(fo, null, !1);
  return Ae(t, Me), t.teardown = e, t;
}
function Oe(e) {
  wa();
  var t = (
    /** @type {Effect} */
    de.f
  ), n = !fe && (t & Lt) !== 0 && (t & go) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      me
    );
    (r.e ??= []).push(e);
  } else
    return ba(e);
}
function ba(e) {
  return ot(ui | js, e, !1);
}
function xa(e) {
  return wa(), ot(fo | js, e, !0);
}
function ka(e) {
  lt.ensure();
  const t = ot(qt | gn, e, !0);
  return () => {
    Se(t);
  };
}
function ou(e) {
  lt.ensure();
  const t = ot(qt | gn, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? nn(t, () => {
      Se(t), r(void 0);
    }) : (Se(t), r(void 0));
  });
}
function Vn(e) {
  return ot(ui, e, !1);
}
function iu(e) {
  return ot(di | gn, e, !0);
}
function vr(e, t = 0) {
  return ot(fo | t, e, !0);
}
function ue(e, t = [], n = [], r = []) {
  da(r, t, n, (o) => {
    ot(fo, () => e(...o.map(l)), !0);
  });
}
function Bn(e, t = 0) {
  var n = ot(kt | t, e, !0);
  return n;
}
function Ea(e, t = 0) {
  var n = ot(Gs | t, e, !0);
  return n;
}
function He(e) {
  return ot(Lt | gn, e, !0);
}
function Sa(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = vn, r = fe;
    Gi(!0), Ve(null);
    try {
      t.call(null);
    } finally {
      Gi(n), Ve(r);
    }
  }
}
function Na(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && Hn(() => {
      o.abort(xn);
    });
    var r = n.next;
    (n.f & qt) !== 0 ? n.parent = null : Se(n, t), n = r;
  }
}
function su(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Lt) === 0 && Se(t), t = n;
  }
}
function Se(e, t = !0) {
  var n = !1;
  (t || (e.f & Us) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ca(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), Na(e, t && !n), Xr(e, 0), Ae(e, It);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  Sa(e);
  var o = e.parent;
  o !== null && o.first !== null && Pa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Ca(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ gr(e);
    e.remove(), e = n;
  }
}
function Pa(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function nn(e, t, n = !0) {
  var r = [];
  Ma(e, r, !0);
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
function Ma(e, t, n) {
  if ((e.f & Ge) === 0) {
    e.f ^= Ge;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var o = e.first; o !== null; ) {
      var i = o.next, s = (o.f & wt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (o.f & Lt) !== 0 && (e.f & kt) !== 0;
      Ma(o, t, s ? n : !1), o = i;
    }
  }
}
function yi(e) {
  Aa(e, !0);
}
function Aa(e, t) {
  if ((e.f & Ge) !== 0) {
    e.f ^= Ge, (e.f & Me) === 0 && (Ae(e, Ue), ln(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & wt) !== 0 || (n.f & Lt) !== 0;
      Aa(n, o ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || t) && s.in();
  }
}
function za(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var o = n === r ? null : /* @__PURE__ */ gr(n);
      t.append(n), n = o;
    }
}
let rn = !1;
function Yr(e) {
  rn = e;
}
let vn = !1;
function Gi(e) {
  vn = e;
}
let fe = null, vt = !1;
function Ve(e) {
  fe = e;
}
let de = null;
function rt(e) {
  de = e;
}
let Tt = null;
function Ia(e) {
  fe !== null && (Tt === null ? Tt = [e] : Tt.push(e));
}
let De = null, Ze = 0, $e = null;
function au(e) {
  $e = e;
}
let Ta = 1, tr = 0, on = tr;
function Ui(e) {
  on = e;
}
function Da() {
  return ++Ta;
}
function pr(e) {
  var t = e.f;
  if ((t & Ue) !== 0)
    return !0;
  if (t & Pe && (e.f &= ~an), (t & _t) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (pr(
          /** @type {Derived} */
          i
        ) && ha(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & ut) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    tt === null && Ae(e, Me);
  }
  return !1;
}
function Oa(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Tt?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Pe) !== 0 ? Oa(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Ae(i, Ue) : (i.f & Me) !== 0 && Ae(i, _t), ln(
        /** @type {Effect} */
        i
      ));
    }
}
function Ra(e) {
  var t = De, n = Ze, r = $e, o = fe, i = Tt, s = me, a = vt, c = on, u = e.f;
  De = /** @type {null | Value[]} */
  null, Ze = 0, $e = null, fe = (u & (Lt | qt)) === 0 ? e : null, Tt = null, Cn(e.ctx), vt = !1, on = ++tr, e.ac !== null && (Hn(() => {
    e.ac.abort(xn);
  }), e.ac = null);
  try {
    e.f |= Yo;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps;
    if (De !== null) {
      var g;
      if (Xr(e, Ze), f !== null && Ze > 0)
        for (f.length = Ze + De.length, g = 0; g < De.length; g++)
          f[Ze + g] = De[g];
      else
        e.deps = f = De;
      if (er() && (e.f & ut) !== 0)
        for (g = Ze; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Ze < f.length && (Xr(e, Ze), f.length = Ze);
    if (fr() && $e !== null && !vt && f !== null && (e.f & (Pe | _t | Ue)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      $e.length; g++)
        Oa(
          $e[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (tr++, $e !== null && (r === null ? r = $e : r.push(.../** @type {Source[]} */
    $e))), (e.f & Yt) !== 0 && (e.f ^= Yt), h;
  } catch (v) {
    return sa(v);
  } finally {
    e.f ^= Yo, De = t, Ze = n, $e = r, fe = o, Tt = i, Cn(s), vt = a, on = c;
  }
}
function lu(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = oc.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (De === null || !De.includes(t)) && (Ae(t, _t), (t.f & ut) !== 0 && (t.f ^= ut, t.f &= ~an), fa(
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
      lu(e, n[r]);
}
function nr(e) {
  var t = e.f;
  if ((t & It) === 0) {
    Ae(e, Me);
    var n = de, r = rn;
    de = e, rn = !0;
    try {
      (t & (kt | Gs)) !== 0 ? su(e) : Na(e), Sa(e);
      var o = Ra(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Ta;
      var i;
    } finally {
      rn = r, de = n;
    }
  }
}
async function cu() {
  await Promise.resolve(), Fc();
}
function l(e) {
  var t = e.f, n = (t & Pe) !== 0;
  if (fe !== null && !vt) {
    var r = de !== null && (de.f & It) !== 0;
    if (!r && !Tt?.includes(e)) {
      var o = fe.deps;
      if ((fe.f & Yo) !== 0)
        e.rv < tr && (e.rv = tr, De === null && o !== null && o[Ze] === e ? Ze++ : De === null ? De = [e] : De.includes(e) || De.push(e));
      else {
        (fe.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [fe] : i.includes(fe) || i.push(fe);
      }
    }
  }
  if (vn) {
    if (Xt.has(e))
      return Xt.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & Me) === 0 && s.reactions !== null || Ha(s)) && (a = mi(s)), Xt.set(s, a), a;
    }
  } else n && (!tt?.has(e) || ve?.is_fork && !er()) && (s = /** @type {Derived} */
  e, pr(s) && ha(s), rn && er() && (s.f & ut) === 0 && La(s));
  if (tt?.has(e))
    return tt.get(e);
  if ((e.f & Yt) !== 0)
    throw e.v;
  return e.v;
}
function La(e) {
  if (e.deps !== null) {
    e.f ^= ut;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & Pe) !== 0 && (t.f & ut) === 0 && La(
        /** @type {Derived} */
        t
      );
  }
}
function Ha(e) {
  if (e.v === Ne) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Xt.has(t) || (t.f & Pe) !== 0 && Ha(
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
const uu = -7169;
function Ae(e, t) {
  e.f = e.f & uu | t;
}
function du(e, t) {
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
      Wo(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && pt in n && Wo(n);
      }
  }
}
function Wo(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Wo(e[r], t);
      } catch {
      }
    const n = uo(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Zs(n);
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
function fu(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const hu = [
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
function gu(e) {
  return hu.includes(e);
}
const vu = {
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
function pu(e) {
  return e = e.toLowerCase(), vu[e] ?? e;
}
const mu = ["touchstart", "touchmove"];
function yu(e) {
  return mu.includes(e);
}
const Va = /* @__PURE__ */ new Set(), qo = /* @__PURE__ */ new Set();
function _i(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || qn.call(t, i), !i.cancelBubble)
      return Hn(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Gt(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Go(e, t, n, r = {}) {
  var o = _i(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function cn(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = _i(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && po(() => {
    t.removeEventListener(e, s, i);
  });
}
function Ut(e) {
  for (var t = 0; t < e.length; t++)
    Va.add(e[t]);
  for (var n of qo)
    n(e);
}
let ji = null;
function qn(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  ji = e;
  var s = 0, a = ji === e && e.__root;
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
    ic(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = fe, h = de;
    Ve(null), rt(null);
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
      e.__root = t, delete e.currentTarget, Ve(d), rt(h);
    }
  }
}
function wi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Wt(e, t) {
  var n = (
    /** @type {Effect} */
    de
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  var n = (t & ea) !== 0, r = (t & Ac) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    o === void 0 && (o = wi(i ? e : "<!>" + e), n || (o = /** @type {TemplateNode} */
    /* @__PURE__ */ qe(o)));
    var s = (
      /** @type {TemplateNode} */
      r || pa ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qe(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Wt(a, c);
    } else
      Wt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function _u(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & ea) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        wi(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ qe(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ qe(c); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ qe(c)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ qe(c);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qe(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Wt(d, h);
    } else
      Wt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  return /* @__PURE__ */ _u(e, t, "svg");
}
function Rr(e = "") {
  {
    var t = mt(e + "");
    return Wt(t, t), t;
  }
}
function ce() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = mt();
  return e.append(t, n), Wt(t, n), e;
}
function O(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
let Zr = !0;
function Er(e) {
  Zr = e;
}
function xe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function wu(e, t) {
  return bu(e, t);
}
const mn = /* @__PURE__ */ new Map();
function bu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Qc();
  var a = /* @__PURE__ */ new Set(), c = (h) => {
    for (var f = 0; f < h.length; f++) {
      var g = h[f];
      if (!a.has(g)) {
        a.add(g);
        var v = yu(g);
        t.addEventListener(g, qn, { passive: v });
        var p = mn.get(g);
        p === void 0 ? (document.addEventListener(g, qn, { passive: v }), mn.set(g, 1)) : mn.set(g, p + 1);
      }
    }
  };
  c(co(Va)), qo.add(c);
  var u = void 0, d = ou(() => {
    var h = n ?? t.appendChild(mt());
    return Xc(
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
        t.removeEventListener(f, qn);
        var g = (
          /** @type {number} */
          mn.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, qn), mn.delete(f)) : mn.set(f, g);
      }
      qo.delete(c), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return xu.set(u, d), u;
}
let xu = /* @__PURE__ */ new WeakMap();
class mo {
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
        yi(r), this.#r.delete(n);
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
            za(s, u), u.append(mt()), this.#n.set(i, { effect: s, fragment: u });
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
    ), o = _a();
    if (n && !this.#t.has(t) && !this.#n.has(t))
      if (o) {
        var i = document.createDocumentFragment(), s = mt();
        i.append(s), this.#n.set(t, {
          effect: He(() => n(s)),
          fragment: i
        });
      } else
        this.#t.set(
          t,
          He(() => n(this.anchor))
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
function le(e, t, n = !1) {
  var r = new mo(e), o = n ? wt : 0;
  function i(s, a) {
    r.ensure(s, a);
  }
  Bn(() => {
    var s = !1;
    t((a, c = !0) => {
      s = !0, i(c, a);
    }), s || i(!1, null);
  }, o);
}
function ku(e, t) {
  vr(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function rr(e, t) {
  return t;
}
function Eu(e, t, n) {
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
            Uo(co(i.done)), f.delete(i), f.size === 0 && (e.outrogroups = null);
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
      $c(d), d.append(u), e.items.clear();
    }
    Uo(t, !c);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function Uo(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    Se(e[n], t);
}
var Ji;
function Ot(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), c = (t & Qs) !== 0;
  if (c) {
    var u = (
      /** @type {Element} */
      e
    );
    s = u.appendChild(mt());
  }
  var d = null, h = /* @__PURE__ */ pi(() => {
    var w = n();
    return lo(w) ? w : w == null ? [] : co(w);
  }), f, g = !0;
  function v() {
    m.fallback = d, Su(m, f, s, t, r), d !== null && (f.length === 0 ? (d.f & Mt) === 0 ? yi(d) : (d.f ^= Mt, Gn(d, null, s)) : nn(d, () => {
      d = null;
    }));
  }
  var p = Bn(() => {
    f = /** @type {V[]} */
    l(h);
    for (var w = f.length, x = /* @__PURE__ */ new Set(), E = (
      /** @type {Batch} */
      ve
    ), b = _a(), I = 0; I < w; I += 1) {
      var C = f[I], L = r(C, I), M = g ? null : a.get(L);
      M ? (M.v && Mn(M.v, C), M.i && Mn(M.i, I), b && E.skipped_effects.delete(M.e)) : (M = Nu(
        a,
        g ? s : Ji ??= mt(),
        C,
        L,
        I,
        o,
        t,
        n
      ), g || (M.e.f |= Mt), a.set(L, M)), x.add(L);
    }
    if (w === 0 && i && !d && (g ? d = He(() => i(s)) : (d = He(() => i(Ji ??= mt())), d.f |= Mt)), !g)
      if (b) {
        for (const [K, W] of a)
          x.has(K) || E.skipped_effects.add(W.e);
        E.oncommit(v), E.ondiscard(() => {
        });
      } else
        v();
    l(h);
  }), m = { effect: p, items: a, outrogroups: null, fallback: d };
  g = !1;
}
function Su(e, t, n, r, o) {
  var i = (r & bc) !== 0, s = t.length, a = e.items, c = e.effect.first, u, d = null, h, f = [], g = [], v, p, m, w;
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
      if (m.f ^= Mt, m === c)
        Gn(m, null, n);
      else {
        var x = d ? d.next : c;
        m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), Vt(e, d, m), Vt(e, m, x), Gn(m, x, n), d = m, f = [], g = [], c = d.next;
        continue;
      }
    if ((m.f & Ge) !== 0 && (yi(m), i && (m.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(m))), m !== c) {
      if (u !== void 0 && u.has(m)) {
        if (f.length < g.length) {
          var E = g[0], b;
          d = E.prev;
          var I = f[0], C = f[f.length - 1];
          for (b = 0; b < f.length; b += 1)
            Gn(f[b], E, n);
          for (b = 0; b < g.length; b += 1)
            u.delete(g[b]);
          Vt(e, I.prev, C.next), Vt(e, d, I), Vt(e, C, E), c = E, d = C, w -= 1, f = [], g = [];
        } else
          u.delete(m), Gn(m, c, n), Vt(e, m.prev, m.next), Vt(e, m, d === null ? e.effect.first : d.next), Vt(e, d, m), d = m;
        continue;
      }
      for (f = [], g = []; c !== null && c !== m; )
        (u ??= /* @__PURE__ */ new Set()).add(c), g.push(c), c = c.next;
      if (c === null)
        continue;
    }
    (m.f & Mt) === 0 && f.push(m), d = m, c = m.next;
  }
  if (e.outrogroups !== null) {
    for (const W of e.outrogroups)
      W.pending.size === 0 && (Uo(co(W.done)), e.outrogroups?.delete(W));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || u !== void 0) {
    var L = [];
    if (u !== void 0)
      for (m of u)
        (m.f & Ge) === 0 && L.push(m);
    for (; c !== null; )
      (c.f & Ge) === 0 && c !== e.fallback && L.push(c), c = c.next;
    var M = L.length;
    if (M > 0) {
      var K = (r & Qs) !== 0 && s === 0 ? n : null;
      if (i) {
        for (w = 0; w < M; w += 1)
          L[w].nodes?.a?.measure();
        for (w = 0; w < M; w += 1)
          L[w].nodes?.a?.fix();
      }
      Eu(e, L, K);
    }
  }
  i && Gt(() => {
    if (h !== void 0)
      for (m of h)
        m.nodes?.a?.apply();
  });
}
function Nu(e, t, n, r, o, i, s, a) {
  var c = (s & _c) !== 0 ? (s & xc) === 0 ? /* @__PURE__ */ Uc(n, !1, !1) : Zt(n) : null, u = (s & wc) !== 0 ? Zt(o) : null;
  return {
    v: c,
    i: u,
    e: He(() => (i(t, c ?? n, u ?? o, a), () => {
      e.delete(r);
    }))
  };
}
function Gn(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, o = e.nodes.end, i = t && (t.f & Mt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gr(r)
      );
      if (i.before(r), r === o)
        return;
      r = s;
    }
}
function Vt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Cu(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  ue(() => {
    var a = (
      /** @type {Effect} */
      de
    );
    if (s !== (s = t() ?? "") && (a.nodes !== null && (Ca(
      a.nodes.start,
      /** @type {TemplateNode} */
      a.nodes.end
    ), a.nodes = null), s !== "")) {
      var c = s + "";
      n ? c = `<svg>${c}</svg>` : r && (c = `<math>${c}</math>`);
      var u = wi(c);
      if ((n || r) && (u = /** @type {Element} */
      /* @__PURE__ */ qe(u)), Wt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ qe(u),
        /** @type {TemplateNode} */
        u.lastChild
      ), n || r)
        for (; /* @__PURE__ */ qe(u); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ qe(u)
          );
      else
        i.before(u);
    }
  });
}
function Re(e, t, n, r, o) {
  var i = t.$$slots?.[n], s = !1;
  i === !0 && (i = t.children, s = !0), i === void 0 || i(e, s ? () => r : r);
}
function Fe(e, t, ...n) {
  var r = new mo(e);
  Bn(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, wt);
}
function Fn(e, t, n) {
  var r = new mo(e);
  Bn(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, wt);
}
const Pu = () => performance.now(), Ct = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => Pu(),
  tasks: /* @__PURE__ */ new Set()
};
function Ba() {
  const e = Ct.now();
  Ct.tasks.forEach((t) => {
    t.c(e) || (Ct.tasks.delete(t), t.f());
  }), Ct.tasks.size !== 0 && Ct.tick(Ba);
}
function Mu(e) {
  let t;
  return Ct.tasks.size === 0 && Ct.tick(Ba), {
    promise: new Promise((n) => {
      Ct.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      Ct.tasks.delete(t);
    }
  };
}
function Sr(e, t) {
  Hn(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function Au(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Qi(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [o, i] = r.split(":");
    if (!o || i === void 0) break;
    const s = Au(o.trim());
    t[s] = i.trim();
  }
  return t;
}
const zu = (e) => e;
function yn(e, t, n, r) {
  var o = (e & Cc) !== 0, i = (e & Pc) !== 0, s = o && i, a = (e & Mc) !== 0, c = s ? "both" : o ? "in" : "out", u, d = t.inert, h = t.style.overflow, f, g;
  function v() {
    return Hn(() => u ??= n()(t, r?.() ?? /** @type {P} */
    {}, {
      direction: c
    }));
  }
  var p = {
    is_global: a,
    in() {
      if (t.inert = d, !o) {
        g?.abort(), g?.reset?.();
        return;
      }
      i || f?.abort(), Sr(t, "introstart"), f = jo(t, v(), g, 1, () => {
        Sr(t, "introend"), f?.abort(), f = u = void 0, t.style.overflow = h;
      });
    },
    out(E) {
      if (!i) {
        E?.(), u = void 0;
        return;
      }
      t.inert = !0, Sr(t, "outrostart"), g = jo(t, v(), f, 0, () => {
        Sr(t, "outroend"), E?.();
      });
    },
    stop: () => {
      f?.abort(), g?.abort();
    }
  }, m = (
    /** @type {Effect & { nodes: EffectNodes }} */
    de
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
      w = !x || (x.f & go) !== 0;
    }
    w && Vn(() => {
      ke(() => p.in());
    });
  }
}
function jo(e, t, n, r, o) {
  var i = r === 1;
  if (bn(t)) {
    var s, a = !1;
    return Gt(() => {
      if (!a) {
        var m = t({ direction: i ? "in" : "out" });
        s = jo(e, m, n, r, o);
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
      abort: We,
      deactivate: We,
      reset: We,
      t: () => r
    };
  const { delay: c = 0, css: u, tick: d, easing: h = zu } = t;
  var f = [];
  if (i && n === void 0 && (d && d(0, 1), u)) {
    var g = Qi(u(0, 1));
    f.push(g, g);
  }
  var v = () => 1 - r, p = e.animate(f, { duration: c, fill: "forwards" });
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
        for (var I = Math.ceil(x / 16.666666666666668), C = 0; C <= I; C += 1) {
          var L = m + w * h(C / I), M = Qi(u(L, 1 - L));
          E.push(M), b ||= M.overflow === "hidden";
        }
      b && (e.style.overflow = "hidden"), v = () => {
        var K = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return m + w * h(K / x);
      }, d && Mu(() => {
        if (p.playState !== "running") return !1;
        var K = v();
        return d(K, 1 - K), !0;
      });
    }
    p = e.animate(E, { duration: x, fill: "forwards" }), p.onfinish = () => {
      v = () => r, d?.(r, 1 - r), o();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = We);
    },
    deactivate: () => {
      o = We;
    },
    reset: () => {
      r === 0 && d?.(1, 0);
    },
    t: () => v()
  };
}
function Iu(e, t, n, r, o, i) {
  var s = null, a = (
    /** @type {TemplateNode} */
    e
  ), c = new mo(a, !1);
  Bn(() => {
    const u = t() || null;
    var d = Ic;
    if (u === null) {
      c.ensure(null, null), Er(!0);
      return;
    }
    return c.ensure(u, (h) => {
      if (u) {
        if (s = document.createElementNS(d, u), Wt(s, s), r) {
          var f = s.appendChild(mt());
          r(s, f);
        }
        de.nodes.end = s, h.before(s);
      }
    }), Er(!0), () => {
      u && Er(!1);
    };
  }, wt), po(() => {
    Er(!0);
  });
}
function Te(e, t, n) {
  Vn(() => {
    var r = ke(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      vr(() => {
        var s = n();
        $t(s), o && na(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Tu(e, t) {
  var n = void 0, r;
  Ea(() => {
    n !== (n = t()) && (r && (Se(r), r = null), n && (r = He(() => {
      Vn(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Fa(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Fa(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Du() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Fa(e)) && (r && (r += " "), r += t);
  return r;
}
function jt(e) {
  return typeof e == "object" ? Du(e) : e ?? "";
}
const $i = [...` 	
\r\f \v\uFEFF`];
function Ou(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || $i.includes(r[s - 1])) && (a === r.length || $i.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function es(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Po(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ru(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, c = [];
      r && c.push(...Object.keys(r).map(Po)), o && c.push(...Object.keys(o).map(Po));
      var u = 0, d = -1;
      const p = e.length;
      for (var h = 0; h < p; h++) {
        var f = e[h];
        if (a ? f === "/" && e[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === p - 1) {
            if (d !== -1) {
              var g = Po(e.substring(u, d).trim());
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
    return r && (n += es(r)), o && (n += es(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Ce(e, t, n, r, o, i) {
  var s = e.__className;
  if (s !== n || s === void 0) {
    var a = Ou(n, r, i);
    a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a), e.__className = n;
  } else if (i && o !== i)
    for (var c in i) {
      var u = !!i[c];
      (o == null || u !== !!o[c]) && e.classList.toggle(c, u);
    }
  return i;
}
function Mo(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Ke(e, t, n, r) {
  var o = e.__style;
  if (o !== t) {
    var i = Ru(t, r);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else r && (Array.isArray(r) ? (Mo(e, n?.[0], r[0]), Mo(e, n?.[1], r[1], "important")) : Mo(e, n, r));
  return r;
}
function Jo(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!lo(t))
      return Dc();
    for (var r of e.options)
      r.selected = t.includes(ts(r));
    return;
  }
  for (r of e.options) {
    var o = ts(r);
    if (Jc(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Lu(e) {
  var t = new MutationObserver(() => {
    Jo(e, e.__value);
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
  }), po(() => {
    t.disconnect();
  });
}
function ts(e) {
  return "__value" in e ? e.__value : e.value;
}
const Bt = /* @__PURE__ */ Symbol("class"), Pt = /* @__PURE__ */ Symbol("style"), Ka = /* @__PURE__ */ Symbol("is custom element"), Ya = /* @__PURE__ */ Symbol("is html");
function Hu(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function re(e, t, n, r) {
  var o = Xa(e);
  o[t] !== (o[t] = n) && (t === "loading" && (e[lc] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Za(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Vu(e, t, n, r, o = !1, i = !1) {
  var s = Xa(e), a = s[Ka], c = !s[Ya], u = t || {}, d = e.tagName === "OPTION";
  for (var h in t)
    h in n || (n[h] = null);
  n.class ? n.class = jt(n.class) : (r || n[Bt]) && (n.class = null), n[Pt] && (n.style ??= null);
  var f = Za(e);
  for (const b in n) {
    let I = n[b];
    if (d && b === "value" && I == null) {
      e.value = e.__value = "", u[b] = I;
      continue;
    }
    if (b === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ce(e, g, I, r, t?.[Bt], n[Bt]), u[b] = I, u[Bt] = n[Bt];
      continue;
    }
    if (b === "style") {
      Ke(e, I, t?.[Pt], n[Pt]), u[b] = I, u[Pt] = n[Pt];
      continue;
    }
    var v = u[b];
    if (!(I === v && !(I === void 0 && e.hasAttribute(b)))) {
      u[b] = I;
      var p = b[0] + b[1];
      if (p !== "$$")
        if (p === "on") {
          const C = {}, L = "$$" + b;
          let M = b.slice(2);
          var m = gu(M);
          if (fu(M) && (M = M.slice(0, -7), C.capture = !0), !m && v) {
            if (I != null) continue;
            e.removeEventListener(M, u[L], C), u[L] = null;
          }
          if (I != null)
            if (m)
              e[`__${M}`] = I, Ut([M]);
            else {
              let K = function(W) {
                u[b].call(this, W);
              };
              var E = K;
              u[L] = _i(M, e, K, C);
            }
          else m && (e[`__${M}`] = void 0);
        } else if (b === "style")
          re(e, b, I);
        else if (b === "autofocus")
          eu(
            /** @type {HTMLElement} */
            e,
            !!I
          );
        else if (!a && (b === "__value" || b === "value" && I != null))
          e.value = e.__value = I;
        else if (b === "selected" && d)
          Hu(
            /** @type {HTMLOptionElement} */
            e,
            I
          );
        else {
          var w = b;
          c || (w = pu(w));
          var x = w === "defaultValue" || w === "defaultChecked";
          if (I == null && !a && !x)
            if (s[b] = null, w === "value" || w === "checked") {
              let C = (
                /** @type {HTMLInputElement} */
                e
              );
              const L = t === void 0;
              if (w === "value") {
                let M = C.defaultValue;
                C.removeAttribute(w), C.defaultValue = M, C.value = C.__value = L ? M : null;
              } else {
                let M = C.defaultChecked;
                C.removeAttribute(w), C.defaultChecked = M, C.checked = L ? M : !1;
              }
            } else
              e.removeAttribute(b);
          else x || f.includes(w) && (a || typeof I != "string") ? (e[w] = I, w in s && (s[w] = Ne)) : typeof I != "function" && re(e, w, I);
        }
    }
  }
  return u;
}
function bt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  da(o, n, r, (c) => {
    var u = void 0, d = {}, h = e.nodeName === "SELECT", f = !1;
    if (Ea(() => {
      var v = t(...c.map(l)), p = Vu(
        e,
        u,
        v,
        i,
        s,
        a
      );
      f && h && "value" in v && Jo(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let w of Object.getOwnPropertySymbols(d))
        v[w] || Se(d[w]);
      for (let w of Object.getOwnPropertySymbols(v)) {
        var m = v[w];
        w.description === Tc && (!u || m !== u[w]) && (d[w] && Se(d[w]), d[w] = He(() => Tu(e, () => m))), p[w] = m;
      }
      u = p;
    }), h) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      Vn(() => {
        Jo(
          g,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), Lu(g);
      });
    }
    f = !0;
  });
}
function Xa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Ka]: e.nodeName.includes("-"),
      [Ya]: e.namespaceURI === zc
    }
  );
}
var ns = /* @__PURE__ */ new Map();
function Za(e) {
  var t = e.getAttribute("is") || e.nodeName, n = ns.get(t);
  if (n) return n;
  ns.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = Zs(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = uo(o);
  }
  return n;
}
function Bu(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  nu(e, "input", async (o) => {
    var i = o ? e.defaultValue : e.value;
    if (i = Ao(e) ? zo(i) : i, n(i), ve !== null && r.add(ve), await cu(), i !== (i = t())) {
      var s = e.selectionStart, a = e.selectionEnd, c = e.value.length;
      if (e.value = i ?? "", a !== null) {
        var u = e.value.length;
        s === a && a === c && u > c ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = s, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ke(t) == null && e.value && (n(Ao(e) ? zo(e.value) : e.value), ve !== null && r.add(ve)), vr(() => {
    var o = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Or ?? ve
      );
      if (r.has(i))
        return;
    }
    Ao(e) && o === zo(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function Ao(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function zo(e) {
  return e === "" ? null : +e;
}
class bi {
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
          bi.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Fu = /* @__PURE__ */ new bi({
  box: "border-box"
});
function Wr(e, t, n) {
  var r = Fu.observe(e, () => n(e[t]));
  Vn(() => (ke(() => n(e[t])), r));
}
function rs(e, t) {
  return e === t || e?.[pt] === t;
}
function Kn(e = {}, t, n, r) {
  return Vn(() => {
    var o, i;
    return vr(() => {
      o = i, i = [], ke(() => {
        e !== n(...i) && (t(e, ...i), o && rs(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Gt(() => {
        i && rs(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Wa(e = !1) {
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
    const s = /* @__PURE__ */ hr(() => {
      let a = !1;
      const c = t.s;
      for (const u in c)
        c[u] !== i[u] && (i[u] = c[u], a = !0);
      return a && o++, o;
    });
    r = () => l(s);
  }
  n.b.length && xa(() => {
    os(t, r), Ko(n.b);
  }), Oe(() => {
    const o = ke(() => n.m.map(ac));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Oe(() => {
    os(t, r), Ko(n.a);
  });
}
function os(e, t) {
  if (e.l.s)
    for (const n of e.l.s) l(n);
  t();
}
let Nr = !1;
function Ku(e) {
  var t = Nr;
  try {
    return Nr = !1, [e(), Nr];
  } finally {
    Nr = t;
  }
}
const Yu = {
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
function Jt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Yu
  );
}
const Xu = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return l(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = de;
      try {
        rt(e.parent_effect), e.special[t] = F(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          $s
        );
      } finally {
        rt(r);
      }
    }
    return e.special[t](n), Zi(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Zi(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ze(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: Zt(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        de
      )
    },
    Xu
  );
}
const Zu = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (bn(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      bn(o) && (o = o());
      const i = Kt(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (bn(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Kt(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === pt || t === Js) return !1;
    for (let n of e.props)
      if (bn(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (bn(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function _e(...e) {
  return new Proxy({ props: e }, Zu);
}
function F(e, t, n, r) {
  var o = !Ln || (n & Ec) !== 0, i = (n & Sc) !== 0, s = (n & Nc) !== 0, a = (
    /** @type {V} */
    r
  ), c = !0, u = () => (c && (c = !1, a = s ? ke(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = pt in e || Js in e;
    d = Kt(e, t)?.set ?? (h && t in e ? (E) => e[t] = E : void 0);
  }
  var f, g = !1;
  i ? [f, g] = Ku(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && gc(), d(f)));
  var v;
  if (o ? v = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? u() : (c = !0, E);
  } : v = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E !== void 0 && (a = /** @type {V} */
    void 0), E === void 0 ? a : E;
  }, o && (n & $s) === 0)
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
  var m = !1, w = ((n & kc) !== 0 ? hr : pi)(() => (m = !1, v()));
  i && l(w);
  var x = (
    /** @type {Effect} */
    de
  );
  return (
    /** @type {() => V} */
    (function(E, b) {
      if (arguments.length > 0) {
        const I = b ? l(w) : o && i ? gt(E) : E;
        return D(w, I), m = !0, a !== void 0 && (a = I), E;
      }
      return vn && m || (x.f & It) !== 0 ? w.v : l(w);
    })
  );
}
function Wu(e) {
  me === null && fi(), Ln && me.l !== null ? qu(me).m.push(e) : Oe(() => {
    const t = ke(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function yo(e) {
  me === null && fi(), Wu(() => () => ke(e));
}
function qu(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const Gu = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Gu);
var Uu = { value: () => {
} };
function _o() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Lr(n);
}
function Lr(e) {
  this._ = e;
}
function ju(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Lr.prototype = _o.prototype = {
  constructor: Lr,
  on: function(e, t) {
    var n = this._, r = ju(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Ju(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = is(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = is(n[o], e.name, null);
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
function Ju(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function is(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Uu, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Qo = "http://www.w3.org/1999/xhtml";
const ss = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Qo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function wo(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ss.hasOwnProperty(t) ? { space: ss[t], local: e } : e;
}
function Qu(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Qo && t.documentElement.namespaceURI === Qo ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function $u(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function qa(e) {
  var t = wo(e);
  return (t.local ? $u : Qu)(t);
}
function ed() {
}
function xi(e) {
  return e == null ? ed : function() {
    return this.querySelector(e);
  };
}
function td(e) {
  typeof e != "function" && (e = xi(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), c, u, d = 0; d < s; ++d)
      (c = i[d]) && (u = e.call(c, c.__data__, d, i)) && ("__data__" in c && (u.__data__ = c.__data__), a[d] = u);
  return new je(r, this._parents);
}
function nd(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function rd() {
  return [];
}
function Ga(e) {
  return e == null ? rd : function() {
    return this.querySelectorAll(e);
  };
}
function od(e) {
  return function() {
    return nd(e.apply(this, arguments));
  };
}
function id(e) {
  typeof e == "function" ? e = od(e) : e = Ga(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, c, u = 0; u < a; ++u)
      (c = s[u]) && (r.push(e.call(c, c.__data__, u, s)), o.push(c));
  return new je(r, o);
}
function Ua(e) {
  return function() {
    return this.matches(e);
  };
}
function ja(e) {
  return function(t) {
    return t.matches(e);
  };
}
var sd = Array.prototype.find;
function ad(e) {
  return function() {
    return sd.call(this.children, e);
  };
}
function ld() {
  return this.firstElementChild;
}
function cd(e) {
  return this.select(e == null ? ld : ad(typeof e == "function" ? e : ja(e)));
}
var ud = Array.prototype.filter;
function dd() {
  return Array.from(this.children);
}
function fd(e) {
  return function() {
    return ud.call(this.children, e);
  };
}
function hd(e) {
  return this.selectAll(e == null ? dd : fd(typeof e == "function" ? e : ja(e)));
}
function gd(e) {
  typeof e != "function" && (e = Ua(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], c, u = 0; u < s; ++u)
      (c = i[u]) && e.call(c, c.__data__, u, i) && a.push(c);
  return new je(r, this._parents);
}
function Ja(e) {
  return new Array(e.length);
}
function vd() {
  return new je(this._enter || this._groups.map(Ja), this._parents);
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
function pd(e) {
  return function() {
    return e;
  };
}
function md(e, t, n, r, o, i) {
  for (var s = 0, a, c = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new qr(e, i[s]);
  for (; s < c; ++s)
    (a = t[s]) && (o[s] = a);
}
function yd(e, t, n, r, o, i, s) {
  var a, c, u = /* @__PURE__ */ new Map(), d = t.length, h = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (c = t[a]) && (f[a] = g = s.call(c, c.__data__, a, t) + "", u.has(g) ? o[a] = c : u.set(g, c));
  for (a = 0; a < h; ++a)
    g = s.call(e, i[a], a, i) + "", (c = u.get(g)) ? (r[a] = c, c.__data__ = i[a], u.delete(g)) : n[a] = new qr(e, i[a]);
  for (a = 0; a < d; ++a)
    (c = t[a]) && u.get(f[a]) === c && (o[a] = c);
}
function _d(e) {
  return e.__data__;
}
function wd(e, t) {
  if (!arguments.length) return Array.from(this, _d);
  var n = t ? yd : md, r = this._parents, o = this._groups;
  typeof e != "function" && (e = pd(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), c = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], f = h.length, g = bd(e.call(d, d && d.__data__, u, r)), v = g.length, p = a[u] = new Array(v), m = s[u] = new Array(v), w = c[u] = new Array(f);
    n(d, h, p, m, w, g, t);
    for (var x = 0, E = 0, b, I; x < v; ++x)
      if (b = p[x]) {
        for (x >= E && (E = x + 1); !(I = m[E]) && ++E < v; ) ;
        b._next = I || null;
      }
  }
  return s = new je(s, r), s._enter = a, s._exit = c, s;
}
function bd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function xd() {
  return new je(this._exit || this._groups.map(Ja), this._parents);
}
function kd(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Ed(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), c = 0; c < s; ++c)
    for (var u = n[c], d = r[c], h = u.length, f = a[c] = new Array(h), g, v = 0; v < h; ++v)
      (g = u[v] || d[v]) && (f[v] = g);
  for (; c < o; ++c)
    a[c] = n[c];
  return new je(a, this._parents);
}
function Sd() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Nd(e) {
  e || (e = Cd);
  function t(h, f) {
    return h && f ? e(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, c = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (c[d] = u);
    c.sort(t);
  }
  return new je(o, this._parents).order();
}
function Cd(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Pd() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Md() {
  return Array.from(this);
}
function Ad() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function zd() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Id() {
  return !this.node();
}
function Td(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Dd(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Od(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Rd(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Ld(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Hd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Vd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Bd(e, t) {
  var n = wo(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Od : Dd : typeof t == "function" ? n.local ? Vd : Hd : n.local ? Ld : Rd)(n, t));
}
function Qa(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Fd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Kd(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Yd(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Xd(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Fd : typeof t == "function" ? Yd : Kd)(e, t, n ?? "")) : An(this.node(), e);
}
function An(e, t) {
  return e.style.getPropertyValue(t) || Qa(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Zd(e) {
  return function() {
    delete this[e];
  };
}
function Wd(e, t) {
  return function() {
    this[e] = t;
  };
}
function qd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Gd(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Zd : typeof t == "function" ? qd : Wd)(e, t)) : this.node()[e];
}
function $a(e) {
  return e.trim().split(/^|\s+/);
}
function ki(e) {
  return e.classList || new el(e);
}
function el(e) {
  this._node = e, this._names = $a(e.getAttribute("class") || "");
}
el.prototype = {
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
function tl(e, t) {
  for (var n = ki(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function nl(e, t) {
  for (var n = ki(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Ud(e) {
  return function() {
    tl(this, e);
  };
}
function jd(e) {
  return function() {
    nl(this, e);
  };
}
function Jd(e, t) {
  return function() {
    (t.apply(this, arguments) ? tl : nl)(this, e);
  };
}
function Qd(e, t) {
  var n = $a(e + "");
  if (arguments.length < 2) {
    for (var r = ki(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Jd : t ? Ud : jd)(n, t));
}
function $d() {
  this.textContent = "";
}
function ef(e) {
  return function() {
    this.textContent = e;
  };
}
function tf(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function nf(e) {
  return arguments.length ? this.each(e == null ? $d : (typeof e == "function" ? tf : ef)(e)) : this.node().textContent;
}
function rf() {
  this.innerHTML = "";
}
function of(e) {
  return function() {
    this.innerHTML = e;
  };
}
function sf(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function af(e) {
  return arguments.length ? this.each(e == null ? rf : (typeof e == "function" ? sf : of)(e)) : this.node().innerHTML;
}
function lf() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function cf() {
  return this.each(lf);
}
function uf() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function df() {
  return this.each(uf);
}
function ff(e) {
  var t = typeof e == "function" ? e : qa(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function hf() {
  return null;
}
function gf(e, t) {
  var n = typeof e == "function" ? e : qa(e), r = t == null ? hf : typeof t == "function" ? t : xi(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function vf() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function pf() {
  return this.each(vf);
}
function mf() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function yf() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function _f(e) {
  return this.select(e ? yf : mf);
}
function wf(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function bf(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function xf(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function kf(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Ef(e, t, n) {
  return function() {
    var r = this.__on, o, i = bf(t);
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
function Sf(e, t, n) {
  var r = xf(e + ""), o, i = r.length, s;
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
  for (a = t ? Ef : kf, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function rl(e, t, n) {
  var r = Qa(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Nf(e, t) {
  return function() {
    return rl(this, e, t);
  };
}
function Cf(e, t) {
  return function() {
    return rl(this, e, t.apply(this, arguments));
  };
}
function Pf(e, t) {
  return this.each((typeof t == "function" ? Cf : Nf)(e, t));
}
function* Mf() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var ol = [null];
function je(e, t) {
  this._groups = e, this._parents = t;
}
function mr() {
  return new je([[document.documentElement]], ol);
}
function Af() {
  return this;
}
je.prototype = mr.prototype = {
  constructor: je,
  select: td,
  selectAll: id,
  selectChild: cd,
  selectChildren: hd,
  filter: gd,
  data: wd,
  enter: vd,
  exit: xd,
  join: kd,
  merge: Ed,
  selection: Af,
  order: Sd,
  sort: Nd,
  call: Pd,
  nodes: Md,
  node: Ad,
  size: zd,
  empty: Id,
  each: Td,
  attr: Bd,
  style: Xd,
  property: Gd,
  classed: Qd,
  text: nf,
  html: af,
  raise: cf,
  lower: df,
  append: ff,
  insert: gf,
  remove: pf,
  clone: _f,
  datum: wf,
  on: Sf,
  dispatch: Pf,
  [Symbol.iterator]: Mf
};
function nt(e) {
  return typeof e == "string" ? new je([[document.querySelector(e)]], [document.documentElement]) : new je([[e]], ol);
}
function zf(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function st(e, t) {
  if (e = zf(e), t === void 0 && (t = e.currentTarget), t) {
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
const If = { passive: !1 }, or = { capture: !0, passive: !1 };
function Io(e) {
  e.stopImmediatePropagation();
}
function En(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function il(e) {
  var t = e.document.documentElement, n = nt(e).on("dragstart.drag", En, or);
  "onselectstart" in t ? n.on("selectstart.drag", En, or) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function sl(e, t) {
  var n = e.document.documentElement, r = nt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", En, or), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Cr = (e) => () => e;
function $o(e, {
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
$o.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Tf(e) {
  return !e.ctrlKey && !e.button;
}
function Df() {
  return this.parentNode;
}
function Of(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Rf() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Lf() {
  var e = Tf, t = Df, n = Of, r = Rf, o = {}, i = _o("start", "drag", "end"), s = 0, a, c, u, d, h = 0;
  function f(b) {
    b.on("mousedown.drag", g).filter(r).on("touchstart.drag", m).on("touchmove.drag", w, If).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(b, I) {
    if (!(d || !e.call(this, b, I))) {
      var C = E(this, t.call(this, b, I), b, I, "mouse");
      C && (nt(b.view).on("mousemove.drag", v, or).on("mouseup.drag", p, or), il(b.view), Io(b), u = !1, a = b.clientX, c = b.clientY, C("start", b));
    }
  }
  function v(b) {
    if (En(b), !u) {
      var I = b.clientX - a, C = b.clientY - c;
      u = I * I + C * C > h;
    }
    o.mouse("drag", b);
  }
  function p(b) {
    nt(b.view).on("mousemove.drag mouseup.drag", null), sl(b.view, u), En(b), o.mouse("end", b);
  }
  function m(b, I) {
    if (e.call(this, b, I)) {
      var C = b.changedTouches, L = t.call(this, b, I), M = C.length, K, W;
      for (K = 0; K < M; ++K)
        (W = E(this, L, b, I, C[K].identifier, C[K])) && (Io(b), W("start", b, C[K]));
    }
  }
  function w(b) {
    var I = b.changedTouches, C = I.length, L, M;
    for (L = 0; L < C; ++L)
      (M = o[I[L].identifier]) && (En(b), M("drag", b, I[L]));
  }
  function x(b) {
    var I = b.changedTouches, C = I.length, L, M;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), L = 0; L < C; ++L)
      (M = o[I[L].identifier]) && (Io(b), M("end", b, I[L]));
  }
  function E(b, I, C, L, M, K) {
    var W = i.copy(), z = st(K || C, I), k, A, y;
    if ((y = n.call(b, new $o("beforestart", {
      sourceEvent: C,
      target: f,
      identifier: M,
      active: s,
      x: z[0],
      y: z[1],
      dx: 0,
      dy: 0,
      dispatch: W
    }), L)) != null)
      return k = y.x - z[0] || 0, A = y.y - z[1] || 0, function N(S, T, Y) {
        var H = z, P;
        switch (S) {
          case "start":
            o[M] = N, P = s++;
            break;
          case "end":
            delete o[M], --s;
          // falls through
          case "drag":
            z = st(Y || T, I), P = s;
            break;
        }
        W.call(
          S,
          b,
          new $o(S, {
            sourceEvent: T,
            subject: y,
            target: f,
            identifier: M,
            active: P,
            x: z[0] + k,
            y: z[1] + A,
            dx: z[0] - H[0],
            dy: z[1] - H[1],
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
function Ei(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function al(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function yr() {
}
var ir = 0.7, Gr = 1 / ir, Sn = "\\s*([+-]?\\d+)\\s*", sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Hf = /^#([0-9a-f]{3,8})$/, Vf = new RegExp(`^rgb\\(${Sn},${Sn},${Sn}\\)$`), Bf = new RegExp(`^rgb\\(${yt},${yt},${yt}\\)$`), Ff = new RegExp(`^rgba\\(${Sn},${Sn},${Sn},${sr}\\)$`), Kf = new RegExp(`^rgba\\(${yt},${yt},${yt},${sr}\\)$`), Yf = new RegExp(`^hsl\\(${sr},${yt},${yt}\\)$`), Xf = new RegExp(`^hsla\\(${sr},${yt},${yt},${sr}\\)$`), as = {
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
Ei(yr, un, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ls,
  // Deprecated! Use color.formatHex.
  formatHex: ls,
  formatHex8: Zf,
  formatHsl: Wf,
  formatRgb: cs,
  toString: cs
});
function ls() {
  return this.rgb().formatHex();
}
function Zf() {
  return this.rgb().formatHex8();
}
function Wf() {
  return ll(this).formatHsl();
}
function cs() {
  return this.rgb().formatRgb();
}
function un(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Hf.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? us(t) : n === 3 ? new Be(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Pr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Pr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Vf.exec(e)) ? new Be(t[1], t[2], t[3], 1) : (t = Bf.exec(e)) ? new Be(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ff.exec(e)) ? Pr(t[1], t[2], t[3], t[4]) : (t = Kf.exec(e)) ? Pr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Yf.exec(e)) ? hs(t[1], t[2] / 100, t[3] / 100, 1) : (t = Xf.exec(e)) ? hs(t[1], t[2] / 100, t[3] / 100, t[4]) : as.hasOwnProperty(e) ? us(as[e]) : e === "transparent" ? new Be(NaN, NaN, NaN, 0) : null;
}
function us(e) {
  return new Be(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Pr(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Be(e, t, n, r);
}
function qf(e) {
  return e instanceof yr || (e = un(e)), e ? (e = e.rgb(), new Be(e.r, e.g, e.b, e.opacity)) : new Be();
}
function ei(e, t, n, r) {
  return arguments.length === 1 ? qf(e) : new Be(e, t, n, r ?? 1);
}
function Be(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ei(Be, ei, al(yr, {
  brighter(e) {
    return e = e == null ? Gr : Math.pow(Gr, e), new Be(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ir : Math.pow(ir, e), new Be(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Be(sn(this.r), sn(this.g), sn(this.b), Ur(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ds,
  // Deprecated! Use color.formatHex.
  formatHex: ds,
  formatHex8: Gf,
  formatRgb: fs,
  toString: fs
}));
function ds() {
  return `#${tn(this.r)}${tn(this.g)}${tn(this.b)}`;
}
function Gf() {
  return `#${tn(this.r)}${tn(this.g)}${tn(this.b)}${tn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function fs() {
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
function hs(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new at(e, t, n, r);
}
function ll(e) {
  if (e instanceof at) return new at(e.h, e.s, e.l, e.opacity);
  if (e instanceof yr || (e = un(e)), !e) return new at();
  if (e instanceof at) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, c = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= c < 0.5 ? i + o : 2 - i - o, s *= 60) : a = c > 0 && c < 1 ? 0 : s, new at(s, a, c, e.opacity);
}
function Uf(e, t, n, r) {
  return arguments.length === 1 ? ll(e) : new at(e, t, n, r ?? 1);
}
function at(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ei(at, Uf, al(yr, {
  brighter(e) {
    return e = e == null ? Gr : Math.pow(Gr, e), new at(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ir : Math.pow(ir, e), new at(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Be(
      To(e >= 240 ? e - 240 : e + 120, o, r),
      To(e, o, r),
      To(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new at(gs(this.h), Mr(this.s), Mr(this.l), Ur(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ur(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${gs(this.h)}, ${Mr(this.s) * 100}%, ${Mr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function gs(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Mr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function To(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Si = (e) => () => e;
function jf(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Jf(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Qf(e) {
  return (e = +e) == 1 ? cl : function(t, n) {
    return n - t ? Jf(t, n, e) : Si(isNaN(t) ? n : t);
  };
}
function cl(e, t) {
  var n = t - e;
  return n ? jf(e, n) : Si(isNaN(e) ? t : e);
}
const jr = (function e(t) {
  var n = Qf(t);
  function r(o, i) {
    var s = n((o = ei(o)).r, (i = ei(i)).r), a = n(o.g, i.g), c = n(o.b, i.b), u = cl(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
})(1);
function $f(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function eh(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function th(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = $n(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function nh(e, t) {
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
function rh(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = $n(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ti = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Do = new RegExp(ti.source, "g");
function oh(e) {
  return function() {
    return e;
  };
}
function ih(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ul(e, t) {
  var n = ti.lastIndex = Do.lastIndex = 0, r, o, i, s = -1, a = [], c = [];
  for (e = e + "", t = t + ""; (r = ti.exec(e)) && (o = Do.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, c.push({ i: s, x: ht(r, o) })), n = Do.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? c[0] ? ih(c[0].x) : oh(t) : (t = c.length, function(u) {
    for (var d = 0, h; d < t; ++d) a[(h = c[d]).i] = h.x(u);
    return a.join("");
  });
}
function $n(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Si(t) : (n === "number" ? ht : n === "string" ? (r = un(t)) ? (t = r, jr) : ul : t instanceof un ? jr : t instanceof Date ? nh : eh(t) ? $f : Array.isArray(t) ? th : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? rh : ht)(e, t);
}
var vs = 180 / Math.PI, ni = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function dl(e, t, n, r, o, i) {
  var s, a, c;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (c = e * n + t * r) && (n -= e * c, r -= t * c), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, c /= a), e * r < t * n && (e = -e, t = -t, c = -c, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * vs,
    skewX: Math.atan(c) * vs,
    scaleX: s,
    scaleY: a
  };
}
var Ar;
function sh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ni : dl(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ah(e) {
  return e == null || (Ar || (Ar = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ar.setAttribute("transform", e), !(e = Ar.transform.baseVal.consolidate())) ? ni : (e = e.matrix, dl(e.a, e.b, e.c, e.d, e.e, e.f));
}
function fl(e, t, n, r) {
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
  function c(u, d, h, f, g, v) {
    if (u !== h || d !== f) {
      var p = g.push(o(g) + "scale(", null, ",", null, ")");
      v.push({ i: p - 4, x: ht(u, h) }, { i: p - 2, x: ht(d, f) });
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
var lh = fl(sh, "px, ", "px)", "deg)"), ch = fl(ah, ", ", ")", ")"), uh = 1e-12;
function ps(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function dh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function fh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Hr = (function e(t, n, r) {
  function o(i, s) {
    var a = i[0], c = i[1], u = i[2], d = s[0], h = s[1], f = s[2], g = d - a, v = h - c, p = g * g + v * v, m, w;
    if (p < uh)
      w = Math.log(f / u) / t, m = function(L) {
        return [
          a + L * g,
          c + L * v,
          u * Math.exp(t * L * w)
        ];
      };
    else {
      var x = Math.sqrt(p), E = (f * f - u * u + r * p) / (2 * u * n * x), b = (f * f - u * u - r * p) / (2 * f * n * x), I = Math.log(Math.sqrt(E * E + 1) - E), C = Math.log(Math.sqrt(b * b + 1) - b);
      w = (C - I) / t, m = function(L) {
        var M = L * w, K = ps(I), W = u / (n * x) * (K * fh(t * M + I) - dh(I));
        return [
          a + W * g,
          c + W * v,
          u * K / ps(t * M + I)
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
var zn = 0, Un = 0, Zn = 0, hl = 1e3, Jr, jn, Qr = 0, dn = 0, bo = 0, ar = typeof performance == "object" && performance.now ? performance : Date, gl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ni() {
  return dn || (gl(hh), dn = ar.now() + bo);
}
function hh() {
  dn = 0;
}
function $r() {
  this._call = this._time = this._next = null;
}
$r.prototype = vl.prototype = {
  constructor: $r,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ni() : +n) + (t == null ? 0 : +t), !this._next && jn !== this && (jn ? jn._next = this : Jr = this, jn = this), this._call = e, this._time = n, ri();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ri());
  }
};
function vl(e, t, n) {
  var r = new $r();
  return r.restart(e, t, n), r;
}
function gh() {
  Ni(), ++zn;
  for (var e = Jr, t; e; )
    (t = dn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --zn;
}
function ms() {
  dn = (Qr = ar.now()) + bo, zn = Un = 0;
  try {
    gh();
  } finally {
    zn = 0, ph(), dn = 0;
  }
}
function vh() {
  var e = ar.now(), t = e - Qr;
  t > hl && (bo -= t, Qr = e);
}
function ph() {
  for (var e, t = Jr, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Jr = n);
  jn = e, ri(r);
}
function ri(e) {
  if (!zn) {
    Un && (Un = clearTimeout(Un));
    var t = e - dn;
    t > 24 ? (e < 1 / 0 && (Un = setTimeout(ms, e - ar.now() - bo)), Zn && (Zn = clearInterval(Zn))) : (Zn || (Qr = ar.now(), Zn = setInterval(vh, hl)), zn = 1, gl(ms));
  }
}
function ys(e, t, n) {
  var r = new $r();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var mh = _o("start", "end", "cancel", "interrupt"), yh = [], pl = 0, _s = 1, oi = 2, Vr = 3, ws = 4, ii = 5, Br = 6;
function xo(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  _h(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: mh,
    tween: yh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: pl
  });
}
function Ci(e, t) {
  var n = dt(e, t);
  if (n.state > pl) throw new Error("too late; already scheduled");
  return n;
}
function Et(e, t) {
  var n = dt(e, t);
  if (n.state > Vr) throw new Error("too late; already running");
  return n;
}
function dt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function _h(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = vl(i, 0, n.time);
  function i(u) {
    n.state = _s, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, h, f, g;
    if (n.state !== _s) return c();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Vr) return ys(s);
        g.state === ws ? (g.state = Br, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Br, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (ys(function() {
      n.state === Vr && (n.state = ws, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = oi, n.on.call("start", e, e.__data__, n.index, n.group), n.state === oi) {
      for (n.state = Vr, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++h] = g);
      o.length = h + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = ii, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(e, d);
    n.state === ii && (n.on.call("end", e, e.__data__, n.index, n.group), c());
  }
  function c() {
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
      o = r.state > oi && r.state < ii, r.state = Br, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function wh(e) {
  return this.each(function() {
    Fr(this, e);
  });
}
function bh(e, t) {
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
function xh(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Et(this, e), s = i.tween;
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
function kh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = dt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? bh : xh)(n, e, t));
}
function Pi(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Et(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return dt(o, r).value[t];
  };
}
function ml(e, t) {
  var n;
  return (typeof t == "number" ? ht : t instanceof un ? jr : (n = un(t)) ? (t = n, jr) : ul)(e, t);
}
function Eh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Sh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Nh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Ch(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Ph(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), c;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), c = a + "", s === c ? null : s === r && c === o ? i : (o = c, i = t(r = s, a)));
  };
}
function Mh(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), c;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), c = a + "", s === c ? null : s === r && c === o ? i : (o = c, i = t(r = s, a)));
  };
}
function Ah(e, t) {
  var n = wo(e), r = n === "transform" ? ch : ml;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Mh : Ph)(n, r, Pi(this, "attr." + e, t)) : t == null ? (n.local ? Sh : Eh)(n) : (n.local ? Ch : Nh)(n, r, t));
}
function zh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Ih(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Th(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Ih(e, i)), n;
  }
  return o._value = t, o;
}
function Dh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && zh(e, i)), n;
  }
  return o._value = t, o;
}
function Oh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = wo(e);
  return this.tween(n, (r.local ? Th : Dh)(r, t));
}
function Rh(e, t) {
  return function() {
    Ci(this, e).delay = +t.apply(this, arguments);
  };
}
function Lh(e, t) {
  return t = +t, function() {
    Ci(this, e).delay = t;
  };
}
function Hh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Rh : Lh)(t, e)) : dt(this.node(), t).delay;
}
function Vh(e, t) {
  return function() {
    Et(this, e).duration = +t.apply(this, arguments);
  };
}
function Bh(e, t) {
  return t = +t, function() {
    Et(this, e).duration = t;
  };
}
function Fh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Vh : Bh)(t, e)) : dt(this.node(), t).duration;
}
function Kh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Et(this, e).ease = t;
  };
}
function Yh(e) {
  var t = this._id;
  return arguments.length ? this.each(Kh(t, e)) : dt(this.node(), t).ease;
}
function Xh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Et(this, e).ease = n;
  };
}
function Zh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Xh(this._id, e));
}
function Wh(e) {
  typeof e != "function" && (e = Ua(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], c, u = 0; u < s; ++u)
      (c = i[u]) && e.call(c, c.__data__, u, i) && a.push(c);
  return new Rt(r, this._parents, this._name, this._id);
}
function qh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var c = t[a], u = n[a], d = c.length, h = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = c[g] || u[g]) && (h[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Rt(s, this._parents, this._name, this._id);
}
function Gh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Uh(e, t, n) {
  var r, o, i = Gh(t) ? Ci : Et;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function jh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? dt(this.node(), n).on.on(e) : this.each(Uh(n, e, t));
}
function Jh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Qh() {
  return this.on("end.remove", Jh(this._id));
}
function $h(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = xi(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], c = a.length, u = i[s] = new Array(c), d, h, f = 0; f < c; ++f)
      (d = a[f]) && (h = e.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[f] = h, xo(u[f], t, n, f, u, dt(d, n)));
  return new Rt(i, this._parents, t, n);
}
function eg(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ga(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var c = r[a], u = c.length, d, h = 0; h < u; ++h)
      if (d = c[h]) {
        for (var f = e.call(d, d.__data__, h, c), g, v = dt(d, n), p = 0, m = f.length; p < m; ++p)
          (g = f[p]) && xo(g, t, n, p, f, v);
        i.push(f), s.push(d);
      }
  return new Rt(i, s, t, n);
}
var tg = mr.prototype.constructor;
function ng() {
  return new tg(this._groups, this._parents);
}
function rg(e, t) {
  var n, r, o;
  return function() {
    var i = An(this, e), s = (this.style.removeProperty(e), An(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function yl(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function og(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = An(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function ig(e, t, n) {
  var r, o, i;
  return function() {
    var s = An(this, e), a = n(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(e), An(this, e))), s === c ? null : s === r && c === o ? i : (o = c, i = t(r = s, a));
  };
}
function sg(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var c = Et(this, e), u = c.on, d = c.value[i] == null ? a || (a = yl(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), c.on = r;
  };
}
function ag(e, t, n) {
  var r = (e += "") == "transform" ? lh : ml;
  return t == null ? this.styleTween(e, rg(e, r)).on("end.style." + e, yl(e)) : typeof t == "function" ? this.styleTween(e, ig(e, r, Pi(this, "style." + e, t))).each(sg(this._id, e)) : this.styleTween(e, og(e, r, t), n).on("end.style." + e, null);
}
function lg(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function cg(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && lg(e, s, n)), r;
  }
  return i._value = t, i;
}
function ug(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, cg(e, t, n ?? ""));
}
function dg(e) {
  return function() {
    this.textContent = e;
  };
}
function fg(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function hg(e) {
  return this.tween("text", typeof e == "function" ? fg(Pi(this, "text", e)) : dg(e == null ? "" : e + ""));
}
function gg(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function vg(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && gg(o)), t;
  }
  return r._value = e, r;
}
function pg(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, vg(e));
}
function mg() {
  for (var e = this._name, t = this._id, n = _l(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, c, u = 0; u < a; ++u)
      if (c = s[u]) {
        var d = dt(c, t);
        xo(c, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Rt(r, this._parents, e, n);
}
function yg() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, c = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Et(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(c)), u.on = t;
    }), o === 0 && i();
  });
}
var _g = 0;
function Rt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function _l() {
  return ++_g;
}
var St = mr.prototype;
Rt.prototype = {
  constructor: Rt,
  select: $h,
  selectAll: eg,
  selectChild: St.selectChild,
  selectChildren: St.selectChildren,
  filter: Wh,
  merge: qh,
  selection: ng,
  transition: mg,
  call: St.call,
  nodes: St.nodes,
  node: St.node,
  size: St.size,
  empty: St.empty,
  each: St.each,
  on: jh,
  attr: Ah,
  attrTween: Oh,
  style: ag,
  styleTween: ug,
  text: hg,
  textTween: pg,
  remove: Qh,
  tween: kh,
  delay: Hh,
  duration: Fh,
  ease: Yh,
  easeVarying: Zh,
  end: yg,
  [Symbol.iterator]: St[Symbol.iterator]
};
function wg(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var bg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: wg
};
function xg(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function kg(e) {
  var t, n;
  e instanceof Rt ? (t = e._id, e = e._name) : (t = _l(), (n = bg).time = Ni(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, c, u = 0; u < a; ++u)
      (c = s[u]) && xo(c, e, t, u, s, n || xg(c, t));
  return new Rt(r, this._parents, e, t);
}
mr.prototype.interrupt = wh;
mr.prototype.transition = kg;
const zr = (e) => () => e;
function Eg(e, {
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
var ko = new At(1, 0, 0);
wl.prototype = At.prototype;
function wl(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return ko;
  return e.__zoom;
}
function Oo(e) {
  e.stopImmediatePropagation();
}
function Wn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Sg(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Ng() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function bs() {
  return this.__zoom || ko;
}
function Cg(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Pg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Mg(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function bl() {
  var e = Sg, t = Ng, n = Mg, r = Cg, o = Pg, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, c = Hr, u = _o("start", "zoom", "end"), d, h, f, g = 500, v = 150, p = 0, m = 10;
  function w(y) {
    y.property("__zoom", bs).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", K).on("dblclick.zoom", W).filter(o).on("touchstart.zoom", z).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", A).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(y, N, S, T) {
    var Y = y.selection ? y.selection() : y;
    Y.property("__zoom", bs), y !== Y ? I(y, N, S, T) : Y.interrupt().each(function() {
      C(this, arguments).event(T).start().zoom(null, typeof N == "function" ? N.apply(this, arguments) : N).end();
    });
  }, w.scaleBy = function(y, N, S, T) {
    w.scaleTo(y, function() {
      var Y = this.__zoom.k, H = typeof N == "function" ? N.apply(this, arguments) : N;
      return Y * H;
    }, S, T);
  }, w.scaleTo = function(y, N, S, T) {
    w.transform(y, function() {
      var Y = t.apply(this, arguments), H = this.__zoom, P = S == null ? b(Y) : typeof S == "function" ? S.apply(this, arguments) : S, V = H.invert(P), X = typeof N == "function" ? N.apply(this, arguments) : N;
      return n(E(x(H, X), P, V), Y, s);
    }, S, T);
  }, w.translateBy = function(y, N, S, T) {
    w.transform(y, function() {
      return n(this.__zoom.translate(
        typeof N == "function" ? N.apply(this, arguments) : N,
        typeof S == "function" ? S.apply(this, arguments) : S
      ), t.apply(this, arguments), s);
    }, null, T);
  }, w.translateTo = function(y, N, S, T, Y) {
    w.transform(y, function() {
      var H = t.apply(this, arguments), P = this.__zoom, V = T == null ? b(H) : typeof T == "function" ? T.apply(this, arguments) : T;
      return n(ko.translate(V[0], V[1]).scale(P.k).translate(
        typeof N == "function" ? -N.apply(this, arguments) : -N,
        typeof S == "function" ? -S.apply(this, arguments) : -S
      ), H, s);
    }, T, Y);
  };
  function x(y, N) {
    return N = Math.max(i[0], Math.min(i[1], N)), N === y.k ? y : new At(N, y.x, y.y);
  }
  function E(y, N, S) {
    var T = N[0] - S[0] * y.k, Y = N[1] - S[1] * y.k;
    return T === y.x && Y === y.y ? y : new At(y.k, T, Y);
  }
  function b(y) {
    return [(+y[0][0] + +y[1][0]) / 2, (+y[0][1] + +y[1][1]) / 2];
  }
  function I(y, N, S, T) {
    y.on("start.zoom", function() {
      C(this, arguments).event(T).start();
    }).on("interrupt.zoom end.zoom", function() {
      C(this, arguments).event(T).end();
    }).tween("zoom", function() {
      var Y = this, H = arguments, P = C(Y, H).event(T), V = t.apply(Y, H), X = S == null ? b(V) : typeof S == "function" ? S.apply(Y, H) : S, R = Math.max(V[1][0] - V[0][0], V[1][1] - V[0][1]), B = Y.__zoom, G = typeof N == "function" ? N.apply(Y, H) : N, q = c(B.invert(X).concat(R / B.k), G.invert(X).concat(R / G.k));
      return function(U) {
        if (U === 1) U = G;
        else {
          var j = q(U), ne = R / j[2];
          U = new At(ne, X[0] - j[0] * ne, X[1] - j[1] * ne);
        }
        P.zoom(null, U);
      };
    });
  }
  function C(y, N, S) {
    return !S && y.__zooming || new L(y, N);
  }
  function L(y, N) {
    this.that = y, this.args = N, this.active = 0, this.sourceEvent = null, this.extent = t.apply(y, N), this.taps = 0;
  }
  L.prototype = {
    event: function(y) {
      return y && (this.sourceEvent = y), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(y, N) {
      return this.mouse && y !== "mouse" && (this.mouse[1] = N.invert(this.mouse[0])), this.touch0 && y !== "touch" && (this.touch0[1] = N.invert(this.touch0[0])), this.touch1 && y !== "touch" && (this.touch1[1] = N.invert(this.touch1[0])), this.that.__zoom = N, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(y) {
      var N = nt(this.that).datum();
      u.call(
        y,
        this.that,
        new Eg(y, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: u
        }),
        N
      );
    }
  };
  function M(y, ...N) {
    if (!e.apply(this, arguments)) return;
    var S = C(this, N).event(y), T = this.__zoom, Y = Math.max(i[0], Math.min(i[1], T.k * Math.pow(2, r.apply(this, arguments)))), H = st(y);
    if (S.wheel)
      (S.mouse[0][0] !== H[0] || S.mouse[0][1] !== H[1]) && (S.mouse[1] = T.invert(S.mouse[0] = H)), clearTimeout(S.wheel);
    else {
      if (T.k === Y) return;
      S.mouse = [H, T.invert(H)], Fr(this), S.start();
    }
    Wn(y), S.wheel = setTimeout(P, v), S.zoom("mouse", n(E(x(T, Y), S.mouse[0], S.mouse[1]), S.extent, s));
    function P() {
      S.wheel = null, S.end();
    }
  }
  function K(y, ...N) {
    if (f || !e.apply(this, arguments)) return;
    var S = y.currentTarget, T = C(this, N, !0).event(y), Y = nt(y.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", R, !0), H = st(y, S), P = y.clientX, V = y.clientY;
    il(y.view), Oo(y), T.mouse = [H, this.__zoom.invert(H)], Fr(this), T.start();
    function X(B) {
      if (Wn(B), !T.moved) {
        var G = B.clientX - P, q = B.clientY - V;
        T.moved = G * G + q * q > p;
      }
      T.event(B).zoom("mouse", n(E(T.that.__zoom, T.mouse[0] = st(B, S), T.mouse[1]), T.extent, s));
    }
    function R(B) {
      Y.on("mousemove.zoom mouseup.zoom", null), sl(B.view, T.moved), Wn(B), T.event(B).end();
    }
  }
  function W(y, ...N) {
    if (e.apply(this, arguments)) {
      var S = this.__zoom, T = st(y.changedTouches ? y.changedTouches[0] : y, this), Y = S.invert(T), H = S.k * (y.shiftKey ? 0.5 : 2), P = n(E(x(S, H), T, Y), t.apply(this, N), s);
      Wn(y), a > 0 ? nt(this).transition().duration(a).call(I, P, T, y) : nt(this).call(w.transform, P, T, y);
    }
  }
  function z(y, ...N) {
    if (e.apply(this, arguments)) {
      var S = y.touches, T = S.length, Y = C(this, N, y.changedTouches.length === T).event(y), H, P, V, X;
      for (Oo(y), P = 0; P < T; ++P)
        V = S[P], X = st(V, this), X = [X, this.__zoom.invert(X), V.identifier], Y.touch0 ? !Y.touch1 && Y.touch0[2] !== X[2] && (Y.touch1 = X, Y.taps = 0) : (Y.touch0 = X, H = !0, Y.taps = 1 + !!d);
      d && (d = clearTimeout(d)), H && (Y.taps < 2 && (h = X[0], d = setTimeout(function() {
        d = null;
      }, g)), Fr(this), Y.start());
    }
  }
  function k(y, ...N) {
    if (this.__zooming) {
      var S = C(this, N).event(y), T = y.changedTouches, Y = T.length, H, P, V, X;
      for (Wn(y), H = 0; H < Y; ++H)
        P = T[H], V = st(P, this), S.touch0 && S.touch0[2] === P.identifier ? S.touch0[0] = V : S.touch1 && S.touch1[2] === P.identifier && (S.touch1[0] = V);
      if (P = S.that.__zoom, S.touch1) {
        var R = S.touch0[0], B = S.touch0[1], G = S.touch1[0], q = S.touch1[1], U = (U = G[0] - R[0]) * U + (U = G[1] - R[1]) * U, j = (j = q[0] - B[0]) * j + (j = q[1] - B[1]) * j;
        P = x(P, Math.sqrt(U / j)), V = [(R[0] + G[0]) / 2, (R[1] + G[1]) / 2], X = [(B[0] + q[0]) / 2, (B[1] + q[1]) / 2];
      } else if (S.touch0) V = S.touch0[0], X = S.touch0[1];
      else return;
      S.zoom("touch", n(E(P, V, X), S.extent, s));
    }
  }
  function A(y, ...N) {
    if (this.__zooming) {
      var S = C(this, N).event(y), T = y.changedTouches, Y = T.length, H, P;
      for (Oo(y), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), H = 0; H < Y; ++H)
        P = T[H], S.touch0 && S.touch0[2] === P.identifier ? delete S.touch0 : S.touch1 && S.touch1[2] === P.identifier && delete S.touch1;
      if (S.touch1 && !S.touch0 && (S.touch0 = S.touch1, delete S.touch1), S.touch0) S.touch0[1] = this.__zoom.invert(S.touch0[0]);
      else if (S.end(), S.taps === 2 && (P = st(P, this), Math.hypot(h[0] - P[0], h[1] - P[1]) < m)) {
        var V = nt(this).on("dblclick.zoom");
        V && V.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : zr(+y), w) : r;
  }, w.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : zr(!!y), w) : e;
  }, w.touchable = function(y) {
    return arguments.length ? (o = typeof y == "function" ? y : zr(!!y), w) : o;
  }, w.extent = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : zr([[+y[0][0], +y[0][1]], [+y[1][0], +y[1][1]]]), w) : t;
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
const lr = {
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
}, si = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], xl = ["Enter", " ", "Escape"], Ag = {
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
var In;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(In || (In = {}));
var Nn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Nn || (Nn = {}));
var eo;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(eo || (eo = {}));
const ai = {
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
var Ft;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Ft || (Ft = {}));
var to;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(to || (to = {}));
var Q;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Q || (Q = {}));
const xs = {
  [Q.Left]: Q.Right,
  [Q.Right]: Q.Left,
  [Q.Top]: Q.Bottom,
  [Q.Bottom]: Q.Top
};
function kl(e, t) {
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
function no(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function zg(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const El = (e) => "id" in e && "source" in e && "target" in e, Ig = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Mi = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), _r = (e, t = [0, 0]) => {
  const { width: n, height: r } = Qt(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Tg = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : Mi(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? ro(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Eo(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return So(n);
}, wr = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = Eo(n, ro(o)), r = !0);
  }), r ? So(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Ai = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...xr(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, c = [];
  for (const u of e.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = u;
    if (s && !h || f)
      continue;
    const g = d.width ?? u.width ?? u.initialWidth ?? null, v = d.height ?? u.height ?? u.initialHeight ?? null, p = cr(a, Dn(u)), m = (g ?? 0) * (v ?? 0), w = i && p > 0;
    (!u.internals.handleBounds || w || p >= m || u.dragging) && c.push(u);
  }
  return c;
}, Dg = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Og(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Rg({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Og(e, s), c = wr(a), u = zi(c, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Sl({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: c, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", lr.error005());
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
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", lr.error015()), {
    position: {
      x: f.x - c + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function Lg({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const g = i.has(f.id), v = !g && f.parentId && s.find((p) => p.id === f.parentId);
    (g || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), c = r.filter((f) => f.deletable !== !1), d = Dg(s, c);
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
const Tn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), fn = (e = { x: 0, y: 0 }, t, n) => ({
  x: Tn(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Tn(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Nl(e, t, n) {
  const { width: r, height: o } = Qt(n), { x: i, y: s } = n.internals.positionAbsolute;
  return fn(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const ks = (e, t, n) => e < t ? Tn(Math.abs(e - t), 1, t) / t : e > n ? -Tn(Math.abs(e - n), 1, t) / t : 0, Cl = (e, t, n = 15, r = 40) => {
  const o = ks(e.x, r, t.width - r) * n, i = ks(e.y, r, t.height - r) * n;
  return [o, i];
}, Eo = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), li = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), So = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Dn = (e, t = [0, 0]) => {
  const { x: n, y: r } = Mi(e) ? e.internals.positionAbsolute : _r(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, ro = (e, t = [0, 0]) => {
  const { x: n, y: r } = Mi(e) ? e.internals.positionAbsolute : _r(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, Pl = (e, t) => So(Eo(li(e), li(t))), cr = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Es = (e) => zt(e.width) && zt(e.height) && zt(e.x) && zt(e.y), zt = (e) => !isNaN(e) && isFinite(e), Hg = (e, t) => {
}, br = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), xr = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? br(a, s) : a;
}, oo = ({ x: e, y: t }, [n, r, o]) => ({
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
function Vg(e, t, n) {
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
function Bg(e, t, n, r, o, i) {
  const { x: s, y: a } = oo(e, [t, n, r]), { x: c, y: u } = oo({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - c, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const zi = (e, t, n, r, o, i) => {
  const s = Vg(i, t, n), a = (t - s.x) / e.width, c = (n - s.y) / e.height, u = Math.min(a, c), d = Tn(u, r, o), h = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - h * d, v = n / 2 - f * d, p = Bg(e, g, v, d, t, n), m = {
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
}, ur = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function On(e) {
  return e != null && e !== "parent";
}
function Qt(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Ml(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Fg(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Kg(e) {
  return { ...Ag, ...e || {} };
}
function Ro(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = ct(e), a = xr({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: c, y: u } = n ? br(a, t) : a;
  return {
    xSnapped: c,
    ySnapped: u,
    ...a
  };
}
const Al = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), zl = (e) => e?.getRootNode?.() || window?.document, Yg = ["INPUT", "SELECT", "TEXTAREA"];
function Il(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Yg.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Tl = (e) => "clientX" in e, ct = (e, t) => {
  const n = Tl(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, Ss = (e, t, n, r, o) => {
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
      ...Al(s)
    };
  });
};
function Xg({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const c = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(c - e), h = Math.abs(u - t);
  return [c, u, d, h];
}
function Ir(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ns({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Q.Left:
      return [t - Ir(t - r, i), n];
    case Q.Right:
      return [t + Ir(r - t, i), n];
    case Q.Top:
      return [t, n - Ir(n - o, i)];
    case Q.Bottom:
      return [t, n + Ir(o - n, i)];
  }
}
function Dl({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: o, targetPosition: i = Q.Top, curvature: s = 0.25 }) {
  const [a, c] = Ns({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Ns({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [h, f, g, v] = Xg({
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
function Ol({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function Zg({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1, zIndexMode: i = "basic" }) {
  if (i === "manual")
    return r;
  const s = o && n ? r + 1e3 : r, a = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return s + a;
}
function Wg({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Eo(ro(e), ro(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return cr(s, So(i)) > 0;
}
const qg = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Gg = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Ug = (e, t, n = {}) => {
  if (!e.source || !e.target)
    return t;
  const r = n.getEdgeId || qg;
  let o;
  return El(e) ? o = { ...e } : o = {
    ...e,
    id: r(e)
  }, Gg(o, t) ? t : (o.sourceHandle === null && delete o.sourceHandle, o.targetHandle === null && delete o.targetHandle, t.concat(o));
};
function Rl({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Ol({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Cs = {
  [Q.Left]: { x: -1, y: 0 },
  [Q.Right]: { x: 1, y: 0 },
  [Q.Top]: { x: 0, y: -1 },
  [Q.Bottom]: { x: 0, y: 1 }
}, jg = ({ source: e, sourcePosition: t = Q.Bottom, target: n }) => t === Q.Left || t === Q.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ps = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Jg({ source: e, sourcePosition: t = Q.Bottom, target: n, targetPosition: r = Q.Top, center: o, offset: i, stepPosition: s }) {
  const a = Cs[t], c = Cs[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + c.x * i, y: n.y + c.y * i }, h = jg({
    source: u,
    sourcePosition: t,
    target: d
  }), f = h.x !== 0 ? "x" : "y", g = h[f];
  let v = [], p, m;
  const w = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , E, b] = Ol({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * c[f] === -1) {
    f === "x" ? (p = o.x ?? u.x + (d.x - u.x) * s, m = o.y ?? (u.y + d.y) / 2) : (p = o.x ?? (u.x + d.x) / 2, m = o.y ?? u.y + (d.y - u.y) * s);
    const C = [
      { x: p, y: u.y },
      { x: p, y: d.y }
    ], L = [
      { x: u.x, y: m },
      { x: d.x, y: m }
    ];
    a[f] === g ? v = f === "x" ? C : L : v = f === "x" ? L : C;
  } else {
    const C = [{ x: u.x, y: d.y }], L = [{ x: d.x, y: u.y }];
    if (f === "x" ? v = a.x === g ? L : C : v = a.y === g ? C : L, t === r) {
      const k = Math.abs(e[f] - n[f]);
      if (k <= i) {
        const A = Math.min(i - 1, i - k);
        a[f] === g ? w[f] = (u[f] > e[f] ? -1 : 1) * A : x[f] = (d[f] > n[f] ? -1 : 1) * A;
      }
    }
    if (t !== r) {
      const k = f === "x" ? "y" : "x", A = a[f] === c[k], y = u[k] > d[k], N = u[k] < d[k];
      (a[f] === 1 && (!A && y || A && N) || a[f] !== 1 && (!A && N || A && y)) && (v = f === "x" ? C : L);
    }
    const M = { x: u.x + w.x, y: u.y + w.y }, K = { x: d.x + x.x, y: d.y + x.y }, W = Math.max(Math.abs(M.x - v[0].x), Math.abs(K.x - v[0].x)), z = Math.max(Math.abs(M.y - v[0].y), Math.abs(K.y - v[0].y));
    W >= z ? (p = (M.x + K.x) / 2, m = v[0].y) : (p = v[0].x, m = (M.y + K.y) / 2);
  }
  return [[
    e,
    { x: u.x + w.x, y: u.y + w.y },
    ...v,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], p, m, E, b];
}
function Qg(e, t, n, r) {
  const o = Math.min(Ps(e, t) / 2, Ps(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, c = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * c}Q ${i},${s} ${i + o * a},${s}`;
}
function Ii({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: o, targetPosition: i = Q.Top, borderRadius: s = 5, centerX: a, centerY: c, offset: u = 20, stepPosition: d = 0.5 }) {
  const [h, f, g, v, p] = Jg({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: c },
    offset: u,
    stepPosition: d
  });
  return [h.reduce((w, x, E) => {
    let b = "";
    return E > 0 && E < h.length - 1 ? b = Qg(h[E - 1], x, h[E + 1], s) : b = `${E === 0 ? "M" : "L"}${x.x} ${x.y}`, w += b, w;
  }, ""), f, g, v, p];
}
function Ms(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function $g(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Ms(t) || !Ms(n))
    return null;
  const r = t.internals.handleBounds || As(t.handles), o = n.internals.handleBounds || As(n.handles), i = zs(r?.source ?? [], e.sourceHandle), s = zs(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === In.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", lr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || Q.Bottom, c = s?.position || Q.Top, u = hn(t, i, a), d = hn(n, s, c);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: c
  };
}
function As(e) {
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
function hn(e, t, n = Q.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Qt(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case Q.Top:
      return { x: o + s / 2, y: i };
    case Q.Right:
      return { x: o + s, y: i + a / 2 };
    case Q.Bottom:
      return { x: o + s / 2, y: i + a };
    case Q.Left:
      return { x: o, y: i + a / 2 };
  }
}
function zs(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function ci(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function ev(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((c) => {
    if (c && typeof c == "object") {
      const u = ci(c, t);
      i.has(u) || (s.push({ id: u, color: c.color || n, ...c }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
const Ll = 1e3, tv = 10, Ti = {
  nodeOrigin: [0, 0],
  nodeExtent: si,
  elevateNodesOnSelect: !0,
  zIndexMode: "basic",
  defaults: {}
}, nv = {
  ...Ti,
  checkEquality: !0
};
function Di(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function rv(e, t, n) {
  const r = Di(Ti, n);
  for (const o of e.values())
    if (o.parentId)
      Ri(o, e, t, r);
    else {
      const i = _r(o, r.nodeOrigin), s = On(o.extent) ? o.extent : r.nodeExtent, a = fn(i, s, Qt(o));
      o.internals.positionAbsolute = a;
    }
}
function ov(e, t) {
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
function Oi(e) {
  return e === "manual";
}
function iv(e, t, n, r = {}) {
  const o = Di(nv, r), i = { i: 0 }, s = new Map(t), a = o?.elevateNodesOnSelect && !Oi(o.zIndexMode) ? Ll : 0;
  let c = e.length > 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = s.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const h = _r(u, o.nodeOrigin), f = On(u.extent) ? u.extent : o.nodeExtent, g = fn(h, f, Qt(u));
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
          handleBounds: ov(u, d),
          z: Hl(u, a, o.zIndexMode),
          userNode: u
        }
      }, t.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (c = !1), u.parentId && Ri(d, t, n, r, i);
  }
  return c;
}
function sv(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ri(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a, zIndexMode: c } = Di(Ti, r), u = e.parentId, d = t.get(u);
  if (!d) {
    console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  sv(e, n), o && !d.parentId && d.internals.rootParentIndex === void 0 && c === "auto" && (d.internals.rootParentIndex = ++o.i, d.internals.z = d.internals.z + o.i * tv), o && d.internals.rootParentIndex !== void 0 && (o.i = d.internals.rootParentIndex);
  const h = i && !Oi(c) ? Ll : 0, { x: f, y: g, z: v } = av(e, d, s, a, h, c), { positionAbsolute: p } = e.internals, m = f !== p.x || g !== p.y;
  (m || v !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: m ? { x: f, y: g } : p,
      z: v
    }
  });
}
function Hl(e, t, n) {
  const r = zt(e.zIndex) ? e.zIndex : 0;
  return Oi(n) ? r : r + (e.selected ? t : 0);
}
function av(e, t, n, r, o, i) {
  const { x: s, y: a } = t.internals.positionAbsolute, c = Qt(e), u = _r(e, n), d = On(e.extent) ? fn(u, e.extent, c) : u;
  let h = fn({ x: s + d.x, y: a + d.y }, r, c);
  e.extent === "parent" && (h = Nl(h, c, t));
  const f = Hl(e, o, i), g = t.internals.z ?? 0;
  return {
    x: h.x,
    y: h.y,
    z: g >= f ? g + 1 : f
  };
}
function lv(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const c = i.get(s.parentId)?.expandedRect ?? Dn(a), u = Pl(c, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, c) => {
    const u = a.internals.positionAbsolute, d = Qt(a), h = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, v = Math.max(d.width, Math.round(s.width)), p = Math.max(d.height, Math.round(s.height)), m = (v - d.width) * h[0], w = (p - d.height) * h[1];
    (f > 0 || g > 0 || m || w) && (o.push({
      id: c,
      type: "position",
      position: {
        x: a.position.x - f + m,
        y: a.position.y - g + w
      }
    }), n.get(c)?.forEach((x) => {
      e.some((E) => E.id === x.id) || o.push({
        id: x.id,
        type: "position",
        position: {
          x: x.position.x + f,
          y: x.position.y + g
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
function cv(e, t, n, r, o, i, s) {
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
    const p = Al(g.nodeElement), m = v.measured.width !== p.width || v.measured.height !== p.height;
    if (!!(p.width && p.height && (m || !v.internals.handleBounds || g.force))) {
      const x = g.nodeElement.getBoundingClientRect(), E = On(v.extent) ? v.extent : i;
      let { positionAbsolute: b } = v.internals;
      v.parentId && v.extent === "parent" ? b = Nl(b, p, t.get(v.parentId)) : E && (b = fn(b, E, p));
      const I = {
        ...v,
        measured: p,
        internals: {
          ...v.internals,
          positionAbsolute: b,
          handleBounds: {
            source: Ss("source", g.nodeElement, x, h, v.id),
            target: Ss("target", g.nodeElement, x, h, v.id)
          }
        }
      };
      t.set(v.id, I), v.parentId && Ri(I, t, n, { nodeOrigin: o, zIndexMode: s }), c = !0, m && (u.push({
        id: v.id,
        type: "dimensions",
        dimensions: p
      }), v.expandParent && v.parentId && f.push({
        id: v.id,
        parentId: v.parentId,
        rect: Dn(I, o)
      }));
    }
  }
  if (f.length > 0) {
    const g = lv(f, t, n, o);
    u.push(...g);
  }
  return { changes: u, updatedInternals: c };
}
async function uv({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Is(e, t, n, r, o, i) {
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
function dv(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, c = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Is("source", c, d, e, o, s), Is("target", c, u, e, i, a), t.set(r.id, r);
  }
}
function Vl(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Vl(n, t) : !1;
}
function Ts(e, t, n) {
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
function fv(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Vl(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Lo({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function hv({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = br(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function gv({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), c = !1, u = { x: 0, y: 0 }, d = null, h = !1, f = null, g = !1, v = !1, p = null;
  function m({ noDragClassName: x, handleSelector: E, domNode: b, isSelectable: I, nodeId: C, nodeClickDistance: L = 0 }) {
    f = nt(b);
    function M({ x: k, y: A }) {
      const { nodeLookup: y, nodeExtent: N, snapGrid: S, snapToGrid: T, nodeOrigin: Y, onNodeDrag: H, onSelectionDrag: P, onError: V, updateNodePositions: X } = t();
      i = { x: k, y: A };
      let R = !1;
      const B = a.size > 1, G = B && N ? li(wr(a)) : null, q = B && T ? hv({
        dragItems: a,
        snapGrid: S,
        x: k,
        y: A
      }) : null;
      for (const [U, j] of a) {
        if (!y.has(U))
          continue;
        let ne = { x: k - j.distance.x, y: A - j.distance.y };
        T && (ne = q ? {
          x: Math.round(ne.x + q.x),
          y: Math.round(ne.y + q.y)
        } : br(ne, S));
        let he = null;
        if (B && N && !j.extent && G) {
          const { positionAbsolute: ae } = j.internals, be = ae.x - G.x + N[0][0], Je = ae.x + j.measured.width - G.x2 + N[1][0], Qe = ae.y - G.y + N[0][1], Xe = ae.y + j.measured.height - G.y2 + N[1][1];
          he = [
            [be, Qe],
            [Je, Xe]
          ];
        }
        const { position: te, positionAbsolute: pe } = Sl({
          nodeId: U,
          nextPosition: ne,
          nodeLookup: y,
          nodeExtent: he || N,
          nodeOrigin: Y,
          onError: V
        });
        R = R || j.position.x !== te.x || j.position.y !== te.y, j.position = te, j.internals.positionAbsolute = pe;
      }
      if (v = v || R, !!R && (X(a, !0), p && (r || H || !C && P))) {
        const [U, j] = Lo({
          nodeId: C,
          dragItems: a,
          nodeLookup: y
        });
        r?.(p, a, U, j), H?.(p, U, j), C || P?.(p, j);
      }
    }
    async function K() {
      if (!d)
        return;
      const { transform: k, panBy: A, autoPanSpeed: y, autoPanOnNodeDrag: N } = t();
      if (!N) {
        c = !1, cancelAnimationFrame(s);
        return;
      }
      const [S, T] = Cl(u, d, y);
      (S !== 0 || T !== 0) && (i.x = (i.x ?? 0) - S / k[2], i.y = (i.y ?? 0) - T / k[2], await A({ x: S, y: T }) && M(i)), s = requestAnimationFrame(K);
    }
    function W(k) {
      const { nodeLookup: A, multiSelectionActive: y, nodesDraggable: N, transform: S, snapGrid: T, snapToGrid: Y, selectNodesOnDrag: H, onNodeDragStart: P, onSelectionDragStart: V, unselectNodesAndEdges: X } = t();
      h = !0, (!H || !I) && !y && C && (A.get(C)?.selected || X()), I && H && C && e?.(C);
      const R = Ro(k.sourceEvent, { transform: S, snapGrid: T, snapToGrid: Y, containerBounds: d });
      if (i = R, a = fv(A, N, R, C), a.size > 0 && (n || P || !C && V)) {
        const [B, G] = Lo({
          nodeId: C,
          dragItems: a,
          nodeLookup: A
        });
        n?.(k.sourceEvent, a, B, G), P?.(k.sourceEvent, B, G), C || V?.(k.sourceEvent, G);
      }
    }
    const z = Lf().clickDistance(L).on("start", (k) => {
      const { domNode: A, nodeDragThreshold: y, transform: N, snapGrid: S, snapToGrid: T } = t();
      d = A?.getBoundingClientRect() || null, g = !1, v = !1, p = k.sourceEvent, y === 0 && W(k), i = Ro(k.sourceEvent, { transform: N, snapGrid: S, snapToGrid: T, containerBounds: d }), u = ct(k.sourceEvent, d);
    }).on("drag", (k) => {
      const { autoPanOnNodeDrag: A, transform: y, snapGrid: N, snapToGrid: S, nodeDragThreshold: T, nodeLookup: Y } = t(), H = Ro(k.sourceEvent, { transform: y, snapGrid: N, snapToGrid: S, containerBounds: d });
      if (p = k.sourceEvent, (k.sourceEvent.type === "touchmove" && k.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      C && !Y.has(C)) && (g = !0), !g) {
        if (!c && A && h && (c = !0, K()), !h) {
          const P = ct(k.sourceEvent, d), V = P.x - u.x, X = P.y - u.y;
          Math.sqrt(V * V + X * X) > T && W(k);
        }
        (i.x !== H.xSnapped || i.y !== H.ySnapped) && a && h && (u = ct(k.sourceEvent, d), M(H));
      }
    }).on("end", (k) => {
      if (!(!h || g) && (c = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: A, updateNodePositions: y, onNodeDragStop: N, onSelectionDragStop: S } = t();
        if (v && (y(a, !1), v = !1), o || N || !C && S) {
          const [T, Y] = Lo({
            nodeId: C,
            dragItems: a,
            nodeLookup: A,
            dragging: !1
          });
          o?.(k.sourceEvent, a, T, Y), N?.(k.sourceEvent, T, Y), C || S?.(k.sourceEvent, Y);
        }
      }
    }).filter((k) => {
      const A = k.target;
      return !k.button && (!x || !Ts(A, `.${x}`, b)) && (!E || Ts(A, E, b));
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
function vv(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    cr(o, Dn(i)) > 0 && r.push(i);
  return r;
}
const pv = 250;
function mv(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = vv(e, n, t + pv);
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
function Bl(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], c = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return c && i ? { ...c, ...hn(s, c, c.position, !0) } : c;
}
function Fl(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function yv(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Kl = () => !0;
function _v(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: c, lib: u, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: g, onConnectStart: v, onConnect: p, onConnectEnd: m, isValidConnection: w = Kl, onReconnectEnd: x, updateConnection: E, getTransform: b, getFromHandle: I, autoPanSpeed: C, dragThreshold: L = 1, handleDomNode: M }) {
  const K = zl(e.target);
  let W = 0, z;
  const { x: k, y: A } = ct(e), y = Fl(i, M), N = a?.getBoundingClientRect();
  let S = !1;
  if (!N || !y)
    return;
  const T = Bl(o, y, r, c, t);
  if (!T)
    return;
  let Y = ct(e, N), H = !1, P = null, V = !1, X = null;
  function R() {
    if (!d || !N)
      return;
    const [te, pe] = Cl(Y, N, C);
    f({ x: te, y: pe }), W = requestAnimationFrame(R);
  }
  const B = {
    ...T,
    nodeId: o,
    type: y,
    position: T.position
  }, G = c.get(o);
  let U = {
    inProgress: !0,
    isValid: null,
    from: hn(G, B, Q.Left, !0),
    fromHandle: B,
    fromPosition: B.position,
    fromNode: G,
    to: Y,
    toHandle: null,
    toPosition: xs[B.position],
    toNode: null,
    pointer: Y
  };
  function j() {
    S = !0, E(U), v?.(e, { nodeId: o, handleId: r, handleType: y });
  }
  L === 0 && j();
  function ne(te) {
    if (!S) {
      const { x: Xe, y: ge } = ct(te), Ee = Xe - k, it = ge - A;
      if (!(Ee * Ee + it * it > L * L))
        return;
      j();
    }
    if (!I() || !B) {
      he(te);
      return;
    }
    const pe = b();
    Y = ct(te, N), z = mv(xr(Y, pe, !1, [1, 1]), n, c, B), H || (R(), H = !0);
    const ae = Yl(te, {
      handle: z,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: K,
      lib: u,
      flowId: h,
      nodeLookup: c
    });
    X = ae.handleDomNode, P = ae.connection, V = yv(!!z, ae.isValid);
    const be = c.get(o), Je = be ? hn(be, B, Q.Left, !0) : U.from, Qe = {
      ...U,
      from: Je,
      isValid: V,
      to: ae.toHandle && V ? oo({ x: ae.toHandle.x, y: ae.toHandle.y }, pe) : Y,
      toHandle: ae.toHandle,
      toPosition: V && ae.toHandle ? ae.toHandle.position : xs[B.position],
      toNode: ae.toHandle ? c.get(ae.toHandle.nodeId) : null,
      pointer: Y
    };
    E(Qe), U = Qe;
  }
  function he(te) {
    if (!("touches" in te && te.touches.length > 0)) {
      if (S) {
        (z || X) && P && V && p?.(P);
        const { inProgress: pe, ...ae } = U, be = {
          ...ae,
          toPosition: U.toHandle ? U.toPosition : null
        };
        m?.(te, be), i && x?.(te, be);
      }
      g(), cancelAnimationFrame(W), H = !1, V = !1, P = null, X = null, K.removeEventListener("mousemove", ne), K.removeEventListener("mouseup", he), K.removeEventListener("touchmove", ne), K.removeEventListener("touchend", he);
    }
  }
  K.addEventListener("mousemove", ne), K.addEventListener("mouseup", he), K.addEventListener("touchmove", ne), K.addEventListener("touchend", he);
}
function Yl(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: c, isValidConnection: u = Kl, nodeLookup: d }) {
  const h = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: v } = ct(e), p = s.elementFromPoint(g, v), m = p?.classList.contains(`${a}-flow__handle`) ? p : f, w = {
    handleDomNode: m,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (m) {
    const x = Fl(void 0, m), E = m.getAttribute("data-nodeid"), b = m.getAttribute("data-handleid"), I = m.classList.contains("connectable"), C = m.classList.contains("connectableend");
    if (!E || !x)
      return w;
    const L = {
      source: h ? E : r,
      sourceHandle: h ? b : o,
      target: h ? r : E,
      targetHandle: h ? o : b
    };
    w.connection = L;
    const K = I && C && (n === In.Strict ? h && x === "source" || !h && x === "target" : E !== r || b !== o);
    w.isValid = K && u(L), w.toHandle = Bl(E, x, b, d, n, !0);
  }
  return w;
}
const Ds = {
  onPointerDown: _v,
  isValid: Yl
};
function wv({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = nt(e);
  function i({ translateExtent: a, width: c, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const v = (E) => {
      if (E.sourceEvent.type !== "wheel" || !t)
        return;
      const b = n(), I = E.sourceEvent.ctrlKey && ur() ? 10 : 1, C = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * d, L = b[2] * Math.pow(2, C * I);
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
      const I = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ], C = [I[0] - p[0], I[1] - p[1]];
      p = I;
      const L = r() * Math.max(b[2], Math.log(b[2])) * (g ? -1 : 1), M = {
        x: b[0] - C[0] * L,
        y: b[1] - C[1] * L
      }, K = [
        [0, 0],
        [c, u]
      ];
      t.setViewportConstrained({
        x: M.x,
        y: M.y,
        zoom: b[2]
      }, K, a);
    }, x = bl().on("start", m).on("zoom", h ? w : null).on("zoom.wheel", f ? v : null);
    o.call(x, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: st
  };
}
const No = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ho = ({ x: e, y: t, zoom: n }) => ko.translate(e, t).scale(n), kn = (e, t) => e.target.closest(`.${t}`), Xl = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), bv = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, Vo = (e, t = 0, n = bv, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Zl = (e) => {
  const t = e.ctrlKey && ur() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function xv({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: c, onPanZoomEnd: u }) {
  return (d) => {
    if (kn(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const m = st(d), w = Zl(d), x = h * Math.pow(2, w);
      r.scaleTo(n, x, m, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === Nn.Vertical ? 0 : d.deltaX * f, v = o === Nn.Horizontal ? 0 : d.deltaY * f;
    !ur() && d.shiftKey && o !== Nn.Vertical && (g = d.deltaY * f, v = 0), r.translateBy(
      n,
      -(g / h) * i,
      -(v / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const p = No(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (c?.(d, p), e.panScrollTimeout = setTimeout(() => {
      u?.(d, p), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, p));
  };
}
function kv({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = kn(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Ev({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = No(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function Sv({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Xl(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, No(i.transform));
  };
}
function Nv({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Xl(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = No(s.transform);
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
function Cv({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: c, lib: u, connectionInProgress: d }) {
  return (h) => {
    const f = e || t, g = n && h.ctrlKey, v = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (kn(h, `${u}-flow__node`) || kn(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !v || kn(h, a) && v || kn(h, c) && (!v || o && v && !e) || !n && h.ctrlKey && v)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !g && v || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || v) && p;
  };
}
function Pv({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: c }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), h = bl().scaleExtent([t, n]).translateExtent(r), f = nt(e).call(h);
  x({
    x: o.x,
    y: o.y,
    zoom: Tn(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const g = f.on("wheel.zoom"), v = f.on("dblclick.zoom");
  h.wheelDelta(Zl);
  function p(z, k) {
    return f ? new Promise((A) => {
      h?.interpolate(k?.interpolate === "linear" ? $n : Hr).transform(Vo(f, k?.duration, k?.ease, () => A(!0)), z);
    }) : Promise.resolve(!1);
  }
  function m({ noWheelClassName: z, noPanClassName: k, onPaneContextMenu: A, userSelectionActive: y, panOnScroll: N, panOnDrag: S, panOnScrollMode: T, panOnScrollSpeed: Y, preventScrolling: H, zoomOnPinch: P, zoomOnScroll: V, zoomOnDoubleClick: X, zoomActivationKeyPressed: R, lib: B, onTransformChange: G, connectionInProgress: q, paneClickDistance: U, selectionOnDrag: j }) {
    y && !u.isZoomingOrPanning && w();
    const ne = N && !R && !y;
    h.clickDistance(j ? 1 / 0 : !zt(U) || U < 0 ? 0 : U);
    const he = ne ? xv({
      zoomPanValues: u,
      noWheelClassName: z,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: T,
      panOnScrollSpeed: Y,
      zoomOnPinch: P,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : kv({
      noWheelClassName: z,
      preventScrolling: H,
      d3ZoomHandler: g
    });
    if (f.on("wheel.zoom", he, { passive: !1 }), !y) {
      const pe = Ev({
        zoomPanValues: u,
        onDraggingChange: c,
        onPanZoomStart: s
      });
      h.on("start", pe);
      const ae = Sv({
        zoomPanValues: u,
        panOnDrag: S,
        onPaneContextMenu: !!A,
        onPanZoom: i,
        onTransformChange: G
      });
      h.on("zoom", ae);
      const be = Nv({
        zoomPanValues: u,
        panOnDrag: S,
        panOnScroll: N,
        onPaneContextMenu: A,
        onPanZoomEnd: a,
        onDraggingChange: c
      });
      h.on("end", be);
    }
    const te = Cv({
      zoomActivationKeyPressed: R,
      panOnDrag: S,
      zoomOnScroll: V,
      panOnScroll: N,
      zoomOnDoubleClick: X,
      zoomOnPinch: P,
      userSelectionActive: y,
      noPanClassName: k,
      noWheelClassName: z,
      lib: B,
      connectionInProgress: q
    });
    h.filter(te), X ? f.on("dblclick.zoom", v) : f.on("dblclick.zoom", null);
  }
  function w() {
    h.on("zoom", null);
  }
  async function x(z, k, A) {
    const y = Ho(z), N = h?.constrain()(y, k, A);
    return N && await p(N), new Promise((S) => S(N));
  }
  async function E(z, k) {
    const A = Ho(z);
    return await p(A, k), new Promise((y) => y(A));
  }
  function b(z) {
    if (f) {
      const k = Ho(z), A = f.property("__zoom");
      (A.k !== z.zoom || A.x !== z.x || A.y !== z.y) && h?.transform(f, k, null, { sync: !0 });
    }
  }
  function I() {
    const z = f ? wl(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function C(z, k) {
    return f ? new Promise((A) => {
      h?.interpolate(k?.interpolate === "linear" ? $n : Hr).scaleTo(Vo(f, k?.duration, k?.ease, () => A(!0)), z);
    }) : Promise.resolve(!1);
  }
  function L(z, k) {
    return f ? new Promise((A) => {
      h?.interpolate(k?.interpolate === "linear" ? $n : Hr).scaleBy(Vo(f, k?.duration, k?.ease, () => A(!0)), z);
    }) : Promise.resolve(!1);
  }
  function M(z) {
    h?.scaleExtent(z);
  }
  function K(z) {
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
    getViewport: I,
    scaleTo: C,
    scaleBy: L,
    setScaleExtent: M,
    setTranslateExtent: K,
    syncViewport: b,
    setClickDistance: W
  };
}
var Os;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Os || (Os = {}));
function Li() {
  const e = {};
  return [
    (t) => {
      if (t && !Hc(e))
        throw new Error(t);
      return hi(e);
    },
    (t) => gi(e, t)
  ];
}
const [Wl, Mv] = Li(), [Av, zv] = Li(), [Iv, Tv] = Li();
var Dv = /* @__PURE__ */ ee("<div><!></div>");
function dr(e, t) {
  oe(t, !0);
  let n = F(t, "id", 3, null), r = F(t, "type", 3, "source"), o = F(t, "position", 19, () => Q.Top), i = F(t, "isConnectableStart", 3, !0), s = F(t, "isConnectableEnd", 3, !0), a = /* @__PURE__ */ Jt(t, [
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
  const c = Wl("Handle must be used within a Custom Node component"), u = Av("Handle must be used within a Custom Node component");
  let d = /* @__PURE__ */ _(() => r() === "target"), h = /* @__PURE__ */ _(() => t.isConnectable !== void 0 ? t.isConnectable : u.value), f = Ht(), g = /* @__PURE__ */ _(() => f.ariaLabelConfig), v = null;
  xa(() => {
    if (t.onconnect || t.ondisconnect) {
      f.edges;
      let k = f.connectionLookup.get(`${c}-${r()}${n() ? `-${n()}` : ""}`);
      if (v && !kl(k, v)) {
        const A = k ?? /* @__PURE__ */ new Map();
        no(v, A, t.ondisconnect), no(A, v, t.onconnect);
      }
      v = new Map(k);
    }
  });
  let p = /* @__PURE__ */ _(() => {
    if (!f.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: k, toHandle: A, isValid: y } = f.connection, N = k && k.nodeId === c && k.type === r() && k.id === n(), S = A && A.nodeId === c && A.type === r() && A.id === n(), T = f.connectionMode === In.Strict ? k?.type !== r() : c !== k?.nodeId || n() !== k?.id;
    return [
      !0,
      N,
      S,
      T,
      S && y
    ];
  }), m = /* @__PURE__ */ _(() => Rn(l(p), 5)), w = /* @__PURE__ */ _(() => l(m)[0]), x = /* @__PURE__ */ _(() => l(m)[1]), E = /* @__PURE__ */ _(() => l(m)[2]), b = /* @__PURE__ */ _(() => l(m)[3]), I = /* @__PURE__ */ _(() => l(m)[4]);
  function C(k) {
    const A = f.onbeforeconnect ? f.onbeforeconnect(k) : k;
    A && (f.addEdge(A), f.onconnect?.(k));
  }
  function L(k) {
    const A = Tl(k);
    k.currentTarget && (A && k.button === 0 || !A) && Ds.onPointerDown(k, {
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
      onConnect: C,
      onConnectStart: (y, N) => {
        f.onconnectstart?.(y, {
          nodeId: N.nodeId,
          handleId: N.handleId,
          handleType: N.handleType
        });
      },
      onConnectEnd: (y, N) => {
        f.onconnectend?.(y, N);
      },
      getTransform: () => [f.viewport.x, f.viewport.y, f.viewport.zoom],
      getFromHandle: () => f.connection.fromHandle,
      dragThreshold: f.connectionDragThreshold,
      handleDomNode: k.currentTarget
    });
  }
  function M(k) {
    if (!c || !f.clickConnectStartHandle && !i())
      return;
    if (!f.clickConnectStartHandle) {
      f.onclickconnectstart?.(k, { nodeId: c, handleId: n(), handleType: r() }), f.clickConnectStartHandle = { nodeId: c, type: r(), id: n() };
      return;
    }
    const A = zl(k.target), y = t.isValidConnection ?? f.isValidConnection, { connectionMode: N, clickConnectStartHandle: S, flowId: T, nodeLookup: Y } = f, { connection: H, isValid: P } = Ds.isValid(k, {
      handle: { nodeId: c, id: n(), type: r() },
      connectionMode: N,
      fromNodeId: S.nodeId,
      fromHandleId: S.id ?? null,
      fromType: S.type,
      isValidConnection: y,
      flowId: T,
      doc: A,
      lib: "svelte",
      nodeLookup: Y
    });
    P && H && C(H);
    const V = structuredClone(oa(f.connection));
    delete V.inProgress, V.toPosition = V.toHandle ? V.toHandle.position : null, f.onclickconnectend?.(k, V), f.clickConnectStartHandle = null;
  }
  var K = Dv(), W = () => {
  };
  bt(K, () => ({
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
    onmousedown: L,
    ontouchstart: L,
    onclick: f.clickConnect ? M : void 0,
    onkeypress: W,
    style: t.style,
    role: "button",
    "aria-label": l(g)["handle.ariaLabel"],
    tabindex: "-1",
    ...a,
    [Bt]: {
      valid: l(I),
      connectingto: l(E),
      connectingfrom: l(x),
      source: !l(d),
      target: l(d),
      connectablestart: i(),
      connectableend: s(),
      connectable: l(h),
      connectionindicator: l(h) && (!l(w) || l(b)) && (l(w) || f.clickConnectStartHandle ? s() : i())
    }
  }));
  var z = Z(K);
  Fe(z, () => t.children ?? We), O(e, K), ie();
}
var Ov = /* @__PURE__ */ ee("<!> <!>", 1);
function ql(e, t) {
  oe(t, !0);
  let n = F(t, "targetPosition", 19, () => Q.Top), r = F(t, "sourcePosition", 19, () => Q.Bottom);
  var o = Ov(), i = $(o);
  dr(i, {
    type: "target",
    get position() {
      return n();
    }
  });
  var s = J(i), a = J(s);
  dr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), ue(() => xe(s, ` ${t.data?.label ?? ""} `)), O(e, o), ie();
}
var Rv = /* @__PURE__ */ ee(" <!>", 1);
function Lv(e, t) {
  oe(t, !0);
  let n = F(t, "data", 19, () => ({ label: "Node" })), r = F(t, "sourcePosition", 19, () => Q.Bottom);
  var o = Rv(), i = $(o), s = J(i);
  dr(s, {
    type: "source",
    get position() {
      return r();
    }
  }), ue(() => xe(i, `${n()?.label ?? ""} `)), O(e, o), ie();
}
var Hv = /* @__PURE__ */ ee(" <!>", 1);
function Vv(e, t) {
  oe(t, !0);
  let n = F(t, "data", 19, () => ({ label: "Node" })), r = F(t, "targetPosition", 19, () => Q.Top);
  var o = Hv(), i = $(o), s = J(i);
  dr(s, {
    type: "target",
    get position() {
      return r();
    }
  }), ue(() => xe(i, `${n()?.label ?? ""} `)), O(e, o), ie();
}
function Bv(e, t) {
}
function Bo(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Fv(e, t) {
  const n = /* @__PURE__ */ _(Ht), r = /* @__PURE__ */ _(() => l(n).domNode);
  let o;
  return l(r) ? Bo(e, l(r), t) : o = ka(() => {
    Oe(() => {
      Bo(e, l(r), t), o?.();
    });
  }), {
    async update(i) {
      Bo(e, l(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Kv() {
  let e = /* @__PURE__ */ se(typeof window > "u");
  if (l(e)) {
    const t = ka(() => {
      Oe(() => {
        D(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return l(e);
    }
  };
}
const Rs = (e) => Ig(e), Yv = (e) => El(e);
function xt(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const io = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var Xv = /* @__PURE__ */ ee("<div><!></div>");
function Zv(e, t) {
  oe(t, !0);
  let n = F(t, "x", 3, 0), r = F(t, "y", 3, 0), o = F(t, "selectEdgeOnClick", 3, !1), i = F(t, "transparent", 3, !1), s = /* @__PURE__ */ Jt(t, [
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
  const a = Ht(), c = Iv("EdgeLabel must be used within a Custom Edge component");
  let u = /* @__PURE__ */ _(() => a.visible.edges.get(c)?.zIndex);
  var d = Xv(), h = () => {
    o() && c && a.handleEdgeSelection(c);
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
        display: Kv().value ? "none" : void 0,
        cursor: o() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: xt(t.width),
        height: xt(t.height),
        "z-index": l(u)
      })
    ],
    void 0,
    void 0,
    "svelte-1wg91mu"
  );
  var f = Z(d);
  Fe(f, () => t.children ?? We), Te(d, (g, v) => Fv?.(g, v), () => "edge-labels"), O(e, d), ie();
}
var Wv = /* @__PURE__ */ we("<path></path>"), qv = /* @__PURE__ */ we('<path fill="none"></path><!><!>', 1);
function Co(e, t) {
  let n = F(t, "interactionWidth", 3, 20), r = /* @__PURE__ */ Jt(t, [
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
  var o = qv(), i = $(o), s = J(i);
  {
    var a = (d) => {
      var h = Wv();
      bt(h, () => ({
        d: t.path,
        "stroke-opacity": 0,
        "stroke-width": n(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...r
      })), O(d, h);
    };
    le(s, (d) => {
      n() > 0 && d(a);
    });
  }
  var c = J(s);
  {
    var u = (d) => {
      Zv(d, {
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
          ue(() => xe(g, t.label)), O(h, g);
        },
        $$slots: { default: !0 }
      });
    };
    le(c, (d) => {
      t.label && d(u);
    });
  }
  ue(() => {
    re(i, "id", t.id), re(i, "d", t.path), Ce(i, 0, jt(["svelte-flow__edge-path", t.class])), re(i, "marker-start", t.markerStart), re(i, "marker-end", t.markerEnd), Ke(i, t.style);
  }), O(e, o);
}
function Gl(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ _(() => Dl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    curvature: t.pathOptions?.curvature
  })), r = /* @__PURE__ */ _(() => Rn(l(n), 3)), o = /* @__PURE__ */ _(() => l(r)[0]), i = /* @__PURE__ */ _(() => l(r)[1]), s = /* @__PURE__ */ _(() => l(r)[2]);
  Co(e, {
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
  }), ie();
}
function Gv(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ _(() => Ii({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition
  })), r = /* @__PURE__ */ _(() => Rn(l(n), 3)), o = /* @__PURE__ */ _(() => l(r)[0]), i = /* @__PURE__ */ _(() => l(r)[1]), s = /* @__PURE__ */ _(() => l(r)[2]);
  Co(e, {
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
  }), ie();
}
function Uv(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ _(() => Rl({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY
  })), r = /* @__PURE__ */ _(() => Rn(l(n), 3)), o = /* @__PURE__ */ _(() => l(r)[0]), i = /* @__PURE__ */ _(() => l(r)[1]), s = /* @__PURE__ */ _(() => l(r)[2]);
  Co(e, {
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
  }), ie();
}
function jv(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ _(() => Ii({
    sourceX: t.sourceX,
    sourceY: t.sourceY,
    targetX: t.targetX,
    targetY: t.targetY,
    sourcePosition: t.sourcePosition,
    targetPosition: t.targetPosition,
    borderRadius: 0
  })), r = /* @__PURE__ */ _(() => Rn(l(n), 3)), o = /* @__PURE__ */ _(() => l(r)[0]), i = /* @__PURE__ */ _(() => l(r)[1]), s = /* @__PURE__ */ _(() => l(r)[2]);
  Co(e, {
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
  }), ie();
}
class Jv {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#e = t, this.#t = ua(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const Qv = /\(.+\)/, $v = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class e0 extends Jv {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Qv.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => $v.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Go(o, "change", i)
    );
  }
}
function t0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Ai(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Ls(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: c, zIndexMode: u } = e, d = /* @__PURE__ */ new Map();
  for (const h of t) {
    const f = r.get(h.source), g = r.get(h.target);
    if (!f || !g)
      continue;
    if (a) {
      const { visibleNodes: m, transform: w, width: x, height: E } = e;
      if (Wg({
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
    const p = $g({
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
      zIndex: Zg({
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
const Ul = {
  input: Lv,
  output: Vv,
  default: ql,
  group: Bv
}, jl = {
  straight: Uv,
  smoothstep: Gv,
  default: Gl,
  step: jv
};
function n0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = wr(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return zi(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function r0(e) {
  class t {
    #e = /* @__PURE__ */ _(() => e.props.id ?? "1");
    get flowId() {
      return l(this.#e);
    }
    set flowId(r) {
      D(this.#e, r);
    }
    #t = /* @__PURE__ */ se(null);
    get domNode() {
      return l(this.#t);
    }
    set domNode(r) {
      D(this.#t, r);
    }
    #n = /* @__PURE__ */ se(null);
    get panZoom() {
      return l(this.#n);
    }
    set panZoom(r) {
      D(this.#n, r);
    }
    #r = /* @__PURE__ */ se(e.width ?? 0);
    get width() {
      return l(this.#r);
    }
    set width(r) {
      D(this.#r, r);
    }
    #l = /* @__PURE__ */ se(e.height ?? 0);
    get height() {
      return l(this.#l);
    }
    set height(r) {
      D(this.#l, r);
    }
    #i = /* @__PURE__ */ se(e.props.zIndexMode ?? "basic");
    get zIndexMode() {
      return l(this.#i);
    }
    set zIndexMode(r) {
      D(this.#i, r);
    }
    #o = /* @__PURE__ */ _(() => {
      const r = iv(e.nodes, this.nodeLookup, this.parentLookup, {
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
      D(this.#o, r);
    }
    #s = /* @__PURE__ */ _(() => this.panZoom !== null);
    get viewportInitialized() {
      return l(this.#s);
    }
    set viewportInitialized(r) {
      D(this.#s, r);
    }
    #a = /* @__PURE__ */ _(() => (dv(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return l(this.#a);
    }
    set _edges(r) {
      D(this.#a, r);
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
      D(this.#c, r);
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
      D(this.#u, r);
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
        const { viewport: p, width: m, height: w } = this, x = [p.x, p.y, p.zoom];
        f = t0(s, x, m, w), g = Ls({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: x,
          width: m,
          height: w
        });
      } else
        f = this.nodeLookup, g = Ls(v);
      return { nodes: f, edges: g };
    });
    get visible() {
      return l(this.#d);
    }
    set visible(r) {
      D(this.#d, r);
    }
    #f = /* @__PURE__ */ _(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return l(this.#f);
    }
    set nodesDraggable(r) {
      D(this.#f, r);
    }
    #g = /* @__PURE__ */ _(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return l(this.#g);
    }
    set nodesConnectable(r) {
      D(this.#g, r);
    }
    #h = /* @__PURE__ */ _(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return l(this.#h);
    }
    set elementsSelectable(r) {
      D(this.#h, r);
    }
    #_ = /* @__PURE__ */ _(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return l(this.#_);
    }
    set nodesFocusable(r) {
      D(this.#_, r);
    }
    #w = /* @__PURE__ */ _(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return l(this.#w);
    }
    set edgesFocusable(r) {
      D(this.#w, r);
    }
    #b = /* @__PURE__ */ _(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return l(this.#b);
    }
    set disableKeyboardA11y(r) {
      D(this.#b, r);
    }
    #m = /* @__PURE__ */ _(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return l(this.#m);
    }
    set minZoom(r) {
      D(this.#m, r);
    }
    #v = /* @__PURE__ */ _(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return l(this.#v);
    }
    set maxZoom(r) {
      D(this.#v, r);
    }
    #p = /* @__PURE__ */ _(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return l(this.#p);
    }
    set nodeOrigin(r) {
      D(this.#p, r);
    }
    #y = /* @__PURE__ */ _(() => e.props.nodeExtent ?? si);
    get nodeExtent() {
      return l(this.#y);
    }
    set nodeExtent(r) {
      D(this.#y, r);
    }
    #x = /* @__PURE__ */ _(() => e.props.translateExtent ?? si);
    get translateExtent() {
      return l(this.#x);
    }
    set translateExtent(r) {
      D(this.#x, r);
    }
    #k = /* @__PURE__ */ _(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return l(this.#k);
    }
    set defaultEdgeOptions(r) {
      D(this.#k, r);
    }
    #E = /* @__PURE__ */ _(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return l(this.#E);
    }
    set nodeDragThreshold(r) {
      D(this.#E, r);
    }
    #S = /* @__PURE__ */ _(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return l(this.#S);
    }
    set autoPanOnNodeDrag(r) {
      D(this.#S, r);
    }
    #N = /* @__PURE__ */ _(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return l(this.#N);
    }
    set autoPanOnConnect(r) {
      D(this.#N, r);
    }
    #C = /* @__PURE__ */ _(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return l(this.#C);
    }
    set autoPanOnNodeFocus(r) {
      D(this.#C, r);
    }
    #P = /* @__PURE__ */ _(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return l(this.#P);
    }
    set autoPanSpeed(r) {
      D(this.#P, r);
    }
    #M = /* @__PURE__ */ _(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return l(this.#M);
    }
    set connectionDragThreshold(r) {
      D(this.#M, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #A = /* @__PURE__ */ _(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return l(this.#A);
    }
    set snapGrid(r) {
      D(this.#A, r);
    }
    #z = /* @__PURE__ */ se(!1);
    get dragging() {
      return l(this.#z);
    }
    set dragging(r) {
      D(this.#z, r);
    }
    #I = /* @__PURE__ */ se(null);
    get selectionRect() {
      return l(this.#I);
    }
    set selectionRect(r) {
      D(this.#I, r);
    }
    #T = /* @__PURE__ */ se(!1);
    get selectionKeyPressed() {
      return l(this.#T);
    }
    set selectionKeyPressed(r) {
      D(this.#T, r);
    }
    #D = /* @__PURE__ */ se(!1);
    get multiselectionKeyPressed() {
      return l(this.#D);
    }
    set multiselectionKeyPressed(r) {
      D(this.#D, r);
    }
    #O = /* @__PURE__ */ se(!1);
    get deleteKeyPressed() {
      return l(this.#O);
    }
    set deleteKeyPressed(r) {
      D(this.#O, r);
    }
    #R = /* @__PURE__ */ se(!1);
    get panActivationKeyPressed() {
      return l(this.#R);
    }
    set panActivationKeyPressed(r) {
      D(this.#R, r);
    }
    #L = /* @__PURE__ */ se(!1);
    get zoomActivationKeyPressed() {
      return l(this.#L);
    }
    set zoomActivationKeyPressed(r) {
      D(this.#L, r);
    }
    #H = /* @__PURE__ */ se(null);
    get selectionRectMode() {
      return l(this.#H);
    }
    set selectionRectMode(r) {
      D(this.#H, r);
    }
    #V = /* @__PURE__ */ se("");
    get ariaLiveMessage() {
      return l(this.#V);
    }
    set ariaLiveMessage(r) {
      D(this.#V, r);
    }
    #B = /* @__PURE__ */ _(() => e.props.selectionMode ?? eo.Partial);
    get selectionMode() {
      return l(this.#B);
    }
    set selectionMode(r) {
      D(this.#B, r);
    }
    #F = /* @__PURE__ */ _(() => ({ ...Ul, ...e.props.nodeTypes }));
    get nodeTypes() {
      return l(this.#F);
    }
    set nodeTypes(r) {
      D(this.#F, r);
    }
    #K = /* @__PURE__ */ _(() => ({ ...jl, ...e.props.edgeTypes }));
    get edgeTypes() {
      return l(this.#K);
    }
    set edgeTypes(r) {
      D(this.#K, r);
    }
    #Y = /* @__PURE__ */ _(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return l(this.#Y);
    }
    set noPanClass(r) {
      D(this.#Y, r);
    }
    #X = /* @__PURE__ */ _(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return l(this.#X);
    }
    set noDragClass(r) {
      D(this.#X, r);
    }
    #Z = /* @__PURE__ */ _(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return l(this.#Z);
    }
    set noWheelClass(r) {
      D(this.#Z, r);
    }
    #W = /* @__PURE__ */ _(() => Kg(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return l(this.#W);
    }
    set ariaLabelConfig(r) {
      D(this.#W, r);
    }
    #q = /* @__PURE__ */ se(n0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return l(this.#q);
    }
    set _viewport(r) {
      D(this.#q, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #G = (
      // _connection is viewport independent and originating from XYHandle
      /* @__PURE__ */ se(ai)
    );
    get _connection() {
      return l(this.#G);
    }
    set _connection(r) {
      D(this.#G, r);
    }
    #U = /* @__PURE__ */ _(() => this._connection.inProgress ? {
      ...this._connection,
      to: xr(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return l(this.#U);
    }
    set connection(r) {
      D(this.#U, r);
    }
    #j = /* @__PURE__ */ _(() => e.props.connectionMode ?? In.Strict);
    get connectionMode() {
      return l(this.#j);
    }
    set connectionMode(r) {
      D(this.#j, r);
    }
    #J = /* @__PURE__ */ _(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return l(this.#J);
    }
    set connectionRadius(r) {
      D(this.#J, r);
    }
    #Q = /* @__PURE__ */ _(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return l(this.#Q);
    }
    set isValidConnection(r) {
      D(this.#Q, r);
    }
    #$ = /* @__PURE__ */ _(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return l(this.#$);
    }
    set selectNodesOnDrag(r) {
      D(this.#$, r);
    }
    #ee = /* @__PURE__ */ _(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return l(this.#ee);
    }
    set defaultMarkerColor(r) {
      D(this.#ee, r);
    }
    #te = /* @__PURE__ */ _(() => ev(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return l(this.#te);
    }
    set markers(r) {
      D(this.#te, r);
    }
    #ne = /* @__PURE__ */ _(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return l(this.#ne);
    }
    set onlyRenderVisibleElements(r) {
      D(this.#ne, r);
    }
    #re = /* @__PURE__ */ _(() => e.props.onflowerror ?? Hg);
    get onerror() {
      return l(this.#re);
    }
    set onerror(r) {
      D(this.#re, r);
    }
    #oe = /* @__PURE__ */ _(() => e.props.ondelete);
    get ondelete() {
      return l(this.#oe);
    }
    set ondelete(r) {
      D(this.#oe, r);
    }
    #ie = /* @__PURE__ */ _(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return l(this.#ie);
    }
    set onbeforedelete(r) {
      D(this.#ie, r);
    }
    #se = /* @__PURE__ */ _(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return l(this.#se);
    }
    set onbeforeconnect(r) {
      D(this.#se, r);
    }
    #ae = /* @__PURE__ */ _(() => e.props.onconnect);
    get onconnect() {
      return l(this.#ae);
    }
    set onconnect(r) {
      D(this.#ae, r);
    }
    #le = /* @__PURE__ */ _(() => e.props.onconnectstart);
    get onconnectstart() {
      return l(this.#le);
    }
    set onconnectstart(r) {
      D(this.#le, r);
    }
    #ce = /* @__PURE__ */ _(() => e.props.onconnectend);
    get onconnectend() {
      return l(this.#ce);
    }
    set onconnectend(r) {
      D(this.#ce, r);
    }
    #ue = /* @__PURE__ */ _(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return l(this.#ue);
    }
    set onbeforereconnect(r) {
      D(this.#ue, r);
    }
    #de = /* @__PURE__ */ _(() => e.props.onreconnect);
    get onreconnect() {
      return l(this.#de);
    }
    set onreconnect(r) {
      D(this.#de, r);
    }
    #fe = /* @__PURE__ */ _(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return l(this.#fe);
    }
    set onreconnectstart(r) {
      D(this.#fe, r);
    }
    #he = /* @__PURE__ */ _(() => e.props.onreconnectend);
    get onreconnectend() {
      return l(this.#he);
    }
    set onreconnectend(r) {
      D(this.#he, r);
    }
    #ge = /* @__PURE__ */ _(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return l(this.#ge);
    }
    set clickConnect(r) {
      D(this.#ge, r);
    }
    #ve = /* @__PURE__ */ _(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return l(this.#ve);
    }
    set onclickconnectstart(r) {
      D(this.#ve, r);
    }
    #pe = /* @__PURE__ */ _(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return l(this.#pe);
    }
    set onclickconnectend(r) {
      D(this.#pe, r);
    }
    #me = /* @__PURE__ */ se(null);
    get clickConnectStartHandle() {
      return l(this.#me);
    }
    set clickConnectStartHandle(r) {
      D(this.#me, r);
    }
    #ye = /* @__PURE__ */ _(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return l(this.#ye);
    }
    set onselectiondrag(r) {
      D(this.#ye, r);
    }
    #_e = /* @__PURE__ */ _(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return l(this.#_e);
    }
    set onselectiondragstart(r) {
      D(this.#_e, r);
    }
    #we = /* @__PURE__ */ _(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return l(this.#we);
    }
    set onselectiondragstop(r) {
      D(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Rg(
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
    _prefersDark = new e0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ _(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return l(this.#be);
    }
    set colorMode(r) {
      D(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = ai, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Ht() {
  const e = hi(so);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const so = /* @__PURE__ */ Symbol();
function Jl(e) {
  const t = r0(e);
  function n(z) {
    t.nodeTypes = {
      ...Ul,
      ...z
    };
  }
  function r(z) {
    t.edgeTypes = {
      ...jl,
      ...z
    };
  }
  function o(z) {
    t.edges = Ug(z, t.edges);
  }
  const i = (z, k = !1) => {
    t.nodes = t.nodes.map((A) => {
      if (t.connection.inProgress && t.connection.fromNode.id === A.id) {
        const N = t.nodeLookup.get(A.id);
        N && (t.connection = {
          ...t.connection,
          from: hn(N, t.connection.fromHandle, Q.Left, !0)
        });
      }
      const y = z.get(A.id);
      return y ? { ...A, position: y.position, dragging: k } : A;
    });
  };
  function s(z) {
    const { changes: k, updatedInternals: A } = cv(z, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin, t.nodeExtent, t.zIndexMode);
    if (!A)
      return;
    rv(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent,
      zIndexMode: t.zIndexMode
    }), t.fitViewQueued && t.resolveFitView();
    const y = /* @__PURE__ */ new Map();
    for (const N of k) {
      const S = t.nodeLookup.get(N.id)?.internals.userNode;
      if (!S)
        continue;
      const T = { ...S };
      switch (N.type) {
        case "dimensions": {
          const Y = { ...T.measured, ...N.dimensions };
          N.setAttributes && (T.width = N.dimensions?.width ?? T.width, T.height = N.dimensions?.height ?? T.height), T.measured = Y;
          break;
        }
        case "position":
          T.position = N.position ?? T.position;
          break;
      }
      y.set(N.id, T);
    }
    t.nodes = t.nodes.map((N) => y.get(N.id) ?? N);
  }
  function a(z) {
    const k = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = z, t.fitViewResolver = k, t.nodes = [...t.nodes], k.promise;
  }
  async function c(z, k, A) {
    const y = typeof A?.zoom < "u" ? A.zoom : t.maxZoom, N = t.panZoom;
    return N ? (await N.setViewport({
      x: t.width / 2 - z * y,
      y: t.height / 2 - k * y,
      zoom: y
    }, { duration: A?.duration, ease: A?.ease, interpolate: A?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(z, k) {
    const A = t.panZoom;
    return A ? A.scaleBy(z, k) : Promise.resolve(!1);
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
    let A = !1;
    const y = z.map((N) => (k ? k.has(N.id) : !0) && N.selected ? (A = !0, { ...N, selected: !1 }) : N);
    return [A, y];
  }
  function m(z) {
    const k = z?.nodes ? new Set(z.nodes.map((Y) => Y.id)) : null, [A, y] = p(t.nodes, k);
    A && (t.nodes = y);
    const N = z?.edges ? new Set(z.edges.map((Y) => Y.id)) : null, [S, T] = p(t.edges, N);
    S && (t.edges = T);
  }
  function w(z) {
    const k = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((A) => {
      const y = z.includes(A.id), N = k && A.selected || y;
      return !!A.selected !== N ? { ...A, selected: N } : A;
    }), k || m({ nodes: [] });
  }
  function x(z) {
    const k = t.multiselectionKeyPressed;
    t.edges = t.edges.map((A) => {
      const y = z.includes(A.id), N = k && A.selected || y;
      return !!A.selected !== N ? { ...A, selected: N } : A;
    }), k || m({ edges: [] });
  }
  function E(z, k, A) {
    const y = t.nodeLookup.get(z);
    if (!y) {
      console.warn("012", lr.error012(z));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, y.selected ? (k || y.selected && t.multiselectionKeyPressed) && (m({ nodes: [y], edges: [] }), requestAnimationFrame(() => A?.blur())) : w([z]);
  }
  function b(z) {
    const k = t.edgeLookup.get(z);
    if (!k) {
      console.warn("012", lr.error012(z));
      return;
    }
    (k.selectable || t.elementsSelectable && typeof k.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, k.selected ? k.selected && t.multiselectionKeyPressed && m({ nodes: [], edges: [k] }) : x([z]));
  }
  function I(z, k) {
    const { nodeExtent: A, snapGrid: y, nodeOrigin: N, nodeLookup: S, nodesDraggable: T, onerror: Y } = t, H = /* @__PURE__ */ new Map(), P = y?.[0] ?? 5, V = y?.[1] ?? 5, X = z.x * P * k, R = z.y * V * k;
    for (const B of S.values()) {
      if (!(B.selected && (B.draggable || T && typeof B.draggable > "u")))
        continue;
      let q = {
        x: B.internals.positionAbsolute.x + X,
        y: B.internals.positionAbsolute.y + R
      };
      y && (q = br(q, y));
      const { position: U, positionAbsolute: j } = Sl({
        nodeId: B.id,
        nextPosition: q,
        nodeLookup: S,
        nodeExtent: A,
        nodeOrigin: N,
        onError: Y
      });
      B.position = U, B.internals.positionAbsolute = j, H.set(B.id, B);
    }
    i(H);
  }
  function C(z) {
    return uv({
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
  function M() {
    t._connection = ai;
  }
  function K() {
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
    addSelectedEdges: x,
    handleNodeSelection: E,
    handleEdgeSelection: b,
    moveSelectedNodes: I,
    panBy: C,
    updateConnection: L,
    cancelConnection: M,
    reset: K
  });
}
function o0(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: c, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: h } = t, f = Pv({
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
var i0 = /* @__PURE__ */ ee('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function s0(e, t) {
  oe(t, !0);
  let n = F(t, "store", 15), r = /* @__PURE__ */ _(() => n().panActivationKeyPressed || t.panOnDrag), o = /* @__PURE__ */ _(() => n().panActivationKeyPressed || t.panOnScroll);
  const { viewport: i } = n();
  let s = !1;
  Oe(() => {
    !s && n().viewportInitialized && (t.oninit?.(), s = !0);
  });
  var a = i0(), c = Z(a);
  Fe(c, () => t.children), Te(a, (u, d) => o0?.(u, d), () => ({
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
  })), O(e, a), ie();
}
function Hs(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Vs(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Bs(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var a0 = /* @__PURE__ */ ee("<div><!></div>");
function l0(e, t) {
  oe(t, !0);
  let n = F(t, "store", 15), r = F(t, "panOnDrag", 3, !0), o = F(t, "paneClickDistance", 3, 1), i, s = null, a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ _(() => n().panActivationKeyPressed || r()), d = /* @__PURE__ */ _(() => n().selectionKeyPressed || !!n().selectionRect || t.selectionOnDrag && l(u) !== !0), h = /* @__PURE__ */ _(() => n().elementsSelectable && (l(d) || n().selectionRectMode === "user")), f = !1;
  function g(M) {
    if (s = i?.getBoundingClientRect(), !s) return;
    const K = M.target === i, W = !K && !!M.target.closest(".nokey"), z = t.selectionOnDrag && K || n().selectionKeyPressed;
    if (W || !l(d) || !z || M.button !== 0 || !M.isPrimary)
      return;
    M.target?.setPointerCapture?.(M.pointerId), f = !1;
    const { x: k, y: A } = ct(M, s);
    n(n().selectionRect = { width: 0, height: 0, startX: k, startY: A, x: k, y: A }, !0), K || (M.stopPropagation(), M.preventDefault());
  }
  function v(M) {
    if (!l(d) || !s || !n().selectionRect)
      return;
    const K = ct(M, s), { startX: W = 0, startY: z = 0 } = n().selectionRect;
    if (!f) {
      const S = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(K.x - W, K.y - z) <= S)
        return;
      n().unselectNodesAndEdges(), t.onselectionstart?.(M);
    }
    f = !0;
    const k = {
      ...n().selectionRect,
      x: K.x < W ? K.x : W,
      y: K.y < z ? K.y : z,
      width: Math.abs(K.x - W),
      height: Math.abs(K.y - z)
    }, A = a, y = c;
    a = new Set(Ai(
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
    const N = n().defaultEdgeOptions.selectable ?? !0;
    c = /* @__PURE__ */ new Set();
    for (const S of a) {
      const T = n().connectionLookup.get(S);
      if (T)
        for (const { edgeId: Y } of T.values()) {
          const H = n().edgeLookup.get(Y);
          H && (H.selectable ?? N) && c.add(Y);
        }
    }
    Bs(A, a) || n(n().nodes = n().nodes.map(Vs(a)), !0), Bs(y, c) || n(n().edges = n().edges.map(Vs(c)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = k, !0);
  }
  function p(M) {
    M.button === 0 && (M.target?.releasePointerCapture?.(M.pointerId), !f && M.target === i && x?.(M), n(n().selectionRect = null, !0), f && n(n().selectionRectMode = a.size > 0 ? "nodes" : null, !0), f && t.onselectionend?.(M));
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
  function x(M) {
    if (f || n().connection.inProgress) {
      f = !1;
      return;
    }
    t.onpaneclick?.({ event: M }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var E = a0();
  let b;
  var I = /* @__PURE__ */ _(() => l(h) ? void 0 : Hs(x, i));
  E.__click = function(...M) {
    l(I)?.apply(this, M);
  }, E.__pointermove = function(...M) {
    (l(h) ? v : void 0)?.apply(this, M);
  }, E.__pointerup = function(...M) {
    (l(h) ? p : void 0)?.apply(this, M);
  };
  var C = /* @__PURE__ */ _(() => Hs(m, i));
  E.__contextmenu = function(...M) {
    l(C)?.apply(this, M);
  };
  var L = Z(E);
  Fe(L, () => t.children), Kn(E, (M) => i = M, () => i), ue((M) => b = Ce(E, 1, "svelte-flow__pane svelte-flow__container", null, b, M), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: l(d)
    })
  ]), cn(
    "pointerdown",
    E,
    function(...M) {
      (l(h) ? g : void 0)?.apply(this, M);
    },
    !0
  ), cn(
    "click",
    E,
    function(...M) {
      (l(h) ? w : void 0)?.apply(this, M);
    },
    !0
  ), O(e, E), ie();
}
Ut(["click", "pointermove", "pointerup", "contextmenu"]);
var c0 = /* @__PURE__ */ ee('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function u0(e, t) {
  oe(t, !0);
  var n = c0();
  let r;
  var o = Z(n);
  Fe(o, () => t.children), ue(() => r = Ke(n, "", r, {
    transform: `translate(${t.store.viewport.x ?? ""}px, ${t.store.viewport.y ?? ""}px) scale(${t.store.viewport.zoom ?? ""})`
  })), O(e, n), ie();
}
function Ql(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = gv({
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
var d0 = /* @__PURE__ */ ee('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-13pq11u"> </div>'), f0 = /* @__PURE__ */ ee('<div class="a11y-hidden svelte-13pq11u"> </div> <div class="a11y-hidden svelte-13pq11u"> </div> <!>', 1);
function h0(e, t) {
  oe(t, !0);
  var n = f0(), r = $(n), o = Z(r), i = J(r, 2), s = Z(i), a = J(i, 2);
  {
    var c = (u) => {
      var d = d0(), h = Z(d);
      ue(() => {
        re(d, "id", `${g0}-${t.store.flowId}`), xe(h, t.store.ariaLiveMessage);
      }), O(u, d);
    };
    le(a, (u) => {
      t.store.disableKeyboardA11y || u(c);
    });
  }
  ue(() => {
    re(r, "id", `${$l}-${t.store.flowId}`), xe(o, t.store.disableKeyboardA11y ? t.store.ariaLabelConfig["node.a11yDescription.default"] : t.store.ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), re(i, "id", `${ec}-${t.store.flowId}`), xe(s, t.store.ariaLabelConfig["edge.a11yDescription.default"]);
  }), O(e, n), ie();
}
const $l = "svelte-flow__node-desc", ec = "svelte-flow__edge-desc", g0 = "svelte-flow__aria-live";
var v0 = /* @__PURE__ */ ee("<div><!></div>");
function p0(e, t) {
  oe(t, !0);
  let n = F(t, "store", 15), r = /* @__PURE__ */ _(() => Ie(t.node.data, () => ({}), !0)), o = /* @__PURE__ */ _(() => Ie(t.node.selected, !1)), i = /* @__PURE__ */ _(() => t.node.draggable), s = /* @__PURE__ */ _(() => t.node.selectable), a = /* @__PURE__ */ _(() => Ie(t.node.deletable, !0)), c = /* @__PURE__ */ _(() => t.node.connectable), u = /* @__PURE__ */ _(() => t.node.focusable), d = /* @__PURE__ */ _(() => Ie(t.node.hidden, !1)), h = /* @__PURE__ */ _(() => Ie(t.node.dragging, !1)), f = /* @__PURE__ */ _(() => Ie(t.node.style, "")), g = /* @__PURE__ */ _(() => t.node.class), v = /* @__PURE__ */ _(() => Ie(t.node.type, "default")), p = /* @__PURE__ */ _(() => t.node.parentId), m = /* @__PURE__ */ _(() => t.node.sourcePosition), w = /* @__PURE__ */ _(() => t.node.targetPosition), x = /* @__PURE__ */ _(() => Ie(t.node.measured, () => ({ width: 0, height: 0 }), !0).width), E = /* @__PURE__ */ _(() => Ie(t.node.measured, () => ({ width: 0, height: 0 }), !0).height), b = /* @__PURE__ */ _(() => t.node.initialWidth), I = /* @__PURE__ */ _(() => t.node.initialHeight), C = /* @__PURE__ */ _(() => t.node.width), L = /* @__PURE__ */ _(() => t.node.height), M = /* @__PURE__ */ _(() => t.node.dragHandle), K = /* @__PURE__ */ _(() => Ie(t.node.internals.z, 0)), W = /* @__PURE__ */ _(() => t.node.internals.positionAbsolute.x), z = /* @__PURE__ */ _(() => t.node.internals.positionAbsolute.y), k = /* @__PURE__ */ _(() => t.node.internals.userNode), { id: A } = t.node, y = /* @__PURE__ */ _(() => l(i) ?? n().nodesDraggable), N = /* @__PURE__ */ _(() => l(s) ?? n().elementsSelectable), S = /* @__PURE__ */ _(() => l(c) ?? n().nodesConnectable), T = /* @__PURE__ */ _(() => Ml(t.node)), Y = /* @__PURE__ */ _(() => !!t.node.internals.handleBounds), H = /* @__PURE__ */ _(() => l(T) && l(Y)), P = /* @__PURE__ */ _(() => l(u) ?? n().nodesFocusable);
  function V(ge) {
    return n().parentLookup.has(ge);
  }
  let X = /* @__PURE__ */ _(() => V(A)), R = /* @__PURE__ */ se(null), B = null, G = l(v), q = l(m), U = l(w), j = /* @__PURE__ */ _(() => n().nodeTypes[l(v)] ?? ql), ne = /* @__PURE__ */ _(() => n().ariaLabelConfig), he = {
    get value() {
      return l(S);
    }
  };
  Mv(A), zv(he);
  let te = /* @__PURE__ */ _(() => {
    const ge = l(x) === void 0 ? l(C) ?? l(b) : l(C), Ee = l(E) === void 0 ? l(L) ?? l(I) : l(L);
    if (!(ge === void 0 && Ee === void 0 && l(f) === void 0))
      return `${l(f)};${ge ? `width:${xt(ge)};` : ""}${Ee ? `height:${xt(Ee)};` : ""}`;
  });
  Oe(() => {
    (l(v) !== G || l(m) !== q || l(w) !== U) && l(R) !== null && requestAnimationFrame(() => {
      l(R) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[A, { id: A, nodeElement: l(R), force: !0 }]]));
    }), G = l(v), q = l(m), U = l(w);
  }), Oe(() => {
    t.resizeObserver && (!l(H) || l(R) !== B) && (B && t.resizeObserver.unobserve(B), l(R) && t.resizeObserver.observe(l(R)), B = l(R));
  }), yo(() => {
    B && t.resizeObserver?.unobserve(B);
  });
  function pe(ge) {
    l(N) && (!n().selectNodesOnDrag || !l(y) || n().nodeDragThreshold > 0) && n().handleNodeSelection(A), t.onnodeclick?.({ node: l(k), event: ge });
  }
  function ae(ge) {
    if (!(Il(ge) || n().disableKeyboardA11y))
      if (xl.includes(ge.key) && l(N)) {
        const Ee = ge.key === "Escape";
        n().handleNodeSelection(A, Ee, l(R));
      } else l(y) && t.node.selected && Object.prototype.hasOwnProperty.call(io, ge.key) && (ge.preventDefault(), n(
        n().ariaLiveMessage = l(ne)["node.a11yDescription.ariaLiveMessage"]({
          direction: ge.key.replace("Arrow", "").toLowerCase(),
          x: ~~t.node.internals.positionAbsolute.x,
          y: ~~t.node.internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(io[ge.key], ge.shiftKey ? 4 : 1));
  }
  const be = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !l(R)?.matches(":focus-visible"))
      return;
    const { width: ge, height: Ee, viewport: it } = n();
    Ai(/* @__PURE__ */ new Map([[A, t.node]]), { x: 0, y: 0, width: ge, height: Ee }, [it.x, it.y, it.zoom], !0).length > 0 || n().setCenter(t.node.position.x + (t.node.measured.width ?? 0) / 2, t.node.position.y + (t.node.measured.height ?? 0) / 2, { zoom: it.zoom });
  };
  var Je = ce(), Qe = $(Je);
  {
    var Xe = (ge) => {
      var Ee = v0();
      bt(Ee, () => ({
        "data-id": A,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${l(v)}`,
          l(g)
        ],
        style: l(te),
        onclick: pe,
        onpointerenter: t.onnodepointerenter ? (ye) => t.onnodepointerenter({ node: l(k), event: ye }) : void 0,
        onpointerleave: t.onnodepointerleave ? (ye) => t.onnodepointerleave({ node: l(k), event: ye }) : void 0,
        onpointermove: t.onnodepointermove ? (ye) => t.onnodepointermove({ node: l(k), event: ye }) : void 0,
        oncontextmenu: t.onnodecontextmenu ? (ye) => t.onnodecontextmenu({ node: l(k), event: ye }) : void 0,
        onkeydown: l(P) ? ae : void 0,
        onfocus: l(P) ? be : void 0,
        tabIndex: l(P) ? 0 : void 0,
        role: t.node.ariaRole ?? (l(P) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${$l}-${n().flowId}`,
        ...t.node.domAttributes,
        [Bt]: {
          dragging: l(h),
          selected: l(o),
          draggable: l(y),
          connectable: l(S),
          selectable: l(N),
          nopan: l(y),
          parent: l(X)
        },
        [Pt]: {
          "z-index": l(K),
          transform: `translate(${l(W) ?? ""}px, ${l(z) ?? ""}px)`,
          visibility: l(T) ? "visible" : "hidden"
        }
      }));
      var it = Z(Ee);
      Fn(it, () => l(j), (ye, pn) => {
        pn(ye, {
          get data() {
            return l(r);
          },
          get id() {
            return A;
          },
          get selected() {
            return l(o);
          },
          get selectable() {
            return l(N);
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
            return l(K);
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
            return l(S);
          },
          get positionAbsoluteX() {
            return l(W);
          },
          get positionAbsoluteY() {
            return l(z);
          },
          get width() {
            return l(C);
          },
          get height() {
            return l(L);
          }
        });
      }), Te(Ee, (ye, pn) => Ql?.(ye, pn), () => ({
        nodeId: A,
        isSelectable: l(N),
        disabled: !l(y),
        handleSelector: l(M),
        noDragClass: n().noDragClass,
        nodeClickDistance: t.nodeClickDistance,
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (ye, pn, Yn, Xn) => {
          t.onnodedrag?.({ event: ye, targetNode: Yn, nodes: Xn });
        },
        onDragStart: (ye, pn, Yn, Xn) => {
          t.onnodedragstart?.({ event: ye, targetNode: Yn, nodes: Xn });
        },
        onDragStop: (ye, pn, Yn, Xn) => {
          t.onnodedragstop?.({ event: ye, targetNode: Yn, nodes: Xn });
        },
        store: n()
      })), Kn(Ee, (ye) => D(R, ye), () => l(R)), O(ge, Ee);
    };
    le(Qe, (ge) => {
      l(d) || ge(Xe);
    });
  }
  O(e, Je), ie();
}
var m0 = /* @__PURE__ */ ee('<div class="svelte-flow__nodes"></div>');
function y0(e, t) {
  oe(t, !0);
  let n = F(t, "store", 15);
  const r = typeof ResizeObserver > "u" ? null : new ResizeObserver((i) => {
    const s = /* @__PURE__ */ new Map();
    i.forEach((a) => {
      const c = a.target.getAttribute("data-id");
      s.set(c, { id: c, nodeElement: a.target, force: !0 });
    }), n().updateNodeInternals(s);
  });
  yo(() => {
    r?.disconnect();
  });
  var o = m0();
  Ot(o, 21, () => n().visible.nodes.values(), (i) => i.id, (i, s) => {
    p0(i, {
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
  }), O(e, o), ie();
}
var _0 = /* @__PURE__ */ we('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function w0(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ _(() => t.edge.id), r = /* @__PURE__ */ _(() => t.edge.source), o = /* @__PURE__ */ _(() => t.edge.target), i = /* @__PURE__ */ _(() => t.edge.sourceX), s = /* @__PURE__ */ _(() => t.edge.sourceY), a = /* @__PURE__ */ _(() => t.edge.targetX), c = /* @__PURE__ */ _(() => t.edge.targetY), u = /* @__PURE__ */ _(() => t.edge.sourcePosition), d = /* @__PURE__ */ _(() => t.edge.targetPosition), h = /* @__PURE__ */ _(() => Ie(t.edge.animated, !1)), f = /* @__PURE__ */ _(() => Ie(t.edge.selected, !1)), g = /* @__PURE__ */ _(() => t.edge.label), v = /* @__PURE__ */ _(() => t.edge.labelStyle), p = /* @__PURE__ */ _(() => Ie(t.edge.data, () => ({}), !0)), m = /* @__PURE__ */ _(() => t.edge.style), w = /* @__PURE__ */ _(() => t.edge.interactionWidth), x = /* @__PURE__ */ _(() => Ie(t.edge.type, "default")), E = /* @__PURE__ */ _(() => t.edge.sourceHandle), b = /* @__PURE__ */ _(() => t.edge.targetHandle), I = /* @__PURE__ */ _(() => t.edge.markerStart), C = /* @__PURE__ */ _(() => t.edge.markerEnd), L = /* @__PURE__ */ _(() => t.edge.selectable), M = /* @__PURE__ */ _(() => t.edge.focusable), K = /* @__PURE__ */ _(() => Ie(t.edge.deletable, !0)), W = /* @__PURE__ */ _(() => t.edge.hidden), z = /* @__PURE__ */ _(() => t.edge.zIndex), k = /* @__PURE__ */ _(() => t.edge.class), A = /* @__PURE__ */ _(() => t.edge.ariaLabel);
  Tv(l(n));
  let y = null, N = /* @__PURE__ */ _(() => l(L) ?? t.store.elementsSelectable), S = /* @__PURE__ */ _(() => l(M) ?? t.store.edgesFocusable), T = /* @__PURE__ */ _(() => t.store.edgeTypes[l(x)] ?? Gl), Y = /* @__PURE__ */ _(() => l(I) ? `url('#${ci(l(I), t.store.flowId)}')` : void 0), H = /* @__PURE__ */ _(() => l(C) ? `url('#${ci(l(C), t.store.flowId)}')` : void 0);
  function P(q) {
    const U = t.store.edgeLookup.get(l(n));
    U && (l(N) && t.store.handleEdgeSelection(l(n)), t.onedgeclick?.({ event: q, edge: U }));
  }
  function V(q, U) {
    const j = t.store.edgeLookup.get(l(n));
    j && U({ event: q, edge: j });
  }
  function X(q) {
    if (!t.store.disableKeyboardA11y && xl.includes(q.key) && l(N)) {
      const { unselectNodesAndEdges: U, addSelectedEdges: j } = t.store;
      q.key === "Escape" ? (y?.blur(), U({ edges: [t.edge] })) : j([l(n)]);
    }
  }
  var R = ce(), B = $(R);
  {
    var G = (q) => {
      var U = _0();
      let j;
      var ne = Z(U);
      bt(ne, () => ({
        class: ["svelte-flow__edge", l(k)],
        "data-id": l(n),
        onclick: P,
        oncontextmenu: t.onedgecontextmenu ? (te) => {
          V(te, t.onedgecontextmenu);
        } : void 0,
        onpointerenter: t.onedgepointerenter ? (te) => {
          V(te, t.onedgepointerenter);
        } : void 0,
        onpointerleave: t.onedgepointerleave ? (te) => {
          V(te, t.onedgepointerleave);
        } : void 0,
        "aria-label": l(A) === null ? void 0 : l(A) ? l(A) : `Edge from ${l(r)} to ${l(o)}`,
        "aria-describedby": l(S) ? `${ec}-${t.store.flowId}` : void 0,
        role: t.edge.ariaRole ?? (l(S) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: l(S) ? X : void 0,
        tabindex: l(S) ? 0 : void 0,
        ...t.edge.domAttributes,
        [Bt]: {
          animated: l(h),
          selected: l(f),
          selectable: l(N)
        }
      }));
      var he = Z(ne);
      Fn(he, () => l(T), (te, pe) => {
        pe(te, {
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
            return l(N);
          },
          get deletable() {
            return l(K);
          },
          get type() {
            return l(x);
          },
          get sourceHandleId() {
            return l(E);
          },
          get targetHandleId() {
            return l(b);
          },
          get markerStart() {
            return l(Y);
          },
          get markerEnd() {
            return l(H);
          }
        });
      }), Kn(ne, (te) => y = te, () => y), ue(() => j = Ke(U, "", j, { "z-index": l(z) })), O(q, U);
    };
    le(B, (q) => {
      l(W) || q(G);
    });
  }
  O(e, R), ie();
}
Rc();
var b0 = /* @__PURE__ */ we("<defs></defs>");
function x0(e, t) {
  oe(t, !1);
  const n = Ht();
  Wa();
  var r = b0();
  Ot(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    N0(o, _e(() => l(i)));
  }), O(e, r), ie();
}
var k0 = /* @__PURE__ */ we('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), E0 = /* @__PURE__ */ we('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), S0 = /* @__PURE__ */ we('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function N0(e, t) {
  oe(t, !0);
  let n = F(t, "width", 3, 12.5), r = F(t, "height", 3, 12.5), o = F(t, "markerUnits", 3, "strokeWidth"), i = F(t, "orient", 3, "auto-start-reverse"), s = F(t, "color", 3, "none");
  var a = S0(), c = Z(a);
  {
    var u = (h) => {
      var f = k0();
      let g;
      ue(() => {
        re(f, "stroke-width", t.strokeWidth), g = Ke(f, "", g, { stroke: s() });
      }), O(h, f);
    }, d = (h) => {
      var f = ce(), g = $(f);
      {
        var v = (p) => {
          var m = E0();
          let w;
          ue(() => {
            re(m, "stroke-width", t.strokeWidth), w = Ke(m, "", w, { stroke: s(), fill: s() });
          }), O(p, m);
        };
        le(
          g,
          (p) => {
            t.type === to.ArrowClosed && p(v);
          },
          !0
        );
      }
      O(h, f);
    };
    le(c, (h) => {
      t.type === to.Arrow ? h(u) : h(d, !1);
    });
  }
  ue(() => {
    re(a, "id", t.id), re(a, "markerWidth", `${n()}`), re(a, "markerHeight", `${r()}`), re(a, "markerUnits", o()), re(a, "orient", i());
  }), O(e, a), ie();
}
var C0 = /* @__PURE__ */ ee('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function P0(e, t) {
  oe(t, !0);
  let n = F(t, "store", 15);
  var r = C0(), o = Z(r), i = Z(o);
  x0(i, {});
  var s = J(o, 2);
  Ot(s, 17, () => n().visible.edges.values(), (a) => a.id, (a, c) => {
    w0(a, {
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
  }), O(e, r), ie();
}
var M0 = /* @__PURE__ */ ee('<div class="svelte-flow__selection svelte-1vr3gfi"></div>');
function tc(e, t) {
  oe(t, !0);
  let n = F(t, "x", 3, 0), r = F(t, "y", 3, 0), o = F(t, "width", 3, 0), i = F(t, "height", 3, 0), s = F(t, "isVisible", 3, !0);
  var a = ce(), c = $(a);
  {
    var u = (d) => {
      var h = M0();
      let f;
      ue((g) => f = Ke(h, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : xt(o()),
          height: typeof i() == "string" ? i() : xt(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), O(d, h);
    };
    le(c, (d) => {
      s() && d(u);
    });
  }
  O(e, a), ie();
}
var A0 = /* @__PURE__ */ ee("<div><!></div>");
function z0(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ se(void 0);
  Oe(() => {
    t.store.disableKeyboardA11y || l(n)?.focus({ preventScroll: !0 });
  });
  let r = /* @__PURE__ */ _(() => {
    if (t.store.selectionRectMode === "nodes") {
      t.store.nodes;
      const d = wr(t.store.nodeLookup, { filter: (h) => !!h.selected });
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
    Object.prototype.hasOwnProperty.call(io, d.key) && (d.preventDefault(), t.store.moveSelectedNodes(io[d.key], d.shiftKey ? 4 : 1));
  }
  var a = ce(), c = $(a);
  {
    var u = (d) => {
      var h = A0();
      h.__contextmenu = o, h.__click = i, h.__keydown = function(...v) {
        (t.store.disableKeyboardA11y ? void 0 : s)?.apply(this, v);
      };
      let f;
      var g = Z(h);
      tc(g, { width: "100%", height: "100%", x: 0, y: 0 }), Te(h, (v, p) => Ql?.(v, p), () => ({
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
      })), Kn(h, (v) => D(n, v), () => l(n)), ue(
        (v) => {
          Ce(h, 1, jt(["svelte-flow__selection-wrapper", t.store.noPanClass]), "svelte-sf2y5e"), re(h, "role", t.store.disableKeyboardA11y ? void 0 : "button"), re(h, "tabindex", t.store.disableKeyboardA11y ? void 0 : -1), f = Ke(h, "", f, v);
        },
        [
          () => ({
            width: xt(l(r).width),
            height: xt(l(r).height),
            transform: `translate(${l(r).x ?? ""}px, ${l(r).y ?? ""}px)`
          })
        ]
      ), O(d, h);
    };
    le(c, (d) => {
      t.store.selectionRectMode === "nodes" && l(r) && zt(l(r).x) && zt(l(r).y) && d(u);
    });
  }
  O(e, a), ie();
}
Ut(["contextmenu", "click", "keydown"]);
function I0(e) {
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
          const x = Array.isArray(f) ? f : [f];
          let E = !1;
          for (const b of x)
            if ((Array.isArray(b) ? b : [b]).reduce(
              (C, L) => C | I0(L),
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
  return n && (s = Go(e, o, i)), {
    update: (a) => {
      const { enabled: c = !0, type: u = "keydown" } = a;
      n && (!c || o !== u) ? s?.() : !n && c && (s = Go(e, u, i)), n = c, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function nc() {
  const e = /* @__PURE__ */ _(Ht), t = (i) => {
    const s = Rs(i) ? i : l(e).nodeLookup.get(i.id), a = s.parentId ? Fg(s.position, s.measured, s.parentId, l(e).nodeLookup, l(e).nodeOrigin) : s.position, c = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Dn(c);
  };
  function n(i, s, a = { replace: !1 }) {
    l(e).nodes = ke(() => l(e).nodes).map((c) => {
      if (c.id === i) {
        const u = typeof s == "function" ? s(c) : s;
        return a?.replace && Rs(u) ? u : { ...c, ...u };
      }
      return c;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    l(e).edges = ke(() => l(e).edges).map((c) => {
      if (c.id === i) {
        const u = typeof s == "function" ? s(c) : s;
        return a.replace && Yv(u) ? u : { ...c, ...u };
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
    getNodes: (i) => i === void 0 ? l(e).nodes : Fs(l(e).nodeLookup, i),
    getEdge: (i) => l(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? l(e).edges : Fs(l(e).edgeLookup, i),
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
    getViewport: () => oa(l(e).viewport),
    setCenter: async (i, s, a) => l(e).setCenter(i, s, a),
    fitView: (i) => l(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!l(e).panZoom)
        return Promise.resolve(!1);
      const a = zi(i, l(e).width, l(e).height, l(e).minZoom, l(e).maxZoom, s?.padding ?? 0.1);
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
      const c = Es(i), u = c ? i : t(i);
      return u ? (a || l(e).nodes).filter((d) => {
        const h = l(e).nodeLookup.get(d.id);
        if (!h || !c && d.id === i.id)
          return !1;
        const f = Dn(h), g = cr(f, u);
        return s && g > 0 || g >= f.width * f.height || g >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const u = Es(i) ? i : t(i);
      if (!u)
        return !1;
      const d = cr(u, s);
      return a && d > 0 || d >= s.width * s.height || d >= u.width * u.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: c } = await Lg({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: l(e).nodes,
        edges: l(e).edges,
        onBeforeDelete: l(e).onbeforedelete
      });
      return a && (l(e).nodes = ke(() => l(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), c && (l(e).edges = ke(() => l(e).edges).filter((u) => !c.some(({ id: d }) => d === u.id))), (a.length > 0 || c.length > 0) && l(e).ondelete?.({ nodes: a, edges: c }), { deletedNodes: a, deletedEdges: c };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!l(e).domNode)
        return i;
      const a = s.snapToGrid ? l(e).snapGrid : !1, { x: c, y: u, zoom: d } = l(e).viewport, { x: h, y: f } = l(e).domNode.getBoundingClientRect(), g = { x: i.x - h, y: i.y - f };
      return xr(g, [c, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!l(e).domNode)
        return i;
      const { x: s, y: a, zoom: c } = l(e).viewport, { x: u, y: d } = l(e).domNode.getBoundingClientRect(), h = oo(i, [s, a, c]);
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
    getNodesBounds: (i) => Tg(i, {
      nodeLookup: l(e).nodeLookup,
      nodeOrigin: l(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(l(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Fs(e, t) {
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
function T0(e, t) {
  oe(t, !0);
  let n = F(t, "store", 15), r = F(t, "selectionKey", 3, "Shift"), o = F(t, "multiSelectionKey", 19, () => ur() ? "Meta" : "Control"), i = F(t, "deleteKey", 3, "Backspace"), s = F(t, "panActivationKey", 3, " "), a = F(t, "zoomActivationKey", 19, () => ur() ? "Meta" : "Control"), { deleteElements: c } = nc();
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
    c({ nodes: p, edges: m });
  }
  cn("blur", Le, g), cn("contextmenu", Le, g), Te(Le, (p, m) => ft?.(p, m), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Te(Le, (p, m) => ft?.(p, m), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Te(Le, (p, m) => ft?.(p, m), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Te(Le, (p, m) => ft?.(p, m), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Te(Le, (p, m) => ft?.(p, m), () => ({
    trigger: f(i(), (p) => {
      !(p.originalEvent.ctrlKey || p.originalEvent.metaKey || p.originalEvent.shiftKey) && !Il(p.originalEvent) && (n(n().deleteKeyPressed = !0, !0), v());
    }),
    type: "keydown"
  })), Te(Le, (p, m) => ft?.(p, m), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Te(Le, (p, m) => ft?.(p, m), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Te(Le, (p, m) => ft?.(p, m), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Te(Le, (p, m) => ft?.(p, m), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Te(Le, (p, m) => ft?.(p, m), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ie();
}
var D0 = /* @__PURE__ */ we('<path fill="none" class="svelte-flow__connection-path"></path>'), O0 = /* @__PURE__ */ we('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function R0(e, t) {
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
      case Ft.Bezier: {
        const [a] = Dl(s);
        return a;
      }
      case Ft.Straight: {
        const [a] = Rl(s);
        return a;
      }
      case Ft.Step:
      case Ft.SmoothStep: {
        const [a] = Ii({
          ...s,
          borderRadius: t.type === Ft.Step ? 0 : void 0
        });
        return a;
      }
    }
  });
  var r = ce(), o = $(r);
  {
    var i = (s) => {
      var a = O0(), c = Z(a), u = Z(c);
      {
        var d = (f) => {
          var g = ce(), v = $(g);
          Fn(v, () => t.LineComponent, (p, m) => {
            m(p, {});
          }), O(f, g);
        }, h = (f) => {
          var g = D0();
          ue(() => {
            re(g, "d", l(n)), Ke(g, t.style);
          }), O(f, g);
        };
        le(u, (f) => {
          t.LineComponent ? f(d) : f(h, !1);
        });
      }
      ue(
        (f) => {
          re(a, "width", t.store.width), re(a, "height", t.store.height), Ke(a, t.containerStyle), Ce(c, 0, f);
        },
        [
          () => jt([
            "svelte-flow__connection",
            zg(t.store.connection.isValid)
          ])
        ]
      ), O(s, a);
    };
    le(o, (s) => {
      t.store.connection.inProgress && s(i);
    });
  }
  O(e, r), ie();
}
var L0 = /* @__PURE__ */ ee("<div><!></div>");
function Hi(e, t) {
  oe(t, !0);
  let n = F(t, "position", 3, "top-right"), r = /* @__PURE__ */ Jt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "position",
    "style",
    "class",
    "children"
  ]), o = /* @__PURE__ */ _(() => `${n()}`.split("-"));
  var i = L0();
  bt(i, (a) => ({ class: a, style: t.style, ...r }), [
    () => [
      "svelte-flow__panel",
      t.class,
      ...l(o)
    ]
  ]);
  var s = Z(i);
  Fe(s, () => t.children ?? We), O(e, i), ie();
}
var H0 = /* @__PURE__ */ ee('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function V0(e, t) {
  oe(t, !0);
  let n = F(t, "position", 3, "bottom-right");
  var r = ce(), o = $(r);
  {
    var i = (s) => {
      Hi(s, {
        get position() {
          return n();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (a, c) => {
          var u = H0();
          O(a, u);
        },
        $$slots: { default: !0 }
      });
    };
    le(o, (s) => {
      t.proOptions?.hideAttribution || s(i);
    });
  }
  O(e, r), ie();
}
var B0 = /* @__PURE__ */ ee("<div><!></div>");
function F0(e, t) {
  oe(t, !0);
  let n = F(t, "domNode", 15), r = F(t, "clientWidth", 15), o = F(t, "clientHeight", 15), i = /* @__PURE__ */ _(() => t.rest.class), s = /* @__PURE__ */ _(() => du(t.rest, [
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
  var c = B0();
  bt(
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
  var u = Z(c);
  Fe(u, () => t.children ?? We), Kn(c, (d) => n(d), () => n()), Wr(c, "clientHeight", o), Wr(c, "clientWidth", r), O(e, c), ie();
}
var K0 = /* @__PURE__ */ ee('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Y0 = /* @__PURE__ */ ee("<!> <!>", 1), X0 = /* @__PURE__ */ ee("<!> <!> <!> <!> <!>", 1);
function Z0(e, t) {
  oe(t, !0);
  let n = F(t, "paneClickDistance", 3, 1), r = F(t, "nodeClickDistance", 3, 1), o = F(t, "panOnScrollMode", 19, () => Nn.Free), i = F(t, "preventScrolling", 3, !0), s = F(t, "zoomOnScroll", 3, !0), a = F(t, "zoomOnDoubleClick", 3, !0), c = F(t, "zoomOnPinch", 3, !0), u = F(t, "panOnScroll", 3, !1), d = F(t, "panOnScrollSpeed", 3, 0.5), h = F(t, "panOnDrag", 3, !0), f = F(t, "selectionOnDrag", 3, !1), g = F(t, "connectionLineType", 19, () => Ft.Bezier), v = F(t, "nodes", 31, () => gt([])), p = F(t, "edges", 31, () => gt([])), m = F(t, "viewport", 15, void 0), w = /* @__PURE__ */ Jt(t, [
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
  ]), x = Jl({
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
  const E = hi(so);
  E && E.setStore && E.setStore(x), gi(so, {
    provider: !1,
    getStore() {
      return x;
    }
  }), Oe(() => {
    const b = { nodes: x.selectedNodes, edges: x.selectedEdges };
    ke(() => t.onselectionchange)?.(b);
    for (const I of x.selectionChangeHandlers.values())
      I(b);
  }), yo(() => {
    x.reset();
  }), F0(e, {
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
    children: (b, I) => {
      var C = X0(), L = $(C);
      T0(L, {
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
      var M = J(L, 2);
      s0(M, {
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
          return x;
        },
        set store(k) {
          x = k;
        },
        children: (k, A) => {
          l0(k, {
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
            children: (y, N) => {
              var S = Y0(), T = $(S);
              u0(T, {
                get store() {
                  return x;
                },
                set store(H) {
                  x = H;
                },
                children: (H, P) => {
                  var V = K0(), X = J($(V), 2);
                  P0(X, {
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
                  var R = J(X, 4);
                  R0(R, {
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
                  var B = J(R, 2);
                  y0(B, {
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
                  var G = J(B, 2);
                  z0(G, {
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
                  }), O(H, V);
                },
                $$slots: { default: !0 }
              });
              var Y = J(T, 2);
              {
                let H = /* @__PURE__ */ _(() => !!(x.selectionRect && x.selectionRectMode === "user")), P = /* @__PURE__ */ _(() => x.selectionRect?.width), V = /* @__PURE__ */ _(() => x.selectionRect?.height), X = /* @__PURE__ */ _(() => x.selectionRect?.x), R = /* @__PURE__ */ _(() => x.selectionRect?.y);
                tc(Y, {
                  get isVisible() {
                    return l(H);
                  },
                  get width() {
                    return l(P);
                  },
                  get height() {
                    return l(V);
                  },
                  get x() {
                    return l(X);
                  },
                  get y() {
                    return l(R);
                  }
                });
              }
              O(y, S);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var K = J(M, 2);
      V0(K, {
        get proOptions() {
          return t.proOptions;
        },
        get position() {
          return t.attributionPosition;
        }
      });
      var W = J(K, 2);
      h0(W, {
        get store() {
          return x;
        }
      });
      var z = J(W, 2);
      Fe(z, () => t.children ?? We), O(b, C);
    },
    $$slots: { default: !0 }
  }), ie();
}
function W0(e, t) {
  oe(t, !0);
  let n = /* @__PURE__ */ se(Jl({ props: {}, nodes: [], edges: [] }));
  gi(so, {
    provider: !0,
    getStore() {
      return l(n);
    },
    setStore: (i) => {
      D(n, i);
    }
  }), yo(() => {
    l(n).reset();
  });
  var r = ce(), o = $(r);
  Fe(o, () => t.children ?? We), O(e, r), ie();
}
var q0 = /* @__PURE__ */ ee("<button><!></button>");
function Tr(e, t) {
  let n = /* @__PURE__ */ Jt(t, [
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
  var r = q0();
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
  Fe(o, () => t.children ?? We), O(e, r);
}
var G0 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function U0(e) {
  var t = G0();
  O(e, t);
}
var j0 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function J0(e) {
  var t = j0();
  O(e, t);
}
var Q0 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function $0(e) {
  var t = Q0();
  O(e, t);
}
var ep = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function tp(e) {
  var t = ep();
  O(e, t);
}
var np = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function rp(e) {
  var t = np();
  O(e, t);
}
var op = /* @__PURE__ */ ee("<!> <!>", 1), ip = /* @__PURE__ */ ee("<!> <!> <!> <!> <!> <!>", 1);
function sp(e, t) {
  oe(t, !0);
  let n = F(t, "position", 3, "bottom-left"), r = F(t, "orientation", 3, "vertical"), o = F(t, "showZoom", 3, !0), i = F(t, "showFitView", 3, !0), s = F(t, "showLock", 3, !0), a = /* @__PURE__ */ Jt(t, [
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
  ]), c = /* @__PURE__ */ _(Ht);
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
  }, x = () => {
    let E = !l(d);
    l(c).nodesDraggable = E, l(c).nodesConnectable = E, l(c).elementsSelectable = E;
  };
  {
    let E = /* @__PURE__ */ _(() => [
      "svelte-flow__controls",
      l(v),
      t.class
    ]);
    Hi(e, _e(
      {
        get class() {
          return l(E);
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
        children: (b, I) => {
          var C = ip(), L = $(C);
          {
            var M = (H) => {
              var P = ce(), V = $(P);
              Fe(V, () => t.before), O(H, P);
            };
            le(L, (H) => {
              t.before && H(M);
            });
          }
          var K = J(L, 2);
          {
            var W = (H) => {
              var P = op(), V = $(P);
              Tr(V, _e(
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
                  children: (R, B) => {
                    U0(R);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var X = J(V, 2);
              Tr(X, _e(
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
                  children: (R, B) => {
                    J0(R);
                  },
                  $$slots: { default: !0 }
                }
              )), O(H, P);
            };
            le(K, (H) => {
              o() && H(W);
            });
          }
          var z = J(K, 2);
          {
            var k = (H) => {
              Tr(H, _e(
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
                  children: (P, V) => {
                    $0(P);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(z, (H) => {
              i() && H(k);
            });
          }
          var A = J(z, 2);
          {
            var y = (H) => {
              Tr(H, _e(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: x,
                  get title() {
                    return l(g)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return l(g)["controls.interactive.ariaLabel"];
                  }
                },
                () => u,
                {
                  children: (P, V) => {
                    var X = ce(), R = $(X);
                    {
                      var B = (q) => {
                        rp(q);
                      }, G = (q) => {
                        tp(q);
                      };
                      le(R, (q) => {
                        l(d) ? q(B) : q(G, !1);
                      });
                    }
                    O(P, X);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            le(A, (H) => {
              s() && H(y);
            });
          }
          var N = J(A, 2);
          {
            var S = (H) => {
              var P = ce(), V = $(P);
              Fe(V, () => t.children), O(H, P);
            };
            le(N, (H) => {
              t.children && H(S);
            });
          }
          var T = J(N, 2);
          {
            var Y = (H) => {
              var P = ce(), V = $(P);
              Fe(V, () => t.after), O(H, P);
            };
            le(T, (H) => {
              t.after && H(Y);
            });
          }
          O(b, C);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ie();
}
var Dt;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Dt || (Dt = {}));
var ap = /* @__PURE__ */ we("<circle></circle>");
function lp(e, t) {
  var n = ap();
  ue(() => {
    re(n, "cx", t.radius), re(n, "cy", t.radius), re(n, "r", t.radius), Ce(n, 0, jt(["svelte-flow__background-pattern", "dots", t.class]));
  }), O(e, n);
}
var cp = /* @__PURE__ */ we("<path></path>");
function up(e, t) {
  oe(t, !0);
  var n = cp();
  ue(() => {
    re(n, "stroke-width", t.lineWidth), re(n, "d", `M${t.dimensions[0] / 2} 0 V${t.dimensions[1]} M0 ${t.dimensions[1] / 2} H${t.dimensions[0]}`), Ce(n, 0, jt([
      "svelte-flow__background-pattern",
      t.variant,
      t.class
    ]));
  }), O(e, n), ie();
}
const dp = {
  [Dt.Dots]: 1,
  [Dt.Lines]: 1,
  [Dt.Cross]: 6
};
var fp = /* @__PURE__ */ we('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function hp(e, t) {
  oe(t, !0);
  let n = F(t, "variant", 19, () => Dt.Dots), r = F(t, "gap", 3, 20), o = F(t, "lineWidth", 3, 1), i = /* @__PURE__ */ _(Ht), s = /* @__PURE__ */ _(() => n() === Dt.Dots), a = /* @__PURE__ */ _(() => n() === Dt.Cross), c = /* @__PURE__ */ _(() => Array.isArray(r()) ? r() : [r(), r()]), u = /* @__PURE__ */ _(() => `background-pattern-${l(i).flowId}-${t.id ?? ""}`), d = /* @__PURE__ */ _(() => [
    l(c)[0] * l(i).viewport.zoom || 1,
    l(c)[1] * l(i).viewport.zoom || 1
  ]), h = /* @__PURE__ */ _(() => (t.size ?? dp[n()]) * l(i).viewport.zoom), f = /* @__PURE__ */ _(() => l(a) ? [l(h), l(h)] : l(d)), g = /* @__PURE__ */ _(() => l(s) ? [l(h) / 2, l(h) / 2] : [
    l(f)[0] / 2,
    l(f)[1] / 2
  ]);
  var v = fp();
  let p;
  var m = Z(v), w = Z(m);
  {
    var x = (I) => {
      {
        let C = /* @__PURE__ */ _(() => l(h) / 2);
        lp(I, {
          get radius() {
            return l(C);
          },
          get class() {
            return t.patternClass;
          }
        });
      }
    }, E = (I) => {
      up(I, {
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
    le(w, (I) => {
      l(s) ? I(x) : I(E, !1);
    });
  }
  var b = J(m);
  ue(() => {
    Ce(v, 0, jt([
      "svelte-flow__background",
      "svelte-flow__container",
      t.class
    ])), p = Ke(v, "", p, {
      "--xy-background-color-props": t.bgColor,
      "--xy-background-pattern-color-props": t.patternColor
    }), re(m, "id", l(u)), re(m, "x", l(i).viewport.x % l(d)[0]), re(m, "y", l(i).viewport.y % l(d)[1]), re(m, "width", l(d)[0]), re(m, "height", l(d)[1]), re(m, "patternTransform", `translate(-${l(g)[0]},-${l(g)[1]})`), re(b, "fill", `url(#${l(u)})`);
  }), O(e, v), ie();
}
var gp = /* @__PURE__ */ we("<rect></rect>");
function vp(e, t) {
  let n = F(t, "borderRadius", 3, 5), r = F(t, "strokeWidth", 3, 2);
  var o = ce(), i = $(o);
  {
    var s = (c) => {
      const u = /* @__PURE__ */ _(() => t.nodeComponent);
      var d = ce(), h = $(d);
      Fn(h, () => l(u), (f, g) => {
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
      }), O(c, d);
    }, a = (c) => {
      var u = gp();
      let d, h;
      ue(() => {
        d = Ce(u, 0, jt(["svelte-flow__minimap-node", t.class]), null, d, { selected: t.selected }), re(u, "x", t.x), re(u, "y", t.y), re(u, "rx", n()), re(u, "ry", n()), re(u, "width", t.width), re(u, "height", t.height), re(u, "shape-rendering", t.shapeRendering), h = Ke(u, "", h, {
          fill: t.color,
          stroke: t.strokeColor,
          "stroke-width": r()
        });
      }), O(c, u);
    };
    le(i, (c) => {
      t.nodeComponent ? c(s) : c(a, !1);
    });
  }
  O(e, o);
}
function pp(e, t) {
  const n = wv({
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
const Fo = (e) => e instanceof Function ? e : () => e;
var mp = /* @__PURE__ */ we("<title> </title>"), yp = /* @__PURE__ */ we('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), _p = /* @__PURE__ */ ee('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function wp(e, t) {
  oe(t, !0);
  let n = F(t, "position", 3, "bottom-right"), r = F(t, "nodeStrokeColor", 3, "transparent"), o = F(t, "nodeClass", 3, ""), i = F(t, "nodeBorderRadius", 3, 5), s = F(t, "nodeStrokeWidth", 3, 2), a = F(t, "width", 3, 200), c = F(t, "height", 3, 150), u = F(t, "pannable", 3, !0), d = F(t, "zoomable", 3, !0), h = /* @__PURE__ */ Jt(t, [
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
  ]), f = /* @__PURE__ */ _(Ht), g = /* @__PURE__ */ _(() => l(f).ariaLabelConfig);
  const v = t.nodeColor === void 0 ? void 0 : Fo(t.nodeColor), p = Fo(r()), m = Fo(o()), w = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let x = /* @__PURE__ */ _(() => `svelte-flow__minimap-desc-${l(f).flowId}`), E = /* @__PURE__ */ _(() => ({
    x: -l(f).viewport.x / l(f).viewport.zoom,
    y: -l(f).viewport.y / l(f).viewport.zoom,
    width: l(f).width / l(f).viewport.zoom,
    height: l(f).height / l(f).viewport.zoom
  })), b = /* @__PURE__ */ _(() => Pl(wr(l(f).nodeLookup, { filter: (Y) => !Y.hidden }), l(E))), I = /* @__PURE__ */ _(() => l(b).width / a()), C = /* @__PURE__ */ _(() => l(b).height / c()), L = /* @__PURE__ */ _(() => Math.max(l(I), l(C))), M = /* @__PURE__ */ _(() => l(L) * a()), K = /* @__PURE__ */ _(() => l(L) * c()), W = /* @__PURE__ */ _(() => 5 * l(L)), z = /* @__PURE__ */ _(() => l(b).x - (l(M) - l(b).width) / 2 - l(W)), k = /* @__PURE__ */ _(() => l(b).y - (l(K) - l(b).height) / 2 - l(W)), A = /* @__PURE__ */ _(() => l(M) + l(W) * 2), y = /* @__PURE__ */ _(() => l(K) + l(W) * 2);
  const N = () => l(L);
  var S = _p(), T = $(S);
  {
    let Y = /* @__PURE__ */ _(() => ["svelte-flow__minimap", t.class]);
    ku(T, () => ({ "--xy-minimap-background-color-props": t.bgColor })), Hi(T.lastChild, _e(
      {
        get position() {
          return n();
        },
        get class() {
          return l(Y);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => h,
      {
        children: (H, P) => {
          var V = ce(), X = $(V);
          {
            var R = (B) => {
              var G = yp();
              let q;
              var U = Z(G);
              {
                var j = (te) => {
                  var pe = mp(), ae = Z(pe);
                  ue(() => {
                    re(pe, "id", l(x)), xe(ae, t.ariaLabel ?? l(g)["minimap.ariaLabel"]);
                  }), O(te, pe);
                };
                le(U, (te) => {
                  (t.ariaLabel ?? l(g)["minimap.ariaLabel"]) && te(j);
                });
              }
              var ne = J(U);
              Ot(ne, 17, () => l(f).nodes, (te) => te.id, (te, pe) => {
                const ae = /* @__PURE__ */ _(() => l(f).nodeLookup.get(l(pe).id));
                var be = ce(), Je = $(be);
                {
                  var Qe = (Xe) => {
                    const ge = /* @__PURE__ */ _(() => Qt(l(ae)));
                    {
                      let Ee = /* @__PURE__ */ _(() => v?.(l(ae))), it = /* @__PURE__ */ _(() => p(l(ae))), ye = /* @__PURE__ */ _(() => m(l(ae)));
                      vp(Xe, _e(
                        {
                          get id() {
                            return l(ae).id;
                          },
                          get x() {
                            return l(ae).internals.positionAbsolute.x;
                          },
                          get y() {
                            return l(ae).internals.positionAbsolute.y;
                          }
                        },
                        () => l(ge),
                        {
                          get selected() {
                            return l(ae).selected;
                          },
                          get nodeComponent() {
                            return t.nodeComponent;
                          },
                          get color() {
                            return l(Ee);
                          },
                          get borderRadius() {
                            return i();
                          },
                          get strokeColor() {
                            return l(it);
                          },
                          get strokeWidth() {
                            return s();
                          },
                          get shapeRendering() {
                            return w;
                          },
                          get class() {
                            return l(ye);
                          }
                        }
                      ));
                    }
                  };
                  le(Je, (Xe) => {
                    l(ae) && Ml(l(ae)) && !l(ae).hidden && Xe(Qe);
                  });
                }
                O(te, be);
              });
              var he = J(ne);
              Te(G, (te, pe) => pp?.(te, pe), () => ({
                store: l(f),
                panZoom: l(f).panZoom,
                getViewScale: N,
                translateExtent: l(f).translateExtent,
                width: l(f).width,
                height: l(f).height,
                inversePan: t.inversePan,
                zoomStep: t.zoomStep,
                pannable: u(),
                zoomable: d()
              })), ue(() => {
                re(G, "width", a()), re(G, "height", c()), re(G, "viewBox", `${l(z) ?? ""} ${l(k) ?? ""} ${l(A) ?? ""} ${l(y) ?? ""}`), re(G, "aria-labelledby", l(x)), q = Ke(G, "", q, {
                  "--xy-minimap-mask-background-color-props": t.maskColor,
                  "--xy-minimap-mask-stroke-color-props": t.maskStrokeColor,
                  "--xy-minimap-mask-stroke-width-props": t.maskStrokeWidth ? t.maskStrokeWidth * l(L) : void 0
                }), re(he, "d", `M${l(z) - l(W)},${l(k) - l(W)}h${l(A) + l(W) * 2}v${l(y) + l(W) * 2}h${-l(A) - l(W) * 2}z
      M${l(E).x ?? ""},${l(E).y ?? ""}h${l(E).width ?? ""}v${l(E).height ?? ""}h${-l(E).width}z`);
              }), O(B, G);
            };
            le(X, (B) => {
              l(f).panZoom && B(R);
            });
          }
          O(H, V);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  O(e, S), ie();
}
const Ks = [];
function bp({ id: e, handleType: t, handleId: n, onConnect: r, onDisconnect: o } = {}) {
  const i = /* @__PURE__ */ _(Ht), s = /* @__PURE__ */ _(() => l(i).edges), a = /* @__PURE__ */ _(() => l(i).connectionLookup), c = Wl(), u = e ?? c;
  let d = { previous: /* @__PURE__ */ new Map(), next: /* @__PURE__ */ new Map() }, h = Ks;
  const f = /* @__PURE__ */ _(() => {
    l(s);
    const g = d.next, v = l(a).get(`${u}${t ? n ? `-${t}-${n}` : `-${t}` : ""}`) ?? /* @__PURE__ */ new Map();
    return kl(v, g) || (d = { previous: g, next: v }, h = Array.from(v.values() || Ks)), h;
  });
  return Oe(() => {
    r && (l(f), no(d.next, d.previous, r)), o && (l(f), no(d.previous, d.next, o));
  }), {
    get current() {
      return l(f);
    }
  };
}
function xp(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Ys(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
function wn(e, { delay: t = 0, duration: n = 400, easing: r = xp, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(e), c = +a.opacity, u = a.transform === "none" ? "" : a.transform, d = c * (1 - s), [h, f] = Ys(o), [g, v] = Ys(i);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (p, m) => `
			transform: ${u} translate(${(1 - p) * h}${f}, ${(1 - p) * g}${v});
			opacity: ${c - d * m}`
  };
}
const kp = {
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
var Ep = /* @__PURE__ */ we("<svg><!><!></svg>");
function Ye(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]), r = ze(n, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  oe(t, !1);
  let o = F(t, "name", 8, void 0), i = F(t, "color", 8, "currentColor"), s = F(t, "size", 8, 24), a = F(t, "strokeWidth", 8, 2), c = F(t, "absoluteStrokeWidth", 8, !1), u = F(t, "iconNode", 24, () => []);
  const d = (...v) => v.filter((p, m, w) => !!p && w.indexOf(p) === m).join(" ");
  Wa();
  var h = Ep();
  bt(
    h,
    (v, p) => ({
      ...kp,
      ...r,
      width: s(),
      height: s(),
      stroke: i(),
      "stroke-width": v,
      class: p
    }),
    [
      () => ($t(c()), $t(a()), $t(s()), ke(() => c() ? Number(a()) * 24 / Number(s()) : a())),
      () => ($t(o()), $t(n), ke(() => d("lucide-icon", "lucide", o() ? `lucide-${o()}` : "", n.class)))
    ]
  );
  var f = Z(h);
  Ot(f, 1, u, rr, (v, p) => {
    var m = /* @__PURE__ */ _(() => Rn(l(p), 2));
    let w = () => l(m)[0], x = () => l(m)[1];
    var E = ce(), b = $(E);
    Iu(b, w, !0, (I, C) => {
      bt(I, () => ({ ...x() }));
    }), O(v, E);
  });
  var g = J(f);
  Re(g, t, "default", {}), O(e, h), ie();
}
function Sp(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    [
      "path",
      {
        d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
      }
    ],
    ["path", { d: "m3.3 7 8.7 5 8.7-5" }],
    ["path", { d: "M12 22V12" }]
  ];
  Ye(e, _e({ name: "box" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Np(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [["path", { d: "m15 18-6-6 6-6" }]];
  Ye(e, _e({ name: "chevron-left" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Cp(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [["path", { d: "m9 18 6-6-6-6" }]];
  Ye(e, _e({ name: "chevron-right" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Pp(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
    ["path", { d: "M12 17h.01" }]
  ];
  Ye(e, _e({ name: "circle-question-mark" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Mp(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
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
  Ye(e, _e({ name: "copy" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Ap(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
      }
    ],
    ["path", { d: "m15 5 4 4" }]
  ];
  Ye(e, _e({ name: "pencil" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Vi(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [["path", { d: "M5 12h14" }], ["path", { d: "M12 5v14" }]];
  Ye(e, _e({ name: "plus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function rc(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
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
  Ye(e, _e({ name: "rocket" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function zp(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    ["path", { d: "M12 3v18" }],
    ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7" }],
    ["path", { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" }],
    ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7" }],
    ["path", { d: "M7 21h10" }]
  ];
  Ye(e, _e({ name: "scale" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Ip(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    ["path", { d: "m21 21-4.34-4.34" }],
    ["circle", { cx: "11", cy: "11", r: "8" }]
  ];
  Ye(e, _e({ name: "search" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Tp(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3" }]
  ];
  Ye(e, _e({ name: "settings" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Dp(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    ["path", { d: "M10 11v6" }],
    ["path", { d: "M14 11v6" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
    ["path", { d: "M3 6h18" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
  ];
  Ye(e, _e({ name: "trash-2" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Op(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    ["path", { d: "M18 6 6 18" }],
    ["path", { d: "m6 6 12 12" }]
  ];
  Ye(e, _e({ name: "x" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
function Bi(e, t) {
  const n = ze(t, ["children", "$$slots", "$$events", "$$legacy"]);
  const r = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      }
    ]
  ];
  Ye(e, _e({ name: "zap" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = ce(), a = $(s);
      Re(a, t, "default", {}), O(o, s);
    },
    $$slots: { default: !0 }
  }));
}
var Rp = /* @__PURE__ */ ee('<button type="button" title="Go back" class="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"><!></button>'), Lp = /* @__PURE__ */ ee('<button type="button" class="group flex items-center gap-4 p-3 bg-white dark:bg-gray-800 border-none ring-1 ring-gray-950/5 dark:ring-white/10 rounded-xl shadow-sm cursor-grab hover:ring-primary-500 dark:hover:ring-primary-400 transition-all active:cursor-grabbing text-left w-full" draggable="true"><div><!></div> <div class="min-w-0 flex-grow"><div class="text-xs font-semibold text-gray-800 dark:text-gray-100 tracking-tight truncate"> </div> <div class="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5 truncate"> </div></div></button>'), Hp = /* @__PURE__ */ ee('<div class="text-center py-10"><p class="text-sm text-gray-400 dark:text-gray-500"> </p></div>'), Vp = /* @__PURE__ */ ee('<div class="flex flex-col gap-3"><!> <!></div>'), Bp = /* @__PURE__ */ ee('<button type="button" class="group relative flex flex-col gap-1 p-4 bg-white dark:bg-gray-800 border-none ring-1 ring-gray-950/5 dark:ring-white/10 rounded-xl shadow-sm hover:ring-primary-500 dark:hover:ring-primary-400 transition-all w-full text-left overflow-hidden"><div class="flex items-center gap-3 mb-1"><div><!></div> <span class="text-sm font-semibold text-gray-800 dark:text-gray-100"> </span> <!></div> <p class="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed"> </p></button>'), Fp = /* @__PURE__ */ ee('<div class="flex flex-col gap-3"></div>'), Kp = /* @__PURE__ */ ee('<div class="absolute top-4 right-4 bottom-4 w-80 bg-white dark:bg-gray-900 border border-transparent ring-1 ring-gray-950/5 dark:ring-white/10 flex flex-col overflow-hidden transition-all duration-300 z-40 rounded-2xl shadow-2xl p-0"><div class="p-5 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-10"><div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2"><!> <div><h3 class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest"><!></h3></div></div> <button type="button" title="Close" class="p-2 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"><!></button></div> <div class="relative"><input type="text" placeholder="Search nodes..." class="w-full text-sm px-3 py-2 rounded-lg border-none ring-1 ring-gray-950/10 dark:ring-white/10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 transition-all pl-9"/> <!></div></div> <div class="flex-grow overflow-y-auto p-5 relative"><!></div></div>');
function Yp(e, t) {
  oe(t, !0);
  let n = F(t, "availableComponents", 19, () => ({})), r = F(t, "isOpen", 15, !1), o = /* @__PURE__ */ se(""), i = /* @__PURE__ */ se(null);
  const s = [
    {
      id: "triggers",
      label: "Triggers",
      icon: Bi,
      color: "text-amber-500",
      description: "Events that start your workflow"
    },
    {
      id: "actions",
      label: "Actions",
      icon: rc,
      color: "text-blue-500",
      description: "Operations your workflow performs"
    },
    {
      id: "conditions",
      label: "Conditions",
      icon: zp,
      color: "text-purple-500",
      description: "Logic to branch your workflow"
    }
  ];
  function a(x) {
    const E = (x.triggers || []).map((C) => ({
      category: "triggers",
      type: "trigger",
      label: C.name,
      icon: C.icon,
      description: C.description,
      color: "bg-amber-500",
      data: {
        label: C.name,
        description: C.description,
        identifier: C.identifier
      }
    })), b = (x.actions || []).map((C) => ({
      category: "actions",
      type: "action",
      label: C.name,
      icon: C.icon,
      description: C.description,
      color: "bg-blue-600",
      data: {
        label: C.name,
        description: C.description,
        identifier: C.identifier
      }
    })), I = (x.conditions || []).map((C) => ({
      category: "conditions",
      type: "condition",
      label: C.name,
      icon: C.icon,
      description: C.description,
      color: "bg-purple-600",
      data: {
        label: C.name,
        description: C.description,
        identifier: C.identifier
      }
    }));
    return [...E, ...b, ...I];
  }
  let c = /* @__PURE__ */ _(() => a(n())), u = /* @__PURE__ */ _(() => l(o) ? l(c).filter((x) => x.label.toLowerCase().includes(l(o).toLowerCase())) : l(i) ? l(c).filter((x) => x.category === l(i)) : []);
  function d(x, E, b) {
    x.dataTransfer.setData("application/svelteflow", JSON.stringify({ type: E, data: b })), x.dataTransfer.effectAllowed = "move";
  }
  function h(x) {
    t.onSelectNode && t.onSelectNode(x.type, x.data), f();
  }
  function f() {
    r(!1), D(o, ""), D(i, null);
  }
  function g() {
    D(i, null);
  }
  function v(x) {
    D(i, x, !0);
  }
  Oe(() => {
    if (!r()) return;
    const x = (E) => {
      E.key === "Escape" && f();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  });
  var p = ce(), m = $(p);
  {
    var w = (x) => {
      var E = Kp(), b = Z(E), I = Z(b), C = Z(I), L = Z(C);
      {
        var M = (R) => {
          var B = Rp();
          B.__click = g;
          var G = Z(B);
          Np(G, { size: 16 }), O(R, B);
        };
        le(L, (R) => {
          l(i) && !l(o) && R(M);
        });
      }
      var K = J(L, 2), W = Z(K), z = Z(W);
      {
        var k = (R) => {
          var B = Rr("Search Results");
          O(R, B);
        }, A = (R) => {
          var B = ce(), G = $(B);
          {
            var q = (j) => {
              var ne = Rr();
              ue((he) => xe(ne, he), [
                () => s.find((he) => he.id === l(i))?.label
              ]), O(j, ne);
            }, U = (j) => {
              var ne = Rr("Components");
              O(j, ne);
            };
            le(
              G,
              (j) => {
                l(i) ? j(q) : j(U, !1);
              },
              !0
            );
          }
          O(R, B);
        };
        le(z, (R) => {
          l(o) ? R(k) : R(A, !1);
        });
      }
      var y = J(C, 2);
      y.__click = f;
      var N = Z(y);
      Op(N, { size: 16 });
      var S = J(I, 2), T = Z(S), Y = J(T, 2);
      Ip(Y, {
        size: 16,
        class: "absolute left-3 top-2.5 text-gray-400 dark:text-gray-500"
      });
      var H = J(b, 2), P = Z(H);
      {
        var V = (R) => {
          var B = Vp(), G = Z(B);
          Ot(G, 17, () => l(u), rr, (j, ne) => {
            var he = Lp();
            he.__click = () => h(l(ne));
            var te = Z(he), pe = Z(te);
            Cu(pe, () => l(ne).icon || "<span>?</span>");
            var ae = J(te, 2), be = Z(ae), Je = Z(be), Qe = J(be, 2), Xe = Z(Qe);
            ue(() => {
              Ce(te, 1, `w-10 h-10 ${l(ne).color ?? ""} p-2 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0`), xe(Je, l(ne).label), xe(Xe, l(ne).description);
            }), cn("dragstart", he, (ge) => d(ge, l(ne).type, l(ne).data)), O(j, he);
          });
          var q = J(G, 2);
          {
            var U = (j) => {
              var ne = Hp(), he = Z(ne), te = Z(he);
              ue(() => xe(te, `No nodes found matching "${l(o) ?? ""}"`)), O(j, ne);
            };
            le(q, (j) => {
              l(u).length === 0 && j(U);
            });
          }
          yn(1, B, () => wn, () => ({ x: 20, duration: 300, delay: 150 })), yn(2, B, () => wn, () => ({ x: 20, duration: 200 })), O(R, B);
        }, X = (R) => {
          var B = Fp();
          Ot(B, 21, () => s, rr, (G, q) => {
            var U = Bp();
            U.__click = () => v(l(q).id);
            var j = Z(U), ne = Z(j), he = Z(ne);
            Fn(he, () => l(q).icon, (Qe, Xe) => {
              Xe(Qe, { size: 16 });
            });
            var te = J(ne, 2), pe = Z(te), ae = J(te, 2);
            Cp(ae, {
              size: 16,
              class: "ml-auto text-gray-300 dark:text-gray-600 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors"
            });
            var be = J(j, 2), Je = Z(be);
            ue(() => {
              Ce(ne, 1, `w-8 h-8 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-center ${l(q).color ?? ""}`), xe(pe, l(q).label), xe(Je, l(q).description);
            }), O(G, U);
          }), yn(1, B, () => wn, () => ({ x: -20, duration: 300, delay: 150 })), yn(2, B, () => wn, () => ({ x: -20, duration: 200 })), O(R, B);
        };
        le(P, (R) => {
          l(o) || l(i) ? R(V) : R(X, !1);
        });
      }
      Bu(T, () => l(o), (R) => D(o, R)), yn(1, E, () => wn, () => ({ x: 20, duration: 200 })), yn(2, E, () => wn, () => ({ x: 20, duration: 200 })), O(x, E);
    };
    le(m, (x) => {
      r() && x(w);
    });
  }
  O(e, p), ie();
}
Ut(["click"]);
var Xp = /* @__PURE__ */ ee('<button type="button" class="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-md"><!> Rename Node</button> <button type="button" class="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-md"><!> Duplicate Node</button> <div class="h-px bg-gray-100 dark:bg-white/5 my-1"></div> <button type="button" class="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-colors rounded-md"><!> Delete Node</button>', 1), Zp = /* @__PURE__ */ ee('<button type="button" class="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-md"><!> Add Node</button>'), Wp = /* @__PURE__ */ ee('<div class="absolute z-50 min-w-[160px] bg-white dark:bg-gray-900 ring-1 ring-gray-950/5 dark:ring-white/10 rounded-lg shadow-lg p-1 animate-in fade-in zoom-in duration-100"><!></div>');
function qp(e, t) {
  oe(t, !0);
  let n = F(t, "type", 3, "canvas");
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
  var a = Wp();
  a.__click = (h) => h.stopPropagation();
  var c = Z(a);
  {
    var u = (h) => {
      var f = Xp(), g = $(f);
      g.__click = r;
      var v = Z(g);
      Ap(v, { size: 16 });
      var p = J(g, 2);
      p.__click = s;
      var m = Z(p);
      Mp(m, { size: 16 });
      var w = J(p, 4);
      w.__click = o;
      var x = Z(w);
      Dp(x, { size: 16 }), O(h, f);
    }, d = (h) => {
      var f = Zp();
      f.__click = i;
      var g = Z(f);
      Vi(g, { size: 16 }), O(h, f);
    };
    le(c, (h) => {
      n() === "node" ? h(u) : h(d, !1);
    });
  }
  ue(() => Ke(a, `top: ${t.top ?? ""}px; left: ${t.left ?? ""}px; right: ${t.right ?? ""}px; bottom: ${t.bottom ?? ""}px;`)), O(e, a), ie();
}
Ut(["click"]);
var Gp = /* @__PURE__ */ ee("<!> <!> <!>", 1), Up = /* @__PURE__ */ ee('<div class="relative h-[600px] w-full border border-transparent ring-1 ring-gray-950/5 dark:ring-white/10 rounded-xl overflow-hidden bg-white dark:bg-gray-950 shadow-sm"><div class="absolute inset-0" role="presentation"><!> <!></div> <!> <button type="button" class="absolute top-4 right-4 p-3 bg-white dark:bg-gray-800 ring-1 ring-gray-950/10 dark:ring-white/10 rounded-xl shadow-lg text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:ring-primary-500 dark:hover:ring-primary-400 transition-all z-10 group" title="Add Node"><!></button></div>');
function jp(e, t) {
  oe(t, !0);
  let n = F(t, "nodes", 31, () => gt([])), r = F(t, "edges", 31, () => gt([])), o = F(t, "availableComponents", 19, () => ({}));
  const { screenToFlowPosition: i, getNodes: s } = nc();
  let a = /* @__PURE__ */ se(void 0), c = /* @__PURE__ */ se(null), u = /* @__PURE__ */ se(!1), d = /* @__PURE__ */ se(0), h = /* @__PURE__ */ se(0), f = /* @__PURE__ */ se(null), g = /* @__PURE__ */ se("light"), v = /* @__PURE__ */ se(null);
  function p(P) {
    P.preventDefault(), P.dataTransfer.dropEffect = "move";
  }
  function m(P) {
    const V = n().map((X) => ({ ...X, selected: !1 }));
    n([...V, { ...P, selected: !0 }]);
  }
  function w(P) {
    const X = s().find((R) => R.id === P);
    if (X) {
      const R = {
        ...X,
        id: `${X.type}-${Date.now()}`,
        position: { x: X.position.x + 20, y: X.position.y + 20 }
      };
      m(R);
    }
  }
  function x(P) {
    P.preventDefault();
    const V = P.dataTransfer.getData("application/svelteflow");
    if (!V) return;
    const { type: X, data: R } = JSON.parse(V), B = i({ x: P.clientX, y: P.clientY }), G = { id: `${X}-${Date.now()}`, type: X, position: B, data: R };
    m(G);
  }
  function E({ event: P, node: V }) {
    P.preventDefault();
    const X = l(a).getBoundingClientRect(), R = P.clientX - X.left, B = P.clientY - X.top;
    D(
      c,
      {
        id: V.id,
        type: "node",
        top: B < l(h) - 200 ? B : void 0,
        left: R < l(d) - 200 ? R : void 0,
        right: R >= l(d) - 200 ? l(d) - R : void 0,
        bottom: B >= l(h) - 200 ? l(h) - B : void 0,
        clientX: P.clientX,
        clientY: P.clientY
      },
      !0
    );
  }
  function b({ event: P }) {
    P.preventDefault();
    const V = l(a).getBoundingClientRect(), X = P.clientX - V.left, R = P.clientY - V.top;
    D(
      c,
      {
        id: "canvas",
        type: "canvas",
        top: R < l(h) - 200 ? R : void 0,
        left: X < l(d) - 200 ? X : void 0,
        right: X >= l(d) - 200 ? l(d) - X : void 0,
        bottom: R >= l(h) - 200 ? l(h) - R : void 0,
        clientX: P.clientX,
        clientY: P.clientY
      },
      !0
    );
  }
  function I() {
    D(c, null), D(f, null);
  }
  function C() {
    D(u, !1), D(v, null);
  }
  function L() {
    I(), C();
  }
  function M() {
    l(c) ? D(f, { x: l(c).clientX, y: l(c).clientY }, !0) : D(f, null), D(u, !0);
  }
  function K(P, V) {
    let X;
    if (l(f))
      X = i(l(f));
    else {
      const B = { x: l(d) / 2, y: l(h) / 2 };
      X = i(B);
      const G = 50;
      let q = 0;
      for (; n().some((U) => Math.abs(U.position.x - (X.x + q)) < G && Math.abs(U.position.y - (X.y + q)) < G); )
        q += 40;
      X.x += q, X.y += q;
    }
    const R = { id: `${P}-${Date.now()}`, type: P, position: X, data: V };
    if (m(R), l(v)) {
      const B = `edge-${Date.now()}`;
      let G = null;
      l(v).type === "source" ? (P === "action" || P === "condition") && (G = {
        id: B,
        source: l(v).nodeId,
        sourceHandle: l(v).handleId,
        target: R.id,
        targetHandle: "input"
      }) : P === "trigger" || P === "action" ? G = {
        id: B,
        source: R.id,
        sourceHandle: "output",
        target: l(v).nodeId,
        targetHandle: l(v).handleId
      } : P === "condition" && (G = {
        id: B,
        source: R.id,
        sourceHandle: "true",
        target: l(v).nodeId,
        targetHandle: l(v).handleId
      }), G && r([...r(), G]), D(v, null);
    }
  }
  function W(P) {
    n(n().filter((V) => V.id !== P));
  }
  function z(P) {
    const V = n().find((X) => X.id === P);
    if (V) {
      const X = window.prompt("Enter new node name:", V.data.label);
      X !== null && n(n().map((R) => R.id === P ? { ...R, data: { ...R.data, label: X } } : R));
    }
  }
  Oe(() => {
    const P = (R) => {
      R.key === "Escape" && L();
    }, V = (R) => {
      D(v, R.detail, !0), D(u, !0);
    };
    window.addEventListener("keydown", P), window.addEventListener("handle-click", V);
    const X = new MutationObserver(() => {
      D(g, document.documentElement.classList.contains("dark") ? "dark" : "light", !0);
    });
    return X.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] }), D(g, document.documentElement.classList.contains("dark") ? "dark" : "light", !0), () => {
      window.removeEventListener("keydown", P), window.removeEventListener("handle-click", V), X.disconnect();
    };
  });
  var k = Up(), A = Z(k), y = Z(A);
  Z0(y, {
    get nodeTypes() {
      return t.nodeTypes;
    },
    get colorMode() {
      return l(g);
    },
    fitView: !0,
    onnodeclick: ({ event: P, node: V }) => {
      t.onNodeClick && t.onNodeClick(P, V), L();
    },
    onnodecontextmenu: E,
    onpanecontextmenu: b,
    onpaneclick: L,
    get nodes() {
      return n();
    },
    set nodes(P) {
      n(P);
    },
    get edges() {
      return r();
    },
    set edges(P) {
      r(P);
    },
    children: (P, V) => {
      var X = Gp(), R = $(X);
      sp(R, {});
      var B = J(R, 2);
      hp(B, {
        get variant() {
          return Dt.Lines;
        },
        gap: 20,
        size: 1
      });
      var G = J(B, 2);
      wp(G, {}), O(P, X);
    },
    $$slots: { default: !0 }
  });
  var N = J(y, 2);
  {
    var S = (P) => {
      qp(P, _e(() => l(c), {
        onclick: I,
        onAddNode: M,
        onRenameNode: z,
        onDuplicateNode: w,
        onDeleteNode: W
      }));
    };
    le(N, (P) => {
      l(c) && P(S);
    });
  }
  var T = J(A, 2);
  Yp(T, {
    get availableComponents() {
      return o();
    },
    onSelectNode: K,
    get isOpen() {
      return l(u);
    },
    set isOpen(P) {
      D(u, P, !0);
    }
  });
  var Y = J(T, 2);
  Y.__click = () => {
    I(), D(u, !0);
  };
  var H = Z(Y);
  Vi(H, {
    size: 20,
    class: "group-hover:scale-110 transition-transform"
  }), Kn(k, (P) => D(a, P), () => l(a)), cn("dragover", A, p), cn("drop", A, x), Wr(k, "clientWidth", (P) => D(d, P)), Wr(k, "clientHeight", (P) => D(h, P)), O(e, k), ie();
}
Ut(["click"]);
var Jp = /* @__PURE__ */ ee('<div></div> <button type="button" title="Add Node"><!></button>', 1), Qp = /* @__PURE__ */ ee('<div class="relative flex items-center justify-center w-3 h-3 group/handle"><!> <!></div>');
function ao(e, t) {
  oe(t, !0);
  let n = F(t, "class", 3, "");
  const r = bp({
    get id() {
      return t.nodeId;
    },
    get handleType() {
      return t.type;
    },
    get handleId() {
      return t.id;
    }
  }), o = /* @__PURE__ */ _(() => r.current.length > 0);
  function i(d) {
    d.stopPropagation(), window.dispatchEvent(new CustomEvent("handle-click", {
      detail: {
        nodeId: t.nodeId,
        handleId: t.id,
        type: t.type
      }
    }));
  }
  var s = Qp(), a = Z(s);
  dr(a, {
    get type() {
      return t.type;
    },
    get position() {
      return t.position;
    },
    get id() {
      return t.id;
    },
    get class() {
      return n();
    }
  });
  var c = J(a, 2);
  {
    var u = (d) => {
      var h = Jp(), f = $(h), g = J(f, 2);
      g.__click = i;
      var v = Z(g);
      Vi(v, { size: 12 }), ue(
        (p) => {
          Ce(f, 1, `absolute pointer-events-none border-dashed border-gray-300 dark:border-gray-600 opacity-60 group-hover/handle:opacity-100 transition-opacity z-9
            ${t.position === Q.Right ? "left-full w-4 border-t top-1/2" : ""}
            ${t.position === Q.Left ? "right-full w-4 border-t top-1/2" : ""}
            ${t.position === Q.Top ? "bottom-full h-4 border-l left-1/2" : ""}
            ${t.position === Q.Bottom ? "top-full h-4 border-l left-1/2" : ""}`), Ce(g, 1, `absolute w-4 h-4 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all hover:scale-125 shadow-sm z-50 border border-gray-600 dark:border-gray-400
            ${t.position === Q.Right ? "-right-8" : ""}
            ${t.position === Q.Left ? "-left-8" : ""}
            ${t.position === Q.Top ? "-top-8" : ""}
            ${t.position === Q.Bottom ? "-bottom-8" : ""}
            ${p ?? ""}`);
        },
        [
          () => Object.values(Q).includes(t.position) ? "" : "-left-8"
        ]
      ), O(d, h);
    };
    le(c, (d) => {
      l(o) || d(u);
    });
  }
  O(e, s), ie();
}
Ut(["click"]);
var $p = /* @__PURE__ */ ee('<p class="text-[10px] leading-relaxed text-gray-500 dark:text-gray-400 mb-2 italic"> </p>'), em = /* @__PURE__ */ ee('<div class="relative w-3 h-3" role="presentation"><!></div>'), tm = /* @__PURE__ */ ee('<div class="relative w-3 h-3" role="presentation"><!></div>'), nm = /* @__PURE__ */ ee('<div class="relative group" role="presentation"><div><div><span class="text-white"><!></span> <span class="text-[10px] font-bold uppercase tracking-wider text-white flex-1"> </span> <button type="button" class="text-white/70 hover:text-white hover:bg-white/20 rounded p-0.5 transition-all opacity-0 group-hover:opacity-100" title="Edit Settings"><!></button></div> <div><!> <div><!></div></div></div> <div class="absolute -left-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div> <div class="absolute -right-1.5 top-0 bottom-0 flex flex-col justify-center gap-4"></div></div>');
function Fi(e, t) {
  oe(t, !0);
  let n = F(t, "type", 3, "default"), r = F(t, "inputs", 19, () => []), o = F(t, "outputs", 19, () => []);
  const i = {
    trigger: {
      border: "border-amber-200/50 dark:border-amber-500/30",
      header: "bg-amber-500 dark:bg-amber-600",
      bg: "bg-amber-50/50 dark:bg-amber-900/10",
      text: "text-amber-900 dark:text-amber-100",
      icon: Bi
    },
    action: {
      border: "border-blue-200/50 dark:border-blue-500/30",
      header: "bg-blue-600 dark:bg-blue-700",
      bg: "bg-blue-50/50 dark:bg-blue-900/10",
      text: "text-blue-900 dark:text-blue-100",
      icon: rc
    },
    condition: {
      border: "border-purple-200/50 dark:border-purple-500/30",
      header: "bg-purple-600 dark:bg-purple-700",
      bg: "bg-purple-50/50 dark:bg-purple-900/10",
      text: "text-purple-900 dark:text-purple-100",
      icon: Pp
    },
    default: {
      border: "border-gray-200/50 dark:border-gray-700",
      header: "bg-gray-600 dark:bg-gray-700",
      bg: "bg-gray-50/50 dark:bg-gray-800/10",
      text: "text-gray-900 dark:text-gray-100",
      icon: Sp
    }
  }, s = /* @__PURE__ */ _(() => i[n()] || i.default);
  function a(M) {
    M.stopPropagation(), window.dispatchEvent(new CustomEvent("open-node-settings", {
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
  var c = nm(), u = Z(c), d = Z(u), h = Z(d), f = Z(h);
  Fn(f, () => l(s).icon, (M, K) => {
    K(M, { size: 12, strokeWidth: 2.5 });
  });
  var g = J(h, 2), v = Z(g), p = J(g, 2);
  p.__click = a;
  var m = Z(p);
  Tp(m, { size: 14 });
  var w = J(d, 2), x = Z(w);
  {
    var E = (M) => {
      var K = $p(), W = Z(K);
      ue(() => xe(W, t.data.description)), O(M, K);
    };
    le(x, (M) => {
      t.data.description && M(E);
    });
  }
  var b = J(x, 2), I = Z(b);
  Fe(I, () => t.children ?? We);
  var C = J(u, 2);
  Ot(C, 21, r, rr, (M, K) => {
    var W = em(), z = Z(W);
    ao(z, {
      type: "target",
      get position() {
        return Q.Left;
      },
      get id() {
        return l(K).id;
      },
      get nodeId() {
        return t.id;
      },
      class: "!w-3 !h-3 !bg-gray-400 dark:!bg-gray-600 !border-2 !border-white dark:!border-gray-800 hover:!bg-primary-500 transition-all hover:scale-125"
    }), O(M, W);
  });
  var L = J(C, 2);
  Ot(L, 21, o, rr, (M, K) => {
    var W = tm(), z = Z(W);
    ao(z, {
      type: "source",
      get position() {
        return Q.Right;
      },
      get id() {
        return l(K).id;
      },
      get nodeId() {
        return t.id;
      },
      class: "!w-3 !h-3 !bg-gray-400 dark:!bg-gray-600 !border-2 !border-white dark:!border-gray-800 hover:!bg-primary-500 transition-all hover:scale-125"
    }), O(M, W);
  }), ue(() => {
    Ce(
      u,
      1,
      `min-w-[180px] max-w-[240px] bg-white dark:bg-gray-900 rounded-xl shadow-sm border ${l(s).border ?? ""} ring-1 ring-gray-950/5 dark:ring-white/10 overflow-hidden transition-all duration-200 ${t.selected ? "ring-2 ring-primary-500 dark:ring-primary-400 ring-offset-2 dark:ring-offset-gray-950" : "hover:shadow-md dark:hover:shadow-primary-500/10"}`,
      "svelte-1fdtdic"
    ), Ce(d, 1, `${l(s).header ?? ""} px-3 py-1.5 flex items-center gap-2`, "svelte-1fdtdic"), xe(v, t.data.label || "Node"), Ce(w, 1, `p-3 ${l(s).bg ?? ""}`, "svelte-1fdtdic"), Ce(b, 1, `text-xs font-medium ${l(s).text ?? ""}`, "svelte-1fdtdic");
  }), O(e, c), ie();
}
Ut(["click"]);
var rm = /* @__PURE__ */ ee('<div class="px-2 py-1 bg-amber-100/50 dark:bg-amber-900/30 rounded border border-amber-200 dark:border-amber-800 text-[10px] break-all font-mono text-amber-700 dark:text-amber-400"> </div>');
function om(e, t) {
  oe(t, !0);
  const n = [{ id: "output" }];
  Fi(e, {
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
      var i = ce(), s = $(i);
      {
        var a = (c) => {
          var u = rm(), d = Z(u);
          ue((h) => xe(d, h), [() => t.data.event.split("\\").pop()]), O(c, u);
        };
        le(s, (c) => {
          t.data.event && c(a);
        });
      }
      O(r, i);
    },
    $$slots: { default: !0 }
  }), ie();
}
var im = /* @__PURE__ */ ee('<div class="flex items-center gap-2 px-2 py-1 bg-blue-100/50 dark:bg-blue-900/30 rounded border border-blue-200 dark:border-blue-800 text-[10px] font-semibold text-blue-700 dark:text-blue-300"><!> </div>');
function sm(e, t) {
  oe(t, !0);
  const n = [{ id: "input" }], r = [{ id: "output" }];
  Fi(e, {
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
      var s = ce(), a = $(s);
      {
        var c = (u) => {
          var d = im(), h = Z(d);
          Bi(h, { size: 10, strokeWidth: 3 });
          var f = J(h);
          ue(() => xe(f, ` ${t.data.action ?? ""}`)), O(u, d);
        };
        le(a, (u) => {
          t.data.action && u(c);
        });
      }
      O(o, s);
    },
    $$slots: { default: !0 }
  }), ie();
}
var am = /* @__PURE__ */ ee('<div class="px-2 py-1 bg-purple-100/50 dark:bg-purple-900/30 rounded border border-purple-200 dark:border-purple-800 text-[10px] font-mono mb-6 text-purple-700 dark:text-purple-400"> </div>'), lm = /* @__PURE__ */ ee('<!> <div class="absolute -right-1.5 top-[60px] flex flex-col gap-6"><div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-emerald-600 dark:text-emerald-400 mr-2 uppercase">True</span> <!></div> <div class="relative flex items-center justify-end h-3"><span class="text-[8px] font-black text-rose-600 dark:text-rose-400 mr-2 uppercase">False</span> <!></div></div>', 1), cm = /* @__PURE__ */ ee('<div class="relative"><!></div>');
function um(e, t) {
  oe(t, !0);
  const n = [{ id: "input" }];
  var r = cm(), o = Z(r);
  Fi(o, {
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
      var a = lm(), c = $(a);
      {
        var u = (p) => {
          var m = am(), w = Z(m);
          ue(() => xe(w, t.data.condition)), O(p, m);
        };
        le(c, (p) => {
          t.data.condition && p(u);
        });
      }
      var d = J(c, 2), h = Z(d), f = J(Z(h), 2);
      ao(f, {
        type: "source",
        get position() {
          return Q.Right;
        },
        id: "true",
        get nodeId() {
          return t.id;
        },
        class: "!w-3 !h-3 !bg-emerald-500 !border-2 !border-white dark:!border-slate-800"
      });
      var g = J(h, 2), v = J(Z(g), 2);
      ao(v, {
        type: "source",
        get position() {
          return Q.Right;
        },
        id: "false",
        get nodeId() {
          return t.id;
        },
        class: "!w-3 !h-3 !bg-rose-500 !border-2 !border-white dark:!border-slate-800"
      }), O(i, a);
    },
    $$slots: { default: !0 }
  }), O(e, r), ie();
}
var dm = /* @__PURE__ */ ee('<div class="flex h-full w-full overflow-hidden"><!></div>');
function fm(e, t) {
  oe(t, !0);
  const n = {
    trigger: om,
    action: sm,
    condition: um
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
  let i = F(t, "nodes", 19, () => []), s = F(t, "edges", 19, () => []), a = F(t, "availableComponents", 19, () => ({})), c = /* @__PURE__ */ se(ke(() => i().length > 0 ? i() : r)), u = /* @__PURE__ */ se(ke(() => s().length > 0 ? s() : o)), d = /* @__PURE__ */ se(null);
  function h(g, v) {
    D(d, v.id, !0);
  }
  let f;
  Oe(() => {
    const g = l(c), v = l(u);
    return t.updateState && (clearTimeout(f), f = setTimeout(
      () => {
        t.updateState({
          nodes: JSON.parse(JSON.stringify(g)),
          edges: JSON.parse(JSON.stringify(v))
        });
      },
      500
    )), () => clearTimeout(f);
  }), Oe(() => {
    const g = (v) => {
      const { id: p, config: m } = v.detail, w = l(c).findIndex((x) => x.id === p);
      if (w !== -1) {
        const { label: x, description: E, ...b } = m, I = { ...l(c)[w] };
        I.data = { ...I.data, label: x, description: E, config: b };
        const C = [...l(c)];
        C[w] = I, D(c, C);
      }
    };
    return window.addEventListener("update-node-config", g), () => {
      window.removeEventListener("update-node-config", g);
    };
  }), W0(e, {
    children: (g, v) => {
      var p = dm(), m = Z(p);
      jp(m, {
        get nodeTypes() {
          return n;
        },
        onNodeClick: h,
        get availableComponents() {
          return a();
        },
        get nodes() {
          return l(c);
        },
        set nodes(w) {
          D(c, w);
        },
        get edges() {
          return l(u);
        },
        set edges(w) {
          D(u, w);
        }
      }), O(g, p);
    },
    $$slots: { default: !0 }
  }), ie();
}
const Xs = () => {
  window.Alpine.data("flowBuilder", ({ state: e, components: t }) => ({
    state: e,
    components: t,
    init() {
      const n = Array.isArray(this.state?.nodes) ? JSON.parse(JSON.stringify(this.state.nodes)) : [], r = Array.isArray(this.state?.edges) ? JSON.parse(JSON.stringify(this.state.edges)) : [];
      wu(fm, {
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
window.Alpine ? Xs() : document.addEventListener("alpine:init", Xs);
