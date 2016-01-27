import static groovy.json.JsonOutput.*

def search_keyword = 'ju6400';

def sites = [
        //'emag',
        'pcgarage',
        'cel'
]

def closure = {


    // initialize parse template
    def ITemplate tpl = TemplateFactory.get(it, search_keyword);

    // parse the contents and fetch product information
    def results = tpl.run();

    // print results
    println it + " ============> " + prettyPrint(toJson(results));
}

sites.each closure