"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1123],{95715:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>s});var a=o(6254);const d={},i=(0,o(89596).A)(d,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[11]||(t[11]=(0,a.Lk)("h1",{id:"tuya-tv02-zigbee",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-tv02-zigbee"},[(0,a.Lk)("span",null,"Tuya TV02-Zigbee")])],-1)),(0,a.Lk)("table",null,[t[7]||(t[7]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TV02-Zigbee")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Thermostat radiator valve")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery_low, lock (state), open_window, open_window_temperature, comfort_temperature, eco_temperature, climate (preset, local_temperature_calibration, local_temperature, current_heating_setpoint, system_mode), heating_stop, frost_protection, boost_timeset_countdown, holiday_temperature, holiday_start_stop, working_day, schedule, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday, online, error_status, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TV02-Zigbee.png",alt:"Tuya TV02-Zigbee"})])],-1)),t[6]||(t[6]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"White-label"),(0,a.Lk)("td",null,"Moes TV01-ZB, AVATTO TRV06-1, Tesla Smart TSL-TRV-TV01ZG, Tesla Smart TSL-TRV-TV05ZG, Unknown/id3.pl GTZ08")],-1))])]),t[12]||(t[12]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><ol><li>Pull the cover in the direction out from the radiator</li><li>Insert 2x AA batteries. Manual says alkaline ones should last for 1,5years. When replacing old batteries, it is recommended to wait approx 1 minute before inserting new ones.</li><li>Ins will appear on the display - motor is travelling back - to allow easy installation (Ins + rotating n is shown). After few seconds Ada is shown.</li><li>Install the thermostat on radiator valve - display whould be on top side.</li><li>Insert the cover back to thermostat - Push and Pull symbols should match.</li><li>Shortly press the big round button - adaptation to the valve will start (Ada + rotating n is shown).</li><li>To pair - long-press the main big rotating button. Make sure the thermostat has a good signal from ZigBee coordinator.</li><li>There is a hidden reset button under the cover, in case of repairing or other issues press it for 5 seconds.</li></ol><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',4)),(0,a.Lk)("p",null,[t[9]||(t[9]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>t[8]||(t[8]=[(0,a.eW)("OTA updates")]))),_:1}),t[10]||(t[10]=(0,a.eW)("."))]),t[13]||(t[13]=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock"><span>Child lock (lock)</span></a></h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="open-window-binary" tabindex="-1"><a class="header-anchor" href="#open-window-binary"><span>Open window (binary)</span></a></h3><p>Enables/disables the status on the device. Value can be found in the published state on the <code>open_window</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> open window is ON, if <code>OFF</code> OFF.</p><h3 id="open-window-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#open-window-temperature-numeric"><span>Open window temperature (numeric)</span></a></h3><p>Open window temperature. Value can be found in the published state on the <code>open_window_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="comfort-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-numeric"><span>Comfort temperature (numeric)</span></a></h3><p>Comfort temperature. Value can be found in the published state on the <code>comfort_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric"><span>Eco temperature (numeric)</span></a></h3><p>Eco temperature. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>preset</code>, <code>local_temperature_calibration</code>, <code>local_temperature</code>, <code>current_heating_setpoint</code>, <code>system_mode</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>auto</code>, <code>manual</code>, <code>holiday</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Only for Homeassistant. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-5</code> and the maximum value is <code>5</code> with a step size of <code>0.1</code>.</li></ul><h3 id="heating-stop-binary" tabindex="-1"><a class="header-anchor" href="#heating-stop-binary"><span>Heating stop (binary)</span></a></h3><p>Battery life can be prolonged by switching the heating off. To achieve this, the valve is closed fully. To activate the heating stop, the device display &quot;HS&quot;, press the pair button to cancel.. Value can be found in the published state on the <code>heating_stop</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;heating_stop&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> heating stop is ON, if <code>OFF</code> OFF.</p><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary"><span>Frost protection (binary)</span></a></h3><p>When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C.When Anti-Freezing function is activated, the temperature in the house is kept at 8 °C, the device display &quot;AF&quot;.press the pair button to cancel.. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost protection is ON, if <code>OFF</code> OFF.</p><h3 id="boost-timeset-countdown-numeric" tabindex="-1"><a class="header-anchor" href="#boost-timeset-countdown-numeric"><span>Boost timeset countdown (numeric)</span></a></h3><p>Setting minimum 0 - maximum 465 seconds boost time. The boost (â¨) function is activated. The remaining time for the function will be counted down in seconds ( 465 to 0 ).. Value can be found in the published state on the <code>boost_timeset_countdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_timeset_countdown&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>465</code>. The unit of this value is <code>s</code>.</p><h3 id="holiday-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#holiday-temperature-numeric"><span>Holiday temperature (numeric)</span></a></h3><p>Holiday temperature. Value can be found in the published state on the <code>holiday_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holiday_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="holiday-start-stop-text" tabindex="-1"><a class="header-anchor" href="#holiday-start-stop-text"><span>Holiday start stop (text)</span></a></h3><p>The holiday mode will automatically start at the set time starting point and run the holiday temperature. Can be defined in the following format: <code>startYear/startMonth/startDay startHours:startMinutes | endYear/endMonth/endDay endHours:endMinutes</code>. For example: <code>2022/10/01 16:30 | 2022/10/21 18:10</code>. After the end of holiday mode, it switches to &quot;auto&quot; mode and uses schedule.. Value can be found in the published state on the <code>holiday_start_stop</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holiday_start_stop&quot;: NEW_VALUE}</code>.</p><h3 id="working-day-enum" tabindex="-1"><a class="header-anchor" href="#working-day-enum"><span>Working day (enum)</span></a></h3><p><code>mon_sun</code> - schedule for Monday used for each day (define it only for Monday). <code>mon_fri+sat+sun</code> - schedule for workdays used from Monday (define it only for Monday), Saturday and Sunday are defined separately. <code>separate</code> - schedule for each day is defined separately.. Value can be found in the published state on the <code>working_day</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;working_day&quot;: NEW_VALUE}</code>. The possible values are: <code>mon_sun</code>, <code>mon_fri+sat+sun</code>, <code>separate</code>.</p><h3 id="schedule-composite" tabindex="-1"><a class="header-anchor" href="#schedule-composite"><span>Schedule (composite)</span></a></h3><p>Schedule will work with &quot;auto&quot; preset. In this mode, the device executes a preset week programming temperature time and temperature. Before using these properties, check <code>working_day</code> property. Each day can contain up to 10 segments. At least 1 segment should be defined. Different count of segments can be defined for each day, e.g., 3 segments for Monday, 5 segments for Thursday, etc. It should be defined in the following format: <code>hours:minutes/temperature</code>. Minutes can be only tens, i.e., 00, 10, 20, 30, 40, 50. Segments should be divided by space symbol. Each day should end with the last segment of 24:00. Examples: <code>04:00/20 08:30/22 10:10/18 18:40/24 22:50/19.5</code>; <code>06:00/21.5 17:20/26 24:00/18</code>. The temperature will be set from the beginning/start of one period and until the next period, e.g., <code>04:00/20 24:00/22</code> means that from 00:00 to 04:00 temperature will be 20 degrees and from 04:00 to 00:00 temperature will be 22 degrees.. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule&quot;: {&quot;week_day&quot;: VALUE, &quot;schedule&quot;: VALUE}}</code></p><ul><li><code>week_day</code> (enum) allowed values: <code>monday</code>, <code>tuesday</code>, <code>wednesday</code>, <code>thursday</code>, <code>friday</code>, <code>saturday</code>, <code>sunday</code></li><li><code>schedule</code> (text)</li></ul><h3 id="schedule-monday-text" tabindex="-1"><a class="header-anchor" href="#schedule-monday-text"><span>Schedule monday (text)</span></a></h3><p>Schedule for monday, format: &quot;HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_monday</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="schedule-tuesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-tuesday-text"><span>Schedule tuesday (text)</span></a></h3><p>Schedule for tuesday, format: &quot;HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_tuesday</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="schedule-wednesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-wednesday-text"><span>Schedule wednesday (text)</span></a></h3><p>Schedule for wednesday, format: &quot;HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_wednesday</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="schedule-thursday-text" tabindex="-1"><a class="header-anchor" href="#schedule-thursday-text"><span>Schedule thursday (text)</span></a></h3><p>Schedule for thursday, format: &quot;HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_thursday</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="schedule-friday-text" tabindex="-1"><a class="header-anchor" href="#schedule-friday-text"><span>Schedule friday (text)</span></a></h3><p>Schedule for friday, format: &quot;HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_friday</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="schedule-saturday-text" tabindex="-1"><a class="header-anchor" href="#schedule-saturday-text"><span>Schedule saturday (text)</span></a></h3><p>Schedule for saturday, format: &quot;HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_saturday</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="schedule-sunday-text" tabindex="-1"><a class="header-anchor" href="#schedule-sunday-text"><span>Schedule sunday (text)</span></a></h3><p>Schedule for sunday, format: &quot;HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_sunday</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="online-binary" tabindex="-1"><a class="header-anchor" href="#online-binary"><span>Online (binary)</span></a></h3><p>The current data request from the device.. Value can be found in the published state on the <code>online</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;online&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> online is ON, if <code>OFF</code> OFF.</p><h3 id="error-status-numeric" tabindex="-1"><a class="header-anchor" href="#error-status-numeric"><span>Error status (numeric)</span></a></h3><p>Error status. Value can be found in the published state on the <code>error_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',51))])}]]),s=JSON.parse('{"path":"/devices/TV02-Zigbee.html","title":"Tuya TV02-Zigbee control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TV02-Zigbee control via MQTT","description":"Integrate your Tuya TV02-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-11-30T20:10:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Open window (binary)","slug":"open-window-binary","link":"#open-window-binary","children":[]},{"level":3,"title":"Open window temperature (numeric)","slug":"open-window-temperature-numeric","link":"#open-window-temperature-numeric","children":[]},{"level":3,"title":"Comfort temperature (numeric)","slug":"comfort-temperature-numeric","link":"#comfort-temperature-numeric","children":[]},{"level":3,"title":"Eco temperature (numeric)","slug":"eco-temperature-numeric","link":"#eco-temperature-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Heating stop (binary)","slug":"heating-stop-binary","link":"#heating-stop-binary","children":[]},{"level":3,"title":"Frost protection (binary)","slug":"frost-protection-binary","link":"#frost-protection-binary","children":[]},{"level":3,"title":"Boost timeset countdown (numeric)","slug":"boost-timeset-countdown-numeric","link":"#boost-timeset-countdown-numeric","children":[]},{"level":3,"title":"Holiday temperature (numeric)","slug":"holiday-temperature-numeric","link":"#holiday-temperature-numeric","children":[]},{"level":3,"title":"Holiday start stop (text)","slug":"holiday-start-stop-text","link":"#holiday-start-stop-text","children":[]},{"level":3,"title":"Working day (enum)","slug":"working-day-enum","link":"#working-day-enum","children":[]},{"level":3,"title":"Schedule (composite)","slug":"schedule-composite","link":"#schedule-composite","children":[]},{"level":3,"title":"Schedule monday (text)","slug":"schedule-monday-text","link":"#schedule-monday-text","children":[]},{"level":3,"title":"Schedule tuesday (text)","slug":"schedule-tuesday-text","link":"#schedule-tuesday-text","children":[]},{"level":3,"title":"Schedule wednesday (text)","slug":"schedule-wednesday-text","link":"#schedule-wednesday-text","children":[]},{"level":3,"title":"Schedule thursday (text)","slug":"schedule-thursday-text","link":"#schedule-thursday-text","children":[]},{"level":3,"title":"Schedule friday (text)","slug":"schedule-friday-text","link":"#schedule-friday-text","children":[]},{"level":3,"title":"Schedule saturday (text)","slug":"schedule-saturday-text","link":"#schedule-saturday-text","children":[]},{"level":3,"title":"Schedule sunday (text)","slug":"schedule-sunday-text","link":"#schedule-sunday-text","children":[]},{"level":3,"title":"Online (binary)","slug":"online-binary","link":"#online-binary","children":[]},{"level":3,"title":"Error status (numeric)","slug":"error-status-numeric","link":"#error-status-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1734467041000},"filePathRelative":"devices/TV02-Zigbee.md"}')}}]);