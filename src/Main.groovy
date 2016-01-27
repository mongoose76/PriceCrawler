def siteID = 'emag';

// initialize parse template
def ITemplate tpl = TemplateFactory.get(siteID);

// parse the contents and fetch product information
def results = tpl.run();

// print results
println "results ============> " + results;