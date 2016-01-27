import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants
import javax.xml.xpath.XPathFactory
import java.text.NumberFormat

/**
 * Created by mongoose on 1/27/2016.
 */
class Template_eMag extends ITemplate {

    public Template_eMag(search_keyword) {

        cfg = [
                siteID: 'emag',
                url : "http://www.emag.ro/search/${search_keyword}",
                file: 'ju6400 - cautare - eMAG.ro.html',
                products: [
                        [
                                name: '//*[@id="products-holder"]/div[2]/form/h2/a',
                                price: '//*[@id="pret2"]/div/div[1]/div/span[3]/span[1]'
                        ],
                        [
                                name: '//*[@id="products-holder"]/div[3]/form/h2/a',
                                price: '//*[@id="pret2"]/div/div[1]/div/span[3]/span[1]'
                        ],
                        [
                                name: '//*[@id="products-holder"]/div[4]/form/h2/a',
                                price: '//*[@id="pret2"]/div/div[1]/div/span[3]/span[1]'
                        ]
                ]
        ]
    }

    @Override
    def run() {

        def doc = getDOM();

        // use xpath to find element
        def XPath xpath = XPathFactory.newInstance().newXPath();

        def results = [];

        def closure = {

            String name = (String) xpath.evaluate(it.name, doc, XPathConstants.STRING).trim();
            String price_str =  (String) xpath.evaluate(it.price, doc, XPathConstants.STRING).trim();

            if (price_str) {
                NumberFormat nf = NumberFormat.getInstance(Locale.ITALIAN);
                float price = nf.parse(price_str);

                results.push( [ name: name, price: price ]);
            }
        };

        cfg.products.each closure;

        return results;
    }
}
