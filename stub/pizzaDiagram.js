export var pizzaDiagram =
    '<?xml version="1.0" standalone="yes"?>\n' +
    '<semantic:definitions id="_1275940932088" targetNamespace="http://www.trisotech.com/definitions/_1275940932088" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:semantic="http://www.omg.org/spec/BPMN/20100524/MODEL">\n' +
    '    <semantic:message id="_1275940932310"/>\n' +
    '    <semantic:message id="_1275940932433"/>\n' +
    '    <semantic:process isExecutable="false" id="_6-1">\n' +
    '        <semantic:laneSet id="ls_6-438">\n' +
    '            <semantic:lane name="clerk" id="_6-650">\n' +
    '                <semantic:flowNodeRef>_6-450</semantic:flowNodeRef>\n' +
    '                <semantic:flowNodeRef>_6-652</semantic:flowNodeRef>\n' +
    '                <semantic:flowNodeRef>_6-674</semantic:flowNodeRef>\n' +
    '                <semantic:flowNodeRef>_6-695</semantic:flowNodeRef>\n' +
    '            </semantic:lane>\n' +
    '            <semantic:lane name="pizza chef" id="_6-446">\n' +
    '                <semantic:flowNodeRef>_6-463</semantic:flowNodeRef>\n' +
    '            </semantic:lane>\n' +
    '            <semantic:lane name="delivery boy" id="_6-448">\n' +
    '                <semantic:flowNodeRef>_6-514</semantic:flowNodeRef>\n' +
    '                <semantic:flowNodeRef>_6-565</semantic:flowNodeRef>\n' +
    '                <semantic:flowNodeRef>_6-616</semantic:flowNodeRef>\n' +
    '            </semantic:lane>\n' +
    '        </semantic:laneSet>\n' +
    '        <semantic:startEvent name="Order received" id="_6-450" magic:spell="WOOO ZAAAA">\n' +
    '            <semantic:outgoing>_6-630</semantic:outgoing>\n' +
    '            <semantic:messageEventDefinition messageRef="_1275940932310"/>\n' +
    '        </semantic:startEvent>\n' +
    '        <semantic:parallelGateway gatewayDirection="Unspecified" name="" id="_6-652">\n' +
    '            <semantic:incoming>_6-630</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-691</semantic:outgoing>\n' +
    '            <semantic:outgoing>_6-693</semantic:outgoing>\n' +
    '        </semantic:parallelGateway>\n' +
    '        <semantic:intermediateCatchEvent parallelMultiple="false" name="&#8222;where is my pizza?&#8220;" id="_6-674">\n' +
    '            <semantic:incoming>_6-691</semantic:incoming>\n' +
    '            <semantic:incoming>_6-746</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-748</semantic:outgoing>\n' +
    '            <semantic:messageEventDefinition messageRef="_1275940932433"/>\n' +
    '        </semantic:intermediateCatchEvent>\n' +
    '        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Calm customer" id="_6-695">\n' +
    '            <semantic:incoming>_6-748</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-746</semantic:outgoing>\n' +
    '        </semantic:task>\n' +
    '        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Bake the pizza" id="_6-463">\n' +
    '            <semantic:incoming>_6-693</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-632</semantic:outgoing>\n' +
    '        </semantic:task>\n' +
    '        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Deliver the pizza" id="_6-514">\n' +
    '            <semantic:incoming>_6-632</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-634</semantic:outgoing>\n' +
    '        </semantic:task>\n' +
    '        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Receive payment" id="_6-565">\n' +
    '            <semantic:incoming>_6-634</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-636</semantic:outgoing>\n' +
    '        </semantic:task>\n' +
    '        <semantic:endEvent name="" id="_6-616">\n' +
    '            <semantic:incoming>_6-636</semantic:incoming>\n' +
    '            <semantic:terminateEventDefinition/>\n' +
    '        </semantic:endEvent>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-450" targetRef="_6-652" name="" id="_6-630"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-463" targetRef="_6-514" name="" id="_6-632"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-514" targetRef="_6-565" name="" id="_6-634"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-565" targetRef="_6-616" name="" id="_6-636"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-652" targetRef="_6-674" name="" id="_6-691"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-652" targetRef="_6-463" name="" id="_6-693"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-695" targetRef="_6-674" name="" id="_6-746"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-674" targetRef="_6-695" name="" id="_6-748"/>\n' +
    '    </semantic:process>\n' +
    '    <semantic:message id="_1275940932198"/>\n' +
    '    <semantic:process isExecutable="false" id="_6-2">\n' +
    '        <semantic:startEvent name="Hungry for pizza" id="_6-61" magic:spell="WOOO ZBBBB">\n' +
    '            <semantic:outgoing>_6-125</semantic:outgoing>\n' +
    '        </semantic:startEvent>\n' +
    '        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Select a pizza" id="_6-74">\n' +
    '            <semantic:incoming>_6-125</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-178</semantic:outgoing>\n' +
    '        </semantic:task>\n' +
    '        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Order a pizza" id="_6-127">\n' +
    '            <semantic:incoming>_6-178</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-420</semantic:outgoing>\n' +
    '        </semantic:task>\n' +
    '        <semantic:eventBasedGateway eventGatewayType="Exclusive" instantiate="false" gatewayDirection="Unspecified" name="" id="_6-180">\n' +
    '            <semantic:incoming>_6-420</semantic:incoming>\n' +
    '            <semantic:incoming>_6-430</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-422</semantic:outgoing>\n' +
    '            <semantic:outgoing>_6-424</semantic:outgoing>\n' +
    '        </semantic:eventBasedGateway>\n' +
    '        <semantic:intermediateCatchEvent parallelMultiple="false" name="pizza received" id="_6-202">\n' +
    '            <semantic:incoming>_6-422</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-428</semantic:outgoing>\n' +
    '            <semantic:messageEventDefinition messageRef="_1275940932198"/>\n' +
    '        </semantic:intermediateCatchEvent>\n' +
    '        <semantic:intermediateCatchEvent parallelMultiple="false" name="60 minutes" id="_6-219">\n' +
    '            <semantic:incoming>_6-424</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-426</semantic:outgoing>\n' +
    '            <semantic:timerEventDefinition>\n' +
    '                <semantic:timeDate/>\n' +
    '            </semantic:timerEventDefinition>\n' +
    '        </semantic:intermediateCatchEvent>\n' +
    '        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Ask for the pizza" id="_6-236">\n' +
    '            <semantic:incoming>_6-426</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-430</semantic:outgoing>\n' +
    '        </semantic:task>\n' +
    '        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Pay the pizza" id="_6-304">\n' +
    '            <semantic:incoming>_6-428</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-434</semantic:outgoing>\n' +
    '        </semantic:task>\n' +
    '        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Eat the pizza" id="_6-355">\n' +
    '            <semantic:incoming>_6-434</semantic:incoming>\n' +
    '            <semantic:outgoing>_6-436</semantic:outgoing>\n' +
    '        </semantic:task>\n' +
    '        <semantic:endEvent name="Hunger satisfied" id="_6-406">\n' +
    '            <semantic:incoming>_6-436</semantic:incoming>\n' +
    '        </semantic:endEvent>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-61" targetRef="_6-74" name="" id="_6-125"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-74" targetRef="_6-127" name="" id="_6-178"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-127" targetRef="_6-180" name="" id="_6-420"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-180" targetRef="_6-202" name="" id="_6-422"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-180" targetRef="_6-219" name="" id="_6-424"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-219" targetRef="_6-236" name="" id="_6-426"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-202" targetRef="_6-304" name="" id="_6-428"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-236" targetRef="_6-180" name="" id="_6-430"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-304" targetRef="_6-355" name="" id="_6-434"/>\n' +
    '        <semantic:sequenceFlow sourceRef="_6-355" targetRef="_6-406" name="" id="_6-436"/>\n' +
    '    </semantic:process>\n' +
    '    <semantic:collaboration id="C1275940932557">\n' +
    '        <semantic:participant name="Pizza Customer" processRef="_6-2" id="_6-53"/>\n' +
    '        <semantic:participant name="Pizza vendor" processRef="_6-1" id="_6-438"/>\n' +
    '        <semantic:messageFlow name="pizza order" sourceRef="_6-127" targetRef="_6-450" id="_6-638"/>\n' +
    '        <semantic:messageFlow name="" sourceRef="_6-236" targetRef="_6-674" id="_6-642"/>\n' +
    '        <semantic:messageFlow name="receipt" sourceRef="_6-565" targetRef="_6-304" id="_6-646"/>\n' +
    '        <semantic:messageFlow name="money" sourceRef="_6-304" targetRef="_6-565" id="_6-648"/>\n' +
    '        <semantic:messageFlow name="pizza" sourceRef="_6-514" targetRef="_6-202" id="_6-640"/>\n' +
    '        <semantic:messageFlow name="" sourceRef="_6-695" targetRef="_6-236" id="_6-750"/>\n' +
    '    </semantic:collaboration>\n' +
    '    <bpmndi:BPMNDiagram documentation="" id="Trisotech.Visio-_6" name="Untitled Diagram" resolution="96.00000267028808">\n' +
    '        <bpmndi:BPMNPlane bpmnElement="C1275940932557">\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-53" isHorizontal="true" id="Trisotech.Visio__6-53">\n' +
    '                <dc:Bounds height="294.0" width="1044.0" x="12.0" y="12.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-438" isHorizontal="true" id="Trisotech.Visio__6-438">\n' +
    '                <dc:Bounds height="337.0" width="905.0" x="12.0" y="372.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-650" isHorizontal="true" id="Trisotech.Visio__6__6-650">\n' +
    '                <dc:Bounds height="114.0" width="875.0" x="42.0" y="372.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-446" isHorizontal="true" id="Trisotech.Visio__6__6-446">\n' +
    '                <dc:Bounds height="114.0" width="875.0" x="42.0" y="486.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-448" isHorizontal="true" id="Trisotech.Visio__6__6-448">\n' +
    '                <dc:Bounds height="109.0" width="875.0" x="42.0" y="600.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-450" id="Trisotech.Visio__6__6-450">\n' +
    '                <dc:Bounds height="30.0" width="30.0" x="79.0" y="405.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-652" id="Trisotech.Visio__6__6-652">\n' +
    '                <dc:Bounds height="42.0" width="42.0" x="140.0" y="399.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-674" id="Trisotech.Visio__6__6-674">\n' +
    '                <dc:Bounds height="32.0" width="32.0" x="218.0" y="404.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-695" id="Trisotech.Visio__6__6-695">\n' +
    '                <dc:Bounds height="68.0" width="83.0" x="286.0" y="386.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-463" id="Trisotech.Visio__6__6-463">\n' +
    '                <dc:Bounds height="68.0" width="83.0" x="252.0" y="521.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-514" id="Trisotech.Visio__6__6-514">\n' +
    '                <dc:Bounds height="68.0" width="83.0" x="464.0" y="629.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-565" id="Trisotech.Visio__6__6-565">\n' +
    '                <dc:Bounds height="68.0" width="83.0" x="603.0" y="629.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-616" id="Trisotech.Visio__6__6-616">\n' +
    '                <dc:Bounds height="32.0" width="32.0" x="722.0" y="647.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-61" id="Trisotech.Visio__6__6-61">\n' +
    '                <dc:Bounds height="30.0" width="30.0" x="66.0" y="96.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-74" id="Trisotech.Visio__6__6-74">\n' +
    '                <dc:Bounds height="68.0" width="83.0" x="145.0" y="77.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-127" id="Trisotech.Visio__6__6-127">\n' +
    '                <dc:Bounds height="68.0" width="83.0" x="265.0" y="77.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-180" id="Trisotech.Visio__6__6-180">\n' +
    '                <dc:Bounds height="42.0" width="42.0" x="378.0" y="90.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-202" id="Trisotech.Visio__6__6-202">\n' +
    '                <dc:Bounds height="32.0" width="32.0" x="647.0" y="95.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-219" id="Trisotech.Visio__6__6-219">\n' +
    '                <dc:Bounds height="32.0" width="32.0" x="448.0" y="184.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-236" id="Trisotech.Visio__6__6-236">\n' +
    '                <dc:Bounds height="68.0" width="83.0" x="517.0" y="166.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-304" id="Trisotech.Visio__6__6-304">\n' +
    '                <dc:Bounds height="68.0" width="83.0" x="726.0" y="77.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-355" id="Trisotech.Visio__6__6-355">\n' +
    '                <dc:Bounds height="68.0" width="83.0" x="834.0" y="77.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNShape bpmnElement="_6-406" id="Trisotech.Visio__6__6-406">\n' +
    '                <dc:Bounds height="32.0" width="32.0" x="956.0" y="95.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNShape>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-640" messageVisibleKind="initiating" id="Trisotech.Visio__6__6-640">\n' +
    '                <di:waypoint x="506.0" y="629.0"/>\n' +
    '                <di:waypoint x="506.0" y="384.0"/>\n' +
    '                <di:waypoint x="663.0" y="384.0"/>\n' +
    '                <di:waypoint x="663.0" y="127.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-630" id="Trisotech.Visio__6__6-630">\n' +
    '                <di:waypoint x="109.0" y="420.0"/>\n' +
    '                <di:waypoint x="140.0" y="420.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-691" id="Trisotech.Visio__6__6-691">\n' +
    '                <di:waypoint x="182.0" y="420.0"/>\n' +
    '                <di:waypoint x="200.0" y="420.0"/>\n' +
    '                <di:waypoint x="218.0" y="420.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-648" messageVisibleKind="initiating" id="Trisotech.Visio__6__6-648">\n' +
    '                <di:waypoint x="754.0" y="145.0"/>\n' +
    '                <di:waypoint x="754.0" y="408.0"/>\n' +
    '                <di:waypoint x="630.0" y="408.0"/>\n' +
    '                <di:waypoint x="631.0" y="629.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-422" id="Trisotech.Visio__6__6-422">\n' +
    '                <di:waypoint x="420.0" y="111.0"/>\n' +
    '                <di:waypoint x="438.0" y="111.0"/>\n' +
    '                <di:waypoint x="647.0" y="111.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-646" messageVisibleKind="non_initiating" id="Trisotech.Visio__6__6-646">\n' +
    '                <di:waypoint x="658.0" y="629.0"/>\n' +
    '                <di:waypoint x="658.0" y="432.0"/>\n' +
    '                <di:waypoint x="782.0" y="432.0"/>\n' +
    '                <di:waypoint x="782.0" y="145.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-428" id="Trisotech.Visio__6__6-428">\n' +
    '                <di:waypoint x="679.0" y="111.0"/>\n' +
    '                <di:waypoint x="726.0" y="111.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-748" id="Trisotech.Visio__6__6-748">\n' +
    '                <di:waypoint x="250.0" y="420.0"/>\n' +
    '                <di:waypoint x="268.0" y="420.0"/>\n' +
    '                <di:waypoint x="286.0" y="420.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-420" id="Trisotech.Visio__6__6-420">\n' +
    '                <di:waypoint x="348.0" y="111.0"/>\n' +
    '                <di:waypoint x="366.0" y="111.0"/>\n' +
    '                <di:waypoint x="378.0" y="111.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-636" id="Trisotech.Visio__6__6-636">\n' +
    '                <di:waypoint x="686.0" y="663.0"/>\n' +
    '                <di:waypoint x="704.0" y="663.0"/>\n' +
    '                <di:waypoint x="722.0" y="663.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-750" id="Trisotech.Visio__6__6-750">\n' +
    '                <di:waypoint x="328.0" y="386.0"/>\n' +
    '                <di:waypoint x="328.0" y="348.0"/>\n' +
    '                <di:waypoint x="572.0" y="348.0"/>\n' +
    '                <di:waypoint x="572.0" y="234.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-436" id="Trisotech.Visio__6__6-436">\n' +
    '                <di:waypoint x="918.0" y="111.0"/>\n' +
    '                <di:waypoint x="936.0" y="111.0"/>\n' +
    '                <di:waypoint x="956.0" y="111.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-632" id="Trisotech.Visio__6__6-632">\n' +
    '                <di:waypoint x="335.0" y="555.0"/>\n' +
    '                <di:waypoint x="353.0" y="555.0"/>\n' +
    '                <di:waypoint x="353.0" y="663.0"/>\n' +
    '                <di:waypoint x="464.0" y="663.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-634" id="Trisotech.Visio__6__6-634">\n' +
    '                <di:waypoint x="548.0" y="663.0"/>\n' +
    '                <di:waypoint x="603.0" y="663.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-125" id="Trisotech.Visio__6__6-125">\n' +
    '                <di:waypoint x="96.0" y="111.0"/>\n' +
    '                <di:waypoint x="114.0" y="111.0"/>\n' +
    '                <di:waypoint x="145.0" y="111.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-430" id="Trisotech.Visio__6__6-430">\n' +
    '                <di:waypoint x="600.0" y="200.0"/>\n' +
    '                <di:waypoint x="618.0" y="200.0"/>\n' +
    '                <di:waypoint x="618.0" y="252.0"/>\n' +
    '                <di:waypoint x="576.0" y="252.0"/>\n' +
    '                <di:waypoint x="549.0" y="252.0"/>\n' +
    '                <di:waypoint x="360.0" y="252.0"/>\n' +
    '                <di:waypoint x="360.0" y="111.0"/>\n' +
    '                <di:waypoint x="378.0" y="111.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-642" id="Trisotech.Visio__6__6-642">\n' +
    '                <di:waypoint x="545.0" y="234.0"/>\n' +
    '                <di:waypoint x="545.0" y="324.0"/>\n' +
    '                <di:waypoint x="234.0" y="324.0"/>\n' +
    '                <di:waypoint x="234.0" y="404.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-424" id="Trisotech.Visio__6__6-424">\n' +
    '                <di:waypoint x="399.0" y="132.0"/>\n' +
    '                <di:waypoint x="399.0" y="200.0"/>\n' +
    '                <di:waypoint x="448.0" y="200.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-638" messageVisibleKind="initiating" id="Trisotech.Visio__6__6-638">\n' +
    '                <di:waypoint x="306.0" y="145.0"/>\n' +
    '                <di:waypoint x="306.0" y="252.0"/>\n' +
    '                <di:waypoint x="94.0" y="252.0"/>\n' +
    '                <di:waypoint x="94.0" y="405.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-426" id="Trisotech.Visio__6__6-426">\n' +
    '                <di:waypoint x="480.0" y="200.0"/>\n' +
    '                <di:waypoint x="498.0" y="200.0"/>\n' +
    '                <di:waypoint x="517.0" y="200.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-693" id="Trisotech.Visio__6__6-693">\n' +
    '                <di:waypoint x="161.0" y="441.0"/>\n' +
    '                <di:waypoint x="161.0" y="556.0"/>\n' +
    '                <di:waypoint x="252.0" y="555.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-178" id="Trisotech.Visio__6__6-178">\n' +
    '                <di:waypoint x="228.0" y="111.0"/>\n' +
    '                <di:waypoint x="265.0" y="111.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-746" id="Trisotech.Visio__6__6-746">\n' +
    '                <di:waypoint x="370.0" y="420.0"/>\n' +
    '                <di:waypoint x="386.0" y="420.0"/>\n' +
    '                <di:waypoint x="386.0" y="474.0"/>\n' +
    '                <di:waypoint x="191.0" y="474.0"/>\n' +
    '                <di:waypoint x="191.0" y="420.0"/>\n' +
    '                <di:waypoint x="218.0" y="420.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '            <bpmndi:BPMNEdge bpmnElement="_6-434" id="Trisotech.Visio__6__6-434">\n' +
    '                <di:waypoint x="810.0" y="111.0"/>\n' +
    '                <di:waypoint x="834.0" y="111.0"/>\n' +
    '                <bpmndi:BPMNLabel/>\n' +
    '            </bpmndi:BPMNEdge>\n' +
    '        </bpmndi:BPMNPlane>\n' +
    '    </bpmndi:BPMNDiagram>\n' +
    '</semantic:definitions>'

