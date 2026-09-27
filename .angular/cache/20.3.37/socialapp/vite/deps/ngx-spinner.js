import {
  DomSanitizer
} from "./chunk-RIFZAQLU.js";
import {
  HttpContextToken
} from "./chunk-SYDUVPRB.js";
import "./chunk-WTEKUQ4S.js";
import "./chunk-NYOI5KQG.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Pipe,
  ViewChild,
  inject,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵanimateLeave,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵviewQuery
} from "./chunk-FGEBEEOQ.js";
import {
  BehaviorSubject,
  Subject,
  filter,
  finalize,
  takeUntil
} from "./chunk-RSS3ODKE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/ngx-spinner/fesm2022/ngx-spinner.mjs
var _c0 = ["overlay"];
var _c1 = ["*"];
function NgxSpinnerComponent_Conditional_0_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElement(0, "div");
  }
}
function NgxSpinnerComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "div");
    ɵɵrepeaterCreate(1, NgxSpinnerComponent_Conditional_0_Conditional_2_For_2_Template, 1, 0, "div", null, ɵɵrepeaterTrackByIdentity);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.spinner.class);
    ɵɵstyleProp("color", ctx_r1.spinner.color);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.spinner.divArray);
  }
}
function NgxSpinnerComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElement(0, "div", 4);
    ɵɵpipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵdomProperty("innerHTML", ɵɵpipeBind1(1, 1, ctx_r1.template), ɵɵsanitizeHtml);
  }
}
function NgxSpinnerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 2, 0);
    ɵɵanimateLeave(function NgxSpinnerComponent_Conditional_0_Template_animateleave_cb() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.disableAnimation ? "" : "fade-out");
    });
    ɵɵconditionalCreate(2, NgxSpinnerComponent_Conditional_0_Conditional_2_Template, 3, 4, "div", 3);
    ɵɵconditionalCreate(3, NgxSpinnerComponent_Conditional_0_Conditional_3_Template, 2, 3, "div", 4);
    ɵɵdomElementStart(4, "div", 5);
    ɵɵprojection(5);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("background-color", ctx_r1.spinner.bdColor)("z-index", ctx_r1.spinner.zIndex)("position", ctx_r1.spinner.fullScreen ? "fixed" : "absolute");
    ɵɵclassProp("no-animate", ctx_r1.disableAnimation);
    ɵɵattribute("popover", ctx_r1.usesPopover ? "manual" : null);
    ɵɵadvance(2);
    ɵɵconditional(!ctx_r1.template ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.template ? 3 : -1);
    ɵɵadvance();
    ɵɵstyleProp("z-index", ctx_r1.spinner.zIndex);
  }
}
var LOADERS = {
  "ball-8bits": 16,
  "ball-atom": 4,
  "ball-beat": 3,
  "ball-circus": 5,
  "ball-climbing-dot": 4,
  "ball-clip-rotate": 1,
  "ball-clip-rotate-multiple": 2,
  "ball-clip-rotate-pulse": 2,
  "ball-elastic-dots": 5,
  "ball-fall": 3,
  "ball-fussion": 4,
  "ball-grid-beat": 9,
  "ball-grid-pulse": 9,
  "ball-newton-cradle": 4,
  "ball-pulse": 3,
  "ball-pulse-rise": 5,
  "ball-pulse-sync": 3,
  "ball-rotate": 1,
  "ball-running-dots": 5,
  "ball-scale": 1,
  "ball-scale-multiple": 3,
  "ball-scale-pulse": 2,
  "ball-scale-ripple": 1,
  "ball-scale-ripple-multiple": 3,
  "ball-spin": 8,
  "ball-spin-clockwise": 8,
  "ball-spin-clockwise-fade": 8,
  "ball-spin-clockwise-fade-rotating": 8,
  "ball-spin-fade": 8,
  "ball-spin-fade-rotating": 8,
  "ball-spin-rotate": 2,
  "ball-square-clockwise-spin": 8,
  "ball-square-spin": 8,
  "ball-triangle-path": 3,
  "ball-zig-zag": 2,
  "ball-zig-zag-deflect": 2,
  cog: 1,
  "cube-transition": 2,
  fire: 3,
  "line-scale": 5,
  "line-scale-party": 5,
  "line-scale-pulse-out": 5,
  "line-scale-pulse-out-rapid": 5,
  "line-spin-clockwise-fade": 8,
  "line-spin-clockwise-fade-rotating": 8,
  "line-spin-fade": 8,
  "line-spin-fade-rotating": 8,
  pacman: 6,
  "square-jelly-box": 2,
  "square-loader": 1,
  "square-spin": 1,
  timer: 1,
  "triangle-skew-spin": 1
};
var DEFAULTS = {
  BD_COLOR: "rgba(51,51,51,0.8)",
  SPINNER_COLOR: "#fff",
  Z_INDEX: 99999
};
var PRIMARY_SPINNER = "primary";
var NgxSpinner = class _NgxSpinner {
  constructor(init) {
    this.template = null;
    Object.assign(this, init);
  }
  static create(init) {
    if (!init?.template && !init?.type) {
      console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`);
    }
    return new _NgxSpinner(init);
  }
};
var _NgxSpinnerService = class _NgxSpinnerService {
  constructor() {
    this.spinnerObservable = new BehaviorSubject(null);
  }
  /**
   * Get subscription of desired spinner
   * @memberof NgxSpinnerService
   **/
  getSpinner(name) {
    return this.spinnerObservable.asObservable().pipe(filter((x) => !!x && x.name === name));
  }
  /**
   * To show spinner
   *
   * @memberof NgxSpinnerService
   */
  show(name = PRIMARY_SPINNER, spinner) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (spinner && Object.keys(spinner).length) {
          spinner["name"] = name;
          this.spinnerObservable.next(new NgxSpinner(__spreadProps(__spreadValues({}, spinner), {
            show: true
          })));
          resolve(true);
        } else {
          this.spinnerObservable.next(new NgxSpinner({
            name,
            show: true
          }));
          resolve(true);
        }
      }, 10);
    });
  }
  /**
   * To hide spinner
   *
   * @memberof NgxSpinnerService
   */
  hide(name = PRIMARY_SPINNER, debounce = 10) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        this.spinnerObservable.next(new NgxSpinner({
          name,
          show: false
        }));
        resolve(true);
      }, debounce);
    });
  }
};
_NgxSpinnerService.ɵfac = function NgxSpinnerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxSpinnerService)();
};
_NgxSpinnerService.ɵprov = ɵɵdefineInjectable({
  token: _NgxSpinnerService,
  factory: _NgxSpinnerService.ɵfac,
  providedIn: "root"
});
var NgxSpinnerService = _NgxSpinnerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NGX_SPINNER_CONFIG = new InjectionToken("NGX_SPINNER_CONFIG");
var _SafeHtmlPipe = class _SafeHtmlPipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  transform(value) {
    return value ? this.sanitizer.bypassSecurityTrustHtml(value) : "";
  }
};
_SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SafeHtmlPipe)();
};
_SafeHtmlPipe.ɵpipe = ɵɵdefinePipe({
  name: "safeHtml",
  type: _SafeHtmlPipe,
  pure: true
});
var SafeHtmlPipe = _SafeHtmlPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml",
      standalone: true
    }]
  }], null, null);
})();
var _NgxSpinnerComponent = class _NgxSpinnerComponent {
  /**
   * Whether the overlay for the current spinner state should render using
   * the native Popover API.
   *
   * @memberof NgxSpinnerComponent
   */
  get usesPopover() {
    return this.spinner.fullScreen && this.effectiveUsePopover && _NgxSpinnerComponent.popoverSupported;
  }
  /**
   * Creates an instance of NgxSpinnerComponent.
   *
   * @memberof NgxSpinnerComponent
   */
  constructor() {
    this.template = null;
    this.disableAnimation = false;
    this.spinner = new NgxSpinner();
    this.ngUnsubscribe = new Subject();
    this.effectiveUsePopover = true;
    this.spinnerService = inject(NgxSpinnerService);
    this.changeDetector = inject(ChangeDetectorRef);
    this.elementRef = inject(ElementRef);
    this.globalConfig = inject(NGX_SPINNER_CONFIG, {
      optional: true
    });
    this.setDefaultOptions = () => {
      const {
        type,
        usePopover: globalUsePopover
      } = this.globalConfig ?? {};
      this.effectiveUsePopover = this.usePopover ?? globalUsePopover ?? true;
      this.spinner = NgxSpinner.create({
        name: this.name,
        bdColor: this.bdColor,
        size: this.size,
        color: this.color,
        type: this.type ?? type,
        fullScreen: this.fullScreen,
        divArray: this.divArray,
        divCount: this.divCount,
        show: this.show,
        zIndex: this.zIndex,
        template: this.template,
        showSpinner: this.showSpinner
      });
    };
    this.bdColor = DEFAULTS.BD_COLOR;
    this.zIndex = DEFAULTS.Z_INDEX;
    this.color = DEFAULTS.SPINNER_COLOR;
    this.size = "large";
    this.fullScreen = true;
    this.name = PRIMARY_SPINNER;
    this.template = null;
    this.showSpinner = false;
    this.divArray = [];
    this.divCount = 0;
    this.show = false;
  }
  initObservable() {
    this.spinnerService.getSpinner(this.name).pipe(takeUntil(this.ngUnsubscribe)).subscribe((spinner) => {
      this.setDefaultOptions();
      Object.assign(this.spinner, spinner);
      if (spinner.show) {
        this.onInputChange();
      }
      this.changeDetector.detectChanges();
      this.syncPopoverState();
    });
  }
  /**
   * Promotes the overlay into the native Popover API "top layer" when
   * `usesPopover` is enabled, so it can render above other top-layer
   * elements such as MatDialog. No-op otherwise, or when the element is
   * already open.
   *
   * @memberof NgxSpinnerComponent
   */
  syncPopoverState() {
    if (!this.usesPopover) {
      return;
    }
    const element = this.spinnerDOM?.nativeElement;
    if (element && !element.matches(":popover-open")) {
      element.showPopover();
    }
  }
  /**
   * Initialization method
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnInit() {
    this.setDefaultOptions();
    this.initObservable();
  }
  /**
   * To check event triggers inside the Spinner Zone
   *
   * @param {*} element
   * @returns {boolean}
   * @memberof NgxSpinnerComponent
   */
  isSpinnerZone(element) {
    if (!element) {
      return false;
    }
    if (element === this.elementRef.nativeElement.parentElement) {
      return true;
    }
    return this.isSpinnerZone(element.parentNode);
  }
  /**
   * On changes event for input variables
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnChanges(changes) {
    for (const propName in changes) {
      if (propName) {
        const changedProp = changes[propName];
        if (changedProp.isFirstChange()) {
          return;
        } else if (typeof changedProp.currentValue !== "undefined" && changedProp.currentValue !== changedProp.previousValue) {
          if (changedProp.currentValue !== "") {
            this.spinner[propName] = changedProp.currentValue;
            if (propName === "showSpinner") {
              if (changedProp.currentValue) {
                this.spinnerService.show(this.spinner.name, this.spinner);
              } else {
                this.spinnerService.hide(this.spinner.name);
              }
            }
            if (propName === "name") {
              this.initObservable();
            }
          }
        }
      }
    }
  }
  /**
   * To get class for spinner
   *
   * @memberof NgxSpinnerComponent
   */
  getClass(type, size) {
    this.spinner.divCount = LOADERS[type];
    this.spinner.divArray = Array(this.spinner.divCount).fill(0).map((_, i) => i);
    let sizeClass = "";
    switch (size.toLowerCase()) {
      case "small":
        sizeClass = "la-sm";
        break;
      case "medium":
        sizeClass = "la-2x";
        break;
      case "large":
        sizeClass = "la-3x";
        break;
      default:
        break;
    }
    return "la-" + type + " " + sizeClass;
  }
  /**
   * Check if input variables have changed
   *
   * @memberof NgxSpinnerComponent
   */
  onInputChange() {
    this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
  }
  /**
   * Component destroy event
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
};
_NgxSpinnerComponent.popoverSupported = typeof HTMLElement !== "undefined" && "showPopover" in HTMLElement.prototype;
_NgxSpinnerComponent.ɵfac = function NgxSpinnerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxSpinnerComponent)();
};
_NgxSpinnerComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxSpinnerComponent,
  selectors: [["ngx-spinner"]],
  viewQuery: function NgxSpinnerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.spinnerDOM = _t.first);
    }
  },
  inputs: {
    bdColor: "bdColor",
    size: "size",
    color: "color",
    type: "type",
    fullScreen: "fullScreen",
    name: "name",
    zIndex: "zIndex",
    template: "template",
    showSpinner: "showSpinner",
    disableAnimation: "disableAnimation",
    usePopover: "usePopover"
  },
  features: [ɵɵNgOnChangesFeature],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 1,
  consts: [["overlay", ""], [1, "ngx-spinner-overlay", 3, "no-animate", "background-color", "z-index", "position"], [1, "ngx-spinner-overlay"], [3, "class", "color"], [3, "innerHTML"], [1, "loading-text"]],
  template: function NgxSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵconditionalCreate(0, NgxSpinnerComponent_Conditional_0_Template, 6, 13, "div", 1);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.spinner.show ? 0 : -1);
    }
  },
  dependencies: [SafeHtmlPipe],
  styles: [".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;transition:opacity .3s ease-in}.ngx-spinner-overlay[popover][_ngcontent-%COMP%]{inset:0;margin:0;padding:0;border:none;width:100%;height:100%;overflow:visible;color:inherit;background-color:transparent}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}@starting-style{.ngx-spinner-overlay[_ngcontent-%COMP%]{opacity:0}}.fade-out[_ngcontent-%COMP%]{opacity:0;transition:opacity .2s ease-out}.no-animate[_ngcontent-%COMP%]{transition:none!important}@starting-style{.no-animate[_ngcontent-%COMP%]{opacity:1!important;transition:none!important}}"],
  changeDetection: 0
});
var NgxSpinnerComponent = _NgxSpinnerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerComponent, [{
    type: Component,
    args: [{
      imports: [SafeHtmlPipe],
      selector: "ngx-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (spinner.show) {
  <div
    class="ngx-spinner-overlay"
    [class.no-animate]="disableAnimation"
    [animate.leave]="disableAnimation ? '' : 'fade-out'"
    [style.background-color]="spinner.bdColor"
    [style.z-index]="spinner.zIndex"
    [style.position]="spinner.fullScreen ? 'fixed' : 'absolute'"
    [attr.popover]="usesPopover ? 'manual' : null"
    #overlay
  >
    @if (!template) {
      <div [class]="spinner.class" [style.color]="spinner.color">
        @for (index of spinner.divArray; track index) {
          <div></div>
        }
      </div>
    }
    @if (template) {
      <div [innerHTML]="template | safeHtml"></div>
    }
    <div class="loading-text" [style.z-index]="spinner.zIndex">
      <ng-content></ng-content>
    </div>
  </div>
}
`,
      styles: [".ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;transition:opacity .3s ease-in}.ngx-spinner-overlay[popover]{inset:0;margin:0;padding:0;border:none;width:100%;height:100%;overflow:visible;color:inherit;background-color:transparent}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}@starting-style{.ngx-spinner-overlay{opacity:0}}.fade-out{opacity:0;transition:opacity .2s ease-out}.no-animate{transition:none!important}@starting-style{.no-animate{opacity:1!important;transition:none!important}}\n"]
    }]
  }], () => [], {
    bdColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    fullScreen: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    zIndex: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    showSpinner: [{
      type: Input
    }],
    disableAnimation: [{
      type: Input
    }],
    usePopover: [{
      type: Input
    }],
    spinnerDOM: [{
      type: ViewChild,
      args: ["overlay"]
    }]
  });
})();
var _NgxSpinnerModule = class _NgxSpinnerModule {
  static forRoot(config) {
    return {
      ngModule: _NgxSpinnerModule,
      providers: [{
        provide: NGX_SPINNER_CONFIG,
        useValue: config
      }]
    };
  }
};
_NgxSpinnerModule.ɵfac = function NgxSpinnerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxSpinnerModule)();
};
_NgxSpinnerModule.ɵmod = ɵɵdefineNgModule({
  type: _NgxSpinnerModule,
  imports: [NgxSpinnerComponent, SafeHtmlPipe],
  exports: [NgxSpinnerComponent]
});
_NgxSpinnerModule.ɵinj = ɵɵdefineInjector({});
var NgxSpinnerModule = _NgxSpinnerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [NgxSpinnerComponent, SafeHtmlPipe],
      exports: [NgxSpinnerComponent]
    }]
  }], null, null);
})();
var provideSpinnerConfig = (config) => {
  const providers = [{
    provide: NGX_SPINNER_CONFIG,
    useValue: config
  }];
  return makeEnvironmentProviders(providers);
};
var _NgxSpinnerHttpTrackerService = class _NgxSpinnerHttpTrackerService {
  constructor() {
    this.activeRequestCounts = /* @__PURE__ */ new Map();
  }
  /**
   * Registers the start of a request for the given spinner name.
   *
   * @returns `true` if this is the first in-flight request for that name
   * (i.e. the spinner should be shown).
   */
  start(name) {
    const count = (this.activeRequestCounts.get(name) ?? 0) + 1;
    this.activeRequestCounts.set(name, count);
    return count === 1;
  }
  /**
   * Registers the end of a request for the given spinner name.
   *
   * @returns `true` if there are no more in-flight requests for that name
   * (i.e. the spinner should be hidden).
   */
  end(name) {
    const count = Math.max((this.activeRequestCounts.get(name) ?? 1) - 1, 0);
    if (count === 0) {
      this.activeRequestCounts.delete(name);
    } else {
      this.activeRequestCounts.set(name, count);
    }
    return count === 0;
  }
};
_NgxSpinnerHttpTrackerService.ɵfac = function NgxSpinnerHttpTrackerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxSpinnerHttpTrackerService)();
};
_NgxSpinnerHttpTrackerService.ɵprov = ɵɵdefineInjectable({
  token: _NgxSpinnerHttpTrackerService,
  factory: _NgxSpinnerHttpTrackerService.ɵfac,
  providedIn: "root"
});
var NgxSpinnerHttpTrackerService = _NgxSpinnerHttpTrackerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerHttpTrackerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NGX_SPINNER_HTTP_CONFIG = new InjectionToken("NGX_SPINNER_HTTP_CONFIG");
var NGX_SPINNER_SKIP = new HttpContextToken(() => false);
var provideNgxSpinnerHttpConfig = (config) => {
  const providers = [{
    provide: NGX_SPINNER_HTTP_CONFIG,
    useValue: config
  }];
  return makeEnvironmentProviders(providers);
};
function isExcluded(url, excludedUrls) {
  if (!excludedUrls) {
    return false;
  }
  return excludedUrls.some((pattern) => typeof pattern === "string" ? url.includes(pattern) : pattern.test(url));
}
function handleSpinnerForRequest(req, event$, spinnerService, tracker, config) {
  if (req.context.get(NGX_SPINNER_SKIP) || isExcluded(req.urlWithParams, config?.excludedUrls)) {
    return event$;
  }
  const name = config?.name ?? PRIMARY_SPINNER;
  if (tracker.start(name)) {
    spinnerService.show(name, config?.spinner);
  }
  return event$.pipe(finalize(() => {
    if (tracker.end(name)) {
      spinnerService.hide(name);
    }
  }));
}
var ngxSpinnerInterceptor = (req, next) => {
  const spinnerService = inject(NgxSpinnerService);
  const tracker = inject(NgxSpinnerHttpTrackerService);
  const config = inject(NGX_SPINNER_HTTP_CONFIG, {
    optional: true
  });
  return handleSpinnerForRequest(req, next(req), spinnerService, tracker, config);
};
var _NgxSpinnerInterceptor = class _NgxSpinnerInterceptor {
  constructor() {
    this.spinnerService = inject(NgxSpinnerService);
    this.tracker = inject(NgxSpinnerHttpTrackerService);
    this.config = inject(NGX_SPINNER_HTTP_CONFIG, {
      optional: true
    });
  }
  intercept(req, next) {
    return handleSpinnerForRequest(req, next.handle(req), this.spinnerService, this.tracker, this.config);
  }
};
_NgxSpinnerInterceptor.ɵfac = function NgxSpinnerInterceptor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxSpinnerInterceptor)();
};
_NgxSpinnerInterceptor.ɵprov = ɵɵdefineInjectable({
  token: _NgxSpinnerInterceptor,
  factory: _NgxSpinnerInterceptor.ɵfac
});
var NgxSpinnerInterceptor = _NgxSpinnerInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSpinnerInterceptor, [{
    type: Injectable
  }], null, null);
})();
export {
  DEFAULTS,
  LOADERS,
  NGX_SPINNER_HTTP_CONFIG,
  NGX_SPINNER_SKIP,
  NgxSpinner,
  NgxSpinnerComponent,
  NgxSpinnerInterceptor,
  NgxSpinnerModule,
  NgxSpinnerService,
  PRIMARY_SPINNER,
  ngxSpinnerInterceptor,
  provideNgxSpinnerHttpConfig,
  provideSpinnerConfig
};
//# sourceMappingURL=ngx-spinner.js.map
