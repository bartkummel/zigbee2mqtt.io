"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75183],{65932:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>s,data:()=>n});var a=o(6254);const i={},s=(0,o(89596).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[17]||(t[17]=(0,a.Lk)("h1",{id:"ubisys-d1",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ubisys-d1"},[(0,a.Lk)("span",null,"Ubisys D1")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"D1")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Ubisys"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Ubisys")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Universal dimmer D1")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"light (state, brightness), level_config, power, energy, ballast_minimum_level, ballast_maximum_level, minimum_on_level, capabilities_forward_phase_control, capabilities_reverse_phase_control, capabilities_reactance_discriminator, capabilities_configurable_curve, capabilities_overload_detection, status_forward_phase_control, status_reverse_phase_control, status_overload, status_capacitive_load, status_inductive_load, mode_phase_control, action, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/D1.png",alt:"Ubisys D1"})])],-1))])]),t[18]||(t[18]=(0,a.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,a.Lk)("span",null,"Notes")])],-1)),t[19]||(t[19]=(0,a.Lk)("h3",{id:"configuring-inputs",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#configuring-inputs"},[(0,a.Lk)("span",null,"Configuring Inputs")])],-1)),(0,a.Lk)("p",null,[t[8]||(t[8]=(0,a.eW)("In case the inputs need to be reconfigured (e.g. to use stationary switches instead of momentary ones or vice versa) this can be done in the same way as ")),(0,a.bF)(o,{to:"/devices/C4.html#configuring-inputs"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("it is being done for the ubisys C4")]))),_:1}),t[9]||(t[9]=(0,a.eW)("."))]),t[20]||(t[20]=(0,a.Lk)("h3",{id:"re-binding-and-or-decoupling",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#re-binding-and-or-decoupling"},[(0,a.Lk)("span",null,"(Re-)Binding and/or Decoupling")])],-1)),(0,a.Lk)("p",null,[t[11]||(t[11]=(0,a.eW)("Also see ")),(0,a.bF)(o,{to:"/devices/C4.html#binding"},{default:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.eW)("the ubisys C4 documentation")]))),_:1}),t[12]||(t[12]=(0,a.eW)(", example use cases:"))]),t[21]||(t[21]=(0,a.Fv)('<ul><li>Use the second input to control a different ZigBee device.</li><li>Completely decouple the input(s) from the local load.</li></ul><h3 id="ballast-configuration" tabindex="-1"><a class="header-anchor" href="#ballast-configuration"><span>Ballast Configuration</span></a></h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> the dimmer&#39;s ballast configuration attributes (<code>min_level</code> and <code>max_level</code>) can be set. Example:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;ballast_config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;min_level&quot;</span><span class="token operator">:</span> <span class="token number">3</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/get/ballast_config</code> the values of the ballast configuration attributes can also be read back from the device and be printed to the normal Zigbee2MQTT log (flagged as warnings but only to make sure they do not get suppressed). To account for errors due to missing optional attributes (since this is a general function), every cluster attribute will be queried separately and the complete process can therefore take a moment.</p><h3 id="dimmer-strategy-configuration" tabindex="-1"><a class="header-anchor" href="#dimmer-strategy-configuration"><span>Dimmer strategy configuration</span></a></h3><p>The dimmer phase control mode can be changed by publishing <code>{ &quot;mode_phase_control&quot;: &quot;MODE&quot; }</code> to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> where <code>MODE</code> is one of the following values: <code>automatic</code> (default), <code>forward</code> or <code>reverse</code>.</p><p>A word of caution is in order: configuring the wrong dimmer phase control mode could destroy the device or the attached load!</p><p>More information can be found in the <a href="https://www.smarthome-store.de/media/documents/ubisys-d1-technical-reference.pdf" target="_blank" rel="noopener noreferrer">ubisys D1 technical reference manual</a>, chapter &quot;7.2.8. Dimmer Setup Cluster (Server)&quot;.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',10)),(0,a.Lk)("p",null,[t[14]||(t[14]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>t[13]||(t[13]=[(0,a.eW)("OTA updates")]))),_:1}),t[15]||(t[15]=(0,a.eW)("."))]),t[22]||(t[22]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[16]||(t[16]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[23]||(t[23]=(0,a.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands. Support depends on the light firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition"><span>Transition</span></a></h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping"><span>Moving/stepping</span></a></h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="level-config-composite" tabindex="-1"><a class="header-anchor" href="#level-config-composite"><span>Level config (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;level_config&quot;: {&quot;on_off_transition_time&quot;: VALUE, &quot;on_level&quot;: VALUE, &quot;execute_if_off&quot;: VALUE, &quot;current_level_startup&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;level_config&quot;: &quot;&quot;}</code>.</p><ul><li><code>on_off_transition_time</code> (numeric): Specifies the amount of time, in units of 0.1 seconds, which will be used during a transition to either the on or off state, when an on/off/toggle command of the on/off cluster is used to turn the light on or off</li><li><code>on_level</code> (numeric): Specifies the level that shall be applied, when an on/toggle command causes the light to turn on. min value is 1, max value is 254</li><li><code>execute_if_off</code> (binary): Defines if you can send a brightness change without to turn on the light allowed values: <code>true</code> or <code>false</code></li><li><code>current_level_startup</code> (numeric): Specifies the initial level to be applied after the device is supplied with power min value is 1, max value is 254</li></ul><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;energy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="ballast-minimum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-minimum-level-numeric"><span>Ballast minimum level (numeric)</span></a></h3><p>Specifies the minimum light output of the ballast. Value can be found in the published state on the <code>ballast_minimum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_minimum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_minimum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="ballast-maximum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-maximum-level-numeric"><span>Ballast maximum level (numeric)</span></a></h3><p>Specifies the maximum light output of the ballast. Value can be found in the published state on the <code>ballast_maximum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_maximum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_maximum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="minimum-on-level-numeric" tabindex="-1"><a class="header-anchor" href="#minimum-on-level-numeric"><span>Minimum on level (numeric)</span></a></h3><p>Specifies the minimum level that shall be applied, when an on/toggle command causes the light to turn on. When this attribute is set to the invalid value (255) this feature is disabled and standard rules apply: The light will either return to the previously active level (before it was turned off) if the OnLevel attribute is set to the invalid value (255/previous); or to the specified value of the OnLevel attribute if this value is in the range 0…254. Otherwise, if the MinimumOnLevel is in the range 0…254, the light will be set to the the previously active level (before it was turned off), or the value specified here, whichever is the larger value. For example, if the previous level was 30 and the MinimumOnLevel was 40 then the light would turn on and move to level 40. Conversely, if the previous level was 50, and the MinimumOnLevel was 40, then the light would turn on and move to level 50.. Value can be found in the published state on the <code>minimum_on_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;minimum_on_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;minimum_on_level&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="capabilities-forward-phase-control-binary" tabindex="-1"><a class="header-anchor" href="#capabilities-forward-phase-control-binary"><span>Capabilities forward phase control (binary)</span></a></h3><p>The dimmer supports AC forward phase control.. Value can be found in the published state on the <code>capabilities_forward_phase_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;capabilities_forward_phase_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;capabilities_forward_phase_control&quot;: NEW_VALUE}</code>. If value equals <code>true</code> capabilities forward phase control is ON, if <code>false</code> OFF.</p><h3 id="capabilities-reverse-phase-control-binary" tabindex="-1"><a class="header-anchor" href="#capabilities-reverse-phase-control-binary"><span>Capabilities reverse phase control (binary)</span></a></h3><p>The dimmer supports AC reverse phase control.. Value can be found in the published state on the <code>capabilities_reverse_phase_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;capabilities_reverse_phase_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;capabilities_reverse_phase_control&quot;: NEW_VALUE}</code>. If value equals <code>true</code> capabilities reverse phase control is ON, if <code>false</code> OFF.</p><h3 id="capabilities-reactance-discriminator-binary" tabindex="-1"><a class="header-anchor" href="#capabilities-reactance-discriminator-binary"><span>Capabilities reactance discriminator (binary)</span></a></h3><p>The dimmer is capable of measuring the reactanceto distinguish inductive and capacitive loads.. Value can be found in the published state on the <code>capabilities_reactance_discriminator</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;capabilities_reactance_discriminator&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;capabilities_reactance_discriminator&quot;: NEW_VALUE}</code>. If value equals <code>true</code> capabilities reactance discriminator is ON, if <code>false</code> OFF.</p><h3 id="capabilities-configurable-curve-binary" tabindex="-1"><a class="header-anchor" href="#capabilities-configurable-curve-binary"><span>Capabilities configurable curve (binary)</span></a></h3><p>The dimmer is capable of replacing the built-in, default dimming curve.. Value can be found in the published state on the <code>capabilities_configurable_curve</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;capabilities_configurable_curve&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;capabilities_configurable_curve&quot;: NEW_VALUE}</code>. If value equals <code>true</code> capabilities configurable curve is ON, if <code>false</code> OFF.</p><h3 id="capabilities-overload-detection-binary" tabindex="-1"><a class="header-anchor" href="#capabilities-overload-detection-binary"><span>Capabilities overload detection (binary)</span></a></h3><p>The dimmer is capable of detecting an output overload and shutting the output off.. Value can be found in the published state on the <code>capabilities_overload_detection</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;capabilities_overload_detection&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;capabilities_overload_detection&quot;: NEW_VALUE}</code>. If value equals <code>true</code> capabilities overload detection is ON, if <code>false</code> OFF.</p><h3 id="status-forward-phase-control-binary" tabindex="-1"><a class="header-anchor" href="#status-forward-phase-control-binary"><span>Status forward phase control (binary)</span></a></h3><p>The dimmer is currently operating in AC forward phase control mode.. Value can be found in the published state on the <code>status_forward_phase_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;status_forward_phase_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_forward_phase_control&quot;: NEW_VALUE}</code>. If value equals <code>true</code> status forward phase control is ON, if <code>false</code> OFF.</p><h3 id="status-reverse-phase-control-binary" tabindex="-1"><a class="header-anchor" href="#status-reverse-phase-control-binary"><span>Status reverse phase control (binary)</span></a></h3><p>The dimmer is currently operating in AC reverse phase control mode.. Value can be found in the published state on the <code>status_reverse_phase_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;status_reverse_phase_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_reverse_phase_control&quot;: NEW_VALUE}</code>. If value equals <code>true</code> status reverse phase control is ON, if <code>false</code> OFF.</p><h3 id="status-overload-binary" tabindex="-1"><a class="header-anchor" href="#status-overload-binary"><span>Status overload (binary)</span></a></h3><p>The output is currently turned off, because the dimmer has detected an overload.. Value can be found in the published state on the <code>status_overload</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;status_overload&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_overload&quot;: NEW_VALUE}</code>. If value equals <code>true</code> status overload is ON, if <code>false</code> OFF.</p><h3 id="status-capacitive-load-binary" tabindex="-1"><a class="header-anchor" href="#status-capacitive-load-binary"><span>Status capacitive load (binary)</span></a></h3><p>The dimmer&#39;s reactance discriminator had detected a capacitive load.. Value can be found in the published state on the <code>status_capacitive_load</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;status_capacitive_load&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_capacitive_load&quot;: NEW_VALUE}</code>. If value equals <code>true</code> status capacitive load is ON, if <code>false</code> OFF.</p><h3 id="status-inductive-load-binary" tabindex="-1"><a class="header-anchor" href="#status-inductive-load-binary"><span>Status inductive load (binary)</span></a></h3><p>The dimmer&#39;s reactance discriminator had detected an inductive load.. Value can be found in the published state on the <code>status_inductive_load</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;status_inductive_load&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_inductive_load&quot;: NEW_VALUE}</code>. If value equals <code>true</code> status inductive load is ON, if <code>false</code> OFF.</p><h3 id="mode-phase-control-enum" tabindex="-1"><a class="header-anchor" href="#mode-phase-control-enum"><span>Mode phase control (enum)</span></a></h3><p>Configures the dimming technique.. Value can be found in the published state on the <code>mode_phase_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mode_phase_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode_phase_control&quot;: NEW_VALUE}</code>. The possible values are: <code>automatic</code>, <code>forward</code>, <code>reverse</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle_s1</code>, <code>toggle_s2</code>, <code>on_s1</code>, <code>on_s2</code>, <code>off_s1</code>, <code>off_s2</code>, <code>recall_*_s1</code>, <code>recal_*_s2</code>, <code>brightness_move_up_s1</code>, <code>brightness_move_up_s2</code>, <code>brightness_move_down_s1</code>, <code>brightness_move_down_s2</code>, <code>brightness_stop_s1</code>, <code>brightness_stop_s2</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',55))])}]]),n=JSON.parse('{"path":"/devices/D1.html","title":"Ubisys D1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Ubisys D1 control via MQTT","description":"Integrate your Ubisys D1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Configuring Inputs","slug":"configuring-inputs","link":"#configuring-inputs","children":[]},{"level":3,"title":"(Re-)Binding and/or Decoupling","slug":"re-binding-and-or-decoupling","link":"#re-binding-and-or-decoupling","children":[]},{"level":3,"title":"Ballast Configuration","slug":"ballast-configuration","link":"#ballast-configuration","children":[]},{"level":3,"title":"Dimmer strategy configuration","slug":"dimmer-strategy-configuration","link":"#dimmer-strategy-configuration","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Level config (composite)","slug":"level-config-composite","link":"#level-config-composite","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Ballast minimum level (numeric)","slug":"ballast-minimum-level-numeric","link":"#ballast-minimum-level-numeric","children":[]},{"level":3,"title":"Ballast maximum level (numeric)","slug":"ballast-maximum-level-numeric","link":"#ballast-maximum-level-numeric","children":[]},{"level":3,"title":"Minimum on level (numeric)","slug":"minimum-on-level-numeric","link":"#minimum-on-level-numeric","children":[]},{"level":3,"title":"Capabilities forward phase control (binary)","slug":"capabilities-forward-phase-control-binary","link":"#capabilities-forward-phase-control-binary","children":[]},{"level":3,"title":"Capabilities reverse phase control (binary)","slug":"capabilities-reverse-phase-control-binary","link":"#capabilities-reverse-phase-control-binary","children":[]},{"level":3,"title":"Capabilities reactance discriminator (binary)","slug":"capabilities-reactance-discriminator-binary","link":"#capabilities-reactance-discriminator-binary","children":[]},{"level":3,"title":"Capabilities configurable curve (binary)","slug":"capabilities-configurable-curve-binary","link":"#capabilities-configurable-curve-binary","children":[]},{"level":3,"title":"Capabilities overload detection (binary)","slug":"capabilities-overload-detection-binary","link":"#capabilities-overload-detection-binary","children":[]},{"level":3,"title":"Status forward phase control (binary)","slug":"status-forward-phase-control-binary","link":"#status-forward-phase-control-binary","children":[]},{"level":3,"title":"Status reverse phase control (binary)","slug":"status-reverse-phase-control-binary","link":"#status-reverse-phase-control-binary","children":[]},{"level":3,"title":"Status overload (binary)","slug":"status-overload-binary","link":"#status-overload-binary","children":[]},{"level":3,"title":"Status capacitive load (binary)","slug":"status-capacitive-load-binary","link":"#status-capacitive-load-binary","children":[]},{"level":3,"title":"Status inductive load (binary)","slug":"status-inductive-load-binary","link":"#status-inductive-load-binary","children":[]},{"level":3,"title":"Mode phase control (enum)","slug":"mode-phase-control-enum","link":"#mode-phase-control-enum","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1734467041000},"filePathRelative":"devices/D1.md"}')}}]);