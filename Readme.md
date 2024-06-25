<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/371736161/21.1.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1002173)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
<!-- default file list -->
*Files to look at*:

* [Index.cshtml](./CS/AspNetCoreDashboardApp/Pages/Index.cshtml)
* [_Layout.cshtml](./CS/AspNetCoreDashboardApp/Pages/_Layout.cshtml)
* [widgetsCustomization.js](./CS/AspNetCoreDashboardApp/wwwroot/js/widgetsCustomization.js)
<!-- default file list end -->
# Dashboard for ASP.NET Core - How to access API of underlying widgets


The following example shows how to customize options of underlying widgets in ASP.NET Core. For this, you need to handle the [onItemWidgetOptionsPrepared](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtensionOptions?p=netframework#js_devexpress_dashboard_viewerapiextensionoptions_onitemwidgetoptionsprepared) event.

The customized options are listed below:

- The hovered grid row is highlighted in the underlying [dxDataGrid](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxDataGrid/).
- A standard tooltip that appears when a user hovers over a chart's series point is disabled. 
- A custom tooltip appears when a user clicks a label on the chart's argument axis. The [onArgumentAxisClick](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/Configuration/#onArgumentAxisClick) property executes a function that invokes the custom tooltip.
- The [animation](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/Configuration/animation/) is enabled for the [dxChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/) and [dxPieChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxPieChart/) widgets.
- The [dxPieChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxPieChart/) widget displays a legend.

## Documentation

- [Access to Underlying Widgets in ASP.NET Core](https://docs.devexpress.com/Dashboard/401090/web-dashboard/aspnet-core-dashboard-control/access-to-underlying-widgets?p=netframework)

## More Examples

- [ASP.NET Web Forms Dashboard - How to access API of underlying widgets](https://github.com/DevExpress-Examples/how-to-access-api-of-underlying-widgets-in-the-aspnet-dashboard-control-t492396)
- [ASP.NET MVC Dashboard - How to access API of underlying widgets](https://github.com/DevExpress-Examples/asp-net-mvc-dashboard-underlying-widgets-api)
- [Dashboard Component for React - How to access API of underlying widgets](https://github.com/DevExpress-Examples/dashboard-react-underlying-widgets-api)
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=asp-net-core-dashboard-underlying-widgets-api&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=asp-net-core-dashboard-underlying-widgets-api&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
