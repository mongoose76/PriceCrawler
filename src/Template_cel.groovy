import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants
import javax.xml.xpath.XPathFactory
import java.text.NumberFormat

/**
 * Created by mongoose on 1/27/2016.
 */
class Template_cel extends ITemplate {

    public Template_cel(search_keyword) {

        cfg = [
                siteID: 'cel',
                url : "http://www.cel.ro/cauta/${search_keyword}/1/1",
                file: "ju6400_2.html",
                products: [
                        [
                                name: '//*[@id="bodycode"]/table/tbody/tr[4]/td/div/div[2]/div[2]/div[2]/h2/a',
                                price: '//*[@id="bodycode"]/table/tbody/tr[4]/td/div/div[2]/div[2]/div[2]/div[3]/b[1]'
                        ],
                        [
                                name: '//*[@id="bodycode"]/table/tbody/tr[4]/td/div/div[2]/div[3]/div[2]/h2/a',
                                price: '//*[@id="bodycode"]/table/tbody/tr[4]/td/div/div[2]/div[3]/div[2]/div[3]/b[1]'
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
1
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
