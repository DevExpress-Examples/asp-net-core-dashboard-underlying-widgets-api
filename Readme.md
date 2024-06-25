<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/371736161/21.2.1%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1002173)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Dashboard for ASP.NET Core - How to access API of underlying widgets

The following example shows how to customize options of underlying widgets in ASP.NET Core.

Use the [ViewerApiExtension.on](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension#js_devexpress_dashboard_viewerapiextension_on) and [ViewerApiExtension.off](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension#js_devexpress_dashboard_viewerapiextension_off) methods to subscribe and unsubscribe from the events.

The Web Dashboard renders an underlying widget as follows:

1. The Web Dashboard loads the widget’s default configuration.

    The [onItemWidgetOptionsPrepared](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtensionOptions#js_devexpress_dashboard_viewerapiextensionoptions_onitemwidgetoptionsprepared) event is raised. Handle this event to customize the DevExtreme widget’s options before the widget is rendered.

1. The Web Dashboard renders the UI component with the configured options.

    The [onItemWidgetCreated](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtensionOptions#js_devexpress_dashboard_viewerapiextensionoptions_onitemwidgetcreated) event is raised. It occurs once for each UI component when the dashboard is loaded to the client. You can use this event to customize the UI component instance.

1. The UI component is updated (for example, when you apply filters or change parameter values).

    The [onItemWidgetUpdated](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtensionOptions#js_devexpress_dashboard_viewerapiextensionoptions_onitemwidgetupdated) event is raised. It occurs every time the UI component should be re-rendered. 
	

The customized options are listed below:

- The hovered grid row is highlighted in the underlying [dxDataGrid](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxDataGrid/).
- A standard tooltip that appears when a user hovers over a chart's series point is disabled. 
- A custom tooltip appears when a user clicks a label on the chart's argument axis. The [onArgumentAxisClick](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/Configuration/#onArgumentAxisClick) property executes a function that invokes the custom tooltip.
- The [animation](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/Configuration/animation/) is enabled for the [dxChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/) and [dxPieChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxPieChart/) UI components.
- The [dxPieChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxPieChart/) UI component displays a legend.
- The font weight and an interval between major ticks are modified in the [dxCircularGauge](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxCircularGauge/) UI component.


## Files to Review:

* [Index.cshtml](./CS/AspNetCoreDashboardApp/Pages/Index.cshtml)
* [_Layout.cshtml](./CS/AspNetCoreDashboardApp/Pages/_Layout.cshtml)
* [widgetsCustomization.js](./CS/AspNetCoreDashboardApp/wwwroot/js/widgetsCustomization.js)

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
