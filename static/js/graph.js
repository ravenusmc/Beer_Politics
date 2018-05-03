//The code in this file will produce all of the graphs. 
(function() {
  var fn = function() {
    Bokeh.safely(function() {
      var docs_json = {"8e301709-3373-48fc-99e0-43bfdaba2e25":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2fb9b341-becd-4f17-8263-74cee30c9836","type":"BoxAnnotation"},{"attributes":{},"id":"0997ba6d-1a6e-4d4b-819c-a7a3eff741dc","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"9f6d6a9e-ecc3-496a-920c-1f5a0a999959","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2631695-df77-498d-84c4-bb1ebeccee84","type":"BasicTicker"}},"id":"91c12795-73bb-4efa-b9d3-4273dab9c757","type":"Grid"},{"attributes":{"callback":null},"id":"2fca2a82-30ce-4967-bc6b-b8b321e83778","type":"DataRange1d"},{"attributes":{"overlay":{"id":"2fb9b341-becd-4f17-8263-74cee30c9836","type":"BoxAnnotation"},"plot":{"id":"9f6d6a9e-ecc3-496a-920c-1f5a0a999959","subtype":"Figure","type":"Plot"}},"id":"c427691b-92df-4a48-91f0-6b1e48856515","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"9f6d6a9e-ecc3-496a-920c-1f5a0a999959","subtype":"Figure","type":"Plot"}},"id":"a49506ed-585c-473f-902a-103bfaf154ab","type":"PanTool"},{"attributes":{"callback":null,"plot":{"id":"9f6d6a9e-ecc3-496a-920c-1f5a0a999959","subtype":"Figure","type":"Plot"},"tooltips":[["state","@state"],["Number of Breweries","@breweries"],["Percentage Voted Clinton","@clinton_per"],["Percentage Voted Trump","@trump_per"]]},"id":"d478932c-d099-46db-b674-f229f8ecfe8f","type":"HoverTool"},{"attributes":{"axis_label":"Number of Breweries","formatter":{"id":"7645fbd0-8438-4c75-b33f-67cd5e3f7874","type":"BasicTickFormatter"},"plot":{"id":"9f6d6a9e-ecc3-496a-920c-1f5a0a999959","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2631695-df77-498d-84c4-bb1ebeccee84","type":"BasicTicker"}},"id":"4f5e679c-5202-4c5f-91f9-872565fb7f34","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a49506ed-585c-473f-902a-103bfaf154ab","type":"PanTool"},{"id":"360b2d4f-2a27-447d-98e1-4cbb5a690a92","type":"WheelZoomTool"},{"id":"c427691b-92df-4a48-91f0-6b1e48856515","type":"BoxZoomTool"},{"id":"3fbe81cc-227f-45c9-8e42-5178f2dead1f","type":"ResetTool"},{"id":"d478932c-d099-46db-b674-f229f8ecfe8f","type":"HoverTool"},{"id":"d08ff2df-6d7f-41c9-91c5-9faa5a56a64d","type":"SaveTool"}]},"id":"224e47e7-c4cc-4842-82fa-ec5ee7b9b3d9","type":"Toolbar"},{"attributes":{"fill_color":{"field":"who_won","transform":{"id":"eb343beb-a68a-43b0-97e6-acd49e6387cf","type":"CategoricalColorMapper"}},"line_color":{"field":"who_won","transform":{"id":"eb343beb-a68a-43b0-97e6-acd49e6387cf","type":"CategoricalColorMapper"}},"size":{"units":"screen","value":15},"x":{"field":"clinton_per"},"y":{"field":"breweries"}},"id":"ba702cfc-2962-4d4d-b878-1e14f82be9cd","type":"Circle"},{"attributes":{"plot":{"id":"9f6d6a9e-ecc3-496a-920c-1f5a0a999959","subtype":"Figure","type":"Plot"}},"id":"360b2d4f-2a27-447d-98e1-4cbb5a690a92","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"d1d2d805-f7c1-4337-a6bf-8217253182b8","type":"DataRange1d"},{"attributes":{"plot":{"id":"9f6d6a9e-ecc3-496a-920c-1f5a0a999959","subtype":"Figure","type":"Plot"}},"id":"d08ff2df-6d7f-41c9-91c5-9faa5a56a64d","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"clinton_per"},"y":{"field":"breweries"}},"id":"4bbfeb15-6712-413d-8ec5-99d5175710d9","type":"Circle"},{"attributes":{"data_source":{"id":"c89898b4-f155-4b3e-a179-dde2fcd3a15b","type":"ColumnDataSource"},"glyph":{"id":"ba702cfc-2962-4d4d-b878-1e14f82be9cd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4bbfeb15-6712-413d-8ec5-99d5175710d9","type":"Circle"},"selection_glyph":null},"id":"3a575fa1-4846-4eec-b1dd-00e81a64d6fb","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9f6d6a9e-ecc3-496a-920c-1f5a0a999959","subtype":"Figure","type":"Plot"},"ticker":{"id":"1eef2629-22a9-4b0f-9d0d-afb9375bfcd6","type":"BasicTicker"}},"id":"b0067fdd-96b6-460e-a91f-97084d9e5e3f","type":"Grid"},{"attributes":{},"id":"1eef2629-22a9-4b0f-9d0d-afb9375bfcd6","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Number of Breweries versus Support for Clinton"},"id":"e688bd92-bf4f-454c-8152-c629a8a738b9","type":"Title"},{"attributes":{"axis_label":"Percentage who voted for Clinton","formatter":{"id":"0997ba6d-1a6e-4d4b-819c-a7a3eff741dc","type":"BasicTickFormatter"},"plot":{"id":"9f6d6a9e-ecc3-496a-920c-1f5a0a999959","subtype":"Figure","type":"Plot"},"ticker":{"id":"1eef2629-22a9-4b0f-9d0d-afb9375bfcd6","type":"BasicTicker"}},"id":"6ba13638-1676-4ae7-9de2-7b059f10a59f","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["breweries","state","clinton_per","index","who_won","trump_per"],"data":{"breweries":[3,7,11,2,39,47,8,2,15,7,4,5,18,22,5,3,4,5,9,7,23,32,12,2,9,9,5,2,3,3,4,16,19,1,15,6,29,25,5,4,1,3,28,4,10,16,23,1,20,4],"clinton_per":{"__ndarray__":"mpmZmZlZQUDNzMzMzMxCQAAAAAAAwEZAmpmZmZnZQEBmZmZmZiZPQJqZmZmZGUhAmpmZmZlZS0AzMzMzM7NKQGZmZmZm5kdAMzMzMzPzRkCamZmZmRlPQAAAAAAAgDtAAAAAAAAATEAzMzMzM/NCQJqZmZmZGUVAZmZmZmYmQkCamZmZmVlAQDMzMzMzM0NAAAAAAAAASEBmZmZmZqZOQAAAAAAAgE5AMzMzMzOzR0AzMzMzM3NHQM3MzMzMDERAmpmZmZkZQ0AzMzMzM/NBQDMzMzMzM0FAMzMzMzPzR0DNzMzMzMxHQAAAAAAAwEtAZmZmZmYmSEAAAAAAAMBNQGZmZmZmZkdAMzMzMzOzO0CamZmZmdlFQGZmZmZm5jxAAAAAAAAASkAzMzMzM/NHQAAAAAAAwEtAmpmZmZlZREAzMzMzM7M/QDMzMzMzc0FAAAAAAADARUAAAAAAAIA7QM3MzMzMjE5AmpmZmZkZSUBmZmZmZiZLQAAAAAAAgDpAAAAAAACAR0AAAAAAAIA2QA==","dtype":"float64","shape":[50]},"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],"state":["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],"trump_per":{"__ndarray__":"mpmZmZlZT0BmZmZmZmZKQAAAAAAAgEhAzczMzMxMTkBmZmZmZuY/QGZmZmZmpkVAAAAAAACAREAzMzMzM/NEQDMzMzMz80hAAAAAAACASUAAAAAAAAA+QGZmZmZmpk1AMzMzMzNzQ0CamZmZmZlMQJqZmZmZ2UlAAAAAAACATEAAAAAAAEBPQM3MzMzMDE1AAAAAAACARkAAAAAAAEBBQGZmZmZmpkBAzczMzMzMR0BmZmZmZqZGQDMzMzMz80xAMzMzMzNzTEAAAAAAAEBMQDMzMzMz801AAAAAAADARkCamZmZmZlHQDMzMzMzs0RAAAAAAAAAREBmZmZmZmZCQAAAAAAAQElAZmZmZmYGUEBmZmZmZuZJQDMzMzMzU1BAzczMzMxMREDNzMzMzExIQJqZmZmZ2UNAMzMzMzNzS0AAAAAAAMBOQM3MzMzMjE5AAAAAAABASkAAAAAAAMBGQM3MzMzMTEBAZmZmZmZmRkDNzMzMzAxDQGZmZmZmJlFAZmZmZmbmR0BmZmZmZoZRQA==","dtype":"float64","shape":[50]},"who_won":["Trump","Trump","Trump","Trump","Clinton","Clinton","Clinton","Clinton","Trump","Trump","Clinton","Trump","Clinton","Trump","Trump","Trump","Trump","Trump","Clinton","Clinton","Clinton","Trump","Clinton","Trump","Trump","Trump","Trump","Clinton","Clinton","Clinton","Clinton","Clinton","Trump","Trump","Trump","Trump","Clinton","Trump","Clinton","Trump","Trump","Trump","Trump","Trump","Clinton","Clinton","Clinton","Trump","Trump","Trump"]}},"id":"c89898b4-f155-4b3e-a179-dde2fcd3a15b","type":"ColumnDataSource"},{"attributes":{"factors":["Trump","Clinton"],"palette":["red","blue"]},"id":"eb343beb-a68a-43b0-97e6-acd49e6387cf","type":"CategoricalColorMapper"},{"attributes":{},"id":"5c95d549-244a-46ef-9496-4374005016e8","type":"LinearScale"},{"attributes":{"plot":{"id":"9f6d6a9e-ecc3-496a-920c-1f5a0a999959","subtype":"Figure","type":"Plot"}},"id":"3fbe81cc-227f-45c9-8e42-5178f2dead1f","type":"ResetTool"},{"attributes":{},"id":"524a4026-0f8b-419a-8c14-7711ffff3731","type":"LinearScale"},{"attributes":{},"id":"7645fbd0-8438-4c75-b33f-67cd5e3f7874","type":"BasicTickFormatter"},{"attributes":{},"id":"f2631695-df77-498d-84c4-bb1ebeccee84","type":"BasicTicker"},{"attributes":{"below":[{"id":"6ba13638-1676-4ae7-9de2-7b059f10a59f","type":"LinearAxis"}],"left":[{"id":"4f5e679c-5202-4c5f-91f9-872565fb7f34","type":"LinearAxis"}],"plot_height":500,"renderers":[{"id":"6ba13638-1676-4ae7-9de2-7b059f10a59f","type":"LinearAxis"},{"id":"b0067fdd-96b6-460e-a91f-97084d9e5e3f","type":"Grid"},{"id":"4f5e679c-5202-4c5f-91f9-872565fb7f34","type":"LinearAxis"},{"id":"91c12795-73bb-4efa-b9d3-4273dab9c757","type":"Grid"},{"id":"2fb9b341-becd-4f17-8263-74cee30c9836","type":"BoxAnnotation"},{"id":"3a575fa1-4846-4eec-b1dd-00e81a64d6fb","type":"GlyphRenderer"}],"title":{"id":"e688bd92-bf4f-454c-8152-c629a8a738b9","type":"Title"},"tool_events":{"id":"f08da45b-9f1b-4c9c-876a-b3fcbe7edbac","type":"ToolEvents"},"toolbar":{"id":"224e47e7-c4cc-4842-82fa-ec5ee7b9b3d9","type":"Toolbar"},"x_range":{"id":"2fca2a82-30ce-4967-bc6b-b8b321e83778","type":"DataRange1d"},"x_scale":{"id":"524a4026-0f8b-419a-8c14-7711ffff3731","type":"LinearScale"},"y_range":{"id":"d1d2d805-f7c1-4337-a6bf-8217253182b8","type":"DataRange1d"},"y_scale":{"id":"5c95d549-244a-46ef-9496-4374005016e8","type":"LinearScale"}},"id":"9f6d6a9e-ecc3-496a-920c-1f5a0a999959","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f08da45b-9f1b-4c9c-876a-b3fcbe7edbac","type":"ToolEvents"}],"root_ids":["9f6d6a9e-ecc3-496a-920c-1f5a0a999959"]},"title":"Bokeh Application","version":"0.12.6"}};
      var render_items = [{"docid":"8e301709-3373-48fc-99e0-43bfdaba2e25","elementid":"eb33e1a8-feae-48b1-8fc3-35804f6748f9","modelid":"9f6d6a9e-ecc3-496a-920c-1f5a0a999959"}];
      
      Bokeh.embed.embed_items(docs_json, render_items);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();

