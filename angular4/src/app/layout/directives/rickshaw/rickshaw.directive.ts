import { Directive, ElementRef, Input } from '@angular/core';

declare let Rickshaw: any;

@Directive ({
  selector: '[rickshaw-chart]'
})

export class RickshawChart {
  elRef: ElementRef;
  @Input() height: string;
  @Input() series: Array<any>;
  @Input() seriesData: Array<any>;
  @Input() random: any;
  @Input() configureProps: Object;
  @Input() isrealTime: boolean;
  @Input() renderer: string;
  @Input() messages: Array<string>;
  @Input() addAnnotation: boolean;

  constructor(el: ElementRef) {
    this.elRef = el;
  }

  render(): void {
    let graph = new Rickshaw.Graph({
      element: this.elRef.nativeElement,
      height: this.height,
      renderer: this.renderer || 'area',
      series: this.series,
      stroke: true,
      preserve: true,
    });

    let onResize = () => {
      let configureProperties = Object.assign({
        height: this.height
      }, this.configureProps);
      graph.configure(configureProperties);
      graph.render();

      let svg = this.elRef.nativeElement.getElementsByTagName('svg')[0];
      Object.assign(svg.style, {height: this.height, width: '100%'});
    };

    window.addEventListener('sn:resize', onResize);
    onResize();

    let hoverDetail = new Rickshaw.Graph.HoverDetail({
      graph: graph,
      xFormatter: function(x): string {
        return new Date(x * 1000).toString();
      }
    });

    let annotator = new Rickshaw.Graph.Annotate( {
      graph: graph,
      element: document.getElementById('timeline')
    } );

    let legend = new Rickshaw.Graph.Legend( {
      graph: graph,
      element: document.getElementById('legend')

    } );

    let shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
      graph: graph,
      legend: legend
    } );

    let order = new Rickshaw.Graph.Behavior.Series.Order( {
      graph: graph,
      legend: legend
    } );

    let highlighter = new Rickshaw.Graph.Behavior.Series.Highlight( {
      graph: graph,
      legend: legend
    } );

    let ticksTreatment = 'glow';

    let xAxis = new Rickshaw.Graph.Axis.Time( {
      graph: graph,
      ticksTreatment: ticksTreatment
    } );

    xAxis.render();

    let yAxis = new Rickshaw.Graph.Axis.Y( {
      graph: graph,
      tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
      ticksTreatment: ticksTreatment
    } );

    yAxis.render();

    if (this.isrealTime) {
      setInterval( () => {
        this.random.removeData(this.seriesData);
        this.random.addData(this.seriesData);
        graph.update();
      }, 1000 );
    }

    let addAnnotation = (force) => {
      if (this.messages.length > 0 && (force || Math.random() >= 0.9)) {
        annotator.add(this.seriesData[2][this.seriesData[2].length - 1].x, this.messages.shift());
      }
    };

    if (this.addAnnotation) {
      addAnnotation(true);
      setTimeout( () => { setInterval( () => addAnnotation(false), 3000 ); }, 3000 );
    }
  }

  ngOnInit(): void {
    this.render();
  }
}
