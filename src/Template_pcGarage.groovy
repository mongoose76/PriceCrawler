import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants
import javax.xml.xpath.XPathFactory
import java.text.NumberFormat

/**
 * Created by mongoose on 1/27/2016.
 */
class Template_pcGarage extends ITemplate {

    public Template_pcGarage(search_keyword) {

        cfg = [
                siteID: 'pcgarage',
                url : "http://www.pcgarage.ro/cauta/${search_keyword}",
                file: 'Cautare ju6400_ 7 rezultate - PC Garage.html',

                products: [
                        [
                                name: '//*[@id="listing-right"]/div[3]/div[1]/div[2]/div[2]/div[1]/a',
                                price: '//*[@id="listing-right"]/div[3]/div[1]/div[2]/div[3]/div[1]/p'
                        ],
                        [
                                name: '//*[@id="listing-right"]/div[3]/div[2]/div/div[2]/div[1]/a',
                                price: '//*[@id="listing-right"]/div[3]/div[2]/div/div[3]/div[1]/p'
                        ],
                        [
                                name: '//*[@id="listing-right"]/div[3]/div[3]/div/div[2]/div[1]/a/b[1]',
                                price: '//*[@id="listing-right"]/div[3]/div[3]/div/div[3]/div[1]/p'
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