//The code below will be for Google Data all years
(function() {
var fn = function() {
  Bokeh.safely(function() {
    var docs_json = {"0cd620ee-4dc5-4394-abd0-f1111b5ec6a3":{"roots":{"references":[{"attributes":{},"id":"f1cabdbf-9db4-40a5-8df5-a4ad0ca1c453","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"9ac41d04-c461-40ac-b358-1d5457c739da","type":"DataRange1d"},{"attributes":{},"id":"d24af0a4-972a-4f2a-a185-f512f10174da","type":"BasicTicker"},{"attributes":{"plot":{"id":"9902b487-6f2e-482f-a26c-8af6206de65e","subtype":"Figure","type":"Plot"},"ticker":{"id":"d24af0a4-972a-4f2a-a185-f512f10174da","type":"BasicTicker"}},"id":"f47d75b2-9b4f-4000-a32c-21a07a98657d","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c8a98efe-18d2-4a63-a428-8e3fd043bbe9","type":"BoxAnnotation"},{"attributes":{"fill_color":{"field":"who_won","transform":{"id":"92a6f50f-f877-4f80-b452-006ed73728f0","type":"CategoricalColorMapper"}},"line_color":{"field":"who_won","transform":{"id":"92a6f50f-f877-4f80-b452-006ed73728f0","type":"CategoricalColorMapper"}},"size":{"units":"screen","value":15},"x":{"field":"clinton_per"},"y":{"field":"craft_beer_search"}},"id":"297cac5a-8710-4989-a337-1aa56aa112e8","type":"Circle"},{"attributes":{"callback":null,"plot":{"id":"9902b487-6f2e-482f-a26c-8af6206de65e","subtype":"Figure","type":"Plot"},"tooltips":[["state","@state"],["Google Percentage","@craft_beer_search"],["Percentage Voted Clinton","@clinton_per"],["Percentage Voted Trump","@trump_per"]]},"id":"4c09e4d7-c84d-435b-89fb-b1c6fa6c77df","type":"HoverTool"},{"attributes":{"callback":null,"column_names":["region","index","craft_beer_search","state","clinton_per","who_won","trump_per"],"data":{"clinton_per":{"__ndarray__":"mpmZmZlZQUDNzMzMzMxCQAAAAAAAwEZAmpmZmZnZQEBmZmZmZiZPQJqZmZmZGUhAmpmZmZlZS0AzMzMzM7NKQGZmZmZm5kdAMzMzMzPzRkCamZmZmRlPQAAAAAAAgDtAAAAAAAAATEAzMzMzM/NCQJqZmZmZGUVAZmZmZmYmQkCamZmZmVlAQDMzMzMzM0NAAAAAAAAASEBmZmZmZqZOQAAAAAAAgE5AMzMzMzOzR0AzMzMzM3NHQM3MzMzMDERAmpmZmZkZQ0AzMzMzM/NBQDMzMzMzM0FAMzMzMzPzR0DNzMzMzMxHQAAAAAAAwEtAZmZmZmYmSEAAAAAAAMBNQGZmZmZmZkdAMzMzMzOzO0CamZmZmdlFQGZmZmZm5jxAAAAAAAAASkAzMzMzM/NHQAAAAAAAwEtAmpmZmZlZREAzMzMzM7M/QDMzMzMzc0FAAAAAAADARUAAAAAAAIA7QM3MzMzMjE5AmpmZmZkZSUBmZmZmZiZLQAAAAAAAgDpAAAAAAACAR0AAAAAAAIA2QA==","dtype":"float64","shape":[50]},"craft_beer_search":{"__ndarray__":"AAAAAAAAPkAAAAAAAAAxQAAAAAAAAEBAAAAAAAAAPEAAAAAAAABDQAAAAAAAAElAAAAAAAAASkAAAAAAAIBKQAAAAAAAAEdAAAAAAAAAQUAAAAAAAAA6QAAAAAAAADZAAAAAAACATEAAAAAAAIBEQAAAAAAAAEVAAAAAAAAAO0AAAAAAAABDQAAAAAAAADlAAAAAAACASEAAAAAAAABFQAAAAAAAgFNAAAAAAACARkAAAAAAAIBIQAAAAAAAADxAAAAAAACAREAAAAAAAIBAQAAAAAAAgEBAAAAAAAAAQEAAAAAAAEBUQAAAAAAAgEhAAAAAAAAAOUAAAAAAAABKQAAAAAAAgEZAAAAAAAAANEAAAAAAAIBGQAAAAAAAAEBAAAAAAAAAQEAAAAAAAIBPQAAAAAAAAE9AAAAAAAAASkAAAAAAAAA3QAAAAAAAgERAAAAAAAAAQEAAAAAAAAAoQAAAAAAAAFlAAAAAAACAQ0AAAAAAAAA7QAAAAAAAAERAAAAAAACASEAAAAAAAAD4fw==","dtype":"float64","shape":[50]},"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],"region":["south","west","south west","south","west","plains","north east","atlantic","south","south","west","plains","midwest","midwest","midwest","plains","south","south","north east","atlantic","north east","rust","rust","south","south","plains","plains","west","north east","atlantic","south west","atlantic","south","plains","rust","plains","west","rust","north east","south","plains","south","south","plains","north east","south","west","south","rust","plains"],"state":["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],"trump_per":{"__ndarray__":"mpmZmZlZT0BmZmZmZmZKQAAAAAAAgEhAzczMzMxMTkBmZmZmZuY/QGZmZmZmpkVAAAAAAACAREAzMzMzM/NEQDMzMzMz80hAAAAAAACASUAAAAAAAAA+QGZmZmZmpk1AMzMzMzNzQ0CamZmZmZlMQJqZmZmZ2UlAAAAAAACATEAAAAAAAEBPQM3MzMzMDE1AAAAAAACARkAAAAAAAEBBQGZmZmZmpkBAzczMzMzMR0BmZmZmZqZGQDMzMzMz80xAMzMzMzNzTEAAAAAAAEBMQDMzMzMz801AAAAAAADARkCamZmZmZlHQDMzMzMzs0RAAAAAAAAAREBmZmZmZmZCQAAAAAAAQElAZmZmZmYGUEBmZmZmZuZJQDMzMzMzU1BAzczMzMxMREDNzMzMzExIQJqZmZmZ2UNAMzMzMzNzS0AAAAAAAMBOQM3MzMzMjE5AAAAAAABASkAAAAAAAMBGQM3MzMzMTEBAZmZmZmZmRkDNzMzMzAxDQGZmZmZmJlFAZmZmZmbmR0BmZmZmZoZRQA==","dtype":"float64","shape":[50]},"who_won":["Trump","Trump","Trump","Trump","Clinton","Clinton","Clinton","Clinton","Trump","Trump","Clinton","Trump","Clinton","Trump","Trump","Trump","Trump","Trump","Clinton","Clinton","Clinton","Trump","Clinton","Trump","Trump","Trump","Trump","Clinton","Clinton","Clinton","Clinton","Clinton","Trump","Trump","Trump","Trump","Clinton","Trump","Clinton","Trump","Trump","Trump","Trump","Trump","Clinton","Clinton","Clinton","Trump","Trump","Trump"]}},"id":"f147cf86-5147-40cd-8673-c8d9c80606c3","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"9902b487-6f2e-482f-a26c-8af6206de65e","subtype":"Figure","type":"Plot"},"ticker":{"id":"8277a486-cfd9-49c0-8315-3e9645d2348f","type":"BasicTicker"}},"id":"0d735333-f80f-4cc7-a9e4-27d1e1d19247","type":"Grid"},{"attributes":{"callback":null},"id":"52150d46-2882-4fa9-a823-f599862a9372","type":"DataRange1d"},{"attributes":{},"id":"d13eb75e-592c-4ae1-b81b-615fc3973e06","type":"LinearScale"},{"attributes":{"overlay":{"id":"c8a98efe-18d2-4a63-a428-8e3fd043bbe9","type":"BoxAnnotation"},"plot":{"id":"9902b487-6f2e-482f-a26c-8af6206de65e","subtype":"Figure","type":"Plot"}},"id":"11df3055-b17a-4575-85e1-3710080e685a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"9902b487-6f2e-482f-a26c-8af6206de65e","subtype":"Figure","type":"Plot"}},"id":"881609fd-0550-4a55-b32a-efeb2fbd8af2","type":"SaveTool"},{"attributes":{"axis_label":"Google Trends Percentage of Searching for Craft Brewery","formatter":{"id":"f1cabdbf-9db4-40a5-8df5-a4ad0ca1c453","type":"BasicTickFormatter"},"plot":{"id":"9902b487-6f2e-482f-a26c-8af6206de65e","subtype":"Figure","type":"Plot"},"ticker":{"id":"8277a486-cfd9-49c0-8315-3e9645d2348f","type":"BasicTicker"}},"id":"08fce44f-0d12-4aef-846a-14e2ae10f405","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Google Percentage (All years) versus Support for Clinton"},"id":"1a366303-17fa-4c61-bebb-efb7313fd6c2","type":"Title"},{"attributes":{"data_source":{"id":"f147cf86-5147-40cd-8673-c8d9c80606c3","type":"ColumnDataSource"},"glyph":{"id":"297cac5a-8710-4989-a337-1aa56aa112e8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"134d4205-200d-4da5-93ab-c8a209a99dda","type":"Circle"},"selection_glyph":null},"id":"46772eaa-9851-446c-aec9-efda0a0cdc06","type":"GlyphRenderer"},{"attributes":{"axis_label":"Percentage who voted for Clinton","formatter":{"id":"b8ee4041-31c8-44fd-bc59-a20f7182f488","type":"BasicTickFormatter"},"plot":{"id":"9902b487-6f2e-482f-a26c-8af6206de65e","subtype":"Figure","type":"Plot"},"ticker":{"id":"d24af0a4-972a-4f2a-a185-f512f10174da","type":"BasicTicker"}},"id":"9dbfc625-2b8d-43a2-899b-bf856ef68f97","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"clinton_per"},"y":{"field":"craft_beer_search"}},"id":"134d4205-200d-4da5-93ab-c8a209a99dda","type":"Circle"},{"attributes":{"factors":["Trump","Clinton"],"palette":["red","blue"]},"id":"92a6f50f-f877-4f80-b452-006ed73728f0","type":"CategoricalColorMapper"},{"attributes":{},"id":"8277a486-cfd9-49c0-8315-3e9645d2348f","type":"BasicTicker"},{"attributes":{"plot":{"id":"9902b487-6f2e-482f-a26c-8af6206de65e","subtype":"Figure","type":"Plot"}},"id":"aa9e85aa-1aea-4c57-a49b-8319d620a705","type":"PanTool"},{"attributes":{"plot":{"id":"9902b487-6f2e-482f-a26c-8af6206de65e","subtype":"Figure","type":"Plot"}},"id":"2fc3cc53-56e5-4dd5-99be-2b0b91e13aef","type":"ResetTool"},{"attributes":{},"id":"b8ee4041-31c8-44fd-bc59-a20f7182f488","type":"BasicTickFormatter"},{"attributes":{},"id":"6407c86e-c471-44a9-8628-f18db37c50a2","type":"LinearScale"},{"attributes":{"below":[{"id":"9dbfc625-2b8d-43a2-899b-bf856ef68f97","type":"LinearAxis"}],"left":[{"id":"08fce44f-0d12-4aef-846a-14e2ae10f405","type":"LinearAxis"}],"plot_height":500,"renderers":[{"id":"9dbfc625-2b8d-43a2-899b-bf856ef68f97","type":"LinearAxis"},{"id":"f47d75b2-9b4f-4000-a32c-21a07a98657d","type":"Grid"},{"id":"08fce44f-0d12-4aef-846a-14e2ae10f405","type":"LinearAxis"},{"id":"0d735333-f80f-4cc7-a9e4-27d1e1d19247","type":"Grid"},{"id":"c8a98efe-18d2-4a63-a428-8e3fd043bbe9","type":"BoxAnnotation"},{"id":"46772eaa-9851-446c-aec9-efda0a0cdc06","type":"GlyphRenderer"}],"title":{"id":"1a366303-17fa-4c61-bebb-efb7313fd6c2","type":"Title"},"tool_events":{"id":"0b72ca80-d77c-4870-84f5-07e777edab97","type":"ToolEvents"},"toolbar":{"id":"cec2784e-9f9e-48ae-8294-dee0a3007524","type":"Toolbar"},"x_range":{"id":"52150d46-2882-4fa9-a823-f599862a9372","type":"DataRange1d"},"x_scale":{"id":"6407c86e-c471-44a9-8628-f18db37c50a2","type":"LinearScale"},"y_range":{"id":"9ac41d04-c461-40ac-b358-1d5457c739da","type":"DataRange1d"},"y_scale":{"id":"d13eb75e-592c-4ae1-b81b-615fc3973e06","type":"LinearScale"}},"id":"9902b487-6f2e-482f-a26c-8af6206de65e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"9902b487-6f2e-482f-a26c-8af6206de65e","subtype":"Figure","type":"Plot"}},"id":"8235f551-f4ce-4117-9f68-805bb1268927","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"aa9e85aa-1aea-4c57-a49b-8319d620a705","type":"PanTool"},{"id":"8235f551-f4ce-4117-9f68-805bb1268927","type":"WheelZoomTool"},{"id":"11df3055-b17a-4575-85e1-3710080e685a","type":"BoxZoomTool"},{"id":"2fc3cc53-56e5-4dd5-99be-2b0b91e13aef","type":"ResetTool"},{"id":"4c09e4d7-c84d-435b-89fb-b1c6fa6c77df","type":"HoverTool"},{"id":"881609fd-0550-4a55-b32a-efeb2fbd8af2","type":"SaveTool"}]},"id":"cec2784e-9f9e-48ae-8294-dee0a3007524","type":"Toolbar"},{"attributes":{},"id":"0b72ca80-d77c-4870-84f5-07e777edab97","type":"ToolEvents"}],"root_ids":["9902b487-6f2e-482f-a26c-8af6206de65e"]},"title":"Bokeh Application","version":"0.12.6"}};
    var render_items = [{"docid":"0cd620ee-4dc5-4394-abd0-f1111b5ec6a3","elementid":"44f085cd-6c72-4e11-8ae3-1e01f5834c4b","modelid":"9902b487-6f2e-482f-a26c-8af6206de65e"}];
    
    Bokeh.embed.embed_items(docs_json, render_items);
  });
};
if (document.readyState != "loading") fn();
else document.addEventListener("DOMContentLoaded", fn);
})();

