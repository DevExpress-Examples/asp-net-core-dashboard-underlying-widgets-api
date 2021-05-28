<!-- default file list -->
*Files to look at*:

* [Index.cshtml](./CS/AspNetCoreDashboardApp/Pages/Index.cshtml)
* [_Layout.cshtml](./CS/AspNetCoreDashboardApp/Pages/_Layout.cshtml)
* [widgetsCustomization.js](./CS/ASPxDashboard_UnderlyingWidgets/wwwroot/js/widgetsCustomization.js)
<!-- default file list end -->
# How to access API of underlying widgets in the ASP.NET Core Dashboard Control


The following example shows how to customize options of underlying widgets in ASP.NET Core. For this, you need to handle the [onItemWidgetOptionsPrepared](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtensionOptions?p=netframework#js_devexpress_dashboard_viewerapiextensionoptions_onitemwidgetoptionsprepared) event.

The customized options are listed below:

- The hovered grid row is highlighted in the underlying [dxDataGrid](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxDataGrid/).
- A standard tooltip that appears when a user hovers over a chart's series point is disabled. 
- A custom tooltip appears when a user clicks a label on the chart's argument axis. The [onArgumentAxisClick](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/Configuration/#onArgumentAxisClick) property executes a function that invokes the custom tooltip.
- The [animation](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/Configuration/animation/) is enabled for the [dxChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/) and [dxPieChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxPieChart/) widgets.
- The [dxPieChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxPieChart/) widget displays a legend.

## Documentation

- [Access to Underlying Widgets in ASP.NET Core](https://docs.devexpress.com/Dashboard/401090/web-dashboard/aspnet-core-dashboard-control/access-to-underlying-widgets?p=netframework)