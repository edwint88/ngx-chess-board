/**
 * @fileoverview added by tsickle
 * Generated from: lib/service/ngx-chess-board.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class NgxChessBoardService {
    constructor() {
        this.componentMethodCallSource = new Subject();
        this.componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    }
    /**
     * @return {?}
     */
    reset() {
        this.componentMethodCallSource.next();
    }
}
NgxChessBoardService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ NgxChessBoardService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function NgxChessBoardService_Factory() { return new NgxChessBoardService(); }, token: NgxChessBoardService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxChessBoardService.prototype.componentMethodCallSource;
    /** @type {?} */
    NgxChessBoardService.prototype.componentMethodCalled$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoZXNzLWJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9uZ3gtY2hlc3MtYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLL0IsTUFBTSxPQUFPLG9CQUFvQjtJQUhqQztRQUlZLDhCQUF5QixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFFdkQsMkJBQXNCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO0tBSzFFOzs7O0lBSEcsS0FBSztRQUNELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7WUFWSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7Ozs7O0lBRUcseURBQXVEOztJQUV2RCxzREFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neENoZXNzQm9hcmRTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgY29tcG9uZW50TWV0aG9kQ2FsbFNvdXJjZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgICBjb21wb25lbnRNZXRob2RDYWxsZWQkID0gdGhpcy5jb21wb25lbnRNZXRob2RDYWxsU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50TWV0aG9kQ2FsbFNvdXJjZS5uZXh0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19