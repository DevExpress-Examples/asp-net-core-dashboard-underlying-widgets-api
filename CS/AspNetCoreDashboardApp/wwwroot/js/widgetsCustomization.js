function onBeforeRender(s, e) {
    var viewerApiExtension = s.findExtension('viewer-api');
    if (viewerApiExtension)
        viewerApiExtension.on('itemWidgetOptionsPrepared', customizeWidgetOptions);
}
function customizeWidgetOptions(e) {
    if (e.dashboardItem instanceof DevExpress.Dashboard.Model.GridItem) {
        e.options.hoverStateEnabled = true
    };
    if (e.dashboardItem instanceof DevExpress.Dashboard.Model.ChartItem) {
        e.options.tooltip = {
            enabled: false
        };
        e.options.animation = {
            enabled: true,
            duration: 1000
        };
        e.options.onArgumentAxisClick = function (info) {
            info.component.getAllSeries()[0].getPointsByArg(info.argument)[0].showTooltip()
        }
    };
    if (e.dashboardItem instanceof DevExpress.Dashboard.Model.PieItem) {
        e.options.legend = {
            visible: true,
            border: {
                visible: true
            }
        };
        e.options.animation = {
            enabled: true,
            duration: 1000
        };
    }
}