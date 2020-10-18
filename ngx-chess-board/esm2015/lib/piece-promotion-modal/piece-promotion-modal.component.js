/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-promotion-modal/piece-promotion-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Color } from '../models/pieces/color';
export class PiecePromotionModalComponent {
    constructor() {
        this.selectedIndex = 0;
        this.Color = Color;
        this.opened = false;
    }
    /**
     * @param {?} color
     * @param {?} closeCallback
     * @return {?}
     */
    open(color, closeCallback) {
        this.opened = true;
        this.color = color;
        this.onCloseCallback = closeCallback;
        this.modal.nativeElement.style.display = 'block';
    }
    /**
     * @param {?} index
     * @return {?}
     */
    changeSelection(index) {
        this.modal.nativeElement.style.display = 'none';
        this.opened = false;
        this.onCloseCallback(index);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPL0MsTUFBTSxPQUFPLDRCQUE0QjtJQUx6QztRQVFJLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBZW5CLENBQUM7Ozs7OztJQVpHLElBQUksQ0FBQyxLQUFZLEVBQUUsYUFBc0M7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQXpCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsaWpDQUFxRDs7YUFFeEQ7OztvQkFFSSxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQUFyQyw2Q0FBeUQ7O0lBRXpELHFEQUFrQjs7SUFDbEIsNkNBQWE7O0lBQ2IsNkNBQWM7O0lBQ2QsOENBQWU7Ozs7O0lBQ2YsdURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICcuLi9tb2RlbHMvcGllY2VzL2NvbG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtcGllY2UtcHJvbW90aW9uLW1vZGFsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9waWVjZS1wcm9tb3Rpb24tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaWVjZVByb21vdGlvbk1vZGFsQ29tcG9uZW50IHtcclxuICAgIEBWaWV3Q2hpbGQoJ21vZGFsJywgeyBzdGF0aWM6IGZhbHNlIH0pIG1vZGFsOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgY29sb3I6IENvbG9yO1xyXG4gICAgQ29sb3IgPSBDb2xvcjtcclxuICAgIG9wZW5lZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBvbkNsb3NlQ2FsbGJhY2s6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG5cclxuICAgIG9wZW4oY29sb3I6IENvbG9yLCBjbG9zZUNhbGxiYWNrOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlQ2FsbGJhY2sgPSBjbG9zZUNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTZWxlY3Rpb24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlQ2FsbGJhY2soaW5kZXgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==