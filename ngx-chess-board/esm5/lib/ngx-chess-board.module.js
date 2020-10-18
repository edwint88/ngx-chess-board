/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-chess-board.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChessBoardComponent } from './ngx-chess-board.component';
import { PiecePromotionModalComponent } from './piece-promotion-modal/piece-promotion-modal.component';
import { NgxChessBoardService } from './service/ngx-chess-board.service';
var NgxChessBoardModule = /** @class */ (function () {
    function NgxChessBoardModule() {
    }
    /**
     * @return {?}
     */
    NgxChessBoardModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxChessBoardModule,
            providers: [NgxChessBoardService],
        };
    };
    NgxChessBoardModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxChessBoardComponent, PiecePromotionModalComponent],
                    imports: [CommonModule, DragDropModule],
                    exports: [NgxChessBoardComponent],
                },] }
    ];
    return NgxChessBoardModule;
}());
export { NgxChessBoardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoZXNzLWJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2hlc3MtYm9hcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV6RTtJQUFBO0lBWUEsQ0FBQzs7OztJQU5VLDJCQUFPOzs7SUFBZDtRQUNJLE9BQU87WUFDSCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7SUFDTixDQUFDOztnQkFYSixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsNEJBQTRCLENBQUM7b0JBQ3BFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNwQzs7SUFRRCwwQkFBQztDQUFBLEFBWkQsSUFZQztTQVBZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neENoZXNzQm9hcmRDb21wb25lbnQgfSBmcm9tICcuL25neC1jaGVzcy1ib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQaWVjZVByb21vdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neENoZXNzQm9hcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL25neC1jaGVzcy1ib2FyZC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtOZ3hDaGVzc0JvYXJkQ29tcG9uZW50LCBQaWVjZVByb21vdGlvbk1vZGFsQ29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERyYWdEcm9wTW9kdWxlXSxcclxuICAgIGV4cG9ydHM6IFtOZ3hDaGVzc0JvYXJkQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neENoZXNzQm9hcmRNb2R1bGUge1xyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IE5neENoZXNzQm9hcmRNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW05neENoZXNzQm9hcmRTZXJ2aWNlXSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==