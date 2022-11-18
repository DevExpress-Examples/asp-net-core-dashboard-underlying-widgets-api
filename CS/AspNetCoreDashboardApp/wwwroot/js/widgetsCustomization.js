function onBeforeRender(s, e) {
    var viewerApiExtension = s.findExtension('viewer-api');
    if (viewerApiExtension) {
        viewerApiExtension.on('itemWidgetOptionsPrepared', customizeWidgetOptions);
        viewerApiExtension.on('itemWidgetUpdated', customizeWidget);
        viewerApiExtension.on('itemWidgetCreated', customizeWidget);
    }
}
function customizeWidgetOptions(e) {
    if (e.dashboardItem instanceof DevExpress.Dashboard.Model.GridItem) {
        e.options.hoverStateEnabled = true
    };
    if (e.dashboardItem instanceof DevExpress.Dashboard.Model.ChartItem) {
        e.options.tooltip.enabled = false;
        e.options.animation = {
            ...e.options.animation,
            enabled: true,
            duration: 1000
        };
        e.options.onArgumentAxisClick = function (info) {
            info.component.getAllSeries()[0].getPointsByArg(info.argument)[0].showTooltip();
        }
    };
    if (e.dashboardItem instanceof DevExpress.Dashboard.Model.PieItem) {
        e.options.legend = {
            ...e.options.legend,
            visible: true,
            border: {
                ...e.options.legend.border,
                visible: true
            }
        };
        e.options.animation = {
            ...e.options.animation,
            enabled: true,
            duration: 1000
        };
    };
    if (e.dashboardItem instanceof DevExpress.Dashboard.Model.GaugeItem) {
        var gaugesCollection = e.dashboardItem.gauges();
        gaugesCollection.forEach(element => {
            if (element.actualValue().dataMember() == 'ExtendedPrice') {
                e.options.scale.tick.tickInterval = 1000
            }
        });
    };
}
function customizeWidget(e) {
    if (e.dashboardItem instanceof DevExpress.Dashboard.Model.GaugeItem) {
        var gaugesCollection = e.getWidget();
        gaugesCollection.forEach(element => {
            element.option('scale.label.font.weight', '600');

        });
    }
}