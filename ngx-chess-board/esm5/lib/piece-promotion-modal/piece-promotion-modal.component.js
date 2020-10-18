/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-promotion-modal/piece-promotion-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Color } from '../models/pieces/color';
var PiecePromotionModalComponent = /** @class */ (function () {
    function PiecePromotionModalComponent() {
        this.selectedIndex = 0;
        this.Color = Color;
        this.opened = false;
    }
    /**
     * @param {?} color
     * @param {?} closeCallback
     * @return {?}
     */
    PiecePromotionModalComponent.prototype.open = /**
     * @param {?} color
     * @param {?} closeCallback
     * @return {?}
     */
    function (color, closeCallback) {
        this.opened = true;
        this.color = color;
        this.onCloseCallback = closeCallback;
        this.modal.nativeElement.style.display = 'block';
    };
    /**
     * @param {?} index
     * @return {?}
     */
    PiecePromotionModalComponent.prototype.changeSelection = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.modal.nativeElement.style.display = 'none';
        this.opened = false;
        this.onCloseCallback(index);
    };
    PiecePromotionModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-piece-promotion-modal',
                    template: "<div\r\n    class=\"container\"\r\n    #modal\r\n>\r\n    <div class=\"wrapper\">\r\n        <div\r\n            class=\"piece\"\r\n            [class.black-bishop]=\"piece === 'bishop' && color === Color.BLACK\"\r\n            [class.black-knight]=\"piece === 'knight' && color === Color.BLACK\"\r\n            [class.black-queen]=\"piece === 'queen' && color === Color.BLACK\"\r\n            [class.black-rook]=\"piece === 'rook' && color === Color.BLACK\"\r\n            [class.selected]=\"selectedIndex === index + 1\"\r\n            [class.white-bishop]=\"piece === 'bishop' && color === Color.WHITE\"\r\n            [class.white-knight]=\"piece === 'knight' && color === Color.WHITE\"\r\n            [class.white-queen]=\"piece === 'queen' && color === Color.WHITE\"\r\n            [class.white-rook]=\"piece === 'rook' && color === Color.WHITE\"\r\n            (click)=\"changeSelection(index + 1)\"\r\n            *ngFor=\"let piece of ['queen', 'rook', 'bishop', 'knight']; let index = index\"\r\n        >\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                    styles: [".container{display:none;position:absolute;z-index:1;top:0;color:#000;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.4)}.wrapper{display:flex;background-color:#fff}.content{height:100%}.piece{width:25%;background-repeat:no-repeat;cursor:pointer;background-size:100%;margin:10px;height:100px;border:2px solid grey;border-radius:4px;box-sizing:border-box}.piece:hover{background-color:rgba(0,0,0,.2)}#close-button{border-radius:4px;background-color:#4caf50;border:none;color:#fff;padding-left:5px;padding-right:5px;text-align:center;text-decoration:none;display:inline-block}.selected{border:2px solid #00b919}"]
                }] }
    ];
    PiecePromotionModalComponent.propDecorators = {
        modal: [{ type: ViewChild, args: ['modal', { static: false },] }]
    };
    return PiecePromotionModalComponent;
}());
export { PiecePromotionModalComponent };
if (false) {
    /** @type {?} */
    PiecePromotionModalComponent.prototype.modal;
    /** @type {?} */
    PiecePromotionModalComponent.prototype.selectedIndex;
    /** @type {?} */
    PiecePromotionModalComponent.prototype.color;
    /** @type {?} */
    PiecePromotionModalComponent.prototype.Color;
    /** @type {?} */
    PiecePromotionModalComponent.prototype.opened;
    /**
     * @type {?}
     * @private
     */
    PiecePromotionModalComponent.prototype.onCloseCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0M7SUFBQTtRQVFJLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBZW5CLENBQUM7Ozs7OztJQVpHLDJDQUFJOzs7OztJQUFKLFVBQUssS0FBWSxFQUFFLGFBQXNDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsc0RBQWU7Ozs7SUFBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBekJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxpakNBQXFEOztpQkFFeEQ7Ozt3QkFFSSxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUFvQnpDLG1DQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FyQlksNEJBQTRCOzs7SUFDckMsNkNBQXlEOztJQUV6RCxxREFBa0I7O0lBQ2xCLDZDQUFhOztJQUNiLDZDQUFjOztJQUNkLDhDQUFlOzs7OztJQUNmLHVEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9jb2xvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXBpZWNlLXByb21vdGlvbi1tb2RhbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3BpZWNlLXByb21vdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGllY2VQcm9tb3Rpb25Nb2RhbENvbXBvbmVudCB7XHJcbiAgICBAVmlld0NoaWxkKCdtb2RhbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtb2RhbDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBzZWxlY3RlZEluZGV4ID0gMDtcclxuICAgIGNvbG9yOiBDb2xvcjtcclxuICAgIENvbG9yID0gQ29sb3I7XHJcbiAgICBvcGVuZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgb25DbG9zZUNhbGxiYWNrOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuXHJcbiAgICBvcGVuKGNvbG9yOiBDb2xvciwgY2xvc2VDYWxsYmFjazogKGluZGV4OiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMub25DbG9zZUNhbGxiYWNrID0gY2xvc2VDYWxsYmFjaztcclxuICAgICAgICB0aGlzLm1vZGFsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2VsZWN0aW9uKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25DbG9zZUNhbGxiYWNrKGluZGV4KTtcclxuICAgIH1cclxufVxyXG4iXX0=