import inherits from 'inherits';

import BaseModeler from 'bpmn-js/lib/BaseModeler';

import Viewer from 'bpmn-js/lib/Viewer';
import NavigatedViewer from 'bpmn-js/lib/NavigatedViewer';

import KeyboardMoveModule from 'diagram-js/lib/navigation/keyboard-move';
import MoveCanvasModule from 'diagram-js/lib/navigation/movecanvas';
import TouchModule from 'diagram-js/lib/navigation/touch';
import ZoomScrollModule from 'diagram-js/lib/navigation/zoomscroll';

import AlignElementsModule from 'diagram-js/lib/features/align-elements';
import AutoPlaceModule from 'bpmn-js/lib/features/auto-place';
import AutoResizeModule from 'bpmn-js/lib/features/auto-resize';
import AutoScrollModule from 'diagram-js/lib/features/auto-scroll';
import BendpointsModule from 'diagram-js/lib/features/bendpoints';
import ConnectModule from 'diagram-js/lib/features/connect';
import ConnectionPreviewModule from 'diagram-js/lib/features/connection-preview';
import ContextPadModule from 'bpmn-js/lib/features/context-pad';
import CopyPasteModule from 'bpmn-js/lib/features/copy-paste';
import CreateModule from 'diagram-js/lib/features/create';
import DistributeElementsModule from 'bpmn-js/lib/features/distribute-elements';
import EditorActionsModule from 'bpmn-js/lib/features/editor-actions';
import GridSnappingModule from 'bpmn-js/lib/features/grid-snapping';
import InteractionEventsModule from 'bpmn-js/lib/features/interaction-events';
import KeyboardModule from 'bpmn-js/lib/features/keyboard';
import KeyboardMoveSelectionModule from 'diagram-js/lib/features/keyboard-move-selection';
import LabelEditingModule from 'bpmn-js/lib/features/label-editing';
import ModelingModule from 'bpmn-js/lib/features/modeling';
import MoveModule from 'diagram-js/lib/features/move';
// import PaletteModule from 'bpmn-js/lib/features/palette';
import ReplacePreviewModule from 'bpmn-js/lib/features/replace-preview';
import ResizeModule from 'diagram-js/lib/features/resize';
import SnappingModule from 'bpmn-js/lib/features/snapping';
import SearchModule from 'bpmn-js/lib/features/search';

import YPaletteModule from '../lib/features/palette';

import {
    wrapForCompatibility
} from 'bpmn-js/lib/util/CompatibilityUtil';

var initialDiagram =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
    'xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" ' +
    'xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" ' +
    'xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" ' +
    'targetNamespace="http://bpmn.io/schema/bpmn" ' +
    'id="Definitions_1">' +
    '<bpmn:process id="Process_1" isExecutable="false">' +
    '<bpmn:startEvent id="StartEvent_1"/>' +
    '</bpmn:process>' +
    '<bpmndi:BPMNDiagram id="BPMNDiagram_1">' +
    '<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">' +
    '<bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">' +
    '<dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/>' +
    '</bpmndi:BPMNShape>' +
    '</bpmndi:BPMNPlane>' +
    '</bpmndi:BPMNDiagram>' +
    '</bpmn:definitions>';


/**
 * A modeler for BPMN 2.0 diagrams.
 *
 *
 * ## Extending the Modeler
 *
 * In order to extend the viewer pass extension modules to bootstrap via the
 * `additionalModules` option. An extension module is an object that exposes
 * named services.
 *
 * The following example depicts the integration of a simple
 * logging component that integrates with interaction events:
 *
 *
 * ```javascript
 *
 * // logging component
 * function InteractionLogger(eventBus) {
 *   eventBus.on('element.hover', function(event) {
 *     console.log()
 *   })
 * }
 *
 * InteractionLogger.$inject = [ 'eventBus' ]; // minification save
 *
 * // extension module
 * var extensionModule = {
 *   __init__: [ 'interactionLogger' ],
 *   interactionLogger: [ 'type', InteractionLogger ]
 * };
 *
 * // extend the viewer
 * var bpmnModeler = new Modeler({ additionalModules: [ extensionModule ] });
 * bpmnModeler.importXML(...);
 * ```
 *
 *
 * ## Customizing / Replacing Components
 *
 * You can replace individual diagram components by redefining them in override modules.
 * This works for all components, including those defined in the core.
 *
 * Pass in override modules via the `options.additionalModules` flag like this:
 *
 * ```javascript
 * function CustomContextPadProvider(contextPad) {
 *
 *   contextPad.registerProvider(this);
 *
 *   this.getContextPadEntries = function(element) {
 *     // no entries, effectively disable the context pad
 *     return {};
 *   };
 * }
 *
 * CustomContextPadProvider.$inject = [ 'contextPad' ];
 *
 * var overrideModule = {
 *   contextPadProvider: [ 'type', CustomContextPadProvider ]
 * };
 *
 * var bpmnModeler = new Modeler({ additionalModules: [ overrideModule ]});
 * ```
 *
 * @param {Object} [options] configuration options to pass to the viewer
 * @param {DOMElement} [options.container] the container to render the viewer in, defaults to body.
 * @param {string|number} [options.width] the width of the viewer
 * @param {string|number} [options.height] the height of the viewer
 * @param {Object} [options.moddleExtensions] extension packages to provide
 * @param {Array<didi.Module>} [options.modules] a list of modules to override the default modules
 * @param {Array<didi.Module>} [options.additionalModules] a list of modules to use with the default modules
 */
export default function YModeler(options) {
    BaseModeler.call(this, options);
}

inherits(YModeler, BaseModeler);


YModeler.Viewer = Viewer;
YModeler.NavigatedViewer = NavigatedViewer;

/**
 * The createDiagram result.
 *
 * @typedef {Object} CreateDiagramResult
 *
 * @property {Array<string>} warnings
 */

/**
 * The createDiagram error.
 *
 * @typedef {Error} CreateDiagramError
 *
 * @property {Array<string>} warnings
 */

/**
 * Create a new diagram to start modeling.
 *
 * Returns {Promise<CreateDiagramResult, CreateDiagramError>}
 */
YModeler.prototype.createDiagram = wrapForCompatibility(function createDiagram() {
    return this.importXML(initialDiagram);
});


YModeler.prototype._interactionModules = [

    // non-modeling components
    KeyboardMoveModule,
    MoveCanvasModule,
    TouchModule,
    ZoomScrollModule
];

YModeler.prototype._modelingModules = [

    // modeling components
    AlignElementsModule,
    AutoPlaceModule,
    AutoScrollModule,
    AutoResizeModule,
    BendpointsModule,
    ConnectModule,
    ConnectionPreviewModule,
    ContextPadModule,
    CopyPasteModule,
    CreateModule,
    DistributeElementsModule,
    EditorActionsModule,
    GridSnappingModule,
    InteractionEventsModule,
    KeyboardModule,
    KeyboardMoveSelectionModule,
    LabelEditingModule,
    ModelingModule,
    MoveModule,
    // PaletteModule,
    YPaletteModule,
    ReplacePreviewModule,
    ResizeModule,
    SnappingModule,
    SearchModule
];


// modules the modeler is composed of
//
// - viewer modules
// - interaction modules
// - modeling modules

YModeler.prototype._modules = [].concat(
    Viewer.prototype._modules,
    YModeler.prototype._interactionModules,
    YModeler.prototype._modelingModules
);
