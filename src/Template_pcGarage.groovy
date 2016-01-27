import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants
import javax.xml.xpath.XPathFactory

/**
 * Created by mongoose on 1/27/2016.
 */
class Template_pcGarage extends ITemplate {

    public Template_pcGarage() {

        cfg = [
                siteID: 'pcgarage',
                url : 'http://www.pcgarage.ro/cauta/samsung+ju7000',
                file: 'Cautare ju7000_ 2 rezultate - PC Garage.html',
                xpath: '//*[@id="listing-right"]/div[3]/div[1]/div/div[2]/div[1]/a'
        ]
    }

    @Override
    def run() {

        def doc = getDOM();

        // use xpath to find element
        def XPath xpath = XPathFactory.newInstance().newXPath();
        def String str = (String) xpath.evaluate(cfg.xpath, doc, XPathConstants.STRING);

        return str;
    }
}
